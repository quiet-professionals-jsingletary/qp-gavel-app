(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[5],{680:function(e,t,r){"use strict";r.r(t),r.d(t,"executeQuery",(function(){return k})),r.d(t,"executeQueryForCount",(function(){return w})),r.d(t,"executeQueryForExtent",(function(){return O})),r.d(t,"executeQueryForIds",(function(){return S})),r.d(t,"executeQueryPBF",(function(){return v})),r.d(t,"executeQueryPBFBuffer",(function(){return m})),r.d(t,"queryToQueryStringParameters",(function(){return h})),r.d(t,"runQuery",(function(){return F}));var a=r(8),n=r.n(a),s=r(11),i=r(22),u=r(10),o=r(9),c=r(15),l=r(182),p=r(58),f=r(764),d=r(773),y=r(922),g=r(798);function h(e,t){var r=e.geometry,a=e.toJSON(),n=a;if(Object(u.g)(r)&&(n.geometry=JSON.stringify(r),n.geometryType=Object(l.c)(r),n.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),a.groupByFieldsForStatistics&&(n.groupByFieldsForStatistics=a.groupByFieldsForStatistics.join(",")),a.objectIds&&(n.objectIds=a.objectIds.join(",")),a.orderByFields&&(n.orderByFields=a.orderByFields.join(",")),!a.outFields||!a.returnDistinctValues&&(null!=t&&t.returnCountOnly||null!=t&&t.returnExtentOnly||null!=t&&t.returnIdsOnly)?delete n.outFields:-1!==a.outFields.indexOf("*")?n.outFields="*":n.outFields=a.outFields.join(","),a.outSR?n.outSR=a.outSR.wkid||JSON.stringify(a.outSR):r&&(a.returnGeometry||a.returnCentroid)&&(n.outSR=n.inSR),a.returnGeometry&&delete a.returnGeometry,a.outStatistics&&(n.outStatistics=JSON.stringify(a.outStatistics)),a.pixelSize&&(n.pixelSize=JSON.stringify(a.pixelSize)),a.quantizationParameters&&(n.quantizationParameters=JSON.stringify(a.quantizationParameters)),a.parameterValues&&(n.parameterValues=JSON.stringify(a.parameterValues)),a.rangeValues&&(n.rangeValues=JSON.stringify(a.rangeValues)),a.dynamicDataSource&&(n.layer=JSON.stringify({source:a.dynamicDataSource}),delete a.dynamicDataSource),a.timeExtent){var s=a.timeExtent,i=s.start,o=s.end;null==i&&null==o||(n.time=i===o?i:"".concat(null==i?"null":i,",").concat(null==o?"null":o)),delete a.timeExtent}return n}function k(e,t,r,a){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(n.a.mark((function e(t,r,a,s){var i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(u.g)(r.timeExtent)||!r.timeExtent.isEmpty){e.next=4;break}e.t0={data:{features:[]}},e.next=7;break;case 4:return e.next=6,F(t,r,"json",s);case 6:e.t0=e.sent;case 7:return i=e.t0,e.abrupt("return",(Object(d.a)(r,a,i.data),i));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,r,a){return _.apply(this,arguments)}function _(){return(_=Object(i.a)(n.a.mark((function e(t,r,a,s){var i,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(u.g)(r.timeExtent)||!r.timeExtent.isEmpty){e.next=2;break}return e.abrupt("return",Object(c.s)({data:a.createFeatureResult()}));case 2:return e.next=4,m(t,r,s);case 4:return i=e.sent,o=i,e.abrupt("return",(o.data=Object(y.a)(i.data,a),o));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,r){return F(e,t,"pbf",r)}function S(e,t,r){return Object(u.g)(t.timeExtent)&&t.timeExtent.isEmpty?Object(c.s)({data:{objectIds:[]}}):F(e,t,"json",r,{returnIdsOnly:!0})}function w(e,t,r){return Object(u.g)(t.timeExtent)&&t.timeExtent.isEmpty?Object(c.s)({data:{count:0}}):F(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function O(e,t,r){return Object(u.g)(t.timeExtent)&&t.timeExtent.isEmpty?Object(c.s)({data:{count:0,extent:null}}):F(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error("Layer does not support extent calculation.");if(t.hasOwnProperty("count"))throw new Error("Layer does not support extent calculation.");return e}))}function F(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,i="string"==typeof e?Object(o.I)(e):e,c=t.geometry?[t.geometry]:[];return a.responseType="pbf"===r?"array-buffer":"json",Object(f.a)(c,null,a).then((function(e){var c=e&&e[0];Object(u.g)(c)&&((t=t.clone()).geometry=c);var l=Object(g.a)(Object(s.a)(Object(s.a)(Object(s.a)({},i.query),{},{f:r},n),h(t,n)));return Object(p.default)(Object(o.x)(i.path,"query"),Object(s.a)(Object(s.a)({},a),{},{query:Object(s.a)(Object(s.a)({},l),a.query)}))}))}},798:function(e,t,r){"use strict";function a(e){var t={};for(var r in e)if("declaredClass"!==r){var n=e[r];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){t[r]=[];for(var s=0;s<n.length;s++)t[r][s]=a(n[s])}else"object"==typeof n?n.toJSON&&(t[r]=JSON.stringify(n)):t[r]=n}return t}r.d(t,"a",(function(){return a}))},813:function(e,t,r){"use strict";var a=r(2),n=r(3),s=r(13),i=r(154),u=Object(s.a)("esri-text-decoder")?new TextDecoder("utf-8"):null,o=Object(s.a)("safari")||Object(s.a)("ios")?6:Object(s.a)("ff")?12:32,c=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t?t.byteLength:0;Object(a.a)(this,e),this._tag=0,this._dataType=99,this.init(t,r,n,s)}return Object(n.a)(e,[{key:"init",value:function(e,t,r,a){this._data=e,this._dataView=t,this._pos=r,this._end=a}},{key:"clone",value:function(){return new e(this._data,this._dataView,this._pos,this._end)}},{key:"pos",value:function(){return this._pos}},{key:"move",value:function(e){this._pos=e}},{key:"nextTag",value:function(e){for(;;){if(this._pos===this._end)return!1;var t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}},{key:"next",value:function(){if(this._pos===this._end)return!1;var e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}},{key:"empty",value:function(){return this._pos>=this._end}},{key:"tag",value:function(){return this._tag}},{key:"getInt32",value:function(){return this._decodeVarint()}},{key:"getInt64",value:function(){return this._decodeVarint()}},{key:"getUInt32",value:function(){var e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}},{key:"getUInt64",value:function(){return this._decodeVarint()}},{key:"getSInt32",value:function(){var e=this.getUInt32();return e>>>1^-(1&e)|0}},{key:"getSInt64",value:function(){return this._decodeSVarint()}},{key:"getBool",value:function(){var e=0!==this._data[this._pos];return this._skip(1),e}},{key:"getEnum",value:function(){return this._decodeVarint()}},{key:"getFixed64",value:function(){var e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getUint32(t+4,!0);return this._skip(8),r}},{key:"getSFixed64",value:function(){var e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getInt32(t+4,!0);return this._skip(8),r}},{key:"getDouble",value:function(){var e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}},{key:"getFixed32",value:function(){var e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}},{key:"getSFixed32",value:function(){var e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}},{key:"getFloat",value:function(){var e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}},{key:"getString",value:function(){var e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r}},{key:"getBytes",value:function(){var e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r}},{key:"getLength",value:function(){return this._getLengthUnsafe()}},{key:"processMessageWithArgs",value:function(e,t,r,a){var n=this.getMessage(),s=e(n,t,r,a);return n.release(),s}},{key:"processMessage",value:function(e){var t=this.getMessage(),r=e(t);return t.release(),r}},{key:"getMessage",value:function(){var t=this._getLength(),r=e.pool.acquire();return r.init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),r}},{key:"release",value:function(){e.pool.release(this)}},{key:"dataType",value:function(){return this._dataType}},{key:"skip",value:function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}}},{key:"skipLen",value:function(e){this._skip(e)}},{key:"_skip",value:function(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}},{key:"_decodeVarint",value:function(){var e,t=this._data,r=this._pos,a=0;if(this._end-r>=10)do{if(a|=127&(e=t[r++]),0==(128&e))break;if(a|=(127&(e=t[r++]))<<7,0==(128&e))break;if(a|=(127&(e=t[r++]))<<14,0==(128&e))break;if(a|=(127&(e=t[r++]))<<21,0==(128&e))break;if(a+=268435456*(127&(e=t[r++])),0==(128&e))break;if(a+=34359738368*(127&(e=t[r++])),0==(128&e))break;if(a+=4398046511104*(127&(e=t[r++])),0==(128&e))break;if(a+=562949953421312*(127&(e=t[r++])),0==(128&e))break;if(a+=72057594037927940*(127&(e=t[r++])),0==(128&e))break;if(a+=0x8000000000000000*(127&(e=t[r++])),0==(128&e))break;throw new Error("Varint too long!")}while(0);else{for(var n=1;r!==this._end&&0!=(128&(e=t[r]));)++r,a+=(127&e)*n,n*=128;if(r===this._end)throw new Error("Varint overrun!");++r,a+=e*n}return this._pos=r,a}},{key:"_decodeSVarint",value:function(){var e=this._decodeVarint();return e%2?-(e+1)/2:e/2}},{key:"_getLength",value:function(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()}},{key:"_getLengthUnsafe",value:function(){return this.getUInt32()}},{key:"_toString",value:function(e,t,r){if((r=Math.min(this._end,r))-t>o&&u){var a=e.subarray(t,r);return u.decode(a)}for(var n="",s="",i=t;i<r;++i){var c=e[i];128&c?s+="%"+c.toString(16):(n+=decodeURIComponent(s)+String.fromCharCode(c),s="")}return s.length&&(n+=decodeURIComponent(s)),n}},{key:"_toBytes",value:function(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}]),e}();c.pool=new i.a(c,null,(function(e){e._data=null,e._dataView=null})),t.a=c},835:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var a=r(16),n=r(2),s=r(3),i=r(40),u=r(78),o=r(772),c=r(831),l=r(765),p=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],f=function(){function e(t){Object(n.a)(this,e),this.options=t,this.geometryTypes=p}return Object(s.a)(e,[{key:"createFeatureResult",value:function(){return new c.a}},{key:"prepareFeatures",value:function(){}},{key:"finishFeatureResult",value:function(e){if(e&&e.features&&e.hasZ&&this.options.sourceSpatialReference&&e.spatialReference&&!Object(i.c)(e.spatialReference,this.options.sourceSpatialReference)&&!e.spatialReference.vcsWkid){var t=Object(u.c)(this.options.sourceSpatialReference)/Object(u.c)(e.spatialReference);if(1!==t){var r,n=Object(a.a)(e.features);try{for(n.s();!(r=n.n()).done;){var s=r.value;if(s.geometry&&s.geometry.coords)for(var o=s.geometry.coords,c=2;c<o.length;c+=3)o[c]*=t}}catch(l){n.e(l)}finally{n.f()}}}}},{key:"addFeature",value:function(e,t){e.features.push(t)}},{key:"createFeature",value:function(){return new o.a}},{key:"createSpatialReference",value:function(){return{wkid:0}}},{key:"createGeometry",value:function(){return new l.a}},{key:"addField",value:function(e,t){e.fields.push(t)}},{key:"addCoordinate",value:function(e,t){e.coords.push(t)}},{key:"addCoordinatePoint",value:function(e,t){e.coords.push(t)}},{key:"addLength",value:function(e,t){e.lengths.push(t)}},{key:"addQueryGeometry",value:function(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}},{key:"createPointGeometry",value:function(){return new l.a}}]),e}()},857:function(e,t,r){"use strict";r.d(t,"a",(function(){return q})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return F}));var a=r(10),n=r(12),s=r(21),i=r(765),u=r(813),o=r(835),c=n.a.getLogger("esri.tasks.operations.pbfFeatureServiceParser"),l=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],p=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],f=["upperLeft","lowerLeft"];function d(e){return e>=l.length?null:l[e]}function y(e){return e>=f.length?null:f[e]}function g(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function h(e,t,r){for(var a=t.createPointGeometry(r);e.next();)switch(e.tag()){case 3:for(var n=e.getUInt32(),s=e.pos()+n,i=0;e.pos()<s;)t.addCoordinatePoint(a,e.getSInt64(),i++);break;case 1:case 2:default:e.skip()}return a}function k(e,t,r){for(var a=t.createGeometry(r),n=2+(r.hasZ?1:0)+(r.hasM?1:0);e.next();)switch(e.tag()){case 2:for(var s=e.getUInt32(),i=e.pos()+s,u=0;e.pos()<i;)t.addLength(a,e.getUInt32(),u++);break;case 3:for(var o=e.getUInt32(),c=e.pos()+o,l=0;e.pos()<c;)t.addCoordinate(a,e.getSInt64(),l),++l===n&&(l=0);break;case 1:default:e.skip()}return a}function b(e){for(var t=new i.a,r="esriGeometryPoint";e.next();)switch(e.tag()){case 2:for(var a=e.getUInt32(),n=e.pos()+a;e.pos()<n;)t.lengths.push(e.getUInt32());break;case 3:for(var s=e.getUInt32(),u=e.pos()+s;e.pos()<u;)t.coords.push(e.getSInt64());break;case 1:r=o.a[e.getEnum()];break;default:e.skip()}return{queryGeometry:t,queryGeometryType:r}}function v(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function _(e){for(var t,r={type:d(0)};e.next();)switch(e.tag()){case 1:r.name=e.getString();break;case 2:r.type=d(e.getEnum());break;case 3:r.alias=e.getString();break;case 4:r.sqlType=(t=e.getEnum())>=p.length?null:p[t];break;case 5:try{r.domain=JSON.parse(e.getString())}catch(e){c.error(new s.a("query:parsing-pbf","Failed to parse domain",{error:e})),r.domain=null}break;case 6:r.defaultValue=e.getString();break;default:e.skip()}return r}function m(e){for(var t={};e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.isSystemMaintained=e.getBool();break;default:e.skip()}return t}function S(e,t,r,a){for(var n=t.createFeature(r),s=0;e.next();)switch(e.tag()){case 1:var i=a[s++].name;n.attributes[i]=e.processMessage(v);break;case 2:n.geometry=e.processMessageWithArgs(k,t,r);break;case 4:n.centroid=e.processMessageWithArgs(h,t,r);break;default:e.skip()}return n}function w(e){for(var t=[1,1,1,1];e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function O(e){for(var t=[0,0,0,0];e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function F(e){for(var t={originPosition:y(0)};e.next();)switch(e.tag()){case 1:t.originPosition=y(e.getEnum());break;case 2:t.scale=e.processMessage(w);break;case 3:t.translate=e.processMessage(O);break;default:e.skip()}return t}function T(e){for(var t={};e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function x(e,t){for(var r=t.createSpatialReference();e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:r.latestWkid=e.getUInt32();break;case 3:r.vcsWkid=e.getUInt32();break;case 4:r.latestVcsWkid=e.getUInt32();break;default:e.skip()}return r}function j(e,t){var r=t.createFeatureResult();r.geometryType=g(t,0);for(var a=!1;e.next();)switch(e.tag()){case 1:r.objectIdFieldName=e.getString();break;case 3:r.globalIdFieldName=e.getString();break;case 4:r.geohashFieldName=e.getString();break;case 5:r.geometryProperties=e.processMessage(T);break;case 7:r.geometryType=g(t,e.getEnum());break;case 8:r.spatialReference=e.processMessageWithArgs(x,t);break;case 10:r.hasZ=e.getBool();break;case 11:r.hasM=e.getBool();break;case 12:r.transform=e.processMessage(F);break;case 9:var n=e.getBool();r.exceededTransferLimit=n;break;case 13:t.addField(r,e.processMessage(_));break;case 15:a||(t.prepareFeatures(r),a=!0),t.addFeature(r,e.processMessageWithArgs(S,t,r,r.fields));break;case 2:r.uniqueIdField=e.processMessage(m);break;case 6:default:e.skip()}return t.finishFeatureResult(r),r}function I(e,t){for(var r={},n=null;e.next();)switch(e.tag()){case 4:n=e.processMessageWithArgs(b);break;case 1:r.featureResult=e.processMessageWithArgs(j,t);break;case 2:case 3:default:e.skip()}return Object(a.g)(n)&&r.featureResult&&t.addQueryGeometry(r,n),r}function q(e,t){try{for(var r=new u.a(new Uint8Array(e),new DataView(e)),a={};r.next();)switch(r.tag()){case 2:a.queryResult=r.processMessageWithArgs(I,t);break;default:r.skip()}return a}catch(e){throw new s.a("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},922:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(16),n=r(857);function s(e,t){var r=Object(n.a)(e,t),s=r.queryResult.featureResult,i=r.queryResult.queryGeometry,u=r.queryResult.queryGeometryType;if(s&&s.features&&s.features.length&&s.objectIdFieldName){var o,c=s.objectIdFieldName,l=Object(a.a)(s.features);try{for(l.s();!(o=l.n()).done;){var p=o.value;p.attributes&&(p.objectId=p.attributes[c])}}catch(f){l.e(f)}finally{l.f()}}return s&&(s.queryGeometry=i,s.queryGeometryType=u),s}}}]);
//# sourceMappingURL=5.89f1895b.chunk.js.map