import{d as C,o as r,e as n,b as o,u as w,X as B,a as e,w as t,i as L,g as a,c as p,t as c,F as f,f as i,h as k,j as _,n as g,r as x,J as $}from"./app-b860ad7c.js";import{_ as P,A,a as m,b as h,c as j,d as u}from"./ResponsiveNavLink-41b09563.js";const F={class:"min-h-screen bg-gray-100"},N={class:"bg-white border-b border-gray-100"},D={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},V={class:"flex justify-between h-16"},z={class:"flex"},O={class:"shrink-0 flex items-center"},I={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},J={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},E={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},R={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},X={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},q={class:"hidden sm:flex sm:items-center sm:ml-6"},G={class:"ml-3 relative"},H={class:"inline-flex rounded-md"},K={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},Q=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),U={class:"w-60"},W=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Y=e("div",{class:"border-t border-gray-100"},null,-1),Z=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ee=["onSubmit"],se={class:"flex items-center"},te={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},re=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),oe=[re],ae={class:"ml-3 relative"},ne={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},ie=["src","alt"],le={key:1,class:"inline-flex rounded-md"},de={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},ue=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})],-1),ce=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),he=e("div",{class:"border-t border-gray-100"},null,-1),pe=["onSubmit"],me={class:"-mr-2 flex items-center sm:hidden"},fe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},_e={class:"pt-2 pb-3 space-y-1"},ge={class:"pt-4 pb-1 border-t border-gray-200"},ve={class:"flex items-center px-4"},be={key:0,class:"shrink-0 mr-3"},ye=["src","alt"],we={class:"font-medium text-base text-gray-800"},ke={class:"font-medium text-sm text-gray-500"},xe={class:"mt-3 space-y-1"},$e=["onSubmit"],je=e("div",{class:"border-t border-gray-200"},null,-1),Te=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Se=e("div",{class:"border-t border-gray-200"},null,-1),Me=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Ce=["onSubmit"],Be={class:"flex items-center"},Le={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Pe=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Ae=[Pe],Fe={key:0,class:"bg-white shadow"},Ne={class:"max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8"},ze={__name:"AppLayout",props:{title:String},setup(T){const S=T,d=C(!1),v=s=>{$.put(route("current-team.update"),{team_id:s.id},{preserveState:!1})},b=()=>{$.post(route("logout"))};return(s,y)=>(r(),n("div",null,[o(w(B),{title:S.title},null,8,["title"]),o(P),e("div",F,[e("nav",N,[e("div",D,[e("div",V,[e("div",z,[e("div",O,[o(w(L),{href:s.route("streamdash")},{default:t(()=>[o(A,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",I,[o(m,{href:s.route("streamdash"),active:s.route().current("streamdash")},{default:t(()=>[a(" Dashboard ")]),_:1},8,["href","active"])]),e("div",J,[o(m,{href:s.route("lists"),active:s.route().current("lists")},{default:t(()=>[a(" Bonus Lists ")]),_:1},8,["href","active"])]),e("div",E,[o(m,{href:s.route("banners"),active:s.route().current("banners")},{default:t(()=>[a(" Banners ")]),_:1},8,["href","active"])]),e("div",R,[o(m,{href:s.route("report"),active:s.route().current("report")},{default:t(()=>[a(" Raport ")]),_:1},8,["href","active"])]),e("div",X,[o(m,{href:s.route("stream-accounts"),active:s.route().current("stream-accounts")},{default:t(()=>[a(" Conturi Stream ")]),_:1},8,["href","active"])])]),e("div",q,[e("div",G,[s.$page.props.jetstream.hasTeamFeatures?(r(),p(j,{key:0,align:"right",width:"60"},{trigger:t(()=>[e("span",H,[e("button",K,[a(c(s.$page.props.user.current_team.name)+" ",1),Q])])]),content:t(()=>[e("div",U,[s.$page.props.jetstream.hasTeamFeatures?(r(),n(f,{key:0},[W,o(h,{href:s.route("teams.show",s.$page.props.user.current_team)},{default:t(()=>[a(" Team Settings ")]),_:1},8,["href"]),s.$page.props.jetstream.canCreateTeams?(r(),p(h,{key:0,href:s.route("teams.create")},{default:t(()=>[a(" Create New Team ")]),_:1},8,["href"])):i("",!0),Y,Z,(r(!0),n(f,null,k(s.$page.props.user.all_teams,l=>(r(),n("form",{key:l.id,onSubmit:_(M=>v(l),["prevent"])},[o(h,{as:"button"},{default:t(()=>[e("div",se,[l.id==s.$page.props.user.current_team_id?(r(),n("svg",te,oe)):i("",!0),e("div",null,c(l.name),1)])]),_:2},1024)],40,ee))),128))],64)):i("",!0)])]),_:1})):i("",!0)]),e("div",ae,[o(j,{align:"right",width:"48"},{trigger:t(()=>[s.$page.props.jetstream.managesProfilePhotos?(r(),n("button",ne,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:s.$page.props.user.profile_photo_url,alt:s.$page.props.user.name},null,8,ie)])):(r(),n("span",le,[e("button",de,[a(c(s.$page.props.user.name)+" ",1),ue])]))]),content:t(()=>[ce,o(h,{href:s.route("profile.show")},{default:t(()=>[a(" Profile ")]),_:1},8,["href"]),s.$page.props.jetstream.hasApiFeatures?(r(),p(h,{key:0,href:s.route("api-tokens.index")},{default:t(()=>[a(" API Tokens ")]),_:1},8,["href"])):i("",!0),he,e("form",{onSubmit:_(b,["prevent"])},[o(h,{as:"button"},{default:t(()=>[a(" Log Out ")]),_:1})],40,pe)]),_:1})])]),e("div",me,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:y[0]||(y[0]=l=>d.value=!d.value)},[(r(),n("svg",fe,[e("path",{class:g({hidden:d.value,"inline-flex":!d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:g({hidden:!d.value,"inline-flex":d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:g([{block:d.value,hidden:!d.value},"sm:hidden"])},[e("div",_e,[o(u,{href:s.route("streamdash"),active:s.route().current("streamdash")},{default:t(()=>[a(" Dashboard ")]),_:1},8,["href","active"])]),e("div",ge,[e("div",ve,[s.$page.props.jetstream.managesProfilePhotos?(r(),n("div",be,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:s.$page.props.user.profile_photo_url,alt:s.$page.props.user.name},null,8,ye)])):i("",!0),e("div",null,[e("div",we,c(s.$page.props.user.name),1),e("div",ke,c(s.$page.props.user.email),1)])]),e("div",xe,[o(u,{href:s.route("profile.show"),active:s.route().current("profile.show")},{default:t(()=>[a(" Profile ")]),_:1},8,["href","active"]),s.$page.props.jetstream.hasApiFeatures?(r(),p(u,{key:0,href:s.route("api-tokens.index"),active:s.route().current("api-tokens.index")},{default:t(()=>[a(" API Tokens ")]),_:1},8,["href","active"])):i("",!0),e("form",{method:"POST",onSubmit:_(b,["prevent"])},[o(u,{as:"button"},{default:t(()=>[a(" Log Out ")]),_:1})],40,$e),s.$page.props.jetstream.hasTeamFeatures?(r(),n(f,{key:1},[je,Te,o(u,{href:s.route("teams.show",s.$page.props.user.current_team),active:s.route().current("teams.show")},{default:t(()=>[a(" Team Settings ")]),_:1},8,["href","active"]),s.$page.props.jetstream.canCreateTeams?(r(),p(u,{key:0,href:s.route("teams.create"),active:s.route().current("teams.create")},{default:t(()=>[a(" Create New Team ")]),_:1},8,["href","active"])):i("",!0),Se,Me,(r(!0),n(f,null,k(s.$page.props.user.all_teams,l=>(r(),n("form",{key:l.id,onSubmit:_(M=>v(l),["prevent"])},[o(u,{as:"button"},{default:t(()=>[e("div",Be,[l.id==s.$page.props.user.current_team_id?(r(),n("svg",Le,Ae)):i("",!0),e("div",null,c(l.name),1)])]),_:2},1024)],40,Ce))),128))],64)):i("",!0)])])],2)]),s.$slots.header?(r(),n("header",Fe,[e("div",Ne,[x(s.$slots,"header")])])):i("",!0),e("main",null,[x(s.$slots,"default")])])]))}};export{ze as _};
