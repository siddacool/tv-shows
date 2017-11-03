/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public/dist/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActiveComponent__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Logger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_0__Component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__ActiveComponent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_2__Router__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return __WEBPACK_IMPORTED_MODULE_3__Logger__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return __WEBPACK_IMPORTED_MODULE_4__utils__["a"]; });









/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function consoleType(type) {
  const clog = console[type];
  let clogType = console.log;

  if (clog) {
    clogType = clog;
  }

  return clogType;
}

function makeConsole(moduleName, msg, config, style, styleMsg, type) {
  const log = consoleType(type);

  if (config === '') {
    log(
      `%c${moduleName}`,
      style,
    );
    console.log(msg);
    console.log('');
  } else {
    log(
      `%c${moduleName}%c ${msg}`,
      style,
      styleMsg,
    );
  }
}


/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor(moduleName = '') {
    this.moduleName = moduleName !== '' ? `[${moduleName}]` : '';
    this.moduleNameStyles = 'color: #565656; font-weight: bold; font-size: 13.5px;';
  }

  log(msg, config) {
    makeConsole(this.moduleName, msg, config, this.moduleNameStyles, 'color: #333;');
  }

  info(msg, config) {
    makeConsole(this.moduleName,
      msg,
      config,
      `${this.moduleNameStyles} color: #0066ff; background-color: #daeafb;`,
      'color: #0066ff;',
    );
  }

  safe(msg, config) {
    makeConsole(this.moduleName,
      msg,
      config,
      `${this.moduleNameStyles} color: #39a045; background-color: #dafbe4;`,
      'color: #39a045;',
    );
  }

  warn(msg, config) {
    makeConsole(this.moduleName,
      msg,
      config,
      `${this.moduleNameStyles} color: #d28e13;`,
      'color: #d28e13;',
      'warn',
    );
  }

  error(msg, config) {
    makeConsole(this.moduleName,
      msg,
      config,
      `${this.moduleNameStyles} color: red;`,
      'color: red;',
      'error',
    );
  }
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

exports.default = class extends _domrA.Component {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var classNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    super();
    this.text = text;
    this.fieldName = fieldName;
    this.classNames = classNames;
  }

  dom() {
    return '\n      <li class="show-list-info--' + this.fieldName + ' ' + this.classNames + '">' + this.text + '</li>\n    ';
  }
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hash_location_set__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hash_location_get__ = __webpack_require__(17);



