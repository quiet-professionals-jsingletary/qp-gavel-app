(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[108],{1045:function(e,t,r){"use strict";r.r(t);var o=r(7),a=r.n(o),i=r(16),n=r(10),l=r(2),c=r(3),s=r(5),p=r(6),u=r(0),b=(r(15),r(106)),y=r(4),d=(r(14),r(18),r(1)),j=r(34),O=r(8),f=r(12),v=(r(21),r(22),r(17)),S=r(130),h=r(134),m=r(65),g=r(357),k=r(170),C=r(141),R=(r(66),r(184)),w=r(236),x=r(131),F=r(284),M=r(286),_=r(283),G=r(424),J=r(285),L=["atom","xml"],q={base:S.a,key:"type",typeMap:{"simple-line":h.default},errorContext:"symbol"},E={base:S.a,key:"type",typeMap:{"picture-marker":g.a,"simple-marker":C.default},errorContext:"symbol"},T={base:S.a,key:"type",typeMap:{"simple-fill":k.default},errorContext:"symbol"},A=function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(l.a)(this,r);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).description=null,e.legendEnabled=!0,e.lineSymbol=null,e.pointSymbol=null,e.polygonSymbol=null,e.operationalLayerType="GeoRSS",e.outSpatialReference=null,e.url=null,e.type="geo-rss",e}return Object(c.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(n.a)({url:e},t):e}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(f.k)(this.url,L)||"GeoRSS":e||""},set:function(e){this._set("title",e)}},{key:"readFeatureCollections",value:function(e,t){return t.featureCollection.layers.forEach((function(e){var t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}},{key:"load",value:function(e){var t=this,r=Object(y.h)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((function(){return t._fetchService(r)}),(function(){return t._fetchService(r)}))),Object(v.s)(this)}},{key:"_fetchService",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.default)(b.a.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:t});case 2:r=e.sent,o=r.data,this.read(o,{origin:"service"});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(Object(M.a)(Object(G.a)(Object(F.a)(Object(_.a)(Object(J.a)(Object(w.a)(R.a)))))));Object(u.a)([Object(d.b)()],A.prototype,"description",void 0),Object(u.a)([Object(d.b)({dependsOn:["url"],json:{origins:{service:{read:{source:"name",reader:function(e){return e||void 0}}}}}})],A.prototype,"title",null),Object(u.a)([Object(d.b)()],A.prototype,"featureCollections",void 0),Object(u.a)([Object(j.a)("service","featureCollections",["featureCollection.layers"])],A.prototype,"readFeatureCollections",null),Object(u.a)([Object(d.b)(x.d)],A.prototype,"legendEnabled",void 0),Object(u.a)([Object(d.b)({types:q,json:{write:!0}})],A.prototype,"lineSymbol",void 0),Object(u.a)([Object(d.b)({type:["show","hide"]})],A.prototype,"listMode",void 0),Object(u.a)([Object(d.b)({types:E,json:{write:!0}})],A.prototype,"pointSymbol",void 0),Object(u.a)([Object(d.b)({types:T,json:{write:!0}})],A.prototype,"polygonSymbol",void 0),Object(u.a)([Object(d.b)({type:["GeoRSS"]})],A.prototype,"operationalLayerType",void 0),Object(u.a)([Object(d.b)()],A.prototype,"outSpatialReference",void 0),Object(u.a)([Object(d.b)(x.j)],A.prototype,"url",void 0),Object(u.a)([Object(d.b)({readOnly:!0,json:{read:!1},value:"geo-rss"})],A.prototype,"type",void 0);var N=A=Object(u.a)([Object(O.a)("esri.layers.GeoRSSLayer")],A);t.default=N}}]);
//# sourceMappingURL=108.33a90e03.chunk.js.map