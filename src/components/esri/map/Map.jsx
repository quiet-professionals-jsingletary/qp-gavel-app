// #region [copyright]
// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​
//#endregion

// #region [notes]
// NOTE:
// -- This is a "special" react component that does not strictly play by
// -- React's rules.
// --
// -- Conceptually, this component creates a "portal" in React by
// -- closing its render method off from updates (by simply rendering a div and
// -- never accepting re-renders) then reconnecting itself to the React lifecycle
// -- by listening for any new props using:
//   --> `componentWillReceiveProps` - Class (stateful) Components
//   --> `useEffect()` - Functional (stateless) Components
// --
// --------------------------------------------------------------------------------
//#endregion

// #region [imports]
// React
import React, { useEffect, useState } from "react";
import ReactDOM, { render } from "react-dom";

// Redux
import { connect, Provider, useDispatch, useSelector, useStore } from "react-redux";
import { refIdQuery } from "../../../redux/reducers/refid-query";
import areaQuery, { 
  addToStoreAction, 
  sendAreaQuery, 
  areaQueryDone, 
  areaQueryPuts 
} from "../../../redux/reducers/area-query";
import * as types from "../../../redux/types/area-types";
// import { createSelector } from 'reselect';
// import { updateConfig } from "../../../redux/reducers/config";

// Esri
import { loadModules } from "esri-loader";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import DatePicker from "@arcgis/core/widgets/support/DatePicker"; 
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion";
import { Geometry } from "@arcgis/core/geometry";
import { distance, geometryEngine } from "@arcgis/core/geometry/geometryEngine";
import { coordinateFormatter, toLatitudeLongitude } from "@arcgis/core/geometry/coordinateFormatter";
import { FeatureLayerView } from '@arcgis/core/views/layers/FeatureLayerView';
import Graphic from "@arcgis/core/Graphic";
import Point from '@arcgis/core/geometry/Point';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import GroupLayer from '@arcgis/core/layers/GroupLayer';// import DateTimePickerInput from "@arcgis/core/form/elements/inputs/DateTimePickerInput";

// Calcite / Styles
import Button, { ButtonGroup } from 'calcite-react/Button';

// QP
import { loadMap } from "../../../utils/map";
import { calcDistance } from "../../../utils/calculate";
import { dateToIsoString } from '../../../utils/format';
import DateRangeComponent from "../widgets/DateRange";
// import { featureLayerBuilder, createFeatureLayer } from "../layers/FeatureLayerBuilder";
// import DateRangeExpandClass from "../../esri/widgets/DateRangeExpandClass";
// import DateRangeExpandWidget from "../../esri/widgets/DateRangeExpandWidget";
// import PointGraphicBuilder from "../layers/PointGraphicBuilder";

require('dotenv').config();
// #endregion

// #region [styles]
import styled from "styled-components";
// import { areaQueryPushSaga } from "../../../redux/actions/area-query-actions";
// import { areaQueryRequest } from "../../../redux/sagas/requests/area-query";
// import { json } from "body-parser";
// import { query } from "express";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const DateRangeContainer = styled.div`
  min-height: 10vh;
  width: 12vw;
  padding: 10px;
`;

const StartDateRangeContainer = styled.div`
  min-height: 10vh;
  width: 12vw;
`;

const EndDateRangeContainer = styled.div`
  min-height: 10vh;
  width: 12vw;
