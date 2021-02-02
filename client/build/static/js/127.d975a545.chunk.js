(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[127],{677:function(e,t,r){"use strict";r.r(t);var n=r(31),a=r(16),o=r(2),i=r(3),l=r(4),u=r(5),s=r(0),c=(r(13),r(10)),y=(r(12),r(14),r(1)),p=r(34),f=r(28),b=r(6),v=r(26),j=(r(9),r(19),r(20),r(23)),m=r(36),O=r(182),h=r(86),g=r(206),d=r(294),w=new p.a({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null}),x=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).displayFieldName=null,n.exceededTransferLimit=!1,n.features=[],n.fields=null,n.geometryType=null,n.hasM=!1,n.hasZ=!1,n.queryGeometry=null,n.spatialReference=null,n}return Object(i.a)(r,[{key:"readFeatures",value:function(e,t){for(var r=m.a.fromJSON(t.spatialReference),n=[],a=0;a<e.length;a++){var o=e[a],i=g.a.fromJSON(o),l=o.geometry&&o.geometry.spatialReference;Object(c.g)(i.geometry)&&!l&&(i.geometry.spatialReference=r),n.push(i)}return n}},{key:"writeGeometryType",value:function(e,t,r,n){if(e)w.write(e,t,r,n);else{var o=this.features;if(o){var i,l=Object(a.a)(o);try{for(l.s();!(i=l.n()).done;){var u=i.value;if(u&&Object(c.g)(u.geometry))return void w.write(u.geometry.type,t,r,n)}}catch(s){l.e(s)}finally{l.f()}}}}},{key:"readQueryGeometry",value:function(e,t){if(!e)return null;var r=!!e.spatialReference,n=Object(O.a)(e);return!r&&t.spatialReference&&(n.spatialReference=m.a.fromJSON(t.spatialReference)),n}},{key:"writeSpatialReference",value:function(e,t){if(e)t.spatialReference=e.toJSON();else{var r=this.features;if(r){var n,o=Object(a.a)(r);try{for(o.s();!(n=o.n()).done;){var i=n.value;i&&Object(c.g)(i.geometry)&&i.geometry.spatialReference&&(t.spatialReference=i.geometry.spatialReference.toJSON())}}catch(l){o.e(l)}finally{o.f()}}}}},{key:"toJSON",value:function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var n=t.features[r];if(n.geometry){var a=e&&e[r];n.geometry=a&&a.toJSON()||n.geometry}}return t}},{key:"quantize",value:function(e){for(var t=Object(n.a)(e.scale,2),r=t[0],a=t[1],o=Object(n.a)(e.translate,2),i=o[0],l=o[1],u=this.features,s=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-i)/r)}),(function(e){return Math.round((l-e)/a)})),y=0,p=u.length;y<p;y++)s(Object(c.m)(u[y].geometry))||(u.splice(y,1),y--,p--);return this.transform=e,this}},{key:"unquantize",value:function(){var e=this.geometryType,t=this.features,r=this.transform;if(!r)return this;var o,i=Object(n.a)(r.translate,2),l=i[0],u=i[1],s=Object(n.a)(r.scale,2),y=s[0],p=s[1],f=this._getHydrationFunction(e,(function(e){return e*y+l}),(function(e){return u-e*p})),b=Object(a.a)(t);try{for(b.s();!(o=b.n()).done;){var v=o.value.geometry;Object(c.g)(v)&&f(v)}}catch(j){b.e(j)}finally{b.f()}return this.transform=null,this}},{key:"_quantizePoints",value:function(e,t,r){for(var n,a,o=[],i=0,l=e.length;i<l;i++){var u=e[i];if(i>0){var s=t(u[0]),c=r(u[1]);s===n&&c===a||(o.push([s-n,c-a]),n=s,a=c)}else n=t(u[0]),a=r(u[1]),o.push([n,a])}return o.length>0?o:null}},{key:"_getQuantizationFunction",value:function(e,t,r){var n=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var a=Object(O.g)(e)?e.rings:e.paths,o=[],i=0,l=a.length;i<l;i++){var u=a[i],s=n._quantizePoints(u,t,r);s&&o.push(s)}return o.length>0?(Object(O.g)(e)?e.rings=o:e.paths=o,e):null}:"multipoint"===e?function(e){var a;return(a=n._quantizePoints(e.points,t,r)).length>0?(e.points=a,e):null}:"extent"===e?function(e){return e}:null}},{key:"_getHydrationFunction",value:function(e,t,r){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var n,a,o=Object(O.g)(e)?e.rings:e.paths,i=0,l=o.length;i<l;i++)for(var u=o[i],s=0,c=u.length;s<c;s++){var y=u[s];s>0?(n+=y[0],a+=y[1]):(n=y[0],a=y[1]),y[0]=t(n),y[1]=r(a)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?function(e){for(var n,a,o=e.points,i=0,l=o.length;i<l;i++){var u=o[i];i>0?(n+=u[0],a+=u[1]):(n=u[0],a=u[1]),u[0]=t(n),u[1]=r(a)}}:void 0}}]),r}(j.a);Object(s.a)([Object(y.b)({type:String,json:{write:!0}})],x.prototype,"displayFieldName",void 0),Object(s.a)([Object(y.b)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],x.prototype,"exceededTransferLimit",void 0),Object(s.a)([Object(y.b)({type:[g.a],json:{write:!0}})],x.prototype,"features",void 0),Object(s.a)([Object(f.a)("features")],x.prototype,"readFeatures",null),Object(s.a)([Object(y.b)({type:[d.a],json:{write:!0}})],x.prototype,"fields",void 0),Object(s.a)([Object(y.b)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:w.read}}})],x.prototype,"geometryType",void 0),Object(s.a)([Object(v.a)("geometryType")],x.prototype,"writeGeometryType",null),Object(s.a)([Object(y.b)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],x.prototype,"hasM",void 0),Object(s.a)([Object(y.b)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],x.prototype,"hasZ",void 0),Object(s.a)([Object(y.b)({types:h.b,json:{write:!0}})],x.prototype,"queryGeometry",void 0),Object(s.a)([Object(f.a)("queryGeometry")],x.prototype,"readQueryGeometry",null),Object(s.a)([Object(y.b)({type:m.a,json:{write:!0}})],x.prototype,"spatialReference",void 0),Object(s.a)([Object(v.a)("spatialReference")],x.prototype,"writeSpatialReference",null),Object(s.a)([Object(y.b)({json:{write:!0}})],x.prototype,"transform",void 0),(x=Object(s.a)([Object(b.a)("esri.tasks.support.FeatureSet")],x)).prototype.toJSON.isDefaultToJSON=!0,x||(x={});var R=x;t.default=R}}]);
//# sourceMappingURL=127.d975a545.chunk.js.map