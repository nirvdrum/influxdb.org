!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var n,r=Object(this),i=r.length>>>0,a=0;if("function"!=typeof e)throw new TypeError;if(0==i&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(a in r){n=r[a++];break}if(++a>=i)throw new TypeError}for(;i>a;)a in r&&(n=e.call(t,n,r[a],a,r)),a++;return n})}();var Zepto=function(){function t(t){return null==t?String(t):V[G.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function a(t){return i(t)&&!n(t)&&t.__proto__==Object.prototype}function o(t){return t instanceof Array}function s(t){return"number"==typeof t.length}function u(t){return A.call(t,function(t){return null!=t})}function c(t){return t.length>0?M.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(t){return t in F?F[t]:F[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t,e){return"number"!=typeof e||R[l(t)]?e:e+"px"}function d(t){var e,n;return j[t]||(e=D.createElement(t),D.body.appendChild(e),n=L(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),j[t]=n),j[t]}function p(t){return"children"in t?N.call(t.children):M.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function g(t,e,n){for(k in e)n&&(a(e[k])||o(e[k]))?(a(e[k])&&!a(t[k])&&(t[k]={}),o(e[k])&&!o(t[k])&&(t[k]=[]),g(t[k],e[k],n)):e[k]!==_&&(t[k]=e[k])}function m(t,e){return e===_?M(t):M(t).filter(e)}function v(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className,r=n&&n.baseVal!==_;return e===_?r?n.baseVal:n:(r?n.baseVal=e:t.className=e,void 0)}function x(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(e=Number(t))?/^[\[\{]/.test(t)?M.parseJSON(t):t:e):t}catch(n){return t}}function w(t,e){e(t);for(var n in t.childNodes)w(t.childNodes[n],e)}var _,k,M,C,T,E,S=[],N=S.slice,A=S.filter,D=window.document,j={},F={},L=D.defaultView.getComputedStyle,R={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},H=/^\s*<(\w+|!)[^>]*>/,q=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,O=/^(?:body|html)$/i,z=["val","css","html","text","data","width","height","offset"],P=["after","prepend","before","append"],$=D.createElement("table"),I=D.createElement("tr"),B={tr:D.createElement("tbody"),tbody:$,thead:$,tfoot:$,td:I,th:I,"*":D.createElement("div")},W=/complete|loaded|interactive/,U=/^\.([\w-]+)$/,Y=/^#([\w-]*)$/,X=/^[\w-]+$/,V={},G=V.toString,Z={},J=D.createElement("div");return Z.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,a=!i;return a&&(i=J).appendChild(t),r=~Z.qsa(i,e).indexOf(t),a&&J.removeChild(t),r},T=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},E=function(t){return A.call(t,function(e,n){return t.indexOf(e)==n})},Z.fragment=function(t,e,n){t.replace&&(t=t.replace(q,"<$1></$2>")),e===_&&(e=H.test(t)&&RegExp.$1),e in B||(e="*");var r,i,o=B[e];return o.innerHTML=""+t,i=M.each(N.call(o.childNodes),function(){o.removeChild(this)}),a(n)&&(r=M(i),M.each(n,function(t,e){z.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},Z.Z=function(t,e){return t=t||[],t.__proto__=M.fn,t.selector=e||"",t},Z.isZ=function(t){return t instanceof Z.Z},Z.init=function(t,n){if(t){if(e(t))return M(D).ready(t);if(Z.isZ(t))return t;var r;if(o(t))r=u(t);else if(i(t))r=[a(t)?M.extend({},t):t],t=null;else if(H.test(t))r=Z.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==_)return M(n).find(t);r=Z.qsa(D,t)}return Z.Z(r,t)}return Z.Z()},M=function(t,e){return Z.init(t,e)},M.extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){g(t,n,e)}),t},Z.qsa=function(t,e){var n;return r(t)&&Y.test(e)?(n=t.getElementById(RegExp.$1))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:N.call(U.test(e)?t.getElementsByClassName(RegExp.$1):X.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},M.contains=function(t,e){return t!==e&&t.contains(e)},M.type=t,M.isFunction=e,M.isWindow=n,M.isArray=o,M.isPlainObject=a,M.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},M.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},M.camelCase=T,M.trim=function(t){return t.trim()},M.uuid=0,M.support={},M.expr={},M.map=function(t,e){var n,r,i,a=[];if(s(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&a.push(n);else for(i in t)n=e(t[i],i),null!=n&&a.push(n);return c(a)},M.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},M.grep=function(t,e){return A.call(t,e)},window.JSON&&(M.parseJSON=JSON.parse),M.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),M.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(t){return M(M.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return M(N.apply(this,arguments))},ready:function(t){return W.test(D.readyState)?t(M):D.addEventListener("DOMContentLoaded",function(){t(M)},!1),this},get:function(t){return t===_?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return S.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):M(A.call(this,function(e){return Z.matches(e,t)}))},add:function(t,e){return M(E(this.concat(M(t,e))))},is:function(t){return this.length>0&&Z.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==_)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&e(t.item)?N.call(t):M(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return M(n)},has:function(t){return this.filter(function(){return i(t)?M.contains(this,t):M(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:M(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:M(t)},find:function(t){var e,n=this;return e="object"==typeof t?M(t).filter(function(){var t=this;return S.some.call(n,function(e){return M.contains(e,t)})}):1==this.length?M(Z.qsa(this[0],t)):this.map(function(){return Z.qsa(this,t)})},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=M(t));n&&!(i?i.indexOf(n)>=0:Z.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return M(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=M.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(E(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return N.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return A.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return M.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==L(this,"").getPropertyValue("display")&&(this.style.display=d(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=M(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){M(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){M(this[0]).before(t=M(t));for(var e;(e=t.children()).length;)t=e.first();M(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=M(this),i=r.contents(),a=n?t.call(this,e):t;i.length?i.wrapAll(a):r.append(a)})},unwrap:function(){return this.parent().each(function(){M(this).replaceWith(M(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=M(this);(t===_?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return M(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return M(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===_?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;M(this).empty().append(v(this,t,e,n))})},text:function(t){return t===_?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var n;return"string"==typeof t&&e===_?0==this.length||1!==this[0].nodeType?_:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(i(t))for(k in t)y(this,k,t[k]);else y(this,t,v(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&y(this,t)})},prop:function(t,e){return e===_?this[0]&&this[0][t]:this.each(function(n){this[t]=v(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+l(t),e);return null!==n?x(n):_},val:function(t){return t===_?this[0]&&(this[0].multiple?M(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=v(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=M(this),r=v(this,t,e,n.offset()),i=n.offsetParent().offset(),a={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(a.position="relative"),n.css(a)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2&&"string"==typeof e)return this[0]&&(this[0].style[T(e)]||L(this[0],"").getPropertyValue(e));var r="";if("string"==t(e))n||0===n?r=l(e)+":"+h(e,n):this.each(function(){this.style.removeProperty(l(e))});else for(k in e)e[k]||0===e[k]?r+=l(k)+":"+h(k,e[k])+";":this.each(function(){this.style.removeProperty(l(k))});return this.each(function(){this.style.cssText+=";"+r})},index:function(t){return t?this.indexOf(M(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return S.some.call(this,function(t){return this.test(b(t))},f(t))},addClass:function(t){return this.each(function(e){C=[];var n=b(this),r=v(this,t,e,n);r.split(/\s+/g).forEach(function(t){M(this).hasClass(t)||C.push(t)},this),C.length&&b(this,n+(n?" ":"")+C.join(" "))})},removeClass:function(t){return this.each(function(e){return t===_?b(this,""):(C=b(this),v(this,t,e,C).split(/\s+/g).forEach(function(t){C=C.replace(f(t)," ")}),b(this,C.trim()),void 0)})},toggleClass:function(t,e){return this.each(function(n){var r=M(this),i=v(this,t,n,b(this));i.split(/\s+/g).forEach(function(t){(e===_?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=O.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(M(t).css("margin-top"))||0,n.left-=parseFloat(M(t).css("margin-left"))||0,r.top+=parseFloat(M(e[0]).css("border-top-width"))||0,r.left+=parseFloat(M(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||D.body;t&&!O.test(t.nodeName)&&"static"==M(t).css("position");)t=t.offsetParent;return t})}},M.fn.detach=M.fn.remove,["width","height"].forEach(function(t){M.fn[t]=function(e){var i,a=this[0],o=t.replace(/./,function(t){return t[0].toUpperCase()});return e===_?n(a)?a["inner"+o]:r(a)?a.documentElement["offset"+o]:(i=this.offset())&&i[t]:this.each(function(n){a=M(this),a.css(t,v(this,e,n,a[t]()))})}}),P.forEach(function(e,n){var r=n%2;M.fn[e]=function(){var e,i,a=M.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:Z.fragment(n)}),o=this.length>1;return a.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,a.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!i)return M(t).remove();w(i.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},M.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return M(t)[e](this),this}}),Z.Z.prototype=M.fn,Z.uniq=E,Z.deserializeValue=x,M.zepto=Z,M}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},r=t.match(/WebKit\/([\d.]+)/),i=t.match(/(Android)\s+([\d.]+)/),a=t.match(/(iPad).*OS\s([\d_]+)/),o=!a&&t.match(/(iPhone\sOS)\s([\d_]+)/),s=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),u=s&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),l=t.match(/Silk\/([\d._]+)/),f=t.match(/(BlackBerry).*Version\/([\d.]+)/),h=t.match(/(BB10).*Version\/([\d.]+)/),d=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),p=t.match(/PlayBook/),g=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),m=t.match(/Firefox\/([\d.]+)/);(n.webkit=!!r)&&(n.version=r[1]),i&&(e.android=!0,e.version=i[2]),o&&(e.ios=e.iphone=!0,e.version=o[2].replace(/_/g,".")),a&&(e.ios=e.ipad=!0,e.version=a[2].replace(/_/g,".")),s&&(e.webos=!0,e.version=s[2]),u&&(e.touchpad=!0),f&&(e.blackberry=!0,e.version=f[2]),h&&(e.bb10=!0,e.version=h[2]),d&&(e.rimtabletos=!0,e.version=d[2]),p&&(n.playbook=!0),c&&(e.kindle=!0,e.version=c[1]),l&&(n.silk=!0,n.version=l[1]),!l&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),g&&(n.chrome=!0,n.version=g[1]),m&&(n.firefox=!0,n.version=m[1]),e.tablet=!!(a||p||i&&!t.match(/Mobile/)||m&&t.match(/Tablet/)),e.phone=!(e.tablet||!(i||o||s||f||h||g&&t.match(/Android/)||g&&t.match(/CriOS\/([\d.]+)/)||m&&t.match(/Mobile/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=d++)}function n(t,n,a,o){if(n=r(n),n.ns)var s=i(n.ns);return(h[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||a&&e(t.fn)!==e(a)||o&&t.sel!=o)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function a(e,n,r){"string"!=t.type(e)?t.each(e,r):e.split(/\s/).forEach(function(t){r(t,n)})}function o(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function s(t){return g[t]||t}function u(n,i,u,c,l,f){var d=e(n),p=h[d]||(h[d]=[]);a(i,u,function(e,i){var a=r(e);a.fn=i,a.sel=c,a.e in g&&(i=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=l&&l(i,e);var u=a.del||i;a.proxy=function(t){var e=u.apply(n,[t].concat(t.data));return e===!1&&(t.preventDefault(),t.stopPropagation()),e},a.i=p.length,p.push(a),n.addEventListener(s(a.e),a.proxy,o(a,f))})}function c(t,r,i,u,c){var l=e(t);a(r||"",i,function(e,r){n(t,e,r,u).forEach(function(e){delete h[l][e.i],t.removeEventListener(s(e.e),e.proxy,o(e,c))})})}function l(e){var n,r={originalEvent:e};for(n in e)y.test(n)||void 0===e[n]||(r[n]=e[n]);return t.each(b,function(t,n){r[t]=function(){return this[n]=m,e[t].apply(e,arguments)},r[n]=v}),r}function f(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var h=(t.zepto.qsa,{}),d=1,p={},g={mouseenter:"mouseover",mouseleave:"mouseout"};p.click=p.mousedown=p.mouseup=p.mousemove="MouseEvents",t.event={add:u,remove:c},t.proxy=function(n,r){if(t.isFunction(n)){var i=function(){return n.apply(r,arguments)};return i._zid=e(n),i}if("string"==typeof r)return t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){u(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){c(this,t,e)})},t.fn.one=function(t,e){return this.each(function(n,r){u(this,t,e,null,function(t,e){return function(){var n=t.apply(r,arguments);return c(r,e,t),n}})})};var m=function(){return!0},v=function(){return!1},y=/^([A-Z]|layer[XY]$)/,b={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,n,r){return this.each(function(i,a){u(a,n,r,e,function(n){return function(r){var i,o=t(r.target).closest(e,a).get(0);return o?(i=t.extend(l(r),{currentTarget:o,liveFired:a}),n.apply(o,[i].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,e,n){return this.each(function(){c(this,e,n,t)})},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r){return!n||t.isFunction(n)?this.bind(e,n||r):this.delegate(n,e,r)},t.fn.off=function(e,n,r){return!n||t.isFunction(n)?this.unbind(e,n||r):this.undelegate(n,e,r)},t.fn.trigger=function(e,n){return("string"==typeof e||t.isPlainObject(e))&&(e=t.Event(e)),f(e),e.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,r){var i,a;return this.each(function(o,s){i=l("string"==typeof e?t.Event(e):e),i.data=r,i.target=s,t.each(n(s,e.type||e),function(t,e){return a=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),a},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){"string"!=typeof t&&(e=t,t=e.type);var n=document.createEvent(p[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.defaultPrevented}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function a(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:(n(e,r,"ajaxSend",[t,e]),void 0)}function o(t,e,r){var i=r.context,a="success";r.success.call(i,t,a,e),n(r,i,"ajaxSuccess",[e,r,t]),u(a,e,r)}function s(t,e,r,i){var a=i.context;i.error.call(a,r,e,t),n(i,a,"ajaxError",[r,i,t]),u(e,r,i)}function u(t,e,r){var a=r.context;r.complete.call(a,e,t),n(r,a,"ajaxComplete",[e,r]),i(r)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==k?"html":t==_?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data))}function d(e,n,r,i){var a=!t.isFunction(n);return{url:e,data:a?n:void 0,success:a?t.isFunction(r)?r:void 0:n,dataType:a?i||r:r}}function p(e,n,r,i){var a,o=t.isArray(n);t.each(n,function(n,s){a=t.type(s),i&&(n=r?i:i+"["+(o?"":n)+"]"),!i&&o?e.add(s.name,s.value):"array"==a||!r&&"object"==a?p(e,s,r,n):e.add(n,s)})}var g,m,v=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,_="application/json",k="text/html",M=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){if(!("type"in e))return t.ajax(e);var n,r="jsonp"+ ++v,i=y.createElement("script"),u=function(){clearTimeout(n),t(i).remove(),delete window[r]},l=function(t){u(),t&&"timeout"!=t||(window[r]=c),s(null,t||"abort",f,e)},f={abort:l};return a(f,e)===!1?(l("abort"),!1):(window[r]=function(t){u(),o(t,f,e)},i.onerror=function(){l("error")},i.src=e.url.replace(/=\?/,"="+r),t("head").append(i),e.timeout>0&&(n=setTimeout(function(){l("timeout")},e.timeout)),f)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:_,xml:"application/xml, text/xml",html:k,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{});for(g in t.ajaxSettings)void 0===n[g]&&(n[g]=t.ajaxSettings[g]);r(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var i=n.dataType,u=/=\?/.test(n.url);if("jsonp"==i||u)return u||(n.url=f(n.url,"callback=?")),t.ajaxJSONP(n);var d,p=n.accepts[i],v={},y=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,b=n.xhr();n.crossDomain||(v["X-Requested-With"]="XMLHttpRequest"),p&&(v.Accept=p,p.indexOf(",")>-1&&(p=p.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(p)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(v["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=t.extend(v,n.headers||{}),b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=c,clearTimeout(d);var e,r=!1;if(b.status>=200&&b.status<300||304==b.status||0==b.status&&"file:"==y){i=i||l(b.getResponseHeader("content-type")),e=b.responseText;try{"script"==i?(1,eval)(e):"xml"==i?e=b.responseXML:"json"==i&&(e=M.test(e)?null:t.parseJSON(e))}catch(a){r=a}r?s(r,"parsererror",b,n):o(e,b,n)}else s(null,b.status?"error":"abort",b,n)}};var x="async"in n?n.async:!0;b.open(n.type,n.url,x);for(m in n.headers)b.setRequestHeader(m,n.headers[m]);return a(b,n)===!1?(b.abort(),!1):(n.timeout>0&&(d=setTimeout(function(){b.onreadystatechange=c,b.abort(),s(null,"timeout",b,n)},n.timeout)),b.send(n.data?n.data:null),b)},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,a=this,o=e.split(/\s/),s=d(e,n,r),u=s.success;return o.length>1&&(s.url=o[0],i=o[1]),s.success=function(e){a.html(i?t("<div>").html(e.replace(b,"")).find(i):e),u&&u.apply(a,arguments)},t.ajax(s),this};var C=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(C(t)+"="+C(e))},p(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var r=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&("radio"!=r&&"checkbox"!=r||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t,e){function n(t){return r(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function r(t){return t.toLowerCase()}function i(t){return a?a+t:r(t)}var a,o,s,u,c,l,f,h,d="",p={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},g=window.document,m=g.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(p,function(t,n){return m.style[t+"TransitionProperty"]!==e?(d="-"+r(t)+"-",a=n,!1):void 0}),o=d+"transform",y[s=d+"transition-property"]=y[u=d+"transition-duration"]=y[c=d+"transition-timing-function"]=y[l=d+"animation-name"]=y[f=d+"animation-duration"]=y[h=d+"animation-timing-function"]="",t.fx={off:a===e&&m.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(e,n,r,i){return t.isPlainObject(n)&&(r=n.easing,i=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:t.fx.speeds[n]||t.fx.speeds._default)/1e3),this.anim(e,n,r,i)},t.fn.anim=function(r,i,a,d){var p,g,m,b={},x="",w=this,_=t.fx.transitionEnd;if(i===e&&(i=.4),t.fx.off&&(i=0),"string"==typeof r)b[l]=r,b[f]=i+"s",b[h]=a||"linear",_=t.fx.animationEnd;else{g=[];for(p in r)v.test(p)?x+=p+"("+r[p]+") ":(b[p]=r[p],g.push(n(p)));x&&(b[o]=x,g.push(o)),i>0&&"object"==typeof r&&(b[s]=g.join(", "),b[u]=i+"s",b[c]=a||"linear")}return m=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(_,m)}t(this).css(y),d&&d.call(this)},i>0&&this.bind(_,m),this.size()&&this.get(0).clientLeft,this.css(b),0>=i&&setTimeout(function(){w.each(function(){m.call(this)})},0),this},m=null}(Zepto),function(t,e){function n(n,r,i,a,o){"function"!=typeof r||o||(o=r,r=e);var s={opacity:i};return a&&(s.scale=a,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(s,r,null,o)}function r(e,r,i,a){return n(e,r,0,i,function(){o.call(t(this)),a&&a.call(this)})}var i=window.document,a=(i.documentElement,t.fn.show),o=t.fn.hide,s=t.fn.toggle;t.fn.show=function(t,r){return a.call(this),t===e?t=0:this.css("opacity",0),n(this,t,1,"1,1",r)},t.fn.hide=function(t,n){return t===e?o.call(this):r(this,t,"0,0",n)},t.fn.toggle=function(n,r){return n===e||"boolean"==typeof n?s.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,r)})},t.fn.fadeTo=function(t,e,r){return n(this,t,e,null,r)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,a.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return r(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var r=t(this);r[0==r.css("opacity")||"none"==r.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(t){var e,n=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(n.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",e&&clearTimeout(e),e=setTimeout(function(){n=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(t){function e(e,r){var u=e[s],c=u&&i[u];if(void 0===r)return c||n(e);if(c){if(r in c)return c[r];var l=o(r);if(l in c)return c[l]}return a.call(t(e),r)}function n(e,n,a){var u=e[s]||(e[s]=++t.uuid),c=i[u]||(i[u]=r(e));return void 0!==n&&(c[o(n)]=a),c}function r(e){var n={};return t.each(e.attributes,function(e,r){0==r.name.indexOf("data-")&&(n[o(r.name.replace("data-",""))]=t.zepto.deserializeValue(r.value))}),n}var i={},a=t.fn.data,o=t.camelCase,s=t.expando="Zepto"+ +new Date;t.fn.data=function(r,i){return void 0===i?t.isPlainObject(r)?this.each(function(e,i){t.each(r,function(t,e){n(i,t,e)})}):0==this.length?void 0:e(this[0],r):this.each(function(){n(this,r,i)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[s],r=n&&i[n];r&&t.each(e,function(){delete r[o(this)]})})}}(Zepto),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,r,i=s.exec(t);if(i&&i[2]in o&&(n=o[i[2]],r=i[3],t=i[1],r)){var a=Number(r);r=isNaN(a)?r.replace(/^["']|["']$/g,""):a}return e(t,n,r)}var r=t.zepto,i=r.qsa,a=r.matches,o=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,r){return t(this).text().indexOf(r)>-1?this:void 0},has:function(t,e,n){return r.qsa(this,n).length?this:void 0}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,c="Zepto"+ +new Date;r.qsa=function(e,a){return n(a,function(n,o,s){try{var l;!n&&o?n="*":u.test(n)&&(l=t(e).addClass(c),n="."+c+" "+n);var f=i(e,n)}catch(h){throw console.error("error performing selector: %o",a),h}finally{l&&l.removeClass(c)}return o?r.uniq(t.map(f,function(t,e){return o.call(t,e,f,s)})):f})},r.matches=function(t,e){return n(e,function(e,n,r){return!(e&&!a(t,e)||n&&n.call(t,null,r)!==t)})}}(Zepto),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=n.apply(this,arguments);return t.prevObject=this,t}})}(Zepto),function(t){function e(t){return"tagName"in t?t:t.parentNode}function n(t,e,n,r){var i=Math.abs(t-e),a=Math.abs(n-r);return i>=a?t-e>0?"Left":"Right":n-r>0?"Up":"Down"}function r(){c=null,l.last&&(l.el.trigger("longTap"),l={})}function i(){c&&clearTimeout(c),c=null}function a(){o&&clearTimeout(o),s&&clearTimeout(s),u&&clearTimeout(u),c&&clearTimeout(c),o=s=u=c=null,l={}}var o,s,u,c,l={},f=750;t(document).ready(function(){var h,d;t(document.body).bind("touchstart",function(n){h=Date.now(),d=h-(l.last||h),l.el=t(e(n.touches[0].target)),o&&clearTimeout(o),l.x1=n.touches[0].pageX,l.y1=n.touches[0].pageY,d>0&&250>=d&&(l.isDoubleTap=!0),l.last=h,c=setTimeout(r,f)}).bind("touchmove",function(t){i(),l.x2=t.touches[0].pageX,l.y2=t.touches[0].pageY,Math.abs(l.x1-l.x2)>10&&t.preventDefault()}).bind("touchend",function(){i(),l.x2&&Math.abs(l.x1-l.x2)>30||l.y2&&Math.abs(l.y1-l.y2)>30?u=setTimeout(function(){l.el.trigger("swipe"),l.el.trigger("swipe"+n(l.x1,l.x2,l.y1,l.y2)),l={}},0):"last"in l&&(s=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=a,l.el.trigger(e),l.isDoubleTap?(l.el.trigger("doubleTap"),l={}):o=setTimeout(function(){o=null,l.el.trigger("singleTap"),l={}},250)},0))}).bind("touchcancel",a),t(window).bind("scroll",a)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}(Zepto),this.Zepto&&function(t){var e,n;return e=function(t,e,n,r,i){var a,o;return t?(o=t[n](),a={width:["left","right"],height:["top","bottom"]},a[n].forEach(function(e){return o+=parseInt(t.css("padding-"+e),10),r&&(o+=parseInt(t.css("border-"+e+"-width"),10)),i?o+=parseInt(t.css("margin-"+e),10):void 0}),o):null},["width","height"].forEach(function(n){var r,i,a,o,s;return r=n.replace(/./,function(t){return t[0].toUpperCase()}),(i=t.fn)[o="inner"+r]||(i[o]=function(t){return e(this,r,n,!1,t)}),(a=t.fn)[s="outer"+r]||(a[s]=function(t){return e(this,r,n,!0,t)})}),(n=t.fn).detach||(n.detach=function(t){var e,n;return n=this,null!=t&&(n=n.filter(t)),e=n.clone(!0),n.remove(),e})}(Zepto);