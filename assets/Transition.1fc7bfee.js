import{d as e,h as t,o as a,i as o,w as r,j as s}from"./index.c9b191ae.js";import"./_stringToArray.f9d23805.js";import"./domUtils.43bacb00.js";import{e as n,S as i}from"./index.34b4eaee.js";import"./RightOutlined.ce1a9cb6.js";import"./useTimeout.306ef350.js";import"./index.ad8055f7.js";import"./animation.f174d9e2.js";import"./useScrollTo.ed4075e5.js";import{_ as m}from"./index.aec1bac9.js";import"./usePageContext.42b62d5d.js";import d from"./TargetContent.5c4b44a6.js";var p=e({components:{LazyContainer:n,TargetContent:d,Skeleton:i,PageWrapper:m}});const c={class:"lazy-base-demo-wrap"},l=s("h1",null,"向下滚动",-1),j={class:"lazy-base-demo-box"};p.render=function(e,n,i,m,d,p){const f=t("TargetContent"),u=t("LazyContainer"),b=t("PageWrapper");return a(),o(b,{title:"懒加载自定义动画示例",content:"懒加载组件显示动画"},{default:r((()=>[s("div",c,[l,s("div",j,[s(u,{transitionName:"custom"},{default:r((()=>[s(f)])),_:1})])])])),_:1})};export default p;