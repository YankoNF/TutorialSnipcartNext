webpackHotUpdate_N_E("pages/plp",{

/***/ "./components/Product.tsx":
/*!********************************!*\
  !*** ./components/Product.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\ynion\\Documents\\SnipcartNext\\components\\Product.tsx",
    _this = undefined;




var Product = function Product(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "product",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "product__title",
      children: props.product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "product__description",
      children: props.product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[id]/[comment]",
      as: "/post/".concat(props.product.id),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: props.product.image,
        alt: "",
        className: "product__image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "product__price-button-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "product__price",
        children: ["$", props.product.price.toFixed(2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "snipcart-add-item product__button",
        "data-item-id": props.product.id,
        "data-item-name": props.product.name,
        "data-item-price": props.product.price,
        "data-item-url": props.router.pathname,
        "data-item-image": props.product.image,
        children: "Add to cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_c3 = Product;
_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Product));

var _c, _c2;

$RefreshReg$(_c, "Product");
$RefreshReg$(_c2, "%default%");
;

var _a, _b; // Legacy CSS implementations will `eval` browser code in a Node.js context
// to extract CSS. For backwards compatibility, we need to check we're in a
// browser context before continuing.


if (typeof self !== 'undefined' && // AMP / No-JS mode does not inject these helpers:
'$RefreshHelpers$' in self) {
  var currentExports = module.__proto__.exports;
  var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null; // This cannot happen in MainTemplate because the exports mismatch between
  // templating and execution.

  self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i); // A module can be accepted automatically based on its exports, e.g. when
  // it is a Refresh Boundary.

  if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
    // Save the previous exports on update so we can compare the boundary
    // signatures.
    module.hot.dispose(function (data) {
      data.prevExports = currentExports;
    }); // Unconditionally accept an update to this module, we'll check if it's
    // still a Refresh Boundary later.

    module.hot.accept(); // This field is set when the previous version of this module was a
    // Refresh Boundary, letting us know we need to check for invalidation or
    // enqueue an update.

    if (prevExports !== null) {
      // A boundary can become ineligible if its exports are incompatible
      // with the previous exports.
      //
      // For example, if you add/remove/change exports, we'll want to
      // re-execute the importing modules, and force those components to
      // re-render. Similarly, if you convert a class component to a
      // function, we want to invalidate the boundary.
      if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
        module.hot.invalidate();
      } else {
        self.$RefreshHelpers$.scheduleUpdate();
      }
    }
  } else {
    // Since we just executed the code for the module, it's possible that the
    // new exports made it ineligible for being a boundary.
    // We only care about the case when we were _previously_ a boundary,
    // because we already accepted this update (accidental side effect).
    var isNoLongerABoundary = prevExports !== null;

    if (isNoLongerABoundary) {
      module.hot.invalidate();
    }
  }
}

var _c3;

$RefreshReg$(_c3, "Product");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LnRzeCJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvcHMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFjQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUEwQjtBQUN4QyxzQkFDRTtBQUFLLGFBQVMsRUFBZDtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFiO0FBQUEsZ0JBQWdDQyxLQUFLLENBQUxBLFFBQWNDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixLQUNFLENBREYsZUFFRTtBQUFHLGVBQVMsRUFBWjtBQUFBLGdCQUFxQ0QsS0FBSyxDQUFMQSxRQUFjRTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkYsS0FFRSxDQUZGLGVBR0U7QUFBTSxVQUFJLEVBQVY7QUFBa0MsUUFBRSxrQkFBV0YsS0FBSyxDQUFMQSxRQUEvQyxFQUFvQyxDQUFwQztBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFQSxLQUFLLENBQUxBLFFBQVY7QUFBK0IsV0FBRyxFQUFsQztBQUFzQyxpQkFBUyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSEYsS0FHRSxDQUhGLGVBTUU7QUFBSyxlQUFTLEVBQWQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQWQ7QUFBQSx3QkFBa0NBLEtBQUssQ0FBTEEsc0JBQWxDLENBQWtDQSxDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixLQUNFLENBREYsZUFFRTtBQUNFLGlCQUFTLEVBRFg7QUFFRSx3QkFBY0EsS0FBSyxDQUFMQSxRQUZoQjtBQUdFLDBCQUFnQkEsS0FBSyxDQUFMQSxRQUhsQjtBQUlFLDJCQUFpQkEsS0FBSyxDQUFMQSxRQUpuQjtBQUtFLHlCQUFlQSxLQUFLLENBQUxBLE9BTGpCO0FBTUUsMkJBQWlCQSxLQUFLLENBQUxBLFFBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkYsS0FFRSxDQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU5GLEtBTUUsQ0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixLQUNFLENBREY7QUFERjs7TUFBTUQsTztLQUFBQSxPO0FBdUJOLHFFQUFlSSw4REFBVSxDQUF6QixPQUF5QixDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wbHAuZjNhZTdiYWQ4YmYxYWM4ZWM0ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7d2l0aFJvdXRlciwgUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3Qge1xyXG4gIGlkOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxuICBwcmljZTogbnVtYmVyXHJcbiAgdXJsOiBzdHJpbmcgIFxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcclxuICBpbWFnZTogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBJUHJvZHVjdFByb3BzIHtcclxuICBwcm9kdWN0OiBJUHJvZHVjdFxyXG4gIHJvdXRlcjogUm91dGVyXHJcbn1cclxuY29uc3QgUHJvZHVjdCA9IChwcm9wczogSVByb2R1Y3RQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2R1Y3RfX3RpdGxlXCI+e3Byb3BzLnByb2R1Y3QubmFtZX08L2gyPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0X19kZXNjcmlwdGlvblwiPntwcm9wcy5wcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tpZF0vW2NvbW1lbnRdXCIgYXM9e2AvcG9zdC8ke3Byb3BzLnByb2R1Y3QuaWR9YH0+XHJcbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLnByb2R1Y3QuaW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInByb2R1Y3RfX2ltYWdlXCIvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcHJpY2UtYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcHJpY2VcIj4ke3Byb3BzLnByb2R1Y3QucHJpY2UudG9GaXhlZCgyKX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic25pcGNhcnQtYWRkLWl0ZW0gcHJvZHVjdF9fYnV0dG9uXCJcclxuICAgICAgICAgIGRhdGEtaXRlbS1pZD17cHJvcHMucHJvZHVjdC5pZH1cclxuICAgICAgICAgIGRhdGEtaXRlbS1uYW1lPXtwcm9wcy5wcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICBkYXRhLWl0ZW0tcHJpY2U9e3Byb3BzLnByb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICBkYXRhLWl0ZW0tdXJsPXtwcm9wcy5yb3V0ZXIucGF0aG5hbWV9XHJcbiAgICAgICAgICBkYXRhLWl0ZW0taW1hZ2U9e3Byb3BzLnByb2R1Y3QuaW1hZ2V9PlxyXG4gICAgICAgICAgQWRkIHRvIGNhcnRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQcm9kdWN0KSJdLCJzb3VyY2VSb290IjoiIn0=