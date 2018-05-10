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

	var $app_template$ = __webpack_require__(10)
	var $app_style$ = __webpack_require__(11)
	var $app_script$ = __webpack_require__(12)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.2'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
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

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "attr": {},
	  "classList": [
	    "list-main"
	  ],
	  "events": {
	    "scrollbottom": "loadData"
	  },
	  "children": [
	    {
	      "type": "list-item",
	      "attr": {
	        "type": "review"
	      },
	      "classList": [
	        "list-item"
	      ],
	      "repeat": function () {return this.list},
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.getThumbUrl(this.$item.cinecism_info.cover_url,350,200)},
	            "alt": "../Common/assets/img/default.png"
	          },
	          "classList": [
	            "art-pic"
	          ],
	          "events": {
	            "click": function (evt) {this.goDetail(this.$item.cinecism_info.id,evt)}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.$item.cinecism_info.title}
	          },
	          "classList": [
	            "art-title"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "list-item",
	      "attr": {
	        "type": "loadMore",
	        "show": function () {return this.hasMore}
	      },
	      "classList": [
	        "load-more"
	      ],
	      "children": [
	        {
	          "type": "progress",
	          "attr": {
	            "type": "circular"
	          },
	          "classList": [
	            "round"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "加载更多"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  ".list-main": {
	    "display": "flex",
	    "flexDirection": "column",
	    "width": "100%",
	    "marginTop": "0px",
	    "marginRight": "10px",
	    "marginBottom": "0px",
	    "marginLeft": "10px"
	  },
	  ".list-item": {
	    "display": "flex",
	    "flexDirection": "row",
	    "marginTop": "20px"
	  },
	  ".art-pic": {
	    "width": "350px",
	    "height": "200px",
	    "marginRight": "10px"
	  },
	  ".art-title": {
	    "flexGrow": 1
	  },
	  ".load-more": {
	    "textAlign": "center",
	    "display": "flex",
	    "justifyContent": "center",
	    "marginTop": "10px"
	  },
	  ".round": {
	    "width": "50px",
	    "height": "50px"
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _index = __webpack_require__(6);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _util = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	exports.default = {
	  data: {
	    hasMore: true,
	    size: 10,
	    cursor: 0,
	    loading: false,
	    list: []
	  },
	  onInit: function onInit() {
	    this.loadData();
	  },
	  onMenuPress: function onMenuPress() {
	    this.$app.showMenu();
	  },
	  loadData: function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	      var data;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              if (!(!this.loading && this.hasMore)) {
	                _context.next = 16;
	                break;
	              }
	
	              _context.prev = 1;
	
	              this.loading = true;
	              _context.next = 5;
	              return _index2.default.getList({
	                cursor: this.cursor,
	                size: this.size
	              });
	
	            case 5:
	              data = _context.sent;
	
	
	              console.log(JSON.stringify(data));
	              this.loading = false;
	
	              this.list = [].concat(_toConsumableArray(this.list), _toConsumableArray(data.list));
	
	              this.hasMore = data.is_more;
	              this.cursor = data.list[data.list.length - 1].cinecism_info.cursor || 0;
	              _context.next = 16;
	              break;
	
	            case 13:
	              _context.prev = 13;
	              _context.t0 = _context['catch'](1);
	
	              console.error(_context.t0);
	
	            case 16:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this, [[1, 13]]);
	    }));
	
	    function loadData() {
	      return _ref.apply(this, arguments);
	    }
	
	    return loadData;
	  }(),
	
	  getThumbUrl: _util.getThumbUrl,
	  goDetail: function goDetail(id) {
	    _system2.default.push({
	      uri: '/Detail',
	      params: { id: id }
	    });
	  }
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
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.showMenu = showMenu;
	exports.createShortcut = createShortcut;
	exports.qiniuImageView2 = qiniuImageView2;
	exports.getThumbUrl = getThumbUrl;
	/**
	 * 显示菜单
	 */
	function showMenu() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var router = $app_require$('@app-module/system.router');
	  var appInfo = $app_require$('@app-module/system.app').getInfo();
	  prompt.showContextMenu({
	    itemList: ['保存桌面', '关于', '取消'],
	    success: function success(ret) {
	      switch (ret.index) {
	        case 0:
	          // 保存桌面
	          createShortcut();
	          break;
	        case 1:
	          // 关于
	          router.push({
	            uri: '/About',
	            params: { name: appInfo.name, icon: appInfo.icon }
	          });
	          break;
	        case 2:
	          // 取消
	          break;
	        default:
	          prompt.showToast({ message: 'error' });
	      }
	    }
	  });
	}
	
	/**
	 * 创建桌面图标
	 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
	 */
	function createShortcut() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var shortcut = $app_require$('@app-module/system.shortcut');
	  shortcut.hasInstalled({
	    success: function success(ret) {
	      if (ret) {
	        prompt.showToast({ message: '已创建桌面图标' });
	      } else {
	        shortcut.install({
	          success: function success() {
	            prompt.showToast({ message: '成功创建桌面图标' });
	          },
	          fail: function fail(errmsg, errcode) {
	            prompt.showToast({ message: 'error: ' + errcode + '---' + errmsg });
	          }
	        });
	      }
	    }
	  });
	}
	
	/** 七牛图片缩略、剪裁 */
	function qiniuImageView2(url, mode, w, h) {
	  var q = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 90;
	
	  return url + '?imageView2/' + mode + (w ? '/w/' + w : '') + (h ? '/h/' + h : '') + ('/q/' + q + '/interlace/1');
	}
	
	/**
	 * 获取缩略图url
	 * @param {string} url
	 * @param {number} width
	 * @param {number} height
	 */
	function getThumbUrl(url, width, height) {
	  var plugins = {
	    qiniu: {
	      hosts: ['sl.wangpan.7niu.n0808.com'],
	      handler: function handler() {
	        return qiniuImageView2(url, 0, width, height);
	      }
	    },
	    dnion: {
	      hosts: ['static-xl9-ssl.xunlei.com'],
	      handler: function handler() {
	        return url + '?w=' + width + '&h=' + height;
	      }
	    }
	  };
	
	  for (var i in plugins) {
	    var _plugins$i = plugins[i],
	        hosts = _plugins$i.hosts,
	        handler = _plugins$i.handler;
	
	    if (hosts.some(function (host) {
	      return url.match(host);
	    })) {
	      return handler();
	    }
	  }
	
	  // 如果没有匹配，就返回原url
	  return url;
	}

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