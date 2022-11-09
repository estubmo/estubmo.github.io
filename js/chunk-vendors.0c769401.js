(self["webpackChunkvue3_firebase_employee_manager_course"]=self["webpackChunkvue3_firebase_employee_manager_course"]||[]).push([[998],{9662:function(t,e,n){var r=n(614),s=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(s(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),s=String,i=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw i("Can't set "+s(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7976),s=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw s("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),s=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(s(t)+" is not an object")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,s,i,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),f=n(648),d=n(6330),p=n(8880),g=n(8052),m=n(3070).f,y=n(7976),v=n(9518),w=n(7674),b=n(5112),E=n(9711),_=n(9909),T=_.enforce,I=_.get,S=c.Int8Array,C=S&&S.prototype,A=c.Uint8ClampedArray,k=A&&A.prototype,D=S&&v(S),R=C&&v(C),x=Object.prototype,N=c.TypeError,O=b("toStringTag"),L=E("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",P=o&&!!w&&"Opera"!==f(c.opera),F=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(U,e)||h(V,e)},B=function(t){var e=v(t);if(l(e)){var n=I(e);return n&&h(n,M)?n[M]:B(e)}},q=function(t){if(!l(t))return!1;var e=f(t);return h(U,e)||h(V,e)},$=function(t){if(q(t))return t;throw N("Target is not a typed array")},K=function(t){if(u(t)&&(!w||y(D,t)))return t;throw N(d(t)+" is not a typed array constructor")},G=function(t,e,n,r){if(a){if(n)for(var s in U){var i=c[s];if(i&&h(i.prototype,t))try{delete i.prototype[t]}catch(o){try{i.prototype[t]=e}catch(u){}}}R[t]&&!n||g(R,t,n?e:P&&C[t]||e,r)}},H=function(t,e,n){var r,s;if(a){if(w){if(n)for(r in U)if(s=c[r],s&&h(s,t))try{delete s[t]}catch(i){}if(D[t]&&!n)return;try{return g(D,t,n?e:P&&D[t]||e)}catch(i){}}for(r in U)s=c[r],!s||s[t]&&!n||g(s,t,e)}};for(r in U)s=c[r],i=s&&s.prototype,i?T(i)[M]=s:P=!1;for(r in V)s=c[r],i=s&&s.prototype,i&&(T(i)[M]=s);if((!P||!u(D)||D===Function.prototype)&&(D=function(){throw N("Incorrect invocation")},P))for(r in U)c[r]&&w(c[r],D);if((!P||!R||R===x)&&(R=D.prototype,P))for(r in U)c[r]&&w(c[r].prototype,R);if(P&&v(k)!==R&&w(k,R),a&&!h(R,O))for(r in F=!0,m(R,O,{get:function(){return l(this)?this[L]:void 0}}),U)c[r]&&p(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:P,TYPED_ARRAY_TAG:F&&L,aTypedArray:$,aTypedArrayConstructor:K,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:H,getTypedArrayConstructor:B,isView:j,isTypedArray:q,TypedArray:D,TypedArrayPrototype:R}},1318:function(t,e,n){var r=n(5656),s=n(1400),i=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=i(c),l=s(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},9671:function(t,e,n){var r=n(9974),s=n(8361),i=n(7908),o=n(6244),a=function(t){var e=1==t;return function(n,a,c){var u,l,h=i(n),f=s(h),d=r(a,c),p=o(f);while(p-- >0)if(u=f[p],l=d(u,p,h),l)switch(t){case 0:return u;case 1:return p}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},3658:function(t,e,n){"use strict";var r=n(9781),s=n(3157),i=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(s(t)&&!o(t,"length").writable)throw i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var r=n(84),s=r({}.toString),i=r("".slice);t.exports=function(t){return i(s(t),8,-1)}},648:function(t,e,n){var r=n(1694),s=n(614),i=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==i(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?i(e):"Object"==(r=i(e))&&s(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),s=n(3887),i=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=s(e),c=o.f,u=i.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),s=n(3070),i=n(9114);t.exports=r?function(t,e,n){return s.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),s=n(3070),i=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&i(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:s.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),s=Object.defineProperty;t.exports=function(t,e){try{s(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},5117:function(t,e,n){"use strict";var r=n(6330),s=TypeError;t.exports=function(t,e){if(!delete t[e])throw s("Cannot delete property "+r(e)+" of "+r(t))}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),s=n(111),i=r.document,o=s(i)&&s(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,s,i=n(7854),o=n(8113),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),s=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!s&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(s=+r[1]))),t.exports=s},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){var r=n(1702),s=Error,i=r("".replace),o=function(t){return String(s(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!s.prepareStackTrace)while(e--)t=i(t,a,"");return t}},2109:function(t,e,n){var r=n(7854),s=n(1236).f,i=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=s(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&i(d,"sham",!0),o(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},9974:function(t,e,n){var r=n(1702),s=n(9662),i=n(4374),o=r(r.bind);t.exports=function(t,e){return s(t),void 0===e?t:i?o(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),s=Function.prototype.call;t.exports=r?s.bind(s):function(){return s.apply(s,arguments)}},6530:function(t,e,n){var r=n(9781),s=n(2597),i=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=s(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},84:function(t,e,n){var r=n(4374),s=Function.prototype,i=s.call,o=r&&s.bind.bind(i,i);t.exports=r?o:function(t){return function(){return i.apply(t,arguments)}}},1702:function(t,e,n){var r=n(4326),s=n(84);t.exports=function(t){if("Function"===r(t))return s(t)}},5005:function(t,e,n){var r=n(7854),s=n(614),i=function(t){return s(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),s=n(8554);t.exports=function(t,e){var n=t[e];return s(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),s=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(s(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),s=n(7293),i=n(317);t.exports=!r&&!s((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),s=n(7293),i=n(4326),o=Object,a=r("".split);t.exports=s((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a(t,""):o(t)}:o},9587:function(t,e,n){var r=n(614),s=n(111),i=n(7674);t.exports=function(t,e,n){var o,a;return i&&r(o=e.constructor)&&o!==n&&s(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},2788:function(t,e,n){var r=n(1702),s=n(614),i=n(5465),o=r(Function.toString);s(i.inspectSource)||(i.inspectSource=function(t){return o(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,s,i,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),f=n(6200),d=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return i(t)?s(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=s(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw g(p);return e.facade=t,w.set(t,e),e},s=function(t){return w.get(t)||{}},i=function(t){return w.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw g(p);return e.facade=t,u(t,b,e),e},s=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:r,get:s,has:i,enforce:y,getterFor:v}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),s=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===s}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),s=n(614),i=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(s(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),s=n(4154),i=s.all;t.exports=s.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),s=n(614),i=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return s(e)&&i(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),s=n(614),i=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,f=Object.defineProperty,d=o&&!r((function(){return 8!==f((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||a&&t.name!==e)&&(o?f(t,"name",{value:e,configurable:!0}):t.name=e),d&&n&&i(n,"arity")&&t.length!==n.arity&&f(t,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?o&&f(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(s){}var r=l(t);return i(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=g((function(){return s(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3070:function(t,e,n){var r=n(9781),s=n(4664),i=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?i?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),s)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),s=n(6916),i=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!s(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),s=n(748),i=s.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),s=n(614),i=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=i(t);if(r(e,c))return e[c];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),s=n(2597),i=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,l=[];for(n in r)!s(a,n)&&s(r,n)&&c(l,n);while(e.length>u)s(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!n.call({1:2},1);e.f=s?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),s=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return s(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),s=n(614),i=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&s(n=t.toString)&&!i(a=r(n,t)))return a;if(s(n=t.valueOf)&&!i(a=r(n,t)))return a;if("string"!==e&&s(n=t.toString)&&!i(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),s=n(1702),i=n(8006),o=n(5181),a=n(9670),c=s([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=o.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),s=TypeError;t.exports=function(t){if(r(t))throw s("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),s=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=s(t))}},5465:function(t,e,n){var r=n(7854),s=n(3072),i="__core-js_shared__",o=r[i]||s(i,{});t.exports=o},2309:function(t,e,n){var r=n(1913),s=n(5465);(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),s=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!s((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),s=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?s(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),s=n(4488);t.exports=function(t){return r(s(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),s=Math.min;t.exports=function(t){return t>0?s(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),s=Object;t.exports=function(t){return s(r(t))}},7593:function(t,e,n){var r=n(6916),s=n(111),i=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!s(t)||i(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!s(n)||i(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),s=n(2190);t.exports=function(t){var e=r(t,"string");return s(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),s=r("toStringTag"),i={};i[s]="z",t.exports="[object z]"===String(i)},1340:function(t,e,n){var r=n(648),s=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),s=0,i=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++s+i,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),s=n(7293);t.exports=r&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),s=n(614),i=r.WeakMap;t.exports=s(i)&&/native code/.test(String(i))},5112:function(t,e,n){var r=n(7854),s=n(2309),i=n(2597),o=n(9711),a=n(6293),c=n(3307),u=s("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!i(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&i(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},7658:function(t,e,n){"use strict";var r=n(2109),s=n(7908),i=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(t){var e=s(this),n=i(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},541:function(t,e,n){"use strict";var r=n(2109),s=n(7908),i=n(6244),o=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{unshift:function(t){var e=s(this),n=i(e),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in e?e[l]=e[u]:a(e,l)}for(var h=0;h<r;h++)e[h]=arguments[h]}return o(e,n+r)}})},4590:function(t,e,n){"use strict";var r=n(260),s=n(9671).findLastIndex,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(t){return s(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3408:function(t,e,n){"use strict";var r=n(260),s=n(9671).findLast,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(t){return s(i(this),t,arguments.length>1?arguments[1]:void 0)}))},2801:function(t,e,n){"use strict";var r=n(2109),s=n(7854),i=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),f=n(3678),d=n(1060),p=n(9781),g=n(1913),m="DOMException",y=i("Error"),v=i(m),w=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new v(e,n),s=y(e);return s.name=m,a(r,"stack",o(1,d(s.stack,1))),l(r,this,w),r},b=w.prototype=v.prototype,E="stack"in y(m),_="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(s,m),I=!!T&&!(T.writable&&T.configurable),S=E&&!I&&!_;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?w:v});var C=i(m),A=C.prototype;if(A.constructor!==C)for(var k in g||a(A,"constructor",o(1,C)),f)if(c(f,k)){var D=f[k],R=D.s;c(C,R)||a(C,R,o(6,D.c))}},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return w},L:function(){return a},LL:function(){return T},P0:function(){return y},Sg:function(){return b},ZR:function(){return _},aH:function(){return v},eu:function(){return l},hl:function(){return u},m9:function(){return k},vZ:function(){return C}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,i||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,l=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return i.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){return"object"===typeof indexedDB}function l(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyCuNEfBSl0FoQbHfZ7maBK4e5Kn05WzoYw",VUE_APP_FIREBASE_PROJECT_ID:"vue-firestore-course-test",VUE_APP_FIREBASE_MESSAGE_SENDER_ID:"816439295166",VUE_APP_FIREBASE_APP_ID:"1:816439295166:web:310ac88a8a1ce1cdcbf2ef",VUE_APP_FIREBASE_MEASUREMENT_ID:"G-WE0GKLV9Z5",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},g=()=>{try{return f()||d()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=g())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},y=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>{var t;return null===(t=g())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E="FirebaseError";class _ extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=E,Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?I(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new _(r,o,n);return a}}function I(t,e){return t.replace(S,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const S=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(A(n)&&A(i)){if(!C(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function A(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function k(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){"use strict";n.d(e,{Bj:function(){return i},Fl:function(){return Kt},IU:function(){return kt},Jd:function(){return T},PG:function(){return It},SU:function(){return Vt},Um:function(){return Et},WL:function(){return Bt},X$:function(){return A},X3:function(){return At},XI:function(){return Pt},Xl:function(){return Dt},dq:function(){return Lt},iH:function(){return Mt},j:function(){return S},lk:function(){return I},qj:function(){return bt},qq:function(){return w},yT:function(){return Ct}});n(7658);var r=n(7139);let s;class i{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=s,!t&&s&&(this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(t){if(this.active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){s=this}off(){s=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this.active=!1}}}function o(t,e=s){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,u=t=>(t.n&p)>0,l=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];c(s)&&!u(s)?s.delete(t):e[n++]=s,s.w&=~p,s.n&=~p}e.length=n}},f=new WeakMap;let d=0,p=1;const g=30;let m;const y=Symbol(""),v=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=m,e=E;while(t){if(t===this)return;t=t.parent}try{return this.parent=m,m=this,E=!0,p=1<<++d,d<=g?l(this):b(this),this.fn()}finally{d<=g&&h(this),p=1<<--d,m=this.parent,E=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const _=[];function T(){_.push(E),E=!1}function I(){const t=_.pop();E=void 0===t||t}function S(t,e,n){if(E&&m){let e=f.get(t);e||f.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const s=void 0;C(r,s)}}function C(t,e){let n=!1;d<=g?u(t)||(t.n|=p,n=!c(t)):n=!t.has(m),n&&(t.add(m),m.deps.push(t))}function A(t,e,n,s,i,o){const c=f.get(t);if(!c)return;let u=[];if("clear"===e)u=[...c.values()];else if("length"===n&&(0,r.kJ)(t))c.forEach(((t,e)=>{("length"===e||e>=s)&&u.push(t)}));else switch(void 0!==n&&u.push(c.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(y)),(0,r._N)(t)&&u.push(c.get(v)));break;case"delete":(0,r.kJ)(t)||(u.push(c.get(y)),(0,r._N)(t)&&u.push(c.get(v)));break;case"set":(0,r._N)(t)&&u.push(c.get(y));break}if(1===u.length)u[0]&&k(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);k(a(t))}}function k(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&D(r,e);for(const r of n)r.computed||D(r,e)}function D(t,e){(t!==m||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const R=(0,r.fY)("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),N=F(),O=F(!1,!0),L=F(!0),M=P();function P(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=kt(this);for(let e=0,s=this.length;e<s;e++)S(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(kt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){T();const n=kt(this)[e].apply(this,t);return I(),n}})),t}function F(t=!1,e=!1){return function(n,s,i){if("__v_isReactive"===s)return!t;if("__v_isReadonly"===s)return t;if("__v_isShallow"===s)return e;if("__v_raw"===s&&i===(t?e?yt:mt:e?gt:pt).get(n))return n;const o=(0,r.kJ)(n);if(!t&&o&&(0,r.RI)(M,s))return Reflect.get(M,s,i);const a=Reflect.get(n,s,i);return((0,r.yk)(s)?x.has(s):R(s))?a:(t||S(n,"get",s),e?a:Lt(a)?o&&(0,r.S0)(s)?a:a.value:(0,r.Kn)(a)?t?_t(a):bt(a):a)}}const U=j(),V=j(!0);function j(t=!1){return function(e,n,s,i){let o=e[n];if(St(o)&&Lt(o)&&!Lt(s))return!1;if(!t&&(Ct(s)||St(s)||(o=kt(o),s=kt(s)),!(0,r.kJ)(e)&&Lt(o)&&!Lt(s)))return o.value=s,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,s,i);return e===kt(i)&&(a?(0,r.aU)(s,o)&&A(e,"set",n,s,o):A(e,"add",n,s)),c}}function B(t,e){const n=(0,r.RI)(t,e),s=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&A(t,"delete",e,void 0,s),i}function q(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&x.has(e)||S(t,"has",e),n}function $(t){return S(t,"iterate",(0,r.kJ)(t)?"length":y),Reflect.ownKeys(t)}const K={get:N,set:U,deleteProperty:B,has:q,ownKeys:$},G={get:L,set(t,e){return!0},deleteProperty(t,e){return!0}},H=(0,r.l7)({},K,{get:O,set:V}),z=t=>t,W=t=>Reflect.getPrototypeOf(t);function Q(t,e,n=!1,r=!1){t=t["__v_raw"];const s=kt(t),i=kt(e);n||(e!==i&&S(s,"get",e),S(s,"get",i));const{has:o}=W(s),a=r?z:n?xt:Rt;return o.call(s,e)?a(t.get(e)):o.call(s,i)?a(t.get(i)):void(t!==s&&t.get(e))}function Y(t,e=!1){const n=this["__v_raw"],r=kt(n),s=kt(t);return e||(t!==s&&S(r,"has",t),S(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function J(t,e=!1){return t=t["__v_raw"],!e&&S(kt(t),"iterate",y),Reflect.get(t,"size",t)}function X(t){t=kt(t);const e=kt(this),n=W(e),r=n.has.call(e,t);return r||(e.add(t),A(e,"add",t,t)),this}function Z(t,e){e=kt(e);const n=kt(this),{has:s,get:i}=W(n);let o=s.call(n,t);o||(t=kt(t),o=s.call(n,t));const a=i.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&A(n,"set",t,e,a):A(n,"add",t,e),this}function tt(t){const e=kt(this),{has:n,get:r}=W(e);let s=n.call(e,t);s||(t=kt(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&A(e,"delete",t,void 0,i),o}function et(){const t=kt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&A(t,"clear",void 0,void 0,n),r}function nt(t,e){return function(n,r){const s=this,i=s["__v_raw"],o=kt(i),a=e?z:t?xt:Rt;return!t&&S(o,"iterate",y),i.forEach(((t,e)=>n.call(r,a(t),a(e),s)))}}function rt(t,e,n){return function(...s){const i=this["__v_raw"],o=kt(i),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=i[t](...s),h=n?z:e?xt:Rt;return!e&&S(o,"iterate",u?v:y),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return"delete"!==t&&this}}function it(){const t={get(t){return Q(this,t)},get size(){return J(this)},has:Y,add:X,set:Z,delete:tt,clear:et,forEach:nt(!1,!1)},e={get(t){return Q(this,t,!1,!0)},get size(){return J(this)},has:Y,add:X,set:Z,delete:tt,clear:et,forEach:nt(!1,!0)},n={get(t){return Q(this,t,!0)},get size(){return J(this,!0)},has(t){return Y.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nt(!0,!1)},r={get(t){return Q(this,t,!0,!0)},get size(){return J(this,!0)},has(t){return Y.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nt(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{t[s]=rt(s,!1,!1),n[s]=rt(s,!0,!1),e[s]=rt(s,!1,!0),r[s]=rt(s,!0,!0)})),[t,n,e,r]}const[ot,at,ct,ut]=it();function lt(t,e){const n=e?t?ut:ct:t?at:ot;return(e,s,i)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get((0,r.RI)(n,s)&&s in e?n:e,s,i)}const ht={get:lt(!1,!1)},ft={get:lt(!1,!0)},dt={get:lt(!0,!1)};const pt=new WeakMap,gt=new WeakMap,mt=new WeakMap,yt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,r.W7)(t))}function bt(t){return St(t)?t:Tt(t,!1,K,ht,pt)}function Et(t){return Tt(t,!1,H,ft,gt)}function _t(t){return Tt(t,!0,G,dt,mt)}function Tt(t,e,n,s,i){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=i.get(t);if(o)return o;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?s:n);return i.set(t,c),c}function It(t){return St(t)?It(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function St(t){return!(!t||!t["__v_isReadonly"])}function Ct(t){return!(!t||!t["__v_isShallow"])}function At(t){return It(t)||St(t)}function kt(t){const e=t&&t["__v_raw"];return e?kt(e):t}function Dt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Rt=t=>(0,r.Kn)(t)?bt(t):t,xt=t=>(0,r.Kn)(t)?_t(t):t;function Nt(t){E&&m&&(t=kt(t),C(t.dep||(t.dep=a())))}function Ot(t,e){t=kt(t),t.dep&&k(t.dep)}function Lt(t){return!(!t||!0!==t.__v_isRef)}function Mt(t){return Ft(t,!1)}function Pt(t){return Ft(t,!0)}function Ft(t,e){return Lt(t)?t:new Ut(t,e)}class Ut{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:kt(t),this._value=e?t:Rt(t)}get value(){return Nt(this),this._value}set value(t){const e=this.__v_isShallow||Ct(t)||St(t);t=e?t:kt(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Rt(t),Ot(this,t))}}function Vt(t){return Lt(t)?t.value:t}const jt={get:(t,e,n)=>Vt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Lt(s)&&!Lt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bt(t){return It(t)?t:new Proxy(t,jt)}var qt;class $t{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[qt]=!1,this._dirty=!0,this.effect=new w(t,(()=>{this._dirty||(this._dirty=!0,Ot(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=kt(this);return Nt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Kt(t,e,n=!1){let s,i;const o=(0,r.mf)(t);o?(s=t,i=r.dG):(s=t.get,i=t.set);const a=new $t(s,i,o||!i,n);return a}qt="__v_isReadonly"},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},FN:function(){return cn},Fl:function(){return In},HY:function(){return De},JJ:function(){return K},Ko:function(){return Ft},P$:function(){return et},Q6:function(){return at},U2:function(){return rt},Uk:function(){return Je},Us:function(){return Te},Wm:function(){return ze},Y3:function(){return v},Y8:function(){return X},YP:function(){return z},_:function(){return He},aZ:function(){return ct},bv:function(){return Et},f3:function(){return G},h:function(){return Sn},iD:function(){return je},ic:function(){return Tt},nK:function(){return ot},up:function(){return Ot},w5:function(){return M},wg:function(){return Me},wy:function(){return Rt}});n(7658),n(541);var r=n(4870),s=n(7139);function i(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){a(i,e,n)}return s}function o(t,e,n,r){if((0,s.mf)(t)){const o=i(t,e,n,r);return o&&(0,s.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let s=0;s<t.length;s++)c.push(o(t[s],e,n,r));return c}function a(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void i(a,null,10,[t,s,o])}c(t,n,s,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=Promise.resolve();let y=null;function v(t){const e=y||m;return t?e.then(this?t.bind(this):t):e}function w(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,s=C(h[r]);s<t?e=r+1:n=r}return e}function b(t){h.length&&h.includes(t,u&&t.allowRecurse?f+1:f)||(null==t.id?h.push(t):h.splice(w(t.id),0,t),E())}function E(){u||l||(l=!0,y=m.then(k))}function _(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function T(t){(0,s.kJ)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?g+1:g)||d.push(t),E()}function I(t,e=(u?f+1:0)){for(0;e<h.length;e++){const t=h[e];t&&t.pre&&(h.splice(e,1),e--,t())}}function S(t){if(d.length){const t=[...new Set(d)];if(d.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>C(t)-C(e))),g=0;g<p.length;g++)p[g]();p=null,g=0}}const C=t=>null==t.id?1/0:t.id,A=(t,e)=>{const n=C(t)-C(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function k(t){l=!1,u=!0,h.sort(A);s.dG;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&i(t,null,14)}}finally{f=0,h.length=0,S(t),u=!1,y=null,(h.length||d.length)&&k(t)}}new Set;new Map;function D(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||s.kT;let i=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||s.kT;o&&(i=n.map((t=>t.trim()))),e&&(i=n.map(s.He))}let u;let l=r[u=(0,s.hR)(e)]||r[u=(0,s.hR)((0,s._A)(e))];!l&&a&&(l=r[u=(0,s.hR)((0,s.rs)(e))]),l&&o(l,t,6,i);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,i)}}function R(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!(0,s.mf)(t)){const r=t=>{const n=R(t,e,!0);n&&(c=!0,(0,s.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,s.kJ)(o)?o.forEach((t=>a[t]=null)):(0,s.l7)(a,o),(0,s.Kn)(t)&&r.set(t,a),a):((0,s.Kn)(t)&&r.set(t,null),null)}function x(t,e){return!(!t||!(0,s.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,s.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,s.RI)(t,(0,s.rs)(e))||(0,s.RI)(t,e))}let N=null,O=null;function L(t){const e=N;return N=t,O=t&&t.type.__scopeId||null,e}function M(t,e=N,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ue(-1);const s=L(e);let i;try{i=t(...n)}finally{L(s),r._d&&Ue(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function P(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t;let v,w;const b=L(t);try{if(4&n.shapeFlag){const t=i||r;v=Xe(f.call(t,t,d,o,g,p,m)),w=l}else{const t=e;0,v=Xe(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),w=e.props?l:F(l)}}catch(_){Oe.length=0,a(_,t,1),v=ze(xe)}let E=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=E;t.length&&7&e&&(c&&t.some(s.tR)&&(w=U(w,c)),E=Ye(E,w))}return n.dirs&&(E=Ye(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),v=E,L(b),v}const F=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,s.F7)(n))&&((e||(e={}))[n]=t[n]);return e},U=(t,e)=>{const n={};for(const r in t)(0,s.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function V(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||j(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?j(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!x(u,n))return!0}}return!1}function j(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!x(n,i))return!0}return!1}function B({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const q=t=>t.__isSuspense;function $(t,e){e&&e.pendingBranch?(0,s.kJ)(t)?e.effects.push(...t):e.effects.push(t):T(t)}function K(t,e){if(an){let n=an.provides;const r=an.parent&&an.parent.provides;r===n&&(n=an.provides=Object.create(r)),n[t]=e}else 0}function G(t,e,n=!1){const r=an||N;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&(0,s.mf)(e)?e.call(r.proxy):e}else 0}const H={};function z(t,e,n){return W(t,e,n)}function W(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=s.kT){const h=an;let f,d,p=!1,g=!1;if((0,r.dq)(t)?(f=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(f=()=>t,a=!0):(0,s.kJ)(t)?(g=!0,p=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),f=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?J(t):(0,s.mf)(t)?i(t,h,2):void 0))):f=(0,s.mf)(t)?e?()=>i(t,h,2):()=>{if(!h||!h.isUnmounted)return d&&d(),o(t,h,3,[m])}:s.dG,e&&a){const t=f;f=()=>J(t())}let m=t=>{d=E.onStop=()=>{i(t,h,4)}};if(pn)return m=s.dG,e?n&&o(e,h,3,[f(),g?[]:void 0,m]):f(),s.dG;let y=g?[]:H;const v=()=>{if(E.active)if(e){const t=E.run();(a||p||(g?t.some(((t,e)=>(0,s.aU)(t,y[e]))):(0,s.aU)(t,y)))&&(d&&d(),o(e,h,3,[t,y===H?void 0:y,m]),y=t)}else E.run()};let w;v.allowRecurse=!!e,"sync"===c?w=v:"post"===c?w=()=>_e(v,h&&h.suspense):(v.pre=!0,h&&(v.id=h.uid),w=()=>b(v));const E=new r.qq(f,w);return e?n?v():y=E.run():"post"===c?_e(E.run.bind(E),h&&h.suspense):E.run(),()=>{E.stop(),h&&h.scope&&(0,s.Od)(h.scope.effects,E)}}function Q(t,e,n){const r=this.proxy,i=(0,s.HD)(t)?t.includes(".")?Y(r,t):()=>r[t]:t.bind(r,r);let o;(0,s.mf)(e)?o=e:(o=e.handler,n=e);const a=an;un(this);const c=W(i,o.bind(r),n);return a?un(a):ln(),c}function Y(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function J(t,e){if(!(0,s.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))J(t.value,e);else if((0,s.kJ)(t))for(let n=0;n<t.length;n++)J(t[n],e);else if((0,s.DM)(t)||(0,s._N)(t))t.forEach((t=>{J(t,e)}));else if((0,s.PO)(t))for(const n in t)J(t[n],e);return t}function X(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Et((()=>{t.isMounted=!0})),It((()=>{t.isUnmounting=!0})),t}const Z=[Function,Array],tt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Z,onEnter:Z,onAfterEnter:Z,onEnterCancelled:Z,onBeforeLeave:Z,onLeave:Z,onAfterLeave:Z,onLeaveCancelled:Z,onBeforeAppear:Z,onAppear:Z,onAfterAppear:Z,onAppearCancelled:Z},setup(t,{slots:e}){const n=cn(),s=X();let i;return()=>{const o=e.default&&at(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==xe){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(s.isLeaving)return st(a);const l=it(a);if(!l)return st(a);const h=rt(l,c,s,n);ot(l,h);const f=n.subTree,d=f&&it(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===i?i=t:t!==i&&(i=t,p=!0)}if(d&&d.type!==xe&&(!qe(l,d)||p)){const t=rt(d,c,s,n);if(ot(d,t),"out-in"===u)return s.isLeaving=!0,t.afterLeave=()=>{s.isLeaving=!1,n.update()},st(a);"in-out"===u&&l.type!==xe&&(t.delayLeave=(t,e,n)=>{const r=nt(s,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},et=tt;function nt(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function rt(t,e,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=e,E=String(t.key),_=nt(n,t),T=(t,e)=>{t&&o(t,r,9,e)},I=(t,e)=>{const n=e[1];T(t,e),(0,s.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!i)return;r=y||u}e._leaveCb&&e._leaveCb(!0);const s=_[E];s&&qe(t,s)&&s.el._leaveCb&&s.el._leaveCb(),T(r,[e])},enter(t){let e=l,r=h,s=f;if(!n.isMounted){if(!i)return;e=v||l,r=w||h,s=b||f}let o=!1;const a=t._enterCb=e=>{o||(o=!0,T(e?s:r,[t]),S.delayedLeave&&S.delayedLeave(),t._enterCb=void 0)};e?I(e,[t,a]):a()},leave(e,r){const s=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();T(d,[e]);let i=!1;const o=e._leaveCb=n=>{i||(i=!0,r(),T(n?m:g,[e]),e._leaveCb=void 0,_[s]===t&&delete _[s])};_[s]=t,p?I(p,[e,o]):o()},clone(t){return rt(t,e,n,r)}};return S}function st(t){if(lt(t))return t=Ye(t),t.children=null,t}function it(t){return lt(t)?t.children?t.children[0]:void 0:t}function ot(t,e){6&t.shapeFlag&&t.component?ot(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function at(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===De?(128&o.patchFlag&&s++,r=r.concat(at(o.children,e,a))):(e||o.type!==xe)&&r.push(null!=a?Ye(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ct(t){return(0,s.mf)(t)?{setup:t,name:t.name}:t}const ut=t=>!!t.type.__asyncLoader;const lt=t=>t.type.__isKeepAlive;RegExp,RegExp;function ht(t,e){return(0,s.kJ)(t)?t.some((t=>ht(t,e))):(0,s.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function ft(t,e){pt(t,"a",e)}function dt(t,e){pt(t,"da",e)}function pt(t,e,n=an){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(vt(e,r,n),n){let t=n.parent;while(t&&t.parent)lt(t.parent.vnode)&&gt(r,e,n,t),t=t.parent}}function gt(t,e,n,r){const i=vt(e,t,r,!0);St((()=>{(0,s.Od)(r[e],i)}),n)}function mt(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function yt(t){return 128&t.shapeFlag?t.ssContent:t}function vt(t,e,n=an,s=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;(0,r.Jd)(),un(n);const i=o(e,n,t,s);return ln(),(0,r.lk)(),i});return s?i.unshift(a):i.push(a),a}}const wt=t=>(e,n=an)=>(!pn||"sp"===t)&&vt(t,((...t)=>e(...t)),n),bt=wt("bm"),Et=wt("m"),_t=wt("bu"),Tt=wt("u"),It=wt("bum"),St=wt("um"),Ct=wt("sp"),At=wt("rtg"),kt=wt("rtc");function Dt(t,e=an){vt("ec",t,e)}function Rt(t,e){const n=N;if(null===n)return t;const r=En(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=s.kT]=e[o];(0,s.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&J(n),i.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function xt(t,e,n,s){const i=t.dirs,a=e&&e.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[s];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}const Nt="components";function Ot(t,e){return Mt(Nt,t,!0,e)||t}const Lt=Symbol();function Mt(t,e,n=!0,r=!1){const i=N||an;if(i){const n=i.type;if(t===Nt){const t=_n(n,!1);if(t&&(t===e||t===(0,s._A)(e)||t===(0,s.kC)((0,s._A)(e))))return n}const o=Pt(i[t]||n[t],e)||Pt(i.appContext[t],e);return!o&&r?n:o}}function Pt(t,e){return t&&(t[e]||t[(0,s._A)(e)]||t[(0,s.kC)((0,s._A)(e))])}function Ft(t,e,n,r){let i;const o=n&&n[r];if((0,s.kJ)(t)||(0,s.HD)(t)){i=new Array(t.length);for(let n=0,r=t.length;n<r;n++)i[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,i=new Array(t);for(let n=0;n<t;n++)i[n]=e(n+1,n,void 0,o&&o[n])}else if((0,s.Kn)(t))if(t[Symbol.iterator])i=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=e(t[s],s,r,o&&o[r])}}else i=[];return n&&(n[r]=i),i}const Ut=t=>t?hn(t)?En(t)||t.proxy:Ut(t.parent):null,Vt=(0,s.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ut(t.parent),$root:t=>Ut(t.root),$emit:t=>t.emit,$options:t=>Ht(t),$forceUpdate:t=>t.f||(t.f=()=>b(t.update)),$nextTick:t=>t.n||(t.n=v.bind(t.proxy)),$watch:t=>Q.bind(t)}),jt={get({_:t},e){const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return i[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(i!==s.kT&&(0,s.RI)(i,e))return c[e]=1,i[e];if(o!==s.kT&&(0,s.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,s.RI)(h,e))return c[e]=3,a[e];if(n!==s.kT&&(0,s.RI)(n,e))return c[e]=4,n[e];Bt&&(c[e]=0)}}const f=Vt[e];let d,p;return f?("$attrs"===e&&(0,r.j)(t,"get",e),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==s.kT&&(0,s.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,s.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return i!==s.kT&&(0,s.RI)(i,e)?(i[e]=n,!0):r!==s.kT&&(0,s.RI)(r,e)?(r[e]=n,!0):!(0,s.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==s.kT&&(0,s.RI)(t,a)||e!==s.kT&&(0,s.RI)(e,a)||(c=o[0])&&(0,s.RI)(c,a)||(0,s.RI)(r,a)||(0,s.RI)(Vt,a)||(0,s.RI)(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,s.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Bt=!0;function qt(t){const e=Ht(t),n=t.proxy,i=t.ctx;Bt=!1,e.beforeCreate&&Kt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:E,unmounted:_,render:T,renderTracked:I,renderTriggered:S,errorCaptured:C,serverPrefetch:A,expose:k,inheritAttrs:D,components:R,directives:x,filters:N}=e,O=null;if(h&&$t(h,i,O,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,s.mf)(t)&&(i[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,s.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Bt=!0,a)for(const r in a){const t=a[r],e=(0,s.mf)(t)?t.bind(n,n):(0,s.mf)(t.get)?t.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(t)&&(0,s.mf)(t.set)?t.set.bind(n):s.dG,c=In({get:e,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Gt(u[r],i,n,r);if(l){const t=(0,s.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{K(e,t[e])}))}function L(t,e){(0,s.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Kt(f,t,"c"),L(bt,d),L(Et,p),L(_t,g),L(Tt,m),L(ft,y),L(dt,v),L(Dt,C),L(kt,I),L(At,S),L(It,b),L(St,_),L(Ct,A),(0,s.kJ)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===s.dG&&(t.render=T),null!=D&&(t.inheritAttrs=D),R&&(t.components=R),x&&(t.directives=x)}function $t(t,e,n=s.dG,i=!1){(0,s.kJ)(t)&&(t=Jt(t));for(const o in t){const n=t[o];let a;a=(0,s.Kn)(n)?"default"in n?G(n.from||o,n.default,!0):G(n.from||o):G(n),(0,r.dq)(a)&&i?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Kt(t,e,n){o((0,s.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Gt(t,e,n,r){const i=r.includes(".")?Y(n,r):()=>n[r];if((0,s.HD)(t)){const n=e[t];(0,s.mf)(n)&&z(i,n)}else if((0,s.mf)(t))z(i,t.bind(n));else if((0,s.Kn)(t))if((0,s.kJ)(t))t.forEach((t=>Gt(t,e,n,r)));else{const r=(0,s.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,s.mf)(r)&&z(i,r,t)}else 0}function Ht(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:i.length||n||r?(u={},i.length&&i.forEach((t=>zt(u,t,a,!0))),zt(u,e,a)):u=e,(0,s.Kn)(e)&&o.set(e,u),u}function zt(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&zt(t,i,n,!0),s&&s.forEach((e=>zt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Wt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Wt={data:Qt,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Zt,directives:Zt,watch:te,provide:Qt,inject:Yt};function Qt(t,e){return e?t?function(){return(0,s.l7)((0,s.mf)(t)?t.call(this,this):t,(0,s.mf)(e)?e.call(this,this):e)}:e:t}function Yt(t,e){return Zt(Jt(t),Jt(e))}function Jt(t){if((0,s.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zt(t,e){return t?(0,s.l7)((0,s.l7)(Object.create(null),t),e):e}function te(t,e){if(!t)return e;if(!e)return t;const n=(0,s.l7)(Object.create(null),t);for(const r in e)n[r]=Xt(t[r],e[r]);return n}function ee(t,e,n,i=!1){const o={},a={};(0,s.Nj)(a,$e,1),t.propsDefaults=Object.create(null),re(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function ne(t,e,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;re(t,e,o,a)&&(h=!0);for(const i in u)e&&((0,s.RI)(e,i)||(r=(0,s.rs)(i))!==i&&(0,s.RI)(e,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(o[i]=se(l,u,i,void 0,t,!0)):delete o[i]);if(a!==u)for(const t in a)e&&(0,s.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(x(t.emitsOptions,i))continue;const c=e[i];if(l)if((0,s.RI)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const e=(0,s._A)(i);o[e]=se(l,u,e,c,t,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function re(t,e,n,i){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,s.Gg)(r))continue;const l=e[r];let h;o&&(0,s.RI)(o,h=(0,s._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:x(t.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),i=c||s.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=se(o,e,c,i[c],t,!(0,s.RI)(i,c))}}return u}function se(t,e,n,r,i,o){const a=t[n];if(null!=a){const t=(0,s.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,s.mf)(t)){const{propsDefaults:s}=i;n in s?r=s[n]:(un(i),r=s[n]=t.call(null,e),ln())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,s.rs)(n)||(r=!0))}return r}function ie(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!(0,s.mf)(t)){const r=t=>{u=!0;const[n,r]=ie(t,e,!0);(0,s.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,s.Kn)(t)&&r.set(t,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,s._A)(o[h]);oe(t)&&(a[t]=s.kT)}else if(o){0;for(const t in o){const e=(0,s._A)(t);if(oe(e)){const n=o[t],r=a[e]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:n;if(r){const t=ue(Boolean,r.type),n=ue(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,s.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,s.Kn)(t)&&r.set(t,l),l}function oe(t){return"$"!==t[0]}function ae(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function ce(t,e){return ae(t)===ae(e)}function ue(t,e){return(0,s.kJ)(e)?e.findIndex((e=>ce(e,t))):(0,s.mf)(e)&&ce(e,t)?0:-1}const le=t=>"_"===t[0]||"$stable"===t,he=t=>(0,s.kJ)(t)?t.map(Xe):[Xe(t)],fe=(t,e,n)=>{if(e._n)return e;const r=M(((...t)=>he(e(...t))),n);return r._c=!1,r},de=(t,e,n)=>{const r=t._ctx;for(const i in t){if(le(i))continue;const n=t[i];if((0,s.mf)(n))e[i]=fe(i,n,r);else if(null!=n){0;const t=he(n);e[i]=()=>t}}},pe=(t,e)=>{const n=he(e);t.slots.default=()=>n},ge=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,s.Nj)(e,"_",n)):de(e,t.slots={})}else t.slots={},e&&pe(t,e);(0,s.Nj)(t.slots,$e,1)},me=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,a=s.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,s.l7)(i,e),n||1!==t||delete i._):(o=!e.$stable,de(e,i)),a=e}else e&&(pe(t,e),a={default:1});if(o)for(const s in i)le(s)||s in a||delete i[s]};function ye(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ve=0;function we(t,e){return function(n,r=null){(0,s.mf)(n)||(n=Object.assign({},n)),null==r||(0,s.Kn)(r)||(r=null);const i=ye(),o=new Set;let a=!1;const c=i.app={_uid:ve++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Cn,get config(){return i.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,s.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,s.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(s,o,u){if(!a){0;const l=ze(n,r);return l.appContext=i,o&&e?e(l,s):t(l,s,u),a=!0,c._container=s,s.__vue_app__=c,En(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c}};return c}}function be(t,e,n,o,a=!1){if((0,s.kJ)(t))return void t.forEach(((t,r)=>be(t,e&&((0,s.kJ)(e)?e[r]:e),n,o,a)));if(ut(o)&&!a)return;const c=4&o.shapeFlag?En(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===s.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,s.HD)(f)?(d[f]=null,(0,s.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,s.mf)(h))i(h,l,12,[u,d]);else{const e=(0,s.HD)(h),i=(0,r.dq)(h);if(e||i){const r=()=>{if(t.f){const n=e?(0,s.RI)(p,h)?p[h]:d[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,c):(0,s.kJ)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,s.RI)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,(0,s.RI)(p,h)&&(p[h]=u)):i&&(h.value=u,t.k&&(d[t.k]=u))};u?(r.id=-1,_e(r,n)):r()}else 0}}function Ee(){}const _e=$;function Te(t){return Ie(t)}function Ie(t,e){Ee();const n=(0,s.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=s.dG,insertStaticContent:m}=t,y=(t,e,n,r=null,s=null,i=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!qe(t,e)&&(r=X(t),z(t,s,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Re:v(t,e,n,r);break;case xe:w(t,e,n,r);break;case Ne:null==t&&E(e,n,r,o);break;case De:L(t,e,n,r,s,i,o,a,c);break;default:1&h?A(t,e,n,r,s,i,o,a,c):6&h?M(t,e,n,r,s,i,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,s,i,o,a,c,tt)}null!=l&&s&&be(l,t&&t.ref,i,e||t,!e)},v=(t,e,n,r)=>{if(null==t)i(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?i(e.el=l(e.children||""),n,r):e.el=t.el},E=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},T=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=p(t),i(t,n,r),t=s;i(e,n,r)},C=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},A=(t,e,n,r,s,i,o,a,c)=>{o=o||"svg"===e.type,null==t?k(e,n,r,s,i,o,a,c):x(t,e,s,i,o,a,c)},k=(t,e,n,r,o,u,l,h)=>{let d,p;const{type:g,props:m,shapeFlag:y,transition:v,dirs:w}=t;if(d=t.el=c(t.type,u,m&&m.is,m),8&y?f(d,t.children):16&y&&R(t.children,d,null,r,o,u&&"foreignObject"!==g,l,h),w&&xt(t,null,r,"created"),m){for(const e in m)"value"===e||(0,s.Gg)(e)||a(d,e,null,m[e],u,t.children,r,o,J);"value"in m&&a(d,"value",null,m.value),(p=m.onVnodeBeforeMount)&&nn(p,r,t)}D(d,t,t.scopeId,l,r),w&&xt(t,null,r,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(d),i(d,e,n),((p=m&&m.onVnodeMounted)||b||w)&&_e((()=>{p&&nn(p,r,t),b&&v.enter(d),w&&xt(t,null,r,"mounted")}),o)},D=(t,e,n,r,s)=>{if(n&&g(t,n),r)for(let i=0;i<r.length;i++)g(t,r[i]);if(s){let n=s.subTree;if(e===n){const e=s.vnode;D(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},R=(t,e,n,r,s,i,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?Ze(t[u]):Xe(t[u]);y(null,c,e,n,r,s,i,o,a)}},x=(t,e,n,r,i,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||s.kT,g=e.props||s.kT;let m;n&&Se(n,!1),(m=g.onVnodeBeforeUpdate)&&nn(m,n,e,t),d&&xt(e,t,n,"beforeUpdate"),n&&Se(n,!0);const y=i&&"foreignObject"!==e.type;if(h?N(t.dynamicChildren,h,u,n,r,y,o):c||$(t,e,u,null,n,r,y,o,!1),l>0){if(16&l)O(u,e,p,g,n,r,i);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,i),4&l&&a(u,"style",p.style,g.style,i),8&l){const s=e.dynamicProps;for(let e=0;e<s.length;e++){const o=s[e],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,i,t.children,n,r,J)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||O(u,e,p,g,n,r,i);((m=g.onVnodeUpdated)||d)&&_e((()=>{m&&nn(m,n,e,t),d&&xt(e,t,n,"updated")}),r)},N=(t,e,n,r,s,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===De||!qe(c,u)||70&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,s,i,o,!0)}},O=(t,e,n,r,i,o,c)=>{if(n!==r){if(n!==s.kT)for(const u in n)(0,s.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,i,o,J);for(const u in r){if((0,s.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,i,o,J)}"value"in r&&a(t,"value",n.value,r.value)}},L=(t,e,n,r,s,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(i(h,n,r),i(f,n,r),R(e.children,n,f,s,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(N(t.dynamicChildren,p,n,s,o,a,c),(null!=e.key||s&&e===s.subTree)&&Ce(t,e,!0)):$(t,e,n,f,s,o,a,c,l)},M=(t,e,n,r,s,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,r,o,c):F(e,n,r,s,i,o,c):U(t,e,c)},F=(t,e,n,r,s,i,o)=>{const a=t.component=on(t,r,s);if(lt(t)&&(a.ctx.renderer=tt),gn(a),a.asyncDep){if(s&&s.registerDep(a,j),!t.el){const t=a.subTree=ze(xe);w(null,t,e,n)}}else j(a,t,e,n,s,i,o)},U=(t,e,n)=>{const r=e.component=t.component;if(V(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void q(r,e,n);r.next=e,_(r.update),r.update()}else e.el=t.el,r.vnode=e},j=(t,e,n,i,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:i,parent:u,vnode:l}=t,h=n;0,Se(t,!1),n?(n.el=l.el,q(t,n,c)):n=l,r&&(0,s.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&nn(e,u,n,l),Se(t,!0);const f=P(t);0;const p=t.subTree;t.subTree=f,y(p,f,d(p.el),X(p),t,o,a),n.el=f.el,null===h&&B(t,f.el),i&&_e(i,o),(e=n.props&&n.props.onVnodeUpdated)&&_e((()=>nn(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=ut(e);if(Se(t,!1),l&&(0,s.ir)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&nn(r,f,e),Se(t,!0),c&&nt){const n=()=>{t.subTree=P(t),nt(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=P(t);0,y(null,r,n,i,t,o,a),e.el=r.el}if(h&&_e(h,o),!d&&(r=u&&u.onVnodeMounted)){const t=e;_e((()=>nn(r,f,t)),o)}(256&e.shapeFlag||f&&ut(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&_e(t.a,o),t.isMounted=!0,e=n=i=null}},l=t.effect=new r.qq(u,(()=>b(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,Se(t,!0),h()},q=(t,e,n)=>{e.component=t;const s=t.vnode.props;t.vnode=e,t.next=null,ne(t,e.props,s,n),me(t,e.children,n),(0,r.Jd)(),I(),(0,r.lk)()},$=(t,e,n,r,s,i,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void G(u,h,n,r,s,i,o,a,c);if(256&d)return void K(u,h,n,r,s,i,o,a,c)}8&p?(16&l&&J(u,s,i),h!==u&&f(n,h)):16&l?16&p?G(u,h,n,r,s,i,o,a,c):J(u,s,i,!0):(8&l&&f(n,""),16&p&&R(h,n,r,s,i,o,a,c))},K=(t,e,n,r,i,o,a,c,u)=>{t=t||s.Z6,e=e||s.Z6;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?Ze(e[d]):Xe(e[d]);y(t[d],r,n,null,i,o,a,c,u)}l>h?J(t,i,o,!0,!1,f):R(e,n,r,i,o,a,c,u,f)},G=(t,e,n,r,i,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],s=e[l]=u?Ze(e[l]):Xe(e[l]);if(!qe(r,s))break;y(r,s,n,null,i,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],s=e[d]=u?Ze(e[d]):Xe(e[d]);if(!qe(r,s))break;y(r,s,n,null,i,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,s=t<h?e[t].el:r;while(l<=d)y(null,e[l]=u?Ze(e[l]):Xe(e[l]),n,s,i,o,a,c,u),l++}}else if(l>d)while(l<=f)z(t[l],i,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?Ze(e[l]):Xe(e[l]);null!=t.key&&m.set(t.key,l)}let v,w=0;const b=d-g+1;let E=!1,_=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=b){z(r,i,o,!0);continue}let s;if(null!=r.key)s=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&qe(r,e[v])){s=v;break}void 0===s?z(r,i,o,!0):(T[s-g]=l+1,s>=_?_=s:E=!0,y(r,e[s],n,null,i,o,a,c,u),w++)}const I=E?Ae(T):s.Z6;for(v=I.length-1,l=b-1;l>=0;l--){const t=g+l,s=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?y(null,s,n,f,i,o,a,c,u):E&&(v<0||l!==I[v]?H(s,n,f,2):v--)}}},H=(t,e,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void H(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,tt);if(a===De){i(o,e,n);for(let t=0;t<u.length;t++)H(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===Ne)return void T(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,e,n),_e((()=>c.enter(o)),s);else{const{leave:t,delayLeave:r,afterLeave:s}=c,a=()=>i(o,e,n),u=()=>{t(o,(()=>{a(),s&&s()}))};r?r(o,a,u):u()}else i(o,e,n)},z=(t,e,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&be(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!ut(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&nn(g,e,t),6&l)Y(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&xt(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,s,tt,r):u&&(i!==De||h>0&&64&h)?J(u,e,n,!1,!0):(i===De&&384&h||!s&&16&l)&&J(c,e,n),r&&W(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&_e((()=>{g&&nn(g,e,t),d&&xt(t,null,e,"unmounted")}),n)},W=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===De)return void Q(n,r);if(e===Ne)return void C(t);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,o=()=>e(n,i);r?r(t.el,i,o):o()}else i()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:r,scope:i,update:o,subTree:a,um:c}=t;r&&(0,s.ir)(r),i.stop(),o&&(o.active=!1,z(a,t,e,n)),c&&_e(c,e),_e((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},J=(t,e,n,r=!1,s=!1,i=0)=>{for(let o=i;o<t.length;o++)z(t[o],e,n,r,s)},X=t=>6&t.shapeFlag?X(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),Z=(t,e,n)=>{null==t?e._vnode&&z(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),I(),S(),e._vnode=t},tt={p:y,um:z,m:H,r:W,mt:F,mc:R,pc:$,pbc:N,n:X,o:t};let et,nt;return e&&([et,nt]=e(tt)),{render:Z,hydrate:et,createApp:we(Z,et)}}function Se({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ce(t,e,n=!1){const r=t.children,i=e.children;if((0,s.kJ)(r)&&(0,s.kJ)(i))for(let s=0;s<r.length;s++){const t=r[s];let e=i[s];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[s]=Ze(i[s]),e.el=t.el),n||Ce(t,e))}}function Ae(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}const ke=t=>t.__isTeleport;const De=Symbol(void 0),Re=Symbol(void 0),xe=Symbol(void 0),Ne=Symbol(void 0),Oe=[];let Le=null;function Me(t=!1){Oe.push(Le=t?null:[])}function Pe(){Oe.pop(),Le=Oe[Oe.length-1]||null}let Fe=1;function Ue(t){Fe+=t}function Ve(t){return t.dynamicChildren=Fe>0?Le||s.Z6:null,Pe(),Fe>0&&Le&&Le.push(t),t}function je(t,e,n,r,s,i){return Ve(He(t,e,n,r,s,i,!0))}function Be(t){return!!t&&!0===t.__v_isVNode}function qe(t,e){return t.type===e.type&&t.key===e.key}const $e="__vInternal",Ke=({key:t})=>null!=t?t:null,Ge=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,s.HD)(t)||(0,r.dq)(t)||(0,s.mf)(t)?{i:N,r:t,k:e,f:!!n}:t:null;function He(t,e=null,n=null,r=0,i=null,o=(t===De?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ke(e),ref:e&&Ge(e),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(tn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,s.HD)(n)?8:16),Fe>0&&!a&&Le&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Le.push(u),u}const ze=We;function We(t,e=null,n=null,i=0,o=null,a=!1){if(t&&t!==Lt||(t=xe),Be(t)){const r=Ye(t,e,!0);return n&&tn(r,n),Fe>0&&!a&&Le&&(6&r.shapeFlag?Le[Le.indexOf(t)]=r:Le.push(r)),r.patchFlag|=-2,r}if(Tn(t)&&(t=t.__vccOpts),e){e=Qe(e);let{class:t,style:n}=e;t&&!(0,s.HD)(t)&&(e.class=(0,s.C_)(t)),(0,s.Kn)(n)&&((0,r.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),e.style=(0,s.j5)(n))}const c=(0,s.HD)(t)?1:q(t)?128:ke(t)?64:(0,s.Kn)(t)?4:(0,s.mf)(t)?2:0;return He(t,e,n,i,o,c,a,!0)}function Qe(t){return t?(0,r.X3)(t)||$e in t?(0,s.l7)({},t):t:null}function Ye(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=t,c=e?en(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ke(c),ref:e&&e.ref?n&&i?(0,s.kJ)(i)?i.concat(Ge(e)):[i,Ge(e)]:Ge(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ye(t.ssContent),ssFallback:t.ssFallback&&Ye(t.ssFallback),el:t.el,anchor:t.anchor};return u}function Je(t=" ",e=0){return ze(Re,null,t,e)}function Xe(t){return null==t||"boolean"===typeof t?ze(xe):(0,s.kJ)(t)?ze(De,null,t.slice()):"object"===typeof t?Ze(t):ze(Re,null,String(t))}function Ze(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:Ye(t)}function tn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,s.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),tn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||$e in e?3===r&&N&&(1===N.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=N}}else(0,s.mf)(e)?(e={default:e,_ctx:N},n=32):(e=String(e),64&r?(n=16,e=[Je(e)]):n=8);t.children=e,t.shapeFlag|=n}function en(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,s.C_)([e.class,r.class]));else if("style"===t)e.style=(0,s.j5)([e.style,r.style]);else if((0,s.F7)(t)){const n=e[t],i=r[t];!i||n===i||(0,s.kJ)(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=r[t])}return e}function nn(t,e,n,r=null){o(t,e,7,[n,r])}const rn=ye();let sn=0;function on(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||rn,a={uid:sn++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ie(i,o),emitsOptions:R(i,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:i.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=D.bind(null,a),t.ce&&t.ce(a),a}let an=null;const cn=()=>an||N,un=t=>{an=t,t.scope.on()},ln=()=>{an&&an.scope.off(),an=null};function hn(t){return 4&t.vnode.shapeFlag}let fn,dn,pn=!1;function gn(t,e=!1){pn=e;const{props:n,children:r}=t.vnode,s=hn(t);ee(t,n,s,e),ge(t,r);const i=s?mn(t,e):void 0;return pn=!1,i}function mn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,jt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?bn(t):null;un(t),(0,r.Jd)();const c=i(o,t,0,[t.props,n]);if((0,r.lk)(),ln(),(0,s.tI)(c)){if(c.then(ln,ln),e)return c.then((n=>{yn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else yn(t,c,e)}else vn(t,e)}function yn(t,e,n){(0,s.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,s.Kn)(e)&&(t.setupState=(0,r.WL)(e)),vn(t,n)}function vn(t,e,n){const i=t.type;if(!t.render){if(!e&&fn&&!i.render){const e=i.template||Ht(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},r),a);i.render=fn(e,c)}}t.render=i.render||s.dG,dn&&dn(t)}un(t),(0,r.Jd)(),qt(t),(0,r.lk)(),ln()}function wn(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function bn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=wn(t))},slots:t.slots,emit:t.emit,expose:e}}function En(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Vt?Vt[n](t):void 0}}))}function _n(t,e=!0){return(0,s.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Tn(t){return(0,s.mf)(t)&&"__vccOpts"in t}const In=(t,e)=>(0,r.Fl)(t,e,pn);function Sn(t,e,n){const r=arguments.length;return 2===r?(0,s.Kn)(e)&&!(0,s.kJ)(e)?Be(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Be(n)&&(n=[n]),ze(t,e,n))}Symbol("");const Cn="3.2.41"},9242:function(t,e,n){"use strict";n.d(e,{iM:function(){return nt},nr:function(){return Z},ri:function(){return ot}});n(7658);var r=n(7139),s=n(3396);n(4870);const i="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?o.createElementNS(i,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{a.innerHTML=r?`<svg>${t}</svg>`:t;const s=a.content;if(r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l(t,e,n){const s=t.style,i=(0,r.HD)(n);if(n&&!i){for(const t in n)f(s,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&f(s,t,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const h=/\s*!important$/;function f(t,e,n){if((0,r.kJ)(n))n.forEach((n=>f(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=g(t,e);h.test(n)?t.setProperty((0,r.rs)(s),n.replace(h,""),"important"):t[s]=n}}const d=["Webkit","Moz","ms"],p={};function g(t,e){const n=p[e];if(n)return n;let s=(0,r._A)(e);if("filter"!==s&&s in t)return p[e]=s;s=(0,r.kC)(s);for(let r=0;r<d.length;r++){const n=d[r]+s;if(n in t)return p[e]=n}return e}const m="http://www.w3.org/1999/xlink";function y(t,e,n,s,i){if(s&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(m,e.slice(6,e.length)):t.setAttributeNS(m,e,n);else{const s=(0,r.Pq)(e);null==n||s&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function v(t,e,n,s,i,o,a){if("innerHTML"===e||"textContent"===e)return s&&a(s,i,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const s=typeof t[e];"boolean"===s?n=(0,r.yA)(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}function w(t,e,n,r){t.addEventListener(e,n,r)}function b(t,e,n,r){t.removeEventListener(e,n,r)}function E(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[n,a]=T(e);if(r){const o=i[e]=A(r,s);w(t,n,o,a)}else o&&(b(t,n,o,a),i[e]=void 0)}}const _=/(?:Once|Passive|Capture)$/;function T(t){let e;if(_.test(t)){let n;e={};while(n=t.match(_))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.rs)(t.slice(2));return[n,e]}let I=0;const S=Promise.resolve(),C=()=>I||(S.then((()=>I=0)),I=Date.now());function A(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,s.$d)(k(t,n.value),e,5,[t])};return n.value=t,n.attached=C(),n}function k(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const D=/^on[a-z]/,R=(t,e,n,s,i=!1,o,a,c,h)=>{"class"===e?u(t,s,i):"style"===e?l(t,n,s):(0,r.F7)(e)?(0,r.tR)(e)||E(t,e,n,s,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):x(t,e,s,i))?v(t,e,s,o,a,c,h):("true-value"===e?t._trueValue=s:"false-value"===e&&(t._falseValue=s),y(t,e,s,i))};function x(t,e,n,s){return s?"innerHTML"===e||"textContent"===e||!!(e in t&&D.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!D.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const N="transition",O="animation",L=(t,{slots:e})=>(0,s.h)(s.P$,U(t),e);L.displayName="Transition";const M={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},P=(L.props=(0,r.l7)({},s.P$.props,M),(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),F=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function U(t){const e={};for(const r in t)r in M||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=V(i),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:E,onLeaveCancelled:_,onBeforeAppear:T=v,onAppear:I=w,onAppearCancelled:S=b}=e,C=(t,e,n)=>{q(t,e?h:c),q(t,e?l:a),n&&n()},A=(t,e)=>{t._isLeaving=!1,q(t,f),q(t,p),q(t,d),e&&e()},k=t=>(e,n)=>{const r=t?I:w,i=()=>C(e,t,n);P(r,[e,i]),$((()=>{q(e,t?u:o),B(e,t?h:c),F(r)||G(e,s,m,i)}))};return(0,r.l7)(e,{onBeforeEnter(t){P(v,[t]),B(t,o),B(t,a)},onBeforeAppear(t){P(T,[t]),B(t,u),B(t,l)},onEnter:k(!1),onAppear:k(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>A(t,e);B(t,f),Q(),B(t,d),$((()=>{t._isLeaving&&(q(t,f),B(t,p),F(E)||G(t,s,y,n))})),P(E,[t,n])},onEnterCancelled(t){C(t,!1),P(b,[t])},onAppearCancelled(t){C(t,!0),P(S,[t])},onLeaveCancelled(t){A(t),P(_,[t])}})}function V(t){if(null==t)return null;if((0,r.Kn)(t))return[j(t.enter),j(t.leave)];{const e=j(t);return[e,e]}}function j(t){const e=(0,r.He)(t);return e}function B(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function q(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function $(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let K=0;function G(t,e,n,r){const s=t._endId=++K,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=H(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),i()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,f)}function H(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),s=r(N+"Delay"),i=r(N+"Duration"),o=z(s,i),a=r(O+"Delay"),c=r(O+"Duration"),u=z(a,c);let l=null,h=0,f=0;e===N?o>0&&(l=N,h=o,f=i.length):e===O?u>0&&(l=O,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?N:O:null,f=l?l===N?i.length:c.length:0);const d=l===N&&/\b(transform|all)(,|$)/.test(n[N+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function z(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>W(e)+W(t[n]))))}function W(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Y=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function J(t){t.target.composing=!0}function X(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Z={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Y(i);const o=s||i.props&&"number"===i.props.type;w(t,e?"change":"input",(e=>{if(e.target.composing)return;let s=t.value;n&&(s=s.trim()),o&&(s=(0,r.He)(s)),t._assign(s)})),n&&w(t,"change",(()=>{t.value=t.value.trim()})),e||(w(t,"compositionstart",J),w(t,"compositionend",X),w(t,"change",X))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},o){if(t._assign=Y(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(s&&t.value.trim()===e)return;if((i||"number"===t.type)&&(0,r.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const tt=["ctrl","shift","alt","meta"],et={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>tt.some((n=>t[`${n}Key`]&&!e.includes(n)))},nt=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=et[e[t]];if(r&&r(n,e))return}return t(n,...r)};const rt=(0,r.l7)({patchProp:R},c);let st;function it(){return st||(st=(0,s.Us)(rt))}const ot=(...t)=>{const e=it().createApp(...t);const{mount:n}=e;return e.mount=t=>{const s=at(t);if(!s)return;const i=e._component;(0,r.mf)(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function at(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){"use strict";n.d(e,{C_:function(){return d},DM:function(){return N},E9:function(){return rt},F7:function(){return I},Gg:function(){return K},HD:function(){return M},He:function(){return et},Kn:function(){return F},NO:function(){return _},Nj:function(){return tt},Od:function(){return A},PO:function(){return q},Pq:function(){return a},RI:function(){return D},S0:function(){return $},W7:function(){return B},WV:function(){return g},Z6:function(){return b},_A:function(){return z},_N:function(){return x},aU:function(){return X},dG:function(){return E},e1:function(){return i},fY:function(){return r},hR:function(){return J},hq:function(){return m},ir:function(){return Z},j5:function(){return u},kC:function(){return Y},kJ:function(){return R},kT:function(){return w},l7:function(){return C},mf:function(){return L},rs:function(){return Q},tI:function(){return U},tR:function(){return S},yA:function(){return c},yk:function(){return P},zw:function(){return y}});n(7658);function r(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=M(r)?f(r):u(r);if(s)for(const t in s)e[t]=s[t]}return e}return M(t)||F(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function d(t){let e="";if(M(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(F(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=g(t[r],e[r]);return n}function g(t,e){if(t===e)return!0;let n=O(t),r=O(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=P(t),r=P(e),n||r)return t===e;if(n=R(t),r=R(e),n||r)return!(!n||!r)&&p(t,e);if(n=F(t),r=F(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(r&&!s||!r&&s||!g(t[n],e[n]))return!1}}return String(t)===String(e)}function m(t,e){return t.findIndex((t=>g(t,e)))}const y=t=>M(t)?t:null==t?"":R(t)||F(t)&&(t.toString===V||!L(t.toString))?JSON.stringify(t,v,2):String(t),v=(t,e)=>e&&e.__v_isRef?v(t,e.value):x(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:N(e)?{[`Set(${e.size})`]:[...e.values()]}:!F(e)||R(e)||q(e)?e:String(e),w={},b=[],E=()=>{},_=()=>!1,T=/^on[^a-z]/,I=t=>T.test(t),S=t=>t.startsWith("onUpdate:"),C=Object.assign,A=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},k=Object.prototype.hasOwnProperty,D=(t,e)=>k.call(t,e),R=Array.isArray,x=t=>"[object Map]"===j(t),N=t=>"[object Set]"===j(t),O=t=>"[object Date]"===j(t),L=t=>"function"===typeof t,M=t=>"string"===typeof t,P=t=>"symbol"===typeof t,F=t=>null!==t&&"object"===typeof t,U=t=>F(t)&&L(t.then)&&L(t.catch),V=Object.prototype.toString,j=t=>V.call(t),B=t=>j(t).slice(8,-1),q=t=>"[object Object]"===j(t),$=t=>M(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},H=/-(\w)/g,z=G((t=>t.replace(H,((t,e)=>e?e.toUpperCase():"")))),W=/\B([A-Z])/g,Q=G((t=>t.replace(W,"-$1").toLowerCase())),Y=G((t=>t.charAt(0).toUpperCase()+t.slice(1))),J=G((t=>t?`on${Y(t)}`:"")),X=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},4275:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(7077),s="firebase",i="9.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(s,i,"app")},6035:function(t,e,n){"use strict";n.d(e,{ET:function(){return vh},hJ:function(){return al},oe:function(){return yh},PL:function(){return gh},ad:function(){return bl},Xo:function(){return rh},IO:function(){return Zl},r7:function(){return mh},ar:function(){return eh}});n(3408),n(4590),n(7658),n(2801);var r,s=n(7077),i=n(7142),o=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),u={},l=l||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,b.apply(null,arguments)}function E(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function T(){this.s=this.s,this.o=this.o}var I=0,S={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=I)){var t=g(this);delete S[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function A(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function k(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(d(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}function D(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function x(t){return/^[\s\xa0]*$/.test(t)}var N=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function O(t,e){return t<e?-1:t>e?1:0}function L(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function M(t){return-1!=L().indexOf(t)}function P(t){return P[" "](t),t}function F(t){var e=Y;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}P[" "]=f;var U,V=M("Opera"),j=M("Trident")||M("MSIE"),B=M("Edge"),q=B||j,$=M("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!M("Edge"))&&!(M("Trident")||M("MSIE"))&&!M("Edge"),K=-1!=L().toLowerCase().indexOf("webkit")&&!M("Edge");function G(){var t=h.document;return t?t.documentMode:void 0}t:{var H="",z=function(){var t=L();return $?/rv:([^\);]+)(\)|;)/.exec(t):B?/Edge\/([\d\.]+)/.exec(t):j?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):K?/WebKit\/(\S+)/.exec(t):V?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(z&&(H=z?z[1]:""),j){var W=G();if(null!=W&&W>parseFloat(H)){U=String(W);break t}}U=H}var Q,Y={};function J(){return F((function(){let t=0;const e=N(String(U)).split("."),n=N("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=O(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||O(0==s[2].length,0==i[2].length)||O(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(h.document&&j){var X=G();Q=X||(parseInt(U,10)||void 0)}else Q=void 0;var Z=Q;function tt(t,e){if(D.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{P(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:et[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tt.X.h.call(this)}}_(tt,D);var et={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),rt=0;function st(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++rt,this.ba=this.ea=!1}function it(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ot(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function at(t){const e={};for(const n in t)e[n]=t[n];return e}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<ct.length;e++)n=ct[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=C(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}lt.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ft(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new st(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,s){if(r&&r.once)return vt(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)gt(t,e[i],n,r,s);return null}return n=St(n),t&&t[nt]?t.N(e,n,p(r)?!!r.capture:!!r,s):mt(t,e,n,!1,r,s)}function mt(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=p(s)?!!s.capture:!!s,a=Tt(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)R||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Et(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}const e=_t;return t}function vt(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vt(t,e[i],n,r,s);return null}return n=St(n),t&&t[nt]?t.O(e,n,p(r)?!!r.capture:!!r,s):mt(t,e,n,!0,r,s)}function wt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)wt(t,e[i],n,r,s);else r=p(r)?!!r.capture:!!r,n=St(n),t&&t[nt]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ft(i,n,r,s),-1<n&&(it(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,r,s)),(n=-1<t?e[t]:null)&&bt(n))}function bt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[nt])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(ht(n,t),0==n.h&&(n.src=null,e[dt]=null)):it(t)}}}function Et(t){return t in pt?pt[t]:pt[t]="on"+t}function _t(t,e){if(t.ba)t=!0;else{e=new tt(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&bt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[dt],t instanceof lt?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function Ct(){T.call(this),this.i=new lt(this),this.P=this,this.I=null}function At(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new D(e,t);else if(e instanceof D)e.target=e.target||t;else{var s=e;e=new D(r,t),ut(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=kt(o,r,!0,e)&&s}if(o=e.g=t,s=kt(o,r,!0,e)&&s,s=kt(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=kt(o,r,!1,e)&&s}function kt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ht(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}_(Ct,T),Ct.prototype[nt]=!0,Ct.prototype.removeEventListener=function(t,e,n,r){wt(this,t,e,n,r)},Ct.prototype.M=function(){if(Ct.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.I=null},Ct.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Dt=h.JSON.stringify;function Rt(){var t=Vt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xt{constructor(){this.h=this.g=null}add(t,e){const n=Ot.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Nt,Ot=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Lt),(t=>t.reset()));class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Mt(t){h.setTimeout((()=>{throw t}),0)}function Pt(t,e){Nt||Ft(),Ut||(Nt(),Ut=!0),Vt.add(t,e)}function Ft(){var t=h.Promise.resolve(void 0);Nt=function(){t.then(jt)}}var Ut=!1,Vt=new xt;function jt(){for(var t;t=Rt();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=Ot;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function Bt(t,e){Ct.call(this),this.h=t||1,this.g=e||h,this.j=b(this.lb,this),this.l=Date.now()}function qt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Kt(t){t.g=$t((()=>{t.g=null,t.i&&(t.i=!1,Kt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Bt,Ct),r=Bt.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),At(this,"tick"),this.ca&&(qt(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Bt.X.M.call(this),qt(this),delete this.g};class Gt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(t){T.call(this),this.h=t,this.g={}}_(Ht,T);var zt=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var s=0;s<n.length;s++){var i=gt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Qt(t){ot(t.g,(function(t,e){this.g.hasOwnProperty(e)&&bt(t)}),t),t.g={}}function Yt(){this.g=!0}function Jt(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Xt(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Dt(n)}catch(a){return e}}Ht.prototype.M=function(){Ht.X.M.call(this),Qt(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Yt.prototype.Aa=function(){this.g=!1},Yt.prototype.info=function(){};var ne={},re=null;function se(){return re=re||new Ct}function ie(t){D.call(this,ne.Pa,t)}function oe(t){const e=se();At(e,new ie(e,t))}function ae(t,e){D.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=se();At(e,new ae(e,t))}function ue(t,e){D.call(this,ne.Qa,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ne.Pa="serverreachability",_(ie,D),ne.STAT_EVENT="statevent",_(ae,D),ne.Qa="timingevent",_(ue,D);var he={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fe={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function de(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}de.prototype.h=null;var me,ye={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ve(){D.call(this,"d")}function we(){D.call(this,"c")}function be(){}function Ee(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ht(this),this.O=Te,t=q?125:void 0,this.T=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}_(ve,D),_(we,D),_(be,de),be.prototype.g=function(){return new XMLHttpRequest},be.prototype.i=function(){return{}},me=new be;var Te=45e3,Ie={},Se={};function Ce(t,e,n){t.K=1,t.v=We($e(e)),t.s=n,t.P=!0,Ae(t,null)}function Ae(t,e){t.F=Date.now(),xe(t),t.A=$e(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),cn(n.i,"t",r),t.C=0,n=t.l.H,t.h=new _e,t.g=fr(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Gt(b(t.La,t,t.g),t.N)),Wt(t.S,t.g,"readystatechange",t.ib),e=t.H?at(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),oe(1),Jt(t.j,t.u,t.A,t.m,t.U,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function De(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=Re(t,n),r==Se){4==e&&(t.o=4,ce(14),s=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ie){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Zt(t.j,t.m,r,null),Pe(t,r)}ke(t)&&r!=Se&&r!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),sr(e),e.K=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),Le(t))}function Re(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Se:(n=Number(e.substring(n,r)),isNaN(n)?Ie:(r+=1,r+n>e.length?Se:(e=e.substr(r,n),t.C=r+n,e)))}function xe(t){t.V=Date.now()+t.O,Ne(t,t.O)}function Ne(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(b(t.gb,t),e)}function Oe(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||ar(t.l,t)}function Me(t){Oe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.T),Qt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||mn(n.h,t)))if(!t.J&&mn(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;or(n),Qn(n)}rr(n),ce(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=le(b(n.cb,n),6e3));if(1>=gn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else ur(n,11)}else if((t.J||n.g==t)&&or(n),!x(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const s=u[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(yn(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,ze(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=hr(r,r.H?r.ka:null,r.V),o.J){vn(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Oe(a),xe(a)),r.g=o}else nr(r);0<n.i.length&&Jn(n)}else"stop"!=u[0]&&"close"!=u[0]||ur(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ur(n,7):Wn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}oe(4)}catch(u){}}function Fe(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ue(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(d(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ve(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ue(t),r=Fe(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}r=Ee.prototype,r.setTimeout=function(t){this.O=t},r.ib=function(t){t=t.target;const e=this.L;e&&3==qn(t)?e.l():this.La(t)},r.La=function(t){try{if(t==this.g)t:{const l=qn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>l)&&(3!=l||q||this.g&&(this.h.h||this.g.fa()||$n(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=f?3:2),Oe(this);var n=this.g.aa();this.Y=n;e:if(ke(this)){var r=$n(this.g);t="";var s=r.length,i=4==qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),Le(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Xt(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ce(12),Me(this),Le(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pe(this,n)}this.P?(De(this,l,o),q&&this.i&&3==l&&(Wt(this.S,this.T,"tick",this.hb),this.T.start())):(Zt(this.j,this.m,o,null),Pe(this,o)),4==l&&Me(this),this.i&&!this.I&&(4==l?ar(this.l,this):(this.i=!1,xe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Me(this),Le(this)}}}catch(l){}},r.hb=function(){if(this.g){var t=qn(this.g),e=this.g.fa();this.C<e.length&&(Oe(this),De(this,t,e),this.i&&4!=t&&xe(this))}},r.cancel=function(){this.I=!0,Me(this)},r.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Me(this),this.o=2,Le(this)):Ne(this,this.V-t)};var je=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Be(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qe(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qe){this.h=void 0!==e?e:t.h,Ke(this,t.j),this.s=t.s,this.g=t.g,Ge(this,t.m),this.l=t.l,e=t.i;var n=new rn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),He(this,n),this.o=t.o}else t&&(n=String(t).match(je))?(this.h=!!e,Ke(this,n[1]||"",!0),this.s=Qe(n[2]||""),this.g=Qe(n[3]||"",!0),Ge(this,n[4]),this.l=Qe(n[5]||"",!0),He(this,n[6]||"",!0),this.o=Qe(n[7]||"")):(this.h=!!e,this.i=new rn(null,this.h))}function $e(t){return new qe(t)}function Ke(t,e,n){t.j=n?Qe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ge(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function He(t,e,n){e instanceof rn?(t.i=e,ln(t.i,t.h)):(n||(e=Ye(e,en)),t.i=new rn(e,t.h))}function ze(t,e,n){t.i.set(e,n)}function We(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ye(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Je),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Je(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ye(e,Xe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ye(e,Xe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ye(n,"/"==n.charAt(0)?tn:Ze,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ye(n,nn)),t.join("")};var Xe=/[#\/\?@]/g,Ze=/[#\?:]/g,tn=/[#\?]/g,en=/[#\?@]/g,nn=/#/g;function rn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sn(t){t.g||(t.g=new Map,t.h=0,t.i&&Be(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function on(t,e){sn(t),e=un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function an(t,e){return sn(t),e=un(t,e),t.g.has(e)}function cn(t,e,n){on(t,e),0<n.length&&(t.i=null,t.g.set(un(t,e),A(n)),t.h+=n.length)}function un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ln(t,e){e&&!t.j&&(sn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(on(this,e),cn(this,n,t))}),t)),t.j=e}r=rn.prototype,r.add=function(t,e){sn(this),this.i=null,t=un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){sn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){sn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},r.W=function(t){sn(this);let e=[];if("string"===typeof t)an(this,t)&&(e=e.concat(this.g.get(un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return sn(this),this.i=null,t=un(this,t),an(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};var hn=class{constructor(t,e){this.h=t,this.g=e}};function fn(t){this.l=t||dn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function pn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function gn(t){return t.h?1:t.g?t.g.size:0}function mn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function yn(t,e){t.g?t.g.add(e):t.h=e}function vn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function wn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function bn(){}function En(){this.g=new bn}function _n(t,e,n){const r=n||"";try{Ve(t,(function(t,n){let s=t;p(t)&&(s=Dt(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Tn(t,e){const n=new Yt;if(h.Image){const r=new Image;r.onload=E(In,n,r,"TestLoadImage: loaded",!0,e),r.onerror=E(In,n,r,"TestLoadImage: error",!1,e),r.onabort=E(In,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=E(In,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function In(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function Sn(t){this.l=t.ac||null,this.j=t.jb||!1}function Cn(t,e){Ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=An,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}fn.prototype.cancel=function(){if(this.i=wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},bn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},bn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},_(Sn,de),Sn.prototype.g=function(){return new Cn(this.l,this.j)},Sn.prototype.i=function(t){return function(){return t}}({}),_(Cn,Ct);var An=0;function kn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rn(t)}function Rn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Cn.prototype,r.open=function(t,e){if(this.readyState!=An)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=An},r.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):Rn(this),3==this.readyState&&kn(this)}},r.Va=function(t){this.g&&(this.response=this.responseText=t,Dn(this))},r.Ua=function(t){this.g&&(this.response=t,Dn(this))},r.ga=function(){this.g&&Dn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var xn=h.JSON.parse;function Nn(t){Ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=On,this.K=this.L=!1}_(Nn,Ct);var On="",Ln=/^https?$/i,Mn=["POST","PUT"];function Pn(t){return j&&J()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Fn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Un(t),jn(t)}function Un(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}function Vn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=qn(t)||2!=t.aa()))if(t.v&&4==qn(t))$t(t.Ha,0,t);else if(At(t,"readystatechange"),4==qn(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var s=String(t.H).match(je)[1]||null;if(!s&&h.self&&h.self.location){var i=h.self.location.protocol;s=i.substr(0,i.length-1)}r=!Ln.test(s?s.toLowerCase():"")}n=r}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var o=2<qn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Un(t)}}finally{jn(t)}}}function jn(t,e){if(t.g){Bn(t);const r=t.g,s=t.C[0]?f:null;t.g=null,t.C=null,e||At(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Bn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function qn(t){return t.g?t.g.readyState:0}function $n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case On:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(kr){return null}}function Kn(t){let e="";return ot(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Gn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Kn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):ze(t,e,n))}function Hn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zn(t){this.Ca=0,this.i=[],this.j=new Yt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Hn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Hn("baseRetryDelayMs",5e3,t),this.bb=Hn("retryDelaySeedMs",1e4,t),this.$a=Hn("forwardChannelMaxRetries",2,t),this.ta=Hn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new fn(t&&t.concurrentRequestLimit),this.Fa=new En,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Wn(t){if(Yn(t),3==t.G){var e=t.U++,n=$e(t.F);ze(n,"SID",t.I),ze(n,"RID",e),ze(n,"TYPE","terminate"),tr(t,n),e=new Ee(t,t.j,e,void 0),e.K=2,e.v=We($e(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=fr(e.l,null),e.g.da(e.v)),e.F=Date.now(),xe(e)}lr(t)}function Qn(t){t.g&&(sr(t),t.g.cancel(),t.g=null)}function Yn(t){Qn(t),t.u&&(h.clearTimeout(t.u),t.u=null),or(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Jn(t){pn(t.h)||t.m||(t.m=!0,Pt(t.Ja,t),t.C=0)}function Xn(t,e){return!(gn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=le(b(t.Ja,t,e),cr(t,t.C)),t.C++,!0))}function Zn(t,e){var n;n=e?e.m:t.U++;const r=$e(t.F);ze(r,"SID",t.I),ze(r,"RID",n),ze(r,"AID",t.T),tr(t,r),t.o&&t.s&&Gn(r,t.o,t.s),n=new Ee(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=er(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yn(t.h,n),Ce(n,r,e)}function tr(t,e){t.ia&&ot(t.ia,(function(t,n){ze(e,n,t)})),t.l&&Ve({},(function(t,n){ze(e,n,t)}))}function er(t,e,n){n=Math.min(t.i.length,n);var r=t.l?b(t.l.Ra,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const c=s[a].g;if(n-=e,0>n)e=Math.max(0,s[a].h-100),o=!1;else try{_n(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function nr(t){t.g||t.u||(t.Z=1,Pt(t.Ia,t),t.A=0)}function rr(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=le(b(t.Ia,t),cr(t,t.A)),t.A++,!0)}function sr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ir(t){t.g=new Ee(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=$e(t.sa);ze(e,"RID","rpc"),ze(e,"SID",t.I),ze(e,"CI",t.L?"0":"1"),ze(e,"AID",t.T),ze(e,"TYPE","xmlhttp"),tr(t,e),t.o&&t.s&&Gn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=We($e(e)),n.s=null,n.P=!0,Ae(n,t)}function or(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ar(t,e){var n=null;if(t.g==e){or(t),sr(t),t.g=null;var r=2}else{if(!mn(t.h,e))return;n=e.D,vn(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=se(),At(r,new ue(r,n,e,s)),Jn(t)}else nr(t);else if(s=e.o,3==s||0==s&&0<t.pa||!(1==r&&Xn(t,e)||2==r&&rr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:ur(t,5);break;case 4:ur(t,10);break;case 3:ur(t,6);break;default:ur(t,2)}}function cr(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ur(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=b(t.kb,t);n||(n=new qe("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ke(n,"https"),We(n)),Tn(n.toString(),r)}else ce(2);t.G=0,t.l&&t.l.va(e),lr(t),Yn(t)}function lr(t){if(t.G=0,t.la=[],t.l){const e=wn(t.h);0==e.length&&0==t.i.length||(k(t.la,e),k(t.la,t.i),t.h.i.length=0,A(t.i),t.i.length=0),t.l.ua()}}function hr(t,e,n){var r=n instanceof qe?$e(n):new qe(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),Ge(r,r.m);else{var s=h.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new qe(null,void 0);r&&Ke(i,r),e&&(i.g=e),s&&Ge(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&ze(r,n,e),ze(r,"VER",t.ma),tr(t,r),r}function fr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Nn(new Sn({jb:!0})):new Nn(t.ra),e.Ka(t.H),e}function dr(){}function pr(){if(j&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function gr(t,e){Ct.call(this),this.g=new zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vr(this)}function mr(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function yr(){we.call(this),this.status=1}function vr(t){this.g=t}r=Nn.prototype,r.Ka=function(t){this.L=t},r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Fn(this,i)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=h.FormData&&t instanceof h.FormData,!(0<=C(Mn,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bn(this),0<this.B&&((this.K=Pn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=$t(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Fn(this,i)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),jn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jn(this,!0)),Nn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Vn(this):this.fb())},r.fb=function(){Vn(this)},r.aa=function(){try{return 2<qn(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),xn(e)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Ee(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=at(i),ut(i,this.S)):i=this.S),null!==this.o||this.N||(s.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=er(this,s,e),n=$e(this.F),ze(n,"RID",t),ze(n,"CVER",22),this.D&&ze(n,"X-HTTP-Session-Id",this.D),tr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Kn(i)))+"&"+e:this.o&&Gn(n,this.o,i)),yn(this.h,s),this.Ya&&ze(n,"TYPE","init"),this.O?(ze(n,"$req",e),ze(n,"SID","null"),s.Z=!0,Ce(s,n,null)):Ce(s,n,e),this.G=2}}else 3==this.G&&(t?Zn(this,t):0==this.i.length||pn(this.h)||Zn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=le(b(this.eb,this),t)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ce(10),Qn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Qn(this),rr(this),ce(19))},r.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},pr.prototype.g=function(t,e){return new gr(t,e)},_(gr,Ct),gr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ce(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=hr(t,null,t.V),Jn(t)},gr.prototype.close=function(){Wn(this.g)},gr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Dt(t),t=n);e.i.push(new hn(e.ab++,t)),3==e.G&&Jn(e)},gr.prototype.M=function(){this.g.l=null,delete this.j,Wn(this.g),delete this.g,gr.X.M.call(this)},_(mr,ve),_(yr,we),_(vr,dr),vr.prototype.xa=function(){At(this.g,"a")},vr.prototype.wa=function(t){At(this.g,new mr(t))},vr.prototype.va=function(t){At(this.g,new yr(t))},vr.prototype.ua=function(){At(this.g,"b")},pr.prototype.createWebChannel=pr.prototype.g,gr.prototype.send=gr.prototype.u,gr.prototype.open=gr.prototype.m,gr.prototype.close=gr.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,fe.COMPLETE="complete",ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",Ct.prototype.listen=Ct.prototype.N,Nn.prototype.listenOnce=Nn.prototype.O,Nn.prototype.getLastError=Nn.prototype.Oa,Nn.prototype.getLastErrorCode=Nn.prototype.Ea,Nn.prototype.getStatus=Nn.prototype.aa,Nn.prototype.getResponseJson=Nn.prototype.Sa,Nn.prototype.getResponseText=Nn.prototype.fa,Nn.prototype.send=Nn.prototype.da,Nn.prototype.setWithCredentials=Nn.prototype.Ka;var wr=u.createWebChannelTransport=function(){return new pr},br=u.getStatEventTarget=function(){return se()},Er=u.ErrorCode=he,_r=u.EventType=fe,Tr=u.Event=ne,Ir=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Sr=u.FetchXmlHttpFactory=Sn,Cr=u.WebChannel=ge,Ar=u.XhrIo=Nn;const kr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Dr.UNAUTHENTICATED=new Dr(null),Dr.GOOGLE_CREDENTIALS=new Dr("google-credentials-uid"),Dr.FIRST_PARTY=new Dr("first-party-uid"),Dr.MOCK_USER=new Dr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Rr="9.12.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new o.Yd("@firebase/firestore");function Nr(){return xr.logLevel}function Or(t,...e){if(xr.logLevel<=o["in"].DEBUG){const n=e.map(Pr);xr.debug(`Firestore (${Rr}): ${t}`,...n)}}function Lr(t,...e){if(xr.logLevel<=o["in"].ERROR){const n=e.map(Pr);xr.error(`Firestore (${Rr}): ${t}`,...n)}}function Mr(t,...e){if(xr.logLevel<=o["in"].WARN){const n=e.map(Pr);xr.warn(`Firestore (${Rr}): ${t}`,...n)}}function Pr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t="Unexpected state"){const e=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: `+t;throw Lr(e),new Error(e)}function Ur(t,e){t||Fr()}function Vr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Br extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Dr.UNAUTHENTICATED)))}shutdown(){}}class Gr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Hr{constructor(t){this.t=t,this.currentUser=Dr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qr,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Or("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Or("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qr)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Or("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ur("string"==typeof e.accessToken),new $r(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ur(null===t||"string"==typeof t),new Dr(t)}}class zr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=Dr.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ur(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Wr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new zr(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Dr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yr{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Or("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Or("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Or("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):Or("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ur("string"==typeof t.token),this.A=t.token,new Qr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Jr(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function Zr(t,e){return t<e?-1:t>e?1:0}function ts(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Br(jr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Br(jr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Br(jr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Br(jr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return es.fromMillis(Date.now())}static fromDate(t){return es.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new es(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Zr(this.nanoseconds,t.nanoseconds):Zr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ns(t)}static min(){return new ns(new es(0,0))}static max(){return new ns(new es(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e,n){void 0===e?e=0:e>t.length&&Fr(),void 0===n?n=t.length-e:n>t.length-e&&Fr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===rs.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof rs?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ss extends rs{construct(t,e,n){return new ss(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Br(jr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ss(e)}static emptyPath(){return new ss([])}}const is=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class os extends rs{construct(t,e,n){return new os(t,e,n)}static isValidIdentifier(t){return is.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),os.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new os(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Br(jr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Br(jr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Br(jr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new Br(jr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new os(e)}static emptyPath(){return new os([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t){this.path=t}static fromPath(t){return new as(ss.fromString(t))}static fromName(t){return new as(ss.fromString(t).popFirst(5))}static empty(){return new as(ss.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ss.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ss.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new as(new ss(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}cs.UNKNOWN_ID=-1;function us(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ns.fromTimestamp(1e9===r?new es(n+1,0):new es(n,r));return new hs(s,as.empty(),e)}function ls(t){return new hs(t.readTime,t.key,-1)}class hs{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new hs(ns.min(),as.empty(),-1)}static max(){return new hs(ns.max(),as.empty(),-1)}}function fs(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=as.comparator(t.documentKey,e.documentKey),0!==n?n:Zr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ps{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t){if(t.code!==jr.FAILED_PRECONDITION||t.message!==ds)throw t;Or("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Fr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ms(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ms?e:ms.resolve(e)}catch(t){return ms.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ms.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ms.reject(e)}static resolve(t){return new ms(((e,n)=>{e(t)}))}static reject(t){return new ms(((e,n)=>{n(t)}))}static waitFor(t){return new ms(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=ms.resolve(!1);for(const n of t)e=e.next((t=>t?ms.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ms(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new ms(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Es(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vs.at=-1;class _s{constructor(t,e){this.comparator=t,this.root=e||Is.EMPTY}insert(t,e){return new _s(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Is.BLACK,null,null))}remove(t){return new _s(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Is.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ts(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ts(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ts(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ts(this.root,t,this.comparator,!0)}}class Ts{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Is{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Is.RED,this.left=null!=r?r:Is.EMPTY,this.right=null!=s?s:Is.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Is(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Is.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Is.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Is.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Is.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Fr();if(this.right.isRed())throw Fr();const t=this.left.check();if(t!==this.right.check())throw Fr();return t+(this.isRed()?0:1)}}Is.EMPTY=null,Is.RED=!0,Is.BLACK=!1,Is.EMPTY=new class{constructor(){this.size=0}get key(){throw Fr()}get value(){throw Fr()}get color(){throw Fr()}get left(){throw Fr()}get right(){throw Fr()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Is(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(t){this.comparator=t,this.data=new _s(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Cs(this.data.getIterator())}getIteratorFrom(t){return new Cs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ss))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ss(this.comparator);return e.data=t,e}}class Cs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{constructor(t){this.fields=t,t.sort(os.comparator)}static empty(){return new As([])}unionWith(t){let e=new Ss(os.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new As(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ts(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ks(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ks(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Zr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ks.EMPTY_BYTE_STRING=new ks("");const Ds=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rs(t){if(Ur(!!t),"string"==typeof t){let e=0;const n=Ds.exec(t);if(Ur(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xs(t.seconds),nanos:xs(t.nanos)}}function xs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ns(t){return"string"==typeof t?ks.fromBase64String(t):ks.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ls(t){const e=t.mapValue.fields.__previous_value__;return Os(e)?Ls(e):e}function Ms(t){const e=Rs(t.mapValue.fields.__local_write_time__.timestampValue);return new es(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fs{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Fs("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Fs&&t.projectId===this.projectId&&t.database===this.database}}function Us(t){return null==t}function Vs(t){return 0===t&&1/t==-1/0}function js(t){return"number"==typeof t&&Number.isInteger(t)&&!Vs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Os(t)?4:ni(t)?9007199254740991:10:Fr()}function $s(t,e){if(t===e)return!0;const n=qs(t);if(n!==qs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ms(t).isEqual(Ms(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Rs(t.timestampValue),r=Rs(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ns(t.bytesValue).isEqual(Ns(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return xs(t.geoPointValue.latitude)===xs(e.geoPointValue.latitude)&&xs(t.geoPointValue.longitude)===xs(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return xs(t.integerValue)===xs(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=xs(t.doubleValue),r=xs(e.doubleValue);return n===r?Vs(n)===Vs(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],$s);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ws(n)!==ws(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!$s(n[s],r[s])))return!1;return!0}(t,e);default:return Fr()}}function Ks(t,e){return void 0!==(t.values||[]).find((t=>$s(t,e)))}function Gs(t,e){if(t===e)return 0;const n=qs(t),r=qs(e);if(n!==r)return Zr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Zr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=xs(t.integerValue||t.doubleValue),r=xs(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Hs(t.timestampValue,e.timestampValue);case 4:return Hs(Ms(t),Ms(e));case 5:return Zr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ns(t),r=Ns(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=Zr(n[s],r[s]);if(0!==t)return t}return Zr(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Zr(xs(t.latitude),xs(e.latitude));return 0!==n?n:Zr(xs(t.longitude),xs(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Gs(n[s],r[s]);if(t)return t}return Zr(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Bs.mapValue&&e===Bs.mapValue)return 0;if(t===Bs.mapValue)return 1;if(e===Bs.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=Zr(r[o],i[o]);if(0!==t)return t;const e=Gs(n[r[o]],s[i[o]]);if(0!==e)return e}return Zr(r.length,i.length)}(t.mapValue,e.mapValue);default:throw Fr()}}function Hs(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Zr(t,e);const n=Rs(t),r=Rs(e),s=Zr(n.seconds,r.seconds);return 0!==s?s:Zr(n.nanos,r.nanos)}function zs(t){return Ws(t)}function Ws(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Rs(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ns(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,as.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ws(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Ws(t.fields[s])}`;return n+"}"}(t.mapValue):Fr();var e,n}function Qs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ys(t){return!!t&&"integerValue"in t}function Js(t){return!!t&&"arrayValue"in t}function Xs(t){return!!t&&"nullValue"in t}function Zs(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ti(t){return!!t&&"mapValue"in t}function ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ei(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ni(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ri{constructor(t){this.value=t}static empty(){return new ri({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ti(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ei(e)}setAll(t){let e=os.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=ei(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());ti(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $s(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ti(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){bs(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new ri(ei(this.value))}}function si(t){const e=[];return bs(t.fields,((t,n)=>{const r=new os([t]);if(ti(n)){const t=si(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new As(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ii{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new ii(t,0,ns.min(),ns.min(),ri.empty(),0)}static newFoundDocument(t,e,n){return new ii(t,1,e,ns.min(),n,0)}static newNoDocument(t,e){return new ii(t,2,e,ns.min(),ri.empty(),0)}static newUnknownDocument(t,e){return new ii(t,3,e,ns.min(),ri.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ri.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ri.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ns.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ii&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ii(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ht=null}}function ai(t,e=null,n=[],r=[],s=null,i=null,o=null){return new oi(t,e,n,r,s,i,o)}function ci(t){const e=Vr(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+zs(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Us(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>zs(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>zs(t))).join(",")),e.ht=t}return e.ht}function ui(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${zs(e.value)}`;var e})).join(", ")}]`),Us(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>zs(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>zs(t))).join(",")),`Target(${e})`}function li(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Ti(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!$s(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Si(t.startAt,e.startAt)&&Si(t.endAt,e.endAt)}function hi(t){return as.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class fi extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new di(t,e,n):"array-contains"===e?new yi(t,n):"in"===e?new vi(t,n):"not-in"===e?new wi(t,n):"array-contains-any"===e?new bi(t,n):new fi(t,e,n)}static lt(t,e,n){return"in"===e?new pi(t,n):new gi(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Gs(e,this.value)):null!==e&&qs(this.value)===qs(e)&&this.ft(Gs(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Fr()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class di extends fi{constructor(t,e,n){super(t,e,n),this.key=as.fromName(n.referenceValue)}matches(t){const e=as.comparator(t.key,this.key);return this.ft(e)}}class pi extends fi{constructor(t,e){super(t,"in",e),this.keys=mi("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class gi extends fi{constructor(t,e){super(t,"not-in",e),this.keys=mi("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function mi(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>as.fromName(t.referenceValue)))}class yi extends fi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Js(e)&&Ks(e.arrayValue,this.value)}}class vi extends fi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ks(this.value.arrayValue,e)}}class wi extends fi{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ks(this.value.arrayValue,e)}}class bi extends fi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Js(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ks(this.value.arrayValue,t)))}}class Ei{constructor(t,e){this.position=t,this.inclusive=e}}class _i{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ti(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ii(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?as.comparator(as.fromName(o.referenceValue),n.key):Gs(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Si(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$s(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Ai(t,e,n,r,s,i,o,a){return new Ci(t,e,n,r,s,i,o,a)}function ki(t){return new Ci(t)}function Di(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ri(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function xi(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Ni(t){return null!==t.collectionGroup}function Oi(t){const e=Vr(t);if(null===e._t){e._t=[];const t=xi(e),n=Ri(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new _i(t)),e._t.push(new _i(os.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new _i(os.keyField(),t))}}}return e._t}function Li(t){const e=Vr(t);if(!e.wt)if("F"===e.limitType)e.wt=ai(e.path,e.collectionGroup,Oi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Oi(e)){const e="desc"===s.dir?"asc":"desc";t.push(new _i(s.field,e))}const n=e.endAt?new Ei(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ei(e.startAt.position,e.startAt.inclusive):null;e.wt=ai(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function Mi(t,e,n){return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pi(t,e){return li(Li(t),Li(e))&&t.limitType===e.limitType}function Fi(t){return`${ci(Li(t))}|lt:${t.limitType}`}function Ui(t){return`Query(target=${ui(Li(t))}; limitType=${t.limitType})`}function Vi(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):as.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ii(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Oi(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ii(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Oi(t),e))}(t,e)}function ji(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bi(t){return(e,n)=>{let r=!1;for(const s of Oi(t)){const t=qi(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function qi(t,e,n){const r=t.field.isKeyField()?as.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Gs(r,s):Fr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Fr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vs(e)?"-0":e}}function Ki(t){return{integerValue:""+t}}function Gi(t,e){return js(e)?Ki(e):$i(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this._=void 0}}function zi(t,e,n){return t instanceof Yi?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ji?Xi(t,e):t instanceof Zi?to(t,e):function(t,e){const n=Qi(t,e),r=no(n)+no(t.yt);return Ys(n)&&Ys(t.yt)?Ki(r):$i(t.It,r)}(t,e)}function Wi(t,e,n){return t instanceof Ji?Xi(t,e):t instanceof Zi?to(t,e):n}function Qi(t,e){return t instanceof eo?Ys(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Yi extends Hi{}class Ji extends Hi{constructor(t){super(),this.elements=t}}function Xi(t,e){const n=ro(e);for(const r of t.elements)n.some((t=>$s(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Zi extends Hi{constructor(t){super(),this.elements=t}}function to(t,e){let n=ro(e);for(const r of t.elements)n=n.filter((t=>!$s(t,r)));return{arrayValue:{values:n}}}class eo extends Hi{constructor(t,e){super(),this.It=t,this.yt=e}}function no(t){return xs(t.integerValue||t.doubleValue)}function ro(t){return Js(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ji&&e instanceof Ji||t instanceof Zi&&e instanceof Zi?ts(t.elements,e.elements,$s):t instanceof eo&&e instanceof eo?$s(t.yt,e.yt):t instanceof Yi&&e instanceof Yi}(t.transform,e.transform)}class io{constructor(t,e){this.version=t,this.transformResults=e}}class oo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new oo}static exists(t){return new oo(void 0,t)}static updateTime(t){return new oo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ao(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class co{}function uo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new bo(t.key,oo.none()):new go(t.key,t.data,oo.none());{const n=t.data,r=ri.empty();let s=new Ss(os.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new mo(t.key,r,new As(s.toArray()),oo.none())}}function lo(t,e,n){t instanceof go?function(t,e,n){const r=t.value.clone(),s=vo(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof mo?function(t,e,n){if(!ao(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=vo(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(yo(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ho(t,e,n,r){return t instanceof go?function(t,e,n,r){if(!ao(t.precondition,e))return n;const s=t.value.clone(),i=wo(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof mo?function(t,e,n,r){if(!ao(t.precondition,e))return n;const s=wo(t.fieldTransforms,r,e),i=e.data;return i.setAll(yo(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return ao(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function fo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Qi(r.transform,t||null);null!=s&&(null===n&&(n=ri.empty()),n.set(r.field,s))}return n||null}function po(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ts(t,e,((t,e)=>so(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class go extends co{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class mo extends co{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function vo(t,e,n){const r=new Map;Ur(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Wi(o,a,n[s]))}return r}function wo(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,zi(t,i,e))}return r}class bo extends co{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eo extends co{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var To,Io;function So(t){switch(t){default:return Fr();case jr.CANCELLED:case jr.UNKNOWN:case jr.DEADLINE_EXCEEDED:case jr.RESOURCE_EXHAUSTED:case jr.INTERNAL:case jr.UNAVAILABLE:case jr.UNAUTHENTICATED:return!1;case jr.INVALID_ARGUMENT:case jr.NOT_FOUND:case jr.ALREADY_EXISTS:case jr.PERMISSION_DENIED:case jr.FAILED_PRECONDITION:case jr.ABORTED:case jr.OUT_OF_RANGE:case jr.UNIMPLEMENTED:case jr.DATA_LOSS:return!0}}function Co(t){if(void 0===t)return Lr("GRPC error has no .code"),jr.UNKNOWN;switch(t){case To.OK:return jr.OK;case To.CANCELLED:return jr.CANCELLED;case To.UNKNOWN:return jr.UNKNOWN;case To.DEADLINE_EXCEEDED:return jr.DEADLINE_EXCEEDED;case To.RESOURCE_EXHAUSTED:return jr.RESOURCE_EXHAUSTED;case To.INTERNAL:return jr.INTERNAL;case To.UNAVAILABLE:return jr.UNAVAILABLE;case To.UNAUTHENTICATED:return jr.UNAUTHENTICATED;case To.INVALID_ARGUMENT:return jr.INVALID_ARGUMENT;case To.NOT_FOUND:return jr.NOT_FOUND;case To.ALREADY_EXISTS:return jr.ALREADY_EXISTS;case To.PERMISSION_DENIED:return jr.PERMISSION_DENIED;case To.FAILED_PRECONDITION:return jr.FAILED_PRECONDITION;case To.ABORTED:return jr.ABORTED;case To.OUT_OF_RANGE:return jr.OUT_OF_RANGE;case To.UNIMPLEMENTED:return jr.UNIMPLEMENTED;case To.DATA_LOSS:return jr.DATA_LOSS;default:return Fr()}}(Io=To||(To={}))[Io.OK=0]="OK",Io[Io.CANCELLED=1]="CANCELLED",Io[Io.UNKNOWN=2]="UNKNOWN",Io[Io.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Io[Io.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Io[Io.NOT_FOUND=5]="NOT_FOUND",Io[Io.ALREADY_EXISTS=6]="ALREADY_EXISTS",Io[Io.PERMISSION_DENIED=7]="PERMISSION_DENIED",Io[Io.UNAUTHENTICATED=16]="UNAUTHENTICATED",Io[Io.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Io[Io.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Io[Io.ABORTED=10]="ABORTED",Io[Io.OUT_OF_RANGE=11]="OUT_OF_RANGE",Io[Io.UNIMPLEMENTED=12]="UNIMPLEMENTED",Io[Io.INTERNAL=13]="INTERNAL",Io[Io.UNAVAILABLE=14]="UNAVAILABLE",Io[Io.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ao{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){bs(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return Es(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new _s(as.comparator);function Do(){return ko}const Ro=new _s(as.comparator);function xo(...t){let e=Ro;for(const n of t)e=e.insert(n.key,n);return e}function No(t){let e=Ro;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Oo(){return Mo()}function Lo(){return Mo()}function Mo(){return new Ao((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Po=new _s(as.comparator),Fo=new Ss(as.comparator);function Uo(...t){let e=Fo;for(const n of t)e=e.add(n);return e}const Vo=new Ss(Zr);function jo(){return Vo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,qo.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Bo(ns.min(),r,jo(),Do(),Uo())}}class qo{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new qo(n,e,Uo(),Uo(),Uo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,e,n,r){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=r}}class Ko{constructor(t,e){this.targetId=t,this.At=e}}class Go{constructor(t,e,n=ks.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ho{constructor(){this.Rt=0,this.bt=Qo(),this.Pt=ks.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=Uo(),e=Uo(),n=Uo();return this.bt.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Fr()}})),new qo(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=Qo()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class zo{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Do(),this.qt=Wo(),this.Kt=new Ss(Zr)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:Fr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,r=this.Xt(e);if(r){const t=r.target;if(hi(t))if(0===n){const n=new as(t.path);this.jt(e,n,ii.newNoDocument(n,ns.min()))}else Ur(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,r)=>{const s=this.Xt(r);if(s){if(n.current&&hi(s.target)){const e=new as(s.target.path);null!==this.Ut.get(e)||this.ee(r,e)||this.jt(r,e,ii.newNoDocument(e,t))}n.Dt&&(e.set(r,n.xt()),n.Nt())}}));let n=Uo();this.qt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const r=new Bo(t,e,this.Kt,this.Ut,n);return this.Ut=Do(),this.qt=Wo(),this.Kt=new Ss(Zr),r}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,e)?r.kt(e,1):r.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new Ho,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Ss(Zr),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||Or("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Ho),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Wo(){return new _s(as.comparator)}function Qo(){return new _s(as.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Jo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Xo{constructor(t,e){this.databaseId=t,this.gt=e}}function Zo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ta(t,e){return t.gt?e.toBase64():e.toUint8Array()}function ea(t,e){return Zo(t,e.toTimestamp())}function na(t){return Ur(!!t),ns.fromTimestamp(function(t){const e=Rs(t);return new es(e.seconds,e.nanos)}(t))}function ra(t,e){return function(t){return new ss(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function sa(t){const e=ss.fromString(t);return Ur(Aa(e)),e}function ia(t,e){return ra(t.databaseId,e.path)}function oa(t,e){const n=sa(e);if(n.get(1)!==t.databaseId.projectId)throw new Br(jr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Br(jr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new as(la(n))}function aa(t,e){return ra(t.databaseId,e)}function ca(t){const e=sa(t);return 4===e.length?ss.emptyPath():la(e)}function ua(t){return new ss(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function la(t){return Ur(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ha(t,e,n){return{name:ia(t,e),fields:n.value.mapValue.fields}}function fa(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Fr()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.gt?(Ur(void 0===e||"string"==typeof e),ks.fromBase64String(e||"")):(Ur(void 0===e||e instanceof Uint8Array),ks.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?jr.UNKNOWN:Co(t.code);return new Br(e,t.message||"")}(o);n=new Go(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=oa(t,r.document.name),i=na(r.document.updateTime),o=new ri({mapValue:{fields:r.document.fields}}),a=ii.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new $o(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=oa(t,r.document),i=r.readTime?na(r.readTime):ns.min(),o=ii.newNoDocument(s,i),a=r.removedTargetIds||[];n=new $o([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=oa(t,r.document),i=r.removedTargetIds||[];n=new $o([],i,s,null)}else{if(!("filter"in e))return Fr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new _o(r),i=t.targetId;n=new Ko(i,s)}}return n}function da(t,e){let n;if(e instanceof go)n={update:ha(t,e.key,e.value)};else if(e instanceof bo)n={delete:ia(t,e.key)};else if(e instanceof mo)n={update:ha(t,e.key,e.data),updateMask:Ca(e.fieldMask)};else{if(!(e instanceof Eo))return Fr();n={verify:ia(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Yi)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ji)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Zi)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof eo)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw Fr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ea(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Fr()}(t,e.precondition)),n}function pa(t,e){return t&&t.length>0?(Ur(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?na(t.updateTime):na(e);return n.isEqual(ns.min())&&(n=na(e)),new io(n,t.transformResults||[])}(t,e)))):[]}function ga(t,e){return{documents:[aa(t,e.path)]}}function ma(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=aa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=aa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Zs(t.value))return{unaryFilter:{field:_a(t.field),op:"IS_NAN"}};if(Xs(t.value))return{unaryFilter:{field:_a(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Zs(t.value))return{unaryFilter:{field:_a(t.field),op:"IS_NOT_NAN"}};if(Xs(t.value))return{unaryFilter:{field:_a(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_a(t.field),op:Ea(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:_a(t.field),direction:ba(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.gt||Us(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ya(t){let e=ca(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ur(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=wa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new _i(Ta(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Us(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ei(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ei(n,e)}(n.endAt)),Ai(e,s,o,i,a,"F",c,u)}function va(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Fr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function wa(t){return t?void 0!==t.unaryFilter?[Sa(t)]:void 0!==t.fieldFilter?[Ia(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>wa(t))).reduce(((t,e)=>t.concat(e))):Fr():[]}function ba(t){return Yo[t]}function Ea(t){return Jo[t]}function _a(t){return{fieldPath:t.canonicalString()}}function Ta(t){return os.fromServerFormat(t.fieldPath)}function Ia(t){return fi.create(Ta(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Fr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Sa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ta(t.unaryFilter.field);return fi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ta(t.unaryFilter.field);return fi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ta(t.unaryFilter.field);return fi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ta(t.unaryFilter.field);return fi.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Fr()}}function Ca(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Aa(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Da=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ra=Da;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&lo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ho(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ho(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Lo();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=uo(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(ns.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Uo())}isEqual(t){return this.batchId===t.batchId&&ts(this.mutations,t.mutations,((t,e)=>po(t,e)))&&ts(this.baseMutations,t.baseMutations,((t,e)=>po(t,e)))}}class Na{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Ur(t.mutations.length===n.length);let r=Po;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Na(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,e,n,r,s=ns.min(),i=ns.min(),o=ks.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new La(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new La(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new La(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t){this.re=t}}function Pa(t){const e=ya({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Mi(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(xs(t.integerValue));else if("doubleValue"in t){const n=xs(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),Vs(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(Ns(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?ni(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):Fr()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const r of Object.keys(n))this._e(r,e),this.ae(n[r],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const r of n)this.ae(r,e)}ge(t,e){this.le(e,37),as.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}Fa.Te=new Fa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua{constructor(){this.Ye=new Va}addToCollectionParentIndex(t,e){return this.Ye.add(e),ms.resolve()}getCollectionParents(t,e){return ms.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return ms.resolve()}deleteFieldIndex(t,e){return ms.resolve()}getDocumentsMatchingTarget(t,e){return ms.resolve(null)}getIndexType(t,e){return ms.resolve(0)}getFieldIndexes(t,e){return ms.resolve([])}getNextCollectionGroupToUpdate(t){return ms.resolve(null)}getMinOffset(t,e){return ms.resolve(hs.min())}getMinOffsetFromCollectionGroup(t,e){return ms.resolve(hs.min())}updateCollectionGroup(t,e,n){return ms.resolve()}updateIndexEntries(t,e){return ms.resolve()}}class Va{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ss(ss.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ss(ss.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class ja{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ja(t,ja.DEFAULT_COLLECTION_PERCENTILE,ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ja.DEFAULT_COLLECTION_PERCENTILE=10,ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ja.DEFAULT=new ja(41943040,ja.DEFAULT_COLLECTION_PERCENTILE,ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ja.DISABLED=new ja(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Ba(0)}static vn(){return new Ba(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(){this.changes=new Ao((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ii.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ms.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $a{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&ho(n.mutation,t,As.empty(),es.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Uo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Uo()){const r=Oo();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=xo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Oo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Uo())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=Do();const i=Mo(),o=Mo();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof mo)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),ho(o.mutation,e,o.mutation.getFieldMask(),es.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new $a(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Mo();let r=new _s(((t,e)=>t-e)),s=Uo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||As.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||Uo()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Lo();c.forEach((t=>{if(!s.has(t)){const r=uo(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return ms.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return as.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ni(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):ms.resolve(Oo());let o=-1,a=s;return i.next((e=>ms.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?ms.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,Uo()))).next((t=>({batchId:o,changes:No(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new as(e)).next((t=>{let e=xo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=xo();return this.indexManager.getCollectionParents(t,r).next((i=>ms.forEach(i,(i=>{const o=function(t,e){return new Ci(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,ii.newInvalidDocument(n)))}));let n=xo();return r.forEach(((r,s)=>{const i=t.get(r);void 0!==i&&ho(i.mutation,s,As.empty(),es.now()),Vi(e,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):ms.resolve(ii.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return ms.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:na(n.createTime)}),ms.resolve()}getNamedQuery(t,e){return ms.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Pa(t.bundledQuery),readTime:na(t.readTime)}}(e)),ms.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.overlays=new _s(as.comparator),this.es=new Map}getOverlay(t,e){return ms.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Oo();return ms.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ue(t,e,r)})),ms.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),ms.resolve()}getOverlaysForCollection(t,e,n){const r=Oo(),s=e.length+1,i=new as(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ms.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new _s(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Oo(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Oo(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return ms.resolve(o)}ue(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Oa(e,n));let s=this.es.get(e);void 0===s&&(s=Uo(),this.es.set(e,s)),this.es.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.ns=new Ss(Wa.ss),this.rs=new Ss(Wa.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Wa(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Wa(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new as(new ss([])),n=new Wa(e,t),r=new Wa(e,t+1),s=[];return this.rs.forEachInRange([n,r],(t=>{this.cs(t),s.push(t.key)})),s}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new as(new ss([])),n=new Wa(e,t),r=new Wa(e,t+1);let s=Uo();return this.rs.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Wa(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Wa{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return as.comparator(t.key,e.key)||Zr(t._s,e._s)}static os(t,e){return Zr(t._s,e._s)||as.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Ss(Wa.ss)}checkEmpty(t){return ms.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new xa(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.gs=this.gs.add(new Wa(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ms.resolve(i)}lookupMutationBatch(t,e){return ms.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),s=r<0?0:r;return ms.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ms.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return ms.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Wa(e,0),r=new Wa(e,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,r],(t=>{const e=this.ys(t._s);s.push(e)})),ms.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ss(Zr);return e.forEach((t=>{const e=new Wa(t,0),r=new Wa(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],(t=>{n=n.add(t._s)}))})),ms.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;as.isDocumentKey(s)||(s=s.child(""));const i=new Wa(new as(s),0);let o=new Ss(Zr);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t._s)),!0)}),i),ms.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ur(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return ms.forEach(e.mutations,(r=>{const s=new Wa(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Wa(e,0),r=this.gs.firstAfterOrEqual(n);return ms.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ms.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t){this.Es=t,this.docs=new _s(as.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ms.resolve(n?n.document.mutableCopy():ii.newInvalidDocument(e))}getEntries(t,e){let n=Do();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ii.newInvalidDocument(t))})),ms.resolve(n)}getAllFromCollection(t,e,n){let r=Do();const s=new as(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||fs(ls(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return ms.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Fr()}As(t,e){return ms.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ja(this)}getSize(t){return ms.resolve(this.size)}}class Ja extends qa{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)})),ms.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t){this.persistence=t,this.Rs=new Ao((t=>ci(t)),li),this.lastRemoteSnapshotVersion=ns.min(),this.highestTargetId=0,this.bs=0,this.Ps=new za,this.targetCount=0,this.vs=Ba.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),ms.resolve()}getLastRemoteSnapshotVersion(t){return ms.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ms.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),ms.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),ms.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ba(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,ms.resolve()}updateTargetData(t,e){return this.Dn(e),ms.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,ms.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Rs.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),ms.waitFor(s).next((()=>r))}getTargetCount(t){return ms.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return ms.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),ms.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),ms.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),ms.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return ms.resolve(n)}containsKey(t,e){return ms.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new vs(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Xa(this),this.indexManager=new Ua,this.remoteDocumentCache=function(t){return new Ya(t)}((t=>this.referenceDelegate.xs(t))),this.It=new Ma(e),this.Ns=new Ga(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ha,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Qa(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Or("MemoryPersistence","Starting transaction:",t);const r=new tc(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((t=>this.referenceDelegate.Os(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ms(t,e){return ms.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class tc extends ps{constructor(t){super(),this.currentSequenceNumber=t}}class ec{constructor(t){this.persistence=t,this.Fs=new za,this.$s=null}static Bs(t){return new ec(t)}get Ls(){if(this.$s)return this.$s;throw Fr()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),ms.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),ms.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),ms.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ms.forEach(this.Ls,(n=>{const r=as.fromPath(n);return this.Us(t,r).next((t=>{t||e.removeEntry(r,ns.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return ms.or([()=>ms.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=Uo(),r=Uo();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new nc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next((s=>s||this.Oi(t,e,r,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(Di(e))return ms.resolve(null);let n=Li(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Mi(e,null,"F"),n=Li(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const s=Uo(...r);return this.Ni.getDocuments(t,s).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Fi(e,r);return this.$i(e,i,s,n.readTime)?this.ki(t,Mi(e,null,"F")):this.Bi(t,i,e,n)}))))})))))}Oi(t,e,n,r){return Di(e)||r.isEqual(ns.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((s=>{const i=this.Fi(e,s);return this.$i(e,i,n,r)?this.Mi(t,e):(Nr()<=o["in"].DEBUG&&Or("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ui(e)),this.Bi(t,i,e,us(r,-1)))}))}Fi(t,e){let n=new Ss(Bi(t));return e.forEach(((e,r)=>{Vi(t,r)&&(n=n.add(r))})),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Mi(t,e){return Nr()<=o["in"].DEBUG&&Or("QueryEngine","Using full collection scan to execute query:",Ui(e)),this.Ni.getDocumentsMatchingQuery(t,e,hs.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.It=r,this.Ui=new _s(Zr),this.qi=new Ao((t=>ci(t)),li),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ka(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function ic(t,e,n,r){return new sc(t,e,n,r)}async function oc(t,e){const n=Vr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=Uo();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function ac(t,e){const n=Vr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=ms.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Ur(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Uo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function cc(t){const e=Vr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function uc(t,e){const n=Vr(t),r=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(ks.EMPTY_BYTE_STRING,ns.min()).withLastLimboFreeSnapshotVersion(ns.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Cs.updateTargetData(t,u))}));let a=Do(),c=Uo();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(lc(t,i,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!r.isEqual(ns.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return ms.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=s,t)))}function lc(t,e,n){let r=Uo(),s=Uo();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Do();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(ns.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Or("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Wi:r,zi:s}}))}function hc(t,e){const n=Vr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function fc(t,e){const n=Vr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Cs.getTargetData(t,e).next((s=>s?(r=s,ms.resolve(r)):n.Cs.allocateTargetId(t).next((s=>(r=new La(e,s,0,t.currentSequenceNumber),n.Cs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function dc(t,e,n){const r=Vr(t),s=r.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!ys(t))throw t;Or("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ui=r.Ui.remove(e),r.qi.delete(s.target)}function pc(t,e,n){const r=Vr(t);let s=ns.min(),i=Uo();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Vr(t),s=r.qi.get(n);return void 0!==s?ms.resolve(r.Ui.get(s)):r.Cs.getTargetData(e,n)}(r,t,Li(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.Li.getDocumentsMatchingQuery(t,e,n?s:ns.min(),n?i:Uo()))).next((t=>(gc(r,ji(e),t),{documents:t,Hi:i})))))}function gc(t,e,n){let r=t.Ki.get(e)||ns.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Ki.set(e,r)}class mc{constructor(){this.activeTargetIds=jo()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class yc{constructor(){this.Lr=new mc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new mc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Or("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Or("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,r,s){const i=this.ho(t,e);Or("RestConnection","Sending: ",i,n);const o={};return this.lo(o,r,s),this.fo(t,i,o,n).then((t=>(Or("RestConnection","Received: ",t),t)),(e=>{throw Mr("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}_o(t,e,n,r,s,i){return this.ao(t,e,n,r,s)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Rr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=bc[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise(((s,i)=>{const o=new Ar;o.setWithCredentials(!0),o.listenOnce(_r.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Er.NO_ERROR:const e=o.getResponseJson();Or("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Er.TIMEOUT:Or("Connection",'RPC "'+t+'" timed out'),i(new Br(jr.DEADLINE_EXCEEDED,"Request time out"));break;case Er.HTTP_ERROR:const n=o.getStatus();if(Or("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(jr).indexOf(e)>=0?e:jr.UNKNOWN}(t.status);i(new Br(e,t.message))}else i(new Br(jr.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Br(jr.UNAVAILABLE,"Connection failed."));break;default:Fr()}}finally{Or("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=wr(),i=br(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Sr({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Or("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new Ec({Hr:t=>{l?Or("Connection","Not sending because WebChannel is closed:",t):(u||(Or("Connection","Opening WebChannel transport."),c.open(),u=!0),Or("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,Cr.EventType.OPEN,(()=>{l||Or("Connection","WebChannel transport opened.")})),f(c,Cr.EventType.CLOSE,(()=>{l||(l=!0,Or("Connection","WebChannel transport closed"),h.io())})),f(c,Cr.EventType.ERROR,(t=>{l||(l=!0,Mr("Connection","WebChannel transport errored:",t),h.io(new Br(jr.UNAVAILABLE,"The operation could not be completed")))})),f(c,Cr.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Ur(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){Or("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=To[t];if(void 0!==e)return Co(e)}(t),n=s.message;void 0===e&&(e=jr.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,h.io(new Br(e,n)),c.close()}else Or("Connection","WebChannel received:",n),h.ro(n)}})),f(i,Tr.STAT_EVENT,(t=>{t.stat===Ir.PROXY?Or("Connection","Detected buffering proxy"):t.stat===Ir.NOPROXY&&Or("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){return new Xo(t,!0)}class Sc{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&Or("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e,n,r,s,i,o,a){this.Hs=t,this.vo=n,this.Vo=r,this.So=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Sc(t,e)}ko(){return 1===this.state||5===this.state||this.Oo()}Oo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&null===this.Co&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.Bo())))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===jr.RESOURCE_EXHAUSTED?(Lr(e.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===jr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Do===e&&this.Qo(t,n)}),(e=>{t((()=>{const t=new Br(jr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)}))}))}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.Oo()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.jo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(t){return Or("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Hs.enqueueAndForget((()=>this.Do===t?e():(Or("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ac extends Cc{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.It=s}Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=fa(this.It,t),n=function(t){if(!("targetChange"in t))return ns.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ns.min():e.readTime?na(e.readTime):ns.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=ua(this.It),e.addTarget=function(t,e){let n;const r=e.target;return n=hi(r)?{documents:ga(t,r)}:{query:ma(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ta(t,e.resumeToken):e.snapshotVersion.compareTo(ns.min())>0&&(n.readTime=Zo(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=va(this.It,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=ua(this.It),e.removeTarget=t,this.Lo(e)}}class kc extends Cc{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,e){return this.So.wo("Write",t,e)}onMessage(t){if(Ur(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const e=pa(t.writeResults,t.commitTime),n=na(t.commitTime);return this.listener.tu(n,e)}return Ur(!t.writeResults||0===t.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=ua(this.It),this.Lo(t)}Zo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>da(this.It,t)))};this.Lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.It=r,this.su=!1}iu(){if(this.su)throw new Br(jr.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.So.ao(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===jr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Br(jr.UNKNOWN,t.toString())}))}_o(t,e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.So._o(t,e,n,s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===jr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Br(jr.UNKNOWN,t.toString())}))}terminate(){this.su=!0}}class Rc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){0===this.ru&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve()))))}lu(t){"Online"===this.state?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.au("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.au(t)}au(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Lr(e),this.uu=!1):Or("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr((t=>{n.enqueueAndForget((async()=>{jc(this)&&(Or("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Vr(t);e.wu.add(4),await Oc(e),e.yu.set("Unknown"),e.wu.delete(4),await Nc(e)}(this))}))})),this.yu=new Rc(n,r)}}async function Nc(t){if(jc(t))for(const e of t.mu)await e(!0)}async function Oc(t){for(const e of t.mu)await e(!1)}function Lc(t,e){const n=Vr(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Vc(n)?Uc(n):su(n).Oo()&&Pc(n,e))}function Mc(t,e){const n=Vr(t),r=su(n);n._u.delete(e),r.Oo()&&Fc(n,e),0===n._u.size&&(r.Oo()?r.$o():jc(n)&&n.yu.set("Unknown"))}function Pc(t,e){t.pu.Mt(e.targetId),su(t).Ho(e)}function Fc(t,e){t.pu.Mt(e),su(t).Jo(e)}function Uc(t){t.pu=new zo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),su(t).start(),t.yu.cu()}function Vc(t){return jc(t)&&!su(t).ko()&&t._u.size>0}function jc(t){return 0===Vr(t).wu.size}function Bc(t){t.pu=void 0}async function qc(t){t._u.forEach(((e,n)=>{Pc(t,e)}))}async function $c(t,e){Bc(t),Vc(t)?(t.yu.lu(e),Uc(t)):t.yu.set("Unknown")}async function Kc(t,e,n){if(t.yu.set("Online"),e instanceof Go&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t._u.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t._u.delete(r),t.pu.removeTarget(r))}(t,e)}catch(n){Or("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Gc(t,n)}else if(e instanceof $o?t.pu.Gt(e):e instanceof Ko?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(ns.min()))try{const e=await cc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.te(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t._u.get(r);s&&t._u.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(ks.EMPTY_BYTE_STRING,n.snapshotVersion)),Fc(t,e);const r=new La(n.target,e,1,n.sequenceNumber);Pc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Or("RemoteStore","Failed to raise snapshot:",e),await Gc(t,e)}}async function Gc(t,e,n){if(!ys(e))throw e;t.wu.add(1),await Oc(t),t.yu.set("Offline"),n||(n=()=>cc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Or("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Nc(t)}))}function Hc(t,e){return e().catch((n=>Gc(t,n,e)))}async function zc(t){const e=Vr(t),n=iu(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Wc(e);)try{const t=await hc(e.localStore,r);if(null===t){0===e.du.length&&n.$o();break}r=t.batchId,Qc(e,t)}catch(t){await Gc(e,t)}Yc(e)&&Jc(e)}function Wc(t){return jc(t)&&t.du.length<10}function Qc(t,e){t.du.push(e);const n=iu(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Yc(t){return jc(t)&&!iu(t).ko()&&t.du.length>0}function Jc(t){iu(t).start()}async function Xc(t){iu(t).nu()}async function Zc(t){const e=iu(t);for(const n of t.du)e.Zo(n.mutations)}async function tu(t,e,n){const r=t.du.shift(),s=Na.from(r,e,n);await Hc(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await zc(t)}async function eu(t,e){e&&iu(t).Xo&&await async function(t,e){if(n=e.code,So(n)&&n!==jr.ABORTED){const n=t.du.shift();iu(t).Fo(),await Hc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await zc(t)}var n}(t,e),Yc(t)&&Jc(t)}async function nu(t,e){const n=Vr(t);n.asyncQueue.verifyOperationInProgress(),Or("RemoteStore","RemoteStore received new credentials");const r=jc(n);n.wu.add(3),await Oc(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Nc(n)}async function ru(t,e){const n=Vr(t);e?(n.wu.delete(2),await Nc(n)):e||(n.wu.add(2),await Oc(n),n.yu.set("Unknown"))}function su(t){return t.Iu||(t.Iu=function(t,e,n){const r=Vr(t);return r.iu(),new Ac(e,r.So,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:qc.bind(null,t),Zr:$c.bind(null,t),zo:Kc.bind(null,t)}),t.mu.push((async e=>{e?(t.Iu.Fo(),Vc(t)?Uc(t):t.yu.set("Unknown")):(await t.Iu.stop(),Bc(t))}))),t.Iu}function iu(t){return t.Tu||(t.Tu=function(t,e,n){const r=Vr(t);return r.iu(),new kc(e,r.So,r.authCredentials,r.appCheckCredentials,r.It,n)}(t.datastore,t.asyncQueue,{Yr:Xc.bind(null,t),Zr:eu.bind(null,t),eu:Zc.bind(null,t),tu:tu.bind(null,t)}),t.mu.push((async e=>{e?(t.Tu.Fo(),await zc(t)):(await t.Tu.stop(),t.du.length>0&&(Or("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))}))),t.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ou{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new ou(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Br(jr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function au(t,e){if(Lr("AsyncQueue",`${e}: ${t}`),ys(t))return new Br(jr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||as.comparator(e.key,n.key):(t,e)=>as.comparator(t.key,e.key),this.keyedMap=xo(),this.sortedSet=new _s(this.comparator)}static emptySet(t){return new cu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof cu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new cu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.Eu=new _s(as.comparator)}track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):Fr():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class lu{constructor(t,e,n,r,s,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new lu(t,e,cu.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.Ru=void 0,this.listeners=[]}}class fu{constructor(){this.queries=new Ao((t=>Fi(t)),Pi),this.onlineState="Unknown",this.bu=new Set}}async function du(t,e){const n=Vr(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new hu),s)try{i.Ru=await n.onListen(r)}catch(t){const n=au(t,`Initialization of query '${Ui(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.vu(i.Ru)&&yu(n)}async function pu(t,e){const n=Vr(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function gu(t,e){const n=Vr(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.vu(s)&&(r=!0);e.Ru=s}}r&&yu(n)}function mu(t,e,n){const r=Vr(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function yu(t){t.bu.forEach((t=>{t.next()}))}class vu{constructor(t,e,n){this.query=t,this.Vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new lu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Su?this.Cu(t)&&(this.Vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.Vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=lu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Su=!0,this.Vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu{constructor(t){this.key=t}}class bu{constructor(t){this.key=t}}class Eu{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Uo(),this.mutatedKeys=Uo(),this.Gu=Bi(t),this.Qu=new cu(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new uu,r=e?e.Qu:this.Qu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Vi(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(i=i.add(l),s=f?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Qu:i,zu:n,$i:o,mutatedKeys:s}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const s=t.zu.Au();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Fr()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const i=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==s.length||a?{snapshot:new lu(this.query,t.Qu,r,s,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new uu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=Uo(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new bu(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new wu(n))})),e}tc(t){this.Uu=t.Hi,this.Ku=Uo();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return lu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class _u{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Tu{constructor(t){this.key=t,this.nc=!1}}class Iu{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new Ao((t=>Fi(t)),Pi),this.rc=new Map,this.oc=new Set,this.uc=new _s(as.comparator),this.cc=new Map,this.ac=new za,this.hc={},this.lc=new Map,this.fc=Ba.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Su(t,e){const n=Ku(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const t=await fc(n.localStore,Li(e));n.isPrimaryClient&&Lc(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await Cu(n,e,r,"current"===i,t.resumeToken)}return s}async function Cu(t,e,n,r,s){t._c=(e,n,r)=>async function(t,e,n,r){let s=e.view.Wu(n);s.$i&&(s=await pc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return Uu(t,e.targetId,o.Xu),o.snapshot}(t,e,n,r);const i=await pc(t.localStore,e,!0),o=new Eu(e,i.Hi),a=o.Wu(i.documents),c=qo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,c);Uu(t,n,u.Xu);const l=new _u(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Au(t,e){const n=Vr(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter((t=>!Pi(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Mc(n.remoteStore,r.targetId),Pu(n,r.targetId)})).catch(gs)):(Pu(n,r.targetId),await dc(n.localStore,r.targetId,!0))}async function ku(t,e,n){const r=Gu(t);try{const t=await function(t,e){const n=Vr(t),r=es.now(),s=e.reduce(((t,e)=>t.add(e.key)),Uo());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Do(),c=Uo();return n.Gi.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=fo(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new mo(t.key,e,si(e.value.mapValue),oo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:No(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new _s(Zr)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Bu(r,t.changes),await zc(r.remoteStore)}catch(t){const e=au(t,"Failed to persist write");n.reject(e)}}async function Du(t,e){const n=Vr(t);try{const t=await uc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.cc.get(e);r&&(Ur(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.nc=!0:t.modifiedDocuments.size>0?Ur(r.nc):t.removedDocuments.size>0&&(Ur(r.nc),r.nc=!1))})),await Bu(n,t,e)}catch(t){await gs(t)}}function Ru(t,e,n){const r=Vr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach(((n,r)=>{const s=r.view.Pu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Vr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Pu(e)&&(r=!0)})),r&&yu(n)}(r.eventManager,e),t.length&&r.sc.zo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xu(t,e,n){const r=Vr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let t=new _s(as.comparator);t=t.insert(i,ii.newNoDocument(i,ns.min()));const n=Uo().add(i),s=new Bo(ns.min(),new Map,new Ss(Zr),t,n);await Du(r,s),r.uc=r.uc.remove(i),r.cc.delete(e),ju(r)}else await dc(r.localStore,e,!1).then((()=>Pu(r,e,n))).catch(gs)}async function Nu(t,e){const n=Vr(t),r=e.batch.batchId;try{const t=await ac(n.localStore,e);Mu(n,r,null),Lu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bu(n,t)}catch(t){await gs(t)}}async function Ou(t,e,n){const r=Vr(t);try{const t=await function(t,e){const n=Vr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ur(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Mu(r,e,n),Lu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bu(r,t)}catch(n){await gs(n)}}function Lu(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function Mu(t,e,n){const r=Vr(t);let s=r.hc[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function Pu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||Fu(t,e)}))}function Fu(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(Mc(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),ju(t))}function Uu(t,e,n){for(const r of n)r instanceof wu?(t.ac.addReference(r.key,e),Vu(t,r)):r instanceof bu?(Or("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Fu(t,r.key)):Fr()}function Vu(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(Or("SyncEngine","New document in limbo: "+n),t.oc.add(r),ju(t))}function ju(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new as(ss.fromString(e)),r=t.fc.next();t.cc.set(r,new Tu(n)),t.uc=t.uc.insert(n,r),Lc(t.remoteStore,new La(Li(ki(n.path)),r,2,vs.at))}}async function Bu(t,e,n){const r=Vr(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((t,a)=>{o.push(r._c(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=nc.Ci(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.sc.zo(s),await async function(t,e){const n=Vr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ms.forEach(e,(e=>ms.forEach(e.Si,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ms.forEach(e.Di,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!ys(t))throw t;Or("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ui.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(t,s)}}}(r.localStore,i))}async function qu(t,e){const n=Vr(t);if(!n.currentUser.isEqual(e)){Or("SyncEngine","User change. New user:",e.toKey());const t=await oc(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new Br(jr.CANCELLED,e))}))})),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Bu(n,t.ji)}}function $u(t,e){const n=Vr(t),r=n.cc.get(e);if(r&&r.nc)return Uo().add(r.key);{let t=Uo();const r=n.rc.get(e);if(!r)return t;for(const e of r){const r=n.ic.get(e);t=t.unionWith(r.view.ju)}return t}}function Ku(t){const e=Vr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Du.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$u.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xu.bind(null,e),e.sc.zo=gu.bind(null,e.eventManager),e.sc.wc=mu.bind(null,e.eventManager),e}function Gu(t){const e=Vr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ou.bind(null,e),e}class Hu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Ic(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return ic(this.persistence,new rc,t.initialUser,this.It)}yc(t){return new Za(ec.Bs,this.It)}gc(t){return new yc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ru(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=qu.bind(null,this.syncEngine),await ru(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fu}createDatastore(t){const e=Ic(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new _c(r));var r;return function(t,e,n,r){return new Dc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>Ru(this.syncEngine,t,0),i=wc.C()?new wc:new vc,new xc(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new Iu(t,e,n,r,s,i);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Vr(t);Or("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await Oc(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t,e,n){if(!n)throw new Br(jr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qu(t,e,n,r){if(!0===e&&!0===r)throw new Br(jr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yu(t){if(!as.isDocumentKey(t))throw new Br(jr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ju(t){if(as.isDocumentKey(t))throw new Br(jr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Fr()}function Zu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Br(jr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xu(t);throw new Br(jr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tl=new Map;class el{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Br(jr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Br(jr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Qu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new el({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Br(jr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Br(jr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new el(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Kr;switch(t.type){case"gapi":const e=t.client;return new Wr(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Br(jr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=tl.get(t);e&&(Or("ComponentProvider","Removing Datastore"),tl.delete(t),e.terminate())}(this),Promise.resolve()}}function rl(t,e,n,r={}){var s;const i=(t=Zu(t,nl))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&Mr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Dr.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new Br(jr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Dr(i)}t._authCredentials=new Gr(new $r(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ol(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new sl(this.firestore,t,this._key)}}class il{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new il(this.firestore,t,this._query)}}class ol extends il{constructor(t,e,n){super(t,e,ki(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new sl(this.firestore,null,new as(t))}withConverter(t){return new ol(this.firestore,t,this._path)}}function al(t,e,...n){if(t=(0,a.m9)(t),Wu("collection","path",e),t instanceof nl){const r=ss.fromString(e,...n);return Ju(r),new ol(t,null,r)}{if(!(t instanceof sl||t instanceof ol))throw new Br(jr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ss.fromString(e,...n));return Ju(r),new ol(t.firestore,null,r)}}function cl(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Xr.R()),Wu("doc","path",e),t instanceof nl){const r=ss.fromString(e,...n);return Yu(r),new sl(t,null,new as(r))}{if(!(t instanceof sl||t instanceof ol))throw new Br(jr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ss.fromString(e,...n));return Yu(r),new sl(t.firestore,t instanceof ol?t.converter:null,new as(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Lr("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ll{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Dr.UNAUTHENTICATED,this.clientId=Xr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Or("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Or("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Br(jr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=au(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function hl(t,e){t.asyncQueue.verifyOperationInProgress(),Or("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await oc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function fl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dl(t);Or("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>nu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>nu(e.remoteStore,n))),t.onlineComponents=e}async function dl(t){return t.offlineComponents||(Or("FirestoreClient","Using default OfflineComponentProvider"),await hl(t,new Hu)),t.offlineComponents}async function pl(t){return t.onlineComponents||(Or("FirestoreClient","Using default OnlineComponentProvider"),await fl(t,new zu)),t.onlineComponents}function gl(t){return pl(t).then((t=>t.syncEngine))}async function ml(t){const e=await pl(t),n=e.eventManager;return n.onListen=Su.bind(null,e.syncEngine),n.onUnlisten=Au.bind(null,e.syncEngine),n}function yl(t,e,n={}){const r=new qr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new ul({next:n=>{e.enqueueAndForget((()=>pu(t,o))),n.fromCache&&"server"===r.source?s.reject(new Br(jr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new vu(n,i,{includeMetadataChanges:!0,ku:!0});return du(t,o)}(await ml(t),t.asyncQueue,e,n,r))),r.promise}class vl{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Sc(this,"async_queue_retry"),this.Wc=()=>{const t=Tc();t&&Or("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=Tc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=Tc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise((()=>{}));const e=new qr;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(_){if(!ys(_))throw _;Or("AsyncQueue","Operation failed with retryable error: "+_)}this.Lc.length>0&&this.No.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Lr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=ou.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.qc.push(r),r}zc(){this.Kc&&Fr()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.qc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}class wl extends nl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new vl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_l(this),this._firestoreClient.terminate()}}function bl(t,e){const n="object"==typeof t?t:(0,s.Mq)(),r="string"==typeof t?t:e||"(default)",i=(0,s.qX)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,a.P0)("firestore");t&&rl(i,...t)}return i}function El(t){return t._firestoreClient||_l(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _l(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ps(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ll(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Tl(ks.fromBase64String(t))}catch(t){throw new Br(jr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Tl(ks.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Br(jr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new os(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Br(jr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Br(jr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Zr(this._lat,t._lat)||Zr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=/^__.*__$/;class kl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new mo(t,this.data,this.fieldMask,e,this.fieldTransforms):new go(t,this.data,e,this.fieldTransforms)}}class Dl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new mo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Rl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Fr()}}class xl{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=r,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new xl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Hl(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(Rl(this.sa)&&Al.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Nl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Ic(t)}da(t,e,n,r=!1){return new xl({sa:t,methodName:e,fa:n,path:os.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Ol(t){const e=t._freezeSettings(),n=Ic(t._databaseId);return new Nl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ll(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);ql("Data must be an object, but it was:",o,r);const a=jl(r,o);let c,u;if(i.merge)c=new As(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=$l(e,r,n);if(!o.contains(s))throw new Br(jr.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);zl(t,s)||t.push(s)}c=new As(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new kl(new ri(a),c,u)}class Ml extends Sl{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ml}}function Pl(t,e,n,r){const s=t.da(1,e,n);ql("Data must be an object, but it was:",s,r);const i=[],o=ri.empty();bs(r,((t,r)=>{const c=Gl(e,t,n);r=(0,a.m9)(r);const u=s.ca(c);if(r instanceof Ml)i.push(c);else{const t=Vl(r,u);null!=t&&(i.push(c),o.set(c,t))}}));const c=new As(i);return new Dl(o,c,s.fieldTransforms)}function Fl(t,e,n,r,s,i){const o=t.da(1,e,n),c=[$l(e,r,n)],u=[s];if(i.length%2!=0)throw new Br(jr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<i.length;a+=2)c.push($l(e,i[a])),u.push(i[a+1]);const l=[],h=ri.empty();for(let d=c.length-1;d>=0;--d)if(!zl(l,c[d])){const t=c[d];let e=u[d];e=(0,a.m9)(e);const n=o.ca(t);if(e instanceof Ml)l.push(t);else{const r=Vl(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new As(l);return new Dl(h,f,o.fieldTransforms)}function Ul(t,e,n,r=!1){return Vl(n,t.da(r?4:3,e))}function Vl(t,e){if(Bl(t=(0,a.m9)(t)))return ql("Unsupported field value:",e,t),jl(t,e);if(t instanceof Sl)return function(t,e){if(!Rl(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=Vl(s,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Gi(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=es.fromDate(t);return{timestampValue:Zo(e.It,n)}}if(t instanceof es){const n=new es(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Zo(e.It,n)}}if(t instanceof Cl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Tl)return{bytesValue:ta(e.It,t._byteString)};if(t instanceof sl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ra(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Xu(t)}`)}(t,e)}function jl(t,e){const n={};return Es(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(t,((t,r)=>{const s=Vl(r,e.ra(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Bl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof es||t instanceof Cl||t instanceof Tl||t instanceof sl||t instanceof Sl)}function ql(t,e,n){if(!Bl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Xu(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function $l(t,e,n){if((e=(0,a.m9)(e))instanceof Il)return e._internalPath;if("string"==typeof e)return Gl(t,e);throw Hl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Kl=new RegExp("[~\\*/\\[\\]]");function Gl(t,e,n){if(e.search(Kl)>=0)throw Hl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Il(...e.split("."))._internalPath}catch(r){throw Hl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Br(jr.INVALID_ARGUMENT,a+t+c)}function zl(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ql(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Yl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ql extends Wl{data(){return super.data()}}function Yl(t,e){return"string"==typeof e?Gl(t,e):e instanceof Il?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Br(jr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xl{}function Zl(t,...e){for(const n of e)t=n._apply(t);return t}class th extends Xl{constructor(t,e,n){super(),this.ma=t,this.ga=e,this.ya=n,this.type="where"}_apply(t){const e=Ol(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new Br(jr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){ih(o,i);const e=[];for(const n of o)e.push(sh(r,t,n));a={arrayValue:{values:e}}}else a=sh(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||ih(o,i),a=Ul(n,e,o,"in"===i||"not-in"===i);const c=fi.create(s,i,a);return function(t,e){if(e.dt()){const n=xi(t);if(null!==n&&!n.isEqual(e.field))throw new Br(jr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Ri(t);null!==r&&oh(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Br(jr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Br(jr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.ma,this.ga,this.ya);return new il(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function eh(t,e,n){const r=e,s=Yl("where",t);return new th(s,r,n)}class nh extends Xl{constructor(t,e){super(),this.ma=t,this.pa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Br(jr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Br(jr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new _i(e,n);return function(t,e){if(null===Ri(t)){const n=xi(t);null!==n&&oh(t,n,e.field)}}(t,r),r}(t._query,this.ma,this.pa);return new il(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ci(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function rh(t,e="asc"){const n=e,r=Yl("orderBy",t);return new nh(r,n)}function sh(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Br(jr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ni(e)&&-1!==n.indexOf("/"))throw new Br(jr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ss.fromString(n));if(!as.isDocumentKey(r))throw new Br(jr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qs(t,new as(r))}if(n instanceof sl)return Qs(t,n._key);throw new Br(jr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xu(n)}.`)}function ih(t,e){if(!Array.isArray(t)||0===t.length)throw new Br(jr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Br(jr.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function oh(t,e,n){if(!n.isEqual(e))throw new Br(jr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{convertValue(t,e="none"){switch(qs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return xs(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ns(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Fr()}}convertObject(t,e){const n={};return bs(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Cl(xs(t.latitude),xs(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ls(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ms(t));default:return null}}convertTimestamp(t){const e=Rs(t);return new es(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ss.fromString(t);Ur(Aa(n));const r=new Fs(n.get(1),n.get(3)),s=new as(n.popFirst(5));return r.isEqual(e)||Lr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class lh extends Wl{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new hh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Yl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class hh extends lh{data(t={}){return super.data(t)}}class fh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new uh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new hh(this._firestore,this._userDataWriter,n.key,n,new uh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Br(jr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new hh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new uh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new hh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new uh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:dh(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function dh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Fr()}}class ph extends ah{constructor(t){super(),this.firestore=t}convertBytes(t){return new Tl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new sl(this.firestore,null,e)}}function gh(t){t=Zu(t,il);const e=Zu(t.firestore,wl),n=El(e),r=new ph(e);return Jl(t._query),yl(n,t._query).then((n=>new fh(e,r,t,n)))}function mh(t,e,n,...r){t=Zu(t,sl);const s=Zu(t.firestore,wl),i=Ol(s);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof Il?Fl(i,"updateDoc",t._key,e,n,r):Pl(i,"updateDoc",t._key,e),wh(s,[o.toMutation(t._key,oo.exists(!0))])}function yh(t){return wh(Zu(t.firestore,wl),[new bo(t._key,oo.none())])}function vh(t,e){const n=Zu(t.firestore,wl),r=cl(t),s=ch(t.converter,e);return wh(n,[Ll(Ol(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,oo.exists(!1))]).then((()=>r))}function wh(t,e){return function(t,e){const n=new qr;return t.asyncQueue.enqueueAndForget((async()=>ku(await gl(t),e,n))),n.promise}(El(t),e)}!function(t,e=!0){!function(t){Rr=t}(s.Jn),(0,s.Xd)(new i.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new wl(new Hr(t.getProvider("auth-internal")),new Yr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Br(jr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fs(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(kr,"3.7.1",t),(0,s.KN)(kr,"3.7.1","esm2017")}()},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return yt},ZF:function(){return mt},KN:function(){return vt}});n(7658);var r=n(7142),s=n(5168),i=n(223);n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(_(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),_(h.get(this))}:function(...e){return _(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),_(r)}}function E(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function _(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=E(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(_(o.result),t.oldVersion,t.newVersion,_(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],A=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!S.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return A.set(e,i),i}w((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(R(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function R(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const x="@firebase/app",N="0.8.2",O=new s.Yd("@firebase/app"),L="@firebase/app-compat",M="@firebase/analytics-compat",P="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",K="@firebase/functions-compat",G="@firebase/installations",H="@firebase/installations-compat",z="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",st="9.12.1",it="[DEFAULT]",ot={[x]:"fire-core",[L]:"fire-core-compat",[P]:"fire-analytics",[M]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[K]:"fire-fn-compat",[G]:"fire-iid",[H]:"fire-iid-compat",[z]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new i.LL("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=st;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const s=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),o=s.name;if("string"!==typeof o||!o)throw dt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,i.aH)()),!n)throw dt.create("no-options");const a=at.get(o);if(a){if((0,i.vZ)(n,a.options)&&(0,i.vZ)(s,a.config))return a;throw dt.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ct.values())c.addComponent(r);const u=new pt(n,s,c);return at.set(o,u),u}function yt(t=it){const e=at.get(t);if(!e&&t===it)return mt();if(!e)throw dt.create("no-app",{appName:t});return e}function vt(t,e,n){var s;let i=null!==(s=ot[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}lt(new r.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",bt=1,Et="firebase-heartbeat-store";let _t=null;function Tt(){return _t||(_t=I(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Et)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),_t}async function It(t){var e;try{const e=await Tt();return e.transaction(Et).objectStore(Et).get(Ct(t))}catch(n){if(n instanceof i.ZR)O.warn(n.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});O.warn(t.message)}}}async function St(t,e){var n;try{const n=await Tt(),r=n.transaction(Et,"readwrite"),s=r.objectStore(Et);return await s.put(e,Ct(t)),r.done}catch(r){if(r instanceof i.ZR)O.warn(r.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});O.warn(t.message)}}}function Ct(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1024,kt=2592e6;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Rt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Rt(),{heartbeatsToSend:e,unsentEntries:n}=xt(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Rt(){const t=new Date;return t.toISOString().substring(0,10)}function xt(t,e=At){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Ot(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ot(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await It(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ot(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){lt(new r.wA("platform-logger",(t=>new D(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Dt(t)),"PRIVATE")),vt(x,N,t),vt(x,N,"esm2017"),vt("fire-js","")}Lt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return s}});var r=n(223);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return s}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}},2483:function(t,e,n){"use strict";n.d(e,{p7:function(){return ne},r5:function(){return j}});n(7658),n(541);var r=n(3396),s=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const s=e[r];n[r]=l(s)?s.map(t):t(s)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,f=t=>t.replace(h,"");function d(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=E(null!=r?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function g(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function m(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&y(e.matched[r],n.matched[s])&&v(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!w(t[n],e[n]))return!1;return!0}function w(t,e){return l(t)?b(t,e):l(e)?b(e,t):t===e}function b(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function E(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],"."!==i){if(".."!==i)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var _,T;(function(t){t["pop"]="pop",t["push"]="push"})(_||(_={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(T||(T={}));function I(t){if(!t)if(i){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),f(t)}const S=/^[^#]+#/;function C(t,e){return t.replace(S,"#")+e}function A(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const k=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=A(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function R(t,e){const n=history.state?history.state.position-e:-1;return n+t}const x=new Map;function N(t,e){x.set(t,e)}function O(t){const e=x.get(t);return x.delete(t),e}let L=()=>location.protocol+"//"+location.host;function M(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let e=s.includes(t.slice(i))?t.slice(i).length:1,n=s.slice(e);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,t);return o+r+s}function P(t,e,n,r){let s=[],i=[],o=null;const c=({state:i})=>{const a=M(t,location),c=n.value,u=e.value;let l=0;if(i){if(n.value=a,e.value=i,o&&o===c)return void(o=null);l=u?i.position-u.position:0}else r(a);s.forEach((t=>{t(n.value,c,{delta:l,type:_.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(t){s.push(t);const e=()=>{const e=s.indexOf(t);e>-1&&s.splice(e,1)};return i.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:k()}),"")}function f(){for(const t of i)t();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:f}}function F(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?k():null}}function U(t){const{history:e,location:n}=window,r={value:M(t,n)},s={value:e.state};function i(r,i,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:L()+t+r;try{e[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,F(s.value.back,t,s.value.forward,!0),n,{position:s.value.position});i(t,o,!0),r.value=t}function c(t,n){const o=a({},s.value,e.state,{forward:t,scroll:k()});i(o.current,o,!0);const c=a({},F(r.value,t,null),{position:o.position+1},n);i(t,c,!1),r.value=t}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:c,replace:o}}function V(t){t=I(t);const e=U(t),n=P(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const s=a({location:"",base:t,go:r,createHref:C.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function j(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),V(t)}function B(t){return"string"===typeof t||t&&"object"===typeof t}function q(t){return"string"===typeof t||"symbol"===typeof t}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=Symbol("");var G;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(G||(G={}));function H(t,e){return a(new Error,{type:t,[K]:!0},e)}function z(t,e){return t instanceof Error&&K in t&&(null==e||!!(t.type&e))}const W="[^/]+?",Q={sensitive:!1,strict:!1,start:!0,end:!0},Y=/[.+*?^${}()[\]/\\]/g;function J(t,e){const n=a({},Q,e),r=[];let s=n.start?"^":"";const i=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(s+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(s+="/"),s+=r.value.replace(Y,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;i.push({name:t,repeatable:n,optional:c});const l=u||W;if(l!==W){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),s+=f,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",s=i[r-1];n[s.name]=t&&s.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const s of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of s)if(0===t.type)n+=t.value;else if(1===t.type){const{value:i,repeatable:o,optional:a}=t,c=i in e?e[i]:"";if(l(c)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:i,parse:c,stringify:u}}function X(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Z(t,e){let n=0;const r=t.score,s=e.score;while(n<r.length&&n<s.length){const t=X(r[n],s[n]);if(t)return t;n++}if(1===Math.abs(s.length-r.length)){if(tt(r))return 1;if(tt(s))return-1}return s.length-r.length}function tt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const et={type:0,value:""},nt=/[a-zA-Z0-9_]/;function rt(t){if(!t)return[[]];if("/"===t)return[[et]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,u="",l="";function h(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:nt.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function st(t,e,n){const r=J(rt(t.path),n);const s=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf===!e.record.aliasOf&&e.children.push(s),s}function it(t,e){const n=[],r=new Map;function s(t){return r.get(t)}function i(t,n,r){const s=!r,c=at(t);c.aliasOf=r&&r.record;const h=ht(e,t),f=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let d,p;for(const e of f){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=st(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),s&&t.name&&!ut(d)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)i(t[e],d,r&&r.children[e])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{o(p)}:u}function o(t){if(q(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function l(t){let e=0;while(e<n.length&&Z(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ft(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ut(t)&&r.set(t.record.name,t)}function h(t,e){let s,i,o,c={};if("name"in t&&t.name){if(s=r.get(t.name),!s)throw H(1,{location:t});0,o=s.record.name,c=a(ot(e.params,s.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&ot(t.params,s.keys.map((t=>t.name)))),i=s.stringify(c)}else if("path"in t)i=t.path,s=n.find((t=>t.re.test(i))),s&&(c=s.parse(i),o=s.record.name);else{if(s=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!s)throw H(1,{location:t,currentLocation:e});o=s.record.name,c=a({},e.params,t.params),i=s.stringify(c)}const u=[];let l=s;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:i,params:c,matched:u,meta:lt(u)}}return e=ht({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>i(t))),{addRoute:i,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function ot(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function at(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ct(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ct(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ut(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lt(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function ht(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ft(t,e){return e.children.some((e=>e===t||ft(t,e)))}const dt=/#/g,pt=/&/g,gt=/\//g,mt=/=/g,yt=/\?/g,vt=/\+/g,wt=/%5B/g,bt=/%5D/g,Et=/%5E/g,_t=/%60/g,Tt=/%7B/g,It=/%7C/g,St=/%7D/g,Ct=/%20/g;function At(t){return encodeURI(""+t).replace(It,"|").replace(wt,"[").replace(bt,"]")}function kt(t){return At(t).replace(Tt,"{").replace(St,"}").replace(Et,"^")}function Dt(t){return At(t).replace(vt,"%2B").replace(Ct,"+").replace(dt,"%23").replace(pt,"%26").replace(_t,"`").replace(Tt,"{").replace(St,"}").replace(Et,"^")}function Rt(t){return Dt(t).replace(mt,"%3D")}function xt(t){return At(t).replace(dt,"%23").replace(yt,"%3F")}function Nt(t){return null==t?"":xt(t).replace(gt,"%2F")}function Ot(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Lt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const t=r[s].replace(vt," "),n=t.indexOf("="),i=Ot(n<0?t:t.slice(0,n)),o=n<0?null:Ot(t.slice(n+1));if(i in e){let t=e[i];l(t)||(t=e[i]=[t]),t.push(o)}else e[i]=o}return e}function Mt(t){let e="";for(let n in t){const r=t[n];if(n=Rt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const s=l(r)?r.map((t=>t&&Dt(t))):[r&&Dt(r)];s.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Pt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Ft=Symbol(""),Ut=Symbol(""),Vt=Symbol(""),jt=Symbol(""),Bt=Symbol("");function qt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function $t(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(H(4,{from:n,to:e})):t instanceof Error?a(t):B(t)?a(H(2,{from:e,to:t})):(i&&r.enterCallbacks[s]===i&&"function"===typeof t&&i.push(t),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function Kt(t,e,n,r){const s=[];for(const i of t){0;for(const t in i.components){let a=i.components[t];if("beforeRouteEnter"===e||i.instances[t])if(Gt(a)){const o=a.__vccOpts||a,c=o[e];c&&s.push($t(c,n,r,i,t))}else{let c=a();0,s.push((()=>c.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${i.path}"`));const a=o(s)?s.default:s;i.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&$t(u,n,r,i,t)()}))))}}}return s}function Gt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Ht(t){const e=(0,r.f3)(Vt),n=(0,r.f3)(jt),i=(0,r.Fl)((()=>e.resolve((0,s.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(y.bind(null,r));if(o>-1)return o;const a=Jt(t[e-2]);return e>1&&Jt(r)===a&&s[s.length-1].path!==a?s.findIndex(y.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Yt(n.params,i.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,i.value.params)));function l(n={}){return Qt(n)?e[(0,s.SU)(t.replace)?"replace":"push"]((0,s.SU)(t.to)).catch(u):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:l}}const zt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ht,setup(t,{slots:e}){const n=(0,s.qj)(Ht(t)),{options:i}=(0,r.f3)(Vt),o=(0,r.Fl)((()=>({[Xt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const s=e.default&&e.default(n);return t.custom?s:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Wt=zt;function Qt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yt(t,e){for(const n in e){const r=e[n],s=t[n];if("string"===typeof r){if(r!==s)return!1}else if(!l(s)||s.length!==r.length||r.some(((t,e)=>t!==s[e])))return!1}return!0}function Jt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=(0,r.f3)(Bt),o=(0,r.Fl)((()=>t.route||i.value)),c=(0,r.f3)(Ut,0),u=(0,r.Fl)((()=>{let t=(0,s.SU)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ut,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Ft,l),(0,r.JJ)(Bt,o);const h=(0,s.iH)();return(0,r.YP)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,s,i])=>{e&&(e.instances[n]=t,s&&s!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=s.leaveGuards),e.updateGuards.size||(e.updateGuards=s.updateGuards))),!t||!e||s&&y(e,s)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const s=o.value,i=t.name,c=l.value,u=c&&c.components[i];if(!u)return te(n.default,{Component:u,route:s});const f=c.props[i],d=f?!0===f?s.params:"function"===typeof f?f(s):f:null,p=t=>{t.component.isUnmounted&&(c.instances[i]=null)},g=(0,r.h)(u,a({},d,e,{onVnodeUnmounted:p,ref:h}));return te(n.default,{Component:g,route:s})||g}}});function te(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ee=Zt;function ne(t){const e=it(t.routes,t),n=t.parseQuery||Lt,o=t.stringifyQuery||Mt,h=t.history;const f=qt(),g=qt(),y=qt(),v=(0,s.XI)($);let w=$;i&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(t=>""+t)),E=c.bind(null,Nt),T=c.bind(null,Ot);function I(t,n){let r,s;return q(t)?(r=e.getRecordMatcher(t),s=n):s=t,e.addRoute(s,r)}function S(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function C(){return e.getRoutes().map((t=>t.record))}function A(t){return!!e.getRecordMatcher(t)}function x(t,r){if(r=a({},r||v.value),"string"===typeof t){const s=d(n,t,r.path),i=e.resolve({path:s.path},r),o=h.createHref(s.fullPath);return a(s,i,{params:T(i.params),hash:Ot(s.hash),redirectedFrom:void 0,href:o})}let s;if("path"in t)s=a({},t,{path:d(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];s=a({},t,{params:E(t.params)}),r.params=E(r.params)}const i=e.resolve(s,r),c=t.hash||"";i.params=b(T(i.params));const u=p(o,a({},t,{hash:kt(c),path:i.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Mt?Pt(t.query):t.query||{}},i,{redirectedFrom:void 0,href:l})}function L(t){return"string"===typeof t?d(n,t,v.value.path):a({},t)}function M(t,e){if(w!==t)return H(8,{from:e,to:t})}function P(t){return V(t)}function F(t){return P(a(L(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=L(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function V(t,e){const n=w=x(t),r=v.value,s=t.state,i=t.force,c=!0===t.replace,u=U(n);if(u)return V(a(L(u),{state:"object"===typeof u?a({},s,u.state):s,force:i,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!i&&m(o,r,n)&&(h=H(16,{to:l,from:r}),nt(r,r,!0,!1)),(h?Promise.resolve(h):B(l,r)).catch((t=>z(t)?z(t,2)?t:et(t):Z(t,l,r))).then((t=>{if(t){if(z(t,2))return V(a({replace:c},L(t.to),{state:"object"===typeof t.to?a({},s,t.to.state):s,force:i}),e||l)}else t=G(l,r,!0,c,s);return K(l,r,t),t}))}function j(t,e){const n=M(t,e);return n?Promise.reject(n):Promise.resolve()}function B(t,e){let n;const[r,s,i]=se(t,e);n=Kt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push($t(r,t,e))}));const o=j.bind(null,t,e);return n.push(o),re(n).then((()=>{n=[];for(const r of f.list())n.push($t(r,t,e));return n.push(o),re(n)})).then((()=>{n=Kt(s,"beforeRouteUpdate",t,e);for(const r of s)r.updateGuards.forEach((r=>{n.push($t(r,t,e))}));return n.push(o),re(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(l(r.beforeEnter))for(const s of r.beforeEnter)n.push($t(s,t,e));else n.push($t(r.beforeEnter,t,e));return n.push(o),re(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Kt(i,"beforeRouteEnter",t,e),n.push(o),re(n)))).then((()=>{n=[];for(const r of g.list())n.push($t(r,t,e));return n.push(o),re(n)})).catch((t=>z(t,8)?t:Promise.reject(t)))}function K(t,e,n){for(const r of y.list())r(t,e,n)}function G(t,e,n,r,s){const o=M(t,e);if(o)return o;const c=e===$,u=i?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&u&&u.scroll},s)):h.push(t.fullPath,s)),v.value=t,nt(t,e,n,c),et()}let W;function Q(){W||(W=h.listen(((t,e,n)=>{if(!at.listening)return;const r=x(t),s=U(r);if(s)return void V(a(s,{replace:!0}),r).catch(u);w=r;const o=v.value;i&&N(R(o.fullPath,n.delta),k()),B(r,o).catch((t=>z(t,12)?t:z(t,2)?(V(t.to,r).then((t=>{z(t,20)&&!n.delta&&n.type===_.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(t,r,o)))).then((t=>{t=t||G(r,o,!1),t&&(n.delta&&!z(t,8)?h.go(-n.delta,!1):n.type===_.pop&&z(t,20)&&h.go(-1,!1)),K(r,o,t)})).catch(u)})))}let Y,J=qt(),X=qt();function Z(t,e,n){et(t);const r=X.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function tt(){return Y&&v.value!==$?Promise.resolve():new Promise(((t,e)=>{J.add([t,e])}))}function et(t){return Y||(Y=!t,Q(),J.list().forEach((([e,n])=>t?n(t):e())),J.reset()),t}function nt(e,n,s,o){const{scrollBehavior:a}=t;if(!i||!a)return Promise.resolve();const c=!s&&O(R(e.fullPath,0))||(o||!s)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&D(t))).catch((t=>Z(t,e,n)))}const rt=t=>h.go(t);let st;const ot=new Set,at={currentRoute:v,listening:!0,addRoute:I,removeRoute:S,hasRoute:A,getRoutes:C,resolve:x,options:t,push:P,replace:F,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:f.add,beforeResolve:g.add,afterEach:y.add,onError:X.add,isReady:tt,install(t){const e=this;t.component("RouterLink",Wt),t.component("RouterView",ee),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(v)}),i&&!st&&v.value===$&&(st=!0,P(h.location).catch((t=>{0})));const n={};for(const s in $)n[s]=(0,r.Fl)((()=>v.value[s]));t.provide(Vt,e),t.provide(jt,(0,s.qj)(n)),t.provide(Bt,v);const o=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(w=$,W&&W(),W=null,v.value=$,st=!1,Y=!1),o()}}};return at}function re(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function se(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const i=e.matched[o];i&&(t.matched.find((t=>y(t,i)))?r.push(i):n.push(i));const a=t.matched[o];a&&(e.matched.find((t=>y(t,a)))||s.push(a))}return[n,r,s]}}}]);
//# sourceMappingURL=chunk-vendors.0c769401.js.map