import{_ as s}from"./_plugin-vue_export-helper-c27b6911.js";import{e as r,t as a,o}from"./app-418be4dd.js";const m={data(){return{stream:[]}},async mounted(){await this.getLatestStream(),this.updateTheStreamFromTimeToTime()},methods:{async getLatestStream(){await axios.get("/api/stream").then(t=>{this.stream=t.data.stream}).catch(t=>{console.log(t)})},async updateTheStreamFromTimeToTime(){setInterval(async()=>{await this.getLatestStream()},5e3)}}},i={class:"text-white"};function n(t,c,_,p,e,d){return o(),r("div",i,a(e.stream.casino)+" - "+a(e.stream.deposit)+" LEI ",1)}const u=s(m,[["render",n]]);export{u as default};