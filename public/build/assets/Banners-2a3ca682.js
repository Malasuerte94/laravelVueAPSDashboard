import{_ as m}from"./AppLayout-446d249f.js";import{q as d,o as l,c as o,b as e,h as f,s as b,F as g,x as _,t as c,k as p,f as x,w as y,a as w}from"./app-915fdde5.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-d172e1db.js";const v={data(){return{loading:!0,banner:{file:null,name:null},banners:[]}},async mounted(){await this.getBanners(),this.loading=!1},methods:{async getBanners(){await d.get("/api/banner").then(a=>{this.banners=a.data.banners}).catch(a=>{console.log(a)})},async uploadBanner(){this.loading=!0;let a=this.banner;await d.post("/api/banner",{name:a.name,image:a.file},{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{this.bonusHuntGames.push(t.data)}).catch(t=>{console.log(t)}),await this.getBanners(),this.loading=!1},async removeBanner(a){this.loading=!0,await d.delete("/api/banner/"+a).catch(t=>{console.log(t)}),await this.getBanners(),this.loading=!1},handleFileUpload(a){this.banner.file=a.target.files[0]},formatDateLabels(a){const t=new Date(a),i=t.getDate().toString().padStart(2,"0"),u=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getFullYear();return`${i}-${u}-${n}`}}},B={class:"p-6"},D={class:"flex justify-between gap-2"},C={key:0,class:"relative overflow-x-auto shadow-md sm:rounded-lg mt-6"},S={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},F={class:"p-2 table-cell text-left"},N={class:"p-2 table-cell text-left"},L={class:"p-2 table-cell text-left"},M=["src"],V={class:"p-2 table-cell text-left"},j={class:"p-2 table-cell text-left"},U=["onClick"];function $(a,t,i,u,n,r){return l(),o("div",B,[e("div",D,[e("input",{type:"file",id:"file",onChange:t[0]||(t[0]=s=>r.handleFileUpload(s)),class:"input-primary",placeholder:"Banner"},null,32),f(e("input",{type:"text",id:"name_banner","onUpdate:modelValue":t[1]||(t[1]=s=>n.banner.name=s),class:"input-primary",placeholder:"Nume banner"},null,512),[[b,n.banner.name]]),e("button",{onClick:t[2]||(t[2]=(...s)=>r.uploadBanner&&r.uploadBanner(...s)),type:"button",tabindex:"-1",class:"justify-center self-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"}," Adauga ")]),n.banners?(l(),o(g,{key:0},[n.loading?p("",!0):(l(),o("div",C,[e("table",S,[t[4]||(t[4]=e("thead",{class:"p-6 text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"},[e("tr",{class:"table-row"},[e("th",{class:"p-2 table-cell text-left"},"ID"),e("th",{class:"p-2 table-cell text-left"},"Nume"),e("th",{class:"p-2 table-cell text-left"},"Imagine"),e("th",{class:"p-2 table-cell text-left"},"Data"),e("th",{class:"p-2 table-cell text-left"})])],-1)),e("tbody",null,[(l(!0),o(g,null,_(n.banners,(s,h)=>(l(),o("tr",{class:"p-2 bg-white border-b dark:bg-gray-900 dark:border-gray-700",key:s.id+h},[e("td",F,c(s.id),1),e("td",N,c(s.name),1),e("td",L,[e("img",{class:"banner",src:s.image},null,8,M)]),e("td",V,c(r.formatDateLabels(s.created_at)),1),e("td",j,[e("button",{type:"button",tabindex:"-1",onClick:E=>r.removeBanner(s.id),class:"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"},t[3]||(t[3]=[e("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),8,U)])]))),128))])])]))],64)):p("",!0)])}const I=k(v,[["render",$]]),T={class:"py-12"},q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},A={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},J={__name:"Banners",setup(a){return(t,i)=>(l(),x(m,{title:"Dashboard"},{default:y(()=>[e("div",T,[e("div",q,[e("div",A,[w(I)])])])]),_:1}))}};export{J as default};
