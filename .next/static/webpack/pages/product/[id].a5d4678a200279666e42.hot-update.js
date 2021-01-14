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
var _s3 = $RefreshSig$();





var _jsxFileName = "C:\\Users\\ynion\\Documents\\SnipcartNext\\pages\\product\\[id]\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Pdp = function Pdp(props) {
  _s3();

  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id;
  var productList = [];
  props.products.forEach(function (element) {
    if (element.id == id) {
      productList.push({
        element: element
      });
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "app",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
        "data-api-key": "ZWJmNDMwM2ItNWM3YS00ODYxLWE1ZDktZWZkMjAwOTgyOTE4NjM3NDYxNDMxNjYzMDA3OTEx",
        id: "snipcart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
        rel: "stylesheet",
        type: "text/css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "main",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_ProductList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        products: productList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_s3(Pdp, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c2 = Pdp;

_s(Pdp, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Pdp;

Pdp.getInitialProps = /*#__PURE__*/function () {
  var _s2 = $RefreshSig$();

  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(_s2( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var _s4 = $RefreshSig$();

    var req, router, id;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(_s4(function _callee$(_context) {
      _s4();

      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _s2();

            req = _ref.req;
            router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
            id = router.query.id;
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

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, "CeygcqajjFExIxFEzW4x/gfWEGQ=", false, function () {
      return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
    }), _callee);
  }), "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
    return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBkcCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicHJvZHVjdExpc3QiLCJwcm9wcyIsImVsZW1lbnQiLCJyZXEiLCJwcm9kdWN0cyIsIm5hbWUiLCJwcmljZSIsImltYWdlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBUUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sUUFBOEI7QUFBQTs7QUFBQTs7QUFDeEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBZjtBQUR3QyxNQUVoQ0MsRUFGZ0MsR0FFekJGLE1BQU0sQ0FGbUIsS0FFekJBLENBRnlCO0FBR3hDLE1BQU1HLFdBQVcsR0FBakI7QUFFQUMsT0FBSyxDQUFMQSxpQkFBdUIsbUJBQVc7QUFDOUIsUUFBR0MsT0FBTyxDQUFQQSxNQUFILElBQW9CO0FBQ2xCRixpQkFBVyxDQUFYQSxLQUFpQjtBQUFDRSxlQUFPLEVBQVBBO0FBQUQsT0FBakJGO0FBQ0Q7QUFITEM7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBZDtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBUSxXQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsS0FDRSxDQURGLGVBRUU7QUFBUSxXQUFHLEVBQVg7QUFBK0Qsd0JBQS9EO0FBQXVKLFVBQUUsRUFBQztBQUExSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkYsS0FFRSxDQUZGLGVBR0U7QUFBTSxZQUFJLEVBQVY7QUFBdUUsV0FBRyxFQUExRTtBQUF3RixZQUFJLEVBQUM7QUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUhGLEtBR0UsQ0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixLQUNFLENBREYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTkYsS0FNRSxDQU5GLGVBT0U7QUFBTSxlQUFTLEVBQWY7QUFBQSw2QkFDRTtBQUFhLGdCQUFRLEVBQUVEO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUEYsS0FPRSxDQVBGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVZGLEtBVUUsQ0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixLQUNFLENBREY7QUFaRjs7SUFBTUosRztVQUNXRSxxRDs7O01BRFhGLEc7O0dBQUFBLEc7VUFDV0UscUQ7OztLQURYRixHOztBQTRCTkEsR0FBRyxDQUFIQTtBQUFBQTs7QUFBQUEsbU1BQXNCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFTTyxlQUFULFdBQVNBO0FBQ3JCTixrQkFEWSxHQUNIQyw2REFERyxFQUNaRDtBQUNFRSxjQUZVLEdBRUhGLE1BQU0sQ0FGSCxLQUVIQSxDQUZHLEVBRVZFO0FBRlUsNkNBR1g7QUFDTEssc0JBQVEsRUFBRSxDQUNOO0FBQUNMLGtCQUFFLEVBQUg7QUFBd0JNLG9CQUFJLEVBQTVCO0FBQWdEQyxxQkFBSyxFQUFyRDtBQUE4REMscUJBQUssRUFBbkU7QUFBK0ZDLDJCQUFXLEVBQUU7QUFBNUcsZUFETSxFQUVOO0FBQUNULGtCQUFFLEVBQUg7QUFBMkJNLG9CQUFJLEVBQS9CO0FBQXVEQyxxQkFBSyxFQUE1RDtBQUFrRUMscUJBQUssRUFBdkU7QUFBcUdDLDJCQUFXLEVBQUU7QUFBbEgsZUFGTSxFQUdOO0FBQUNULGtCQUFFLEVBQUg7QUFBeUJNLG9CQUFJLEVBQTdCO0FBQWtEQyxxQkFBSyxFQUF2RDtBQUErREMscUJBQUssRUFBcEU7QUFBaUdDLDJCQUFXLEVBQUU7QUFBOUcsZUFITSxFQUlOO0FBQUNULGtCQUFFLEVBQUg7QUFBd0JNLG9CQUFJLEVBQTVCO0FBQWdEQyxxQkFBSyxFQUFyRDtBQUE2REMscUJBQUssRUFBbEU7QUFBOEZDLDJCQUFXLEVBQUU7QUFBM0csZUFKTTtBQURMLGFBSFc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDSFYscURBREc7QUFBQTtBQUF0QkY7QUFBQUE7QUFBQUE7O0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBOztBQWFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW2lkXS5hNWQ0Njc4YTIwMDI3OTY2NmU0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCJcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0XCJcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0XCJcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Gb290ZXJcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuXHJcbmludGVyZmFjZSBJUHJvZHVjdExpc3RQcm9wcyB7XHJcbiAgICBwcm9kdWN0czogSVByb2R1Y3RbXVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IFBkcCA9IChwcm9wczogSVByb2R1Y3RMaXN0UHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHByb2R1Y3RMaXN0ID0gW11cclxuXHJcbiAgcHJvcHMucHJvZHVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYoZWxlbWVudC5pZCA9PSBpZCl7XHJcbiAgICAgICAgcHJvZHVjdExpc3QucHVzaCh7ZWxlbWVudH0pXHJcbiAgICAgIH0gIFxyXG4gIH0pO1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8yLjIuMi9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5zbmlwY2FydC5jb20vc2NyaXB0cy8yLjAvc25pcGNhcnQuanNcIiBkYXRhLWFwaS1rZXk9XCJaV0ptTkRNd00ySXROV00zWVMwME9EWXhMV0UxWkRrdFpXWmtNakF3T1RneU9URTROak0zTkRZeE5ETXhOall6TURBM09URXhcIiBpZD1cInNuaXBjYXJ0XCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuLnNuaXBjYXJ0LmNvbS90aGVtZXMvMi4wL2Jhc2Uvc25pcGNhcnQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgIDxQcm9kdWN0TGlzdCBwcm9kdWN0cz17cHJvZHVjdExpc3R9IC8+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5QZHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb2R1Y3RzOiBbXHJcbiAgICAgICAgICB7aWQ6IFwibmV4dGpzX2hhbGZtb29uXCIsIG5hbWU6IFwiSGFsZm1vb24gQmV0dGFcIiwgcHJpY2U6IDI1LjAwLCBpbWFnZTogXCIuLi9zdGF0aWMvaGFsZm1vb24uanBnXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBIYWxmbW9vbiBiZXR0YSBpcyBhcmd1YWJseSBvbmUgb2YgdGhlIHByZXR0aWVzdCBiZXR0YSBzcGVjaWVzLiBJdCBpcyByZWNvZ25pemVkIGJ5IGl0cyBsYXJnZSB0YWlsIHRoYXQgY2FuIGZsYXJlIHVwIHRvIDE4MCBkZWdyZWVzLlwifSBhcyBJUHJvZHVjdCxcclxuICAgICAgICAgIHtpZDogXCJuZXh0anNfZHJhZ29uc2NhbGVcIiwgbmFtZTogXCJEcmFnb24gU2NhbGUgQmV0dGFcIiwgcHJpY2U6IDM1LCBpbWFnZTogXCIuLi9zdGF0aWMvZHJhZ29uc2NhbGUuanBnXCIsZGVzY3JpcHRpb246IFwiVGhlIGRyYWdvbiBzY2FsZSBiZXR0YSBpcyBhIHJhcmVyIGFuZCBoaWdoZXIgbWFpbnRlbmFuY2UgZmlzaC4gSXQgaXMgbmFtZWQgYnkgaXRzIHRoaWNrIHdoaXRlIHNjYWxlcyBjb3ZlcmluZyBoaXMgc2lkZXMgdGhhdCBsb29rcyBsaWtlIGRyYWdvbiBzY2FsZSBhcm1vci5cIn0gYXMgSVByb2R1Y3QsXHJcbiAgICAgICAgICB7aWQ6IFwibmV4dGpzX2Nyb3dudGFpbFwiLCBuYW1lOiBcIkNyb3dudGFpbCBCZXR0YVwiLCBwcmljZTogNy41MCwgaW1hZ2U6IFwiLi4vc3RhdGljL2Nyb3dudGFpbC5qcGdcIiwgZGVzY3JpcHRpb246IFwiVGhlIGNyb3dudGFpbCBpcyBwcmV0dHkgY29tbW9uLCBidXQgaW50ZXJlc3Rpbmcgbm9uZSB0aGUgbGVzcy4gSXQncyByZWNvZ25pemVkIGJ5IHRoZSBzaGFwZSBvZiBpdHMgdGFpbCB0aGF0IGhhcyBhbiBhcHBlYXJhbmNlIG9mIGEgY29tYi5cIn0gYXMgSVByb2R1Y3QsXHJcbiAgICAgICAgICB7aWQ6IFwibmV4dGpzX3ZlaWx0YWlsXCIsIG5hbWU6IFwiVmVpbHRhaWwgQmV0dGFcIiwgcHJpY2U6IDUuMDAsIGltYWdlOiBcIi4uL3N0YXRpYy92ZWlsdGFpbC5qcGdcIiwgZGVzY3JpcHRpb246IFwiQnkgZmFyIHRoZSBtb3N0IGNvbW1vbiBiZXR0YSBmaXNoLiBZb3UgY2FuIHJlY29nbml6ZSBpdCBieSBpdHMgbG9uZyB0YWlsIGFpbWluZyBkb3dud2FyZHMuXCJ9IGFzIElQcm9kdWN0XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZHAiXSwic291cmNlUm9vdCI6IiJ9