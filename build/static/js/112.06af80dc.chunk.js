(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[112],{1051:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(3),a=n(5),l=n(6),i=n(0),u=(n(15),n(14),n(18),n(1)),c=n(34),s=n(8),p=(n(12),n(21),n(22),n(17)),f=n(39),b=n(184),d=n(236),y=n(284),O=n(283),j=n(383),m=function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).type="route",e}return Object(o.a)(n,[{key:"barrierLines",get:function(){return this._getNamedFeatureLayer("PolylineBarriers")}},{key:"barrierPoints",get:function(){return this._getNamedFeatureLayer("Barriers")}},{key:"barrierPolygons",get:function(){return this._getNamedFeatureLayer("PolygonBarriers")}},{key:"directionLines",get:function(){return this._getNamedFeatureLayer("DirectionLines")}},{key:"directionPoints",get:function(){return this._getNamedFeatureLayer("DirectionPoints")}},{key:"readFeatureCollectionsFromItem",value:function(e,t,n){return this.revert("featureCollections","portal-item"),t.layers.map((function(e){var t=new j.default;return t.read(e,n),t}))}},{key:"readFeatureCollectionsFromWebMap",value:function(e,t,n){return t.featureCollection.layers.map((function(e){var t=new j.default;return t.read(e,n),t}))}},{key:"fullExtent",get:function(){return this.featureCollections?this.featureCollections.reduce((function(e,t){return e?e.union(t.fullExtent):t.fullExtent}),null):null}},{key:"maxScale",get:function(){return this.featureCollections?this.featureCollections.reduce((function(e,t){return null==e?t.maxScale:Math.min(e,t.maxScale)}),null):0},set:function(e){this.featureCollections.forEach((function(t){t.maxScale=e})),this._set("maxScale",e)}},{key:"minScale",get:function(){return this.featureCollections?this.featureCollections.reduce((function(e,t){return null==e?t.minScale:Math.min(e,t.minScale)}),null):0},set:function(e){this.featureCollections.forEach((function(t){t.minScale=e})),this._set("minScale",e)}},{key:"routeInfo",get:function(){return this._getNamedFeatureLayer("RouteInfo")}},{key:"stops",get:function(){return this._getNamedFeatureLayer("Stops")}},{key:"load",value:function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Object(p.s)(this)}},{key:"_getNamedFeatureLayer",value:function(e){if(this.featureCollections)return this.featureCollections.find((function(t){return t.title===e}))}}]),n}(Object(y.a)(Object(O.a)(Object(d.a)(b.a))));Object(i.a)([Object(u.b)({dependsOn:["featureCollections"]})],m.prototype,"barrierLines",null),Object(i.a)([Object(u.b)({dependsOn:["featureCollections"]})],m.prototype,"barrierPoints",null),Object(i.a)([Object(u.b)({dependsOn:["featureCollections"]})],m.prototype,"barrierPolygons",null),Object(i.a)([Object(u.b)({dependsOn:["featureCollections"]})],m.prototype,"directionLines",null),Object(i.a)([Object(u.b)({dependsOn:["featureCollections"]})],m.prototype,"directionPoints",null),Object(i.a)([Object(u.b)({type:f.a.ofType(j.default)})],m.prototype,"featureCollections",void 0),Object(i.a)([Object(c.a)("portal-item","featureCollections",["layers"])],m.prototype,"readFeatureCollectionsFromItem",null),Object(i.a)([Object(c.a)("web-map","featureCollections",["featureCollection.layers"])],m.prototype,"readFeatureCollectionsFromWebMap",null),Object(i.a)([Object(u.b)({dependsOn:["featureCollections"],readOnly:!0})],m.prototype,"fullExtent",null),Object(i.a)([Object(u.b)({type:["show","hide"]})],m.prototype,"listMode",void 0),Object(i.a)([Object(u.b)({dependsOn:["featureCollections"]})],m.prototype,"maxScale",null),Object(i.a)([Object(u.b)({dependsOn:["featureCollections"]})],m.prototype,"minScale",null),Object(i.a)([Object(u.b)({dependsOn:["featureCollections"]})],m.prototype,"routeInfo",null),Object(i.a)([Object(u.b)({dependsOn:["featureCollections"]})],m.prototype,"stops",null),Object(i.a)([Object(u.b)({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0);var h=m=Object(i.a)([Object(s.a)("esri.layers.RouteLayer")],m);t.default=h}}]);
//# sourceMappingURL=112.06af80dc.chunk.js.map