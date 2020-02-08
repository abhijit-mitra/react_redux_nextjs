webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: initStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");




var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
};
var isDev = true; // const { composeWithDevTools } = isDev ? require('redux-devtools-extension') : require('redux-devtools-extension/logOnlyInProduction');

var composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
console.log('rrrrrr', global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var middlewares = isDev ? [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])()] : [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]];
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middlewares)));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.5aeadccc3de529dd695f.hot-update.js.map