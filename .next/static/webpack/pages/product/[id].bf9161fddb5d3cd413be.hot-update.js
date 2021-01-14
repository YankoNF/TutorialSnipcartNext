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
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ProductList */ "./components/ProductList.tsx");
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
  var productList;
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
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
        "data-api-key": "ZWJmNDMwM2ItNWM3YS00ODYxLWE1ZDktZWZkMjAwOTgyOTE4NjM3NDYxNDMxNjYzMDA3OTEx",
        id: "snipcart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
        rel: "stylesheet",
        type: "text/css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "main",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_ProductList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        products: productList.products
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBkcCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicHJvcHMiLCJlbGVtZW50IiwicHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsInJlcSIsIm5hbWUiLCJwcmljZSIsImltYWdlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBTUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sUUFBOEI7QUFBQTs7QUFBQTs7QUFDeEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBZjtBQUR3QyxNQUVoQ0MsRUFGZ0MsR0FFekJGLE1BQU0sQ0FGbUIsS0FFekJBLENBRnlCO0FBR3hDO0FBRUFHLE9BQUssQ0FBTEEsaUJBQXVCLG1CQUFXO0FBQzlCLFFBQUdDLE9BQU8sQ0FBUEEsTUFBSCxJQUFvQjtBQUNoQkMsaUJBQVcsQ0FBWEE7QUFDSDtBQUhMRjtBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFkO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRTtBQUFRLFdBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixLQUNFLENBREYsZUFFRTtBQUFRLFdBQUcsRUFBWDtBQUErRCx3QkFBL0Q7QUFBdUosVUFBRSxFQUFDO0FBQTFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRixLQUVFLENBRkYsZUFHRTtBQUFNLFlBQUksRUFBVjtBQUF1RSxXQUFHLEVBQTFFO0FBQXdGLFlBQUksRUFBQztBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSEYsS0FHRSxDQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGLEtBQ0UsQ0FERixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FORixLQU1FLENBTkYsZUFPRTtBQUFNLGVBQVMsRUFBZjtBQUFBLDZCQUNFO0FBQWEsZ0JBQVEsRUFBRUUsV0FBVyxDQUFDQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVBGLEtBT0UsQ0FQRixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FWRixLQVVFLENBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsS0FDRSxDQURGO0FBWEY7O0lBQU1QLEc7VUFDV0UscUQ7OztNQURYRixHOztHQUFBQSxHO1VBQ1dFLHFEOzs7S0FEWEYsRzs7QUEyQk5BLEdBQUcsQ0FBSEE7QUFBQUEsK0xBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTUSxlQUFULFdBQVNBO0FBQVQsNkNBQ1g7QUFDTEQsc0JBQVEsRUFBRSxDQUNOO0FBQUNKLGtCQUFFLEVBQUg7QUFBd0JNLG9CQUFJLEVBQTVCO0FBQWdEQyxxQkFBSyxFQUFyRDtBQUE4REMscUJBQUssRUFBbkU7QUFBK0ZDLDJCQUFXLEVBQUU7QUFBNUcsZUFETSxFQUVOO0FBQUNULGtCQUFFLEVBQUg7QUFBMkJNLG9CQUFJLEVBQS9CO0FBQXVEQyxxQkFBSyxFQUE1RDtBQUFrRUMscUJBQUssRUFBdkU7QUFBcUdDLDJCQUFXLEVBQUU7QUFBbEgsZUFGTSxFQUdOO0FBQUNULGtCQUFFLEVBQUg7QUFBeUJNLG9CQUFJLEVBQTdCO0FBQWtEQyxxQkFBSyxFQUF2RDtBQUErREMscUJBQUssRUFBcEU7QUFBaUdDLDJCQUFXLEVBQUU7QUFBOUcsZUFITSxFQUlOO0FBQUNULGtCQUFFLEVBQUg7QUFBd0JNLG9CQUFJLEVBQTVCO0FBQWdEQyxxQkFBSyxFQUFyRDtBQUE2REMscUJBQUssRUFBbEU7QUFBOEZDLDJCQUFXLEVBQUU7QUFBM0csZUFKTTtBQURMLGFBRFc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCWjs7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7O0FBV0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLmJmOTE2MWZkZGI1ZDNjZDQxM2JlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIlxyXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3RcIlxyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RcIlxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0Zvb3RlclwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5cclxuaW50ZXJmYWNlIElQcm9kdWN0TGlzdFByb3BzIHtcclxuICAgIHByb2R1Y3RzOiBJUHJvZHVjdFtdXHJcbn1cclxuXHJcbmNvbnN0IFBkcCA9IChwcm9wczogSVByb2R1Y3RMaXN0UHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG4gIHZhciBwcm9kdWN0TGlzdCA6IElQcm9kdWN0TGlzdFByb3BzXHJcblxyXG4gIHByb3BzLnByb2R1Y3RzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmKGVsZW1lbnQuaWQgPT0gaWQpe1xyXG4gICAgICAgICAgcHJvZHVjdExpc3QucHJvZHVjdHMucHVzaChlbGVtZW50KVxyXG4gICAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzIuMi4yL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLnNuaXBjYXJ0LmNvbS9zY3JpcHRzLzIuMC9zbmlwY2FydC5qc1wiIGRhdGEtYXBpLWtleT1cIlpXSm1ORE13TTJJdE5XTTNZUzAwT0RZeExXRTFaRGt0Wldaa01qQXdPVGd5T1RFNE5qTTNORFl4TkRNeE5qWXpNREEzT1RFeFwiIGlkPVwic25pcGNhcnRcIj48L3NjcmlwdD5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uc25pcGNhcnQuY29tL3RoZW1lcy8yLjAvYmFzZS9zbmlwY2FydC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0TGlzdC5wcm9kdWN0c30gLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblBkcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvZHVjdHM6IFtcclxuICAgICAgICAgIHtpZDogXCJuZXh0anNfaGFsZm1vb25cIiwgbmFtZTogXCJIYWxmbW9vbiBCZXR0YVwiLCBwcmljZTogMjUuMDAsIGltYWdlOiBcIi4uL3N0YXRpYy9oYWxmbW9vbi5qcGdcIiwgZGVzY3JpcHRpb246IFwiVGhlIEhhbGZtb29uIGJldHRhIGlzIGFyZ3VhYmx5IG9uZSBvZiB0aGUgcHJldHRpZXN0IGJldHRhIHNwZWNpZXMuIEl0IGlzIHJlY29nbml6ZWQgYnkgaXRzIGxhcmdlIHRhaWwgdGhhdCBjYW4gZmxhcmUgdXAgdG8gMTgwIGRlZ3JlZXMuXCJ9IGFzIElQcm9kdWN0LFxyXG4gICAgICAgICAge2lkOiBcIm5leHRqc19kcmFnb25zY2FsZVwiLCBuYW1lOiBcIkRyYWdvbiBTY2FsZSBCZXR0YVwiLCBwcmljZTogMzUsIGltYWdlOiBcIi4uL3N0YXRpYy9kcmFnb25zY2FsZS5qcGdcIixkZXNjcmlwdGlvbjogXCJUaGUgZHJhZ29uIHNjYWxlIGJldHRhIGlzIGEgcmFyZXIgYW5kIGhpZ2hlciBtYWludGVuYW5jZSBmaXNoLiBJdCBpcyBuYW1lZCBieSBpdHMgdGhpY2sgd2hpdGUgc2NhbGVzIGNvdmVyaW5nIGhpcyBzaWRlcyB0aGF0IGxvb2tzIGxpa2UgZHJhZ29uIHNjYWxlIGFybW9yLlwifSBhcyBJUHJvZHVjdCxcclxuICAgICAgICAgIHtpZDogXCJuZXh0anNfY3Jvd250YWlsXCIsIG5hbWU6IFwiQ3Jvd250YWlsIEJldHRhXCIsIHByaWNlOiA3LjUwLCBpbWFnZTogXCIuLi9zdGF0aWMvY3Jvd250YWlsLmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJUaGUgY3Jvd250YWlsIGlzIHByZXR0eSBjb21tb24sIGJ1dCBpbnRlcmVzdGluZyBub25lIHRoZSBsZXNzLiBJdCdzIHJlY29nbml6ZWQgYnkgdGhlIHNoYXBlIG9mIGl0cyB0YWlsIHRoYXQgaGFzIGFuIGFwcGVhcmFuY2Ugb2YgYSBjb21iLlwifSBhcyBJUHJvZHVjdCxcclxuICAgICAgICAgIHtpZDogXCJuZXh0anNfdmVpbHRhaWxcIiwgbmFtZTogXCJWZWlsdGFpbCBCZXR0YVwiLCBwcmljZTogNS4wMCwgaW1hZ2U6IFwiLi4vc3RhdGljL3ZlaWx0YWlsLmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJCeSBmYXIgdGhlIG1vc3QgY29tbW9uIGJldHRhIGZpc2guIFlvdSBjYW4gcmVjb2duaXplIGl0IGJ5IGl0cyBsb25nIHRhaWwgYWltaW5nIGRvd253YXJkcy5cIn0gYXMgSVByb2R1Y3RcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBkcCJdLCJzb3VyY2VSb290IjoiIn0=