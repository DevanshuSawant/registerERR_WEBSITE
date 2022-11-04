function _m(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Sm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var R={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yi=Symbol.for("react.element"),Em=Symbol.for("react.portal"),km=Symbol.for("react.fragment"),Im=Symbol.for("react.strict_mode"),Tm=Symbol.for("react.profiler"),Cm=Symbol.for("react.provider"),Nm=Symbol.for("react.context"),Rm=Symbol.for("react.forward_ref"),Pm=Symbol.for("react.suspense"),xm=Symbol.for("react.memo"),Om=Symbol.for("react.lazy"),Wu=Symbol.iterator;function Dm(t){return t===null||typeof t!="object"?null:(t=Wu&&t[Wu]||t["@@iterator"],typeof t=="function"?t:null)}var Hd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wd=Object.assign,Kd={};function ar(t,e,n){this.props=t,this.context=e,this.refs=Kd,this.updater=n||Hd}ar.prototype.isReactComponent={};ar.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ar.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gd(){}Gd.prototype=ar.prototype;function El(t,e,n){this.props=t,this.context=e,this.refs=Kd,this.updater=n||Hd}var kl=El.prototype=new Gd;kl.constructor=El;Wd(kl,ar.prototype);kl.isPureReactComponent=!0;var Ku=Array.isArray,Qd=Object.prototype.hasOwnProperty,Il={current:null},qd={key:!0,ref:!0,__self:!0,__source:!0};function Yd(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qd.call(e,r)&&!qd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yi,type:t,key:s,ref:o,props:i,_owner:Il.current}}function Am(t,e){return{$$typeof:yi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tl(t){return typeof t=="object"&&t!==null&&t.$$typeof===yi}function Lm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gu=/\/+/g;function Ro(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Lm(""+t.key):e.toString(36)}function Yi(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yi:case Em:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ro(o,0):r,Ku(i)?(n="",t!=null&&(n=t.replace(Gu,"$&/")+"/"),Yi(i,e,n,"",function(u){return u})):i!=null&&(Tl(i)&&(i=Am(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gu,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ku(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ro(s,a);o+=Yi(s,e,n,l,i)}else if(l=Dm(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ro(s,a++),o+=Yi(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Oi(t,e,n){if(t==null)return t;var r=[],i=0;return Yi(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Mm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var we={current:null},Ji={transition:null},Um={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Ji,ReactCurrentOwner:Il};M.Children={map:Oi,forEach:function(t,e,n){Oi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oi(t,function(){e++}),e},toArray:function(t){return Oi(t,function(e){return e})||[]},only:function(t){if(!Tl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};M.Component=ar;M.Fragment=km;M.Profiler=Tm;M.PureComponent=El;M.StrictMode=Im;M.Suspense=Pm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;M.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Wd({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Il.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Qd.call(e,l)&&!qd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:yi,type:t.type,key:i,ref:s,props:r,_owner:o}};M.createContext=function(t){return t={$$typeof:Nm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cm,_context:t},t.Consumer=t};M.createElement=Yd;M.createFactory=function(t){var e=Yd.bind(null,t);return e.type=t,e};M.createRef=function(){return{current:null}};M.forwardRef=function(t){return{$$typeof:Rm,render:t}};M.isValidElement=Tl;M.lazy=function(t){return{$$typeof:Om,_payload:{_status:-1,_result:t},_init:Mm}};M.memo=function(t,e){return{$$typeof:xm,type:t,compare:e===void 0?null:e}};M.startTransition=function(t){var e=Ji.transition;Ji.transition={};try{t()}finally{Ji.transition=e}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(t,e){return we.current.useCallback(t,e)};M.useContext=function(t){return we.current.useContext(t)};M.useDebugValue=function(){};M.useDeferredValue=function(t){return we.current.useDeferredValue(t)};M.useEffect=function(t,e){return we.current.useEffect(t,e)};M.useId=function(){return we.current.useId()};M.useImperativeHandle=function(t,e,n){return we.current.useImperativeHandle(t,e,n)};M.useInsertionEffect=function(t,e){return we.current.useInsertionEffect(t,e)};M.useLayoutEffect=function(t,e){return we.current.useLayoutEffect(t,e)};M.useMemo=function(t,e){return we.current.useMemo(t,e)};M.useReducer=function(t,e,n){return we.current.useReducer(t,e,n)};M.useRef=function(t){return we.current.useRef(t)};M.useState=function(t){return we.current.useState(t)};M.useSyncExternalStore=function(t,e,n){return we.current.useSyncExternalStore(t,e,n)};M.useTransition=function(){return we.current.useTransition()};M.version="18.2.0";(function(t){t.exports=M})(R);const Jd=Sm(R.exports),da=_m({__proto__:null,default:Jd},[R.exports]);var fa={},Xd={exports:{}},Le={},Zd={exports:{}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,x){var D=I.length;I.push(x);e:for(;0<D;){var Y=D-1>>>1,re=I[Y];if(0<i(re,x))I[Y]=x,I[D]=re,D=Y;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var x=I[0],D=I.pop();if(D!==x){I[0]=D;e:for(var Y=0,re=I.length,Pi=re>>>1;Y<Pi;){var rn=2*(Y+1)-1,No=I[rn],sn=rn+1,xi=I[sn];if(0>i(No,D))sn<re&&0>i(xi,No)?(I[Y]=xi,I[sn]=D,Y=sn):(I[Y]=No,I[rn]=D,Y=rn);else if(sn<re&&0>i(xi,D))I[Y]=xi,I[sn]=D,Y=sn;else break e}}return x}function i(I,x){var D=I.sortIndex-x.sortIndex;return D!==0?D:I.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,m=null,h=3,g=!1,v=!1,E=!1,O=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=I)r(u),x.sortIndex=x.expirationTime,e(l,x);else break;x=n(u)}}function y(I){if(E=!1,p(I),!v)if(n(l)!==null)v=!0,To(S);else{var x=n(u);x!==null&&Co(y,x.startTime-I)}}function S(I,x){v=!1,E&&(E=!1,d(N),N=-1),g=!0;var D=h;try{for(p(x),m=n(l);m!==null&&(!(m.expirationTime>x)||I&&!Be());){var Y=m.callback;if(typeof Y=="function"){m.callback=null,h=m.priorityLevel;var re=Y(m.expirationTime<=x);x=t.unstable_now(),typeof re=="function"?m.callback=re:m===n(l)&&r(l),p(x)}else r(l);m=n(l)}if(m!==null)var Pi=!0;else{var rn=n(u);rn!==null&&Co(y,rn.startTime-x),Pi=!1}return Pi}finally{m=null,h=D,g=!1}}var T=!1,C=null,N=-1,j=5,A=-1;function Be(){return!(t.unstable_now()-A<j)}function pr(){if(C!==null){var I=t.unstable_now();A=I;var x=!0;try{x=C(!0,I)}finally{x?mr():(T=!1,C=null)}}else T=!1}var mr;if(typeof c=="function")mr=function(){c(pr)};else if(typeof MessageChannel<"u"){var Hu=new MessageChannel,wm=Hu.port2;Hu.port1.onmessage=pr,mr=function(){wm.postMessage(null)}}else mr=function(){O(pr,0)};function To(I){C=I,T||(T=!0,mr())}function Co(I,x){N=O(function(){I(t.unstable_now())},x)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,To(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var x=3;break;default:x=h}var D=h;h=x;try{return I()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,x){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var D=h;h=I;try{return x()}finally{h=D}},t.unstable_scheduleCallback=function(I,x,D){var Y=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Y+D:Y):D=Y,I){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=D+re,I={id:f++,callback:x,priorityLevel:I,startTime:D,expirationTime:re,sortIndex:-1},D>Y?(I.sortIndex=D,e(u,I),n(l)===null&&I===n(u)&&(E?(d(N),N=-1):E=!0,Co(y,D-Y))):(I.sortIndex=re,e(l,I),v||g||(v=!0,To(S))),I},t.unstable_shouldYield=Be,t.unstable_wrapCallback=function(I){var x=h;return function(){var D=h;h=x;try{return I.apply(this,arguments)}finally{h=D}}}})(ef);(function(t){t.exports=ef})(Zd);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=R.exports,Ae=Zd.exports;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nf=new Set,Br={};function In(t,e){qn(t,e),qn(t+"Capture",e)}function qn(t,e){for(Br[t]=e,t=0;t<e.length;t++)nf.add(e[t])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ha=Object.prototype.hasOwnProperty,Fm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qu={},qu={};function bm(t){return ha.call(qu,t)?!0:ha.call(Qu,t)?!1:Fm.test(t)?qu[t]=!0:(Qu[t]=!0,!1)}function zm(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $m(t,e,n,r){if(e===null||typeof e>"u"||zm(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _e(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ce[t]=new _e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ce[e]=new _e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ce[t]=new _e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ce[t]=new _e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ce[t]=new _e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ce[t]=new _e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ce[t]=new _e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ce[t]=new _e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ce[t]=new _e(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cl=/[\-:]([a-z])/g;function Nl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cl,Nl);ce[e]=new _e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cl,Nl);ce[e]=new _e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cl,Nl);ce[e]=new _e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ce[t]=new _e(t,1,!1,t.toLowerCase(),null,!1,!1)});ce.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ce[t]=new _e(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rl(t,e,n,r){var i=ce.hasOwnProperty(e)?ce[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($m(e,n,i,r)&&(n=null),r||i===null?bm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tt=tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),Pl=Symbol.for("react.strict_mode"),pa=Symbol.for("react.profiler"),rf=Symbol.for("react.provider"),sf=Symbol.for("react.context"),xl=Symbol.for("react.forward_ref"),ma=Symbol.for("react.suspense"),ga=Symbol.for("react.suspense_list"),Ol=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),of=Symbol.for("react.offscreen"),Yu=Symbol.iterator;function gr(t){return t===null||typeof t!="object"?null:(t=Yu&&t[Yu]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Object.assign,Po;function Ir(t){if(Po===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Po=e&&e[1]||""}return`
`+Po+t}var xo=!1;function Oo(t,e){if(!t||xo)return"";xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ir(t):""}function Vm(t){switch(t.tag){case 5:return Ir(t.type);case 16:return Ir("Lazy");case 13:return Ir("Suspense");case 19:return Ir("SuspenseList");case 0:case 2:case 15:return t=Oo(t.type,!1),t;case 11:return t=Oo(t.type.render,!1),t;case 1:return t=Oo(t.type,!0),t;default:return""}}function va(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rn:return"Fragment";case Nn:return"Portal";case pa:return"Profiler";case Pl:return"StrictMode";case ma:return"Suspense";case ga:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sf:return(t.displayName||"Context")+".Consumer";case rf:return(t._context.displayName||"Context")+".Provider";case xl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ol:return e=t.displayName||null,e!==null?e:va(t.type)||"Memo";case xt:e=t._payload,t=t._init;try{return va(t(e))}catch{}}return null}function jm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return va(e);case 8:return e===Pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function af(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Bm(t){var e=af(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ai(t){t._valueTracker||(t._valueTracker=Bm(t))}function lf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=af(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ya(t,e){var n=e.checked;return Q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Ju(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uf(t,e){e=e.checked,e!=null&&Rl(t,"checked",e,!1)}function wa(t,e){uf(t,e);var n=Xt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_a(t,e.type,n):e.hasOwnProperty("defaultValue")&&_a(t,e.type,Xt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xu(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _a(t,e,n){(e!=="number"||fs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Tr=Array.isArray;function zn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return Q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zu(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(Tr(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xt(n)}}function cf(t,e){var n=Xt(e.value),r=Xt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ec(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function df(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ea(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?df(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Li,ff=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Li.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hm=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(t){Hm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pr[e]=Pr[t]})});function hf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pr.hasOwnProperty(t)&&Pr[t]?(""+e).trim():e+"px"}function pf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Wm=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ka(t,e){if(e){if(Wm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function Ia(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ta=null;function Dl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ca=null,$n=null,Vn=null;function tc(t){if(t=Si(t)){if(typeof Ca!="function")throw Error(w(280));var e=t.stateNode;e&&(e=eo(e),Ca(t.stateNode,t.type,e))}}function mf(t){$n?Vn?Vn.push(t):Vn=[t]:$n=t}function gf(){if($n){var t=$n,e=Vn;if(Vn=$n=null,tc(t),e)for(t=0;t<e.length;t++)tc(e[t])}}function vf(t,e){return t(e)}function yf(){}var Do=!1;function wf(t,e,n){if(Do)return t(e,n);Do=!0;try{return vf(t,e,n)}finally{Do=!1,($n!==null||Vn!==null)&&(yf(),gf())}}function Wr(t,e){var n=t.stateNode;if(n===null)return null;var r=eo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Na=!1;if(wt)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){Na=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Na=!1}function Km(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var xr=!1,hs=null,ps=!1,Ra=null,Gm={onError:function(t){xr=!0,hs=t}};function Qm(t,e,n,r,i,s,o,a,l){xr=!1,hs=null,Km.apply(Gm,arguments)}function qm(t,e,n,r,i,s,o,a,l){if(Qm.apply(this,arguments),xr){if(xr){var u=hs;xr=!1,hs=null}else throw Error(w(198));ps||(ps=!0,Ra=u)}}function Tn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nc(t){if(Tn(t)!==t)throw Error(w(188))}function Ym(t){var e=t.alternate;if(!e){if(e=Tn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nc(i),t;if(s===r)return nc(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Sf(t){return t=Ym(t),t!==null?Ef(t):null}function Ef(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ef(t);if(e!==null)return e;t=t.sibling}return null}var kf=Ae.unstable_scheduleCallback,rc=Ae.unstable_cancelCallback,Jm=Ae.unstable_shouldYield,Xm=Ae.unstable_requestPaint,J=Ae.unstable_now,Zm=Ae.unstable_getCurrentPriorityLevel,Al=Ae.unstable_ImmediatePriority,If=Ae.unstable_UserBlockingPriority,ms=Ae.unstable_NormalPriority,eg=Ae.unstable_LowPriority,Tf=Ae.unstable_IdlePriority,Ys=null,it=null;function tg(t){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Ys,t,void 0,(t.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:ig,ng=Math.log,rg=Math.LN2;function ig(t){return t>>>=0,t===0?32:31-(ng(t)/rg|0)|0}var Mi=64,Ui=4194304;function Cr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Cr(a):(s&=o,s!==0&&(r=Cr(s)))}else o=n&~i,o!==0?r=Cr(o):s!==0&&(r=Cr(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Je(e),i=1<<n,r|=t[n],e&=~i;return r}function sg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function og(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Je(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=sg(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Pa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cf(){var t=Mi;return Mi<<=1,(Mi&4194240)===0&&(Mi=64),t}function Ao(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Je(e),t[e]=n}function ag(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Je(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ll(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Je(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var z=0;function Nf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Rf,Ml,Pf,xf,Of,xa=!1,Fi=[],$t=null,Vt=null,jt=null,Kr=new Map,Gr=new Map,Dt=[],lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ic(t,e){switch(t){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Kr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(e.pointerId)}}function yr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Si(e),e!==null&&Ml(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ug(t,e,n,r,i){switch(e){case"focusin":return $t=yr($t,t,e,n,r,i),!0;case"dragenter":return Vt=yr(Vt,t,e,n,r,i),!0;case"mouseover":return jt=yr(jt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Kr.set(s,yr(Kr.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gr.set(s,yr(Gr.get(s)||null,t,e,n,r,i)),!0}return!1}function Df(t){var e=un(t.target);if(e!==null){var n=Tn(e);if(n!==null){if(e=n.tag,e===13){if(e=_f(n),e!==null){t.blockedOn=e,Of(t.priority,function(){Pf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Oa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ta=r,n.target.dispatchEvent(r),Ta=null}else return e=Si(n),e!==null&&Ml(e),t.blockedOn=n,!1;e.shift()}return!0}function sc(t,e,n){Xi(t)&&n.delete(e)}function cg(){xa=!1,$t!==null&&Xi($t)&&($t=null),Vt!==null&&Xi(Vt)&&(Vt=null),jt!==null&&Xi(jt)&&(jt=null),Kr.forEach(sc),Gr.forEach(sc)}function wr(t,e){t.blockedOn===e&&(t.blockedOn=null,xa||(xa=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,cg)))}function Qr(t){function e(i){return wr(i,t)}if(0<Fi.length){wr(Fi[0],t);for(var n=1;n<Fi.length;n++){var r=Fi[n];r.blockedOn===t&&(r.blockedOn=null)}}for($t!==null&&wr($t,t),Vt!==null&&wr(Vt,t),jt!==null&&wr(jt,t),Kr.forEach(e),Gr.forEach(e),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)Df(n),n.blockedOn===null&&Dt.shift()}var jn=Tt.ReactCurrentBatchConfig,vs=!0;function dg(t,e,n,r){var i=z,s=jn.transition;jn.transition=null;try{z=1,Ul(t,e,n,r)}finally{z=i,jn.transition=s}}function fg(t,e,n,r){var i=z,s=jn.transition;jn.transition=null;try{z=4,Ul(t,e,n,r)}finally{z=i,jn.transition=s}}function Ul(t,e,n,r){if(vs){var i=Oa(t,e,n,r);if(i===null)Bo(t,e,r,ys,n),ic(t,r);else if(ug(i,t,e,n,r))r.stopPropagation();else if(ic(t,r),e&4&&-1<lg.indexOf(t)){for(;i!==null;){var s=Si(i);if(s!==null&&Rf(s),s=Oa(t,e,n,r),s===null&&Bo(t,e,r,ys,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bo(t,e,r,null,n)}}var ys=null;function Oa(t,e,n,r){if(ys=null,t=Dl(r),t=un(t),t!==null)if(e=Tn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_f(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ys=t,null}function Af(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zm()){case Al:return 1;case If:return 4;case ms:case eg:return 16;case Tf:return 536870912;default:return 16}default:return 16}}var Ft=null,Fl=null,Zi=null;function Lf(){if(Zi)return Zi;var t,e=Fl,n=e.length,r,i="value"in Ft?Ft.value:Ft.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Zi=i.slice(t,1<r?1-r:void 0)}function es(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bi(){return!0}function oc(){return!1}function Me(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bi:oc,this.isPropagationStopped=oc,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),e}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Me(lr),_i=Q({},lr,{view:0,detail:0}),hg=Me(_i),Lo,Mo,_r,Js=Q({},_i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_r&&(_r&&t.type==="mousemove"?(Lo=t.screenX-_r.screenX,Mo=t.screenY-_r.screenY):Mo=Lo=0,_r=t),Lo)},movementY:function(t){return"movementY"in t?t.movementY:Mo}}),ac=Me(Js),pg=Q({},Js,{dataTransfer:0}),mg=Me(pg),gg=Q({},_i,{relatedTarget:0}),Uo=Me(gg),vg=Q({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),yg=Me(vg),wg=Q({},lr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_g=Me(wg),Sg=Q({},lr,{data:0}),lc=Me(Sg),Eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ig[t])?!!e[t]:!1}function zl(){return Tg}var Cg=Q({},_i,{key:function(t){if(t.key){var e=Eg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=es(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(t){return t.type==="keypress"?es(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?es(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ng=Me(Cg),Rg=Q({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uc=Me(Rg),Pg=Q({},_i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),xg=Me(Pg),Og=Q({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=Me(Og),Ag=Q({},Js,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lg=Me(Ag),Mg=[9,13,27,32],$l=wt&&"CompositionEvent"in window,Or=null;wt&&"documentMode"in document&&(Or=document.documentMode);var Ug=wt&&"TextEvent"in window&&!Or,Mf=wt&&(!$l||Or&&8<Or&&11>=Or),cc=String.fromCharCode(32),dc=!1;function Uf(t,e){switch(t){case"keyup":return Mg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pn=!1;function Fg(t,e){switch(t){case"compositionend":return Ff(e);case"keypress":return e.which!==32?null:(dc=!0,cc);case"textInput":return t=e.data,t===cc&&dc?null:t;default:return null}}function bg(t,e){if(Pn)return t==="compositionend"||!$l&&Uf(t,e)?(t=Lf(),Zi=Fl=Ft=null,Pn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mf&&e.locale!=="ko"?null:e.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zg[t.type]:e==="textarea"}function bf(t,e,n,r){mf(r),e=ws(e,"onChange"),0<e.length&&(n=new bl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Dr=null,qr=null;function $g(t){qf(t,0)}function Xs(t){var e=Dn(t);if(lf(e))return t}function Vg(t,e){if(t==="change")return e}var zf=!1;if(wt){var Fo;if(wt){var bo="oninput"in document;if(!bo){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),bo=typeof hc.oninput=="function"}Fo=bo}else Fo=!1;zf=Fo&&(!document.documentMode||9<document.documentMode)}function pc(){Dr&&(Dr.detachEvent("onpropertychange",$f),qr=Dr=null)}function $f(t){if(t.propertyName==="value"&&Xs(qr)){var e=[];bf(e,qr,t,Dl(t)),wf($g,e)}}function jg(t,e,n){t==="focusin"?(pc(),Dr=e,qr=n,Dr.attachEvent("onpropertychange",$f)):t==="focusout"&&pc()}function Bg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xs(qr)}function Hg(t,e){if(t==="click")return Xs(e)}function Wg(t,e){if(t==="input"||t==="change")return Xs(e)}function Kg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ze=typeof Object.is=="function"?Object.is:Kg;function Yr(t,e){if(Ze(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ha.call(e,i)||!Ze(t[i],e[i]))return!1}return!0}function mc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gc(t,e){var n=mc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mc(n)}}function Vf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jf(){for(var t=window,e=fs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fs(t.document)}return e}function Vl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gg(t){var e=jf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vf(n.ownerDocument.documentElement,n)){if(r!==null&&Vl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gc(n,s);var o=gc(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qg=wt&&"documentMode"in document&&11>=document.documentMode,xn=null,Da=null,Ar=null,Aa=!1;function vc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Aa||xn==null||xn!==fs(r)||(r=xn,"selectionStart"in r&&Vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Yr(Ar,r)||(Ar=r,r=ws(Da,"onSelect"),0<r.length&&(e=new bl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xn)))}function zi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var On={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionend:zi("Transition","TransitionEnd")},zo={},Bf={};wt&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Zs(t){if(zo[t])return zo[t];if(!On[t])return t;var e=On[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bf)return zo[t]=e[n];return t}var Hf=Zs("animationend"),Wf=Zs("animationiteration"),Kf=Zs("animationstart"),Gf=Zs("transitionend"),Qf=new Map,yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(t,e){Qf.set(t,e),In(e,[t])}for(var $o=0;$o<yc.length;$o++){var Vo=yc[$o],qg=Vo.toLowerCase(),Yg=Vo[0].toUpperCase()+Vo.slice(1);en(qg,"on"+Yg)}en(Hf,"onAnimationEnd");en(Wf,"onAnimationIteration");en(Kf,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(Gf,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function wc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qm(r,e,void 0,t),t.currentTarget=null}function qf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;wc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;wc(i,a,u),s=l}}}if(ps)throw t=Ra,ps=!1,Ra=null,t}function B(t,e){var n=e[ba];n===void 0&&(n=e[ba]=new Set);var r=t+"__bubble";n.has(r)||(Yf(e,t,2,!1),n.add(r))}function jo(t,e,n){var r=0;e&&(r|=4),Yf(n,t,r,e)}var $i="_reactListening"+Math.random().toString(36).slice(2);function Jr(t){if(!t[$i]){t[$i]=!0,nf.forEach(function(n){n!=="selectionchange"&&(Jg.has(n)||jo(n,!1,t),jo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$i]||(e[$i]=!0,jo("selectionchange",!1,e))}}function Yf(t,e,n,r){switch(Af(e)){case 1:var i=dg;break;case 4:i=fg;break;default:i=Ul}n=i.bind(null,e,n,t),i=void 0,!Na||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bo(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=un(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}wf(function(){var u=s,f=Dl(n),m=[];e:{var h=Qf.get(t);if(h!==void 0){var g=bl,v=t;switch(t){case"keypress":if(es(n)===0)break e;case"keydown":case"keyup":g=Ng;break;case"focusin":v="focus",g=Uo;break;case"focusout":v="blur",g=Uo;break;case"beforeblur":case"afterblur":g=Uo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=xg;break;case Hf:case Wf:case Kf:g=yg;break;case Gf:g=Dg;break;case"scroll":g=hg;break;case"wheel":g=Lg;break;case"copy":case"cut":case"paste":g=_g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=uc}var E=(e&4)!==0,O=!E&&t==="scroll",d=E?h!==null?h+"Capture":null:h;E=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=Wr(c,d),y!=null&&E.push(Xr(c,y,p)))),O)break;c=c.return}0<E.length&&(h=new g(h,v,null,n,f),m.push({event:h,listeners:E}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Ta&&(v=n.relatedTarget||n.fromElement)&&(un(v)||v[_t]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?un(v):null,v!==null&&(O=Tn(v),v!==O||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(E=ac,y="onMouseLeave",d="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(E=uc,y="onPointerLeave",d="onPointerEnter",c="pointer"),O=g==null?h:Dn(g),p=v==null?h:Dn(v),h=new E(y,c+"leave",g,n,f),h.target=O,h.relatedTarget=p,y=null,un(f)===u&&(E=new E(d,c+"enter",v,n,f),E.target=p,E.relatedTarget=O,y=E),O=y,g&&v)t:{for(E=g,d=v,c=0,p=E;p;p=Cn(p))c++;for(p=0,y=d;y;y=Cn(y))p++;for(;0<c-p;)E=Cn(E),c--;for(;0<p-c;)d=Cn(d),p--;for(;c--;){if(E===d||d!==null&&E===d.alternate)break t;E=Cn(E),d=Cn(d)}E=null}else E=null;g!==null&&_c(m,h,g,E,!1),v!==null&&O!==null&&_c(m,O,v,E,!0)}}e:{if(h=u?Dn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=Vg;else if(fc(h))if(zf)S=Wg;else{S=Bg;var T=jg}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Hg);if(S&&(S=S(t,u))){bf(m,S,n,f);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&_a(h,"number",h.value)}switch(T=u?Dn(u):window,t){case"focusin":(fc(T)||T.contentEditable==="true")&&(xn=T,Da=u,Ar=null);break;case"focusout":Ar=Da=xn=null;break;case"mousedown":Aa=!0;break;case"contextmenu":case"mouseup":case"dragend":Aa=!1,vc(m,n,f);break;case"selectionchange":if(Qg)break;case"keydown":case"keyup":vc(m,n,f)}var C;if($l)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Pn?Uf(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Mf&&n.locale!=="ko"&&(Pn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Pn&&(C=Lf()):(Ft=f,Fl="value"in Ft?Ft.value:Ft.textContent,Pn=!0)),T=ws(u,N),0<T.length&&(N=new lc(N,t,null,n,f),m.push({event:N,listeners:T}),C?N.data=C:(C=Ff(n),C!==null&&(N.data=C)))),(C=Ug?Fg(t,n):bg(t,n))&&(u=ws(u,"onBeforeInput"),0<u.length&&(f=new lc("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=C))}qf(m,e)})}function Xr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ws(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wr(t,n),s!=null&&r.unshift(Xr(t,s,i)),s=Wr(t,e),s!=null&&r.push(Xr(t,s,i))),t=t.return}return r}function Cn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _c(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Wr(n,s),l!=null&&o.unshift(Xr(n,l,a))):i||(l=Wr(n,s),l!=null&&o.push(Xr(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Xg=/\r\n?/g,Zg=/\u0000|\uFFFD/g;function Sc(t){return(typeof t=="string"?t:""+t).replace(Xg,`
`).replace(Zg,"")}function Vi(t,e,n){if(e=Sc(e),Sc(t)!==e&&n)throw Error(w(425))}function _s(){}var La=null,Ma=null;function Ua(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,ev=typeof clearTimeout=="function"?clearTimeout:void 0,Ec=typeof Promise=="function"?Promise:void 0,tv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ec<"u"?function(t){return Ec.resolve(null).then(t).catch(nv)}:Fa;function nv(t){setTimeout(function(){throw t})}function Ho(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qr(e)}function Bt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ur=Math.random().toString(36).slice(2),nt="__reactFiber$"+ur,Zr="__reactProps$"+ur,_t="__reactContainer$"+ur,ba="__reactEvents$"+ur,rv="__reactListeners$"+ur,iv="__reactHandles$"+ur;function un(t){var e=t[nt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_t]||n[nt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kc(t);t!==null;){if(n=t[nt])return n;t=kc(t)}return e}t=n,n=t.parentNode}return null}function Si(t){return t=t[nt]||t[_t],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Dn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function eo(t){return t[Zr]||null}var za=[],An=-1;function tn(t){return{current:t}}function H(t){0>An||(t.current=za[An],za[An]=null,An--)}function V(t,e){An++,za[An]=t.current,t.current=e}var Zt={},me=tn(Zt),Ie=tn(!1),gn=Zt;function Yn(t,e){var n=t.type.contextTypes;if(!n)return Zt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Te(t){return t=t.childContextTypes,t!=null}function Ss(){H(Ie),H(me)}function Ic(t,e,n){if(me.current!==Zt)throw Error(w(168));V(me,e),V(Ie,n)}function Jf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,jm(t)||"Unknown",i));return Q({},n,r)}function Es(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zt,gn=me.current,V(me,t),V(Ie,Ie.current),!0}function Tc(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Jf(t,e,gn),r.__reactInternalMemoizedMergedChildContext=t,H(Ie),H(me),V(me,t)):H(Ie),V(Ie,n)}var dt=null,to=!1,Wo=!1;function Xf(t){dt===null?dt=[t]:dt.push(t)}function sv(t){to=!0,Xf(t)}function nn(){if(!Wo&&dt!==null){Wo=!0;var t=0,e=z;try{var n=dt;for(z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dt=null,to=!1}catch(i){throw dt!==null&&(dt=dt.slice(t+1)),kf(Al,nn),i}finally{z=e,Wo=!1}}return null}var Ln=[],Mn=0,ks=null,Is=0,Ue=[],Fe=0,vn=null,pt=1,mt="";function on(t,e){Ln[Mn++]=Is,Ln[Mn++]=ks,ks=t,Is=e}function Zf(t,e,n){Ue[Fe++]=pt,Ue[Fe++]=mt,Ue[Fe++]=vn,vn=t;var r=pt;t=mt;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var s=32-Je(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pt=1<<32-Je(e)+i|n<<i|r,mt=s+t}else pt=1<<s|n<<i|r,mt=t}function jl(t){t.return!==null&&(on(t,1),Zf(t,1,0))}function Bl(t){for(;t===ks;)ks=Ln[--Mn],Ln[Mn]=null,Is=Ln[--Mn],Ln[Mn]=null;for(;t===vn;)vn=Ue[--Fe],Ue[Fe]=null,mt=Ue[--Fe],Ue[Fe]=null,pt=Ue[--Fe],Ue[Fe]=null}var Oe=null,xe=null,W=!1,Ge=null;function eh(t,e){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Oe=t,xe=Bt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Oe=t,xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vn!==null?{id:pt,overflow:mt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Oe=t,xe=null,!0):!1;default:return!1}}function $a(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Va(t){if(W){var e=xe;if(e){var n=e;if(!Cc(t,e)){if($a(t))throw Error(w(418));e=Bt(n.nextSibling);var r=Oe;e&&Cc(t,e)?eh(r,n):(t.flags=t.flags&-4097|2,W=!1,Oe=t)}}else{if($a(t))throw Error(w(418));t.flags=t.flags&-4097|2,W=!1,Oe=t}}}function Nc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Oe=t}function ji(t){if(t!==Oe)return!1;if(!W)return Nc(t),W=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ua(t.type,t.memoizedProps)),e&&(e=xe)){if($a(t))throw th(),Error(w(418));for(;e;)eh(t,e),e=Bt(e.nextSibling)}if(Nc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xe=Bt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xe=null}}else xe=Oe?Bt(t.stateNode.nextSibling):null;return!0}function th(){for(var t=xe;t;)t=Bt(t.nextSibling)}function Jn(){xe=Oe=null,W=!1}function Hl(t){Ge===null?Ge=[t]:Ge.push(t)}var ov=Tt.ReactCurrentBatchConfig;function We(t,e){if(t&&t.defaultProps){e=Q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ts=tn(null),Cs=null,Un=null,Wl=null;function Kl(){Wl=Un=Cs=null}function Gl(t){var e=Ts.current;H(Ts),t._currentValue=e}function ja(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bn(t,e){Cs=t,Wl=Un=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(ke=!0),t.firstContext=null)}function Ve(t){var e=t._currentValue;if(Wl!==t)if(t={context:t,memoizedValue:e,next:null},Un===null){if(Cs===null)throw Error(w(308));Un=t,Cs.dependencies={lanes:0,firstContext:t}}else Un=Un.next=t;return e}var cn=null;function Ql(t){cn===null?cn=[t]:cn.push(t)}function nh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ql(e)):(n.next=i.next,i.next=n),e.interleaved=n,St(t,r)}function St(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ot=!1;function ql(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ht(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,St(t,n)}return i=r.interleaved,i===null?(e.next=e,Ql(r)):(e.next=i.next,i.next=e),r.interleaved=e,St(t,n)}function ts(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ll(t,n)}}function Rc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ns(t,e,n,r){var i=t.updateQueue;Ot=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var m=i.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,E=a;switch(h=e,g=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){m=v.call(g,m,h);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,h=typeof v=="function"?v.call(g,m,h):v,h==null)break e;m=Q({},m,h);break e;case 2:Ot=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=m):f=f.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(f===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wn|=o,t.lanes=o,t.memoizedState=m}}function Pc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var ih=new tf.Component().refs;function Ba(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var no={isMounted:function(t){return(t=t._reactInternals)?Tn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ye(),i=Kt(t),s=yt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ht(t,s,i),e!==null&&(Xe(e,t,i,r),ts(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ye(),i=Kt(t),s=yt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ht(t,s,i),e!==null&&(Xe(e,t,i,r),ts(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ye(),r=Kt(t),i=yt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ht(t,i,r),e!==null&&(Xe(e,t,r,n),ts(e,t,r))}};function xc(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yr(n,r)||!Yr(i,s):!0}function sh(t,e,n){var r=!1,i=Zt,s=e.contextType;return typeof s=="object"&&s!==null?s=Ve(s):(i=Te(e)?gn:me.current,r=e.contextTypes,s=(r=r!=null)?Yn(t,i):Zt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=no,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Oc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&no.enqueueReplaceState(e,e.state,null)}function Ha(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ih,ql(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ve(s):(s=Te(e)?gn:me.current,i.context=Yn(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ba(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&no.enqueueReplaceState(i,i.state,null),Ns(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Sr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===ih&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function Bi(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dc(t){var e=t._init;return e(t._payload)}function oh(t){function e(d,c){if(t){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!t)return null;for(;c!==null;)e(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Gt(d,c),d.index=0,d.sibling=null,d}function s(d,c,p){return d.index=p,t?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,y){return c===null||c.tag!==6?(c=Xo(p,d.mode,y),c.return=d,c):(c=i(c,p),c.return=d,c)}function l(d,c,p,y){var S=p.type;return S===Rn?f(d,c,p.props.children,y,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xt&&Dc(S)===c.type)?(y=i(c,p.props),y.ref=Sr(d,c,p),y.return=d,y):(y=as(p.type,p.key,p.props,null,d.mode,y),y.ref=Sr(d,c,p),y.return=d,y)}function u(d,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Zo(p,d.mode,y),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function f(d,c,p,y,S){return c===null||c.tag!==7?(c=pn(p,d.mode,y,S),c.return=d,c):(c=i(c,p),c.return=d,c)}function m(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Xo(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Di:return p=as(c.type,c.key,c.props,null,d.mode,p),p.ref=Sr(d,null,c),p.return=d,p;case Nn:return c=Zo(c,d.mode,p),c.return=d,c;case xt:var y=c._init;return m(d,y(c._payload),p)}if(Tr(c)||gr(c))return c=pn(c,d.mode,p,null),c.return=d,c;Bi(d,c)}return null}function h(d,c,p,y){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(d,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Di:return p.key===S?l(d,c,p,y):null;case Nn:return p.key===S?u(d,c,p,y):null;case xt:return S=p._init,h(d,c,S(p._payload),y)}if(Tr(p)||gr(p))return S!==null?null:f(d,c,p,y,null);Bi(d,p)}return null}function g(d,c,p,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,a(c,d,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Di:return d=d.get(y.key===null?p:y.key)||null,l(c,d,y,S);case Nn:return d=d.get(y.key===null?p:y.key)||null,u(c,d,y,S);case xt:var T=y._init;return g(d,c,p,T(y._payload),S)}if(Tr(y)||gr(y))return d=d.get(p)||null,f(c,d,y,S,null);Bi(c,y)}return null}function v(d,c,p,y){for(var S=null,T=null,C=c,N=c=0,j=null;C!==null&&N<p.length;N++){C.index>N?(j=C,C=null):j=C.sibling;var A=h(d,C,p[N],y);if(A===null){C===null&&(C=j);break}t&&C&&A.alternate===null&&e(d,C),c=s(A,c,N),T===null?S=A:T.sibling=A,T=A,C=j}if(N===p.length)return n(d,C),W&&on(d,N),S;if(C===null){for(;N<p.length;N++)C=m(d,p[N],y),C!==null&&(c=s(C,c,N),T===null?S=C:T.sibling=C,T=C);return W&&on(d,N),S}for(C=r(d,C);N<p.length;N++)j=g(C,d,N,p[N],y),j!==null&&(t&&j.alternate!==null&&C.delete(j.key===null?N:j.key),c=s(j,c,N),T===null?S=j:T.sibling=j,T=j);return t&&C.forEach(function(Be){return e(d,Be)}),W&&on(d,N),S}function E(d,c,p,y){var S=gr(p);if(typeof S!="function")throw Error(w(150));if(p=S.call(p),p==null)throw Error(w(151));for(var T=S=null,C=c,N=c=0,j=null,A=p.next();C!==null&&!A.done;N++,A=p.next()){C.index>N?(j=C,C=null):j=C.sibling;var Be=h(d,C,A.value,y);if(Be===null){C===null&&(C=j);break}t&&C&&Be.alternate===null&&e(d,C),c=s(Be,c,N),T===null?S=Be:T.sibling=Be,T=Be,C=j}if(A.done)return n(d,C),W&&on(d,N),S;if(C===null){for(;!A.done;N++,A=p.next())A=m(d,A.value,y),A!==null&&(c=s(A,c,N),T===null?S=A:T.sibling=A,T=A);return W&&on(d,N),S}for(C=r(d,C);!A.done;N++,A=p.next())A=g(C,d,N,A.value,y),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?N:A.key),c=s(A,c,N),T===null?S=A:T.sibling=A,T=A);return t&&C.forEach(function(pr){return e(d,pr)}),W&&on(d,N),S}function O(d,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Rn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Di:e:{for(var S=p.key,T=c;T!==null;){if(T.key===S){if(S=p.type,S===Rn){if(T.tag===7){n(d,T.sibling),c=i(T,p.props.children),c.return=d,d=c;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xt&&Dc(S)===T.type){n(d,T.sibling),c=i(T,p.props),c.ref=Sr(d,T,p),c.return=d,d=c;break e}n(d,T);break}else e(d,T);T=T.sibling}p.type===Rn?(c=pn(p.props.children,d.mode,y,p.key),c.return=d,d=c):(y=as(p.type,p.key,p.props,null,d.mode,y),y.ref=Sr(d,c,p),y.return=d,d=y)}return o(d);case Nn:e:{for(T=p.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else e(d,c);c=c.sibling}c=Zo(p,d.mode,y),c.return=d,d=c}return o(d);case xt:return T=p._init,O(d,c,T(p._payload),y)}if(Tr(p))return v(d,c,p,y);if(gr(p))return E(d,c,p,y);Bi(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,p),c.return=d,d=c):(n(d,c),c=Xo(p,d.mode,y),c.return=d,d=c),o(d)):n(d,c)}return O}var Xn=oh(!0),ah=oh(!1),Ei={},st=tn(Ei),ei=tn(Ei),ti=tn(Ei);function dn(t){if(t===Ei)throw Error(w(174));return t}function Yl(t,e){switch(V(ti,e),V(ei,t),V(st,Ei),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ea(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ea(e,t)}H(st),V(st,e)}function Zn(){H(st),H(ei),H(ti)}function lh(t){dn(ti.current);var e=dn(st.current),n=Ea(e,t.type);e!==n&&(V(ei,t),V(st,n))}function Jl(t){ei.current===t&&(H(st),H(ei))}var K=tn(0);function Rs(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ko=[];function Xl(){for(var t=0;t<Ko.length;t++)Ko[t]._workInProgressVersionPrimary=null;Ko.length=0}var ns=Tt.ReactCurrentDispatcher,Go=Tt.ReactCurrentBatchConfig,yn=0,G=null,ee=null,ie=null,Ps=!1,Lr=!1,ni=0,av=0;function de(){throw Error(w(321))}function Zl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ze(t[n],e[n]))return!1;return!0}function eu(t,e,n,r,i,s){if(yn=s,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ns.current=t===null||t.memoizedState===null?dv:fv,t=n(r,i),Lr){s=0;do{if(Lr=!1,ni=0,25<=s)throw Error(w(301));s+=1,ie=ee=null,e.updateQueue=null,ns.current=hv,t=n(r,i)}while(Lr)}if(ns.current=xs,e=ee!==null&&ee.next!==null,yn=0,ie=ee=G=null,Ps=!1,e)throw Error(w(300));return t}function tu(){var t=ni!==0;return ni=0,t}function tt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?G.memoizedState=ie=t:ie=ie.next=t,ie}function je(){if(ee===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=ee.next;var e=ie===null?G.memoizedState:ie.next;if(e!==null)ie=e,ee=t;else{if(t===null)throw Error(w(310));ee=t,t={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ie===null?G.memoizedState=ie=t:ie=ie.next=t}return ie}function ri(t,e){return typeof e=="function"?e(t):e}function Qo(t){var e=je(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((yn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,o=r):l=l.next=m,G.lanes|=f,wn|=f}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ze(r,e.memoizedState)||(ke=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,G.lanes|=s,wn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qo(t){var e=je(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ze(s,e.memoizedState)||(ke=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function uh(){}function ch(t,e){var n=G,r=je(),i=e(),s=!Ze(r.memoizedState,i);if(s&&(r.memoizedState=i,ke=!0),r=r.queue,nu(hh.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,ii(9,fh.bind(null,n,r,i,e),void 0,null),oe===null)throw Error(w(349));(yn&30)!==0||dh(n,e,i)}return i}function dh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fh(t,e,n,r){e.value=n,e.getSnapshot=r,ph(e)&&mh(t)}function hh(t,e,n){return n(function(){ph(e)&&mh(t)})}function ph(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ze(t,n)}catch{return!0}}function mh(t){var e=St(t,1);e!==null&&Xe(e,t,1,-1)}function Ac(t){var e=tt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:t},e.queue=t,t=t.dispatch=cv.bind(null,G,t),[e.memoizedState,t]}function ii(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gh(){return je().memoizedState}function rs(t,e,n,r){var i=tt();G.flags|=t,i.memoizedState=ii(1|e,n,void 0,r===void 0?null:r)}function ro(t,e,n,r){var i=je();r=r===void 0?null:r;var s=void 0;if(ee!==null){var o=ee.memoizedState;if(s=o.destroy,r!==null&&Zl(r,o.deps)){i.memoizedState=ii(e,n,s,r);return}}G.flags|=t,i.memoizedState=ii(1|e,n,s,r)}function Lc(t,e){return rs(8390656,8,t,e)}function nu(t,e){return ro(2048,8,t,e)}function vh(t,e){return ro(4,2,t,e)}function yh(t,e){return ro(4,4,t,e)}function wh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _h(t,e,n){return n=n!=null?n.concat([t]):null,ro(4,4,wh.bind(null,e,t),n)}function ru(){}function Sh(t,e){var n=je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Eh(t,e){var n=je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kh(t,e,n){return(yn&21)===0?(t.baseState&&(t.baseState=!1,ke=!0),t.memoizedState=n):(Ze(n,e)||(n=Cf(),G.lanes|=n,wn|=n,t.baseState=!0),e)}function lv(t,e){var n=z;z=n!==0&&4>n?n:4,t(!0);var r=Go.transition;Go.transition={};try{t(!1),e()}finally{z=n,Go.transition=r}}function Ih(){return je().memoizedState}function uv(t,e,n){var r=Kt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Th(t))Ch(e,n);else if(n=nh(t,e,n,r),n!==null){var i=ye();Xe(n,t,r,i),Nh(n,e,r)}}function cv(t,e,n){var r=Kt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Th(t))Ch(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ze(a,o)){var l=e.interleaved;l===null?(i.next=i,Ql(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=nh(t,e,i,r),n!==null&&(i=ye(),Xe(n,t,r,i),Nh(n,e,r))}}function Th(t){var e=t.alternate;return t===G||e!==null&&e===G}function Ch(t,e){Lr=Ps=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Nh(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ll(t,n)}}var xs={readContext:Ve,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},dv={readContext:Ve,useCallback:function(t,e){return tt().memoizedState=[t,e===void 0?null:e],t},useContext:Ve,useEffect:Lc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rs(4194308,4,wh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rs(4194308,4,t,e)},useInsertionEffect:function(t,e){return rs(4,2,t,e)},useMemo:function(t,e){var n=tt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=uv.bind(null,G,t),[r.memoizedState,t]},useRef:function(t){var e=tt();return t={current:t},e.memoizedState=t},useState:Ac,useDebugValue:ru,useDeferredValue:function(t){return tt().memoizedState=t},useTransition:function(){var t=Ac(!1),e=t[0];return t=lv.bind(null,t[1]),tt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=G,i=tt();if(W){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),oe===null)throw Error(w(349));(yn&30)!==0||dh(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lc(hh.bind(null,r,s,t),[t]),r.flags|=2048,ii(9,fh.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tt(),e=oe.identifierPrefix;if(W){var n=mt,r=pt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ni++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=av++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fv={readContext:Ve,useCallback:Sh,useContext:Ve,useEffect:nu,useImperativeHandle:_h,useInsertionEffect:vh,useLayoutEffect:yh,useMemo:Eh,useReducer:Qo,useRef:gh,useState:function(){return Qo(ri)},useDebugValue:ru,useDeferredValue:function(t){var e=je();return kh(e,ee.memoizedState,t)},useTransition:function(){var t=Qo(ri)[0],e=je().memoizedState;return[t,e]},useMutableSource:uh,useSyncExternalStore:ch,useId:Ih,unstable_isNewReconciler:!1},hv={readContext:Ve,useCallback:Sh,useContext:Ve,useEffect:nu,useImperativeHandle:_h,useInsertionEffect:vh,useLayoutEffect:yh,useMemo:Eh,useReducer:qo,useRef:gh,useState:function(){return qo(ri)},useDebugValue:ru,useDeferredValue:function(t){var e=je();return ee===null?e.memoizedState=t:kh(e,ee.memoizedState,t)},useTransition:function(){var t=qo(ri)[0],e=je().memoizedState;return[t,e]},useMutableSource:uh,useSyncExternalStore:ch,useId:Ih,unstable_isNewReconciler:!1};function er(t,e){try{var n="",r=e;do n+=Vm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Yo(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Wa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pv=typeof WeakMap=="function"?WeakMap:Map;function Rh(t,e,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ds||(Ds=!0,tl=r),Wa(t,e)},n}function Ph(t,e,n){n=yt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wa(t,e),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pv;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Rv.bind(null,t,e,n),e.then(t,t))}function Uc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fc(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yt(-1,1),e.tag=2,Ht(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var mv=Tt.ReactCurrentOwner,ke=!1;function ve(t,e,n,r){e.child=t===null?ah(e,null,n,r):Xn(e,t.child,n,r)}function bc(t,e,n,r,i){n=n.render;var s=e.ref;return Bn(e,i),r=eu(t,e,n,r,s,i),n=tu(),t!==null&&!ke?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Et(t,e,i)):(W&&n&&jl(e),e.flags|=1,ve(t,e,r,i),e.child)}function zc(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!du(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xh(t,e,s,r,i)):(t=as(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yr,n(o,r)&&t.ref===e.ref)return Et(t,e,i)}return e.flags|=1,t=Gt(s,r),t.ref=e.ref,t.return=e,e.child=t}function xh(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Yr(s,r)&&t.ref===e.ref)if(ke=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(ke=!0);else return e.lanes=t.lanes,Et(t,e,i)}return Ka(t,e,n,r,i)}function Oh(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(bn,Re),Re|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,V(bn,Re),Re|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,V(bn,Re),Re|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,V(bn,Re),Re|=r;return ve(t,e,i,n),e.child}function Dh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ka(t,e,n,r,i){var s=Te(n)?gn:me.current;return s=Yn(e,s),Bn(e,i),n=eu(t,e,n,r,s,i),r=tu(),t!==null&&!ke?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Et(t,e,i)):(W&&r&&jl(e),e.flags|=1,ve(t,e,n,i),e.child)}function $c(t,e,n,r,i){if(Te(n)){var s=!0;Es(e)}else s=!1;if(Bn(e,i),e.stateNode===null)is(t,e),sh(e,n,r),Ha(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Te(n)?gn:me.current,u=Yn(e,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Oc(e,o,r,u),Ot=!1;var h=e.memoizedState;o.state=h,Ns(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ie.current||Ot?(typeof f=="function"&&(Ba(e,n,f,r),l=e.memoizedState),(a=Ot||xc(e,n,a,r,h,l,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,rh(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:We(e.type,a),o.props=u,m=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ve(l):(l=Te(n)?gn:me.current,l=Yn(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||h!==l)&&Oc(e,o,r,l),Ot=!1,h=e.memoizedState,o.state=h,Ns(e,r,o,i);var v=e.memoizedState;a!==m||h!==v||Ie.current||Ot?(typeof g=="function"&&(Ba(e,n,g,r),v=e.memoizedState),(u=Ot||xc(e,n,u,r,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Ga(t,e,n,r,s,i)}function Ga(t,e,n,r,i,s){Dh(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Tc(e,n,!1),Et(t,e,s);r=e.stateNode,mv.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xn(e,t.child,null,s),e.child=Xn(e,null,a,s)):ve(t,e,a,s),e.memoizedState=r.state,i&&Tc(e,n,!0),e.child}function Ah(t){var e=t.stateNode;e.pendingContext?Ic(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ic(t,e.context,!1),Yl(t,e.containerInfo)}function Vc(t,e,n,r,i){return Jn(),Hl(i),e.flags|=256,ve(t,e,n,r),e.child}var Qa={dehydrated:null,treeContext:null,retryLane:0};function qa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lh(t,e,n){var r=e.pendingProps,i=K.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),V(K,i&1),t===null)return Va(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=oo(o,r,0,null),t=pn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qa(n),e.memoizedState=Qa,t):iu(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gv(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gt(a,s):(s=pn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qa,r}return s=t.child,t=s.sibling,r=Gt(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function iu(t,e){return e=oo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hi(t,e,n,r){return r!==null&&Hl(r),Xn(e,t.child,null,n),t=iu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gv(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Yo(Error(w(422))),Hi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=oo({mode:"visible",children:r.children},i,0,null),s=pn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Xn(e,t.child,null,o),e.child.memoizedState=qa(o),e.memoizedState=Qa,s);if((e.mode&1)===0)return Hi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=Yo(s,r,void 0),Hi(t,e,o,r)}if(a=(o&t.childLanes)!==0,ke||a){if(r=oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,St(t,i),Xe(r,t,i,-1))}return cu(),r=Yo(Error(w(421))),Hi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Pv.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,xe=Bt(i.nextSibling),Oe=e,W=!0,Ge=null,t!==null&&(Ue[Fe++]=pt,Ue[Fe++]=mt,Ue[Fe++]=vn,pt=t.id,mt=t.overflow,vn=e),e=iu(e,r.children),e.flags|=4096,e)}function jc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ja(t.return,e,n)}function Jo(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Mh(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ve(t,e,r.children,n),r=K.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jc(t,n,e);else if(t.tag===19)jc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(V(K,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rs(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Jo(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rs(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Jo(e,!0,n,null,s);break;case"together":Jo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function is(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Et(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wn|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=Gt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vv(t,e,n){switch(e.tag){case 3:Ah(e),Jn();break;case 5:lh(e);break;case 1:Te(e.type)&&Es(e);break;case 4:Yl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;V(Ts,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(V(K,K.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Lh(t,e,n):(V(K,K.current&1),t=Et(t,e,n),t!==null?t.sibling:null);V(K,K.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Mh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(K,K.current),r)break;return null;case 22:case 23:return e.lanes=0,Oh(t,e,n)}return Et(t,e,n)}var Uh,Ya,Fh,bh;Uh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};Fh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,dn(st.current);var s=null;switch(n){case"input":i=ya(t,i),r=ya(t,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=Sa(t,i),r=Sa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_s)}ka(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Br.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Br.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bh=function(t,e,n,r){n!==r&&(e.flags|=4)};function Er(t,e){if(!W)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function fe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yv(t,e,n){var r=e.pendingProps;switch(Bl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(e),null;case 1:return Te(e.type)&&Ss(),fe(e),null;case 3:return r=e.stateNode,Zn(),H(Ie),H(me),Xl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ji(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ge!==null&&(il(Ge),Ge=null))),Ya(t,e),fe(e),null;case 5:Jl(e);var i=dn(ti.current);if(n=e.type,t!==null&&e.stateNode!=null)Fh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return fe(e),null}if(t=dn(st.current),ji(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nt]=e,r[Zr]=s,t=(e.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Nr.length;i++)B(Nr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Ju(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":Zu(r,s),B("invalid",r)}ka(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Vi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Vi(r.textContent,a,t),i=["children",""+a]):Br.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":Ai(r),Xu(r,s,!0);break;case"textarea":Ai(r),ec(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_s)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=df(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nt]=e,t[Zr]=r,Uh(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ia(n,r),n){case"dialog":B("cancel",t),B("close",t),i=r;break;case"iframe":case"object":case"embed":B("load",t),i=r;break;case"video":case"audio":for(i=0;i<Nr.length;i++)B(Nr[i],t);i=r;break;case"source":B("error",t),i=r;break;case"img":case"image":case"link":B("error",t),B("load",t),i=r;break;case"details":B("toggle",t),i=r;break;case"input":Ju(t,r),i=ya(t,r),B("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),B("invalid",t);break;case"textarea":Zu(t,r),i=Sa(t,r),B("invalid",t);break;default:i=r}ka(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pf(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ff(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hr(t,l):typeof l=="number"&&Hr(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Br.hasOwnProperty(s)?l!=null&&s==="onScroll"&&B("scroll",t):l!=null&&Rl(t,s,l,o))}switch(n){case"input":Ai(t),Xu(t,r,!1);break;case"textarea":Ai(t),ec(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zn(t,!!r.multiple,s,!1):r.defaultValue!=null&&zn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_s)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return fe(e),null;case 6:if(t&&e.stateNode!=null)bh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=dn(ti.current),dn(st.current),ji(e)){if(r=e.stateNode,n=e.memoizedProps,r[nt]=e,(s=r.nodeValue!==n)&&(t=Oe,t!==null))switch(t.tag){case 3:Vi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=e,e.stateNode=r}return fe(e),null;case 13:if(H(K),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(W&&xe!==null&&(e.mode&1)!==0&&(e.flags&128)===0)th(),Jn(),e.flags|=98560,s=!1;else if(s=ji(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[nt]=e}else Jn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;fe(e),s=!1}else Ge!==null&&(il(Ge),Ge=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(K.current&1)!==0?te===0&&(te=3):cu())),e.updateQueue!==null&&(e.flags|=4),fe(e),null);case 4:return Zn(),Ya(t,e),t===null&&Jr(e.stateNode.containerInfo),fe(e),null;case 10:return Gl(e.type._context),fe(e),null;case 17:return Te(e.type)&&Ss(),fe(e),null;case 19:if(H(K),s=e.memoizedState,s===null)return fe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Er(s,!1);else{if(te!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Rs(t),o!==null){for(e.flags|=128,Er(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return V(K,K.current&1|2),e.child}t=t.sibling}s.tail!==null&&J()>tr&&(e.flags|=128,r=!0,Er(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rs(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Er(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!W)return fe(e),null}else 2*J()-s.renderingStartTime>tr&&n!==1073741824&&(e.flags|=128,r=!0,Er(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=J(),e.sibling=null,n=K.current,V(K,r?n&1|2:n&1),e):(fe(e),null);case 22:case 23:return uu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Re&1073741824)!==0&&(fe(e),e.subtreeFlags&6&&(e.flags|=8192)):fe(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function wv(t,e){switch(Bl(e),e.tag){case 1:return Te(e.type)&&Ss(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zn(),H(Ie),H(me),Xl(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Jl(e),null;case 13:if(H(K),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Jn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(K),null;case 4:return Zn(),null;case 10:return Gl(e.type._context),null;case 22:case 23:return uu(),null;case 24:return null;default:return null}}var Wi=!1,he=!1,_v=typeof WeakSet=="function"?WeakSet:Set,k=null;function Fn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(t,e,r)}else n.current=null}function Ja(t,e,n){try{n()}catch(r){q(t,e,r)}}var Bc=!1;function Sv(t,e){if(La=vs,t=jf(),Vl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,m=t,h=null;t:for(;;){for(var g;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(l=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++f===r&&(l=o),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ma={focusedElem:t,selectionRange:n},vs=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,O=v.memoizedState,d=e.stateNode,c=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:We(e.type,E),O);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){q(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return v=Bc,Bc=!1,v}function Mr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ja(e,n,s)}i=i.next}while(i!==r)}}function io(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zh(t){var e=t.alternate;e!==null&&(t.alternate=null,zh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nt],delete e[Zr],delete e[ba],delete e[rv],delete e[iv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $h(t){return t.tag===5||t.tag===3||t.tag===4}function Hc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$h(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Za(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_s));else if(r!==4&&(t=t.child,t!==null))for(Za(t,e,n),t=t.sibling;t!==null;)Za(t,e,n),t=t.sibling}function el(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(el(t,e,n),t=t.sibling;t!==null;)el(t,e,n),t=t.sibling}var ae=null,Ke=!1;function Nt(t,e,n){for(n=n.child;n!==null;)Vh(t,e,n),n=n.sibling}function Vh(t,e,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Ys,n)}catch{}switch(n.tag){case 5:he||Fn(n,e);case 6:var r=ae,i=Ke;ae=null,Nt(t,e,n),ae=r,Ke=i,ae!==null&&(Ke?(t=ae,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ke?(t=ae,n=n.stateNode,t.nodeType===8?Ho(t.parentNode,n):t.nodeType===1&&Ho(t,n),Qr(t)):Ho(ae,n.stateNode));break;case 4:r=ae,i=Ke,ae=n.stateNode.containerInfo,Ke=!0,Nt(t,e,n),ae=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Ja(n,e,o),i=i.next}while(i!==r)}Nt(t,e,n);break;case 1:if(!he&&(Fn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,e,a)}Nt(t,e,n);break;case 21:Nt(t,e,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,Nt(t,e,n),he=r):Nt(t,e,n);break;default:Nt(t,e,n)}}function Wc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _v),e.forEach(function(r){var i=xv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function He(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ae=a.stateNode,Ke=!1;break e;case 3:ae=a.stateNode.containerInfo,Ke=!0;break e;case 4:ae=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(ae===null)throw Error(w(160));Vh(s,o,i),ae=null,Ke=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){q(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jh(e,t),e=e.sibling}function jh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(He(e,t),et(t),r&4){try{Mr(3,t,t.return),io(3,t)}catch(E){q(t,t.return,E)}try{Mr(5,t,t.return)}catch(E){q(t,t.return,E)}}break;case 1:He(e,t),et(t),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(He(e,t),et(t),r&512&&n!==null&&Fn(n,n.return),t.flags&32){var i=t.stateNode;try{Hr(i,"")}catch(E){q(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uf(i,s),Ia(a,o);var u=Ia(a,s);for(o=0;o<l.length;o+=2){var f=l[o],m=l[o+1];f==="style"?pf(i,m):f==="dangerouslySetInnerHTML"?ff(i,m):f==="children"?Hr(i,m):Rl(i,f,m,u)}switch(a){case"input":wa(i,s);break;case"textarea":cf(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?zn(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?zn(i,!!s.multiple,s.defaultValue,!0):zn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zr]=s}catch(E){q(t,t.return,E)}}break;case 6:if(He(e,t),et(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){q(t,t.return,E)}}break;case 3:if(He(e,t),et(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(e.containerInfo)}catch(E){q(t,t.return,E)}break;case 4:He(e,t),et(t);break;case 13:He(e,t),et(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(au=J())),r&4&&Wc(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(he=(u=he)||f,He(e,t),he=u):He(e,t),et(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&(t.mode&1)!==0)for(k=t,f=t.child;f!==null;){for(m=k=f;k!==null;){switch(h=k,g=h.child,h.tag){case 0:case 11:case 14:case 15:Mr(4,h,h.return);break;case 1:Fn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){q(r,n,E)}}break;case 5:Fn(h,h.return);break;case 22:if(h.memoizedState!==null){Gc(m);continue}}g!==null?(g.return=h,k=g):Gc(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hf("display",o))}catch(E){q(t,t.return,E)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(E){q(t,t.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:He(e,t),et(t),r&4&&Wc(t);break;case 21:break;default:He(e,t),et(t)}}function et(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($h(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hr(i,""),r.flags&=-33);var s=Hc(t);el(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hc(t);Za(t,a,o);break;default:throw Error(w(161))}}catch(l){q(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ev(t,e,n){k=t,Bh(t)}function Bh(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||he;a=Wi;var u=he;if(Wi=o,(he=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?Qc(i):l!==null?(l.return=o,k=l):Qc(i);for(;s!==null;)k=s,Bh(s),s=s.sibling;k=i,Wi=a,he=u}Kc(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,k=s):Kc(t)}}function Kc(t){for(;k!==null;){var e=k;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:he||io(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:We(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pc(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pc(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Qr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}he||e.flags&512&&Xa(e)}catch(h){q(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Gc(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Qc(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{io(4,e)}catch(l){q(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){q(e,i,l)}}var s=e.return;try{Xa(e)}catch(l){q(e,s,l)}break;case 5:var o=e.return;try{Xa(e)}catch(l){q(e,o,l)}}}catch(l){q(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var kv=Math.ceil,Os=Tt.ReactCurrentDispatcher,su=Tt.ReactCurrentOwner,ze=Tt.ReactCurrentBatchConfig,F=0,oe=null,X=null,ue=0,Re=0,bn=tn(0),te=0,si=null,wn=0,so=0,ou=0,Ur=null,Ee=null,au=0,tr=1/0,ct=null,Ds=!1,tl=null,Wt=null,Ki=!1,bt=null,As=0,Fr=0,nl=null,ss=-1,os=0;function ye(){return(F&6)!==0?J():ss!==-1?ss:ss=J()}function Kt(t){return(t.mode&1)===0?1:(F&2)!==0&&ue!==0?ue&-ue:ov.transition!==null?(os===0&&(os=Cf()),os):(t=z,t!==0||(t=window.event,t=t===void 0?16:Af(t.type)),t)}function Xe(t,e,n,r){if(50<Fr)throw Fr=0,nl=null,Error(w(185));wi(t,n,r),((F&2)===0||t!==oe)&&(t===oe&&((F&2)===0&&(so|=n),te===4&&At(t,ue)),Ce(t,r),n===1&&F===0&&(e.mode&1)===0&&(tr=J()+500,to&&nn()))}function Ce(t,e){var n=t.callbackNode;og(t,e);var r=gs(t,t===oe?ue:0);if(r===0)n!==null&&rc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rc(n),e===1)t.tag===0?sv(qc.bind(null,t)):Xf(qc.bind(null,t)),tv(function(){(F&6)===0&&nn()}),n=null;else{switch(Nf(r)){case 1:n=Al;break;case 4:n=If;break;case 16:n=ms;break;case 536870912:n=Tf;break;default:n=ms}n=Jh(n,Hh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hh(t,e){if(ss=-1,os=0,(F&6)!==0)throw Error(w(327));var n=t.callbackNode;if(Hn()&&t.callbackNode!==n)return null;var r=gs(t,t===oe?ue:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Ls(t,r);else{e=r;var i=F;F|=2;var s=Kh();(oe!==t||ue!==e)&&(ct=null,tr=J()+500,hn(t,e));do try{Cv();break}catch(a){Wh(t,a)}while(1);Kl(),Os.current=s,F=i,X!==null?e=0:(oe=null,ue=0,e=te)}if(e!==0){if(e===2&&(i=Pa(t),i!==0&&(r=i,e=rl(t,i))),e===1)throw n=si,hn(t,0),At(t,r),Ce(t,J()),n;if(e===6)At(t,r);else{if(i=t.current.alternate,(r&30)===0&&!Iv(i)&&(e=Ls(t,r),e===2&&(s=Pa(t),s!==0&&(r=s,e=rl(t,s))),e===1))throw n=si,hn(t,0),At(t,r),Ce(t,J()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:an(t,Ee,ct);break;case 3:if(At(t,r),(r&130023424)===r&&(e=au+500-J(),10<e)){if(gs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Fa(an.bind(null,t,Ee,ct),e);break}an(t,Ee,ct);break;case 4:if(At(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Je(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kv(r/1960))-r,10<r){t.timeoutHandle=Fa(an.bind(null,t,Ee,ct),r);break}an(t,Ee,ct);break;case 5:an(t,Ee,ct);break;default:throw Error(w(329))}}}return Ce(t,J()),t.callbackNode===n?Hh.bind(null,t):null}function rl(t,e){var n=Ur;return t.current.memoizedState.isDehydrated&&(hn(t,e).flags|=256),t=Ls(t,e),t!==2&&(e=Ee,Ee=n,e!==null&&il(e)),t}function il(t){Ee===null?Ee=t:Ee.push.apply(Ee,t)}function Iv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ze(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function At(t,e){for(e&=~ou,e&=~so,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Je(e),r=1<<n;t[n]=-1,e&=~r}}function qc(t){if((F&6)!==0)throw Error(w(327));Hn();var e=gs(t,0);if((e&1)===0)return Ce(t,J()),null;var n=Ls(t,e);if(t.tag!==0&&n===2){var r=Pa(t);r!==0&&(e=r,n=rl(t,r))}if(n===1)throw n=si,hn(t,0),At(t,e),Ce(t,J()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,an(t,Ee,ct),Ce(t,J()),null}function lu(t,e){var n=F;F|=1;try{return t(e)}finally{F=n,F===0&&(tr=J()+500,to&&nn())}}function _n(t){bt!==null&&bt.tag===0&&(F&6)===0&&Hn();var e=F;F|=1;var n=ze.transition,r=z;try{if(ze.transition=null,z=1,t)return t()}finally{z=r,ze.transition=n,F=e,(F&6)===0&&nn()}}function uu(){Re=bn.current,H(bn)}function hn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ev(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ss();break;case 3:Zn(),H(Ie),H(me),Xl();break;case 5:Jl(r);break;case 4:Zn();break;case 13:H(K);break;case 19:H(K);break;case 10:Gl(r.type._context);break;case 22:case 23:uu()}n=n.return}if(oe=t,X=t=Gt(t.current,null),ue=Re=e,te=0,si=null,ou=so=wn=0,Ee=Ur=null,cn!==null){for(e=0;e<cn.length;e++)if(n=cn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}cn=null}return t}function Wh(t,e){do{var n=X;try{if(Kl(),ns.current=xs,Ps){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ps=!1}if(yn=0,ie=ee=G=null,Lr=!1,ni=0,su.current=null,n===null||n.return===null){te=1,si=e,X=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,m=f.tag;if((f.mode&1)===0&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Uc(o);if(g!==null){g.flags&=-257,Fc(g,o,a,s,e),g.mode&1&&Mc(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if((e&1)===0){Mc(s,u,e),cu();break e}l=Error(w(426))}}else if(W&&a.mode&1){var O=Uc(o);if(O!==null){(O.flags&65536)===0&&(O.flags|=256),Fc(O,o,a,s,e),Hl(er(l,a));break e}}s=l=er(l,a),te!==4&&(te=2),Ur===null?Ur=[s]:Ur.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Rh(s,l,e);Rc(s,d);break e;case 1:a=l;var c=s.type,p=s.stateNode;if((s.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Wt===null||!Wt.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Ph(s,a,e);Rc(s,y);break e}}s=s.return}while(s!==null)}Qh(n)}catch(S){e=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Kh(){var t=Os.current;return Os.current=xs,t===null?xs:t}function cu(){(te===0||te===3||te===2)&&(te=4),oe===null||(wn&268435455)===0&&(so&268435455)===0||At(oe,ue)}function Ls(t,e){var n=F;F|=2;var r=Kh();(oe!==t||ue!==e)&&(ct=null,hn(t,e));do try{Tv();break}catch(i){Wh(t,i)}while(1);if(Kl(),F=n,Os.current=r,X!==null)throw Error(w(261));return oe=null,ue=0,te}function Tv(){for(;X!==null;)Gh(X)}function Cv(){for(;X!==null&&!Jm();)Gh(X)}function Gh(t){var e=Yh(t.alternate,t,Re);t.memoizedProps=t.pendingProps,e===null?Qh(t):X=e,su.current=null}function Qh(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=yv(n,e,Re),n!==null){X=n;return}}else{if(n=wv(n,e),n!==null){n.flags&=32767,X=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{te=6,X=null;return}}if(e=e.sibling,e!==null){X=e;return}X=e=t}while(e!==null);te===0&&(te=5)}function an(t,e,n){var r=z,i=ze.transition;try{ze.transition=null,z=1,Nv(t,e,n,r)}finally{ze.transition=i,z=r}return null}function Nv(t,e,n,r){do Hn();while(bt!==null);if((F&6)!==0)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ag(t,s),t===oe&&(X=oe=null,ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ki||(Ki=!0,Jh(ms,function(){return Hn(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=ze.transition,ze.transition=null;var o=z;z=1;var a=F;F|=4,su.current=null,Sv(t,n),jh(n,t),Gg(Ma),vs=!!La,Ma=La=null,t.current=n,Ev(n),Xm(),F=a,z=o,ze.transition=s}else t.current=n;if(Ki&&(Ki=!1,bt=t,As=i),s=t.pendingLanes,s===0&&(Wt=null),tg(n.stateNode),Ce(t,J()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ds)throw Ds=!1,t=tl,tl=null,t;return(As&1)!==0&&t.tag!==0&&Hn(),s=t.pendingLanes,(s&1)!==0?t===nl?Fr++:(Fr=0,nl=t):Fr=0,nn(),null}function Hn(){if(bt!==null){var t=Nf(As),e=ze.transition,n=z;try{if(ze.transition=null,z=16>t?16:t,bt===null)var r=!1;else{if(t=bt,bt=null,As=0,(F&6)!==0)throw Error(w(331));var i=F;for(F|=4,k=t.current;k!==null;){var s=k,o=s.child;if((k.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var f=k;switch(f.tag){case 0:case 11:case 15:Mr(8,f,s)}var m=f.child;if(m!==null)m.return=f,k=m;else for(;k!==null;){f=k;var h=f.sibling,g=f.return;if(zh(f),f===u){k=null;break}if(h!==null){h.return=g,k=h;break}k=g}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var O=E.sibling;E.sibling=null,E=O}while(E!==null)}}k=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Mr(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,k=d;break e}k=s.return}}var c=t.current;for(k=c;k!==null;){o=k;var p=o.child;if((o.subtreeFlags&2064)!==0&&p!==null)p.return=o,k=p;else e:for(o=c;k!==null;){if(a=k,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:io(9,a)}}catch(S){q(a,a.return,S)}if(a===o){k=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,k=y;break e}k=a.return}}if(F=i,nn(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Ys,t)}catch{}r=!0}return r}finally{z=n,ze.transition=e}}return!1}function Yc(t,e,n){e=er(n,e),e=Rh(t,e,1),t=Ht(t,e,1),e=ye(),t!==null&&(wi(t,1,e),Ce(t,e))}function q(t,e,n){if(t.tag===3)Yc(t,t,n);else for(;e!==null;){if(e.tag===3){Yc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){t=er(n,t),t=Ph(e,t,1),e=Ht(e,t,1),t=ye(),e!==null&&(wi(e,1,t),Ce(e,t));break}}e=e.return}}function Rv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ye(),t.pingedLanes|=t.suspendedLanes&n,oe===t&&(ue&n)===n&&(te===4||te===3&&(ue&130023424)===ue&&500>J()-au?hn(t,0):ou|=n),Ce(t,e)}function qh(t,e){e===0&&((t.mode&1)===0?e=1:(e=Ui,Ui<<=1,(Ui&130023424)===0&&(Ui=4194304)));var n=ye();t=St(t,e),t!==null&&(wi(t,e,n),Ce(t,n))}function Pv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qh(t,n)}function xv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),qh(t,n)}var Yh;Yh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ie.current)ke=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return ke=!1,vv(t,e,n);ke=(t.flags&131072)!==0}else ke=!1,W&&(e.flags&1048576)!==0&&Zf(e,Is,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;is(t,e),t=e.pendingProps;var i=Yn(e,me.current);Bn(e,n),i=eu(null,e,r,t,i,n);var s=tu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Te(r)?(s=!0,Es(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ql(e),i.updater=no,e.stateNode=i,i._reactInternals=e,Ha(e,r,t,n),e=Ga(null,e,r,!0,s,n)):(e.tag=0,W&&s&&jl(e),ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(is(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Dv(r),t=We(r,t),i){case 0:e=Ka(null,e,r,t,n);break e;case 1:e=$c(null,e,r,t,n);break e;case 11:e=bc(null,e,r,t,n);break e;case 14:e=zc(null,e,r,We(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:We(r,i),Ka(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:We(r,i),$c(t,e,r,i,n);case 3:e:{if(Ah(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,rh(t,e),Ns(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=er(Error(w(423)),e),e=Vc(t,e,r,n,i);break e}else if(r!==i){i=er(Error(w(424)),e),e=Vc(t,e,r,n,i);break e}else for(xe=Bt(e.stateNode.containerInfo.firstChild),Oe=e,W=!0,Ge=null,n=ah(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),r===i){e=Et(t,e,n);break e}ve(t,e,r,n)}e=e.child}return e;case 5:return lh(e),t===null&&Va(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ua(r,i)?o=null:s!==null&&Ua(r,s)&&(e.flags|=32),Dh(t,e),ve(t,e,o,n),e.child;case 6:return t===null&&Va(e),null;case 13:return Lh(t,e,n);case 4:return Yl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xn(e,null,r,n):ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:We(r,i),bc(t,e,r,i,n);case 7:return ve(t,e,e.pendingProps,n),e.child;case 8:return ve(t,e,e.pendingProps.children,n),e.child;case 12:return ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,V(Ts,r._currentValue),r._currentValue=o,s!==null)if(Ze(s.value,o)){if(s.children===i.children&&!Ie.current){e=Et(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=yt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ja(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ja(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bn(e,n),i=Ve(i),r=r(i),e.flags|=1,ve(t,e,r,n),e.child;case 14:return r=e.type,i=We(r,e.pendingProps),i=We(r.type,i),zc(t,e,r,i,n);case 15:return xh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:We(r,i),is(t,e),e.tag=1,Te(r)?(t=!0,Es(e)):t=!1,Bn(e,n),sh(e,r,i),Ha(e,r,i,n),Ga(null,e,r,!0,t,n);case 19:return Mh(t,e,n);case 22:return Oh(t,e,n)}throw Error(w(156,e.tag))};function Jh(t,e){return kf(t,e)}function Ov(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(t,e,n,r){return new Ov(t,e,n,r)}function du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dv(t){if(typeof t=="function")return du(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xl)return 11;if(t===Ol)return 14}return 2}function Gt(t,e){var n=t.alternate;return n===null?(n=be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function as(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")du(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rn:return pn(n.children,i,s,e);case Pl:o=8,i|=8;break;case pa:return t=be(12,n,e,i|2),t.elementType=pa,t.lanes=s,t;case ma:return t=be(13,n,e,i),t.elementType=ma,t.lanes=s,t;case ga:return t=be(19,n,e,i),t.elementType=ga,t.lanes=s,t;case of:return oo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rf:o=10;break e;case sf:o=9;break e;case xl:o=11;break e;case Ol:o=14;break e;case xt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=be(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pn(t,e,n,r){return t=be(7,t,r,e),t.lanes=n,t}function oo(t,e,n,r){return t=be(22,t,r,e),t.elementType=of,t.lanes=n,t.stateNode={isHidden:!1},t}function Xo(t,e,n){return t=be(6,t,null,e),t.lanes=n,t}function Zo(t,e,n){return e=be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Av(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ao(0),this.expirationTimes=Ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ao(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fu(t,e,n,r,i,s,o,a,l){return t=new Av(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=be(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(s),t}function Lv(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Xh(t){if(!t)return Zt;t=t._reactInternals;e:{if(Tn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Te(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Te(n))return Jf(t,n,e)}return e}function Zh(t,e,n,r,i,s,o,a,l){return t=fu(n,r,!0,t,i,s,o,a,l),t.context=Xh(null),n=t.current,r=ye(),i=Kt(n),s=yt(r,i),s.callback=e!=null?e:null,Ht(n,s,i),t.current.lanes=i,wi(t,i,r),Ce(t,r),t}function ao(t,e,n,r){var i=e.current,s=ye(),o=Kt(i);return n=Xh(n),e.context===null?e.context=n:e.pendingContext=n,e=yt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ht(i,e,o),t!==null&&(Xe(t,i,o,s),ts(t,i,o)),o}function Ms(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hu(t,e){Jc(t,e),(t=t.alternate)&&Jc(t,e)}function Mv(){return null}var ep=typeof reportError=="function"?reportError:function(t){console.error(t)};function pu(t){this._internalRoot=t}lo.prototype.render=pu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));ao(t,e,null,null)};lo.prototype.unmount=pu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_n(function(){ao(null,t,null,null)}),e[_t]=null}};function lo(t){this._internalRoot=t}lo.prototype.unstable_scheduleHydration=function(t){if(t){var e=xf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dt.length&&e!==0&&e<Dt[n].priority;n++);Dt.splice(n,0,t),n===0&&Df(t)}};function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xc(){}function Uv(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ms(o);s.call(u)}}var o=Zh(e,r,t,0,null,!1,!1,"",Xc);return t._reactRootContainer=o,t[_t]=o.current,Jr(t.nodeType===8?t.parentNode:t),_n(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ms(l);a.call(u)}}var l=fu(t,0,!1,null,null,!1,!1,"",Xc);return t._reactRootContainer=l,t[_t]=l.current,Jr(t.nodeType===8?t.parentNode:t),_n(function(){ao(e,l,n,r)}),l}function co(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ms(o);a.call(l)}}ao(e,o,t,i)}else o=Uv(n,e,t,i,r);return Ms(o)}Rf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Cr(e.pendingLanes);n!==0&&(Ll(e,n|1),Ce(e,J()),(F&6)===0&&(tr=J()+500,nn()))}break;case 13:_n(function(){var r=St(t,1);if(r!==null){var i=ye();Xe(r,t,1,i)}}),hu(t,1)}};Ml=function(t){if(t.tag===13){var e=St(t,134217728);if(e!==null){var n=ye();Xe(e,t,134217728,n)}hu(t,134217728)}};Pf=function(t){if(t.tag===13){var e=Kt(t),n=St(t,e);if(n!==null){var r=ye();Xe(n,t,e,r)}hu(t,e)}};xf=function(){return z};Of=function(t,e){var n=z;try{return z=t,e()}finally{z=n}};Ca=function(t,e,n){switch(e){case"input":if(wa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=eo(r);if(!i)throw Error(w(90));lf(r),wa(r,i)}}}break;case"textarea":cf(t,n);break;case"select":e=n.value,e!=null&&zn(t,!!n.multiple,e,!1)}};vf=lu;yf=_n;var Fv={usingClientEntryPoint:!1,Events:[Si,Dn,eo,mf,gf,lu]},kr={findFiberByHostInstance:un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bv={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sf(t),t===null?null:t.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||Mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Ys=Gi.inject(bv),it=Gi}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv;Le.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(e))throw Error(w(200));return Lv(t,e,null,n)};Le.createRoot=function(t,e){if(!mu(t))throw Error(w(299));var n=!1,r="",i=ep;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fu(t,1,!1,null,null,n,!1,r,i),t[_t]=e.current,Jr(t.nodeType===8?t.parentNode:t),new pu(e)};Le.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Sf(e),t=t===null?null:t.stateNode,t};Le.flushSync=function(t){return _n(t)};Le.hydrate=function(t,e,n){if(!uo(e))throw Error(w(200));return co(null,t,e,!0,n)};Le.hydrateRoot=function(t,e,n){if(!mu(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ep;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Zh(e,null,t,1,n!=null?n:null,i,!1,s,o),t[_t]=e.current,Jr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new lo(e)};Le.render=function(t,e,n){if(!uo(e))throw Error(w(200));return co(null,t,e,!1,n)};Le.unmountComponentAtNode=function(t){if(!uo(t))throw Error(w(40));return t._reactRootContainer?(_n(function(){co(null,null,t,!1,function(){t._reactRootContainer=null,t[_t]=null})}),!0):!1};Le.unstable_batchedUpdates=lu;Le.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!uo(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return co(t,e,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Le})(Xd);var Zc=Xd.exports;fa.createRoot=Zc.createRoot,fa.hydrateRoot=Zc.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oi.apply(this,arguments)}var zt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(zt||(zt={}));const ed="popstate";function zv(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return sl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ai(i)}return jv(e,n,null,t)}function $v(){return Math.random().toString(36).substr(2,8)}function td(t){return{usr:t.state,key:t.key}}function sl(t,e,n,r){return n===void 0&&(n=null),oi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?cr(e):e,{state:n,key:e&&e.key||r||$v()})}function ai(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function cr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Vv(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:ai(t);return new URL(n,e)}function jv(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=zt.Pop,l=null;function u(){a=zt.Pop,l&&l({action:a,location:h.location})}function f(g,v){a=zt.Push;let E=sl(h.location,g,v);n&&n(E,g);let O=td(E),d=h.createHref(E);try{o.pushState(O,"",d)}catch{i.location.assign(d)}s&&l&&l({action:a,location:h.location})}function m(g,v){a=zt.Replace;let E=sl(h.location,g,v);n&&n(E,g);let O=td(E),d=h.createHref(E);o.replaceState(O,"",d),s&&l&&l({action:a,location:h.location})}let h={get action(){return a},get location(){return t(i,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ed,u),l=g,()=>{i.removeEventListener(ed,u),l=null}},createHref(g){return e(i,g)},encodeLocation(g){let v=Vv(ai(g));return oi({},g,{pathname:v.pathname,search:v.search,hash:v.hash})},push:f,replace:m,go(g){return o.go(g)}};return h}var nd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nd||(nd={}));function Bv(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?cr(e):e,i=np(r.pathname||"/",n);if(i==null)return null;let s=tp(t);Hv(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Zv(s[a],ny(i));return o}function tp(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(ne(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=Qt([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),tp(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:Jv(a,i.index),routesMeta:l})}),e}function Hv(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Xv(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Wv=/^:\w+$/,Kv=3,Gv=2,Qv=1,qv=10,Yv=-2,rd=t=>t==="*";function Jv(t,e){let n=t.split("/"),r=n.length;return n.some(rd)&&(r+=Yv),e&&(r+=Gv),n.filter(i=>!rd(i)).reduce((i,s)=>i+(Wv.test(s)?Kv:s===""?Qv:qv),r)}function Xv(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Zv(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",f=ey({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let m=a.route;s.push({params:r,pathname:Qt([i,f.pathname]),pathnameBase:oy(Qt([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=Qt([i,f.pathnameBase]))}return s}function ey(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ty(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,m)=>{if(f==="*"){let h=a[m]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[f]=ry(a[m]||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ty(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),gu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ny(t){try{return decodeURI(t)}catch(e){return gu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ry(t,e){try{return decodeURIComponent(t)}catch(n){return gu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function np(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iy(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?cr(t):t;return{pathname:n?n.startsWith("/")?n:sy(n,e):e,search:ay(r),hash:ly(i)}}function sy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ea(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ip(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=cr(t):(i=oi({},t),ne(!i.pathname||!i.pathname.includes("?"),ea("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),ea("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),ea("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let m=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),m-=1;i.pathname=h.join("/")}a=m>=0?e[m]:"/"}let l=iy(i,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Qt=t=>t.join("/").replace(/\/\/+/g,"/"),oy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ay=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ly=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class uy{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function cy(t){return t instanceof uy}const dy=new Set(["POST","PUT","PATCH","DELETE"]);[...dy];var fo={exports:{}},ho={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=R.exports,hy=Symbol.for("react.element"),py=Symbol.for("react.fragment"),my=Object.prototype.hasOwnProperty,gy=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vy={key:!0,ref:!0,__self:!0,__source:!0};function sp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)my.call(e,r)&&!vy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:hy,type:t,key:s,ref:o,props:i,_owner:gy.current}}ho.Fragment=py;ho.jsx=sp;ho.jsxs=sp;(function(t){t.exports=ho})(fo);const yy=fo.exports.Fragment,_=fo.exports.jsx,se=fo.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ol.apply(this,arguments)}function wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const _y=typeof Object.is=="function"?Object.is:wy,{useState:Sy,useEffect:Ey,useLayoutEffect:ky,useDebugValue:Iy}=da;function Ty(t,e,n){const r=e(),[{inst:i},s]=Sy({inst:{value:r,getSnapshot:e}});return ky(()=>{i.value=r,i.getSnapshot=e,ta(i)&&s({inst:i})},[t,r,e]),Ey(()=>(ta(i)&&s({inst:i}),t(()=>{ta(i)&&s({inst:i})})),[t]),Iy(r),r}function ta(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!_y(n,r)}catch{return!0}}function Cy(t,e,n){return e()}const Ny=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ry=!Ny,Py=Ry?Cy:Ty;"useSyncExternalStore"in da&&(t=>t.useSyncExternalStore)(da);const xy=R.exports.createContext(null),Oy=R.exports.createContext(null),vu=R.exports.createContext(null),yu=R.exports.createContext(null),po=R.exports.createContext(null),dr=R.exports.createContext({outlet:null,matches:[]}),op=R.exports.createContext(null);function Dy(t,e){let{relative:n}=e===void 0?{}:e;fr()||ne(!1);let{basename:r,navigator:i}=R.exports.useContext(yu),{hash:s,pathname:o,search:a}=ap(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Qt([r,o])),i.createHref({pathname:l,search:a,hash:s})}function fr(){return R.exports.useContext(po)!=null}function mo(){return fr()||ne(!1),R.exports.useContext(po).location}function wu(){fr()||ne(!1);let{basename:t,navigator:e}=R.exports.useContext(yu),{matches:n}=R.exports.useContext(dr),{pathname:r}=mo(),i=JSON.stringify(rp(n).map(a=>a.pathnameBase)),s=R.exports.useRef(!1);return R.exports.useEffect(()=>{s.current=!0}),R.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=ip(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Qt([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const Ay=R.exports.createContext(null);function Ly(t){let e=R.exports.useContext(dr).outlet;return e&&_(Ay.Provider,{value:t,children:e})}function ap(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=R.exports.useContext(dr),{pathname:i}=mo(),s=JSON.stringify(rp(r).map(o=>o.pathnameBase));return R.exports.useMemo(()=>ip(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function My(t,e){fr()||ne(!1);let n=R.exports.useContext(vu),{matches:r}=R.exports.useContext(dr),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=mo(),l;if(e){var u;let v=typeof e=="string"?cr(e):e;o==="/"||((u=v.pathname)==null?void 0:u.startsWith(o))||ne(!1),l=v}else l=a;let f=l.pathname||"/",m=o==="/"?f:f.slice(o.length)||"/",h=Bv(t,{pathname:m}),g=zy(h&&h.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Qt([o,v.pathname]),pathnameBase:v.pathnameBase==="/"?o:Qt([o,v.pathnameBase])})),r,n||void 0);return e&&g?_(po.Provider,{value:{location:ol({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:zt.Pop},children:g}):g}function Uy(){let t=lp(),e=cy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return se(yy,{children:[_("h2",{children:"Unhandled Thrown Error!"}),_("h3",{style:{fontStyle:"italic"},children:e}),n?_("pre",{style:i,children:n}):null,_("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),se("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",_("code",{style:s,children:"errorElement"})," props on\xA0",_("code",{style:s,children:"<Route>"})]})]})}class Fy extends R.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?_(op.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function by(t){let{routeContext:e,match:n,children:r}=t,i=R.exports.useContext(xy);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),_(dr.Provider,{value:e,children:r})}function zy(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ne(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||_(Uy,{}):null,f=()=>_(by,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?_(Fy,{location:n.location,component:u,error:l,children:f()}):f()},null)}var id;(function(t){t.UseRevalidator="useRevalidator"})(id||(id={}));var al;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(al||(al={}));function $y(t){let e=R.exports.useContext(vu);return e||ne(!1),e}function lp(){var t;let e=R.exports.useContext(op),n=$y(al.UseRouteError),r=R.exports.useContext(dr),i=r.matches[r.matches.length-1];return e||(r||ne(!1),i.route.id||ne(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Vy(t){let{to:e,replace:n,state:r,relative:i}=t;fr()||ne(!1);let s=R.exports.useContext(vu),o=wu();return R.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function jy(t){return Ly(t.context)}function Rr(t){ne(!1)}function By(t){let{basename:e="/",children:n=null,location:r,navigationType:i=zt.Pop,navigator:s,static:o=!1}=t;fr()&&ne(!1);let a=e.replace(/^\/*/,"/"),l=R.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=cr(r));let{pathname:u="/",search:f="",hash:m="",state:h=null,key:g="default"}=r,v=R.exports.useMemo(()=>{let E=np(u,a);return E==null?null:{pathname:E,search:f,hash:m,state:h,key:g}},[a,u,f,m,h,g]);return v==null?null:_(yu.Provider,{value:l,children:_(po.Provider,{children:n,value:{location:v,navigationType:i}})})}function Hy(t){let{children:e,location:n}=t,r=R.exports.useContext(Oy),i=r&&!e?r.router.routes:ll(e);return My(i,n)}var sd;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(sd||(sd={}));new Promise(()=>{});function ll(t,e){e===void 0&&(e=[]);let n=[];return R.exports.Children.forEach(t,(r,i)=>{if(!R.exports.isValidElement(r))return;if(r.type===R.exports.Fragment){n.push.apply(n,ll(r.props.children,e));return}r.type!==Rr&&ne(!1),!r.props.index||!r.props.children||ne(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=ll(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wy(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Ky(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Gy(t,e){return t.button===0&&(!e||e==="_self")&&!Ky(t)}const Qy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function qy(t){let{basename:e,children:n,window:r}=t,i=R.exports.useRef();i.current==null&&(i.current=zv({window:r,v5Compat:!0}));let s=i.current,[o,a]=R.exports.useState({action:s.action,location:s.location});return R.exports.useLayoutEffect(()=>s.listen(a),[s]),_(By,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const li=R.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:f}=e,m=Wy(e,Qy),h=Dy(u,{relative:i}),g=Yy(u,{replace:o,state:a,target:l,preventScrollReset:f,relative:i});function v(E){r&&r(E),E.defaultPrevented||g(E)}return _("a",{...m,href:h,onClick:s?r:v,ref:n,target:l})});var od;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(od||(od={}));var ad;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ad||(ad={}));function Yy(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=wu(),l=mo(),u=ap(t,{relative:o});return R.exports.useCallback(f=>{if(Gy(f,n)){f.preventDefault();let m=r!==void 0?r:ai(l)===ai(u);a(t,{replace:m,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 *//**
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
 */const up=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jy=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,f=s>>2,m=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[f],n[m],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(up(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||m==null)throw Error();const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),m!==64){const v=u<<6&192|m;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Xy=function(t){const e=up(t);return cp.encodeByteArray(e,!0)},Us=function(t){return Xy(t).replace(/\./g,"")},dp=function(t){try{return cp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function e0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function t0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n0(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function r0(){return typeof indexedDB=="object"}function i0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function s0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const o0=()=>s0().__FIREBASE_DEFAULTS__,a0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},l0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dp(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return o0()||a0()||l0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fp=t=>{var e,n;return(n=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},u0=t=>{const e=fp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},c0=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config},hp=t=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class d0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function f0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Us(JSON.stringify(n)),Us(JSON.stringify(o)),a].join(".")}/**
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
 */const h0="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=h0,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?p0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ct(i,a,r)}}function p0(t,e){return t.replace(m0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const m0=/\{\$([^}]+)}/g;function g0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ld(s)&&ld(o)){if(!Fs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ld(t){return t!==null&&typeof t=="object"}/**
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
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function v0(t,e){const n=new y0(t,e);return n.subscribe.bind(n)}class y0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");w0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=na),i.error===void 0&&(i.error=na),i.complete===void 0&&(i.complete=na);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function w0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function na(){}/**
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
 */function lt(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ln="[DEFAULT]";/**
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
 */class _0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new d0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E0(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:S0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S0(t){return t===ln?void 0:t}function E0(t){return t.instantiationMode==="EAGER"}/**
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
 */class k0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const I0={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},T0=b.INFO,C0={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},N0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=C0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Su{constructor(e){this.name=e,this._logLevel=T0,this._logHandler=N0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?I0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const R0=(t,e)=>e.some(n=>t instanceof n);let ud,cd;function P0(){return ud||(ud=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function x0(){return cd||(cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pp=new WeakMap,ul=new WeakMap,mp=new WeakMap,ra=new WeakMap,Eu=new WeakMap;function O0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pp.set(n,t)}).catch(()=>{}),Eu.set(e,t),e}function D0(t){if(ul.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ul.set(t,e)}let cl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ul.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function A0(t){cl=t(cl)}function L0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ia(this),e,...n);return mp.set(r,e.sort?e.sort():[e]),qt(r)}:x0().includes(t)?function(...e){return t.apply(ia(this),e),qt(pp.get(this))}:function(...e){return qt(t.apply(ia(this),e))}}function M0(t){return typeof t=="function"?L0(t):(t instanceof IDBTransaction&&D0(t),R0(t,P0())?new Proxy(t,cl):t)}function qt(t){if(t instanceof IDBRequest)return O0(t);if(ra.has(t))return ra.get(t);const e=M0(t);return e!==t&&(ra.set(t,e),Eu.set(e,t)),e}const ia=t=>Eu.get(t);function U0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=qt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qt(o.result),l.oldVersion,l.newVersion,qt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const F0=["get","getKey","getAll","getAllKeys","count"],b0=["put","add","delete","clear"],sa=new Map;function dd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sa.get(e))return sa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=b0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||F0.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return sa.set(e,s),s}A0(t=>({...t,get:(e,n,r)=>dd(e,n)||t.get(e,n,r),has:(e,n)=>!!dd(e,n)||t.has(e,n)}));/**
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
 */class z0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dl="@firebase/app",fd="0.8.3";/**
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
 */const En=new Su("@firebase/app"),V0="@firebase/app-compat",j0="@firebase/analytics-compat",B0="@firebase/analytics",H0="@firebase/app-check-compat",W0="@firebase/app-check",K0="@firebase/auth",G0="@firebase/auth-compat",Q0="@firebase/database",q0="@firebase/database-compat",Y0="@firebase/functions",J0="@firebase/functions-compat",X0="@firebase/installations",Z0="@firebase/installations-compat",ew="@firebase/messaging",tw="@firebase/messaging-compat",nw="@firebase/performance",rw="@firebase/performance-compat",iw="@firebase/remote-config",sw="@firebase/remote-config-compat",ow="@firebase/storage",aw="@firebase/storage-compat",lw="@firebase/firestore",uw="@firebase/firestore-compat",cw="firebase",dw="9.13.0";/**
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
 */const fl="[DEFAULT]",fw={[dl]:"fire-core",[V0]:"fire-core-compat",[B0]:"fire-analytics",[j0]:"fire-analytics-compat",[W0]:"fire-app-check",[H0]:"fire-app-check-compat",[K0]:"fire-auth",[G0]:"fire-auth-compat",[Q0]:"fire-rtdb",[q0]:"fire-rtdb-compat",[Y0]:"fire-fn",[J0]:"fire-fn-compat",[X0]:"fire-iid",[Z0]:"fire-iid-compat",[ew]:"fire-fcm",[tw]:"fire-fcm-compat",[nw]:"fire-perf",[rw]:"fire-perf-compat",[iw]:"fire-rc",[sw]:"fire-rc-compat",[ow]:"fire-gcs",[aw]:"fire-gcs-compat",[lw]:"fire-fst",[uw]:"fire-fst-compat","fire-js":"fire-js",[cw]:"fire-js-all"};/**
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
 */const bs=new Map,hl=new Map;function hw(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nr(t){const e=t.name;if(hl.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;hl.set(e,t);for(const n of bs.values())hw(n,t);return!0}function ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const pw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new ki("app","Firebase",pw);/**
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
 */class mw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ti=dw;function gp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yt.create("bad-app-name",{appName:String(i)});if(n||(n=c0()),!n)throw Yt.create("no-options");const s=bs.get(i);if(s){if(Fs(n,s.options)&&Fs(r,s.config))return s;throw Yt.create("duplicate-app",{appName:i})}const o=new k0(i);for(const l of hl.values())o.addComponent(l);const a=new mw(n,r,o);return bs.set(i,a),a}function vp(t=fl){const e=bs.get(t);if(!e&&t===fl)return gp();if(!e)throw Yt.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let i=(r=fw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(a.join(" "));return}nr(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const gw="firebase-heartbeat-database",vw=1,ui="firebase-heartbeat-store";let oa=null;function yp(){return oa||(oa=U0(gw,vw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ui)}}}).catch(t=>{throw Yt.create("idb-open",{originalErrorMessage:t.message})})),oa}async function yw(t){var e;try{return(await yp()).transaction(ui).objectStore(ui).get(wp(t))}catch(n){if(n instanceof Ct)En.warn(n.message);else{const r=Yt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});En.warn(r.message)}}}async function hd(t,e){var n;try{const i=(await yp()).transaction(ui,"readwrite");return await i.objectStore(ui).put(e,wp(t)),i.done}catch(r){if(r instanceof Ct)En.warn(r.message);else{const i=Yt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});En.warn(i.message)}}}function wp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ww=1024,_w=30*24*60*60*1e3;class Sw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=pd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=_w}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pd(),{heartbeatsToSend:n,unsentEntries:r}=Ew(this._heartbeatsCache.heartbeats),i=Us(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function pd(){return new Date().toISOString().substring(0,10)}function Ew(t,e=ww){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),md(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),md(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return r0()?i0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function md(t){return Us(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Iw(t){nr(new Sn("platform-logger",e=>new z0(e),"PRIVATE")),nr(new Sn("heartbeat",e=>new Sw(e),"PRIVATE")),Jt(dl,fd,t),Jt(dl,fd,"esm2017"),Jt("fire-js","")}Iw("");var Tw="firebase",Cw="9.13.0";/**
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
 */Jt(Tw,Cw,"app");function Iu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function _p(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nw=_p,Sp=new ki("auth","Firebase",_p());/**
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
 */const gd=new Su("@firebase/auth");function ls(t,...e){gd.logLevel<=b.ERROR&&gd.error(`Auth (${Ti}): ${t}`,...e)}/**
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
 */function ut(t,...e){throw Tu(t,...e)}function ot(t,...e){return Tu(t,...e)}function Ep(t,e,n){const r=Object.assign(Object.assign({},Nw()),{[e]:n});return new ki("auth","Firebase",r).create(e,{appName:t.name})}function Rw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ut(t,"argument-error"),Ep(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sp.create(t,...e)}function P(t,e,...n){if(!t)throw Tu(e,...n)}function gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ls(e),new Error(e)}function kt(t,e){t||gt(e)}/**
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
 */const vd=new Map;function vt(t){kt(t instanceof Function,"Expected a class definition");let e=vd.get(t);return e?(kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vd.set(t,e),e)}/**
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
 */function Pw(t,e){const n=ku(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fs(s,e!=null?e:{}))return i;ut(i,"already-initialized")}return n.initialize({options:e})}function xw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function pl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ow(){return yd()==="http:"||yd()==="https:"}function yd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Dw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ow()||e0()||"connection"in navigator)?navigator.onLine:!0}function Aw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ci{constructor(e,n){this.shortDelay=e,this.longDelay=n,kt(n>e,"Short delay should be less than long delay!"),this.isMobile=Zy()||t0()}get(){return Dw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cu(t,e){kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Mw=new Ci(3e4,6e4);function Uw(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function go(t,e,n,r,i={}){return Ip(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ii(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),kp.fetch()(Tp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ip(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lw),e);try{const i=new bw(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qi(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ep(t,f,u);ut(t,f)}}catch(i){if(i instanceof Ct)throw i;ut(t,"network-request-failed")}}async function Fw(t,e,n,r,i={}){const s=await go(t,e,n,r,i);return"mfaPendingCredential"in s&&ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Tp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cu(t.config,i):`${t.config.apiScheme}://${i}`}class bw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),Mw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ot(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function zw(t,e){return go(t,"POST","/v1/accounts:delete",e)}async function $w(t,e){return go(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function br(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vw(t,e=!1){const n=lt(t),r=await n.getIdToken(e),i=Nu(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:br(aa(i.auth_time)),issuedAtTime:br(aa(i.iat)),expirationTime:br(aa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function aa(t){return Number(t)*1e3}function Nu(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return ls("JWT malformed, contained fewer than 3 sections"),null;try{const s=dp(r);return s?JSON.parse(s):(ls("Failed to decode base64 JWT payload"),null)}catch(s){return ls("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function jw(t){const e=Nu(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&Bw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Bw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Hw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zs(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ci(t,$w(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Gw(s.providerUserInfo):[],a=Kw(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Cp(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function Ww(t){const e=lt(t);await zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kw(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Gw(t){return t.map(e=>{var{providerId:n}=e,r=Iu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Qw(t,e){const n=await Ip(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Tp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Qw(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new di;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
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
 */function Rt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Iu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ci(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vw(this,e)}reload(){return Ww(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ci(this,zw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:p,emailVerified:y,isAnonymous:S,providerData:T,stsTokenManager:C}=n;P(p&&C,e,"internal-error");const N=di.fromJSON(this.name,C);P(typeof p=="string",e,"internal-error"),Rt(m,e.name),Rt(h,e.name),P(typeof y=="boolean",e,"internal-error"),P(typeof S=="boolean",e,"internal-error"),Rt(g,e.name),Rt(v,e.name),Rt(E,e.name),Rt(O,e.name),Rt(d,e.name),Rt(c,e.name);const j=new mn({uid:p,auth:e,email:h,emailVerified:y,displayName:m,isAnonymous:S,photoURL:v,phoneNumber:g,tenantId:E,stsTokenManager:N,createdAt:d,lastLoginAt:c});return T&&Array.isArray(T)&&(j.providerData=T.map(A=>Object.assign({},A))),O&&(j._redirectEventId=O),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new di;i.updateFromServerResponse(n);const s=new mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zs(s),s}}/**
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
 */class Np{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Np.type="NONE";const wd=Np;/**
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
 */function us(t,e,n){return`firebase:${t}:${e}:${n}`}class Wn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=us(this.userKey,i.apiKey,s),this.fullPersistenceKey=us("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wn(vt(wd),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||vt(wd);const o=us(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const m=mn._fromJSON(e,f);u!==s&&(a=m),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Wn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Wn(s,e,r))}}/**
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
 */function _d(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dp(e))return"Blackberry";if(Ap(e))return"Webos";if(Ru(e))return"Safari";if((e.includes("chrome/")||Pp(e))&&!e.includes("edge/"))return"Chrome";if(Op(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rp(t=ge()){return/firefox\//i.test(t)}function Ru(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pp(t=ge()){return/crios\//i.test(t)}function xp(t=ge()){return/iemobile/i.test(t)}function Op(t=ge()){return/android/i.test(t)}function Dp(t=ge()){return/blackberry/i.test(t)}function Ap(t=ge()){return/webos/i.test(t)}function vo(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qw(t=ge()){var e;return vo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yw(){return n0()&&document.documentMode===10}function Lp(t=ge()){return vo(t)||Op(t)||Ap(t)||Dp(t)||/windows phone/i.test(t)||xp(t)}function Jw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Mp(t,e=[]){let n;switch(t){case"Browser":n=_d(ge());break;case"Worker":n=`${_d(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${r}`}/**
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
 */class Xw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Zw{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sd(this),this.idTokenSubscription=new Sd(this),this.beforeStateQueue=new Xw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Wn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await zs(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Aw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?lt(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Wn.create(this,[vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return P(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function yo(t){return lt(t)}class Sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=v0(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function e_(t,e,n){const r=yo(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Up(e),{host:o,port:a}=t_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||n_()}function Up(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function t_(t){const e=Up(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ed(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ed(o)}}}function Ed(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function n_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,n){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}/**
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
 */async function Kn(t,e){return Fw(t,"POST","/v1/accounts:signInWithIdp",Uw(t,e))}/**
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
 */const r_="http://localhost";class kn extends Fp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Iu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new kn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kn(e,n)}buildRequest(){const e={requestUri:r_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
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
 */class Pu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ni extends Pu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Lt extends Ni{constructor(){super("facebook.com")}static credential(e){return kn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lt.PROVIDER_ID="facebook.com";/**
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
 */class ht extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kn._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ht.credential(n,r)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
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
 */class Mt extends Ni{constructor(){super("github.com")}static credential(e){return kn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
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
 */class Ut extends Ni{constructor(){super("twitter.com")}static credential(e,n){return kn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
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
 */class rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mn._fromIdTokenResponse(e,r,i),o=kd(r);return new rr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=kd(r);return new rr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function kd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $s extends Ct{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$s.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $s(e,n,r,i)}}function bp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$s._fromErrorAndOperation(t,s,e,r):s})}async function i_(t,e,n=!1){const r=await ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rr._forOperation(t,"link",r)}/**
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
 */async function s_(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await ci(t,bp(i,s,e,t),n);P(o.idToken,i,"internal-error");const a=Nu(o.idToken);P(a,i,"internal-error");const{sub:l}=a;return P(t.uid===l,i,"user-mismatch"),rr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&ut(i,"user-mismatch"),o}}/**
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
 */async function o_(t,e,n=!1){const r="signIn",i=await bp(t,r,e),s=await rr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function a_(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function l_(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}const Vs="__sak";/**
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
 */class zp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vs,"1"),this.storage.removeItem(Vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function u_(){const t=ge();return Ru(t)||vo(t)}const c_=1e3,d_=10;class $p extends zp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=u_()&&Jw(),this.fallbackToPolling=Lp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Yw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,d_):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},c_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$p.type="LOCAL";const f_=$p;/**
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
 */class Vp extends zp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vp.type="SESSION";const jp=Vp;/**
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
 */function h_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await h_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wo.receivers=[];/**
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
 */function xu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class p_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=xu("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const h=m;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function at(){return window}function m_(t){at().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Bp(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function g_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function y_(){return Bp()?self:null}/**
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
 */const Hp="firebaseLocalStorageDb",w_=1,js="firebaseLocalStorage",Wp="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _o(t,e){return t.transaction([js],e?"readwrite":"readonly").objectStore(js)}function __(){const t=indexedDB.deleteDatabase(Hp);return new Ri(t).toPromise()}function ml(){const t=indexedDB.open(Hp,w_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(js,{keyPath:Wp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(js)?e(r):(r.close(),await __(),e(await ml()))})})}async function Id(t,e,n){const r=_o(t,!0).put({[Wp]:e,value:n});return new Ri(r).toPromise()}async function S_(t,e){const n=_o(t,!1).get(e),r=await new Ri(n).toPromise();return r===void 0?null:r.value}function Td(t,e){const n=_o(t,!0).delete(e);return new Ri(n).toPromise()}const E_=800,k_=3;class Kp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ml(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>k_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wo._getInstance(y_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await g_(),!this.activeServiceWorker)return;this.sender=new p_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ml();return await Id(e,Vs,"1"),await Td(e,Vs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Id(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>S_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Td(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_o(i,!1).getAll();return new Ri(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kp.type="LOCAL";const I_=Kp;/**
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
 */function T_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function C_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",T_().appendChild(r)})}function N_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ci(3e4,6e4);/**
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
 */function Gp(t,e){return e?vt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ou extends Fp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function R_(t){return o_(t.auth,new Ou(t),t.bypassAuthState)}function P_(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),s_(n,new Ou(t),t.bypassAuthState)}async function x_(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),i_(n,new Ou(t),t.bypassAuthState)}/**
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
 */class Qp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R_;case"linkViaPopup":case"linkViaRedirect":return x_;case"reauthViaPopup":case"reauthViaRedirect":return P_;default:ut(this.auth,"internal-error")}}resolve(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const O_=new Ci(2e3,1e4);async function D_(t,e,n){const r=yo(t);Rw(t,e,Pu);const i=Gp(r,n);return new fn(r,"signInViaPopup",e,i).executeNotNull()}class fn extends Qp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fn.currentPopupAction&&fn.currentPopupAction.cancel(),fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,O_.get())};e()}}fn.currentPopupAction=null;/**
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
 */const A_="pendingRedirect",cs=new Map;class L_ extends Qp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cs.get(this.auth._key());if(!e){try{const r=await M_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cs.set(this.auth._key(),e)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M_(t,e){const n=b_(e),r=F_(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function U_(t,e){cs.set(t._key(),e)}function F_(t){return vt(t._redirectPersistence)}function b_(t){return us(A_,t.config.apiKey,t.name)}async function z_(t,e,n=!1){const r=yo(t),i=Gp(r,e),o=await new L_(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $_=10*60*1e3;class V_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!j_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cd(e))}saveEventToCache(e){this.cachedEventUids.add(Cd(e)),this.lastProcessedEventTime=Date.now()}}function Cd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function j_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qp(t);default:return!1}}/**
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
 */async function B_(t,e={}){return go(t,"GET","/v1/projects",e)}/**
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
 */const H_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W_=/^https?/;async function K_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await B_(t);for(const n of e)try{if(G_(n))return}catch{}ut(t,"unauthorized-domain")}function G_(t){const e=pl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!W_.test(n))return!1;if(H_.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Q_=new Ci(3e4,6e4);function Nd(){const t=at().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function q_(t){return new Promise((e,n)=>{var r,i,s;function o(){Nd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nd(),n(ot(t,"network-request-failed"))},timeout:Q_.get()})}if(!((i=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=at().gapi)===null||s===void 0)&&s.load)o();else{const a=N_("iframefcb");return at()[a]=()=>{gapi.load?o():n(ot(t,"network-request-failed"))},C_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ds=null,e})}let ds=null;function Y_(t){return ds=ds||q_(t),ds}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const J_=new Ci(5e3,15e3),X_="__/auth/iframe",Z_="emulator/auth/iframe",e1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n1(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cu(e,Z_):`https://${t.config.authDomain}/${X_}`,r={apiKey:e.apiKey,appName:t.name,v:Ti},i=t1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ii(r).slice(1)}`}async function r1(t){const e=await Y_(t),n=at().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:n1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ot(t,"network-request-failed"),a=at().setTimeout(()=>{s(o)},J_.get());function l(){at().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const i1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s1=500,o1=600,a1="_blank",l1="http://localhost";class Rd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u1(t,e,n,r=s1,i=o1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},i1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ge().toLowerCase();n&&(a=Pp(u)?a1:n),Rp(u)&&(e=e||l1,l.scrollbars="yes");const f=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(qw(u)&&a!=="_self")return c1(e||"",a),new Rd(null);const m=window.open(e||"",a,f);P(m,t,"popup-blocked");try{m.focus()}catch{}return new Rd(m)}function c1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const d1="__/auth/handler",f1="emulator/auth/handler";function Pd(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ti,eventId:i};if(e instanceof Pu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",g0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ni){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${h1(t)}?${Ii(a).slice(1)}`}function h1({config:t}){return t.emulator?Cu(t,f1):`https://${t.authDomain}/${d1}`}/**
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
 */const la="webStorageSupport";class p1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jp,this._completeRedirectFn=z_,this._overrideRedirectResult=U_}async _openPopup(e,n,r,i){var s;kt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Pd(e,n,r,pl(),i);return u1(e,o,xu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),m_(Pd(e,n,r,pl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await r1(e),r=new V_(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(la,{type:la},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[la];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=K_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lp()||Ru()||vo()}}const m1=p1;var xd="@firebase/auth",Od="0.20.11";/**
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
 */class g1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function v1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function y1(t){nr(new Sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{P(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),P(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mp(t)},f=new Zw(a,l,u);return xw(f,n),f})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nr(new Sn("auth-internal",e=>{const n=yo(e.getProvider("auth").getImmediate());return(r=>new g1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(xd,Od,v1(t)),Jt(xd,Od,"esm2017")}/**
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
 */const w1=5*60,_1=hp("authIdTokenMaxAge")||w1;let Dd=null;const S1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_1)return;const i=n==null?void 0:n.token;Dd!==i&&(Dd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function E1(t=vp()){const e=ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Pw(t,{popupRedirectResolver:m1,persistence:[I_,f_,jp]}),r=hp("authTokenSyncURL");if(r){const s=S1(r);l_(n,s,()=>s(n.currentUser)),a_(n,o=>s(o))}const i=fp("auth");return i&&e_(n,`http://${i}`),n}y1("Browser");/**
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
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
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
 */let hr="9.13.0";/**
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
 */const ir=new Su("@firebase/firestore");function Bs(t,...e){if(ir.logLevel<=b.DEBUG){const n=e.map(Au);ir.debug(`Firestore (${hr}): ${t}`,...n)}}function Du(t,...e){if(ir.logLevel<=b.ERROR){const n=e.map(Au);ir.error(`Firestore (${hr}): ${t}`,...n)}}function Yp(t,...e){if(ir.logLevel<=b.WARN){const n=e.map(Au);ir.warn(`Firestore (${hr}): ${t}`,...n)}}function Au(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${hr}) INTERNAL ASSERTION FAILED: `+t;throw Du(e),new Error(e)}function Ne(t,e){t||Z()}function Jp(t,e){return t}/**
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
 */const Ad="ok",k1="cancelled",zr="unknown",$="invalid-argument",I1="deadline-exceeded",T1="not-found",C1="permission-denied",gl="unauthenticated",N1="resource-exhausted",sr="failed-precondition",R1="aborted",P1="out-of-range",x1="unimplemented",O1="internal",D1="unavailable";class L extends Ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Se.UNAUTHENTICATED))}shutdown(){}}class L1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class M1{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Ne(typeof e.accessToken=="string"),new Xp(e.accessToken,new Se(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class U1{constructor(e,n,r,i){this.t=e,this.i=n,this.o=r,this.u=i,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(Ne(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class F1{constructor(e,n,r,i){this.t=e,this.i=n,this.o=r,this.u=i}getToken(){return Promise.resolve(new U1(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class b1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z1{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Ne(typeof e.token=="string"),new b1(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class $1{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}class hi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends hi{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L($,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const V1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends hi{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return V1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L($,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L($,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L($,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L($,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class Ye{constructor(e){this.path=e}static fromPath(e){return new Ye(pe.fromString(e))}static fromName(e){return new Ye(pe.fromString(e).popFirst(5))}static empty(){return new Ye(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ye(new pe(e.slice()))}}/**
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
 */function j1(t,e,n){if(!n)throw new L($,`Function ${t}() cannot be called with an empty ${e}.`)}function Ld(t){if(!Ye.isDocumentKey(t))throw new L($,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Mu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L($,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lu(t);throw new L($,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Hs(t){return t===0&&1/t==-1/0}/**
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
 */const B1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Md,U;function Ud(t){if(t===void 0)return Du("RPC_ERROR","HTTP error has no status"),zr;switch(t){case 200:return Ad;case 400:return sr;case 401:return gl;case 403:return C1;case 404:return T1;case 409:return R1;case 416:return P1;case 429:return N1;case 499:return k1;case 500:return zr;case 501:return x1;case 503:return D1;case 504:return I1;default:return t>=200&&t<300?Ad:t>=400&&t<500?sr:t>=500&&t<600?O1:zr}}/**
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
 */(U=Md||(Md={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";class H1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,n,r,i,s){const o=this.T(e,n);Bs("RestConnection","Sending: ",o,r);const a={};return this.A(a,i,s),this.R(e,o,a,r).then(l=>(Bs("RestConnection","Received: ",l),l),l=>{throw Yp("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}P(e,n,r,i,s,o){return this.I(e,n,r,i,s)}A(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+hr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}T(e,n){const r=B1[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.V=n}N(e,n){throw new Error("Not supported by FetchConnection")}async R(e,n,r,i){const s=JSON.stringify(i);let o;try{o=await this.V(n,{method:"POST",headers:r,body:s})}catch(a){throw new L(Ud(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new L(Ud(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
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
 *//**
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
 */function W1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class K1{static D(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=W1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pi(t,e){return t<e?-1:t>e?1:0}function Zp(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L($,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L($,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L($,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L($,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pi(this.nanoseconds,e.nanoseconds):pi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Qe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Qe(e)}static min(){return new Qe(new De(0,0))}static max(){return new Qe(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Fd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function So(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class Ws{constructor(e,n){this.comparator=e,this.root=n||le.EMPTY}insert(e,n){return new Ws(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,le.BLACK,null,null))}remove(e){return new Ws(this.comparator,this.root.remove(e,this.comparator).copy(null,null,le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qi(this.root,e,this.comparator,!0)}}class qi{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class le{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:le.RED,this.left=i!=null?i:le.EMPTY,this.right=s!=null?s:le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new le(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}le.EMPTY=null,le.RED=!0,le.BLACK=!1;le.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(t,e,n,r,i){return this}insert(t,e,n){return new le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ks{constructor(e){this.comparator=e,this.data=new Ws(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bd(this.data.getIterator())}getIteratorFrom(e){return new bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ks)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ks(this.comparator);return n.data=e,n}}class bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mi{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new mi([])}unionWith(e){let n=new Ks(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mi(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zp(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 *//**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new It(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const G1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=G1.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vl(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */function em(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tm(t){const e=t.mapValue.fields.__previous_value__;return em(e)?tm(e):e}function yl(t){const e=gi(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}function wl(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?em(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:Z()}function _l(t,e){if(t===e)return!0;const n=wl(t);if(n!==wl(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yl(t).isEqual(yl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=gi(r.timestampValue),o=gi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return vl(r.bytesValue).isEqual(vl(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Pe(r.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(r.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Pe(r.integerValue)===Pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Pe(r.doubleValue),o=Pe(i.doubleValue);return s===o?Hs(s)===Hs(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Zp(t.arrayValue.values||[],e.arrayValue.values||[],_l);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Fd(s)!==Fd(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!_l(s[a],o[a])))return!1;return!0}(t,e);default:return Z()}}function ua(t){return!!t&&"mapValue"in t}function $r(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return So(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$r(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$r(t.arrayValue.values[n]);return e}return Object.assign({},t)}class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$r(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$r(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _l(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ua(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){So(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new rt($r(this.value))}}/**
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
 */class ft{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ft(e,0,Qe.min(),Qe.min(),rt.empty(),0)}static newFoundDocument(e,n,r){return new ft(e,1,n,Qe.min(),r,0)}static newNoDocument(e,n){return new ft(e,2,n,Qe.min(),rt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,Qe.min(),rt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Qe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Q1{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.O=null,this.k=null,this.startAt,this.endAt}}/**
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
 */function q1(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!Hs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.C){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hs(r)?"-0":r}}(t,e)}/**
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
 */class Eo{constructor(){this._=void 0}}class nm extends Eo{}class Y1 extends Eo{constructor(e){super(),this.elements=e}}class J1 extends Eo{constructor(e){super(),this.elements=e}}class X1 extends Eo{constructor(e,n){super(),this.L=e,this.M=n}}/**
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
 */class Z1{constructor(e,n){this.field=e,this.transform=n}}class Vr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vr}static exists(e){return new Vr(void 0,e)}static updateTime(e){return new Vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ko{}class rm extends ko{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class im extends ko{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class eS extends ko{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tS extends ko{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class nS{constructor(e,n){this.databaseId=e,this.C=n}}function Sl(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rS(t,e){return t.C?e.toBase64():e.toUint8Array()}function iS(t,e){return Sl(t,e.toTimestamp())}function zd(t){return Ne(!!t),Qe.fromTimestamp(function(e){const n=gi(e);return new De(n.seconds,n.nanos)}(t))}function sm(t,e){return function(n){return new pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Gs(t,e){return sm(t.databaseId,e.path)}function $d(t,e){const n=function(i){const s=pe.fromString(i);return Ne(am(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new L($,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L($,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ye((Ne((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function om(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vd(t,e,n){return{name:Gs(t,e),fields:n.value.mapValue.fields}}function sS(t,e){return"found"in e?function(n,r){Ne(!!r.found),r.found.name,r.found.updateTime;const i=$d(n,r.found.name),s=zd(r.found.updateTime),o=new rt({mapValue:{fields:r.found.fields}});return ft.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){Ne(!!r.missing),Ne(!!r.readTime);const i=$d(n,r.missing),s=zd(r.readTime);return ft.newNoDocument(i,s)}(t,e):Z()}function oS(t,e){let n;if(e instanceof rm)n={update:Vd(t,e.key,e.value)};else if(e instanceof eS)n={delete:Gs(t,e.key)};else if(e instanceof im)n={update:Vd(t,e.key,e.data),updateMask:aS(e.fieldMask)};else{if(!(e instanceof tS))return Z();n={verify:Gs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof nm)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Y1)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof J1)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof X1)return{fieldPath:s.field.canonicalString(),increment:o.M};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:iS(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function aS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function am(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Uu(t){return new nS(t,!0)}/**
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
 */class lS extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.L=i,this.tt=!1}et(){if(this.tt)throw new L(sr,"The client has already been terminated.")}I(e,n,r){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.I(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===gl&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(zr,i.toString())})}P(e,n,r,i){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===gl&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(zr,s.toString())})}terminate(){this.tt=!0}}async function uS(t,e){const n=Jp(t),r=om(n.L)+"/documents",i={writes:e.map(s=>oS(n.L,s))};await n.I("Commit",r,i)}async function cS(t,e){const n=Jp(t),r=om(n.L)+"/documents",i={documents:e.map(l=>Gs(n.L,l))},s=await n.P("BatchGetDocuments",r,i,e.length),o=new Map;s.forEach(l=>{const u=sS(n.L,l);o.set(u.key.toString(),u)});const a=[];return e.forEach(l=>{const u=o.get(l.toString());Ne(!!u),a.push(u)}),a}/**
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
 */const jr=new Map;function lm(t){if(t._terminated)throw new L(sr,"The client has already been terminated.");if(!jr.has(t)){Bs("ComponentProvider","Initializing Datastore");const s=function(l){return new H1(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,i=t._freezeSettings(),new $1(e,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),o=Uu(t._databaseId),a=function(l,u,f,m){return new lS(l,u,f,m)}(t._authCredentials,t._appCheckCredentials,s,o);jr.set(t,a)}var e,n,r,i;/**
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
*/return jr.get(t)}class jd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L($,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L($,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,i,s,o){if(i===!0&&o===!0)throw new L($,`${r} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Fu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(sr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(sr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new A1;switch(n.type){case"gapi":const r=n.client;return new F1(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L($,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jr.get(e);n&&(Bs("ComponentProvider","Removing Datastore"),jr.delete(e),n.terminate())}(this),Promise.resolve()}}function dS(t,e){const n=typeof t=="object"?t:vp(),r=typeof t=="string"?t:e||"(default)",i=ku(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=u0("firestore");s&&fS(i,...s)}return i}function fS(t,e,n,r={}){var i;const s=(t=Mu(t,Fu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Yp("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Se.MOCK_USER;else{o=f0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L($,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Se(l)}t._authCredentials=new L1(new Xp(o,a))}}/**
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
 */class $e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}}class bu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bu(this.firestore,e,this._query)}}class vi extends bu{constructor(e,n,r){super(e,n,new Q1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new Ye(e))}withConverter(e){return new vi(this.firestore,e,this._path)}}function Gn(t,e,...n){if(t=lt(t),arguments.length===1&&(e=K1.D()),j1("doc","path",e),t instanceof Fu){const r=pe.fromString(e,...n);return Ld(r),new $e(t,null,new Ye(r))}{if(!(t instanceof $e||t instanceof vi))throw new L($,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Ld(r),new $e(t.firestore,t instanceof vi?t.converter:null,new Ye(r))}}/**
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
 */class or{constructor(e){this._byteString=e}static fromBase64String(e){try{return new or(It.fromBase64String(e))}catch(n){throw new L($,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new or(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class zu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L($,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $u{constructor(e){this._methodName=e}}/**
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
 */class Vu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L($,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L($,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pi(this._lat,e._lat)||pi(this._long,e._long)}}/**
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
 */const hS=/^__.*__$/;class pS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new im(e,this.data,this.fieldMask,n,this.fieldTransforms):new rm(e,this.data,n,this.fieldTransforms)}}function um(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class ju{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.L=r,this.ignoreUndefinedProperties=i,s===void 0&&this.nt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}st(e){return new ju(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.L,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.st({path:r,ot:!1});return i.ut(e),i}ct(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.st({path:r,ot:!1});return i.nt(),i}at(e){return this.st({path:void 0,ot:!0})}ht(e){return Qs(e,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}nt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(e.length===0)throw this.ht("Document fields must not be empty");if(um(this.rt)&&hS.test(e))throw this.ht('Document fields cannot begin and end with "__"')}}class mS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.L=r||Uu(e)}dt(e,n,r,i=!1){return new ju({rt:e,methodName:n,ft:r,path:qe.emptyPath(),ot:!1,lt:i},this.databaseId,this.L,this.ignoreUndefinedProperties)}}function gS(t){const e=t._freezeSettings(),n=Uu(t._databaseId);return new mS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vS(t,e,n,r,i,s={}){const o=t.dt(s.merge||s.mergeFields?2:0,e,n,i);hm("Data must be an object, but it was:",o,r);const a=dm(r,o);let l,u;if(s.merge)l=new mi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const h=yS(e,m,n);if(!o.contains(h))throw new L($,`Field '${h}' is specified in your field mask but missing from your input data.`);_S(f,h)||f.push(h)}l=new mi(f),u=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,u=o.fieldTransforms;return new pS(new rt(a),l,u)}class Bu extends $u{_toFieldTransform(e){return new Z1(e.path,new nm)}isEqual(e){return e instanceof Bu}}function cm(t,e){if(fm(t=lt(t)))return hm("Unsupported field value:",e,t),dm(t,e);if(t instanceof $u)return function(n,r){if(!um(r.rt))throw r.ht(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ht(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&e.rt!==4)throw e.ht("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=cm(o,r.at(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=lt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return q1(r.L,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:Sl(r.L,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sl(r.L,i)}}if(n instanceof Vu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof or)return{bytesValue:rS(r.L,n._byteString)};if(n instanceof $e){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ht(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ht(`Unsupported field value: ${Lu(n)}`)}(t,e)}function dm(t,e){const n={};return function(r){for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):So(t,(r,i)=>{const s=cm(i,e.it(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function fm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Vu||t instanceof or||t instanceof $e||t instanceof $u)}function hm(t,e,n){if(!fm(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Lu(n);throw r==="an object"?e.ht(t+" a custom object"):e.ht(t+" "+r)}}function yS(t,e,n){if((e=lt(e))instanceof zu)return e._internalPath;if(typeof e=="string")return pm(t,e);throw Qs("Field path arguments must be of type string or ",t,!1,void 0,n)}const wS=new RegExp("[~\\*/\\[\\]]");function pm(t,e,n){if(e.search(wS)>=0)throw Qs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zu(...e.split("."))._internalPath}catch{throw Qs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qs(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L($,a+t+l)}function _S(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mm{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ES("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SS extends mm{data(){return super.data()}}function ES(t,e){return typeof e=="string"?pm(t,e):e instanceof zu?e._internalPath:e._delegate._internalPath}/**
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
 *//**
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
 */function kS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class IS extends class{convertValue(e,n="none"){switch(wl(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vl(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){const r={};return So(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Vu(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(yl(e));default:return null}}convertTimestamp(e){const n=gi(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);Ne(am(r));const i=new fi(r.get(1),r.get(3)),s=new Ye(r.popFirst(5));return i.isEqual(n)||Du(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new or(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function gm(t){const e=lm((t=Mu(t,$e)).firestore),n=new IS(t.firestore);return cS(e,[t._key]).then(r=>{Ne(r.length===1);const i=r[0];return new mm(t.firestore,n,t._key,i.isFoundDocument()?i:null,t.converter)})}function qs(t,e,n){const r=kS((t=Mu(t,$e)).converter,e,n),i=vS(gS(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return uS(lm(t.firestore),[i.toMutation(t._key,Vr.none())])}function vm(){return new Bu("serverTimestamp")}(function(t){hr=t})(`${Ti}_lite`),nr(new Sn("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Fu(new M1(t.getProvider("auth-internal")),new z1(t.getProvider("app-check-internal")),function(s,o){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new L($,'"projectId" not provided in firebase.initializeApp.');return new fi(s.options.projectId,o)}(r,e),r);return n&&i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),Jt("firestore-lite","3.7.2",""),Jt("firestore-lite","3.7.2","esm2017");const TS={apiKey:"AIzaSyB8gCi7gPDFYl-FguhN5l1B1D1hxTHwHwU",authDomain:"registererr-b9db1.firebaseapp.com",databaseURL:"https://registererr-b9db1-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"registererr-b9db1",storageBucket:"registererr-b9db1.appspot.com",messagingSenderId:"464975890039",appId:"1:464975890039:web:f449f7f6e78930d4a2a872"},ym=gp(TS),Qn=dS(ym),Io="EVENT1",Pt=E1(ym),CS=new ht,Bd=async t=>{try{await D_(Pt,CS).then(async e=>{const n=Gn(Qn,"STDATA",Pt.currentUser.email),r=await gm(n);if(console.log(r.data()),r.exists()){const i=Gn(Qn,"STDATA",Pt.currentUser.email);qs(i,{uid:Pt.currentUser.uid},{merge:!0}),qs(Gn(Qn,Io,Pt.currentUser.email),{gmail:Pt.currentUser.email,reg_no:r.data().reg_no,name:r.data().name,branch:r.data().branch,roll_no:r.data().roll_no,smart_card_no:r.data().smart_card_no,msteams_mail:r.data().msteams_mail,phone_no:r.data().phone_no,batch_roll_no:r.data().batch_roll_no,reg_time:vm(),batch_no:r.data().batch_no,year:r.data().year}),localStorage.setItem("email",Pt.currentUser.email),localStorage.setItem("uid",Pt.currentUser.uid),localStorage.setItem("name",r.data().name),localStorage.setItem("reg_no",r.data().reg_no),localStorage.setItem("branch",r.data().branch),localStorage.setItem("roll_no",r.data().roll_no),localStorage.setItem("smart_card_no",r.data().smart_card_no),localStorage.setItem("msteams_mail",r.data().msteams_mail),localStorage.setItem("phone_no",r.data().phone_no),localStorage.setItem("batch_roll_no",r.data().batch_roll_no),localStorage.setItem("batch_no",r.data().batch_no),localStorage.setItem("year",r.data().year),window.location.replace(t)}else console.log("No such user!")}).catch(e=>{console.log(e)})}catch(e){console.log(e)}};function NS(){let t=localStorage.getItem("email");const e=wu();function n(){t?(qs(Gn(Qn,Io,t),{gmail:t,reg_no:parseInt(localStorage.getItem("reg_no")),name:localStorage.getItem("name"),branch:localStorage.getItem("branch"),batch_no:parseInt(localStorage.getItem("batch_no")),year:parseInt(localStorage.getItem("year")),roll_no:parseInt(localStorage.getItem("roll_no")),smart_card_no:localStorage.getItem("smart_card_no"),msteams_mail:localStorage.getItem("msteams_mail"),phone_no:parseInt(localStorage.getItem("phone_no")),batch_roll_no:localStorage.getItem("batch_roll_no"),reg_time:vm()}),console.log(t),console.log("hiii"),e("/success"),window.location.href="/success"):Bd("/success")}function r(){t?(e("/edit"),window.location.href="/edit"):Bd("/edit")}return se("div",{className:"App",children:[se("nav",{className:"navbar",children:[_("h1",{children:"registerERR"}),_("div",{className:"links",children:_(li,{to:"/about",children:"About"})})]}),_("button",{onClick:n,children:"Register"}),_("button",{onClick:r,children:"Edit Your Details"})]})}const RS=()=>{function t(){localStorage.clear(),window.location.href="/"}return se("div",{className:"success-page",children:[se("nav",{className:"navbar",children:[_("h1",{children:"registerERR"}),se("div",{className:"links",children:[_(li,{to:"/",children:"Home"}),_(li,{to:"/edit",children:"Edit"})]})]}),_("h1",{children:"Registration Successful"}),_("p",{children:"Thank you for registering with us. You can now close this tab."}),se("button",{onClick:t,children:["Unregister From ",Io]})]})};function ca(){const t=lp();return console.error(t),se("div",{id:"error-page",children:[_("h1",{children:"Oops!"}),_("p",{children:"Sorry, an unexpected error has occurred."}),_("p",{children:_("i",{children:t.statusText||t.message})})]})}function PS(){const[t,e]=R.exports.useState(localStorage.getItem("reg_no")),[n,r]=R.exports.useState(localStorage.getItem("name")),[i,s]=R.exports.useState(localStorage.getItem("branch")),[o,a]=R.exports.useState(localStorage.getItem("roll_no")),[l,u]=R.exports.useState(localStorage.getItem("smart_card_no")),[f,m]=R.exports.useState(localStorage.getItem("msteams_mail")),[h,g]=R.exports.useState(localStorage.getItem("phone_no")),[v,E]=R.exports.useState(localStorage.getItem("year")),[O,d]=R.exports.useState(localStorage.getItem("batch_no"));let c=localStorage.getItem("email");const p=async()=>{const S=Gn(Qn,Io,c),T=await gm(S);console.log("Document data:",T.data())},y=S=>{S.preventDefault(),qs(Gn(Qn,"STDATA",c),{year:v,batch:v+O,batch_no:O,batch_roll_no:v+O+"-"+o,branch:i,gmail:c,msteams_mail:f,name:n,phone_no:h,reg_no:t,roll_no:o,smart_card_no:l}),localStorage.setItem("name",n),localStorage.setItem("reg_no",t),localStorage.setItem("branch",i),localStorage.setItem("batch_no",O),localStorage.setItem("year",v),localStorage.setItem("roll_no",o),localStorage.setItem("smart_card_no",l),localStorage.setItem("msteams_mail",f),localStorage.setItem("phone_no",h),localStorage.setItem("batch_roll_no",v+O+"-"+o),localStorage.setItem("batch",v+O),console.log("UPDATED DATA")};return p(),se("div",{id:"edit-page",children:[se("nav",{className:"navbar",children:[_("h1",{children:"registerERR"}),se("div",{className:"links",children:[_(li,{to:"/",children:"Register"}),_(li,{to:"/about",children:"About"})]})]}),_("h1",{children:"Edit Your Details"}),se("form",{children:[_("label",{for:"BRANCH",className:"editdata-label-1 editdata-label",children:"BRANCH:"}),se("select",{className:"editdata-input",name:"BRANCH",value:i,onChange:S=>s(S.target.value),children:[_("option",{className:"editdata-input-value",value:"AI&DS",selected:!0,children:"AI&DS"}),_("option",{className:"editdata-input-value",value:"CM",selected:!0,children:"CM"}),_("option",{className:"editdata-input-value",value:"CYSE",selected:!0,children:"CYSE"}),_("option",{className:"editdata-input-value",value:"EC",selected:!0,children:"EC"}),_("option",{className:"editdata-input-value",value:"ETC",selected:!0,children:"ETC"}),_("option",{className:"editdata-input-value",value:"IT",selected:!0,children:"IT"})]}),_("label",{for:"ROLL NO",className:"editdata-label-2 editdata-label",children:"ROLL NO:"}),_("input",{className:"editdata-input",label:"Roll No",type:"number",placeholder:o,value:o,onChange:S=>a(S.target.value)}),_("label",{for:"YEAR",className:"editdata-label-3 editdata-label",children:"YEAR:"}),se("select",{className:"editdata-input",name:"YEAR",defaultValue:v,onChange:S=>E(S.target.value),children:[_("option",{className:"editdata-input-value",value:"FE",selected:!0,children:"FE"}),_("option",{className:"editdata-input-value",value:"SE",selected:!0,children:"SE"}),_("option",{className:"editdata-input-value",value:"TE",selected:!0,children:"TE"}),_("option",{className:"editdata-input-value",value:"BE",selected:!0,children:"BE"})]}),_("label",{for:"BATCH",className:"editdata-label-4 editdata-label",children:"BATCH:"}),se("select",{className:"editdata-input",name:"BATCH",defaultValue:O,onChange:S=>d(S.target.value),children:[_("option",{className:"editdata-input-value",value:"1",selected:!0,children:"1"}),_("option",{className:"editdata-input-value",value:"2",selected:!0,children:"2"}),_("option",{className:"editdata-input-value",value:"3",selected:!0,children:"3"}),_("option",{className:"editdata-input-value",value:"4",selected:!0,children:"4"}),_("option",{className:"editdata-input-value",value:"5",selected:!0,children:"5"}),_("option",{className:"editdata-input-value",value:"6",selected:!0,children:"6"}),_("option",{className:"editdata-input-value",value:"7",selected:!0,children:"7"}),_("option",{className:"editdata-input-value",value:"8",selected:!0,children:"8"}),_("option",{className:"editdata-input-value",value:"9",selected:!0,children:"9"}),_("option",{className:"editdata-input-value",value:"10",selected:!0,children:"10"}),_("option",{className:"editdata-input-value",value:"11",selected:!0,children:"11"}),_("option",{className:"editdata-input-value",value:"12",selected:!0,children:"12"}),_("option",{className:"editdata-input-value",value:"13",selected:!0,children:"13"}),_("option",{className:"editdata-input-value",value:"14",selected:!0,children:"14"}),_("option",{className:"editdata-input-value",value:"15",selected:!0,children:"15"})]}),_("label",{for:"MS TEAMS MAIL",className:"editdata-label-5 editdata-label",children:"MS TEAMS MAIL:"}),_("input",{className:"editdata-input",label:"MS Teams Mail",type:"email",placeholder:f,value:f,onChange:S=>m(S.target.value)}),_("label",{for:"PHONE NO",className:"editdata-label-6 editdata-label",children:"PHONE NO:"}),_("input",{className:"editdata-input",label:"Phone No",type:"number",placeholder:h,value:h,onChange:S=>g(S.target.value)}),_("label",{for:"NAME",className:"editdata-label-7 editdata-label",children:"NAME:"}),_("input",{className:"editdata-input",label:"Name",type:"text",placeholder:n,value:n,onChange:S=>r(S.target.value)}),_("label",{for:"REG NO",className:"editdata-label-8 editdata-label",children:"REG NO:"}),_("input",{className:"editdata-input",label:"Reg No",type:"number",placeholder:t,value:t,onChange:S=>e(S.target.value)}),_("label",{for:"SMART CARD NO",className:"editdata-label-9 editdata-label",children:"SMART CARD NO:"}),_("input",{className:"editdata-input",label:"Smart Card No",type:"text",placeholder:l,value:l,onChange:S=>u(S.target.value)}),_("button",{onClick:y,className:"editdata-submit",children:"+"})]})]})}let xS=localStorage.getItem("email");const OS=()=>xS?_(jy,{}):_(Vy,{to:"/"});fa.createRoot(document.getElementById("root")).render(_(Jd.StrictMode,{children:_(qy,{children:se(Hy,{children:[se(Rr,{element:_(OS,{}),children:[_(Rr,{path:"/success",element:_(RS,{}),errorElement:_(ca,{})}),_(Rr,{path:"/edit",element:_(PS,{}),errorElement:_(ca,{})})]}),_(Rr,{path:"/",element:_(NS,{}),errorElement:_(ca,{})})]})})}));
