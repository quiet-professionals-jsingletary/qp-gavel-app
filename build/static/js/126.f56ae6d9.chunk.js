(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[126],{1259:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return n}));var a=i(14),n=1;function r(e,t){var i,n=0,r=Object(a.a)(t);try{for(r.s();!(i=r.n()).done;){var s,l=null==(s=i.value.attributes)?void 0:s[e];"number"==typeof l&&isFinite(l)&&(n=Math.max(n,l))}}catch(u){r.e(u)}finally{r.f()}return n}},1347:function(e,t,i){"use strict";i.r(t);var a=i(7),n=i.n(a),r=i(10),s=i(14),l=i(15),u=i(2),d=i(3),c=i(18),o=i(59),p=i(68),f=i(54),y=i(625),h=i(559),b=i(464),m=i(1259),g=i(1150),v=i(1077),j=i(1158),O=i(1170),I=i(1305),F=o.a,_={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:o.a},x={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function E(e){return Object(p.f)(e)?null!=e.z:!!e.hasZ}function q(e){return Object(p.f)(e)?null!=e.m:!!e.hasM}var T=function(){function e(){Object(u.a)(this,e),this._queryEngine=null,this._nextObjectId=null}return Object(d.a)(e,[{key:"destroy",value:function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}},{key:"load",value:function(){var e=Object(l.a)(n.a.mark((function e(t){var i,a,l,u,d,o,p,h,I,E,q,T,k,R,w,D,M,S,Q,Z,A,C,P,G,z,L,W;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=[],a=t.features,l=this._inferLayerProperties(a,t.fields),u=t.fields||[],d=null!=t.hasM?t.hasM:l.hasM,o=null!=t.hasZ?t.hasZ:l.hasZ,p=!t.spatialReference&&!l.spatialReference,h=p?F:t.spatialReference||l.spatialReference,I=p?_:null,E=t.geometryType||l.geometryType,q=!E,T=t.objectIdField||l.objectIdField,k=t.timeInfo,q||(p&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),E)){e.next=4;break}throw new c.a("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");case 4:if(T){e.next=6;break}throw new c.a("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");case 6:l.objectIdField&&T!==l.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'.concat(T,'" doesn\'t match the field name "').concat(l.objectIdField,'", found in the provided fields')}),T=l.objectIdField),T&&!l.objectIdField&&(R=null,u.some((function(e){return e.name===T&&(R=e,!0)}))?(R.type="esriFieldTypeOID",R.editable=!1,R.nullable=!1):u.unshift({alias:T,name:T,type:"esriFieldTypeOID",editable:!1,nullable:!1})),w=Object(s.a)(u),e.prev=8,w.s();case 10:if((D=w.n()).done){e.next=18;break}if(null==(M=D.value).name&&(M.name=M.alias),null==M.alias&&(M.alias=M.name),M.name){e.next=14;break}throw new c.a("feature-layer:invalid-field-name","field name is missing",{field:M});case 14:if(M.name===T&&(M.type="esriFieldTypeOID"),-1!==y.a.jsonValues.indexOf(M.type)){e.next=16;break}throw new c.a("feature-layer:invalid-field-type",'invalid type for field "'.concat(M.name,'"'),{field:M});case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),w.e(e.t0);case 23:return e.prev=23,w.f(),e.finish(23);case 26:S={},this._requiredFields=[],Q=Object(s.a)(u);try{for(Q.s();!(Z=Q.n()).done;)"esriFieldTypeOID"!==(A=Z.value).type&&"esriFieldTypeGlobalID"!==A.type&&(A.editable=null==A.editable||!!A.editable,A.nullable=null==A.nullable||!!A.nullable,C=Object(f.r)(A),A.nullable||void 0!==C?S[A.name]=C:this._requiredFields.push(A))}catch(n){Q.e(n)}finally{Q.f()}if(this._fieldsIndex=new b.a(u),this._createDefaultAttributes=Object(g.a)(S,T),k&&(k.startTimeField&&((P=this._fieldsIndex.get(k.startTimeField))?(k.startTimeField=P.name,P.type="esriFieldTypeDate"):k.startTimeField=null),k.endTimeField&&((G=this._fieldsIndex.get(k.endTimeField))?(k.endTimeField=G.name,G.type="esriFieldTypeDate"):k.endTimeField=null),k.trackIdField&&((z=this._fieldsIndex.get(k.trackIdField))?k.trackIdField=z.name:(k.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:k}}))),k.startTimeField||k.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:k}}),k=null)),L={warnings:i,featureErrors:[],layerDefinition:Object(r.a)(Object(r.a)({},x),{},{drawingInfo:Object(g.c)(E),templates:Object(g.b)(S),extent:I,geometryType:E,objectIdField:T,fields:u,hasZ:!!o,hasM:!!d,timeInfo:k}),assignedObjectIds:{}},this._queryEngine=new O.a({fields:u,geometryType:E,hasM:d,hasZ:o,objectIdField:T,spatialReference:h,featureStore:new j.a({geometryType:E,hasM:d,hasZ:o}),timeInfo:k,cacheSpatialQueries:!0}),a&&a.length){e.next=34;break}return e.abrupt("return",(this._nextObjectId=m.b,L));case 34:return W=Object(m.a)(T,a),this._nextObjectId=W+1,e.next=38,Object(v.a)(a,h);case 38:return e.abrupt("return",this._loadInitialFeatures(L,a));case 39:case"end":return e.stop()}}),e,this,[[8,20,23,26]])})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=Object(l.a)(n.a.mark((function e(t){var i,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this._queryEngine,a=i.spatialReference,r=i.geometryType,e.next=3,Promise.all([Object(I.c)(a,r),Object(v.a)(t.adds,a),Object(v.a)(t.updates,a)]);case 3:return e.abrupt("return",this._applyEdits(t));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}},{key:"queryFeatureCount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}},{key:"queryObjectIds",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}},{key:"queryExtent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}},{key:"querySnapping",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}},{key:"_inferLayerProperties",value:function(e,t){var i,a,n,r=null,l=null,u=null,d=Object(s.a)(e);try{for(d.s();!(n=d.n()).done;){var c=n.value.geometry;if(c&&(r||(r=Object(p.c)(c)),l||(l=c.spatialReference),null==i&&(i=E(c)),null==a&&(a=q(c)),r&&l&&null!=i&&null!=a))break}}catch(f){d.e(f)}finally{d.f()}if(t&&t.length){var o=null;t.some((function(e){var t="esriFieldTypeOID"===e.type,i=!e.type&&e.name&&"objectid"===e.name.toLowerCase();return o=e,t||i}))&&(u=o.name)}return{geometryType:r,spatialReference:l,objectIdField:u,hasM:a,hasZ:i}}},{key:"_loadInitialFeatures",value:function(e,t){var i,a=this._queryEngine,n=a.geometryType,r=a.hasM,l=a.hasZ,u=a.objectIdField,d=a.spatialReference,c=a.featureStore,o=[],f=Object(s.a)(t);try{for(f.s();!(i=f.n()).done;){var y=i.value;if(null!=y.uid&&(e.assignedObjectIds[y.uid]=-1),y.geometry&&n!==Object(p.c)(y.geometry))e.featureErrors.push(Object(I.a)("Incorrect geometry type."));else{var b=this._createDefaultAttributes(),m=Object(I.d)(this._fieldsIndex,this._requiredFields,b,y.attributes,!0,e.warnings);m?e.featureErrors.push(m):(this._assignObjectId(b,y.attributes,!0),y.attributes=b,null!=y.uid&&(e.assignedObjectIds[y.uid]=y.attributes[u]),y.geometry&&(y.geometry=Object(v.b)(y.geometry,y.geometry.spatialReference,d)),o.push(y))}}}catch(F){f.e(F)}finally{f.f()}if(c.addMany(Object(h.c)([],o,n,l,r,u)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var g=this._queryEngine.timeExtent,j=g.start,O=g.end;e.layerDefinition.timeInfo.timeExtent=[j,O]}return e}},{key:"_applyEdits",value:function(e){var t=e.adds,i=e.updates,a=e.deletes,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),a&&a.length){var r,l=Object(s.a)(a);try{for(l.s();!(r=l.n()).done;){var u=r.value;n.deleteResults.push(Object(I.b)(u))}}catch(d){l.e(d)}finally{l.f()}this._queryEngine.featureStore.removeManyById(a)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}},{key:"_applyAddEdits",value:function(e,t){var i,a=e.addResults,n=this._queryEngine,r=n.geometryType,l=n.hasM,u=n.hasZ,d=n.objectIdField,c=n.spatialReference,o=n.featureStore,f=[],y=Object(s.a)(t);try{for(y.s();!(i=y.n()).done;){var b=i.value;if(b.geometry&&r!==Object(p.c)(b.geometry))a.push(Object(I.a)("Incorrect geometry type."));else{var m=this._createDefaultAttributes(),g=Object(I.d)(this._fieldsIndex,this._requiredFields,m,b.attributes);if(g)a.push(g);else{if(this._assignObjectId(m,b.attributes),b.attributes=m,null!=b.uid){var j=b.attributes[d];e.uidToObjectId[b.uid]=j}b.geometry&&(b.geometry=Object(v.b)(Object(I.e)(b.geometry,c),b.geometry.spatialReference,c)),f.push(b),a.push(Object(I.b)(b.attributes[d]))}}}}catch(O){y.e(O)}finally{y.f()}o.addMany(Object(h.c)([],f,r,u,l,d))}},{key:"_applyUpdateEdits",value:function(e,t){var i,a=e.updateResults,n=this._queryEngine,r=n.geometryType,l=n.hasM,u=n.hasZ,d=n.objectIdField,c=n.spatialReference,o=n.featureStore,f=Object(s.a)(t);try{for(f.s();!(i=f.n()).done;){var y=i.value,b=y.attributes,m=y.geometry,g=b&&b[d];if(null!=g)if(o.has(g)){var j=Object(h.i)(o.getFeature(g),r,u,l);if(m){if(r!==Object(p.c)(m)){a.push(Object(I.a)("Incorrect geometry type."));continue}j.geometry=Object(v.b)(Object(I.e)(m,c),m.spatialReference,c)}if(b){var O=Object(I.d)(this._fieldsIndex,this._requiredFields,j.attributes,b);if(O){a.push(O);continue}}o.add(Object(h.a)(j,r,u,l,d)),a.push(Object(I.b)(g))}else a.push(Object(I.a)("Feature with object id ".concat(g," missing")));else a.push(Object(I.a)("Identifier field ".concat(d," missing")))}}catch(F){f.e(F)}finally{f.f()}}},{key:"_assignObjectId",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=this._queryEngine.objectIdField;i&&t&&isFinite(t[a])?e[a]=t[a]:e[a]=this._nextObjectId++}}]),e}();t.default=T}}]);
//# sourceMappingURL=126.f56ae6d9.chunk.js.map