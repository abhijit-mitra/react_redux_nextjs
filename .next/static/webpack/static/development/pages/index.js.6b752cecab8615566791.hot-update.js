webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/posts/index.js":
/*!**************************************!*\
  !*** ./redux/actions/posts/index.js ***!
  \**************************************/
/*! exports provided: getPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "./redux/types.js");



var getPosts = function getPosts() {
  return function _callee(dispatch, getState) {
    var res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('https://api.github.com/repos/zeit/next.js'));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 6:
            res = _context.sent;
            dispatch({
              type: "".concat(_types__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS"], "_success"),
              payload: res
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: "".concat(_types__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS"], "_failed"),
              payload: _context.t0
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };
};

/***/ })

})
//# sourceMappingURL=index.js.6b752cecab8615566791.hot-update.js.map