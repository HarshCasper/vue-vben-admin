import{d as e,h as t,o,i as a,w as s,j as i,m as r}from"./index.c9b191ae.js";import"./index.62221c24.js";import"./_stringToArray.f9d23805.js";import"./domUtils.43bacb00.js";import"./index.e9cfd29c.js";import"./index.b4918bad.js";import"./index.34b4eaee.js";import"./CheckOutlined.6db140fd.js";import"./index.27cba524.js";import{_ as d}from"./index.b9d582f5.js";import"./FullscreenOutlined.499766bf.js";import"./RightOutlined.ce1a9cb6.js";import"./SettingOutlined.3ccdf103.js";import"./useTimeout.306ef350.js";import"./index.ad8055f7.js";import"./animation.f174d9e2.js";import"./useScrollTo.ed4075e5.js";import"./useAttrs.dd653939.js";import"./useWindowSizeFn.68f6ef4b.js";import"./index.e80c819c.js";import"./uuid.a6cec785.js";import"./download.e374d1b4.js";import"./useForm.d744eed5.js";import"./clickOutside.5c695aaa.js";import"./useSortable.7fd64a7b.js";import"./useExpose.1aedd396.js";import"./index.416965e6.js";import{c as m,d as n,a as c,b as p,e as j}from"./data.247fec6a.js";import{_ as l}from"./index.aec1bac9.js";import"./usePageContext.42b62d5d.js";var u=e({components:{BasicTable:d,PageWrapper:l},setup:()=>({aoaToExcel:function(){c({data:p,header:j,filename:"二维数组方式导出excel.xlsx"})},columns:m,data:n})});const f=r("导出");u.render=function(e,r,d,m,n,c){const p=t("a-button"),j=t("BasicTable"),l=t("PageWrapper");return o(),a(l,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:s((()=>[i(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:s((()=>[i(p,{onClick:e.aoaToExcel},{default:s((()=>[f])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default u;