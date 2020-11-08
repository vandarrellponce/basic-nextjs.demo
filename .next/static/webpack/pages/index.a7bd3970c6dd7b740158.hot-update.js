webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/Prices.js":
/*!************************************!*\
  !*** ./pages/components/Prices.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\DARRELL PERSONAL\\React Projects\\basic-nextjs\\pages\\components\\Prices.js",
    _this = undefined,
    _s = $RefreshSig$();



var Prices = function Prices(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('USD'),
      currency = _useState[0],
      setCurrency = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "list-group",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "list-group-item",
        children: ["Bitcoin rate for ", props.bpi.USD.description, ":", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "badge badge-primary",
          children: props.bpi.USD.code
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 6
        }, _this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stron", {
          children: props.bpi.USD.rate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "list-group-item",
        children: ["Bitcoin rate for ", props.bpi.GBP.description, ":", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "badge badge-success",
          children: props.bpi.GBP.code
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, _this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stron", {
          children: props.bpi.GBP.rate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", props.bpi.EUR.description, ":", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "badge badge-info",
            children: props.bpi.EUR.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 7
          }, _this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stron", {
            children: props.bpi.EUR.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, _this);
};

_s(Prices, "IMt9glJKuY0gCtznVFnjeGsjS3E=");

_c = Prices;
/* harmony default export */ __webpack_exports__["default"] = (Prices);

var _c;

$RefreshReg$(_c, "Prices");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJicGkiLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiR0JQIiwiRVVSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxLQUFELENBRGY7QUFBQSxNQUNsQkMsUUFEa0I7QUFBQSxNQUNSQyxXQURROztBQUV6QixzQkFDQztBQUFBLDJCQUNDO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQSw4QkFDQztBQUFJLGlCQUFTLEVBQUMsaUJBQWQ7QUFBQSx3Q0FDbUJILEtBQUssQ0FBQ0ksR0FBTixDQUFVQyxHQUFWLENBQWNDLFdBRGpDLE9BQytDLEdBRC9DLGVBRUM7QUFBTSxtQkFBUyxFQUFDLHFCQUFoQjtBQUFBLG9CQUNFTixLQUFLLENBQUNJLEdBQU4sQ0FBVUMsR0FBVixDQUFjRTtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZELEVBSVMsR0FKVCxlQUtDO0FBQUEsb0JBQVFQLEtBQUssQ0FBQ0ksR0FBTixDQUFVQyxHQUFWLENBQWNHO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFTQztBQUFJLGlCQUFTLEVBQUMsaUJBQWQ7QUFBQSx3Q0FDbUJSLEtBQUssQ0FBQ0ksR0FBTixDQUFVSyxHQUFWLENBQWNILFdBRGpDLE9BQytDLEdBRC9DLGVBRUM7QUFBTSxtQkFBUyxFQUFDLHFCQUFoQjtBQUFBLG9CQUNFTixLQUFLLENBQUNJLEdBQU4sQ0FBVUssR0FBVixDQUFjRjtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZELEVBSVMsR0FKVCxlQUtDO0FBQUEsb0JBQVFQLEtBQUssQ0FBQ0ksR0FBTixDQUFVSyxHQUFWLENBQWNEO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEQsZUFNQztBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQSwwQ0FDbUJSLEtBQUssQ0FBQ0ksR0FBTixDQUFVTSxHQUFWLENBQWNKLFdBRGpDLE9BQytDLEdBRC9DLGVBRUM7QUFBTSxxQkFBUyxFQUFDLGtCQUFoQjtBQUFBLHNCQUNFTixLQUFLLENBQUNJLEdBQU4sQ0FBVU0sR0FBVixDQUFjSDtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZELEVBSVMsR0FKVCxlQUtDO0FBQUEsc0JBQVFQLEtBQUssQ0FBQ0ksR0FBTixDQUFVTSxHQUFWLENBQWNGO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTRCQSxDQTlCRDs7R0FBTVQsTTs7S0FBQUEsTTtBQWdDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTdiZDM5NzBjNmRkN2I3NDAxNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQcmljZXMgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKCdVU0QnKVxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuXHRcdFx0XHRcdEJpdGNvaW4gcmF0ZSBmb3Ige3Byb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259OnsnICd9XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+XHJcblx0XHRcdFx0XHRcdHtwcm9wcy5icGkuVVNELmNvZGV9XHJcblx0XHRcdFx0XHQ8L3NwYW4+eycgJ31cclxuXHRcdFx0XHRcdDxzdHJvbj57cHJvcHMuYnBpLlVTRC5yYXRlfTwvc3Ryb24+XHJcblx0XHRcdFx0PC9saT5cclxuXHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG5cdFx0XHRcdFx0Qml0Y29pbiByYXRlIGZvciB7cHJvcHMuYnBpLkdCUC5kZXNjcmlwdGlvbn06eycgJ31cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj5cclxuXHRcdFx0XHRcdFx0e3Byb3BzLmJwaS5HQlAuY29kZX1cclxuXHRcdFx0XHRcdDwvc3Bhbj57JyAnfVxyXG5cdFx0XHRcdFx0PHN0cm9uPntwcm9wcy5icGkuR0JQLnJhdGV9PC9zdHJvbj5cclxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0Qml0Y29pbiByYXRlIGZvciB7cHJvcHMuYnBpLkVVUi5kZXNjcmlwdGlvbn06eycgJ31cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdHtwcm9wcy5icGkuRVVSLmNvZGV9XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj57JyAnfVxyXG5cdFx0XHRcdFx0XHQ8c3Ryb24+e3Byb3BzLmJwaS5FVVIucmF0ZX08L3N0cm9uPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==