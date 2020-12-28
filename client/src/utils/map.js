import { loadModules } from "esri-loader";

export function loadMap(element, mapConfig, loaderConfig) {
  // TODO: Refactor by importing as ES Modules per ArcGIS JS API v4.18
  return loadModules(["esri/config", "esri/Map", "esri/views/MapView", "esri/layers/GraphicsLayer", "esri/widgets/Sketch"], loaderConfig)
    .then(([esriConfig, Map, MapView, GraphicsLayer]) => {
      // Point to QP ArcGIS Portal
      esriConfig.portalUrl = mapConfig.portalUrl;
      
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