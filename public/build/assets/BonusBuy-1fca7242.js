import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{e as a,F as d,h,f as c,a as e,o as n,t as i}from"./app-4093e6b1.js";const v={data(){return{bonusBuy:[],bonusBuyGames:[]}},async mounted(){await this.getLatestList(),this.updateTheListFromTimeToTime()},methods:{updateTableScroll(){var t=window.innerHeight,l=this.$el.querySelector(".slider"),o=(l.offsetHeight*2+t*2)/150;l.style.animationDuration=o+"s"},async getLatestList(){await axios.get("/api/bonus-buy").then(t=>{this.bonusBuy=t.data.bonusBuy,this.bonusBuyGames=t.data.bonusBuyGames}).catch(t=>{console.log(t)}),this.updateTableScroll()},async updateTheListFromTimeToTime(){setInterval(async()=>{await this.getLatestList()},5e3)}}},y={class:"table-container"},m=e("div",{class:"header"},[e("div",null,"#"),e("div",null,"Joc"),e("div",null,"Miza"),e("div",null,"Pret"),e("div",null,"Rezultat"),e("div",null,"Multi")],-1),p={key:0,class:"slider"},B={key:0,class:"table"};function b(t,l,o,f,u,T){return n(),a("div",y,[m,u.bonusBuyGames.length>1?(n(),a("div",p,[(n(!0),a(d,null,h(u.bonusBuyGames,(s,r)=>(n(),a(d,{key:r},[s.name?(n(),a("div",B,[e("div",null,i(r+1),1),e("div",null,i(s.name),1),e("div",null,i(s.stake),1),e("div",null,i(s.price),1),e("div",null,i(s.result),1),e("div",null,"x"+i(s.multiplier),1)])):c("",!0)],64))),128))])):c("",!0)])}const k=_(v,[["render",b]]);export{k as default};
