(function(){var t={99228:function(){},72011:function(t,e,a){"use strict";a(66992),a(88674),a(19601),a(17727);var n=a(28935),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"fondo2"},[a("router-view")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"principal"},[n("v-toolbar",{staticClass:"barups",attrs:{expanded:"",dark:"",height:"90px"}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-spacer"),n("v-toolbar-title",{staticClass:"backt",staticStyle:{"font-size":"45px"}},[t._v("RED - PPI: IV")]),n("v-spacer"),n("v-btn",{staticClass:"back",attrs:{icon:""},on:{click:function(e){t.alert=!0}}},[n("v-icon",[t._v("mdi-export")])],1),n("v-btn",{staticClass:"back",attrs:{to:"/",icon:""}},[n("v-icon",[t._v("mdi-home")])],1)],1),n("v-row",[n("v-navigation-drawer",{staticClass:"menu",attrs:{absolute:"",temporary:"",light:"",left:"",height:"85%",width:"auto"},scopedSlots:t._u([{key:"append",fn:function(){return[n("div",{staticClass:"pa-2"},[n("v-btn",{on:{click:function(e){t.alert=!0}}},[t._v(" SALIR "),n("v-icon",{attrs:{right:""}},[t._v("mdi-exit-run")])],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dance:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.ruta,link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"titulosnav"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),n("v-row",[n("v-container",[n("v-dialog",{staticClass:"alertexit",attrs:{width:"400px",height:""},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[n("v-card",[n("v-toolbar",[n("v-spacer"),n("v-toolbar-title",[t._v(" GRACIAS POR USAR NUESTRO SISTEMA ")]),n("v-spacer")],1),n("v-spacer"),n("v-card-title",[t._v(" ¿Como calificaria su esperiencia? ")]),n("v-spacer"),n("v-card-text",[n("p",[n("v-btn",{staticClass:"ma-2",attrs:{text:"",color:"red",icon:""},on:{click:function(e){t.calificacion=1}}},[n("v-icon",{attrs:{color:"red"}},[t._v("mdi-heart")])],1),n("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:"blue"},on:{click:function(e){t.calificacion=2}}},[n("v-icon",[t._v("mdi-thumb-up")])],1),n("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:"brown"},on:{click:function(e){t.calificacion=3}}},[n("v-icon",[t._v("mdi-thumb-down")])],1)],1),n("p",[t._v(t._s(t.calificacionf))])]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{to:"/"},on:{click:function(e){t.alert=!1}}},[t._v("CERRAR")]),n("v-spacer")],1)],1)],1),n("div",[n("router-view")],1)],1)],1),n("v-footer",{staticClass:"footer",attrs:{rounded:"",dark:"",padless:""}},[n("v-row",{staticStyle:{padding:"5px"}},[n("v-card-text",[n("v-img",{staticClass:"imgsfooter",attrs:{src:a(41305)}}),n("p",[t._v(" Universidad de cordoba")]),n("p",[t._v(" Licenciatura en informatica — 2022 I ")])],1)],1)],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("div",{staticClass:"flip-card"},[n("div",{staticClass:"flip-card-inner"},[n("div",{staticClass:"flip-card-front"},[n("img",{staticStyle:{width:"300px",height:"300px"},attrs:{src:a(73256),alt:"Avatar"}})]),n("div",{staticClass:"flip-card-back"},[n("h1",[t._v("Jorge David Hernandez")]),n("p",{staticClass:"rol"},[t._v("Estudiante")]),n("p",[t._v("Creacion principal de backend")])])])]),n("div",{staticClass:"flip-card"},[n("div",{staticClass:"flip-card-inner"},[n("div",{staticClass:"flip-card-front"},[n("img",{staticStyle:{width:"300px",height:"300px"},attrs:{src:a(27041),alt:"Avatar"}})]),n("div",{staticClass:"flip-card-back"},[n("h1",[t._v("Steven Cuello Vásquez")]),n("p",{staticClass:"rol"},[t._v("Estudiante")]),n("p",[t._v("Analista de informacion")])])])]),n("div",{staticClass:"flip-card"},[n("div",{staticClass:"flip-card-inner"},[n("div",{staticClass:"flip-card-front"},[n("img",{staticStyle:{width:"300px",height:"300px"},attrs:{src:a(69002),alt:"Avatar"}})]),n("div",{staticClass:"flip-card-back"},[n("h1",[t._v("Camilo Gomez Bejarano")]),n("p",{staticClass:"rol"},[t._v("Estudiante")]),n("p",[t._v("Ilustracion y diseño")])])])]),n("div",{staticClass:"flip-card"},[n("div",{staticClass:"flip-card-inner"},[n("div",{staticClass:"flip-card-front"},[n("img",{staticStyle:{width:"300px",height:"300px"},attrs:{src:a(78934),alt:"Avatar"}})]),n("div",{staticClass:"flip-card-back"},[n("h1",[t._v("Sandra Diaz")]),n("p",{staticClass:"rol"},[t._v("DOCENTE")]),n("p",[t._v("Guia, mediador y facilitador de herramientas y conocimientos para las bases del RED")])])])])])],1)},l=[],d={data:function(){return{drawer:!1,alert:!1,calificacion:"",baseimg:"../assets/estudents/"}}},p=d,u=a(1001),v=(0,u.Z)(p,s,l,!1,null,null,null),m=v.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fondo"},[n("router-link",{attrs:{to:"/contenido"}},[n("v-img",{staticClass:"imagen",attrs:{src:a(46330),"max-width":"400px","max-height":"400px"}})],1),n("p",{staticClass:"parrafo"},[t._v("PRESIONE LA IMAGEN PARA IR A LOS CONTENIDOS, O PRESIONE LAS TRES LINEAS DE LA IZQUIERDA PARA NAVEGAR A OTROS LUGARES")])],1)},A=[],g=a(50218),b={data:function(){return{}},mounted:function(){var t=document.getElementById("act2"),e={h5pJsonPath:"/actividades/identifica tipos de datos",frameJs:"/actividades/frame.bundle.js",frameCss:"/actividades/styles/h5p.css"};new g.H5P(t,e)}},h=b,k=(0,u.Z)(h,f,A,!1,null,null,null),O=k.exports,C={data:function(){return{drawer:!1,alert:!1,calificacion:"",items:[{title:"Introduccion",icon:"mdi-home",ruta:"/principal"},{title:"Gestion escolar",icon:"mdi-school",ruta:"/gestionescolar"},{title:"Areas de gestion",icon:"mdi-lead-pencil",ruta:"/areasgestion"},{title:"Plan de mejoramiento",icon:"mdi-seal",ruta:"/planmejoramiento"},{title:"Estructura del plan",icon:"mdi-relative-scale",ruta:"/estructuraplan"},{title:"Bibliografia",icon:"mdi-library",ruta:"bibliografia"},{title:"Creditos",icon:"mdi-account-multiple-outline",ruta:"creditos"}],icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}},computed:{calificacionf:function(){return""==this.calificacion?"":1==this.calificacion?"Nos alegra demasiado, hasta la proxima!":2==this.calificacion?"Gracias! Mejoraremos para gustarte mas.":3==this.calificacion?"Que lastima! Seguiremos trabajando para mejorar.":void 0},exit:function(){swal("Hola estas feo")}},components:{Creditos:m,presentacion:O}},j=C,y=(0,u.Z)(j,c,r,!1,null,null,null),H=y.exports,x={name:"App",components:{Principal:H}},E=x,w=(0,u.Z)(E,i,o,!1,null,null,null),B=w.exports,I=a(12809),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todofondoinicio"},[n("router-link",{attrs:{to:"/principal"}},[n("v-img",{staticClass:"imgfondo",attrs:{src:a(46330)}})],1),n("v-btn",{staticClass:"btnir",attrs:{block:"",to:"/principal"}},[t._v("IR A principal")])],1)},R=[],S={},G=(0,u.Z)(S,P,R,!1,null,null,null),Q=G.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticClass:"divcontenido",staticStyle:{height:"100%"}},[a("h1",{staticClass:"titulovid"},[t._v("TIPOS DE DATOS EN JAVA SCRIPT")]),a("iframe",{staticClass:"videocontenido",attrs:{src:"https://www.youtube.com/embed/oZeT5jVoW9Q",title:"YouTube video player",frameborder:"0",allow:"accelerometer; \nautoplay; clipboard-write; \nencrypted-media; \ngyroscope; \npicture-in-picture"}})])])},V=[],D={},M=(0,u.Z)(D,z,V,!1,null,null,null),T=M.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-app",{staticClass:"red",attrs:{light:"",src:"../assets/inicio.png"}},[a("div",{staticClass:"exit"},[a("h1",{staticClass:"SEJUEE"},[t._v(" Como calificarias nuestro sistema?")]),a("div",{staticClass:"text-center"},[a("v-btn",{staticClass:"ma-2",attrs:{text:"",color:"red",icon:""}},[a("v-icon",{attrs:{color:"blue"}},[t._v(" mdi-heart ")])],1),a("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:"blue lighten-2"}},[a("v-icon",[t._v("mdi-thumb-up")])],1),a("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:"red lighten-2"}},[a("v-icon",[t._v("mdi-thumb-down")])],1)],1),a("v-alert",{attrs:{shaped:"",type:"success"},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v("Vuelva pronto! ")])],1)])],1)},J=[],U=a(99228),K=a.n(U),Y=K(),W=(0,u.Z)(Y,q,J,!1,null,null,null),Z=W.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",[t._v("¿Cuales son los tipos de datos?")])])},N=[],X={},L=(0,u.Z)(X,F,N,!1,null,null,null),_=L.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",{staticClass:"gestet",on:{click:function(e){t.info=!t.info,t.show=!t.show}}},[t._v("¿Que es la Gestion Escolar?")]),0==t.info?n("p",{staticClass:"btnclick"},[t._v("Click arriba"),n("v-icon",{attrs:{light:""}},[t._v("mdi-arrow-up-bold-circle")])],1):t._e(),n("br"),n("transition",{attrs:{name:"fade"}},[1==t.info?n("div",{staticClass:"gestioe"},[n("p",[t._v("“La gestión escolar en los establecimientos educativos, es un proceso sistemático que está orientado al fortalecimiento de las instituciones educativas y a sus proyectos, con el fin de enriquecer los procesos pedagógicos, directivos, comunitarios y administrativos; conservando la autonomía institucional, para así responder de una manera más acorde, a las necesidades educativas locales, regionales y mundiales. La importancia que tiene la gestión escolar para el mejoramiento de la calidad en el país, radica en el fortalecimiento de las secretarías de educación y de los establecimientos educativos; en sus instancias administrativas y sistema pedagógico, para generar cambios y aportar un valor agregado en conocimientos y desarrollo de competencias a los estudiantes.” - MEN, 2015. ")])]):t._e()]),n("transition",{attrs:{name:"bounce"}},[t.show?n("v-img",{staticClass:"imginfo",attrs:{src:a(45469),aling:"center",width:"500px",height:"500px"}}):t._e()],1)],1)},tt=[],et={data:function(){return{info:!1}}},at=et,nt=(0,u.Z)(at,$,tt,!1,null,null,null),it=nt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{color:"black"}},[a("div",[t.value<4?a("div",[a("v-btn",{staticClass:"mx-5",attrs:{dark:"",rounded:"",fixed:"",right:"",large:"",color:"black"},on:{click:function(e){t.value+=1}}},[t._v("Seguir "),a("v-icon",[t._v("mdi-arrow-right-bold-circle")])],1)],1):t._e(),a("h1",{staticClass:"areasgt"},[t._v("Areas de Gestion")]),a("transition",{attrs:{name:"slide-fade"}},[a("div",{staticClass:"containerarges"},[a("p",{staticClass:"areasg"},[t._v(" La gestión escolar está constituida por cuatro áreas de gestión: área de gestión directiva, área de gestión pedagógica y académica, área de gestión de la comunidad y área de gestión administrativa y financiera. "),a("br")]),t.value>=1?a("div",[a("h3",[t._v(" La Gestión Directiva cuenta con los procesos:")]),a("br"),t._v(" - Direccionamiento estratégico y horizonte institucional; Encabezado con el componente de misión, visión y principios. "),a("br"),t._v(" - Gestión estratégica; encabezado por componente de Liderazgo. "),a("br"),t._v(" - Gobierno escolar; Encabezado con el componente de consejo académico. "),a("br"),t._v(" - Cultura institucional; encabezado por el componente de mecanismos de comunicación. "),a("br"),t._v(" - Clima escolar; encabezado por el componente de pertenecía y participación. "),a("br"),t._v(" - Relaciones con el entorno; encabezado por el componente de familias o acudientes. "),a("br"),a("br")]):t._e(),t.value>=2?a("div",[a("h3",{staticClass:"areasg"},[t._v("La Gestión Académica cuenta con los procesos:")]),a("br"),t._v(" - Diseño pedagógico (curricular); encabezado por el componente plan de estudios. "),a("br"),t._v(" - Prácticas pedagógicas; encabezado por el componente opciones didácticas para las áreas, asignaturas y proyectos transversales. "),a("br"),t._v(" - Gestión de aula; encabezado por el componente relación pedagógica. "),a("br"),t._v(" - Seguimiento académico; encabezado por el componente seguimiento a los resultados académicos. "),a("br"),a("br")]):t._e(),t.value>=3?a("div",[a("h3",{staticClass:"arasg"},[t._v(" La Gestión Administrativa Y Financiera cuenta con los procesos:")]),a("br"),t._v(" - Apoyo a la gestión académica; encabezado por el componente de proceso de matrícula. "),a("br"),t._v(" - Administración de la planta física y de los recursos, encabezado por el componente mantenimiento de la planta física. "),a("br"),t._v(" - Administración de servicios complementarios; comenzado con el componente Servicios de transporte, restaurante, cafetería y salud (enfermería, odontología, psicología). "),a("br"),t._v(" - Talento humano; encabezado por el componente perfiles. "),a("br"),t._v(" - Apoyo financiero y contable; Encabezado por el componente presupuesto anual del Fondo de Servicios Educativos (FSE) "),a("br"),a("br")]):t._e(),t.value>=4?a("div",[a("h3",[t._v(" La Gestión De La Comunidad, con los procesos de:")]),a("br"),t._v(" - Accesibilidad; con componentes como: Proyectos de vida "),a("br"),t._v(" - Proyección a la comunidad; Encabezado por el componente escuela de padres. "),a("br"),t._v(" - Participación y convivencia, con componentes como: Participación de los estudiantes. "),a("br"),t._v(" - Prevención de riesgos, encabezado por el componente prevención de riesgos físicos. "),a("br")]):t._e(),a("p")])])],1)])},ct=[],rt={data:function(){return{value:0}}},st=rt,lt=(0,u.Z)(st,ot,ct,!1,null,null,null),dt=lt.exports;n["default"].use(I.Z);var pt=new I.Z({mode:"history",base:"red/",routes:[{path:"/",name:"Inicio",component:Q},{path:"/principal",name:"principal",component:H,children:[{path:"/contenido",name:"contenido",component:T},{path:"/exit",name:"exit",component:Z},{path:"/tiposdat",name:"tipos",component:_},{path:"/creditos",name:"creditos",component:m},{path:"/",name:"introduccion",component:O},{path:"/gestionescolar",name:"Gestionescolar",component:it},{path:"/areasgestion",name:"Areasgestion",component:dt}]}]}),ut=a(48209),vt=a.n(ut);a(30243);n["default"].use(vt());var mt=new(vt())({theme:{dark:!0,light:!1}});a(99806);n["default"].config.productionTip=!1,new n["default"]({router:pt,vuetify:mt,render:function(t){return t(B)}}).$mount("#app")},45469:function(t,e,a){"use strict";t.exports=a.p+"img/edu.be7033cb.jpg"},78934:function(t){"use strict";t.exports="data:image/jpeg;base64,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"},69002:function(t,e,a){"use strict";t.exports=a.p+"img/camilo.d44082c9.jpeg"},73256:function(t,e,a){"use strict";t.exports=a.p+"img/jorge.d6689226.jpg"},27041:function(t,e,a){"use strict";t.exports=a.p+"img/santiago.214d5de3.jpg"},46330:function(t,e,a){"use strict";t.exports=a.p+"img/portada.83feb57f.png"},41305:function(t,e,a){"use strict";t.exports=a.p+"img/unicordoba.f1e1123c.png"}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,o){if(!n){var c=1/0;for(d=0;d<t.length;d++){n=t[d][0],i=t[d][1],o=t[d][2];for(var r=!0,s=0;s<n.length;s++)(!1&o||c>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[s])}))?n.splice(s--,1):(r=!1,o<c&&(c=o));if(r){t.splice(d--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,i,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="red/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,c=n[0],r=n[1],s=n[2],l=0;if(c.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(s)var d=s(a)}for(e&&e(n);l<c.length;l++)o=c[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},n=self["webpackChunkred_praped"]=self["webpackChunkred_praped"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(72011)}));n=a.O(n)})();
//# sourceMappingURL=app-legacy.debdfcad.js.map