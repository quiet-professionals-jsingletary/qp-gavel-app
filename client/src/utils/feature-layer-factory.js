import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { promiseUtils } from "@arcgis/core/core/promiseUtils";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import Locator from "@arcgis/core/tasks/Locator";

const view = new MapView({
  map: new Map({
    basemap: "gray-vector"
  }),
  container: "viewDiv",
  extent: {
    spatialReference: {
      wkid: 102100
    },
    xmin: -14488954,
    ymin: 3457304,
    xmax: -10656095,
    ymax: 5250211
  },
  popup: {
    dockEnabled: true,
    dockOptions: {
      position: "top-right",
      breakpoint: false
    }
  }
});

/**
 * Fetches a list of images and returns a list of promises
 */
function fetchImages() {
  const numPhotos = 18;
  const graphicPromises = [];
  const baseUrl =
    "https://arcgis.github.io/arcgis-samples-javascript/sample-data/featurelayer-collection/photo-";

  for (let i = 1; i <= numPhotos; i++) {
    const url = baseUrl + i.toString() + ".jpg";
    const graphicPromise = exifToGraphic(url, i);
    graphicPromises.push(graphicPromise);
  }

  return promiseUtils.eachAlways(graphicPromises);
}

// Filters only promises that resolve with valid values (a graphic
// in this case) and resolves them as an array of graphics.
// In other words, each attempt at fetching an image returns a promise.
// Images that fail to fetch will be filtered out of the response array
// so the images that successfully load can be added to the layer.
function getFeaturesFromPromises(eachAlwaysResponses) {
  return eachAlwaysResponses
    .filter(function (graphicPromise) {
      return graphicPromise.value;
    })
    .map(function (graphicPromise) {
      return graphicPromise.value;
    });
}

const locatorTask = new Locator({
  url:
    "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
});

//  Creates a client-side FeatureLayer from an array of graphics
function createLayer(graphics) {
  return new FeatureLayer({
    source: graphics,
    objectIdField: "OBJECTID",
    fields: [
      {
        name: "OBJECTID",
        type: "oid"
      },
      {
        name: "url",
        type: "string"
      }
    ],
    popupTemplate: {
      title: function (event) {
        return locatorTask
          .locationToAddress({
            location: event.graphic.geometry
          })
          .then(function (response) {
            return response.address;
          })
          .catch(function (error) {
            return "The middle of nowhere";
          });
      },
      content: "<img src='{url}'>"
    },
    renderer: {
      type: "simple",
      symbol: {
        type: "text",
        color: "#7A003C",
        text: "\ue661",
        font: {
          size: 20,
          family: "CalciteWebCoreIcons"
        }
      }
    }
  });
}

// Adds a given layer to the map in the view
function addToView(layer) {
  view.map.add(layer);
}

/**
 * Fetches and loads an image from a url and gets the latitude/longitude
 * GPS data from the EXIF data of the image. Returns a promise that
 * resolves to a Graphic with a point geometry representing the location
 * where the photo was taken.
 */
function exifToGraphic(url, id) {
  return promiseUtils.create(function (resolve, reject) {
    const image = document.createElement("img");
    image.src = url;
    image.onload = function () {
      image.load = image.onerror = null;
      EXIF.getData(image, function () {
        const latitude = EXIF.getTag(this, "GPSLatitude");
        const latitudeDirection = EXIF.getTag(this, "GPSLatitudeRef");
        const longitude = EXIF.getTag(this, "GPSLongitude");
        const longitudeDirection = EXIF.getTag(this, "GPSLongitudeRef");

        if (!latitude || !longitude) {
          reject(
            new Error(
              "Photo doesn't contain GPS information: ",
              this.src
            )
          );
          return;
        }

        const location = new Point({
          latitude: dmsDD(latitude, latitudeDirection),
          longitude: dmsDD(longitude, longitudeDirection)
        });

        resolve(
          new Graphic({
            geometry: location,
            attributes: {
              url: url,
              OBJECTID: id
            }
          })
        );
      });
    };

    image.onerror = function () {
      image.load = image.onerror = null;
      reject(new Error("Error while loading the image"));
    };
  });
}

// Promise Chain to satisfy FeatureLayer
view
  .when()
  .then(fetchImages)
  .then(getFeaturesFromPromises)
  .then(createLayer)
  .then(addToView)
  .catch(function (e) {
    console.error("Creating FeatureLayer from photos failed", e);
  });

// TODO: Modularize this as utility
// Converts a DMS coordinate to decimal degrees
function dmsDD([degrees, minutes, seconds], direction) {
  let dd = degrees + minutes / 60 + seconds / 3600;
  if (direction === "S" || direction === "W") {
    dd *= -1;
  }
  return dd;
}
