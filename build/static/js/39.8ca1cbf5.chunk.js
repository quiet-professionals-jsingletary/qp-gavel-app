(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[39,50],{1009:function(e,t,a){"use strict";var r,l=a(2),o=a(3),n=a(5),i=a(6),c=a(0),s=(a(15),a(23)),p=(a(14),a(18),a(1)),u=a(8),b=(a(12),a(21),a(22),a(27)),j=r=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"clone",value:function(){return new r({customLayerParameters:Object(s.a)(this.customLayerParameters),customParameters:Object(s.a)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}}]),a}(b.a);Object(c.a)([Object(p.b)({json:{type:Object,write:!0}})],j.prototype,"customLayerParameters",void 0),Object(c.a)([Object(p.b)({json:{type:Object,write:!0}})],j.prototype,"customParameters",void 0),Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],j.prototype,"layerIdentifier",void 0),Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],j.prototype,"tileMatrixSet",void 0),Object(c.a)([Object(p.b)({type:String,json:{write:!0}})],j.prototype,"url",void 0);var y=j=r=Object(c.a)([Object(u.a)("esri.layer.support.WMTSLayerInfo")],j);t.a=y},1046:function(e,t,a){"use strict";a.r(t);var r=a(2),l=a(3),o=a(5),n=a(6),i=a(0),c=(a(15),a(14),a(18),a(1)),s=a(8),p=(a(12),a(21),a(22),a(48)),u=a(74),b=(a(99),a(385)),j=a(143),y=function(e){Object(o.a)(a,e);var t=Object(n.a)(a);function a(){var e;Object(r.a)(this,a);for(var l=arguments.length,o=new Array(l),n=0;n<l;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).portalItem=null,e.isReference=null,e.subDomains=["a","b","c"],e.fullExtent=new u.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,p.a.WebMercator),e.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",e.operationalLayerType="OpenStreetMap",e.type="open-street-map",e.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA",e}return Object(l.a)(a,[{key:"refreshInterval",get:function(){return 0}}]),a}(a(997).default);Object(i.a)([Object(c.b)({type:b.default,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],y.prototype,"portalItem",void 0),Object(i.a)([Object(c.b)({type:Boolean,json:{read:!1,write:!1}})],y.prototype,"isReference",void 0),Object(i.a)([Object(c.b)({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],y.prototype,"refreshInterval",null),Object(i.a)([Object(c.b)({type:j.a,json:{write:!1}})],y.prototype,"tileInfo",void 0),Object(i.a)([Object(c.b)({type:["show","hide"]})],y.prototype,"listMode",void 0),Object(i.a)([Object(c.b)({readOnly:!0,json:{read:!1,write:!1}})],y.prototype,"subDomains",void 0),Object(i.a)([Object(c.b)({readOnly:!0,json:{read:!1,write:!1}})],y.prototype,"fullExtent",void 0),Object(i.a)([Object(c.b)({readOnly:!0,json:{read:!1,write:!1}})],y.prototype,"urlTemplate",void 0),Object(i.a)([Object(c.b)({type:["OpenStreetMap"]})],y.prototype,"operationalLayerType",void 0),Object(i.a)([Object(c.b)({json:{read:!1}})],y.prototype,"type",void 0),Object(i.a)([Object(c.b)({json:{read:!1,write:!1}})],y.prototype,"copyright",void 0),Object(i.a)([Object(c.b)({json:{read:!1,write:!1}})],y.prototype,"wmtsInfo",void 0);var O=y=Object(i.a)([Object(s.a)("esri.layers.OpenStreetMapLayer")],y);t.default=O},997:function(e,t,a){"use strict";a.r(t);var r=a(13),l=a(2),o=a(3),n=a(5),i=a(6),c=a(0),s=(a(15),a(23)),p=a(125),u=(a(14),a(18),a(1)),b=a(34),j=a(8),y=a(35),O=a(20),d=a(12),v=(a(21),a(22),a(17)),f=a(48),m=a(56),h=a(74),w=(a(99),a(65)),g=a(184),T=a(236),S=a(284),R=a(286),I=a(283),M=a(424),x=a(285),k=a(393),D=a(143),E=a(1009),L=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).copyright="",e.fullExtent=new h.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,f.a.WebMercator),e.legendEnabled=!1,e.isReference=null,e.popupEnabled=!1,e.spatialReference=f.a.WebMercator,e.subDomains=null,e.tileInfo=new D.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new m.a({x:-20037508.342787,y:20037508.342787,spatialReference:f.a.WebMercator}),spatialReference:f.a.WebMercator,lods:[new k.a({level:0,scale:591657527.591555,resolution:156543.033928}),new k.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new k.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new k.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new k.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new k.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new k.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new k.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new k.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new k.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new k.a({level:10,scale:577790.554289,resolution:152.874056570411}),new k.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new k.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new k.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new k.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new k.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new k.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new k.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new k.a({level:18,scale:2256.994353,resolution:.597164283559817}),new k.a({level:19,scale:1128.497176,resolution:.298582141647617})]}),e.type="web-tile",e.urlTemplate=null,e.wmtsInfo=null,e}return Object(o.a)(a,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(s.d)({urlTemplate:e},t||{}):e}},{key:"load",value:function(e){var t=this,a=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var a=new d.a(t.urlTemplate);t.subDomains&&t.subDomains.length>0||-1===a.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new O.a("web-tile-layer:load","WebTileLayer (title: '".concat(t.title,"', id: '").concat(t.id,"') ").concat(e))}));return this.addResolvingPromise(a),Object(v.s)(this)}},{key:"levelValues",get:function(){var e=[];if(!this.tileInfo)return null;var t,a=Object(r.a)(this.tileInfo.lods);try{for(a.s();!(t=a.n()).done;){var l=t.value;e[l.level]=l.levelValue||l.level}}catch(o){a.e(o)}finally{a.f()}return e}},{key:"readSpatialReference",value:function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&f.a.fromJSON(t.fullExtent.spatialReference)}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,a=this.subDomains,l=new d.a(t),o=l.scheme?l.scheme+"://":"//",n=o+l.authority+"/";if(-1===l.authority.indexOf("{subDomain}"))e.push(n);else if(a&&a.length>0&&l.authority.split(".").length>1){var i,c=Object(r.a)(a);try{for(c.s();!(i=c.n()).done;){var s=i.value;e.push(o+l.authority.replace(/\{subDomain\}/gi,s)+"/")}}catch(p){c.e(p)}finally{c.f()}}return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new d.a(e),a=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(a.length)}},{key:"readUrlTemplate",value:function(e,t){return e||t.templateUrl}},{key:"writeUrlTemplate",value:function(e,t){e&&Object(d.v)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(d.B)(e)),t.templateUrl=e}},{key:"fetchTile",value:function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=r.signal,o=r.timestamp,n=this.getTileUrl(e,t,a),i={responseType:"image",signal:l};return null!=o&&(i.query={_ts:r.timestamp}),Object(w.default)(n,i).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,t,a){var r=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(p.c)(this.urlPath,{level:r,z:r,col:a,x:a,row:t,y:t})}}]),a}(Object(R.a)(Object(M.a)(Object(x.a)(Object(S.a)(Object(I.a)(Object(T.a)(g.a)))))));Object(c.a)([Object(u.b)({type:String,value:"",json:{write:!0}})],L.prototype,"copyright",void 0),Object(c.a)([Object(u.b)({type:h.a,json:{write:!0}})],L.prototype,"fullExtent",void 0),Object(c.a)([Object(u.b)({readOnly:!0,json:{read:!1,write:!1}})],L.prototype,"legendEnabled",void 0),Object(c.a)([Object(u.b)({type:["show","hide"]})],L.prototype,"listMode",void 0),Object(c.a)([Object(u.b)({dependsOn:["tileInfo"]})],L.prototype,"levelValues",null),Object(c.a)([Object(u.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],L.prototype,"isReference",void 0),Object(c.a)([Object(u.b)({type:["WebTiledLayer"],value:"WebTiledLayer"})],L.prototype,"operationalLayerType",void 0),Object(c.a)([Object(u.b)({readOnly:!0,json:{read:!1,write:!1}})],L.prototype,"popupEnabled",void 0),Object(c.a)([Object(u.b)({type:f.a})],L.prototype,"spatialReference",void 0),Object(c.a)([Object(b.a)("spatialReference",["spatialReference","fullExtent.spatialReference"])],L.prototype,"readSpatialReference",null),Object(c.a)([Object(u.b)({type:[String],json:{write:!0}})],L.prototype,"subDomains",void 0),Object(c.a)([Object(u.b)({type:D.a,json:{write:!0}})],L.prototype,"tileInfo",void 0),Object(c.a)([Object(u.b)({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],L.prototype,"tileServers",null),Object(c.a)([Object(u.b)({json:{read:!1}})],L.prototype,"type",void 0),Object(c.a)([Object(u.b)({dependsOn:["urlTemplate"]})],L.prototype,"urlPath",null),Object(c.a)([Object(u.b)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],L.prototype,"urlTemplate",void 0),Object(c.a)([Object(b.a)("urlTemplate",["urlTemplate","templateUrl"])],L.prototype,"readUrlTemplate",null),Object(c.a)([Object(y.a)("urlTemplate",{templateUrl:{type:String}})],L.prototype,"writeUrlTemplate",null),Object(c.a)([Object(u.b)({type:E.a,json:{write:!0}})],L.prototype,"wmtsInfo",void 0);var P=L=Object(c.a)([Object(j.a)("esri.layers.WebTileLayer")],L);t.default=P}}]);
//# sourceMappingURL=39.8ca1cbf5.chunk.js.map