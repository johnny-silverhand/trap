import{d as S,B as h,c as y,o as p,a as m,b as _,f as e,w as l,u as o,t as f,h as b,_ as k,x as V,l as g}from"./entry.769d5560.js";import{u as $,I as i,_ as w}from"./layout-sidebar.vue.66485d1b.js";import{R as C,u as I}from"./use-events.a9188a22.js";import{S as A}from"./dumper.11af9f7d.js";import{u as L}from"./settings.2d419936.js";const T={class:"layout-sidebar"},B={class:"layout-sidebar__nav"},E={class:"layout-sidebar__connection"},N={class:"layout-sidebar__versions"},R=["title"],P=["title"],W=S({__name:"layout-sidebar",props:{apiVersion:{},clientVersion:{}},setup(a){const s=$(),{isConnectedWS:d}=h(s),r=y(()=>d.value?"connected":"disconnected"),c=y(()=>`WS connection is ${r.value}`);return(t,u)=>{const n=w;return p(),m("aside",T,[_("nav",B,[e(n,{to:"/",title:"Events",class:"layout-sidebar__link"},{default:l(()=>[e(o(i),{class:"layout-sidebar__link-icon",name:"events"})]),_:1}),e(n,{to:"/sentry",title:"Sentry logs",class:"layout-sidebar__link"},{default:l(()=>[e(o(i),{class:"layout-sidebar__link-icon",name:"sentry"})]),_:1}),e(n,{to:"/profiler",title:"Profiler",class:"layout-sidebar__link"},{default:l(()=>[e(o(i),{class:"layout-sidebar__link-icon",name:"profiler"})]),_:1}),e(n,{to:"/smtp",title:"SMTP mails",class:"layout-sidebar__link"},{default:l(()=>[e(o(i),{class:"layout-sidebar__link-icon",name:"smtp"})]),_:1}),e(n,{to:"/http-dumps",title:"Http dumps",class:"layout-sidebar__link"},{default:l(()=>[e(o(i),{class:"layout-sidebar__link-icon",name:"http-dumps"})]),_:1}),e(n,{to:"/inspector",title:"Inspector logs",class:"layout-sidebar__link"},{default:l(()=>[e(o(i),{class:"layout-sidebar__link-icon",name:"inspector"})]),_:1}),e(n,{to:"/settings",title:"Settings",class:"layout-sidebar__link"},{default:l(()=>[e(o(i),{class:"layout-sidebar__link-icon",name:"settings"})]),_:1})]),_("div",null,[_("div",E,[e(o(i),{class:"layout-sidebar__connection-icon",name:r.value,title:c.value},null,8,["name","title"])]),_("div",N,[t.apiVersion?(p(),m("div",{key:0,class:"layout-sidebar__nav-version",title:`Api version: ${t.apiVersion}`},f(t.apiVersion),9,R)):b("",!0),t.clientVersion?(p(),m("div",{key:1,class:"layout-sidebar__nav-version",title:`Client version: ${t.clientVersion}`},f(t.clientVersion),9,P)):b("",!0)])])])}}}),x=k(W,[["__scopeId","data-v-be4d0836"]]),H=()=>({api:{getVersion:()=>fetch(`${C}/api/version`).then(s=>s.json()).then(s=>(s==null?void 0:s.version)||"unknown").catch(()=>"unknown")}}),j=S({components:{LayoutSidebar:x},async setup(){var n,v;A(window.document);const a=L(),{themeType:s,isFixedHeader:d}=h(a),{api:{getVersion:r}}=H(),c=await r(),{events:t}=I();(v=(n=t==null?void 0:t.items)==null?void 0:n.value)!=null&&v.length||t.getAll();const u="@dev";return{themeType:s,isFixedHeader:d,apiVersion:String(c).match(/^[0-9.]+.*$/)?`v${c}`:`@${c}`,clientVersion:u}}});const D={class:"main-layout"},F={class:"main-layout__content"};function M(a,s,d,r,c,t){const u=g("LayoutSidebar");return p(),m("div",D,[e(u,{class:"main-layout__sidebar","api-version":a.apiVersion,"client-version":a.clientVersion},null,8,["api-version","client-version"]),_("div",F,[V(a.$slots,"default",{},void 0,!0)])])}const K=k(j,[["render",M],["__scopeId","data-v-f2923f0c"]]);export{K as default};