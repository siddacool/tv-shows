!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="public/dist/build/",t(t.s=11)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.utils=t.Logger=t.Router=t.ActiveComponent=t.Component=void 0;var o=r(n(6)),s=r(n(14)),i=r(n(17)),u=r(n(1)),a=r(n(22));t.Component=o.default,t.ActiveComponent=s.default,t.Router=i.default,t.Logger=u.default,t.utils=a.default},function(e,t,n){"use strict";function r(e,t,n,r,o,s){var i=function(e){var t=console[e],n=console.log;return t&&(n=t),n}(s);""===n?(i("%c"+e,r),console.log(t),console.log("")):i("%c"+e+"%c "+t,r,o)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.moduleName=""!==t?"["+t+"]":"",this.moduleNameStyles="color: #565656; font-weight: bold; font-size: 13.5px;"}return o(e,[{key:"log",value:function(e,t){r(this.moduleName,e,t,this.moduleNameStyles,"color: #333;")}},{key:"info",value:function(e,t){r(this.moduleName,e,t,this.moduleNameStyles+" color: #0066ff; background-color: #daeafb;","color: #0066ff;")}},{key:"safe",value:function(e,t){r(this.moduleName,e,t,this.moduleNameStyles+" color: #39a045; background-color: #dafbe4;","color: #39a045;")}},{key:"warn",value:function(e,t){r(this.moduleName,e,t,this.moduleNameStyles+" color: #d28e13;","color: #d28e13;","warn")}},{key:"error",value:function(e,t){r(this.moduleName,e,t,this.moduleNameStyles+" color: red;","color: red;","error")}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=class extends r.Component{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";super(),this.text=e,this.fieldName=t,this.classNames=n}dom(){return'\n      <li class="show-list-info--'+this.fieldName+" "+this.classNames+'">'+this.text+"</li>\n    "}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(20)),s=r(n(21)),i=function(){var e=location.hash,t=e,n="",r="";if(t.includes("?")){var i=t.split("?");if(t=i[0],""!==(n=i[1].replace(/\//g,""))){for(var u={},a=n.split("&"),l=0;l<a.length;l++){var d=a[l].split("="),c=d[0],f=d[1];u[c]=f}r=u}}t=t.endsWith("/")&&!t.endsWith("#/")?t.slice(0,-1).replace("#",""):t.replace("#","");return{hash:e.replace("#",""),path:t,search:n,query:r,set:o.default,get:s.default}};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(2));t.default=class extends r.default{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";super(e,t),this.ui=n,this.classNames="ui-backdrop ui-backdrop--"+this.ui}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=class extends r.Component{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];super(),this.text=e,this.fieldName=t,this.ui=n,this.icon=r}dom(){return'\n      <span class="show-card-info--'+this.fieldName+'">\n        <span class="ui-tag ui-tag--'+this.ui+" "+(this.icon?"ui-tag--icon":"")+'">\n          '+this.text+"\n        </span>\n      </span>\n    "}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=r(n(13)),i=new(r(n(1)).default),u={parent:document.getElementById("wrapper"),dom:"\n    <div>\n      Domr Component\n    </div>\n  "},a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentDefault=u.parent,this.domContent=u.dom,this.createElement=s.default}return o(e,[{key:"dom",value:function(){return this.domContent}},{key:"renderNodes",value:function(){return this.createElement(this.dom())}},{key:"fireEventAfterTimeout",value:function(){}},{key:"addTo",value:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.parentDefault).insertAdjacentHTML("beforeend",this.renderNodes()),this.fireEventAfterTimeout()}},{key:"addFromStartTo",value:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.parentDefault).insertAdjacentHTML("afterbegin",this.renderNodes()),this.fireEventAfterTimeout()}},{key:"addBefore",value:function(e){e?(e.insertAdjacentHTML("beforebegin",this.renderNodes()),this.fireEventAfterTimeout()):i.error("sibling not found")}},{key:"addAfter",value:function(e){e?(e.insertAdjacentHTML("afterend",this.renderNodes()),this.fireEventAfterTimeout()):i.error("sibling not found")}},{key:"replaceWith",value:function(e){if(e){var t=e.parentElement;t?(e.insertAdjacentHTML("afterend",this.renderNodes()),t.removeChild(e),this.fireEventAfterTimeout()):i.warn("sibling has no parentElement")}else i.error("sibling not found")}},{key:"replaceContentOf",value:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.parentDefault).innerHTML=this.renderNodes(),this.fireEventAfterTimeout()}},{key:"render",value:function(){return this.fireEventAfterTimeout(),this.renderNodes()}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return'\n    <span class="ui-pill ui-pill--info">'+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")+"</span>\n  "}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(4));t.default=class extends r.default{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"","status",arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var e=JSON.parse(r.responseText);n(e,t)}},r.send(null)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(5));t.default=class extends r.default{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"","status",arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")}}},function(e,t,n){"use strict";n(12),n(51)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),s=r(n(23)),i=r(n(39)),u="https://raw.githubusercontent.com/siddacool/api-set/master/youshouldbewatching.json",a=[{name:"Desktop Table View",path:"/",view:s.default,isDefault:!0,api:u},{name:"Cards View",path:"/cards",view:i.default,api:u}];new o.Router(a,{redirectDefault:!0,clearLog:!0}).start()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=document.createElement("div");n.innerHTML=e;for(var r=document.createDocumentFragment(),o=0;o<n.childNodes.length;o++){var s=n.childNodes[o].cloneNode(!0);r.appendChild(s)}return t&&r.childNodes[1].setAttribute("data-domr-id",t),r.childNodes[1].outerHTML}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=r(n(6)),i=r(n(1)),u=r(n(15)),a=r(n(16)),l=new i.default,d=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"domr-active-component";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.domrid=e+"-"+(0,a.default)(7),n.lookup=function(){return(0,u.default)(n.domrid)},n.target=n.lookup,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),o(t,[{key:"events",value:function(){var e=this;this.target().addEventListener("click",function(){l.log("Default Event for "+e.domrid)})}},{key:"fireEventAfterTimeout",value:function(){var e=this;setTimeout(function(){e.lookup()&&e.events()},50)}},{key:"renderNodes",value:function(){return this.createElement(this.dom(),this.domrid)}}]),t}();t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=document.querySelector('[data-domr-id="'+e+'"]');if(t)return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7;return Math.random().toString(36).substr(2,e)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=r(n(1)),i=r(n(18)),u=r(n(3)),a=new s.default,l=function(e){var t=[];return e.forEach(function(e){e.path&&e.view&&t.push(e)}),t},d={routes:[],config:{redirectDefault:!1,refreshPage:!1,clearLog:!1}},c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.routes,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.config;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.routes=l(t),this.redirectDefault=n.redirectDefault||!1,this.refreshPage=n.refreshPage||!1,this.clearLog=n.clearLog||!1,this.addView=i.default}return o(e,[{key:"showRoutes",value:function(){console.log(this.routes)}},{key:"reloadOnHashChange",value:function(){var e=this;addEventListener("hashchange",function(t){e.clearLog&&(console.API,void 0!==console._commandLineAPI?console.API=console._commandLineAPI:void 0!==console._inspectorCommandLineAPI?console.API=console._inspectorCommandLineAPI:void 0!==console.clear&&(console.API=console),console.API.clear()),e.refreshPage?location.reload():(e.start(),t.stopImmediatePropagation())})}},{key:"start",value:function(){var e=(0,u.default)(),t=e.path,n=void 0;if(""===t&&(location.hash="#/"),this.routes.forEach(function(r){var o=r.path;o.endsWith("/")&&"/"!==o&&(o=o.slice(0,-1));var s=[],i=o.replace(/([:*])(\w+)/g,function(e,t,n){return s.push(n),"([^/]+)"})+"(?:/|$)",u=t.match(new RegExp(i));if(u){var a=u.slice(1,u.length).reduce(function(e,t,n){return null===e&&(e={}),e[s[n]]=t,e},null);r.metadata=a||"",r.query=e.query,n=r}}),n)this.addView(n);else{var r=this.routes.find(function(e){return!0===e.isDefault});this.redirectDefault&&r?this.addView(r):a.error("Page Not Found")}this.reloadOnHashChange()}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(19));t.default=function(e){var t=e.view,n=(0,r.default)(e,["view"]);e&&t&&"function"==typeof t&&t(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=["view"];t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n={};return Object.keys(e).forEach(function(r){var o=e[r];(function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0})(t,r)||(n[r]=o)}),n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e;return t.startsWith("#")||(t="#"+t),t}function s(e){var t=e,n=(0,i.default)().path;return n.endsWith("/")&&(n=n.slice(0,-1)),t.startsWith("?")||(t="?"+t),t=o(n+"/"+t)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(3)),u=new(r(n(1)).default);t.default=function(e,t){var n=t,r=void 0;switch(e){case"search":r=s(n);break;case"query":r=function(e){return s(function(e){var t=[];for(var n in e)t.push(n+"="+e[n]);return"?"+t.join("&")}(e))}(n);break;case"path":r=function(e){var t=(0,i.default)().search,n=e;return n.startsWith("#")&&(n=n.slice(0,-1)),t&&(n.endsWith("/")||(n+="/"),n=n+"?"+t),n=o(n)}(n);break;case"hash":r=o(n)}r?function(e){location.hash=e}(r):u.error("incorrect set location params")}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(3)),s=new(r(n(1)).default);t.default=function(e){var t=(0,o.default)()[e];if(t)return t;s.error("incorrect get location params")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={hashLocation:function(e){return e&&e.__esModule?e:{default:e}}(n(3)).default};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new o.default(e.api),n=document.getElementById("wrapper"),s=r.utils.hashLocation();window.innerWidth<=1253?s.set("path","/cards"):t.replaceContentOf(n)};var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n(24))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n(25));t.default=class extends r.Component{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";super(),this.api=e}dom(){return"\n      "+new o.default(this.api).render()+"\n    "}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),s=r(n(26)),i=r(n(37)),u=["name","genre","type","mindfuck","network","runtime","seasons","avg ep","status","IMDB"],a=[];t.default=class extends o.Component{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;super(),this.fields=u,this.api=e}dom(){var e=new i.default(this.fields),t=new s.default(this.api);return'\n      <div class="show-table show-table--view-list" id="show-table">\n        '+e.render()+"\n        "+t.render()+"\n      </div>\n    "}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=t;e.forEach(function(e){new i.default(e).addTo(n)})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),i=r(n(27)),u=r(n(9)),a=[];t.default=class extends s.ActiveComponent{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;super("table-json"),this.api=e}dom(){return'\n      <div id="table-from-json" class="show-table-json">\n      </div>\n    '}events(){var e=this.target();(0,u.default)(this.api,e,o)}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),s=r(n(2)),i=r(n(28)),u=r(n(29)),a=r(n(30)),l=r(n(31)),d=r(n(32)),c=r(n(33)),f=r(n(34)),h=r(n(35)),v=r(n(36)),p={};t.default=class extends o.Component{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;super(),this.name=e.name||"",this.genre=e.genre||"",this.type=e.type||"",this.mindfuck=e.mindf||!1,this.network=e.network||"-",this.runtime=e.runtime||"",this.seasons=e.seasons||"",this.avgepisodes=e.avgepisodes||"",this.status=e.status.toLowerCase()||"",this.imdb=e.imdb||""}dom(){var e=new i.default(this.name),t=new u.default(this.genre),n=new s.default(this.type,"type"),r=new a.default(this.mindfuck),o=new s.default(this.network,"network"),p=new l.default(this.runtime),m=new d.default(this.seasons),_=new c.default(this.avgepisodes),g=new f.default,b=new h.default,w=new v.default(this.name,this.imdb);return'\n      <ol data-id="'+this.name+'">\n        '+e.render()+"\n        "+t.render()+"\n        "+n.render()+"\n        "+r.render()+"\n        "+o.render()+"\n        "+p.render()+"\n        "+m.render()+"\n        "+_.render()+"\n        "+("ongoing"===this.status?""+g.render():""+b.render())+"\n        "+w.render()+"\n      <ol>\n    "}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=class extends r.ActiveComponent{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";super(),this.text=e}dom(){return'\n      <li class="show-list-info--name">'+this.text+"</li>\n    "}events(){var e=this.target();e.addEventListener("click",function(){!function(e){for(var t=document.getElementById("table-from-json").querySelectorAll("ol"),n=0;n<t.length;n++)t[n]===e?t[n].classList.add("active"):t[n].classList.remove("active")}(e.parentElement)})}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(2)),s=r(n(7)),i=[];t.default=class extends o.default{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;super(),this.genres=e,this.fieldName="genre",this.text=""+this.genres.map(function(e){return""+(0,s.default)(e)}).join("")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(2));t.default=class extends r.default{constructor(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];super(),this.isMindFuck=e,this.fieldName="mindf",this.text=this.isMindFuck?'<span class="ui-dot ui-dot--danger"></span>':""}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(4));t.default=class extends r.default{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"","runtime","info")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(4));t.default=class extends r.default{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"","seasons","warning")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(4));t.default=class extends r.default{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"","avgepisodes","new")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(8));t.default=class extends r.default{constructor(){super("ongoing","safe")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(8));t.default=class extends r.default{constructor(){super("finished","danger")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(2));t.default=class extends r.default{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";super(),this.nameOfShow=e,this.link=t,this.fieldName="imdb",this.text=function(e,t){return'\n    <a href="'+t+'" title="'+e+'" target="_blank" class="show-info--imdb">\n      <svg role="img" class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-new-window"></use></svg>\n    </a>\n  '}(this.nameOfShow,this.link)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n(38)),s=[];t.default=class extends r.Component{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;super(),this.fields=e}dom(){return"\n      <ul>\n        "+this.fields.map(function(e){return""+function(e){return""+new o.default(e).render()}(e)}).join("")+"\n      </ul>\n    "}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=class extends r.Component{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";super(),this.text=e}dom(){return"\n      <li>"+this.text+"</li>\n    "}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new r.default(e.api),n=document.getElementById("wrapper");t.replaceContentOf(n)};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(40))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n(41));t.default=class extends r.Component{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";super(),this.api=e}dom(){return"\n      "+new o.default(this.api).render()+"\n    "}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=document.getElementById("table-from-json");e.forEach(function(e){new i.default(e).addTo(t)})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),i=r(n(42)),u=r(n(9)),a=[];t.default=class extends s.ActiveComponent{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;super("show-table"),this.api=e}dom(){return'\n      <div class="show-table show-table--view-card" id="show-table">\n        <div id="table-from-json" class="show-table-json">\n        </div>\n      </div>\n    '}events(){var e=this.target();(0,u.default)(this.api,e,o)}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),s=r(n(43)),i=r(n(44)),u=r(n(45)),a=r(n(46)),l=r(n(47)),d=r(n(48)),c=r(n(49)),f=r(n(50)),h={};t.default=class extends o.Component{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;super(),this.name=e.name||"",this.genre=e.genre||"",this.type=e.type||"",this.mindfuck=e.mindf||!1,this.network=e.network||"",this.runtime=e.runtime||"",this.seasons=e.seasons||"",this.avgepisodes=e.avgepisodes||"",this.status=e.status.toLowerCase()||"",this.imdb=e.imdb||""}dom(){var e=new s.default(this.name,"name"),t=new i.default(this.genre),n=new s.default(this.type,"type"),r=new s.default(this.network,"network"),o=new a.default(this.runtime),h=new l.default(this.seasons),v=new d.default(this.avgepisodes),p=new f.default,m=new c.default;return'\n      <a class="show-card" href="'+this.imdb+'" title="'+this.name+'" target="_blank">\n        <div class="show-card-info-header">\n          <div class="show-card-info-title">\n            '+e.render()+" "+(this.mindfuck?""+(0,u.default)():"")+'\n          </div>\n          <div class="show-card-info-description">\n            '+n.render()+(this.network?",":"")+" "+r.render()+"\n          </div>\n          "+t.render()+'\n        </div>\n        <div class="show-card-info-extended">\n          '+o.render()+"\n          "+h.render()+"\n          "+v.render()+"\n          "+("ongoing"===this.status?""+p.render():""+m.render())+"\n        </div>\n      </a>\n    "}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=class extends r.Component{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";super(),this.text=e,this.fieldName=t}dom(){return'\n      <span class="show-card-info--'+this.fieldName+'">'+this.text+"</span>\n    "}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n(7)),s=[];t.default=class extends r.Component{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;super(),this.genres=e}dom(){return'\n      <div class="show-card-info--genre">\n        '+this.genres.map(function(e){return""+(0,o.default)(e)}).join("")+"\n      </div>\n    "}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return'\n    <span class="show-card-info--mindf">\n      <span class="ui-pill ui-pill--danger">Mind Fuck</span>\n    </span>\n  '}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(5));t.default=class extends r.default{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";super(),this.fieldName="runtime",this.ui="info",this.text='\n  <svg role="img" class="icon">\n    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-time"></use>\n  </svg>\n '+e+" Mins",this.icon=!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(5));t.default=class extends r.default{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;super(),this.season=e,this.text=this.season+" "+function(e){var t="Season";return e>1&&(t+="s"),t}(this.season),this.fieldName="seasons",this.ui="warning"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(5));t.default=class extends r.default{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;super(),this.episode=e,this.text=this.episode+" "+function(e){var t="Episode";return e>1&&(t+="s"),t}(this.episode),this.fieldName="avgepisodes",this.ui="new"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(10));t.default=class extends r.default{constructor(){super("finished","danger")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(10));t.default=class extends r.default{constructor(){super("ongoing","safe")}}},function(e,t){}]);