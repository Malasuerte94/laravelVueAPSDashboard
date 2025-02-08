import{o as n,c as u,b as e,a as r,w as a,T as d,f as b,d as o}from"./app-915fdde5.js";import{_ as f}from"./AppLayout-446d249f.js";import{S as m}from"./StreamBoard-8ac49d28.js";import{a as l}from"./ResponsiveNavLink-d172e1db.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";const g={props:{stream:Object}},c={class:"flex flex-col sm:flex-row w-full gap-4"},x={class:"sm:w-1/2 p-6"};function v(p,t,s,T,N,I){return n(),u("div",c,[t[2]||(t[2]=e("div",{class:"sm:w-1/2 p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg text-gray-200"}," Tutorials Soon ",-1)),e("div",x,[t[1]||(t[1]=e("h2",{class:"text-lg font-bold mb-4 text-gray-200"},"Changelog - Updateuri",-1)),r(d,{name:"fade"},{default:a(()=>t[0]||(t[0]=[e("div",{class:"relative overflow-x-auto shadow-lg sm:rounded-lg mt-6"},[e("table",{class:"w-full text-sm text-left text-gray-300"},[e("thead",{class:"text-xs uppercase bg-gray-700 text-gray-400"},[e("tr",null,[e("th",{class:"p-3"},"Nume"),e("th",{class:"p-3"},"Status"),e("th",{class:"p-3"},"Data")])]),e("tbody",null,[e("tr",{class:"bg-gray-800 border-b border-gray-700"},[e("td",{class:"p-3"},"Bonus Battle"),e("td",{class:"p-3 text-green-500 font-semibold"},"TERMINAT"),e("td",{class:"p-3"},"19/01/2025")]),e("tr",{class:"bg-gray-800 border-b border-gray-700"},[e("td",{class:"p-3"},"ECHIPE"),e("td",{class:"p-3 text-yellow-500 font-semibold"},"IN LUCRU"),e("td",{class:"p-3"},"27/08/2023")]),e("tr",{class:"bg-gray-800 border-b border-gray-700"},[e("td",{class:"p-3"},[e("ul",{class:"list-disc pl-5"},[e("li",null,"raport"),e("li",null,"retrageri"),e("li",null,"deposit"),e("li",null,"bannere")])]),e("td",{class:"p-3 text-green-500 font-semibold"},"TERMINAT"),e("td",{class:"p-3"},"27/08/2023")]),e("tr",{class:"bg-gray-800 border-b border-gray-700"},[e("td",{class:"p-3"},"Bonus Hunt"),e("td",{class:"p-3 text-green-500 font-semibold"},"TERMINAT"),e("td",{class:"p-3"},"11/05/2023")]),e("tr",{class:"bg-gray-800 border-b border-gray-700"},[e("td",{class:"p-3"},"Bonus List"),e("td",{class:"p-3 text-green-500 font-semibold"},"TERMINAT"),e("td",{class:"p-3"},"11/05/2023")]),e("tr",{class:"bg-gray-800 border-b border-gray-700"},[e("td",{class:"p-3"},"Bonus Buy"),e("td",{class:"p-3 text-green-500 font-semibold"},"TERMINAT"),e("td",{class:"p-3"},"11/05/2023")])])])],-1)])),_:1})])])}const y=i(g,[["render",v],["__scopeId","data-v-e2f85c14"]]);const h={class:"flex flex-wrap gap-2 bg-gray-800 p-2 rounded-lg shadow-lg h-10 items-center"},w={class:"py-4"},_={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},B={class:"bg-gray-800 shadow-xl sm:rounded-lg p-6"},$={__name:"StreamDash",setup(p){return(t,s)=>(n(),b(f,{title:"Dashboard"},{header:a(()=>[e("div",h,[s[7]||(s[7]=e("span",{class:"text-white text-sm font-bold px-3"},"OBS",-1)),r(l,{class:"text-white text-sm font-semibold px-3 py-1 border-transparent transition-all duration-200 hover:text-amber-500",href:t.route("bonus-list",{id:t.$page.props.user.id}),active:t.route().current("bonus-list")},{default:a(()=>s[0]||(s[0]=[o(" Bonus Buy ")])),_:1},8,["href","active"]),r(l,{class:"text-white text-sm font-semibold px-3 py-1 border-transparent transition-all duration-200 hover:text-amber-500",href:t.route("bonus-battle-view",{id:t.$page.props.user.id}),active:t.route().current("bonus-battle-view")},{default:a(()=>s[1]||(s[1]=[o(" Bonus Battle ")])),_:1},8,["href","active"]),r(l,{class:"text-white text-sm font-semibold px-3 py-1 border-transparent transition-all duration-200 hover:text-amber-500",href:t.route("bonus-winner-obs",{id:t.$page.props.user.id}),active:t.route().current("bonus-winner-obs")},{default:a(()=>s[2]||(s[2]=[o(" Bonus Winner ")])),_:1},8,["href","active"]),r(l,{class:"text-white text-sm font-semibold px-3 py-1 border-transparent transition-all duration-200 hover:text-amber-500",href:t.route("yt-like-view-counter",{id:t.$page.props.user.id}),active:t.route().current("yt-like-view-counter")},{default:a(()=>s[3]||(s[3]=[o(" Like / View Counter YT ")])),_:1},8,["href","active"]),r(l,{class:"text-white text-sm font-semibold px-3 py-1 border-transparent transition-all duration-200 hover:text-amber-500",href:t.route("picker-wheel",{id:t.$page.props.user.id}),active:t.route().current("picker-wheel")},{default:a(()=>s[4]||(s[4]=[o(" Wheel ")])),_:1},8,["href","active"]),r(l,{class:"text-white text-sm font-semibold px-3 py-1 border-transparent transition-all duration-200 hover:text-amber-500",href:t.route("banners-obs",{id:t.$page.props.user.id}),active:t.route().current("banners-obs")},{default:a(()=>s[5]||(s[5]=[o(" Banners ")])),_:1},8,["href","active"]),r(l,{class:"text-white text-sm font-semibold px-3 py-1 border-transparent transition-all duration-200 hover:text-amber-500",href:t.route("schedule-view",{id:t.$page.props.user.id}),active:t.route().current("schedule-view")},{default:a(()=>s[6]||(s[6]=[o(" Schedule ")])),_:1},8,["href","active"])])]),default:a(()=>[e("div",w,[e("div",_,[r(d,{name:"fade",mode:"out-in"},{default:a(()=>[e("div",B,[r(m),s[8]||(s[8]=e("div",{class:"my-8"},null,-1)),r(y)])]),_:1})])])]),_:1}))}},A=i($,[["__scopeId","data-v-714372b9"]]);export{A as default};
