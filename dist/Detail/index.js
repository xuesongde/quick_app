(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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

	var $app_template$ = __webpack_require__(4)
	var $app_script$ = __webpack_require__(5)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.2'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "children": [
	    {
	      "type": "web",
	      "attr": {
	        "src": function () {return this.review.body_url},
	        "id": "web"
	      },
	      "id": "web"
	    }
	  ]
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _index = __webpack_require__(6);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	exports.default = {
	  data: {
	    id: '',
	    review: {}
	  },
	  onMenuPress: function onMenuPress() {
	    this.$app.showMenu();
	  },
	  onInit: function onInit() {
	    this.getReview();
	  },
	  getReview: function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	      var data;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.prev = 0;
	              _context.next = 3;
	              return _index2.default.getReview(this.id);
	
	            case 3:
	              data = _context.sent;
	
	              this.review = data.cinecism_info || {};
	              this.$page.setTitleBar({ text: this.review.title });
	              _context.next = 11;
	              break;
	
	            case 8:
	              _context.prev = 8;
	              _context.t0 = _context['catch'](0);
	
	              console.log(_context.t0);
	
	            case 11:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this, [[0, 8]]);
	    }));
	
	    function getReview() {
	      return _ref.apply(this, arguments);
	    }
	
	    return getReview;
	  }()
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SL_API = 'http://api-xl9-ssl.xunlei.com/sl';
	
	exports.default = {
	  getList: function getList(_ref) {
	    var _ref$cursor = _ref.cursor,
	        cursor = _ref$cursor === undefined ? 0 : _ref$cursor,
	        _ref$size = _ref.size,
	        size = _ref$size === undefined ? 10 : _ref$size,
	        _ref$category = _ref.category,
	        category = _ref$category === undefined ? 'new' : _ref$category;
	
	    return natives.fetch({
	      url: SL_API + '/cinecism/list',
	      method: 'GET',
	      data: {
	        cursor: cursor,
	        size: size,
	        category: category
	      }
	    }).then(function (res) {
	      return res.data;
	    });
	  },
	  getReview: function getReview(id) {
	    return natives.fetch({
	      url: SL_API + '/cinecism/info',
	      method: 'GET',
	      data: {
	        id: id,
	        recommend_size: 0
	      }
	    }).then(function (res) {
	      return res.data;
	    });
	  }
	};

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map