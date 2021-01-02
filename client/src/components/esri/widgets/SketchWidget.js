// NOTE: File is currently not being used

import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

export const SketchWidget = () => {
  const mapRef = useRef('');

  useEffect(() =>  {

    loadModules(['esri/widgets/Sketch', 'esri/Map', 'esri/views/MapView', 'esri/layers/GraphicsLayer'], props.loaderConfig)
    .then(([SketchWidget, Map, MapView, GraphicsLayer]) => {
      const layer = new GraphicsLayer();

      const map = new Map({
        basemap: "topo-vector",
        layers: [layer]
      });

      const view = new MapView({
        container: "map-view-container",
        map: map,
        zoom: 5,
        center: [90, 45]
      });

      const sketch = new SketchWidget({
        layer: layer,
        view: view,
        // graphic will be selected as soon as it is created
        creationMode: "update"
      });

      // Destroy and Cleanup of  
      return () => {
        if (view) {
          view.destroy();
        }
      }

      // view.ui.add(sketch, "top-right");
      // return sketch;

    })

  })

  return (
    <>
      <div className="webmap" ref={mapRef}></div>
    </>
  );

};

// export default SketchWidget;
