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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/abhijit/Documents/Projects/React/ssr_next_js/pages/posts/[postId]/comments/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Comments = function Comments(_ref) {
  var comments = _ref.comments;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      query = _useRouter.query;

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, comments.map(function (data, i) {
    return __jsx("h2", {
      key: i,
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("posts/".concat(query.pid, "/comments/").concat(i + 1), 'posts/postId/comments/commentId');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, data);
  }));
};

Comments.getInitialProps = function () {
  return {
    comments: ['Hi', 'Hello', 'How r you?']
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ })

})
//# sourceMappingURL=comments.js.d2712f8ccfa14b24ac78.hot-update.js.map