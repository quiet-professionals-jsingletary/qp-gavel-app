(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[36],{1204:function(e,t,r){"use strict";r.r(t);var a=r(7),i=r.n(a),n=r(15),s=r(10),o=r(2),c=r(3),u=r(5),l=r(6),p=r(0),b=(r(16),r(4)),y=(r(13),r(17)),O=r(1),j=r(41),d=r(8),h=r(42),m=r(18),v=(r(12),r(19),r(126)),f=(r(20),r(24)),g=r(63),x=r(62),w=r(391),S=r(174),k=r(207),q=r(216),I=r(124),J=r(258),M=r(319),E=r(264),N=r(507),P=r(257),L=r(468),R=r(260),F=r(616),T=r(91),U=r(645),A=r(746),_=r(335),D=r(509),V=r(747),G=r(644),H=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).alwaysRefetch=!1,e.dpi=96,e.gdbVersion=null,e.imageFormat="png24",e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.isReference=null,e.labelsVisible=!1,e.operationalLayerType="ArcGISMapServiceLayer",e.sourceJSON=null,e.sublayers=null,e.type="map-image",e.url=null,e}return Object(c.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(s.a)({url:e},t):e}},{key:"load",value:function(e){var t=this,r=Object(b.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((function(){return t._fetchService(r)}),(function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"readImageFormat",value:function(e,t){var r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}},{key:"writeSublayers",value:function(e,t,r,a){if(this.loaded&&e){var i=e.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).toArray(),n=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){var o=Object(v.d)(a.origin);if(3===o){var c=this.createSublayersForOrigin("service").sublayers;n=Object(D.c)(i,c,2)}else if(o>3){var u=this.createSublayersForOrigin("portal-item");n=Object(D.c)(i,u.sublayers,Object(v.d)(u.origin))}}var l=[],p=Object(s.a)({writeSublayerStructure:n},a),b=n;i.forEach((function(e){var t=e.write({},p);l.push(t),b=b||"user"===e.originOf("visible")})),l.some((function(e){return Object.keys(e).length>1}))&&(t.layers=l),b&&(t.visibleLayers=i.filter((function(e){return e.visible})).map((function(e){return e.id})))}}},{key:"createExportImageParameters",value:function(e,t,r,a){var i=a&&a.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var n=new G.a({layer:this,scale:Object(U.b)({extent:e,width:t})*i}),o=n.toJSON();n.destroy();var c=!a||!a.rotation||this.version<10.3?{}:{rotation:-a.rotation},u=e&&e.spatialReference,l=u.wkid||JSON.stringify(u.toJSON());o.dpi*=i;var p={};if(null!=a&&a.timeExtent){var b=a.timeExtent.toJSON(),y=b.start,O=b.end;p.time=y&&O&&y===O?""+y:"".concat(null==y?"null":y,",").concat(null==O?"null":O)}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return Object(s.a)(Object(s.a)(Object(s.a)({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:l,imageSR:l,size:t+","+r},o),c),p)}},{key:"fetchImage",value:function(){var e=Object(n.a)(i.a.mark((function e(t,r,a,n){var o,c,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o={responseType:"image"},n&&n.timestamp&&(o.query=Object(s.a)(Object(s.a)({},o.query),{},{_ts:n.timestamp})),n&&n.signal&&(o.signal=n.signal),this.customParameters&&Object.keys(this.customParameters).length&&(o.query=Object(s.a)(Object(s.a)({},this.customParameters),o.query)),c=this.parsedUrl.path+"/export",null==(u=Object(s.a)(Object(s.a)(Object(s.a)({},this.parsedUrl.query),this.createExportImageParameters(t,r,a,n)),{},{f:"image",_ts:this.alwaysRefetch?Date.now():null})).dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers){e.next=5;break}return e.abrupt("return",Promise.reject(new m.a("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:u})));case 5:return o.query?o.query=Object(s.a)(Object(s.a)({},u),o.query):o.query=u,e.abrupt("return",Object(x.default)(c,o).then((function(e){return e.data})).catch((function(e){if(Object(f.m)(e))throw e;throw new m.a("mapimagelayer:image-fetch-error","Unable to load image: ".concat(c),{error:e})})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,a,i){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=Object(n.a)(i.a.mark((function e(){var t,r,a,n,o,c,u,l,p=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:{},r=Object(s.a)(Object(s.a)({},t),{},{query:{returnUpdates:!0,f:"json"}}),e.next=4,Object(x.default)(this.url,r);case 4:return a=e.sent,n=a.data,o=n.extent,c=n.fullExtent,u=n.timeExtent,l=o||c,e.abrupt("return",{fullExtent:l&&g.a.fromJSON(l),timeExtent:u&&k.a.fromJSON({start:u[0],end:u[1]})});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadAll",value:function(){var e=this;return Object(w.a)(this,(function(t){t(e.allSublayers)}))}},{key:"_fetchService",value:function(){var e=Object(n.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}));case 2:return e.next=4,Object(x.default)(this.parsedUrl.path,{query:Object(s.a)(Object(s.a)({f:"json"},this.parsedUrl.query),this.customParameters),signal:t});case 4:r=e.sent,a=r.data,r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(Object(E.a)(Object(F.a)(Object(R.a)(Object(L.a)(Object(V.a)(Object(A.a)(Object(M.a)(Object(J.a)(Object(P.a)(Object(q.a)(Object(N.a)(Object(T.b)(S.a)))))))))))));Object(p.a)([Object(O.b)()],H.prototype,"alwaysRefetch",void 0),Object(p.a)([Object(O.b)()],H.prototype,"dpi",void 0),Object(p.a)([Object(O.b)()],H.prototype,"gdbVersion",void 0),Object(p.a)([Object(O.b)()],H.prototype,"imageFormat",void 0),Object(p.a)([Object(j.a)("imageFormat",["supportedImageFormatTypes"])],H.prototype,"readImageFormat",null),Object(p.a)([Object(O.b)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],H.prototype,"imageMaxHeight",void 0),Object(p.a)([Object(O.b)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],H.prototype,"imageMaxWidth",void 0),Object(p.a)([Object(O.b)()],H.prototype,"imageTransparency",void 0),Object(p.a)([Object(O.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],H.prototype,"isReference",void 0),Object(p.a)([Object(O.b)({json:{read:!1,write:!1}})],H.prototype,"labelsVisible",void 0),Object(p.a)([Object(O.b)({type:["ArcGISMapServiceLayer"]})],H.prototype,"operationalLayerType",void 0),Object(p.a)([Object(O.b)({json:{read:!1,write:!1}})],H.prototype,"popupEnabled",void 0),Object(p.a)([Object(O.b)()],H.prototype,"sourceJSON",void 0),Object(p.a)([Object(O.b)({json:{write:{ignoreOrigin:!0}}})],H.prototype,"sublayers",void 0),Object(p.a)([Object(h.a)("sublayers",{layers:{type:[_.a]},visibleLayers:{type:[y.a]}})],H.prototype,"writeSublayers",null),Object(p.a)([Object(O.b)({type:["show","hide","hide-children"]})],H.prototype,"listMode",void 0),Object(p.a)([Object(O.b)({json:{read:!1},readOnly:!0,value:"map-image"})],H.prototype,"type",void 0),Object(p.a)([Object(O.b)(I.n)],H.prototype,"url",void 0);var W=H=Object(p.a)([Object(d.a)("esri.layers.MapImageLayer")],H);t.default=W}}]);
//# sourceMappingURL=36.8dbf1507.chunk.js.map