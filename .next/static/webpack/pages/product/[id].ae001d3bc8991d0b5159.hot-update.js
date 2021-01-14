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
  var id = router.asPath.split('/')[2];
  var position = 0;
  var i = 0;
  props.products.forEach(function (element) {
    if (element.id === id) {
      position = i;
    }

    i++;
  });
  var product = props.products[position];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "app",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
        "data-api-key": "ZWJmNDMwM2ItNWM3YS00ODYxLWE1ZDktZWZkMjAwOTgyOTE4NjM3NDYxNDMxNjYzMDA3OTEx",
        id: "snipcart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
        rel: "stylesheet",
        type: "text/css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: position
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "product-list",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Product__WEBPACK_IMPORTED_MODULE_5__["default"], {
          product: product
        }, position, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBkcCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicG9zaXRpb24iLCJpIiwicHJvcHMiLCJlbGVtZW50IiwicHJvZHVjdCIsInJlcSIsInByb2R1Y3RzIiwibmFtZSIsInByaWNlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxRQUE4QjtBQUFBOztBQUFBOztBQUN4QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFmO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRixNQUFNLENBQU5BLGtCQUFYLENBQVdBLENBQVg7QUFDQSxNQUFJRyxRQUFRLEdBQVo7QUFDQSxNQUFJQyxDQUFDLEdBQUw7QUFFQUMsT0FBSyxDQUFMQSxpQkFBdUIsbUJBQVc7QUFFNUIsUUFBR0MsT0FBTyxDQUFQQSxPQUFILElBQXFCO0FBQ2pCSCxjQUFRLEdBQVJBO0FBQ0g7O0FBQ0RDLEtBQUM7QUFMUEM7QUFRQSxNQUFJRSxPQUFPLEdBQUdGLEtBQUssQ0FBTEEsU0FBZCxRQUFjQSxDQUFkO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQWQ7QUFBQSw0QkFDRTtBQUFBLDhCQUNFO0FBQVEsV0FBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLEtBQ0UsQ0FERixlQUVFO0FBQVEsV0FBRyxFQUFYO0FBQStELHdCQUEvRDtBQUF1SixVQUFFLEVBQUM7QUFBMUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGLEtBRUUsQ0FGRixlQUdFO0FBQU0sWUFBSSxFQUFWO0FBQXVFLFdBQUcsRUFBMUU7QUFBd0YsWUFBSSxFQUFDO0FBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FIRixLQUdFLENBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREYsS0FDRSxDQURGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU5GLEtBTUUsQ0FORixlQU9FO0FBQU0sZUFBUyxFQUFmO0FBQUEsOEJBQ0E7QUFBQSxrQkFBSUg7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREEsS0FDQSxDQURBLGVBRUE7QUFBQSxrQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkEsS0FFQSxDQUZBLGVBR0U7QUFBSyxpQkFBUyxFQUFkO0FBQUEsK0JBQ1E7QUFBUyxpQkFBTyxFQUFFSTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUhGLEtBR0UsQ0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FQRixLQU9FLENBUEYsZUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BZEYsS0FjRSxDQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLEtBQ0UsQ0FERjtBQWpCRjs7SUFBTVIsRztVQUNXRSxxRDs7O01BRFhGLEc7O0dBQUFBLEc7VUFDV0UscUQ7OztLQURYRixHOztBQXFDTkEsR0FBRyxDQUFIQTtBQUFBQSwrTEFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNTLGVBQVQsV0FBU0E7QUFBVCw2Q0FDWDtBQUNMQyxzQkFBUSxFQUFFLENBQ047QUFBQ1Asa0JBQUUsRUFBSDtBQUF3QlEsb0JBQUksRUFBNUI7QUFBZ0RDLHFCQUFLLEVBQXJEO0FBQThEQyxxQkFBSyxFQUFuRTtBQUErRkMsMkJBQVcsRUFBRTtBQUE1RyxlQURNLEVBRU47QUFBQ1gsa0JBQUUsRUFBSDtBQUEyQlEsb0JBQUksRUFBL0I7QUFBdURDLHFCQUFLLEVBQTVEO0FBQWtFQyxxQkFBSyxFQUF2RTtBQUFxR0MsMkJBQVcsRUFBRTtBQUFsSCxlQUZNLEVBR047QUFBQ1gsa0JBQUUsRUFBSDtBQUF5QlEsb0JBQUksRUFBN0I7QUFBa0RDLHFCQUFLLEVBQXZEO0FBQStEQyxxQkFBSyxFQUFwRTtBQUFpR0MsMkJBQVcsRUFBRTtBQUE5RyxlQUhNLEVBSU47QUFBQ1gsa0JBQUUsRUFBSDtBQUF3QlEsb0JBQUksRUFBNUI7QUFBZ0RDLHFCQUFLLEVBQXJEO0FBQTZEQyxxQkFBSyxFQUFsRTtBQUE4RkMsMkJBQVcsRUFBRTtBQUEzRyxlQUpNO0FBREwsYUFEVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEJkOztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTs7QUFXQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0L1tpZF0uYWUwMDFkM2JjODk5MWQwYjUxNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlclwiXHJcbmltcG9ydCBQcm9kdWN0LCB7IElQcm9kdWN0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdFwiXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcblxyXG5pbnRlcmZhY2UgSVByb2R1Y3RMaXN0UHJvcHMge1xyXG4gICAgcHJvZHVjdHM6IElQcm9kdWN0W11cclxufVxyXG5cclxuY29uc3QgUGRwID0gKHByb3BzOiBJUHJvZHVjdExpc3RQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaWQgPSByb3V0ZXIuYXNQYXRoLnNwbGl0KCcvJylbMl1cclxuICB2YXIgcG9zaXRpb24gPSAwO1xyXG4gIHZhciBpID0gMDtcclxuXHJcbiAgcHJvcHMucHJvZHVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHJcbiAgICAgICAgaWYoZWxlbWVudC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkrKztcclxuICB9KTtcclxuXHJcbiAgdmFyIHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0c1twb3NpdGlvbl1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzIuMi4yL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLnNuaXBjYXJ0LmNvbS9zY3JpcHRzLzIuMC9zbmlwY2FydC5qc1wiIGRhdGEtYXBpLWtleT1cIlpXSm1ORE13TTJJdE5XTTNZUzAwT0RZeExXRTFaRGt0Wldaa01qQXdPVGd5T1RFNE5qTTNORFl4TkRNeE5qWXpNREEzT1RFeFwiIGlkPVwic25pcGNhcnRcIj48L3NjcmlwdD5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uc25pcGNhcnQuY29tL3RoZW1lcy8yLjAvYmFzZS9zbmlwY2FydC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgIDxwPntpZH08L3A+XHJcbiAgICAgIDxwPntwb3NpdGlvbn08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RcIj4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdCBwcm9kdWN0PXtwcm9kdWN0fSBrZXk9e3Bvc2l0aW9ufS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5QZHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb2R1Y3RzOiBbXHJcbiAgICAgICAgICB7aWQ6IFwibmV4dGpzX2hhbGZtb29uXCIsIG5hbWU6IFwiSGFsZm1vb24gQmV0dGFcIiwgcHJpY2U6IDI1LjAwLCBpbWFnZTogXCIuLi9zdGF0aWMvaGFsZm1vb24uanBnXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBIYWxmbW9vbiBiZXR0YSBpcyBhcmd1YWJseSBvbmUgb2YgdGhlIHByZXR0aWVzdCBiZXR0YSBzcGVjaWVzLiBJdCBpcyByZWNvZ25pemVkIGJ5IGl0cyBsYXJnZSB0YWlsIHRoYXQgY2FuIGZsYXJlIHVwIHRvIDE4MCBkZWdyZWVzLlwifSBhcyBJUHJvZHVjdCxcclxuICAgICAgICAgIHtpZDogXCJuZXh0anNfZHJhZ29uc2NhbGVcIiwgbmFtZTogXCJEcmFnb24gU2NhbGUgQmV0dGFcIiwgcHJpY2U6IDM1LCBpbWFnZTogXCIuLi9zdGF0aWMvZHJhZ29uc2NhbGUuanBnXCIsZGVzY3JpcHRpb246IFwiVGhlIGRyYWdvbiBzY2FsZSBiZXR0YSBpcyBhIHJhcmVyIGFuZCBoaWdoZXIgbWFpbnRlbmFuY2UgZmlzaC4gSXQgaXMgbmFtZWQgYnkgaXRzIHRoaWNrIHdoaXRlIHNjYWxlcyBjb3ZlcmluZyBoaXMgc2lkZXMgdGhhdCBsb29rcyBsaWtlIGRyYWdvbiBzY2FsZSBhcm1vci5cIn0gYXMgSVByb2R1Y3QsXHJcbiAgICAgICAgICB7aWQ6IFwibmV4dGpzX2Nyb3dudGFpbFwiLCBuYW1lOiBcIkNyb3dudGFpbCBCZXR0YVwiLCBwcmljZTogNy41MCwgaW1hZ2U6IFwiLi4vc3RhdGljL2Nyb3dudGFpbC5qcGdcIiwgZGVzY3JpcHRpb246IFwiVGhlIGNyb3dudGFpbCBpcyBwcmV0dHkgY29tbW9uLCBidXQgaW50ZXJlc3Rpbmcgbm9uZSB0aGUgbGVzcy4gSXQncyByZWNvZ25pemVkIGJ5IHRoZSBzaGFwZSBvZiBpdHMgdGFpbCB0aGF0IGhhcyBhbiBhcHBlYXJhbmNlIG9mIGEgY29tYi5cIn0gYXMgSVByb2R1Y3QsXHJcbiAgICAgICAgICB7aWQ6IFwibmV4dGpzX3ZlaWx0YWlsXCIsIG5hbWU6IFwiVmVpbHRhaWwgQmV0dGFcIiwgcHJpY2U6IDUuMDAsIGltYWdlOiBcIi4uL3N0YXRpYy92ZWlsdGFpbC5qcGdcIiwgZGVzY3JpcHRpb246IFwiQnkgZmFyIHRoZSBtb3N0IGNvbW1vbiBiZXR0YSBmaXNoLiBZb3UgY2FuIHJlY29nbml6ZSBpdCBieSBpdHMgbG9uZyB0YWlsIGFpbWluZyBkb3dud2FyZHMuXCJ9IGFzIElQcm9kdWN0XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZHAiXSwic291cmNlUm9vdCI6IiJ9