function loc() {
  const originalHash = location.hash;
  let path = originalHash;
  let search = '';
  let query = '';

  if (path.includes('?')) {
    const searchQuery = path.split('?');
    path = searchQuery[0];
    search = searchQuery[1].replace(/\//g, '');

    if (search !== '') {
      const obj = {};
      const filterString = search.split('&');

      for (let i = 0; i < filterString.length; i++) {
        const splitString = filterString[i].split('=');
        const field = splitString[0];
        const value = splitString[1];

        obj[field] = value;
      }
      query = obj;
    }
  }

  if (path.endsWith('/') && !path.endsWith('#/')) {
    const pathSlice = path.slice(0, -1);

    path = pathSlice.replace('#', '');
  } else {
    path = path.replace('#', '');
  }

  return {
    hash: originalHash.replace('#', ''),
    path,
    search,
    query,
    set: __WEBPACK_IMPORTED_MODULE_0__hash_location_set__["a" /* default */],
    get: __WEBPACK_IMPORTED_MODULE_1__hash_location_get__["a" /* default */],
  };
}

const hashLocation = loc;

/* harmony default export */ __webpack_exports__["a"] = (hashLocation);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextTd = __webpack_require__(2);

var _TextTd2 = _interopRequireDefault(_TextTd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _TextTd2.default {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var ui = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    super(text, fieldName);
    this.ui = ui;
    this.classNames = 'ui-backdrop ui-backdrop--' + this.ui;
  }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_create_element__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_lookup__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_randomizer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Logger__ = __webpack_require__(1);





const logger = new __WEBPACK_IMPORTED_MODULE_3__Logger__["a" /* default */]();

const defaults = {
  parent: document.getElementById('wrapper'),
  dom: `
    <div>
      Domr Component
    </div>
  `,
};

/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor(domrid = 'component', random = false) {
    this.makeId = () => {
      let thisId = domrid;
      if (random) {
        thisId = `${domrid}-${__WEBPACK_IMPORTED_MODULE_2__helpers_randomizer__["a" /* default */](7)}`;
      }
      return thisId;
    };
    this.domrid = this.makeId();
    this.parentDefault = defaults.parent;
    this.domContent = defaults.dom;
    this.lookup = () => {
      return __WEBPACK_IMPORTED_MODULE_1__helpers_lookup__["a" /* default */](this.domrid);
    };
    this.createElement = __WEBPACK_IMPORTED_MODULE_0__helpers_create_element__["a" /* default */];
  }

  dom() {
    return this.domContent;
  }

  renderNodes() {
    return this.createElement(this.dom());
  }

  fireEventAfterTimeout() {
    return '';
  }

  addTo(parent = this.parentDefault) {
    parent.insertAdjacentHTML('beforeend', this.renderNodes());
    this.fireEventAfterTimeout();
  }

  addFromStartTo(parent = this.parentDefault) {
    parent.insertAdjacentHTML('afterbegin', this.renderNodes());
    this.fireEventAfterTimeout();
  }

  addBefore(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('beforebegin', this.renderNodes());
      this.fireEventAfterTimeout();
    } else {
      logger.error('sibling not found');
    }
  }

  addAfter(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('afterend', this.renderNodes());
      this.fireEventAfterTimeout();
    } else {
      logger.error('sibling not found');
    }
  }

  replaceWith(sibling) {
    if (sibling) {
      const parent = sibling.parentElement;

      if (parent) {
        sibling.insertAdjacentHTML('afterend', this.renderNodes());
        parent.removeChild(sibling);
        this.fireEventAfterTimeout();
      } else {
        logger.warn('sibling has no parentElement');
      }
    } else {
      logger.error('sibling not found');
    }
  }

  replaceContentOf(parent = this.parentDefault) {
    parent.innerHTML = this.renderNodes();
    this.fireEventAfterTimeout();
  }

  render() {
    this.fireEventAfterTimeout();
    return this.renderNodes();
  }
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextTdColor = __webpack_require__(4);

