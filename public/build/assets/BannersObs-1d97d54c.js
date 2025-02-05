import{G as Z,H as A,I as j,d as v,K as C,L as b,q as Te,C as ke,s as Ce,l as ve,p as q,M as pe,F as Se,N as me,c as ge,w as he,f as Oe,o as K,e as Me,h as Ne,a as je}from"./app-9c875f28.js";import{_ as Ee}from"./_plugin-vue_export-helper-c27b6911.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const f={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},we={itemsToShow:{default:f.itemsToShow,type:Number},itemsToScroll:{default:f.itemsToScroll,type:Number},wrapAround:{default:f.wrapAround,type:Boolean},throttle:{default:f.throttle,type:Number},snapAlign:{default:f.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:f.transition,type:Number},breakpoints:{default:f.breakpoints,type:Object},autoplay:{default:f.autoplay,type:Number},pauseAutoplayOnHover:{default:f.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:f.mouseDrag,type:Boolean},touchDrag:{default:f.touchDrag,type:Boolean},dir:{default:f.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:f.i18n,type:Object},settings:{default(){return{}},type:Object}};function Ie({config:e,slidesCount:a}){const{snapAlign:n,wrapAround:s,itemsToShow:i=1}=e;if(s)return Math.max(a-1,0);let o;switch(n){case"start":o=a-i;break;case"end":o=a-1;break;case"center":case"center-odd":o=a-Math.ceil((i-.5)/2);break;case"center-even":o=a-Math.ceil(i/2);break;default:o=0;break}return Math.max(o,0)}function De({config:e,slidesCount:a}){const{wrapAround:n,snapAlign:s,itemsToShow:i=1}=e;let o=0;if(n||i>a)return o;switch(s){case"start":o=0;break;case"end":o=i-1;break;case"center":case"center-odd":o=Math.floor((i-1)/2);break;case"center-even":o=Math.floor((i-2)/2);break;default:o=0;break}return o}function J({val:e,max:a,min:n}){return a<n?e:Math.min(Math.max(e,n),a)}function Be({config:e,currentSlide:a,slidesCount:n}){const{snapAlign:s,wrapAround:i,itemsToShow:o=1}=e;let m=a;switch(s){case"center":case"center-odd":m-=(o-1)/2;break;case"center-even":m-=(o-2)/2;break;case"end":m-=o-1;break}return i?m:J({val:m,max:n-o,min:0})}function ye(e){return e?e.reduce((a,n)=>{var s;return n.type===Se?[...a,...ye(n.children)]:((s=n.type)===null||s===void 0?void 0:s.name)==="CarouselSlide"?[...a,n]:a},[]):[]}function Q({val:e,max:a,min:n=0}){return e>a?Q({val:e-(a+1),max:a,min:n}):e<n?Q({val:e+(a+1),max:a,min:n}):e}function Le(e,a){let n;return a?function(...s){const i=this;n||(e.apply(i,s),n=!0,setTimeout(()=>n=!1,a))}:e}function Ve(e,a){let n;return function(...s){n&&clearTimeout(n),n=setTimeout(()=>{e(...s),n=null},a)}}function Pe(e="",a={}){return Object.entries(a).reduce((n,[s,i])=>n.replace(`{${s}}`,String(i)),e)}var Re=Z({name:"ARIA",setup(){const e=A("config",j(Object.assign({},f))),a=A("currentSlide",v(0)),n=A("slidesCount",v(0));return()=>C("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Pe(e.i18n.itemXofY,{currentSlide:a.value+1,slidesCount:n.value}))}}),$e=Z({name:"Carousel",props:we,setup(e,{slots:a,emit:n,expose:s}){var i;const o=v(null),m=v([]),h=v(0),c=v(0),r=j(Object.assign({},f));let g=Object.assign({},f),S;const u=v((i=e.modelValue)!==null&&i!==void 0?i:0),V=v(0),ee=v(0),T=v(0),O=v(0);let k,P;b("config",r),b("slidesCount",c),b("currentSlide",u),b("maxSlide",T),b("minSlide",O),b("slideWidth",h);function R(){S=Object.assign({},e.breakpoints),g=Object.assign(Object.assign(Object.assign({},g),e),{i18n:Object.assign(Object.assign({},g.i18n),e.i18n),breakpoints:void 0}),te(g)}function E(){if(!S||!Object.keys(S).length)return;const t=Object.keys(S).map(l=>Number(l)).sort((l,w)=>+w-+l);let d=Object.assign({},g);t.some(l=>{const w=window.matchMedia(`(min-width: ${l}px)`).matches;return w&&(d=Object.assign(Object.assign({},d),S[l])),w}),te(d)}function te(t){Object.entries(t).forEach(([d,l])=>r[d]=l)}const ne=Ve(()=>{E(),M()},16);function M(){if(!o.value)return;const t=o.value.getBoundingClientRect();h.value=t.width/r.itemsToShow}function $(){c.value<=0||(ee.value=Math.ceil((c.value-1)/2),T.value=Ie({config:r,slidesCount:c.value}),O.value=De({config:r,slidesCount:c.value}),r.wrapAround||(u.value=J({val:u.value,max:T.value,min:O.value})))}Te(()=>{ke(()=>M()),setTimeout(()=>M(),1e3),E(),ie(),window.addEventListener("resize",ne,{passive:!0}),n("init")}),Ce(()=>{P&&clearTimeout(P),k&&clearInterval(k),window.removeEventListener("resize",ne,{passive:!0})});let p=!1;const I={x:0,y:0},D={x:0,y:0},y=j({x:0,y:0}),B=v(!1),X=v(!1),xe=()=>{B.value=!0},_e=()=>{B.value=!1};function ae(t){["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||(p=t.type==="touchstart",p||t.preventDefault(),!(!p&&t.button!==0||x.value)&&(I.x=p?t.touches[0].clientX:t.clientX,I.y=p?t.touches[0].clientY:t.clientY,document.addEventListener(p?"touchmove":"mousemove",re,!0),document.addEventListener(p?"touchend":"mouseup",oe,!0)))}const re=Le(t=>{X.value=!0,D.x=p?t.touches[0].clientX:t.clientX,D.y=p?t.touches[0].clientY:t.clientY;const d=D.x-I.x,l=D.y-I.y;y.y=l,y.x=d},r.throttle);function oe(){const t=r.dir==="rtl"?-1:1,d=Math.sign(y.x)*.4,l=Math.round(y.x/h.value+d)*t;if(l&&!p){const w=G=>{G.stopPropagation(),window.removeEventListener("click",w,!0)};window.addEventListener("click",w,!0)}_(u.value-l),y.x=0,y.y=0,X.value=!1,document.removeEventListener(p?"touchmove":"mousemove",re,!0),document.removeEventListener(p?"touchend":"mouseup",oe,!0)}function ie(){!r.autoplay||r.autoplay<=0||(k=setInterval(()=>{r.pauseAutoplayOnHover&&B.value||L()},r.autoplay))}function se(){k&&(clearInterval(k),k=null),ie()}const x=v(!1);function _(t){const d=r.wrapAround?t:J({val:t,max:T.value,min:O.value});u.value===d||x.value||(n("slide-start",{slidingToIndex:t,currentSlideIndex:u.value,prevSlideIndex:V.value,slidesCount:c.value}),x.value=!0,V.value=u.value,u.value=d,P=setTimeout(()=>{if(r.wrapAround){const l=Q({val:d,max:T.value,min:0});l!==u.value&&(u.value=l,n("loop",{currentSlideIndex:u.value,slidingToIndex:t}))}n("update:modelValue",u.value),n("slide-end",{currentSlideIndex:u.value,prevSlideIndex:V.value,slidesCount:c.value}),x.value=!1,se()},r.transition))}function L(){_(u.value+r.itemsToScroll)}function Y(){_(u.value-r.itemsToScroll)}const le={slideTo:_,next:L,prev:Y};b("nav",le),b("isSliding",x);const ue=ve(()=>Be({config:r,currentSlide:u.value,slidesCount:c.value}));b("slidesToScroll",ue);const Ae=ve(()=>{const t=r.dir==="rtl"?-1:1,d=ue.value*h.value*t;return{transform:`translateX(${y.x-d}px)`,transition:`${x.value?r.transition:0}ms`,margin:r.wrapAround?`0 -${c.value*h.value}px`:"",width:"100%"}});function ce(){R(),E(),$(),M(),se()}Object.keys(we).forEach(t=>{["modelValue"].includes(t)||q(()=>e[t],ce)}),q(()=>e.modelValue,t=>{t!==u.value&&_(Number(t))}),q(c,$),n("before-init"),R();const de={config:r,slidesCount:c,slideWidth:h,next:L,prev:Y,slideTo:_,currentSlide:u,maxSlide:T,minSlide:O,middleSlide:ee};s({updateBreakpointsConfigs:E,updateSlidesData:$,updateSlideWidth:M,initDefaultConfigs:R,restartCarousel:ce,slideTo:_,next:L,prev:Y,nav:le,data:de});const H=a.default||a.slides,U=a.addons,fe=j(de);return()=>{const t=ye(H==null?void 0:H(fe)),d=(U==null?void 0:U(fe))||[];t.forEach((W,z)=>W.props.index=z);let l=t;if(r.wrapAround){const W=t.map((F,N)=>pe(F,{index:-t.length+N,isClone:!0,key:`clone-before-${N}`})),z=t.map((F,N)=>pe(F,{index:t.length+N,isClone:!0,key:`clone-after-${N}`}));l=[...W,...t,...z]}m.value=t,c.value=Math.max(t.length,1);const w=C("ol",{class:"carousel__track",style:Ae.value,onMousedownCapture:r.mouseDrag?ae:null,onTouchstartPassiveCapture:r.touchDrag?ae:null},l),G=C("div",{class:"carousel__viewport"},w);return C("section",{ref:o,class:{carousel:!0,"is-sliding":x.value,"is-dragging":X.value,"is-hover":B.value,"carousel--rtl":r.dir==="rtl"},dir:r.dir,"aria-label":r.i18n.ariaGallery,tabindex:"0",onMouseenter:xe,onMouseleave:_e},[G,d,C(Re)])}}}),be;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(be||(be={}));var Xe=Z({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:a}){const n=A("config",j(Object.assign({},f))),s=A("currentSlide",v(0)),i=A("slidesToScroll",v(0)),o=A("isSliding",v(!1)),m=()=>e.index===s.value,h=()=>e.index===s.value-1,c=()=>e.index===s.value+1,r=()=>{const g=Math.floor(i.value),S=Math.ceil(i.value+n.itemsToShow-1);return e.index>=g&&e.index<=S};return()=>{var g;return C("li",{style:{width:`${100/n.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":r(),"carousel__slide--active":m(),"carousel__slide--prev":h(),"carousel__slide--next":c(),"carousel__slide--sliding":o.value},"aria-hidden":!r()},(g=a.default)===null||g===void 0?void 0:g.call(a))}}});const Ye={props:["id"],data(){return{loading:!0,banners:[]}},components:{Carousel:$e,Slide:Xe},async mounted(){await this.getBanners(),this.loading=!1},methods:{async getBanners(){await axios.get("/api/banners/"+this.id).then(e=>{this.banners=e.data.banners}).catch(e=>{console.log(e)})}}},He=["src"];function Ue(e,a,n,s,i,o){const m=me("slide"),h=me("carousel");return i.loading?Oe("",!0):(K(),ge(h,{key:0,"items-to-show":1,autoplay:5e3,transition:1e3,wrapAround:!0},{default:he(()=>[(K(!0),Me(Se,null,Ne(i.banners,c=>(K(),ge(m,{key:c.id},{default:he(()=>[je("img",{src:c.image,alt:""},null,8,He)]),_:2},1024))),128))]),_:1}))}const ze=Ee(Ye,[["render",Ue]]);export{ze as default};
