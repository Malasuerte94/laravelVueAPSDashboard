import{P as n,e as u,b as e,u as s,w as o,F as c,o as d,X as f,a as t,n as p,g as _,j as b}from"./app-ad1c3a79.js";import{A as g}from"./AuthenticationCard-d6780212.js";import{_ as w}from"./AuthenticationCardLogo-37517544.js";import{_ as x}from"./InputError-a18d8019.js";import{_ as V}from"./InputLabel-3ae4d794.js";import{_ as h}from"./PrimaryButton-85e9879d.js";import{_ as $}from"./TextInput-348fac58.js";import"./_plugin-vue_export-helper-c27b6911.js";const v=["onSubmit"],y={class:"flex items-center justify-end mt-4"},I={__name:"AddRequiredEmail",props:{socialId:Number},setup(r){const a=n({email:"",remember:!0,social:r.socialId}),l=()=>{a.post(route("add-required-email-to-account"),{onFinish:()=>route("login")})};return(N,i)=>(d(),u(c,null,[e(s(f),{title:"Please add your email address"}),e(g,null,{logo:o(()=>[e(w)]),default:o(()=>[t("form",{onSubmit:b(l,["prevent"])},[t("div",null,[e(V,{for:"email",value:"Email (pentru finalizarea contului)"}),e($,{id:"email",modelValue:s(a).email,"onUpdate:modelValue":i[0]||(i[0]=m=>s(a).email=m),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),e(x,{class:"mt-2",message:s(a).errors.email},null,8,["message"])]),t("div",y,[e(h,{class:p(["w-100 w-full text-center center",{"opacity-25":s(a).processing}]),disabled:s(a).processing},{default:o(()=>[_(" Finalizare și Logare ")]),_:1},8,["class","disabled"])])],40,v)]),_:1})],64))}};export{I as default};
