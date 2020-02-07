webpackHotUpdate("static/development/pages/posts/[postId]/comments.js",{

/***/ "./pages/posts/[postId]/comments/index.js":
/*!************************************************!*\
  !*** ./pages/posts/[postId]/comments/index.js ***!
  \************************************************/
/*! exports provided: Comments, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comments", function() { return Comments; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/abhijit/Documents/Projects/React/ssr_next_js/pages/posts/[postId]/comments/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Comments = function Comments() {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query;

  Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {});
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, comments.map(function (data, i) {
    return __jsx("h2", {
      key: i,
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/posts/[postId]/comments/[commentId]', "/posts/".concat(query.postId, "/comments/").concat(i + 1));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, data);
  }));
};

var getData = function getData() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    var data = {
      comments: ['Hi', 'Hello', 'How r you?']
    };
    setTimeout(function () {
      resolve(data);
    }, 3000);
  });
}; // Comments.getInitialProps = async({ req }) =>{
//   const res = await getData();
//   return res;
// }


/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ })

})
//# sourceMappingURL=comments.js.a1278cf26a66c1c4c25e.hot-update.js.map