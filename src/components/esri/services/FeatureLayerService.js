// Esri
import { UserSession } from "@esri/arcgis-rest-auth";
import { getPortal } from "@esri/arcgis-rest-portal";
import { applyEdits } from '@esri/arcgis-rest-feature-layer';
import { 
  createFeatureService,
  addToServiceDefinition 
} from "@esri/arcgis-rest-service-admin";

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
  const session = getSession("qp_gavel_app_session");
  const timestamp = Date.now();

  return createFeatureService({
    // portal: "https://qptampa.maps.arcgis.com",
    authentication: session,
    item: {
      "name": "gavel_feature_service_" + timestamp,
      "serviceDescription": "A <strong>Feature Service</strong> designed to hold data from a single <strong>Feature Layer</strong>",
      "hasStaticData": false,
      "maxRecordCount": 1000,
      "supportedQueryFormats": "JSON",
      "capabilities": "Create,Delete,Query,Update,Sync",
      "copyrightText": "&copy;2021 Quiet Professionals, LLC",
      "description": "A <strong>Feature Service</strong> designed to hold data from a single <strong>Feature Layer</strong>",
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
      "allowGeometryUpdates": true,
      "units": "esriMeters",
      "xssPreventionInfo": {
        "xssPreventionEnabled": true,
        "xssPreventionRule": "input",
        "xssInputRule": "rejectInvalid"
      }

    }
    
  });

}

