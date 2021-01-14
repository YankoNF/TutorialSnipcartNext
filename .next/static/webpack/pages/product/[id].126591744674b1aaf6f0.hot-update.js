webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./pages/product/[id]/index.tsx":
/*!**************************************!*\
  !*** ./pages/product/[id]/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _s2 = $RefreshSig$();



var _jsxFileName = "C:\\Users\\ynion\\Documents\\SnipcartNext\\pages\\product\\[id]\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var Pdp = function Pdp() {
  _s2();

  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var props = router.query.props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "product",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "product__title",
      children: props.product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "product__description",
      children: props.product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Link, {
      href: "/product/".concat(props.product.id),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: props.product.image,
        alt: "",
        className: "product__image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "product__price-button-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "product__price",
        children: ["$", props.product.price.toFixed(2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
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
        lineNumber: 16,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_s2(Pdp, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c2 = Pdp;

_s(Pdp, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Pdp;
/* harmony default export */ __webpack_exports__["default"] = (Pdp);

var _c;

$RefreshReg$(_c, "Pdp");
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

var _c2;

$RefreshReg$(_c2, "Pdp");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBkcCIsInJvdXRlciIsInVzZVJvdXRlciIsInByb3BzIiwibmFtZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFBQTs7QUFDaEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBZjtBQURnQixNQUVSQyxLQUZRLEdBRUVGLE1BQU0sQ0FGUixLQUVFQSxDQUZGO0FBSWhCLHNCQUNFO0FBQUssYUFBUyxFQUFkO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQWI7QUFBQSxnQkFBZ0NFLEtBQUssQ0FBTEEsUUFBY0M7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGLEtBQ0UsQ0FERixlQUVFO0FBQUcsZUFBUyxFQUFaO0FBQUEsZ0JBQXFDRCxLQUFLLENBQUxBLFFBQWNFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGRixLQUVFLENBRkYsZUFHRTtBQUFNLFVBQUkscUJBQWNGLEtBQUssQ0FBTEEsUUFBeEIsRUFBVSxDQUFWO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVBLEtBQUssQ0FBTEEsUUFBVjtBQUErQixXQUFHLEVBQWxDO0FBQXNDLGlCQUFTLEVBQUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FIRixLQUdFLENBSEYsZUFNRTtBQUFLLGVBQVMsRUFBZDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBZDtBQUFBLHdCQUFrQ0EsS0FBSyxDQUFMQSxzQkFBbEMsQ0FBa0NBLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLEtBQ0UsQ0FERixlQUVFO0FBQ0UsaUJBQVMsRUFEWDtBQUVFLHdCQUFjQSxLQUFLLENBQUxBLFFBRmhCO0FBR0UsMEJBQWdCQSxLQUFLLENBQUxBLFFBSGxCO0FBSUUsMkJBQWlCQSxLQUFLLENBQUxBLFFBSm5CO0FBS0UseUJBQWVBLEtBQUssQ0FBTEEsT0FMakI7QUFNRSwyQkFBaUJBLEtBQUssQ0FBTEEsUUFObkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRixLQUVFLENBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTkYsS0FNRSxDQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLEtBQ0UsQ0FERjtBQUpGOztJQUFNSCxHO1VBQ1dFLHFEOzs7TUFEWEYsRzs7R0FBQUEsRztVQUNXRSxxRDs7O0tBRFhGLEc7QUEyQk4iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjEyNjU5MTc0NDY3NGIxYWFmNmYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IFBkcCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgcHJvcHMgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0X190aXRsZVwiPntwcm9wcy5wcm9kdWN0Lm5hbWV9PC9oMj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdF9fZGVzY3JpcHRpb25cIj57cHJvcHMucHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb3BzLnByb2R1Y3QuaWR9YH0+XHJcbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLnByb2R1Y3QuaW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInByb2R1Y3RfX2ltYWdlXCIvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcHJpY2UtYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcHJpY2VcIj4ke3Byb3BzLnByb2R1Y3QucHJpY2UudG9GaXhlZCgyKX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic25pcGNhcnQtYWRkLWl0ZW0gcHJvZHVjdF9fYnV0dG9uXCJcclxuICAgICAgICAgIGRhdGEtaXRlbS1pZD17cHJvcHMucHJvZHVjdC5pZH1cclxuICAgICAgICAgIGRhdGEtaXRlbS1uYW1lPXtwcm9wcy5wcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICBkYXRhLWl0ZW0tcHJpY2U9e3Byb3BzLnByb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICBkYXRhLWl0ZW0tdXJsPXtwcm9wcy5yb3V0ZXIucGF0aG5hbWV9XHJcbiAgICAgICAgICBkYXRhLWl0ZW0taW1hZ2U9e3Byb3BzLnByb2R1Y3QuaW1hZ2V9PlxyXG4gICAgICAgICAgQWRkIHRvIGNhcnRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBkcCJdLCJzb3VyY2VSb290IjoiIn0=