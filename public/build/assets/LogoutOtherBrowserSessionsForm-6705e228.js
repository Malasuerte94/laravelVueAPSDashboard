import{d as g,P as k,c as h,w as e,o as a,g as n,a as t,e as l,F as x,h as V,t as u,f as b,b as i,u as d,$ as B,n as S}from"./app-9c875f28.js";import{_ as C}from"./ActionMessage-c2f29f93.js";import{_ as L}from"./ActionSection-20ef56f8.js";import{a as A}from"./DialogModal-0701baeb.js";import{_ as O}from"./InputError-adbcba9d.js";import{_ as y}from"./PrimaryButton-0d7d6089.js";import{_ as $}from"./SecondaryButton-0c2b5720.js";import{_ as H}from"./TextInput-08a40335.js";import"./SectionTitle-5bba16c7.js";import"./_plugin-vue_export-helper-c27b6911.js";const F={key:0,class:"mt-5 space-y-6"},I={key:0,class:"w-8 h-8 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},M={key:1,class:"w-8 h-8 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},N={class:"ml-3"},P={class:"text-sm text-gray-600"},T={class:"text-xs text-gray-500"},U={key:0,class:"text-green-500 font-semibold"},j={key:1},D={class:"flex items-center mt-5"},E={class:"mt-4"},ss={__name:"LogoutOtherBrowserSessionsForm",props:{sessions:Array},setup(p){const m=g(!1),c=g(null),r=k({password:""}),v=()=>{m.value=!0,setTimeout(()=>c.value.focus(),250)},w=()=>{r.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>f(),onError:()=>c.value.focus(),onFinish:()=>r.reset()})},f=()=>{m.value=!1,r.reset()};return(K,s)=>(a(),h(L,null,{title:e(()=>s[1]||(s[1]=[n(" Browser Sessions ")])),description:e(()=>s[2]||(s[2]=[n(" Manage and log out your active sessions on other browsers and devices. ")])),content:e(()=>[s[11]||(s[11]=t("div",{class:"max-w-xl text-sm text-gray-600"}," If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. ",-1)),p.sessions.length>0?(a(),l("div",F,[(a(!0),l(x,null,V(p.sessions,(o,_)=>(a(),l("div",{key:_,class:"flex items-center"},[t("div",null,[o.agent.is_desktop?(a(),l("svg",I,s[3]||(s[3]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"},null,-1)]))):(a(),l("svg",M,s[4]||(s[4]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"},null,-1)])))]),t("div",N,[t("div",P,u(o.agent.platform?o.agent.platform:"Unknown")+" - "+u(o.agent.browser?o.agent.browser:"Unknown"),1),t("div",null,[t("div",T,[n(u(o.ip_address)+", ",1),o.is_current_device?(a(),l("span",U,"This device")):(a(),l("span",j,"Last active "+u(o.last_active),1))])])])]))),128))])):b("",!0),t("div",D,[i(y,{onClick:v},{default:e(()=>s[5]||(s[5]=[n(" Log Out Other Browser Sessions ")])),_:1}),i(C,{on:d(r).recentlySuccessful,class:"ml-3"},{default:e(()=>s[6]||(s[6]=[n(" Done. ")])),_:1},8,["on"])]),i(A,{show:m.value,onClose:f},{title:e(()=>s[7]||(s[7]=[n(" Log Out Other Browser Sessions ")])),content:e(()=>[s[8]||(s[8]=n(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. ")),t("div",E,[i(H,{ref_key:"passwordInput",ref:c,modelValue:d(r).password,"onUpdate:modelValue":s[0]||(s[0]=o=>d(r).password=o),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:B(w,["enter"])},null,8,["modelValue"]),i(O,{message:d(r).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[i($,{onClick:f},{default:e(()=>s[9]||(s[9]=[n(" Cancel ")])),_:1}),i(y,{class:S(["ml-3",{"opacity-25":d(r).processing}]),disabled:d(r).processing,onClick:w},{default:e(()=>s[10]||(s[10]=[n(" Log Out Other Browser Sessions ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{ss as default};
