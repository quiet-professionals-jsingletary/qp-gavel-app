 /**--------------------------------------------------------------------------------- ->
 *  ┌────────────────────────────────────┐
 *  │ |> GAVEL - Feature Layer Builder   │
 *  └────────────────────────────────────┘
 * 
 *  @description:   'Builder component to convert lat/long coordinates to Feature Layer'
 *  @implements:    'JSON data object returned from search API of '
 *  @returns:       'Esri Feature Layer containing Points to render on map'
 * 
*/

import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

// Esri
import esriRequest from '@arcgis/core/request';
// import esriConfig from '@arcgis/core/config';
import { FeatureLayerView } from "@arcgis/core/views/layers/FeatureLayerView";
import Editor from "@arcgis/core/widgets/Editor";
import Expand from "@arcgis/core/widgets/Expand";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Graphic from "@arcgis/core/Graphic";
import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from "@arcgis/core/widgets/Legend";
import areaQuery from '../../../redux/reducers/area-query';
// import promiseUtils from "@arcgis/core/promiseUtils";

// QP
// import areaQuery from "../../../redux/reducers/area-query";

// Padding
const padding = { top: 55 };
const paddingExpanded = { top: 55, right: 250 };

// Panel
// let url = 'info';
let graphics = [];
let baseMap = null;
let view = null;
let theSignalCounts = null;
const theColors = ["purple", "green", "orange", "blue", "red"];
const patternsLayer = {};

// *Display "Top 5" Reference IDs (reoccuring) style properties 
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
// let panel = document.getElementById("panel");
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

const FeatureLayerBuilder = ({ baseMap, mapView }) => {
  // baseMap = props.baseMap;
  // view = props.mapView;
  theSignalCounts = 0;

  const areaQueryState = useSelector(state => state.areaQuery);
  // const resJson = areaQueryState;

  let ptLocationsLayer = createAreasLayer();

  // const [ jsonData, setJsonData ] = useState({});

  // document.getElementById("topNavGavel").addEventListener('click', queryDevices(baseMap, view));

  // useEffect(() => {
  //   buildFeatureLayer();
  // }, []);
  
  // TODO: Init `buildFeatueLayer` function from `useEffect()` hook
  const buildFeatureLayer = (resJson, baseMap, mapView) => {
  
    // TODO: Clean up code when time permits (formatting & consistency)
    console.log('inside request');
    let json = resJson.locationArea.areas;
    view = mapView;
    console.log(JSON.stringify(json));

    let counter = 0;
    let countSignals = 0;

    // json.locationData.areas[y].registrationIDs[i].signals

    const resPayload = json.map((area, i) => {

      json[i].registrationIDs.map((registrationID, j) => {

        json[i].registrationIDs[j].signals.map((signal, k) => {

          countSignals++

          let theId = { 
            "registrationID": json[i].registrationIDs[j].registrationID, 
            "signalcount": countSignals 
          }

          theSignalCounts.push(theId);

          countSignals.map((signalCount, l) => {

            const point = {
              type: "point", // autocasts as new Point()
              longitude: json[i].registrationIDs[j].signals[k].longitude,
              latitude: json[i].registrationIDs[j].signals[k].latitude
            };

            const pointGraphic = new Graphic({
              geometry: point,
              attributes: {
                "OBJECTID": i,
                "registrationID": json[i].registrationIDs[j].signals[k].registrationID,
                "ipAddress": json[i].registrationIDs[j].signals[k].ipAddress,
                "flags": json[i].registrationIDs[j].signals[k].flags,
                "timestamp": json[i].registrationIDs[j].signals[k].timestamp
              }

            });

            graphics.push(pointGraphic);
            counter++;

          });

        });

      }); 

    });

    // let countAreas = Object.keys(json.locationData.areas).length;
    // let counter = 0;

    // let countIDs = Object.keys(json.locationData.areas[y].registrationIDs).length;
    //console.log("i is : " + i)
    // let countSignals = Object.keys(json.locationData.areas[y].registrationIDs[i].signals).length;
    // let theID = { "registrationID": json.locationData.areas[y].registrationIDs[i].registrationID, "signalcount": countSignals };
    // theSignalCounts.push(theID);
    // for (let x = 0; x < countSignals; x++) {
    //console.log("x is : " + x)
    //console.log(JSON.stringify(json.locationData.areas[y].registrationIDs[i].signals[x].longitude));
    //console.log(JSON.stringify(json.locationData.areas[y].registrationIDs[i].signals[x].latitude));
    // const point = {
    //   type: "point", // autocasts as new Point()
    //   longitude: json.locationData.areas[y].registrationIDs[i].signals[x].longitude,
    //   latitude: json.locationData.areas[y].registrationIDs[i].signals[x].latitude
    // };
    // const pointGraphic = new Graphic({
    //   geometry: point,
    //   attributes: {
    //     "OBJECTID": counter,
    //     "registrationID": json.locationData.areas[y].registrationIDs[i].signals[x].registrationID,
    //     "ipAddress": json.locationData.areas[y].registrationIDs[i].signals[x].ipAddress,
    //     "flags": json.locationData.areas[y].registrationIDs[i].signals[x].flags,
    //     "timestamp": json.locationData.areas[y].registrationIDs[i].signals[x].timestamp
    //   }
    // });

    // graphics.push(pointGraphic)
    // counter++;
    // }
    // }

    //console.log(theSignalCounts);
    const resultsLayer = createLayer(graphics, "Results", 11);
    const listOfIDs = theSignalCounts.sort((a, b) => Number(b.signalcount) - Number(a.signalcount));

    console.log(listOfIDs);

    view.when(function () {
      view.popup.autoOpenEnabled = true; //disable popups

      // Create the Editor
      let editor = new Editor({
        view: view
      });

      view.ui.add(editor, "bottom-right");
      view.ui.add("queryDiv", "bottom-right");
      let layerList = new LayerList({
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
      let llExpand = new Expand({
        view: view,
        content: layerList
      });
      // Add widget to the top right corner of the view
      view.ui.add(llExpand, "bottom-left");
      let legend = new Legend({
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

    // return resPayload;
  }

  const handleNoSignalCounts = error => {
    console.log('GAVEL 9000: ', error);
    alert('I\'m sorry... I\'m afraid I could not locate any signals.');
  }
  
  buildFeatureLayer(areaQueryState, baseMap, mapView)
  
  // let searchWidget = new Search({
  //   view: view,
  //   //container: searchDiv
  // });
  
  // view.ui.add(searchWidget, {
  //   position: "top-right"
  // });
  
  // function appendLeadingZeroes(n) {
  //   if (n <= 9) {
  //     return "0" + n;
  //   }
  //   return n
  // }
  
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
    let setGraphics = [];
    if (graphics.length > 0) {
      let processCounter = 0;
      for (let i = 0; i < graphics.length; i++) {
        if (processCounter == 1000) {
          patternsLayer = createLayer1(setGraphics, "Patterns", 10);
          baseMap.add(patternsLayer);
          setGraphics = [];
          //console.log("created patternsLayer");
        }
        else if (processCounter != 0 && (processCounter % 1000) === 0) {
          console.log(setGraphics);
          let edits = {
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

  return buildFeatureLayer;
}

// FeatureLayerBuilder.propTypes = {
//   resJsonProp: PropTypes.arrayOf(PropTypes.object),
//   baseMapProp: PropTypes.string,
//   mapViewProp: PropTypes.string,
// }

export default FeatureLayerBuilder;
// export { buildFeatureLayer };
