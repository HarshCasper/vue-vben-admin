import{d as e,bP as i,g as t,h as s,o,i as r,w as n,j as d}from"./index.24307e55.js";import{I as a}from"./index.bb7c19a7.js";import{_ as p}from"./index.256ca702.js";import{a as m}from"./index.e346a81c.js";import{_ as l}from"./index.8fbcdc3e.js";import{u as c}from"./useForm.01a6f186.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.757a7c18.js";import"./EyeOutlined.d2f3f9ef.js";import"./index.72bde911.js";import"./index.c30b4b97.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.688aa195.js";import"./isEqual.b01a20c4.js";import"./get.69f57ef3.js";import"./_baseProperty.74f89655.js";import"./toInteger.9a5a9d5a.js";import"./index.5b062b56.js";import"./index.0fd23b0f.js";import"./CheckOutlined.1ccef882.js";import"./DownOutlined.47b7c2c1.js";import"./index.47943644.js";import"./index.c3a5cfcc.js";import"./UpOutlined.c6e7a587.js";import"./index.f0aee7f7.js";import"./RightOutlined.b19e71a7.js";import"./RedoOutlined.9382cd35.js";import"./index.431dabb1.js";import"./EllipsisOutlined.e8a93345.js";import"./types.1fed049d.js";import"./Tree.9425d2f7.js";import"./util.cecf4fcb.js";/* empty css              */import"./uuid.f9448e9c.js";import"./index.750dbcf8.js";import"./DeleteOutlined.acd17502.js";import"./index.279fddc5.js";import"./index.26a2afc9.js";import"./useTimeout.203f9576.js";import"./useWindowSizeFn.55418cf4.js";import"./FullscreenOutlined.ec7d2a96.js";import"./index.d91c8c4a.js";import"./index.52307fdb.js";import"./index.86da423d.js";import"./LeftOutlined.c68d7da1.js";import"./download.a82d0ea6.js";import"./domUtils.96c05842.js";import"./_stringToArray.d9435ec6.js";import"./index.540b99ab.js";import"./useScrollTo.ff91b601.js";import"./animation.f865ff7c.js";import"./index.721a3e8f.js";import"./index.1b435b11.js";import"./usePageContext.4b2bc254.js";import"./transButton.4e6639d4.js";import"./ArrowLeftOutlined.e39c5bbd.js";const f=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:t})=>i(a,{placeholder:"请输入",value:e[t],onChange:i=>{e[t]=i.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var j=e({components:{BasicForm:p,CollapseContainer:m,PageWrapper:l,[a.name]:a},setup(){const{createMessage:e}=t(),[i,{setProps:s}]=c({labelWidth:120,schemas:f,actionColOptions:{span:24}});return{register:i,schemas:f,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},setProps:s}}});j.render=function(e,i,t,a,p,m){const l=s("a-input"),c=s("BasicForm"),f=s("CollapseContainer"),j=s("PageWrapper");return o(),r(j,{title:"自定义组件示例"},{default:n((()=>[d(f,{title:"自定义表单"},{default:n((()=>[d(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:n((({model:e,field:i})=>[d(l,{value:e[i],"onUpdate:value":t=>e[i]=t,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default j;
