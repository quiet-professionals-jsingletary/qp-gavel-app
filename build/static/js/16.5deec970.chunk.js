(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[16,42],{1036:function(e,r,t){"use strict";function n(e,r){return!!e.typeKeywords&&e.typeKeywords.indexOf(r)>-1}t.d(r,"a",(function(){return n}))},896:function(e,r,t){"use strict";t.r(r),t.d(r,"fromItem",(function(){return d})),t.d(r,"selectLayerClassPath",(function(){return L}));var n=t(7),a=t.n(n),u=t(16),c=t(10),i=t(4),s=t(20),o=t(17),p=t(65),l=t(385),y=t(1036),f=t(994);function d(e){return!e.portalItem||e.portalItem instanceof l.default||(e=Object(c.a)(Object(c.a)({},e),{},{portalItem:new l.default(e.portalItem)})),(r=e.portalItem,r.load().then(L).then(b)).then((function(r){var t=Object(c.a)({portalItem:e.portalItem},r.properties),n=r.constructor;return Object(o.s)(new n(t))}));var r}function L(e){switch(e.type){case"Map Service":return function(e){return function(e){return x(e.url).then((function(e){return e.tileInfo}))}(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}))}(e);case"Feature Service":return function(e){return h(e).then((function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(){var e=Object(u.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!Object(y.a)(r,"Map Notes")){e.next=4;break}return e.abrupt("return",{className:"MapNotesLayer"});case 4:if(!Object(y.a)(r,"Route Layer")){e.next=6;break}return e.abrupt("return",{className:"RouteLayer"});case 6:return e.t0=S,e.next=9,r.fetchData();case 9:if(e.t1=e.sent,e.t2=(0,e.t0)(e.t1),1!==e.t2){e.next=13;break}return e.abrupt("return",{className:"FeatureLayer"});case 13:return e.abrupt("return",{className:"GroupLayer"});case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()(e);case"Scene Service":return function(e){return h(e).then((function(r){if("object"==typeof r){var t,n={};if(null!=r.id?(n.layerId=r.id,t="".concat(e.url,"/layers/").concat(r.id)):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},u=0,c=Object.keys(a);u<c.length;u++){var i=c[u];if(-1!==e.typeKeywords.indexOf(i))return{className:a[i]}}return x(t).then((function(e){var r="SceneLayer",t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:n}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return function(){var e=Object(u.a)(a.a.mark((function e(r){var t,n,u,c,i,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!((c=null!=(t=null==(n=r.typeKeywords)?void 0:n.map((function(e){return e.toLowerCase()})))?t:[]).indexOf("elevation 3d layer")>-1)){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!(c.indexOf("tiled imagery")>-1)){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(i=e.sent,"ArcGISTiledImageServiceLayer"!==(s=null==i?void 0:i.layerType)){e.next=13;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 13:if("ArcGISImageServiceLayer"!==s){e.next=15;break}return e.abrupt("return",{className:"ImageryLayer"});case 15:return e.next=17,x(r.url);case 17:if(o=e.sent,"map"!==(null==(u=o.cacheType)?void 0:u.toLowerCase())){e.next=20;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 20:return e.abrupt("return",{className:"ImageryLayer"});case 21:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Object(o.r)(new s.a("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function b(e){return(0,f.a[e.className])().then((function(r){return{constructor:r,properties:e.properties}}))}function h(e){return!e.url||e.url.match(/\/\d+$/)?Object(o.s)({}):e.load().then((function(){return e.fetchData()})).then((function(r){return S(r)>0?v(r):x(e.url).then(v)}))}function v(e){return 1===S(e)&&{id:Object(i.n)(m(e))}}function m(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function S(e){var r,t,n,a;return(null!=(r=null==e||null==(t=e.layers)?void 0:t.length)?r:0)+(null!=(n=null==e||null==(a=e.tables)?void 0:a.length)?n:0)}function x(e){return Object(p.default)(e,{responseType:"json",query:{f:"json"}}).then((function(e){return e.data}))}},970:function(e,r,t){"use strict";t.r(r),t.d(r,"populateOperationalLayers",(function(){return v}));var n=t(7),a=t.n(n),u=t(13),c=t(16),i=(t(15),t(17)),s=t(39),o=t(385),p=t(568),l=t(994),y=t(1036);function f(e,r){return L(e,r,"notes","Map Notes")}function d(e,r){return L(e,r,"route","Route Layer")}function L(e,r,t,n){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(r,t,n,u){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.layerType&&"ArcGISFeatureLayer"===r.layerType){e.next=2;break}return e.abrupt("return",!1);case 2:if(!r.url){e.next=4;break}return e.abrupt("return",!1);case 4:if(!r.featureCollectionType||r.featureCollectionType!==n){e.next=6;break}return e.abrupt("return",!0);case 6:if(!r.itemId){e.next=11;break}return c=new o.default({id:r.itemId,portal:t}),e.next=10,c.load();case 10:return e.abrupt("return","Feature Collection"===c.type&&Object(y.a)(c,u));case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=t(896);function v(e,r,t){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(a.a.mark((function e(r,t,n){var c,s,o,p,l,y,f,d,L;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:c=[],s=Object(u.a)(t);try{for(s.s();!(o=s.n()).done;)p=o.value,l=k(p,n),"GroupLayer"===p.layerType?c.push(G(l,p,n)):c.push(l)}catch(a){s.e(a)}finally{s.f()}return e.next=7,Object(i.i)(c);case 7:y=e.sent,f=Object(u.a)(y);try{for(f.s();!(d=f.n()).done;)!(L=d.value).value||n.filter&&!n.filter(L.value)||r.add(L.value)}catch(a){f.e(a)}finally{f.f()}case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},x={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},w={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},I={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},g={ArcGISFeatureLayer:"FeatureLayer"},T={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};function k(e,r){return M.apply(this,arguments)}function M(){return(M=Object(c.a)(a.a.mark((function e(r,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=function(){var e=Object(c.a)(a.a.mark((function e(r,t,n){var u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((u=new r).read(t,n.context),e.t0="group"===u.type&&O(t),!e.t0){e.next=6;break}return e.next=6,function(){var e=Object(c.a)(a.a.mark((function e(r,t,n){var u,c,i,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=l.a.FeatureLayer,e.next=3,u();case 3:c=e.sent,i=t.featureCollection,s=i.showLegend,o=i.layers.map((function(e){var r=new c;return r.read(e,n),null!=s&&r.read({showLegend:s},n),r})),r.layers.addMany(o);case 8:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}()(u,t,n.context);case 6:return e.next=8,Object(p.a)(u,n.context);case 8:return e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),e.next=3,function(){var e=Object(c.a)(a.a.mark((function e(r,t){var n,u,c,i,s,p,y,L;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.context,u=function(e){var r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=w;break;case"ground":r=x;break;default:r=S}break;default:switch(e.layerContainerType){case"basemap":r=T;break;case"tables":r=g;break;default:r=I}}return r}(n),!(c=r.layerType||r.type)&&t&&t.defaultLayerType&&(c=t.defaultLayerType),i=u[c],s=i?l.a[i]:l.a.UnknownLayer,p=n&&n.portal,!j(r)){e.next=20;break}if(!r.itemId){e.next=18;break}return y=new o.default({id:r.itemId,portal:p}),e.next=11,y.load();case 11:return e.next=13,Object(h.selectLayerClassPath)(y);case 13:if(e.t0=e.sent.className,e.t0){e.next=16;break}e.t0="UnknownLayer";case 16:L=e.t0,s=l.a[L];case 18:e.next=35;break;case 20:if(e.t1="ArcGISFeatureLayer"===c,!e.t1){e.next=35;break}return e.next=24,f(r,p);case 24:if(!e.sent){e.next=28;break}s=l.a.MapNotesLayer,e.next=35;break;case 28:return e.next=30,d(r,p);case 30:if(!e.sent){e.next=34;break}s=l.a.RouteLayer,e.next=35;break;case 34:O(r)&&(s=l.a.GroupLayer);case 35:return r.wmtsInfo&&r.wmtsInfo.url&&r.wmtsInfo.layerIdentifier&&(s=l.a.WMTSLayer),e.abrupt("return",s());case 37:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()(r,t);case 3:return e.t1=e.sent,e.t2=r,e.t3=t,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){if("ArcGISFeatureLayer"!==e.layerType||j(e))return!1;var r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function j(e){return"Feature Collection"===e.type}function G(e,r,t){return A.apply(this,arguments)}function A(){return(A=Object(c.a)(a.a.mark((function e(r,t,n){var u,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=new s.a,c=v(u,Array.isArray(t.layers)?t.layers:[],n),e.next=4,r;case 4:return i=e.sent,e.next=7,c;case 7:if("group"!==i.type){e.next=9;break}return e.abrupt("return",(i.layers.addMany(u),i));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},994:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(7),a=t.n(n),u=t(16),c={BingMapsLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(107).then(t.bind(null,1067));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),BuildingSceneLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(5),t.e(32)]).then(t.bind(null,1055));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),CSVLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(47).then(t.bind(null,1068));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ElevationLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,571));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),FeatureLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,383));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),GroupLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(21).then(t.bind(null,1030));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),GeoRSSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(108).then(t.bind(null,1045));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ImageryLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(7),t.e(15),t.e(48)]).then(t.bind(null,1056));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ImageryTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(7),t.e(15),t.e(109)]).then(t.bind(null,1054));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),IntegratedMeshLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(5),t.e(49)]).then(t.bind(null,1060));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),KMLLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(110).then(t.bind(null,1063));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),MapImageLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(19).then(t.bind(null,1041));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),MapNotesLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(111).then(t.bind(null,1049));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),OpenStreetMapLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(39).then(t.bind(null,1050));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),PointCloudLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(5),t.e(30)]).then(t.bind(null,1057));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),RouteLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(112).then(t.bind(null,1051));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),SceneLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(5),t.e(33)]).then(t.bind(null,1069));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),StreamLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(113).then(t.bind(null,1070));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),TileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,569));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),UnknownLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(114).then(t.bind(null,1052));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),UnsupportedLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(115).then(t.bind(null,1053));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),VectorTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,570));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WebTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(null,1001));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WMSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(46).then(t.bind(null,1061));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WMTSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(40).then(t.bind(null,1058));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=16.5deec970.chunk.js.map