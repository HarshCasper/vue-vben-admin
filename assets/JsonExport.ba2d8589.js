import{d as e,h as t,o as a,i,w as s,j as o,m as d}from"./index.c9b191ae.js";import"./index.62221c24.js";import"./_stringToArray.f9d23805.js";import"./domUtils.43bacb00.js";import"./index.e9cfd29c.js";import"./index.b4918bad.js";import"./index.34b4eaee.js";import"./CheckOutlined.6db140fd.js";import"./index.27cba524.js";import{_ as r}from"./index.b9d582f5.js";import"./FullscreenOutlined.499766bf.js";import"./RightOutlined.ce1a9cb6.js";import"./SettingOutlined.3ccdf103.js";import"./useTimeout.306ef350.js";import"./index.ad8055f7.js";import"./animation.f174d9e2.js";import"./useScrollTo.ed4075e5.js";import"./useAttrs.dd653939.js";import"./useWindowSizeFn.68f6ef4b.js";import"./index.e80c819c.js";import"./uuid.a6cec785.js";import"./download.e374d1b4.js";import"./useForm.d744eed5.js";import"./clickOutside.5c695aaa.js";import"./useSortable.7fd64a7b.js";import"./useExpose.1aedd396.js";import"./index.416965e6.js";import{c as n,d as m,j as c}from"./data.247fec6a.js";import{_ as p}from"./index.aec1bac9.js";import"./usePageContext.42b62d5d.js";var u=e({components:{BasicTable:r,PageWrapper:p},setup:()=>({defaultHeader:function(){c({data:m,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){c({data:m,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:n,data:m})});const l=d("导出：默认头部"),j=d("导出：自定义头部");u.render=function(e,d,r,n,m,c){const p=t("a-button"),u=t("BasicTable"),f=t("PageWrapper");return a(),i(f,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:s((()=>[o(u,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:s((()=>[o(p,{onClick:e.defaultHeader},{default:s((()=>[l])),_:1},8,["onClick"]),o(p,{onClick:e.customHeader},{default:s((()=>[j])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default u;