/**--------------------------------------------------------------------------------- ->
*  ┌────────────────────────────────────────┐
*  │ |> GAVEL - Pattern of Life Builder     │
*  └────────────────────────────────────────┘
* 
*  @description:   'Builder component to convert registrationIDs to Pattern of Life'
*  @implements:    'JSON data object returned from search API of '
*  @returns:       'Esri Feature Layer containing Points to render on map'
* 
*/

// #region [imports]
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
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
// import promiseUtils from '@arcgis/core/promiseUtils';
import { SpatialReference } from "@arcgis/core/geometry";

// QP
import areaQuery from '../../../redux/reducers/area-query';
// #endregion

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
async function patternOfLifeBuilder(baseMapProp, mapViewProp, payload) {
  console.log('inside FeatureLayerBuilder');
  // const { baseMap, mapView, payload } = props;

  // const [baseMapState, setBaseMapState] = useState({});
  // const [mapViewState, setMapViewState] = useState({});
  let mapView = mapViewProp;
  let baseMap = baseMapProp;
  let resDataArray = payload.locationData.registrationIDs;

  const patternOfLifeSignals = new GraphicsLayer({ title: "Pattern" });

  // Point Counter
  // resultsLength
  // let theSignalCounts = 0;

  // Padding
  const padding = { top: 55 };
  const paddingExpanded = { top: 55, right: 250 };

  // Panel
  // let url = 'info';
  let graphics = [];
  let pointCounter = 0;
  let layerCounter = 0;
  let listOfIds = [];
  // let theSignalCounts = undefined;
  // let ptLocationsLayer = undefined;

  /*/
   *  ┌─────────────────────────────┐
   *  │ |> Local & Global States    │
   *  └─────────────────────────────┘
  /*/
  // useEffect(() => {
  //   // setBaseMapState(baseMap);
  //   // setMapViewState(mapView);

  //   // buildPatternOfLife(resDataArray, baseMapState, mapViewState)
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
  //   .then(buildPatternOfLife(areaQueryState, baseMap, mapView))
  //   .then(ptLocationsLayer = createFeatureLayer())
  //   .catch(e => {
  //     console.error("Creating FeatureLayer failed:", e);
  //   });

  mapView.when()
    .then(() => {
      console.log('createGraphicsFromData');
      return createGraphicsFromData(resDataArray, mapView, baseMap);
    })
    .then(res => {
      console.log('createFeatures');
      const { graphics, mapView, baseMap } = res;
      return createFeatures(graphics, mapView, baseMap);
    })
    .then(res => {
      console.log('applyEditsToLayer');
      const json = res.json();
      return applyEditsToLayer(json);
    })
    .catch(error => {
      handleNoSignalCounts(error);
    });

  // console.log(theSignalCounts);
  // const resultsLayer = createFeatureLayer(graphics, "Results");

  // console.log('List of IDs: ', listOfIDs);

  // TODO: Init `buildFeatueLayer` function from `useEffect()` hook
  const buildPatternOfLife = (resDataArray, mapViewProp, baseMapProp) => {

    // TODO: Clean up code when time permits (formatting & consistency)
    console.log('inside buildPatternOfLife()');
    let json = resDataArray;
    // let resultsLayer = undefined;
    const mapView = mapViewProp;
    const baseMap = baseMapProp;

    //console.log("DATA", JSON.stringify(json));

    // let pointCounter = 0;
    // let countResults = 0;

    console.log('Signals Added', graphics);
    // _Patterns
    json.map((item, i) => {
      // _Signals
      json[0].signals.map((signal, j) => {

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
            "OBJECTID":       j,
            "registrationID": signal.registrationID,
            "ipAddress":      signal.ipAddress,
            "flags":          signal.flags,
            // "latitude":       signal.latitude,
            // "longitude":      signal.longitude,
            "timestamp":      signal.timestamp
          },
          geometry:           point,
        symbol:               simpleMarkerSymbol,

        });
        // console.log('Ready to Add Point...');
        graphics.push(pointGraphic);
        // patternOfLifeSignals.add(pointGraphic);
        pointCounter++;
      });

    });

    console.log('graphics: ', graphics);
    // TODO: Chain this function to the Promise
    // createFeatures(graphics, mapView, baseMap);
    return graphics;
  }
  // return buildPatternOfLife(resDataArray, baseMap, mapView);
  let resultsLayer = null;
  let patternsLayer = null;

  const createFeatures = (graphics, mapView, baseMap) => {
    // const view = mapView;
    layerCount++;
    let setGraphics = [];
    let edits = {};
    if (graphics.length > 0) {
      let processCounter = 0;
      // patternsLayer = createUniqueLayer(setGraphics, "Pattern " + layerCount, layerCount);
      resultsLayer = createFeatureLayer(setGraphics, "Results Layer " + layerCount);
      baseMap.add(resultsLayer);

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
      return edits;
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

        return resultsLayer;
      })
      .catch(error => {
        console.error(error);
      });
  }


  // --Actions
  // function defineActions(event) {

  //   // The event object contains properties of the
  //   // layer in the LayerList widget.

  //   const action = event.item;
  //   console.log("Define Actions Event: ", event);
  //   action.panel = {
  //     content: document.getElementById("myDiv"),
  //     className: "esri-icon-handle-horizontal",
  //     title: "Layer Actions",
  //     open: action.hidden
  //   };

  //   if (action.title === "Area Query") {
  //     // open the list item in the LayerList
  //     action.open = open;
  //     // actions.title = "";
  //     action.actionsSections = [
  //       [
  //         {
  //           title: "Save Layer",
  //           className: "esri-icon-save",
  //           id: "layerSave"
  //         },
  //         {
  //           title: "Delete Layer",
  //           className: "esri-icon-trash",
  //           id: "layerDelete"
  //         }
  //       ]
  //     ];
  //   }

  //   if (action.title === "Pattern") {
  //     // open the list item in the LayerList
  //     action.open = open;
  //     // actions.title = "";
  //     action.actionsSections = [
  //       [
  //         {
  //           title: "Save Layer",
  //           className: "esri-icon-save",
  //           id: "layerSave"
  //         },
  //         {
  //           title: "Delete Layer",
  //           className: "esri-icon-trash",
  //           id: "layerDelete"
  //         }
  //       ]
  //     ];
  //   }
  // }

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
// --Display "Top 5" Reference IDs (reoccuring) style properties 
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
    size: 7.5,
    color: "#d7191c",
    outline: {
      color: [255, 255, 255, 0.7],
      width: 0.5
    }
  }
};

