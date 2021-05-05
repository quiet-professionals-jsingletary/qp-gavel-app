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
      "capabilities": "Create,Delete,Query,Update,Sync",
      "copyrightText": "&copy;2021 Quiet Professionals, LLC",
      "description": "Feature Service designed to host a single Feature Layer",
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
    
  });

}

// NOTE: Add Feature Layer Definitions / Schema to Service
export const ADD_TO_SERVICE_DEFINITION = (res, layer) => {
  // const encodedUrl = JSON.stringify(res.encodedServiceURL)
  const serviceUrl = res.serviceurl;
  const layerDef = layer;

  // const a = [layerDef];
  // a[0].a = a;
  // a.push(a);
  // const layerJson = stringify(a);

  // const layerJson = layer.layerView;
  // TODO: Update sessionId value more dynamic 
  const session = getSession("qp_gavel_app_session");
  // const token = session.token;
  console.log("Session: ", session);
  console.log("Layer JSON: ", layerDef);

  const timestamp = Date.now();
  
  return addToServiceDefinition(serviceUrl, {
    // portal: "https://qptampa.maps.arcgis.com",
    authentication: session,
    layers: [
      {
        "adminLayerInfo": {
          "tableName": "db_10.user_10.LOADTESTSOIL_LOADTESTSOIL",
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
        // "editFieldsInfo": {
        //   "creationDateField": "CreationDate",
        //   "creatorField": "Creator",
        //   "editDateField": "EditDate",
        //   "editorField": "Editor"
        // },
        // "editingInfo": {
        //   "lastEditDate": 1455126059440
        // },
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
        "drawingInfo": { "renderer": { "type": "simple", "symbol": { "type": "esriSFS", "style": "esriSFSSolid", "color": [76, 129, 205, 191], "outline": { "type": "esriSLS", "style": "esriSLSSolid", "color": [0, 0, 0, 255], "width": 0.75 } } }, "transparency": 0, "labelingInfo": null },
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
}
