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

//#region [imports]
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
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
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
// import * as promiseUtils from '@arcgis/core/core/promiseUtils';
import { SpatialReference } from "@arcgis/core/geometry";

// QP
import areaQuery from '../../../redux/reducers/area-query';
import * as areaTypes from "../../../redux/types/area-types";
//#endregion

let patternsLayer = null;
let resultsLayer = null;
let resultsLength = null;
let pointCount = 0;

const spatialRef = new SpatialReference({ "wkid": 102100, "latestWkid": 3857 });

const colors = [
  "#d7191c",
  "#fdae61",
  "#ffffbf",
  "#abdda4",
  "#2b83ba"
];

// #region [component] 
async function featureLayerBuilder(baseMapProp, mapViewProp, payload) {
  console.log('inside FeatureLayerBuilder');
  // const { baseMap, mapView, payload } = props;
  
  // const [baseMapState, setBaseMapState] = useState({});
  // const [mapViewState, setMapViewState] = useState({});
  let mapView = mapViewProp;
  let baseMap = baseMapProp;
  let resDataArray = payload.locationData.areas;
  
  const graphicsLayerSignals = new GraphicsLayer({ title: "Results" });

  // Point Counter
  // resultsLength
  // let theSignalCounts = 0;

  // Padding
  const padding = { top: 55 };
  const paddingExpanded = { top: 55, right: 250 };

  // Panel
  // let url = 'info';
  let graphics = [];
  let layerCount = 0;
  let listOfIds = [];
  // let theSignalCounts = undefined;
  // let ptLocationsLayer = undefined;

  /*/
   *  ┌─────────────────────────────┐
   *  │ |> Local & Global States    │
   *  └─────────────────────────────┘
  /*/
  // Redux store
  // const dispatch = useDispatch();
  // const areaQueryCount = useSelector(state => state.areaQuery.locationCount);

  // useEffect(() => {
  //   // setBaseMapState(baseMap);
  //   // setMapViewState(mapView);

  //   // createGraphicsFromData(resDataArray, baseMapState, mapViewState)
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
  //   .then(createGraphicsFromData(areaQueryState, baseMap, mapView))
  //   .then(ptLocationsLayer = createFeatureLayer())
  //   .catch(e => {
  //     console.error("Creating FeatureLayer failed:", e);
  //   });

  mapView.when()
    .then(() => {
      console.log('createGraphicsFromData');
      return buildFeatureLayer(resDataArray, mapView, baseMap);
    })
    .then(res => {
      console.log('createFeatures');
      const { graphics, mapView, baseMap } = res;
      return createFeatures(graphics, mapView, baseMap);
    })
    .then(edits => {
      console.log('applyEditsToLayer');
      return applyEditsToLayer(edits);
    })
    .catch(error => {
      handleNoSignalCounts(error);
  });

  //console.log(theSignalCounts);
  // const resultsLayer = createFeatureLayer(graphics, "Results");

  // console.log('List of IDs: ', listOfIDs);
  
  // TODO: Init `buildFeatueLayer` function from `useEffect()` hook
  const buildFeatureLayer = (resDataArray, mapViewProp, baseMapProp) => {
    // TODO: Clean up code when time permits (formatting & consistency)
    console.log('inside createGraphicsFromData()');
    let json = resDataArray;
    // let resultsLayer = undefined;
    const mapView = mapViewProp;
    const baseMap = baseMapProp;

    //console.log("DATA", JSON.stringify(json));

    // const pointCount = json[0].areas[0].signalCount;
    // let pointCount = 0;
    // let countResults = 0;
    
    console.log('Adding Signals: ', graphics);
    // _Points
    pointCount = graphics.length;
    // _Parsing     
    json.map((area, i) => {
      // _RegIDs
      json[i].registrationIDs.map((regID, j) => {
        // _Signals
        json[i].registrationIDs[j].signals.map((signal, k) => {

          const regId = signal.registrationID;

          // TODO: Determine is `theId` is needed
          let theId = {
            "registrationID": regId,
            "pointCount": pointCount
          };

          // NOTE: autocasts as new Point()
          const point = {
            type: "point",
            latitude: signal.latitude,
            longitude: signal.longitude
          }

          const simpleMarkerSymbol = {
            type: "simple-marker",
            color: colors[0],
            outline: {
              color: "#ffffff",
              width: 1
            },
            size: "15px"
          };
          
          // TODO: Determine if we should include lat & long coordinates.
          const pointGraphic = new Graphic({
            attributes: {
              "OBJECTID":       k,
              "registrationID": signal.registrationID,
              "ipAddress":      signal.ipAddress,
              "flags":          signal.flags,
              "latitude":       signal.latitude,
              "longitude":      signal.longitude,
              "timestamp":      signal.timestamp
            },
            geometry:           point,
            symbol:             simpleMarkerSymbol,

          });

          // apply the edits to the layer
          // console.log('Ready to Add Point...');
          // applyEditsToLayer(addEdits);
          graphics.push(pointGraphic);
          // graphicsLayerSignals.add(pointGraphic);
          pointCount++; 
        });

      });

    });

    graphicsLayerSignals.add(graphics);
    console.log('graphics: ', graphics);
    // TODO: Chain this function to the Promised based
    // createFeatures(graphics, mapView, baseMap);
    return { graphics, mapView, baseMap };
  }
  // return createGraphicsFromData(resDataArray, baseMap, mapView);
  // let resultsLayer = null;
  // let patternsLayer = null;

  const createFeatures = (graphics, mapView, baseMap) => {
    // const view = mapView;
    let setGraphics = [];
    let edits = null;
    if (graphics.length > 0) {
      let processCounter = 0;
      // patternsLayer = createUniqueLayer(setGraphics, "Pattern " + layerCount, layerCount);
      resultsLayer = createFeatureLayer(setGraphics, "Results Layer " + layerCount);
      baseMap.add(resultsLayer);
      layerCount++;

      for (let i = 0; i < graphics.length; i++) {
        // Reset `setGraphics` array to default value (0)
        if (processCounter === 1000) {
          setGraphics = [];
          //connsole.log("created patternsLayer");
          // return patternsLayer;
        } 
        else if (processCounter != 0 && (processCounter % 1000) == 0) {
          console.log("Features to add: ", setGraphics);
          edits = {
            addFeatures: setGraphics
          };
          // resultsLayer.applyEdits(edits);
          setGraphics = [];
        }
        else {
          setGraphics.push(graphics[i]);
        }
        processCounter++;
      }

      // resultsLayer = createFeatureLayer(graphics, "Layer " + layerCount);
      // listOfIDs = theSignalCounts.sort((a, b) => Number(b.signalcount) - Number(a.signalcount));
      console.log("New FeatureLayer: ", resultsLayer);
      // return edits;
    }
    return edits;
    // return "success";
  }

  function applyEditsToLayer(edits) {
    resultsLayer.applyEdits(edits)
      .then((results) => {
        // If edits were removed
        if (results.deleteFeatureResults.length > 0) {
          console.log(results.deleteFeatureResults.length, "features have been removed");
        }
        // If features were added - call queryFeatures to return newly added graphics
        if (results.addFeatureResults.length > 0) {
          var objectIds = [];
          results.addFeatureResults.forEach((item) => {
            objectIds.push(item.objectId);
          });
          // Query the newly added features from the layer
          resultsLayer.queryFeatures({
            objectIds: objectIds
          })
          .then(results => {
            console.log(results.features.length, "features have been added.");
          })
        }

        return "success";
      })
      .catch(error => {
        console.error(error);
      });
  }

  // --Actions
  function defineActions(event) {

    // NOTE: The event object contains properties of the layer in the `LayerList` widget.
    const action = event.item;
    console.log("Define Actions Event: ", event);
    action.panel = {
      content: document.getElementById("myDiv"),
      className: "esri-icon-handle-horizontal",
      title: "Layer Actions",
      open: action.hidden
    };

    if (action.title === "Area Query") {
      // open the list item in the LayerList
      action.open = "true";
      actions.title = "Layer Actions";
      action.actionsSections = [
        [
          {
            title: "Save Layer",
            className: "esri-icon-save",
            id: "layerSave"
          },
          {
            title: "Delete Layer",
            className: "esri-icon-trash",
            id: "layerDelete"
          }
        ]
      ];
    }
  }

  // --Widgets
  
  // --LayerList
  // const layerList = new LayerList({
  //   view: mapView,
  //   // executes for each ListItem in the LayerList
  //   listItemCreatedFunction: defineActions  
  // });
  
  // // LayerList instantiated from Map.jsx
  // let expandLayerList = new Expand({
  //   view: mapView,
  //   content: layerList,
  //   expandTooltip: "Toggle Layers",
  //   group: "bottom-right"
  // });

  return resultsLayer;
}   
// #endregion

