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
            dispatch({
              type: "".concat(_types__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS"], "_started")
            });
            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('https://api.github.com/repos/zeit/next.js'));

          case 4:
            res = _context.sent;
            _context.next = 7;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 7:
            res = _context.sent;
            dispatch({
              type: "".concat(_types__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS"], "_success"),
              payload: res
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: "".concat(_types__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS"], "_failed"),
              payload: _context.t0
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 11]]);
  };
};

/***/ })

})
//# sourceMappingURL=index.js.64e76fe5ec5975cd9eba.hot-update.js.map