var _TextTdColor2 = _interopRequireDefault(_TextTdColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _TextTdColor2.default {
  constructor() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var ui = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    super(name, 'status', ui);
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

__webpack_require__(39);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domrA = __webpack_require__(0);

var _TableView = __webpack_require__(19);

var _TableView2 = _interopRequireDefault(_TableView);

var _CardsView = __webpack_require__(38);

var _CardsView2 = _interopRequireDefault(_CardsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = 'https://raw.githubusercontent.com/siddacool/api-set/master/youshouldbewatching.json';

var routes = [{
  name: 'Desktop Table View',
  path: '/',
  view: _TableView2.default,
  isDefault: true,
  api: api
}, {
  name: 'Cards View',
  path: '/cards',
  view: _CardsView2.default,
  api: api
}];

var router = new _domrA.Router(routes, {
  redirectDefault: true,
  clearLog: true
});

router.start();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function createElement(str, domrDataId) {
  const div = document.createElement('div');
  div.innerHTML = str;
  const container = document.createDocumentFragment();
  for (let i = 0; i < div.childNodes.length; i++) {
    const node = div.childNodes[i].cloneNode(true);
    container.appendChild(node);
  }

  if (domrDataId) {
    container.childNodes[1].setAttribute('data-domr-id', domrDataId);
  }
  return container.childNodes[1].outerHTML;
}

/* harmony default export */ __webpack_exports__["a"] = (createElement);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Lookup(elmId) {
  const targetDataTag = `[data-domr-id="${elmId}"]`;
  const targetSelector = document.querySelector(targetDataTag);
  const targetDuplicate = document.querySelectorAll(targetDataTag)[1];

  if (targetSelector) {
    if (targetDuplicate) {
      console.log(`${targetDataTag} Duplicate found`);
      console.log('data-domr-id ids should be unique');
    } else {
      return document.querySelector(`[data-domr-id="${elmId}"]`);
    }
  } else {
    console.log(`${elmId} does not exist`);
    console.log(`Could not find ${targetDataTag}`);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Lookup);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function randomizer(stringLength = 7) {
  return Math.random().toString(36).substr(2, stringLength);
}

/* harmony default export */ __webpack_exports__["a"] = (randomizer);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Logger__ = __webpack_require__(1);



const logger = new __WEBPACK_IMPORTED_MODULE_1__Logger__["a" /* default */]();

/* harmony default export */ __webpack_exports__["a"] = (class extends __WEBPACK_IMPORTED_MODULE_0__Component__["a" /* default */] {
  constructor(domrid) {
    super(domrid, true);
    this.target = this.lookup;
  }

  events() {
    const target = this.target();
    target.addEventListener('click', () => {
      logger.log(`Default Event for ${this.domrid}`);
    });
  }

  fireEventAfterTimeout() {
    setTimeout(() => {
      if (this.lookup()) {
        this.events();
      }
    }, 1);
  }

  renderNodes() {
    return this.createElement(this.dom(), this.domrid);
  }
});


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Logger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_add_view__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_hash_location__ = __webpack_require__(3);




const logger = new __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */]();
const defaults = {
  routes: [],
  config: {
    redirectDefault: false,
    refreshPage: false,
    clearLog: false,
  },
};

/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor(routes = defaults.routes, config = defaults.config) {
    this.routes = routes;
    this.redirectDefault = config.redirectDefault || false;
    this.refreshPage = config.refreshPage || false;
    this.clearLog = config.clearLog || false;
    this.addView = __WEBPACK_IMPORTED_MODULE_1__helpers_add_view__["a" /* default */];
  }

  reloadOnHashChange() {
    addEventListener('hashchange', (e) => {
      if (this.clearLog) {
        console.API;
        if (typeof console._commandLineAPI !== 'undefined') {
            console.API = console._commandLineAPI;
        } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
            console.API = console._inspectorCommandLineAPI;
        } else if (typeof console.clear !== 'undefined') {
            console.API = console;
        }

        console.API.clear();
      }

      if (this.refreshPage) {
        location.reload();
      } else {
        this.start();
        e.stopImmediatePropagation();
      }
    });
  }

  start() {
    const loc = __WEBPACK_IMPORTED_MODULE_2__helpers_hash_location__["a" /* default */]();
    const locPath = loc.path;
    let candidate;

    if (locPath === '') {
      location.hash = '#/';
    }

    this.routes.forEach((route) => {
      let path = route.path;
      if (path.endsWith('/') && path !== '/') {
        path = path.slice(0, -1);
      }

      const routeDataVal = [];
      const routePathMod = `${path.replace(/([:*])(\w+)/g, (full, dots, name) => {
        routeDataVal.push(name);
        return '([^/]+)';
      })}(?:/|$)`;
      const routePathModRegEx = locPath.match(new RegExp(routePathMod));

      if (routePathModRegEx) {
        const params = routePathModRegEx
        .slice(1, routePathModRegEx.length)
        .reduce((params, value, index) => {
          if (params === null) params = {};
          params[routeDataVal[index]] = value;
          return params;
        }, null);

        route.metadata = params || '';
        route.query = loc.query;
        candidate = route;
      }
    });

    if (candidate) {
      this.addView(candidate);
    } else {
      const routeDefault = this.routes.find(o => o.isDefault === true);
      if (this.redirectDefault && routeDefault) {
        this.addView(routeDefault);
      } else {
        logger.error('Page Not Found');
      }
    }

    this.reloadOnHashChange();
  }
});


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clone_object__ = __webpack_require__(15);


