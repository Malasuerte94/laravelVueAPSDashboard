import{e as s,a,c as d,w as r,u as n,f as c,b as u,F as h,o as t,g as o,j as l}from"./app-cff6ef40.js";const g={class:"relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"},m={class:"max-w-6xl mx-auto sm:px-6 lg:px-8"},f=a("div",{class:"flex center self-center text-center m-auto justify-center mb-10"},[a("h2",{class:"font-semibold text-xl text-center justify-center text-gray-800 leading-tight mr-2"}," Dashboard Păcănele "),a("a",{target:"blank",href:"https://www.youtube.com/@MalaTheMan"}," by @MalaTheMan")],-1),x={class:"center text-center"},p={key:0,class:"hidden px-6 py-4 sm:block font-semibold text-lg"},b={key:0,class:"flex gap-10 text-center"},y={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String},setup(i){return(e,k)=>(t(),s("div",g,[a("div",m,[f,a("div",x,[i.canLogin?(t(),s("div",p,[e.$page.props.user?(t(),s("div",b,[e.$page.props.user_streamer?(t(),d(n(l),{key:0,href:e.route("streamdash"),class:"text-lg text-black underline"},{default:r(()=>[o("Dashboard Streamer ")]),_:1},8,["href"])):c("",!0),u(n(l),{href:e.route("dashboard"),class:"text-lg text-black underline text-center m-auto"},{default:r(()=>[o("Dashboard Viewer ")]),_:1},8,["href"])])):(t(),s(h,{key:1},[u(n(l),{href:e.route("login"),class:"text-lg text-black underline"},{default:r(()=>[o("Log in ")]),_:1},8,["href"]),i.canRegister?(t(),d(n(l),{key:0,href:e.route("register"),class:"ml-4 text-lg text-black underline"},{default:r(()=>[o("Register ")]),_:1},8,["href"])):c("",!0)],64))])):c("",!0)])])]))}};export{y as default};
