self.webpackChunkRemoteClient([154],{551:function(e,t,n){"use strict";n.r(t),n.d(t,"executeScript",(function(){return $})),n.d(t,"extend",(function(){return Q})),n.d(t,"extractFieldLiterals",(function(){return ee})),n.d(t,"findFunctionCalls",(function(){return ce})),n.d(t,"functionHelper",(function(){return X})),n.d(t,"referencesFunction",(function(){return re})),n.d(t,"referencesMember",(function(){return ne})),n.d(t,"validateScript",(function(){return te}));var r=n(2),c=n(56),a=n(112),o=n(64),l=n(57),i=n(140),s=n(108),u=n(102),f=n(459),b=n(324),h=n(390),O=n(107),d=n(198),p=n(349),j=n(325),g=n(87),w=n(235),E=n(348),y=n(460),v=n(461),m=n(462),I=n(464),N=n(465),S=n(490),T=n(539);function R(e){return e instanceof Error?Object(r.r)(e):Object(r.r)(new Error(e))}function P(e){return Object(r.s)(e)}function C(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(M(e,t.arguments[r]));return Object(r.b)(n)}function U(e,t,n){return Object(r.c)((r,c)=>{C(e,t).then(a=>{try{r(n(e,t,a))}catch(e){c(e)}},c)})}function A(e,t,n){try{return C(e,t).then(c=>{try{const o=n(e,t,c);return(a=o)&&"function"==typeof a.then?o:Object(r.s)(o)}catch(e){return R(e)}var a})}catch(e){return R(e)}}function M(e,t){try{switch(t.type){case"VariableDeclarator":return function(e,t){try{let n=null;return n=null===t.init?Object(r.s)(null):M(e,t.init),null!==e.localScope?n.then(n=>Object(r.c)(r=>{if(n===O.P&&(n=null),"Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const c=t.id.name.toLowerCase();e.localScope[c]={value:n,valueset:!0,node:t.init},r(O.P)})):n.then(n=>Object(r.c)(r=>{if("Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const c=t.id.name.toLowerCase();n===O.P&&(n=null),e.globalScope[c]={value:n,valueset:!0,node:t.init},r(O.P)}))}catch(e){return R(e)}}(e,t);case"VariableDeclaration":return function e(t,n,c){return Object(r.c)((r,a)=>{c>=n.declarations.length?r(O.P):M(t,n.declarations[c]).then(()=>{c===n.declarations.length-1?r(O.P):e(t,n,c+1).then(()=>{r(O.P)},a)},a)})}(e,t,0);case"BlockStatement":return function(e,t){try{return function e(t,n,c){try{return c>=n.body.length?Object(r.s)(O.P):Object(r.c)((r,a)=>{M(t,n.body[c]).then(o=>{try{o instanceof O.r||o===O.R||o===O.S||c===n.body.length-1?r(o):e(t,n,c+1).then(r,a)}catch(e){a(e)}},a)})}catch(e){return R(e)}}(e,t,0)}catch(e){return R(e)}}(e,t);case"FunctionDeclaration":return function(e,t){try{const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new f.a(t,e)},Object(r.s)(O.P)}catch(e){return R(e)}}(e,t);case"ReturnStatement":return n=e,c=t,Object(r.c)((e,t)=>{null===c.argument?e(new O.r(O.P)):M(n,c.argument).then(n=>{try{e(new O.r(n))}catch(e){t(e)}},t)});case"IfStatement":return function(e,t){return Object(r.c)((n,r)=>{"AssignmentExpression"!==t.test.type&&"UpdateExpression"!==t.test.type?M(e,t.test).then(c=>{try{!0===c?M(e,t.consequent).then(n,r):!1===c?null!==t.alternate?M(e,t.alternate).then(n,r):n(O.P):r(new Error(Object(E.f)(t.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(e){r(e)}},r):r(new Error(Object(E.f)(t.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))})}(e,t);case"ExpressionStatement":return function(e,t){try{return"AssignmentExpression"===t.expression.type?M(e,t.expression):(t.expression.type,M(e,t.expression).then(e=>Object(r.c)(t=>{t(e===O.P?O.P:new O.i(e))})))}catch(e){return Object(r.r)(e)}}(e,t);case"UpdateExpression":return function(e,t){try{const n=t.argument;if("MemberExpression"===n.type){const c={t:null};return M(e,n.object).then(t=>{let a=null;return c.t=t,!0===n.computed?a=M(e,n.property):"Identifier"===n.property.type&&(a=Object(r.s)(n.property.name)),a}).then(e=>Object(r.c)(n=>{const r=c.t;let a;if(Object(O.B)(r)){if(!Object(O.u)(e))throw new Error("Invalid Parameter");if(e<0&&(e=r.length+e),e<0||e>=r.length)throw new Error("Assignment outside of array bounds");a=Object(O.w)(r[e]),r[e]="++"===t.operator?a+1:a-1}else if(r instanceof d.a){if(!1===Object(O.v)(e))throw new Error("Dictionary accessor must be a string");if(!0!==r.hasField(e))throw new Error("Invalid Parameter");a=Object(O.w)(r.field(e)),r.setField(e,"++"===t.operator?a+1:a-1)}else{if(!(r instanceof w.a))throw Object(O.I)(r)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Object(O.v)(e))throw new Error("Feature accessor must be a string");if(!0!==r.hasField(e))throw new Error("Invalid Parameter");a=Object(O.w)(r.field(e)),r.setField(e,"++"===t.operator?a+1:a-1)}!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1)}))}return Object(r.c)((n,r)=>{const c="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!c)throw new Error("Invalid identifier");let a;return null!==e.localScope&&void 0!==e.localScope[c]?(a=Object(O.w)(e.localScope[c].value),e.localScope[c]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},void(!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1))):void 0!==e.globalScope[c]?(a=Object(O.w)(e.globalScope[c].value),e.globalScope[c]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},void(!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1))):void r(new Error("Variable not recognised"))})}catch(e){return Object(r.r)(e)}}(e,t);case"AssignmentExpression":return function(e,t){return Object(r.c)((n,c)=>{const a=t.left;if("MemberExpression"===a.type)M(e,t.right).then(o=>{try{M(e,a.object).then(l=>{try{let i=null;if(!0===a.computed)i=M(e,a.property);else{if("Identifier"!==a.property.type)throw new Error("Expected computed or identifier for assignemnt target");i=Object(r.s)(a.property.name)}i.then(e=>{try{if(Object(O.B)(l)){if(!Object(O.u)(e))throw new Error("Invalid Parameter");if(e<0&&(e=l.length+e),e<0||e>l.length)throw new Error("Assignment outside of array bounds");if(e===l.length){if("="!==t.operator)throw new Error("Invalid Parameter");l[e]=L(o,t.operator,l[e],t)}else l[e]=L(o,t.operator,l[e],t)}else if(l instanceof d.a){if(!1===Object(O.v)(e))throw new Error("Dictionary accessor must be a string");if(!0===l.hasField(e))l.setField(e,L(o,t.operator,l.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");l.setField(e,L(o,t.operator,null,t))}}else{if(!(l instanceof w.a))throw Object(O.I)(l)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Object(O.v)(e))throw new Error("Feature accessor must be a string");if(!0===l.hasField(e))l.setField(e,L(o,t.operator,l.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");l.setField(e,L(o,t.operator,null,t))}}n(O.P)}catch(e){c(e)}},c)}catch(e){c(e)}},c)}catch(e){c(e)}},c);else{const r=a.name.toLowerCase();if(null!==e.localScope&&void 0!==e.localScope[r])return void M(e,t.right).then(a=>{try{e.localScope[r]={value:L(a,t.operator,e.localScope[r].value,t),valueset:!0,node:t.right},n(O.P)}catch(e){c(e)}},c);void 0!==e.globalScope[r]?M(e,t.right).then(a=>{try{e.globalScope[r]={value:L(a,t.operator,e.globalScope[r].value,t),valueset:!0,node:t.right},n(O.P)}catch(e){c(e)}},c):c(new Error("Cannot assign undeclared variable"))}})}(e,t);case"ForStatement":return function(e,t){try{return null!==t.init?M(e,t.init).then(()=>Object(r.c)((n,r)=>{x(e,t,{testResult:!0,lastAction:O.P},e=>{n(e)},e=>{r(e)},0)})):Object(r.c)((n,r)=>{x(e,t,{testResult:!0,lastAction:O.P},e=>{n(e)},e=>{r(e)},0)})}catch(e){return Object(r.r)(e)}}(e,t);case"ForInStatement":return function(e,t){return Object(r.c)((n,c)=>{M(e,t.right).then(a=>{try{let o=null;o="VariableDeclaration"===t.left.type?M(e,t.left):Object(r.s)(),o.then(()=>{try{let r="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(r=e.name)}else"Identifier"===t.left.type&&(r=t.left.name);if(!r)throw new Error(Object(E.f)(t,"RUNTIME","INVALIDVARIABLE"));r=r.toLowerCase();let o=null;if(null!==e.localScope&&void 0!==e.localScope[r]&&(o=e.localScope[r]),null===o&&void 0!==e.globalScope[r]&&(o=e.globalScope[r]),null===o)return void c(new Error(Object(E.f)(t,"RUNTIME","VARIABLENOTDECLARED")));Object(O.B)(a)||Object(O.v)(a)?D(e,t,a,{reject:c,resolve:n},o):Object(O.I)(a)?function(e,t,n,r,c,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(O.P);!function e(t,n,r,c,a,o,l,i,s){try{if(r.length()<=a)return void l(O.P);c.value="k"===o?r.get(a):a,M(t,n.body).then(u=>{u instanceof O.r?l(u):u===O.R?l(O.P):++s>100?(s=0,setTimeout(()=>{e(t,n,r,c,a+1,o,l,i,s)},0)):e(t,n,r,c,a+1,o,l,i,s)},e=>{i(e)})}catch(t){i(t)}}(e,t,n,c,0,a,e=>{r.resolve(e)},e=>{r.reject(e)},0)}catch(e){r.reject(e)}}(e,t,a,{reject:c,resolve:n},o):a instanceof d.a||a instanceof w.a?function(e,t,n,r,c){try{D(e,t,n.keys(),r,c,"k")}catch(e){r.reject(e)}}(e,t,a,{reject:c,resolve:n},o):Object(O.T)(a)?function e(t,n,r,c,a,o,l,i){try{t.next().then(s=>{try{if(null===s)o(O.P);else{const u=w.a.createFromGraphicLikeObject(s.geometry,s.attributes,c);u._underlyingGraphic=s,a.value=u,M(n,r.body).then(s=>{try{s===O.R?o(O.P):s instanceof O.r?o(s):++i>100?(i=0,setTimeout(()=>{e(t,n,r,c,a,o,l,i)},0)):e(t,n,r,c,a,o,l,i)}catch(e){l(e)}},e=>{l(e)})}}catch(e){l(e)}},e=>{l(e)})}catch(t){l(t)}}(a.iterator(e.abortSignal),e,t,a,o,e=>{n(e)},e=>{c(e)},0):D(e,t,[],{reject:c,resolve:n},o)}catch(e){c(e)}},c)}catch(e){c(e)}},c)})}(e,t);case"BreakStatement":return Object(r.s)(O.R);case"EmptyStatement":return Object(r.s)(O.P);case"ContinueStatement":return Object(r.s)(O.S);case"TemplateElement":return function(e,t){return Object(r.s)(t.value?t.value.cooked:"")}(0,t);case"TemplateLiteral":return function(e,t){return Object(r.c)(n=>{const r=[];Object(g.o)(t.expressions,(t,n,c,a)=>M(e,n).then(e=>{r[c]=Object(O.y)(e)})).then(()=>{let e="",c=0;for(const n of t.quasis)e+=n.value?n.value.cooked:"",!1===n.tail&&(e+=r[c]?r[c]:"",c++);n(e)})})}(e,t);case"Identifier":return B(e,t);case"MemberExpression":return function(e,t){try{return M(e,t.object).then(n=>{try{return null===n?Object(r.r)(new Error(Object(E.f)(t,"RUNTIME","NOTFOUND"))):!1===t.computed?"Identifier"===t.property.type?n instanceof d.a||n instanceof w.a?Object(r.s)(n.field(t.property.name)):n instanceof a.a?Object(r.s)(_(n,t.property.name,e,t)):Object(r.r)(new Error(Object(E.f)(t,"RUNTIME","INVALIDTYPE"))):Object(r.r)(new Error(Object(E.f)(t,"RUNTIME","INVALIDTYPE"))):M(e,t.property).then(c=>Object(r.c)((r,o)=>{if(n instanceof d.a||n instanceof w.a)Object(O.v)(c)?r(n.field(c)):o(new Error(Object(E.f)(t,"RUNTIME","INVALIDTYPE")));else if(n instanceof a.a)Object(O.v)(c)?r(_(n,c,e,t)):o(new Error(Object(E.f)(t,"RUNTIME","INVALIDTYPE")));else if(Object(O.B)(n))if(Object(O.u)(c)&&isFinite(c)&&Math.floor(c)===c){if(c<0&&(c=n.length+c),c>=n.length||c<0)throw new Error(Object(E.f)(t,"RUNTIME","OUTOFBOUNDS"));r(n[c])}else o(new Error(Object(E.f)(t,"RUNTIME","INVALIDTYPE")));else if(Object(O.I)(n))if(Object(O.u)(c)&&isFinite(c)&&Math.floor(c)===c){if(c<0&&(c=n.length()+c),c>=n.length()||c<0)throw new Error(Object(E.f)(t,"RUNTIME","OUTOFBOUNDS"));r(n.get(c))}else o(new Error(Object(E.f)(t,"RUNTIME","INVALIDTYPE")));else if(Object(O.v)(n))if(Object(O.u)(c)&&isFinite(c)&&Math.floor(c)===c){if(c<0&&(c=n.length+c),c>=n.length||c<0)throw new Error(Object(E.f)(t,"RUNTIME","OUTOFBOUNDS"));r(n[c])}else o(new Error(Object(E.f)(t,"RUNTIME","INVALIDTYPE")));else o(new Error(Object(E.f)(t,"RUNTIME","INVALIDTYPE")))}))}catch(e){return R(e)}})}catch(e){return R(e)}}(e,t);case"Literal":return P(t.value);case"CallExpression":return function(e,t){try{if("Identifier"!==t.callee.type)return R(Object(E.f)(t,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];return n.value instanceof O.n?n.value.fn(e,t):n.value instanceof f.a?K(e,t,n.value.definition):R(Object(E.f)(t,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];return n.value instanceof O.n?n.value.fn(e,t):n.value instanceof f.a?K(e,t,n.value.definition):R(Object(E.f)(t,"RUNTIME","NOTAFUNCTION"))}return R(Object(E.f)(t,"RUNTIME","NOTFOUND"))}catch(e){return R(e)}}(e,t);case"UnaryExpression":return function(e,t){try{return M(e,t.argument).then(e=>Object(r.c)((n,r)=>{Object(O.C)(e)&&"!"===t.operator?n(!e):"-"===t.operator?n(-1*Object(O.w)(e)):"+"===t.operator?n(1*Object(O.w)(e)):"~"===t.operator?n(~Object(O.w)(e)):r(new Error(Object(E.f)(t,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))}))}catch(e){return R(e)}}(e,t);case"BinaryExpression":return function(e,t){try{return Object(r.b)([M(e,t.left),M(e,t.right)]).then(e=>Object(r.c)((n,r)=>{const c=e[0],a=e[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":n(Object(O.O)(Object(O.w)(c),Object(O.w)(a),t.operator));case"==":n(Object(O.H)(c,a));break;case"!=":n(!Object(O.H)(c,a));break;case"<":case">":case"<=":case">=":n(Object(O.M)(c,a,t.operator));break;case"+":Object(O.v)(c)||Object(O.v)(a)?n(Object(O.y)(c)+Object(O.y)(a)):n(Object(O.w)(c)+Object(O.w)(a));break;case"-":n(Object(O.w)(c)-Object(O.w)(a));break;case"*":n(Object(O.w)(c)*Object(O.w)(a));break;case"/":n(Object(O.w)(c)/Object(O.w)(a));break;case"%":n(Object(O.w)(c)%Object(O.w)(a));break;default:r(new Error(Object(E.f)(t,"RUNTIME","OPERATORNOTRECOGNISED")))}}))}catch(e){return R(e)}}(e,t);case"LogicalExpression":return function(e,t){return Object(r.c)((n,r)=>{"AssignmentExpression"!==t.left.type&&"UpdateExpression"!==t.left.type?"AssignmentExpression"!==t.right.type&&"UpdateExpression"!==t.right.type?M(e,t.left).then(c=>{try{if(!Object(O.C)(c))throw new Error(Object(E.f)(t,"RUNTIME","ONLYBOOLEAN"));switch(t.operator){case"||":!0===c?n(c):M(e,t.right).then(e=>{try{if(!Object(O.C)(e))throw new Error(Object(E.f)(t,"RUNTIME","ONLYORORAND"));n(e)}catch(e){r(e)}},r);break;case"&&":!1===c?n(c):M(e,t.right).then(e=>{try{if(!Object(O.C)(e))throw new Error(Object(E.f)(t,"RUNTIME","ONLYORORAND"));n(e)}catch(e){r(e)}},r);break;default:throw new Error(Object(E.f)(t,"RUNTIME","ONLYORORAND"))}}catch(e){r(e)}},r):r(new Error(Object(E.f)(t.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):r(new Error(Object(E.f)(t.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))})}(e,t);case"ConditionalExpression":return R(Object(E.f)(t,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return function(e,t){try{const n=[];for(let r=0;r<t.elements.length;r++)n.push(M(e,t.elements[r]));return Object(r.b)(n).then(e=>Object(r.c)((n,r)=>{for(let n=0;n<e.length;n++){if(Object(O.K)(e[n]))return void r(new Error(Object(E.f)(t,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));e[n]===O.P&&(e[n]=null)}n(e)}))}catch(e){return R(e)}}(e,t);case"ObjectExpression":return function(e,t){try{const n=[];for(let r=0;r<t.properties.length;r++)n.push(M(e,t.properties[r]));return Object(r.b)(n).then(e=>Object(r.c)(t=>{const n={};for(let t=0;t<e.length;t++){const r=e[t];if(Object(O.K)(r.value))throw new Error("Illegal Argument");if(!1===Object(O.v)(r.key))throw new Error("Illegal Argument");r.value===O.P?n[r.key.toString()]=null:n[r.key.toString()]=r.value}const r=new d.a(n);r.immutable=!1,t(r)}))}catch(e){return R(e)}}(e,t);case"Property":return function(e,t){try{return M(e,t.value).then(n=>Object(r.c)(r=>{"Identifier"===t.key.type?r({key:t.key.name,value:n}):M(e,t.key).then(e=>{r({key:e,value:n})})}))}catch(e){return Object(r.r)(e)}}(e,t);default:return R(Object(E.f)(t,"RUNTIME","UNREOGNISED"))}}catch(e){return R(e)}var n,c}function F(e,t,n){try{return M(e,t.body).then(c=>{try{return n.lastAction=c,n.lastAction===O.R||n.lastAction instanceof O.r?(n.testResult=!1,Object(r.s)(n)):null!==t.update?M(e,t.update).then(()=>Object(r.s)(n)):Object(r.s)(n)}catch(e){return Object(r.r)(e)}})}catch(e){return Object(r.r)(e)}}function x(e,t,n,c,a,o){try{(function(e,t,n){try{return null!==t.test?M(e,t.test).then(c=>{try{return!0===e.abortSignal.aborted?Object(r.r)(new Error("Cancelled")):(n.testResult=c,!1===n.testResult?Object(r.s)(n):!0!==n.testResult?Object(r.r)(new Error(Object(E.f)(t,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):F(e,t,n))}catch(e){return Object(r.r)(e)}}):F(e,t,n)}catch(e){return Object(r.r)(e)}})(e,t,n).then(()=>{try{!0===n.testResult?++o>100?(o=0,setTimeout(()=>{x(e,t,n,c,a,o)},0)):x(e,t,n,c,a,o):n.lastAction instanceof O.r?c(n.lastAction):c(O.P)}catch(e){a(e)}},e=>{a(e)})}catch(e){a(e)}}function D(e,t,n,r,c,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(O.P);!function e(t,n,r,c,a,o,l,i,s,u){try{if(c<=o)return void i(O.P);a.value="k"===l?r[o]:o,M(t,n.body).then(f=>{try{f instanceof O.r?i(f):f===O.R?i(O.P):++u>100?(u=0,setTimeout(()=>{e(t,n,r,c,a,o+1,l,i,s,u)},0)):e(t,n,r,c,a,o+1,l,i,s,u)}catch(e){s(e)}},e=>{s(e)})}catch(t){s(t)}}(e,t,n,n.length,c,0,a,e=>{r.resolve(e)},e=>{r.reject(e)},0)}catch(e){r.reject(e)}}function L(e,t,n,r){switch(t){case"=":return e===O.P?null:e;case"/=":return Object(O.w)(n)/Object(O.w)(e);case"*=":return Object(O.w)(n)*Object(O.w)(e);case"-=":return Object(O.w)(n)-Object(O.w)(e);case"+=":return Object(O.v)(n)||Object(O.v)(e)?Object(O.y)(n)+Object(O.y)(e):Object(O.w)(n)+Object(O.w)(e);case"%=":return Object(O.w)(n)%Object(O.w)(e);default:throw new Error(Object(E.f)(r,"RUNTIME","OPERATORNOTRECOGNISED"))}}let k=0;function _(e,t,n,r){let c;switch(t=t.toLowerCase()){case"hasz":{const t=e.hasZ;return void 0!==t&&t}case"hasm":{const t=e.hasM;return void 0!==t&&t}case"spatialreference":{let t=e.spatialReference._arcadeCacheId;if(void 0===t){let n=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(n=!1),n&&(k++,e.spatialReference._arcadeCacheId=k,t=k)}const n=new d.a({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==t&&(n._arcadeCacheId="SPREF"+t.toString()),n}}switch(e.type){case"extent":switch(t){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const n=e[t];return void 0!==n?n:null}case"type":return"Extent"}break;case"polygon":switch(t){case"rings":return c=e.cache._arcadeCacheId,void 0===c&&(k++,c=k,e.cache._arcadeCacheId=c),new h.a(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,c);case"type":return"Polygon"}break;case"point":switch(t){case"x":case"y":case"z":case"m":return void 0!==e[t]?e[t]:null;case"type":return"Point"}break;case"polyline":switch(t){case"paths":return c=e.cache._arcadeCacheId,void 0===c&&(k++,c=k,e.cache._arcadeCacheId=c),new h.a(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,c);case"type":return"Polyline"}break;case"multipoint":switch(t){case"points":return c=e.cache._arcadeCacheId,void 0===c&&(k++,c=k,e.cache._arcadeCacheId=c),new b.a(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,c,1);case"type":return"Multipoint"}}throw new Error(Object(E.f)(r,"RUNTIME","PROPERTYNOTFOUND"))}function B(e,t){return Object(r.c)((n,r)=>{const c=t.name.toLowerCase();if(null===e.localScope||void 0===e.localScope[c])if(void 0===e.globalScope[c])r(new Error(Object(E.f)(t,"RUNTIME","VARIABLENOTFOUND")));else{const t=e.globalScope[c];!0===t.valueset?n(t.value):null!==t.d?t.d.then(n,r):(t.d=M(e,t.node),t.d.then(e=>{try{t.value=e,t.valueset=!0,n(e)}catch(e){r(e)}},r))}else{const t=e.localScope[c];!0===t.valueset?n(t.value):null!==t.d?t.d.then(n,r):(t.d=M(e,t.node),t.d.then(e=>{try{t.value=e,t.valueset=!0,n(e)}catch(e){r(e)}},r))}})}const V={};function Y(e){return null===e?"":Object(O.B)(e)||Object(O.I)(e)?"Array":Object(O.z)(e)?"Date":Object(O.v)(e)?"String":Object(O.C)(e)?"Boolean":Object(O.u)(e)?"Number":e instanceof j.a?"Attachment":e instanceof p.a?"Portal":e instanceof d.a?"Dictionary":e instanceof w.a?"Feature":e instanceof o.a?"Point":e instanceof s.a?"Polygon":e instanceof u.a?"Polyline":e instanceof i.a?"Multipoint":e instanceof l.a?"Extent":Object(O.K)(e)?"Function":Object(O.T)(e)?"FeatureSet":Object(O.a)(e)?"FeatureSetCollection":e===O.P?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function G(e,t){try{const n=e.length,c=Math.floor(n/2);return 0===n?Object(r.s)([]):1===n?Object(r.s)([e[0]]):Object(r.c)((a,o)=>{const l=[G(e.slice(0,c),t),G(e.slice(c,n),t)];Object(r.b)(l).then(e=>{try{(function e(t,n,c,a){return Object(r.c)((r,o)=>{const l=a;t.length>0||n.length>0?t.length>0&&n.length>0?c(t[0],n[0]).then(i=>{try{isNaN(i)&&(i=1),i<=0?(l.push(t[0]),t=t.slice(1)):(l.push(n[0]),n=n.slice(1)),e(t,n,c,a).then(r,o)}catch(e){o(e)}},o):t.length>0?(l.push(t[0]),e(t=t.slice(1),n,c,a).then(r,o)):n.length>0&&(l.push(n[0]),n=n.slice(1),e(t,n,c,a).then(r,o)):r(a)})})(e[0],e[1],t,[]).then(a,o)}catch(e){o(e)}},o)})}catch(e){return R(e)}}function H(e,t){const n=e.length,r=Math.floor(n/2);return t||(t=function(e,t){return e<t?-1:e===t?0:1}),0===n?[]:1===n?[e[0]]:function(e,t,n){const r=[];for(;e.length>0||t.length>0;)if(e.length>0&&t.length>0){let c=n(e[0],t[0]);isNaN(c)&&(c=1),c<=0?(r.push(e[0]),e=e.slice(1)):(r.push(t[0]),t=t.slice(1))}else e.length>0?(r.push(e[0]),e=e.slice(1)):t.length>0&&(r.push(t[0]),t=t.slice(1));return r}(H(e.slice(0,r),t),H(e.slice(r,n),t),t)}function z(e,t,n){try{const c=e.body;if(n.length!==e.params.length)return R(new Error("Invalid Parameter calls to function."));for(let r=0;r<n.length;r++){const c=e.params[r];"Identifier"===c.type&&(t.localScope[c.name.toLowerCase()]={d:null,value:n[r],valueset:!0,node:null})}return M(t,c).then(e=>Object(r.c)((t,n)=>{e instanceof O.r?t(e.value):e!==O.R?e!==O.S?t(e instanceof O.i?e.value:e):n(new Error("Cannot Continue from a Function")):n(new Error("Cannot Break from a Function"))}))}catch(e){return Object(r.r)(e)}}function K(e,t,n){return A(e,t,(function(t,r,c){const a={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return z(n,a,c)}))}function q(e){return function(){const t={abortSignal:e.context.abortSignal,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(t.depthCounter>64)throw new Error("Exceeded maximum function depth");return z(e.definition,t,arguments)}}Object(y.a)(V,U),Object(v.a)(V,U),Object(S.a)(V,U),Object(I.a)(V,U),Object(m.a)(V,U),Object(N.a)(V,U),Object(T.registerFunctions)({functions:V,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:U,standardFunctionAsync:A}),V.typeof=function(e,t){return U(e,t,(function(e,t,n){Object(O.J)(n,1,1);const r=Y(n[0]);if("Unrecognised Type"===r)throw new Error("Unrecognised Type");return r}))},V.iif=function(e,t){return Object(r.c)((n,c)=>{Object(O.J)(null===t.arguments?[]:t.arguments,3,3),M(e,t.arguments[0]).then(a=>{try{if(!1===Object(O.C)(a))return void c(new Error("IF Function must have a boolean test condition"));Object(r.b)([M(e,t.arguments[1]),M(e,t.arguments[2])]).then(e=>{n(a?e[0]:e[1])},c)}catch(e){c(e)}},c)})},V.decode=function(e,t){return Object(r.c)((n,c)=>{t.arguments.length<2?c(new Error("Missing Parameters")):2!==t.arguments.length?(t.arguments.length-1)%2!=0?M(e,t.arguments[0]).then(a=>{try{(function e(t,n,c,a){return Object(r.c)((r,o)=>{M(t,n.arguments[c]).then(l=>{try{if(Object(O.H)(l,a))return void M(t,n.arguments[c+1]).then(r,o);{const l=n.arguments.length-c;return 1===l?void M(t,n.arguments[c]).then(r,o):(2===l&&r(null),3===l?void M(t,n.arguments[c+2]).then(r,o):void e(t,n,c+2,a).then(r,o))}}catch(e){o(e)}},o)})})(e,t,1,a).then(n,c)}catch(e){c(e)}},c):c(new Error("Must have a default value result.")):M(e,t.arguments[1]).then(n,c)})},V.when=function(e,t){try{return t.arguments.length<3?R("Missing Parameters"):t.arguments.length%2==0?R("Must have a default value result."):M(e,t.arguments[0]).then(n=>Object(r.c)((c,a)=>{!1!==Object(O.C)(n)?function e(t,n,c,a){return Object(r.c)((r,o)=>{!0===a?M(t,n.arguments[c+1]).then(r,o):3==n.arguments.length-c?M(t,n.arguments[c+2]).then(r,o):M(t,n.arguments[c+2]).then(a=>{try{if(!1===Object(O.C)(a))return void o(new Error("WHEN needs boolean test conditions"));e(t,n,c+2,a).then(r,o)}catch(e){o(e)}})})}(e,t,0,n).then(c,a):a(new Error("WHEN needs boolean test conditions"))}))}catch(e){return R(e)}},V.sort=function(e,t){return A(e,t,(function(e,t,n){Object(O.J)(n,1,2);let c=n[0];if(Object(O.I)(c)&&(c=c.toArray()),!1===Object(O.B)(c))return R(Error("Illegal Argument"));if(n.length>1)return!1===Object(O.K)(n[1])?R(Error("Illegal Argument")):G(c,q(n[1]));{let e=c;if(0===e.length)return Object(r.s)([]);const t={};for(let n=0;n<e.length;n++){const r=Y(e[n]);""!==r&&(t[r]=!0)}if(!0===t.Array||!0===t.Dictionary||!0===t.Feature||!0===t.Point||!0===t.Polygon||!0===t.Polyline||!0===t.Multipoint||!0===t.Extent||!0===t.Function)return Object(r.s)(e.slice(0));let n=0,a="";for(const e in t)n++,a=e;return n>1||"String"===a?e=H(e,(function(e,t){if(null==e||e===O.P)return null==t||t===O.P?0:1;if(null==t||t===O.P)return-1;const n=Object(O.y)(e),r=Object(O.y)(t);return n<r?-1:n===r?0:1})):"Number"===a?e=H(e,(function(e,t){return e-t})):"Boolean"===a?e=H(e,(function(e,t){return e===t?0:t?-1:1})):"Date"===a&&(e=H(e,(function(e,t){return t-e}))),Object(r.s)(e)}}))};const Z={failDefferred:R,resolveDeffered:P,fixSpatialReference:O.L,parseArguments:C,standardFunction:U,standardFunctionAsync:A,evaluateIdentifier:B,arcadeCustomFunction:q};for(const e in V)V[e]={value:new O.n(V[e]),valueset:!0,node:null};const J=function(){};function W(e){console.log(e)}(J.prototype=V).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},J.prototype.pi={value:Math.PI,valueset:!0,node:null};const X=Z;function Q(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:U,standardFunctionAsync:A,failDefferred:R,evaluateIdentifier:B,arcadeCustomFunctionHandler:q};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const e in t.functions)V[e]={value:new O.n(t.functions[e]),valueset:!0,node:null},J.prototype[e]=V[e];for(let e=0;e<t.signatures.length;e++)Object(E.a)(t.signatures[e],"async")}function $(e,t){let n=t.spatialReference;null==n&&(n=new c.a({wkid:102100}));const a=function(e,t){const n=new J;null==e&&(e={}),null==t&&(t={});const r=new d.a({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});r.immutable=!1,n.textformatting={value:r,valueset:!0,node:null};for(const e in t)n[e]={value:new O.n(t[e]),native:!0,valueset:!0,node:null};for(const t in e)e[t]&&"esri.Graphic"===e[t].declaredClass?n[t]={value:w.a.createFromGraphic(e[t]),valueset:!0,node:null}:n[t]={value:e[t],valueset:!0,node:null};return n}(t.vars,t.customfunctions);return M({spatialReference:n,services:t.services,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:a,console:t.console?t.console:W,lrucache:t.lrucache,localScope:null,depthCounter:1},e.body[0].body).then(e=>Object(r.c)((t,n)=>{e instanceof O.r&&(e=e.value),e instanceof O.i&&(e=e.value),e===O.P&&(e=null),e!==O.R?e!==O.S?e instanceof O.n||e instanceof f.a?n(new Error("Cannot return FUNCTION")):t(e):n(new Error("Cannot return CONTINUE")):n(new Error("Cannot return BREAK"))}))}function ee(e,t){return Object(E.c)(e)}function te(e,t){return Object(E.j)(e,t,"full")}function ne(e,t){return Object(E.h)(e,t)}function re(e,t){return Object(E.g)(e,t)}function ce(e){return Object(E.d)(e)}}});