function addView(candidate) {
  const view = candidate.view;
  const skiplist = [
    'view',
  ];
  const routeData = __WEBPACK_IMPORTED_MODULE_0__clone_object__["a" /* default */](candidate, skiplist);

  if (candidate && view) {
    if (typeof view === 'function') {
      view(routeData);
    } else {
      view;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (addView);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const defaultSkipList = ['view'];

function findInArr(arr, itm) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === itm) {
      return true;
    }
  }
}

function cloneObject(obj, skipList = defaultSkipList) {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    const skip = findInArr(skipList, key);

    if (!skip) {
      newObj[key] = value;
    }
  });

  return newObj;
}

/* harmony default export */ __webpack_exports__["a"] = (cloneObject);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hash_location__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Logger__ = __webpack_require__(1);



const logger = new __WEBPACK_IMPORTED_MODULE_1__Logger__["a" /* default */]();

function setHash(option) {
  let hash = option;
  if (!hash.startsWith('#')) {
    hash = `#${hash}`;
  }

  return hash;
}

function setPath(option) {
  const loc = __WEBPACK_IMPORTED_MODULE_0__hash_location__["a" /* default */]();
  const searchQuery = loc.search;
  let path = option;

  if (path.startsWith('#')) {
    path = path.slice(0, -1);
  }

  if (searchQuery) {
    if (!path.endsWith('/')) {
      path = `${path}/`;
    }

    path = `${path}?${searchQuery}`;
  }

  path = setHash(path);
  return path;
}

function setSearch(option) {
  let search = option;
  const loc = __WEBPACK_IMPORTED_MODULE_0__hash_location__["a" /* default */]();
  let path = loc.path;

  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  if (!search.startsWith('?')) {
    search = `?${search}`;
  }

  search = setHash(`${path}/${search}`);

  return search;
}

