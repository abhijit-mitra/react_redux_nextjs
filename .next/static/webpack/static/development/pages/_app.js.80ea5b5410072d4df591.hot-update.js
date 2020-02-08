webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./node_modules/redux-devtools-extension/logOnly.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/logOnly.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! ./utils/assign */ "./node_modules/redux-devtools-extension/utils/assign.js");
var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

function enhancer() {
  var config = arguments[0] || {};
  config.features = { pause: true, export: true, test: true };
  config.type = 'redux';
  if (config.autoPause === undefined) config.autoPause = true;
  if (config.latency === undefined) config.latency = 500;

  return function(createStore) {
    return function(reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var origDispatch = store.dispatch;

      var devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(config);
      devTools.init(store.getState());

      var dispatch = function(action) {
        var r = origDispatch(action);
        devTools.send(action, store.getState());
        return r;
      };

      if (Object.assign) return Object.assign(store, { dispatch: dispatch });
      return assign(store, 'dispatch', dispatch);
    }
  }
}

function composeWithEnhancer(config) {
  return function () {
    return compose(compose.apply(null, arguments), enhancer(config));
  }
}

exports.__esModule = true;
exports.composeWithDevTools = function() {
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    if (arguments.length === 0) return enhancer();
    if (typeof arguments[0] === 'object') return composeWithEnhancer(arguments[0]);
    return composeWithEnhancer().apply(null, arguments);
  }

  if (arguments.length === 0) return undefined;
  if (typeof arguments[0] === 'object') return compose;
  return compose.apply(null, arguments);
};

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    enhancer :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./node_modules/redux-devtools-extension/logOnlyInProduction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/redux-devtools-extension/logOnlyInProduction.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;
var logOnly = __webpack_require__(/*! ./logOnly */ "./node_modules/redux-devtools-extension/logOnly.js");

exports.__esModule = true;
exports.composeWithDevTools = (
   false ? undefined :
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
      function() {
        if (arguments.length === 0) return undefined;
        if (typeof arguments[0] === 'object') return compose;
        return compose.apply(null, arguments);
      }
);

exports.devToolsEnhancer = (
   false ? undefined :
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
      window.__REDUX_DEVTOOLS_EXTENSION__ :
      function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./node_modules/redux-devtools-extension/utils/assign.js":
/*!***************************************************************!*\
  !*** ./node_modules/redux-devtools-extension/utils/assign.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) {
      if ({}.hasOwnProperty.call(obj, key)) keys.push(key);
    }
    return keys;
  };

function assign(obj, newKey, newValue) {
  var keys = objectKeys(obj);
  var copy = {};

  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    copy[key] = obj[key];
  }

  copy[newKey] = newValue;
  return copy;
}

module.exports = assign;


/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: initStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");




var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
};
var isDev = true;

var _ref = isDev ? __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js") : __webpack_require__(/*! redux-devtools-extension/logOnlyInProduction */ "./node_modules/redux-devtools-extension/logOnlyInProduction.js"),
    composeWithDevTools = _ref.composeWithDevTools;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var middlewares = isDev ? [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])()] : [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]];
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middlewares)));
});

/***/ })

})
//# sourceMappingURL=_app.js.80ea5b5410072d4df591.hot-update.js.map