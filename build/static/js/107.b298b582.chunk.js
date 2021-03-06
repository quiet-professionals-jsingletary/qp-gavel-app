(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[107],{1063:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a.n(r),i=a(16),o=a(2),l=a(3),s=a(5),c=a(6),u=a(0),b=(a(15),a(4)),p=(a(14),a(18),a(1)),d=a(50),g=a(8),y=a(20),h=(a(12),a(21),a(22),a(17)),v=a(48),j=a(65),O=a(236),f=a(284),m=a(286),M=a(143),w=a(74),k=a(184),S=a(115),T=a(424),x=a(285),B={id:"0/0/0",level:0,row:0,col:0,extent:null},U=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.apply(this,arguments)).tileInfo=M.a.create({spatialReference:v.a.WebMercator,size:256}),e.type="base-tile",e.fullExtent=new w.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,v.a.WebMercator),e.spatialReference=v.a.WebMercator,e}return Object(l.a)(a,[{key:"getTileBounds",value:function(e,t,a,r){var n=r||Object(S.h)();return B.level=e,B.row=t,B.col=a,B.extent=n,this.tileInfo.updateTileInfo(B),B.extent=null,n}},{key:"fetchTile",value:function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=r.signal,i=r.timestamp,o=this.getTileUrl(e,t,a),l={responseType:"image",signal:n};return null!=i&&(l.query={_ts:r.timestamp}),Object(j.default)(o,l).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(){throw new y.a("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}}]),a}(Object(m.a)(Object(x.a)(Object(T.a)(k.a))));Object(u.a)([Object(p.b)({type:M.a})],U.prototype,"tileInfo",void 0),Object(u.a)([Object(p.b)({type:["show","hide"]})],U.prototype,"listMode",void 0),Object(u.a)([Object(p.b)({readOnly:!0,value:"base-tile"})],U.prototype,"type",void 0),Object(u.a)([Object(p.b)()],U.prototype,"fullExtent",void 0),Object(u.a)([Object(p.b)()],U.prototype,"spatialReference",void 0);var R=U=Object(u.a)([Object(g.a)("esri.layers.BaseTileLayer")],U),_=new d.a({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),I=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).type="bing-maps",r.tileInfo=new M.a({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:v.a.WebMercator},spatialReference:v.a.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),r.key=null,r.style="road",r.culture="en-US",r.region=null,r.portalUrl=null,r.hasAttributionData=!0,r}return Object(l.a)(a,[{key:"bingMetadata",get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)}},{key:"copyright",get:function(){return Object(b.h)(this.bingMetadata)?this.bingMetadata.copyright:null}},{key:"operationalLayerType",get:function(){return _.toJSON(this.style)}},{key:"bingLogo",get:function(){return Object(b.h)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}},{key:"load",value:function(e){var t=this;return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((function(){return t._getMetadata()}))):this.addResolvingPromise(Object(h.r)(new y.a("bingmapslayer:load","Bing layer must have bing key."))),Object(h.s)(this)}},{key:"getTileUrl",value:function(e,t,a){if(!this.loaded||Object(b.g)(this.bingMetadata))return null;var r=this.bingMetadata.resourceSets[0].resources[0],n=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],i=this._getQuadKey(e,t,a);return r.imageUrl.replace("{subdomain}",n).replace("{quadkey}",i)}},{key:"fetchAttributionData",value:function(){var e=Object(i.a)(n.a.mark((function e(){var t=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.load().then((function(){return Object(b.g)(t.bingMetadata)?null:{contributors:t.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map((function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}}))}}))}})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_getMetadata",value:function(){var e=this,t={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return Object(j.default)("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/".concat(t),{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((function(t){var a=t.data;if(200!==a.statusCode)throw new y.a("bingmapslayer:getmetadata",a.statusDescription);if(e.bingMetadata=a,0===e.bingMetadata.resourceSets.length)throw new y.a("bingmapslayer:getmetadata","no bing resourcesets");if(0===e.bingMetadata.resourceSets[0].resources.length)throw new y.a("bingmapslayer:getmetadata","no bing resources")})).catch((function(e){throw new y.a("bingmapslayer:getmetadata",e.message)}))}},{key:"_getPortalBingKey",value:function(){var e=this;return Object(j.default)(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((function(t){if(!t.data.bingKey)throw new y.a("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");e.key=t.data.bingKey})).catch((function(e){throw new y.a("bingmapslayer:getportalbingkey",e.message)}))}},{key:"_getQuadKey",value:function(e,t,a){for(var r="",n=e;n>0;n--){var i=0,o=1<<n-1;0!=(a&o)&&(i+=1),0!=(t&o)&&(i+=2),r+=i.toString()}return r}}]),a}(Object(m.a)(Object(f.a)(Object(O.a)(R))));Object(u.a)([Object(p.b)({json:{read:!1,write:!1},value:null})],I.prototype,"bingMetadata",null),Object(u.a)([Object(p.b)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],I.prototype,"type",void 0),Object(u.a)([Object(p.b)({type:M.a})],I.prototype,"tileInfo",void 0),Object(u.a)([Object(p.b)({type:String,readOnly:!0,dependsOn:["bingMetadata"],json:{read:!1,write:!1}})],I.prototype,"copyright",null),Object(u.a)([Object(p.b)({type:String,json:{write:!1,read:!1}})],I.prototype,"key",void 0),Object(u.a)([Object(p.b)({type:_.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:_.read}}})],I.prototype,"style",void 0),Object(u.a)([Object(p.b)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"],dependsOn:["style"]})],I.prototype,"operationalLayerType",null),Object(u.a)([Object(p.b)({type:String,json:{write:!1,read:!1}})],I.prototype,"culture",void 0),Object(u.a)([Object(p.b)({type:String,json:{write:!1,read:!1}})],I.prototype,"region",void 0),Object(u.a)([Object(p.b)({type:String,json:{write:!0,read:!0}})],I.prototype,"portalUrl",void 0),Object(u.a)([Object(p.b)({type:Boolean,json:{write:!1,read:!1}})],I.prototype,"hasAttributionData",void 0),Object(u.a)([Object(p.b)({type:String,readOnly:!0,dependsOn:["bingMetadata"]})],I.prototype,"bingLogo",null);var L=I=Object(u.a)([Object(g.a)("esri.layers.BingMapsLayer")],I);t.default=L}}]);
//# sourceMappingURL=107.b298b582.chunk.js.map