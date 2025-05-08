/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _supabaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../supabaseClient */ \"./supabaseClient.js\");\n// File: frontend/components/Navbar.js\n\n\n\n\n\nfunction Navbar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLogout = async ()=>{\n        await _supabaseClient__WEBPACK_IMPORTED_MODULE_4__.supabase.auth.signOut();\n        localStorage.clear();\n        router.replace(\"/login\");\n        window.location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-black p-4 shadow-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex items-center space-x-6 text-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/img/RO-Website-Logo-2388917.webp\",\n                        alt: \"Logo\",\n                        width: 40,\n                        height: 40,\n                        className: \"cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/upload\",\n                    className: \"hover:text-gray-300\",\n                    children: \"Upload\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/viewer-list\",\n                    className: \"hover:text-gray-300\",\n                    children: \"Viewer\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    className: \"ml-auto bg-white text-black px-3 py-1 rounded hover:bg-gray-200\",\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDOztBQUVUO0FBQ0U7QUFDUztBQUNLO0FBRTlCLFNBQVNJO0lBQ3RCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixNQUFNSSxlQUFlO1FBQ25CLE1BQU1ILHFEQUFRQSxDQUFDSSxJQUFJLENBQUNDLE9BQU87UUFDM0JDLGFBQWFDLEtBQUs7UUFDbEJMLE9BQU9NLE9BQU8sQ0FBQztRQUNmQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07SUFDeEI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNoQixrREFBSUE7b0JBQUNrQixNQUFLOzhCQUNULDRFQUFDakIsbURBQUtBO3dCQUNKa0IsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUk4sV0FBVTs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNoQixrREFBSUE7b0JBQUNrQixNQUFLO29CQUFVRixXQUFVOzhCQUFzQjs7Ozs7OzhCQUNyRCw4REFBQ2hCLGtEQUFJQTtvQkFBQ2tCLE1BQUs7b0JBQWVGLFdBQVU7OEJBQXNCOzs7Ozs7OEJBQzFELDhEQUFDTztvQkFDQ0MsU0FBU2xCO29CQUNUVSxXQUFVOzhCQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL05hdmJhci5qcz9mYmNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZpbGU6IGZyb250ZW5kL2NvbXBvbmVudHMvTmF2YmFyLmpzXHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vc3VwYWJhc2VDbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduT3V0KCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWJsYWNrIHAtNCBzaGFkb3ctbWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTYgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltZy9STy1XZWJzaXRlLUxvZ28tMjM4ODkxNy53ZWJwXCJcclxuICAgICAgICAgICAgYWx0PVwiTG9nb1wiXHJcbiAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi91cGxvYWRcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMzAwXCI+VXBsb2FkPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdmlld2VyLWxpc3RcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMzAwXCI+Vmlld2VyPC9MaW5rPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLWF1dG8gYmctd2hpdGUgdGV4dC1ibGFjayBweC0zIHB5LTEgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTIwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwidXNlUm91dGVyIiwic3VwYWJhc2UiLCJOYXZiYXIiLCJyb3V0ZXIiLCJoYW5kbGVMb2dvdXQiLCJhdXRoIiwic2lnbk91dCIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwicmVwbGFjZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../supabaseClient */ \"./supabaseClient.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/index.css */ \"./src/index.css\");\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_index_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isStandalone = router.pathname === \"/viewer-standalone\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.getSession().then(({ data: { session } })=>{\n            if (!session && router.pathname !== \"/login\") {\n                router.push(\"/login\");\n            }\n            setLoading(false);\n        });\n        const { data: authListener } = _supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.onAuthStateChange((_event, session)=>{\n            if (!session && router.pathname !== \"/login\") {\n                router.push(\"/login\");\n            }\n        });\n        return ()=>authListener?.subscription.unsubscribe();\n    }, [\n        router\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 29,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            isStandalone ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen h-screen overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"max-w-6xl mx-auto p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ0s7QUFDSDtBQUNoQjtBQUUxQixTQUFTSyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNUyxTQUFTUixzREFBU0E7SUFDeEIsTUFBTVMsZUFBZUQsT0FBT0UsUUFBUSxLQUFLO0lBRXpDWixnREFBU0EsQ0FBQztRQUNSRyxxREFBUUEsQ0FBQ1UsSUFBSSxDQUFDQyxVQUFVLEdBQUdDLElBQUksQ0FBQyxDQUFDLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDQSxXQUFXUCxPQUFPRSxRQUFRLEtBQUssVUFBVTtnQkFDNUNGLE9BQU9RLElBQUksQ0FBQztZQUNkO1lBQ0FULFdBQVc7UUFDYjtRQUVBLE1BQU0sRUFBRU8sTUFBTUcsWUFBWSxFQUFFLEdBQUdoQixxREFBUUEsQ0FBQ1UsSUFBSSxDQUFDTyxpQkFBaUIsQ0FBQyxDQUFDQyxRQUFRSjtZQUN0RSxJQUFJLENBQUNBLFdBQVdQLE9BQU9FLFFBQVEsS0FBSyxVQUFVO2dCQUM1Q0YsT0FBT1EsSUFBSSxDQUFDO1lBQ2Q7UUFDRjtRQUVBLE9BQU8sSUFBTUMsY0FBY0csYUFBYUM7SUFDMUMsR0FBRztRQUFDYjtLQUFPO0lBRVgsSUFBSUYsU0FBUyxxQkFBTyw4REFBQ2dCO1FBQUlDLFdBQVU7a0JBQU07Ozs7OztJQUV6QyxxQkFDRTs7MEJBQ0UsOERBQUNyQiwwREFBTUE7Ozs7O1lBQ05PLDZCQUNDLDhEQUFDYTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ25CO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7cUNBRzFCLDhEQUFDbUI7Z0JBQUtELFdBQVU7MEJBQ2QsNEVBQUNuQjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBS2xDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi9zdXBhYmFzZUNsaWVudFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgXCIuLi9zcmMvaW5kZXguY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpc1N0YW5kYWxvbmUgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3ZpZXdlci1zdGFuZGFsb25lXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzdXBhYmFzZS5hdXRoLmdldFNlc3Npb24oKS50aGVuKCh7IGRhdGE6IHsgc2Vzc2lvbiB9IH0pID0+IHtcclxuICAgICAgaWYgKCFzZXNzaW9uICYmIHJvdXRlci5wYXRobmFtZSAhPT0gXCIvbG9naW5cIikge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBhdXRoTGlzdGVuZXIgfSA9IHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoKF9ldmVudCwgc2Vzc2lvbikgPT4ge1xyXG4gICAgICBpZiAoIXNlc3Npb24gJiYgcm91dGVyLnBhdGhuYW1lICE9PSBcIi9sb2dpblwiKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBhdXRoTGlzdGVuZXI/LnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPkxvYWRpbmcuLi48L2Rpdj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIHtpc1N0YW5kYWxvbmUgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBwLTRcIj5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwic3VwYWJhc2UiLCJOYXZiYXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiaXNTdGFuZGFsb25lIiwicGF0aG5hbWUiLCJhdXRoIiwiZ2V0U2Vzc2lvbiIsInRoZW4iLCJkYXRhIiwic2Vzc2lvbiIsInB1c2giLCJhdXRoTGlzdGVuZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZSIsIl9ldmVudCIsInN1YnNjcmlwdGlvbiIsInVuc3Vic2NyaWJlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./supabaseClient.js":
/*!***************************!*\
  !*** ./supabaseClient.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n// frontend/src/supabaseClient.js\n\nconst supabaseUrl = \"https://dubhytakeciofanmotsi.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1Ymh5dGFrZWNpb2Zhbm1vdHNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MDEzNTAsImV4cCI6MjA2MTE3NzM1MH0.sIMXQBseZt3GGkjrEhFwTZodU0vYlSzRB7Jskti44Gw\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdXBhYmFzZUNsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpQ0FBaUM7QUFFb0I7QUFFckQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGtCQUFrQkgsa05BQXlDO0FBRTFELE1BQU1LLFdBQVdQLG1FQUFZQSxDQUFDQyxhQUFhSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3N1cGFiYXNlQ2xpZW50LmpzPzI3MDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJvbnRlbmQvc3JjL3N1cGFiYXNlQ2xpZW50LmpzXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTDtcclxuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVk7XHJcblxyXG5leHBvcnQgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSk7Il0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./supabaseClient.js\n");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();