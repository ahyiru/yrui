(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-router"));
	else if(typeof define === 'function' && define.amd)
		define("yrUI", ["react", "react-router"], factory);
	else if(typeof exports === 'object')
		exports["yrUI"] = factory(require("react"), require("react-router"));
	else
		root["yrUI"] = factory(root["react"], root["react-router"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Ynav = exports.YrightBar = exports.YsideBar = exports.Ynotify = exports.YbackTop = exports.YpageHeader = undefined;

	var _ypageheader = __webpack_require__(1);

	var _ypageheader2 = _interopRequireDefault(_ypageheader);

	var _ybacktop = __webpack_require__(3);

	var _ybacktop2 = _interopRequireDefault(_ybacktop);

	var _ynotify = __webpack_require__(4);

	var _ynotify2 = _interopRequireDefault(_ynotify);

	var _ysidebar = __webpack_require__(6);

	var _ysidebar2 = _interopRequireDefault(_ysidebar);

	var _yrightbar = __webpack_require__(9);

	var _yrightbar2 = _interopRequireDefault(_yrightbar);

	var _ynav = __webpack_require__(11);

	var _ynav2 = _interopRequireDefault(_ynav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.YpageHeader = _ypageheader2.default;
	exports.YbackTop = _ybacktop2.default;
	exports.Ynotify = _ynotify2.default;
	exports.YsideBar = _ysidebar2.default;
	exports.YrightBar = _yrightbar2.default;
	exports.Ynav = _ynav2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var YpageHeader = function (_React$Component) {
	  _inherits(YpageHeader, _React$Component);

	  function YpageHeader(props) {
	    _classCallCheck(this, YpageHeader);

	    return _possibleConstructorReturn(this, (YpageHeader.__proto__ || Object.getPrototypeOf(YpageHeader)).call(this, props));
	  }

	  _createClass(YpageHeader, [{
	    key: "render",
	    value: function render() {
	      var data = this.props.data;

	      return React.createElement(
	        "div",
	        { className: "y-pageheader" },
	        React.createElement(
	          "h2",
	          null,
	          data.title,
	          " ",
	          React.createElement(
	            "span",
	            null,
	            " ",
	            data.subTitle
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "y-page-bar" },
	          React.createElement(
	            "ul",
	            { className: "y-page-breadcrumb" },
	            React.createElement(
	              "li",
	              null,
	              React.createElement(
	                "a",
	                { href: "javascript:;" },
	                React.createElement("i", { className: "fa fa-home" }),
	                " ",
	                data.title
	              )
	            ),
	            React.createElement(
	              "li",
	              { className: data.level < 2 && 'y-hide' },
	              React.createElement(
	                "a",
	                { href: "javascript:;" },
	                data.subTitle
	              )
	            ),
	            React.createElement(
	              "li",
	              { className: data.level < 3 && 'y-hide' },
	              React.createElement(
	                "a",
	                { href: "javascript:;" },
	                data.subTitle
	              )
	            )
	          ),
	          React.createElement("article", { className: "y-timer" })
	        )
	      );
	    }
	  }]);

	  return YpageHeader;
	}(React.Component);

	exports.default = YpageHeader;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var YbackTop = function (_React$Component) {
	    _inherits(YbackTop, _React$Component);

	    function YbackTop(props) {
	        _classCallCheck(this, YbackTop);

	        var _this = _possibleConstructorReturn(this, (YbackTop.__proto__ || Object.getPrototypeOf(YbackTop)).call(this, props));

	        _this.toTop = function () {
	            if (document.documentElement.scrollTop) {
	                (function () {
	                    var timer = setInterval(function () {
	                        if (document.documentElement.scrollTop <= 0) {
	                            document.documentElement.scrollTop = 0;
	                            clearInterval(timer);
	                            return true;
	                        }
	                        document.documentElement.scrollTop -= 50;
	                    }, 1);
	                })();
	            } else {
	                (function () {
	                    var timer = setInterval(function () {
	                        if (document.body.scrollTop <= 0) {
	                            document.body.scrollTop = 0;
	                            clearInterval(timer);
	                            return true;
	                        }
	                        document.body.scrollTop -= 50;
	                    }, 1);
	                })();
	            }
	        };
	        _this.mouseEnter = function () {
	            _this.setState({
	                hover: 'ybt-hover'
	            });
	        };
	        _this.mouseLeave = function () {
	            _this.setState({
	                hover: ''
	            });
	        };
	        _this.state = {
	            hover: ''
	        };
	        window.addEventListener('scroll', function () {
	            var show = '';
	            var st = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	            if (st > 500) {
	                show = 'y-show';
	            } else {
	                show = '';
	            }
	            _this.setState({
	                show: show
	            });
	        }, false);
	        return _this;
	    }

	    _createClass(YbackTop, [{
	        key: 'render',
	        value: function render() {
	            var _state = this.state;
	            var show = _state.show;
	            var hover = _state.hover;

	            return React.createElement(
	                'div',
	                { className: 'y-back-top ' + show + ' ' + hover, onMouseEnter: this.mouseEnter, onMouseLeave: this.mouseLeave, onClick: this.toTop },
	                React.createElement('i', { className: 'fa fa-angle-up' }),
	                React.createElement(
	                    'span',
	                    null,
	                    '返回顶部'
	                )
	            );
	        }
	    }]);

	    return YbackTop;
	}(React.Component);

	exports.default = YbackTop;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	var _eventEmitter = __webpack_require__(5);

	var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Ynotify = function (_React$Component) {
	    _inherits(Ynotify, _React$Component);

	    function Ynotify(props) {
	        _classCallCheck(this, Ynotify);

	        var _this = _possibleConstructorReturn(this, (Ynotify.__proto__ || Object.getPrototypeOf(Ynotify)).call(this, props));

	        var notify = _this.props.notify;

	        _this.timer = 0;
	        _this.state = {
	            notify: notify[3]
	        };
	        return _this;
	    }

	    _createClass(Ynotify, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            var self = this,
	                currentNotify = {};
	            _eventEmitter2.default.subscribe('subNotify', function (val) {
	                _this2.props.notify.map(function (v, k) {
	                    if (v.class.indexOf(val) != -1) {
	                        currentNotify = v;
	                    }
	                });
	                clearTimeout(_this2.timer);
	                self.setState({
	                    notify: currentNotify,
	                    yShow: 'y-show'
	                });
	                _this2.timer = setTimeout(function () {
	                    self.setState({
	                        yShow: ''
	                    });
	                }, 3000);
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearTimeout(this.timer);
	            _eventEmitter2.default.unSubscribe('subNotify');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state;
	            var notify = _state.notify;
	            var yShow = _state.yShow;

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    { className: 'y-notification ' + yShow + ' ' + notify.class },
	                    React.createElement('i', { className: notify.icon }),
	                    React.createElement(
	                        'span',
	                        null,
	                        notify.txt
	                    )
	                )
	            );
	        }
	    }]);

	    return Ynotify;
	}(React.Component);

	exports.default = Ynotify;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var EventEmitter = {
	    _events: {},
	    dispatch: function dispatch(event, data) {
	        if (!this._events[event]) {
	            return; //没有监听事件
	        }
	        for (var i = 0; i < this._events[event].length; i++) {
	            this._events[event][i](data);
	        }
	    },
	    subscribe: function subscribe(event, callback) {
	        if (!this._events[event]) {
	            this._events[event] = []; //创建新事件数组
	        }
	        this._events[event].push(callback);
	    },
	    unSubscribe: function unSubscribe(event) {
	        if (this._events && this._events[event]) {
	            delete this._events[event]; //事件解绑
	            console.log('解绑成功！');
	        }
	    }
	};
	exports.default = EventEmitter;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	var _reactRouter = __webpack_require__(7);

	var _tools = __webpack_require__(8);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var smallScreen = function smallScreen() {
	    clearTimeout(timer);
	    if (document.body.clientWidth < 992) {
	        (0, _tools.addClass)(document.body, 'y-sidebar-sm y-collapse');
	    } else {
	        (0, _tools.removeClass)(document.body, 'y-sidebar-sm y-collapse');
	    }
	},
	    timer = 0;
	timer = setTimeout(smallScreen, 350);
	window.addEventListener('resize', function () {
	    timer = setTimeout(smallScreen, 350);
	});

	var Ysidebar = function (_React$Component) {
	    _inherits(Ysidebar, _React$Component);

	    function Ysidebar(props) {
	        _classCallCheck(this, Ysidebar);

	        var _this = _possibleConstructorReturn(this, (Ysidebar.__proto__ || Object.getPrototypeOf(Ysidebar)).call(this, props));

	        _this.firstMenuClick = function (v, k) {
	            var newMenu = _this.state.menu;
	            var flag = !!v.subMenu;
	            if (!(0, _tools.hasClass)(document.body, 'y-collapse')) {
	                newMenu.map(function (val, key) {
	                    if (k == key) {
	                        flag ? (val.open = val.open ? '' : 'open', val.toggleSlide = {
	                            height: val.open ? val.subMenu.length * 32 + 16 : 0
	                        }) : val.selMenu = 'active';
	                    } else {
	                        flag ? (val.open = '', val.toggleSlide = {
	                            height: 0
	                        }) : (!!val.subMenu && val.subMenu.map(function (subV, subK) {
	                            subV.selected = '';
	                        }), val.selMenu = '');
	                    }
	                });
	                _this.setState({
	                    menu: newMenu
	                });
	            } else {
	                newMenu.map(function (val, key) {
	                    if (k == key) {
	                        !flag && (val.selMenu = 'active');
	                    } else {
	                        !flag && (val.subMenu.map(function (subV, subK) {
	                            subV.selected = '';
	                        }), val.selMenu = '');
	                    }
	                });
	                _this.setState({
	                    menu: newMenu
	                });
	            }
	        };
	        _this.subMenuClick = function (k, subKey) {
	            var newMenu = _this.state.menu;
	            newMenu.map(function (val, key) {
	                if (k == key) {
	                    val.selMenu = 'active';
	                    val.subMenu.map(function (sv, sk) {
	                        if (subKey == sk) {
	                            sv.selected = 'active';
	                        } else {
	                            sv.selected = '';
	                        }
	                    });
	                } else {
	                    val.selMenu = '';
	                    if (val.subMenu) {
	                        val.subMenu.map(function (sv, sk) {
	                            sv.selected = '';
	                        });
	                    }
	                }
	            });
	            _this.setState({
	                menu: newMenu
	            });
	        };
	        _this.menuMouseEnter = function (v, k) {
	            if ((0, _tools.hasClass)(document.body, 'y-collapse')) {
	                (0, _tools.addClass)(document.getElementsByClassName('y-sidebar')[0], 'open');
	                var newMenu = _this.state.menu;
	                newMenu.map(function (val, key) {
	                    if (k == key) {
	                        val.hover = 'hover';
	                    } else {
	                        val.hover = '';
	                    }
	                });
	                _this.setState({
	                    menu: newMenu
	                });
	            }
	        };
	        _this.menuMouseLeave = function (v, k) {
	            if ((0, _tools.hasClass)(document.body, 'y-collapse')) {
	                (0, _tools.removeClass)(document.getElementsByClassName('y-sidebar')[0], 'open');
	                var newMenu = _this.state.menu;
	                newMenu.map(function (val, key) {
	                    if (k == key) {
	                        val.hover = '';
	                    }
	                });
	                _this.setState({
	                    menu: newMenu
	                });
	            }
	        };
	        var menu = _this.props.menu;

	        _this.state = {
	            menu: menu
	        };
	        return _this;
	    }

	    _createClass(Ysidebar, [{
	        key: 'render',
	        value: function render() {
	            var menu = this.state.menu;

	            var that = this;
	            return React.createElement(
	                'section',
	                { className: 'y-sidebar' },
	                React.createElement(
	                    'div',
	                    { className: 'y-sidebar-wrap' },
	                    React.createElement(
	                        'div',
	                        { className: 'y-sidebar-title' },
	                        '侧边栏'
	                    ),
	                    React.createElement(
	                        'ul',
	                        { className: 'y-sidebar-l1' },
	                        menu.map(function (v, k) {
	                            return React.createElement(
	                                'li',
	                                { key: 'firstMenu' + k, className: v.open, onMouseEnter: that.menuMouseEnter.bind(that, v, k), onMouseLeave: that.menuMouseLeave.bind(that, v, k) },
	                                React.createElement(
	                                    'a',
	                                    { href: v.url, className: v.selMenu, onClick: that.firstMenuClick.bind(that, v, k) },
	                                    React.createElement('i', { className: v.leftIcon }),
	                                    React.createElement(
	                                        'p',
	                                        null,
	                                        v.title
	                                    ),
	                                    !!v.subMenu ? React.createElement('i', { className: v.rightIcon }) : ''
	                                ),
	                                !!v.subMenu && v.subMenu.length > 0 ? React.createElement(
	                                    'ul',
	                                    { className: v.hover, style: v.toggleSlide },
	                                    v.subMenu.map(function (sv, sk) {
	                                        return React.createElement(
	                                            'li',
	                                            { key: 'subMenu' + sk, onClick: that.subMenuClick.bind(that, k, sk) },
	                                            React.createElement(
	                                                _reactRouter.Link,
	                                                { to: sv.url, className: sv.selected },
	                                                React.createElement('i', { className: sv.icon }),
	                                                React.createElement(
	                                                    'span',
	                                                    null,
	                                                    sv.title
	                                                )
	                                            )
	                                        );
	                                    })
	                                ) : ''
	                            );
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return Ysidebar;
	}(React.Component);

	exports.default = Ysidebar;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var hasClass = exports.hasClass = function hasClass(target, cname) {
	    return target.className.match(new RegExp('(\\s|^)' + cname + '(\\s|$)'));
	};
	var addClass = exports.addClass = function addClass(target, cname) {
	    var nameArr = cname.split(' ');
	    nameArr.map(function (v, k) {
	        if (!!v && !hasClass(target, v)) {
	            target.className += ' ' + v;
	        }
	    });
	};
	var removeClass = exports.removeClass = function removeClass(target, cname) {
	    var nameArr = cname.split(' ');
	    nameArr.map(function (v, k) {
	        if (!!v && hasClass(target, v)) {
	            var reg = new RegExp('(\\s|^)' + v + '(\\s|$)');
	            target.className = target.className.replace(reg, '');
	        }
	    });
	};
	var toggleClass = exports.toggleClass = function toggleClass(target, cname) {
	    if (hasClass(target, cname)) {
	        removeClass(target, cname);
	    } else {
	        addClass(target, cname);
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ylist = __webpack_require__(10);

	var _ylist2 = _interopRequireDefault(_ylist);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var YrightBar = function (_Component) {
	    _inherits(YrightBar, _Component);

	    function YrightBar(props) {
	        _classCallCheck(this, YrightBar);

	        var _this = _possibleConstructorReturn(this, (YrightBar.__proto__ || Object.getPrototypeOf(YrightBar)).call(this, props));

	        _this.switchTab = function (index) {
	            var tabs = _this.state.tabs;
	            var currentTab = _this.state.currentTab;
	            tabs.map(function (v, k) {
	                v.active = '';
	                if (index == k) {
	                    v.active = 'active';
	                    currentTab = {
	                        left: 64 * k
	                    };
	                }
	            });
	            _this.setState({
	                tabs: tabs,
	                currentTab: currentTab
	            });
	        };
	        var tabs = _this.props.tabs;

	        tabs[0].active = 'active';
	        _this.state = {
	            tabs: tabs,
	            currentTab: {
	                left: 0
	            }
	        };
	        return _this;
	    }

	    _createClass(YrightBar, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var that = this;
	            var _state = this.state;
	            var tabs = _state.tabs;
	            var currentTab = _state.currentTab;

	            return _react2.default.createElement(
	                'section',
	                { className: 'right-bar' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'y-rightbar-wrap' },
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'y-tab' },
	                        tabs.map(function (v, k) {
	                            return _react2.default.createElement(
	                                'li',
	                                { key: 'tab' + k, className: v.active, onClick: that.switchTab.bind(that, k) },
	                                _react2.default.createElement('i', { className: v.tabIcon })
	                            );
	                        }),
	                        _react2.default.createElement('span', { className: 'y-tab-act', style: currentTab })
	                    ),
	                    tabs.map(function (v, k) {
	                        return _react2.default.createElement(_ylist2.default, { key: 'tabpage' + k, tab: v, list: _this2.props.tabList });
	                    })
	                )
	            );
	        }
	    }]);

	    return YrightBar;
	}(_react.Component);

	exports.default = YrightBar;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Ylist = function (_React$Component) {
	  _inherits(Ylist, _React$Component);

	  function Ylist(props) {
	    _classCallCheck(this, Ylist);

	    return _possibleConstructorReturn(this, (Ylist.__proto__ || Object.getPrototypeOf(Ylist)).call(this, props));
	  }

	  _createClass(Ylist, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var tab = _props.tab;
	      var list = _props.list;

	      return React.createElement(
	        "article",
	        { className: "y-tab-page y-lists " + tab.active },
	        React.createElement(
	          "h4",
	          { className: "y-list-title" },
	          tab.name
	        ),
	        list.map(function (v, k) {
	          return React.createElement(
	            "div",
	            { key: "list" + tab.id + k, className: "y-list" },
	            React.createElement(
	              "div",
	              { className: "y-list-left" },
	              React.createElement(
	                "div",
	                { className: "pic" },
	                v.pic
	              )
	            ),
	            React.createElement(
	              "div",
	              { className: "y-list-middle" },
	              React.createElement(
	                "div",
	                { className: "ylm-content" },
	                React.createElement(
	                  "h4",
	                  null,
	                  v.h4
	                ),
	                React.createElement(
	                  "p",
	                  null,
	                  v.p
	                )
	              )
	            ),
	            React.createElement(
	              "div",
	              { className: "y-list-right" },
	              React.createElement("i", { className: v.rightIcon })
	            )
	          );
	        })
	      );
	    }
	  }]);

	  return Ylist;
	}(React.Component);

	exports.default = Ylist;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	var _ydropdown = __webpack_require__(12);

	var _ydropdown2 = _interopRequireDefault(_ydropdown);

	var _tools = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Ynav = function (_React$Component) {
	    _inherits(Ynav, _React$Component);

	    function Ynav(props) {
	        _classCallCheck(this, Ynav);

	        var _this = _possibleConstructorReturn(this, (Ynav.__proto__ || Object.getPrototypeOf(Ynav)).call(this, props));

	        _this.dropDown = function (cur) {
	            var leftList = _this.state.leftList;
	            var rightList = _this.state.rightList;
	            leftList.map(function (v, k) {
	                if (v.name == cur) {
	                    v.open = v.open ? '' : 'open';
	                } else {
	                    v.open = '';
	                }
	            });
	            rightList.map(function (v, k) {
	                if (v.name == cur) {
	                    v.open = v.open ? '' : 'open';
	                } else {
	                    v.open = '';
	                }
	            });
	            _this.setState({
	                leftList: leftList,
	                rightList: rightList
	            });
	            (0, _tools.removeClass)(document.getElementsByClassName('right-bar')[0], 'open');
	        };
	        _this.sideBar = function () {
	            _this.setState({
	                sideBar: true
	            });
	            var body = document.body;
	            (0, _tools.toggleClass)(body, 'y-collapse');
	        };
	        _this.rightBar = function () {
	            _this.setState({
	                rightBar: true
	            });
	            (0, _tools.toggleClass)(document.getElementsByClassName('right-bar')[0], 'open');
	        };
	        _this.state = {
	            leftList: _this.props.dropList.leftList,
	            rightList: _this.props.dropList.rightList
	        };
	        window.addEventListener('click', function (e) {
	            e.stopPropagation();
	            var leftList = _this.state.leftList;
	            var rightList = _this.state.rightList;
	            leftList.map(function (v, k) {
	                v.open = '';
	            });
	            rightList.map(function (v, k) {
	                v.open = '';
	            });
	            _this.setState({
	                leftList: leftList,
	                rightList: rightList
	            });
	        });
	        return _this;
	    }

	    _createClass(Ynav, [{
	        key: 'render',
	        value: function render() {
	            var _state = this.state;
	            var leftList = _state.leftList;
	            var rightList = _state.rightList;

	            var that = this;
	            return React.createElement(
	                'header',
	                null,
	                React.createElement(
	                    'div',
	                    { className: 'y-header' },
	                    React.createElement(
	                        'section',
	                        { className: 'y-brand' },
	                        React.createElement(
	                            'a',
	                            { href: 'javascript:;', className: 'brand' },
	                            React.createElement('h4', { className: 'logo' }),
	                            ' ',
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'b',
	                                    null,
	                                    'React'
	                                ),
	                                ' UI Demo'
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'nav',
	                        { className: 'y-nav' },
	                        React.createElement(
	                            'article',
	                            { className: 'y-nav-wrap y-nav-left' },
	                            React.createElement(
	                                'ul',
	                                { className: 'y-left' },
	                                React.createElement(
	                                    'li',
	                                    { className: 'sidebar-collapse', onClick: this.sideBar },
	                                    React.createElement(
	                                        'a',
	                                        { href: 'javascript:;' },
	                                        React.createElement('i', { className: 'fa fa-outdent' })
	                                    )
	                                ),
	                                leftList.map(function (v, k) {
	                                    return React.createElement(_ydropdown2.default, { key: 'leftList' + k, name: v.name, icon: v.icon, animate: v.animate, msg: v.msg, open: v.open, items: v.items, getCur: that.dropDown });
	                                })
	                            ),
	                            React.createElement(
	                                'div',
	                                { className: 'y-search' },
	                                React.createElement('input', { type: 'text', placeholder: '搜索...' }),
	                                React.createElement('i', { className: 'fa fa-search' })
	                            )
	                        ),
	                        React.createElement(
	                            'article',
	                            { className: 'y-nav-wrap y-nav-right' },
	                            React.createElement(
	                                'ul',
	                                null,
	                                rightList.map(function (v, k) {
	                                    return React.createElement(_ydropdown2.default, { key: 'rightList' + k, name: v.name, icon: v.icon, animate: v.animate, msg: v.msg, open: v.open, items: v.items, getCur: that.dropDown });
	                                }),
	                                React.createElement(
	                                    'li',
	                                    { className: 'toggle-right-sidebar', onClick: this.rightBar },
	                                    React.createElement(
	                                        'a',
	                                        { href: 'javascript:;' },
	                                        React.createElement('i', { className: 'fa fa-hand-o-right' })
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Ynav;
	}(React.Component);

	exports.default = Ynav;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var YdropDown = function (_React$Component) {
	  _inherits(YdropDown, _React$Component);

	  function YdropDown(props) {
	    _classCallCheck(this, YdropDown);

	    var _this = _possibleConstructorReturn(this, (YdropDown.__proto__ || Object.getPrototypeOf(YdropDown)).call(this, props));

	    _this.toggleDrop = function (e) {
	      e.stopPropagation();
	      _this.props.getCur(_this.props.name);
	    };
	    return _this;
	  }

	  _createClass(YdropDown, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var name = _props.name;
	      var icon = _props.icon;
	      var animate = _props.animate;
	      var msg = _props.msg;
	      var open = _props.open;
	      var items = _props.items;

	      return React.createElement(
	        "li",
	        { className: "y-dropdown " + name + " " + open, onClick: this.toggleDrop },
	        React.createElement(
	          "a",
	          { href: "javascript:;" },
	          React.createElement("i", { className: icon }),
	          React.createElement(
	            "span",
	            { className: msg ? "y-badge" : "y-hide" },
	            msg
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "y-dropdown-menu " + (name == "theme" ? "left " : "") + ("" + animate) },
	          React.createElement(
	            "article",
	            { className: "y-lists" },
	            React.createElement(
	              "h4",
	              { className: "y-list-title" },
	              name
	            ),
	            name == 'theme' ? items.map(function (v, k) {
	              return React.createElement(
	                "div",
	                { key: name + k, className: "y-list" },
	                React.createElement(
	                  "h4",
	                  null,
	                  v
	                ),
	                React.createElement(
	                  "ul",
	                  { className: "theme-select" },
	                  React.createElement("li", null),
	                  React.createElement("li", null),
	                  React.createElement("li", null),
	                  React.createElement("li", null),
	                  React.createElement("li", null)
	                )
	              );
	            }) : items.map(function (v, k) {
	              return React.createElement(
	                "div",
	                { key: name + k, className: "y-list" },
	                React.createElement(
	                  "div",
	                  { className: "y-list-left" },
	                  React.createElement(
	                    "div",
	                    { className: "pic" },
	                    v.pic
	                  )
	                ),
	                React.createElement(
	                  "div",
	                  { className: "y-list-middle" },
	                  React.createElement(
	                    "div",
	                    { className: "ylm-content" },
	                    React.createElement(
	                      "h4",
	                      null,
	                      v.h4
	                    ),
	                    React.createElement(
	                      "p",
	                      null,
	                      v.p
	                    )
	                  )
	                ),
	                React.createElement(
	                  "div",
	                  { className: "y-list-right" },
	                  React.createElement("i", { className: "fa fa-user" })
	                )
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return YdropDown;
	}(React.Component);

	exports.default = YdropDown;

/***/ }
/******/ ])
});
;