import{P as c,e as f,b as o,u as e,w as l,F as w,o as _,X as g,a as t,n as V,g as b,l as k}from"./app-7a48d33e.js";import{A as v}from"./AuthenticationCard-1d29bec4.js";import{_ as P}from"./AuthenticationCardLogo-14839d0a.js";import{_ as i,a as m}from"./TextInput-d5f0b23c.js";import{_ as n}from"./InputLabel-55599fe8.js";import{_ as x}from"./PrimaryButton-beb7cf03.js";import"./_plugin-vue_export-helper-c27b6911.js";const y=["onSubmit"],$={class:"mt-4"},C={class:"mt-4"},S={class:"flex items-center justify-end mt-4"},E={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(h,a)=>(_(),f(w,null,[o(e(g),{title:"Reset Password"}),o(v,null,{logo:l(()=>[o(P)]),default:l(()=>[t("form",{onSubmit:k(u,["prevent"])},[t("div",null,[o(n,{for:"email",value:"Email"}),o(i,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",$,[o(n,{for:"password",value:"Password"}),o(i,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",C,[o(n,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",S,[o(x,{class:V({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:l(()=>[b(" Reset Password ")]),_:1},8,["class","disabled"])])],40,y)]),_:1})],64))}};export{E as default};
