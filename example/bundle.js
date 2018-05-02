/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/spotify-wrapper/lib/album.js":
/*!****************************************************!*\
  !*** ../node_modules/spotify-wrapper/lib/album.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = album;\nfunction album() {\n  var _this = this;\n\n  return {\n    getAlbum: function getAlbum(id) {\n      return _this.request(_this.apiURL + \"/albums/\" + id);\n    },\n    getAlbums: function getAlbums(ids) {\n      return _this.request(_this.apiURL + \"/albums/?ids=\" + ids);\n    },\n    getTracks: function getTracks(id) {\n      return _this.request(_this.apiURL + \"/albums/\" + id + \"/tracks\");\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd3JhcHBlci9saWIvYWxidW0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd3JhcHBlci9saWIvYWxidW0uanM/MzM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFsYnVtO1xuZnVuY3Rpb24gYWxidW0oKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRBbGJ1bTogZnVuY3Rpb24gZ2V0QWxidW0oaWQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5yZXF1ZXN0KF90aGlzLmFwaVVSTCArIFwiL2FsYnVtcy9cIiArIGlkKTtcbiAgICB9LFxuICAgIGdldEFsYnVtczogZnVuY3Rpb24gZ2V0QWxidW1zKGlkcykge1xuICAgICAgcmV0dXJuIF90aGlzLnJlcXVlc3QoX3RoaXMuYXBpVVJMICsgXCIvYWxidW1zLz9pZHM9XCIgKyBpZHMpO1xuICAgIH0sXG4gICAgZ2V0VHJhY2tzOiBmdW5jdGlvbiBnZXRUcmFja3MoaWQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5yZXF1ZXN0KF90aGlzLmFwaVVSTCArIFwiL2FsYnVtcy9cIiArIGlkICsgXCIvdHJhY2tzXCIpO1xuICAgIH1cbiAgfTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/spotify-wrapper/lib/album.js\n");

/***/ }),

/***/ "../node_modules/spotify-wrapper/lib/config.js":
/*!*****************************************************!*\
  !*** ../node_modules/spotify-wrapper/lib/config.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar API_URL = 'https://api.spotify.com/v1';\nexports.default = API_URL;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd3JhcHBlci9saWIvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zcG90aWZ5LXdyYXBwZXIvbGliL2NvbmZpZy5qcz9jNTYxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBBUElfVVJMID0gJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxJztcbmV4cG9ydHMuZGVmYXVsdCA9IEFQSV9VUkw7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/spotify-wrapper/lib/config.js\n");

/***/ }),

