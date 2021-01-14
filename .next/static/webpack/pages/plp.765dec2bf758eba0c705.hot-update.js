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
      as: "/post/".concat(id, "/first-comment"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LnRzeCJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvcHMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFjQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUEwQjtBQUN4QyxzQkFDRTtBQUFLLGFBQVMsRUFBZDtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFiO0FBQUEsZ0JBQWdDQyxLQUFLLENBQUxBLFFBQWNDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixLQUNFLENBREYsZUFFRTtBQUFHLGVBQVMsRUFBWjtBQUFBLGdCQUFxQ0QsS0FBSyxDQUFMQSxRQUFjRTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkYsS0FFRSxDQUZGLGVBR0U7QUFBTSxVQUFJLEVBQVY7QUFBa0MsUUFBRSxzQkFBcEMsZ0JBQW9DLENBQXBDO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVGLEtBQUssQ0FBTEEsUUFBVjtBQUErQixXQUFHLEVBQWxDO0FBQXNDLGlCQUFTLEVBQUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FIRixLQUdFLENBSEYsZUFNRTtBQUFLLGVBQVMsRUFBZDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBZDtBQUFBLHdCQUFrQ0EsS0FBSyxDQUFMQSxzQkFBbEMsQ0FBa0NBLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLEtBQ0UsQ0FERixlQUVFO0FBQ0UsaUJBQVMsRUFEWDtBQUVFLHdCQUFjQSxLQUFLLENBQUxBLFFBRmhCO0FBR0UsMEJBQWdCQSxLQUFLLENBQUxBLFFBSGxCO0FBSUUsMkJBQWlCQSxLQUFLLENBQUxBLFFBSm5CO0FBS0UseUJBQWVBLEtBQUssQ0FBTEEsT0FMakI7QUFNRSwyQkFBaUJBLEtBQUssQ0FBTEEsUUFObkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRixLQUVFLENBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTkYsS0FNRSxDQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLEtBQ0UsQ0FERjtBQURGOztNQUFNRCxPO0tBQUFBLE87QUF1Qk4scUVBQWVJLDhEQUFVLENBQXpCLE9BQXlCLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BscC43NjVkZWMyYmY3NThlYmEwYzcwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt3aXRoUm91dGVyLCBSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuZXhwb3J0IGludGVyZmFjZSBJUHJvZHVjdCB7XHJcbiAgaWQ6IHN0cmluZ1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHByaWNlOiBudW1iZXJcclxuICB1cmw6IHN0cmluZyAgXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xyXG4gIGltYWdlOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIElQcm9kdWN0UHJvcHMge1xyXG4gIHByb2R1Y3Q6IElQcm9kdWN0XHJcbiAgcm91dGVyOiBSb3V0ZXJcclxufVxyXG5jb25zdCBQcm9kdWN0ID0gKHByb3BzOiBJUHJvZHVjdFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZHVjdF9fdGl0bGVcIj57cHJvcHMucHJvZHVjdC5uYW1lfTwvaDI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3RfX2Rlc2NyaXB0aW9uXCI+e3Byb3BzLnByb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8TGluayBocmVmPVwiL3Bvc3QvW2lkXS9bY29tbWVudF1cIiBhcz17YC9wb3N0LyR7aWR9L2ZpcnN0LWNvbW1lbnRgfT5cclxuICAgICAgICA8aW1nIHNyYz17cHJvcHMucHJvZHVjdC5pbWFnZX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwicHJvZHVjdF9faW1hZ2VcIi8+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19wcmljZS1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19wcmljZVwiPiR7cHJvcHMucHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpfTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbmlwY2FydC1hZGQtaXRlbSBwcm9kdWN0X19idXR0b25cIlxyXG4gICAgICAgICAgZGF0YS1pdGVtLWlkPXtwcm9wcy5wcm9kdWN0LmlkfVxyXG4gICAgICAgICAgZGF0YS1pdGVtLW5hbWU9e3Byb3BzLnByb2R1Y3QubmFtZX1cclxuICAgICAgICAgIGRhdGEtaXRlbS1wcmljZT17cHJvcHMucHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgIGRhdGEtaXRlbS11cmw9e3Byb3BzLnJvdXRlci5wYXRobmFtZX1cclxuICAgICAgICAgIGRhdGEtaXRlbS1pbWFnZT17cHJvcHMucHJvZHVjdC5pbWFnZX0+XHJcbiAgICAgICAgICBBZGQgdG8gY2FydFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFByb2R1Y3QpIl0sInNvdXJjZVJvb3QiOiIifQ==