const pointRenderer1 = {
  type: "simple",  // autocasts as new SimpleRenderer()
  symbol: {
    type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
    size: 7.5,
    color: "blue",
    outline: {  // autocasts as new SimpleLineSymbol()
      color: "white",
      width: 0.5
    }
  }
}

// --Creates a FeatureLayer from an array of graphics (client-side)
function createFeatureLayer(graphics, title) {
  console.log("Data Points", graphics);
  // NOTE: The following `fieldInfos` reflect datadisplayed in popup card
  const fieldInfos = [
    {
      fieldName: "registrationID",
      label: "Registration ID",
      format: {
        digitSeparator: false
      },
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
      label: "Flags",
      format: {
        digitSeparator: false
      }
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
      label: "Timestamp",
      format: {
        digitSeparator: false
      }
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
        type: "geometry"
      },
      {
        name: "longitude",
        type: "geometry"
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
      title: "Data Point Location:",
      content: [{
        type: "text",
        text: `
          <div style='display: flex; margin-left: 9px;'>ID: {registrationID}</div>
          <div style='display: flex; margin-left: 9px;'>Data Point: {OBJECTID} of "` + pointCount + `</div>
        `
      },
      {
        type: "fields",
        fieldInfos: fieldInfos,
      }],
      spinnerEnabled: true,
      active: true
    },
    renderer: pointRenderer1
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
        type: "geometry"
      },
      {
        name: "longitude",
        type: "geometry"
      }
    ],
    geometryType: "point",
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
    listMode: "hide",
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
//   mapView: PropTypes.string,1l
//   payload: PropTypes.arrayOf(PropTypes.object),
// }

// Error Handler
const handleNoSignalCounts = error => {
  console.log('GAVEL 9000: ', error);
  // alert('I\'m sorry... I\'m afraid I cannot locate any signals.');
  const alert = document.getElementById('alertNoResultsWarning');
  alert.active = "true";
}
// #endregion

export { patternOfLifeBuilder };
