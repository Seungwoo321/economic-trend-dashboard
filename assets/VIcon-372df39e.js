import{p as m,g as Y,r as I,Z as p,j as ee,A as x,ad as D,B as te,l as P,an as ne,y as ae,c as h,b as g,m as l,q as se,E as q,n as re,W as A,s as _,ao as oe,_ as ie,a3 as E,a4 as le,R as ue,ah as ce,Q as N,ap as z,ab as M,aq as H,ar as de,as as ve,at as ge,M as me,a2 as fe,u as he,w as Se,au as be,v as ye,av as Ce,aw as _e}from"./index-1bf9cc24.js";const B=m({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function V(e){const a=Y("useRender");a.render=e}function Ee(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=I(),t=I();if(p){const s=new ResizeObserver(r=>{e==null||e(r,s),r.length&&(a==="content"?t.value=r[0].contentRect:t.value=r[0].target.getBoundingClientRect())});ee(()=>{s.disconnect()}),x(n,(r,o)=>{o&&(s.unobserve(D(o)),t.value=void 0),r&&s.observe(D(r))},{flush:"post"})}return{resizeRef:n,contentRect:te(t)}}const ze=m({tag:{type:String,default:"div"}},"tag"),Re=m({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),He=P(!1)({name:"VDefaultsProvider",props:Re(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:s,reset:r,root:o,scoped:c}=ne(e);return ae(t,{reset:r,root:o,scoped:c,disabled:s}),()=>{var f;return(f=n.default)==null?void 0:f.call(n)}}});const ke=m({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function xe(e){return{dimensionStyles:h(()=>({height:g(e.height),maxHeight:g(e.maxHeight),maxWidth:g(e.maxWidth),minHeight:g(e.minHeight),minWidth:g(e.minWidth),width:g(e.width)}))}}function Ie(e){return{aspectStyles:h(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const U=m({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...B(),...ke()},"VResponsive"),F=P()({name:"VResponsive",props:U(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=Ie(e),{dimensionStyles:s}=xe(e);return V(()=>{var r;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&l("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),Pe=m({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),k=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:s,...r}=e,{component:o=re,...c}=typeof t=="object"?t:{};return se(o,q(typeof t=="string"?{name:s?"":t}:c,r,{disabled:s}),n)};function Ne(e,a){if(!A)return;const n=a.modifiers||{},t=a.value,{handler:s,options:r}=typeof t=="object"?t:{handler:t,options:{}},o=new IntersectionObserver(function(){var S;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const u=(S=e._observe)==null?void 0:S[a.instance.$.uid];if(!u)return;const v=c.some(y=>y.isIntersecting);s&&(!n.quiet||u.init)&&(!n.once||v||u.init)&&s(v,c,f),v&&n.once?L(e,a):u.init=!0},r);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:o},o.observe(e)}function L(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const Be={mounted:Ne,unmounted:L},Ve=Be,we=m({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...U(),...B(),...Pe()},"VImg"),Fe=P()({name:"VImg",directives:{intersect:Ve},props:we(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const s=_(""),r=I(),o=_(e.eager?"loading":"idle"),c=_(),f=_(),u=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=h(()=>u.value.aspect||c.value/f.value||0);x(()=>e.src,()=>{S(o.value!=="idle")}),x(v,(i,d)=>{!i&&d&&r.value&&R(r.value)}),oe(()=>S());function S(i){if(!(e.eager&&i)&&!(A&&!i&&!e.eager)){if(o.value="loading",u.value.lazySrc){const d=new Image;d.src=u.value.lazySrc,R(d,null)}u.value.src&&ie(()=>{var d,b;if(n("loadstart",((d=r.value)==null?void 0:d.currentSrc)||u.value.src),(b=r.value)!=null&&b.complete){if(r.value.naturalWidth||C(),o.value==="error")return;v.value||R(r.value,null),y()}else v.value||R(r.value),w()})}}function y(){var i;w(),o.value="loaded",n("load",((i=r.value)==null?void 0:i.currentSrc)||u.value.src)}function C(){var i;o.value="error",n("error",((i=r.value)==null?void 0:i.currentSrc)||u.value.src)}function w(){const i=r.value;i&&(s.value=i.currentSrc||i.src)}let $=-1;function R(i){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const b=()=>{clearTimeout($);const{naturalHeight:O,naturalWidth:j}=i;O||j?(c.value=j,f.value=O):!i.complete&&o.value==="loading"&&d!=null?$=window.setTimeout(b,d):(i.currentSrc.endsWith(".svg")||i.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,f.value=1)};b()}const T=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),Z=()=>{var b;if(!u.value.src||o.value==="idle")return null;const i=l("img",{class:["v-img__img",T.value],src:u.value.src,srcset:u.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:y,onError:C},null),d=(b=t.sources)==null?void 0:b.call(t);return l(k,{transition:e.transition,appear:!0},{default:()=>[E(d?l("picture",{class:"v-img__picture"},[d,i]):i,[[ce,o.value==="loaded"]])]})},G=()=>l(k,{transition:e.transition},{default:()=>[u.value.lazySrc&&o.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",T.value],src:u.value.lazySrc,alt:e.alt},null)]}),J=()=>t.placeholder?l(k,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,K=()=>t.error?l(k,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,X=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,W=_(!1);{const i=x(v,d=>{d&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{W.value=!0})}),i())})}return V(()=>{const[i]=F.filterProps(e);return E(l(F,q({class:["v-img",{"v-img--booting":!W.value},e.class],style:[{width:g(e.width==="auto"?c.value:e.width)},e.style]},i,{aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(ue,null,[l(Z,null,null),l(G,null,null),l(X,null,null),l(J,null,null),l(K,null,null)]),default:t.default}),[[le("intersect"),{handler:S,options:e.options},null,{once:!0}]])}),{currentSrc:s,image:r,state:o,naturalWidth:c,naturalHeight:f}}}),qe=m({border:[Boolean,Number,String]},"border");function Ae(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return{borderClasses:h(()=>{const t=z(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))s.push(`border-${r}`);return s})}}function Q(e){return M(()=>{const a=[],n={};if(e.value.background)if(H(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&de(e.value.background)){const t=ve(e.value.background);if(t.a==null||t.a===1){const s=ge(t);n.color=s,n.caretColor=s}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(H(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function $e(e,a){const n=h(()=>({text:z(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=Q(n);return{textColorClasses:t,textColorStyles:s}}function Me(e,a){const n=h(()=>({background:z(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=Q(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}const Ue=m({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function Le(e){return{elevationClasses:h(()=>{const n=z(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Qe=m({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ze(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return{roundedClasses:h(()=>{const t=z(e)?e.value:e.rounded,s=[];if(t===!0||t==="")s.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))s.push(`rounded-${r}`);return s})}}const Te=["x-small","small","default","large","x-large"],We=m({size:{type:[String,Number],default:"default"}},"size");function Oe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return M(()=>{let n,t;return me(Te,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:g(e.size),height:g(e.size)}),{sizeClasses:n,sizeStyles:t}})}const je=m({color:String,start:Boolean,end:Boolean,icon:fe,...B(),...We(),...ze({tag:"i"}),...he()},"VIcon"),Ge=P()({name:"VIcon",props:je(),setup(e,a){let{attrs:n,slots:t}=a;const s=I(),{themeClasses:r}=Se(e),{iconData:o}=be(h(()=>s.value||e.icon)),{sizeClasses:c}=Oe(e),{textColorClasses:f,textColorStyles:u}=$e(ye(e,"color"));return V(()=>{var S,y;const v=(S=t.default)==null?void 0:S.call(t);return v&&(s.value=(y=Ce(v).filter(C=>C.type===_e&&C.children&&typeof C.children=="string")[0])==null?void 0:y.children),l(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,c.value,f.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[c.value?void 0:{fontSize:g(e.size),height:g(e.size),width:g(e.size)},u.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[v]})}),{}}});export{k as M,Fe as V,ze as a,V as b,qe as c,Ue as d,Qe as e,Me as f,Ae as g,Le as h,Ze as i,He as j,Ge as k,Q as l,B as m,We as n,Oe as o,$e as p,ke as q,xe as r,Pe as s,Ee as u};
