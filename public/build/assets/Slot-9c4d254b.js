import{e as r,a as t,F as l,h as s,o as n,c as _,w as c,t as m,f as a,T as w}from"./app-c665b69c.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const j={props:["id"],data(){return{elementVisible:Array(30).fill(!1),nextSpinDisplay:[{identifier:1,row:1,column:1,unique_id:"23f3jf1"},{identifier:2,row:2,column:1,unique_id:"23f3jf2"},{identifier:3,row:3,column:1,unique_id:"23f3jf3"},{identifier:4,row:4,column:1,unique_id:"23f3jf4"},{identifier:5,row:5,column:1,unique_id:"23f3jf5"},{identifier:6,row:1,column:2,unique_id:"23f3jf6"},{identifier:7,row:2,column:2,unique_id:"23f3jf7"},{identifier:8,row:3,column:2,unique_id:"23f3jf8"},{identifier:9,row:4,column:2,unique_id:"23f3jf9"},{identifier:10,row:5,column:2,unique_id:"23f3jf10"},{identifier:11,row:1,column:3,unique_id:"23f3jf11"},{identifier:12,row:2,column:3,unique_id:"23f3jf12"},{identifier:13,row:3,column:3,unique_id:"23f3jf13"},{identifier:14,row:4,column:3,unique_id:"23f3jf14"},{identifier:15,row:5,column:3,unique_id:"23f3jf15"},{identifier:16,row:1,column:4,unique_id:"23f3jf16"},{identifier:17,row:2,column:4,unique_id:"23f3jf17"},{identifier:18,row:3,column:4,unique_id:"23f3jf18"},{identifier:19,row:4,column:4,unique_id:"23f3jf19"},{identifier:20,row:5,column:4,unique_id:"23f3jf20"},{identifier:21,row:1,column:5,unique_id:"23f3jf21"},{identifier:22,row:2,column:5,unique_id:"23f3jf22"},{identifier:23,row:3,column:5,unique_id:"23f3jf23"},{identifier:24,row:4,column:5,unique_id:"23f3jf24"},{identifier:25,row:5,column:5,unique_id:"23f3jf25"},{identifier:26,row:1,column:6,unique_id:"23f3jf26"},{identifier:27,row:2,column:6,unique_id:"23f3jf27"},{identifier:28,row:3,column:6,unique_id:"23f3jf28"},{identifier:29,row:4,column:6,unique_id:"23f3jf29"},{identifier:30,row:5,column:6,unique_id:"23f3jf30"}]}},async mounted(){},methods:{spin(){this.elementVisible=this.elementVisible.map(()=>!1),this.elementVisible.forEach((f,e)=>{setTimeout(()=>{this.$set(this.elementVisible,e,!0)},e*50)})},getElement(f){return f===1?"X":""}}},p={class:"canvas-container"},h={class:"board"},y=["id"],b=["id"];function v(f,e,V,k,o,d){return n(),r("div",p,[t("div",h,[(n(),r(l,null,s(6,u=>t("div",{key:"real_"+u,id:"real_"+u},[(n(!0),r(l,null,s(o.nextSpinDisplay.filter(i=>i.column===u),i=>(n(),_(w,{name:"drop",appear:"",key:i.unique_id},{default:c(()=>[o.elementVisible[i.identifier-1]?(n(),r("div",{key:0,id:"element"+i.row+"_"+i.column},m(d.getElement(i.identifier)),9,b)):a("",!0)]),_:2},1024))),128))],8,y)),64))]),t("button",{class:"spin_button",onClick:e[0]||(e[0]=u=>d.spin())},"SPIN")])}const g=q(j,[["render",v]]);export{g as default};
