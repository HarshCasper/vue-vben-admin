import{d as t,E as e,r as s,n as l,p as a,u as n,q as i,e as r,P as u,j as o,B as T,R as b,s as c}from"./index.c9b191ae.js";var p=t({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String},subTitle:{type:String},full:{type:Boolean,default:!1}},setup(t){const p=s(new Map),{query:x}=l(),E=c(),_=a(),{t:d}=n(),y=i((()=>{const{status:e}=x,{status:s}=t;return Number(e)||s})),O=i((()=>r(p).get(r(y)))),N=d("sys.exception.backLogin"),A=d("sys.exception.backHome");return r(p).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:d("sys.exception.subTitle403"),btnText:t.full?N:A,handler:()=>t.full?E(u.BASE_LOGIN):E()}),r(p).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:d("sys.exception.subTitle404"),btnText:t.full?N:A,handler:()=>t.full?E(u.BASE_LOGIN):E()}),r(p).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:d("sys.exception.subTitle500"),btnText:A,handler:()=>E()}),r(p).set(e.PAGE_NOT_DATA,{title:d("sys.exception.noDataTitle"),subTitle:"",btnText:d("common.redo"),handler:()=>_(),icon:"/assets/no-data.7a45acb3.png"}),r(p).set(e.NET_WORK_ERROR,{title:d("sys.exception.networkErrorTitle"),subTitle:d("sys.exception.networkErrorSubTitle"),btnText:"Refresh",handler:()=>_(),icon:"/assets/net-work.5d408b05.png"}),()=>{const{title:e,subTitle:s,btnText:l,icon:a,handler:n,status:i}=r(O)||{};return o(b,{class:"exception ",status:i,title:t.title||e,"sub-title":t.subTitle||s},{extra:()=>l&&o(T,{type:"primary",onClick:n},{default:()=>l}),icon:()=>a?o("img",{src:a},null):null})}}});export default p;