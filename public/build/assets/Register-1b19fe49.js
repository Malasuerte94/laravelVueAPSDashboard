import{P as _,e as c,b as e,u as a,w as l,F as w,o as f,X as g,a as t,g as n,f as h,i as v,n as y,j as b}from"./app-ad1c3a79.js";import{A as V}from"./AuthenticationCard-d6780212.js";import{_ as x}from"./AuthenticationCardLogo-37517544.js";import{_ as k}from"./Checkbox-05b33a69.js";import{_ as m}from"./InputError-a18d8019.js";import{_ as i}from"./InputLabel-3ae4d794.js";import{_ as P}from"./PrimaryButton-85e9879d.js";import{_ as u}from"./TextInput-348fac58.js";import"./_plugin-vue_export-helper-c27b6911.js";const $=["onSubmit"],A={class:"mt-4"},N={class:"mt-4"},T={class:"mt-4"},q={key:0,class:"mt-4"},C={class:"flex items-center"},R={class:"ml-2"},U=["href"],j=["href"],E={class:"flex items-center justify-between mt-4"},F=t("div",{class:"mt-12 text-center"},[n(" Așteptăm aprobarea de la Google pentru a activa înregistrarea cu YT! "),t("div",{class:"flex items-center w-full"},[t("a",{href:"#",class:"opacity-25 disa w-full text-center mt-4 youtube-register"}," Înregistrare cu YouTube ")])],-1),J={__name:"Register",setup(S){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(d,o)=>(f(),c(w,null,[e(a(g),{title:"Register"}),e(V,null,{logo:l(()=>[e(x)]),default:l(()=>[t("form",{onSubmit:b(p,["prevent"])},[t("div",null,[e(i,{for:"name",value:"Name"}),e(u,{id:"name",modelValue:a(s).name,"onUpdate:modelValue":o[0]||(o[0]=r=>a(s).name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(m,{class:"mt-2",message:a(s).errors.name},null,8,["message"])]),t("div",A,[e(i,{for:"email",value:"Email"}),e(u,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":o[1]||(o[1]=r=>a(s).email=r),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),e(m,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),t("div",N,[e(i,{for:"password",value:"Password"}),e(u,{id:"password",modelValue:a(s).password,"onUpdate:modelValue":o[2]||(o[2]=r=>a(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),t("div",T,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(u,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>a(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:a(s).errors.password_confirmation},null,8,["message"])]),d.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(f(),c("div",q,[e(i,{for:"terms"},{default:l(()=>[t("div",C,[e(k,{id:"terms",checked:a(s).terms,"onUpdate:checked":o[4]||(o[4]=r=>a(s).terms=r),name:"terms",required:""},null,8,["checked"]),t("div",R,[n(" I agree to the "),t("a",{target:"_blank",href:d.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,U),n(" and "),t("a",{target:"_blank",href:d.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,j)])]),e(m,{class:"mt-2",message:a(s).errors.terms},null,8,["message"])]),_:1})])):h("",!0),t("div",E,[e(a(v),{href:d.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>[n(" Ai cont deja? ")]),_:1},8,["href"]),e(P,{class:y(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:l(()=>[n(" ÎNREGISTRARE ")]),_:1},8,["class","disabled"])]),F],40,$)]),_:1})],64))}};export{J as default};
