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
        "esri/Graphic",
        "esri/layers/GraphicsLayer",
        "esri/widgets/Expand",
        "esri/widgets/LayerList",
        "esri/widgets/Search",
        "esri/widgets/Sketch"], props.loaderConfig)
        .then(([Map, MapView, Graphic, GraphicsLayer, ExpandWidget, LayerListWidget, SearchWidget, SketchWidget]) => {
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
            layout: "vertical",
            // layout: "horizontal",
            layer: graphicsLayer,
            view: mapView,
            // Graphic will be selected as soon as it is created
            creationMode: "update"
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
            position: "bottom-left",
            index: 1
          }]);

          mapView.ui.add([{
            component: sketch,
            position: "bottom-trailing",
            index: 0
          }]);

          mapView.ui.add([{
            component: DateRangeExpandWidget,
            position: "top-right",
            index: 1
          }]);

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

          let theSignalCounts = [];

          let graphicsLayer2 = new GraphicsLayer();
          baseMap.layers.add(graphicsLayer2);

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
