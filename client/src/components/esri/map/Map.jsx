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
// -- by listening for any new props (using componentWillReceiveProps)
// --
// --------------------------------------------------------------------------------
//#endregion

//#region [imports]
// React
import React, { useEffect, useState } from "react";
import ReactDOM, { render } from "react-dom";

// Redux
import { connect, useSelector, useDispatch } from "react-redux";
import { refIdQuery } from "../../../redux/reducers/refid-query";
import areaQuery, { 
        addToStoreAction, 
        sendAreaQuery, 
        areaQueryDone, 
        areaQueryPuts 
      } from "../../../redux/reducers/area-query";
// import { updateConfig } from "../../../redux/reducers/config";

// Esri
import { loadModules } from "esri-loader";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import DatePicker from "@arcgis/core/widgets/support/DatePicker"; 
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion";
import { Geometry } from "@arcgis/core/geometry";
import { distance, geometryEngine } from "@arcgis/core/geometry/geometryEngine";
import { coordinateFormatter, toLatitudeLongitude } from "@arcgis/core/geometry/coordinateFormatter";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
// import DateTimePickerInput from "@arcgis/core/form/elements/inputs/DateTimePickerInput";

// Calcite / Styles
import Button, { ButtonGroup } from 'calcite-react/Button';

// QP
import { loadMap } from "../../../utils/map";
import { calcDistance } from "../../../utils/calculate";
import DateRangeComponent from "../widgets/DateRange";
import FeatureLayerBuilder, { buildFeatureLayer } from "../layers/FeatureLayerBuilder";
// import DateRangeExpandClass from "../../esri/widgets/DateRangeExpandClass";
// import DateRangeExpandWidget from "../../esri/widgets/DateRangeExpandWidget";
// import PointGraphicBuilder from "../layers/PointGraphicBuilder";
// #endregion

// #region [styles]
import styled from "styled-components";
import { areaQueryPushSaga } from "../../../redux/actions/area-query-actions";
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
  let baseMap = null;
  let mapView = null;
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

  const containerId = "mapViewContainer";
  const dateRangeId = "dateRangeContainer";
  const startDateRangeId = "startDateRangeContainer";
  const endDateRangeId = "endDateRangeContainer";

  // Redux store state
  const dispatch = useDispatch();
  const securityToken = useSelector(state => state.securityToken);
  const { TempSecurityToken: tempSecurityToken } = securityToken;
  const refIdQuery = useSelector(state => state.refIdQuery);
  // const areaQuery = useSelector(state => state.areaQuery);
  const isAreaQueryDataLoaded = useSelector(state => state.areaQuery.status);

  // const { latitude, longitude, radius } = areaQuery;

  let sketchViewModel,
    instructionsExpand,
    boundaryPolygon,
    validSymbol,
    invalidSymbol,
    buffers,
    newDevelopmentGraphic,
    graphicsLayer,
    graphicsLayer2,
    graphicsLayer3

  let intersects = false;
  let contains = true;

  // Fills
  const polyFill = [116, 150, 179, 0.20];
  const pointFill = [0, 96, 175];

  // GraphicsLayer Color Overrides
  // Strokes
  const polygonStroke = {
    color: [0, 96, 175],
    width: 2
  };

  const pointStroke = {
    color: [3, 17, 30],
    width: 1
  };

  // TODO: Move `queryDevices` function to its own component file
  // let queryDevices = null; 

  /*/
    *  ┌─────────────────────────────────┐
    *  │ |> Esri-Loader - Load Modules   │
    *  └─────────────────────────────────┘
  /*/
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
        "esri/geometry/geometryEngine",
        "esri/Graphic",
        "esri/Map",
        "esri/layers/GraphicsLayer",
        "esri/widgets/Expand",
        "esri/widgets/LayerList",
        "esri/widgets/ScaleBar",
        "esri/widgets/Search",
        "esri/widgets/Sketch",
        "esri/widgets/Sketch/SketchViewModel",
        "esri/views/MapView"], props.loaderConfig)
          .then(([geometryEngine, 
            Graphic, 
            Map, 
            GraphicsLayer, 
            Expand, 
            LayerList, 
            ScaleBar, 
            Search, 
            Sketch, 
            SketchViewModel, 
            MapView]) => {

          const graphicsLayer = new GraphicsLayer({
            title: "Basemap"
          });
          // Basemap
          baseMap = new Map({
            basemap: "topo-vector",
            layers: [graphicsLayer]
          });
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
            // popup: {
            //   dockEnabled: true,
            //   dockOptions: {
            //     position: "bottom",
            //     breakpoint: false
            //   }
            // },
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

          /*/
            *  ┌─────────────────────────────┐
            *  │ |> Widgets / Query Tools    │
            *  └─────────────────────────────┘
          /*/
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
          // const layerList = new LayerList({
          //   view: mapView
          // });
          // --Search Tool
          const search = new Search({
            view: mapView
          });
          // --Scale Bar
          const scaleBar = new ScaleBar({
            view: mapView,
            unit: "dual"
          });

          // const getJsonData = queryDevices(baseMap, mapView);

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
          // mapView.ui.add([{
          //   component: layerList,
          //   position: "bottom-right"
          // }]);

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
              layer: graphicsLayer2,
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
              layer: graphicsLayer2,
              view: mapView,
              // Graphic will be selected as soon as it is created
              creationMode: "update"
            });

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

          // Add graphics to mapView
          mapView.graphics.add(pointGraphic);

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

          graphicsLayer2 = new GraphicsLayer({ title: "Geofences" });
          // graphicsLayer3 = new GraphicsLayer({ title: "Geofences" });
          baseMap.layers.add(graphicsLayer2);
          // baseMap.layers.add(graphicsLayer3);

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

            if (event.state ==="update" && event.tool === "circle") {
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
            graphic.symbol = (intersects) ? invalidSymbol : validSymbol

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

          // setUpExpandWidget();
          setUpGraphicClickHandler();

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

      return res;
      
    });

  const dateObj = new Date('16 Jun 2017 00:00:00 GMT');
  const minDate = dateObj.getUTCMilliseconds();
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

  if (isAreaQueryDataLoaded == "success") {
    console.log('Data Loaded: ', isAreaQueryDataLoaded);
  }

  // Component template
  return (
    <>
      <Container id={containerId}>
        <DateRangeContainer id={dateRangeId} className={'esri-widget'}>
          <DateRangeComponent></DateRangeComponent>
        </DateRangeContainer>
        <FeatureLayerBuilder baseMap={baseMap} mapView={mapView}></FeatureLayerBuilder>
      </Container>
    </>
  );
}

const mapStateToProps = state => {  // store.getState();
  console.log('state: ', state.areaQuery);
  return {
    areaQuery: state.areaQuery,
    securityToken: state.securityToken
  };
};

// const mapDispatchToProps = (dispatch, props) => ({
//   buildFeatureLayer: () => {
//     dispatch({
//       type: BUILD_FEATURE_LAYER,
//       payload: {},
//     });
//   },
// });
//#endregion

export default connect(mapStateToProps, null)(Map);
 