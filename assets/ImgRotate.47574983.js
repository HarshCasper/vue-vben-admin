var t=Object.assign;import{d as e,r as s,a as i,u as r,aj as a,q as o,j as n,e as m,m as d,a0 as g,aq as c}from"./index.c9b191ae.js";import"./_stringToArray.f9d23805.js";import{h as u}from"./domUtils.43bacb00.js";import"./CheckOutlined.6db140fd.js";import"./DoubleRightOutlined.cdd2f4d3.js";import{u as p}from"./useTimeout.306ef350.js";import"./useExpose.1aedd396.js";import{r as l,B as f}from"./DragVerify.f467f4dc.js";var h=e({name:"ImgRotateDargVerify",inheritAttrs:!1,props:l,emits:["success","change","update:value"],setup(e,{emit:l,attrs:h}){const T=s(null),v=i({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:y}=r();a((()=>v.isPassing),(t=>{if(t){const{startTime:e,endTime:s}=v;l("success",{isPassing:t,time:((s-e)/1e3).toFixed(1)}),l("change",t),l("update:value",t)}}));const w=o((()=>{const{imgWrapStyle:s,imgWidth:i}=e;return t({width:`${i}px`,height:`${i}px`},s)})),j=o((()=>{const{minDegree:t,maxDegree:s}=e;return t===s?Math.floor(1+1*Math.random())/10+1:1}));function D(){v.startTime=(new Date).getTime()}function x(t){v.draged=!0;const{imgWidth:s,height:i,maxDegree:r}=e,{moveX:a}=t,o=Math.ceil(a/(s-parseInt(i))*r*m(j));v.currentRotate=o,v.imgStyle=u("transform",`rotateZ(${v.randomRotate-o}deg)`)}function R(){const{minDegree:t,maxDegree:s}=e,i=Math.floor(t+Math.random()*(s-t));v.randomRotate=i,v.imgStyle=u("transform",`rotateZ(${i}deg)`)}function _(){const{randomRotate:t,currentRotate:s}=v,{diffDegree:i}=e;Math.abs(t-s)>=(i||20)?(v.imgStyle=u("transform",`rotateZ(${t}deg)`),v.toOrigin=!0,p((()=>{v.toOrigin=!1,v.showTip=!0}),300)):(v.isPassing=!0,v.endTime=(new Date).getTime()),v.showTip=!0}function b(){v.showTip=!1;const t=m(T);t&&(v.isPassing=!1,t.resume(),R())}const P=c();return P&&(P.resume=b),()=>{const{src:s}=e,{toOrigin:i,isPassing:r,startTime:a,endTime:o}=v,c=[];i&&c.push("to-origin");const u=(o-a)/1e3;return n("div",{class:"ir-dv"},[n("div",{class:"ir-dv-img__wrap",style:m(w)},[n("img",{src:s,onLoad:R,width:parseInt(e.width),class:c,style:v.imgStyle,onClick:()=>{b()}},null),v.showTip&&n("span",{class:["ir-dv-img__tip",v.isPassing?"success":"error"]},[v.isPassing?y("component.verify.time",{time:u.toFixed(1)}):y("component.verify.error")]),!v.showTip&&!v.draged&&n("span",{class:["ir-dv-img__tip","normal"]},[d("t('redoTip')")])]),n(f,g({class:"ir-dv-drag__bar",onMove:x,onEnd:_,onStart:D,ref:T},t(t({},h),e),{value:r,isSlot:!0}),null)])}}});export default h;