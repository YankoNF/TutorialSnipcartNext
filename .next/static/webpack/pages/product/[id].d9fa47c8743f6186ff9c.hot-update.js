webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./components/Product.tsx":
false,

/***/ "./components/ProductList.tsx":
false,

/***/ "./pages/product/[id]/index.tsx":
/*!**************************************!*\
  !*** ./pages/product/[id]/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Header */ "./components/Header.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
var _s2 = $RefreshSig$();





var _jsxFileName = "C:\\Users\\ynion\\Documents\\SnipcartNext\\pages\\product\\[id]\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Pdp = function Pdp(props) {
  _s2();

  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id;
  var product;
  props.products.forEach(function (element) {
    if (element.id == id) {
      productList.products.push(element);
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "app",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
        "data-api-key": "ZWJmNDMwM2ItNWM3YS00ODYxLWE1ZDktZWZkMjAwOTgyOTE4NjM3NDYxNDMxNjYzMDA3OTEx",
        id: "snipcart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
        rel: "stylesheet",
        type: "text/css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "main",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "product",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/product/".concat(props.product.id),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
            className: "product__title",
            children: props.product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "product__description",
          children: props.product.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/product/".concat(props.product.id),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: props.product.image,
            alt: "",
            className: "product__image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "product__price-button-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "product__price",
            children: ["$", props.product.price.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            className: "snipcart-add-item product__button",
            "data-item-id": props.product.id,
            "data-item-name": props.product.name,
            "data-item-price": props.product.price,
            "data-item-url": props.router.pathname,
            "data-item-image": props.product.image,
            children: "Add to cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s2(Pdp, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c2 = Pdp;

_s(Pdp, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Pdp;

Pdp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            return _context.abrupt("return", {
              products: [{
                id: "nextjs_halfmoon",
                name: "Halfmoon Betta",
                price: 25.00,
                image: "../static/halfmoon.jpg",
                description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees."
              }, {
                id: "nextjs_dragonscale",
                name: "Dragon Scale Betta",
                price: 35,
                image: "../static/dragonscale.jpg",
                description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor."
              }, {
                id: "nextjs_crowntail",
                name: "Crowntail Betta",
                price: 7.50,
                image: "../static/crowntail.jpg",
                description: "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb."
              }, {
                id: "nextjs_veiltail",
                name: "Veiltail Betta",
                price: 5.00,
                image: "../static/veiltail.jpg",
                description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards."
              }]
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBkcCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicHJvcHMiLCJlbGVtZW50IiwicHJvZHVjdExpc3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJyZXEiLCJwcm9kdWN0cyIsInByaWNlIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQU1BLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLFFBQThCO0FBQUE7O0FBQUE7O0FBQ3hDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQWY7QUFEd0MsTUFFaENDLEVBRmdDLEdBRXpCRixNQUFNLENBRm1CLEtBRXpCQSxDQUZ5QjtBQUd4QztBQUVBRyxPQUFLLENBQUxBLGlCQUF1QixtQkFBVztBQUM5QixRQUFHQyxPQUFPLENBQVBBLE1BQUgsSUFBb0I7QUFDaEJDLGlCQUFXLENBQVhBO0FBQ0g7QUFITEY7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBZDtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBUSxXQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsS0FDRSxDQURGLGVBRUU7QUFBUSxXQUFHLEVBQVg7QUFBK0Qsd0JBQS9EO0FBQXVKLFVBQUUsRUFBQztBQUExSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkYsS0FFRSxDQUZGLGVBR0U7QUFBTSxZQUFJLEVBQVY7QUFBdUUsV0FBRyxFQUExRTtBQUF3RixZQUFJLEVBQUM7QUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUhGLEtBR0UsQ0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixLQUNFLENBREYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTkYsS0FNRSxDQU5GLGVBT0U7QUFBTSxlQUFTLEVBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQWQ7QUFBQSxnQ0FDSTtBQUFNLGNBQUkscUJBQWNBLEtBQUssQ0FBTEEsUUFBeEIsRUFBVSxDQUFWO0FBQUEsaUNBQ0k7QUFBSSxxQkFBUyxFQUFiO0FBQUEsc0JBQWdDQSxLQUFLLENBQUxBLFFBQWNHO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosS0FDSSxDQURKLGVBSUk7QUFBRyxtQkFBUyxFQUFaO0FBQUEsb0JBQXFDSCxLQUFLLENBQUxBLFFBQWNJO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKSixLQUlJLENBSkosZUFLSTtBQUFNLGNBQUkscUJBQWNKLEtBQUssQ0FBTEEsUUFBeEIsRUFBVSxDQUFWO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUVBLEtBQUssQ0FBTEEsUUFBVjtBQUErQixlQUFHLEVBQWxDO0FBQXNDLHFCQUFTLEVBQUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FMSixLQUtJLENBTEosZUFRSTtBQUFLLG1CQUFTLEVBQWQ7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQWQ7QUFBQSw0QkFBa0NBLEtBQUssQ0FBTEEsc0JBQWxDLENBQWtDQSxDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixLQUNJLENBREosZUFFSTtBQUNBLHFCQUFTLEVBRFQ7QUFFQSw0QkFBY0EsS0FBSyxDQUFMQSxRQUZkO0FBR0EsOEJBQWdCQSxLQUFLLENBQUxBLFFBSGhCO0FBSUEsK0JBQWlCQSxLQUFLLENBQUxBLFFBSmpCO0FBS0EsNkJBQWVBLEtBQUssQ0FBTEEsT0FMZjtBQU1BLCtCQUFpQkEsS0FBSyxDQUFMQSxRQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEtBRUksQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FSSixLQVFJLENBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVBGLEtBT0UsQ0FQRixlQThCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BOUJGLEtBOEJFLENBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLEtBQ0UsQ0FERjtBQVhGOztJQUFNSixHO1VBQ1dFLHFEOzs7TUFEWEYsRzs7R0FBQUEsRztVQUNXRSxxRDs7O0tBRFhGLEc7O0FBK0NOQSxHQUFHLENBQUhBO0FBQUFBLCtMQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU1MsZUFBVCxXQUFTQTtBQUFULDZDQUNYO0FBQ0xDLHNCQUFRLEVBQUUsQ0FDTjtBQUFDUCxrQkFBRSxFQUFIO0FBQXdCSSxvQkFBSSxFQUE1QjtBQUFnREkscUJBQUssRUFBckQ7QUFBOERDLHFCQUFLLEVBQW5FO0FBQStGSiwyQkFBVyxFQUFFO0FBQTVHLGVBRE0sRUFFTjtBQUFDTCxrQkFBRSxFQUFIO0FBQTJCSSxvQkFBSSxFQUEvQjtBQUF1REkscUJBQUssRUFBNUQ7QUFBa0VDLHFCQUFLLEVBQXZFO0FBQXFHSiwyQkFBVyxFQUFFO0FBQWxILGVBRk0sRUFHTjtBQUFDTCxrQkFBRSxFQUFIO0FBQXlCSSxvQkFBSSxFQUE3QjtBQUFrREkscUJBQUssRUFBdkQ7QUFBK0RDLHFCQUFLLEVBQXBFO0FBQWlHSiwyQkFBVyxFQUFFO0FBQTlHLGVBSE0sRUFJTjtBQUFDTCxrQkFBRSxFQUFIO0FBQXdCSSxvQkFBSSxFQUE1QjtBQUFnREkscUJBQUssRUFBckQ7QUFBNkRDLHFCQUFLLEVBQWxFO0FBQThGSiwyQkFBVyxFQUFFO0FBQTNHLGVBSk07QUFETCxhQURXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QlI7O0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBOztBQVdBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW2lkXS5kOWZhNDdjODc0M2Y2MTg2ZmY5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCJcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdFwiXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcblxyXG5pbnRlcmZhY2UgSVByb2R1Y3RMaXN0UHJvcHMge1xyXG4gICAgcHJvZHVjdHM6IElQcm9kdWN0W11cclxufVxyXG5cclxuY29uc3QgUGRwID0gKHByb3BzOiBJUHJvZHVjdExpc3RQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgcHJvZHVjdCA6IElQcm9kdWN0XHJcblxyXG4gIHByb3BzLnByb2R1Y3RzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmKGVsZW1lbnQuaWQgPT0gaWQpe1xyXG4gICAgICAgICAgcHJvZHVjdExpc3QucHJvZHVjdHMucHVzaChlbGVtZW50KVxyXG4gICAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzIuMi4yL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLnNuaXBjYXJ0LmNvbS9zY3JpcHRzLzIuMC9zbmlwY2FydC5qc1wiIGRhdGEtYXBpLWtleT1cIlpXSm1ORE13TTJJdE5XTTNZUzAwT0RZeExXRTFaRGt0Wldaa01qQXdPVGd5T1RFNE5qTTNORFl4TkRNeE5qWXpNREEzT1RFeFwiIGlkPVwic25pcGNhcnRcIj48L3NjcmlwdD5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uc25pcGNhcnQuY29tL3RoZW1lcy8yLjAvYmFzZS9zbmlwY2FydC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb3BzLnByb2R1Y3QuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZHVjdF9fdGl0bGVcIj57cHJvcHMucHJvZHVjdC5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdF9fZGVzY3JpcHRpb25cIj57cHJvcHMucHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb3BzLnByb2R1Y3QuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMucHJvZHVjdC5pbWFnZX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwicHJvZHVjdF9faW1hZ2VcIi8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19wcmljZS1idXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX3ByaWNlXCI+JHtwcm9wcy5wcm9kdWN0LnByaWNlLnRvRml4ZWQoMil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic25pcGNhcnQtYWRkLWl0ZW0gcHJvZHVjdF9fYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaXRlbS1pZD17cHJvcHMucHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICAgIGRhdGEtaXRlbS1uYW1lPXtwcm9wcy5wcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWl0ZW0tcHJpY2U9e3Byb3BzLnByb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWl0ZW0tdXJsPXtwcm9wcy5yb3V0ZXIucGF0aG5hbWV9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWl0ZW0taW1hZ2U9e3Byb3BzLnByb2R1Y3QuaW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgQWRkIHRvIGNhcnRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblBkcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvZHVjdHM6IFtcclxuICAgICAgICAgIHtpZDogXCJuZXh0anNfaGFsZm1vb25cIiwgbmFtZTogXCJIYWxmbW9vbiBCZXR0YVwiLCBwcmljZTogMjUuMDAsIGltYWdlOiBcIi4uL3N0YXRpYy9oYWxmbW9vbi5qcGdcIiwgZGVzY3JpcHRpb246IFwiVGhlIEhhbGZtb29uIGJldHRhIGlzIGFyZ3VhYmx5IG9uZSBvZiB0aGUgcHJldHRpZXN0IGJldHRhIHNwZWNpZXMuIEl0IGlzIHJlY29nbml6ZWQgYnkgaXRzIGxhcmdlIHRhaWwgdGhhdCBjYW4gZmxhcmUgdXAgdG8gMTgwIGRlZ3JlZXMuXCJ9IGFzIElQcm9kdWN0LFxyXG4gICAgICAgICAge2lkOiBcIm5leHRqc19kcmFnb25zY2FsZVwiLCBuYW1lOiBcIkRyYWdvbiBTY2FsZSBCZXR0YVwiLCBwcmljZTogMzUsIGltYWdlOiBcIi4uL3N0YXRpYy9kcmFnb25zY2FsZS5qcGdcIixkZXNjcmlwdGlvbjogXCJUaGUgZHJhZ29uIHNjYWxlIGJldHRhIGlzIGEgcmFyZXIgYW5kIGhpZ2hlciBtYWludGVuYW5jZSBmaXNoLiBJdCBpcyBuYW1lZCBieSBpdHMgdGhpY2sgd2hpdGUgc2NhbGVzIGNvdmVyaW5nIGhpcyBzaWRlcyB0aGF0IGxvb2tzIGxpa2UgZHJhZ29uIHNjYWxlIGFybW9yLlwifSBhcyBJUHJvZHVjdCxcclxuICAgICAgICAgIHtpZDogXCJuZXh0anNfY3Jvd250YWlsXCIsIG5hbWU6IFwiQ3Jvd250YWlsIEJldHRhXCIsIHByaWNlOiA3LjUwLCBpbWFnZTogXCIuLi9zdGF0aWMvY3Jvd250YWlsLmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJUaGUgY3Jvd250YWlsIGlzIHByZXR0eSBjb21tb24sIGJ1dCBpbnRlcmVzdGluZyBub25lIHRoZSBsZXNzLiBJdCdzIHJlY29nbml6ZWQgYnkgdGhlIHNoYXBlIG9mIGl0cyB0YWlsIHRoYXQgaGFzIGFuIGFwcGVhcmFuY2Ugb2YgYSBjb21iLlwifSBhcyBJUHJvZHVjdCxcclxuICAgICAgICAgIHtpZDogXCJuZXh0anNfdmVpbHRhaWxcIiwgbmFtZTogXCJWZWlsdGFpbCBCZXR0YVwiLCBwcmljZTogNS4wMCwgaW1hZ2U6IFwiLi4vc3RhdGljL3ZlaWx0YWlsLmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJCeSBmYXIgdGhlIG1vc3QgY29tbW9uIGJldHRhIGZpc2guIFlvdSBjYW4gcmVjb2duaXplIGl0IGJ5IGl0cyBsb25nIHRhaWwgYWltaW5nIGRvd253YXJkcy5cIn0gYXMgSVByb2R1Y3RcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBkcCJdLCJzb3VyY2VSb290IjoiIn0=