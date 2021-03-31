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
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Esri
import esriRequest from '@arcgis/core/request';
// import esriConfig from '@arcgis/core/config';
import { FeatureLayerView } from '@arcgis/core/views/layers/FeatureLayerView';
import Editor from '@arcgis/core/widgets/Editor';
import Expand from '@arcgis/core/widgets/Expand';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
// import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import LayerList from '@arcgis/core/widgets/LayerList';
import Legend from '@arcgis/core/widgets/Legend';
import areaQuery from '../../../redux/reducers/area-query';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
// import promiseUtils from '@arcgis/core/promiseUtils';

// QP
// import areaQuery from '../../../redux/reducers/area-query';

// function createAreasLayer() {
//   return new FeatureLayer({
//     title: "searchAreas",
//     fields: [
//       {
//         name: "ObjectID",
//         type: "oid"
//       },
//       {
//         name: "distance",
//         type: "integer"
//       },
//       {
//         name: "startTime",
//         type: "date"
//       },
//       {
//         name: "endTime",
//         type: "date"
//       }
//     ],
//     objectIdField: "ObjectID",
//     geometryType: "point",
//     spatialReference: { wkid: 102100 },
//     source: [], // adding an empty feature collection
//     renderer: {
//       type: "simple",
//       symbol: {
//         type: "web-style", // autocasts as new WebStyleSymbol()
//         styleName: "Esri2DPointSymbolsStyle",
//         name: "landmark"
//       }
//     },
//     popupTemplate: {
//       title: "{distance}, {startTime}, {endTime}"
//     }
//   });
// }

const graphicsLayerSignals = new GraphicsLayer({ title: "Results" });

