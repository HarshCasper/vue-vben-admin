import{cW as e,b as i,d as s,g as o,h as t,o as r,i as a,w as n,j as d}from"./index.24307e55.js";import{A as p}from"./index.279fddc5.js";import{h as m,_ as c}from"./index.256ca702.js";import{_ as j}from"./index.8fbcdc3e.js";import{u as l}from"./useForm.01a6f186.js";import"./vendor.3b1829c7.js";import"./index.72bde911.js";import"./index.c30b4b97.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.688aa195.js";import"./isEqual.b01a20c4.js";import"./get.69f57ef3.js";import"./_baseProperty.74f89655.js";import"./toInteger.9a5a9d5a.js";import"./index.5b062b56.js";import"./index.bb7c19a7.js";import"./SearchOutlined.757a7c18.js";import"./EyeOutlined.d2f3f9ef.js";import"./index.0fd23b0f.js";import"./CheckOutlined.1ccef882.js";import"./DownOutlined.47b7c2c1.js";import"./index.47943644.js";import"./index.c3a5cfcc.js";import"./UpOutlined.c6e7a587.js";import"./index.f0aee7f7.js";import"./RightOutlined.b19e71a7.js";import"./RedoOutlined.9382cd35.js";import"./index.431dabb1.js";import"./EllipsisOutlined.e8a93345.js";import"./types.1fed049d.js";import"./Tree.9425d2f7.js";import"./util.cecf4fcb.js";/* empty css              */import"./uuid.f9448e9c.js";import"./index.750dbcf8.js";import"./DeleteOutlined.acd17502.js";import"./index.26a2afc9.js";import"./useTimeout.203f9576.js";import"./useWindowSizeFn.55418cf4.js";import"./index.e346a81c.js";import"./index.540b99ab.js";import"./domUtils.96c05842.js";import"./_stringToArray.d9435ec6.js";import"./useScrollTo.ff91b601.js";import"./animation.f865ff7c.js";import"./FullscreenOutlined.ec7d2a96.js";import"./index.d91c8c4a.js";import"./index.52307fdb.js";import"./index.86da423d.js";import"./LeftOutlined.c68d7da1.js";import"./download.a82d0ea6.js";import"./index.721a3e8f.js";import"./index.1b435b11.js";import"./usePageContext.4b2bc254.js";import"./transButton.4e6639d4.js";import"./ArrowLeftOutlined.e39c5bbd.js";const{uploadUrl:f=""}=i();function u(i,s){return e.uploadFile({url:f,onUploadProgress:s},i)}const b=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:u}}];var x=s({components:{BasicUpload:m,BasicForm:c,PageWrapper:j,[p.name]:p},setup(){const{createMessage:e}=o(),[i]=l({labelWidth:120,schemas:b,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`已上传文件${JSON.stringify(i)}`)},uploadApi:u,register:i}}});x.render=function(e,i,s,o,p,m){const c=t("a-alert"),j=t("BasicUpload"),l=t("BasicForm"),f=t("PageWrapper");return r(),a(f,{title:"上传组件示例"},{default:n((()=>[d(c,{message:"基础示例"}),d(j,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),d(c,{message:"嵌入表单,加入表单校验"}),d(l,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default x;