/***/ "../node_modules/spotify-wrapper/lib/index.js":
/*!****************************************************!*\
  !*** ../node_modules/spotify-wrapper/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global fetch */\n\n\nvar _search = __webpack_require__(/*! ./search */ \"../node_modules/spotify-wrapper/lib/search.js\");\n\nvar _search2 = _interopRequireDefault(_search);\n\nvar _album = __webpack_require__(/*! ./album */ \"../node_modules/spotify-wrapper/lib/album.js\");\n\nvar _album2 = _interopRequireDefault(_album);\n\nvar _config = __webpack_require__(/*! ./config */ \"../node_modules/spotify-wrapper/lib/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"../node_modules/spotify-wrapper/lib/utils.js\");\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SpotifyWrapper = function () {\n  function SpotifyWrapper(options) {\n    _classCallCheck(this, SpotifyWrapper);\n\n    this.apiURL = options.apiURL || _config2.default;\n    this.token = options.token;\n\n    this.album = _album2.default.bind(this)();\n    this.search = _search2.default.bind(this)();\n  }\n\n  _createClass(SpotifyWrapper, [{\n    key: 'request',\n    value: function request(url) {\n      var headers = {\n        headers: {\n          Authorization: '\\'Bearer ' + this.token + '\\''\n        }\n      };\n\n      return fetch(url, headers).then(_utils2.default);\n    }\n  }]);\n\n  return SpotifyWrapper;\n}();\n\nexports.default = SpotifyWrapper;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd3JhcHBlci9saWIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd3JhcHBlci9saWIvaW5kZXguanM/MTVlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7IC8qIGdsb2JhbCBmZXRjaCAqL1xuXG5cbnZhciBfc2VhcmNoID0gcmVxdWlyZSgnLi9zZWFyY2gnKTtcblxudmFyIF9zZWFyY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2VhcmNoKTtcblxudmFyIF9hbGJ1bSA9IHJlcXVpcmUoJy4vYWxidW0nKTtcblxudmFyIF9hbGJ1bTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbGJ1bSk7XG5cbnZhciBfY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKTtcblxudmFyIF9jb25maWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uZmlnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTcG90aWZ5V3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3BvdGlmeVdyYXBwZXIob3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTcG90aWZ5V3JhcHBlcik7XG5cbiAgICB0aGlzLmFwaVVSTCA9IG9wdGlvbnMuYXBpVVJMIHx8IF9jb25maWcyLmRlZmF1bHQ7XG4gICAgdGhpcy50b2tlbiA9IG9wdGlvbnMudG9rZW47XG5cbiAgICB0aGlzLmFsYnVtID0gX2FsYnVtMi5kZWZhdWx0LmJpbmQodGhpcykoKTtcbiAgICB0aGlzLnNlYXJjaCA9IF9zZWFyY2gyLmRlZmF1bHQuYmluZCh0aGlzKSgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNwb3RpZnlXcmFwcGVyLCBbe1xuICAgIGtleTogJ3JlcXVlc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0KHVybCkge1xuICAgICAgdmFyIGhlYWRlcnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiAnXFwnQmVhcmVyICcgKyB0aGlzLnRva2VuICsgJ1xcJydcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGZldGNoKHVybCwgaGVhZGVycykudGhlbihfdXRpbHMyLmRlZmF1bHQpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTcG90aWZ5V3JhcHBlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3BvdGlmeVdyYXBwZXI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/spotify-wrapper/lib/index.js\n");

/***/ }),

/***/ "../node_modules/spotify-wrapper/lib/search.js":
/*!*****************************************************!*\
  !*** ../node_modules/spotify-wrapper/lib/search.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = search;\nfunction searcher(type, query) {\n  return this.request(this.apiURL + '/search?q=' + query + '&type=' + type);\n}\n\nfunction search() {\n  return {\n    artists: searcher.bind(this, 'artist'),\n    albums: searcher.bind(this, 'album'),\n    tracks: searcher.bind(this, 'track'),\n    playlists: searcher.bind(this, 'playlist')\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd3JhcHBlci9saWIvc2VhcmNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zcG90aWZ5LXdyYXBwZXIvbGliL3NlYXJjaC5qcz9iMmM4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNlYXJjaDtcbmZ1bmN0aW9uIHNlYXJjaGVyKHR5cGUsIHF1ZXJ5KSB7XG4gIHJldHVybiB0aGlzLnJlcXVlc3QodGhpcy5hcGlVUkwgKyAnL3NlYXJjaD9xPScgKyBxdWVyeSArICcmdHlwZT0nICsgdHlwZSk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgcmV0dXJuIHtcbiAgICBhcnRpc3RzOiBzZWFyY2hlci5iaW5kKHRoaXMsICdhcnRpc3QnKSxcbiAgICBhbGJ1bXM6IHNlYXJjaGVyLmJpbmQodGhpcywgJ2FsYnVtJyksXG4gICAgdHJhY2tzOiBzZWFyY2hlci5iaW5kKHRoaXMsICd0cmFjaycpLFxuICAgIHBsYXlsaXN0czogc2VhcmNoZXIuYmluZCh0aGlzLCAncGxheWxpc3QnKVxuICB9O1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/spotify-wrapper/lib/search.js\n");

/***/ }),

/***/ "../node_modules/spotify-wrapper/lib/utils.js":
/*!****************************************************!*\
  !*** ../node_modules/spotify-wrapper/lib/utils.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar toJSON = function toJSON(data) {\n  return data.json();\n};\nexports.default = toJSON;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd3JhcHBlci9saWIvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd3JhcHBlci9saWIvdXRpbHMuanM/NWI2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciB0b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oZGF0YSkge1xuICByZXR1cm4gZGF0YS5qc29uKCk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9KU09OOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/spotify-wrapper/lib/utils.js\n");

/***/ }),