// #region [qp] 
// TODO: SoC - Consider moving renderers and actions into dedicated Utility files
const uniquePointRenderer = {
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

const pointRenderer = {
  type: "simple",  // autocasts as new SimpleRenderer()
  symbol: {
    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
    color: colors[0],
    outline: {
      color: [255, 255, 255, 0.7],
      width: 0.5
    },
    size: 7.5
  }
};

// Secondary Renderer
const pointRenderer1 = {
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
}

/*/
 *  ┌───────────────────────┐
 *  │ |> Trigger-Actions    │
 *  └───────────────────────┘
/*/
// Add this action to the popup so it is always available in this view
const patternOfLifeAction = {
  className: "esri-icon-line-chart",
  id: "patternOfLife",
  indicator: true,
  title: "Pattern of Life"
};

// --Creates a FeatureLayer from an array of graphics (client-side)
function createFeatureLayer(graphics, title) {
  console.log("Data Points", graphics);
  // NOTE: The following `fieldInfos` reflect data displayed in popup card
  const fieldInfos = [
    {
      fieldName: "registrationID",
      label: "Registration ID",
      visible: false
    },
    {
      fieldName: "ipAddress",
      label: "IP Address",
      format: {
        digitSeparator: true
      }
    },
    {
      fieldName: "flags",
      label: "Flags"
    },
    {
      fieldName: "latitude",
      label: "Latitude",
      format: {
        digitSeparator: true
      }
    },
    {
      fieldName: "longitude",
      label: "Longitude",
      format: {
        digitSeparator: true
      }
    },
    {
      fieldName: "timestamp",
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
        name: "latitude",
        type: "geometry",
        valueType: "coordinate"
      },
      {
        name: "longitude",
        type: "geometry",
        valueType: "coordinate"
      },
      {
        name: "timestamp",
        type: "date"
      }
    ],
    geometryType: "point",
    spatialReference: { "wkid": 102100, "latestWkid": 3857 },
    outFields: ["*"],
    popupTemplate: {
      // autocasts as new PopupTemplate()
      actions: [patternOfLifeAction],
      title: "Data Point Location:",
      content: [{
        type: "text",
        text: `
          <div style='display: flex; margin-left: 9px;'>ID: {registrationID}</div>
          <div style='display: flex; margin-left: 9px;'>Data Point: {OBJECTID} of " +  {pointCount}</div>
        `
      },
      {
        type: "fields",
        fieldInfos: fieldInfos,
      }],
      spinnerEnabled: true,
      active: true
    },
    renderer: pointRenderer
  });
}

