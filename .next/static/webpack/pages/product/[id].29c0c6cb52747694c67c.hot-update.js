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
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
var _s2 = $RefreshSig$();





var _jsxFileName = "C:\\Users\\ynion\\Documents\\SnipcartNext\\pages\\product\\[id]\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Pdp = function Pdp(props) {
  _s2();

  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.asPath.split('/')[2];
  var position = 0;
  var i = 0;
  props.products.forEach(function (element) {
    if (element.id === id) {
      position = i;
    }

    i++;
  });
  var item = props.products[position];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "app",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
        "data-api-key": "ZWJmNDMwM2ItNWM3YS00ODYxLWE1ZDktZWZkMjAwOTgyOTE4NjM3NDYxNDMxNjYzMDA3OTEx",
        id: "snipcart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
        rel: "stylesheet",
        type: "text/css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "main",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "product-list",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Product__WEBPACK_IMPORTED_MODULE_5__["default"], {
          product: item
        }, position, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBkcCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicG9zaXRpb24iLCJpIiwicHJvcHMiLCJlbGVtZW50IiwiaXRlbSIsInJlcSIsInByb2R1Y3RzIiwibmFtZSIsInByaWNlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sUUFBOEI7QUFBQTs7QUFBQTs7QUFDeEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBZjtBQUNBLE1BQU1DLEVBQUUsR0FBR0YsTUFBTSxDQUFOQSxrQkFBWCxDQUFXQSxDQUFYO0FBQ0EsTUFBSUcsUUFBUSxHQUFaO0FBQ0EsTUFBSUMsQ0FBQyxHQUFMO0FBRUFDLE9BQUssQ0FBTEEsaUJBQXVCLG1CQUFXO0FBRTVCLFFBQUdDLE9BQU8sQ0FBUEEsT0FBSCxJQUFxQjtBQUNqQkgsY0FBUSxHQUFSQTtBQUNIOztBQUNEQyxLQUFDO0FBTFBDO0FBUUEsTUFBSUUsSUFBSSxHQUFHRixLQUFLLENBQUxBLFNBQVgsUUFBV0EsQ0FBWDtBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFkO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRTtBQUFRLFdBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixLQUNFLENBREYsZUFFRTtBQUFRLFdBQUcsRUFBWDtBQUErRCx3QkFBL0Q7QUFBdUosVUFBRSxFQUFDO0FBQTFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRixLQUVFLENBRkYsZUFHRTtBQUFNLFlBQUksRUFBVjtBQUF1RSxXQUFHLEVBQTFFO0FBQXdGLFlBQUksRUFBQztBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSEYsS0FHRSxDQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGLEtBQ0UsQ0FERixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FORixLQU1FLENBTkYsZUFPRTtBQUFNLGVBQVMsRUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBZDtBQUFBLCtCQUNRO0FBQVMsaUJBQU8sRUFBRUU7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUEYsS0FPRSxDQVBGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVpGLEtBWUUsQ0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixLQUNFLENBREY7QUFqQkY7O0lBQU1SLEc7VUFDV0UscUQ7OztNQURYRixHOztHQUFBQSxHO1VBQ1dFLHFEOzs7S0FEWEYsRzs7QUFtQ05BLEdBQUcsQ0FBSEE7QUFBQUEsK0xBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTUyxlQUFULFdBQVNBO0FBQVQsNkNBQ1g7QUFDTEMsc0JBQVEsRUFBRSxDQUNOO0FBQUNQLGtCQUFFLEVBQUg7QUFBd0JRLG9CQUFJLEVBQTVCO0FBQWdEQyxxQkFBSyxFQUFyRDtBQUE4REMscUJBQUssRUFBbkU7QUFBK0ZDLDJCQUFXLEVBQUU7QUFBNUcsZUFETSxFQUVOO0FBQUNYLGtCQUFFLEVBQUg7QUFBMkJRLG9CQUFJLEVBQS9CO0FBQXVEQyxxQkFBSyxFQUE1RDtBQUFrRUMscUJBQUssRUFBdkU7QUFBcUdDLDJCQUFXLEVBQUU7QUFBbEgsZUFGTSxFQUdOO0FBQUNYLGtCQUFFLEVBQUg7QUFBeUJRLG9CQUFJLEVBQTdCO0FBQWtEQyxxQkFBSyxFQUF2RDtBQUErREMscUJBQUssRUFBcEU7QUFBaUdDLDJCQUFXLEVBQUU7QUFBOUcsZUFITSxFQUlOO0FBQUNYLGtCQUFFLEVBQUg7QUFBd0JRLG9CQUFJLEVBQTVCO0FBQWdEQyxxQkFBSyxFQUFyRDtBQUE2REMscUJBQUssRUFBbEU7QUFBOEZDLDJCQUFXLEVBQUU7QUFBM0csZUFKTTtBQURMLGFBRFc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCZDs7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7O0FBV0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjI5YzBjNmNiNTI3NDc2OTRjNjdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIlxyXG5pbXBvcnQgUHJvZHVjdCwgeyBJUHJvZHVjdCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RcIlxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0Zvb3RlclwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5cclxuaW50ZXJmYWNlIElQcm9kdWN0TGlzdFByb3BzIHtcclxuICAgIHByb2R1Y3RzOiBJUHJvZHVjdFtdXHJcbn1cclxuXHJcbmltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCJcclxuXHJcbmNvbnN0IFBkcCA9IChwcm9wczogSVByb2R1Y3RMaXN0UHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGlkID0gcm91dGVyLmFzUGF0aC5zcGxpdCgnLycpWzJdXHJcbiAgdmFyIHBvc2l0aW9uID0gMDtcclxuICB2YXIgaSA9IDA7XHJcblxyXG4gIHByb3BzLnByb2R1Y3RzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblxyXG4gICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpKys7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBpdGVtID0gcHJvcHMucHJvZHVjdHNbcG9zaXRpb25dXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8yLjIuMi9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5zbmlwY2FydC5jb20vc2NyaXB0cy8yLjAvc25pcGNhcnQuanNcIiBkYXRhLWFwaS1rZXk9XCJaV0ptTkRNd00ySXROV00zWVMwME9EWXhMV0UxWkRrdFpXWmtNakF3T1RneU9URTROak0zTkRZeE5ETXhOall6TURBM09URXhcIiBpZD1cInNuaXBjYXJ0XCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuLnNuaXBjYXJ0LmNvbS90aGVtZXMvMi4wL2Jhc2Uvc25pcGNhcnQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1saXN0XCI+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3QgcHJvZHVjdD17aXRlbX0ga2V5PXtwb3NpdGlvbn0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuUGRwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9kdWN0czogW1xyXG4gICAgICAgICAge2lkOiBcIm5leHRqc19oYWxmbW9vblwiLCBuYW1lOiBcIkhhbGZtb29uIEJldHRhXCIsIHByaWNlOiAyNS4wMCwgaW1hZ2U6IFwiLi4vc3RhdGljL2hhbGZtb29uLmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJUaGUgSGFsZm1vb24gYmV0dGEgaXMgYXJndWFibHkgb25lIG9mIHRoZSBwcmV0dGllc3QgYmV0dGEgc3BlY2llcy4gSXQgaXMgcmVjb2duaXplZCBieSBpdHMgbGFyZ2UgdGFpbCB0aGF0IGNhbiBmbGFyZSB1cCB0byAxODAgZGVncmVlcy5cIn0gYXMgSVByb2R1Y3QsXHJcbiAgICAgICAgICB7aWQ6IFwibmV4dGpzX2RyYWdvbnNjYWxlXCIsIG5hbWU6IFwiRHJhZ29uIFNjYWxlIEJldHRhXCIsIHByaWNlOiAzNSwgaW1hZ2U6IFwiLi4vc3RhdGljL2RyYWdvbnNjYWxlLmpwZ1wiLGRlc2NyaXB0aW9uOiBcIlRoZSBkcmFnb24gc2NhbGUgYmV0dGEgaXMgYSByYXJlciBhbmQgaGlnaGVyIG1haW50ZW5hbmNlIGZpc2guIEl0IGlzIG5hbWVkIGJ5IGl0cyB0aGljayB3aGl0ZSBzY2FsZXMgY292ZXJpbmcgaGlzIHNpZGVzIHRoYXQgbG9va3MgbGlrZSBkcmFnb24gc2NhbGUgYXJtb3IuXCJ9IGFzIElQcm9kdWN0LFxyXG4gICAgICAgICAge2lkOiBcIm5leHRqc19jcm93bnRhaWxcIiwgbmFtZTogXCJDcm93bnRhaWwgQmV0dGFcIiwgcHJpY2U6IDcuNTAsIGltYWdlOiBcIi4uL3N0YXRpYy9jcm93bnRhaWwuanBnXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBjcm93bnRhaWwgaXMgcHJldHR5IGNvbW1vbiwgYnV0IGludGVyZXN0aW5nIG5vbmUgdGhlIGxlc3MuIEl0J3MgcmVjb2duaXplZCBieSB0aGUgc2hhcGUgb2YgaXRzIHRhaWwgdGhhdCBoYXMgYW4gYXBwZWFyYW5jZSBvZiBhIGNvbWIuXCJ9IGFzIElQcm9kdWN0LFxyXG4gICAgICAgICAge2lkOiBcIm5leHRqc192ZWlsdGFpbFwiLCBuYW1lOiBcIlZlaWx0YWlsIEJldHRhXCIsIHByaWNlOiA1LjAwLCBpbWFnZTogXCIuLi9zdGF0aWMvdmVpbHRhaWwuanBnXCIsIGRlc2NyaXB0aW9uOiBcIkJ5IGZhciB0aGUgbW9zdCBjb21tb24gYmV0dGEgZmlzaC4gWW91IGNhbiByZWNvZ25pemUgaXQgYnkgaXRzIGxvbmcgdGFpbCBhaW1pbmcgZG93bndhcmRzLlwifSBhcyBJUHJvZHVjdFxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGRwIl0sInNvdXJjZVJvb3QiOiIifQ==