import{d as e,r as t,e as o,g as a,h as i,o as s,i as r,w as n,j as p,m as l}from"./index.24307e55.js";import{I as d}from"./index.bb7c19a7.js";import{a as m}from"./index.e346a81c.js";import{u}from"./useCopyToClipboard.156e0709.js";import{_ as c}from"./index.8fbcdc3e.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.757a7c18.js";import"./EyeOutlined.d2f3f9ef.js";import"./index.540b99ab.js";import"./domUtils.96c05842.js";import"./_stringToArray.d9435ec6.js";import"./RightOutlined.b19e71a7.js";/* empty css              */import"./useTimeout.203f9576.js";import"./useScrollTo.ff91b601.js";import"./animation.f865ff7c.js";import"./index.721a3e8f.js";import"./index.431dabb1.js";import"./EllipsisOutlined.e8a93345.js";import"./types.1fed049d.js";import"./isEqual.b01a20c4.js";import"./toInteger.9a5a9d5a.js";import"./DownOutlined.47b7c2c1.js";import"./index.1b435b11.js";import"./usePageContext.4b2bc254.js";import"./transButton.4e6639d4.js";import"./ArrowLeftOutlined.e39c5bbd.js";var f=e({name:"Copy",components:{CollapseContainer:m,PageWrapper:c,[d.name]:d},setup(){const e=t(""),{createMessage:i}=a(),{clipboardRef:s,copiedRef:r}=u();return{handleCopy:function(){const t=o(e);t?(s.value=t,o(r)&&i.warning("copy success！")):i.warning("请输入要拷贝的内容！")},value:e}}});const j={class:"flex justify-center"},b=l(" Copy ");f.render=function(e,t,o,a,l,d){const m=i("a-input"),u=i("a-button"),c=i("CollapseContainer"),f=i("PageWrapper");return s(),r(f,{title:"文本复制示例"},{default:n((()=>[p(c,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:n((()=>[p("div",j,[p(m,{placeholder:"请输入",value:e.value,"onUpdate:value":t[1]||(t[1]=t=>e.value=t)},null,8,["value"]),p(u,{type:"primary",onClick:e.handleCopy},{default:n((()=>[b])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default f;
