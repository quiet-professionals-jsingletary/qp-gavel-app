(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[41],{1028:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var i=n(13),r=n(2),a=n(3),s=n(4),u=n(14),o=n(20),d=n(86),l=n(115),c=n(515),f=n(165),h=n(15),y=n(1007),p={minX:0,minY:0,maxX:0,maxY:0},b=function(){function e(){var t=this;Object(r.a)(this,e),this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=Object(y.a)(9,Object(h.a)("csp-restrictions")?function(e){return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(t._indexInvalid){var e=new Array(t._idByBounds.size),n=0;t._idByBounds.forEach((function(t,i){e[n++]=i})),t._indexInvalid=!1,t._index.clear(),t._index.load(e)}else t._boundsToLoad.length&&(t._index.load(t._boundsToLoad.filter((function(e){return t._idByBounds.has(e)}))),t._boundsToLoad.length=0)}}return Object(a.a)(e,[{key:"clear",value:function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}},{key:"delete",value:function(e){var t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}},{key:"forEachInBounds",value:function(e,t){this._loadIndex();var n,r=Object(i.a)(function(e,t){return p.minX=t[0],p.minY=t[1],p.maxX=t[2],p.maxY=t[3],e.search(p)}(this._index,e));try{for(r.s();!(n=r.n()).done;){var a=n.value;t(this._idByBounds.get(a))}}catch(s){r.e(s)}finally{r.f()}}},{key:"get",value:function(e){return this._boundsById.get(e)}},{key:"has",value:function(e){return this._boundsById.has(e)}},{key:"invalidateIndex",value:function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}},{key:"set",value:function(e,t){if(!this._indexInvalid){var n=this._boundsById.get(e);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}]),e}(),m=n(262),v=n(185),g=n(998),_={getObjectId:function(e){return e.objectId},getAttributes:function(e){return e.attributes},getAttribute:function(e,t){return e.attributes[t]},cloneWithGeometry:function(e,t){return new m.a(t,e.attributes,null,e.objectId)},getGeometry:function(e){return e.geometry},getCentroid:function(e,t){return e.centroid||(e.centroid=Object(g.a)(new v.a,e.geometry,t.hasZ,t.hasM)),e.centroid}},I=function(){function e(t){Object(r.a)(this,e),this.geometryInfo=t,this._boundsStore=new b,this._featuresById=new Map,this._markedIds=new Set,this.events=new d.a,this.featureAdapter=_}return Object(a.a)(e,[{key:"geometryType",get:function(){return this.geometryInfo.geometryType}},{key:"hasM",get:function(){return this.geometryInfo.hasM}},{key:"hasZ",get:function(){return this.geometryInfo.hasZ}},{key:"numFeatures",get:function(){return this._featuresById.size}},{key:"fullBounds",get:function(){var e=this;if(!this.numFeatures)return null;var t=Object(l.h)(l.a);return this._featuresById.forEach((function(n){var i=e._boundsStore.get(n.objectId);i&&(t[0]=Math.min(i[0],t[0]),t[1]=Math.min(i[1],t[1]),t[2]=Math.max(i[2],t[2]),t[3]=Math.max(i[3],t[3]))})),t}},{key:"storeStatistics",get:function(){var e=0;return this._featuresById.forEach((function(t){t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}},{key:"add",value:function(e){this._add(e),this._emitChanged()}},{key:"addMany",value:function(e){var t,n=Object(i.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;this._add(r)}}catch(a){n.e(a)}finally{n.f()}this._emitChanged()}},{key:"clear",value:function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}},{key:"removeById",value:function(e){var t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}},{key:"removeManyById",value:function(e){this._boundsStore.invalidateIndex();var t,n=Object(i.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,a=this._featuresById.get(r);a&&this._remove(a)}}catch(s){n.e(s)}finally{n.f()}this._emitChanged()}},{key:"forEachBounds",value:function(e,t,n){var r,a=Object(i.a)(e);try{for(a.s();!(r=a.n()).done;){var s=r.value,u=this._boundsStore.get(s.objectId);u&&t(Object(f.k)(n,u))}}catch(o){a.e(o)}finally{a.f()}}},{key:"getFeature",value:function(e){return this._featuresById.get(e)}},{key:"has",value:function(e){return this._featuresById.has(e)}},{key:"forEach",value:function(e){this._featuresById.forEach((function(t){return e(t)}))}},{key:"forEachInBounds",value:function(e,t){var n=this;this._boundsStore.forEachInBounds(e,(function(e){t(n._featuresById.get(e))}))}},{key:"startMarkingUsedFeatures",value:function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}},{key:"sweep",value:function(){var e=this,t=!1;this._featuresById.forEach((function(n,i){e._markedIds.has(i)||(t=!0,e._remove(n))})),this._markedIds.clear(),t&&this._emitChanged()}},{key:"_emitChanged",value:function(){this.events.emit("changed",void 0)}},{key:"_add",value:function(e){if(e){var t=e.objectId;if(null!=t){var n,i=this._featuresById.get(t);if(this._markedIds.add(t),i?(e.displayId=i.displayId,n=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(s.h)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);n=Object(c.o)(n||Object(l.h)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,n),this._featuresById.set(t,e)}else u.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new o.a("featurestore:invalid-feature","feature id is missing",{feature:e}))}}},{key:"_remove",value:function(e){return Object(s.h)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}]),e}()},1093:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return g}));var i=n(7),r=n.n(i),a=n(16),s=n(13),u=n(2),o=n(54),d=n(49),l=function e(){Object(u.a)(this,e),this.code=null,this.description=null},c=function e(t){Object(u.a)(this,e),this.error=new l,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t};function f(e){return new c(e)}var h=function e(t){Object(u.a)(this,e),this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t};function y(e){return new h(e)}var p,b=new Set;function m(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=arguments.length>5?arguments[5]:void 0;for(var u in b.clear(),i){var o=e.get(u);if(o){var l=i[u],c=v(o,l);if(c!==l&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:l,sanitizedValue:c}}),b.add(o.name),o&&(r||o.editable)){var h=Object(d.z)(o,c);if(h)return f(Object(d.A)(h,o,c));n[o.name]=c}}}var y,p=Object(s.a)(t);try{for(p.s();!(y=p.n()).done;){var m=y.value;if(!b.has(m.name))return f('missing required field "'.concat(m.name,'"'))}}catch(g){p.e(g)}finally{p.f()}return null}function v(e,t){var n=t;return"string"==typeof t&&Object(d.v)(e)?n=parseFloat(t):null!=t&&Object(d.w)(e)&&"string"!=typeof t&&(n=String(t)),Object(d.x)(n)}function g(e,t){if(!e||!Object(o.i)(t))return e;if("rings"in e||"paths"in e){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(t,e)}return e}function _(){return I.apply(this,arguments)}function I(){return(I=Object(a.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=p,e.t0){e.next=6;break}return e.next=4,n.e(18).then(n.bind(null,1147));case 4:p=e.sent,e.t0=p;case 6:return e.abrupt("return",e.t0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return O.apply(this,arguments)}function O(){return(O=Object(a.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!Object(o.i)(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n,e.t0){e.next=4;break}return e.next=4,_();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1210:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var i=n(7),r=n.n(i),a=n(10),s=n(13),u=n(16),o=n(2),d=n(3),l=n(20),c=n(17),f=n(54),h=n(97),y=n(49),p=n(574),b=n(515),m=n(423),v=n(991),g=n(1005),_=n(1028),I=n(1055),j=n(1093),O=f.a,x={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:f.a},k={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function F(e){return Object(h.f)(e)?null!=e.z:!!e.hasZ}function w(e){return Object(h.f)(e)?null!=e.m:!!e.hasM}var B=function(){function e(){Object(o.a)(this,e),this._queryEngine=null,this._nextObjectId=null}return Object(d.a)(e,[{key:"destroy",value:function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}},{key:"load",value:function(){var e=Object(u.a)(r.a.mark((function e(t){var n,i,u,o,d,c,f,h,b,j,F,w,B,E,T,q,M,R,S,D,C,Z,A,L,Q,G,z;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],i=t.features,u=this._inferLayerProperties(i,t.fields),o=t.fields||[],d=null!=t.hasM?t.hasM:u.hasM,c=null!=t.hasZ?t.hasZ:u.hasZ,f=!t.spatialReference&&!u.spatialReference,h=f?O:t.spatialReference||u.spatialReference,b=f?x:null,j=t.geometryType||u.geometryType,F=!j,w=t.objectIdField||u.objectIdField,B=t.timeInfo,F||(f&&n.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),j)){e.next=4;break}throw new l.a("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");case 4:if(w){e.next=6;break}throw new l.a("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");case 6:u.objectIdField&&w!==u.objectIdField&&(n.push({name:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'.concat(w,'" doesn\'t match the field name "').concat(u.objectIdField,'", found in the provided fields')}),w=u.objectIdField),w&&!u.objectIdField&&(E=null,o.some((function(e){return e.name===w&&(E=e,!0)}))?(E.type="esriFieldTypeOID",E.editable=!1,E.nullable=!1):o.unshift({alias:w,name:w,type:"esriFieldTypeOID",editable:!1,nullable:!1})),T=Object(s.a)(o),e.prev=8,T.s();case 10:if((q=T.n()).done){e.next=18;break}if(null==(M=q.value).name&&(M.name=M.alias),null==M.alias&&(M.alias=M.name),M.name){e.next=14;break}throw new l.a("feature-layer:invalid-field-name","field name is missing",{field:M});case 14:if(M.name===w&&(M.type="esriFieldTypeOID"),-1!==p.a.jsonValues.indexOf(M.type)){e.next=16;break}throw new l.a("feature-layer:invalid-field-type",'invalid type for field "'.concat(M.name,'"'),{field:M});case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),T.e(e.t0);case 23:return e.prev=23,T.f(),e.finish(23);case 26:R={},this._requiredFields=[],S=Object(s.a)(o);try{for(S.s();!(D=S.n()).done;)"esriFieldTypeOID"!==(C=D.value).type&&"esriFieldTypeGlobalID"!==C.type&&(C.editable=null==C.editable||!!C.editable,C.nullable=null==C.nullable||!!C.nullable,Z=Object(y.r)(C),C.nullable||void 0!==Z?R[C.name]=Z:this._requiredFields.push(C))}catch(r){S.e(r)}finally{S.f()}if(this._fieldsIndex=new m.a(o),this._createDefaultAttributes=Object(g.a)(R,w),B&&(B.startTimeField&&((A=this._fieldsIndex.get(B.startTimeField))?(B.startTimeField=A.name,A.type="esriFieldTypeDate"):B.startTimeField=null),B.endTimeField&&((L=this._fieldsIndex.get(B.endTimeField))?(B.endTimeField=L.name,L.type="esriFieldTypeDate"):B.endTimeField=null),B.trackIdField&&((Q=this._fieldsIndex.get(B.trackIdField))?B.trackIdField=Q.name:(B.trackIdField=null,n.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:B}}))),B.startTimeField||B.endTimeField||(n.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:B}}),B=null)),G={warnings:n,featureErrors:[],layerDefinition:Object(a.a)(Object(a.a)({},k),{},{drawingInfo:Object(g.c)(j),templates:Object(g.b)(R),extent:b,geometryType:j,objectIdField:w,fields:o,hasZ:!!c,hasM:!!d,timeInfo:B}),assignedObjectIds:{}},this._queryEngine=new I.a({fields:o,geometryType:j,hasM:d,hasZ:c,objectIdField:w,spatialReference:h,featureStore:new _.a({geometryType:j,hasM:d,hasZ:c}),timeInfo:B}),i&&i.length){e.next=34;break}return e.abrupt("return",(this._nextObjectId=1,G));case 34:return z=i.reduce((function(e,t){var n=t.attributes&&t.attributes[w];return null==n||isNaN(n)||!isFinite(n)?e:Math.max(e,n)}),0),this._nextObjectId=1+z,e.next=38,Object(v.a)(i,h);case 38:return e.abrupt("return",this._loadInitialFeatures(G,i));case 39:case"end":return e.stop()}}),e,this,[[8,20,23,26]])})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=Object(u.a)(r.a.mark((function e(t){var n,i,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this._queryEngine,i=n.spatialReference,a=n.geometryType,e.next=3,Object(c.b)([Object(j.c)(i,a),Object(v.a)(t.adds,i),Object(v.a)(t.updates,i)]);case 3:return e.abrupt("return",this._applyEdits(t));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=Object(u.a)(r.a.mark((function e(t){var n,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",this._queryEngine.executeQuery(t,n.signal));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=Object(u.a)(r.a.mark((function e(t){var n,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",this._queryEngine.executeQueryForCount(t,n.signal));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=Object(u.a)(r.a.mark((function e(t){var n,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",this._queryEngine.executeQueryForIds(t,n.signal));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=Object(u.a)(r.a.mark((function e(t){var n,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",this._queryEngine.executeQueryForExtent(t,n.signal));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_inferLayerProperties",value:function(e,t){var n,i,r,a=null,u=null,o=null,d=Object(s.a)(e);try{for(d.s();!(r=d.n()).done;){var l=r.value.geometry;if(l&&(a||(a=Object(h.c)(l)),u||(u=l.spatialReference),null==n&&(n=F(l)),null==i&&(i=w(l)),a&&u&&null!=n&&null!=i))break}}catch(f){d.e(f)}finally{d.f()}if(t&&t.length){var c=null;t.some((function(e){var t="esriFieldTypeOID"===e.type,n=!e.type&&e.name&&"objectid"===e.name.toLowerCase();return c=e,t||n}))&&(o=c.name)}return{geometryType:a,spatialReference:u,objectIdField:o,hasM:i,hasZ:n}}},{key:"_loadInitialFeatures",value:function(e,t){var n,i=this._queryEngine,r=i.geometryType,a=i.hasM,u=i.hasZ,o=i.objectIdField,d=i.spatialReference,l=i.featureStore,c=[],f=Object(s.a)(t);try{for(f.s();!(n=f.n()).done;){var y=n.value;if(null!=y.uid&&(e.assignedObjectIds[y.uid]=-1),y.geometry&&r!==Object(h.c)(y.geometry))e.featureErrors.push(Object(j.a)("Incorrect geometry type."));else{var p=this._createDefaultAttributes(),m=Object(j.d)(this._fieldsIndex,this._requiredFields,p,y.attributes,!0,e.warnings);m?e.featureErrors.push(m):(this._assignObjectId(p,y.attributes,!0),y.attributes=p,null!=y.uid&&(e.assignedObjectIds[y.uid]=y.attributes[o]),y.geometry&&(y.geometry=Object(v.b)(y.geometry,y.geometry.spatialReference,d)),c.push(y))}}}catch(O){f.e(O)}finally{f.f()}if(l.addMany(Object(b.c)([],c,r,u,a,o)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var g=this._queryEngine.timeExtent,_=g.start,I=g.end;e.layerDefinition.timeInfo.timeExtent=[_,I]}return e}},{key:"_applyEdits",value:function(e){var t=e.adds,n=e.updates,i=e.deletes,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),n&&n.length&&this._applyUpdateEdits(r,n),i&&i.length){var a,u=Object(s.a)(i);try{for(u.s();!(a=u.n()).done;){var o=a.value;r.deleteResults.push(Object(j.b)(o))}}catch(d){u.e(d)}finally{u.f()}this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}},{key:"_applyAddEdits",value:function(e,t){var n,i=e.addResults,r=this._queryEngine,a=r.geometryType,u=r.hasM,o=r.hasZ,d=r.objectIdField,l=r.spatialReference,c=r.featureStore,f=[],y=Object(s.a)(t);try{for(y.s();!(n=y.n()).done;){var p=n.value;if(p.geometry&&a!==Object(h.c)(p.geometry))i.push(Object(j.a)("Incorrect geometry type."));else{var m=this._createDefaultAttributes(),g=Object(j.d)(this._fieldsIndex,this._requiredFields,m,p.attributes);if(g)i.push(g);else{if(this._assignObjectId(m,p.attributes),p.attributes=m,null!=p.uid){var _=p.attributes[d];e.uidToObjectId[p.uid]=_}p.geometry&&(p.geometry=Object(v.b)(Object(j.e)(p.geometry,l),p.geometry.spatialReference,l)),f.push(p),i.push(Object(j.b)(p.attributes[d]))}}}}catch(I){y.e(I)}finally{y.f()}c.addMany(Object(b.c)([],f,a,o,u,d))}},{key:"_applyUpdateEdits",value:function(e,t){var n,i=e.updateResults,r=this._queryEngine,a=r.geometryType,u=r.hasM,o=r.hasZ,d=r.objectIdField,l=r.spatialReference,c=r.featureStore,f=Object(s.a)(t);try{for(f.s();!(n=f.n()).done;){var y=n.value,p=y.attributes,m=y.geometry,g=p&&p[d];if(null!=g)if(c.has(g)){var _=Object(b.f)(c.getFeature(g),a,o,u);if(m){if(a!==Object(h.c)(m)){i.push(Object(j.a)("Incorrect geometry type."));continue}_.geometry=Object(v.b)(Object(j.e)(m,l),m.spatialReference,l)}if(p){var I=Object(j.d)(this._fieldsIndex,this._requiredFields,_.attributes,p);if(I){i.push(I);continue}}c.add(Object(b.a)(_,a,o,u,d)),i.push(Object(j.b)(g))}else i.push(Object(j.a)("Feature with object id ".concat(g," missing")));else i.push(Object(j.a)("Identifier field ".concat(d," missing")))}}catch(O){f.e(O)}finally{f.f()}}},{key:"_assignObjectId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this._queryEngine.objectIdField;n&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}]),e}()}}]);
//# sourceMappingURL=41.b23937a8.chunk.js.map