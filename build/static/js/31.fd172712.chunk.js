(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[31],{1148:function(e,t,r){"use strict";var a=r(14),n=r(2),i=r(3),s=r(4),u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.POSITIVE_INFINITY;Object(n.a)(this,e),this.size=0,this._start=0,this.maxSize=t,this._buffer=isFinite(t)?new Array(t):[]}return Object(i.a)(e,[{key:"entries",get:function(){return this._buffer}},{key:"enqueue",value:function(e){if(this.size===this.maxSize){var t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=e:this._buffer[this._start+this.size++]=e,null}},{key:"dequeue",value:function(){if(0===this.size)return null;var e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}},{key:"peek",value:function(){return 0===this.size?null:this._buffer[this._start]}},{key:"find",value:function(e){if(0===this.size)return null;var t,r=Object(a.a)(this._buffer);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(Object(s.k)(n)&&e(n))return n}}catch(i){r.e(i)}finally{r.f()}return null}},{key:"clear",value:function(e){for(var t=this.dequeue();Object(s.k)(t);)e&&e(t),t=this.dequeue()}}]),e}();t.a=u},1306:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return I}));var a=r(14),n=r(2),i=r(3),s=r(5),u=r(6),d=(r(16),r(4)),c=r(78),o=r(1148),h=r(175),l=r(1072),f=r(1333),y=r(1307);function _(e,t){return e<<16|t}function v(e){return(4294901760&e)>>>16}function p(e){return 65535&e}var I={getObjectId:function(e){return e.getObjectId()},getAttributes:function(e){return e.readAttributes()},getAttribute:function(e,t){return e.readAttribute(t)},cloneWithGeometry:function(e,t){return e},getGeometry:function(e){return e.readHydratedGeometry()},getCentroid:function(e,t){return e.readCentroid()}},g=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(e,a,i){var s;return Object(n.a)(this,r),(s=t.call(this,e,a)).featureAdapter=I,s.events=new c.a,s._featureSetsByInstance=new Map,s._objectIdToDisplayId=new Map,s._spatialIndexInvalid=!0,s._indexSearchCache=new o.a(50),s._index=Object(l.a)(9,(function(e){return{minX:s._storage.getXMin(e),minY:s._storage.getYMin(e),maxX:s._storage.getXMax(e),maxY:s._storage.getYMax(e)}})),s._storage=a,s.mode=i,s}return Object(i.a)(r,[{key:"storage",get:function(){return this._storage}},{key:"storeStatistics",get:function(){return{featureCount:0,vertexCount:0}}},{key:"hasInstance",value:function(e){return this._featureSetsByInstance.has(e)}},{key:"onTileData",value:function(e,t){if(Object(d.j)(t.addOrUpdate))return t;if(t.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){for(var r=t.addOrUpdate.getCursor();r.next();){var a=r.getDisplayId();this.setComputedAttributes(this._storage,r,a,e.scale)}return t}this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate);for(var n=t.addOrUpdate.getCursor();n.next();)this._insertFeature(n,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),t}},{key:"search",value:function(e){var t=this;this._rebuildIndex();var r=e.id,n=this._indexSearchCache.find((function(e){return e.tileId===r}));if(Object(d.k)(n))return n.readers;var i,s=new Map,u=this._searchIndex(e.bounds),c=[],o=Object(a.a)(u);try{for(o.s();!(i=o.n()).done;){var h=i.value,l=this._storage.getInstanceId(h),f=v(l),_=p(l);s.has(f)||s.set(f,[]),s.get(f).push(_)}}catch(I){o.e(I)}finally{o.f()}return s.forEach((function(e,r){var a=t._featureSetsByInstance.get(r);c.push(y.a.from(a,e))})),this._indexSearchCache.enqueue({tileId:r,readers:c}),c}},{key:"insert",value:function(e){for(var t=e.getCursor(),r=this._storage;t.next();){var a,n=_(t.instance,t.getIndex()),i=t.getObjectId(),s=null!=(a=this._objectIdToDisplayId.get(i))?a:this._storage.createDisplayId();t.setDisplayId(s),r.setInstanceId(s,n),this._objectIdToDisplayId.set(i,s)}this._featureSetsByInstance.set(e.instance,e),this._spatialIndexInvalid=!0}},{key:"remove",value:function(e){var t=this._objectIdToDisplayId.get(e);if(t){var r=this._storage.getInstanceId(t),a=p(r),n=v(r),i=this._featureSetsByInstance.get(n);this._objectIdToDisplayId.delete(e),this._storage.releaseDisplayId(t),i.removeAtIndex(a),i.isEmpty&&this._featureSetsByInstance.delete(n),this._spatialIndexInvalid=!0}}},{key:"forEach",value:function(e){var t=this;this._objectIdToDisplayId.forEach((function(r){var a=t._storage.getInstanceId(r),n=t._lookupFeature(a);e(n)}))}},{key:"forEachUnsafe",value:function(e){var t=this;this._objectIdToDisplayId.forEach((function(r){var a=t._storage.getInstanceId(r),n=v(a),i=p(a),s=t._getFeatureSet(n);s.setIndex(i),e(s)}))}},{key:"forEachInBounds",value:function(e,t){var r,n=this._searchIndex(e),i=Object(a.a)(n);try{for(i.s();!(r=i.n()).done;){var s=r.value,u=this.lookupFeatureByDisplayId(s,this._storage);t(Object(d.q)(u))}}catch(c){i.e(c)}finally{i.f()}}},{key:"forEachBounds",value:function(e,t,r){this._rebuildIndex();var n,i=[0,0,0,0],s=Object(a.a)(e);try{for(s.s();!(n=s.n()).done;){var u=n.value;if(u.readGeometry()){var d=u.getDisplayId();i[0]=this._storage.getXMin(d),i[1]=this._storage.getYMin(d),i[2]=this._storage.getXMax(d),i[3]=this._storage.getYMax(d),t(Object(h.k)(r,i))}}}catch(c){s.e(c)}finally{s.f()}}},{key:"sweepFeatures",value:function(e,t,r){var a=this;this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach((function(n,i){e.has(n)||(t.releaseDisplayId(n),r&&r.unsetAttributeData(n),a._objectIdToDisplayId.delete(i))})),this.events.emit("changed")}},{key:"sweepFeatureSets",value:function(e){var t=this;this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach((function(r,a){e.has(a)||t._featureSetsByInstance.delete(a)}))}},{key:"lookupObjectId",value:function(e,t){var r=this.lookupFeatureByDisplayId(e,t);return Object(d.j)(r)?null:r.getObjectId()}},{key:"lookupDisplayId",value:function(e){return this._objectIdToDisplayId.get(e)}},{key:"lookupFeatureByDisplayId",value:function(e,t){var r=t.getInstanceId(e);return this._lookupFeature(r)}},{key:"lookupByDisplayIdUnsafe",value:function(e){var t=this._storage.getInstanceId(e),r=v(t),a=p(t),n=this._getFeatureSet(r);return n?(n.setIndex(a),n):null}},{key:"_insertFeature",value:function(e,t){var r=this._storage,a=e.getObjectId(),n=_(e.instance,e.getIndex());r.getInstanceId(e.getDisplayId());var i=this._objectIdToDisplayId.get(a);i||(i=r.createDisplayId(),this._objectIdToDisplayId.set(a,i),this._spatialIndexInvalid=!0),e.setDisplayId(i),r.setInstanceId(i,n),this.setComputedAttributes(r,e,i,t)}},{key:"_searchIndex",value:function(e){this._rebuildIndex();var t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}},{key:"_rebuildIndex",value:function(){var e=this;if(this._spatialIndexInvalid){var t=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((function(r){for(var a=r.getCursor();a.next();){var n=a.getDisplayId();e._storage.setBounds(n,a)&&t.push(n)}})):this._objectIdToDisplayId.forEach((function(r){var a=e._storage.getInstanceId(r);e._storage.setBounds(r,e._lookupFeature(a))&&t.push(r)})),this._index.clear(),this._index.load(t),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}}},{key:"_lookupFeature",value:function(e){var t=v(e),r=p(e),a=this._getFeatureSet(t);if(!a)return null;var n=a.getCursor();return n.setIndex(r),n}},{key:"_getFeatureSet",value:function(e){return this._featureSetsByInstance.get(e)}}]),r}(f.a)},1307:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(2),n=r(3),i=r(5),s=r(6),u=r(1067),d=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(e,n){var i;return Object(a.a)(this,r),(i=t.call(this,u.a.createInstance()))._currentIndex=-1,i._reader=e,i._indices=n,i}return Object(n.a)(r,[{key:"hasNext",get:function(){return this._currentIndex+1<this._indices.length}},{key:"getApproximateSize",value:function(){return this._indices.length}},{key:"getCursor",value:function(){return this.copy()}},{key:"copy",value:function(){var e=new r(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}},{key:"next",value:function(){for(;this._nextIndex()&&!this._reader._passesFilter()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}},{key:"_nextIndex",value:function(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}},{key:"setArcadeSpatialReference",value:function(e){this._reader.setArcadeSpatialReference(e)}},{key:"attachStorage",value:function(e){this._reader.attachStorage(e)}},{key:"geometryType",get:function(){return this._reader.geometryType}},{key:"hasFeatures",get:function(){return this._reader.hasFeatures}},{key:"exceededTransferLimit",get:function(){return this._reader.exceededTransferLimit}},{key:"hasZ",get:function(){return this._reader.hasZ}},{key:"hasM",get:function(){return this._reader.hasM}},{key:"getStorage",value:function(){return this._reader.getStorage()}},{key:"getComputedNumeric",value:function(e){return this._reader.getComputedNumericAtIndex(0)}},{key:"setComputedNumeric",value:function(e,t){return this._reader.setComputedNumericAtIndex(t,0)}},{key:"getComputedString",value:function(e){return this._reader.getComputedStringAtIndex(0)}},{key:"setComputedString",value:function(e,t){return this._reader.setComputedStringAtIndex(0,t)}},{key:"getComputedNumericAtIndex",value:function(e){return this._reader.getComputedNumericAtIndex(e)}},{key:"setComputedNumericAtIndex",value:function(e,t){this._reader.setComputedNumericAtIndex(e,t)}},{key:"getComputedStringAtIndex",value:function(e){return this._reader.getComputedStringAtIndex(e)}},{key:"setComputedStringAtIndex",value:function(e,t){return this._reader.setComputedStringAtIndex(e,t)}},{key:"transform",value:function(e,t,r,a){var n=this.copy();return n._reader=this._reader.transform(e,t,r,a),n}},{key:"extent",value:function(e,t,r,a){var n=this.copy();return n._reader=this._reader.extent(e,t,r,a),n}},{key:"hasFilter",value:function(){return this._reader.hasFilter()}},{key:"readAttribute",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._reader.readAttribute(e,t)}},{key:"readAttributes",value:function(){return this._reader.readAttributes()}},{key:"joinAttributes",value:function(e){return this._reader.joinAttributes(e)}},{key:"readArcadeFeature",value:function(){return this._reader.readArcadeFeature()}},{key:"geometry",value:function(){return this._reader.geometry()}},{key:"field",value:function(e){return this.readAttribute(e,!0)}},{key:"hasField",value:function(e){return this._reader.hasField(e)}},{key:"setField",value:function(e,t){return this._reader.setField(e,t)}},{key:"keys",value:function(){return this._reader.keys()}},{key:"castToText",value:function(){return this._reader.castToText()}},{key:"getQuantizationTransform",value:function(){return this._reader.getQuantizationTransform()}},{key:"getAttributeHash",value:function(){return this._reader.getAttributeHash()}},{key:"getObjectId",value:function(){return this._reader.getObjectId()}},{key:"getDisplayId",value:function(){return this._reader.getDisplayId()}},{key:"setDisplayId",value:function(e){return this._reader.setDisplayId(e)}},{key:"getGroupId",value:function(){return this._reader.getGroupId()}},{key:"setGroupId",value:function(e){return this._reader.setGroupId(e)}},{key:"getXHydrate",value:function(){return this._reader.getXHydrate()}},{key:"getYHydrate",value:function(){return this._reader.getYHydrate()}},{key:"getX",value:function(){return this._reader.getX()}},{key:"getY",value:function(){return this._reader.getY()}},{key:"setIndex",value:function(e){return this._reader.setIndex(e)}},{key:"getIndex",value:function(){return this._reader.getIndex()}},{key:"readLegacyFeature",value:function(){return this._reader.readLegacyFeature()}},{key:"readOptimizedFeature",value:function(){return this._reader.readOptimizedFeature()}},{key:"readLegacyPointGeometry",value:function(){return this._reader.readLegacyPointGeometry()}},{key:"readLegacyGeometry",value:function(){return this._reader.readLegacyGeometry()}},{key:"readLegacyCentroid",value:function(){return this._reader.readLegacyCentroid()}},{key:"readGeometryArea",value:function(){return this._reader.readGeometryArea()}},{key:"readUnquantizedGeometry",value:function(){return this._reader.readUnquantizedGeometry()}},{key:"readHydratedGeometry",value:function(){return this._reader.readHydratedGeometry()}},{key:"readGeometry",value:function(){return this._reader.readGeometry()}},{key:"readCentroid",value:function(){return this._reader.readCentroid()}},{key:"_passesFilter",value:function(){return this._reader._passesFilter()}},{key:"_readAttribute",value:function(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}},{key:"_readAttributes",value:function(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}],[{key:"from",value:function(e,t){return new r(e.copy(),t)}}]),r}(u.a)},1333:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var a=r(10),n=r(14),i=r(7),s=r.n(i),u=r(15),d=r(2),c=r(3),o=r(16),h=r(4),l=r(138),f=r(466),y=r(13);var _=function(e,t,r){e.referencesGeometry();var n=t.readArcadeFeature();try{return e.evaluate(Object(a.a)(Object(a.a)({},r),{},{$feature:n}))}catch(i){return y.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",i),null}},v=r.e(202).then(r.bind(null,1425)),p=function(){function e(t,r){Object(d.a)(this,e),this._canCacheExpressionValue=!1,this._sourceInfo=t,this._bitsets={computed:r.getBitset(r.createBitset())}}return Object(c.a)(e,[{key:"invalidate",value:function(){this._bitsets.computed.clear()}},{key:"updateSchema",value:function(){var e=Object(u.a)(s.a.mark((function e(t,r){var a,n,i,u,d,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(f.a)(this._schema,r),this._schema=r,r&&!Object(h.j)(a)&&Object(f.b)(a,"attributes")){e.next=3;break}return e.abrupt("return");case 3:Object(o.a)("esri-2d-update-debug")&&console.debug("Applying Update - Store:",a),this._bitsets.computed.clear(),t.targets[r.name]=!0,n=r.attributes,i=[],u=[],e.t0=s.a.keys(n);case 6:if((e.t1=e.t0()).done){e.next=20;break}d=e.t1.value,c=n[d],e.t2=c.type,e.next="field"===e.t2?12:"expression"===e.t2?13:"label-expression"===e.t2?15:"statistic"===e.t2?17:18;break;case 12:return e.abrupt("break",18);case 13:return i.push(this._createArcadeComputedField(c)),e.abrupt("break",18);case 15:return i.push(this._createLabelArcadeComputedField(c)),e.abrupt("break",18);case 17:u.push(c);case 18:e.next=6;break;case 20:return e.next=22,Promise.all(i);case 22:this._computedFields=e.sent,this._canCacheExpressionValue=!this._computedFields.some((function(e){return"expression"===e.type&&e.expression.referencesScale()})),this._statisticFields=u;case 25:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"setComputedAttributes",value:function(e,t,r,a){var i=this._bitsets.computed;if(!this._canCacheExpressionValue||!i.has(r)){i.set(r);var s,u=Object(n.a)(this._computedFields);try{for(u.s();!(s=u.n()).done;){var d=s.value,c=this._evaluateField(t,d,a);switch(d.resultType){case"numeric":e.setComputedNumericAtIndex(r,d.fieldIndex,c);break;case"string":e.setComputedStringAtIndex(r,d.fieldIndex,c)}}}catch(o){u.e(o)}finally{u.f()}}}},{key:"_createArcadeComputedField",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._sourceInfo.spatialReference,n=this._sourceInfo.fieldsIndex,e.t0=a.a,e.t1=Object(a.a)({},t),e.t2={},e.next=6,Object(l.d)(t.valueExpression,r,n);case 6:return e.t3=e.sent,e.t4={expression:e.t3},e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t4));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createLabelArcadeComputedField",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var r,n,i,u,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._sourceInfo.spatialReference,n=this._sourceInfo.fields,e.next=4,v;case 4:return i=e.sent,u=i.createLabelFunction,e.next=8,u(t.label,n,r);case 8:return d=e.sent,e.abrupt("return",Object(a.a)(Object(a.a)({},t),{},{builder:d}));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_evaluateField",value:function(e,t,r){switch(t.type){case"label-expression":var a=e.readArcadeFeature();return t.builder.evaluate(a)||"";case"expression":var n=t.expression;return _(n,e,{$view:{scale:r}})}}}]),e}()}}]);
//# sourceMappingURL=31.fd172712.chunk.js.map