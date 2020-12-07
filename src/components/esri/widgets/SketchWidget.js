// NOTE: File is currently not being used

import { useEffect } from 'react';
import { loadModules } from 'esri-loader';

export const SketchWidget = props => {

  console.log('Props', props);

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

      view.ui.add(sketch, "top-right");
      return sketch;
    })

  })

};

// export default SketchWidget;
