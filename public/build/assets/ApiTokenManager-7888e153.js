import{o as i,c as N,w as e,a as t,r as y,P as x,d as b,e as c,b as o,f as v,g as n,u as a,F as w,h as $,t as k,n as C}from"./app-cff6ef40.js";import{_ as L}from"./ActionMessage-f09180a2.js";import{_ as z}from"./ActionSection-366e7078.js";import{_ as T}from"./Checkbox-55ec198a.js";import{_ as U,a as S}from"./DialogModal-aab0fa35.js";import{_ as W}from"./DangerButton-90770cc9.js";import{_ as E}from"./FormSection-b7ebda62.js";import{_ as H}from"./InputError-d275f9eb.js";import{_ as B}from"./InputLabel-d95745c0.js";import{_ as I}from"./PrimaryButton-3de36c59.js";import{_ as P}from"./SecondaryButton-1855e11f.js";import{S as Y}from"./SectionBorder-45c9b017.js";import{_ as q}from"./TextInput-83392ab4.js";import"./SectionTitle-a3529f80.js";import"./_plugin-vue_export-helper-c27b6911.js";const G={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},J={class:"sm:flex sm:items-start"},K=t("div",{class:"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[t("svg",{class:"h-6 w-6 text-red-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})])],-1),O={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Q={class:"text-lg"},R={class:"mt-2"},X={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},Z={__name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(d,{emit:A}){const r=()=>{A("close")};return(m,h)=>(i(),N(U,{show:d.show,"max-width":d.maxWidth,closeable:d.closeable,onClose:r},{default:e(()=>[t("div",G,[t("div",J,[K,t("div",O,[t("h3",Q,[y(m.$slots,"title")]),t("div",R,[y(m.$slots,"content")])])])]),t("div",X,[y(m.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}},ee={class:"col-span-6 sm:col-span-4"},se={key:0,class:"col-span-6"},te={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},oe={class:"flex items-center"},le={class:"ml-2 text-sm text-gray-600"},ne={key:0},ae={class:"mt-10 sm:mt-0"},ie={class:"space-y-6"},re={class:"break-all"},ce={class:"flex items-center ml-2"},de={key:0,class:"text-sm text-gray-400"},me=["onClick"],ue=["onClick"],pe=t("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),fe={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"},_e={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ve={class:"flex items-center"},ke={class:"ml-2 text-sm text-gray-600"},Ve={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(d){const r=x({name:"",permissions:d.defaultPermissions}),m=x({permissions:[]}),h=x({}),g=b(!1),p=b(null),f=b(null),F=()=>{r.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{g.value=!0,r.reset()}})},V=u=>{m.permissions=u.abilities,p.value=u},j=()=>{m.put(route("api-tokens.update",p.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>p.value=null})},D=u=>{f.value=u},M=()=>{h.delete(route("api-tokens.destroy",f.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>f.value=null})};return(u,l)=>(i(),c("div",null,[o(E,{onSubmitted:F},{title:e(()=>[n(" Create API Token ")]),description:e(()=>[n(" API tokens allow third-party services to authenticate with our application on your behalf. ")]),form:e(()=>[t("div",ee,[o(B,{for:"name",value:"Name"}),o(q,{id:"name",modelValue:a(r).name,"onUpdate:modelValue":l[0]||(l[0]=s=>a(r).name=s),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),o(H,{message:a(r).errors.name,class:"mt-2"},null,8,["message"])]),d.availablePermissions.length>0?(i(),c("div",se,[o(B,{for:"permissions",value:"Permissions"}),t("div",te,[(i(!0),c(w,null,$(d.availablePermissions,s=>(i(),c("div",{key:s},[t("label",oe,[o(T,{checked:a(r).permissions,"onUpdate:checked":l[1]||(l[1]=_=>a(r).permissions=_),value:s},null,8,["checked","value"]),t("span",le,k(s),1)])]))),128))])])):v("",!0)]),actions:e(()=>[o(L,{on:a(r).recentlySuccessful,class:"mr-3"},{default:e(()=>[n(" Created. ")]),_:1},8,["on"]),o(I,{class:C({"opacity-25":a(r).processing}),disabled:a(r).processing},{default:e(()=>[n(" Create ")]),_:1},8,["class","disabled"])]),_:1}),d.tokens.length>0?(i(),c("div",ne,[o(Y),t("div",ae,[o(z,null,{title:e(()=>[n(" Manage API Tokens ")]),description:e(()=>[n(" You may delete any of your existing tokens if they are no longer needed. ")]),content:e(()=>[t("div",ie,[(i(!0),c(w,null,$(d.tokens,s=>(i(),c("div",{key:s.id,class:"flex items-center justify-between"},[t("div",re,k(s.name),1),t("div",ce,[s.last_used_ago?(i(),c("div",de," Last used "+k(s.last_used_ago),1)):v("",!0),d.availablePermissions.length>0?(i(),c("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:_=>V(s)}," Permissions ",8,me)):v("",!0),t("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:_=>D(s)}," Delete ",8,ue)])]))),128))])]),_:1})])])):v("",!0),o(S,{show:g.value,onClose:l[3]||(l[3]=s=>g.value=!1)},{title:e(()=>[n(" API Token ")]),content:e(()=>[pe,u.$page.props.jetstream.flash.token?(i(),c("div",fe,k(u.$page.props.jetstream.flash.token),1)):v("",!0)]),footer:e(()=>[o(P,{onClick:l[2]||(l[2]=s=>g.value=!1)},{default:e(()=>[n(" Close ")]),_:1})]),_:1},8,["show"]),o(S,{show:p.value!=null,onClose:l[6]||(l[6]=s=>p.value=null)},{title:e(()=>[n(" API Token Permissions ")]),content:e(()=>[t("div",_e,[(i(!0),c(w,null,$(d.availablePermissions,s=>(i(),c("div",{key:s},[t("label",ve,[o(T,{checked:a(m).permissions,"onUpdate:checked":l[4]||(l[4]=_=>a(m).permissions=_),value:s},null,8,["checked","value"]),t("span",ke,k(s),1)])]))),128))])]),footer:e(()=>[o(P,{onClick:l[5]||(l[5]=s=>p.value=null)},{default:e(()=>[n(" Cancel ")]),_:1}),o(I,{class:C(["ml-3",{"opacity-25":a(m).processing}]),disabled:a(m).processing,onClick:j},{default:e(()=>[n(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),o(Z,{show:f.value!=null,onClose:l[8]||(l[8]=s=>f.value=null)},{title:e(()=>[n(" Delete API Token ")]),content:e(()=>[n(" Are you sure you would like to delete this API token? ")]),footer:e(()=>[o(P,{onClick:l[7]||(l[7]=s=>f.value=null)},{default:e(()=>[n(" Cancel ")]),_:1}),o(W,{class:C(["ml-3",{"opacity-25":a(h).processing}]),disabled:a(h).processing,onClick:M},{default:e(()=>[n(" Delete ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Ve as default};