/***/ "./AlbumInfo.js":
/*!**********************!*\
  !*** ./AlbumInfo.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = renderAlbumdata;\nfunction renderAlbumdata(data, element) {\n  var elem = element;\n  var markup = \"\\n    <img class=\\\"album-image\\\" src=\\\"\" + data.images[0].url + \"\\\" alt=\\\"\" + data.artists[0].name + \"\\\">\\n    <p class=\\\"album-title\\\">\" + data.name + \"</p>\\n    <p class=\\\"album-artist\\\">\" + data.artists[0].name + \"</p>\\n    <p class=\\\"album-counter\\\">\" + data.tracks.total + \" M\\xFAsicas</p>\";\n\n  elem.innerHTML = markup;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BbGJ1bUluZm8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FsYnVtSW5mby5qcz8yZmMwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckFsYnVtZGF0YShkYXRhLCBlbGVtZW50KSB7XG4gIGNvbnN0IGVsZW0gPSBlbGVtZW50O1xuICBjb25zdCBtYXJrdXAgPSBgXG4gICAgPGltZyBjbGFzcz1cImFsYnVtLWltYWdlXCIgc3JjPVwiJHtkYXRhLmltYWdlc1swXS51cmx9XCIgYWx0PVwiJHtkYXRhLmFydGlzdHNbMF0ubmFtZX1cIj5cbiAgICA8cCBjbGFzcz1cImFsYnVtLXRpdGxlXCI+JHtkYXRhLm5hbWV9PC9wPlxuICAgIDxwIGNsYXNzPVwiYWxidW0tYXJ0aXN0XCI+JHtkYXRhLmFydGlzdHNbMF0ubmFtZX08L3A+XG4gICAgPHAgY2xhc3M9XCJhbGJ1bS1jb3VudGVyXCI+JHtkYXRhLnRyYWNrcy50b3RhbH0gTcO6c2ljYXM8L3A+YDtcblxuICBlbGVtLmlubmVySFRNTCA9IG1hcmt1cDtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./AlbumInfo.js\n");

/***/ }),

/***/ "./AlbumList.js":
/*!**********************!*\
  !*** ./AlbumList.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = renderAlbums;\nfunction createMarkup(data) {\n  return data.map(function (album) {\n    return '\\n    <div class=\"list-item\">\\n      <img src=\"' + album.images[2].url + '\" alt=\"' + album.name + '\" class=\"list-image\" >\\n      <div class=\"list-description\">\\n        <p class=\"list-title\">' + album.name + '</p>\\n        <p class=\"list-subtitle\">' + album.artists[0].name + '</p>\\n      </div>\\n    </div>';\n  }).join('');\n}\n\nfunction renderAlbums(data, element) {\n  var elem = element;\n  var markup = createMarkup(data);\n\n  elem.innerHTML = markup;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BbGJ1bUxpc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FsYnVtTGlzdC5qcz8xOGUzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZU1hcmt1cChkYXRhKSB7XG4gIHJldHVybiBkYXRhLm1hcChhbGJ1bSA9PiBgXG4gICAgPGRpdiBjbGFzcz1cImxpc3QtaXRlbVwiPlxuICAgICAgPGltZyBzcmM9XCIke2FsYnVtLmltYWdlc1syXS51cmx9XCIgYWx0PVwiJHthbGJ1bS5uYW1lfVwiIGNsYXNzPVwibGlzdC1pbWFnZVwiID5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxwIGNsYXNzPVwibGlzdC10aXRsZVwiPiR7YWxidW0ubmFtZX08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwibGlzdC1zdWJ0aXRsZVwiPiR7YWxidW0uYXJ0aXN0c1swXS5uYW1lfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmApLmpvaW4oJycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJBbGJ1bXMoZGF0YSwgZWxlbWVudCkge1xuICBjb25zdCBlbGVtID0gZWxlbWVudDtcbiAgY29uc3QgbWFya3VwID0gY3JlYXRlTWFya3VwKGRhdGEpO1xuXG4gIGVsZW0uaW5uZXJIVE1MID0gbWFya3VwO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQVdBO0FBWEE7QUFDQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./AlbumList.js\n");

/***/ }),

