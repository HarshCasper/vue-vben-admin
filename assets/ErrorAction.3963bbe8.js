import{d as t,b1 as o,u as e,aQ as r,K as a,aB as n,dw as s,h as i,o as u,i as d,w as l,j as m}from"./index.24307e55.js";/* empty css              */import{B as c}from"./index.c9aa031f.js";import{B as p}from"./BugOutlined.b221e156.js";import"./vendor.3b1829c7.js";import"./isNumeric.2bec345d.js";var f=t({name:"ErrorAction",components:{BugOutlined:p,Tooltip:o,Badge:c},setup(){const{t:t}=e(),{push:o}=r();return{t:t,getCount:a((()=>s.getErrorListCountState)),handleToErrorList:function(){o(n.ERROR_LOG_PAGE).then((()=>{s.commitErrorListCountState(0)}))}}}});f.render=function(t,o,e,r,a,n){const s=i("BugOutlined"),c=i("Badge"),p=i("Tooltip");return u(),d(p,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:l((()=>[m(c,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:l((()=>[m(s)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;
