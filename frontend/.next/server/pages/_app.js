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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _supabaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../supabaseClient */ \"./supabaseClient.js\");\n// File: frontend/components/Navbar.js\n\n\n\n\n\nfunction Navbar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLogout = async ()=>{\n        await _supabaseClient__WEBPACK_IMPORTED_MODULE_4__.supabase.auth.signOut();\n        localStorage.clear();\n        router.replace(\"/login\");\n        window.location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-gradient-to-r from-gray-900 to-black p-4 shadow-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center space-x-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            className: \"flex items-center space-x-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/img/RO-Website-Logo-2388917.webp\",\n                                alt: \"Logo\",\n                                width: 40,\n                                height: 40,\n                                className: \"cursor-pointer transition-transform hover:scale-105\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex space-x-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/upload\",\n                                    className: \"text-white hover:text-blue-400 transition-colors duration-200 font-medium\",\n                                    children: \"Upload\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/viewer-list\",\n                                    className: \"text-white hover:text-blue-400 transition-colors duration-200 font-medium\",\n                                    children: \"Viewer\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    className: \"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg\",\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\components\\\\Navbar.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDOztBQUVUO0FBQ0U7QUFDUztBQUNLO0FBRTlCLFNBQVNJO0lBQ3RCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixNQUFNSSxlQUFlO1FBQ25CLE1BQU1ILHFEQUFRQSxDQUFDSSxJQUFJLENBQUNDLE9BQU87UUFDM0JDLGFBQWFDLEtBQUs7UUFDbEJMLE9BQU9NLE9BQU8sQ0FBQztRQUNmQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07SUFDeEI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ2hCLGtEQUFJQTs0QkFBQ2tCLE1BQUs7NEJBQUlGLFdBQVU7c0NBQ3ZCLDRFQUFDZixtREFBS0E7Z0NBQ0prQixLQUFJO2dDQUNKQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSTixXQUFVOzs7Ozs7Ozs7OztzQ0FHZCw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDaEIsa0RBQUlBO29DQUNIa0IsTUFBSztvQ0FDTEYsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDaEIsa0RBQUlBO29DQUNIa0IsTUFBSztvQ0FDTEYsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtMLDhEQUFDTztvQkFDQ0MsU0FBU2xCO29CQUNUVSxXQUFVOzhCQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL05hdmJhci5qcz9mYmNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZpbGU6IGZyb250ZW5kL2NvbXBvbmVudHMvTmF2YmFyLmpzXHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vc3VwYWJhc2VDbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduT3V0KCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTkwMCB0by1ibGFjayBwLTQgc2hhZG93LWxnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LThcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWcvUk8tV2Vic2l0ZS1Mb2dvLTIzODg5MTcud2VicFwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTZcIj5cclxuICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi91cGxvYWRcIiBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYmx1ZS00MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvdmlld2VyLWxpc3RcIiBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYmx1ZS00MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFZpZXdlclxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNzAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBmb250LW1lZGl1bSBzaGFkb3ctbWQgaG92ZXI6c2hhZG93LWxnXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBMb2dvdXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJzdXBhYmFzZSIsIk5hdmJhciIsInJvdXRlciIsImhhbmRsZUxvZ291dCIsImF1dGgiLCJzaWduT3V0IiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJyZXBsYWNlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../supabaseClient */ \"./supabaseClient.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/index.css */ \"./src/index.css\");\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_index_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isStandalone = router.pathname === \"/viewer-standalone\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.getSession().then(({ data: { session } })=>{\n            if (!session && router.pathname !== \"/login\") {\n                router.push(\"/login\");\n            }\n            setLoading(false);\n        });\n        const { data: authListener } = _supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.onAuthStateChange((_event, session)=>{\n            if (!session && router.pathname !== \"/login\") {\n                router.push(\"/login\");\n            }\n        });\n        return ()=>authListener?.subscription.unsubscribe();\n    }, [\n        router\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 29,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            isStandalone ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"max-w-6xl mx-auto p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Tom Jennings\\\\lidar-viewer-poc\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ0s7QUFDSDtBQUNoQjtBQUUxQixTQUFTSyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNUyxTQUFTUixzREFBU0E7SUFDeEIsTUFBTVMsZUFBZUQsT0FBT0UsUUFBUSxLQUFLO0lBRXpDWixnREFBU0EsQ0FBQztRQUNSRyxxREFBUUEsQ0FBQ1UsSUFBSSxDQUFDQyxVQUFVLEdBQUdDLElBQUksQ0FBQyxDQUFDLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDQSxXQUFXUCxPQUFPRSxRQUFRLEtBQUssVUFBVTtnQkFDNUNGLE9BQU9RLElBQUksQ0FBQztZQUNkO1lBQ0FULFdBQVc7UUFDYjtRQUVBLE1BQU0sRUFBRU8sTUFBTUcsWUFBWSxFQUFFLEdBQUdoQixxREFBUUEsQ0FBQ1UsSUFBSSxDQUFDTyxpQkFBaUIsQ0FBQyxDQUFDQyxRQUFRSjtZQUN0RSxJQUFJLENBQUNBLFdBQVdQLE9BQU9FLFFBQVEsS0FBSyxVQUFVO2dCQUM1Q0YsT0FBT1EsSUFBSSxDQUFDO1lBQ2Q7UUFDRjtRQUVBLE9BQU8sSUFBTUMsY0FBY0csYUFBYUM7SUFDMUMsR0FBRztRQUFDYjtLQUFPO0lBRVgsSUFBSUYsU0FBUyxxQkFBTyw4REFBQ2dCO1FBQUlDLFdBQVU7a0JBQU07Ozs7OztJQUV6QyxxQkFDRSw4REFBQ0Q7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNyQiwwREFBTUE7Ozs7O1lBQ05PLDZCQUNDLDhEQUFDYTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ25CO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7cUNBRzFCLDhEQUFDbUI7Z0JBQUtELFdBQVU7MEJBQ2QsNEVBQUNuQjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vc3VwYWJhc2VDbGllbnRcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2luZGV4LmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaXNTdGFuZGFsb25lID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi92aWV3ZXItc3RhbmRhbG9uZVwiO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3VwYWJhc2UuYXV0aC5nZXRTZXNzaW9uKCkudGhlbigoeyBkYXRhOiB7IHNlc3Npb24gfSB9KSA9PiB7XHJcbiAgICAgIGlmICghc2Vzc2lvbiAmJiByb3V0ZXIucGF0aG5hbWUgIT09IFwiL2xvZ2luXCIpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogYXV0aExpc3RlbmVyIH0gPSBzdXBhYmFzZS5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlKChfZXZlbnQsIHNlc3Npb24pID0+IHtcclxuICAgICAgaWYgKCFzZXNzaW9uICYmIHJvdXRlci5wYXRobmFtZSAhPT0gXCIvbG9naW5cIikge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gYXV0aExpc3RlbmVyPy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9LCBbcm91dGVyXSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIHtpc1N0YW5kYWxvbmUgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcmVsYXRpdmVcIj5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBwLTRcIj5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwic3VwYWJhc2UiLCJOYXZiYXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiaXNTdGFuZGFsb25lIiwicGF0aG5hbWUiLCJhdXRoIiwiZ2V0U2Vzc2lvbiIsInRoZW4iLCJkYXRhIiwic2Vzc2lvbiIsInB1c2giLCJhdXRoTGlzdGVuZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZSIsIl9ldmVudCIsInN1YnNjcmlwdGlvbiIsInVuc3Vic2NyaWJlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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