(this["webpackJsonpqp-ampd-app"]=this["webpackJsonpqp-ampd-app"]||[]).push([[60],{1213:function(e,t,n){"use strict";n.r(t),n.d(t,"registerFunctions",(function(){return A}));var a=n(13),r=n(17),i=n(976),l=n(981),c=n(1013),o=n(239),s=n(978),u=n(985),f=n(1078),d=n(1135),b=n(895),y=n(996),m=n(1098),p=n(1137),h=n(1101),O=n(1100),v=n(1102),j=n(1139),g=n(383),F=n(1140),I=n(1160);function E(e,t,n){var a=e.getVariables();if(a.length>0){for(var i=[],l=0;l<a.length;l++){var c={name:a[l]};i.push(t.evaluateIdentifier(n,c))}return Object(r.b)(i).then((function(t){for(var n={},r=0;r<a.length;r++)n[a[r]]=t[r];return e.parameters=n,e}))}return Object(r.s)(e)}function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(var a in e)if(a.toLowerCase()===t.toLowerCase())return e[a];return n}function D(e){if(null===e)return null;var t={type:w(e,"type",""),name:w(e,"name","")};if("range"===t.type)t.range=w(e,"range",[]);else{t.codedValues=[];var n,r=Object(a.a)(w(e,"codedValues",[]));try{for(r.s();!(n=r.n()).done;){var i=n.value;t.codedValues.push({name:w(i,"name",""),code:w(i,"code",null)})}}catch(l){r.e(l)}finally{r.f()}}return t}function N(e){if(null===e)return null;var t={},n=w(e,"wkt",null);null!==n&&(t.wkt=n);var a=w(e,"wkid",null);return null!==a&&(t.wkid=a),t}function x(e){if(null===e)return null;var t={hasZ:w(e,"hasz",!1),hasM:w(e,"hasm",!1)},n=w(e,"spatialreference",null);n&&(t.spatialReference=N(n));var a=w(e,"x",null);if(null!==a)return t.x=a,t.y=w(e,"y",null),t;var r=w(e,"rings",null);if(null!==r)return t.rings=r,t;var i=w(e,"paths",null);if(null!==i)return t.paths=i,t;var l=w(e,"points",null);if(null!==l)return t.points=l,t;for(var c=0,o=["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"];c<o.length;c++){var s=o[c],u=w(e,s,null);null!==u&&(t[s]=u)}return t}function A(e){"async"===e.mode&&(e.functions.getuser=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,a){Object(i.J)(a,1,2);var r=Object(i.c)(a[1],""),o=!0===r;if(r=!0===r||!1===r?"":Object(i.y)(r),a[0]instanceof c.a){var s=null;return t.services&&t.services.portal&&(s=t.services.portal),s=Object(I.getPortal)(a[0],s),Object(I.lookupUser)(s,r,o).then((function(e){if(e){for(var t=JSON.parse(JSON.stringify(e)),n=0,a=["lastLogin","created","modified"];n<a.length;n++){var r=a[n];void 0!==t[r]&&null!==t[r]&&(t[r]=new Date(t[r]))}return l.a.convertObjectToArcadeDictionary(t)}return null}))}var u=null;if(Object(i.T)(a[0])&&(u=a[0]),u)return o=!1,r?null:u.load().then((function(){return u.getOwningSystemUrl()})).then((function(e){if(!e)return r?null:u.getIdentityUser().then((function(e){return e?l.a.convertObjectToArcadeDictionary({username:e}):null}));var n=null;return t.services&&t.services.portal&&(n=t.services.portal),n=Object(I.getPortal)(new c.a(e),n),Object(I.lookupUser)(n,r,o).then((function(e){if(e){for(var t=JSON.parse(JSON.stringify(e)),n=0,a=["lastLogin","created","modified"];n<a.length;n++){var r=a[n];void 0!==t[r]&&null!==t[r]&&(t[r]=new Date(t[r]))}return l.a.convertObjectToArcadeDictionary(t)}return null}))}));throw new Error("Invalid Parameter")}))},e.signatures.push({name:"getuser",min:"1",max:"2"}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(Object(i.J)(n,2,4),n[0]instanceof d.a){var a=Object(i.y)(n[1]),r=Object(i.c)(n[2],null),l=Object(i.x)(Object(i.c)(n[3],!0));if(null===r&&(r=["*"]),!1===Object(i.B)(r))throw new Error("Invalid Parameter");return n[0].featureSetById(a,l,r)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,a){if(Object(i.J)(a,2,5),null===a[0])throw new Error("Portal is required");if(a[0]instanceof c.a){var r=Object(i.y)(a[1]),l=Object(i.y)(a[2]),o=Object(i.c)(a[3],null),s=Object(i.x)(Object(i.c)(a[4],!0));if(null===o&&(o=["*"]),!1===Object(i.B)(o))throw new Error("Invalid Parameter");var u=null;return t.services&&t.services.portal&&(u=t.services.portal),u=Object(I.getPortal)(a[0],u),Object(I.constructFeatureSetFromPortalItem)(r,l,t.spatialReference,o,s,u,t.lrucache)}if(!1===Object(i.v)(a[0]))throw new Error("Portal is required");var f=Object(i.y)(a[0]),d=Object(i.y)(a[1]),b=Object(i.c)(a[2],null),y=Object(i.x)(Object(i.c)(a[3],!0));if(null===b&&(b=["*"]),!1===Object(i.B)(b))throw new Error("Invalid Parameter");if(t.services&&t.services.portal)return Object(I.constructFeatureSetFromPortalItem)(f,d,t.spatialReference,b,y,t.services.portal,t.lrucache);throw new Error("Portal is required")}))},e.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(Object(i.J)(n,2,4),n[0]instanceof d.a){var a=Object(i.y)(n[1]),r=Object(i.c)(n[2],null),l=Object(i.x)(Object(i.c)(n[3],!0));if(null===r&&(r=["*"]),!1===Object(i.B)(r))throw new Error("Invalid Parameter");return n[0].featureSetByName(a,l,r)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,(function(e,n,r){Object(i.J)(r,1,1);var c,o=r[0],s={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(Object(i.v)(o))void 0!==(o=JSON.parse(o)).layerDefinition?(s.layerDefinition=o.layerDefinition,s.featureSet=o.featureSet,o.layerDefinition.spatialReference&&(s.layerDefinition.spatialReference=o.layerDefinition.spatialReference)):(s.featureSet.features=o.features,s.featureSet.geometryType=o.geometryType,s.layerDefinition.geometryType=s.featureSet.geometryType,s.layerDefinition.objectIdField=o.objectIdFieldName,s.layerDefinition.typeIdField=o.typeIdFieldName,s.layerDefinition.globalIdField=o.globalIdFieldName,s.layerDefinition.fields=o.fields,o.spatialReference&&(s.layerDefinition.spatialReference=o.spatialReference));else{if(!(r[0]instanceof l.a))throw new Error("Invalid Parameter");var u=w(o=JSON.parse(r[0].castToText()),"layerdefinition");if(null!==u){s.layerDefinition.geometryType=w(u,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.globalIdField=w(u,"globalidfield",""),s.layerDefinition.objectIdField=w(u,"objectidfield",""),s.layerDefinition.typeIdField=w(u,"typeidfield","");var f=w(u,"spatialreference",null);f&&(s.layerDefinition.spatialReference=N(f));var d,b=Object(a.a)(w(u,"fields",[]));try{for(b.s();!(d=b.n()).done;){var y=d.value,m={name:w(y,"name",""),alias:w(y,"alias",""),type:w(y,"type",""),nullable:w(y,"nullable",!0),editable:w(y,"editable",!0),length:w(y,"length",null),domain:D(w(y,"domain"))};s.layerDefinition.fields.push(m)}}catch(q){b.e(q)}finally{b.f()}var p=w(o,"featureset",null);if(p){var h,O={},v=Object(a.a)(s.layerDefinition.fields);try{for(v.s();!(h=v.n()).done;){var j=h.value;O[j.name.toLowerCase()]=j.name}}catch(q){v.e(q)}finally{v.f()}var g,I=Object(a.a)(w(p,"features",[]));try{for(I.s();!(g=I.n()).done;){var E=g.value,A={},S=w(E,"attributes",{});for(var T in S)A[O[T.toLowerCase()]]=S[T];s.featureSet.features.push({attributes:A,geometry:x(w(E,"geometry",null))})}}catch(q){I.e(q)}finally{I.f()}}}else{s.layerDefinition.geometryType=w(o,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.objectIdField=w(o,"objectidfieldname",""),s.layerDefinition.typeIdField=w(o,"typeidfieldname","");var L=w(o,"spatialreference",null);L&&(s.layerDefinition.spatialReference=N(L));var C,R=Object(a.a)(w(o,"fields",[]));try{for(R.s();!(C=R.n()).done;){var B=C.value,P={name:w(B,"name",""),alias:w(B,"alias",""),type:w(B,"type",""),nullable:w(B,"nullable",!0),editable:w(B,"editable",!0),length:w(B,"length",null),domain:D(w(B,"domain"))};s.layerDefinition.fields.push(P)}}catch(q){R.e(q)}finally{R.f()}var W,k={},J=Object(a.a)(s.layerDefinition.fields);try{for(J.s();!(W=J.n()).done;){var M=W.value;k[M.name.toLowerCase()]=M.name}}catch(q){J.e(q)}finally{J.f()}var G,V=Object(a.a)(w(o,"features",[]));try{for(V.s();!(G=V.n()).done;){var H=G.value,z={},U=w(H,"attributes",{});for(var _ in U)z[k[_.toLowerCase()]]=U[_];s.featureSet.features.push({attributes:z,geometry:x(w(H,"geometry",null))})}}catch(q){V.e(q)}finally{V.f()}}}if(0==(!!(c=s).layerDefinition&&!!c.featureSet&&!1!==function(e,t){var n,r=Object(a.a)(["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"]);try{for(r.s();!(n=r.n()).done;){if(n.value===e)return!0}}catch(q){r.e(q)}finally{r.f()}return!1}(c.layerDefinition.geometryType)&&null!==c.layerDefinition.objectIdField&&""!==c.layerDefinition.objectIdField&&!1!==Object(i.B)(c.layerDefinition.fields)&&!1!==Object(i.B)(c.featureSet.features)))throw new Error("Invalid Parameter");return F.a.create(s,t.spatialReference)}))},e.signatures.push({name:"featureset",min:"1",max:"1"}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,(function(n,a,l){return Object(i.J)(l,2,2),Object(i.T)(l[0])?l[0].load().then((function(n){var a=b.WhereClause.create(l[1],n.getFieldsIndex()),i=a.getVariables();if(i.length>0){for(var c=[],o=0;o<i.length;o++){var s={name:i[o]};c.push(e.evaluateIdentifier(t,s))}return Object(r.b)(c).then((function(e){for(var t={},n=0;n<i.length;n++)t[i[n]]=e[n];return a.parameters=t,new m.a({parentfeatureset:l[0],whereclause:a})}))}return Object(r.s)(new m.a({parentfeatureset:l[0],whereclause:a}))})):e.failDefferred("Filter cannot accept this parameter type")}))},e.signatures.push({name:"filter",min:"2",max:"2"}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,(function(t,n,a){if(Object(i.J)(a,2,2),Object(i.T)(a[0])){var l=new h.a(a[1]);return Object(r.s)(new O.a({parentfeatureset:a[0],orderbyclause:l}))}return e.failDefferred("Order cannot accept this parameter type")}))},e.signatures.push({name:"orderby",min:"2",max:"2"}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,(function(t,n,a){return Object(i.J)(a,2,2),Object(i.T)(a[0])?Object(r.s)(new j.a({parentfeatureset:a[0],topnum:a[1]})):Object(i.B)(a[0])?Object(i.w)(a[1])>=a[0].length?a[0].slice(0):a[0].slice(0,Object(i.w)(a[1])):Object(i.I)(a[0])?Object(i.w)(a[1])>=a[0].length()?a[0].slice(0):a[0].slice(0,Object(i.w)(a[1])):e.failDefferred("Top cannot accept this parameter type")}))},e.signatures.push({name:"top",min:"2",max:"2"}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return Object(i.J)(n,1,1),Object(i.T)(n[0])?n[0].first(e.abortSignal).then((function(e){if(null!==e){var t=u.a.createFromGraphicLikeObject(e.geometry,e.attributes,n[0]);t._underlyingGraphic=e,e=t}return e})):Object(i.B)(n[0])?0===n[0].length?Object(r.s)(null):Object(r.s)(n[0][0]):Object(i.I)(n[0])?0===n[0].length()?Object(r.s)(null):Object(r.s)(n[0].get(0)):null}))},e.signatures.push({name:"first",min:"1",max:"1"}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,a){Object(i.J)(a,1,2);var r={minsize:-1,maxsize:-1,types:null};if(a.length>1)if(a[1]instanceof l.a){if(a[1].hasField("minsize")&&(r.minsize=Object(i.w)(a[1].field("minsize"))),a[1].hasField("maxsize")&&(r.maxsize=Object(i.w)(a[1].field("maxsize"))),a[1].hasField("types")){var c=Object(i.t)(a[1].field("types"),!1);c.length>0&&(r.types=c)}}else if(null!==a[1])throw new Error("Invalid Parameter");if(a[0]instanceof u.a){var o=a[0]._layer;return o instanceof g.default&&(o=Object(I.constructFeatureSet)(o,t.spatialReference,["*"],!0,t.lrucache)),null===o||!1===Object(i.T)(o)?[]:o.load().then((function(){return o.queryAttachments(a[0].field(o.objectIdField),r.minsize,r.maxsize,r.types)}))}if(null===a[0])return[];throw new Error("Invalid Parameter")}))},e.signatures.push({name:"attachments",min:"1",max:"2"}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,a){Object(i.J)(a,2,4);var r=a[0],l=Object(i.y)(a[1]),c=Object(i.c)(a[2],null),o=Object(i.x)(Object(i.c)(a[3],!0));if(null===c&&(c=["*"]),!1===Object(i.B)(c))throw new Error("Invalid Parameter");if(null===a[0])return null;if(!(a[0]instanceof u.a))throw new Error("Invalid Parameter");var s=r._layer;return s instanceof g.default&&(s=Object(I.constructFeatureSet)(s,t.spatialReference,["*"],!0,t.lrucache)),null===s||!1===Object(i.T)(s)?null:s.load().then((function(e){var n=e.relationshipMetaData().filter((function(e){return e.name===l}));if(0===n.length)return null;if(void 0!==n[0].relationshipTableId&&null!==n[0].relationshipTableId&&n[0].relationshipTableId>-1)return Object(I.constructFeatureSetFromRelationship)(e,n[0],r.field(e.objectIdField),e.spatialReference,c,o,t.lrucache);var a=e.serviceUrl();return a?(a="/"===a.charAt(a.length-1)?a+n[0].relatedTableId.toString():a+"/"+n[0].relatedTableId.toString(),Object(I.constructFeatureSetFromUrl)(a,e.spatialReference,c,o,t.lrucache).then((function(t){return t.load().then((function(){return t.relationshipMetaData()})).then((function(a){if(a=a.filter((function(e){return e.id===n[0].id})),!1===r.hasField(n[0].keyField)||null===r.field(n[0].keyField))return e.getFeatureByObjectId(r.field(e.objectIdField),[n[0].keyField]).then((function(e){if(e){var r=b.WhereClause.create(a[0].keyField+"= @id",t.getFieldsIndex());return r.parameters={id:e.attributes[n[0].keyField]},t.filter(r)}return new v.a({parentfeatureset:t})}));var i=b.WhereClause.create(a[0].keyField+"= @id",t.getFieldsIndex());return i.parameters={id:r.field(n[0].keyField)},t.filter(i)}))}))):null}))}))},e.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){Object(i.J)(r,2,3);var l=r[0],c=Object(i.y)(Object(i.c)(r[1],"")).toLowerCase(),f=Object(i.v)(r[2])?Object(i.y)(r[2]):null;if(null===r[0])return null;if(!(r[0]instanceof u.a))throw new Error("Invalid Parameter");var d=l._layer;return d instanceof g.default&&(d=Object(I.constructFeatureSet)(d,t.spatialReference,["*"],!0,t.lrucache)),null===d||!1===Object(i.T)(d)?null:d.load().then((function(){var e=d.serviceUrl();return Object(I.constructAssociationMetaDataFeatureSetFromUrl)(e,t.spatialReference)})).then((function(e){var t=null,n=null,r=!1;if(null!==f&&""!==f&&void 0!==f){var u,y=Object(a.a)(e.terminals);try{for(y.s();!(u=y.n()).done;){var m=u.value;m.terminalName===f&&(n=m.terminalId)}}catch(z){y.e(z)}finally{y.f()}null===n&&(r=!0)}var h,O=e.associations.getFieldsIndex(),v=O.get("TOGLOBALID").name,j=O.get("FROMGLOBALID").name,g=O.get("TOTERMINALID").name,F=O.get("FROMTERMINALID").name,I=O.get("FROMNETWORKSOURCEID").name,E=O.get("TONETWORKSOURCEID").name,w=O.get("ASSOCIATIONTYPE").name,D=O.get("ISCONTENTVISIBLE").name,N=O.get("OBJECTID").name,x=Object(a.a)(d.fields);try{for(x.s();!(h=x.n()).done;){var A=h.value;if("global-id"===A.type){t=l.field(A.name);break}}}catch(z){x.e(z)}finally{x.f()}var S=null,T=new p.d(new o.a({name:"percentalong",alias:"percentalong",type:"double"}),b.WhereClause.create("0",e.associations.getFieldsIndex())),L=new p.d(new o.a({name:"side",alias:"side",type:"string"}),b.WhereClause.create("''",e.associations.getFieldsIndex())),C="globalid",R="globalId",B={};for(var P in e.lkp)B[P]=e.lkp[P].sourceId;var W=new p.e(new o.a({name:"classname",alias:"classname",type:"string"}),null,B),k="";switch(c){case"midspan":k="((".concat(v,"='").concat(t,"') OR ( ").concat(j,"='").concat(t,"')) AND (").concat(w," IN (5))"),W.codefield=b.WhereClause.create("CASE WHEN (".concat(v,"='").concat(t,"') THEN ").concat(I," ELSE ").concat(E," END"),e.associations.getFieldsIndex());var J=Object(s.c)(p.a.findField(e.associations.fields,j));J.name=C,J.alias=C,S=new p.d(J,b.WhereClause.create("CASE WHEN (".concat(j,"='").concat(t,"') THEN ").concat(v," ELSE ").concat(j," END"),e.associations.getFieldsIndex())),T=e.unVersion>=4?new p.c(p.a.findField(e.associations.fields,O.get("PERCENTALONG").name)):new p.d(new o.a({name:"percentalong",alias:"percentalong",type:"double"}),b.WhereClause.create("0",e.associations.getFieldsIndex()));break;case"junctionedge":k="((".concat(v,"='").concat(t,"') OR ( ").concat(j,"='").concat(t,"')) AND (").concat(w," IN (4,6))"),W.codefield=b.WhereClause.create("CASE WHEN (".concat(v,"='").concat(t,"') THEN ").concat(I," ELSE ").concat(E," END"),e.associations.getFieldsIndex());var M=Object(s.c)(p.a.findField(e.associations.fields,j));M.name=C,M.alias=C,S=new p.d(M,b.WhereClause.create("CASE WHEN (".concat(j,"='").concat(t,"') THEN ").concat(v," ELSE ").concat(j," END"),e.associations.getFieldsIndex())),L=new p.d(new o.a({name:"side",alias:"side",type:"string"}),b.WhereClause.create("CASE WHEN (".concat(w,"=4) THEN 'from' ELSE 'to' END"),e.associations.getFieldsIndex()));break;case"connected":var G="".concat(v,"='@T'"),V="".concat(j,"='@T'");null!==n&&(G+=" AND ".concat(g,"=@A"),V+=" AND ".concat(F,"=@A")),k="(("+G+") OR ("+V+"))",k=Object(i.g)(k,"@T",t),G=Object(i.g)(G,"@T",t),null!==n&&(G=Object(i.g)(G,"@A",n.toString()),k=Object(i.g)(k,"@A",n.toString())),W.codefield=b.WhereClause.create("CASE WHEN "+G+" THEN ".concat(I," ELSE ").concat(E," END"),e.associations.getFieldsIndex());var H=Object(s.c)(p.a.findField(e.associations.fields,j));H.name=C,H.alias=C,S=new p.d(H,b.WhereClause.create("CASE WHEN "+G+" THEN ".concat(j," ELSE ").concat(v," END"),e.associations.getFieldsIndex()));break;case"container":k="".concat(v,"='").concat(t,"' AND ").concat(w," = 2"),null!==n&&(k+=" AND ".concat(g," = ")+n.toString()),W.codefield=I,k="( "+k+" )",S=new p.b(p.a.findField(e.associations.fields,j),C,C);case"content":k="(".concat(j,"='").concat(t,"' AND ").concat(w," = 2)"),null!==n&&(k+=" AND ".concat(F," = ")+n.toString()),W.codefield=E,k="( "+k+" )",S=new p.b(p.a.findField(e.associations.fields,v),C,C);break;case"structure":k="(".concat(v,"='").concat(t,"' AND ").concat(w," = 3)"),null!==n&&(k+=" AND ".concat(g," = ")+n.toString()),W.codefield=I,k="( "+k+" )",S=new p.b(p.a.findField(e.associations.fields,j),C,R);break;case"attached":k="(".concat(j,"='").concat(t,"' AND ").concat(w," = 3)"),null!==n&&(k+=" AND ".concat(F," = ")+n.toString()),W.codefield=E,k="( "+k+" )",S=new p.b(p.a.findField(e.associations.fields,v),C,R);break;default:throw new Error("Invalid Parameter")}return r&&(k="1 <> 1"),new p.a({parentfeatureset:e.associations,adaptedFields:[new p.c(p.a.findField(e.associations.fields,N)),new p.c(p.a.findField(e.associations.fields,D)),S,L,W,T],extraFilter:k?b.WhereClause.create(k,e.associations.getFieldsIndex()):null})}))}))},e.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,(function(n,c,o){return Object(i.J)(o,3,3),Object(i.T)(o[0])?o[0].load().then((function(n){var c=[],s=[],u=!1,f=[];if(Object(i.v)(o[1]))f.push(o[1]);else if(o[1]instanceof l.a)f.push(o[1]);else if(Object(i.B)(o[1]))f=o[1];else{if(!Object(i.I)(o[1]))return e.failDefferred("Illegal Value: GroupBy");f=o[1].toArray()}var d,m=Object(a.a)(f);try{for(m.s();!(d=m.n()).done;){var p=d.value;if(Object(i.v)(p)){var h=b.WhereClause.create(Object(i.y)(p),n.getFieldsIndex()),O=!0===Object(y.c)(h)?Object(i.y)(p):"%%%%FIELDNAME";c.push({name:O,expression:h}),"%%%%FIELDNAME"===O&&(u=!0)}else{if(!(p instanceof l.a))return e.failDefferred("Illegal Value: GroupBy");var v=p.hasField("name")?p.field("name"):"%%%%FIELDNAME",j=p.hasField("expression")?p.field("expression"):"";if("%%%%FIELDNAME"===v&&(u=!0),!v)return e.failDefferred("Illegal Value: GroupBy");c.push({name:v,expression:b.WhereClause.create(j||v,n.getFieldsIndex())})}}}catch(K){m.e(K)}finally{m.f()}if(f=[],Object(i.v)(o[2]))f.push(o[2]);else if(Object(i.B)(o[2]))f=o[2];else if(Object(i.I)(o[2]))f=o[2].toArray();else{if(!(o[2]instanceof l.a))return e.failDefferred("Illegal Value: GroupBy");f.push(o[2])}var g,F=Object(a.a)(f);try{for(F.s();!(g=F.n()).done;){var I=g.value;if(!(I instanceof l.a))return e.failDefferred("Illegal Value: GroupBy");var w=I.hasField("name")?I.field("name"):"",D=I.hasField("statistic")?I.field("statistic"):"",N=I.hasField("expression")?I.field("expression"):"";if(!w||!D||!N)return e.failDefferred("Illegal Value: GroupBy");s.push({name:w,statistic:D.toLowerCase(),expression:b.WhereClause.create(N,n.getFieldsIndex())})}}catch(K){F.e(K)}finally{F.f()}if(u){var x,A={},S=Object(a.a)(n.fields);try{for(S.s();!(x=S.n()).done;){A[x.value.name.toLowerCase()]=1}}catch(K){S.e(K)}finally{S.f()}var T,L=Object(a.a)(c);try{for(L.s();!(T=L.n()).done;){var C=T.value;"%%%%FIELDNAME"!==C.name&&(A[C.name.toLowerCase()]=1)}}catch(K){L.e(K)}finally{L.f()}var R,B=Object(a.a)(s);try{for(B.s();!(R=B.n()).done;){var P=R.value;"%%%%FIELDNAME"!==P.name&&(A[P.name.toLowerCase()]=1)}}catch(K){B.e(K)}finally{B.f()}var W,k=0,J=Object(a.a)(c);try{for(J.s();!(W=J.n()).done;){var M=W.value;if("%%%%FIELDNAME"===M.name){for(;1===A["field_"+k.toString()];)k++;A["field_"+k.toString()]=1,M.name="FIELD_"+k.toString()}}}catch(K){J.e(K)}finally{J.f()}}for(var G=[],V=0,H=c;V<H.length;V++){var z=H[V];G.push(E(z.expression,e,t))}for(var U=0,_=s;U<_.length;U++){var q=_[U];G.push(E(q.expression,e,t))}return G.length>0?Object(r.b)(G).then((function(){return Object(r.s)(o[0].groupby(c,s))})):Object(r.s)(o[0].groupby(c,s))})):e.failDefferred("Illegal Value: GroupBy")}))},e.signatures.push({name:"groupby",min:"3",max:"3"}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,(function(n,c,o){return Object(i.T)(o[0])?(Object(i.J)(o,2,2),o[0].load().then((function(n){var c=[],s=[];if(Object(i.v)(o[1]))s.push(o[1]);else if(o[1]instanceof l.a)s.push(o[1]);else if(Object(i.B)(o[1]))s=o[1];else{if(!Object(i.I)(o[1]))return e.failDefferred("Illegal Value: GroupBy");s=o[1].toArray()}var u,f=!1,d=Object(a.a)(s);try{for(d.s();!(u=d.n()).done;){var m=u.value;if(Object(i.v)(m)){var p=b.WhereClause.create(Object(i.y)(m),n.getFieldsIndex()),h=!0===Object(y.c)(p)?Object(i.y)(m):"%%%%FIELDNAME";c.push({name:h,expression:p}),"%%%%FIELDNAME"===h&&(f=!0)}else{if(!(m instanceof l.a))return e.failDefferred("Illegal Value: GroupBy");var O=m.hasField("name")?m.field("name"):"%%%%FIELDNAME",v=m.hasField("expression")?m.field("expression"):"";if("%%%%FIELDNAME"===O&&(f=!0),!O)return e.failDefferred("Illegal Value: GroupBy");c.push({name:O,expression:b.WhereClause.create(v||O,n.getFieldsIndex())})}}}catch(B){d.e(B)}finally{d.f()}if(f){var j,g={},F=Object(a.a)(n.fields);try{for(F.s();!(j=F.n()).done;){g[j.value.name.toLowerCase()]=1}}catch(B){F.e(B)}finally{F.f()}var I,w=Object(a.a)(c);try{for(w.s();!(I=w.n()).done;){var D=I.value;"%%%%FIELDNAME"!==D.name&&(g[D.name.toLowerCase()]=1)}}catch(B){w.e(B)}finally{w.f()}var N,x=0,A=Object(a.a)(c);try{for(A.s();!(N=A.n()).done;){var S=N.value;if("%%%%FIELDNAME"===S.name){for(;1===g["field_"+x.toString()];)x++;g["field_"+x.toString()]=1,S.name="FIELD_"+x.toString()}}}catch(B){A.e(B)}finally{A.f()}}for(var T=[],L=0,C=c;L<C.length;L++){var R=C[L];T.push(E(R.expression,e,t))}return T.length>0?Object(r.b)(T).then((function(){return Object(r.s)(o[0].groupby(c,[]))})):Object(r.s)(o[0].groupby(c,[]))}))):function(e,t,n,a){if(1===a.length){if(Object(i.B)(a[0]))return Object(f.a)(e,a[0],-1);if(Object(i.I)(a[0]))return Object(f.a)(e,a[0].toArray(),-1)}return Object(f.a)(e,a,-1)}("distinct",0,0,o)}))})}}}]);
//# sourceMappingURL=60.405e4ae3.chunk.js.map