/***/ "./Spotify.js":
/*!********************!*\
  !*** ./Spotify.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _spotifyWrapper = __webpack_require__(/*! spotify-wrapper */ \"../node_modules/spotify-wrapper/lib/index.js\");\n\nvar _spotifyWrapper2 = _interopRequireDefault(_spotifyWrapper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar spotify = new _spotifyWrapper2.default({\n  token: !!window.AppSettings && window.AppSettings.token\n}); /* eslint no-undef: \"error\" */\n/* eslint-env browser */\n\nexports.default = spotify;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TcG90aWZ5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9TcG90aWZ5LmpzP2I1MWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLXVuZGVmOiBcImVycm9yXCIgKi9cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgU3BvdGlmeVdyYXBwZXIgZnJvbSAnc3BvdGlmeS13cmFwcGVyJztcblxuY29uc3Qgc3BvdGlmeSA9IG5ldyBTcG90aWZ5V3JhcHBlcih7XG4gIHRva2VuOiAhIXdpbmRvdy5BcHBTZXR0aW5ncyAmJiB3aW5kb3cuQXBwU2V0dGluZ3MudG9rZW4sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3BvdGlmeTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBREE7QUFKQTtBQUNBO0FBT0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Spotify.js\n");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Spotify = __webpack_require__(/*! ./Spotify */ \"./Spotify.js\");\n\nvar _Spotify2 = _interopRequireDefault(_Spotify);\n\nvar _AlbumList = __webpack_require__(/*! ./AlbumList */ \"./AlbumList.js\");\n\nvar _AlbumList2 = _interopRequireDefault(_AlbumList);\n\nvar _AlbumInfo = __webpack_require__(/*! ./AlbumInfo */ \"./AlbumInfo.js\");\n\nvar _AlbumInfo2 = _interopRequireDefault(_AlbumInfo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar albums = _Spotify2.default.search.albums('Incubus'); /* eslint-env browser */\n\nvar albumList = document.getElementById('album-list');\nvar album = _Spotify2.default.album.getAlbum('6peEdPVO73WtgGah5sEhX4');\nvar albumInfo = document.getElementById('album-info');\n\nalbums.then(function (data) {\n  return (0, _AlbumList2.default)(data.albums.items, albumList);\n});\n\nalbum.then(function (data) {\n  return (0, _AlbumInfo2.default)(data, albumInfo);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9tYWluLmpzPzJlZTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCBzcG90aWZ5IGZyb20gJy4vU3BvdGlmeSc7XG5pbXBvcnQgcmVuZGVyQWxidW1zIGZyb20gJy4vQWxidW1MaXN0JztcbmltcG9ydCByZW5kZXJBbGJ1bUluZm8gZnJvbSAnLi9BbGJ1bUluZm8nO1xuXG5jb25zdCBhbGJ1bXMgPSBzcG90aWZ5LnNlYXJjaC5hbGJ1bXMoJ0luY3VidXMnKTtcbmNvbnN0IGFsYnVtTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGJ1bS1saXN0Jyk7XG5jb25zdCBhbGJ1bSA9IHNwb3RpZnkuYWxidW0uZ2V0QWxidW0oJzZwZUVkUFZPNzNXdGdHYWg1c0VoWDQnKTtcbmNvbnN0IGFsYnVtSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGJ1bS1pbmZvJyk7XG5cbmFsYnVtc1xuICAudGhlbihkYXRhID0+IHJlbmRlckFsYnVtcyhkYXRhLmFsYnVtcy5pdGVtcywgYWxidW1MaXN0KSk7XG5cbmFsYnVtXG4gIC50aGVuKGRhdGEgPT4gcmVuZGVyQWxidW1JbmZvKGRhdGEsIGFsYnVtSW5mbykpO1xuIl0sIm1hcHBpbmdzIjoiOztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./main.js\n");

/***/ })

/******/ });