webpackHotUpdate_N_E("pages/product/[id]",{

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
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Product */ "./components/Product.tsx");
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "app",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
        "data-api-key": "ZWJmNDMwM2ItNWM3YS00ODYxLWE1ZDktZWZkMjAwOTgyOTE4NjM3NDYxNDMxNjYzMDA3OTEx",
        id: "snipcart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
        rel: "stylesheet",
        type: "text/css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "main",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "product-list",
        children: props.products.map(function (item, index) {
          id.includes(item.id) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Product__WEBPACK_IMPORTED_MODULE_5__["default"], {
            product: item
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 44
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
    var req, list;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            list = [{
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
            }];
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

          case 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBkcCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwiaXRlbSIsInJlcSIsImxpc3QiLCJuYW1lIiwicHJpY2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwicHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sUUFBOEI7QUFBQTs7QUFBQTs7QUFDeEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBZjtBQUR3QyxNQUVoQ0MsRUFGZ0MsR0FFekJGLE1BQU0sQ0FGbUIsS0FFekJBLENBRnlCO0FBS3hDLHNCQUNFO0FBQUssYUFBUyxFQUFkO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRTtBQUFRLFdBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixLQUNFLENBREYsZUFFRTtBQUFRLFdBQUcsRUFBWDtBQUErRCx3QkFBL0Q7QUFBdUosVUFBRSxFQUFDO0FBQTFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRixLQUVFLENBRkYsZUFHRTtBQUFNLFlBQUksRUFBVjtBQUF1RSxXQUFHLEVBQTFFO0FBQXdGLFlBQUksRUFBQztBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSEYsS0FHRSxDQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGLEtBQ0UsQ0FERixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FORixLQU1FLENBTkYsZUFPRTtBQUFNLGVBQVMsRUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBZDtBQUFBLGtCQUNLLEtBQUssQ0FBTCxhQUFtQix1QkFDZjtBQUFFRSxZQUFFLENBQUZBLFNBQVlDLElBQUksQ0FBaEJELG9CQUF3QjtBQUFTLG1CQUFPLEVBQUVDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBeEJELEtBQXdCLENBQXhCQTtBQUROO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FQRixLQU9FLENBUEYsZUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BZEYsS0FjRSxDQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLEtBQ0UsQ0FERjtBQUxGOztJQUFNSCxHO1VBQ1dFLHFEOzs7TUFEWEYsRzs7R0FBQUEsRztVQUNXRSxxRDs7O0tBRFhGLEc7O0FBeUJOQSxHQUFHLENBQUhBO0FBQUFBLCtMQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0ssZUFBVCxXQUFTQTtBQUVyQkMsZ0JBRlksR0FFTCxDQUNUO0FBQUNILGdCQUFFLEVBQUg7QUFBd0JJLGtCQUFJLEVBQTVCO0FBQWdEQyxtQkFBSyxFQUFyRDtBQUE4REMsbUJBQUssRUFBbkU7QUFBK0ZDLHlCQUFXLEVBQUU7QUFBNUcsYUFEUyxFQUVUO0FBQUNQLGdCQUFFLEVBQUg7QUFBMkJJLGtCQUFJLEVBQS9CO0FBQXVEQyxtQkFBSyxFQUE1RDtBQUFrRUMsbUJBQUssRUFBdkU7QUFBcUdDLHlCQUFXLEVBQUU7QUFBbEgsYUFGUyxFQUdUO0FBQUNQLGdCQUFFLEVBQUg7QUFBeUJJLGtCQUFJLEVBQTdCO0FBQWtEQyxtQkFBSyxFQUF2RDtBQUErREMsbUJBQUssRUFBcEU7QUFBaUdDLHlCQUFXLEVBQUU7QUFBOUcsYUFIUyxFQUlUO0FBQUNQLGdCQUFFLEVBQUg7QUFBd0JJLGtCQUFJLEVBQTVCO0FBQWdEQyxtQkFBSyxFQUFyRDtBQUE2REMsbUJBQUssRUFBbEU7QUFBOEZDLHlCQUFXLEVBQUU7QUFBM0csYUFKUyxDQUFQSjtBQUZZLDZDQVNYO0FBQ0xLLHNCQUFRLEVBQUUsQ0FDTjtBQUFDUixrQkFBRSxFQUFIO0FBQXdCSSxvQkFBSSxFQUE1QjtBQUFnREMscUJBQUssRUFBckQ7QUFBOERDLHFCQUFLLEVBQW5FO0FBQStGQywyQkFBVyxFQUFFO0FBQTVHLGVBRE0sRUFFTjtBQUFDUCxrQkFBRSxFQUFIO0FBQTJCSSxvQkFBSSxFQUEvQjtBQUF1REMscUJBQUssRUFBNUQ7QUFBa0VDLHFCQUFLLEVBQXZFO0FBQXFHQywyQkFBVyxFQUFFO0FBQWxILGVBRk0sRUFHTjtBQUFDUCxrQkFBRSxFQUFIO0FBQXlCSSxvQkFBSSxFQUE3QjtBQUFrREMscUJBQUssRUFBdkQ7QUFBK0RDLHFCQUFLLEVBQXBFO0FBQWlHQywyQkFBVyxFQUFFO0FBQTlHLGVBSE0sRUFJTjtBQUFDUCxrQkFBRSxFQUFIO0FBQXdCSSxvQkFBSSxFQUE1QjtBQUFnREMscUJBQUssRUFBckQ7QUFBNkRDLHFCQUFLLEVBQWxFO0FBQThGQywyQkFBVyxFQUFFO0FBQTNHLGVBSk07QUFETCxhQVRXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QlY7O0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBOztBQW1CQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0L1tpZF0uNWE3OTMyOTE5MTE4MjFjODEzMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlclwiXHJcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdFwiXHJcbmltcG9ydCBQcm9kdWN0LCB7IElQcm9kdWN0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdFwiXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcblxyXG5pbnRlcmZhY2UgSVByb2R1Y3RMaXN0UHJvcHMge1xyXG4gICAgcHJvZHVjdHM6IElQcm9kdWN0W11cclxufVxyXG5cclxuY29uc3QgUGRwID0gKHByb3BzOiBJUHJvZHVjdExpc3RQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzIuMi4yL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLnNuaXBjYXJ0LmNvbS9zY3JpcHRzLzIuMC9zbmlwY2FydC5qc1wiIGRhdGEtYXBpLWtleT1cIlpXSm1ORE13TTJJdE5XTTNZUzAwT0RZeExXRTFaRGt0Wldaa01qQXdPVGd5T1RFNE5qTTNORFl4TkRNeE5qWXpNREEzT1RFeFwiIGlkPVwic25pcGNhcnRcIj48L3NjcmlwdD5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uc25pcGNhcnQuY29tL3RoZW1lcy8yLjAvYmFzZS9zbmlwY2FydC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RcIj5cclxuICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RzLm1hcCgoaXRlbSwgaW5kZXgpID0+IFxyXG4gICAgICAgICAgICAgICAgIHsgaWQuaW5jbHVkZXMoaXRlbS5pZCkgJiYgPFByb2R1Y3QgcHJvZHVjdD17aXRlbX0ga2V5PXtpbmRleH0vPiB9ICAgICAgICAgICBcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblBkcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBsaXN0ID0gW1xyXG4gICAgICAgIHtpZDogXCJuZXh0anNfaGFsZm1vb25cIiwgbmFtZTogXCJIYWxmbW9vbiBCZXR0YVwiLCBwcmljZTogMjUuMDAsIGltYWdlOiBcIi4uL3N0YXRpYy9oYWxmbW9vbi5qcGdcIiwgZGVzY3JpcHRpb246IFwiVGhlIEhhbGZtb29uIGJldHRhIGlzIGFyZ3VhYmx5IG9uZSBvZiB0aGUgcHJldHRpZXN0IGJldHRhIHNwZWNpZXMuIEl0IGlzIHJlY29nbml6ZWQgYnkgaXRzIGxhcmdlIHRhaWwgdGhhdCBjYW4gZmxhcmUgdXAgdG8gMTgwIGRlZ3JlZXMuXCJ9LFxyXG4gICAgICAgIHtpZDogXCJuZXh0anNfZHJhZ29uc2NhbGVcIiwgbmFtZTogXCJEcmFnb24gU2NhbGUgQmV0dGFcIiwgcHJpY2U6IDM1LCBpbWFnZTogXCIuLi9zdGF0aWMvZHJhZ29uc2NhbGUuanBnXCIsZGVzY3JpcHRpb246IFwiVGhlIGRyYWdvbiBzY2FsZSBiZXR0YSBpcyBhIHJhcmVyIGFuZCBoaWdoZXIgbWFpbnRlbmFuY2UgZmlzaC4gSXQgaXMgbmFtZWQgYnkgaXRzIHRoaWNrIHdoaXRlIHNjYWxlcyBjb3ZlcmluZyBoaXMgc2lkZXMgdGhhdCBsb29rcyBsaWtlIGRyYWdvbiBzY2FsZSBhcm1vci5cIn0gLFxyXG4gICAgICAgIHtpZDogXCJuZXh0anNfY3Jvd250YWlsXCIsIG5hbWU6IFwiQ3Jvd250YWlsIEJldHRhXCIsIHByaWNlOiA3LjUwLCBpbWFnZTogXCIuLi9zdGF0aWMvY3Jvd250YWlsLmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJUaGUgY3Jvd250YWlsIGlzIHByZXR0eSBjb21tb24sIGJ1dCBpbnRlcmVzdGluZyBub25lIHRoZSBsZXNzLiBJdCdzIHJlY29nbml6ZWQgYnkgdGhlIHNoYXBlIG9mIGl0cyB0YWlsIHRoYXQgaGFzIGFuIGFwcGVhcmFuY2Ugb2YgYSBjb21iLlwifSAsXHJcbiAgICAgICAge2lkOiBcIm5leHRqc192ZWlsdGFpbFwiLCBuYW1lOiBcIlZlaWx0YWlsIEJldHRhXCIsIHByaWNlOiA1LjAwLCBpbWFnZTogXCIuLi9zdGF0aWMvdmVpbHRhaWwuanBnXCIsIGRlc2NyaXB0aW9uOiBcIkJ5IGZhciB0aGUgbW9zdCBjb21tb24gYmV0dGEgZmlzaC4gWW91IGNhbiByZWNvZ25pemUgaXQgYnkgaXRzIGxvbmcgdGFpbCBhaW1pbmcgZG93bndhcmRzLlwifVxyXG4gICAgXVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9kdWN0czogW1xyXG4gICAgICAgICAge2lkOiBcIm5leHRqc19oYWxmbW9vblwiLCBuYW1lOiBcIkhhbGZtb29uIEJldHRhXCIsIHByaWNlOiAyNS4wMCwgaW1hZ2U6IFwiLi4vc3RhdGljL2hhbGZtb29uLmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJUaGUgSGFsZm1vb24gYmV0dGEgaXMgYXJndWFibHkgb25lIG9mIHRoZSBwcmV0dGllc3QgYmV0dGEgc3BlY2llcy4gSXQgaXMgcmVjb2duaXplZCBieSBpdHMgbGFyZ2UgdGFpbCB0aGF0IGNhbiBmbGFyZSB1cCB0byAxODAgZGVncmVlcy5cIn0gYXMgSVByb2R1Y3QsXHJcbiAgICAgICAgICB7aWQ6IFwibmV4dGpzX2RyYWdvbnNjYWxlXCIsIG5hbWU6IFwiRHJhZ29uIFNjYWxlIEJldHRhXCIsIHByaWNlOiAzNSwgaW1hZ2U6IFwiLi4vc3RhdGljL2RyYWdvbnNjYWxlLmpwZ1wiLGRlc2NyaXB0aW9uOiBcIlRoZSBkcmFnb24gc2NhbGUgYmV0dGEgaXMgYSByYXJlciBhbmQgaGlnaGVyIG1haW50ZW5hbmNlIGZpc2guIEl0IGlzIG5hbWVkIGJ5IGl0cyB0aGljayB3aGl0ZSBzY2FsZXMgY292ZXJpbmcgaGlzIHNpZGVzIHRoYXQgbG9va3MgbGlrZSBkcmFnb24gc2NhbGUgYXJtb3IuXCJ9IGFzIElQcm9kdWN0LFxyXG4gICAgICAgICAge2lkOiBcIm5leHRqc19jcm93bnRhaWxcIiwgbmFtZTogXCJDcm93bnRhaWwgQmV0dGFcIiwgcHJpY2U6IDcuNTAsIGltYWdlOiBcIi4uL3N0YXRpYy9jcm93bnRhaWwuanBnXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBjcm93bnRhaWwgaXMgcHJldHR5IGNvbW1vbiwgYnV0IGludGVyZXN0aW5nIG5vbmUgdGhlIGxlc3MuIEl0J3MgcmVjb2duaXplZCBieSB0aGUgc2hhcGUgb2YgaXRzIHRhaWwgdGhhdCBoYXMgYW4gYXBwZWFyYW5jZSBvZiBhIGNvbWIuXCJ9IGFzIElQcm9kdWN0LFxyXG4gICAgICAgICAge2lkOiBcIm5leHRqc192ZWlsdGFpbFwiLCBuYW1lOiBcIlZlaWx0YWlsIEJldHRhXCIsIHByaWNlOiA1LjAwLCBpbWFnZTogXCIuLi9zdGF0aWMvdmVpbHRhaWwuanBnXCIsIGRlc2NyaXB0aW9uOiBcIkJ5IGZhciB0aGUgbW9zdCBjb21tb24gYmV0dGEgZmlzaC4gWW91IGNhbiByZWNvZ25pemUgaXQgYnkgaXRzIGxvbmcgdGFpbCBhaW1pbmcgZG93bndhcmRzLlwifSBhcyBJUHJvZHVjdFxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGRwIl0sInNvdXJjZVJvb3QiOiIifQ==