// NOTE: Add Feature Layer Definitions / Schema to Service
export const ADD_TO_SERVICE_DEFINITION = (res, layer) => {
  const serviceUrl = res.serviceurl;
  const layerDef = layer;
  // TODO: Update sessionId value more dynamic 
  const session = getSession("qp_gavel_app_session");
  const timestamp = Date.now();

  console.log("FEATURE_SERVICE_CREATED: ", res);
  console.log("Session: ", session);
  console.log("Layer JSON: ", layerDef);

  // Create new Schema for Point Layer
  const serviceDefinition =  addToServiceDefinition(serviceUrl, {
    // portal: "https://qptampa.maps.arcgis.com",
    authentication: session,
    layers: [
      {
        "adminLayerInfo": {
          "tableName": "db_10.user_10.GAVELSAVELAYER_GAVELSAVELAYER",
          "geometryField": { "name": "Point" },
          "xssTrustedFields": ""
        },
        "id": 0,
        "name": "Gavel",
        "type": "Feature Layer",
        "displayField": "",
        "description": "Feature Layer that contains relative statistcal / analytical data`",
        "copyrightText": "&copy;2021 Quiet Professionals, LLC",
        "defaultVisibility": true,
        "ownershipBasedAccessControlForFeatures": {
          "allowOthersToQuery": false,
          "allowOthersToDelete": false,
          "allowOthersToUpdate": false
        },
        "relationships": [],
        "isDataVersioned": false,
        "supportsCalculate": true,
        "supportsAttachmentsByUploadId": true,
        "supportsRollbackOnFailureParameter": true,
        "supportsStatistics": true,
        "supportsAdvancedQueries": true,
        "supportsValidateSql": true,
        "supportsCoordinatesQuantization": true,
        "supportsApplyEditsWithGlobalIds": true,
        "advancedQueryCapabilities": {
          "supportsPagination": true,
          "supportsQueryWithDistance": true,
          "supportsReturningQueryExtent": true,
          "supportsStatistics": true,
          "supportsOrderBy": true,
          "supportsDistinct": true,
          "supportsQueryWithResultType": true,
          "supportsSqlExpression": true,
          "supportsReturningGeometryCentroid": true
        },
        "useStandardizedQueries": false,
        "geometryType": "esriGeometryPoint",
        "minScale": 2311163,
        "maxScale": 1128,
        "extent": {
          "xmin": -13090714.767112788,
          "ymin": 3841739.0914657288,
          "xmax": -12922032.654624918,
          "ymax": 3962581.2727843975,
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "drawingInfo": { 
          "renderer": { 
            "type": "simple", 
            "symbol": { 
              "type": "simple-marker",
              "color": "#d7191c",
              "outline": {
                "color": [255, 255, 255, 0.7],
                "width": 0.5 
              },
              "size": 7.5
            }
          },
          "transparency": 0, 
          "labelingInfo": null 
        },
        "allowGeometryUpdates": true,
        "hasAttachments": false,
        "htmlPopupType": "esriServerHTMLPopupTypeAsHTMLText",
        "hasM": false,
        "hasZ": false,
        "objectIdField": "FID",
        "globalIdField": "OBJECTID",
        "typeIdField": "",
        "fields": [
          {
            "name": "OBJECTID",
            "type": "esriFieldTypeOID",
            "actualType": "oid",
            "nullable": false,
            "editable": false,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "registrationID",
            "type": "esriFieldTypeString",
            "actualType": "string",
            "nullable": false,
            "editable": false,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "ipAddress",
            "type": "esriFieldTypeString",
            "actualType": "string",
            "nullable": false,
            "editable": false,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "flags",
            "type": "esriFieldTypeInteger",
            "actualType": "int",
            "nullable": false,
            "editable": false,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "timestamp",
            "type": "esriFieldTypeDate",
            "actualType": "date",
            "nullable": false,
            "editable": false,
            "domain": null,
            "defaultValue": null
          }
        ],
        "indexes": [
          {
            "name": "PK__LOADTEST__C1BEA5A20995BF60",
            "fields": "FID",
            "isAscending": true,
            "isUnique": true,
            "description": "clustered, unique, primary key"
          },
          {
            "name": "user_10.LOADTESTSOIL_LOADTESTSOIL_Point_sidx",
            "fields": "Point",
            "isAscending": false,
            "isUnique": false,
            "description": "Point Index"
          },
          {
            "name": "OBJECTID_Index",
            "fields": "OBJECTID",
            "isAscending": false,
            "isUnique": true,
            "description": ""
          }
          // {
          //   "name": "CreationDateIndex",
          //   "fields": "CreationDate",
          //   "isAscending": true,
          //   "isUnique": false,
          //   "description": "CreationDate Field index"
          // },
          // {
          //   "name": "CreatorIndex",
          //   "fields": "Creator",
          //   "isAscending": false,
          //   "isUnique": false,
          //   "description": "Creator Field index"
          // },
          // {
          //   "name": "EditDateIndex",
          //   "fields": "EditDate",
          //   "isAscending": true,
          //   "isUnique": false,
          //   "description": "EditDate Field index"
          // },
          // {
          //   "name": "EditorIndex",
          //   "fields": "Editor",
          //   "isAscending": false,
          //   "isUnique": false,
          //   "description": "Editor Field index"
          // }
        ],
        "types": [],
        "templates": [
          {
            "name": "New Feature",
            "description": "New Feature Layer",
            "drawingTool": null,
            "prototype": {
              "attributes": {
                "OBJECTID": null,
                "registrationID": null,
                "ipAddress": null,
                "flags": null,
                "timestamp": null
              }
            }
          }
        ],
        "supportedQueryFormats": "JSON",
        "hasStaticData": false,
        "maxRecordCount": 1000,
        "standardMaxRecordCount": 4000,
        "tileMaxRecordCount": 4000,
        "maxRecordCountFactor": 1,
        "capabilities": "Create,Delete,Query,Update,Sync",
        "exceedsLimitFactor": 1
      },
    ],
    tables: []
    // params: [token]
  });

  return serviceDefinition;
}

export const APPLY_FEATURES_FROM_MEMORY = (res, layer, serviceUrl) => {
  const session = getSession("qp_gavel_app_session");
  const layerUrl = serviceUrl + "/0";
  
  const editsToApply = layer.layer.source.items;
  const { geometry, attributes } = editsToApply;

  console.log("DEFINITION_ADDED_TO_SERVICE: ", res);
  console.log("LAYER_URL: ", layerUrl);

  return layer.layer.source.applyEdits({
    id: 0,
    authentication: session,
    url: layerUrl,
    addFeatures: [{ geometry, attributes }],
    useGlobalIds: true
  });

  // return edits;  

}
