// Esri
import { UserSession } from "@esri/arcgis-rest-auth";
import { getPortal } from "@esri/arcgis-rest-portal";
import { createFeatureService, addToServiceDefinition } from "@esri/arcgis-rest-service-admin";

// QP
import { getSession } from "../../../utils/session";

// Helpers
import Cookies from "js-cookie";

export const CREATE_FEATURE_SERVICE = () => {
  // TODO: Update sessionId value more dynamic 
  const session = getSession("qp_gavel_app_session");
  console.log("FeatureLayerService built!");

  const timestamp = Date.now();

  return createFeatureService({
    authentication: session,
    item: {
      "name": "feature_layer_service_" + timestamp,
      "capabilities": "Create, Delete, Query, Update, Editing"
    }
    // NOTE: After the service has been created, call addToServiceDefinition() 
    // -- if you'd like to update it's schema.
  });

}

// Add Feature Layer to Service
export const ADD_TO_SERVICE_DEFINITION = (res, layer) => {
  // TODO: Update sessionId value more dynamic 
  const session = getSession("qp_gavel_app_session");
  
  addToServiceDefinition(res.serviceurl, {
    authentication: session,
    layers: [layer],
    tables: []
  });

}
