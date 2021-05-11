// Esri
import { UserSession } from "@esri/arcgis-rest-auth";
import { getPortal } from "@esri/arcgis-rest-portal";
import { 
  applyEdits, 
  addToDefinition, 
  addFeatures
} from '@esri/arcgis-rest-feature-layer';
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
// import { buildFeatureLayerAction } from "../../../redux/reducers/area-query";
// import { formatDiagnosticsWithColorAndContext } from "typescript";

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
      spatialReference: { 
        "wkid": 102100, 
        "latestWkid": 3857 },
        "initialExtent": {
        "xmin": -9177882,
        "ymin": 4246761,
        "xmax": -9176720,
        "ymax": 4247967,
        "spatialReference": { 
          "wkid": 102100, 
          "latestWkid": 3857 },
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
  const serviceDefinition = addToServiceDefinition(serviceUrl, {
    // portal: "https://qptampa.maps.arcgis.com",
    "adminServiceInfo": {
      "name": "Gavel Feature Service / Layer",
      "type": "FeatureServer",
      "status": "Started",
      "maxRecordCount": 1000,
      "capabilities": "Query",
      "database": {
        "datasource": {
          "name": "Gavel-Production"
        }
      }
    },
    authentication: session,
    layers: [
      {
        "adminLayerInfo": {
          "tableName": "Staging.dbo.GAVELPOINTLAYER",
          "geometryField": {
            "name": "Point"
          },
          "tableExtent": {
            "xmin": -178.215026855,
            "ymin": 18.9247817990001,
            "xmax": -66.969848633,
            "ymax": 71.406646729,
            spatialReference: { "wkid": 102100, "latestWkid": 3857 },
          }
        },
        "id": 0,
        "name": "Gavel",
        "layerType": "Feature Layer",
        "displayField": "New Feature Layer",
        // "source": [{ layerDef }],
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
        "useStandardizedQueries": true,
        "geometryType": "esriGeometryPoint",
        "minScale": 2311163,
        "maxScale": 1128,
        "extent": {
          "xmin": -13090714.767112788,
          "ymin": 3841739.0914657288,
          "xmax": -12922032.654624918,
          "ymax": 3962581.2727843975,
          spatialReference: { "wkid": 102100, "latestWkid": 3857 },
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
        },
        "allowGeometryUpdates": true,
        "hasAttachments": false,
        "htmlPopupType": "esriServerHTMLPopupTypeAsHTMLText",
        "hasM": false,
        "hasZ": false,
        "objectIdField": "OBJECTID",
        "typeIdField": "",
        "fields": [
          {
            "name": "OBJECTID",
            "type": "esriFieldTypeOID",
            "actualType": "oid",
            "alias": "OBJECTID",
            "sqlType": "sqlTypeOther",
            "nullable": false,
            "editable": false,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "registrationID",
            "type": "esriFieldTypeString",
            "actualType": "string",
            "alias": "registrationID",
            "sqlType": "sqlTypeString",
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "ipAddress",
            "type": "esriFieldTypeString",
            "actualType": "string",
            "alias": "ipAddress",
            "sqlType": "sqlTypeString",
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "flags",
            "type": "esriFieldTypeInteger",
            "actualType": "int",
            "alias": "flags",
            "sqlType": "sqlTypeInteger",
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "timestamp",
            "type": "esriFieldTypeDate",
            "actualType": "date",
            "alias": "date",
            "sqlType": "sqlTypeOther",
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          }
        ],
        "types": [],
        "templates": [
          {
            "name": "Staging.dbo.GAVELPOINTLAYER",
            "description": "New Feature Layer",
            "drawingTool": "esriFeatureEditToolPoint",
            "prototype": {
              "attributes": {
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
        "maxRecordCount": 1000,
        "standardMaxRecordCount": 4000,
        "tileMaxRecordCount": 4000,
        "maxRecordCountFactor": 1,
        "capabilities": "Query,Editing,Create,Update,Delete",
        "exceedsLimitFactor": 1
      },
    ],
    tables: []
    // params: [token]
  });

  return serviceDefinition;
}

export const APPLY_FEATURES_FROM_MEMORY = async (res, layer, serviceDetails) => {
  const session = getSession("qp_gavel_app_session");
  const layerUrl = serviceDetails.serviceUrl;
  const layerName = serviceDetails.serviceName;
  
  // const editsToApply = layer.layer.source.items;
  const targetLayer = layer.layer.id;
  // const { geometry, attributes } = editsToApply;

  console.log("DEFINITION_ADDED_TO_SERVICE: ", res);
  console.log("LAYER_URL: ", layerUrl);

  const featureLayerSrc = layer.layer.source;
  let featurePayload = [];
  // const targetLayerById = document.getElementById(targetLayer);
  
  console.log("TARGET_LAYER: ", layer);
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

  await featureLayerSrc.items.map((item, i) => {
    // --Destructure - Extract only what is needed
    const { attributes, geometry, symbol } = item;
    // --Restructure - Build new array with destructured data
    let restructureData = {
      "geometry": {
        "x": geometry.x,
        "y": geometry.y,
        "spatialReference": { "wkid": geometry.wkid }
      },
      attributes,
      symbol
    }
    featurePayload.push(restructureData);
  });

  // NOTE: addFeatures over applyEdits
  await addFeatures({
    "authentication": session,
    "url": layerUrl + "/0",
    // "url": "https://services8.arcgis.com/8KDV2PscG0fGIBii/arcgis/rest/admin/services/" + layerName + "/FeatureServer/0",
    "features": featurePayload,
    "rollbackOnFailure": false
  });

  return addFeatures;

}
