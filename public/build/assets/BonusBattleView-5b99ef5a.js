import{S}from"./SvgBh-861a82bc.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{e as a,a as t,Y as n,t as i,g as m,n as g,F as h,h as p,f as u,o as r}from"./app-125d3dc6.js";const w={components:{SvgBh:S},props:["id"],data(){return{loading:!0,settings:{},bonusBattleInfo:[],bonusBattleConcurrents:[],bonusBattleStage:[],bonusBattleBracket:[],bonusBattleScores:[],bonusBattleWinner:[],bonusBattleAllConcurrents:[],bonusBattleAllBracketsCurentStage:[],battleWinner:[],avgScore:0,bestScore:0,totalProfit:0,totalCost:0,isUpdating:!1,vsImageUrl:"/storage/assets/images/vs.gif"}},computed:{totalConcurrents(){return this.bonusBattleAllConcurrents.length},totalBalanceScore(){return((this.totalCost+this.totalProfit)/this.totalCost).toFixed(2)}},async mounted(){await this.getSettings(),await this.getActiveBonusBattle(),this.loading=!1,await this.updateTheListFromTimeToTime()},methods:{async getActiveBonusBattle(){await axios.get("/api/bonus-battle-info/"+this.id).then(l=>{this.bonusBattleInfo=l.data.battle,this.bonusBattleConcurrents=l.data.concurrents,this.bonusBattleAllConcurrents=l.data.all_concurrents,this.bonusBattleAllBracketsCurentStage=l.data.stage_brackets,this.bonusBattleStage=l.data.stage,this.bonusBattleBracket=l.data.bracket,this.bonusBattleScores=l.data.current_score,this.bonusBattleWinner=l.data.winner,this.battleWinner=l.data.battle_winner,this.avgScore=l.data.avg_score.toFixed(2),this.bestScore=l.data.best_score.toFixed(2),this.totalProfit=l.data.total_profit,this.totalCost=l.data.total_cost}).catch(l=>{console.log(l)})},async getSettings(){let l="obs_bonus_battle";try{const o=await axios.get("/api/get-setting-public",{params:{setting_name:l,user_id:this.id}});o.data.setting_value&&(this.settings=JSON.parse(o.data.setting_value)),console.log(this.settings)}catch(o){console.error(`Error loading setting "${l}":`,o),this.error=`Failed to load setting: ${l}`}},async updateTheListFromTimeToTime(){setInterval(async()=>{this.isUpdating||(this.isUpdating=!0,await this.getSettings(),await this.getActiveBonusBattle(),this.isUpdating=!1)},8e3)},getConcurrentScores(l,o){if(!l||!o)return[];const _=[];for(let c=0;c<this.bonusBattleScores.length;c++){const e=this.bonusBattleScores[c];e.bonus_concurrent_id===l&&e.bracket_id===o&&_.push(e)}return _},getGameThumbnail(l){return l?`/storage/games/${l}`:""}}},k={class:"table-container"},F={class:"header-list"},z={class:"bonus-details"},A={class:"list-cost"},T={class:"list-opened"},P={class:"details"},W={key:0,class:"main-battle"},N={class:"battle flex gap-2 align-middle items-center justify-center relative"},I={class:"flex flex-col gap-2 mt-2"},U={class:g("concurrent flex rounded-md text-white ")},V=["src"],G={class:"px-2 py-1"},j={class:"px-2 py-1"},E={class:"vs-symbol flex justify-center items-center text-2xl"},L=["src"],O={key:1,class:"w-full p-4 text-white shadow-lg flex space-x-4 winner-battle"},R={class:"text-center w-40 flex flex-col justify-center"},H=["src"],J={class:"flex-grow"},D={class:"w-full text-sm text-gray-200"},M={class:"p-1 text-right"},Y={class:"second-battle"},q={key:0,class:"bracket-container py-2 px-2"},K={class:"shadow-md py-2 px-2"},Q={class:"overflow-x-auto"},X={class:"border border-black px-1 py-1 shrink w-0"},Z={class:"border border-black px-2 py-1"},$={class:"border border-black px-2 py-1"};function tt(l,o,_,c,e,d){var x;return e.loading?u("",!0):(r(),a("div",{key:0,class:"table-list",ref:"viewport",style:n({"background-color":e.settings.tableBgColor,border:e.settings.borderEnabled?e.settings.borderWidth+"px "+e.settings.borderColor+" solid":"unset"})},[t("div",k,[t("div",F,[t("div",{class:"header-list-title",style:n({"background-color":e.settings.headerBgColor,color:e.settings.headerFontColor,"font-size":e.settings.headerFontSize+"px"})},[t("span",null,i(e.bonusBattleInfo.title),1),t("div",z,[t("div",A,[o[0]||(o[0]=m("Miză ")),t("span",null,i(e.bonusBattleInfo.stake)+" "+i(e.settings.currency),1)]),t("div",T,[t("div",P,[t("span",null,i(d.totalConcurrents)+" Jocuri",1)])])])],4),t("div",{class:"header-details",style:n({"background-color":e.settings.subheaderBgColor,color:e.settings.subheaderFontColor,"font-size":e.settings.subheaderFontSize+"px"})},[t("div",{class:"text-center uppercase text-sm stage font-bold flex justify-center items-center",style:n({"background-color":e.settings.subheaderBgColorRound,color:e.settings.subheaderFontColorRound})},i(e.bonusBattleStage.name),5),t("div",null,[t("span",null,"AVG: "+i(e.avgScore),1)]),t("div",null,[t("span",null,"TOP: "+i(e.bestScore),1)]),t("div",null,[t("span",{class:g({"text-red-500":e.totalProfit<0,"text-green-500":e.totalProfit>=0})},i(e.totalProfit)+" "+i(e.settings.currency),3)])],4)]),(x=e.battleWinner)!=null&&x.id?(r(),a("div",O,[t("div",R,[e.battleWinner.game.image?(r(),a("img",{key:0,src:d.getGameThumbnail(e.battleWinner.game.image),alt:"Game Thumbnail",class:"w-100 auto mx-auto object-cover rounded-lg"},null,8,H)):u("",!0)]),t("div",J,[t("div",{class:"mb-4",style:n({"font-size":e.settings.headerFontSize*1.2+"px"})},[o[4]||(o[4]=t("span",{class:"font-bold mb-2"},"Winner Winner!",-1)),t("p",null,[o[2]||(o[2]=t("span",{class:"font-bold"},"Total Scor:",-1)),m(" "+i(d.totalBalanceScore),1)]),t("p",null,[o[3]||(o[3]=t("span",{class:"font-bold"},"Pentru User:",-1)),m(" "+i(e.battleWinner.for_user||"N/A"),1)])],4),t("div",{class:"bg-gray-800 rounded-md p-2",style:n({"background-color":e.settings.headerBgColor,color:e.settings.headerFontColor,"font-size":e.settings.headerFontSize+"px"})},[t("table",D,[o[7]||(o[7]=t("thead",null,[t("tr",null,[t("th",{class:"text-left p-1 border-b border-gray-700"},"Battle Info"),t("th",{class:"text-right p-1 border-b border-gray-700"},"LEI")])],-1)),t("tbody",null,[t("tr",null,[o[5]||(o[5]=t("td",{class:"p-1"},"Battle Cost",-1)),t("td",M,i(e.totalCost),1)]),t("tr",null,[o[6]||(o[6]=t("td",{class:"p-1"},"Battle Profit",-1)),t("td",{class:g(["p-1 text-right",{"text-green-400":e.totalProfit>0,"text-red-400":e.totalProfit<0}])},i(e.totalProfit),3)])])])],4)])])):(r(),a("div",W,[t("div",N,[(r(!0),a(h,null,p(e.bonusBattleConcurrents,(s,f)=>{var y,B;return r(),a("div",{key:(s==null?void 0:s.id)||f,class:"w-100 grow flex-col flex gap-2 px-2 max-w-[190px]"},[t("div",I,[t("div",U,[t("img",{src:d.getGameThumbnail(s.game.image),alt:"Game Thumbnail",class:"w-[100px] rounded-lg"},null,8,V)]),(s==null?void 0:s.for_user)!==null?(r(),a("div",{key:0,class:"from-user",style:n({"background-color":e.settings.tableParticipantBgColor,color:e.settings.tableParticipantFontColor,"font-size":e.settings.tableParticipantFontSize+"px"})},i((s==null?void 0:s.for_user)||"N/A"),5)):u("",!0)]),d.getConcurrentScores(s==null?void 0:s.id,(y=e.bonusBattleBracket)==null?void 0:y.id).length>0?(r(),a("table",{key:0,style:n({color:e.settings.tableScoresFontColor,"font-size":e.settings.tableScoresFontSize+"px"}),class:"table-auto mb-2 w-full border-collapse border border-gray-700 rounded-md overflow-hidden"},[t("thead",null,[t("tr",{class:"bg-black text-white uppercase",style:n({"background-color":e.settings.tableScoresLabelBgColor})},o[1]||(o[1]=[t("th",{class:"border border-gray-700 px-1 py-1"},"Cost",-1),t("th",{class:"border border-gray-700 px-1 py-1"},"Rezultat",-1),t("th",{class:"border border-gray-700 px-1 py-1"},"Scor",-1)]),4)]),t("tbody",null,[(r(!0),a(h,null,p(d.getConcurrentScores(s==null?void 0:s.id,(B=e.bonusBattleBracket)==null?void 0:B.id),(b,v)=>(r(),a("tr",{key:b.id||v,style:n({"background-color":e.settings.tableScoresBgColor})},[t("td",G,i(b.cost_buy),1),t("td",j,i(b.result_buy),1),t("td",{class:g(["px-2 py-1 font-bold",b.score<1?"text-red-500":"text-green-500"])},i(b.score.toFixed(2)),3)],4))),128))])],4)):u("",!0)])}),128)),t("div",E,[t("img",{src:this.vsImageUrl,alt:"vs"},null,8,L)])])])),t("div",Y,[e.bonusBattleAllBracketsCurentStage.length>0?(r(),a("div",q,[(r(!0),a(h,null,p(e.bonusBattleAllBracketsCurentStage,s=>(r(),a("div",{key:s.id,class:"bracket-item"},[t("div",{class:g(["participant",{loser:s.winner!==s.participant_a&&s.winner!=="N/A"}])},i(s.participant_a)+" - "+i(s.participant_a_score),3),o[8]||(o[8]=t("div",{class:"vs"},"VS",-1)),t("div",{class:g(["participant",{loser:s.winner!==s.participant_b&&s.winner!=="N/A"}])},i(s.participant_b)+" - "+i(s.participant_b_score),3)]))),128))])):u("",!0),t("div",K,[t("div",Q,[t("table",{class:"table-auto w-full text-gray-200",style:n({"font-size":e.settings.tableBodyFontSize+"px"})},[t("tbody",null,[(r(!0),a(h,null,p(e.bonusBattleAllConcurrents,(s,f)=>(r(),a("tr",{key:s==null?void 0:s.id,style:n({"background-color":f%2===0?e.settings.tableHistoryBgOddColor:e.settings.tableHistoryBgEvenColor})},[t("td",X,i(s!=null&&s.is_eliminated?"❌":"✅"),1),t("td",Z,i((s==null?void 0:s.game.name)||"N/A"),1),t("td",$,i((s==null?void 0:s.for_user)||"N/A"),1)],4))),128))])],4)])])])])],4))}const ot=C(w,[["render",tt]]);export{ot as default};