// --Creates a client-side FeatureLayer with a custom color
const createUniqueLayer = (graphics, title, id) => {
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
      },
      {
        name: "latitude",
        type: "geometry",
        valueType: "coordinate"
      },
      {
        name: "longitude",
        type: "geometry",
        valueType: "coordinate"
      },
    ],
    geometryType: "point",
    spatialReference: { "wkid": 102100, "latestWkid": 3857 },
    objectIdField: "OBJECTID",
    outFields: ["*"],
    // renderer: {
    //   type: "simple",
    //   symbol: {
    //     type: "web-style", // autocasts as new WebStyleSymbol()
    //     styleName: "Esri2DPointSymbolsStyle",
    //     name: "landmark"
    //   }
    // },
    renderer: uniquePointRenderer,
    popupTemplate: {
      // autocast as esri/PopupTemplate
      title: "{registrationID} at {timestamp}",
      content: "Color is {thecolor}, Flags are {flags} </br> ipAddress is {ipAddress}",
      actions: [patternOfLifeAction]
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

// Error Handlers
// IDEA: Move error/warning handlers into dedicated component   
const handleNoSignalCounts = error => {
  console.log('GAVEL 9000: ', error);
  // alert('I\'m sorry... I\'m afraid I cannot locate any signals.');
  const alert = document.getElementById('alertNoResultsWarning');
  alert.active = "true";
}
// #endregion

export { featureLayerBuilder };
