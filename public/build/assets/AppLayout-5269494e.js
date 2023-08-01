import{o,e as a,a as e,d as M,i as x,J as B,j as N,u as i,n as f,f as p,t as y,k,l as P,m as O,r as g,p as j,q as L,v as z,b as d,w as n,T as E,c as v,s as S,X as V,g as c,F as $,h as A,x as D}from"./app-418be4dd.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const J={},R={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},q=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),H=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),U=[q,H];function X(l,r){return o(),a("svg",R,U)}const G=I(J,[["render",X]]),K={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},Q={class:"flex items-center justify-between flex-wrap"},W={class:"w-0 flex-1 flex items-center min-w-0"},Y={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Z=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ee=[Z],te={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},se=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),oe=[se],re={class:"ml-3 font-medium text-sm text-white truncate"},ne={class:"shrink-0 sm:ml-3"},ae=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ie=[ae],le={__name:"Banner",setup(l){const r=M(!0),s=x(()=>{var t;return((t=B().props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),h=x(()=>{var t;return((t=B().props.jetstream.flash)==null?void 0:t.banner)||""});return N(h,async()=>{r.value=!0}),(t,_)=>(o(),a("div",null,[r.value&&i(h)?(o(),a("div",{key:0,class:f({"bg-indigo-500":i(s)=="success","bg-red-700":i(s)=="danger"})},[e("div",K,[e("div",Q,[e("div",W,[e("span",{class:f(["flex p-2 rounded-lg",{"bg-indigo-600":i(s)=="success","bg-red-600":i(s)=="danger"}])},[i(s)=="success"?(o(),a("svg",Y,ee)):p("",!0),i(s)=="danger"?(o(),a("svg",te,oe)):p("",!0)],2),e("p",re,y(i(h)),1)]),e("div",ne,[e("button",{type:"button",class:f(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":i(s)=="success","hover:bg-red-600 focus:bg-red-600":i(s)=="danger"}]),"aria-label":"Dismiss",onClick:_[0]||(_[0]=k(u=>r.value=!1,["prevent"]))},ie,2)])])])],2)):p("",!0)]))}},de={class:"relative"},F={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(l){const r=l;let s=M(!1);const h=u=>{s.value&&u.key==="Escape"&&(s.value=!1)};P(()=>document.addEventListener("keydown",h)),O(()=>document.removeEventListener("keydown",h));const t=x(()=>({48:"w-48"})[r.width.toString()]),_=x(()=>r.align==="left"?"origin-top-left left-0":r.align==="right"?"origin-top-right right-0":"origin-top");return(u,m)=>(o(),a("div",de,[e("div",{onClick:m[0]||(m[0]=T=>j(s)?s.value=!i(s):s=!i(s))},[g(u.$slots,"trigger")]),L(e("div",{class:"fixed inset-0 z-40",onClick:m[1]||(m[1]=T=>j(s)?s.value=!1:s=!1)},null,512),[[z,i(s)]]),d(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[L(e("div",{class:f(["absolute z-50 mt-2 rounded-md shadow-lg",[i(t),i(_)]]),style:{display:"none"},onClick:m[2]||(m[2]=T=>j(s)?s.value=!1:s=!1)},[e("div",{class:f(["rounded-md ring-1 ring-black ring-opacity-5",l.contentClasses])},[g(u.$slots,"content")],2)],2),[[z,i(s)]])]),_:3})]))}},ue={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},ce=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(l){return(r,s)=>(o(),a("div",null,[l.as=="button"?(o(),a("button",ue,[g(r.$slots,"default")])):l.as=="a"?(o(),a("a",{key:1,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[g(r.$slots,"default")],8,ce)):(o(),v(i(S),{key:2,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:n(()=>[g(r.$slots,"default")]),_:3},8,["href"]))]))}},C={__name:"NavLink",props:{href:String,active:Boolean},setup(l){const r=l,s=x(()=>r.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(h,t)=>(o(),v(i(S),{href:l.href,class:f(i(s))},{default:n(()=>[g(h.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(l){const r=l,s=x(()=>r.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(h,t)=>(o(),a("div",null,[l.as=="button"?(o(),a("button",{key:0,class:f([i(s),"w-full text-left"])},[g(h.$slots,"default")],2)):(o(),v(i(S),{key:1,href:l.href,class:f(i(s))},{default:n(()=>[g(h.$slots,"default")]),_:3},8,["href","class"]))]))}},he={class:"min-h-screen bg-gray-100"},pe={class:"bg-white border-b border-gray-100"},fe={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ge={class:"flex justify-between h-16"},me={class:"flex"},ve={class:"shrink-0 flex items-center"},_e={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},be={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},ye={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},we={class:"hidden sm:flex sm:items-center sm:ml-6"},xe={class:"ml-3 relative"},ke={class:"inline-flex rounded-md"},$e={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},Se=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),je={class:"w-60"},Ce=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Me=e("div",{class:"border-t border-gray-100"},null,-1),Te=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Be=["onSubmit"],Le={class:"flex items-center"},ze={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Ae=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),De=[Ae],Fe={class:"ml-3 relative"},Ne={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Pe=["src","alt"],Oe={key:1,class:"inline-flex rounded-md"},Ee={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},Ve=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})],-1),Ie=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Je=e("div",{class:"border-t border-gray-100"},null,-1),Re=["onSubmit"],qe={class:"-mr-2 flex items-center sm:hidden"},He={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ue={class:"pt-2 pb-3 space-y-1"},Xe={class:"pt-4 pb-1 border-t border-gray-200"},Ge={class:"flex items-center px-4"},Ke={key:0,class:"shrink-0 mr-3"},Qe=["src","alt"],We={class:"font-medium text-base text-gray-800"},Ye={class:"font-medium text-sm text-gray-500"},Ze={class:"mt-3 space-y-1"},et=["onSubmit"],tt=e("div",{class:"border-t border-gray-200"},null,-1),st=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),ot=e("div",{class:"border-t border-gray-200"},null,-1),rt=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),nt=["onSubmit"],at={class:"flex items-center"},it={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},lt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),dt=[lt],ut={key:0,class:"bg-white shadow"},ct={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ft={__name:"AppLayout",props:{title:String},setup(l){const r=M(!1),s=t=>{D.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},h=()=>{D.post(route("logout"))};return(t,_)=>(o(),a("div",null,[d(i(V),{title:l.title},null,8,["title"]),d(le),e("div",he,[e("nav",pe,[e("div",fe,[e("div",ge,[e("div",me,[e("div",ve,[d(i(S),{href:t.route("dashboard")},{default:n(()=>[d(G,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",_e,[d(C,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:n(()=>[c(" Dashboard ")]),_:1},8,["href","active"])]),e("div",be,[d(C,{href:t.route("stream-start"),active:t.route().current("stream-start")},{default:n(()=>[c(" Casino + Depo - OBS ")]),_:1},8,["href","active"])]),e("div",ye,[d(C,{href:t.route("bonus-buy"),active:t.route().current("bonus-buy")},{default:n(()=>[c(" Bonus Buy - OBS ")]),_:1},8,["href","active"])])]),e("div",we,[e("div",xe,[t.$page.props.jetstream.hasTeamFeatures?(o(),v(F,{key:0,align:"right",width:"60"},{trigger:n(()=>[e("span",ke,[e("button",$e,[c(y(t.$page.props.user.current_team.name)+" ",1),Se])])]),content:n(()=>[e("div",je,[t.$page.props.jetstream.hasTeamFeatures?(o(),a($,{key:0},[Ce,d(w,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:n(()=>[c(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(o(),v(w,{key:0,href:t.route("teams.create")},{default:n(()=>[c(" Create New Team ")]),_:1},8,["href"])):p("",!0),Me,Te,(o(!0),a($,null,A(t.$page.props.user.all_teams,u=>(o(),a("form",{key:u.id,onSubmit:k(m=>s(u),["prevent"])},[d(w,{as:"button"},{default:n(()=>[e("div",Le,[u.id==t.$page.props.user.current_team_id?(o(),a("svg",ze,De)):p("",!0),e("div",null,y(u.name),1)])]),_:2},1024)],40,Be))),128))],64)):p("",!0)])]),_:1})):p("",!0)]),e("div",Fe,[d(F,{align:"right",width:"48"},{trigger:n(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),a("button",Ne,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Pe)])):(o(),a("span",Oe,[e("button",Ee,[c(y(t.$page.props.user.name)+" ",1),Ve])]))]),content:n(()=>[Ie,d(w,{href:t.route("profile.show")},{default:n(()=>[c(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(o(),v(w,{key:0,href:t.route("api-tokens.index")},{default:n(()=>[c(" API Tokens ")]),_:1},8,["href"])):p("",!0),Je,e("form",{onSubmit:k(h,["prevent"])},[d(w,{as:"button"},{default:n(()=>[c(" Log Out ")]),_:1})],40,Re)]),_:1})])]),e("div",qe,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:_[0]||(_[0]=u=>r.value=!r.value)},[(o(),a("svg",He,[e("path",{class:f({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:f({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:f([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",Ue,[d(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:n(()=>[c(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Xe,[e("div",Ge,[t.$page.props.jetstream.managesProfilePhotos?(o(),a("div",Ke,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Qe)])):p("",!0),e("div",null,[e("div",We,y(t.$page.props.user.name),1),e("div",Ye,y(t.$page.props.user.email),1)])]),e("div",Ze,[d(b,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:n(()=>[c(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(o(),v(b,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:n(()=>[c(" API Tokens ")]),_:1},8,["href","active"])):p("",!0),e("form",{method:"POST",onSubmit:k(h,["prevent"])},[d(b,{as:"button"},{default:n(()=>[c(" Log Out ")]),_:1})],40,et),t.$page.props.jetstream.hasTeamFeatures?(o(),a($,{key:1},[tt,st,d(b,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:n(()=>[c(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(o(),v(b,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:n(()=>[c(" Create New Team ")]),_:1},8,["href","active"])):p("",!0),ot,rt,(o(!0),a($,null,A(t.$page.props.user.all_teams,u=>(o(),a("form",{key:u.id,onSubmit:k(m=>s(u),["prevent"])},[d(b,{as:"button"},{default:n(()=>[e("div",at,[u.id==t.$page.props.user.current_team_id?(o(),a("svg",it,dt)):p("",!0),e("div",null,y(u.name),1)])]),_:2},1024)],40,nt))),128))],64)):p("",!0)])])],2)]),t.$slots.header?(o(),a("header",ut,[e("div",ct,[g(t.$slots,"header")])])):p("",!0),e("main",null,[g(t.$slots,"default")])])]))}};export{ft as _};