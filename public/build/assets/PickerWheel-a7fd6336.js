import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{e as h,a,n as g,t as u,f as S,o as c}from"./app-fe460eca.js";const _={props:["id"],data(){return{games:[],colors:["#f48a00","#022522"],isSpinning:!1,selectedAngle:0,selectedGame:null,spinDuration:2e3,showSelectedGame:!1,canvasSize:500,returnToCornerTimeout:null}},async mounted(){await this.getList(),this.pollForSpin()},methods:{async getList(){try{let e=(await axios.get(`/api/wheel-list/${this.id}`)).data.split(`
`).map(i=>i.trim()).filter(i=>i);JSON.stringify(e)!==JSON.stringify(this.games)&&(this.games=e,await this.$nextTick(()=>{this.drawWheel()}))}catch(t){console.log("Error checking list:",t)}},pollForSpin(){setInterval(()=>{axios.get(`/api/spin/check/${this.id}`).then(t=>{this.getList(),t.data.shouldSpin&&(this.spinWheel(),axios.post(`/api/spin/clear/${this.id}`).catch(e=>{console.log("Error clearing spin trigger:",e)}))}).catch(t=>{console.log("Error checking spin trigger:",t)})},3e3)},drawWheel(){const t=this.$refs.wheelCanvas,e=t.getContext("2d"),i=this.games.length,r=2*Math.PI/i,s=t.width/2;e.clearRect(0,0,t.width,t.height);for(let n=0;n<i;n++){const o=n*r-Math.PI/2,l=o+r;e.fillStyle=this.colors[n%this.colors.length],e.beginPath(),e.moveTo(s,s),e.arc(s,s,s,o,l),e.closePath(),e.fill(),e.lineWidth=1,e.strokeStyle="#000",e.stroke(),e.save(),e.translate(s,s),e.rotate(o+r/2),e.textAlign="right",e.fillStyle="#fff",e.font="bold 14px Arial",e.shadowColor="rgba(0, 0, 0, 0.5)",e.shadowBlur=4,e.shadowOffsetX=2,e.shadowOffsetY=2,e.fillText(this.games[n],s-5,0),e.restore()}},spinWheel(){this.isSpinning=!0,this.showSelectedGame=!1;const t=this.games.length,e=360/t,i=Math.floor(Math.random()*t);this.selectedGame=this.games[i];const s=5*360+(360-i*e)-e/2,n=performance.now(),o=this.spinDuration,l=m=>{const f=m-n,d=Math.min(f/o,1),p=1-Math.pow(1-d,3);this.selectedAngle=p*s,this.drawRotatedWheel(),d<1?requestAnimationFrame(l):(this.showSelectedGame=!0,this.returnToCornerTimeout=setTimeout(()=>{this.isSpinning=!1,this.showSelectedGame=!1},3e3))};requestAnimationFrame(l)},drawRotatedWheel(){const t=this.$refs.wheelCanvas,e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),e.save(),e.translate(t.width/2,t.height/2),e.rotate(this.selectedAngle*Math.PI/180),e.translate(-t.width/2,-t.height/2),this.drawWheel(),e.restore()},handleTransitionEnd(){!this.isSpinning&&this.returnToCornerTimeout&&(clearTimeout(this.returnToCornerTimeout),this.returnToCornerTimeout=null,this.showSelectedGame=!1)}}},v={key:0,id:"game"},x={class:"box-transform"},T=a("div",{class:"selector-arrow"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[a("path",{d:"M12 21l-12-18h24z"})])],-1),y=a("img",{class:"logo",src:"https://yt3.googleusercontent.com/CfIgnRwE7ROK9CugvIS1PQOjiOUfMyruXwnHwE3FmRnHu7Utw-RjZKldzKONjXFSTUl8zCfX=s160-c-k-c0x00ffffff-no-rj",alt:""},null,-1),C=["width","height"],k={key:0,class:"selected-game"},A={key:1,class:"text-center text-gray-500"};function G(t,e,i,r,s,n){return s.games.length>0?(c(),h("div",v,[a("div",{class:g(["wheel-container",{centered:s.isSpinning}]),onTransitionend:e[0]||(e[0]=(...o)=>n.handleTransitionEnd&&n.handleTransitionEnd(...o))},[a("div",x,[T,y,a("canvas",{class:g([{idle:!s.isSpinning&&!s.showSelectedGame}]),ref:"wheelCanvas",width:s.canvasSize,height:s.canvasSize},null,10,C),s.showSelectedGame?(c(),h("div",k,u(s.selectedGame),1)):S("",!0)])],34)])):(c(),h("div",A,"No games found"))}const M=w(_,[["render",G]]);export{M as default};
