import{d as e,u as s,aK as i,K as r,dC as t,f as o,h as a,o as d,i as n,w as m,j as c,l,m as p,a7 as f}from"./index.24307e55.js";import{_ as j,a as u}from"./index.26a2afc9.js";import{_ as x}from"./index.256ca702.js";import{h as b}from"./header.d801b988.js";import{u as g}from"./useForm.01a6f186.js";import"./vendor.3b1829c7.js";import"./useTimeout.203f9576.js";import"./useWindowSizeFn.55418cf4.js";import"./index.e346a81c.js";import"./index.540b99ab.js";import"./domUtils.96c05842.js";import"./_stringToArray.d9435ec6.js";import"./RightOutlined.b19e71a7.js";/* empty css              */import"./useScrollTo.ff91b601.js";import"./animation.f865ff7c.js";import"./FullscreenOutlined.ec7d2a96.js";import"./isEqual.b01a20c4.js";import"./index.72bde911.js";import"./index.c30b4b97.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.688aa195.js";import"./get.69f57ef3.js";import"./_baseProperty.74f89655.js";import"./toInteger.9a5a9d5a.js";import"./index.5b062b56.js";import"./index.bb7c19a7.js";import"./SearchOutlined.757a7c18.js";import"./EyeOutlined.d2f3f9ef.js";import"./index.0fd23b0f.js";import"./CheckOutlined.1ccef882.js";import"./DownOutlined.47b7c2c1.js";import"./index.47943644.js";import"./index.c3a5cfcc.js";import"./UpOutlined.c6e7a587.js";import"./index.f0aee7f7.js";import"./RedoOutlined.9382cd35.js";import"./index.431dabb1.js";import"./EllipsisOutlined.e8a93345.js";import"./types.1fed049d.js";import"./Tree.9425d2f7.js";import"./util.cecf4fcb.js";import"./uuid.f9448e9c.js";import"./index.750dbcf8.js";import"./DeleteOutlined.acd17502.js";import"./index.279fddc5.js";import"./index.d91c8c4a.js";import"./index.52307fdb.js";import"./index.86da423d.js";import"./LeftOutlined.c68d7da1.js";import"./download.a82d0ea6.js";var h=e({name:"LockModal",components:{BasicModal:j,BasicForm:x},setup(){const{t:e}=s(),{prefixCls:a}=i("header-lock-modal"),d=r((()=>{var e;return null==(e=o.getUserInfoState)?void 0:e.realName})),[n,{closeModal:m}]=u(),[c,{validateFields:l,resetFields:p}]=g({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:a,getRealName:d,register:n,registerForm:c,handleLock:async function(){const e=(await l()).password;m(),t.commitLockInfoState({isLock:!0,pwd:e}),await p()},headerImg:b}}});h.render=function(e,s,i,r,t,o){const j=a("BasicForm"),u=a("a-button"),x=a("BasicModal");return d(),n(x,f({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:m((()=>[c("div",{class:`${e.prefixCls}__entry`},[c("div",{class:`${e.prefixCls}__header`},[c("img",{src:e.headerImg,class:`${e.prefixCls}__header-img`},null,10,["src"]),c("p",{class:`${e.prefixCls}__header-name`},l(e.getRealName),3)],2),c(j,{onRegister:e.registerForm},null,8,["onRegister"]),c("div",{class:`${e.prefixCls}__footer`},[c(u,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:m((()=>[p(l(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default h;
