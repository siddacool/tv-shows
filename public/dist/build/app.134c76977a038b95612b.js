!function(n){function e(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:i})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="public/dist/build/",e(e.s=2)}([function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function n(e,t,o){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments[4],a=arguments[5],u=arguments[6],l=arguments[7],c=arguments[8],f=arguments[9];i(this,n),this.name=e,this.id=this.name.substring(0,20).replace(/[^a-z\d]+/gi,"").toLowerCase(),this.genre=t,this.type=o,this.isMindf=r,this.runtime=s,this.seasons=a,this.avgepisodes=u,this.network=l,this.status=c.toLowerCase(),this.imdb=f};e.default=o},function(n,e,t){"use strict";function i(n){return'\n    <svg role="img" class="icon">\n    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-'+n+'"></use>\n    </svg>\n  '}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(n,e,t){"use strict";t(3),t(15)},function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}var o=t(4),r=i(o),s=t(5),a=i(s),u=t(6),l=i(u),c=t(14),f=i(c),d=document.getElementById("wrapper"),p=function(){window.innerWidth<=1253?document.querySelector(".show-table--view-card")||(d.innerHTML="\n        "+(0,a.default)()+"\n      ",(0,l.default)("card")):document.querySelector(".show-table--view-list")||(d.innerHTML="\n        "+(0,r.default)()+"\n      ",(0,l.default)("list"),(0,f.default)())};setTimeout(function(){function n(){document.querySelector("[data-show-id]")?clearInterval(e):(p(),console.log("called"))}var e=setInterval(function(){n()},300)},300),addEventListener("resize",function(){p()})},function(n,e,t){"use strict";function i(){return'\n    <div class="show-table show-table--view-list" id="show-table">\n      <ul>\n        <span class="row-selector">\n        </span>\n        <li>name</li>\n        <li>genre</li>\n        <li>type</li>\n        <li>mindfuck</li>\n        <li>network</li>\n        <li>runtime</li>\n        <li>seasons</li>\n        <li>avg ep</li>\n        <li>status</li>\n        <li>IMDB</li>\n      </ul>\n      <div id="table-from-json" class="show-table-json">\n      </div>\n    </div>\n  '}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(n,e,t){"use strict";function i(){return'\n    <div class="show-table show-table--view-card" id="show-table">\n      <div id="table-from-json" class="show-table-json">\n      </div>\n    </div>\n  '}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function o(n){var e=new u.default,t=document.getElementById("table-from-json");(0,s.default)(e,n);var i=e.demand();t.innerHTML="\n    "+(0,c.default)(i)+"\n  "}Object.defineProperty(e,"__esModule",{value:!0});var r=t(7),s=i(r),a=t(12),u=i(a),l=t(13),c=i(l);e.default=o},function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(8),s=i(r),a=t(11),u=i(a),l=new XMLHttpRequest;l.open("GET","https://raw.githubusercontent.com/siddacool/api-set/master/youshouldbewatching.json",!0),l.onreadystatechange=function(){if(4===l.readyState&&200===l.status){var n=JSON.parse(l.responseText);o=n}},l.send(null);var c=function(n,e){void 0!==o&&o.forEach(function(t){"list"===e?n.add(s.default,t):n.add(u.default,t)})};e.default=c},function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function s(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function a(n){return"\n    "+n.map(function(n){return'\n      <span class="ui-pill ui-pill--info">'+n+"</span>\n    "}).join("")+"\n  "}function u(n){return"\n    "+(n?'<span class="ui-dot ui-dot--danger"></span>':"")+"\n  "}function l(n){return'\n    <li class="show-list-info--status \n      ui-backdrop '+("ongoing"===n?"ui-backdrop--safe":"ui-backdrop--danger")+'">\n      '+n+"\n    </li>\n  "}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),f=t(0),d=i(f),p=t(1),h=i(p),v=t(9),b=i(v),w="-",y=function(n){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w,s=arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:w,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:w,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:w,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:w,f=arguments.length>8&&void 0!==arguments[8]?arguments[8]:w,d=arguments.length>9&&void 0!==arguments[9]?arguments[9]:w;o(this,e);var p=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,t,i,s,a,u,l,c,f,d));return p.rowSelector=new b.default("row-select-"+p.id),p}return s(e,n),c(e,[{key:"render",value:function(){return'\n      <ol data-show-id="'+this.id+'">\n        '+this.rowSelector.render()+'\n        <li class="show-list-info--name">'+this.name+'</li>\n        <li class="show-list-info--genre">'+a(this.genre)+'</li>\n        <li class="show-list-info--type">'+this.type+'</li>\n        <li class="show-list-info--mindf">'+u(this.isMindf)+'</li>\n        <li class="show-list-info--network">'+this.network+'</li>\n        <li class="show-list-info--runtime ui-backdrop ui-backdrop--info">'+this.runtime+'</li>\n        <li class="show-list-info--seasons ui-backdrop ui-backdrop--warning">'+this.seasons+'</li>\n        <li class="show-list-info--avgepisodes ui-backdrop ui-backdrop--new">'+this.avgepisodes+"</li>\n        "+l(this.status)+'\n        <li class="show-list-info--imdb">\n          <a href="'+this.imdb+'" title="'+this.name+'" target="_blank" class="show-info--imdb">\n            '+(0,h.default)("new-window")+"\n          </a>\n        </li>\n      </ol>\n    "}}]),e}(d.default);e.default=y},function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function r(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),a=t(10),u=function(n){return n&&n.__esModule?n:{default:n}}(a),l=function(n){for(var e=document.querySelectorAll(".row-selector--dynamic"),t=0;t<e.length;t++){var i=e[t],o=i.parentElement;i.getAttribute("data-dom-id")===n.getAttribute("data-dom-id")?o.classList.toggle("active"):o.classList.remove("active")}},c=function(n){n.addEventListener("click",function(e){e.preventDefault(),l(n)})},f=function(n){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nota";return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n))}return r(e,n),s(e,[{key:"dom",value:function(){return'\n      <a href="#" data-dom-id="'+this.id+'" class="row-selector row-selector--dynamic"></a>\n    '}},{key:"events",value:function(){var n=document.querySelector('[data-dom-id="'+this.id+'"]');c(n)}}]),e}(u.default);e.default=f},function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),r=function(){function n(e){i(this,n),this.id=e}return o(n,[{key:"dom",value:function(){return'\n      <div data-dom-id="'+this.id+'">\n        sdafea\n      </div>\n    '}},{key:"events",value:function(){document.querySelector('[data-dom-id="'+this.id+'"]').addEventListener("click",function(){console.log("Default Event")})}},{key:"render",value:function(){var n=this,e=this.dom();return setTimeout(function(){document.querySelector('[data-dom-id="'+n.id+'"]')&&n.events()},50),e}}]),n}();e.default=r},function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function s(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function a(n){return"\n    "+(n?'<span class="show-card-info--mindf"><span class="ui-pill ui-pill--danger">Mind Fuck</span></span>':"")+"\n  "}function u(n){return'\n    <div class="show-card-info--genre">\n      '+n.map(function(n){return'\n        <span class="ui-pill ui-pill--info">'+n+"</span>\n      "}).join("")+"\n    </div>\n  "}function l(n){return'\n    <span class="show-card-info--seasons">\n      <span class="ui-tag ui-tag--warning">\n        '+n+"\n        "+(n<=1?"Season":"Seasons")+"\n      </span>\n    </span>\n  "}function c(n){return'\n    <span class="show-card-info--status">\n      <span class="ui-tag '+("ongoing"===n?"ui-tag--safe":"ui-tag--danger")+'">\n        '+n+"\n      </span>\n    </span>\n  "}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),d=t(1),p=i(d),h=t(0),v=i(h),b=function(n){function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",f=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",d=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"";return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,t,i,s,a,u,l,c,f,d))}return s(e,n),f(e,[{key:"header",value:function(){return'\n      <div class="show-card-info-header">\n        <div class="show-card-info-title">\n          <span class="show-card-info--name">\n            '+this.name+"\n          </span>\n          "+a(this.isMindf)+'\n        </div>\n        <div class="show-card-info-description">\n          <span class="show-card-info--type">'+this.type+"</span>"+(this.network?', <span class="show-card-info--network">'+this.network+"</span>":"")+"\n        </div>\n        "+u(this.genre)+"\n      </div>\n    "}},{key:"extended",value:function(){return'\n      <div class="show-card-info-extended">\n        <span class="show-card-info--runtime">\n          <span class="ui-tag ui-tag--info ui-tag--icon">\n            '+(0,p.default)("time")+" "+this.runtime+" Mins \n          </span> \n        </span>\n        "+l(this.seasons)+'\n        <span class="show-card-info--avgepisodes">\n          <span class="ui-tag ui-tag--new">\n            '+this.avgepisodes+" Episodes\n          </span> \n        </span>\n        "+c(this.status)+"\n      </div>\n    "}},{key:"render",value:function(){return'\n      <a data-show-id="'+this.id+'" \n      class="show-card" href="'+this.imdb+'" \n      title="'+this.name+'" target="_blank">\n        '+this.header()+"\n        "+this.extended()+"\n      </a>\n    "}}]),e}(v.default);e.default=b},function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),r=function(){function n(){i(this,n),this.list=[]}return o(n,[{key:"demand",value:function(){return this.list}},{key:"add",value:function(n,e){var t=new n(e.name,e.genre,e.type,e.mindf,e.runtime,e.seasons,e.avgepisodes,e.network,e.status,e.imdb);this.list.push(t)}}]),n}();e.default=r},function(n,e,t){"use strict";function i(n){return"\n    "+n.map(function(n){return"\n      "+n.render()+"\n    "}).join("")+"\n  "}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var n=document.getElementById("show-table"),e=n.querySelector("ul");n.addEventListener("scroll",function(){n.scrollTop>=e.offsetTop+20?n.classList.contains("sticky")||n.classList.add("sticky"):n.classList.remove("sticky")})};e.default=i},function(n,e){}]);