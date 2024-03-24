var _=Object.defineProperty;var W=(e,n,c)=>n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[n]=c;var T=(e,n,c)=>(W(e,typeof n!="symbol"?n+"":n,c),c);import{B as f}from"./entry.769d5560.js";import{k as $,l as I,u as P,m as C,n as w}from"./layout-sidebar.vue.66485d1b.js";const N=()=>{const e=window.location.host;return`${window.location.protocol==="https:"?"wss":"ws"}://${e}/connection/websocket`},U=()=>{const e=window.location.host;return`${window.location.protocol==="https:"?"https":"http"}://${e}`},b={}.VITE_EVENTS_REST_API||U(),F={}.VITE_EVENTS_WS_API||N(),D=()=>{const e=o=>`${b}/api/event${o?`/${o}`:"s"}`;return{getAll:()=>fetch(e()).then(o=>o.json()).then(o=>o!=null&&o.data?o.data:(console.error("Fetch Error"),[])).then(o=>o),getSingle:o=>fetch(e(o)).then(r=>r.json()).then(r=>r!=null&&r.data?r.data:null),deleteAll:()=>fetch(e(),{method:"DELETE"}).catch(o=>{console.error("Fetch Error",o)}),deleteList:o=>fetch(e(),{method:"DELETE",body:JSON.stringify({uuids:o})}).catch(r=>{console.error("Fetch Error",r)}),deleteSingle:o=>fetch(e(o),{method:"DELETE"}).catch(r=>{console.error("Fetch Error",r)}),deleteByType:o=>fetch(e(),{method:"DELETE",body:JSON.stringify({type:o})}).catch(r=>{console.error("Fetch Error",r)}),getEventRestUrl:e}},p=e=>{console.info(`[ApiConnection logger]:Centrifuge "${e[0]}" called with params: "${JSON.stringify(e[1])}"`)},d=class d{constructor(){T(this,"centrifuge");this.centrifuge=new $.Centrifuge(F),this.centrifuge.on("connected",n=>{p(["connected",n])}),this.centrifuge.on("publication",n=>{p(["publication",n])}),this.centrifuge.on("disconnected",n=>{p(["disconnected",n])}),this.centrifuge.on("error",n=>{p(["error",n])}),this.centrifuge.connect()}static getInstance(){return d.instance||(d.instance=new d),d.instance}getCentrifuge(){return this.centrifuge}};T(d,"instance");let A=d;const V=()=>({centrifuge:A.getInstance().getCentrifuge()}),x=1e4,B=()=>{const{centrifuge:e}=V(),n=I(),c=P(),{getAll:i,getSingle:l,deleteAll:u,deleteList:y,deleteSingle:o,deleteByType:r,getEventRestUrl:m}=D(),a=()=>c.isConnectedWS,v=t=>{a()||t(),setTimeout(()=>{v(t)},x)};e.on("connected",()=>{c.addWSConnection()}),e.on("disconnected",()=>{c.removeWSConnection()}),e.on("error",()=>{c.removeWSConnection()}),e.on("message",()=>{c.addWSConnection()}),e.on("publication",t=>{var E,h;if(t.channel==="events"&&((E=t.data)==null?void 0:E.event)==="event.received"){const k=((h=t==null?void 0:t.data)==null?void 0:h.data)||null;n.addList([k])}}),v(async()=>{const t=await i();n.addList(t)});const S=t=>a()?e.rpc(`delete:api/event/${t}`,void 0):o(t);return{getEventsAll:i,getEvent:l,deleteEvent:S,deleteEventsAll:()=>a()?e.rpc("delete:api/events",void 0):u(),deleteEventsList:t=>t.length?t.length===1?S(t[0]):a()?e.rpc("delete:api/events",{uuids:t}):y(t):Promise.resolve(),deleteEventsByType:t=>a()?e.rpc("delete:api/events",{type:t}):r(t),rayStopExecution:t=>{e.rpc(`post:api/ray/locks/${t}`,{stop_execution:!0})},rayContinueExecution:t=>{e.rpc(`post:api/ray/locks/${t}`,void 0)},getUrl:m}},H=e=>({id:e.uuid,type:"unknown",labels:[e.type],origin:null,serverName:"",date:e.timestamp?new Date(e.timestamp*1e3):null,payload:e.payload}),J=()=>{const e=I(),n=C(),c=w(),{lockedIds:i}=f(c),{events:l}=f(e),{deleteEventsAll:u,deleteEventsList:y,deleteEventsByType:o,getEventsAll:r,getEvent:m,getUrl:a}=B(),v=async s=>{await y(s)&&(e.removeByIds(s),n.removeByIds(s))};return{items:l,getItem:m,getUrl:a,getAll:()=>{r().then(s=>{s.length?(e.initialize(s),n.syncWithActive(s.map(({uuid:g})=>g))):(e.removeAll(),n.removeAll())}).catch(s=>{console.error("getAll err",s)})},removeAll:async()=>{if(i.value.length){const g=l.value.filter(({uuid:t})=>!i.value.includes(t)).map(({uuid:t})=>t);await v(g);return}await u()&&(e.removeAll(),n.removeAll())},removeByType:async s=>{if(i.value.length){const t=l.value.filter(({type:E,uuid:h})=>E===s&&!i.value.includes(h)).map(({uuid:E})=>E);await v(t);return}await o(s)&&(e.removeByType(s),n.removeByType(s))},removeById:async s=>{await v([s])}}},K=()=>{const e=C(),n=w(),{rayContinueExecution:c,rayStopExecution:i}=B(),{cachedIds:l}=f(e),{lockedIds:u}=f(n);return{normalizeUnknownEvent:H,events:J(),cachedEvents:{idsByType:l,stopUpdatesByType:e.setByType,runUpdatesByType:e.removeByType},lockedIds:{items:u,add:n.add,remove:n.remove},rayExecution:{continue:c,stop:i}}};export{b as R,K as u};