import{m as a,o as i,e as m,b as n,w as r,r as e,a as t,k as l,n as c,f as p,z as u}from"./app-cff6ef40.js";import{S as _}from"./SectionTitle-a3529f80.js";const g={class:"md:grid md:grid-cols-3 md:gap-6"},h={class:"mt-5 md:mt-0 md:col-span-2"},f={class:"grid grid-cols-6 gap-6"},v={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"},y={__name:"FormSection",emits:["submitted"],setup(b){const o=a(()=>!!u().actions);return(s,d)=>(i(),m("div",g,[n(_,null,{title:r(()=>[e(s.$slots,"title")]),description:r(()=>[e(s.$slots,"description")]),_:3}),t("div",h,[t("form",{onSubmit:d[0]||(d[0]=l(w=>s.$emit("submitted"),["prevent"]))},[t("div",{class:c(["px-4 py-5 bg-white sm:p-6 shadow",o.value?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[t("div",f,[e(s.$slots,"form")])],2),o.value?(i(),m("div",v,[e(s.$slots,"actions")])):p("",!0)],32)])]))}};export{y as _};