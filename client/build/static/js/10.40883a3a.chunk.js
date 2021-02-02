(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[10],{1047:function(e,t,n){"use strict";n.r(t),n.d(t,"ElevationQuery",(function(){return M})),n.d(t,"GeometryDescriptor",(function(){return F})),n.d(t,"getFinestLodIndex",(function(){return L}));var a=n(4),r=n(5),i=n(16),o=n(8),s=n.n(o),l=n(11),u=n(22),c=n(2),f=n(3),p=n(10),h=n(21),v=n(15),y=n(48),m=n(141),d=n(121),x=n(350),b=n(78),k=n(108),O=n(142),T=(n(13),n(12)),j=n(65),g=n(120),w=(n(86),T.a.getLogger("esri.layers.support.ElevationSampler")),R=function(){function e(){Object(c.a)(this,e)}return Object(f.a)(e,[{key:"queryElevation",value:function(e){return function(e,t){var n=E(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":!function(e,t,n){e.z=n.elevationAt(t)||0}(e,n,t);break;case"polyline":!function(e,t,n){A.spatialReference=t.spatialReference;for(var a=e.hasM&&!e.hasZ,r=0;r<e.paths.length;r++)for(var i=e.paths[r],o=t.paths[r],s=0;s<i.length;s++){var l=i[s],u=o[s];A.x=u[0],A.y=u[1];var c=n.elevationAt(A)||0;a&&(l[3]=l[2]),l[2]=c}e.hasZ=!0}(e,n,t);break;case"multipoint":!function(e,t,n){A.spatialReference=t.spatialReference;for(var a=e.hasM&&!e.hasZ,r=0;r<e.points.length;r++){var i=e.points[r],o=t.points[r];A.x=o[0],A.y=o[1];var s=n.elevationAt(A)||0;a&&(i[3]=i[2]),i[2]=s}e.hasZ=!0}(e,n,t)}return e}(e.clone(),this)}},{key:"on",value:function(){return I}},{key:"projectIfRequired",value:function(e,t){return E(e,t)}}]),e}(),_=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e,a,r){var i;Object(c.a)(this,n),(i=t.call(this)).tile=e,i.noDataValue=r,i.extent=Object(k.l)(e.tile.extent,a.spatialReference);var o=Object(b.b)(a.spatialReference),s=a.lodAt(e.tile.level).resolution*o;return i.demResolution={min:s,max:s},i}return Object(f.a)(n,[{key:"contains",value:function(e){var t=this.projectIfRequired(e,this.spatialReference);return Object(g.e)(this.extent,t)}},{key:"elevationAt",value:function(e){var t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;if(!this.contains(e)){var n=this.extent,a="".concat(n.xmin,", ").concat(n.ymin,", ").concat(n.xmax,", ").concat(n.ymax);w.warn("#elevationAt()","Point used to sample elevation (".concat(e.x,", ").concat(e.y,") is outside of the sampler extent (").concat(a,")"))}return this.tile.sample(t.x,t.y)}},{key:"spatialReference",get:function(){return this.extent.spatialReference}}]),n}(R),q=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e,a,r){var i,o;Object(c.a)(this,n),i=t.call(this),"number"==typeof a?(i.noDataValue=a,o=null):(o=a,i.noDataValue=r),i.samplers=o?e.map((function(e){return new _(e,o,i.noDataValue)})):e;var s=i.samplers[0];if(s){i.extent=s.extent.clone();var l=s.demResolution,u=l.min,f=l.max;i.demResolution={min:u,max:f};for(var p=1;p<i.samplers.length;p++){var h=i.samplers[p];i.extent.union(h.extent),i.demResolution.min=Math.min(i.demResolution.min,h.demResolution.min),i.demResolution.max=Math.max(i.demResolution.max,h.demResolution.max)}}else i.extent=Object(k.l)(Object(k.e)(),o.spatialReference),i.demResolution={min:0,max:0};return i}return Object(f.a)(n,[{key:"elevationAt",value:function(e){var t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;var n,a=Object(i.a)(this.samplers);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(r.contains(t))return r.elevationAt(t)}}catch(o){a.e(o)}finally{a.f()}return w.warn("#elevationAt()","Point used to sample elevation (".concat(e.x,", ").concat(e.y,") is outside of the sampler")),null}},{key:"spatialReference",get:function(){return this.extent.spatialReference}}]),n}(R);function E(e,t){var n=e.spatialReference;return n.equals(t)?e:Object(j.a)(n,t)?Object(j.d)(e,t):(w.error("Cannot project geometry spatial reference (wkid:".concat(n.wkid,") to elevation sampler spatial reference (wkid:").concat(t.wkid,")")),null)}var A=new y.a,I={remove:function(){}},D=function(){function e(t,n){if(Object(c.a)(this,e),this.tile=t,n){var a=this.tile.extent;this.samplerData={pixelData:n.values,width:n.width,height:n.height,safeWidth:.99999999*(n.width-1),noDataValue:n.noDataValue,dx:(n.width-1)/(a[2]-a[0]),dy:(n.width-1)/(a[3]-a[1]),x0:a[0],y1:a[3]}}else this.samplerData=null}return Object(f.a)(e,[{key:"sample",value:function(e,t){if(this.samplerData)return function(e,t,n){var a=e.safeWidth,r=e.width,i=e.pixelData,o=e.noDataValue,s=C(e.dy*(e.y1-n),0,a),l=C(e.dx*(t-e.x0),0,a),u=Math.floor(s),c=Math.floor(l),f=u*r+c,p=f+r,h=i[f],v=i[p],y=i[f+1],m=i[p+1];if(h!==o&&v!==o&&y!==o&&m!==o){var d=l-c,x=h+(y-h)*d;return x+(v+(m-v)*d-x)*(s-u)}}(this.samplerData,e,t)}}]),e}();function C(e,t,n){return e<t?t:e>n?n:e}var M=function(){function e(){Object(c.a)(this,e)}return Object(f.a)(e,[{key:"queryAll",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n,a){var r,i,o,u,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=a&&a.ignoreInvisibleLayers?t.filter((function(e){return e.visible})):t.slice()).length){e.next=2;break}throw new h.a("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");case 2:return r=F.fromGeometry(n),i=!1,a&&a.returnSampleInfo||(i=!0),o=Object(l.a)(Object(l.a)(Object(l.a)({},Z),a),{},{returnSampleInfo:!0}),e.next=8,this.query(t[t.length-1],r,o);case 8:return u=e.sent,e.next=11,this._queryAllContinue(t,u,o);case 11:return c=e.sent,e.abrupt("return",(c.geometry=c.geometry.export(),i&&delete c.sampleInfo,c));case 13:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"query",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n,a){var r,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new h.a("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");case 2:if(n&&(n instanceof F||"point"===n.type||"multipoint"===n.type||"polyline"===n.type)){e.next=4;break}throw new h.a("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");case 4:return r=Object(l.a)(Object(l.a)({},Z),a),i=new S(t,n.spatialReference,r),o=r.signal,e.next=7,t.load({signal:o});case 7:return e.next=9,this._createGeometryDescriptor(i,n,o);case 9:return e.next=11,this._selectTiles(i,o);case 11:return e.next=13,this._populateElevationTiles(i,o);case 13:return this._sampleGeometryWithElevation(i),e.abrupt("return",this._createQueryResult(i,o));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"createSampler",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new h.a("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");case 2:if(n&&"extent"===n.type){e.next=4;break}throw new h.a("elevation-query:invalid-extent","Invalid or undefined extent");case 4:return r=Object(l.a)(Object(l.a)({},Z),a),e.abrupt("return",this._createSampler(t,n,r));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"createSamplerAll",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n,a){var r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=a&&a.ignoreInvisibleLayers?t.filter((function(e){return e.visible})):t.slice()).length){e.next=2;break}throw new h.a("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");case 2:if(n&&"extent"===n.type){e.next=4;break}throw new h.a("elevation-query:invalid-extent","Invalid or undefined extent");case 4:return r=Object(l.a)(Object(l.a)(Object(l.a)({},Z),a),{},{returnSampleInfo:!0}),e.next=7,this._createSampler(t[t.length-1],n,r);case 7:return i=e.sent,e.abrupt("return",this._createSamplerAllContinue(t,n,i,r));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"_createSampler",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n,a,r){var i,o,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.signal,e.next=3,t.load({signal:i});case 3:if(o=n.spatialReference,l=t.tileInfo.spatialReference,e.t0=o.equals(l),e.t0){e.next=9;break}return e.next=8,Object(O.c)([{source:o,dest:l}],{signal:i});case 8:n=Object(O.g)(n,l);case 9:return u=new V(t,n,a,r),e.next=12,this._selectTiles(u,i);case 12:return e.next=14,this._populateElevationTiles(u,i);case 14:return e.abrupt("return",new q(u.elevationTiles,u.layer.tileInfo,u.options.noDataValue));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"_createSamplerAllContinue",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n,a,r){var i,o,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.pop(),t.length){e.next=2;break}return e.abrupt("return",a);case 2:return i=a.samplers.map((function(e){return Object(k.i)(e.extent)})),e.next=5,this._createSampler(t[t.length-1],n,r,i);case 5:if(0!==(o=e.sent).samplers.length){e.next=8;break}return e.abrupt("return",a);case 8:return l=a.samplers.concat(o.samplers),u=new q(l,r.noDataValue),e.abrupt("return",this._createSamplerAllContinue(t,n,u,r));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"_queryAllContinue",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n,a){var r,i,o,l,u,c,f,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=t.pop(),i=n.geometry.coordinates,o=[],l=[],u=0;u<i.length;u++)(c=n.sampleInfo[u]).demResolution>=0?c.source||(c.source=r):t.length&&(o.push(i[u]),l.push(u));if(t.length&&0!==o.length){e.next=4;break}return e.abrupt("return",n);case 4:return f=n.geometry.clone(o),e.next=7,this.query(t[t.length-1],f,a);case 7:return p=e.sent,e.abrupt("return",(l.forEach((function(e,t){i[e].z=p.geometry.coordinates[t].z,n.sampleInfo[e].demResolution=p.sampleInfo[t].demResolution})),this._queryAllContinue(t,n,a)));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"_createQueryResult",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.geometry.project(t.outSpatialReference,n);case 2:return e.t0=e.sent.export(),e.t1=t.options.noDataValue,a={geometry:e.t0,noDataValue:e.t1},e.abrupt("return",(t.options.returnSampleInfo&&(a.sampleInfo=this._extractSampleInfo(t)),t.geometry.coordinates.forEach((function(e){e.tile=null,e.elevationTile=null})),a));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_createGeometryDescriptor",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n,a){var r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.layer.tileInfo.spatialReference,!(n instanceof F)){e.next=7;break}return e.next=4,n.project(i,a);case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,Object(O.c)([{source:n.spatialReference,dest:i}],{signal:a});case 9:r=Object(O.g)(n,i);case 10:if(r){e.next=12;break}throw new h.a("elevation-query:spatial-reference-mismatch","Cannot query elevation in '".concat(n.spatialReference.wkid,"' on an elevation service in '").concat(i.wkid,"'"));case 12:t.geometry=F.fromGeometry(r);case 13:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"_selectTiles",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.options.demResolution,"geometry"===t.type&&this._preselectOutsideLayerExtent(t),"number"!=typeof a){e.next=5;break}this._selectTilesClosestResolution(t),e.next=14;break;case 5:if("finest-contiguous"!==a){e.next=10;break}return e.next=8,this._selectTilesFinestContiguous(t,n);case 8:e.next=14;break;case 10:if("auto"===a){e.next=12;break}throw new h.a("elevation-query:invalid-dem-resolution","Invalid dem resolution value '".concat(a,'\', expected a number, "finest-contiguous" or "auto"'));case 12:return e.next=14,this._selectTilesAuto(t,n);case 14:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_preselectOutsideLayerExtent",value:function(e){var t=new D(null);t.sample=function(){return e.options.noDataValue},e.outsideExtentTile=t;var n=e.layer.fullExtent;e.geometry.coordinates.forEach((function(e){var a=e.x,r=e.y;(a<n.xmin||a>n.xmax||r<n.ymin||r>n.ymax)&&(e.elevationTile=t)}))}},{key:"_selectTilesClosestResolution",value:function(e){var t=e.layer.tileInfo,n=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(n)}},{key:"_findNearestDemResolutionLODIndex",value:function(e,t){for(var n=t/Object(b.b)(e.spatialReference),a=e.lods[0],r=0,i=1;i<e.lods.length;i++){var o=e.lods[i];Math.abs(o.resolution-n)<Math.abs(a.resolution-n)&&(a=o,r=i)}return r}},{key:"_selectTilesFinestContiguous",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L(t.layer.tileInfo,t.options.minDemResolution),e.next=3,this._selectTilesFinestContiguousAt(t,a,n);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_selectTilesFinestContiguousAt",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n,a){var r,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.layer,t.selectTilesAtLOD(n),!(n<0)){e.next=3;break}return e.abrupt("return");case 3:if(i=r.tilemapCache,o=t.getTilesToFetch(),e.prev=4,!i){e.next=10;break}return e.next=8,Object(v.x)(Object(v.b)(o.map((function(e){return i.fetchAvailability(e.level,e.row,e.col,{signal:a})}))),a);case 8:e.next=14;break;case 10:return e.next=12,this._populateElevationTiles(t,a);case 12:if(t.allElevationTilesFetched()){e.next=14;break}throw t.clearElevationTiles(),new h.a("elevation-query:has-unavailable-tiles");case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(4),Object(v.t)(e.t0),e.next=21,this._selectTilesFinestContiguousAt(t,n-1,a);case 21:case"end":return e.stop()}}),e,this,[[4,16]])})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"_populateElevationTiles",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,r,i,o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.getTilesToFetch(),r={},i=t.options.cache,o=t.options.noDataValue,l=a.map(function(){var e=Object(u.a)(s.a.mark((function e(a){var l,u,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l="".concat(t.layer.uid,":").concat(a.id,":").concat(o),u=Object(p.g)(i)?i.get(l):null,!Object(p.g)(u)){e.next=6;break}e.t0=u,e.next=9;break;case 6:return e.next=8,t.layer.fetchTile(a.level,a.row,a.col,{noDataValue:o,signal:n});case 8:e.t0=e.sent;case 9:c=e.t0,Object(p.g)(i)&&i.put(l,c),r[a.id]=new D(a,c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Object(v.x)(Object(v.i)(l),n);case 3:t.populateElevationTiles(r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_selectTilesAuto",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,r,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._selectTilesAutoFinest(t),this._reduceTilesForMaximumRequests(t),a=t.layer.tilemapCache){e.next=4;break}return e.abrupt("return",this._selectTilesAutoPrefetchUpsample(t,n));case 4:return r=t.getTilesToFetch(),i={},o=r.map(function(){var e=Object(u.a)(s.a.mark((function e(t){var r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={id:null,level:0,row:0,col:0,extent:Object(k.e)()},e.next=3,Object(x.c)(a.fetchAvailabilityUpsample(t.level,t.row,t.col,r,{signal:n}));case 3:!1===(o=e.sent).ok?Object(v.t)(o.error):i[t.id]=r;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=7,Object(v.x)(Object(v.b)(o),n);case 7:t.remapTiles(i);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_reduceTilesForMaximumRequests",value:function(e){var t=e.layer.tileInfo,n=0,a={},r=function(e){e.id in a?a[e.id]++:(a[e.id]=1,n++)},i=function(e){var t=a[e.id];1===t?(delete a[e.id],n--):a[e.id]=t-1};e.forEachTileToFetch(r,i);for(var o=!0;o&&(o=!1,e.forEachTileToFetch((function(a){n<=e.options.maximumAutoTileRequests||(i(a),t.upsampleTile(a)&&(o=!0),r(a))}),i),o););}},{key:"_selectTilesAutoFinest",value:function(e){var t=L(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}},{key:"_selectTilesAutoPrefetchUpsample",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.layer.tileInfo,e.next=3,this._populateElevationTiles(t,n);case 3:if(r=!1,t.forEachTileToFetch((function(e,t){a.upsampleTile(e)?r=!0:t()})),e.t0=r,!e.t0){e.next=9;break}return e.next=9,this._selectTilesAutoPrefetchUpsample(t,n);case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_sampleGeometryWithElevation",value:function(e){e.geometry.coordinates.forEach((function(t){var n=t.elevationTile,a=e.options.noDataValue;if(n){var r=n.sample(t.x,t.y);void 0!==r?a=r:t.elevationTile=null}t.z=a}))}},{key:"_extractSampleInfo",value:function(e){var t=e.layer.tileInfo,n=Object(b.b)(t.spatialReference);return e.geometry.coordinates.map((function(a){var r=-1;return a.elevationTile&&a.elevationTile!==e.outsideExtentTile&&(r=t.lodAt(a.elevationTile.tile.level).resolution*n),{demResolution:r}}))}}]),e}(),F=function(){function e(){Object(c.a)(this,e)}return Object(f.a)(e,[{key:"export",value:function(){return this._exporter(this.coordinates,this.spatialReference)}},{key:"clone",value:function(t){var n=this,a=new e;return a.geometry=this.geometry,a.spatialReference=this.spatialReference,a.coordinates=t||this.coordinates.map((function(e){return n._cloneCoordinate(e)})),a._exporter=this._exporter,a}},{key:"project",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,r,i,o,l=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.spatialReference.equals(t)){e.next=2;break}return e.abrupt("return",this.clone());case 2:return e.next=4,Object(O.c)([{source:this.spatialReference,dest:t}],{signal:n});case 4:if(a=new m.a({spatialReference:this.spatialReference,points:this.coordinates.map((function(e){return[e.x,e.y]}))}),r=Object(O.g)(a,t)){e.next=7;break}return e.abrupt("return",null);case 7:return i=this.coordinates.map((function(e,t){var n=l._cloneCoordinate(e),a=r.points[t];return n.x=a[0],n.y=a[1],n})),o=this.clone(i),e.abrupt("return",(o.spatialReference=t,o));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_cloneCoordinate",value:function(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}}],[{key:"fromGeometry",value:function(t){var n=new e;if(n.geometry=t,n.spatialReference=t.spatialReference,t instanceof e)n.coordinates=t.coordinates.map((function(e){return n._cloneCoordinate(e)})),n._exporter=function(e,n){var a=t.clone(e);return a.spatialReference=n,a};else switch(t.type){case"point":var a=t,r=a.hasZ,o=a.hasM;n.coordinates=r&&o?[{x:a.x,y:a.y,z:a.z,m:a.m}]:r?[{x:a.x,y:a.y,z:a.z}]:o?[{x:a.x,y:a.y,m:a.m}]:[{x:a.x,y:a.y}],n._exporter=function(e,n){return t.hasM?new y.a(e[0].x,e[0].y,e[0].z,e[0].m,n):new y.a(e[0].x,e[0].y,e[0].z,n)};break;case"multipoint":var s=t,l=s.hasZ,u=s.hasM;n.coordinates=l&&u?s.points.map((function(e){return{x:e[0],y:e[1],z:e[2],m:e[3]}})):l?s.points.map((function(e){return{x:e[0],y:e[1],z:e[2]}})):u?s.points.map((function(e){return{x:e[0],y:e[1],m:e[2]}})):s.points.map((function(e){return{x:e[0],y:e[1]}})),n._exporter=function(e,n){return t.hasM?new m.a({points:e.map((function(e){return[e.x,e.y,e.z,e.m]})),hasZ:!0,hasM:!0,spatiaReference:n}):new m.a(e.map((function(e){return[e.x,e.y,e.z]})),n)};break;case"polyline":var c,f=t,p=[],h=[],v=t.hasZ,x=t.hasM,b=0,k=Object(i.a)(f.paths);try{for(k.s();!(c=k.n()).done;){var O=c.value;if(h.push([b,b+O.length]),b+=O.length,v&&x){var T,j=Object(i.a)(O);try{for(j.s();!(T=j.n()).done;){var g=T.value;p.push({x:g[0],y:g[1],z:g[2],m:g[3]})}}catch(M){j.e(M)}finally{j.f()}}else if(v){var w,R=Object(i.a)(O);try{for(R.s();!(w=R.n()).done;){var _=w.value;p.push({x:_[0],y:_[1],z:_[2]})}}catch(M){R.e(M)}finally{R.f()}}else if(x){var q,E=Object(i.a)(O);try{for(E.s();!(q=E.n()).done;){var A=q.value;p.push({x:A[0],y:A[1],m:A[2]})}}catch(M){E.e(M)}finally{E.f()}}else{var I,D=Object(i.a)(O);try{for(D.s();!(I=D.n()).done;){var C=I.value;p.push({x:C[0],y:C[1]})}}catch(M){D.e(M)}finally{D.f()}}}}catch(M){k.e(M)}finally{k.f()}n.coordinates=p,n._exporter=function(e,n){var a=t.hasM?e.map((function(e){return[e.x,e.y,e.z,e.m]})):e.map((function(e){return[e.x,e.y,e.z]})),r=h.map((function(e){return a.slice(e[0],e[1])}));return new d.a({paths:r,hasM:t.hasM,hasZ:!0,spatialReference:n})}}return n}}]),e}(),z=function e(t,n){Object(c.a)(this,e),this.layer=t,this.options=n},S=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e,a,r){var i;return Object(c.a)(this,n),(i=t.call(this,e,r)).type="geometry",i.outSpatialReference=a,i}return Object(f.a)(n,[{key:"selectTilesAtLOD",value:function(e){if(e<0)this.geometry.coordinates.forEach((function(e){return e.tile=null}));else{var t=this.layer.tileInfo,n=t.lods[e].level;this.geometry.coordinates.forEach((function(e){e.tile=t.tileAt(n,e.x,e.y)}))}}},{key:"allElevationTilesFetched",value:function(){return!this.geometry.coordinates.some((function(e){return!e.elevationTile}))}},{key:"clearElevationTiles",value:function(){var e,t=Object(i.a)(this.geometry.coordinates);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.elevationTile!==this.outsideExtentTile&&(n.elevationTile=null)}}catch(a){t.e(a)}finally{t.f()}}},{key:"populateElevationTiles",value:function(e){var t,n=Object(i.a)(this.geometry.coordinates);try{for(n.s();!(t=n.n()).done;){var a=t.value;!a.elevationTile&&a.tile&&(a.elevationTile=e[a.tile.id])}}catch(r){n.e(r)}finally{n.f()}}},{key:"remapTiles",value:function(e){var t,n=Object(i.a)(this.geometry.coordinates);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.tile=e[a.tile.id]}}catch(r){n.e(r)}finally{n.f()}}},{key:"getTilesToFetch",value:function(){var e,t={},n=[],a=Object(i.a)(this.geometry.coordinates);try{for(a.s();!(e=a.n()).done;){var r=e.value,o=r.tile;r.elevationTile||!r.tile||t[o.id]||(t[o.id]=o,n.push(o))}}catch(s){a.e(s)}finally{a.f()}return n}},{key:"forEachTileToFetch",value:function(e){var t,n=Object(i.a)(this.geometry.coordinates);try{var a=function(){var n=t.value;n.tile&&!n.elevationTile&&e(n.tile,(function(){return n.tile=null}))};for(n.s();!(t=n.n()).done;)a()}catch(r){n.e(r)}finally{n.f()}}}]),n}(z),V=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e,a,r,i){var o;return Object(c.a)(this,n),(o=t.call(this,e,r)).type="extent",o.elevationTiles=[],o.candidateTiles=[],o.fetchedCandidates=new Set,o.extent=a.intersection(e.fullExtent),o.maskExtents=i,o}return Object(f.a)(n,[{key:"selectTilesAtLOD",value:function(e,t){var n=this._maximumLodForRequests(t),a=Math.min(n,e);a<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(a)}},{key:"_maximumLodForRequests",value:function(e){var t=this.layer.tileInfo;if(!e)return t.lods.length-1;for(var n=this.extent,a=t.lods.length-1;a>=0;a--){var r=t.lods[a],i=r.resolution*t.size[0],o=r.resolution*t.size[1];if(Math.ceil(n.width/i)*Math.ceil(n.height/o)<=e)return a}return-1}},{key:"allElevationTilesFetched",value:function(){return this.candidateTiles.length===this.elevationTiles.length}},{key:"clearElevationTiles",value:function(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}},{key:"populateElevationTiles",value:function(e){var t,n=Object(i.a)(this.candidateTiles);try{for(n.s();!(t=n.n()).done;){var a=t.value,r=e[a.id];r&&(this.fetchedCandidates.add(a),this.elevationTiles.push(r))}}catch(o){n.e(o)}finally{n.f()}}},{key:"remapTiles",value:function(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((function(t){return e[t.id]})))}},{key:"getTilesToFetch",value:function(){return this.candidateTiles}},{key:"forEachTileToFetch",value:function(e,t){var n=this,a=this.candidateTiles;this.candidateTiles=[],a.forEach((function(a){if(n.fetchedCandidates.has(a))t&&t(a);else{var r=!1;e(a,(function(){return r=!0})),r?t&&t(a):n.candidateTiles.push(a)}})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}},{key:"_uniqueNonOverlappingTiles",value:function(e,t){var n,a={},r=[],o=Object(i.a)(e);try{for(o.s();!(n=o.n()).done;){var s=n.value;a[s.id]?t&&t(s):(a[s.id]=s,r.push(s))}}catch(u){o.e(u)}finally{o.f()}var l=r.sort((function(e,t){return e.level-t.level}));return l.filter((function(e,n){for(var a=0;a<n;a++)if(Object(k.b)(l[a].extent,e.extent))return t&&t(e),!1;return!0}))}},{key:"_selectCandidateTilesCoveringExtentAt",value:function(e){this.candidateTiles.length=0;for(var t=this.layer.tileInfo,n=t.lods[e],a=this.extent,r=t.tileAt(n.level,a.xmin,a.ymin),i=n.resolution*t.size[0],o=n.resolution*t.size[1],s=Math.ceil((a.xmax-r.extent[0])/i),l=Math.ceil((a.ymax-r.extent[1])/o),u=0;u<l;u++)for(var c=0;c<s;c++){var f={id:null,level:r.level,row:r.row-u,col:r.col+c};t.updateTileInfo(f),this._tileIsMasked(f)||this.candidateTiles.push(f)}}},{key:"_tileIsMasked",value:function(e){return!!this.maskExtents&&this.maskExtents.some((function(t){return Object(k.b)(t,e.extent)}))}}]),n}(z);function L(e,t){var n=e.lods.length-1;if(t>0){var a=e.lods.findIndex((function(e){return e.resolution<t}));0===a?n=0:a>0&&(n=a-1)}return n}var Z={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};t.default=M}}]);
//# sourceMappingURL=10.40883a3a.chunk.js.map