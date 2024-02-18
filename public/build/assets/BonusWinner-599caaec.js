import{D as l,e as o,a as s,t as e,g as n,f as r,o as c}from"./app-ad1c3a79.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const a={props:["id"],data(){return{winner:null,list_results:null}},async mounted(){await this.pollForWinner()},methods:{async pollForWinner(){this.winner=null,this.list_results=null;try{const t=await l.get("/api/get-bonus-winner/"+this.id);t.status===204?setTimeout(this.pollForWinner,5e3):t.status===200&&(this.winner=t.data.winners,this.list_results=t.data.list_results,setTimeout(()=>{this.winner=null,this.pollForWinner()},3e4))}catch(t){console.error("Error polling for winner:",t)}}}},u={key:0,class:"box-winners"},d=s("div",{class:"title"},"Rezultate Listă",-1),h={class:"box-list"},p={class:"row"},v=s("div",null,"Rezultat",-1),w={class:"row"},m=s("div",null,"Cel mai mare X",-1),g={class:"row"},W=s("div",null,"Cel mai mic X",-1),f={class:"row"},x=s("div",null,"Joc Câștigător",-1),k=s("div",{class:"title"},"Câștigători",-1),b={class:"box-results"},C={class:"row-1"},M=s("div",{class:"title"},"Rezultat",-1),y={class:"wiiner"},B=["src"],E={class:"pick"},F={class:"row-2"},X=s("div",{class:"title"},"Cel mai mare X",-1),z={class:"wiiner"},L=["src"],N={class:"pick"},R={class:"row-3"},T=s("div",{class:"title"},"Cel mai mic X",-1),V={class:"wiiner"},D=["src"],I={class:"pick"},J={class:"row-4"},S=s("div",{class:"title"},"Joc Câștigător",-1),j={class:"wiiner"},q=["src"],A={class:"pick"};function G(t,H,K,O,i,P){return i.list_results?(c(),o("div",u,[d,s("div",h,[s("div",p,[v,s("div",null,e(i.list_results.result)+" LEI",1)]),s("div",w,[m,s("div",null,e(i.list_results.biggestMultiplier)+" x",1)]),s("div",g,[W,s("div",null,e(i.list_results.lowestMultiplier)+" x",1)]),s("div",f,[x,s("div",null,e(i.list_results.gameWinner),1)])]),k,s("div",b,[s("div",C,[M,s("div",y,[s("img",{class:"avatar",src:i.winner.resultWinner.user.profile_photo_path,alt:""},null,8,B),n(e(i.winner.resultWinner.user.name),1)]),s("div",E,e(i.winner.resultWinner.pick)+" LEI",1)]),s("div",F,[X,s("div",z,[s("img",{class:"avatar",src:i.winner.biggestMultiplierWinner.user.profile_photo_path,alt:""},null,8,L),n(e(i.winner.biggestMultiplierWinner.user.name),1)]),s("div",N,e(i.winner.biggestMultiplierWinner.pick)+" x",1)]),s("div",R,[T,s("div",V,[s("img",{class:"avatar",src:i.winner.lowestMultiplierWinner.user.profile_photo_path,alt:""},null,8,D),n(e(i.winner.lowestMultiplierWinner.user.name),1)]),s("div",I,e(i.winner.lowestMultiplierWinner.pick)+" x",1)]),s("div",J,[S,s("div",j,[s("img",{class:"avatar",src:i.winner.gameWinnerWinner.user.profile_photo_path,alt:""},null,8,q),n(e(i.winner.gameWinnerWinner.user.name),1)]),s("div",A,e(i.list_results.gameWinner),1)])])])):r("",!0)}const Y=_(a,[["render",G]]);export{Y as default};