function loopSearchQuery(obj) {
  const arr = [];
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`);
  }

  return `?${arr.join('&')}`;
}

function setQuery(obj) {
  const searchQuery = loopSearchQuery(obj);
  const query = setSearch(searchQuery);

  return query;
}

function redirectTo(hash) {
  location.hash = hash;
}


function hashLocationSet(field, opt) {
  const setField = field;
  const option = opt;
  let link;

  switch (setField) {
    case 'search':
      link = setSearch(option);
      break;
    case 'query':
      link = setQuery(option);
      break;
    case 'path':
      link = setPath(option);
      break;
    case 'hash':
      link = setHash(option);
      break;
  }

  if (link) {
    redirectTo(link);
  } else {
    logger.error('incorrect set location params');
  }
}

/* harmony default export */ __webpack_exports__["a"] = (hashLocationSet);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hash_location__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Logger__ = __webpack_require__(1);



const logger = new __WEBPACK_IMPORTED_MODULE_1__Logger__["a" /* default */]();

function hashLocationGet(field) {
  const loc = __WEBPACK_IMPORTED_MODULE_0__hash_location__["a" /* default */]();
  const thisField = loc[field];

  if (thisField) {
    return thisField;
  } else {
    logger.error('incorrect get location params');
  }
}

/* harmony default export */ __webpack_exports__["a"] = (hashLocationGet);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_hash_location__ = __webpack_require__(3);


const utils = {
  hashLocation: __WEBPACK_IMPORTED_MODULE_0__helpers_hash_location__["a" /* default */],
};

/* harmony default export */ __webpack_exports__["a"] = (utils);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var table = new _Table2.default(data.api);
  var wrapper = document.getElementById('wrapper');
  var loc = _domrA.utils.hashLocation();

  if (window.innerWidth <= 1253) {
    loc.set('path', '/cards');
  } else {
    table.replaceContentOf(wrapper);
  }
};

var _domrA = __webpack_require__(0);

var _Table = __webpack_require__(20);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TableHolder = __webpack_require__(21);

var _TableHolder2 = _interopRequireDefault(_TableHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.Component {
  constructor() {
    var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super();
    this.api = api;
  }

  dom() {
    var tableHolder = new _TableHolder2.default(this.api);

    return '\n      ' + tableHolder.render() + '\n    ';
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _Tr = __webpack_require__(26);

var _Tr2 = _interopRequireDefault(_Tr);

var _Th = __webpack_require__(22);

var _Th2 = _interopRequireDefault(_Th);

var _loadApi = __webpack_require__(44);

var _loadApi2 = _interopRequireDefault(_loadApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fields = ['name', 'genre', 'type', 'mindfuck', 'network', 'runtime', 'seasons', 'avg ep', 'status', 'IMDB'];

var defaultApi = [];

function loopTableRows(obj) {
  var tableJson = document.getElementById('table-from-json');

  obj.forEach(function (row) {
    var tr = new _Tr2.default(row);

    tr.addTo(tableJson);
  });
}

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultApi;

    super('show-table');
    this.fields = fields;
    this.api = api;
  }

  dom() {
    var th = new _Th2.default(this.fields);
    return '\n      <div class="show-table show-table--view-list" id="show-table">\n        ' + th.render() + '\n        <div id="table-from-json" class="show-table-json"></div>\n      </div>\n    ';
  }

  events() {
    (0, _loadApi2.default)(this.api, loopTableRows);
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TextHeadingTd = __webpack_require__(23);

var _TextHeadingTd2 = _interopRequireDefault(_TextHeadingTd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultFields = [];

function makeFields(field) {
  var textHeadingTd = new _TextHeadingTd2.default(field);

  return '' + textHeadingTd.render();
}

exports.default = class extends _domrA.Component {
  constructor() {
    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFields;

    super();
    this.fields = fields;
  }

  dom() {
    return '\n      <ul>\n        ' + this.fields.map(function (field) {
      return '' + makeFields(field);
    }).join('') + '\n      </ul>\n    ';
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

exports.default = class extends _domrA.Component {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super();
    this.text = text;
  }

  dom() {
    return '\n      <li>' + this.text + '</li>\n    ';
  }
};

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TextTd = __webpack_require__(2);

var _TextTd2 = _interopRequireDefault(_TextTd);

var _NameTd = __webpack_require__(27);

var _NameTd2 = _interopRequireDefault(_NameTd);

var _GenreTd = __webpack_require__(28);

var _GenreTd2 = _interopRequireDefault(_GenreTd);

var _MindFuckTd = __webpack_require__(30);

var _MindFuckTd2 = _interopRequireDefault(_MindFuckTd);

var _RuntimeTd = __webpack_require__(32);

var _RuntimeTd2 = _interopRequireDefault(_RuntimeTd);

var _SeasonTd = __webpack_require__(33);

var _SeasonTd2 = _interopRequireDefault(_SeasonTd);

var _EpisodeTd = __webpack_require__(34);

var _EpisodeTd2 = _interopRequireDefault(_EpisodeTd);

var _StatusOngoingTd = __webpack_require__(35);

var _StatusOngoingTd2 = _interopRequireDefault(_StatusOngoingTd);

var _StatusFinishedTd = __webpack_require__(36);

var _StatusFinishedTd2 = _interopRequireDefault(_StatusFinishedTd);

var _ImdbTd = __webpack_require__(37);

var _ImdbTd2 = _interopRequireDefault(_ImdbTd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultObj = {};

exports.default = class extends _domrA.Component {
  constructor() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultObj;

    super();
    this.name = obj.name || '';
    this.genre = obj.genre || '';
    this.type = obj.type || '';
    this.mindfuck = obj.mindf || false;
    this.network = obj.network || '-';
    this.runtime = obj.runtime || '';
    this.seasons = obj.seasons || '';
    this.avgepisodes = obj.avgepisodes || '';
    this.status = obj.status.toLowerCase() || '';
    this.imdb = obj.imdb || '';
  }

  dom() {
    var Name = new _NameTd2.default(this.name);
    var Genre = new _GenreTd2.default(this.genre);
    var Type = new _TextTd2.default(this.type, 'type');
    var Mindfuck = new _MindFuckTd2.default(this.mindfuck);
    var Network = new _TextTd2.default(this.network, 'network');
    var Runtime = new _RuntimeTd2.default(this.runtime);
    var Season = new _SeasonTd2.default(this.seasons);
    var Episode = new _EpisodeTd2.default(this.avgepisodes);
    var StatusOngoing = new _StatusOngoingTd2.default();
    var StatusFinished = new _StatusFinishedTd2.default();
    var Imdb = new _ImdbTd2.default(this.name, this.imdb);

    return '\n      <ol data-id="' + this.name + '">\n        ' + Name.render() + '\n        ' + Genre.render() + '\n        ' + Type.render() + '\n        ' + Mindfuck.render() + '\n        ' + Network.render() + '\n        ' + Runtime.render() + '\n        ' + Season.render() + '\n        ' + Episode.render() + '\n        ' + (this.status === 'ongoing' ? '' + StatusOngoing.render() : '' + StatusFinished.render()) + '\n        ' + Imdb.render() + '\n      <ol>\n    ';
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

function activateTr(target) {
  var table = document.getElementById('table-from-json');
  var tr = table.querySelectorAll('ol');

  for (var i = 0; i < tr.length; i++) {
    if (tr[i] === target) {
      tr[i].classList.add('active');
    } else {
      tr[i].classList.remove('active');
    }
  }
}

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super();
    this.text = text;
  }

  dom() {
    return '\n      <li class="show-list-info--name">' + this.text + '</li>\n    ';
  }

  events() {
    var target = this.target();

    target.addEventListener('click', function () {
      activateTr(target.parentElement);
    });
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextTd = __webpack_require__(2);

var _TextTd2 = _interopRequireDefault(_TextTd);

var _genre = __webpack_require__(29);

var _genre2 = _interopRequireDefault(_genre);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultGenres = [];

exports.default = class extends _TextTd2.default {
  constructor() {
    var genres = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGenres;

    super();
    this.genres = genres;
    this.fieldName = 'genre';
    this.text = '' + this.genres.map(function (g) {
      return '' + (0, _genre2.default)(g);
    }).join('');
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return '\n    <span class="ui-pill ui-pill--info">' + text + '</span>\n  ';
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextTd = __webpack_require__(2);

var _TextTd2 = _interopRequireDefault(_TextTd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _TextTd2.default {
  constructor() {
    var isMindFuck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    super();
    this.isMindFuck = isMindFuck;
    this.fieldName = 'mindf';
    this.text = '' + (this.isMindFuck ? '<span class="ui-dot ui-dot--danger"></span>' : '');
  }
};

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextTdColor = __webpack_require__(4);

var _TextTdColor2 = _interopRequireDefault(_TextTdColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _TextTdColor2.default {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super(text, 'runtime', 'info');
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextTdColor = __webpack_require__(4);

var _TextTdColor2 = _interopRequireDefault(_TextTdColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _TextTdColor2.default {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super(text, 'seasons', 'warning');
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextTdColor = __webpack_require__(4);

var _TextTdColor2 = _interopRequireDefault(_TextTdColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _TextTdColor2.default {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super(text, 'avgepisodes', 'new');
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StatusTd = __webpack_require__(6);

var _StatusTd2 = _interopRequireDefault(_StatusTd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _StatusTd2.default {
  constructor() {
    super('ongoing', 'safe');
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StatusTd = __webpack_require__(6);

var _StatusTd2 = _interopRequireDefault(_StatusTd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _StatusTd2.default {
  constructor() {
    super('finished', 'danger');
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextTd = __webpack_require__(2);

var _TextTd2 = _interopRequireDefault(_TextTd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ImdbDom(nameOfShow, link) {
  return '\n    <a href="' + link + '" title="' + nameOfShow + '" target="_blank" class="show-info--imdb">\n      <svg role="img" class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-new-window"></use></svg>\n    </a>\n  ';
}

exports.default = class extends _TextTd2.default {
  constructor() {
    var nameOfShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var link = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    super();
    this.nameOfShow = nameOfShow;
    this.link = link;
    this.fieldName = 'imdb';
    this.text = ImdbDom(this.nameOfShow, this.link);
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var cardContainer = new _CardContainer2.default(data.api);
  var wrapper = document.getElementById('wrapper');

  cardContainer.replaceContentOf(wrapper);
};

var _CardContainer = __webpack_require__(48);

var _CardContainer2 = _interopRequireDefault(_CardContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function loadApi(api, view) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', api, true);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        var obj = JSON.parse(xmlhttp.responseText);
        view(obj);
      }
    }
  };
  xmlhttp.send(null);
}

exports.default = loadApi;

/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

exports.default = class extends _domrA.Component {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    super();
    this.text = text;
    this.fieldName = fieldName;
  }

  dom() {
    return '\n      <span class="show-card-info--' + this.fieldName + '">' + this.text + '</span>\n    ';
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PillCard = __webpack_require__(58);

var _PillCard2 = _interopRequireDefault(_PillCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _PillCard2.default {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var ui = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    super(text, 'status', ui);
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _CardHolder = __webpack_require__(49);

var _CardHolder2 = _interopRequireDefault(_CardHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.Component {
  constructor() {
    var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super();
    this.api = api;
  }

  dom() {
    var cardHolder = new _CardHolder2.default(this.api);

    return '\n      ' + cardHolder.render() + '\n    ';
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _Card = __webpack_require__(50);

var _Card2 = _interopRequireDefault(_Card);

var _loadApi = __webpack_require__(44);

var _loadApi2 = _interopRequireDefault(_loadApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultApi = [];

function loopTableRows(obj) {
  var tableJson = document.getElementById('table-from-json');

  obj.forEach(function (row) {
    var card = new _Card2.default(row);

    card.addTo(tableJson);
  });
}

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultApi;

    super('show-table');
    this.api = api;
  }

  dom() {
    return '\n      <div class="show-table show-table--view-card" id="show-table">\n        <div id="table-from-json" class="show-table-json">\n        </div>\n      </div>\n    ';
  }

  events() {
    (0, _loadApi2.default)(this.api, loopTableRows);
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TextCard = __webpack_require__(46);

var _TextCard2 = _interopRequireDefault(_TextCard);

var _GenreCard = __webpack_require__(51);

var _GenreCard2 = _interopRequireDefault(_GenreCard);

var _mindFuckCard = __webpack_require__(59);

var _mindFuckCard2 = _interopRequireDefault(_mindFuckCard);

var _RuntimeCard = __webpack_require__(53);

var _RuntimeCard2 = _interopRequireDefault(_RuntimeCard);

var _SeasonCard = __webpack_require__(54);

var _SeasonCard2 = _interopRequireDefault(_SeasonCard);

var _EpisodeCard = __webpack_require__(55);

var _EpisodeCard2 = _interopRequireDefault(_EpisodeCard);

var _StatusFinishedCard = __webpack_require__(56);

var _StatusFinishedCard2 = _interopRequireDefault(_StatusFinishedCard);

var _StatusOngoingCard = __webpack_require__(57);

var _StatusOngoingCard2 = _interopRequireDefault(_StatusOngoingCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultObj = {};

exports.default = class extends _domrA.Component {
  constructor() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultObj;

    super();
    this.name = obj.name || '';
    this.genre = obj.genre || '';
    this.type = obj.type || '';
    this.mindfuck = obj.mindf || false;
    this.network = obj.network || '';
    this.runtime = obj.runtime || '';
    this.seasons = obj.seasons || '';
    this.avgepisodes = obj.avgepisodes || '';
    this.status = obj.status.toLowerCase() || '';
    this.imdb = obj.imdb || '';
  }

  dom() {
    var Name = new _TextCard2.default(this.name, 'name');
    var Genre = new _GenreCard2.default(this.genre);
    var Type = new _TextCard2.default(this.type, 'type');
    var Network = new _TextCard2.default(this.network, 'network');
    var Runtime = new _RuntimeCard2.default(this.runtime);
    var Season = new _SeasonCard2.default(this.seasons);
    var Episode = new _EpisodeCard2.default(this.avgepisodes);
    var StatusOngoing = new _StatusOngoingCard2.default();
    var StatusFinished = new _StatusFinishedCard2.default();

    return '\n      <a class="show-card" href="' + this.imdb + '" title="' + this.name + '" target="_blank">\n        <div class="show-card-info-header">\n          <div class="show-card-info-title">\n            ' + Name.render() + ' ' + (this.mindfuck ? '' + (0, _mindFuckCard2.default)() : '') + '\n          </div>\n          <div class="show-card-info-description">\n            ' + Type.render() + (this.network ? ',' : '') + ' ' + Network.render() + '\n          </div>\n          ' + Genre.render() + '\n        </div>\n        <div class="show-card-info-extended">\n          ' + Runtime.render() + '\n          ' + Season.render() + '\n          ' + Episode.render() + '\n          ' + (this.status === 'ongoing' ? '' + StatusOngoing.render() : '' + StatusFinished.render()) + '\n        </div>\n      </a>\n    ';
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _genre = __webpack_require__(29);

var _genre2 = _interopRequireDefault(_genre);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultGenres = [];

exports.default = class extends _domrA.Component {
  constructor() {
    var genres = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGenres;

    super();
    this.genres = genres;
  }

  dom() {
    return '\n      <div class="show-card-info--genre">\n        ' + this.genres.map(function (g) {
      return '' + (0, _genre2.default)(g);
    }).join('') + '\n      </div>\n    ';
  }
};

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PillCard = __webpack_require__(58);

var _PillCard2 = _interopRequireDefault(_PillCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clockIcon = '\n  <svg role="img" class="icon">\n    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-time"></use>\n  </svg>\n';

exports.default = class extends _PillCard2.default {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super();
    this.fieldName = 'runtime';
    this.ui = 'info';
    this.text = clockIcon + ' ' + text + ' Mins';
    this.icon = true;
  }
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PillCard = __webpack_require__(58);

var _PillCard2 = _interopRequireDefault(_PillCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkSeason(showSeasons) {
  var seasonText = 'Season';

  if (showSeasons > 1) {
    seasonText = seasonText + 's';
  }

  return seasonText;
}

exports.default = class extends _PillCard2.default {
  constructor() {
    var season = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    super();
    this.season = season;
    this.text = this.season + ' ' + checkSeason(this.season);
    this.fieldName = 'seasons';
    this.ui = 'warning';
  }
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PillCard = __webpack_require__(58);

var _PillCard2 = _interopRequireDefault(_PillCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkEpisode(showEpisodes) {
  var epText = 'Episode';

  if (showEpisodes > 1) {
    epText = epText + 's';
  }

  return epText;
}

exports.default = class extends _PillCard2.default {
  constructor() {
    var episode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    super();
    this.episode = episode;
    this.text = this.episode + ' ' + checkEpisode(this.episode);
    this.fieldName = 'avgepisodes';
    this.ui = 'new';
  }
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StatusCard = __webpack_require__(47);

var _StatusCard2 = _interopRequireDefault(_StatusCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _StatusCard2.default {
  constructor() {
    super('finished', 'danger');
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StatusCard = __webpack_require__(47);

var _StatusCard2 = _interopRequireDefault(_StatusCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _StatusCard2.default {
  constructor() {
    super('ongoing', 'safe');
  }
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

exports.default = class extends _domrA.Component {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var ui = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var icon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    super();
    this.text = text;
    this.fieldName = fieldName;
    this.ui = ui;
    this.icon = icon;
  }

  dom() {
    return '\n      <span class="show-card-info--' + this.fieldName + '">\n        <span class="ui-tag ui-tag--' + this.ui + ' ' + (this.icon ? 'ui-tag--icon' : '') + '">\n          ' + this.text + '\n        </span>\n      </span>\n    ';
  }
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return "\n    <span class=\"show-card-info--mindf\">\n      <span class=\"ui-pill ui-pill--danger\">Mind Fuck</span>\n    </span>\n  ";
};

/***/ })
/******/ ]);