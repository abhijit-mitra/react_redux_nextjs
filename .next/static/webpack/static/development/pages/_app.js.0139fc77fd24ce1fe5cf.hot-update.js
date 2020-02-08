webpackHotUpdate("static/development/pages/_app.js",{

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
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, composeWithDevTools(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middlewares)));
});

/***/ })

})
//# sourceMappingURL=_app.js.0139fc77fd24ce1fe5cf.hot-update.js.map