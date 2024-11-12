import{P as b,e as d,b as a,u as t,w as l,F as w,o as n,X as x,t as h,f as u,a as s,c as y,g as c,i as v,n as k,j as V}from"./app-bd76435f.js";import{A as $}from"./AuthenticationCard-555c11b7.js";import{_ as B}from"./AuthenticationCardLogo-8e2fd515.js";import{_ as A}from"./Checkbox-d841f76d.js";import{_ as f}from"./InputError-b0219e5f.js";import{_ as p}from"./InputLabel-07a5e945.js";import{_ as C}from"./PrimaryButton-dbfe337e.js";import{_ as g}from"./TextInput-bc62dec1.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],S={class:"mt-4"},q={class:"block mt-4"},F={class:"flex items-center"},L=s("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),R={class:"flex items-center mt-4 justify-between"},T=s("a",{href:"/register",class:"ml-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"}," Înregistrare ",-1),U=s("div",{class:"mt-12 text-center"},[c(" Așteptăm aprobarea de la Google pentru a activa înregistrarea cu YT! "),s("div",{class:"flex items-center w-full gap-5"},[s("a",{href:"#",class:"opacity-25 disa w-full text-center mt-4 youtube-register"}," Înregistrare cu YouTube "),s("a",{href:"/auth/google/redirect",class:"w-full text-center mt-4 google-register"}," Înregistrare cu Google ")])],-1),I={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const e=b({email:"",password:"",remember:!1}),_=()=>{e.transform(m=>({...m,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(m,r)=>(n(),d(w,null,[a(t(x),{title:"Log in"}),a($,null,{logo:l(()=>[a(B)]),default:l(()=>[i.status?(n(),d("div",N,h(i.status),1)):u("",!0),s("form",{onSubmit:V(_,["prevent"])},[s("div",null,[a(p,{for:"email",value:"Email"}),a(g,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":r[0]||(r[0]=o=>t(e).email=o),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),a(f,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),s("div",S,[a(p,{for:"password",value:"Password"}),a(g,{id:"password",modelValue:t(e).password,"onUpdate:modelValue":r[1]||(r[1]=o=>t(e).password=o),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(f,{class:"mt-2",message:t(e).errors.password},null,8,["message"])]),s("div",q,[s("label",F,[a(A,{checked:t(e).remember,"onUpdate:checked":r[2]||(r[2]=o=>t(e).remember=o),name:"remember"},null,8,["checked"]),L])]),s("div",R,[i.canResetPassword?(n(),y(t(v),{key:0,href:m.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>[c(" Ai uitat parola? ")]),_:1},8,["href"])):u("",!0),s("div",null,[a(C,{class:k(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:l(()=>[c(" Log in ")]),_:1},8,["class","disabled"]),T])]),U],40,P)]),_:1})],64))}};export{I as default};