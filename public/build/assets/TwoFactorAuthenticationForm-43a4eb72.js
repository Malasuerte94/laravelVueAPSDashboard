import{d as y,I as H,o as t,e as n,a as u,r as N,b as r,w as o,g as l,t as C,$ as B,n as b,C as I,P as J,l as Q,p as Y,c as g,f as m,u as V,F as D,h as U,A as z,J as R}from"./app-9c875f28.js";import{_ as G}from"./ActionSection-20ef56f8.js";import{a as O}from"./DialogModal-0701baeb.js";import{_ as L}from"./InputError-adbcba9d.js";import{_ as A}from"./PrimaryButton-0d7d6089.js";import{_ as S}from"./SecondaryButton-0c2b5720.js";import{_ as M}from"./TextInput-08a40335.js";import{_ as W}from"./DangerButton-55e0546a.js";import{_ as j}from"./InputLabel-31327bba.js";import"./SectionTitle-5bba16c7.js";import"./_plugin-vue_export-helper-c27b6911.js";const X={class:"mt-4"},h={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(x,{emit:T}){const c=T,a=y(!1),s=H({password:"",error:"",processing:!1}),p=y(null),w=()=>{axios.get(route("password.confirmation")).then(i=>{i.data.confirmed?c("confirmed"):(a.value=!0,setTimeout(()=>p.value.focus(),250))})},v=()=>{s.processing=!0,axios.post(route("password.confirm"),{password:s.password}).then(()=>{s.processing=!1,d(),I().then(()=>c("confirmed"))}).catch(i=>{s.processing=!1,s.error=i.response.data.errors.password[0],p.value.focus()})},d=()=>{a.value=!1,s.password="",s.error=""};return(i,_)=>(t(),n("span",null,[u("span",{onClick:w},[N(i.$slots,"default")]),r(O,{show:a.value,onClose:d},{title:o(()=>[l(C(x.title),1)]),content:o(()=>[l(C(x.content)+" ",1),u("div",X,[r(M,{ref_key:"passwordInput",ref:p,modelValue:s.password,"onUpdate:modelValue":_[0]||(_[0]=F=>s.password=F),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:B(v,["enter"])},null,8,["modelValue"]),r(L,{message:s.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[r(S,{onClick:d},{default:o(()=>_[1]||(_[1]=[l(" Cancel ")])),_:1}),r(A,{class:b(["ml-3",{"opacity-25":s.processing}]),disabled:s.processing,onClick:v},{default:o(()=>[l(C(x.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},Z={key:0,class:"text-lg font-medium text-gray-900"},ee={key:1,class:"text-lg font-medium text-gray-900"},te={key:2,class:"text-lg font-medium text-gray-900"},oe={key:3},se={key:0},ae={class:"mt-4 max-w-xl text-sm text-gray-600"},ne={key:0,class:"font-semibold"},re={key:1},le=["innerHTML"],ie={key:0,class:"mt-4 max-w-xl text-sm text-gray-600"},ue={class:"font-semibold"},ce=["innerHTML"],de={key:1,class:"mt-4"},me={key:1},fe={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},pe={class:"mt-5"},ve={key:0},ye={key:1},$e={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(x){const T=x,c=y(!1),a=y(!1),s=y(!1),p=y(null),w=y(null),v=y([]),d=J({code:""}),i=Q(()=>{var f;return!c.value&&((f=z().props.user)==null?void 0:f.two_factor_enabled)});Y(i,()=>{i.value||(d.reset(),d.clearErrors())});const _=()=>{c.value=!0,R.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:()=>Promise.all([F(),q(),$()]),onFinish:()=>{c.value=!1,a.value=T.requiresConfirmation}})},F=()=>axios.get("/user/two-factor-qr-code").then(f=>{p.value=f.data.svg}),q=()=>axios.get("/user/two-factor-secret-key").then(f=>{w.value=f.data.secretKey}),$=()=>axios.get("/user/two-factor-recovery-codes").then(f=>{v.value=f.data}),P=()=>{d.post("/user/confirmed-two-factor-authentication",{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{a.value=!1,p.value=null,w.value=null}})},E=()=>{axios.post("/user/two-factor-recovery-codes").then(()=>$())},K=()=>{s.value=!0,R.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:()=>{s.value=!1,a.value=!1}})};return(f,e)=>(t(),g(G,null,{title:o(()=>e[1]||(e[1]=[l(" Two Factor Authentication ")])),description:o(()=>e[2]||(e[2]=[l(" Add additional security to your account using two factor authentication. ")])),content:o(()=>[i.value&&!a.value?(t(),n("h3",Z," You have enabled two factor authentication. ")):i.value&&a.value?(t(),n("h3",ee," Finish enabling two factor authentication. ")):(t(),n("h3",te," You have not enabled two factor authentication. ")),e[11]||(e[11]=u("div",{class:"mt-3 max-w-xl text-sm text-gray-600"},[u("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1)),i.value?(t(),n("div",oe,[p.value?(t(),n("div",se,[u("div",ae,[a.value?(t(),n("p",ne," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(t(),n("p",re," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),u("div",{class:"mt-4",innerHTML:p.value},null,8,le),w.value?(t(),n("div",ie,[u("p",ue,[e[3]||(e[3]=l(" Setup Key: ")),u("span",{innerHTML:w.value},null,8,ce)])])):m("",!0),a.value?(t(),n("div",de,[r(j,{for:"code",value:"Code"}),r(M,{id:"code",modelValue:V(d).code,"onUpdate:modelValue":e[0]||(e[0]=k=>V(d).code=k),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:B(P,["enter"])},null,8,["modelValue"]),r(L,{message:V(d).errors.code,class:"mt-2"},null,8,["message"])])):m("",!0)])):m("",!0),v.value.length>0&&!a.value?(t(),n("div",me,[e[4]||(e[4]=u("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[u("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1)),u("div",fe,[(t(!0),n(D,null,U(v.value,k=>(t(),n("div",{key:k},C(k),1))),128))])])):m("",!0)])):m("",!0),u("div",pe,[i.value?(t(),n("div",ye,[r(h,{onConfirmed:P},{default:o(()=>[a.value?(t(),g(A,{key:0,type:"button",class:b(["mr-3",{"opacity-25":c.value}]),disabled:c.value},{default:o(()=>e[6]||(e[6]=[l(" Confirm ")])),_:1},8,["class","disabled"])):m("",!0)]),_:1}),r(h,{onConfirmed:E},{default:o(()=>[v.value.length>0&&!a.value?(t(),g(S,{key:0,class:"mr-3"},{default:o(()=>e[7]||(e[7]=[l(" Regenerate Recovery Codes ")])),_:1})):m("",!0)]),_:1}),r(h,{onConfirmed:$},{default:o(()=>[v.value.length===0&&!a.value?(t(),g(S,{key:0,class:"mr-3"},{default:o(()=>e[8]||(e[8]=[l(" Show Recovery Codes ")])),_:1})):m("",!0)]),_:1}),r(h,{onConfirmed:K},{default:o(()=>[a.value?(t(),g(S,{key:0,class:b({"opacity-25":s.value}),disabled:s.value},{default:o(()=>e[9]||(e[9]=[l(" Cancel ")])),_:1},8,["class","disabled"])):m("",!0)]),_:1}),r(h,{onConfirmed:K},{default:o(()=>[a.value?m("",!0):(t(),g(W,{key:0,class:b({"opacity-25":s.value}),disabled:s.value},{default:o(()=>e[10]||(e[10]=[l(" Disable ")])),_:1},8,["class","disabled"]))]),_:1})])):(t(),n("div",ve,[r(h,{onConfirmed:_},{default:o(()=>[r(A,{type:"button",class:b({"opacity-25":c.value}),disabled:c.value},{default:o(()=>e[5]||(e[5]=[l(" Enable ")])),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{$e as default};
