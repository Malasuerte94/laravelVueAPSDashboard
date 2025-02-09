import{S as m}from"./SvgBh-30d25cb9.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{c as l,b as r,F as u,x as y,k as _,o,D as c,n as p,t as h}from"./app-06459301.js";const b={components:{SvgBh:m},props:["id"],data(){return{loading:!0,weeklySchedules:[],groupedDays:[],settings:{}}},async mounted(){await this.getSettings(),await this.fetchWeeklySchedules(),this.loading=!1,this.groupDaysIntoRows()},methods:{async getSettings(){let e="obs_schedule";try{this.loading=!0;const s=await axios.get("/api/get-setting-public",{params:{setting_name:e,user_id:this.id}});s.data.setting_value&&(this.settings=JSON.parse(s.data.setting_value)),console.log(this.settings)}catch(s){console.error(`Error loading setting "${e}":`,s),this.error=`Failed to load setting: ${e}`}finally{this.loading=!1}},async fetchWeeklySchedules(){try{const e=await axios.get(`/api/schedule/weekly/${this.id}`);this.weeklySchedules=e.data}catch(e){console.error("Error fetching weekly schedules:",e)}},formatDayName(e){const s=["Duminică","Luni","Marți","Miercuri","Joi","Vineri","Sâmbătă"],i=new Date(e).getDay();return s[i]},isCurrentDay(e){const s=new Date().toISOString().split("T")[0];return e===s},groupDaysIntoRows(){const e=this.weeklySchedules.flatMap(i=>i.days),s=[];for(let i=0;i<e.length;i+=4)s.push(e.slice(i,i+4));this.groupedDays=s}}},w={key:0,class:"schedule-weekly-container flex gap-6 bg-transparent p-4 rounded-lg shadow-lg"},S={class:"weekly-table w-1/2"},x={key:0,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},k={class:"mt-4 space-y-2"},D={key:1,class:"text-gray-400"},v={class:"program-table w-1/2"},F={class:"w-full text-sm text-gray-200 border-collapse"};function z(e,s,i,C,t,g){return t.loading?_("",!0):(o(),l("div",w,[r("div",S,[t.weeklySchedules.length?(o(),l("div",x,[(o(!0),l(u,null,y(t.weeklySchedules,d=>(o(),l("div",{key:d.id,class:"schedule-card bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700",style:c({"background-color":t.settings.cellBg,color:t.settings.cellFontColor})},[s[0]||(s[0]=r("h3",{class:"text-md font-semibold text-gray-200"},"Program",-1)),r("ul",k,[(o(!0),l(u,null,y(d.days,a=>(o(),l("li",{key:a.id,class:p(["flex justify-between items-center p-2 rounded shadow-sm border border-gray-600",{"opacity-50 line-through text-white":!a.active}]),style:c({"background-color":g.isCurrentDay(a.date)?t.settings.cellBgActive:t.settings.cellBgShort})},[r("span",{class:"text-lg font-bold",style:c({"font-size":t.settings.cellTitleFontSize+"px"})},h(g.formatDayName(a.date)),5),r("span",{class:"text-lg",style:c({"font-size":t.settings.cellSubtitleFontSize+"px"})},h(a.info),5)],6))),128))])],4))),128))])):(o(),l("p",D,"No schedules for this week."))]),r("div",v,[r("table",F,[r("tbody",null,[(o(!0),l(u,null,y(t.groupedDays,(d,a)=>(o(),l("tr",{key:a},[(o(!0),l(u,null,y(d,n=>(o(),l("td",{key:n.id,class:"p-1 border border-transparent"},[r("div",{class:p([{"bg-[#FFC400] text-gray-900":g.isCurrentDay(n.date),"bg-gray-800 opacity-75 line-through":!n.active,"bg-gray-900":n.active&&!g.isCurrentDay(n.date)},"p-2 rounded-lg shadow-md text-left"]),style:c({"background-color":g.isCurrentDay(n.date)?t.settings.cellBgActive:t.settings.cellBgShort,color:t.settings.cellFontColor})},[r("div",{class:"font-bold text-lg mb-1",style:c({"font-size":t.settings.cellTitleFontSize+"px"})},h(g.formatDayName(n.date)),5),r("div",{class:"text-sm",style:c({"font-size":t.settings.cellSubtitleFontSize+"px"})},h(n.info),5)],6)]))),128))]))),128))])])])]))}const I=f(b,[["render",z]]);export{I as default};
