(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/preload.ts":
/*!*****************************!*\
  !*** ./src/main/preload.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var electron_1 = __webpack_require__(/*! electron */ "electron");
var hosts_development_json_1 = __importDefault(__webpack_require__(/*! ../../config/hosts.development.json */ "./config/hosts.development.json"));
var hosts_production_json_1 = __importDefault(__webpack_require__(/*! ../../config/hosts.production.json */ "./config/hosts.production.json"));
var DEBUG = !!( true || 0);
var kapetaHandler = {
    environment: DEBUG ? 'development' : 'production',
    hosts: DEBUG ? hosts_development_json_1.default : hosts_production_json_1.default,
};
var electronHandler = {
    ipcRenderer: {
        sendMessage: function (channel, args) {
            electron_1.ipcRenderer.send(channel, args);
        },
        on: function (channel, func) {
            var subscription = function (_event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return func.apply(void 0, args);
            };
            electron_1.ipcRenderer.on(channel, subscription);
            return function () {
                electron_1.ipcRenderer.removeListener(channel, subscription);
            };
        },
        once: function (channel, func) {
            electron_1.ipcRenderer.once(channel, function (_event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return func.apply(void 0, args);
            });
        },
        invoke: function (channel) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return electron_1.ipcRenderer.invoke.apply(electron_1.ipcRenderer, __spreadArray([channel], args, false));
        },
    },
};
electron_1.contextBridge.exposeInMainWorld('kapeta', kapetaHandler);
electron_1.contextBridge.exposeInMainWorld('electron', electronHandler);


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "./config/hosts.development.json":
/*!***************************************!*\
  !*** ./config/hosts.development.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"test":"http://127.0.0.1:35100/proxy/kapeta%3A%2F%2Fkapeta%2Fsample-desktop%3Alocal/11b72a67-b645-4825-947d-c428d8a14a06/test/rest/"}');

/***/ }),

