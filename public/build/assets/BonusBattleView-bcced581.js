import{S as w}from"./SvgBh-d5ec8ec4.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{N as C,e as i,a as t,b as k,g as m,t as o,n as d,F as g,h as c,f as u,o as r}from"./app-b54f83c0.js";const A={components:{SvgBh:w},props:["id"],data(){return{loading:!0,bonusBattleInfo:[],bonusBattleConcurrents:[],bonusBattleStage:[],bonusBattleBracket:[],bonusBattleScores:[],bonusBattleWinner:[],bonusBattleAllConcurrents:[],bonusBattleAllBracketsCurentStage:[],battleWinner:[],avgScore:0,bestScore:0,totalProfit:0,totalCost:0,isUpdating:!1,vsImageUrl:"/storage/assets/images/vs.gif"}},computed:{totalConcurrents(){return this.bonusBattleAllConcurrents.length},totalBalanceScore(){return((this.totalCost+this.totalProfit)/this.totalCost).toFixed(2)}},async mounted(){await this.getActiveBonusBattle(),this.loading=!1,await this.updateTheListFromTimeToTime()},methods:{async getActiveBonusBattle(){await axios.get("/api/bonus-battle-info/"+this.id).then(a=>{this.bonusBattleInfo=a.data.battle,this.bonusBattleConcurrents=a.data.concurrents,this.bonusBattleAllConcurrents=a.data.all_concurrents,this.bonusBattleAllBracketsCurentStage=a.data.stage_brackets,this.bonusBattleStage=a.data.stage,this.bonusBattleBracket=a.data.bracket,this.bonusBattleScores=a.data.current_score,this.bonusBattleWinner=a.data.winner,this.battleWinner=a.data.battle_winner,this.avgScore=a.data.avg_score.toFixed(2),this.bestScore=a.data.best_score.toFixed(2),this.totalProfit=a.data.total_profit,this.totalCost=a.data.total_cost}).catch(a=>{console.log(a)})},async updateTheListFromTimeToTime(){setInterval(async()=>{this.isUpdating||(this.isUpdating=!0,await this.getActiveBonusBattle(),this.isUpdating=!1)},8e3)},getConcurrentScores(a,l){if(!a||!l)return[];const h=[];for(let _=0;_<this.bonusBattleScores.length;_++){const e=this.bonusBattleScores[_];e.bonus_concurrent_id===a&&e.bracket_id===l&&h.push(e)}return h},getGameThumbnail(a){return a?`/storage/games/${a}`:""}}},T={key:0,class:"table",ref:"viewport"},P={class:"table-container"},N={class:"header-list"},W={class:"header-list-title"},F={class:"img-list"},V={class:"bonus-details"},U={class:"list-cost"},G={class:"list-opened"},I={class:"details"},j={class:"header-details"},L={class:"text-center uppercase text-sm stage font-bold flex justify-center items-center"},z={key:0,class:"main-battle"},E={class:"battle flex gap-2 align-middle items-center justify-center relative"},D={class:"flex flex-col gap-2 mt-2"},J={class:d("concurrent flex rounded-md text-white ")},M=["src"],O={key:0,class:"from-user"},R={key:0,class:"table-auto mb-2 w-full text-sm border-collapse border border-gray-700 rounded-md overflow-hidden"},q={class:"border border-gray-700 px-2 py-1"},H={class:"border border-gray-700 px-2 py-1"},K={class:"vs-symbol flex justify-center items-center text-2xl"},Q=["src"],X={key:1,class:"w-full p-4 text-white shadow-lg flex space-x-4 winner-battle"},Y={class:"text-center w-40 flex flex-col justify-center"},Z=["src"],$={class:"flex-grow"},tt={class:"mb-4"},st={class:"text-md"},et={class:"text-md"},lt={class:"bg-gray-800 rounded-md p-2"},at={class:"w-full text-sm text-gray-200"},ot={class:"p-1 text-right"},it={class:"second-battle"},rt={key:0,class:"bracket-container py-2 px-2"},dt={class:"shadow-md py-2 px-2"},nt={class:"overflow-x-auto"},bt={class:"table-auto w-full text-sm text-gray-200"},ut={class:"border border-black px-1 py-1 shrink w-0"},_t={class:"border border-black px-2 py-1"},gt={class:"border border-black px-2 py-1"};function ct(a,l,h,_,e,n){var f;const B=C("SvgBh");return e.loading?u("",!0):(r(),i("div",T,[t("div",P,[t("div",N,[t("div",W,[t("span",F,[k(B)]),l[1]||(l[1]=t("span",null,"Bonus Battle",-1)),t("div",V,[t("div",U,[l[0]||(l[0]=m("Miză ")),t("span",null,o(e.bonusBattleInfo.stake)+" lei",1)]),t("div",G,[t("div",I,[t("span",null,o(n.totalConcurrents)+" Jocuri",1)])])])]),t("div",j,[t("div",L,o(e.bonusBattleStage.name),1),t("div",null,[t("span",null,"AVG: "+o(e.avgScore),1)]),t("div",null,[t("span",null,"TOP: "+o(e.bestScore),1)]),t("div",null,[t("span",{class:d({"text-red-500":e.totalProfit<0,"text-green-500":e.totalProfit>=0})},o(e.totalProfit)+" lei ",3)])])]),(f=e.battleWinner)!=null&&f.id?(r(),i("div",X,[t("div",Y,[e.battleWinner.game.image?(r(),i("img",{key:0,src:n.getGameThumbnail(e.battleWinner.game.image),alt:"Game Thumbnail",class:"w-100 auto mx-auto object-cover rounded-lg"},null,8,Z)):u("",!0)]),t("div",$,[t("div",tt,[l[5]||(l[5]=t("span",{class:"text-md font-bold mb-2"},"Winner Winner!",-1)),t("p",st,[l[3]||(l[3]=t("span",{class:"font-bold"},"Total Scor:",-1)),m(" "+o(n.totalBalanceScore),1)]),t("p",et,[l[4]||(l[4]=t("span",{class:"font-bold"},"Pentru User:",-1)),m(" "+o(e.battleWinner.for_user||"N/A"),1)])]),t("div",lt,[t("table",at,[l[8]||(l[8]=t("thead",null,[t("tr",null,[t("th",{class:"text-left p-1 border-b border-gray-700"},"Battle Info"),t("th",{class:"text-right p-1 border-b border-gray-700"},"LEI")])],-1)),t("tbody",null,[t("tr",null,[l[6]||(l[6]=t("td",{class:"p-1"},"Battle Cost",-1)),t("td",ot,o(e.totalCost),1)]),t("tr",null,[l[7]||(l[7]=t("td",{class:"p-1"},"Battle Profit",-1)),t("td",{class:d(["p-1 text-right",{"text-green-400":e.totalProfit>0,"text-red-400":e.totalProfit<0}])},o(e.totalProfit),3)])])])])])])):(r(),i("div",z,[t("div",E,[(r(!0),i(g,null,c(e.bonusBattleConcurrents,(s,p)=>{var x,v;return r(),i("div",{key:(s==null?void 0:s.id)||p,class:"w-100 grow flex-col flex gap-2 px-2 max-w-[190px]"},[t("div",D,[t("div",J,[t("img",{src:n.getGameThumbnail(s.game.image),alt:"Game Thumbnail",class:"w-[100px] rounded-lg"},null,8,M)]),(s==null?void 0:s.for_user)!==null?(r(),i("div",O,o((s==null?void 0:s.for_user)||"N/A"),1)):u("",!0)]),n.getConcurrentScores(s==null?void 0:s.id,(x=e.bonusBattleBracket)==null?void 0:x.id).length>0?(r(),i("table",R,[l[2]||(l[2]=t("thead",null,[t("tr",{class:"bg-black text-white uppercase text-xs"},[t("th",{class:"border border-gray-700 px-1 py-1"},"Cost"),t("th",{class:"border border-gray-700 px-1 py-1"},"Rezultat"),t("th",{class:"border border-gray-700 px-1 py-1"},"Scor")])],-1)),t("tbody",null,[(r(!0),i(g,null,c(n.getConcurrentScores(s==null?void 0:s.id,(v=e.bonusBattleBracket)==null?void 0:v.id),(b,y)=>(r(),i("tr",{key:b.id||y,class:"border-t border-gray-700 bg-gray-700"},[t("td",q,o(b.cost_buy),1),t("td",H,o(b.result_buy),1),t("td",{class:d(["border border-gray-700 px-2 py-1 font-bold",b.score<1?"text-red-500":"text-green-500"])},o(b.score.toFixed(2)),3)]))),128))])])):u("",!0)])}),128)),t("div",K,[t("img",{src:this.vsImageUrl,alt:"vs"},null,8,Q)])])])),t("div",it,[e.bonusBattleAllBracketsCurentStage.length>0?(r(),i("div",rt,[(r(!0),i(g,null,c(e.bonusBattleAllBracketsCurentStage,s=>(r(),i("div",{key:s.id,class:"bracket-item"},[t("div",{class:d(["participant",{loser:s.winner!==s.participant_a&&s.winner!=="N/A"}])},o(s.participant_a),3),l[9]||(l[9]=t("div",{class:"vs"},"VS",-1)),t("div",{class:d(["participant",{loser:s.winner!==s.participant_b&&s.winner!=="N/A"}])},o(s.participant_b),3)]))),128))])):u("",!0),t("div",dt,[t("div",nt,[t("table",bt,[t("tbody",null,[(r(!0),i(g,null,c(e.bonusBattleAllConcurrents,(s,p)=>(r(),i("tr",{key:s==null?void 0:s.id,class:d(p%2===0?"bg-gray-900":"bg-gray-800")},[t("td",ut,o(s!=null&&s.is_eliminated?"❌":"✅"),1),t("td",_t,o((s==null?void 0:s.game.name)||"N/A"),1),t("td",gt,o((s==null?void 0:s.for_user)||"N/A"),1)],2))),128))])])])])])])],512))}const ft=S(A,[["render",ct]]);export{ft as default};