// #region [component] 
const FeatureLayerBuilder = (baseMap, mapView, isDataLoaded, payload) => {
  console.log('inside FeatureLayerBuilder');
  // Point Counter
  let theSignalCounts = 0;

  // Padding
  const padding = { top: 55 };
  const paddingExpanded = { top: 55, right: 250 };

  // Panel
  // let url = 'info';
  // baseMap = undefined;
  let graphics = [];
  // let view = undefined;
  // let theSignalCounts = undefined;
  let ptLocationsLayer = undefined;

  const theColors = ["purple", "green", "orange", "blue", "red"];
  const patternsLayer = {};

  /*/
   *  ┌─────────────────────────────┐
   *  │ |> Local & Global States    │
   *  └─────────────────────────────┘
  /*/
  const [baseMapState, setBaseMapState] = useState({});
  const [mapViewState, setMapViewState] = useState({});
  // const [ jsonData, setJsonData ] = useState({});
  // const areaQueryState = useSelector(state => state.areaQuery);
  const areaQueryState = payload.locationArea.areas;

  // const createLayer1 = null;

  // const resJson = areaQueryState;

  // document.getElementById("topNavGavel").addEventListener('click', queryDevices(baseMap, view));

  useEffect(() => {
    setBaseMapState(baseMap);
    setMapViewState(mapView);
    if (isDataLoaded) {
      buildFeatureLayer(areaQueryState, baseMapState, mapViewState);
    }
    // return ptLocationsLayer = createLayer1();
  }, []);

  // useEffect(() => {
  //   return ptLocationsLayer = createLayer1();
  // }, []);

  // mapView.when()
  //   .then(setBaseMapState(baseMap))
  //   .then(setMapViewState(mapView))
  //   .then(buildFeatureLayer(areaQueryState, baseMap, mapView))
  //   .then(ptLocationsLayer = createLayer1())
  //   .catch(e => {
  //     console.error("Creating FeatureLayer failed:", e);
  //   });

  //console.log(theSignalCounts);
  // const resultsLayer = createLayer1(graphics, "Results");

  // console.log('List of IDs: ', listOfIDs);
  
  // TODO: Init `buildFeatueLayer` function from `useEffect()` hook
  const buildFeatureLayer = async (resJson, baseMapState, mapViewState) => {
  
    // TODO: Clean up code when time permits (formatting & consistency)
    console.log('inside buildFeatureLayer()');
    let json = resJson;
    view = mapViewState;
    console.log(JSON.stringify(json));

    view.when(() => {
      console.log('view.when(1)');
    }).then(() => {
      console.log('view.when(2)');
    }).then(() => {
      console.log('view.when(3)');
    }).catch(e => {
      handleNoSignalCounts(e);
    });

    let counter = 0;
    let countSignals = 0;
    
    // json.locationData.areas[y].registrationIDs[i].signals
    console.log('Signals Layer Added', graphicsLayerSignals);
    // _Areas
    json.map((area, i) => {
      // _RegIDs
      json[i].registrationIDs.map((regID, j) => {
        // _Signals
        json[i].registrationIDs[j].signals.map((signal, k) => {

          const lon = signal.longitude;
          const lat = signal.latitude;
          const regId = signal.registrationID;

          let theId = {
            "registrationID": regId,
            "signalCount": counter
          }

          // Create a Point
          const point = new Point({
            type: "point",
            longitude: lon,
            latitude: lat
          });

          // #e8ff00|#97a41c|#3b434f|#3f69a2|#4a99ff
          const colors = ["#e8ff00", "#97a41c", "#3b434f", "#3f69a2", "#4a99ff"];
          const simpleMarkerSymbol = {
            type: "simple-marker",
            color: colors[0],
            outline: {
              color: colors[1],
              width: 1
            }
          };

          // const pointGraphic = new Graphic({
          //   geometry: point,
          //   symbol: simpleMarkerSymbol
          // });

          const pointGraphic = new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol,
            attributes: {
              "OBJECTID": k,
              "registrationID": json[i].registrationIDs[j].signals[k].registrationID,
              "ipAddress": json[i].registrationIDs[j].signals[k].ipAddress,
              "flags": json[i].registrationIDs[j].signals[k].flags,
              "timestamp": json[i].registrationIDs[j].signals[k].timestamp
            }

          });
          // console.log('Ready to Add Point...');
          graphicsLayerSignals.layers.add(pointGraphic);
          // graphicsLayerSignals.add(pointGraphic);
          console.log('graphicsLayerSignals: ', graphicsLayerSignals);

        });

      });

    });

    return createLayer1.load().then(() => {
      console.log('FeatureLayer Loaded');
    });

    // // _Areas
    // json.map((area, i) => {
    //   // _RegIDs
    //   json[i].registrationIDs.map((registrationID, j) => {
    //     // _Signals
    //     countSignals = json[i].registrationIDs[j].signals.length;
    //     json[i].registrationIDs[j].signals.map((signal, k) => {

    //       // counter++;

    //       let theId = { 
    //         "registrationID": json[i].registrationIDs[j].registrationID, 
    //         "signalCount": counter
    //       }

    //       theSignalCounts.push(theId);

    //       countSignals.map((signal, l) => {

    //         const point = {
    //           type: "point", // autocasts as new Point()
    //           longitude: json[i].registrationIDs[j].signals[k].longitude,
    //           latitude: json[i].registrationIDs[j].signals[k].latitude
    //         };

    //         const pointGraphic = new Graphic({
    //           geometry: point,
    //           attributes: {
    //             "OBJECTID": i,
    //             "registrationID": json[i].registrationIDs[j].signals[k].registrationID,
    //             "ipAddress": json[i].registrationIDs[j].signals[k].ipAddress,
    //             "flags": json[i].registrationIDs[j].signals[k].flags,
    //             "timestamp": json[i].registrationIDs[j].signals[k].timestamp
    //           }

    //         });

    //         graphics.push(pointGraphic);
    //         counter++;
    //       });

    //     });

    //   }); 

    // });

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
 
    // function createGraphicsLayer(graphics) {
    //   let setGraphics = [];
    //   if (graphics.length > 0) {
    //     let processCounter = 0;
    //     for (let i = 0; i < graphics.length; i++) {
    //       if (processCounter == 1000) {
    //         patternsLayer = createLayer1(setGraphics, "Patterns", 10);
    //         baseMap.add(patternsLayer);
    //         setGraphics = [];
    //         console.log("created patternsLayer");
    //       }
    //       else if (processCounter != 0 && (processCounter % 1000) === 0) {
    //         console.log(setGraphics);
    //         let edits = {
    //           addFeatures: setGraphics
    //         };
    //         patternsLayer.applyEdits(edits)
    //         setGraphics = [];
    //       }
    //       else {
    //         setGraphics.push(graphics[i]);
    //       }
    //       processCounter++;
    //     }
    //   }
    //   return "success";
    // }

    // Creates a client-side FeatureLayer from an array of graphics
    // function createLayer(graphics) {
    //   //console.log(graphics);
    //   return new FeatureLayer({
    //     source: graphics,
    //     objectIdField: "OBJECTID",
    //     fields: [
    //       {
    //         name: "OBJECTID",
    //         type: "oid"
    //       },
    //       {
    //         name: "registrationID",
    //         type: "string"
    //       },
    //       {
    //         name: "ipAddress",
    //         type: "string"
    //       },
    //       {
    //         name: "flags",
    //         type: "integer"
    //       },
    //       {
    //         name: "timestamp",
    //         type: "date"
    //       }
    //     ],
    //     popupTemplate: {
    //       // autocast as esri/PopupTemplate
    //       title: "{RegistrationID} at {timestamp}",
    //       content: "Flags are {flags} </br> ipAddress is {ipAddress}",
    //     },
    //     renderer: phoneRenderer
    //   });
    // }

    // -- CreateLayer1 Bookmark

    // view.when(function () {
    //   view.popup.autoOpenEnabled = true; //disable popups

    //   // Create the Editor
    //   let editor = new Editor({
    //     view: view
    //   });

    //   view.ui.add(editor, "bottom-right");
    //   view.ui.add("queryDiv", "bottom-right");
    //   let layerList = new LayerList({
    //     view: view,
    //     listItemCreatedFunction: function (event) {
    //       const item = event.item;
    //       /* if (item.layer.type != "group") {
    //         // don't show legend twice
    //         item.panel = {
    //           content: "legend",
    //           open: true
    //         };
    //       } */
    //     }
    //   });
    //   let llExpand = new Expand({
    //     view: view,
    //     content: layerList
    //   });
    //   // Add widget to the top right corner of the view
    //   view.ui.add(llExpand, "bottom-left");
    //   let legend = new Legend({
    //     view: view,
    //     layerInfos: [{
    //       layer: patternsLayer,
    //       title: "Legend"
    //     }]
    //   });

    //   view.ui.add(legend, "bottom-right");
    // });

    // baseMap.add(ptLocationsLayer);
    // baseMap.add(resultsLayer);
    
    // return resultsLayer;
  }
  // return buildFeatureLayer;
}
// #endregion

