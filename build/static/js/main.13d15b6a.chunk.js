(this["webpackJsonpwasaapega-v2"]=this["webpackJsonpwasaapega-v2"]||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/logo.81c76b18.png"},30:function(e){e.exports=JSON.parse('{"title1":"Env\xeda mensajes de Whatsapp","title2":"sin agregar contactos","countryCode":"C\xf3digo de pa\xeds","phoneNumber":"N\xfamero","send":"Enviar","loading":"Cargando","welcome1":"\xbfPrimera vez que wasapeg\xe1s?","welcome2":"Todos los n\xfameros a los que les escribas se guardar\xe1n","welcome3":"en la memoria interna del navegador y listada aqu\xed abajo","history":"Historial de wasapegas","delete":"eliminar","unknown":"Desconocido","name":"Nombre","selectCountry":"Seleccione un pa\xeds","optional":"opcional","paisesError":"Error cargando paises","message":"Mensaje","validNumberQuestion":"\xbfEste numero es efectivamente un numero valido de WhatsApp?"}')},31:function(e){e.exports=JSON.parse('{"title1":"Send Whatsapp Messages","title2":"without adding contacts","countryCode":"Country code","phoneNumber":"Number","send":"Send","loading":"Loading","welcome1":"First time here?","welcome2":"All non-contacts you write to, will be saved","welcome3":"in your browser\'s local memory and listed here","history":"Wasapegas history","delete":"delete","unknown":"Unknown","name":"Name","selectCountry":"Select a country","optional":"optional","paisesError":"Error loading countries","message":"Message","validNumberQuestion":"Is this a valid WhatsApp number?"}')},33:function(e,a,t){e.exports=t(68)},38:function(e,a,t){},43:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(7),l=t.n(r),c=(t(38),t(17)),s=t(1),i=t(22),m=t.n(i),u=(t(39),t(40),t(41),t(42),t(43),t(8)),p=t(23),d=t(19),g=t(24),f=t(13),b=function(e){return o.a.createElement("div",{className:e.className?e.className:"p-col"},e.children)},h=t(3),E=t(18),v=t.n(E),j=t(28),O=function(e){return e&&e.map((function(e){return{label:"".concat(e.name," (").concat(e.callingCodes[0],")"),value:e.callingCodes[0]}}))},N=Object(n.memo)((function(e){var a=e.handleChanges,t=e.form,r=Object(n.useState)([]),l=Object(s.a)(r,2),c=l[0],i=l[1],m=Object(h.b)().t,u=Object(n.useState)(!1),p=Object(s.a)(u,2),d=p[0],g=p[1],f=Object(n.useState)(!1),b=Object(s.a)(f,2),E=b[0],N=b[1];return Object(n.useEffect)((function(){console.log("effect");!function(){var e,a;v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,v.a.awrap(fetch("http://ip-api.com/json?fields=countryCode").then((function(e){return e.json()})));case 4:return e=n.sent,n.next=7,v.a.awrap(fetch("https://restcountries.eu/rest/v2/all?fields=name;callingCodes;alpha2Code").then((function(e){return e.json()})));case 7:a=n.sent,i(a),t.country=a.find((function(a){return a.alpha2Code===e.countryCode})).callingCodes[0],g(!1),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),g(!1),N(!0);case 17:case"end":return n.stop()}}),null,null,[[0,13]])}()}),[]),o.a.createElement(o.a.Fragment,null,d&&o.a.createElement("pre",null,m("loading"),"..."),E&&o.a.createElement("h3",null,m("paisesError")),c&&o.a.createElement(j.Dropdown,{name:"country",value:t.country,options:O(c),onChange:a,placeholder:m("selectCountry")}))})),w=Object(n.memo)((function(e){var a=e.sendMessage,t=function(e){var a=Object(n.useState)(e),t=Object(s.a)(a,2),o=t[0],r=t[1];return[o,function(e){var a=e.target,t=a.name,n=a.value;r(Object(p.a)({},o,Object(u.a)({},t,n)))}]}({country:void 0,phone:"",name:"",message:""}),r=Object(s.a)(t,2),l=r[0],c=r[1],i=Object(h.b)().t;return o.a.createElement("form",{onSubmit:function(e){return a(e,l.country+l.phone,l.name,l.message)},className:"sender-form"},o.a.createElement(b,{className:"p-col-6 p-offset-3"},o.a.createElement(N,{handleChanges:c,form:l})),o.a.createElement("br",null),o.a.createElement(b,{className:"p-col-6 p-offset-3"},o.a.createElement("span",{className:"p-float-label"},o.a.createElement(d.InputText,{name:"phone",value:l.phone,onChange:c}),o.a.createElement("label",{htmlFor:"in"},i("phoneNumber")))),o.a.createElement("br",null),o.a.createElement(b,{className:"p-col-6 p-offset-3"},o.a.createElement("span",{className:"p-float-label"},o.a.createElement(d.InputText,{name:"name",value:l.name,onChange:c}),o.a.createElement("label",{htmlFor:"name"},i("name")))),o.a.createElement("br",null),o.a.createElement(b,{className:"p-col-6 p-offset-3"},o.a.createElement("span",{className:"p-float-label"},o.a.createElement(g.InputTextarea,{rows:5,cols:30,name:"message",onChange:c,value:l.message}),o.a.createElement("label",{htmlFor:"in"},i("message")))),o.a.createElement("br",null),o.a.createElement(b,{className:"p-col-6 p-offset-3"},o.a.createElement(f.Button,{label:i("send"),icon:"pi pi-check",iconPos:"right"})))})),y=o.a.createContext({history:[]}),C=t(6),k=t.n(C),S=t(29),x=Object(n.memo)((function(e){var a=e.sendMessage,t=Object(n.useContext)(y).history,r=Object(n.useState)([]),l=Object(s.a)(r,2),c=l[0],i=l[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),p=u[0],d=u[1],g=Object(h.b)(),b=Object(s.a)(g,1)[0];Object(n.useEffect)((function(){t&&i(t.reverse())}),[t]);var E=o.a.createElement("div",null,o.a.createElement(f.Button,{label:"Si",icon:"pi pi-check",onClick:function(){return d(!1)}}),o.a.createElement(f.Button,{label:"No",icon:"pi pi-times",onClick:function(){return d(!1)}}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",null,c.map((function(e,t){return o.a.createElement("li",{key:t,title:C(e.date).format("DD/MM/YYYY HH:mm"),className:"pointered"},o.a.createElement("span",{onClick:function(t){return a(t,e.phone,e.name,e.message,!1)}},e.name," ",C(e.date).fromNow()),o.a.createElement("span",{className:"pi pi-info",onClick:function(){return d(!0)}}))}))),o.a.createElement(S.Dialog,{header:"Numero valido",footer:E,visible:p,style:{width:"50vw"},modal:!0,onHide:function(){return d(!1)}},b("validNumberQuestion")))})),M=Object(n.memo)((function(){return o.a.createElement("footer",null,"by ",o.a.createElement("a",Object(u.a)({target:"_blank",rel:"noopener noreferrer",href:"https://thinkup.com.ar/contacto"},"rel","noreferrer"),"ThinkUp Studios")," - Argentina - 2020")})),W=o.a.memo((function(e){var a=e.changeLocale,t=e.logo,n=Object(h.b)().t;return o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"p-grid"},o.a.createElement(b,{className:"p-col-2 p-offset-10 pointered lang"},o.a.createElement("span",{onClick:function(){return a("es")}},"es")," |",o.a.createElement("span",{onClick:function(){return a("en")}}," en")),o.a.createElement(b,{className:"p-col-3 text-center"},o.a.createElement("img",{src:t,className:"App-logo",alt:"logo"}),o.a.createElement("br",null),o.a.createElement("small",null,"Wasapega v2")),o.a.createElement(b,{className:"p-col-9 text-middle"},o.a.createElement("h2",null,n("title1")))))}));var A=function(){var e=Object(n.useState)((function(){var e=localStorage.getItem("messageHistory");return console.log(e),e&&e.length?JSON.parse(e):[]})),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)("es"),i=Object(s.a)(l,2),u=i[0],p=i[1],d=Object(h.b)().i18n,g=Object(n.useCallback)((function(e){d.changeLanguage(e),p(e),C.locale(e)}),[]),f=Object(n.useCallback)((function(e,a,t,n){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.preventDefault(),window.open("https://wa.me/".concat(a,"?text=").concat(n)),o&&r((function(e){var o=Object(c.a)(e);return o.push({phone:a,name:t,message:n,date:new Date}),localStorage.setItem("messageHistory",JSON.stringify(o)),o}))}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement(y.Provider,{value:{history:t,locale:u}},o.a.createElement(W,{changeLocale:g,logo:m.a}),o.a.createElement("div",{className:"p-grid"},o.a.createElement(b,null,o.a.createElement(w,{sendMessage:f})),o.a.createElement(b,null,o.a.createElement(x,{sendMessage:f}))))),o.a.createElement(M,null))},D=t(20),F=t(30),I={en:{translation:t(31)},es:{translation:F}};console.log(I),D.a.use(h.a).init({resources:I,lng:"es",keySeparator:!1,interpolation:{escapeValue:!1}});D.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(65),t(66);k.a.locale("es"),l.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.13d15b6a.chunk.js.map