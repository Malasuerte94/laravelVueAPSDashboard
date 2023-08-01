import{_ as k}from"./AppLayout-5269494e.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{C as n,o as i,e as b,a as e,q as d,D as l,F as y,h as x,t as _,f as B,b as p,g as w,c as v,w as h}from"./app-418be4dd.js";const G={};function U(t,r){return null}const L=m(G,[["render",U]]),M={data(){return{bonusBuy:[],bonusBuyGames:[],timerUpdateBonusBuy:!1,timerUpdateBonusBuyGames:!1,updateListTimer:5}},mounted(){this.getLatestList()},methods:{async getLatestList(){await n.get("/api/bonus-buy").then(t=>{this.bonusBuy=t.data.bonusBuy,this.bonusBuyGames=t.data.bonusBuyGames}).catch(t=>{console.log(t)})},checkModifiedFields(t,r){this.calcCurentRowMultiplier(t,r),this.startTimerUpdateBonusBuyGames()},async resetBonusBuy(){await n.post("/api/bonus-buy").then(t=>{this.bonusBuy=t.data.bonusBuy,this.bonusBuyGames=t.data.bonusBuyGames}).catch(t=>{console.log(t)})},async createNewBonusBuyGameRow(){this.forceUpdateBonusBuyGames();let t=this.bonusBuy.id;await n.post("/api/bonus-buy-games",{bonusBuyId:t}).then(r=>{this.bonusBuyGames.push(r.data)}).catch(r=>{console.log(r)}),await this.getLatestList()},async forceUpdateBonusBuyGames(){let t=this.bonusBuyGames;await n.put("/api/bonus-buy-games",{games:t}).then(function(r){console.log(r)}).catch(function(r){console.log(r)})},async removeBonusBuyGameRow(t){await n.delete("/api/bonus-buy-games/"+t).then(r=>{this.bonusBuyGames=this.bonusBuyGames.filter(g=>g.id!=t)}).catch(r=>{console.log(r)})},async updateBonusBuyGames(){let t=this.bonusBuyGames;await n.put("/api/bonus-buy-games",{games:t}).then(function(r){console.log(r)}).catch(function(r){console.log(r)}),this.timerUpdateBonusBuyGames=!1,await getLatestList()},async updateBonusBuy(){let t=this.bonusBuy;await n.patch("/api/bonus-buy",{bonusBuy:t}).then(function(r){console.log(r)}).catch(function(r){console.log(r)}),this.timerUpdateBonusBuy=!1},startTimerUpdateBonusBuy(){this.timerUpdateBonusBuy!=!0&&(this.timerUpdateBonusBuy=!0,setTimeout(this.updateBonusBuy,5e3))},startTimerUpdateBonusBuyGames(){this.timerUpdateBonusBuyGames!=!0&&(this.timerUpdateBonusBuyGames=!0,setTimeout(this.updateBonusBuyGames,5e3))},calcCurentRowMultiplier(t,r){t.name==""||t.stake==""||t.price==""||t.result==""||(this.bonusBuyGames[r].multiplier=Math.round(t.result/t.stake,2))}}},V=e("h5",{class:"text-lg font-bold"},"Bonus Buy - List",-1),C={class:"grid grid-cols-[minmax(200px,_1fr)_120px] gap-2 mt-2 mb-2"},S=e("div",{class:"grid grid-cols-[30px_minmax(200px,_1fr)_120px_120px_120px_120px_80px] gap-2 mt-4 text-center"},[e("div",{class:"w-8 h-8 justify-center self-center text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-800"}," nr "),e("div",null,"Game"),e("div",null,"Stake"),e("div",null,"Buy"),e("div",null,"Result"),e("div",null,"Multiplier"),e("div",null,"Remove")],-1),$={class:"w-8 h-8 justify-center self-center text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-800"},T=["onInput","onUpdate:modelValue"],N=["onInput","onUpdate:modelValue"],R=["onInput","onUpdate:modelValue"],I=["onInput","onUpdate:modelValue"],D=["onUpdate:modelValue"],F=["onClick"],j=e("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),A=[j],P={class:"flex mt-8 center justify-center"};function E(t,r,g,f,u,o){return i(),b("div",null,[e("div",null,[V,e("div",C,[d(e("input",{onInput:r[0]||(r[0]=(...s)=>o.startTimerUpdateBonusBuy&&o.startTimerUpdateBonusBuy(...s)),type:"text",id:"bonus_buy_name","onUpdate:modelValue":r[1]||(r[1]=s=>u.bonusBuy.name=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Nume Lista"},null,544),[[l,u.bonusBuy.name]]),e("button",{onClick:r[2]||(r[2]=(...s)=>o.resetBonusBuy&&o.resetBonusBuy(...s)),type:"button",tabindex:"-1",class:"justify-center self-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"},"CLEAR")]),u.bonusBuyGames?(i(),b(y,{key:0},[S,(i(!0),b(y,null,x(u.bonusBuyGames,(s,c)=>(i(),b("div",{key:c,class:"grid grid-cols-[30px_minmax(200px,_1fr)_120px_120px_120px_120px_40px] gap-2 mt-4"},[e("div",$,_(c),1),e("div",null,[d(e("input",{onInput:a=>o.checkModifiedFields(s,c),"onUpdate:modelValue":a=>s.name=a,type:"text",id:"name",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Game Name"},null,40,T),[[l,s.name]])]),e("div",null,[d(e("input",{onInput:a=>o.checkModifiedFields(s,c),"onUpdate:modelValue":a=>s.stake=a,type:"number",id:"stake",class:"text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Stake"},null,40,N),[[l,s.stake]])]),e("div",null,[d(e("input",{onInput:a=>o.checkModifiedFields(s,c),"onUpdate:modelValue":a=>s.price=a,type:"number",id:"price",class:"text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Price"},null,40,R),[[l,s.price]])]),e("div",null,[d(e("input",{onInput:a=>o.checkModifiedFields(s,c),"onUpdate:modelValue":a=>s.result=a,type:"number",id:"result",class:"text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Result"},null,40,I),[[l,s.result]])]),e("div",null,[d(e("input",{disabled:"","onUpdate:modelValue":a=>s.multiplier=a,type:"number",id:"multiplier",class:"text-center disabled:opacity-75 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Multiplier"},null,8,D),[[l,s.multiplier]])]),e("button",{type:"button",tabindex:"-1",onClick:a=>o.removeBonusBuyGameRow(s.id),class:"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"},A,8,F)]))),128)),e("div",P,[e("button",{onClick:r[3]||(r[3]=(...s)=>o.createNewBonusBuyGameRow&&o.createNewBonusBuyGameRow(...s)),type:"button",class:"w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"},"+ Game")])],64)):B("",!0)])])}const W=m(M,[["render",E]]),q={data(){return{stream:[]}},mounted(){this.getLatestStream()},methods:{async getLatestStream(){await n.get("/api/stream").then(t=>{this.stream=t.data.stream}).catch(t=>{console.log(t)})},async updateStream(){await n.patch("/api/stream/update",{id:this.stream.id,deposit:this.stream.deposit,casino:this.stream.casino}).then(t=>{this.stream=t.data.stream}).catch(t=>{console.log(t)}),await this.getLatestStream()},async createNewStream(){await n.post("/api/stream/new").then(t=>{this.stream=t.data.stream}).catch(t=>{console.log(t)}),await this.getLatestStream()}}},z={class:"grid grid-cols-3 gap-2"},H=e("label",{for:"deposit",class:"block mb-2 text-sm font-medium text-gray-900"},"Deposit",-1),J=e("label",{for:"casino",class:"block mb-2 text-sm font-medium text-gray-900"},"Casino",-1),K={class:"self-end"};function O(t,r,g,f,u,o){return i(),b("div",null,[e("div",z,[e("div",null,[H,d(e("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>u.stream.deposit=s),type:"text",id:"deposit",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Depus în lei"},null,512),[[l,u.stream.deposit]])]),e("div",null,[J,d(e("input",{"onUpdate:modelValue":r[1]||(r[1]=s=>u.stream.casino=s),type:"text",id:"casino",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Nume Casino"},null,512),[[l,u.stream.casino]])]),e("div",K,[e("button",{type:"button",onClick:r[2]||(r[2]=(...s)=>o.updateStream&&o.updateStream(...s)),class:"w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"},"Update")])])])}const Q=m(q,[["render",O]]),X={class:"p-6 bg-white border-b border-gray-200"},Y=e("div",{class:"mt-2 text-2xl"}," Welcome to your APS Dashboard ",-1),Z=e("div",{class:"mt-2 text-gray-500"},[w(" Acest program a fost dezvoltat de "),e("a",{target:"blank",href:"https://www.youtube.com/@MalaTheMan"},"@MalaTheMan")],-1),ee={class:"bg-gray-200 bg-opacity-25 grid grid-cols-1"},te={class:"p-6"},re={class:"p-6"},se=e("div",{class:"p-6 border-t border-gray-200 md:border-l"}," Bonus Hunt (soon) ",-1),oe={__name:"Welcome",setup(t){return(r,g)=>(i(),b("div",null,[e("div",X,[e("div",null,[p(L,{class:"block h-12 w-auto"})]),Y,Z]),e("div",ee,[e("div",te,[p(Q)]),e("div",re,[p(W)]),se])]))}},ae=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dashboard APS ",-1),ne={class:"py-12"},ue={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},de={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},be={__name:"Dashboard",setup(t){return(r,g)=>(i(),v(k,{title:"Dashboard"},{header:h(()=>[ae]),default:h(()=>[e("div",ne,[e("div",ue,[e("div",de,[p(oe)])])])]),_:1}))}};export{be as default};