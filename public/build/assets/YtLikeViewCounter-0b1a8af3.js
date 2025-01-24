import{_ as r}from"./_plugin-vue_export-helper-c27b6911.js";import{e as l,a as t,n as o,t as n,F as c,o as u}from"./app-4937bbbf.js";const h={props:["id"],data(){return{loading:!0,ytLink:[],youtubeData:{views:0,likes:0},prevViews:0,prevLikes:0,intervalId:null,refresh:12e4}},async mounted(){await this.getYoutubeLink(),await this.scrapYtData(),this.loading=!1,this.intervalId=setInterval(async()=>{await this.scrapYtData()},this.refresh)},beforeDestroy(){this.intervalId&&clearInterval(this.intervalId)},methods:{async getYoutubeLink(){await axios.get("/api/youtube-link/"+this.id).then(e=>{this.ytLink=e.data.youtube,console.log(this.ytLink)}).catch(e=>{console.log(e)})},async scrapYtData(){var e,i;this.error=null;try{const s=await axios.post("/api/get-youtube-data",{url:this.ytLink.url});s.data.success?(this.prevViews=this.youtubeData.views,this.prevLikes=this.youtubeData.likes,this.youtubeData=s.data.data,console.log(this.youtubeData)):this.error=s.data.message||"Failed to fetch YouTube data"}catch(s){this.error=((i=(e=s.response)==null?void 0:e.data)==null?void 0:i.message)||"An error occurred while fetching YouTube data",console.error("YouTube Data Error:",s)}}}},p=t("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),d=t("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),g=t("link",{href:"https://fonts.googleapis.com/css2?family=Lilita+One&family=Signika+Negative:wght@300..700&display=swap",rel:"stylesheet"},null,-1),_={class:"stats-container"},v={class:"stat-item yt"},y=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})],-1),w={class:"stat-item like"},m=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{d:"M23.873 9.81c.086-.251.127-.508.127-.763 0-.77-.379-1.514-1.055-1.982-2.152-1.492-1.868-1.117-2.68-3.544-.339-1.014-1.321-1.7-2.429-1.696-2.654.008-2.193.153-4.335-1.354-.446-.314-.974-.471-1.501-.471s-1.055.157-1.502.471c-2.154 1.515-1.687 1.362-4.335 1.354-1.107-.003-2.09.683-2.429 1.696-.812 2.433-.533 2.055-2.68 3.544-.675.469-1.054 1.212-1.054 1.982 0 .255.041.512.127.763.83 2.428.827 1.963 0 4.38-.086.251-.127.509-.127.763 0 .77.379 1.514 1.055 1.982 2.147 1.489 1.869 1.114 2.68 3.544.339 1.014 1.321 1.7 2.429 1.696 2.654-.009 2.193-.152 4.335 1.354.446.314.974.471 1.501.471s1.055-.157 1.502-.471c2.141-1.506 1.681-1.362 4.335-1.354 1.107.003 2.09-.683 2.429-1.696.812-2.428.528-2.053 2.68-3.544.675-.468 1.054-1.212 1.054-1.982 0-.254-.041-.512-.127-.763-.831-2.427-.827-1.963 0-4.38zm-7.565 1.984c.418.056.63.328.63.61 0 .323-.277.66-.844.705-.348.027-.434.312-.016.406.351.08.549.326.549.591 0 .314-.279.654-.913.771-.383.07-.421.445-.016.477.344.026.479.146.479.312 0 .466-.826 1.333-2.426 1.333-2.501.001-3.407-1.499-6.751-1.499v-4.964c1.766-.271 3.484-.817 4.344-3.802.239-.831.39-1.734 1.187-1.734 1.188 0 1.297 2.562.844 4.391.656.344 1.875.468 2.489.442.886-.036 1.136.409 1.136.745 0 .505-.416.675-.677.755-.304.094-.444.404-.015.461z"})],-1);function f(e,i,s,k,a,b){return u(),l(c,null,[p,d,g,t("div",null,[t("div",_,[t("div",v,[y,t("span",{class:o(["stat-number",{"number-changed":a.youtubeData.views!==a.prevViews}])},n(a.youtubeData.views),3)]),t("div",w,[m,t("span",{class:o(["stat-number",{"number-changed":a.youtubeData.likes!==a.prevLikes}])},n(a.youtubeData.likes),3)])])])],64)}const x=r(h,[["render",f]]);export{x as default};