/***/ "./config/hosts.production.json":
/*!**************************************!*\
  !*** ./config/hosts.production.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"test":"http://replace-me-with-url.com/"}');

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/preload.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsaUVBQXdFO0FBRXhFLGtKQUFvRTtBQUNwRSwrSUFBa0U7QUFNbEUsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBc0MsSUFBSSxDQUFpQyxDQUFDLENBQUM7QUFFOUYsSUFBTSxhQUFhLEdBQUc7SUFDbEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZO0lBQ2pELEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLGdDQUFpQixDQUFDLENBQUMsQ0FBQywrQkFBZ0I7Q0FDdEQsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHO0lBQ3BCLFdBQVcsRUFBRTtRQUNULFdBQVcsWUFBQyxPQUFpQixFQUFFLElBQVc7WUFDdEMsc0JBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxFQUFFLFlBQUMsT0FBaUIsRUFBRSxJQUE4QjtZQUNoRCxJQUFNLFlBQVksR0FBRyxVQUFDLE1BQXdCO2dCQUFFLGNBQWM7cUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztvQkFBZCw2QkFBYzs7Z0JBQUssV0FBSSxlQUFJLElBQUk7WUFBWixDQUFhLENBQUM7WUFDakYsc0JBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRXRDLE9BQU87Z0JBQ0gsc0JBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FBQztRQUNOLENBQUM7UUFDRCxJQUFJLFlBQUMsT0FBaUIsRUFBRSxJQUE4QjtZQUNsRCxzQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFNO2dCQUFFLGNBQU87cUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztvQkFBUCw2QkFBTzs7Z0JBQUssV0FBSSxlQUFJLElBQUk7WUFBWixDQUFhLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQ0QsTUFBTSxZQUFDLE9BQW1CO1lBQUUsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLDZCQUFjOztZQUN0QyxPQUFPLHNCQUFXLENBQUMsTUFBTSxPQUFsQixzQkFBVyxpQkFBUSxPQUFPLEdBQUssSUFBSSxVQUFFO1FBQ2hELENBQUM7S0FDSjtDQUNKLENBQUM7QUFFRix3QkFBYSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN6RCx3QkFBYSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUN2QzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2FwZXRhL3NhbXBsZS1kZXNrdG9wLWVsZWN0cm9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Aa2FwZXRhL3NhbXBsZS1kZXNrdG9wLWVsZWN0cm9uLy4vc3JjL21haW4vcHJlbG9hZC50cyIsIndlYnBhY2s6Ly9Aa2FwZXRhL3NhbXBsZS1kZXNrdG9wLWVsZWN0cm9uL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJlbGVjdHJvblwiIiwid2VicGFjazovL0BrYXBldGEvc2FtcGxlLWRlc2t0b3AtZWxlY3Ryb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGthcGV0YS9zYW1wbGUtZGVza3RvcC1lbGVjdHJvbi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0BrYXBldGEvc2FtcGxlLWRlc2t0b3AtZWxlY3Ryb24vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0BrYXBldGEvc2FtcGxlLWRlc2t0b3AtZWxlY3Ryb24vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQgeyBjb250ZXh0QnJpZGdlLCBpcGNSZW5kZXJlciwgSXBjUmVuZGVyZXJFdmVudCB9IGZyb20gJ2VsZWN0cm9uJztcblxuaW1wb3J0IEhPU1RTX0RFVkVMT1BNRU5UIGZyb20gJy4uLy4uL2NvbmZpZy9ob3N0cy5kZXZlbG9wbWVudC5qc29uJztcbmltcG9ydCBIT1NUU19QUk9EVUNUSU9OIGZyb20gJy4uLy4uL2NvbmZpZy9ob3N0cy5wcm9kdWN0aW9uLmpzb24nO1xuXG5leHBvcnQgdHlwZSBDaGFubmVscyA9ICdpcGMtbWFpbicgfCAnYXV0by11cGRhdGVyJztcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJlcyA9ICdleGFtcGxlLW1ldGhvZCcgfCAncXVpdC1hbmQtaW5zdGFsbCc7XG5cbmNvbnN0IERFQlVHID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgcHJvY2Vzcy5lbnYuREVCVUdfUFJPRCA9PT0gJ3RydWUnKTtcblxuY29uc3Qga2FwZXRhSGFuZGxlciA9IHtcbiAgICBlbnZpcm9ubWVudDogREVCVUcgPyAnZGV2ZWxvcG1lbnQnIDogJ3Byb2R1Y3Rpb24nLFxuICAgIGhvc3RzOiBERUJVRyA/IEhPU1RTX0RFVkVMT1BNRU5UIDogSE9TVFNfUFJPRFVDVElPTixcbn07XG5cbmNvbnN0IGVsZWN0cm9uSGFuZGxlciA9IHtcbiAgICBpcGNSZW5kZXJlcjoge1xuICAgICAgICBzZW5kTWVzc2FnZShjaGFubmVsOiBDaGFubmVscywgYXJnczogYW55W10pIHtcbiAgICAgICAgICAgIGlwY1JlbmRlcmVyLnNlbmQoY2hhbm5lbCwgYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uKGNoYW5uZWw6IENoYW5uZWxzLCBmdW5jOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IChfZXZlbnQ6IElwY1JlbmRlcmVyRXZlbnQsIC4uLmFyZ3M6IGFueVtdKSA9PiBmdW5jKC4uLmFyZ3MpO1xuICAgICAgICAgICAgaXBjUmVuZGVyZXIub24oY2hhbm5lbCwgc3Vic2NyaXB0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpcGNSZW5kZXJlci5yZW1vdmVMaXN0ZW5lcihjaGFubmVsLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgb25jZShjaGFubmVsOiBDaGFubmVscywgZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKSB7XG4gICAgICAgICAgICBpcGNSZW5kZXJlci5vbmNlKGNoYW5uZWwsIChfZXZlbnQsIC4uLmFyZ3MpID0+IGZ1bmMoLi4uYXJncykpO1xuICAgICAgICB9LFxuICAgICAgICBpbnZva2UoY2hhbm5lbDogUHJvY2VkdXJlcywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgICAgIHJldHVybiBpcGNSZW5kZXJlci5pbnZva2UoY2hhbm5lbCwgLi4uYXJncyk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ2thcGV0YScsIGthcGV0YUhhbmRsZXIpO1xuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnZWxlY3Ryb24nLCBlbGVjdHJvbkhhbmRsZXIpO1xuXG5leHBvcnQgdHlwZSBLYXBldGFIYW5kbGVyID0gdHlwZW9mIGthcGV0YUhhbmRsZXI7XG5leHBvcnQgdHlwZSBFbGVjdHJvbkhhbmRsZXIgPSB0eXBlb2YgZWxlY3Ryb25IYW5kbGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4vcHJlbG9hZC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==