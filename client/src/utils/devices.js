import React, { useState, useSelector } from 'react';

// Esri imports
import esriRequest from '@arcgis/core/request';
// import esriConfig from '@arcgis/core/config';
import { FeatureLayerView } from "@arcgis/core/views/layers/FeatureLayerView";
import Editor from "@arcgis/core/widgets/Editor";
import Expand from "@arcgis/core/widgets/Expand";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Graphic from "@arcgis/core/Graphic";
import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from "@arcgis/core/widgets/Legend";
// import promiseUtils from "@arcgis/core/promiseUtils";

//   Map, WebMap, MapView, Portal, OAuthInfo, esriId, PortalQueryParams, Layer,
//   PortalItem, intl,,)

// Padding
const padding = { top: 55 };
const paddingExpanded = { top: 55, right: 250 };

// Panel
// var url = 'info';
let graphics = [];
const theColors = ["purple", "green", "orange", "blue", "red"];
const patternsLayer = {};

const Devices = props => {
  let baseMap = props.mapState;
  let view = props.viewState;

  let ptLocationsLayer = createAreasLayer();

  // const [ jsonData, setJsonData ] = useState({});

  let uniquePhonesRenderer = {
    type: "unique-value",
    legendOptions: {
      title: "IDs"
    },
    field: "thecolor",
    uniqueValueInfos: [{
      value: "purple",
      symbol: {
        type: "simple-marker",
        color: [138, 43, 226],
        size: 6,
        outline: {
          color: [138, 43, 226, .5],
          size: "0.25px"
        }
      }
    }, {
      value: "green",
      symbol: {
        type: "simple-marker",
        color: [0, 255, 0],
        size: 6,
        outline: {
          color: [0, 255, 0, .5],
          size: "0.25px"
        }
      }
    }, {
      value: "orange",
      symbol: {
        type: "simple-marker",
        color: [255, 165, 0],
        size: 6,
        outline: {
          color: [255, 165, 0, .5],
          size: "0.25px"
        }
      }
    }, {
      value: "blue",
      symbol: {
        type: "simple-marker",
        color: [0, 0, 255],
        size: 6,
        outline: {
          color: [0, 0, 255, .5],
          size: "0.25px"
        }
      }
    }, {
      value: "red",
      symbol: {
        type: "simple-marker",
        color: [255, 0, 0],
        size: 6,
        outline: {
          color: [255, 0, 0, .5],
          size: "0.25px"
        }
      }
    }]
  };
  // var panel = document.getElementById("panel");
  let phoneRenderer = {
    type: "simple",  // autocasts as new SimpleRenderer()
    symbol: {
      type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
      size: 6,
      color: "blue",
      outline: {  // autocasts as new SimpleLineSymbol()
        width: 0.25,
        color: "white"
      }
    }
  };
  let phoneRenderer1 = {
    type: "simple",  // autocasts as new SimpleRenderer()
    symbol: {
      type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
      size: 6,
      color: "green",
      outline: {  // autocasts as new SimpleLineSymbol()
        width: 0.25,
        color: "white"
      }
    }
  };

  // document.getElementById("topNavGavel").addEventListener('click', queryDevices(baseMap, view));
  
  const queryDevices = (baseMap, view) => {

    // const map = document.getElementById("map-view-container");
  
    // let graphics = [];
    // let ptLocationsLayer = new FeatureLayer();
    ptLocationsLayer = baseMap.layers.items[0];
    ptLocationsLayer.queryFeatures().then(function (results) {
      //console.log(results.features.length);
      let lString = [];
      results.features.forEach(function (feat) {
        console.log(feat.attributes);
        var startDT = new Date(document.getElementById("startTime").value);
        var formatted_startdate = startDT.getFullYear() + "-" + appendLeadingZeroes(startDT.getMonth() + 1) + "-" + appendLeadingZeroes(startDT.getDate()) + "T" + appendLeadingZeroes(startDT.getHours()) + ":" + appendLeadingZeroes(startDT.getMinutes()) + ":" + appendLeadingZeroes(startDT.getSeconds()) + "Z";
        var endDT = new Date(document.getElementById("endTime").value);
        var formatted_enddate = endDT.getFullYear() + "-" + appendLeadingZeroes(endDT.getMonth() + 1) + "-" + appendLeadingZeroes(endDT.getDate()) + "T" + appendLeadingZeroes(endDT.getHours()) + ":" + appendLeadingZeroes(endDT.getMinutes()) + ":" + appendLeadingZeroes(endDT.getSeconds()) + "Z";
        //console.log(formatted_startdate);
        var theDict = { "longitude": feat.geometry.longitude, "latitude": feat.geometry.latitude, "radius": document.getElementById("inputDistance").value, "startDate": formatted_startdate, "endDate": formatted_enddate };
        lString.push(theDict);
      });
  
      var data = {
        'areas': lString
      };
  
      var theQuery = JSON.stringify(data);
      console.log('Query Devices: '.theQuery);
      //var theURLParams = "venntel_integration?theparams=1";
      var theURLParams = "http://localhost:5000/api/mock-data?data=" + theQuery;
      var mockURLParams = "http://localhost:5000/api/mock-data";
      console.log(theURLParams);
  
      var theSignalCounts = [];
  
      const requestHeaders = new Headers({
        "Accept": "application/json",
        "Content-Type": "application/json",
        // "Authorization": "995dba95-c33d-456b-a7ea-3fd512e60894"
      });
  
      // TODO: Add Async / Await
      esriRequest(mockURLParams, { header: requestHeaders, responseType: "json" }).then(function (response) {
        console.log('inside request');
        var json = response.data;
        console.log(JSON.stringify(json));
        var countAreas = Object.keys(json.locationData.areas).length;
        var counter = 0;
        console.log(JSON.stringify(json));
        for (var y = 0; y < countAreas; y++) {
          var countIDs = Object.keys(json.locationData.areas[y].registrationIDs).length;
          for (var i = 0; i < countIDs; i++) {
            //console.log("i is : " + i)
            var countSignals = Object.keys(json.locationData.areas[y].registrationIDs[i].signals).length;
            var theID = { "registrationID": json.locationData.areas[y].registrationIDs[i].registrationID, "signalcount": countSignals };
            theSignalCounts.push(theID);
            for (var x = 0; x < countSignals; x++) {
              //console.log("x is : " + x)
              //console.log(JSON.stringify(json.locationData.areas[y].registrationIDs[i].signals[x].longitude));
              //console.log(JSON.stringify(json.locationData.areas[y].registrationIDs[i].signals[x].latitude));
              const point = {
                type: "point", // autocasts as new Point()
                longitude: json.locationData.areas[y].registrationIDs[i].signals[x].longitude,
                latitude: json.locationData.areas[y].registrationIDs[i].signals[x].latitude
              };
              const pointGraphic = new Graphic({
                geometry: point,
                attributes: {
                  "OBJECTID": counter,
                  "registrationID": json.locationData.areas[y].registrationIDs[i].signals[x].registrationID,
                  "ipAddress": json.locationData.areas[y].registrationIDs[i].signals[x].ipAddress,
                  "flags": json.locationData.areas[y].registrationIDs[i].signals[x].flags,
                  "timestamp": json.locationData.areas[y].registrationIDs[i].signals[x].timestamp
                }
              });
              graphics.push(pointGraphic)
              counter++;
            }
  
          }
        }
        //console.log(theSignalCounts);
        const resultsLayer = createLayer(graphics, "Results", 11);
        const listOfIDs = theSignalCounts.sort((a, b) => Number(b.signalcount) - Number(a.signalcount));
  
        console.log(listOfIDs);
  
        view.when(function () {
          view.popup.autoOpenEnabled = true; //disable popups
  
          // Create the Editor
          var editor = new Editor({
            view: view
          });
  
          view.ui.add(editor, "top-right");
          view.ui.add("queryDiv", "top-right");
          var layerList = new LayerList({
            view: view,
            listItemCreatedFunction: function (event) {
              const item = event.item;
              /* if (item.layer.type != "group") {
                // don't show legend twice
                item.panel = {
                  content: "legend",
                  open: true
                };
              } */
            }
          });
          var llExpand = new Expand({
            view: view,
            content: layerList
          });
          // Add widget to the top right corner of the view
          view.ui.add(llExpand, "bottom-left");
          var legend = new Legend({
            view: view,
            layerInfos: [{
              layer: patternsLayer,
              title: "Legend"
            }]
          });
  
          view.ui.add(legend, "bottom-right");
        });
        baseMap.layers.add(ptLocationsLayer);
        baseMap.layers.add(resultsLayer);
      });
    });
  }
  
  // var searchWidget = new Search({
  //   view: view,
  //   //container: searchDiv
  // });
  
  // view.ui.add(searchWidget, {
  //   position: "top-right"
  // });
  
  function appendLeadingZeroes(n) {
    if (n <= 9) {
      return "0" + n;
    }
    return n
  }
  
  function createAreasLayer() {
    return new FeatureLayer({
      title: "searchAreas",
      fields: [
        {
          name: "ObjectID",
          type: "oid"
        },
        {
          name: "distance",
          type: "integer"
        },
        {
          name: "startTime",
          type: "date"
        },
        {
          name: "endTime",
          type: "date"
        }
      ],
      objectIdField: "ObjectID",
      geometryType: "point",
      spatialReference: { wkid: 102100 },
      source: [], // adding an empty feature collection
      renderer: {
        type: "simple",
        symbol: {
          type: "web-style", // autocasts as new WebStyleSymbol()
          styleName: "Esri2DPointSymbolsStyle",
          name: "landmark"
        }
      },
      popupTemplate: {
        title: "{distance}, {startTime}, {endTime}"
      }
    });
  }
  
  function createFeatures(graphics) {
    var setGraphics = [];
    if (graphics.length > 0) {
      var processCounter = 0;
      for (var i = 0; i < graphics.length; i++) {
        if (processCounter == 1000) {
          patternsLayer = createLayer1(setGraphics, "Patterns", 10);
          baseMap.add(patternsLayer);
          setGraphics = [];
          //console.log("created patternsLayer");
        }
        else if (processCounter != 0 && (processCounter % 1000) === 0) {
          console.log(setGraphics);
          var edits = {
            addFeatures: setGraphics
          };
          patternsLayer.applyEdits(edits)
          setGraphics = [];
        }
        else {
          setGraphics.push(graphics[i]);
        }
        processCounter++;
      }
    }
    return "success";
  }
  
  // Creates a client-side FeatureLayer from an array of graphics
  function createLayer(graphics) {
    //console.log(graphics);
    return new FeatureLayer({
      source: graphics,
      objectIdField: "OBJECTID",
      fields: [
        {
          name: "OBJECTID",
          type: "oid"
        },
        {
          name: "registrationID",
          type: "string"
        },
        {
          name: "ipAddress",
          type: "string"
        },
        {
          name: "flags",
          type: "integer"
        },
        {
          name: "timestamp",
          type: "date"
        }
      ],
      popupTemplate: {
        // autocast as esri/PopupTemplate
        title: "{RegistrationID} at {timestamp}",
        content: "Flags are {flags} </br> ipAddress is {ipAddress}",
      },
      renderer: phoneRenderer
    });
  }
  
  //  Creates a client-side FeatureLayer from an array of graphics
  function createLayer1(graphics, theTitle, id) {
    //console.log(graphics);
  
    return new FeatureLayer({
      source: graphics,
      title: theTitle,
      objectIdField: "OBJECTID",
      fields: [
        {
          name: "OBJECTID",
          type: "oid"
        },
        {
          name: "registrationID",
          type: "string"
        },
        {
          name: "ipAddress",
          type: "string"
        },
        {
          name: "flags",
          type: "integer"
        },
        {
          name: "timestamp",
          type: "date"
        },
        {
          name: "thecolor",
          type: "string"
        }
      ],
      outFields: ["*"],
      popupTemplate: {
        // autocast as esri/PopupTemplate
        title: "{RegistrationID} at {timestamp}",
        content: "Color is {thecolor}, Flags are {flags} </br> ipAddress is {ipAddress}",
      },
      renderer: uniquePhonesRenderer
    });
    
  }

  return (
    <div></div>
  )
};

export default Devices