`;
// #endregion

/*/
  *  ┌─────────────────────┐
  *  │ |> Map Component    │
  *  └─────────────────────┘
/*/
//#region [component]
const Map = props => {

  // Set `id` for the map to attach to
  // const geoData = useSelector(state => state.geojsonLayer);

  // const [areaQuery, setAreaQuery] = useState({
  //   startDate: '',
  //   endDate: '',
  //   latitude: 0,
  //   longitude: 0,
  //   radius: 10,
  //   status: "idle" // ["idle", "loading", "success", "error" ]
  // });

  // Aliases
  const containerId = "mapViewContainer";
  const dateRangeId = "dateRangeContainer";
  const startDateRangeId = "startDateRangeContainer";
  const endDateRangeId = "endDateRangeContainer";

  // Redux store state
  const dispatch = useDispatch();
  const securityToken = useSelector(state => state.securityToken);
  const { TempSecurityToken: tempSecurityToken } = securityToken;
  const refIdQuery = useSelector(state => state.refIdQuery);
  const areaQueryState = useSelector(state => state.areaQuery);
  const isAreaQueryDataLoaded = useSelector(state => state.areaQuery.status);

  /*/
    *  ┌─────────────────────────────┐
    *  │ |> Local & 1Global States   │
    *  └─────────────────────────────┘
  /*/
  // DatePicker
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  const [baseMapState, setBaseMapState] = useState({});
  const [mapViewState, setMapViewState] = useState({});

  // FeatureLayerBuilder
  // const store = useStore();

  // const { latitude, longitude, radius } = areaQueryState;

  let baseMap = baseMapState;
  let mapView = mapViewState;

  let sketchViewModel,
    instructionsExpand,
    boundaryPolygon,
    validSymbol,
    invalidSymbol,
    buffers,
    newDevelopmentGraphic

  let intersects = false;
  let contains = true;

  let featuredGraphicsLayer,
    graphicsLayerGeofence

  //--GraphicsLayer Color Overrides
  // Fills
  const polyFill = [116, 150, 179, 0.20];
  const pointFill = [0, 96, 175];

  // Strokes
  const polygonStroke = {
    color: [0, 96, 175],
    width: 2
  };

  const pointStroke = {
    color: [3, 17, 30],
    width: 1
  };

  /*/
    *  ┌───────────────────────────────┐
    *  │ |> Default Area Query Dates   │
    *  └───────────────────────────────┘
  /*/
  useEffect(() => {
    const today = new Date(Date.now());
    console.log('Default State: ', today);
    const sDate = today.setDate(today.getDate() - 7);
    const eDate = today.setDate(today.getDate());
    const sDateIso = dateToIsoString(new Date(sDate));
    const eDateIso = dateToIsoString(new Date(eDate));

    // Add local state
    setStartDate(sDate); 
    setEndDate(eDate);

    // Add to Redux store
    dispatch({ type: types.ADD_TO_STORE, payload: { startDate: sDateIso } });
    dispatch({ type: types.ADD_TO_STORE, payload: { endDate: eDateIso } });

  },[]);

  /*/
    *  ┌─────────────────────────────────┐
    *  │ |> Esri-Loader - Load Modules   │
    *  └─────────────────────────────────┘
  /*/
  useEffect(() => {
    loadMap(containerId, props.mapConfig, props.loaderConfig)
      .then(res => {
        // Call the map loaded event when we get the map view back
        // props.onMapLoaded();
        console.log('LoadMap: ', res);
        // console.log('Props: ', props);
        // console.log('window.dojo: ', window.dojoConfig);

        // TODO: Leverage the ES Module `import` feature in ArcGIS API v4.18
        loadModules([
          // "esri/form/elements/inputs/DateTimePickerInput",
          "esri/config",
          "esri/geometry/geometryEngine",
          "esri/Map",
          "esri/widgets/Expand",
          "esri/widgets/LayerList",
          "esri/widgets/ScaleBar",
          "esri/widgets/Search",
          "esri/widgets/Sketch",
          "esri/widgets/Sketch/SketchViewModel",
          "esri/views/MapView"], props.loaderConfig)
          .then(([
            esriConfig,
            geometryEngine,
            Map,
            Expand,
            LayerList,
            ScaleBar,
            Search,
            Sketch,
            SketchViewModel,
            MapView]) => {

            // let featuredGroupLayer = new GroupLayer({
            //   title: "Results",
            //   visible: true,
            //   visibilityMode: "exclusive",
            //   layers: [],
            //   opacity: 0.75
            // });

            esriConfig.portalUrl = "https://qptampa.maps.arcgis.com/";
            // esriConfig.apiKey = process.env.REACT_APP_ESRI_API_KEY;
            // console.log('Esri API Key: ', process.env.REACT_APP_ESRI_API_KEY);

            // featuredGraphicsLayer = new GraphicsLayer({
            //   title: "Basemap"
            // });
            // Basemap
            baseMap = new Map({
              basemap: "dark-gray-vector"
              // layers: [featuredGraphicsLayer]
            });
            // Mapview
            mapView = new MapView({
              // let mapView = res;  
              // res = {
              container: "mapViewContainer",
              map: baseMap,
              extent: {
                spatialReference: {
                  wkid: 102100
                },
                xmin: -9177882,
                ymin: 4246761,
                xmax: -9176720,
                ymax: 4247967
              },
              popup: {
                dockEnabled: false,
                dockOptions: {
                  position: "top-right",
                  breakpoint: false
                }
              },
              ...props.mapConfig
            });

            // mapView.extent = new Extent({
            //   xmin: -9177882,
            //   ymin: 4246761,
            //   xmax: -9176720,
            //   ymax: 4247967,
            //   spatialReference: {
            //     wkid: 102100
            //   }
            // });

            // setMapState(baseMap);
            // setViewState(mapView);
            // Add baseMap & mapView to Local State
            setBaseMapState(baseMap);
            setMapViewState(mapView);

            /*/
             *  ┌─────────────────────────────┐
             *  │ |> Widgets / Query Tools    │
             *  └─────────────────────────────┘
            /*/
            // TODO: Determine LoE to move all widgets into
            let dateObj = new Date();
            // --Basemaps
            // const basemapGallery = new BasemapGallery({
            //   view: mapView,
            //   container: document.createElement("div")
            // });
            // --Date Range
            // const dateRangeWidget = new DateTimePickerInput({
            //   includeTime: true,
            //   min: Date.parse('01 Jan 2018 00:01:00 GMT'),
            //   max: dateObj.setDate(-1)
            // });
            // --Date Range Expand
            // const dateRangeExpand = new ExpandWidget({
            //   view: mapView,
            //   content: "Testing"
            // });
            // const coordsConverter = new CoordinateConversion({
            //   view: mapView
            // });
            // --DatePicker
            // const startDatePicker = new DatePicker({
            //   container: dateRangeId,
            //   view: mapView
            // });
            // const endDatePicker = new DatePicker({
            //   container: dateRangeId,
            //   view: mapView
            // });
            // --LayerList
            const layerList = new LayerList({
              view: mapView,
              // executes for each ListItem in the LayerList
              // listItemCreatedFunction: event => {

              //   // The event object contains properties of the
              //   // layer in the LayerList widget.

              //   const item = event.item;

              //   item.panel = {
              //     content: document.getElementById("myDiv"),
              //     className: "esri-icon-chart",
              //     open: item.visible
              //   };

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
            });
            // --Search Tool
            const search = new Search({
              view: mapView
            });
            // --Scale Bar
            const scaleBar = new ScaleBar({
              view: mapView,
              unit: "dual"
            });

            // const getJsonData = buildFeatureLayer(baseMap, mapView);

            // Add Sketch widget to mapView
            // mapView.ui.add([{
            //   component: basemapGallery,
            //   position: "bottom-left",
            //   index: 0
            // }]);
            // mapView.ui.add([{
            //   component: coordsConverter,
            //   position: "top-left",
            //   index: 0
            // }]);
            mapView.ui.add(dateRangeId, "top-right");
            mapView.ui.add([{
              component: search,
              position: "top-right",
              index: 0
            }]);
            // mapView.ui.add([{
            //   component: startDatePicker,
            //   position: "top-right",
            //   index: 1
            // }]);
            // mapView.ui.add([{
            //   component: endDatePicker,
            //   position: "top-right",
            //   index: 2
            // }]);
            mapView.ui.add([{
              component: layerList,
              position: "bottom-right"
            }]);

            // mapView.ui.add([{
            //   component: dateRangeWidget,
            //   position: "top-right",
            //   index: 0
            // }]);
            mapView.ui.add([{
              component: scaleBar,
              position: "bottom-left",
              index: 0
            }]);

            //--- Mount view "when" loaded ---|>
            mapView.when(() => {
              // Query all buffer features from the school buffers featurelayer
              // bufferLayer.queryFeatures().then(function (results) {
              //   buffers = results.features[0].geometry;
              // });

              // Add the boundary polygon and new lot polygon graphics
              //// addGraphics();

              // Create a new instance of sketchViewModel
              sketchViewModel = new SketchViewModel({
                view: mapView,
                layer: graphicsLayerGeofence,
                updateOnGraphicClick: false,
                defaultUpdateOptions: {
                  // set the default options for the update operations
                  toggleToolOnClick: false // only reshape operation will be enabled
                }
              });

              // TODO: Move back to its Component when possible `useRef()`
              const sketch = new Sketch({
                id: "ampdSketchWidget",
                availableCreateTools: ["point", "circle"],
                // layout: "vertical",
                layout: "horizontal",
                layer: graphicsLayerGeofence,
                view: mapView,
                // Graphic will be selected as soon as it is created
                creationMode: "update"
              });
              // ##Geofences
              // Override all default symbol colors and sizes
              const pointSymbol = sketch.viewModel.pointSymbol;
              pointSymbol.color = pointFill;
              pointSymbol.outline = pointStroke;
              pointSymbol.size = 8;

              const polylineSymbol = sketch.viewModel.polylineSymbol;
              polylineSymbol.color = polygonStroke.color;
              polylineSymbol.width = polygonStroke.width;

              const polygonSymbol = sketch.viewModel.polygonSymbol;
              polygonSymbol.color = polyFill;
              polygonSymbol.outline = polygonStroke;

              mapView.ui.add([{
                component: sketch,
                position: "bottom-right"
              }]);

              // Listen to sketchViewModel's update event to do
              // graphic reshape or move validation
              sketchViewModel.on(["update", "undo", "redo"], onGraphicUpdate);
              sketch.on(["create", "complete"], onGraphicCreate);

            });

            const onGraphicCreate = event => {
              // get graphic as it is being created
              const graphic = event.graphic;

              if (event.state === "start" && event.tool === "circle") {
                console.log("Sketch Tool - Start / Circle: ", event);
              }

              if (event.state === "complete" && event.tool === "circle") {
                console.log("Sketch Tool - Complete / Circle: ", event);
                // TODO: Simplify code by using object destructuring
                // Use X : Y Coordinates to find the graphical center and ring points
                const pointCoordinateX = graphic.geometry.centroid.x;
                const pointCoordinateY = graphic.geometry.centroid.y;
                const ringCoordinateX = graphic.geometry.rings[0][0][0];
                const ringCoordinateY = graphic.geometry.rings[0][0][1];

                const locationA = {
                  "x": pointCoordinateX,
                  "y": pointCoordinateY
                }
                const locationB = {
                  "x": ringCoordinateX,
                  "y": ringCoordinateY
                }
                const locations = { locationA, locationB }

                // Compute above coordinates to get geo-fense radius 
                const circleRadius = calcDistance(locations);
                console.log('Circle Radius: ', circleRadius);

                const payloadToPush = {
                  latitude: graphic.geometry.centroid.latitude,
                  longitude: graphic.geometry.centroid.longitude,
                  radius: circleRadius
                }

                // Update Redux State
                dispatch(addToStoreAction(payloadToPush));
                // dispatch({ type: 'ADD_TO_STORE', payload: payloadToPush });
              }

              if (event.state === "update" && event.tool === "circle") {
                console.log("Sketch Tool - Update / Circle: ", event);
                // TODO: Determine if '_PUSH' needs to be dispatched on update
              }

            }

            const onGraphicUpdate = event => {
              // get graphic as it is being updated
              const graphic = event.graphics[0];
              console.log("Sketch Tool - Update: ", event);

              // check if the graphic is intersecting with any other item(s)
              // still contained by the boundary polygon as the graphic is being updated
              // intersects = geometryEngine.intersects(buffers, graphic.geometry);
              contains = geometryEngine.contains(boundaryPolygon, graphic.geometry);

              // change the graphic symbol to valid or invalid symbol
              // depending the graphic location
              graphic.symbol = (intersects) ? invalidSymbol : validSymbol;

              // check if the update event's the toolEventInfo.type is move-stop or reshape-stop
              // then it means user finished moving or reshaping the graphic, call complete method.
              // this will change update event state to complete and we will check the validity of the graphic location.
              if (
                event.toolEventInfo &&
                (event.toolEventInfo.type === "move-stop" ||
                  event.toolEventInfo.type === "reshape-stop")
              ) {
                console.log("On Stop / Reshape: ", graphic);
                if (contains && !intersects) {
                  console.log("On Reshape / Complete: ", graphic);
                  sketchViewModel.complete();
                }
              } else if (event.state === "complete") {
                console.log("On Complete: ", graphic);
                sketchViewModel.complete();
                logGeometry(graphic.geometry);

                // graphic moving or reshaping has been completed or cancelled (distinguish with aborted property)
                // if the graphic is in an illegal spot, call sketchviewmodel's update method again
                // giving user a chance to correct the location of the graphic
                if (!contains || intersects) {
                  console.log("On Reshape: ", graphic);
                  sketchViewModel.update([graphic], { tool: "reshape" });
                  logGeometry(graphic.geometry);
                }
              }
            }

            // This function is called when a user clicks on the view.
            const setUpGraphicClickHandler = () => {
              mapView.on("click", function (event) {
                // check if the sketch's state active if it is then that means
                // the graphic is already being updated, no action required.
                if (sketchViewModel.state === "active") {
                  return;
                }
                mapView.hitTest(event).then((response) => {
                  var results = response.results;
                  console.log("HitTest Results: ", results);
                  // Check if the new development graphic was clicked and pass
                  // the graphic to sketchViewModel.update() with reshape tool.
                  results.forEach(result => {
                    if (
                      result.graphic.layer === sketchViewModel.layer &&
                      result.graphic.attributes &&
                      result.graphic.attributes.newDevelopment
                    ) {
                      console.log('sketchViewModel graphic updated', result);
                      sketchViewModel.update([result.graphic], { tool: "reshape" });
                    }
                    else {
                      console.log('sketchViewModel: No graphic clicked and passed in', result);
                    }

                  });

                });

              });

            }

            graphicsLayerGeofence = new GraphicsLayer({ title: "Geofences" });
            mapView.map.layers.add(graphicsLayerGeofence);

            //#region [qp] 
            // Ad-Hoc GraphicsLayer Point - QP
            const qpPoint = {
              type: "point",
              longitude: -82.568518,
              latitude: 27.964489
            };
            
            // Create a symbol for drawing the point
            const markerSymbol = {
              type: "simple-marker", // new SimpleMarkerSymbol()
              color: pointFill,
              outline: {
                // new SimpleLineSymbol()
                color: [3, 17, 30],
                width: 1
              }
            };
            
            //--- Static Graphics ---|>                    
            // Create a graphic and add the geometry and symbol to it
            const pointGraphic = new Graphic({
              geometry: qpPoint,
              symbol: markerSymbol
            });
            // TODO: Continue from here...
            // Add graphics to mapView
            // mapView.baseMap.add(pointGraphic);
            
            // GeoJSON data
            const template = {
              title: "Device Info",
              content: "Latitude: {latitude} Longitude: {longitude}",
              fieldInfos: [
                {
                  fieldName: "timestamp",
                  format: {
                    dateFormat: "short-date-short-time"
                  }
                }
              ]
            };
            
            // Render data
            const renderer = {
              type: "simple",
              field: "mag",
              symbol: {
                type: "simple-marker",
                color: "lime",
                outline: {
                  color: "white"
                }
              }
            };
            //#endregion
            
            /*/
             *  ┌────────────────────────────────────────┐
             *  │ |> Event Listeners for Sketch Tools    │
             *  └────────────────────────────────────────┘
            /*/
            
            // Logging geoFence data via `SketchViewModel` + `eventListener` working in tandem
            function logGeometry(geometry) {
              if (geometry.type === "point") {
                // new at 4.6, the compiler knows the geometry is a Point instance
                console.log("point coords: ", geometry.x, geometry.y, geometry.z);
              }
              else {
                // the compiler knows the geometry must be a `Extent | Polygon | Multipoint | Polyline`
                console.log("The value is a geometry, but isn't a point.");
              }
            }

            // setUpExpandWidget();

            // TODO: Move function into a button click event
            // queryDevices(resJsonData, baseMap, mapView);

            // const geoDataBlob = new Blob([JSON.stringify(props.geoJsonData)], { type: "application/json" });
            // const geoDataUrl = URL.createObjectURL(geoDataBlob);
            // const layer = new GeoJSONLayer({ url });

            // const geoDataUrl = config.geoJsonData;

            // const geojsonLayer = new GeoJSONLayer({
            //   url: geoDataUrl,
            //   copyright: "Anonymized Mobile Phone Data",
            //   popupTemplate: template,
            //   renderer: renderer //optional
            // });


            // const geojsonLayer = new GeoJSONLayer({ data: config.geoJsonData });

            // baseMap.layers.add(getJsonData);

            // mapView.ui.add(geojsonLayer);

          });

        // return res;

      });

  },[]);

  // const minDate = dateObj.getUTCMilliseconds();
  // dateObj.setDate(-1);

  // useEffect(() => {
    // dispatch(locationDataSearch({ tempSecurityToken }));
    // ReactDOM.render(<DateRangeWidget></DateRangeWidget>, document.getElementById(dateRangeId));
    // ReactDOM.render(<StartDateRangeContainer></StartDateRangeContainer>, document.getElementById(dateRangeId));
    // ReactDOM.render(<EndDateRangeContainer></EndDateRangeContainer>, document.getElementById(dateRangeId));
    // Submit Query
    // document.getElementById('dateRangeSubmitBtn')
    //   .on('click', () => {
    //     dispatch(areaQueryRequest({ tempSecurityToken, areaQuery })
    //       .then(res => json(res))
    //       .then(resJson => { pointGraphicBuilder(resJson) })
    //     );
    //   });
  // }, []);

  // const featureLayerBuilder = (resJson, baseMap, mapView) => {
    
  // }

  /*/
  *  ┌────────────────────────────────────────┐
  *  │ |> Feature Layer Handler & Logic       │
  *  └────────────────────────────────────────┘
  /*/
  //#region [FeatureLayer]
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

  const handleFeatureLayerBuild = (areaQueryState, baseMapState) => {
    console.log('inside handleFeatureLayerBuild');
    // TODO: Determine if this is a good location to init FLB
    // const featureLayer = this.props.buildFeatureLayerCreator({ areaQueryState, baseMap, mapView });
    const resDataArray = areaQueryState.locationData.areas;
    // const graphicsLayerSignals = new GraphicsLayer({ title: "Results" });
    let graphics = [];
    console.log('resDataArray: ', resDataArray);

    // TODO: Init `buildFeatueLayer` function from `useEffect()` hook

    // TODO: Clean up code when time permits (formatting & consistency)
    console.log('inside buildFeatureLayer()');
    let json = resDataArray;
    const view = mapViewState;
    const map = baseMapState;
    console.log(JSON.stringify(json));

    // view.when(() => {
    //   console.log('view.when(1)');
    // }).then(() => {
    //   console.log('view.when(2)');
    // }).then(() => {
    //   console.log('view.when(3)');
    // }).catch(e => {
    //   handleNoSignalCounts(e);
    // });

    let counter = 0;
    let countSignals = 0;

    // json.locationData.areas[y].registrationIDs[i].signals
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
              "timestamp": json[i].registrationIDs[j].signals[k].timestamp,
              "thecolor": ""
            }

          });
          // console.log('Ready to Add Point...');
          graphics.push(pointGraphic);

          // graphicsLayerSignals.add(pointGraphic);

        });

      });

    });

    console.log('graphics: ', graphics);
    createFeatures(graphics);
    //#endregion

    async function createFeatures(graphics) {
      console.log('inside createFeatures()');
      let patternsLayer = undefined;
      let setGraphics = [];
      if (graphics.length > 0) {
        let processCounter = 0;
        for (let i = 0; i < graphics.length; i++) {
          if (processCounter === 1000) {
            patternsLayer = createLayer(setGraphics, "Patterns");

            baseMap.layers.add(patternsLayer);
            setGraphics = [];
            //console.log("created patternsLayer");
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

        const resultsLayer = createLayer(graphics, "Results");
        // listOfIDs = theSignalCounts.sort((a, b) => Number(b.signalcount) - Number(a.signalcount));
        // console.log(listOfIDs);
        baseMap.layers.add(resultsLayer);
      }
      return "success";
    }

    // --Creates a client-side FeatureLayer from an array of graphics
    function createLayer(graphics, title) {
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
      ]

      //console.log(graphics);
      return new FeatureLayer({
        source: graphics, // adding an empty feature collection
        title: title,
        objectIdField: "OBJECT_ID",
        fields: [
          {
            name: "OBJECT_ID",
            type: "oid"
          },
          {
            name: "REGISTRATION_ID",
            type: "string"
          },
          {
            name: "IP_ADDRESS",
            type: "string"
          },
          {
            name: "FLAGS",
            type: "integer"
          },
          {
            name: "TIMESTAMP",
            type: "date"
          }
        ],
        geometryType: "point",
        spatialReference: { wkid: 102100 },
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
    const createUniqueLayer = (graphics, title, id) => {
      console.log('inside createUniqueLayer()');
      return new FeatureLayer({
        title: title,
        source: graphics, // adding an empty feature collection
        objectIdField: "OBJECTID",
        geometryType: "point",
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

    // graphicsLayerSignals = new GraphicsLayer({ title: "Data Points" });
    // console.log('Signals Layer Added', graphicsLayerSignals);
    // // _Areas
    // resDataArray.map((area, i) => {
    //   // _RegIDs
    //   resDataArray[i].registrationIDs.map((regID, j) => {
    //     // _Signals
    //     resDataArray[i].registrationIDs[j].signals.map((signal, k) => {

    //       const lon = signal.longitude;
    //       const lat = signal.latitude;
    //       const regId = signal.registrationID;

    //       // Create a Point
    //       const point = {
    //         type: "point",
    //         longitude: lon,
    //         latitude: lat
    //       };

    //       // #e8ff00|#97a41c|#3b434f|#3f69a2|#4a99ff
    //       const colors = ["#e8ff00", "#97a41c", "#3b434f", "#3f69a2", "#4a99ff"];
    //       const simpleMarkerSymbol = {
    //         type: "simple-marker",
    //         color: pointFill,
    //         outline: {
    //           color: pointStroke,
    //           width: 1
    //         }
    //       };

    //       const pointGraphic = new Graphic({
    //         geometry: point,
    //         symbol: simpleMarkerSymbol
    //       });

    //       // console.log('Ready to Add Point...');
    //       graphicsLayerSignals.add(pointGraphic);

    //     });

    //   });
      
    // });
    // baseMapState.layers.add(graphicsLayerSignals);
    // const featureLayerBuilder = <FeatureLayerBuilder baseMap={mapView.map} mapView={mapViewState} isDataLoaded={isAreaQueryDataLoaded} payload={resDataArray} />
    // const featureLayerBuilder = createFeatureLayer(resDataArray);
    // createFeatureLayer();
    // featureLayerBuilder(baseMap, mapViewState, isAreaQueryDataLoaded, resDataArray);
    // mapView.map.layers.add(featureLayerBuilder);


    // featureLayerBuilderComponent(areaQueryState, baseMapState);
    // return featureLayer;

    // const featureLayerComponent = (
    //   <Provider store={store}>
    //     <FeatureLayerBuilder baseMap={baseMapState} mapView={mapViewState} />
    //   </Provider>
    // )
    // ReactDOM.render(featureLayerBuilder, document.getElementById('mapViewContainer'));
  }

  // NOTE: Listen for set to go off
  if (isAreaQueryDataLoaded == "success") {
    console.log('Data Status: ', isAreaQueryDataLoaded);
    handleFeatureLayerBuild(areaQueryState, baseMapState);
  }

  const queryStartHandler = date => {
    // Update State
    console.log('queryStartHandler: ', date);

    const startDateParsed = Date.parse(date);
    // const startIsoString = date.toISOString().slice(0, -5) + 'Z'
    setStartDate(startDateParsed);
  }

  const queryEndHandler = date => {
    // Update State
    console.log('queryEndHandler: ', date);

    const endDateParsed = Date.parse(date);
    // const endIsoString = date.toISOString().slice(0, -5) + 'Z'
    setEndDate(endDateParsed);
  }

  // Component template
  return (
    <React.Fragment>
      <Container id={containerId}>
        {/* <LoadScreen isLoading={!isMapLoaded} /> */}
        <DateRangeContainer id={dateRangeId} className={'esri-widget'}>
          <DateRangeComponent 
            startDate={startDate} 
            endDate={endDate} 
            handleStartQuery={queryStartHandler} 
            handleEndQuery={queryEndHandler} 
          />
        </DateRangeContainer>
      </Container>
    </React.Fragment> 
  )
}
//#endregion

// const mapStateToProps = state => {  // store.getState();
//   console.log('state: ', state.areaQuery);
//   return {
//     areaQuery: state.areaQuery,
//     securityToken: state.securityToken
//   };
// };

// ACTION CREATORS
// const buildFeatureLayerCreator = (options) => ({ type: 'BUILD_FEATURE_LAYER', payload: options });

// const actionCreators = { buildFeatureLayerCreator }

export default Map;
// export default connect(null, mapDispatchToProps)(Map);
// export default connect(
//   null,
//   actionCreators
// )(Map);
 