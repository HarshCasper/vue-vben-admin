import{d as e,h as r,o as i,i as o,w as t,j as s,m as a}from"./index.24307e55.js";import{A as n}from"./index.279fddc5.js";import{u as p}from"./index.00b6d04a.js";import m from"./Drawer1.23487a6f.js";import d from"./Drawer2.5d0b2c00.js";import c from"./Drawer3.4b0f9800.js";import f from"./Drawer4.3cfd39f8.js";import j from"./Drawer5.e05513f0.js";import{_ as l}from"./index.8fbcdc3e.js";import"./vendor.3b1829c7.js";import"./index.14625c53.js";import"./index.e346a81c.js";import"./index.540b99ab.js";import"./domUtils.96c05842.js";import"./_stringToArray.d9435ec6.js";import"./RightOutlined.b19e71a7.js";/* empty css              */import"./useTimeout.203f9576.js";import"./useScrollTo.ff91b601.js";import"./animation.f865ff7c.js";import"./ArrowLeftOutlined.e39c5bbd.js";import"./isEqual.b01a20c4.js";import"./index.256ca702.js";import"./index.72bde911.js";import"./index.c30b4b97.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.688aa195.js";import"./get.69f57ef3.js";import"./_baseProperty.74f89655.js";import"./toInteger.9a5a9d5a.js";import"./index.5b062b56.js";import"./index.bb7c19a7.js";import"./SearchOutlined.757a7c18.js";import"./EyeOutlined.d2f3f9ef.js";import"./index.0fd23b0f.js";import"./CheckOutlined.1ccef882.js";import"./DownOutlined.47b7c2c1.js";import"./index.47943644.js";import"./index.c3a5cfcc.js";import"./UpOutlined.c6e7a587.js";import"./index.f0aee7f7.js";import"./RedoOutlined.9382cd35.js";import"./index.431dabb1.js";import"./EllipsisOutlined.e8a93345.js";import"./types.1fed049d.js";import"./Tree.9425d2f7.js";import"./util.cecf4fcb.js";import"./uuid.f9448e9c.js";import"./index.750dbcf8.js";import"./DeleteOutlined.acd17502.js";import"./index.26a2afc9.js";import"./useWindowSizeFn.55418cf4.js";import"./FullscreenOutlined.ec7d2a96.js";import"./index.d91c8c4a.js";import"./index.52307fdb.js";import"./index.86da423d.js";import"./LeftOutlined.c68d7da1.js";import"./download.a82d0ea6.js";import"./useForm.01a6f186.js";import"./index.721a3e8f.js";import"./index.1b435b11.js";import"./usePageContext.4b2bc254.js";import"./transButton.4e6639d4.js";var w=e({components:{Alert:n,PageWrapper:l,Drawer1:m,Drawer2:d,Drawer3:c,Drawer4:f,Drawer5:j},setup(){const[e,{openDrawer:r,setDrawerProps:i}]=p(),[o,{openDrawer:t}]=p(),[s,{openDrawer:a}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:o,openDrawer2:t,register3:s,openDrawer3:a,register4:n,register5:d,openDrawer5:c,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=a(" 打开Drawer "),D=a(" 打开Drawer "),g=a(" 打开Drawer "),b=a(" 打开Drawer并传递数据 "),x=a(" 打开详情Drawer ");w.render=function(e,a,n,p,m,d){const c=r("Alert"),f=r("a-button"),j=r("Drawer1"),l=r("Drawer2"),w=r("Drawer3"),y=r("Drawer4"),O=r("Drawer5"),R=r("PageWrapper");return i(),o(R,{title:"抽屉组件使用示例"},{default:t((()=>[s(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[u])),_:1},8,["onClick"]),s(c,{message:"内外同时控制显示隐藏","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=r=>e.openDrawer2(!0))},{default:t((()=>[D])),_:1}),s(c,{message:"自适应高度/显示footer","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=r=>e.openDrawer3(!0))},{default:t((()=>[g])),_:1}),s(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[b])),_:1},8,["onClick"]),s(c,{message:"详情页模式","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=r=>e.openDrawer5(!0))},{default:t((()=>[x])),_:1}),s(j,{onRegister:e.register1},null,8,["onRegister"]),s(l,{onRegister:e.register2},null,8,["onRegister"]),s(w,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"]),s(O,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default w;
