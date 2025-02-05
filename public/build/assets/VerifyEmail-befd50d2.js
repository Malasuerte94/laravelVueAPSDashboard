import{P as y,l as g,e as l,b as t,u as s,w as i,F as v,o as m,X as x,a as o,f as b,n as h,g as a,i as d,j as _}from"./app-9c875f28.js";import{A as w}from"./AuthenticationCard-67726deb.js";import{_ as k}from"./AuthenticationCardLogo-9fda0d65.js";import{_ as V}from"./PrimaryButton-0d7d6089.js";import"./_plugin-vue_export-helper-c27b6911.js";const E={key:0,class:"mb-4 font-medium text-sm text-green-600"},B={class:"mt-4 flex items-center justify-between"},F={__name:"VerifyEmail",props:{status:String},setup(u){const f=u,r=y({}),c=()=>{r.post(route("verification.send"))},p=g(()=>f.status==="verification-link-sent");return(n,e)=>(m(),l(v,null,[t(s(x),{title:"Email Verification"}),t(w,null,{logo:i(()=>[t(k)]),default:i(()=>[e[3]||(e[3]=o("div",{class:"mb-4 text-sm text-gray-600"}," Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1)),p.value?(m(),l("div",E," A new verification link has been sent to the email address you provided in your profile settings. ")):b("",!0),o("form",{onSubmit:_(c,["prevent"])},[o("div",B,[t(V,{class:h({"opacity-25":s(r).processing}),disabled:s(r).processing},{default:i(()=>e[0]||(e[0]=[a(" Resend Verification Email ")])),_:1},8,["class","disabled"]),o("div",null,[t(s(d),{href:n.route("profile.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:i(()=>e[1]||(e[1]=[a(" Edit Profile")])),_:1},8,["href"]),t(s(d),{href:n.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 ml-2"},{default:i(()=>e[2]||(e[2]=[a(" Log Out ")])),_:1},8,["href"])])])],32)]),_:1})],64))}};export{F as default};
