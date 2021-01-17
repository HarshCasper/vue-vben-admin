import{d as e,h as t,o as l,i as a,w as d,j as i,m as s}from"./index.c9b191ae.js";import"./index.62221c24.js";import"./_stringToArray.f9d23805.js";import"./domUtils.43bacb00.js";import"./index.e9cfd29c.js";import"./index.b4918bad.js";import"./index.34b4eaee.js";import"./CheckOutlined.6db140fd.js";import"./index.27cba524.js";import{_ as u}from"./index.b9d582f5.js";import"./FullscreenOutlined.499766bf.js";import"./RightOutlined.ce1a9cb6.js";import"./SettingOutlined.3ccdf103.js";import"./useTimeout.306ef350.js";import"./index.ad8055f7.js";import"./animation.f174d9e2.js";import"./useScrollTo.ed4075e5.js";import"./useAttrs.dd653939.js";import"./useWindowSizeFn.68f6ef4b.js";import"./index.e80c819c.js";import"./uuid.a6cec785.js";import"./download.e374d1b4.js";import"./useForm.d744eed5.js";import"./clickOutside.5c695aaa.js";import"./useSortable.7fd64a7b.js";import"./useExpose.1aedd396.js";import{u as r}from"./useTable.4f530c5e.js";import{_ as o}from"./index.aec1bac9.js";import"./usePageContext.42b62d5d.js";import{D as n}from"./index.d0ba04da.js";import{refundTimeTableSchema as f,refundTimeTableData as m}from"./data.fa98b7e2.js";var p=e({components:{Description:n,BasicTable:u,PageWrapper:o},setup(){const[e]=r({title:"退货进度",columns:f,pagination:!1,dataSource:m,showIndexColumn:!1,scroll:{y:300}});return{registerTimeTable:e}}});const b=s(" 操作一 "),c=s(" 操作二 "),_=s(" 主操作 "),j={class:"m-4 pt-4 desc-wrap"},x=s(" 曲丽丽 "),g=s(" XX 服务 "),T=s(" 2017-01-10 "),y=i("a",null,"12421",-1),h=s(" 2017-07-07 ~ 2017-08-08 "),k=s(" 请于两个工作日内确认 "),X=i("div",null,"Vben",-1),v=s(),w=i("p",null,"2016-12-12 12:32",-1),C=i("p",null,"Chad",-1),O=s(" 付小小 "),S=s(" XX 32943898021309809423 "),z=s(" 3321944288191034921 "),B=s(" 18112345678 "),F=s(" 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口 "),P=s(" 111 "),R=s(" 2017-08-08 "),W=s(" 725 "),A=s(" 2017-08-08 "),D=i("h4",null,"信息组",-1),Y=s(" 林东东 "),E=s(" 1234567 "),I=s(" XX公司 - YY部 "),M=s(" 2017-08-08 "),N=s(" 这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长... "),U=s(" Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗.. "),V=s(" 付小小 "),q=s(" 1234568 ");p.render=function(e,s,u,r,o,n){const f=t("a-button"),m=t("a-tab-pane"),p=t("a-tabs"),G=t("a-descriptions-item"),H=t("a-descriptions"),J=t("a-step"),K=t("a-steps"),L=t("a-card"),Q=t("a-divider"),Z=t("a-empty"),$=t("BasicTable"),ee=t("PageWrapper");return l(),a(ee,{title:"单号：234231029431",contentBackground:""},{extra:d((()=>[i(f,null,{default:d((()=>[b])),_:1}),i(f,null,{default:d((()=>[c])),_:1}),i(f,{type:"primary"},{default:d((()=>[_])),_:1})])),footer:d((()=>[i(p,{"default-active-key":"1"},{default:d((()=>[i(m,{key:"1",tab:"详情"}),i(m,{key:"2",tab:"规则"})])),_:1})])),default:d((()=>[i("div",j,[i(H,{size:"small",column:2},{default:d((()=>[i(G,{label:"创建人"},{default:d((()=>[x])),_:1}),i(G,{label:"订购产品"},{default:d((()=>[g])),_:1}),i(G,{label:"创建时间"},{default:d((()=>[T])),_:1}),i(G,{label:"关联单据"},{default:d((()=>[y])),_:1}),i(G,{label:"生效日期"},{default:d((()=>[h])),_:1}),i(G,{label:"备注"},{default:d((()=>[k])),_:1})])),_:1}),i(L,{title:"流程进度",bordered:!1},{default:d((()=>[i(K,{current:1,"progress-dot":"",size:"small"},{default:d((()=>[i(J,{title:"创建项目"},{description:d((()=>[X,v,w])),_:1}),i(J,{title:"部门初审"},{description:d((()=>[C])),_:1}),i(J,{title:"财务复核"}),i(J,{title:"完成"})])),_:1})])),_:1}),i(L,{title:"用户信息",bordered:!1,class:"mt-5"},{default:d((()=>[i(H,{column:3},{default:d((()=>[i(G,{label:"用户姓名"},{default:d((()=>[O])),_:1}),i(G,{label:"会员卡号"},{default:d((()=>[S])),_:1}),i(G,{label:"身份证"},{default:d((()=>[z])),_:1}),i(G,{label:"联系方式"},{default:d((()=>[B])),_:1}),i(G,{label:"联系地址",span:2},{default:d((()=>[F])),_:1})])),_:1}),i(H,{title:"信息组",column:3},{default:d((()=>[i(G,{label:"某某数据"},{default:d((()=>[P])),_:1}),i(G,{label:"该数据更新时间"},{default:d((()=>[R])),_:1}),i(G,{label:"某某数据"},{default:d((()=>[W])),_:1}),i(G,{label:"该数据更新时间"},{default:d((()=>[A])),_:1})])),_:1}),D,i(L,{title:"多层级信息组"},{default:d((()=>[i(H,{title:"组名称",column:3},{default:d((()=>[i(G,{label:"负责人"},{default:d((()=>[Y])),_:1}),i(G,{label:"角色码"},{default:d((()=>[E])),_:1}),i(G,{label:"所属部门"},{default:d((()=>[I])),_:1}),i(G,{label:"过期时间"},{default:d((()=>[M])),_:1}),i(G,{label:"描述",span:2},{default:d((()=>[N])),_:1})])),_:1}),i(Q),i(H,{title:"组名称",column:1},{default:d((()=>[i(G,{label:"学名"},{default:d((()=>[U])),_:1})])),_:1}),i(Q),i(H,{title:"组名称",column:1},{default:d((()=>[i(G,{label:"负责人"},{default:d((()=>[V])),_:1}),i(G,{label:"角色码"},{default:d((()=>[q])),_:1})])),_:1})])),_:1})])),_:1}),i(L,{title:"用户近半年来电记录",class:"my-5"},{default:d((()=>[i(Z)])),_:1}),i($,{onRegister:e.registerTimeTable},null,8,["onRegister"])])])),_:1})};export default p;