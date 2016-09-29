(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-router"), require("echarts"));
	else if(typeof define === 'function' && define.amd)
		define("yrui", ["react", "react-router", "echarts"], factory);
	else if(typeof exports === 'object')
		exports["yrui"] = factory(require("react"), require("react-router"), require("echarts"));
	else
		root["yrui"] = factory(root["react"], root["react-router"], root["echarts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_17__) {
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
	exports.Yecharts = exports.Ypanel = exports.Ydnd = exports.Ynav = exports.YrightBar = exports.YsideBar = exports.Ynotify = exports.YbackTop = exports.YpageHeader = undefined;

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

	var _ydnd = __webpack_require__(13);

	var _ydnd2 = _interopRequireDefault(_ydnd);

	var _ypanel = __webpack_require__(15);

	var _ypanel2 = _interopRequireDefault(_ypanel);

	var _yEcharts = __webpack_require__(16);

	var _yEcharts2 = _interopRequireDefault(_yEcharts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.YpageHeader = _ypageheader2.default;
	exports.YbackTop = _ybacktop2.default;
	exports.Ynotify = _ynotify2.default;
	exports.YsideBar = _ysidebar2.default;
	exports.YrightBar = _yrightbar2.default;
	exports.Ynav = _ynav2.default;
	exports.Ydnd = _ydnd2.default;
	exports.Ypanel = _ypanel2.default;
	exports.Yecharts = _yEcharts2.default;

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
	              { className: data.level < 2 ? 'y-hide' : '' },
	              React.createElement(
	                "a",
	                { href: "javascript:;" },
	                data.subTitle
	              )
	            ),
	            React.createElement(
	              "li",
	              { className: data.level < 3 ? 'y-hide' : '' },
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
	        //scroll
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

	"use strict";

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
	    }
	  }
	};
	exports.default = EventEmitter;
	/*class subTest extends React.Component{
	  constructor(props){
	    super(props);
	  }
	  componentDidMount=()=>{
	    var self=this;
	    EventEmitter.subscribe('subTest',(val)=>{
	      console.log(val);
	    });
	  }
	  componentWillUnmount=()=>{
	    EventEmitter.unSubscribe('subTest');
	  }
	}

	class pubTest extends React.Component{
	  constructor(props){
	    super(props);
	  }
	  showNotify=(direction)=>{
	    EventEmitter.dispatch('subTest',direction);
	  }
	}*/

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

	/*const slideStyle={
	  height:0,
	  // transitionProperty:'height',
	  // transitionDuration:'.3s',
	  // transitionTimingFunction:'ease-in-out'
	};*/
	/*menu.map(function(v,k){
	  !!v.subMenu&&(v.toggleSlide=slideStyle);
	});*/
	//根据屏幕大小控制collapse
	var smallScreen = function smallScreen() {
	    clearTimeout(timer);
	    if (document.body.clientWidth < 992) {
	        (0, _tools.addClass)(document.body, 'y-sidebar-sm y-collapse');
	    } else {
	        (0, _tools.removeClass)(document.body, 'y-sidebar-sm y-collapse');
	    }
	    // mouse
	    // var subMenuItem=document.getElementsByClassName('y-sidebar-l1')[0].childNodes;
	    /*for(var i=0,l=subMenuItem.length;i<l;i++){
	      console.log(subMenuItem[i]);
	    }*/
	    /*subMenuItem[0].addEventListener('mouseenter',()=>{
	      addClass(document.getElementsByClassName('y-sidebar')[0],'open');
	      console.log(this);
	    });
	    subMenuItem[0].addEventListener('mouseleave',()=>{
	      removeClass(document.getElementsByClassName('y-sidebar')[0],'open');
	    });*/
	},
	    timer = 0;
	//...
	timer = setTimeout(smallScreen, 350);
	//...
	//resize
	window.addEventListener('resize', function () {
	    timer = setTimeout(smallScreen, 350);
	});
	// console.log(menu);

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
	                    // val.toggleSlide=cloneObj(val.toggleSlide);
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
	                _this.timer = setTimeout(function () {
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
	                }, 200);
	            }
	        };
	        _this.menuMouseLeave = function (v, k) {
	            if ((0, _tools.hasClass)(document.body, 'y-collapse')) {
	                clearTimeout(_this.timer);
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
	        _this.gotoProject = function (k) {};
	        _this.collapseList = function (id) {
	            if (id == 1) {
	                _this.setState({
	                    collapsed1: _this.state.collapsed1 ? '' : 'collapsed',
	                    icon1: _this.state.icon1 == 'plus' ? 'minus' : 'plus'
	                });
	            } else if (id == 2) {
	                _this.setState({
	                    collapsed2: _this.state.collapsed2 ? '' : 'collapsed',
	                    icon2: _this.state.icon2 == 'plus' ? 'minus' : 'plus'
	                });
	            }
	        };
	        var menu = _this.props.menu;

	        _this.timer = 0;
	        _this.state = {
	            menu: menu,
	            icon1: 'minus',
	            icon2: 'minus'
	        };
	        //resize
	        /*window.addEventListener('click',(e)=>{
	          e.stopPropagation();
	          var dropList=this.state.dropList;
	          var theme=this.state.theme;
	          dropList.map(function(v,k){
	            v.sel=false;
	            v.open='';
	          });
	          theme.sel=false;
	          theme.open='';
	          this.setState({
	            dropList:dropList,
	            theme:theme
	          });
	        });*/
	        //
	        return _this;
	    }

	    _createClass(Ysidebar, [{
	        key: 'render',
	        value: function render() {
	            var projectList = this.props.projectList;
	            var menu = this.state.menu;

	            var that = this;
	            return React.createElement(
	                'section',
	                { className: 'y-sidebar' },
	                React.createElement(
	                    'div',
	                    { className: 'y-sidebar-wrap' },
	                    React.createElement('div', { className: 'y-collapse-wrap' }),
	                    React.createElement(
	                        'div',
	                        { className: 'y-sidebar-list' },
	                        React.createElement(
	                            'div',
	                            { className: 'y-sidebar-title', onClick: this.collapseList.bind(this, '1') },
	                            React.createElement('i', { className: 'fa fa-' + this.state.icon1 }),
	                            React.createElement(
	                                'h4',
	                                null,
	                                '导航栏'
	                            )
	                        ),
	                        React.createElement(
	                            'ul',
	                            { className: 'y-sidebar-l1 ' + this.state.collapsed1 },
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
	                                        !!v.subMenu ? React.createElement('i', { className: v.rightIcon }) : React.createElement('span', null)
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
	                    ),
	                    !!projectList && projectList.length > 0 ? React.createElement(
	                        'div',
	                        { className: 'y-sidebar-list' },
	                        React.createElement(
	                            'div',
	                            { className: 'y-sidebar-title', onClick: this.collapseList.bind(this, '2') },
	                            React.createElement('i', { className: 'fa fa-' + this.state.icon2 }),
	                            React.createElement(
	                                'h4',
	                                null,
	                                '项目列表'
	                            )
	                        ),
	                        React.createElement(
	                            'ul',
	                            { className: 'y-sidebar-l1 ' + this.state.collapsed2 },
	                            projectList.map(function (v, k) {
	                                return React.createElement(
	                                    'li',
	                                    { key: 'project' + k },
	                                    React.createElement(
	                                        'a',
	                                        { href: v.url, onClick: that.gotoProject.bind(that, k) },
	                                        React.createElement('i', { className: v.icon }),
	                                        React.createElement(
	                                            'p',
	                                            null,
	                                            v.title
	                                        ),
	                                        React.createElement('span', null)
	                                    )
	                                );
	                            })
	                        )
	                    ) : ''
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
	var resetObj = exports.resetObj = function resetObj(obj) {
	    var keys = Object.keys(obj);
	    for (var i = 0, j = keys.length; i < j; i++) {
	        obj[keys[i]] = '';
	    }
	    return obj;
	};
	//对象赋值 深拷贝
	var cloneObj = exports.cloneObj = function cloneObj(obj) {
	    var str = '',
	        newobj = obj.constructor === Array ? [] : {};
	    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	        return;
	    } else {
	        for (var i in obj) {
	            newobj[i] = _typeof(obj[i]) === 'object' ? cloneObj(obj[i]) : obj[i];
	        }
	    }
	    return newobj;
	};
	/*//返回顶部
	export const backTop=(st)=>{
	  let timer=setInterval(function(){
	    if(st<=0){
	      st=0;
	      clearInterval(timer);
	      return;
	    }
	    st-=50;
	  },1);
	};*/
	//获取当前页面
	var getCurrent = exports.getCurrent = function getCurrent(obj, str, data) {
	    if (str) {
	        str = str[1];
	        if (str === '/') str = '/#/';
	        obj.map(function (v, k) {
	            if (v.subMenu && v.subMenu.length > 0) {
	                var flag = false;
	                v.subMenu.map(function (sv, sk) {
	                    if (sv.url == str) {
	                        data.subTitle = sv.title;
	                        flag = true;
	                        data.level = 2;
	                        sv.selected = 'active';
	                    } else {
	                        sv.selected = '';
	                    }
	                });
	                flag ? (data.title = v.title, v.selMenu = 'active', v.open = 'open', v.toggleSlide = {
	                    height: v.subMenu.length * 32 + 16
	                }) : (v.selMenu = '', v.open = '', v.toggleSlide = {
	                    height: 0
	                });
	            } else {
	                if (v.url == str) {
	                    data.title = v.title;
	                    data.subTitle = '';
	                    data.level = 1;
	                    v.selMenu = 'active';
	                } else {
	                    v.selMenu = '';
	                    !!v.subMenu && v.subMenu.map(function (sv, sk) {
	                        sv.selected = '';
	                    });
	                }
	            }
	        });
	    }
	    return obj;
	};
	//fullscreen
	var fs = exports.fs = function fs(element) {
	    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
	        if (element.requestFullscreen) {
	            element.requestFullscreen();
	        } else if (element.msRequestFullscreen) {
	            element.msRequestFullscreen();
	        } else if (element.mozRequestFullscreen) {
	            element.mozRequestFullscreen();
	        } else if (element.webkitRequestFullscreen) {
	            element.webkitRequestFullscreen();
	        }
	    } else {
	        if (document.exitFullscreen) {
	            document.exitFullscreen();
	        } else if (document.webkitExitFullscreen) {
	            document.webkitExitFullscreen();
	        }
	    }
	};
	/*let ele=document.getElementsByClassName('fs')[0];
	fs(ele);*/

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
	                            return (
	                                // 注意that的使用!!!
	                                _react2.default.createElement(
	                                    'li',
	                                    { key: 'tab' + k, className: v.active, onClick: that.switchTab.bind(that, k) },
	                                    _react2.default.createElement('i', { className: v.tabIcon })
	                                )
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
	            rightList: _this.props.dropList.rightList,
	            searchFlag: _this.props.dropList.searchFlag
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
	            var searchFlag = _state.searchFlag;

	            var that = this;
	            return React.createElement(
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
	                    searchFlag ? React.createElement(
	                        'div',
	                        { className: 'y-search' },
	                        React.createElement('input', { type: 'text', placeholder: '搜索...' }),
	                        React.createElement('i', { className: 'fa fa-search' })
	                    ) : ''
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
	            );
	        }
	    }]);

	    return Ynav;
	}(React.Component);

	exports.default = Ynav;

/***/ },
/* 12 */
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

	var YdropDown = function (_React$Component) {
	  _inherits(YdropDown, _React$Component);

	  function YdropDown(props) {
	    _classCallCheck(this, YdropDown);

	    var _this = _possibleConstructorReturn(this, (YdropDown.__proto__ || Object.getPrototypeOf(YdropDown)).call(this, props));

	    _this.toggleDrop = function (e) {
	      e.stopPropagation();
	      _this.props.getCur(_this.props.name);
	      /*this.setState({
	        open:this.state.open?'':'open',
	      });*/
	    };
	    /*this.state=({
	      open:''
	    });*/
	    return _this;
	  }

	  _createClass(YdropDown, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var name = _props.name;
	      var icon = _props.icon;
	      var animate = _props.animate;
	      var msg = _props.msg;
	      var open = _props.open;
	      var items = _props.items;

	      return React.createElement(
	        'li',
	        { className: 'y-dropdown ' + name + ' ' + open, onClick: this.toggleDrop },
	        name == 'profile' ? React.createElement(
	          'a',
	          { href: 'javascript:;' },
	          React.createElement(
	            'span',
	            { className: 'username' },
	            'admin'
	          ),
	          React.createElement('img', { src: icon })
	        ) : React.createElement(
	          'a',
	          { href: 'javascript:;' },
	          React.createElement('i', { className: icon }),
	          React.createElement(
	            'span',
	            { className: msg ? 'y-badge' : 'y-hide' },
	            msg
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'y-dropdown-menu ' + (name == 'theme' ? 'left ' : '') + ('' + animate) },
	          React.createElement(
	            'article',
	            { className: 'y-lists' },
	            React.createElement(
	              'h4',
	              { className: 'y-list-title' },
	              name
	            ),
	            name == 'theme' ? items.map(function (v, k) {
	              return React.createElement(
	                'div',
	                { key: name + k, className: 'y-list' },
	                React.createElement(
	                  'h4',
	                  null,
	                  v
	                ),
	                React.createElement(
	                  'ul',
	                  { className: 'theme-select' },
	                  React.createElement('li', null),
	                  React.createElement('li', null),
	                  React.createElement('li', null),
	                  React.createElement('li', null),
	                  React.createElement('li', null)
	                )
	              );
	            }) : items.map(function (v, k) {
	              return React.createElement(
	                'div',
	                { key: name + k, className: 'y-list' },
	                React.createElement(
	                  'div',
	                  { className: 'y-list-left' },
	                  React.createElement(
	                    'div',
	                    { className: 'pic' },
	                    v.pic
	                  )
	                ),
	                React.createElement(
	                  'div',
	                  { className: 'y-list-middle' },
	                  React.createElement(
	                    'div',
	                    { className: 'ylm-content' },
	                    React.createElement(
	                      'h4',
	                      null,
	                      v.h4
	                    ),
	                    React.createElement(
	                      'p',
	                      null,
	                      v.p
	                    )
	                  )
	                ),
	                React.createElement(
	                  'div',
	                  { className: 'y-list-right' },
	                  React.createElement('i', { className: 'fa fa-user' })
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

/***/ },
/* 13 */
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

	var Ydnd = function (_React$Component) {
	    _inherits(Ydnd, _React$Component);

	    function Ydnd(props) {
	        _classCallCheck(this, Ydnd);

	        return _possibleConstructorReturn(this, (Ydnd.__proto__ || Object.getPrototypeOf(Ydnd)).call(this, props));
	    }

	    _createClass(Ydnd, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            __webpack_require__(14);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { ref: 'ydnd', className: 'ydnd' },
	                this.props.children
	            );
	        }
	    }]);

	    return Ydnd;
	}(React.Component);

	exports.default = Ydnd;

	;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	/*ydnd*/

	/*`blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu`.split(' ').map(function(v,k){
		// var str=str.replace(/\r\n/ig,','); 
	});*/

	// start className
	var hasClass = function hasClass(target, cname) {
		return target.className.match(new RegExp('(\\s|^)' + cname + '(\\s|$)'));
	};
	var addClass = function addClass(target, cname) {
		var nameArr = cname.split(' ');
		nameArr.map(function (v, k) {
			if (!!v && !hasClass(target, v)) {
				target.className += ' ' + v;
			}
		});
	};
	var removeClass = function removeClass(target, cname) {
		var nameArr = cname.split(' ');
		nameArr.map(function (v, k) {
			if (!!v && hasClass(target, v)) {
				var reg = new RegExp('(\\s|^)' + v + '(\\s|$)');
				target.className = target.className.replace(reg, '');
			}
		});
	};
	// end className

	// insertAfter
	var insertAfter = function insertAfter(newEle, oldEle) {
		var parent = oldEle.parentNode;
		parent.insertBefore(newEle, oldEle.nextSibling);
	};
	//create droparea
	var createDroparea = function createDroparea(ele) {
		var droparea = document.createElement('div');
		droparea.className = 'droparea';
		droparea.style.width = '100%';
		droparea.style.height = ele.offsetHeight + 'px';

		droparea.style.border = '2px dashed #bbb';
		droparea.style.position = 'relative';
		droparea.style.backgroundColor = '#f8f8f8';

		return droparea;
	};
	//
	var x, y, ele;
	var move = function move(ev) {
		var ev = ev || window.event;
		// var ele=ev.target||ev.srcElement;

		addClass(ele, 'ydragging');
		//
		ele.parentNode.style.width = ele.offsetWidth + 'px';
		ele.parentNode.style.height = ele.offsetHeight + 'px';
		// remove oldarea
		var oldarea = document.getElementsByClassName('droparea')[0];
		oldarea && oldarea.parentNode.removeChild(oldarea);
		// create droparea
		var droparea = createDroparea(ele);
		insertAfter(droparea, ele);
		//
		ele.parentNode.style.width = 'auto';
		ele.parentNode.style.height = 'auto';
		//
		ele.style.transition = 'none';
		ele.style.width = ele.offsetWidth + 'px';
		ele.style.height = ele.offsetHeight + 'px';
		ele.style.position = 'absolute';
		ele.style.zIndex = '99999';
		//
		var _x = ev.pageX - x,
		    _y = ev.pageY - y;
		/*var w=document.body.clientWidth-ele.offsetWidth,
	      h=document.body.clientHeight-ele.offsetHeight;
	  _x=_x<0?0:_x>w?w:_x;
	  _y=_y<0?0:_y>h?h:_y;*/
		ele.style.left = _x + 'px';
		ele.style.top = _y + 'px';

		// dragarea
		var drag_r = _x + ele.offsetWidth;
		var drag_b = _y + ele.offsetHeight;
		var drag_center = _x + ele.offsetWidth / 2;
		var drag_middle = _y + ele.offsetHeight / 2;
		for (var i = 0, l = ydrop.length; i < l; i++) {
			//
			if (hasClass(ydrop[i], 'ydragging')) {
				continue;
			}
			var drop_l = ydrop[i].offsetLeft;
			var drop_t = ydrop[i].offsetTop;
			var drop_r = ydrop[i].offsetLeft + ydrop[i].offsetWidth;
			var drop_b = ydrop[i].offsetTop + ydrop[i].offsetHeight;
			var drop_center = ydrop[i].offsetLeft + ydrop[i].offsetWidth / 2;
			var drop_middle = ydrop[i].offsetTop + ydrop[i].offsetHeight / 2;
			//
			if (drag_center > drop_l && drag_center < drop_r && drag_middle > drop_t && drag_middle < drop_b || drop_center > _x && drop_center < drag_r && drop_middle > _y && drop_middle < drag_b) {
				// remove oldarea
				var oldarea = document.getElementsByClassName('droparea')[0];
				oldarea && oldarea.parentNode.removeChild(oldarea);
				// create droparea
				if (drag_middle > drop_middle) {
					insertAfter(droparea, ydrop[i]);
				} else {
					ydrop[i].parentNode.insertBefore(droparea, ydrop[i]);
				}
				//
				break;
			} else {
				//
			}
		};
	};
	var mousedown = function mousedown(e) {
		var e = e || window.event;
		ele = e.target || e.srcElement;
		if (e.button == 0) {
			//阻止右键点击 or e.which==1;
			if (hasClass(ele, 'ydrag')) {
				// e.preventDefault();//阻止默认事件
				// e.stopPropagation();//阻止事件冒泡
				//
				ele = ele.parentNode;
				// 数据缓存
				// var dropData;
				//
				x = e.pageX - ele.offsetLeft;
				y = e.pageY - ele.offsetTop;

				document.addEventListener('mousemove', move, false);
			}
		}
	};
	var mouseup = function mouseup(e) {
		/*var e=e||window.event;
	 var ele=e.target||e.srcElement;*/
		// document.removeEventListener('mousedown',mousedown,false);
		document.removeEventListener('mousemove', move, false);
		// console.log(ele.attributes);
		//
		var droparea = document.getElementsByClassName('droparea')[0];
		if (droparea) {
			//
			removeClass(ele, 'ydragging');
			//
			ele.style.transition = 'all .3s ease-in-out'; // 放在定位top,left上面 y??
			ele.style.top = droparea.offsetTop + 'px';
			ele.style.left = droparea.offsetLeft + 'px';
			//
			setTimeout(function () {
				var newNode = ele.cloneNode(true);
				droparea.parentNode.replaceChild(newNode, droparea);
				//
				newNode.style.position = 'relative';
				newNode.style.left = 0;
				newNode.style.top = 0;
				newNode.style.width = '100%';
				newNode.style.zIndex = 'auto';
				//
				ele.parentNode.removeChild(ele);
			}, 308);
		} else {}
		//

		//
	};

	document.addEventListener('mouseup', mouseup, false);

	document.addEventListener('mousedown', mousedown, false);

	var ydnd = document.getElementsByClassName('ydnd');
	var ydrop = document.getElementsByClassName('ydrop');
	var ydrag = document.getElementsByClassName('ydrag');
	for (var i = 0, l = ydrag.length; i < l; i++) {
		ydrop[i].style.position = 'relative';
		ydrop[i].style.width = '100%';
		// ydrop[i].style.transition='none';
		ydrag[i].style.cursor = 'move';
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	var _tools = __webpack_require__(8);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Ypanel = function (_React$Component) {
	    _inherits(Ypanel, _React$Component);

	    function Ypanel(props) {
	        _classCallCheck(this, Ypanel);

	        var _this = _possibleConstructorReturn(this, (Ypanel.__proto__ || Object.getPrototypeOf(Ypanel)).call(this, props));

	        _this.selectTheme = function () {
	            _this.setState({
	                current: _this.state.current ? '' : 'y-show'
	            });
	        };
	        _this.changeTheme = function (color) {
	            _this.setState({
	                current: _this.state.current ? '' : 'y-show',
	                changeTo: color
	            });
	        };
	        _this.collapse = function () {
	            _this.setState({
	                collapse: _this.state.collapse ? 0 : 200,
	                collapseIcon: _this.state.collapseIcon == 'minus' ? 'plus' : 'minus'
	            });
	        };
	        _this.fullScreen = function () {
	            (0, _tools.fs)(_this.refs.fs);
	            _this.setState({
	                fsIcon: _this.state.fsIcon == 'expand' ? 'compress' : 'expand'
	            });
	        };
	        _this.closeItem = function () {
	            _this.setState({});
	        };
	        _this.switchChk = function () {
	            _this.setState({
	                checkBox: !_this.state.checkBox
	            });
	        };
	        _this.loading = function () {
	            var load = 0,
	                that = _this;
	            clearTimeout(load);
	            _this.setState({
	                isLoading: true
	            });
	            load = setTimeout(function () {
	                that.setState({
	                    isLoading: false
	                });
	            }, 3000);
	        };
	        _this.state = {
	            current: '',
	            changeTo: _this.props.defaultTheme || 'default',
	            collapse: 200,
	            collapseIcon: 'minus',
	            fsIcon: 'expand',
	            loadingIcon: 'refresh',
	            checkBox: true,
	            canDrag: _this.props.canDrag ? 'ydrag' : ''
	        };
	        return _this;
	    }

	    _createClass(Ypanel, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state;
	            var current = _state.current;
	            var changeTo = _state.changeTo;
	            var collapse = _state.collapse;
	            var collapseIcon = _state.collapseIcon;
	            var fsIcon = _state.fsIcon;
	            var loadingIcon = _state.loadingIcon;
	            var isLoading = _state.isLoading;
	            var checkBox = _state.checkBox;
	            var canDrag = _state.canDrag;
	            var _props = this.props;
	            var panelTitle = _props.panelTitle;
	            var pCheckbox = _props.pCheckbox;
	            var pSelTheme = _props.pSelTheme;
	            var pRefrash = _props.pRefrash;
	            var pCollapse = _props.pCollapse;
	            var pFullscreen = _props.pFullscreen;
	            var pClose = _props.pClose;

	            return React.createElement(
	                'div',
	                { ref: 'fs', className: 'y-panel ydrop ' + changeTo },
	                React.createElement(
	                    'div',
	                    { className: 'y-panel-header ' + canDrag },
	                    React.createElement(
	                        'h4',
	                        null,
	                        panelTitle
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'plugins' },
	                        pCheckbox ? React.createElement(
	                            'div',
	                            null,
	                            React.createElement('input', { type: 'checkbox', className: 'y-switch', checked: checkBox, onChange: this.switchChk })
	                        ) : '',
	                        pSelTheme ? React.createElement(
	                            'div',
	                            { className: 'select-theme' },
	                            React.createElement('i', { onClick: this.selectTheme }),
	                            React.createElement(
	                                'ul',
	                                { className: 'fade-in-down ' + current },
	                                React.createElement('li', { className: 'bg-default', onClick: this.changeTheme.bind(this, 'default') }),
	                                React.createElement('li', { className: 'bg-success', onClick: this.changeTheme.bind(this, 'success') }),
	                                React.createElement('li', { className: 'bg-info', onClick: this.changeTheme.bind(this, 'info') }),
	                                React.createElement('li', { className: 'bg-warning', onClick: this.changeTheme.bind(this, 'warning') }),
	                                React.createElement('li', { className: 'bg-danger', onClick: this.changeTheme.bind(this, 'danger') })
	                            )
	                        ) : '',
	                        pRefrash ? React.createElement(
	                            'div',
	                            null,
	                            React.createElement('i', { className: 'fa fa-' + loadingIcon, onClick: this.loading })
	                        ) : '',
	                        pCollapse ? React.createElement(
	                            'div',
	                            null,
	                            React.createElement('i', { className: 'fa fa-' + collapseIcon, onClick: this.collapse })
	                        ) : '',
	                        pFullscreen ? React.createElement(
	                            'div',
	                            null,
	                            React.createElement('i', { className: 'fa fa-' + fsIcon, onClick: this.fullScreen })
	                        ) : '',
	                        pClose ? React.createElement(
	                            'div',
	                            null,
	                            React.createElement('i', { className: 'fa fa-times', onClick: this.closeItem })
	                        ) : ''
	                    )
	                ),
	                React.createElement('div', { className: 'y-panel-body ' + (checkBox ? 'bg-info' : 'bg-default'), style: { height: collapse } }),
	                isLoading ? React.createElement(
	                    'div',
	                    { className: 'y-loader' },
	                    React.createElement('figure', { className: 'y-loading' })
	                ) : ''
	            );
	        }
	    }]);

	    return Ypanel;
	}(React.Component);

	exports.default = Ypanel;

/***/ },
/* 16 */
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

	var echarts = __webpack_require__(17);

	var Yecharts = function (_React$Component) {
	    _inherits(Yecharts, _React$Component);

	    function Yecharts(props) {
	        _classCallCheck(this, Yecharts);

	        var _this = _possibleConstructorReturn(this, (Yecharts.__proto__ || Object.getPrototypeOf(Yecharts)).call(this, props));

	        _this.renderEchartDom = function () {
	            var echartObj = _this.getEchartsInstance();
	            echartObj.setOption(_this.props.option);
	            if (_this.props.showLoading) {
	                echartObj.showLoading();
	            } else {
	                echartObj.hideLoading();
	            }
	            return echartObj;
	        };
	        _this.getEchartsInstance = function () {
	            return echarts.getInstanceByDom(_this.refs.echartsDom) || echarts.init(_this.refs.echartsDom, _this.props.theme);
	        };
	        _this.yresize;
	        return _this;
	    }

	    _createClass(Yecharts, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var echartObj = this.renderEchartDom();
	            var onEvents = this.props.onEvents || [];

	            var _loop = function _loop(eventName) {
	                if (typeof eventName === 'string' && typeof onEvents[eventName] === 'function') {
	                    echartObj.on(eventName, function (param) {
	                        onEvents[eventName](param, echartObj);
	                    });
	                }
	            };

	            for (var eventName in onEvents) {
	                _loop(eventName);
	            }
	            if (typeof this.props.onChartReady === 'function') {
	                this.props.onChartReady(echartObj);
	            }
	            this.yresize = function () {
	                echartObj.resize();
	            };
	            window.addEventListener('resize', this.yresize, false);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.renderEchartDom();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            echarts.dispose(this.refs.echartsDom);
	            window.removeEventListener('resize', this.yresize, false);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var style = this.props.style || { height: '300px' };
	            return React.createElement('div', { ref: 'echartsDom', className: this.props.className, style: style });
	        }
	    }]);

	    return Yecharts;
	}(React.Component);

	exports.default = Yecharts;

	Yecharts.propTypes = {
	    option: React.PropTypes.object.isRequired,
	    style: React.PropTypes.object,
	    className: React.PropTypes.string,
	    theme: React.PropTypes.string,
	    onChartReady: React.PropTypes.func,
	    showLoading: React.PropTypes.bool,
	    onEvents: React.PropTypes.object
	};
	;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }
/******/ ])
});
;