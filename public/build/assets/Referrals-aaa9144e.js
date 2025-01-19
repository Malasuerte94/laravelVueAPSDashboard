import{e as a,a as e,t as n,k as u,E as f,F as h,h as g,o as l,f as m,g as y,S as x,U as b}from"./app-5ff6f51a.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const R={props:["id"],data(){return{list:[],topReferrers:[],filteredList:[],user:"",filter:{from:"",to:""}}},async mounted(){await this.getReferrals()},methods:{async getReferrals(){try{const r=await axios.get(`/api/ref-list/${this.id}`);this.list=r.data.list,this.user=r.data.user,this.filteredList=this.list,this.calculateTopReferrers()}catch(r){console.log(r)}},calculateTopReferrers(){const r=this.list.reduce((t,o)=>(t[o.parent_user]=(t[o.parent_user]||0)+1,t),{});this.topReferrers=Object.entries(r).map(([t,o])=>({parent_user:t,count:o})).sort((t,o)=>o.count-t.count)},filterReferrals(){const r=new Date(this.filter.from),t=new Date(this.filter.to);this.filteredList=this.list.filter(o=>{const i=o.created_at?new Date(o.created_at):null;return(!r||!i||i>=r)&&(!t||!i||i<=t)})}}},c=r=>(x("data-v-bf42b401"),r=r(),b(),r),w={class:"py-2 bg-gray-900 text-gray-200 min-h-screen"},D={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},k={class:"bg-gray-800 shadow-xl rounded-lg p-6"},L={class:"flex justify-between items-center mb-6"},S={class:"text-3xl font-bold"},T={class:"flex space-x-4 items-center"},U=c(()=>e("label",{for:"fromDate",class:"text-sm font-medium"},"From:",-1)),V=c(()=>e("label",{for:"toDate",class:"text-sm font-medium"},"To:",-1)),A={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},C={class:"bg-gray-700 p-4 rounded-lg shadow"},F=c(()=>e("h2",{class:"text-xl font-bold mb-4"},"Referrers Leaderboard",-1)),I={key:0},N={key:1},j={key:2},B={class:"bg-gray-700 p-4 rounded-lg shadow"},E=c(()=>e("h2",{class:"text-xl font-bold mb-4"},"All Referrals",-1)),M={class:"w-full text-left text-sm"},O=c(()=>e("thead",{class:"bg-gray-800 text-gray-300"},[e("tr",null,[e("th",{class:"px-4 py-2"},"Parent User"),e("th",{class:"px-4 py-2"},"Referred User"),e("th",{class:"px-4 py-2"},"Created At")])],-1)),P={class:"px-4 py-2"},q={class:"px-4 py-2"},z={class:"px-4 py-2"};function G(r,t,o,i,d,_){return l(),a("div",w,[e("div",D,[e("div",k,[e("div",L,[e("h1",S,"Referrals pentru "+n(d.user),1),e("div",T,[U,u(e("input",{id:"fromDate",type:"date","onUpdate:modelValue":t[0]||(t[0]=s=>d.filter.from=s),class:"bg-gray-700 text-gray-200 px-3 py-1 rounded-md border border-gray-600"},null,512),[[f,d.filter.from]]),V,u(e("input",{id:"toDate",type:"date","onUpdate:modelValue":t[1]||(t[1]=s=>d.filter.to=s),class:"bg-gray-700 text-gray-200 px-3 py-1 rounded-md border border-gray-600"},null,512),[[f,d.filter.to]]),e("button",{onClick:t[2]||(t[2]=(...s)=>_.filterReferrals&&_.filterReferrals(...s)),class:"bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white"}," Filter ")])]),e("div",A,[e("div",C,[F,e("ul",null,[(l(!0),a(h,null,g(d.topReferrers,(s,p)=>(l(),a("li",{key:s.parent_user,class:"flex justify-between items-center p-2 rounded-md hover:bg-gray-600"},[e("span",null,[p===0?(l(),a("span",I,"🥇")):p===1?(l(),a("span",N,"🥈")):p===2?(l(),a("span",j,"🥉")):m("",!0),y(" "+n(s.parent_user),1)]),e("span",null,n(s.count)+" Referrals",1)]))),128))])]),e("div",B,[E,e("table",M,[O,e("tbody",null,[(l(!0),a(h,null,g(d.filteredList,s=>(l(),a("tr",{key:s.id,class:"hover:bg-gray-600"},[e("td",P,n(s.parent_user),1),e("td",q,n(s.referred_user),1),e("td",z,n(s.created_at?new Date(s.created_at).toLocaleDateString():"N/A"),1)]))),128))])])])])])])])}const K=v(R,[["render",G],["__scopeId","data-v-bf42b401"]]);export{K as default};
