/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = (() => {\n  const menuIcon = document.querySelector('.menu-toggle');\n  const menuIconEl = document.querySelectorAll('.menu-icon');\n  const aElements = document.querySelectorAll('a');\n  const liElements = document.querySelectorAll('li');\n  const navi = document.querySelector('#navi');\n  const contactContent = document.querySelector('#contact-content');\n  const aboutContent = document.querySelector('#about-content');\n  const dropdown = document.querySelectorAll('.dropdown'); // the dropdown\n\n  const clearActive = () => { // clear existing dropdowns by removing class && other stuff\n    dropdown.forEach((dd) => {\n      const dropdownEl = dd;\n      dropdownEl.style.display = 'none';\n    });\n    aboutContent.classList.remove('active');\n    contactContent.classList.remove('active');\n    contactContent.parentElement.childNodes[0].innerText = 'Contact ᐁ';\n    aboutContent.parentElement.childNodes[0].innerText = 'About ᐁ';\n    liElements.forEach((li) => {\n      li.classList.remove('default-li');\n    });\n  };\n\n  menuIcon.addEventListener('click', () => { // hamburger icon\n    navi.classList.toggle('nav-active');\n    menuIconEl.forEach((div) => {\n      if (div.classList.contains('icon-active')) {\n        div.classList.remove('icon-active');\n      } else div.classList.add('icon-active');\n    });\n  });\n\n  aElements.forEach((a) => { // show each clicked aElement\n    a.addEventListener('click', (e) => {\n      e.target.parentElement.parentElement.childNodes[1].classList.remove('default-li');\n      if (e.target.id === 'contact') {\n        if (contactContent.style.display === 'none') {\n          clearActive();\n          e.target.innerText = 'Contact ᐃ';\n          e.target.parentElement.classList.add('default-li');\n          contactContent.style.display = 'block';\n          contactContent.classList.toggle('active');\n        } else {\n          clearActive();\n        }\n      } else if (e.target.id === 'about') {\n        if (aboutContent.style.display === 'none') {\n          clearActive();\n          e.target.innerText = 'About ᐃ';\n          e.target.parentElement.classList.add('default-li');\n          aboutContent.style.display = 'block';\n          aboutContent.classList.toggle('active');\n        } else {\n          clearActive();\n        }\n      } else {\n        clearActive();\n        e.target.parentElement.classList.add('default-li');\n      }\n    });\n  });\n  clearActive();\n  liElements[0].classList.add('default-li');\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n\n//# sourceURL=webpack://ddmenu/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n//# sourceURL=webpack://ddmenu/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;