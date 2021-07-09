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

//#region [notes]
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

//#region [imports]
// React
import React, { useEffect, useState } from "react";
import ReactDOM, { render } from "react-dom";

// Redux
import { connect, Provider, useDispatch, useSelector, useStore } from "react-redux";
import { refIdQuery } from "../../../redux/reducers/refid-query";
import {
  addToStoreAction,
  sendAreaQueryAction,
  areaQueryDoneAction,
  areaQueryPutsAction,
  areaQueryStatusAction
} from "../../../redux/reducers/area-query";
import {
  addPatternToStoreAction,
  sendPatternQueryAction,
  patternQueryDoneAction,
  patternQueryPutsAction,
  patternQueryStatusAction
} from "../../../redux/reducers/pattern-of-life-query";

import * as areaTypes from "../../../redux/types/area-types";
import * as patternTypes from "../../../redux/types/pattern-of-life-types";
// import { createSelector } from 'reselect';
// import { updateConfig } from "../../../redux/reducers/config";

// Esri
import { loadModules } from "esri-loader";
import Portal from "@arcgis/core/portal/Portal";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Loader from "calcite-react/Loader";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from '@arcgis/core/widgets/Expand';
import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from "@arcgis/core/widgets/Legend";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Search from "@arcgis/core/widgets/Search";
import Sketch from "@arcgis/core/widgets/Sketch";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import DatePicker from "@arcgis/core/widgets/support/DatePicker";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion";
import {
  CREATE_FEATURE_SERVICE,
  ADD_TO_SERVICE_DEFINITION,
  APPLY_FEATURES_FROM_MEMORY
} from "../services/FeatureLayerService";
////import  { geometryEngine } from "@arcgis/core/geometry/geometryEngine";
import { coordinateFormatter, toLatitudeLongitude } from "@arcgis/core/geometry/coordinateFormatter";
import { FeatureLayerView } from '@arcgis/core/views/layers/FeatureLayerView';
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
// import GroupLayer from "@arcgis/core/layers/GroupLayer";// import DateTimePickerInput from "@arcgis/core/form/elements/inputs/DateTimePickerInput";
import { Geometry } from "@arcgis/core/geometry";
// import Point from "@arcgis/core/geometry/Point";

// Calcite / Styles
import Alert, {
  AlertTitle,
  AlertMessage
} from 'calcite-react/Alert';
import Button, {
  ButtonGroup
} from "calcite-react/Button";

import Card, {
  CardTitle,
  CardContent,
  CardImage
} from 'calcite-react/Card';

// QP
import { loadMap } from "../../../utils/map";
import { calcDistance } from "../../../utils/calculate";
import { dateToIsoString } from "../../../utils/format";
import { featureLayerBuilder } from "../layers/FeatureLayerBuilder";
import { patternOfLifeBuilder } from "../layers/PatternOfLifeBuilder";
import {
  AlertBuilderInfo,
  AlertBuilderProcess,
  AlertBuilderProcessSuccess,
  AlertBuilderWarning,
  AlertBuilderNoResultsWarning,
  AlertBuilderDanger
} from "../../shared/AlertBuilder";
import DateRangeComponent from "../widgets/DateRange";
import NoticeBuilder from "../../shared/NoticeBuilder";
// import ActionBarPrimary from "../../ActionBarPrimary";
// import DateRangeExpandClass from "../../esri/widgets/DateRangeExpandClass";
// import DateRangeExpandWidget from "../../esri/widgets/DateRangeExpandWidget";
// import PointGraphicBuilder from "../layers/PointGraphicBuilder";

require('dotenv').config();

import styled from "styled-components";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
//#endregion

//#region [styles]
const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const DateRangeContainer = styled.div`
  min-height: 10vh;
  width: 100%;
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

const SearchBarContainer = styled.div`
  min-height: 10vh;
  width: 100%;
  padding: 10px;
