!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=9)}([function(e,t,n){"use strict";var o=n(1),r=Object.prototype.toString;function i(e){return"[object Array]"===r.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===r.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,o){"object"==typeof t[o]&&"object"==typeof n?t[o]=e(t[o],n):t[o]=n}for(var o=0,r=arguments.length;o<r;o++)u(arguments[o],n);return t},deepMerge:function e(){var t={};function n(n,o){"object"==typeof t[o]&&"object"==typeof n?t[o]=e(t[o],n):t[o]="object"==typeof n?e({},n):n}for(var o=0,r=arguments.length;o<r;o++)u(arguments[o],n);return t},extend:function(e,t,n){return u(t,(function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(t,n)}}},function(e,t,n){"use strict";var o=n(0);function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var a=[];o.forEach(t,(function(e,t){null!=e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,(function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var o=n(0),r=n(19),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n(5)),s),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),o.forEach(["post","put","patch"],(function(e){c.headers[e]=o.merge(i)})),e.exports=c}).call(this,n(18))},function(e,t,n){"use strict";var o=n(0),r=n(20),i=n(2),a=n(22),s=n(25),c=n(26),u=n(6);e.exports=function(e){return new Promise((function(t,l){var d=e.data,f=e.headers;o.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",v=e.auth.password||"";f.Authorization="Basic "+btoa(m+":"+v)}var h=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(h,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};r(t,l,o),p=null}},p.onabort=function(){p&&(l(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",p)),p=null},o.isStandardBrowserEnv()){var y=n(27),g=(e.withCredentials||c(h))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&o.forEach(f,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),o.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),l(e),p=null)})),void 0===d&&(d=null),p.send(d)}))}},function(e,t,n){"use strict";var o=n(21);e.exports=function(e,t,n,r,i){var a=new Error(e);return o(a,t,n,r,i)}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e,t){t=t||{};var n={},r=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];o.forEach(r,(function(e){void 0!==t[e]&&(n[e]=t[e])})),o.forEach(i,(function(r){o.isObject(t[r])?n[r]=o.deepMerge(e[r],t[r]):void 0!==t[r]?n[r]=t[r]:o.isObject(e[r])?n[r]=o.deepMerge(e[r]):void 0!==e[r]&&(n[r]=e[r])})),o.forEach(a,(function(o){void 0!==t[o]?n[o]=t[o]:void 0!==e[o]&&(n[o]=e[o])}));var s=r.concat(i).concat(a),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return o.forEach(c,(function(o){void 0!==t[o]?n[o]=t[o]:void 0!==e[o]&&(n[o]=e[o])})),n}},function(e,t,n){"use strict";function o(e){this.message=e}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,e.exports=o},function(e,t,n){n(10),e.exports=n(32)},function(e,t,n){function o(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}n(11);var u=function(){function e(){a(this,e)}return c(e,[{key:"template",value:function(e){console.log("gg")}},{key:"html",value:function(e){return"object"===i(e)&&null!==e&&e.hasOwnProperty("name")?this[e.name](e.data):null}}]),e}();window.TemplateBuilder=new u,TemplateBuilder.html({name:"template",data:{}});var l={attributes:!0,childList:!0,subtree:!0,characterData:!0};window.observer=new MutationObserver((function(e,t){var n,r=o(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;if("characterData"===i.type){var a=i.target.parentElement;a.classList.contains("count-block__count")&&(a.innerHTML.trim().length>=3?a.classList.add("count-block__count-big"):a.classList.remove("count-block__count-big"))}}}catch(e){r.e(e)}finally{r.f()}})),window.scrollEvents={},window.resizeEvents={},window.Selectors={selectorElements:[],activeClassName:"selector-active",open:function(e,t){var n=window.Selectors;e.classList.add(n.activeClassName),t.style.opacity=1,t.style.transform="scaleY(1)"},close:function(e,t){var n=window.Selectors;e.classList.remove(n.activeClassName),t.style.opacity=0,t.style.transform="scaleY(0)",e.blur()},onBlur:function(e,t,n){window.Selectors.close(t,n)},onFocus:function(e,t,n){var o=window.Selectors;Array.prototype.forEach.call(o.selectorElements,(function(e,n){if(e.dom!==t||e.dom.classList.contains(o.activeClassName)){var r=e.dom.querySelector(".selector__options");o.close(e.dom,r)}})),t.classList.contains(o.activeClassName)?o.close(t,n):o.open(t,n)},onSelect:function(e,t,n,o,r,i){var a=window.Selectors,s=e.target;if(t!==n&&s.classList.contains("option")){var c=t.querySelector(".selector__active");s.innerHTML!==c.innerHTML&&(c.innerHTML=s.innerHTML,o.value=s.innerHTML,Array.prototype.forEach.call(r,(function(e,t){e.classList.remove("selected")})),s.classList.add("selected"),a.close(t,i))}},init:function(){var e=window.Selectors,t=document.querySelectorAll(".selector");Array.prototype.forEach.call(t,(function(n,o){var r=n.querySelector("input"),i=n.querySelector(".selector__options"),a=n.querySelectorAll(".selector__options .option");if(void 0!==r&&void 0!==i&&a.length>0){if(void 0!==e.selectorElements.find((function(e){return e.dom===n&&!0===e.active})))return;var s=function(t){e.onFocus(t,n,i)};n.addEventListener("focus",s);var c=function(t){e.onBlur(t,n,i)};n.addEventListener("blur",c);var u=n.attributes.getNamedItem("data-noselect"),l={};null===u&&Array.prototype.forEach.call(a,(function(o,s){o.classList.contains("selected")&&e.onSelect({target:o},n,o,r,t,i),l=function(t){e.onSelect(t,n,o,r,a,i)},o.addEventListener("click",l)})),e.selectorElements.push({dom:n,active:!0,handler:{focus:s,blur:c,select:l}})}}))}},window.Dropdowns={dropdownElements:[],activeClassName:"dropdown-active",onMouseOver:function(e,t,n){var o=window.Dropdowns;t.classList.contains(o.activeClassName)||(t.classList.add(o.activeClassName),n.style.opacity=1,n.style.transform="scaleY(1)")},onMouseLeave:function(e,t,n){var o=window.Dropdowns;t.classList.remove(o.activeClassName),n.style.opacity=0,n.style.transform="scaleY(0)"},init:function(){var e=window.Dropdowns,t=document.querySelectorAll(".dropdown");Array.prototype.forEach.call(t,(function(t,n){var o=t.querySelector(".dropdown__wrap"),r=t.querySelectorAll(".dropdown__wrap .dropdown__element");if(void 0!==o&&r.length>0){if(void 0!==e.dropdownElements.find((function(e){return e.dom===t&&!0===e.active})))return;var i=function(n){e.onMouseOver(n,t,o)};t.addEventListener("mouseover",i);var a=function(n){e.onMouseLeave(n,t,o)};t.addEventListener("mouseleave",a),e.dropdownElements.push({dom:t,active:!0,handler:{mouseleave:a,mouseover:i}})}}))}},window.Popups={popupElements:[],popupCallers:[],activePopup:null,popupContainer:null,onClick:function(e,t,n){var o=window.Popups;o.activePopup!==n&&(null!==o.activePopup&&o.close(),o.open(t,n))},open:function(e,t){var n=window.Popups;document.body.style.hasOwnProperty("content-visibility")&&(n.popupContainer.style.contentVisibility="visible"),n.popupContainer.style.display="block",n.popupContainer.style.opacity=1,n.activePopup=t;setTimeout((function(){window.Popups.openHandler(e,t)}),200)},openHandler:function(e){var t=window.Popups,n=t.popupElements.findIndex((function(e){return e.dom===t.activePopup}));t.popupElements[n].active=!0,t.activePopup.style.opacity=1,t.activePopup.style.transform="scale(1)"},close:function(){var e=window.Popups;if(document.body.style.hasOwnProperty("content-visibility")&&(e.popupContainer.style.contentVisibility="hidden"),e.popupContainer.style.display="none",e.popupContainer.style.opacity=0,null!==e.activePopup){e.activePopup.style.opacity=0,e.activePopup.style.transform="scale(0)";var t=e.popupElements.findIndex((function(t){return t.dom===e.activePopup}));e.popupElements[t].active=!1}e.activePopup=null},init:function(){var e=window.Popups,t=document.querySelectorAll("[js-popup]"),n=document.querySelector(".popup-container");if(void 0!==n){e.popupContainer=n;var o=document.querySelectorAll(".popup"),r=e.popupContainer.querySelector(".popup-wrap");Array.prototype.forEach.call(o,(function(e,t){r.insertBefore(e,null)})),Array.prototype.forEach.call(t,(function(t,n){var o=t.attributes.getNamedItem("js-popup"),r=document.querySelector("."+o.value);if(0!==o.value.length&&void 0!==r){var i=function(n){e.onClick(n,t,r)};t.addEventListener("click",i),e.popupCallers.push({dom:t,active:!0,handler:{click:i}}),e.popupElements.push({dom:r,active:!1})}}));n.addEventListener("click",(function(t){e.close()}))}}};var d=function(){function e(t){var n=this;a(this,e),this.defaultConf={selector:".slider",selectorDom:null,containerDom:null,data:".slider-row",dataDom:null,time:8e3,auto:!1,dots:!1,type:"slide"},this.config=void 0,this.touchmoveHandler=function(e){n.swipeAction(e,n)},this.touchstartHandler=function(e){n.swipeStart(e,n)},this.touchendHandler=function(e){n.swipeEnd(e,n)},this.config=Object.assign(this.defaultConf,t),this.getDomElements()&&this.init()}return c(e,[{key:"getDomElements",value:function(){var e=this.config;if(null===e.selector&&"string"!=typeof e.selector||(e.selectorDom=document.querySelector(e.selector)),null!==e.selectorDom&&void 0!==e.selectorDom){if(void 0===e.containerDom&&null===e.containerDom)return!1;switch(e.containerDom=e.selectorDom.querySelector(".slider__container"),i(e.data)){case"string":return e.dataDom=e.selectorDom.querySelectorAll(e.data),!0;case"object":if(Array.isArray(e.data))return e.dataDom=e.data,!0}}return!1}},{key:"init",value:function(){var e=this.config;e.positions=[],e.active=0,e.activeDom=e.dataDom[0],e.interval=-1,e.isReverse=!1,e.posX1=0,e.posInit=0,e.last=-1,e.animId1=-1;var t=e.activeDom.getBoundingClientRect().width;e.activeDom.getBoundingClientRect().height;switch(e.width=t,e.posThreshold=.15*t,e.type){case"opacity":Array.prototype.forEach.call(e.dataDom,(function(t,n){e.dataDom[n].style.opacity=0,e.dataDom[n].style.position="absolute",e.dataDom[n].style.left=0,e.dataDom[n].style.top=0,e.active===n&&(e.dataDom[n].style.opacity=1,e.dataDom[n].style.position="relative")}));break;default:e.containerDom.style.transform="translate3d(-".concat(t*e.active,", 0px, 0px)")}e.activeDom.classList.add("active"),this.initButtons(),this.dotsInit(),this.calculatePositions(),this.animateSlides(),this.initEvents(),this.interval()}},{key:"interval",value:function(){var e=this,t=this.config;!0===t.auto&&(clearInterval(t.interval),t.interval=setInterval((function(){t.active+1===t.dataDom.length&&(t.isReverse=!0),t.active<t.dataDom.length-1&&!t.isReverse?e.nextSlider(null,e):e.prevSlider(null,e),t.active-1<0&&(t.isReverse=!1)}),t.time))}},{key:"initButtons",value:function(){var e=this.config,t=document.createElement("button");t.classList.add("slider__prev"),t.innerHTML="<i class='slider__prev-icon far fa-chevron-left'></i>";var n=document.createElement("button");n.classList.add("slider__next"),n.innerHTML="<i class='slider__next-icon far fa-chevron-right'></i>",e.selectorDom.prepend(t),e.selectorDom.append(n),e.prevBtn=e.selectorDom.querySelector(".slider__prev"),e.nextBtn=e.selectorDom.querySelector(".slider__next"),this.buttonsState()}},{key:"dotsInit",value:function(){var e=this,t=this.config;if(!0===t.dots){var n=document.createElement("div");n.classList.add("slider__dots"),t.selectorDom.append(n),t.dotsDom=t.selectorDom.querySelector(".slider__dots"),t.dotsDataDom=[],Array.prototype.forEach.call(t.dataDom,(function(n,o){var r=document.createElement("span");r.classList.add("slider__dots-dot"),t.active===o&&r.classList.add("active"),t.dotsDom.append(r);var i=t.dotsDom.querySelectorAll(".slider__dots-dot")[o];t.dotsDataDom[o]=i,i.addEventListener("click",(function(t){e.dotAction(t,e,o)}))}))}}},{key:"dotAction",value:function(e,t,n){var o=t.config;o.last=o.active,o.active=n,o.activeDom=o.dataDom[o.active],o.dataDom[o.last].classList.remove("active"),t.interval(),t.animateSlides(),t.buttonsState(),t.dotsState()}},{key:"dotsState",value:function(){var e=this.config;e.dotsDataDom[e.last].classList.remove("active"),e.dotsDataDom[e.active].classList.add("active")}},{key:"buttonsState",value:function(){var e=this.config;e.prevBtn.classList.toggle("disabled",0===e.active),e.nextBtn.classList.toggle("disabled",e.active===--e.dataDom.length)}},{key:"prevSlider",value:function(e,t){var n=t.config;t.interval(),"opacity"===n.type&&clearTimeout(n.animId1),n.active>0&&(n.last=n.active,n.active=n.active-1,n.activeDom.classList.remove("active"),n.activeDom=n.dataDom[n.active],n.activeDom.classList.add("active"),t.calculatePositions()),t.animateSlides(),t.buttonsState(),t.dotsState()}},{key:"nextSlider",value:function(e,t){var n=t.config;t.interval(),"opacity"===n.type&&clearTimeout(n.animId1),n.active<n.dataDom.length-1&&(n.last=n.active,n.active=n.active+1,n.activeDom.classList.remove("active"),n.activeDom=n.dataDom[n.active],n.activeDom.classList.add("active"),t.calculatePositions()),t.animateSlides(),t.buttonsState(),t.dotsState()}},{key:"getEvent",value:function(e){return-1!==e.type.search("touch")?e.touches[0]:e}},{key:"swipeAction",value:function(e,t){var n=t.config,o=t.getEvent(e);switch(t.interval(),n.posX2=n.posX1-o.clientX,n.posX1=o.clientX,n.type){case"opacity":break;default:var r=+n.containerDom.style.transform.match(/[-0-9.]+(?=px)/)[0],i=n.posX2<=0;n.containerDom.style.transform="translate3d(".concat(i?r+-n.posX2:r-n.posX2,"px, 0px, 0px)"),(r>400||r<n.positions[n.positions.length-1]+-400)&&t.animateSlides()}}},{key:"swipeEnd",value:function(e,t){var n=t.config;n.containerDom.removeEventListener("touchmove",t.touchmoveHandler),n.containerDom.removeEventListener("mousemove",t.touchmoveHandler),n.containerDom.removeEventListener("touchend",t.touchendHandler),n.containerDom.removeEventListener("mouseup",t.touchendHandler);var o=n.posInit-n.posX1;Math.abs(o)>n.posThreshold&&(n.posInit<n.posX1?t.prevSlider(null,t):n.posInit>n.posX1&&t.nextSlider(null,t)),n.posInit!==n.posX1&&t.animateSlides()}},{key:"swipeStart",value:function(e,t){var n=t.config,o=t.getEvent(e);n.posInit=n.posX1=o.clientX,n.containerDom.addEventListener("touchmove",t.touchmoveHandler,{passive:!0}),n.containerDom.addEventListener("mousemove",t.touchmoveHandler,{passive:!0}),n.containerDom.addEventListener("touchend",t.touchendHandler,{passive:!0}),n.containerDom.addEventListener("mouseup",t.touchendHandler,{passive:!0})}},{key:"initEvents",value:function(){var e=this,t=this.config;t.prevBtn.addEventListener("click",(function(t){e.prevSlider(t,e)})),t.nextBtn.addEventListener("click",(function(t){e.nextSlider(t,e)})),t.containerDom.addEventListener("touchstart",this.touchstartHandler,{passive:!0}),t.containerDom.addEventListener("mousedown",this.touchstartHandler,{passive:!0}),window.addEventListener("resize",(function(t){e.onResize(t,e)}))}},{key:"calculatePositions",value:function(){var e=this.config,t=e.activeDom.getBoundingClientRect().width;switch(e.type){case"opacity":break;default:Array.prototype.forEach.call(e.dataDom,(function(n,o){e.positions[o]=-t*o}))}}},{key:"animateSlides",value:function(){var e=this.config;switch(e.type){case"opacity":Array.prototype.forEach.call(e.dataDom,(function(t,n){n!==e.last&&n!==e.active&&(e.dataDom[n].style.opacity=0,e.dataDom[n].style.position="absolute")})),-1!==e.last&&(e.dataDom[e.active].style.position="relative",e.dataDom[e.last].style.position="absolute",e.dataDom[e.active].style.opacity=1,e.animId1=setTimeout((function(){e.dataDom[e.last].style.opacity=0}),225));break;default:e.containerDom.style.transform="translate3d(".concat(e.positions[e.active],"px, 0px, 0px)")}}},{key:"onResize",value:function(e,t){t.config;t.calculatePositions(),t.animateSlides()}}]),e}(),f=function(e){var t=document.querySelector(".header__fixed");t&&(window.scrollY>=300?t.style.top=0:parseInt(t.style.top)>=0&&(t.style.top="-".concat(Number(t.offsetHeight)+100,"px")))};scrollEvents.fixedHeader={handler:f,name:"fixedHeader"};scrollEvents.scrollToTop={handler:function(e){var t=document.querySelector(".scroll-to-top");t&&(window.scrollY>=300?(t.style.right="30px",t.style.opacity=1):(t.style.right="-200px",t.style.opacity=0))},name:"scrollToTop"};resizeEvents.fixedHeader={handler:function(e){var t=document.body.style.hasOwnProperty("content-visibility");if(window.innerWidth<=991){var n=document.querySelector(".header__fixed"),o=document.querySelector(".header-main");n&&(n.style.top="-".concat(Number(n.offsetHeight)+100,"px")),o&&(t?o.style.contentVisibility="hidden":o.style.display="none"),delete scrollEvents.fixedHeader}else{var r=document.querySelector(".header-main");r&&(t?r.style.contentVisibility="visible":r.style.display="block"),f(),scrollEvents.fixedHeader={handler:f,name:"fixedHeader"}}},name:"fixedHeader"},document.addEventListener("DOMContentLoaded",(function(){document.body.style.hasOwnProperty("content-visibility");window.onscroll=function(e){Object.values(scrollEvents).forEach((function(t){t.handler(e)}))},window.onresize=function(e){Object.values(resizeEvents).forEach((function(t){t.handler(e)}))};document.querySelector(".scroll-to-top").addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})}));var e=document.querySelectorAll(".count-block .count-block__count");Array.prototype.forEach.call(e,(function(e){e.innerHTML.trim().length>=3?e.classList.add("count-block__count-big"):e.classList.remove("count-block__count-big"),observer.observe(e,l)})),Popups.init(),Selectors.init(),Dropdowns.init(),new d({auto:!0,dots:!0,type:"opacity"})})),document.addEventListener("DOMContentLoaded",(function(){var e=[].slice.call(document.querySelectorAll("img.lazy")),t=[].slice.call(document.querySelectorAll("iframe.lazy")),n=[].slice.call(document.querySelectorAll(".lazy-background")),o=!1,r=function r(){!1===o&&(o=!0,setTimeout((function(){e.forEach((function(e){e.getBoundingClientRect().top<=window.innerHeight&&e.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(e).display&&(e.src=e.dataset.src,e.srcset=e.dataset.srcset,e.classList.remove("lazy"))})),t.forEach((function(e){e.getBoundingClientRect().top<=window.innerHeight&&e.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(e).display&&(e.src=e.dataset.src,e.classList.remove("lazy"))})),n.forEach((function(e){e.getBoundingClientRect().top<=window.innerHeight&&e.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(e).display&&(e.style.backgroundImage="url('".concat(e.dataset.src,"')"),e.classList.remove("lazy-background"))})),0===t.length&&0===e.length&&0===n.length&&(document.removeEventListener("scroll",r),window.removeEventListener("resize",r),window.removeEventListener("orientationchange",r)),o=!1}),200))};document.addEventListener("scroll",r),window.addEventListener("resize",r),window.addEventListener("orientationchange",r),r()}))},function(e,t,n){window.axios=n(12),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},function(e,t,n){e.exports=n(13)},function(e,t,n){"use strict";var o=n(0),r=n(1),i=n(14),a=n(7);function s(e){var t=new i(e),n=r(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var c=s(n(4));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(8),c.CancelToken=n(28),c.isCancel=n(3),c.all=function(e){return Promise.all(e)},c.spread=n(29),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var o=n(0),r=n(2),i=n(15),a=n(16),s=n(7);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}})),o.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var o=n(0);function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},function(e,t,n){"use strict";var o=n(0),r=n(17),i=n(3),a=n(4);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=r(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e,t,n){return o.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=s(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function v(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||l||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e,t){o.forEach(e,(function(n,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[o])}))}},function(e,t,n){"use strict";var o=n(6);e.exports=function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(o("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,o,r){return e.config=t,n&&(e.code=n),e.request=o,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var o=n(23),r=n(24);e.exports=function(e,t){return e&&!o(t)?r(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var o=n(0),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(o.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=o.trim(e.substr(0,i)).toLowerCase(),n=o.trim(e.substr(i+1)),t){if(a[t]&&r.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var o=n(0);e.exports=o.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var o=e;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=o.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var o=n(0);e.exports=o.isStandardBrowserEnv()?{write:function(e,t,n,r,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),o.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),o.isString(r)&&s.push("path="+r),o.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var o=n(8);function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new o(e),t(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},,,function(e,t){}]);