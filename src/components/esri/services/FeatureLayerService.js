 /**--------------------------------------------------------------------------------------------- ->
*  ┌────────────────────────────────────┐
*  │ |> GAVEL - Feature Layer Service   │
*  └────────────────────────────────────┘
*
*  @description:   'Custom service creates a Feature Service & adds features into user's Esri portal'
*  @implements:    'JSON data object template that will create service leveraging the REST APIs'
*  @returns:       'Esri Feature Service (hosted) containing Point Features to render on map'
*
*/

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

// BUG: Experiencing CORS issues when trying to access QPTampa Portal
// !Pointing to ArcGis Online Portal in the meantime
export const CREATE_FEATURE_SERVICE = () => {
  // TODO: Update sessionId value more dynamic 
  const session = getSession("qp_gavel_app_session");
  const timestamp = Date.now();

  return createFeatureService({
    // portal: "https://qptampa.maps.arcgis.com",
    authentication: session,
    item: {
      "name": "GavelFeatureService_" + timestamp,
      "isView": true,
      "sourceSchemaChangesAllowed": true,
      "isUpdatableView": true,
      "spatialReference": {
        "wkid": 102100,
        "latestWkid": 3857
      },
      "initialExtent": {
        "xmin": -20037507.0671618,
        "ymin": -30240971.9583862,
        "xmax": 20037507.0671618,
        "ymax": 18398924.324645,
        "spatialReference": {
          "wkid": 102100,
          "latestWkid": 3857
        }
      },
      "allowGeometryUpdates": true,
      "hasStaticData": true,
      "maxRecordCount": 1000,
      "supportedQueryFormats": "JSON",
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
      "capabilities": "Create,Delete,Update",
      "preserveLayerIds": false,
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
  // TODO: Update sessionId dynamicaly  
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
      "maxRecordCount": 5000
    },
    authentication: session,
    layers: [
      {
        "adminLayerInfo": {
          "geometryField": {
            "name": "Shape",
            "srid": 102100
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
        "description": "Feature Layer that contains relative statistcal / analytical data",
        "copyrightText": "&copy;2021 Quiet Professionals, LLC",
        "defaultVisibility": true,
        "visibilityField": "visible",
        "editingInfo": { "lastEditDate": null },
        "relationships": [],
        "isDataVersioned": false,
        "supportsAppend": true,
        "supportsCalculate": true,
        "supportsTruncate": true,
        "supportsAttachmentsResizing": true,
        "supportsRollbackOnFailureParameter": true,
        "supportsStatistics": true,
        "supportsAdvancedQueries": true,
        "supportsValidateSql": true,
        "supportsCoordinatesQuantization": true,
        "supportsApplyEditsWithGlobalIds": false,
        "supportsAttachmentsByUploadId": true,
        "advancedQueryCapabilities": {
          "supportsPagination": true,
          "supportsPaginationOnAggregatedQueries": true,
          "supportsQueryRelatedPagination": true,
          "supportsQueryWithDistance": true,
          "supportsReturningQueryExtent": true,
          "supportsStatistics": true,
          "supportsOrderBy": true,
          "supportsDistinct": true,
          "supportsQueryWithResultType": true,
          "supportsSqlExpression": true,
          "supportsAdvancedQueryRelated": true,
          "supportsCountDistinct": true,
          "supportsLod": true,
          "supportsReturningGeometryCentroid": false,
          "supportsQueryWithDatumTransformation": true,
          "supportsHavingClause": true,
          "supportsOutFieldSQLExpression": true
        },
        "useStandardizedQueries": true,
        "geometryType": "esriGeometryPoint",
        "minScale": 0,
        "maxScale": 0,
        "extent": {
          "xmin": -20037508.342788905,
          "ymin": -8175201.3721496435,
          "xmax": -10018754.171394452,
          "ymax": 12175461.54272524,
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "drawingInfo": { 
          "renderer": { 
            "type": "simple", 
            "symbol": { 
              "type": "esriSMS",
              "style": "esriSMSCircle",
              "color": [215, 25, 28, 1],
              "outline": {
                "color": [255, 255, 255, 0.7],
                "width": 0.5,
                "type": "esriSLS",
                "style": "esriSLSSolid"
              },
              "size": 7.5
            },
            "label": "",
            "description": "",
          }, 
          "transparency": 0,
        },
        "allowGeometryUpdates": true,
        "hasAttachments": false,
        "htmlPopupType": "esriServerHTMLPopupTypeAsHTMLText",
        "hasM": false,
        "hasZ": false,
        "objectIdField": "FID",
        "uniqueIdField": {
          "name": "FID",
          "isSystemMaintained": true
        },
        "globalIdField": "GlobalID",
        "typeIdField": "",
        "fields": [
          {
            "name": "OBJECTID",
            "type": "esriFieldTypeInteger",
            "actualType": "int",
            "alias": "OBJECTID",
            "sqlType": "sqlTypeInteger",
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "registrationID",
            "type": "esriFieldTypeString",
            "actualType": "nvarchar",
            "alias": "registrationID",
            "sqlType": "sqlTypeNVarchar",
            "length": 256,
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "ipAddress",
            "type": "esriFieldTypeString",
            "actualType": "nvarchar",
            "alias": "ipAddress",
            "sqlType": "sqlTypeNVarchar",
            "length": 256,
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
          },
          {
            "name": "latitude",
            "type": "esriFieldTypeDouble",
            "actualType": "float",
            "alias": "latitude",
            "sqlType": "sqlTypeFloat",
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "longitude",
            "type": "esriFieldTypeDouble",
            "actualType": "float",
            "alias": "longitude",
            "sqlType": "sqlTypeFloat",
            "nullable": true,
            "editable": true,
            "domain": null,
            "defaultValue": null
          },
          {
            "name": "FID",
            "type": "esriFieldTypeOID",
            "actualType": "int",
            "alias": "FID",
            "sqlType": "sqlTypeInteger",
            "nullable": false,
            "editable": false,
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
          } 
        ],
        "indexes": [],
        "types": [],
        "templates": [
          {
            "name": "New Feature",
            "description": "New Feature Layer",
            "drawingTool": "esriFeatureEditToolPoint",
            "prototype": {
              "attributes": {
                "registrationID": null,
                "ipAddress": null,
                "flags": null,
                "timestamp": null,
                "latitude": null,
                "longitude": null,
                "X": null,
                "Y": null
              }
            }
          }
        ],
        "supportedQueryFormats": "JSON, geoJSON",
        "hasStaticData": false,
        "ownershipBasedAccessControlForFeatures": true,
        "allowTrueCurvesUpdates": true,
        "onlyAllowTrueCurveUpdatesByTrueCurveClients": true,
        "maxRecordCount": 5000,
        "standardMaxRecordCount": 100000,
        "tileMaxRecordCount": 8000,
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

    const posX = geometry.x;
    const posY = geometry.y;
    const geoWkid = geometry.spatialReference.wkid;

    // --Restructure - Build new array with destructured data
    let restructureData = {
      "geometry": {
        "x": posX,
        "y": posY,
        "spatialReference": { "wkid": geoWkid }
      },
      attributes,
      symbol
    }
    featurePayload.push(restructureData);
  });

  console.log("Geo Payload:", featurePayload);

  // NOTE: addFeatures over applyEdits
  await addFeatures({
    "authentication": session,
    "url": layerUrl + "/0",
    "features": featurePayload,
    "rollbackOnFailure": false,
    "f": "json"
  })
  .then(res => {
    console.info("Feature Layer Updated: ", res);
  })
  .catch(error => {
    console.error("ERROR: Save Feature Layer: ", error);
  });

  return addFeatures;

}
