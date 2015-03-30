/**
 * textToNumber.js v0.0.0
 */
var textToNumber =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var textToNumber = __webpack_require__(1);
	
	module.exports = function (string) {
		return textToNumber(string);
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var small = {
			'zero': 0,
			'one': 1,
			'two': 2,
			'three': 3,
			'four': 4,
			'five': 5,
			'six': 6,
			'seven': 7,
			'eight': 8,
			'nine': 9,
			'ten': 10,
			'eleven': 11,
			'twelve': 12,
			'thirteen': 13,
			'fourteen': 14,
			'fifteen': 15,
			'sixteen': 16,
			'seventeen': 17,
			'eighteen': 18,
			'nineteen': 19,
			'twenty': 20,
			'thirty': 30,
			'forty': 40,
			'fifty': 50,
			'sixty': 60,
			'seventy': 70,
			'eighty': 80,
			'ninety': 90
		},
		magnitude = {
			'thousand': 1000,
			'million': 1000000,
			'billion': 1000000000,
			'trillion': 1000000000000,
			'quadrillion': 1000000000000000,
			'quintillion': 1000000000000000000,
			'sextillion': 1000000000000000000000,
			'septillion': 1000000000000000000000000,
			'octillion': 1000000000000000000000000000,
			'nonillion': 1000000000000000000000000000000,
			'decillion': 1000000000000000000000000000000000,
		};
	
	function textToNumber(s) {
		var parts = s.toString().split(/[\s-]+/),
			n = 0,
			g = 0;
	
		parts.forEach(function (w) {
			var x = small[w];
	
			if (w.match(/^\s*[\d\.]+\s*$/)) {
				g = g + parseFloat(w, 10);
			} else if (x != null) {
				g = g + x;
			} else if (w == "hundred") {
				g = g * 100;
			} else {
				x = magnitude[w];
				if (x != null) {
					n = n + g * x
					g = 0;
				} else { 
					// console.log('Unknown number: ' + w); 
				}
			}
		});
		
		return n + g;
	}
	
	module.exports = textToNumber;

/***/ }
/******/ ])
//# sourceMappingURL=textToNumber.js.map