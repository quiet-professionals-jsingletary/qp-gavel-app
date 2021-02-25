(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[42],{1007:function(e,r,t){"use strict";function n(e,r){return!!e.typeKeywords&&e.typeKeywords.indexOf(r)>-1}t.d(r,"a",(function(){return n}))},872:function(e,r,t){"use strict";t.r(r),t.d(r,"fromItem",(function(){return y})),t.d(r,"selectLayerClassPath",(function(){return b}));var n=t(7),a=t.n(n),u=t(16),c=t(10),s=t(4),i=t(20),o=t(17),p=t(66),l=t(392),f=t(1007),d=t(965);function y(e){return!e.portalItem||e.portalItem instanceof l.default||(e=Object(c.a)(Object(c.a)({},e),{},{portalItem:new l.default(e.portalItem)})),(r=e.portalItem,r.load().then(b).then(h)).then((function(r){var t=Object(c.a)({portalItem:e.portalItem},r.properties),n=r.constructor;return Object(o.s)(new n(t))}));var r}function b(e){switch(e.type){case"Map Service":return function(e){return function(e){return L(e.url).then((function(e){return e.tileInfo}))}(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}))}(e);case"Feature Service":return function(e){return m(e).then((function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(){var e=Object(u.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!Object(f.a)(r,"Map Notes")){e.next=4;break}return e.abrupt("return",{className:"MapNotesLayer"});case 4:if(!Object(f.a)(r,"Route Layer")){e.next=6;break}return e.abrupt("return",{className:"RouteLayer"});case 6:return e.t0=x,e.next=9,r.fetchData();case 9:if(e.t1=e.sent,e.t2=(0,e.t0)(e.t1),1!==e.t2){e.next=13;break}return e.abrupt("return",{className:"FeatureLayer"});case 13:return e.abrupt("return",{className:"GroupLayer"});case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()(e);case"Scene Service":return function(e){return m(e).then((function(r){if("object"==typeof r){var t,n={};if(null!=r.id?(n.layerId=r.id,t="".concat(e.url,"/layers/").concat(r.id)):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},u=0,c=Object.keys(a);u<c.length;u++){var s=c[u];if(-1!==e.typeKeywords.indexOf(s))return{className:a[s]}}return L(t).then((function(e){var r="SceneLayer",t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:n}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return function(){var e=Object(u.a)(a.a.mark((function e(r){var t,n,u,c,s,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!((c=null!=(t=null==(n=r.typeKeywords)?void 0:n.map((function(e){return e.toLowerCase()})))?t:[]).indexOf("elevation 3d layer")>-1)){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!(c.indexOf("tiled imagery")>-1)){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(s=e.sent,"ArcGISTiledImageServiceLayer"!==(i=null==s?void 0:s.layerType)){e.next=13;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 13:if("ArcGISImageServiceLayer"!==i){e.next=15;break}return e.abrupt("return",{className:"ImageryLayer"});case 15:return e.next=17,L(r.url);case 17:if(o=e.sent,"map"!==(null==(u=o.cacheType)?void 0:u.toLowerCase())){e.next=20;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 20:return e.abrupt("return",{className:"ImageryLayer"});case 21:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Object(o.r)(new i.a("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function h(e){return(0,d.a[e.className])().then((function(r){return{constructor:r,properties:e.properties}}))}function m(e){return!e.url||e.url.match(/\/\d+$/)?Object(o.s)({}):e.load().then((function(){return e.fetchData()})).then((function(r){return x(r)>0?v(r):L(e.url).then(v)}))}function v(e){return 1===x(e)&&{id:Object(s.n)(w(e))}}function w(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function x(e){var r,t,n,a;return(null!=(r=null==e||null==(t=e.layers)?void 0:t.length)?r:0)+(null!=(n=null==e||null==(a=e.tables)?void 0:a.length)?n:0)}function L(e){return Object(p.default)(e,{responseType:"json",query:{f:"json"}}).then((function(e){return e.data}))}},965:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(7),a=t.n(n),u=t(16),c={BingMapsLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(107).then(t.bind(null,1039));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),BuildingSceneLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(6),t.e(32)]).then(t.bind(null,1027));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),CSVLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(47).then(t.bind(null,1040));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ElevationLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,582));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),FeatureLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,390));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),GroupLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(23).then(t.bind(null,1e3));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),GeoRSSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(108).then(t.bind(null,1017));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ImageryLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(8),t.e(16),t.e(48)]).then(t.bind(null,1028));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ImageryTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(8),t.e(16),t.e(109)]).then(t.bind(null,1026));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),IntegratedMeshLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(6),t.e(49)]).then(t.bind(null,1032));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),KMLLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(110).then(t.bind(null,1035));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),MapImageLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(21).then(t.bind(null,1013));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),MapNotesLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(111).then(t.bind(null,1021));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),OpenStreetMapLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(39).then(t.bind(null,1022));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),PointCloudLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(6),t.e(18),t.e(112)]).then(t.bind(null,1029));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),RouteLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(113).then(t.bind(null,1023));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),SceneLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(6),t.e(33)]).then(t.bind(null,1041));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),StreamLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(114).then(t.bind(null,1042));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),TileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,580));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),UnknownLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(115).then(t.bind(null,1024));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),UnsupportedLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(116).then(t.bind(null,1025));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),VectorTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(null,581));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WebTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(null,972));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WMSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(46).then(t.bind(null,1033));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WMTSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(40).then(t.bind(null,1030));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=42.97517d18.chunk.js.map