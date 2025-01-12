import{d as m,i as v,c as b,o as l,a as d,b as n,t as r,e as g,r as p,F as $,f as x,g as O,w,v as j,h as f,_ as k,p as y}from"./index-D_l_OIjs.js";const D=(h,s,a)=>{const e=h[s];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((t,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+s+(s.split("/").length!==a?". Note that variables only represent file names one level deep.":""))))})},E={key:0,class:"hero"},z={class:"hero-content"},M=["href"],N=m({__name:"Hero",setup(h){const s=v("language",{value:"zh"}),a=v("translations"),e=b(()=>a?a[s.value]:{});return(t,u)=>e.value?(l(),d("section",E,[n("div",z,[n("h1",null,r(e.value.greeting||"Loading..."),1),n("a",{href:e.value.githubUrl,class:"cta"},r(e.value.seeWork||"Loading..."),9,M)])])):g("",!0)}}),P={id:"about",class:"about"},S=m({__name:"About",setup(h){const s=v("language",{value:"zh"}),a=v("translations"),e=b(()=>a?a[s.value]:{});return(t,u)=>{var i,c;return l(),d("section",P,[n("h2",null,r(((i=e.value)==null?void 0:i.aboutTitle)||"About Me"),1),n("p",null,r(((c=e.value)==null?void 0:c.aboutDescription)||"Loading..."),1)])}}}),T={key:0,id:"projects",class:"projects"},C={class:"project-list"},H=["href"],R='<a href="',U=m({__name:"Projects",setup(h){const s=v("language",{value:"zh"}),a=v("translations"),e=b(()=>(a==null?void 0:a[s.value])||{}),t=p([]),u=new RegExp('^<a href=".*" itemprop="name codeRepository">.*</a>$');try{fetch("http://github.com/blankliu404?tab=repositories").then(i=>{console.log(JSON.stringify(i));const c=u.exec(JSON.stringify(i));if(console.log(c),c)for(const _ in c){let o=JSON.stringify(_);o=o.substring(o.indexOf(R)),t.value.push({name:o.substring(o.indexOf(">")+1,o.lastIndexOf("<")),githubLink:o.substring(0,o.indexOf('"'))})}console.log(t)})}catch(i){console.log(i)}return(i,c)=>e.value?(l(),d("section",T,[n("h2",null,r(e.value.projects||"Loading..."),1),n("div",C,[(l(!0),d($,null,x(t.value,_=>(l(),d("div",{key:_.name,class:"project-card"},[n("h3",null,r(_.name),1),n("a",{href:_.githubLink,target:"_blank",class:"project-link"},r(e.value.viewOnGitHub||"Loading..."),9,H)]))),128))])])):g("",!0)}}),V={key:0,class:"footer"},A={class:"social-links"},B=["href"],F=["href"],I=m({__name:"Footer",setup(h){const s=p(new Date().getFullYear()),a=v("language",{value:"zh"}),e=v("translations"),t=b(()=>e?e[a.value]:{});return(u,i)=>t.value?(l(),d("footer",V,[n("p",null,"© "+r(s.value)+" "+r(t.value.name),1),n("div",A,[n("a",{href:t.value.githubUrl,target:"_blank"},r(t.value.viewOnGitHub||"Loading..."),9,B),n("a",{href:t.value.csdnUrl,target:"_blank"},r(t.value.viewOnCSDN||"Loading..."),9,F)])])):g("",!0)}}),J={id:"app"},q={class:"controls"},G={key:0},Y=m({__name:"HomePage",setup(h){const s=p("en"),a=p(!1),e=O({en:null,zh:null}),t=p(!0),u=async _=>{try{const o=await D(Object.assign({"../assets/lang/en.json":()=>k(()=>import("./en-smixkh1b.js"),[]),"../assets/lang/zh.json":()=>k(()=>import("./zh-CbGcSuQF.js"),[])}),`../assets/lang/${_}.json`,4);e[_]=o.default,t.value=!1}catch(o){console.error("Error loading translations:",o),t.value=!1}};u(s.value),y("language",s),y("translations",e);const i=async()=>{t.value=!0,await u(s.value)},c=()=>{a.value=!a.value,a.value?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")};return(_,o)=>(l(),d("div",J,[n("div",q,[n("button",{class:"theme-toggle",onClick:c},r(a.value?"Light":"Dark")+" Mode",1),w(n("select",{"onUpdate:modelValue":o[0]||(o[0]=L=>s.value=L),onChange:i,class:"language-select"},o[1]||(o[1]=[n("option",{value:"en"},"English",-1),n("option",{value:"zh"},"中文",-1)]),544),[[j,s.value]])]),t.value?(l(),d("div",G,"Loading translations...")):g("",!0),t.value?g("",!0):(l(),f(N,{key:1})),t.value?g("",!0):(l(),f(U,{key:2})),t.value?g("",!0):(l(),f(S,{key:3})),t.value?g("",!0):(l(),f(I,{key:4}))]))}});export{Y as default};