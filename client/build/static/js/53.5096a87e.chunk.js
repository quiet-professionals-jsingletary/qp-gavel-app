(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[53,65],{793:function(e,t,r){"use strict";r.r(t);var a=r(16),i=r(2),n=r(3),l=r(4),o=r(5),s=r(0),c=(r(13),r(18)),u=r(100),p=(r(12),r(14),r(1)),d=r(28),y=r(6),f=r(26),b=r(21),m=r(9),h=(r(19),r(20),r(15)),v=r(36),O=r(48),j=r(57),g=(r(86),r(58)),w=r(183),x=r(184),S=r(228),I=r(230),M=r(227),T=r(394),L=r(229),P=r(275),E=r(93),k=r(819),R=function(e){Object(l.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).copyright="",e.fullExtent=new j.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,v.a.WebMercator),e.legendEnabled=!1,e.isReference=null,e.popupEnabled=!1,e.spatialReference=v.a.WebMercator,e.subDomains=null,e.tileInfo=new E.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new O.a({x:-20037508.342787,y:20037508.342787,spatialReference:v.a.WebMercator}),spatialReference:v.a.WebMercator,lods:[new P.a({level:0,scale:591657527.591555,resolution:156543.033928}),new P.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new P.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new P.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new P.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new P.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new P.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new P.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new P.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new P.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new P.a({level:10,scale:577790.554289,resolution:152.874056570411}),new P.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new P.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new P.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new P.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new P.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new P.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new P.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new P.a({level:18,scale:2256.994353,resolution:.597164283559817}),new P.a({level:19,scale:1128.497176,resolution:.298582141647617})]}),e.type="web-tile",e.urlTemplate=null,e.wmtsInfo=null,e}return Object(n.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(c.d)({urlTemplate:e},t||{}):e}},{key:"load",value:function(e){var t=this,r=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var r=new m.a(t.urlTemplate);t.subDomains&&t.subDomains.length>0||-1===r.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new b.a("web-tile-layer:load","WebTileLayer (title: '".concat(t.title,"', id: '").concat(t.id,"') ").concat(e))}));return this.addResolvingPromise(r),Object(h.s)(this)}},{key:"readSpatialReference",value:function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&v.a.fromJSON(t.fullExtent.spatialReference)}},{key:"readUrlTemplate",value:function(e,t){return e||t.templateUrl}},{key:"writeUrlTemplate",value:function(e,t){e&&Object(m.v)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(m.B)(e)),t.templateUrl=e}},{key:"fetchTile",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=a.signal,n=a.timestamp,l=this.getTileUrl(e,t,r),o={responseType:"image",signal:i};return null!=n&&(o.query={_ts:a.timestamp}),Object(g.default)(l,o).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,t,r){var a=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(u.c)(this.urlPath,{level:a,z:a,col:r,x:r,row:t,y:t})}},{key:"levelValues",get:function(){var e=[];if(!this.tileInfo)return null;var t,r=Object(a.a)(this.tileInfo.lods);try{for(r.s();!(t=r.n()).done;){var i=t.value;e[i.level]=i.levelValue||i.level}}catch(n){r.e(n)}finally{r.f()}return e}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,i=new m.a(t),n=i.scheme?i.scheme+"://":"//",l=n+i.authority+"/";if(-1===i.authority.indexOf("{subDomain}"))e.push(l);else if(r&&r.length>0&&i.authority.split(".").length>1){var o,s=Object(a.a)(r);try{for(s.s();!(o=s.n()).done;){var c=o.value;e.push(n+i.authority.replace(/\{subDomain\}/gi,c)+"/")}}catch(u){s.e(u)}finally{s.f()}}return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new m.a(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}}]),r}(Object(I.a)(Object(T.a)(Object(L.a)(Object(S.a)(Object(M.a)(Object(x.a)(w.a)))))));Object(s.a)([Object(p.b)({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),Object(s.a)([Object(p.b)({type:j.a,json:{write:!0}})],R.prototype,"fullExtent",void 0),Object(s.a)([Object(p.b)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),Object(s.a)([Object(p.b)({type:["show","hide"]})],R.prototype,"listMode",void 0),Object(s.a)([Object(p.b)({dependsOn:["tileInfo"]})],R.prototype,"levelValues",null),Object(s.a)([Object(p.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],R.prototype,"isReference",void 0),Object(s.a)([Object(p.b)({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),Object(s.a)([Object(p.b)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),Object(s.a)([Object(p.b)({type:v.a})],R.prototype,"spatialReference",void 0),Object(s.a)([Object(d.a)("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),Object(s.a)([Object(p.b)({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),Object(s.a)([Object(p.b)({type:E.a,json:{write:!0}})],R.prototype,"tileInfo",void 0),Object(s.a)([Object(p.b)({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],R.prototype,"tileServers",null),Object(s.a)([Object(p.b)({json:{read:!1}})],R.prototype,"type",void 0),Object(s.a)([Object(p.b)({dependsOn:["urlTemplate"]})],R.prototype,"urlPath",null),Object(s.a)([Object(p.b)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),Object(s.a)([Object(d.a)("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),Object(s.a)([Object(f.a)("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),Object(s.a)([Object(p.b)({type:k.a,json:{write:!0}})],R.prototype,"wmtsInfo",void 0);var F=R=Object(s.a)([Object(y.a)("esri.layers.WebTileLayer")],R);t.default=F},819:function(e,t,r){"use strict";var a,i=r(2),n=r(3),l=r(4),o=r(5),s=r(0),c=(r(13),r(18)),u=(r(12),r(14),r(1)),p=r(6),d=(r(9),r(19),r(20),r(23)),y=a=function(e){Object(l.a)(r,e);var t=Object(o.a)(r);function r(e){return Object(i.a)(this,r),t.call(this,e)}return Object(n.a)(r,[{key:"clone",value:function(){return new a({customLayerParameters:Object(c.a)(this.customLayerParameters),customParameters:Object(c.a)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}}]),r}(d.a);Object(s.a)([Object(u.b)({json:{type:Object,write:!0}})],y.prototype,"customLayerParameters",void 0),Object(s.a)([Object(u.b)({json:{type:Object,write:!0}})],y.prototype,"customParameters",void 0),Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],y.prototype,"layerIdentifier",void 0),Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],y.prototype,"tileMatrixSet",void 0),Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],y.prototype,"url",void 0);var f=y=a=Object(s.a)([Object(p.a)("esri.layer.support.WMTSLayerInfo")],y);t.a=f},885:function(e,t,r){"use strict";r.r(t);var a,i=r(8),n=r.n(i),l=r(22),o=r(11),s=r(2),c=r(3),u=r(51),p=r(4),d=r(5),y=r(0),f=(r(13),r(18)),b=r(72),m=(r(12),r(14),r(1)),h=r(28),v=r(6),O=r(26),j=r(21),g=r(9),w=(r(19),r(20),r(15)),x=r(57),S=r(42),I=r(58),M=r(87),T=r(183),L=r(184),P=r(228),E=r(230),k=r(227),R=r(394),F=r(229),C=r(93),U=r(819),V=r(793),_=r(23),A=a=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).fullExtent=null,a.id=null,a.tileInfo=null,a}return Object(c.a)(r,[{key:"clone",value:function(){var e=new a;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}}]),r}(_.a);Object(y.a)([Object(m.b)({type:x.a,json:{read:{source:"fullExtent"}}})],A.prototype,"fullExtent",void 0),Object(y.a)([Object(m.b)({type:String,json:{read:{source:"id"}}})],A.prototype,"id",void 0),Object(y.a)([Object(m.b)({type:C.a,json:{read:{source:"tileInfo"}}})],A.prototype,"tileInfo",void 0);var W,D=A=a=Object(y.a)([Object(v.a)("esri.layer.support.TileMatrixSet")],A),N=W=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).id=null,a.title=null,a.description=null,a.legendUrl=null,a}return Object(c.a)(r,[{key:"clone",value:function(){var e=new W;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}}]),r}(_.a);Object(y.a)([Object(m.b)({json:{read:{source:"id"}}})],N.prototype,"id",void 0),Object(y.a)([Object(m.b)({json:{read:{source:"title"}}})],N.prototype,"title",void 0),Object(y.a)([Object(m.b)({json:{read:{source:"abstract"}}})],N.prototype,"description",void 0),Object(y.a)([Object(m.b)({json:{read:{source:"legendUrl"}}})],N.prototype,"legendUrl",void 0),Object(y.a)([Object(m.b)({json:{read:{source:"isDefault"}}})],N.prototype,"isDefault",void 0),Object(y.a)([Object(m.b)({json:{read:{source:"keywords"}}})],N.prototype,"keywords",void 0);var B,K=N=W=Object(y.a)([Object(v.a)("esri.layer.support.WMTSStyle")],N),q=B=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).fullExtent=null,a.imageFormats=null,a.id=null,a.layer=null,a.styles=null,a.tileMatrixSetId=null,a.tileMatrixSets=null,a}return Object(c.a)(r,[{key:"readFullExtent",value:function(e,t){return(e=t.fullExtent)?x.a.fromJSON(e):null}},{key:"clone",value:function(){var e=new B;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}},{key:"description",get:function(){return this._get("description")},set:function(e){this._set("description",e)}},{key:"imageFormat",get:function(){var e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e},set:function(e){var t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}},{key:"styleId",get:function(){var e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e},set:function(e){this._set("styleId",e)}},{key:"title",get:function(){return this._get("title")},set:function(e){this._set("title",e)}},{key:"tileMatrixSet",get:function(){var e=this;return this.tileMatrixSets?this.tileMatrixSets.find((function(t){return t.id===e.tileMatrixSetId})):null}}]),r}(_.a);Object(y.a)([Object(m.b)()],q.prototype,"description",null),Object(y.a)([Object(m.b)()],q.prototype,"fullExtent",void 0),Object(y.a)([Object(h.a)("fullExtent",["fullExtent"])],q.prototype,"readFullExtent",null),Object(y.a)([Object(m.b)({dependsOn:["imageFormats"]})],q.prototype,"imageFormat",null),Object(y.a)([Object(m.b)({json:{read:{source:"formats"}}})],q.prototype,"imageFormats",void 0),Object(y.a)([Object(m.b)()],q.prototype,"id",void 0),Object(y.a)([Object(m.b)()],q.prototype,"layer",void 0),Object(y.a)([Object(m.b)({dependsOn:["styles"]})],q.prototype,"styleId",null),Object(y.a)([Object(m.b)({type:S.a.ofType(K),json:{read:{source:"styles"}}})],q.prototype,"styles",void 0),Object(y.a)([Object(m.b)({value:null,json:{write:{ignoreOrigin:!0}}})],q.prototype,"title",null),Object(y.a)([Object(m.b)()],q.prototype,"tileMatrixSetId",void 0),Object(y.a)([Object(m.b)({readOnly:!0,dependsOn:["tileMatrixSetId"]})],q.prototype,"tileMatrixSet",null),Object(y.a)([Object(m.b)({type:S.a.ofType(D),json:{read:{source:"tileMatrixSets"}}})],q.prototype,"tileMatrixSets",void 0);var H=q=B=Object(y.a)([Object(v.a)("esri.layers.support.WMTSSublayer")],q),J=r(311),z=r(36),G=r(48),Q=r(217),X=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function Y(e,t){e=e.replace(/ows:/gi,"");var r=(new DOMParser).parseFromString(e,"text/xml").documentElement,a=new Map,i=new Map,n=$("Contents",r);if(!n)throw new j.a("wmtslayer:wmts-capabilities-xml-is-not-valid");var l,o,s=$("OperationsMetadata",r),c=s&&s.querySelector("[name='GetTile']"),u=c&&c.getElementsByTagName("Get"),p=u&&Array.prototype.slice.call(u),d=t&&t.url&&t.url.indexOf("https")>-1,y=t.serviceMode,f=t&&t.url;if(p&&p.length&&p.some((function(e){var t=$("Constraint",e);return!t||re("AllowedValues","Value",y,t)?(f=e.attributes[0].nodeValue,!0):(!t||re("AllowedValues","Value","RESTful",t)||re("AllowedValues","Value","REST",t)?o=e.attributes[0].nodeValue:t&&!re("AllowedValues","Value","KVP",t)||(l=e.attributes[0].nodeValue),!1)})),!f)if(o)f=o,y="RESTful";else if(l)f=l,y="KVP";else{var b=$("ServiceMetadataURL",r);f=b&&b.getAttribute("xlink:href")}var m=f.indexOf("1.0.0/");return-1===m&&"RESTful"===y?f+="/":m>-1&&(f=f.substring(0,m)),"KVP"===y&&(f+=m>-1?"":"?"),d&&(f=f.replace(/^http:/i,"https:")),{copyright:te("ServiceIdentification>AccessConstraints",r),layers:Array.prototype.slice.call(n.getElementsByTagName("Layer")).map((function(e){var t=te("Identifier",e);return a.set(t,e),function(e,t,r,a){var i=te("Abstract",t),n=ee("Format",t),l=function(e){var t=$("WGS84BoundingBox",e),r=t?te("LowerCorner",t).split(" "):["-180","-90"],a=t?te("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(a[0]),ymax:parseFloat(a[1]),spatialReference:{wkid:4326}}}(t),o=function(e,t){return Array.prototype.slice.call(e.getElementsByTagName("Style")).map((function(e){var r=$("LegendURL",e),a=$("Keywords",e),i=a&&ee("Keyword",a),n=r&&r.getAttribute("xlink:href");return t&&(n=n&&n.replace(/^http:/i,"https:")),{abstract:te("Abstract",e),id:te("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:i,legendUrl:n,title:te("Title",e)}}))}(t,a),s=te("Title",t),c=function(e,t){return ee("TileMatrixSet",e).map((function(r){return function(e,t,r){var a=ee("TileMatrix",re("TileMatrixSetLink","TileMatrixSet",e,t)),i=re("TileMatrixSet","Identifier",e,r),n=function(e){var t=te("SupportedCRS",e);t&&(t=t.toLowerCase());var r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);var a=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,a=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,a=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,a=!0);var i,n=new z.a({wkid:r}),l=te("TopLeftCorner",$("TileMatrix",e)).split(" "),o=l[0].split("E").map((function(e){return Number(e)})),s=l[1].split("E").map((function(e){return Number(e)})),c=o[0],u=s[0];o.length>1&&(c=o[0]*Math.pow(10,o[1])),s.length>1&&(u=s[0]*Math.pow(10,s[1]));var p=a&&4326===r&&90===c&&-180===u;return X.some((function(e,l){var o=Number(t.split(":").pop());return o>=e[0]&&o<=e[1]||4326===r&&(!a||p)?(i=new G.a(u,c,n),!0):(l===X.length-1&&(i=new G.a(c,u,n)),!1)})),i}(i),l=n.spatialReference,o=l.wkid,s=$("TileMatrix",i),c=[parseInt(te("TileWidth",s),10),parseInt(te("TileHeight",s),10)],u=[];a.length?a.forEach((function(t,r){var a=re("TileMatrix","Identifier",t,i);u.push(ie(a,o,r,e))})):Array.prototype.slice.call(i.getElementsByTagName("TileMatrix")).forEach((function(t,r){u.push(ie(t,o,r,e))}));var p=function(e,t,r,a){var i,n,l,o,s,c,u=$("BoundingBox",e);if(u&&(i=te("LowerCorner",u).split(" "),n=te("UpperCorner",u).split(" ")),i&&i.length>1&&n&&n.length>1)l=parseFloat(i[0]),s=parseFloat(i[1]),o=parseFloat(n[0]),c=parseFloat(n[1]);else{var p=$("TileMatrix",e),d=parseFloat(te("MatrixWidth",p)),y=parseFloat(te("MatrixHeight",p));l=t.x,c=t.y,o=l+d*r[0]*a.resolution,s=c-y*r[1]*a.resolution}return new x.a(l,s,o,c,t.spatialReference)}(i,n,c,u[0]);return{id:e,fullExtent:p.toJSON(),tileInfo:new C.a({dpi:96,spatialReference:l,size:c,origin:n,lods:u}).toJSON()}}(r,e,t)}))}(t,r);return{id:e,fullExtent:l,description:i,formats:n,styles:o,title:s,tileMatrixSets:c}}(t,e,n,d)})),tileUrl:f,serviceMode:y,layerMap:a,dimensionMap:i}}function Z(e){return e.layers.forEach((function(e){e.tileMatrixSets.forEach((function(e){var t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((function(r){r.scale=96*r.scale/t.dpi,r.resolution=ne(t.spatialReference.wkid,90.71428571428571*r.scale/96,e.id)})),t.dpi=96)}))})),e}function $(e,t){var r=t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function ee(e,t){return Array.prototype.slice.call(t.getElementsByTagName(e)).map((function(e){return e.textContent}))}function te(e,t){return e.split(">").forEach((function(e){t&&(t=$(e,t))})),t&&t.textContent}function re(e,t,r,a){var i;return Array.prototype.slice.call(a.childNodes).some((function(a){if(a.nodeName.indexOf(e)>-1){var n=$(t,a),l=n&&n.textContent;if(l===r||r.split(":")&&r.split(":")[1]===l)return i=a,!0}return!1})),i}function ae(e,t){var r=[],a=e.layerMap.get(t);if(a){var i,n,l,o,s=Array.prototype.slice.call(a.getElementsByTagName("ResourceURL")),c=a.getElementsByTagName("Dimension");return c.length&&(i=te("Identifier",c[0]),n=ee("Default",c[0])||ee("Value",c[0])),c.length>1&&(l=te("Identifier",c[1]),o=ee("Default",c[1])||ee("Value",c[1])),e.dimensionMap.set(t,{dimensions:n,dimensions2:o}),s.forEach((function(e){var t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(i&&n.length)if(t.indexOf("{"+i+"}")>-1)t=t.replace("{"+i+"}","{dimensionValue}");else{var a=t.toLowerCase().indexOf("{"+i.toLowerCase()+"}");a>-1&&(t=t.substring(0,a)+"{dimensionValue}"+t.substring(a+i.length+2))}if(l&&o.length)if(t.indexOf("{"+l+"}")>-1)t=t.replace("{"+l+"}","{dimensionValue2}");else{var s=t.toLowerCase().indexOf("{"+l.toLowerCase()+"}");s>-1&&(t=t.substring(0,s)+"{dimensionValue2}"+t.substring(s+l.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}}function ie(e,t,r,a){var i,n=te("Identifier",e),l=te("ScaleDenominator",e).split("E").map((function(e){return Number(e)})),o=ne(t,i=l.length>1?l[0]*Math.pow(10,l[1]):l[0],a);return{level:r,levelValue:n,scale:i*=1.058267716535433,resolution:o}}function ne(e,t,r){return 7*t/25e3/(J.a.hasOwnProperty(String(e))?J.a.values[J.a[e]]:"default028mm"===r?6370997*Math.PI/180:Object(Q.f)(e).metersPerDegree)}var le={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},oe=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]),se=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i)))._sublayersHandles=new M.a,e.copyright="",e.customParameters=null,e.customLayerParameters=null,e.fullExtent=null,e.operationalLayerType="WebTiledLayer",e.resourceInfo=null,e.serviceMode="RESTful",e.sublayers=null,e.type="wmts",e.version="1.0.0",e.watch("activeLayer",(function(t,r){r&&(r.layer=null),t&&(t.layer=Object(u.a)(e))}),!0),e.watch("sublayers",(function(t,r){r&&(r.forEach((function(e){e.layer=null})),e._sublayersHandles.removeAll(),e._sublayersHandles=null),t&&(t.forEach((function(t){t.layer=Object(u.a)(e)})),e._sublayersHandles||(e._sublayersHandles=new M.a),e._sublayersHandles.add([t.on("after-add",(function(t){t.item.layer=Object(u.a)(e)})),t.on("after-remove",(function(e){e.item.layer=null}))]))}),!0),e}return Object(c.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(o.a)({url:e},t):e}},{key:"load",value:function(e){var t=this;if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){return t._fetchService(e)})).catch((function(e){throw new j.a("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Object(w.s)(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}},{key:"readActiveLayerFromService",value:function(e,t,r){var a,i=this;return this.activeLayer?t.layers.some((function(e){return e.id===i.activeLayer.id&&(a=e,!0)})):(this.activeLayer=new H,a=t.layers[0]),this.activeLayer.read(a,r),this.activeLayer}},{key:"readActiveLayerFromItemOrWebDoc",value:function(e,t){var r=t.templateUrl,a=t.wmtsInfo,i=r?this._getLowerCasedUrlParams(r):null,n=a&&a.layerIdentifier,l=null,o=a&&a.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(l=o[0]):l=o);var s=i&&i.format,c=i&&i.style;return new H({id:n,imageFormat:s,styleId:c,tileMatrixSetId:l})}},{key:"writeActiveLayer",value:function(e,t,r,a){var i=this.activeLayer;t.templateUrl=this.getUrlTemplate(i.id,i.tileMatrixSetId,i.imageFormat,i.styleId);var n=Object(b.b)("tileMatrixSet.tileInfo",i);t.tileInfo=n?n.toJSON(a):null,t.wmtsInfo=Object(o.a)(Object(o.a)({},t.wmtsInfo),{},{layerIdentifier:i.id,tileMatrixSet:i.tileMatrixSetId})}},{key:"readCustomParameters",value:function(e,t){var r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}},{key:"readServiceMode",value:function(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}},{key:"readSublayersFromService",value:function(e,t,r){return function(e,t){return e.map((function(e){var r=new H;return r.read(e,t),r}))}(t.layers,r)}},{key:"createWebTileLayer",value:function(e){var t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,a=e.fullExtent,i=new U.a({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(i.customLayerParameters=this.customLayerParameters),this.customParameters&&(i.customParameters=this.customParameters),new V.default({fullExtent:a,urlTemplate:t,tileInfo:r,wmtsInfo:i})}},{key:"fetchTile",value:function(e,t,r){var a=this.getTileUrl(e,t,r);return Object(I.default)(a,{responseType:"image"}).then((function(e){return e.data}))}},{key:"findSublayerById",value:function(e){return this.sublayers.find((function(t){return t.id===e}))}},{key:"getTileUrl",value:function(e,t,r){var a=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],i=a?a.levelValue?a.levelValue:"".concat(a.level):"".concat(e),n=this.resourceInfo?"":function(e,t,r,a,i,n,l,o){var s=e.dimensionMap,c=ae(e,t),u=s.get(t).dimensions&&s.get(t).dimensions[0],p=s.get(t).dimensions2&&s.get(t).dimensions2[0],d="";if(c&&c.length>0){var y=null;c.some((function(e){return e.format===a&&(y=e,!0)})),y||(y=c[l%c.length]),d=y.template.replace(/\{Style\}/gi,i).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,n).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,p)}return d}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,i,t,r);return n||(n=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,i).replace(/\{row\}/gi,"".concat(t)).replace(/\{col\}/gi,"".concat(r))),n=this._appendCustomLayerParameters(n)}},{key:"getUrlTemplate",value:function(e,t,r,a){if(!this.resourceInfo){var i=function(e,t,r,a){var i=e.dimensionMap,n=ae(e,t),l="";if(n&&n.length>0){var o=i.get(t).dimensions&&i.get(t).dimensions[0],s=i.get(t).dimensions2&&i.get(t).dimensions2[0];(l=n[0].template).indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=(l=(l=(l=(l=(l=(l=l.replace(/\{Style\}/gi,a)).replace(/\{TileMatrixSet\}/gi,r)).replace(/\{TileMatrix\}/gi,"{level}")).replace(/\{TileRow\}/gi,"{row}")).replace(/\{TileCol\}/gi,"{col}")).replace(/\{dimensionValue\}/gi,o)).replace(/\{dimensionValue2\}/gi,s)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,a);if(i)return i}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+a+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){var n="";return le[r.toLowerCase()]&&(n=le[r.toLowerCase()]),this.url+e+"/"+a+"/"+t+"/{level}/{row}/{col}"+n}return""}},{key:"_fetchService",value:function(){var e=Object(l.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.resourceInfo){e.next=4;break}"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),r={ssl:!1,data:this.resourceInfo},e.next=23;break;case 4:return e.prev=4,e.next=7,this._getCapabilities(this.serviceMode,t);case 7:r=e.sent,e.next=23;break;case 10:return e.prev=10,e.t0=e.catch(4),a="KVP"===this.serviceMode?"RESTful":"KVP",e.prev=13,e.next=16,this._getCapabilities(a,t);case 16:r=e.sent,this.serviceMode=a,e.next=23;break;case 20:throw e.prev=20,e.t1=e.catch(13),new j.a("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e.t1});case 23:this.resourceInfo?r.data=Z(r.data):r.data=Y(r.data,{serviceMode:this.serviceMode,url:this.url}),r.data&&this.read(r.data,{origin:"service"});case 24:case"end":return e.stop()}}),e,this,[[4,10],[13,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_getCapabilities",value:function(){var e=Object(l.a)(n.a.mark((function e(t,r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this._getCapabilitiesUrl(t),e.next=3,Object(I.default)(a,Object(o.a)(Object(o.a)({},r),{},{responseType:"text"}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getTileMatrixSetById",value:function(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((function(t){return t.id===e}))}},{key:"_appendCustomParameters",value:function(e){if(this.customParameters)for(var t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}},{key:"_appendCustomLayerParameters",value:function(e){if(this.customLayerParameters||this.customParameters){var t=Object(o.a)(Object(o.a)({},r(this.customParameters||{})),this.customLayerParameters);for(var r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e}},{key:"_getCapabilitiesUrl",value:function(e){var t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t)}},{key:"_getLowerCasedUrlParams",value:function(e){if(!e)return null;var t=Object(g.I)(e).query;if(!t)return null;var r={};return Object.keys(t).forEach((function(e){r[e.toLowerCase()]=t[e]})),r}},{key:"_mergeParams",value:function(e,t){var r=this._getLowerCasedUrlParams(t);if(r){var a=Object.keys(r);a.length&&(e=e?Object(f.a)(e):{},a.forEach((function(t){e.hasOwnProperty(t)||oe.has(t)||(e[t]=r[t])})))}return e}},{key:"activeLayer",get:function(){return this._get("activeLayer")},set:function(e){this._set("activeLayer",e)}},{key:"fullExtents",get:function(){var e=[];return this.activeLayer.tileMatrixSets.forEach((function(t){t.fullExtent&&e.push(t.fullExtent)})),e}},{key:"supportedSpatialReferences",get:function(){return this.activeLayer.tileMatrixSets.map((function(e){return e.tileInfo.spatialReference})).toArray()}},{key:"title",get:function(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"},set:function(e){e?this._override("title",e):this._clearOverride("title")}},{key:"url",get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}}]),r}(Object(E.a)(Object(R.a)(Object(F.a)(Object(P.a)(Object(k.a)(Object(L.a)(T.a)))))));Object(y.a)([Object(m.b)()],se.prototype,"dimensionMap",void 0),Object(y.a)([Object(m.b)()],se.prototype,"layerMap",void 0),Object(y.a)([Object(m.b)({type:H,dependsOn:["sublayers"],json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],se.prototype,"activeLayer",null),Object(y.a)([Object(h.a)("service","activeLayer",["layers"])],se.prototype,"readActiveLayerFromService",null),Object(y.a)([Object(h.a)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],se.prototype,"readActiveLayerFromItemOrWebDoc",null),Object(y.a)([Object(O.a)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:C.a},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],se.prototype,"writeActiveLayer",null),Object(y.a)([Object(m.b)({type:String,value:"",json:{write:!0}})],se.prototype,"copyright",void 0),Object(y.a)([Object(m.b)({type:["show","hide"]})],se.prototype,"listMode",void 0),Object(y.a)([Object(m.b)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],se.prototype,"customParameters",void 0),Object(y.a)([Object(h.a)("web-document","customParameters"),Object(h.a)("portal-item","customParameters")],se.prototype,"readCustomParameters",null),Object(y.a)([Object(m.b)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],se.prototype,"customLayerParameters",void 0),Object(y.a)([Object(m.b)({type:x.a,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],se.prototype,"fullExtent",void 0),Object(y.a)([Object(m.b)({readOnly:!0,dependsOn:["activeLayer"]})],se.prototype,"fullExtents",null),Object(y.a)([Object(m.b)({type:["WebTiledLayer"]})],se.prototype,"operationalLayerType",void 0),Object(y.a)([Object(m.b)()],se.prototype,"resourceInfo",void 0),Object(y.a)([Object(m.b)()],se.prototype,"serviceMode",void 0),Object(y.a)([Object(h.a)(["portal-item","web-document"],"serviceMode",["templateUrl"])],se.prototype,"readServiceMode",null),Object(y.a)([Object(m.b)({type:S.a.ofType(H)})],se.prototype,"sublayers",void 0),Object(y.a)([Object(h.a)("service","sublayers",["layers"])],se.prototype,"readSublayersFromService",null),Object(y.a)([Object(m.b)({readOnly:!0,dependsOn:["activeLayer"]})],se.prototype,"supportedSpatialReferences",null),Object(y.a)([Object(m.b)({dependsOn:["activeLayer"],json:{read:{source:"title"}}})],se.prototype,"title",null),Object(y.a)([Object(m.b)({json:{read:!1},readOnly:!0,value:"wmts"})],se.prototype,"type",void 0),Object(y.a)([Object(m.b)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],se.prototype,"url",null),Object(y.a)([Object(m.b)()],se.prototype,"version",void 0);var ce=se=Object(y.a)([Object(v.a)("esri.layers.WMTSLayer")],se);t.default=ce}}]);
//# sourceMappingURL=53.5096a87e.chunk.js.map