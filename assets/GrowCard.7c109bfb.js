import{bM as t,bN as r,bu as e,bO as n,j as o,H as i,d as a,O as c,D as u,F as s,V as f,v as l,bP as p,bQ as d,h as v,o as m,i as b,l as y,w as g}from"./index.c9b191ae.js";import{h,c as O,s as w}from"./_stringToArray.f9d23805.js";import{C as j}from"./index.b91b5d03.js";var S=Math.floor;function P(t,r){var e="";if(!t||r<1||r>9007199254740991)return e;do{r%2&&(e+=t),(r=S(r/2))&&(t+=t)}while(r);return e}var x=t("length"),C="[\\ud800-\\udfff]",D="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",T="\\ud83c[\\udffb-\\udfff]",I="[^\\ud800-\\udfff]",$="(?:\\ud83c[\\udde6-\\uddff]){2}",A="[\\ud800-\\udbff][\\udc00-\\udfff]",_="(?:"+D+"|"+T+")"+"?",E="[\\ufe0e\\ufe0f]?"+_+("(?:\\u200d(?:"+[I,$,A].join("|")+")[\\ufe0e\\ufe0f]?"+_+")*"),M="(?:"+[I+D+"?",D,$,A,C].join("|")+")",N=RegExp(T+"(?="+T+")|"+M+E,"g");function R(t){return h(t)?function(t){for(var r=N.lastIndex=0;N.test(t);)++r;return r}(t):x(t)}var V=Math.ceil;function H(t,e){var n=(e=void 0===e?" ":r(e)).length;if(n<2)return n?P(e,t):e;var o=P(e,V(t/R(e)));return h(e)?O(w(o),0,t).join(""):o.slice(0,t)}function k(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!i(t)}var U=function(t){var r,i=t.value,a=t.formatter,c=t.precision,u=t.decimalSeparator,s=t.groupSeparator,f=void 0===s?"":s,l=t.prefixCls;if("function"==typeof a)r=a({value:i});else{var p=String(i),d=p.match(/^(-?)(\d*)(\.(\d+))?$/);if(d){var v=d[1],m=d[2]||"0",b=d[4]||"";m=m.replace(/\B(?=(\d{3})+(?!\d))/g,f),"number"==typeof c&&(b=function(t,r,o){t=e(t);var i=(r=n(r))?R(t):0;return r&&i<r?t+H(r-i,o):t}(b,c,"0").slice(0,c)),b&&(b="".concat(u).concat(b)),r=[o("span",{key:"int",class:"".concat(l,"-content-value-int")},[v,m]),b&&o("span",{key:"decimal",class:"".concat(l,"-content-value-decimal")},k(b)?b:{default:function(){return[b]}})]}else r=p}return o("span",{class:"".concat(l,"-content-value")},k(r)?r:{default:function(){return[r]}})};function F(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function B(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function Q(){return(Q=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function Y(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!i(t)}U.displayName="StatisticNumber";var q={prefixCls:l.string,decimalSeparator:l.string,groupSeparator:l.string,format:l.string,value:{type:[String,Number,Object]},valueStyle:l.style,valueRender:l.any,formatter:l.any,precision:l.number,prefix:l.VNodeChild,suffix:l.VNodeChild,title:l.VNodeChild,onFinish:l.func},z=a({name:"AStatistic",props:c(q,{decimalSeparator:".",groupSeparator:","}),setup:function(){return{configProvider:u("configProvider",s)}},render:function(){var t=this.$props,r=t.prefixCls,e=t.value,n=void 0===e?0:e,i=t.valueStyle,a=t.valueRender,c=(0,this.configProvider.getPrefixCls)("statistic",r),u=f(this,"title"),s=f(this,"prefix"),l=f(this,"suffix"),p=f(this,"formatter",{},!1),d=Q(Q({},this.$props),{prefixCls:c,value:n,formatter:p}),v=o(U,function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?F(Object(e),!0).forEach((function(r){B(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):F(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({"data-for-update":Date.now()},d),null);return a&&(v=a(v)),o("div",{class:c},[u&&o("div",{class:"".concat(c,"-title")},Y(u)?u:{default:function(){return[u]}}),o("div",{style:i,class:"".concat(c,"-content")},[s&&o("span",{class:"".concat(c,"-content-prefix")},Y(s)?s:{default:function(){return[s]}}),v,l&&o("span",{class:"".concat(c,"-content-suffix")},Y(l)?l:{default:function(){return[l]}})])])}});function G(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return e}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return J(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return J(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var K=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function L(t,r){var o=t,i=/\[[^\]]*\]/g,a=(r.match(i)||[]).map((function(t){return t.slice(1,-1)})),c=r.replace(i,"[]"),u=K.reduce((function(t,r){var i=G(r,2),a=i[0],c=i[1];if(-1!==t.indexOf(a)){var u=Math.floor(o/c);return o-=u*c,t.replace(new RegExp("".concat(a,"+"),"g"),(function(t){var r=t.length;return function(t,r,o){t=e(t);var i=(r=n(r))?R(t):0;return r&&i<r?H(r-i,o)+t:t}(u.toString(),r,"0")}))}return t}),c),s=0;return u.replace(i,(function(){var t=a[s];return s+=1,t}))}function W(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function X(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function Z(){return(Z=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function tt(t){return p(d)(t).valueOf()}var rt=a({name:"AStatisticCountdown",props:c(q,{format:"HH:mm:ss"}),setup:function(){return{countdownId:void 0}},mounted:function(){this.syncTimer()},updated:function(){this.syncTimer()},beforeUnmount:function(){this.stopTimer()},methods:{syncTimer:function(){tt(this.$props.value)>=Date.now()?this.startTimer():this.stopTimer()},startTimer:function(){var t=this;this.countdownId||(this.countdownId=window.setInterval((function(){t.$refs.statistic.$forceUpdate(),t.syncTimer()}),33.333333333333336))},stopTimer:function(){var t=this.$props.value;this.countdownId&&(clearInterval(this.countdownId),this.countdownId=void 0,tt(t)<Date.now()&&this.$emit("finish"))},formatCountdown:function(t){var r=t.value,e=t.config,n=this.$props.format;return function(t,r){var e=r.format,n=void 0===e?"":e,o=p(d)(t).valueOf(),i=p(d)().valueOf();return L(Math.max(o-i,0),n)}(r,Z(Z({},e),{format:n}))},valueRenderHtml:function(t){return t}},render:function(){return o(z,function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?W(Object(e),!0).forEach((function(r){X(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):W(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({ref:"statistic"},Z(Z({},this.$props),{valueRender:this.valueRenderHtml,formatter:this.formatCountdown})),null)}});z.Countdown=rt,z.install=function(t){return t.component(z.name,z),t.component(z.Countdown.name,z.Countdown),t};var et=a({components:{Statistic:z,CountTo:j},props:{info:{type:Object,default:null}},setup:()=>({riseSvg:"/assets/analysis-rise.8267119c.svg",downSvg:"/assets/analysis-down.cdc82f65.svg"})});const nt={class:"grow-card"},ot={class:"grow-card-header"},it={class:"grow-card__info"},at={class:"grow-card__title"},ct={class:"grow-card__mom"};et.render=function(t,r,e,n,i,a){const c=v("CountTo"),u=v("Statistic");return m(),b("div",nt,[o("div",ot,[o("div",it,[o("p",at,y(t.info.title),1),o(c,{prefix:"$",startVal:1,endVal:t.info.price},null,8,["endVal"])]),o("img",{src:t.info.icon},null,8,["src"])]),o("div",{class:["grow-card-footer",{"is-up":t.info.up}]},[o(u,{value:t.info.percent},{prefix:g((()=>[o("img",{src:t.info.up?t.riseSvg:t.downSvg},null,8,["src"])])),_:1},8,["value"]),o("span",ct,y(t.info.mom),1)],2)])};export default et;