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
var _s2 = $RefreshSig$();





var _jsxFileName = "C:\\Users\\ynion\\Documents\\SnipcartNext\\pages\\product\\[id]\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var Pdp = function Pdp() {
  _s2();

  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
    children: ["Product: ", id]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8vaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBkcCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicmVxIiwicHJvZHVjdHMiLCJuYW1lIiwicHJpY2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBOztBQUNoQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFmO0FBRGdCLE1BRVJDLEVBRlEsR0FFREYsTUFBTSxDQUZMLEtBRURBLENBRkM7QUFJaEIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUCxLQUFPLENBQVA7QUFKRjs7SUFBTUQsRztVQUNXRSxxRDs7O01BRFhGLEc7O0dBQUFBLEc7VUFDV0UscUQ7OztLQURYRixHOztBQU9OQSxHQUFHLENBQUhBO0FBQUFBLCtMQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0ksZUFBVCxXQUFTQTtBQUFULDZDQUNYO0FBQ0xDLHNCQUFRLEVBQUUsQ0FDTjtBQUFDRixrQkFBRSxFQUFIO0FBQXdCRyxvQkFBSSxFQUE1QjtBQUFnREMscUJBQUssRUFBckQ7QUFBOERDLHFCQUFLLEVBQW5FO0FBQStGQywyQkFBVyxFQUFFO0FBQTVHLGVBRE0sRUFFTjtBQUFDTixrQkFBRSxFQUFIO0FBQTJCRyxvQkFBSSxFQUEvQjtBQUF1REMscUJBQUssRUFBNUQ7QUFBa0VDLHFCQUFLLEVBQXZFO0FBQXFHQywyQkFBVyxFQUFFO0FBQWxILGVBRk0sRUFHTjtBQUFDTixrQkFBRSxFQUFIO0FBQXlCRyxvQkFBSSxFQUE3QjtBQUFrREMscUJBQUssRUFBdkQ7QUFBK0RDLHFCQUFLLEVBQXBFO0FBQWlHQywyQkFBVyxFQUFFO0FBQTlHLGVBSE0sRUFJTjtBQUFDTixrQkFBRSxFQUFIO0FBQXdCRyxvQkFBSSxFQUE1QjtBQUFnREMscUJBQUssRUFBckQ7QUFBNkRDLHFCQUFLLEVBQWxFO0FBQThGQywyQkFBVyxFQUFFO0FBQTNHLGVBSk07QUFETCxhQURXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QlQ7O0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBOztBQVdBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW2lkXS43MTA5MWY4YzhlYjgwODEzYzE3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBQZHAgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgcmV0dXJuIDxwPlByb2R1Y3Q6IHtpZH08L3A+XHJcbn1cclxuXHJcblBkcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvZHVjdHM6IFtcclxuICAgICAgICAgIHtpZDogXCJuZXh0anNfaGFsZm1vb25cIiwgbmFtZTogXCJIYWxmbW9vbiBCZXR0YVwiLCBwcmljZTogMjUuMDAsIGltYWdlOiBcIi4uL3N0YXRpYy9oYWxmbW9vbi5qcGdcIiwgZGVzY3JpcHRpb246IFwiVGhlIEhhbGZtb29uIGJldHRhIGlzIGFyZ3VhYmx5IG9uZSBvZiB0aGUgcHJldHRpZXN0IGJldHRhIHNwZWNpZXMuIEl0IGlzIHJlY29nbml6ZWQgYnkgaXRzIGxhcmdlIHRhaWwgdGhhdCBjYW4gZmxhcmUgdXAgdG8gMTgwIGRlZ3JlZXMuXCJ9IGFzIElQcm9kdWN0LFxyXG4gICAgICAgICAge2lkOiBcIm5leHRqc19kcmFnb25zY2FsZVwiLCBuYW1lOiBcIkRyYWdvbiBTY2FsZSBCZXR0YVwiLCBwcmljZTogMzUsIGltYWdlOiBcIi4uL3N0YXRpYy9kcmFnb25zY2FsZS5qcGdcIixkZXNjcmlwdGlvbjogXCJUaGUgZHJhZ29uIHNjYWxlIGJldHRhIGlzIGEgcmFyZXIgYW5kIGhpZ2hlciBtYWludGVuYW5jZSBmaXNoLiBJdCBpcyBuYW1lZCBieSBpdHMgdGhpY2sgd2hpdGUgc2NhbGVzIGNvdmVyaW5nIGhpcyBzaWRlcyB0aGF0IGxvb2tzIGxpa2UgZHJhZ29uIHNjYWxlIGFybW9yLlwifSBhcyBJUHJvZHVjdCxcclxuICAgICAgICAgIHtpZDogXCJuZXh0anNfY3Jvd250YWlsXCIsIG5hbWU6IFwiQ3Jvd250YWlsIEJldHRhXCIsIHByaWNlOiA3LjUwLCBpbWFnZTogXCIuLi9zdGF0aWMvY3Jvd250YWlsLmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJUaGUgY3Jvd250YWlsIGlzIHByZXR0eSBjb21tb24sIGJ1dCBpbnRlcmVzdGluZyBub25lIHRoZSBsZXNzLiBJdCdzIHJlY29nbml6ZWQgYnkgdGhlIHNoYXBlIG9mIGl0cyB0YWlsIHRoYXQgaGFzIGFuIGFwcGVhcmFuY2Ugb2YgYSBjb21iLlwifSBhcyBJUHJvZHVjdCxcclxuICAgICAgICAgIHtpZDogXCJuZXh0anNfdmVpbHRhaWxcIiwgbmFtZTogXCJWZWlsdGFpbCBCZXR0YVwiLCBwcmljZTogNS4wMCwgaW1hZ2U6IFwiLi4vc3RhdGljL3ZlaWx0YWlsLmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJCeSBmYXIgdGhlIG1vc3QgY29tbW9uIGJldHRhIGZpc2guIFlvdSBjYW4gcmVjb2duaXplIGl0IGJ5IGl0cyBsb25nIHRhaWwgYWltaW5nIGRvd253YXJkcy5cIn0gYXMgSVByb2R1Y3RcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBkcCJdLCJzb3VyY2VSb290IjoiIn0=