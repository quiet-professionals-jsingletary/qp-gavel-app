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
import Expand from '@arcgis/core/widgets/Expand';
import Editor from '@arcgis/core/widgets/Editor';
import LayerList from '@arcgis/core/widgets/LayerList';
import Legend from '@arcgis/core/widgets/Legend';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import { FeatureLayerView } from '@arcgis/core/views/layers/FeatureLayerView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
// import promiseUtils from '@arcgis/core/promiseUtils';
import { SpatialReference } from "@arcgis/core/geometry";

// QP
import areaQuery from '../../../redux/reducers/area-query';

let patternsLayer = undefined;
let resultsLength = undefined;
const spatialRef = new SpatialReference({ wikd: 4326 });

// #region [component] 
async function featureLayerBuilder(baseMapProp, mapViewProp, payload) {
  console.log('inside FeatureLayerBuilder');
  // const { baseMap, mapView, payload } = props;

  // const [baseMapState, setBaseMapState] = useState({});
  // const [mapViewState, setMapViewState] = useState({});
  let mapView = mapViewProp;
  let baseMap = baseMapProp;

  const graphicsLayerSignals = new GraphicsLayer({ title: "Layer Results" });
  const resDataArray = payload.locationData.areas;
  // Point Counter
  resultsLength
  // let theSignalCounts = 0;

  // Padding
  const padding = { top: 55 };
  const paddingExpanded = { top: 55, right: 250 };

  // Panel
  // let url = 'info';
  let graphics = [];
  let listOfIds = [];
  let resultsLayer = undefined;
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

  // --LayerList
  const layerList = new LayerList({
    view: mapView,
    // executes for each ListItem in the LayerList
    listItemCreatedFunction: event => {

      // The event object contains properties of the
      // layer in the LayerList widget.

      const itemSave = event.item;

      itemSave.panel = {
        content: document.getElementById("myDiv"),
        className: "esri-icon-save",
        title: "Save Layer",
        open: itemSave.hidden
      };

      //   if (item.title === "Signals") {
      //     // open the list item in the LayerList
      //     item.open = true;
      //     // change the title to something more descriptive
      //     item.title = "Signals";
      //     // set an action for zooming to the full extent of the layer
      //     item.actionsSections = [[{
      //       title: "Go to full extent",
      //       className: "esri-icon-zoom-out-fixed",
      //       id: "full-extent"
      //     }]];
      //   }
      // }
    }
  });

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

  mapView.when(() => {
    console.log('view.when(1)');
    buildFeatureLayer(resDataArray, baseMap, mapView);
    mapView.ui.add(expandLegend, "bottom-left");

    // setBaseMapState(baseMap);
    // setMapViewState(mapView);
  }).then((res) => {
    console.log('view.when(2)');
    // createFeatures(res);
  }).then((res) => {
    console.log('view.when(3)');
    // return res;
  }).catch(e => {
    handleNoSignalCounts(e);
  });

  let expandLayerList = new Expand({
    view: mapView,
    content: layerList,
    expandTooltip: "Toggle Layers",
    group: "bottom-right"
  });

  mapView.ui.add(expandLayerList, "bottom-right", 0);

  //console.log(theSignalCounts);
  // const resultsLayer = createFeatureLayer(graphics, "Results");

  // console.log('List of IDs: ', listOfIDs);
  
  // TODO: Init `buildFeatueLayer` function from `useEffect()` hook
  const buildFeatureLayer = (resDataArray, baseMapProp, mapViewProp) => {
  
    // TODO: Clean up code when time permits (formatting & consistency)
    console.log('inside buildFeatureLayer()');
    let json = resDataArray;
    // let resultsLayer = undefined;
    const mapView = mapViewProp;
    const baseMap = baseMapProp;
    console.log("DATA", JSON.stringify(json));

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
    let countResults = 0;
    
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

          // NOTE: autocasts as new Point()
          const point = new Point({
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
            },
            size: "10px"
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
              "timestamp": json[i].registrationIDs[j].signals[k].timestamp,
              "thecolor": "#3f69a2"
            }

          });
          // console.log('Ready to Add Point...');
          graphics.push(pointGraphic);
          listOfIds.push(theId);
          graphicsLayerSignals.add(pointGraphic);

        });

      });

    });

    console.log('graphics: ', graphics);
    createFeatures(graphics, mapView);
    return graphics;
  }
  // return buildFeatureLayer(resDataArray, baseMap, mapView);
  // const resultsLayer = undefined;

  const createFeatures = (graphics, mapView) => {
    console.log('inside createFeatures()');
    // let patternsLayer = undefined;
    // const view = mapView;
    let setGraphics = [];
    if (graphics.length > 0) {
      let processCounter = 0;
      for (let i = 0; i < graphics.length; i++) {
        if (processCounter === 1000) {
          patternsLayer = createFeatureLayer(setGraphics, "Top 5");
          mapView.map.add(patternsLayer);
          setGraphics = [];
          //console.log("created patternsLayer");
          return patternsLayer;
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

      resultsLayer = createFeatureLayer(graphics, "Results");
      // listOfIDs = theSignalCounts.sort((a, b) => Number(b.signalcount) - Number(a.signalcount));
      console.log("FeatureLayer mapView: ", mapView);
      mapView.map.add(resultsLayer);
      return resultsLayer;
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
};

const phoneRenderer = {
  type: "simple",  // autocasts as new SimpleRenderer()
  symbol: {
    type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
    size: 6,
    color: "lime",
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
function createFeatureLayer(graphics, title) {
  //console.log(graphics);
  const fieldInfos = [
    {
      fieldName: "REGISTRATION_ID",
      label: "Registration ID (UUID)",
      format: {
        digitSeparator: true,
        places: 0
      }
    },
    {
      fieldName: "IP_ADDRESS",
      label: "IP Address",
      format: {
        digitSeparator: true,
        places: 0
      }
    },
    {
      fieldName: "FLAGS",
      label: "IP Addresses",
      format: {
        digitSeparator: true,
        places: 0
      }
    },
    {
      fieldName: "TIMESTAMP",
      label: "Timestamp"
    }
  ];

  return new FeatureLayer({
    source: graphics, // adding an empty feature collection
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
    geometryType: "point",
    outFields: ["*"],
    popupTemplate: {

      // autocasts as new PopupTemplate()
      title: "1,234 Signals Returned",
      content: [{
        type: "fields",
        text: "Loreum Ipsum - Loreum Ipsum"
      },
      {
        type: "fields",
        fieldInfos: fieldInfos
      }],
    },
    renderer: phoneRenderer
  });
}

// Creates a client-side FeatureLayer with a custom color
const createUniqueLayer = async (graphics, title, id) => {
  console.log('inside createUniqueLayer()');
  return new FeatureLayer({
    source: graphics, // adding an empty feature collection
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
    geometryType: "point",
    objectIdField: "OBJECTID",
    spatialReference: spatialRef,
    // renderer: {
    //   type: "simple",
    //   symbol: {
    //     type: "web-style", // autocasts as new WebStyleSymbol()
    //     styleName: "Esri2DPointSymbolsStyle",
    //     name: "landmark"
    //   }
    // },
    renderer: phoneRenderer,
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
  alert('I\'m sorry... I\'m afraid I cannot locate any signals.');
}
// #endregion

export { featureLayerBuilder };
