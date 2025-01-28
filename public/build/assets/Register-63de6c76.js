import{P as g,e as f,b as s,u as a,w as l,F as w,o as p,X as _,a as r,g as m,f as v,i as y,n as x,j as V}from"./app-a1d1fb9a.js";import{A as b}from"./AuthenticationCard-74274792.js";import{_ as h}from"./AuthenticationCardLogo-452983d5.js";import{_ as k}from"./Checkbox-436dd227.js";import{_ as i}from"./InputError-83d0ad66.js";import{_ as n}from"./InputLabel-744a470b.js";import{_ as P}from"./PrimaryButton-c5d7d835.js";import{_ as u}from"./TextInput-8baa6410.js";import"./_plugin-vue_export-helper-c27b6911.js";const $={class:"mt-4"},A={class:"mt-4"},N={class:"mt-4"},T={key:0,class:"mt-4"},q={class:"flex items-center"},C={class:"ml-2"},R=["href"],U=["href"],j={class:"flex items-center justify-between mt-4"},D={__name:"Register",setup(E){const t=g({name:"",email:"",password:"",password_confirmation:"",terms:!1}),c=()=>{t.post(route("register"),{onFinish:()=>t.reset("password","password_confirmation")})};return(d,e)=>(p(),f(w,null,[s(a(_),{title:"Register"}),s(b,null,{logo:l(()=>[s(h)]),default:l(()=>[r("form",{onSubmit:V(c,["prevent"])},[r("div",null,[s(n,{for:"name",value:"Name"}),s(u,{id:"name",modelValue:a(t).name,"onUpdate:modelValue":e[0]||(e[0]=o=>a(t).name=o),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(i,{class:"mt-2",message:a(t).errors.name},null,8,["message"])]),r("div",$,[s(n,{for:"email",value:"Email"}),s(u,{id:"email",modelValue:a(t).email,"onUpdate:modelValue":e[1]||(e[1]=o=>a(t).email=o),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),s(i,{class:"mt-2",message:a(t).errors.email},null,8,["message"])]),r("div",A,[s(n,{for:"password",value:"Password"}),s(u,{id:"password",modelValue:a(t).password,"onUpdate:modelValue":e[2]||(e[2]=o=>a(t).password=o),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(i,{class:"mt-2",message:a(t).errors.password},null,8,["message"])]),r("div",N,[s(n,{for:"password_confirmation",value:"Confirm Password"}),s(u,{id:"password_confirmation",modelValue:a(t).password_confirmation,"onUpdate:modelValue":e[3]||(e[3]=o=>a(t).password_confirmation=o),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(i,{class:"mt-2",message:a(t).errors.password_confirmation},null,8,["message"])]),d.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(p(),f("div",T,[s(n,{for:"terms"},{default:l(()=>[r("div",q,[s(k,{id:"terms",checked:a(t).terms,"onUpdate:checked":e[4]||(e[4]=o=>a(t).terms=o),name:"terms",required:""},null,8,["checked"]),r("div",C,[e[5]||(e[5]=m(" I agree to the ")),r("a",{target:"_blank",href:d.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,R),e[6]||(e[6]=m(" and ")),r("a",{target:"_blank",href:d.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,U)])]),s(i,{class:"mt-2",message:a(t).errors.terms},null,8,["message"])]),_:1})])):v("",!0),r("div",j,[s(a(y),{href:d.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>e[7]||(e[7]=[m(" Ai cont deja? ")])),_:1},8,["href"]),s(P,{class:x(["ml-4",{"opacity-25":a(t).processing}]),disabled:a(t).processing},{default:l(()=>e[8]||(e[8]=[m(" ÎNREGISTRARE ")])),_:1},8,["class","disabled"])]),e[9]||(e[9]=r("div",{class:"mt-12 text-center"},[m(" Așteptăm aprobarea de la Google pentru a activa înregistrarea cu YT! "),r("div",{class:"flex items-center w-full gap-5"},[r("a",{href:"#",class:"opacity-25 disa w-full text-center mt-4 youtube-register"}," Înregistrare cu YouTube "),r("a",{href:"/auth/google/redirect",class:"w-full text-center mt-4 google-register"}," Înregistrare cu Google ")])],-1))],32)]),_:1})],64))}};export{D as default};