`;

//#endregion

/*/
  *  ┌─────────────────────┐
  *  │ |> Map Component    │
  *  └─────────────────────┘
/*/
//#region [component]
const MapComponent = props => {

  // Aliases
  const containerId = "mapViewContainer";
  const dateRangeId = "dateRangeContainer";
  const startDateRangeId = "startDateRangeContainer";
  const endDateRangeId = "endDateRangeContainer";

  // Redux store
  const store = useStore();
  const dispatch = useDispatch();
  // const refIdQuery = useSelector(state => state.refIdQuery);
  const areaQueryState = useSelector(state => state.areaQuery);
  const areaQueryStatus = useSelector(state => state.areaQuery.status);
  const patternQueryState = useSelector(state => state.patternQuery);
  const patternQueryStatus = useSelector(state => state.patternQuery.status);
  // const securityTokenState = useSelector(state => state.securityToken);
  // const securityToken = useSelector(state => state.securityToken);
  // const { TempSecurityToken: tempSecurityToken } = securityTokenState;

  /*/
    *  ┌─────────────────────────────┐
    *  │ |> Local & Global States    │
    *  └─────────────────────────────┘
  /*/
  // DatePicker
  // TODO: Consider replacing `useState` with `useReducer`.
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [baseMapState, setBaseMapState] = useState(null);
  const [mapViewState, setMapViewState] = useState(null);

  // FeatureLayerBuilder
  // const store = useStore();
  const [featureServiceUrl, setFeatureServiceUrl] = useState("");

  // const { latitude, longitude, radius } = areaQueryState;

  let baseMap = null;
  let mapView = null;

  let sketch,
    instructionsExpand,
    boundaryPolygon,
    validSymbol,
    invalidSymbol,
    buffers,
    newDevelopmentGraphic

  let intersects = false;
  let contains = true;
  let layerCount = 0;

  let featuredGraphicsLayer, graphicsLayerGeofence

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
    const sDateObj = new Date(Date.now());
    const eDateObj = new Date(Date.now());
    const sDate = sDateObj.setDate(sDateObj.getDate() - 8);
    const eDate = eDateObj.setDate(eDateObj.getDate() - 1);
    const sDateIso = dateToIsoString(new Date(sDate));
    const eDateIso = dateToIsoString(new Date(eDate));

    // console.log('Default State: ', store.getState());
    console.log('Start Date: ', sDateObj);

    // Add local state
    setStartDate(sDate);
    setEndDate(eDate);

    // Add to Redux store and initialize
    // TODO: Create a utility reducer that will be the single source for time/dates 
    dispatch({ type: areaTypes.ADD_TO_STORE, payload: { startDate: sDateIso } });
    dispatch({ type: areaTypes.ADD_TO_STORE, payload: { endDate: eDateIso } });
    dispatch({ type: patternTypes.ADD_PATTERN_TO_STORE, payload: { startDate: sDateIso } });
    dispatch({ type: patternTypes.ADD_PATTERN_TO_STORE, payload: { endDate: eDateIso } });

  }, []);

  /*/
    *  ┌─────────────────────────────────┐
    *  │ |> Esri-Loader - Load Modules   │
    *  └─────────────────────────────────┘
  /*/
  useEffect(() => {
    //#region [core]
    loadMap(containerId, props.mapConfig, props.loaderConfig)
      .then(res => {
        console.log('LoadMap(): ', res);
        // console.log('Props: ', props);
        // console.log('window.dojo: ', window.dojoConfig);

        // TODO: Leverage the ES Module `import` feature in ArcGIS API v4.18
        loadModules([
          "esri/config",
          "esri/geometry/geometryEngine",], props.loaderConfig)
          .then(([
            esriConfig,
            geometryEngine]) => {

            // let featuredGroupLayer = new GroupLayer({
            //   title: "Results",
            //   visible: true,
            //   visibilityMode: "exclusive",
            //   layers: [],
            //   opacity: 0.75
            // });

            //_esriConfig.portalUrl = "https://qptampa.maps.arcgis.com/";
            // esriConfig.apiKey = process.env.REACT_APP_ESRI_API_KEY;
            // console.log('Esri API Key: ', process.env.REACT_APP_ESRI_API_KEY);

            graphicsLayerGeofence = new GraphicsLayer({ title: "Geofences" });
            // featuredGraphicsLayer = new GraphicsLayer({ title: "Basemap" });

            // spatialReference
            const spatialRef = new SpatialReference({ "wkid": 102100, "latestWkid": 3857 });
            // const spatialRef = new SpatialReference({ "wkid": 4326 });
            // Basemap
            baseMap = new Map({
              basemap: "dark-gray-vector",
              layers: [graphicsLayerGeofence]
            });
            // Mapview
            mapView = new MapView({
              // let mapView = res;  
              // res = {
              container: "mapViewContainer",
              map: baseMap,
              extent: {
                spatialReference: spatialRef,
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

            // Add baseMap & mapView to Local State
            setBaseMapState(baseMap);
            setMapViewState(mapView);

            // mapView.extent = new Extent({
            //   xmin: -9177882,
            //   ymin: 4246761,
            //   xmax: -9176720,
            //   ymax: 4247967,
            //   spatialReference: {
            //     wkid: 102100
            //   }
            // });

            /*/
             *  ┌─────────────────────────────┐
             *  │ |> Widgets / Query Tools    │
             *  └─────────────────────────────┘
            /*/
            // TODO: Determine LoE to move all widgets into `mapView.when()` promise
            let dateObj = new Date();

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

            //#region [initialize]
            //--- Mount view "when" loaded ---|>
            mapView.when(() => {
              // TODO: Move back to its Component when possible `useRef()`
              // --Sketch Tool
              sketch = new Sketch({
                id: "ampdSketchWidget",
                availableCreateTools: ["point", "circle"],
                defaultCreateOptions: "click",
                // layout: "vertical",
                layout: "horizontal",
                layer: graphicsLayerGeofence,
                view: mapView,
                // Graphic will be selected as soon as it is created
                creationMode: "single"
              });
              // --Legend
              const legend = new Legend({
                view: mapView,
                layerInfos: [{
                  layer: null,
                  title: "Legend"
                }]
              });

              // --LayerList
              const layerList = new LayerList({
                view: mapView,
                label: "Active Layers",
                style: "card",
                visibleElements: {
                  statusIndicators: true
                },
                // Executes for each ListItem in the LayerList
                listItemCreatedFunction: event => {

                  // The event object contains properties of the
                  // layer in the LayerList widget.

                  layerCount++;
                  const listItem = event.item;

                  legend.layerInfos.layer = listItem;

                  // Primary action icon (All layers)
                  // listItem.panel = {
                  //   content: document.getElementById("myDiv"),
                  //   className: "esri-icon-handle-horizontal",
                  //   title: "Save Layer",
                  //   open: listItem.hidden
                  // };

                  // Secondary action icon (Specific)
                  if (listItem.title !== "Geofences") {
                    // Openitem in the LayerList
                    listItem.open = open;
                    // Add descriptive title
                    listItem.title = "Layer " + layerCount;
                    // NOTE: Trigger-Actions - See `region[triggers]`
                    listItem.actionsSections = [
                      [
                        {
                          title: "Save Layer",
                          className: "esri-icon-save gavel-save-layer-status",
                          id: "layerSave"
                        },
                        {
                          title: "Delete Layer",
                          className: "esri-icon-trash gavel-delete-layer-status",
                          id: "layerDelete"
                        }
                      ]
                    ];
                  }
                }
              });

              let expandLegend = new Expand({
                view: mapView,
                content: legend,
                expandTooltip: "Toggle Legend",
              });

              let expandSketch = new Expand({
                view: mapView,
                content: sketch,
                expandTooltip: "Sketch Tools",
                group: "bottom-right"
              });

              let expandLayerList = new Expand({
                view: mapView,
                content: layerList,
                expandTooltip: "Toggle Layers",
                group: "bottom-right"
              });

              let expandDateRange = new Expand({
                view: mapView,
                content: dateRangeCard,
                expandIconClass: "esri-icon-calendar",
                expandTooltip: "Query Date Range",
                group: "bottom-right"
              });

              let expandBaseMap = new Expand({
                content: new BasemapGallery({
                  view: mapView
                }),
                view: mapView,
                expandIconClass: "esri-icon-basemap",
                group: "top-left"
              });

              let dateRangeElement = document.getElementById('dateRangeCard');
              dateRangeElement.removeAttribute('qp-hidden');

              // Geofences
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

              // Listen to sketchViewModel's update event to do
              // graphic reshape or move validation
              // sketchViewModel.on(["update", "undo", "redo"], onGraphicUpdate);
             sketch.on(["create", "complete"], onGraphicCreate);

              // setUpExpandWidget();
              setUpGraphicClickHandler();

              /*/
              *  ┌───────────────────────────┐
              *  │ |>  Trigger Actions       │
              *  └───────────────────────────┘
              /*/
              // #region [triggers] 
              // LayerList
              // _Reference: "https://developers.arcgis.com/javascript/latest/sample-code/popup-custom-action/"
              layerList.on("trigger-action", event => {

                // Capture the action id.
                console.log("LayerList Event Listener: ", event);
                const id = event.action.id;
                const layer = event.item;
                let serviceUrl = '';
                let serviceName = '';
                let serviceDetails = {}

                legend.layerInfos.layer = layer;

                if (id === "layerSave") {
                  const alert = document.getElementById('alertProcessStart');
                  alert.active = "true";
                  // <NoticeBuilder
                  //   onInfoClick={event => {
                  //     alert('info clicked')
                  //     event.stopPropagation()
                  //   }}
                  // />
                  // TODO: Move to an outside function
                  // Create feature service and save feature layer 
                  console.log("Save feature layer method called.");
                  CREATE_FEATURE_SERVICE()
                    .then(res => {
                      serviceUrl = res.serviceurl;
                      serviceName = res.name;
                      serviceDetails = { serviceUrl, serviceName };
                      setFeatureServiceUrl(serviceUrl);
                      return ADD_TO_SERVICE_DEFINITION(res, layer);
                    })
                    .then(res1 => {
                      return APPLY_FEATURES_FROM_MEMORY(res1, layer, serviceDetails);
                    })
                    .then(res2 => {
                      const alertSuccess = document.getElementById('alertSuccess');
                      alertSuccess.active = "true";
                      // const json = res2.json();
                      console.log("EDITS_APPLIED_FEATURE_LAYER: ", res2);
                    })
                    .catch(error => {
                      const alertDanger = document.getElementById('alertDanger');
                      alertDanger.active = "true";
                      
                      console.error("ERROR: Save Feature Layer: ", error);
                    });

                } else if (id === "layerDelete") {
                  // if the information action is triggered, then
                  console.log("Delete feature layer method called.");
                }

              });

              async function handlePatternOfLifeQuery() {
                // Access state from store
                const gavelState = store.getState();
                console.log("Gavel State: ", gavelState);

                // const layer = event.item;
                // TODO: Specific to a single ID
                const selectedFeature = mapView.popup.selectedFeature;

                // legend.layer = mapView.popup.selectedFeature;

                // NOTE: Ad-Hoc Solution - Leveraging areaQuery state for date range
                // const tempToken = tempSecurityToken;
                const registrationID = selectedFeature.attributes.registrationID;
                const securityToken = gavelState.securityToken.TempSecurityToken;
                const patternQueryState = gavelState.patternQuery;

                const tempStartDate = patternQueryState.startDate;
                const tempEndDate = patternQueryState.endDate;

                // TODO: SoC - Move all `Pattern of Life` handlers to `PatternOfLifeService.js`
                function handleSecurityToken() {
                  console.log("POL STEP 1");
                  const tempSecurityToken = securityToken;
                  console.log("securityToken: ", tempSecurityToken);
                  return tempSecurityToken;
                }

                function handleRegistrationId() {
                  console.log("POL STEP 2");
                  // const securityToken = gavelState.securityToken.TempSecurityToken;
                  const registrationID = patternQueryState.registrationIDs;
                  // const registrationID = selectedFeature.attributes.registrationID;
                  // dispatch({  type: patternTypes.ADD_PATTERN_TO_STORE, payload: { "registrationIDs": registrationID } });

                  return registrationID;
                }

                function handleTokenizedPayload(TempSecurityToken) {
                  console.log("POL STEP 3", TempSecurityToken);
                  const registrationID = patternQueryState.registrationIDs;
                  // Destructure `patternQuery` Redux object from store
                  const { startDate, endDate } = patternQueryState;
                  // Restructure new object using destructured data
                  const tokenizedPayload = { startDate, endDate, registrationID, TempSecurityToken }
                  console.log("tokenizedPayload: ", tokenizedPayload);
                  return tokenizedPayload;
                }

                function handleSendPatternQuery(tokenizedPayload) {
                  console.log("POL STEP 4");
                  dispatch({ type: patternTypes.SEND_PATTERN_QUERY, payload: tokenizedPayload });
                  return tokenizedPayload;
                }

                function resolvePatternOfLife() {
                  console.log("POL COMPLETE");
                  // TODO: Init `Success Alert` here
                  // Push Notification
                  // Resolve(notify)
                  return "success";
                }

                // Pattern of Life - Async / Await
                try {
                  // _Add function names here
                  const stepOne = await handleSecurityToken();
                  const stepTwo = await handleRegistrationId();
                  const stepThree = handleTokenizedPayload({ "securityToken": stepOne, "registrationID": stepTwo });
                  const stepFour = await handleSendPatternQuery(stepThree);
                  const finalize = resolvePatternOfLife(stepFour);

                  console.log(`Patern Of Life Complete: ${finalize}`);
                } catch (error) {
                  console.error("ERROR: Pattern Of Life : ", error);
                }
              }

              // PopUp Template
              mapView.popup.on("trigger-action", event => {
                const id = event.action.id;
                // const layerItem = event.item.layer;
                
                if (id === "patternOfLife") {
                  const alert = document.getElementById('alertProcessStart');
                  alert.active = "true";
                  // Init Pattern of Life
                  handlePatternOfLifeQuery();
                }

              });

                //
              mapView.popup.watch("selectedFeature", graphic => {
                if (graphic) {
                  let graphicTemplate = graphic.getEffectivePopupTemplate();
                  // graphicTemplate.actions.items[0].visible = graphic.attributes.registrationID;
                }
                // const featureSelected = mapView.popup.selectedFeature;
                // const popup = mapView.popup;
                // const popup = mapView.popup;
                // const registrationID = popup.features[0].attributes.registrationID;

                console.log("Listening for ", graphic);
                // console.log("Popup Info", popup);
                // console.log("Popup Features: ", features);
                // console.log("Selected Feature: ", featureSelected);

                // dispatch({ type: patternTypes.ADD_PATTERN_TO_STORE, payload: { "registrationIDs": featureSelected.attributes.registrationID } });
                // return selectedFeature;

              });
              //#endregion

              // Add Sketch 2// mapView.ui.add(dateRangeCard, "bottom-right", 0);
              mapView.ui.add(search, "top-right", 0);
              mapView.ui.add(scaleBar, "bottom-left", 1);
              mapView.ui.add(expandLayerList, "bottom-right", 0);
              mapView.ui.add(expandSketch, "bottom-right", 0);
              mapView.ui.add(expandDateRange, "bottom-right", 0);
              mapView.ui.add(expandBaseMap, "top-left", 0);
              mapView.ui.add(expandLegend, "bottom-left", 1);

            });
            //#endregion
            
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
                // BUG: Max radius guard is not capped off (2500m)
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
              if (event.toolEventInfo &&
                (event.toolEventInfo.type === "move-stop" ||
                  event.toolEventInfo.type === "reshape-stop")
              ) {
                console.log("On Stop / Reshape: ", graphic);
                if (contains && !intersects) {
                  console.log("On Reshape / Complete: ", graphic);
                  // sketchViewModel.complete();
                }
              } else if (event.state === "complete") {
                console.log("On Complete: ", graphic);
                // sketchViewModel.complete();
                logGeometry(graphic.geometry);

                // graphic moving or reshaping has been completed or cancelled (distinguish with aborted property)
                // if the graphic is in an illegal spot, call sketchviewmodel's update method again
                // giving user a chance to correct the location of the graphic
                if (!contains || intersects) {
                  console.log("On Reshape: ", graphic);
                  // sketchViewModel.update([graphic], { tool: "reshape" });
                  logGeometry(graphic.geometry);
                }
              }
            }

            // This function is called when a user clicks on the view.
            const setUpGraphicClickHandler = () => {
              mapView.on("click", function (event) {
                // check if the sketch's state active if it is then that means
                // the graphic is already being updated, no action required.
                if (sketch.state === "active") {
                  return;
                }
                mapView.hitTest(event).then((response) => {
                  var results = response.results;
                  console.log("HitTest Results: ", results);
                  // Check if the new development graphic was clicked and pass
                  // the graphic to sketchViewModel.update() with reshape tool.
                  results.forEach(result => {
                    if (
                      result.graphic.layer === sketch.layer &&
                      result.graphic.attributes &&
                      result.graphic.attributes.newDevelopment
                    ) {
                      console.log('sketch graphic updated', result);
                      sketch.update([result.graphic], { tool: "reshape" });
                    }
                    else {
                      console.log('sketch: No graphic clicked and passed in', result);
                    }

                  });

                });

              });

            }

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

          });

        // Call the map loaded event   when we get the map view back
        props.onMapLoaded();

      });
      //#endregion

  }, []);

  // NOTE: Listen for status updates
  if (areaQueryStatus == "success") {
    console.log("Data Status: ", areaQueryStatus);
    // const renderFeatureLayer = <FeatureLayerBuilder baseMap={baseMapState} mapView={mapViewState} payload={areaQueryState} />
    featureLayerBuilder(baseMapState, mapViewState, areaQueryState)
      .then(res => {
        const submitDatesBtn = document.getElementById('submitDatesBtn');
        const alertSuccess = document.getElementById('alertSuccess');

        submitDatesBtn.removeAttribute('loading');
        submitDatesBtn.removeAttribute('disabled');
        // alertSuccess.active = true;

      });
  }

  if (patternQueryStatus == "success") {
    console.log("Data Status: ", patternQueryStatus);
    // const renderFeatureLayer = <FeatureLayerBuilder baseMap={baseMapState} mapView={mapViewState} payload={areaQueryState} />
    patternOfLifeBuilder(baseMapState, mapViewState, patternQueryState);
  }

  // Date Range Event Handlers
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

  // Render Component
  return (
    <React.Fragment>
      <AlertBuilderInfo />
      <AlertBuilderProcess />
      <AlertBuilderProcessSuccess />
      <AlertBuilderWarning />
      <AlertBuilderNoResultsWarning />
      <AlertBuilderDanger />
      <Container id={containerId} qp-hidden="true" >
        {/* <ActionBarPrimary></ActionBarPrimary> */}
        <Card
          id="dateRangeCard"
          bar="blue"
          className={'esri-widget'}
          // TODO: Move inline style to the global / custom .scss file
          style={{ mar1gin: '0 5px', flex: '1 0 25%' }}>
          <CardContent>
            <CardTitle>Date Range:</CardTitle>
            <DateRangeComponent
              className={'esri-widget'}
              startDate={startDate}
              endDate={endDate}
              handleStartQuery={queryStartHandler}
              handleEndQuery={queryEndHandler}
            />

            {/* <Button green>Submit</Button> */}

          </CardContent>

        </Card>

      </Container>

    </React.Fragment>
  )
}
//#endregion

export default MapComponent;
