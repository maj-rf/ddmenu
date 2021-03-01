/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const dropdown = document.querySelector('#dropdown');\nconst dropdownContent = document.querySelector('.content');\ndropdownContent.style.display = 'none';\n\ndropdown.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (dropdownContent.style.display === 'none') {\n    dropdownContent.style.display = 'block';\n    dropdownContent.style.position = 'absolute';\n    dropdownContent.style.overflow = 'auto';\n    dropdownContent.style.zIndex = '1';\n    dropdownContent.style.marginLeft = '52%';\n  } else dropdownContent.style.display = 'none';\n});\n\n\n//# sourceURL=webpack://ddmenu/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;