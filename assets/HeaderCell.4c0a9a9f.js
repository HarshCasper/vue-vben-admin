import{d as e,a7 as l,a8 as t,a9 as a,q as s,h as r,o as n,i,w as o,l as u,k as p,ab as c,m as d}from"./index.c9b191ae.js";var _=e({name:"TableHeaderCell",components:{EditTableHeaderCell:l((()=>t((()=>__import__("./index.b9d582f5.js").then((function(e){return e.E}))),["/assets/index.b9d582f5.js","/assets/index.de6b65c1.css","/assets/index.c9b191ae.js","/assets/index.f21ab055.css","/assets/index.62221c24.js","/assets/index.be284e2b.css","/assets/domUtils.43bacb00.js","/assets/_stringToArray.f9d23805.js","/assets/index.e9cfd29c.js","/assets/index.b4918bad.js","/assets/index.34b4eaee.js","/assets/index.76e45014.css","/assets/RightOutlined.ce1a9cb6.js","/assets/useTimeout.306ef350.js","/assets/index.ad8055f7.js","/assets/index.121e7eba.css","/assets/useScrollTo.ed4075e5.js","/assets/animation.f174d9e2.js","/assets/index.27cba524.js","/assets/index.ca1a8c37.css","/assets/FullscreenOutlined.499766bf.js","/assets/useAttrs.dd653939.js","/assets/useWindowSizeFn.68f6ef4b.js","/assets/index.e80c819c.js","/assets/uuid.a6cec785.js","/assets/download.e374d1b4.js","/assets/CheckOutlined.6db140fd.js","/assets/SettingOutlined.3ccdf103.js","/assets/useForm.d744eed5.js","/assets/clickOutside.5c695aaa.js","/assets/useSortable.7fd64a7b.js","/assets/useExpose.1aedd396.js"]))),BasicHelp:l((()=>t((()=>__import__("./BasicHelp.13b9f4e0.js")),["/assets/BasicHelp.13b9f4e0.js","/assets/index.c9b191ae.js","/assets/index.f21ab055.css","/assets/_stringToArray.f9d23805.js","/assets/domUtils.43bacb00.js","/assets/index.34b4eaee.js","/assets/index.76e45014.css","/assets/RightOutlined.ce1a9cb6.js","/assets/useTimeout.306ef350.js","/assets/index.ad8055f7.js","/assets/index.121e7eba.css","/assets/useScrollTo.ed4075e5.js","/assets/animation.f174d9e2.js"])))},props:{column:{type:Object,default:{}}},setup(e){const{prefixCls:l}=a("basic-table-header-cell");return{prefixCls:l,getIsEdit:s((()=>{var l;return!!(null==(l=e.column)?void 0:l.edit)})),getTitle:s((()=>{var l;return null==(l=e.column)?void 0:l.customTitle})),getHelpMessage:s((()=>{var l;return null==(l=e.column)?void 0:l.helpMessage}))}}});const g={key:1};_.render=function(e,l,t,a,s,_){const m=r("EditTableHeaderCell"),f=r("BasicHelp");return n(),i(c,null,[e.getIsEdit?(n(),i(m,{key:0},{default:o((()=>[d(u(e.getTitle),1)])),_:1})):(n(),i("span",g,u(e.getTitle),1)),e.getHelpMessage?(n(),i(f,{key:2,text:e.getHelpMessage,class:`${e.prefixCls}__help`},null,8,["text","class"])):p("",!0)],64)};export default _;