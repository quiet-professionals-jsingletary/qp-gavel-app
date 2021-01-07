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

// React imports
import React, { useEffect, useState } from "react";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
// import { updateConfig } from "../../../redux/reducers/config";

// Esri imports
import { loadModules } from "esri-loader";
import { loadMap } from "../../../utils/map";
import { Geometry } from "@arcgis/core/geometry";
import { geometryEngine } from "@arcgis/core/geometry/geometryEngine";
// import Graphic from "@arcgis/core/Graphic";
// import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

// import Devices from "../../../utils/devices";
import DateRangeExpandWidget from "../../esri/widgets/DateRangeExpandWidget";
import { locationDataSearch } from "../../../redux/reducers/location-data";

// Styled Components
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

// Component
const Map = props => {
  // let baseMap = null;
  // let mapView = null;
  // Set `id` for the map to attach to
  // const geoData = useSelector(state => state.geojsonLayer);
  const containerId = "map-view-container";

  // Redux store state
  const locationData = useSelector(state => state.locationData);
  const securityToken = useSelector(state => state.securityToken);
  const { resJsonData } = locationData;
  const { "TempSecurityToken": tempSecurityToken } = securityToken;

  const dispatch = useDispatch();

  let sketchViewModel,
    instructionsExpand,
    boundaryPolygon,
    validSymbol,
    invalidSymbol,
    buffers,
    newDevelopmentGraphic;

  let intersects = false,
    contains = true;

  // Load map with config properties
  loadMap(containerId, props.mapConfig, props.loaderConfig)
    .then(res => {
      // Call the map loaded event when we get the map view back
      props.onMapLoaded();
      console.log('LoadMap: ', res);
      // console.log('Props: ', props);
      // console.log('window.dojo: ', window.dojoConfig);

      // TODO: Leverage the ES Module `import` feature in ArcGIS API v4.18
      loadModules(["esri/Map",
        "esri/views/MapView",
        "esri/geometry/geometryEngine",
        "esri/Graphic",
        "esri/layers/GraphicsLayer",
        "esri/widgets/Expand",
        "esri/widgets/LayerList",
        "esri/widgets/ScaleBar",
        "esri/widgets/Search",
        "esri/widgets/Sketch",
        "esri/widgets/Sketch/SketchViewModel"], props.loaderConfig)
        .then(([Map, MapView, geometryEngine, Graphic, GraphicsLayer, ExpandWidget, LayerListWidget, ScaleBarWidget, SearchWidget, SketchWidget, SketchViewModel]) => {
          const graphicsLayer = new GraphicsLayer();

          // Basemap
          let baseMap = new Map({
            basemap: "dark-gray-vector",
            layers: [graphicsLayer]
          });

          // MapView
          let mapView = new MapView({
            container: "map-view-container",
            map: baseMap,
            ...props.mapConfig
          });

          // setMapState(baseMap);
          // setViewState(mapView);

          // Widgets 
          // TODO: Move back to its Component when possible `useRef()`
          const sketch = new SketchWidget({
            id: "ampdSketchWidget",
            availableCreateTools: ["point", "circle"],
            // layout: "vertical",
            layout: "horizontal",
            layer: graphicsLayer,
            view: mapView,
            // Graphic will be selected as soon as it is created
            creationMode: "complete"
          });

          const expandDiv = document.createElement("div", {
            innerHTML: DateRangeExpandWidget
          })

          // const dateRangeExpand = new ExpandWidget({
          //   view: mapView,
          //   content: expandDiv
          // });

          const layerList = new LayerListWidget({
            view: mapView
          });

          const search = new SearchWidget({
            view: mapView
          });

          const scaleBar = new ScaleBarWidget({
            view: mapView,
            unit: "dual"
          });

          // const getJsonData = queryDevices(baseMap, mapView);

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

          // Fills
          const polyFill = [116, 150, 179, 0.20];
          const pointFill = [0, 96, 175];

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

          // Add Sketch widget to mapView
          mapView.ui.add([{
            component: search,
            position: "top-right",
            index: 0
          }])
          mapView.ui.add([{
            component: layerList,
            position: "bottom-right",
            index: 0
          }]);
          mapView.ui.add([{
            component: sketch,
            position: "bottom-trailing",
            index: 0
          }]);
          mapView.ui.add([{
            component: expandDiv,
            position: "top-right",
            index: 1
          }]);
          mapView.ui.add([{
            component: scaleBar,
            position: "bottom-left",
            index: 0
          }]);

          //--- Init Resources ---|>
          // setUpExpandWidget();
          setUpGraphicClickHandler();

          mapView.when(function () {
            // Query all buffer features from the school buffers featurelayer
            // bufferLayer.queryFeatures().then(function (results) {
            //   buffers = results.features[0].geometry;
            // });

            // Add the boundary polygon and new lot polygon graphics
            // addGraphics();

            // Create a new instance of sketchViewModel
            sketchViewModel = new SketchViewModel({
              view: mapView,
              layer: graphicsLayer,
              updateOnGraphicClick: false,
              defaultUpdateOptions: {
                // set the default options for the update operations
                toggleToolOnClick: false // only reshape operation will be enabled
              }
            });

            // Listen to sketchViewModel's update event to do
            // graphic reshape or move validation
            sketchViewModel.on(["update", "undo", "redo", "complete"], onGraphicUpdate);
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
          // mapView.graphics.add(pointGraphic);

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

          let theSignalCounts = [];

          let graphicsLayer2 = new GraphicsLayer();
          baseMap.layers.add(graphicsLayer2);

          // Logging geoFence data via `SketchViewModel` + `eventListener` working in tandem
          function logGeometry(geometry) {
            if (geometry.type === "point") {
              // new at 4.6, the compiler knows the geometry is a Point instance
              console.log("point coords: ", geometry.x, geometry.y, geometry.z);
            }
            else {
              // the compiler knows the geometry must be a `Extent | Polygon | Multipoint | Polyline`
              console.log("The value is a geometry, but isn't a point.")
            }
          }

          function onGraphicUpdate(event) {
            // get the graphic as it is being updated
            const graphic = event.graphics[0];
            
            // check if the graphic is intersecting school buffers or is
            // still contained by the boundary polygon as the graphic is being updated
            // intersects = geometryEngine.intersects(buffers, graphic.geometry);
            contains = geometryEngine.contains(boundaryPolygon, graphic.geometry);

            // change the graphic symbol to valid or invalid symbol
            // depending the graphic location
            graphic.symbol =
              intersects || !contains ? invalidSymbol : validSymbol;

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
                console.log("On Complete: ", graphic);
                sketchViewModel.complete();
              }
            } else if (event.state === "complete") {
              logGeometry(graphic.geometry);
              console.log("On Complete: ", graphic);
              // graphic moving or reshaping has been completed or cancelled (distinguish with aborted property)
              // if the graphic is in an illegal spot, call sketchviewmodel's update method again
              // giving user a chance to correct the location of the graphic
              if (!contains || intersects) {
                sketchViewModel.update([graphic], { tool: "reshape" });
                logGeometry(graphic.geometry);
              }
            }
          }

          // This function is called when a user clicks on the view.
          function setUpGraphicClickHandler() {
            mapView.on("click", function (event) {
              // check if the sketch's state active if it is then that means
              // the graphic is already being updated, no action required.
              if (sketchViewModel.state === "active") {
                return;
              }
              mapView.hitTest(event).then(function (response) {
                var results = response.results;
                console.log("Results: ", results);
                // Check if the new development graphic was clicked and pass
                // the graphic to sketchViewModel.update() with reshape tool.
                results.forEach(function (result) {
                  if (
                    result.graphic.layer === sketchViewModel.layer &&
                    result.graphic.attributes &&
                    result.graphic.attributes.newDevelopment
                  ) {
                    sketchViewModel.update([result.graphic], { tool: "reshape" });
                  }
                });
              });
            });
          }

          const queryDevices = (resJsonData, baseMap, mapView) => {
            // TODO: Determine Result Type
            let queryType = ''
            if (resJsonData.areas.length) {
              console.log('inside request');
              console.log(JSON.stringify(resJsonData));

              var countAreas = Object.keys(resJsonData.areas[0]).length;
              var counter = 0;
              // console.log(JSON.stringify('Data: ', resJsonData));

              for (var y = 0; y < countAreas; y++) {
                var countIDs = Object.keys(resJsonData.areas[0].registrationIDs).length;
                console.log('Signal Count: ', countIDs);

                for (var i = 0; i < countIDs; i++) {
                  //console.log("i is : " + i)
                  var countSignals = Object.keys(resJsonData.areas[0].registrationIDs[i].signals).length;
                  var theID = { "registrationID": resJsonData.areas[0].registrationIDs[i].registrationID, "signalcount": countSignals };
                  theSignalCounts.push(theID);

                  for (var x = 0; x < countSignals; x++) {
                    //console.log("x is : " + x)
                    //console.log(JSON.stringify(resJsonData.areas[y].registrationIDs[i].signals[x].longitude));
                    //console.log(JSON.stringify(resJsonData.areas[y].registrationIDs[i].signals[x].latitude));
                    const point = {
                      type: "point", // autocasts as new Point()
                      longitude: resJsonData.areas[0].registrationIDs[i].signals[x].longitude,
                      latitude: resJsonData.areas[0].registrationIDs[i].signals[x].latitude
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

                    const pointGraphic = new Graphic({
                      geometry: point,
                      symbol: markerSymbol,
                      attributes: {
                        "OBJECTID": counter,
                        "registrationID": resJsonData.areas[0].registrationIDs[i].signals[x].registrationID,
                        "ipAddress": resJsonData.areas[0].registrationIDs[i].signals[x].ipAddress,
                        "flags": resJsonData.areas[0].registrationIDs[i].signals[x].flags,
                        "timestamp": resJsonData.areas[0].registrationIDs[i].signals[x].timestamp
                      }
                    });
                    mapView.graphics.add(pointGraphic);
                    // graphics.push(pointGraphic)
                    counter++;
                  }

                }

              }

            }

          }

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

  useEffect(() => {
    dispatch(locationDataSearch({ tempSecurityToken }));
  }, [dispatch, tempSecurityToken])

  // Compnent template
  return (
    <Container id={containerId}>
      {/* <Devices mapState={mapState} viewState={viewState}></Devices>   */}
    </Container>
  )
};

export default Map;
