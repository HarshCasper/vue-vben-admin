import{d as e,ct as a,f as t,d1 as s,q as o,d2 as n,bG as r,bH as l,h as u,o as i,i as d,aY as c,j as p,l as m,m as R}from"./index.c9b191ae.js";import{_ as f}from"./index.aec1bac9.js";import"./usePageContext.42b62d5d.js";import g from"./CurrentPermissionMode.5eaf4050.js";var S=e({components:{Alert:a,CurrentPermissionMode:g,PageWrapper:f},setup(){const{changeRole:e}=n();return{userStore:t,RoleEnum:s,isSuper:o((()=>t.getRoleListState.includes(s.SUPER))),isTest:o((()=>t.getRoleListState.includes(s.TEST))),changeRole:e}}});const E=c("data-v-9a73aaae");r("data-v-9a73aaae");const P=R(" 当前角色: "),y={class:"mt-4"},T=R(" 权限切换(请先切换权限模式为前端角色权限模式): ");l();const b=E(((e,a,t,s,o,n)=>{const r=u("CurrentPermissionMode"),l=u("Alert"),c=u("a-button"),f=u("a-button-group"),g=u("PageWrapper");return i(),d(g,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:E((()=>[p(r),p("p",null,[P,p("a",null,m(e.userStore.getRoleListState),1)]),p(l,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),p("div",y,[T,p(f,null,{default:E((()=>[p(c,{onClick:a[1]||(a[1]=a=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:E((()=>[R(m(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),p(c,{onClick:a[2]||(a[2]=a=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:E((()=>[R(m(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));S.render=b,S.__scopeId="data-v-9a73aaae";export default S;