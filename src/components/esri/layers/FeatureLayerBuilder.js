 /**--------------------------------------------------------------------------------- ->
 *  ┌────────────────────────────────────┐
 *  │ |> GAVEL - Feature Layer Builder   │
 *  └────────────────────────────────────┘
 * 
 *  @description:   'Builder component to convert lat/long coordinates to Fezaature Layer'
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
import Expand from '@arcgis/core/widgets/Expand';
import Editor from '@arcgis/core/widgets/Editor';
import LayerList from '@arcgis/core/widgets/LayerList';
import Legend from '@arcgis/core/widgets/Legend';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { FeatureLayerView } from '@arcgis/core/views/layers/FeatureLayerView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
// import promiseUtils from '@arcgis/core/promiseUtils';

// QP
import areaQuery from '../../../redux/reducers/area-query';

let patternsLayer = undefined;
let resultsLayer = undefined;

// #region [component] 
const featureLayerBuilder = (baseMap, mapView, payload) => {
  console.log('inside FeatureLayerBuilder');
  // const { baseMap, mapView, payload } = props;

  const [baseMapState, setBaseMapState] = useState({});
  const [mapViewState, setMapViewState] = useState({});

  const graphicsLayerSignals = new GraphicsLayer({ title: "Results" });
  const resDataArray = payload.locationData.areas;
  // Point Counter
  let theSignalCounts = 0;

  // Padding
  const padding = { top: 55 };
  const paddingExpanded = { top: 55, right: 250 };

  // Panel
  // let url = 'info';
  let graphics = [];
  let listOfIDs = [];
  // let resultsLayer = [];
  // let theSignalCounts = undefined;
  // let ptLocationsLayer = undefined;

  const theColors = ["purple", "green", "orange", "blue", "red"];

  // Widgets
  let legend = new Legend({
    view: mapView,
    layerInfos: [{
      layer: patternsLayer,
      title: "Legend"
    }]
  });

  let expandLegend = new Expand({
    view: mapView,
    content: legend
  });

  mapView.ui.add(expandLegend, "bottom-left");

  /*/
   *  ┌─────────────────────────────┐
   *  │ |> Local & Global States    │
   *  └─────────────────────────────┘
  /*/
  // useEffect(() => {
  //   setBaseMapState(baseMap);
  //   setMapViewState(mapView);

  //   // buildFeatureLayer(resDataArray, baseMapState, mapViewState)
  //   //   .then(() => {
  //   //     return createFeatureLayer();
  //   // });

  // }, []);

  // const [ jsonData, setJsonData ] = useState({});
  // const areaQueryState = useSelector(state => state.areaQuery);
  // const areaQueryState = payload;

  // const createFeatureLayer = null;

  // const resJson = areaQueryState;

  // document.getElementById("topNavGavel").addEventListener('click', queryDevices(baseMap, view));

  // useEffect(() => {
  //   return ptLocationsLayer = createFeatureLayer();
  // }, []);

  // mapView.when()
  //   .then(setBaseMapState(baseMap))
  //   .then(setMapViewState(mapView))
  //   .then(buildFeatureLayer(areaQueryState, baseMap, mapView))
  //   .then(ptLocationsLayer = createFeatureLayer())
  //   .catch(e => {
  //     console.error("Creating FeatureLayer failed:", e);
  //   });

  //console.log(theSignalCounts);
  // const resultsLayer = createFeatureLayer(graphics, "Results");

  // console.log('List of IDs: ', listOfIDs);
  
  // TODO: Init `buildFeatueLayer` function from `useEffect()` hook
  const buildFeatureLayer = (resDataArray, baseMapProp, mapViewProp) => {
    // TODO: Clean up code when time permits (formatting & consistency)
    console.log('inside buildFeatureLayer()');
    let json = resDataArray;
    // let resultsLayer = undefined;
    const view = mapViewProp;
    const map = baseMapProp;
    console.log(JSON.stringify(json));

    // view.when(() => {
    //   console.log('view.when(1)');
    //   // setBaseMapState(baseMap);
    //   // setMapViewState(mapView);
    // }).then(() => {
    //   console.log('view.when(2)');
    // }).then(() => {
    //   console.log('view.when(3)');
    // }).catch(e => {
    //   handleNoSignalCounts(e);
    // });

    let counter = 0;
    let countSignals = 0;
    
    console.log('Signals Added', graphics);
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
          };

          // Create a Point
          const point = new Point({
            type: "point",
            longitude: lon,
            latitude: lat,
            spatialReference: { wkid: 102100 }
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

          // const pointGraphic = new Graphic({d
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
              "timestamp": json[i].registrationIDs[j].signals[k].timestamp,
              "thecolor": ""
            }

          });
          // console.log('Ready to Add Point...');
          graphics.push(pointGraphic);

          graphicsLayerSignals.add(pointGraphic);

        });

      });

    });

    console.log('graphics: ', graphics);
    return createFeatures(graphics, view);
    // return graphics;
  }
  buildFeatureLayer(resDataArray, baseMap, mapView);

  async function createFeatures(graphics, view) {
    console.log('inside createFeatures()');
    // let resultsLayer = undefined;
    // let patternsLayer = undefined;
    let setGraphics = [];
    if (graphics.length > 0) {
      let processCounter = 0;
      for (let i = 0; i < graphics.length; i++) {
        if (processCounter === 1000) {
          patternsLayer = createFeatureLayer(setGraphics, "Patterns");

          view.map.add(patternsLayer);
          setGraphics = [];
          //console.log("created patternsLayer");
          // return patternsLayer;
        }
        else if (processCounter != 0 && (processCounter % 1000) == 0) {
          console.log(setGraphics);
          let edits = {
            addFeatures: setGraphics
          };
          patternsLayer.applyEdits(edits);
          setGraphics = [];
        }
        else {
          setGraphics.push(graphics[i]);
        }
        processCounter++;
      }

      const resultsLayer = createFeatureLayer(graphics, "Results");
      // listOfIDs = theSignalCounts.sort((a, b) => Number(b.signalcount) - Number(a.signalcount));
      // console.log(listOfIDs);
      baseMap.layers.add(resultsLayer);
      // return resultsLayer;
    }
    return "success";
    // return graphics;
  }

  // function returnLayerToMap(layer) {
  //   return layer;
  // }

  // mapView
  //   .when(buildFeatureLayer(resDataArray, baseMap, mapView))
  //   .then(createFeatures)
  //   // .then((res) => {
  //   //   return 
  //   // })
  //   .then(res => {
  //     // return resultsLayer;
  //   })
  //   .catch(e => {
  //     // TODO: Create modal popup alerting user of 0 results and try again
  //     handleNoSignalCounts(e);
  //   }
  // );

  return resultsLayer;
}
// #endregion

// #region [qp] 
// --Display "Top 5" Reference IDs (reoccuring) style properties 
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
}

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

// --Creates a client-side FeatureLayer from an array of graphics
const createFeatureLayer = (graphics, title) => {
  //console.log(graphics);
  return new FeatureLayer({
    title: title,
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
    source: graphics, // adding an empty feature collection
    objectIdField: "OBJECTID",
    geometryType: point,
    spatialReference: { wkid: 102100 },
    popupTemplate: {
      // autocast as esri/PopupTemplate
      title: "{RegistrationID} at {timestamp}",
      content: "Flags are {flags} </br> ipAddress is {ipAddress}",
    },
    renderer: phoneRenderer
  });
}

// Creates a client-side FeatureLayer with a custom color
const createUniqueLayer = async (graphics, title, id) => {
  console.log('inside createUniqueLayer()');
  return new FeatureLayer({
    title: title,
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
    source: graphics, // adding an empty feature collection
    objectIdField: "OBJECTID",
    geometryType: point,
    spatialReference: { wkid: 102100 },
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
}

/*/
 *  ┌─────────────────────┐
 *  │ |> PropTypes        │
 *  └─────────────────────┘
/*/
// FeatureLayerBuilder.propTypes = {
//   baseMap: PropTypes.string,
//   mapView: PropTypes.string,
//   payload: PropTypes.arrayOf(PropTypes.object),
// }

// Error Handler
const handleNoSignalCounts = error => {
  console.log('GAVEL 9000: ', error);
  alert('I\'m sorry... I\'m afraid I could not locate any signals.');
}
// #endregion

export { featureLayerBuilder };
