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
  const layerDef = layer.layerView.layer.sourceJSON;

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
  
  return addToServiceDefinition(serviceUrl, {
    // portal: "https://qptampa.maps.arcgis.com",
    authentication: session,
    layers: [
      {
        "adminLayerInfo": {
          "tableName": "db_10.user_10.LOADTESTSOIL_LOADTESTSOIL",
          "geometryField": { "name": "Shape" },
          "xssTrustedFields": ""
        },
        "id": 0,
        "name": "LoadTestSoil",
        "type": "Feature Layer",
        "displayField": "",
        "description": "",
        "copyrightText": "",
        "defaultVisibility": true,
        "ownershipBasedAccessControlForFeatures": {
          "allowOthersToQuery": false,
          "allowOthersToDelete": false,
          "allowOthersToUpdate": false
        },
        "editFieldsInfo": {
          "creationDateField": "CreationDate",
          "creatorField": "Creator",
          "editDateField": "EditDate",
          "editorField": "Editor"
        },
        "editingInfo": {
          "lastEditDate": 1455126059440
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
        "geometryType": "esriGeometryPolygon",
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
        "htmlPopupType": "esriServerHTMLPopupTypeNone",
        "hasM": false,
        "hasZ": false,
        "objectIdField": "FID",
        "globalIdField": "GlobalID",
        "typeIdField": "",
        "fields": [
          {
            "name": "FID",
            "type": "esriFieldTypeInteger",
            "actualType": "int",
            "alias": "FID",
            "sqlType": "sqlTypeInteger",
            "length": 4,
            "nullable": false,
            "editable": false,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "AREA",
            "type": "esriFieldTypeDouble",
            "actualType": "float",
            "alias": "AREA",
            "sqlType": "sqlTypeFloat",
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "PERIMETER",
            "type": "esriFieldTypeDouble",
            "actualType": "float",
            "alias": "PERIMETER",
            "sqlType": "sqlTypeFloat",
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "MUSYM",
            "type": "esriFieldTypeString",
            "actualType": "nvarchar",
            "alias": "MUSYM",
            "sqlType": "sqlTypeNVarchar",
            "length": 8,
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "MUKEY",
            "type": "esriFieldTypeString",
            "actualType": "nvarchar",
            "alias": "MUKEY",
            "sqlType": "sqlTypeNVarchar",
            "length": 30,
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "DESCRIPTIO",
            "type": "esriFieldTypeString",
            "actualType": "nvarchar",
            "alias": "DESCRIPTIO",
            "sqlType": "sqlTypeNVarchar",
            "length": 100,
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "CATEGORY",
            "type": "esriFieldTypeString",
            "actualType": "nvarchar",
            "alias": "CATEGORY",
            "sqlType": "sqlTypeNVarchar",
            "length": 40,
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "OBJECTID_1",
            "type": "esriFieldTypeInteger",
            "actualType": "int",
            "alias": "OBJECTID_1",
            "sqlType": "sqlTypeInteger",
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "SHP_ID_ARE",
            "type": "esriFieldTypeDouble",
            "actualType": "float",
            "alias": "SHP_ID_ARE",
            "sqlType": "sqlTypeFloat",
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "SHP_ID_LEN",
            "type": "esriFieldTypeDouble",
            "actualType": "float",
            "alias": "SHP_ID_LEN",
            "sqlType": "sqlTypeFloat",
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "GlobalID",
            "type": "esriFieldTypeGlobalID",
            "alias": "GlobalID",
            "sqlType": "sqlTypeOther",
            "length": 38,
            "nullable": false,
            "editable": false,
            "domain": null,
            "defaultValue": "NEWID() WITH VALUES"
          },
          {
            "name": "CreationDate",
            "type": "esriFieldTypeDate",
            "alias": "CreationDate",
            "sqlType": "sqlTypeOther",
            "length": 8,
            "nullable": true,
            "editable": false,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "Creator",
            "type": "esriFieldTypeString",
            "alias": "Creator",
            "sqlType": "sqlTypeOther",
            "length": 50,
            "nullable": true,
            "editable": false,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "EditDate",
            "type": "esriFieldTypeDate",
            "alias": "EditDate",
            "sqlType": "sqlTypeOther",
            "length": 8,
            "nullable": true,
            "editable": false,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "Editor",
            "type": "esriFieldTypeString",
            "alias": "Editor",
            "sqlType": "sqlTypeOther",
            "length": 50,
            "nullable": true,
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
            "name": "user_10.LOADTESTSOIL_LOADTESTSOIL_Shape_sidx",
            "fields": "Shape",
            "isAscending": false,
            "isUnique": false,
            "description": "Shape Index"
          },
          {
            "name": "GlobalID_Index",
            "fields": "GlobalID",
            "isAscending": false,
            "isUnique": true,
            "description": ""
          },
          {
            "name": "CreationDateIndex",
            "fields": "CreationDate",
            "isAscending": true,
            "isUnique": false,
            "description": "CreationDate Field index"
          },
          {
            "name": "CreatorIndex",
            "fields": "Creator",
            "isAscending": false,
            "isUnique": false,
            "description": "Creator Field index"
          },
          {
            "name": "EditDateIndex",
            "fields": "EditDate",
            "isAscending": true,
            "isUnique": false,
            "description": "EditDate Field index"
          },
          {
            "name": "EditorIndex",
            "fields": "Editor",
            "isAscending": false,
            "isUnique": false,
            "description": "Editor Field index"
          }
        ],
        "types": [],
        "templates": [
          {
            "name": "New Feature",
            "description": "",
            "drawingTool": "esriFeatureEditToolPolygon",
            "prototype": {
              "attributes": {
                "AREA": null,
                "PERIMETER": null,
                "MUSYM": null,
                "MUKEY": null,
                "DESCRIPTIO": null,
                "CATEGORY": null,
                "OBJECTID_1": null,
                "SHP_ID_ARE": null,
                "SHP_ID_LEN": null
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
        "capabilities": "Create,Delete,Query,Update,Editing,Extract,Sync",
        "exceedsLimitFactor": 1
      }
    ],
    tables: []
    // params: [token]
  });
}
