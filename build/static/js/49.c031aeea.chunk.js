(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[49],{1027:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return d}));var a=r(2),o=r(5),n=r(6),i=r(0),c=(r(15),r(14),r(18),r(1)),s=r(45),p=r(8),u=(r(12),r(21),r(22),r(27)),b=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).nodesPerPage=null,e.rootIndex=0,e.lodSelectionMetricType=null,e}return r}(u.a);Object(i.a)([Object(c.b)({type:Number})],b.prototype,"nodesPerPage",void 0),Object(i.a)([Object(c.b)({type:Number})],b.prototype,"rootIndex",void 0),Object(i.a)([Object(c.b)({type:String})],b.prototype,"lodSelectionMetricType",void 0),b=Object(i.a)([Object(p.a)("esri.layer.support.I3SNodePageDefinition")],b);var l=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).factor=1,e}return r}(u.a);Object(i.a)([Object(c.b)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),Object(i.a)([Object(c.b)({type:Number})],l.prototype,"factor",void 0),l=Object(i.a)([Object(p.a)("esri.layer.support.I3SMaterialTexture")],l);var y=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).baseColorFactor=[1,1,1,1],e.baseColorTexture=null,e.metallicRoughnessTexture=null,e.metallicFactor=1,e.roughnessFactor=1,e}return r}(u.a);Object(i.a)([Object(c.b)({type:[Number]})],y.prototype,"baseColorFactor",void 0),Object(i.a)([Object(c.b)({type:l})],y.prototype,"baseColorTexture",void 0),Object(i.a)([Object(c.b)({type:l})],y.prototype,"metallicRoughnessTexture",void 0),Object(i.a)([Object(c.b)({type:Number})],y.prototype,"metallicFactor",void 0),Object(i.a)([Object(c.b)({type:Number})],y.prototype,"roughnessFactor",void 0),y=Object(i.a)([Object(p.a)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],y);var O=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).alphaMode="opaque",e.alphaCutoff=.25,e.doubleSided=!1,e.cullFace="none",e.normalTexture=null,e.occlusionTexture=null,e.emissiveTexture=null,e.emissiveFactor=null,e.pbrMetallicRoughness=null,e}return r}(u.a);Object(i.a)([Object(s.a)({opaque:"opaque",mask:"mask",blend:"blend"})],O.prototype,"alphaMode",void 0),Object(i.a)([Object(c.b)({type:Number})],O.prototype,"alphaCutoff",void 0),Object(i.a)([Object(c.b)({type:Boolean})],O.prototype,"doubleSided",void 0),Object(i.a)([Object(s.a)({none:"none",back:"back",front:"front"})],O.prototype,"cullFace",void 0),Object(i.a)([Object(c.b)({type:l})],O.prototype,"normalTexture",void 0),Object(i.a)([Object(c.b)({type:l})],O.prototype,"occlusionTexture",void 0),Object(i.a)([Object(c.b)({type:l})],O.prototype,"emissiveTexture",void 0),Object(i.a)([Object(c.b)({type:[Number]})],O.prototype,"emissiveFactor",void 0),Object(i.a)([Object(c.b)({type:y})],O.prototype,"pbrMetallicRoughness",void 0),O=Object(i.a)([Object(p.a)("esri.layer.support.I3SMaterialDefinition")],O);var j=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(u.a);Object(i.a)([Object(c.b)({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:"".concat(t.index)}}}})],j.prototype,"name",void 0),Object(i.a)([Object(s.a)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2"})],j.prototype,"format",void 0),j=Object(i.a)([Object(p.a)("esri.layer.support.I3STextureFormat")],j);var d=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).atlas=!1,e}return r}(u.a);Object(i.a)([Object(c.b)({type:[j]})],d.prototype,"formats",void 0),Object(i.a)([Object(c.b)({type:Boolean})],d.prototype,"atlas",void 0),d=Object(i.a)([Object(p.a)("esri.layer.support.I3STextureSetDefinition")],d);var f=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(u.a);Object(i.a)([Object(s.a)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],f.prototype,"type",void 0),Object(i.a)([Object(c.b)({type:Number})],f.prototype,"component",void 0),f=Object(i.a)([Object(p.a)("esri.layer.support.I3SGeometryAttribute")],f);var v=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(u.a);Object(i.a)([Object(s.a)({draco:"draco"})],v.prototype,"encoding",void 0),Object(i.a)([Object(c.b)({type:[String]})],v.prototype,"attributes",void 0),v=Object(i.a)([Object(p.a)("esri.layer.support.I3SGeometryCompressedAttributes")],v);var h=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).offset=0,e}return r}(u.a);Object(i.a)([Object(c.b)({type:Number})],h.prototype,"offset",void 0),Object(i.a)([Object(c.b)({type:f})],h.prototype,"position",void 0),Object(i.a)([Object(c.b)({type:f})],h.prototype,"normal",void 0),Object(i.a)([Object(c.b)({type:f})],h.prototype,"uv0",void 0),Object(i.a)([Object(c.b)({type:f})],h.prototype,"color",void 0),Object(i.a)([Object(c.b)({type:f})],h.prototype,"uvRegion",void 0),Object(i.a)([Object(c.b)({type:f})],h.prototype,"featureId",void 0),Object(i.a)([Object(c.b)({type:f})],h.prototype,"faceRange",void 0),Object(i.a)([Object(c.b)({type:v})],h.prototype,"compressedAttributes",void 0),h=Object(i.a)([Object(p.a)("esri.layer.support.I3SGeometryBuffer")],h);var m=function(e){Object(o.a)(r,e);var t=Object(n.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return r}(u.a);Object(i.a)([Object(s.a)({triangle:"triangle"})],m.prototype,"topology",void 0),Object(i.a)([Object(c.b)()],m.prototype,"geometryBuffers",void 0),m=Object(i.a)([Object(p.a)("esri.layer.support.I3SGeometryDefinition")],m)},1056:function(e,t,r){"use strict";r.r(t);var a=r(7),o=r.n(a),n=r(16),i=r(10),c=r(2),s=r(3),p=r(5),u=r(6),b=r(0),l=(r(15),r(4)),y=(r(14),r(18),r(1)),O=r(34),j=r(8),d=r(20),f=r(126),v=r(13),h=r(179),m=r(1144),g=r(12),S=r(21),w=r(124),x=r(22);function I(e){var t=Object(l.h)(e)&&e.origins?e.origins:[void 0];return function(r,a){var o,n=function(e,t,r){if(Object(l.h)(e)&&"resource"===e.type)return function(e,t,r){var a=Object(h.b)(t,r);return{type:String,read:function(e,t,r){var o=Object(f.d)(e,t,r);return a.type===String?o:"function"==typeof a.type?new a.type({url:o}):void 0},write:{writer:function(t,o,n,c){if(!c||!c.resources)return"string"==typeof t?void(o[n]=Object(f.e)(t,c)):void(o[n]=t.write({},c));var s,p=(s=t,Object(l.g)(s)?null:"string"==typeof s?s:s.url),u=p?Object(f.e)(p,Object(i.a)(Object(i.a)({},c),{},{verifyItemRelativeUrls:c&&c.verifyItemRelativeUrls?{writtenUrls:c.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null})):null,b=a.type!==String&&(!Object(m.a)(this)||c&&c.origin&&this.originIdOf(r)>Object(w.d)(c.origin));c&&c.portalItem&&Object(l.h)(u)&&!Object(g.s)(u)?b?function(e,t,r,a,o,n,i,c){var s=i.portalItem.resourceFromPath(a),p=N(r,a,i);Object(x.a)(p)===Object(g.n)(s.path)?(k(e,t,s,p,i.resources.toUpdate),o[n]=a):T(e,t,r,a,o,n,i,c)}(this,r,t,u,o,n,c,e):function(e,t,r,a){a.resources.toKeep.push({resource:a.portalItem.resourceFromPath(e)}),t[r]=e}(u,o,n,c):c&&c.portalItem&&(Object(l.g)(u)||Object(l.h)(Object(f.b)(u))||Object(g.t)(u)||b)?T(this,r,t,u,o,n,c,e):o[n]=u}}}}(e,t,r);switch(Object(l.h)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":return{read:f.c.read,write:f.c.write}}}(e,r,a),c=Object(v.a)(t);try{for(c.s();!(o=c.n()).done;){var s=o.value,p=Object(y.c)(r,s,a);for(var u in n)p[u]=n[u]}}catch(b){c.e(b)}finally{c.f()}}}function T(e,t,a,i,c,s,p,u){var b=Object(S.a)(),y=N(a,i,p),O=Object(g.x)(Object(l.f)(u,"prefix"),b),j="".concat(O,".").concat(Object(x.a)(y)),d=p.portalItem.resourceFromPath(j);Object(g.t)(i)&&p.resources.pendingOperations.push(function(){var e=Object(n.a)(o.a.mark((function e(t){var a,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(null,65));case 2:return a=e.sent.default,e.next=5,a(t,{responseType:"blob"});case 5:return n=e.sent,i=n.data,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(i).then((function(e){d.path="".concat(O,".").concat(Object(x.a)(e)),c[s]=d.itemRelativeUrl})).catch((function(){}))),k(e,t,d,y,p.resources.toAdd),c[s]=d.itemRelativeUrl}function k(e,t,r,a,o){o.push({resource:r,content:a,finish:function(r){!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function N(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}var R,M=r(60),U=r(184),_=r(236),F=r(29),P=r(131),J=r(284),L=r(288),D=r(283),A=r(285),C=r(1027),q=r(1060),B=r(27),G=r(39),K=r(65),V=r(23),z=r(166),E=r(35),H=r(119),Q=(r(99),r(138)),W=R=function(e){Object(p.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).geometry=null,a.type="clip",a}return Object(s.a)(r,[{key:"writeGeometry",value:function(e,t,r,a){if(a.layer&&a.layer.spatialReference&&!a.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Object(Q.b)(e.spatialReference,a.layer.spatialReference))return void(a&&a.messages&&a.messages.push(new z.a("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})));var o=new H.a;Object(Q.n)(e,o,a.layer.spatialReference),t[r]=o.toJSON(a)}else t[r]=e.toJSON(a);delete t[r].spatialReference}},{key:"clone",value:function(){return new R({geometry:Object(V.a)(this.geometry),type:this.type})}}]),r}(B.a);Object(b.a)([Object(y.b)({type:H.a}),I()],W.prototype,"geometry",void 0),Object(b.a)([Object(E.a)(["web-scene","portal-item"],"geometry")],W.prototype,"writeGeometry",null),Object(b.a)([Object(y.b)({type:["clip","mask","replace"],nonNullable:!0}),I()],W.prototype,"type",void 0);var X,Y=W=R=Object(b.a)([Object(j.a)("esri.layers.support.SceneModification")],W),Z=X=function(e){Object(p.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).url=null,a}return Object(s.a)(r,[{key:"toJSON",value:function(e){return this.toArray().map((function(t){return t.toJSON(e)})).filter((function(e){return!!e.geometry}))}},{key:"clone",value:function(){return new X({url:this.url,items:this.items.map((function(e){return e.clone()}))})}},{key:"_readModifications",value:function(e,t){var r,a=Object(v.a)(e);try{for(a.s();!(r=a.n()).done;){var o=r.value;this.add(Y.fromJSON(o,t))}}catch(n){a.e(n)}finally{a.f()}}}],[{key:"fromJSON",value:function(e,t){var r=new X;return r._readModifications(e,t),r}},{key:"fromUrl",value:function(){var e=Object(n.a)(o.a.mark((function e(t,r,a){var n,c,s,p,u,b,y;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={url:Object(g.I)(t),origin:"service"},e.next=3,Object(K.default)(t,{responseType:"json",signal:Object(l.f)(a,"signal")});case 3:c=e.sent,s=r.toJSON(),p=[],u=Object(v.a)(c.data);try{for(u.s();!(b=u.n()).done;)y=b.value,p.push(Y.fromJSON(Object(i.a)(Object(i.a)({},y),{},{geometry:Object(i.a)(Object(i.a)({},y.geometry),{},{spatialReference:s})}),n))}catch(o){u.e(o)}finally{u.f()}return e.abrupt("return",new X({url:t,items:p}));case 9:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}()}]),r}(Object(B.b)(G.a.ofType(Y)));Object(b.a)([Object(y.b)({type:String})],Z.prototype,"url",void 0);var $=Z=X=Object(b.a)([Object(j.a)("esri.layers.support.SceneModifications")],Z),ee=function(e){Object(p.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(c.a)(this,r);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).handles=new M.a,e.geometryType="mesh",e.operationalLayerType="IntegratedMeshLayer",e.type="integrated-mesh",e.nodePages=null,e.materialDefinitions=null,e.textureSetDefinitions=null,e.geometryDefinitions=null,e.serviceUpdateTimeStamp=null,e.profile="mesh-pyramids",e.modifications=null,e._modificationsSource=null,e.elevationInfo=null,e.path=null,e}return Object(s.a)(r,[{key:"destroy",value:function(){this.handles.destroy()}},{key:"initialize",value:function(){var e=this;this.handles.add(Object(F.b)(this,"modifications","after-changes",(function(){return e.modifications=e.modifications}),null,null,!0))}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(i.a)({url:e},t):e}},{key:"readModifications",value:function(e,t,r){this._modificationsSource={url:Object(f.a)(e,r),context:r}}},{key:"load",value:function(){var e=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.addResolvingPromise(this._doLoad(t)),this));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_doLoad",value:function(){var e=Object(n.a)(o.a.mark((function e(t){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(l.f)(t,"signal"),e.prev=1,e.next=4,this.loadFromPortal({supportedTypes:["Scene Service"]},t);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.next=10,this._fetchService(r);case 10:if(!Object(l.h)(this._modificationsSource)){e.next=15;break}return e.next=13,$.fromUrl(this._modificationsSource.url,this.spatialReference,t);case 13:a=e.sent,this.setAtOrigin("modifications",a,this._modificationsSource.context.origin),this._modificationsSource=null;case 15:return e.next=17,this._verifyRootNodeAndUpdateExtent(this.nodePages,r);case 17:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"beforeSave",value:function(){if(!Object(l.g)(this._modificationsSource))return this.load().then((function(){}),(function(){}))}},{key:"saveAs",value:function(){var e=Object(n.a)(o.a.mark((function e(t,r){var a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(1,Object(i.a)(Object(i.a)({},r),{},{getTypeKeywords:function(){return a._getTypeKeywords()},portalItemLayerType:"integrated-mesh"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(n.a)(o.a.mark((function e(){var t,r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"integrated-mesh"},e.abrupt("return",this._debouncedSaveOperations(0,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new d.a("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}},{key:"_getTypeKeywords",value:function(){return["IntegratedMeshLayer"]}}]),r}(Object(q.a)(Object(L.a)(Object(J.a)(Object(D.a)(Object(A.a)(Object(_.a)(U.a)))))));Object(b.a)([Object(y.b)({type:String,readOnly:!0})],ee.prototype,"geometryType",void 0),Object(b.a)([Object(y.b)({type:["show","hide"]})],ee.prototype,"listMode",void 0),Object(b.a)([Object(y.b)({type:["IntegratedMeshLayer"]})],ee.prototype,"operationalLayerType",void 0),Object(b.a)([Object(y.b)({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),Object(b.a)([Object(y.b)({type:C.c,readOnly:!0})],ee.prototype,"nodePages",void 0),Object(b.a)([Object(y.b)({type:[C.b],readOnly:!0})],ee.prototype,"materialDefinitions",void 0),Object(b.a)([Object(y.b)({type:[C.d],readOnly:!0})],ee.prototype,"textureSetDefinitions",void 0),Object(b.a)([Object(y.b)({type:[C.a],readOnly:!0})],ee.prototype,"geometryDefinitions",void 0),Object(b.a)([Object(y.b)({readOnly:!0})],ee.prototype,"serviceUpdateTimeStamp",void 0),Object(b.a)([Object(y.b)({type:$}),I({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],ee.prototype,"modifications",void 0),Object(b.a)([Object(O.a)(["web-scene","portal-item"],"modifications")],ee.prototype,"readModifications",null),Object(b.a)([Object(y.b)(P.b)],ee.prototype,"elevationInfo",void 0),Object(b.a)([Object(y.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ee.prototype,"path",void 0);var te=ee=Object(b.a)([Object(j.a)("esri.layers.IntegratedMeshLayer")],ee);t.default=te}}]);
//# sourceMappingURL=49.c031aeea.chunk.js.map