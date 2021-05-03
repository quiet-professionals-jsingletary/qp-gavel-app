// Esri
import { UserSession } from "@esri/arcgis-rest-auth";
import { getPortal } from "@esri/arcgis-rest-portal";
import { createFeatureService, addToServiceDefinition } from "@esri/arcgis-rest-service-admin";

// QP
import { getSession } from "../../../utils/session";

// Helpers
import Cookies from "js-cookie";

// Other
import { parse, stringify } from 'flatted';

// const session = getSession("qp_gavel_app_session");
// console.log("Session: ", session);

// BUG: Running into CORS issues when trying to access QPTampa Portal
//!Pointing to ArcGis Portal in the meantime
export const CREATE_FEATURE_SERVICE = () => {
  // TODO: Update sessionId value more dynamic 
  // console.log("FeatureLayerService built!");
  
  const timestamp = Date.now();
  const session = getSession("qp_gavel_app_session");
  // console.log("Session: ", session);

  return createFeatureService({
    // portal: "https://qptampa.maps.arcgis.com",
    authentication: session,
    item: {
      "name": "feature_layer_service_" + timestamp,
      "serviceDescription": "A Gavel service designed to hold data for a single Feature Layer",
      "hasStaticData": false,
      "maxRecordCount": 1000,
      "supportedQueryFormats": "JSON",
      "capabilities": "Create, Delete, Query, Update",
      "copyrightText": "&copy;2021 Quiet Professionals, LLC",
      "description": "Feature Service Layer",
      "spatialReference": {
        "wkid": 102100
      },
      "initialExtent": {
        "xmin": -9177882,
        "ymin": 4246761,
        "xmax": -9176720,
        "ymax": 4247967,
        "spatialReference": {
          "wkid": 102100,
          "latestWkid": 3857
        }
      },
      "allowGeometryUpdates": false,
      "units": "esriMeters",
      "xssPreventionInfo": {
        "xssPreventionEnabled": true,
        "xssPreventionRule": "input",
        "xssInputRule": "rejectInvalid"
      }
    }
    // NOTE: After the service has been created, call addToServiceDefinition() 
    // -- if you'd like to update it's schema.
  });

}

// Add Feature Layer to Service
export const ADD_TO_SERVICE_DEFINITION = (res, layer) => {
  // const encodedUrl = JSON.stringify(res.encodedServiceURL)
  const serviceUrl = res.serviceurl;
  const layerDef = layer.layer;

  const a = [layerDef];
  a[0].a = a;
  a.push(a);

  const layerJson = stringify(a);
  // const layerJson = layer.layerView;
  // TODO: Update sessionId value more dynamic 
  const session = getSession("qp_gavel_app_session");
  // const token = session.token;
  console.log("Session: ", session);
  console.log("Layer JSON: ", layerJson);
  
  return addToServiceDefinition(serviceUrl, {
    authentication: session,
    layers: [layerJson],
    tables: [],
    // params: [token]
    // portal: "https://qptampa.maps.arcgis.com"
  });
}
