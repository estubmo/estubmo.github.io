(function(){"use strict";var e={5891:function(e,t,o){var n=o(9242),a=o(2483),i=o(3396);const l={id:"app"},s={class:"container"};function r(e,t,o,n,a,r){const p=(0,i.up)("NavBar"),d=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(p),(0,i._)("div",s,[(0,i.Wm)(d)])])}const p={class:"nav-wrapper green"},d={class:"container"};function c(e,t,o,n,a,l){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("nav",null,[(0,i._)("div",p,[(0,i._)("div",d,[(0,i.Wm)(s,{to:"/",class:"brand-logo"},{default:(0,i.w5)((()=>[(0,i.Uk)("Employee Manager")])),_:1})])])])}var u={name:"NavBar",data(){return{}}},m=o(89);const y=(0,m.Z)(u,[["render",c]]);var _=y;(0,i.bv)((()=>{console.log("mounted")}));var f={name:"App",components:{NavBar:_}};const v=(0,m.Z)(f,[["render",r]]);var h=v,w=o(7139);const b={id:"main-dashboard"},g=(0,i._)("h3",null,"Dashboard",-1),E={class:"collection with-header"},k=(0,i._)("li",{class:"collection-header"},[(0,i._)("h4",null,"Employees")],-1),D={class:"chip"},O=(0,i._)("i",{class:"fa fa-eye"},null,-1),x={class:"fixed-action-btn"},I=(0,i._)("i",{class:"fa fa-plus"},null,-1);function U(e,t,o,n,a,l){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",b,[g,(0,i._)("ul",E,[k,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.employees,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e.id,class:"collection-item"},[(0,i._)("div",D,(0,w.zw)(e.dept),1),(0,i.Uk)(" "+(0,w.zw)(e.employee_id)+":"+(0,w.zw)(e.name)+" ",1),(0,i.Wm)(s,{class:"secondary-content",to:{name:"view-employee",params:{employee_id:e.employee_id}}},{default:(0,i.w5)((()=>[O])),_:2},1032,["to"])])))),128))]),(0,i._)("div",x,[(0,i.Wm)(s,{to:"/new",class:"btn-floating btn-large red"},{default:(0,i.w5)((()=>[I])),_:1})])])}o(7658);var W=o(4275),P=o(6035);const V={apiKey:"AIzaSyCuNEfBSl0FoQbHfZ7maBK4e5Kn05WzoYw",authDomain:"vue-firestore-course-test.firebaseapp.com",projectId:"vue-firestore-course-test",storageBucket:"vue-firestore-course-test.appspot.com",messagingSenderId:"816439295166",appId:"1:816439295166:web:310ac88a8a1ce1cdcbf2ef",measurementId:"G-WE0GKLV9Z5"},z=(0,W.ZF)(V),B=(0,P.ad)(z);var Z={name:"MainDashboard",data(){return{employees:[]}},created:async function(){const e=(0,P.hJ)(B,"employees"),t=(0,P.IO)(e,(0,P.Xo)("dept")),o=await(0,P.PL)(t);o.forEach((e=>{const t={id:e.id,employee_id:e.data().employee_id,name:e.data().name,dept:e.data().dept,position:e.data().position};this.employees.push(t)}))}};const q=(0,m.Z)(Z,[["render",U]]);var j=q;const J={id:"new-employee"},L=(0,i._)("h3",null,"New Employee",-1),N={class:"row"},S={class:"row"},$={class:"input-field col s12"},K=(0,i._)("label",null,"Employee ID#",-1),M={class:"row"},C={class:"input-field col s12"},A=(0,i._)("label",null,"Name",-1),F={class:"row"},R={class:"input-field col s12"},T=(0,i._)("label",null,"Department",-1),G={class:"row"},H={class:"input-field col s12"},Y=(0,i._)("label",null,"Position",-1),Q=(0,i._)("button",{type:"submit",class:"btn"},"Submit",-1);function X(e,t,o,a,l,s){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",J,[L,(0,i._)("div",N,[(0,i._)("form",{class:"col s12",onSubmit:t[4]||(t[4]=(0,n.iM)(((...e)=>s.saveEmployee&&s.saveEmployee(...e)),["prevent"]))},[(0,i._)("div",S,[(0,i._)("div",$,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.employee_id=e),type:"text",required:""},null,512),[[n.nr,l.employee_id]]),K])]),(0,i._)("div",M,[(0,i._)("div",C,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.name=e),type:"text",required:""},null,512),[[n.nr,l.name]]),A])]),(0,i._)("div",F,[(0,i._)("div",R,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.dept=e),type:"text",required:""},null,512),[[n.nr,l.dept]]),T])]),(0,i._)("div",G,[(0,i._)("div",H,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.position=e),type:"text",required:""},null,512),[[n.nr,l.position]]),Y])]),Q,(0,i.Wm)(r,{to:"/",class:"btn grey"},{default:(0,i.w5)((()=>[(0,i.Uk)("Back")])),_:1})],32)])])}var ee={name:"NewEmployee",data(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:async function(){const e=(0,P.hJ)(B,"employees");try{await(0,P.ET)(e,{employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}),this.$router.push("/")}catch(t){console.log(t)}}}};const te=(0,m.Z)(ee,[["render",X]]);var oe=te;const ne={id:"edit-employee"},ae=(0,i._)("h3",null,"Edit Employee",-1),ie={class:"row"},le={class:"row"},se={class:"input-field col s12"},re={class:"row"},pe={class:"input-field col s12"},de={class:"row"},ce={class:"input-field col s12"},ue={class:"row"},me={class:"input-field col s12"},ye=(0,i._)("button",{type:"submit",class:"btn"},"Submit",-1);function _e(e,t,o,a,l,s){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",ne,[ae,(0,i._)("div",ie,[(0,i._)("form",{class:"col s12",onSubmit:t[4]||(t[4]=(0,n.iM)(((...e)=>s.updateEmployee&&s.updateEmployee(...e)),["prevent"]))},[(0,i._)("div",le,[(0,i._)("div",se,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.employee_id=e),disabled:"",type:"text",required:""},null,512),[[n.nr,l.employee_id]])])]),(0,i._)("div",re,[(0,i._)("div",pe,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.name=e),type:"text",required:""},null,512),[[n.nr,l.name]])])]),(0,i._)("div",de,[(0,i._)("div",ce,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.dept=e),type:"text",required:""},null,512),[[n.nr,l.dept]])])]),(0,i._)("div",ue,[(0,i._)("div",me,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.position=e),type:"text",required:""},null,512),[[n.nr,l.position]])])]),ye,(0,i.Wm)(r,{to:"/",class:"btn grey"},{default:(0,i.w5)((()=>[(0,i.Uk)("Back")])),_:1})],32)])])}var fe={name:"EditEmployee",beforeRouteEnter:async function(e,t,o){const n=(0,P.hJ)(B,"employees"),a=(0,P.IO)(n,(0,P.ar)("employee_id","==",e.params.employee_id)),i=await(0,P.PL)(a);i.forEach((e=>{o((t=>{t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position}))}))},data(){return{employee_id:null,name:null,dept:null,position:null,doc:null,data:"cakecake",ref:null}},watch:{$route:"beforeRouteEnter"},methods:{updateEmployee:async function(){try{const e=(0,P.hJ)(B,"employees"),t=(0,P.IO)(e,(0,P.ar)("employee_id","==",this.employee_id)),o=await(0,P.PL)(t);let n;o.forEach((e=>{n=e.ref})),await(0,P.r7)(n,{name:this.name,dept:this.dept,position:this.position}),this.$router.push({name:"view-employee",params:{employee_id:this.employee_id}})}catch(e){console.log(e)}}}};const ve=(0,m.Z)(fe,[["render",_e]]);var he=ve;const we={id:"view-employee"},be={class:"collection with-header"},ge={class:"collection-header"},Ee={class:"collection-item"},ke={class:"collection-item"},De={class:"collection-item"},Oe={class:"fixed-action-btn"},xe=(0,i._)("i",{class:"fa fa-pencil"},null,-1);function Ie(e,t,o,n,a,l){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",we,[(0,i._)("ul",be,[(0,i._)("li",ge,[(0,i._)("h4",null,(0,w.zw)(a.name),1)]),(0,i._)("li",Ee,"Employee ID#: "+(0,w.zw)(a.employee_id),1),(0,i._)("li",ke,"Department: "+(0,w.zw)(a.dept),1),(0,i._)("li",De,"Position: "+(0,w.zw)(a.position),1)]),(0,i.Wm)(s,{to:"/",class:"btn grey"},{default:(0,i.w5)((()=>[(0,i.Uk)("Back")])),_:1}),(0,i._)("button",{class:"btn red",onClick:t[0]||(t[0]=(...e)=>l.deleteEmployee&&l.deleteEmployee(...e))},"Delete"),(0,i._)("div",Oe,[(0,i.Wm)(s,{to:{name:"edit-employee",params:{employee_id:a.employee_id?a.employee_id:1}},class:"btn-floating btn-large red"},{default:(0,i.w5)((()=>[xe])),_:1},8,["to"])])])}var Ue={name:"ViewEmployee",beforeRouteEnter:async function(e,t,o){const n=(0,P.hJ)(B,"employees"),a=(0,P.IO)(n,(0,P.ar)("employee_id","==",e.params.employee_id)),i=await(0,P.PL)(a);i.forEach((e=>{o((t=>{t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position}))}))},data(){return{employee_id:null,name:null,dept:null,position:null}},watch:{$route:"fetchData"},methods:{fetchData(){const e=(0,P.hJ)(B,"employees"),t=(0,P.IO)(e,(0,P.ar)("employee_id","==",this.$route.params.employee_id)),o=(0,P.PL)(t);o.forEach((e=>{this.employee_id=e.data().employee_id,this.name=e.data().name,this.dept=e.data().dept,this.position=e.data().position}))},deleteEmployee:async function(){if(confirm("Are you sure?")){const e=(0,P.hJ)(B,"employees"),t=(0,P.IO)(e,(0,P.ar)("employee_id","==",this.$route.params.employee_id)),o=await(0,P.PL)(t);o.forEach((e=>{(0,P.oe)(e.ref),this.$routes.push("/")}))}}}};const We=(0,m.Z)(Ue,[["render",Ie]]);var Pe=We;const Ve=[{path:"/",component:j,name:"main-dashboard"},{path:"/new",component:oe,name:"new-employee"},{path:"/edit/:employee_id",component:he,name:"edit-employee"},{path:"/:employee_id",component:Pe,name:"view-employee"}];var ze=Ve;const Be=(0,a.p7)({history:(0,a.r5)(),routes:ze});(0,n.ri)(h).use(Be).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,i){if(!n){var l=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],i=e[d][2];for(var s=!0,r=0;r<n.length;r++)(!1&i||l>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[r])}))?n.splice(r--,1):(s=!1,i<l&&(l=i));if(s){e.splice(d--,1);var p=a();void 0!==p&&(t=p)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,a,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,l=n[0],s=n[1],r=n[2],p=0;if(l.some((function(t){return 0!==e[t]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(r)var d=r(o)}for(t&&t(n);p<l.length;p++)i=l[p],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self["webpackChunkvue3_firebase_employee_manager_course"]=self["webpackChunkvue3_firebase_employee_manager_course"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5891)}));n=o.O(n)})();
//# sourceMappingURL=app.09317234.js.map