// #region [qp] 
// *Display "Top 5" Reference IDs (reoccuring) style properties 
const uniquePhonesRenderer = {
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
const phoneRenderer = {
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
const phoneRenderer1 = {
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

// Creates a client-side FeatureLayer from an array of graphics
const createLayer1 = new FeatureLayer({
  title: "Results",
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
  objectIdField: "ObjectID",
  geometryType: "point",
  spatialReference: { wkid: 102100 },
  source: graphicsLayerSignals, // adding an empty feature collection
  // renderer: {
  //   type: "simple",
  //   symbol: {
  //     type: "web-style", // autocasts as new WebStyleSymbol()
  //     styleName: "Esri2DPointSymbolsStyle",
  //     name: "landmark"
  //   }
  // },
  renderer: uniquePhonesRenderer,
  popupTemplate: {
    // autocast as esri/PopupTemplate
    title: "{RegistrationID} at {timestamp}",
    content: "Color is {thecolor}, Flags are {flags} </br> ipAddress is {ipAddress}",
  }
});

// Error Handler
const handleNoSignalCounts = error => {
  console.log('GAVEL 9000: ', error);
  alert('I\'m sorry... I\'m afraid I could not locate any signals.');
}
// #endregion

// FeatureLayerBuilder.propTypes = {
//   resJsonProp: PropTypes.arrayOf(PropTypes.object),
//   baseMapProp: PropTypes.string,
//   mapViewProp: PropTypes.string,
// }

export default FeatureLayerBuilder;
// export { buildFeatureLayer };
