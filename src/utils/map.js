import { loadModules } from "esri-loader";

export function loadMap(element, mapConfig, loaderConfig) {
  // TODO: Refactor by importing as ES Modules per ArcGIS JS API v4.18
  // TODO: Refactor all Esri 'widget' constructors / instances to live here  
  return loadModules(["esri/Map", "esri/views/MapView", "esri/layers/GraphicsLayer"], loaderConfig)
    .then(([Map, MapView, GraphicsLayer]) => {
            
      const layer = new GraphicsLayer();

      // Component or app was likely destroyed // TODO: Error handling needed
      if (!element) return;

      // Create the Map
      const map = new Map(mapConfig);

      // Show the map at the element
      let view = new MapView({
        map,
        container: element,
        layers: [layer],
        ...mapConfig
      });
      
      // Wait for the view to load // NOTE: may not need this?
      return view.when(() => {
        // Return a reference to the view
        return view;
      });
  });
}
