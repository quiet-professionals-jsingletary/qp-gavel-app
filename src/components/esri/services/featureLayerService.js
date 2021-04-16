import { 
  createFeatureService, 
  addToServiceDefinition 
} from '@esri/arcgis-rest-service-admin';


createFeatureService({
  authentication: session,
  item: {
    "name": "NewEmptyFeature  Service",
    "capabilities": "Create,Delete,Query,Update,Editing"
  }
});