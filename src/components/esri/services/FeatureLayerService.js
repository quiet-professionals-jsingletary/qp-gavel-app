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
import { buildFeatureLayerAction } from "../../../redux/reducers/area-query";
import { formatDiagnosticsWithColorAndContext } from "typescript";

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
      "allowGeometryUpdates": true,
      "hasStaticData": true,
      "maxRecordCount": 100000,
      "supportedQueryFormats": "JSON",
      "capabilities": "Create,Delete,Update",
      "copyrightText": "&copy;2021 Quiet Professionals, LLC",
      "description": "A <strong>Feature Service</strong> designed to hold data from a single <strong>Feature Layer</strong>",
      "editorTrackingInfo": {
        "allowAnonymousToDelete": false,
        "allowAnonymousToUpdate": false,
        "allowOthersToDelete": false,
        "allowOthersToQuery": true,
        "allowOthersToUpdate": false,
        "enableEditorTracking": true,
        "enableOwnershipAccessControl": true
      },
      "spatialReference": {
        "wkid": 4326
      },
      "initialExtent": {
        "xmin": -9177882,
        "ymin": 4246761,
        "xmax": -9176720,
        "ymax": 4247967,
        "spatialReference": {
          "wkid": 4326
        }
      },
      "serviceDescription": "A <strong>Feature Service</strong> designed to hold data from a single <strong>Feature Layer</strong>",
      "units": "esriSRUnit_Meter",
      "xssPreventionInfo": {
        "xssPreventionEnabled": true,
        "xssPreventionRule": "input",
        "xssInputRule": "rejectInvalid"
      }

    }
    // portal: "https://qptampa.maps.arcgis.com",
  });

}

// NOTE: Add Feature Layer Definitions / Schema to Service
export const ADD_TO_SERVICE_DEFINITION = (res, layer) => {
  const serviceUrl = res.serviceurl;
  const layerDef = layer.layer.source.items;
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
        // "adminLayerInfo": {
        //   "tableName": "db_10.user_10.GAVELTEMPDATA_GAVELTEMPDATA",
        //   "geometryField": { "name": "Point" },
        //   "xssTrustedFields": ""
        // },
        "id": 0,
        "name": "Gavel",
        "layerType": "Feature Layer",
        "displayField": "New Feature Layer",
        "source": [layerDef],
        "description": "Feature Layer that contains relative statistcal / analytical data`",
        "copyrightText": "&copy;2021 Quiet Professionals, LLC",
        "defaultVisibility": true,
        "visibilityField": "visible",
        "ownershipBasedAccessControlForFeatures": true,
        "allowTrueCurvesUpdates": true,
        "onlyAllowTrueCurveUpdatesByTrueCurveClients": true,
        "relationships": [],
        "isDataVersioned": true,
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
          "supportsPercentileStatistics": true,
          "supportsOrderBy": true,
          "supportsDistinct": true,
          "supportsQueryWithResultType": true,
          "supportsSqlExpression": true,
          "supportsReturningGeometryCentroid": true,
          "supportsTrueCurve": true
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
            "wkid": 4326
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
        "objectIdField": "OBJECTID",
        "globalIdField": "OBJECTID",
        "typeIdField": "",
        "fields": [
          // {
          //   "name": "GlobalID",
          //   "type": "esriFieldTypeGlobalID",
          //   "editable": false,
          //   "nullable": false
          // },
          {
            "name": "OBJECTID",
            "type": "oid",
            "editable": false,
            "nullable": false,
            "defaultValue":"{0000000-0000-0000-0000-000000000000}"
          },
          {
            "name": "registrationID",
            "type": "string",
            "editable": false,
            "nullable": false,
            "defaultValue": "{0000000-0000-0000-0000-000000000000}"
          },
          {
            "name": "ipAddress",
            "type": "string",
            "editable": false,
            "nullable": false,
            "defaultValue": "0"
          },
          {
            "name": "flags",
            "type": "integer",
            "editable": false,
            "nullable": false,
            "defaultValue": 0
          },
          {
            "name": "timestamp",
            "type": "date",
            "editable": false,
            "nullable": false,
            "defaultValue": Date.now()
          }
        ],
          // "indexes": [
          //   {
          //     "name": "OBJECTID_Index",
          //     "fields": "OBJECTID",
          //     "isAscending": true,
          //     "isUnique": false,
          //     "description": "clustered, unique"
          //   },
          // {
          //   "name": "user_10.LOADTESTSOIL_LOADTESTSOIL_Point_sidx",
          //   "fields": "Point",
          //   "isAscending": false,
          //   "isUnique": false,
          //   "description": "Point Index"
          // },
          // {
          //   "name": "OBJECTID_Index",
          //   "fields": "OBJECTID",
          //   "isAscending": false,
          //   "isUnique": true,
          //   "description": ""
          // }
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
        // ],
        "types": [],
        "templates": [
          {
            "name": "New Feature",
            "description": "New Feature Layer",
            "drawingTool": "esriFeatureEditToolPoint",
            "prototype": {
              "attributes": {
                "GlobalID": null,
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
        "hasStaticData": true,
        "maxRecordCount": 100000,
        "standardMaxRecordCount": 4000,
        "tileMaxRecordCount": 4000,
        "maxRecordCountFactor": 1,
        "capabilities": "Create,Delete,Update",
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
  const layerUrl = serviceUrl;
  
  // const editsToApply = layer.layer.source.items;
  const targetLayer = layer.layer.id;
  // const { geometry, attributes } = editsToApply;

  console.log("DEFINITION_ADDED_TO_SERVICE: ", res);
  console.log("LAYER_URL: ", layerUrl);

  const featureLayerSrc = layer.layer.source.items;
  // const targetLayerById = document.getElementById(targetLayer);
  
  // console.log("TARGET_LAYER: ", targetLayerById);
  console.log("FEATURE_LAYER_SRC: ", featureLayerSrc);

  // https://services8.arcgis.com/8KDV2PscG0fGIBii/arcgis/rest/services/gavel_feature_service_1620315653801/FeatureServer

  // https://services8.arcgis.com/8KDV2PscG0fGIBii/arcgis/rest/services/gavel_feature_service_1620315653801/FeatureServer/0

  // return applyEdits([{
  //   id: 0,
  //   authentication: session,
  //   url: layerUrl + "/0",
  //   adds: [],
  //   updates: [],
  //   deletes: [],
  //   rollbackOnFailure: true,
  //   useGlobalIds: true

  // }]);

  let edits = {
    "id": 0,
    "authentication": session,
    "url": layerUrl + "/0",
    "adds": [
      {
        "geometry": {
          "y": 35.10515,
          "x": -80.86546,
          "spatialReference": { "wkid": 4326 }
        },
        "attributes": {
          "OBJECTID": "0000000-0000-0000-0000-000000000000",
          "flags": 0,
          "ipAddress": "104.12.252.127",
          "registrationID": "c95d8fa4-d412-395c-a606-fc4db12d0736",
          "timestamp": 1619709548000
        }
      },
      {
        "geometry": {
          "y": 38.10515,
          "x": -82.86546,
          "spatialReference": { "wkid": 4326 }
        },
        "attributes": {
          "OBJECTID": "0000000-0000-0000-0000-000000000000",
          "flags": 128,
          "ipAddress": "104.12.252.127",
          "registrationID": "c95d8fa4-d412-395c-a606-fc4db12d0736",
          "timestamp": 1619709548000
        }
      }
    ],
    "updates": [],
    "deletes": [],
    "rollbackOnFailure": false,
    "useGlobalIds": false

  };

  return applyEdits(edits);

}
