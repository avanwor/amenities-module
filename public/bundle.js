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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/amenity.jsx":
/*!****************************!*\
  !*** ./client/amenity.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Amenity = function Amenity(props) {\n  var amenTableData = [];\n  var amenRow = [];\n\n  if (props.amenities[0]) {\n    var amenSliced = props.amenities.slice(0, 4);\n    amenTableData = amenSliced.map(function (ele) {\n      return React.createElement(\"td\", {\n        style: {\n          paddingRight: 110\n        }\n      }, React.createElement(\"img\", {\n        src: ele.img_url,\n        style: {\n          height: 20,\n          width: 20\n        }\n      }), ele.name);\n    });\n\n    for (var i = 0; i <= amenSliced.length / 2; i += 2) {\n      amenRow.push(React.createElement(\"tr\", {\n        key: amenSliced[i].name\n      }, amenTableData[i], amenTableData[i + 1]));\n    } //carbon monoxide? add it manually\n\n  }\n\n  return React.createElement(\"tbody\", null, amenRow);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Amenity);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYW1lbml0eS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYW1lbml0eS5qc3g/ZjMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBBbWVuaXR5ID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGFtZW5UYWJsZURhdGEgPSBbXTtcbiAgICBsZXQgYW1lblJvdyA9IFtdO1xuICAgIGlmKHByb3BzLmFtZW5pdGllc1swXSkge1xuICAgICAgICBsZXQgYW1lblNsaWNlZCA9IHByb3BzLmFtZW5pdGllcy5zbGljZSgwLDQpO1xuICAgICAgICBhbWVuVGFibGVEYXRhID0gYW1lblNsaWNlZC5tYXAoZWxlID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8dGQgc3R5bGU9e3twYWRkaW5nUmlnaHQ6MTEwfX0+PGltZyBzcmM9e2VsZS5pbWdfdXJsfSBzdHlsZT17e2hlaWdodDoyMCx3aWR0aDoyMH19PjwvaW1nPntlbGUubmFtZX08L3RkPlxuICAgICAgICB9KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBhbWVuU2xpY2VkLmxlbmd0aCAvIDI7IGkrPTIpIHtcbiAgICAgICAgICAgIGFtZW5Sb3cucHVzaCg8dHIga2V5PXthbWVuU2xpY2VkW2ldLm5hbWV9PnthbWVuVGFibGVEYXRhW2ldfXthbWVuVGFibGVEYXRhW2krMV19PC90cj4pIFxuICAgICAgICB9XG4gICAgICAgIC8vY2FyYm9uIG1vbm94aWRlPyBhZGQgaXQgbWFudWFsbHlcbiAgICB9XG4gICAgcmV0dXJuIDx0Ym9keT57YW1lblJvd308L3Rib2R5PlxufVxuXG5leHBvcnQgZGVmYXVsdCBBbWVuaXR5OyJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/amenity.jsx\n");

/***/ }),

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _amenity_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./amenity.jsx */ \"./client/amenity.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      listingAmenities: []\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      $.get('http://localhost:3003/api/amenities', function (serverData) {\n        var parsedServerData = JSON.parse(serverData);\n        var amenities = [];\n\n        for (var prop in parsedServerData) {\n          amenities.push(parsedServerData[prop]);\n        } //console.log(amenities)\n        //should order by attractiveness in the sql call. \n\n\n        _this2.setState({\n          listingAmenities: amenities\n        }); //console.log(this.state.listingAmenities[2].name)\n\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"section\", null, React.createElement(\"h2\", null, \"Amenities\"), React.createElement(\"div\", {\n        style: {\n          marginBottom: 16\n        }\n      }, React.createElement(\"table\", null, React.createElement(_amenity_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        amenities: this.state.listingAmenities\n      }))), React.createElement(\"a\", {\n        style: {\n          color: 'blue'\n        },\n        onClick: function onClick() {\n          return console.log('click handler working');\n        }\n      }, \"Show all \", this.state.listingAmenities.length, \" amenities\")));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9hcHAuanN4PzJjNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFtZW5pdHkgZnJvbSAnLi9hbWVuaXR5LmpzeCdcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsaXN0aW5nQW1lbml0aWVzOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgJC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9hcGkvYW1lbml0aWVzJywgKHNlcnZlckRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTZXJ2ZXJEYXRhID0gSlNPTi5wYXJzZShzZXJ2ZXJEYXRhKVxuICAgICAgICAgICAgbGV0IGFtZW5pdGllcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwYXJzZWRTZXJ2ZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgYW1lbml0aWVzLnB1c2gocGFyc2VkU2VydmVyRGF0YVtwcm9wXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYW1lbml0aWVzKVxuICAgICAgICAgICAgLy9zaG91bGQgb3JkZXIgYnkgYXR0cmFjdGl2ZW5lc3MgaW4gdGhlIHNxbCBjYWxsLiBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxpc3RpbmdBbWVuaXRpZXM6IGFtZW5pdGllc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5saXN0aW5nQW1lbml0aWVzWzJdLm5hbWUpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5BbWVuaXRpZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOjE2fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtZW5pdHkgYW1lbml0aWVzPXt0aGlzLnN0YXRlLmxpc3RpbmdBbWVuaXRpZXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2NvbG9yOidibHVlJ319IG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdjbGljayBoYW5kbGVyIHdvcmtpbmcnKX0+U2hvdyBhbGwge3RoaXMuc3RhdGUubGlzdGluZ0FtZW5pdGllcy5sZW5ndGh9IGFtZW5pdGllczwvYT5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBckNBO0FBQ0E7QUF1Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/app.jsx\n");

/***/ })

/******/ });