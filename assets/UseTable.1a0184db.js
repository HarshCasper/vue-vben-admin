import{d as e,g as t,h as o,o as i,i as s,j as n,w as a,m as l}from"./index.c9b191ae.js";import"./index.62221c24.js";import"./_stringToArray.f9d23805.js";import"./domUtils.43bacb00.js";import"./index.e9cfd29c.js";import"./index.b4918bad.js";import"./index.34b4eaee.js";import"./CheckOutlined.6db140fd.js";import"./index.27cba524.js";import{_ as c}from"./index.b9d582f5.js";import"./FullscreenOutlined.499766bf.js";import"./RightOutlined.ce1a9cb6.js";import"./SettingOutlined.3ccdf103.js";import"./useTimeout.306ef350.js";import"./index.ad8055f7.js";import"./animation.f174d9e2.js";import"./useScrollTo.ed4075e5.js";import"./useAttrs.dd653939.js";import"./useWindowSizeFn.68f6ef4b.js";import"./index.e80c819c.js";import"./uuid.a6cec785.js";import"./download.e374d1b4.js";import"./useForm.d744eed5.js";import"./clickOutside.5c695aaa.js";import"./useSortable.7fd64a7b.js";import"./useExpose.1aedd396.js";import{u as r}from"./useTable.4f530c5e.js";import{getBasicColumns as d,getBasicShortColumns as m}from"./tableData.7aa0192c.js";import{d as u}from"./table.4954d269.js";var f=e({components:{BasicTable:c},setup(){const{createMessage:e}=t(),[o,{setLoading:i,setColumns:s,getColumns:n,getDataSource:a,reload:l,getPaginationRef:c,setPagination:f,getSelectRows:g,getSelectRowKeys:p,setSelectedRowKeys:b,clearSelectedRowKeys:C}]=r({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:u,columns:d(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){i(!0),setTimeout((()=>{i(!1)}),1e3)},changeColumns:function(){s(m())},reloadTable:function(){s(d()),l({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){f({current:2}),l()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){C()}}}});const g={class:"p-4"},p={class:"mb-4"},b=l("还原"),C=l("开启loading"),j=l("更改Columns"),k=l("获取Columns"),S=l("获取表格数据"),w=l("跳转到第2页"),T={class:"mb-4"},R=l("获取选中行"),_=l("获取选中行Key"),x=l("设置选中行"),y=l("清空选中行"),h=l("获取分页信息");f.render=function(e,t,l,c,r,d){const m=o("a-button"),u=o("BasicTable");return i(),s("div",g,[n("div",p,[n(m,{class:"mr-2",onClick:e.reloadTable},{default:a((()=>[b])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.changeLoading},{default:a((()=>[C])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.changeColumns},{default:a((()=>[j])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getColumn},{default:a((()=>[k])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getTableData},{default:a((()=>[S])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:a((()=>[w])),_:1},8,["onClick"])]),n("div",T,[n(m,{class:"mr-2",onClick:e.getSelectRowList},{default:a((()=>[R])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:a((()=>[_])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:a((()=>[x])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.clearSelect},{default:a((()=>[y])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getPagination},{default:a((()=>[h])),_:1},8,["onClick"])]),n(u,{onRegister:e.registerTable},null,8,["onRegister"])])};export default f;