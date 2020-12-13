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
import React from "react";

// ESRI ArcGIS API
import { loadModules } from "esri-loader";
import { loadMap } from "../../../utils/map";

// Styled Components
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

// Component
const Map = props => {
  // Set `id` for the map to attach to
  const containerId = "map-view-container";

  // Load map with config properties
  loadMap(containerId, props.mapConfig, props.loaderConfig)
    .then(res => {
      // Call the map loaded event when we get the map view back
      props.onMapLoaded();
      console.log('Promise Res: ', res);
      // console.log('Props: ', props);
      // console.log('window.dojo: ', window.dojoConfig);

      loadModules(["esri/Map", "esri/views/MapView", "esri/layers/GraphicsLayer", "esri/widgets/LayerList",
                                                                                  "esri/widgets/Search", 
                                                                                  "esri/widgets/Sketch"], props.loaderConfig)
        .then(([Map, MapView, GraphicsLayer, LayerListWidget, SearchWidget, SketchWidget]) => {
          const graphicsLayer = new GraphicsLayer();

          const map = new Map({
            basemap: "dark-gray-vector",
            layers: [graphicsLayer]
          });

          const view = new MapView({
            container: "map-view-container",
            map: map,
            ...props.mapConfig
          });

          // Widgets // TODO: Move back to its Component when possible `useRef()`
          const sketch = new SketchWidget({
            id: "ampdSketchWidget",
            // layout: "vertical",
            layout: "horizontal",
            layer: graphicsLayer,
            view: view,
            // Graphic will be selected as soon as it is created
            creationMode: "update"
          });

          var layerList = new LayerListWidget({
            view: view
          });

          var search = new SearchWidget({
            view: view
          });

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
          var pointSymbol = sketch.viewModel.pointSymbol;
          pointSymbol.color = pointFill;
          pointSymbol.outline = pointStroke;
          pointSymbol.size = 8;

          var polylineSymbol = sketch.viewModel.polylineSymbol;
          polylineSymbol.color = polygonStroke.color;
          polylineSymbol.width = polygonStroke.width;

          var polygonSymbol = sketch.viewModel.polygonSymbol;
          polygonSymbol.color = polyFill;
          polygonSymbol.outline = polygonStroke;

          // Add Sketch widget to view
          view.ui.add(layerList, "bottom-right");
          view.ui.add(search, "top-right");
          view.ui.add(sketch, "bottom-right");

        }
      );  
    }
  );

  // Compnent template
  return <Container id={containerId}></Container>;
};

export default Map;
