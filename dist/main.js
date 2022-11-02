/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const tomake = document.getElementById('firstidoftodo');\n\nconst Listiftodo = [\n  {\n    index: 1,\n    description: 'Create a todo list',\n    completed: false,\n  },\n  {\n    index: 2,\n    description: 'Create a webpack',\n    completed: false,\n  },\n  {\n    index: 3,\n    description: 'Create a redux with react',\n    completed: false,\n  },\n];\n\nfunction displaytodolist() {\n  let count;\n  for (count = 0; count < Listiftodo.length; count += 1) {\n    tomake.innerHTML += `\n     <div class=\"containertodo\">\n     <div class=\"backtodo\">\n     <input type=\"checkbox\" class=\"check\" name=\"completed\" value=\"${Listiftodo[count].completed}\">\n      <p class=\"description\">${Listiftodo[count].description}</p>\n     </div>\n     <div class=\"makechange\">\n     <p>...</p>\n     </div>\n     </div>\n     `;\n  }\n}\n\ndocument.addEventListener('DOMContentLoaded', displaytodolist, false);\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);