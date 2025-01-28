import{P as w,e as u,b as a,u as r,w as l,F as x,o as n,X as y,t as _,f as c,a as t,c as v,g as d,i as k,n as V,j as h}from"./app-a1d1fb9a.js";import{A as $}from"./AuthenticationCard-74274792.js";import{_ as B}from"./AuthenticationCardLogo-452983d5.js";import{_ as A}from"./Checkbox-436dd227.js";import{_ as f}from"./InputError-83d0ad66.js";import{_ as p}from"./InputLabel-744a470b.js";import{_ as C}from"./PrimaryButton-c5d7d835.js";import{_ as g}from"./TextInput-8baa6410.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},P={class:"mt-4"},q={class:"block mt-4"},F={class:"flex items-center"},L={class:"flex items-center mt-4 justify-between"},D={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const s=w({email:"",password:"",remember:!1}),b=()=>{s.transform(m=>({...m,remember:s.remember?"on":""})).post(route("login"),{onFinish:()=>s.reset("password")})};return(m,e)=>(n(),u(x,null,[a(r(y),{title:"Log in"}),a($,null,{logo:l(()=>[a(B)]),default:l(()=>[i.status?(n(),u("div",N,_(i.status),1)):c("",!0),t("form",{onSubmit:h(b,["prevent"])},[t("div",null,[a(p,{for:"email",value:"Email"}),a(g,{id:"email",modelValue:r(s).email,"onUpdate:modelValue":e[0]||(e[0]=o=>r(s).email=o),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),a(f,{class:"mt-2",message:r(s).errors.email},null,8,["message"])]),t("div",P,[a(p,{for:"password",value:"Password"}),a(g,{id:"password",modelValue:r(s).password,"onUpdate:modelValue":e[1]||(e[1]=o=>r(s).password=o),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(f,{class:"mt-2",message:r(s).errors.password},null,8,["message"])]),t("div",q,[t("label",F,[a(A,{checked:r(s).remember,"onUpdate:checked":e[2]||(e[2]=o=>r(s).remember=o),name:"remember"},null,8,["checked"]),e[3]||(e[3]=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1))])]),t("div",L,[i.canResetPassword?(n(),v(r(k),{key:0,href:m.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>e[4]||(e[4]=[d(" Ai uitat parola? ")])),_:1},8,["href"])):c("",!0),t("div",null,[a(C,{class:V(["ml-4",{"opacity-25":r(s).processing}]),disabled:r(s).processing},{default:l(()=>e[5]||(e[5]=[d(" Log in ")])),_:1},8,["class","disabled"]),e[6]||(e[6]=t("a",{href:"/register",class:"ml-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"}," Înregistrare ",-1))])]),e[7]||(e[7]=t("div",{class:"mt-12 text-center"},[d(" Așteptăm aprobarea de la Google pentru a activa înregistrarea cu YT! "),t("div",{class:"flex items-center w-full gap-5"},[t("a",{href:"#",class:"opacity-25 disa w-full text-center mt-4 youtube-register"}," Înregistrare cu YouTube "),t("a",{href:"/auth/google/redirect",class:"w-full text-center mt-4 google-register"}," Înregistrare cu Google ")])],-1))],32)]),_:1})],64))}};export{D as default};
