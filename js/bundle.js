/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/cyx-timer.min.js":
/*!*****************************!*\
  !*** ./js/cyx-timer.min.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer({parentSelector:a,endDate:b,daySelector:c,hourSelector:d,minuteSelector:e,secondSelector:f}){!function(b,l){let a=document.querySelector(b),g=a.querySelector(c),h=a.querySelector(d),i=a.querySelector(e),j=a.querySelector(f),m=setInterval(k,1e3);if(!a||!g||!h||!i||!j){a.innerHTML=`Error adding timer:<br/>null reference selector(s). Search for solutions:<br/>https://github.com/CyxarikHWG/js-timer-module`,a.classList.add("error");return}function k(){let a=function(b){let a=Date.parse(b)-Date.parse(new Date);return a<=0?{total:0,days:0,hours:0,minutes:0,seconds:0}:{total:a,days:Math.floor(a/864e5),hours:Math.floor(a/36e5%24),minutes:Math.floor(a/6e4%60),seconds:Math.floor(a/1e3%60)}}(l);g.innerHTML=n(a.days),h.innerHTML=n(a.hours),i.innerHTML=n(a.minutes),j.innerHTML=n(a.seconds),a.total<=0&&clearInterval(m)}function n(a){return a>=0&&a<10?`0${a}`:a}k()}(a,b)}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cyx_timer_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cyx-timer.min */ "./js/cyx-timer.min.js");




window.addEventListener('DOMContentLoaded', () => {

    (0,_cyx_timer_min__WEBPACK_IMPORTED_MODULE_0__["default"])({
        endDate: new Date(2023, 1, 1),  // Put your end date here
        parentSelector: ".timer",
        monthSelector: "#months",
        daySelector: "#days",
        hourSelector: "#hours",
        minuteSelector: "#minutes",
        secondSelector: "#seconds",
    });

    // *YOUR CODE GOES HERE*
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map