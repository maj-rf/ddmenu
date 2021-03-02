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

eval("const aElements = document.querySelectorAll('a');\nconst homeContent = document.querySelector('#home-content');\nconst aboutContent = document.querySelector('#about-content');\nconst clearActive = () => {\n  homeContent.style.display = 'none';\n  aboutContent.style.display = 'none';\n  aboutContent.classList.remove('active');\n  homeContent.classList.remove('active');\n  homeContent.parentElement.childNodes[1].innerText = 'Home v';\n  aboutContent.parentElement.childNodes[1].innerText = 'About v';\n};\nclearActive();\naElements.forEach((a) => {\n  a.addEventListener('click', (e) => {\n    if (e.target.id === 'home') {\n      if (homeContent.style.display === 'none') {\n        clearActive();\n        e.target.innerText = 'Home ^';\n        homeContent.style.display = 'block';\n        homeContent.classList.toggle('active');\n      } else {\n        clearActive();\n      }\n    } else if (e.target.id === 'about') {\n      if (aboutContent.style.display === 'none') {\n        clearActive();\n        e.target.innerText = 'About ^';\n        aboutContent.style.display = 'block';\n        aboutContent.classList.toggle('active');\n      } else {\n        clearActive();\n      }\n    }\n  });\n});\n\n\n//# sourceURL=webpack://ddmenu/./src/index.js?");

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