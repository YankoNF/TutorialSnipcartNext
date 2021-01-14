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
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "product__description",
      children: props.product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Link, {
      href: "/post/[id]/[comment]",
      as: "/post/".concat(id, "/first-comment"),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: props.product.image,
        alt: "",
        className: "product__image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "product__price-button-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "product__price",
        children: ["$", props.product.price.toFixed(2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
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
        lineNumber: 25,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LnRzeCJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvcHMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQWNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLFFBQTBCO0FBQ3hDLHNCQUNFO0FBQUssYUFBUyxFQUFkO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQWI7QUFBQSxnQkFBZ0NDLEtBQUssQ0FBTEEsUUFBY0M7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGLEtBQ0UsQ0FERixlQUVFO0FBQUcsZUFBUyxFQUFaO0FBQUEsZ0JBQXFDRCxLQUFLLENBQUxBLFFBQWNFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGRixLQUVFLENBRkYsZUFHRTtBQUFNLFVBQUksRUFBVjtBQUFrQyxRQUFFLHNCQUFwQyxnQkFBb0MsQ0FBcEM7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRUYsS0FBSyxDQUFMQSxRQUFWO0FBQStCLFdBQUcsRUFBbEM7QUFBc0MsaUJBQVMsRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUhGLEtBR0UsQ0FIRixlQU1FO0FBQUssZUFBUyxFQUFkO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFkO0FBQUEsd0JBQWtDQSxLQUFLLENBQUxBLHNCQUFsQyxDQUFrQ0EsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsS0FDRSxDQURGLGVBRUU7QUFDRSxpQkFBUyxFQURYO0FBRUUsd0JBQWNBLEtBQUssQ0FBTEEsUUFGaEI7QUFHRSwwQkFBZ0JBLEtBQUssQ0FBTEEsUUFIbEI7QUFJRSwyQkFBaUJBLEtBQUssQ0FBTEEsUUFKbkI7QUFLRSx5QkFBZUEsS0FBSyxDQUFMQSxPQUxqQjtBQU1FLDJCQUFpQkEsS0FBSyxDQUFMQSxRQU5uQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGLEtBRUUsQ0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FORixLQU1FLENBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsS0FDRSxDQURGO0FBREY7O01BQU1ELE87S0FBQUEsTztBQXVCTixxRUFBZUksOERBQVUsQ0FBekIsT0FBeUIsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGxwLjI5M2UyODk1Zjc2OGE5NTQyYWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3dpdGhSb3V0ZXIsIFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3Qge1xyXG4gIGlkOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxuICBwcmljZTogbnVtYmVyXHJcbiAgdXJsOiBzdHJpbmcgIFxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcclxuICBpbWFnZTogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBJUHJvZHVjdFByb3BzIHtcclxuICBwcm9kdWN0OiBJUHJvZHVjdFxyXG4gIHJvdXRlcjogUm91dGVyXHJcbn1cclxuY29uc3QgUHJvZHVjdCA9IChwcm9wczogSVByb2R1Y3RQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2R1Y3RfX3RpdGxlXCI+e3Byb3BzLnByb2R1Y3QubmFtZX08L2gyPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0X19kZXNjcmlwdGlvblwiPntwcm9wcy5wcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tpZF0vW2NvbW1lbnRdXCIgYXM9e2AvcG9zdC8ke2lkfS9maXJzdC1jb21tZW50YH0+XHJcbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLnByb2R1Y3QuaW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInByb2R1Y3RfX2ltYWdlXCIvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcHJpY2UtYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcHJpY2VcIj4ke3Byb3BzLnByb2R1Y3QucHJpY2UudG9GaXhlZCgyKX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic25pcGNhcnQtYWRkLWl0ZW0gcHJvZHVjdF9fYnV0dG9uXCJcclxuICAgICAgICAgIGRhdGEtaXRlbS1pZD17cHJvcHMucHJvZHVjdC5pZH1cclxuICAgICAgICAgIGRhdGEtaXRlbS1uYW1lPXtwcm9wcy5wcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICBkYXRhLWl0ZW0tcHJpY2U9e3Byb3BzLnByb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICBkYXRhLWl0ZW0tdXJsPXtwcm9wcy5yb3V0ZXIucGF0aG5hbWV9XHJcbiAgICAgICAgICBkYXRhLWl0ZW0taW1hZ2U9e3Byb3BzLnByb2R1Y3QuaW1hZ2V9PlxyXG4gICAgICAgICAgQWRkIHRvIGNhcnRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQcm9kdWN0KSJdLCJzb3VyY2VSb290IjoiIn0=