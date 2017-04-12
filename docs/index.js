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

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _reactFastclick = __webpack_require__(4);
	
	var _reactFastclick2 = _interopRequireDefault(_reactFastclick);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactFastclick2.default)();
	
	window.onload = function () {
	  ReactDOM.render(React.createElement(_index.App, null), document.getElementById('wrapper'));
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _App = __webpack_require__(2);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.App = _App2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.state = {
	      display: false
	    };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var viewCount = 0;
	      var zIndex = 1000;
	      var paddingTop = 330;
	      return React.createElement(
	        'div',
	        { style: { width: 300, height: zIndex, position: 'relative' } },
	        React.createElement(
	          'div',
	          { className: 'box', style: { zIndex: zIndex, paddingTop: paddingTop } },
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'button',
	              { className: 'btn btn-default', onClick: function onClick(e) {
	                  return _this2.setState({ display: 'select' });
	                } },
	              'push'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'form-group' },
	            React.createElement('input', { type: 'text', className: 'form-control' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'form-group' },
	            React.createElement('input', { type: 'text', className: 'form-control' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'form-group' },
	            React.createElement('input', { type: 'text', className: 'form-control' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'form-group' },
	            React.createElement('input', { type: 'text', className: 'form-control' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'form-group' },
	            React.createElement('input', { type: 'text', className: 'form-control' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'form-group' },
	            React.createElement('input', { type: 'text', className: 'form-control' })
	          )
	        ),
	        function () {
	          ++viewCount;
	          if (_this2.state.display == 'select') {
	            return React.createElement(
	              'div',
	              { className: 'box', style: { zIndex: zIndex + viewCount, paddingTop: paddingTop - 30 * viewCount } },
	              React.createElement(
	                'div',
	                null,
	                React.createElement(
	                  'button',
	                  { className: 'btn btn-default', onClick: function onClick(e) {
	                      return _this2.setState({ display: 'textarea' });
	                    } },
	                  'push'
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'select',
	                  { className: 'form-control' },
	                  React.createElement(
	                    'option',
	                    null,
	                    '1st-1'
	                  ),
	                  React.createElement(
	                    'option',
	                    null,
	                    '1st-2'
	                  ),
	                  React.createElement(
	                    'option',
	                    null,
	                    '1st-3'
	                  )
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'select',
	                  { className: 'form-control' },
	                  React.createElement(
	                    'option',
	                    null,
	                    '2nd-1'
	                  ),
	                  React.createElement(
	                    'option',
	                    null,
	                    '2nd-2'
	                  ),
	                  React.createElement(
	                    'option',
	                    null,
	                    '2nd-3'
	                  )
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'select',
	                  { className: 'form-control' },
	                  React.createElement(
	                    'option',
	                    null,
	                    '3rd-1'
	                  ),
	                  React.createElement(
	                    'option',
	                    null,
	                    '3rd-2'
	                  ),
	                  React.createElement(
	                    'option',
	                    null,
	                    '3rd-3'
	                  )
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'select',
	                  { className: 'form-control' },
	                  React.createElement(
	                    'option',
	                    null,
	                    '4th-1'
	                  ),
	                  React.createElement(
	                    'option',
	                    null,
	                    '4th-2'
	                  ),
	                  React.createElement(
	                    'option',
	                    null,
	                    '4th-3'
	                  )
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'select',
	                  { className: 'form-control' },
	                  React.createElement(
	                    'option',
	                    null,
	                    '5th-1'
	                  ),
	                  React.createElement(
	                    'option',
	                    null,
	                    '5th-2'
	                  ),
	                  React.createElement(
	                    'option',
	                    null,
	                    '5th-3'
	                  )
	                )
	              ),
	              React.createElement(
	                'div',
	                null,
	                React.createElement(
	                  'button',
	                  { className: 'btn btn-default', onClick: function onClick(e) {
	                      return _this2.setState({ display: 0 });
	                    } },
	                  'back'
	                )
	              )
	            );
	          }
	        }(),
	        function () {
	          ++viewCount;
	          if (_this2.state.display == 'textarea') {
	            return React.createElement(
	              'div',
	              { className: 'box', style: { zIndex: zIndex + viewCount, paddingTop: paddingTop - 30 * viewCount } },
	              React.createElement(
	                'div',
	                null,
	                React.createElement(
	                  'button',
	                  { className: 'btn btn-default', onClick: function onClick(e) {
	                      return _this2.setState({ display: 'checkbox' });
	                    } },
	                  'push'
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement('textarea', { className: 'form-control', style: { width: '100%' } })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement('textarea', { className: 'form-control', style: { width: '100%' } })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement('textarea', { className: 'form-control', style: { width: '100%' } })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement('textarea', { className: 'form-control', style: { width: '100%' } })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement('textarea', { className: 'form-control', style: { width: '100%' } })
	              ),
	              React.createElement(
	                'div',
	                null,
	                React.createElement(
	                  'button',
	                  { className: 'btn btn-default', onClick: function onClick(e) {
	                      return _this2.setState({ display: 0 });
	                    } },
	                  'back'
	                )
	              )
	            );
	          }
	        }(),
	        function () {
	          ++viewCount;
	          if (_this2.state.display == 'checkbox') {
	            return React.createElement(
	              'div',
	              { className: 'box', style: { zIndex: zIndex + viewCount, paddingTop: paddingTop - 30 * viewCount } },
	              React.createElement(
	                'div',
	                null,
	                React.createElement(
	                  'button',
	                  { className: 'btn btn-default', onClick: function onClick(e) {
	                      return _this2.setState({ display: 'radio' });
	                    } },
	                  'push'
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'div',
	                  { style: { lineheight: 0 } },
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' })
	                ),
	                React.createElement(
	                  'div',
	                  { style: { lineheight: 0 } },
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' })
	                ),
	                React.createElement(
	                  'div',
	                  { style: { lineheight: 0 } },
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' }),
	                  React.createElement('input', { type: 'checkbox' })
	                )
	              ),
	              React.createElement(
	                'div',
	                null,
	                React.createElement(
	                  'button',
	                  { className: 'btn btn-default', onClick: function onClick(e) {
	                      return _this2.setState({ display: 0 });
	                    } },
	                  'back'
	                )
	              )
	            );
	          }
	        }(),
	        function () {
	          ++viewCount;
	          if (_this2.state.display == 'radio') {
	            return React.createElement(
	              'div',
	              { className: 'box', style: { zIndex: zIndex + viewCount, paddingTop: paddingTop - 30 * viewCount } },
	              React.createElement(
	                'div',
	                null,
	                React.createElement(
	                  'button',
	                  { className: 'btn btn-default', onClick: function onClick(e) {
	                      return _this2.setState({ display: 'label' });
	                    } },
	                  'push'
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'div',
	                  { style: { lineheight: 0 } },
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' })
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'div',
	                  { style: { lineheight: 0 } },
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' })
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'div',
	                  { style: { lineheight: 0 } },
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' })
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'div',
	                  { style: { lineheight: 0 } },
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' }),
	                  React.createElement('input', { type: 'radio' })
	                )
	              ),
	              React.createElement(
	                'div',
	                null,
	                React.createElement(
	                  'button',
	                  { className: 'btn btn-default', onClick: function onClick(e) {
	                      return _this2.setState({ display: 0 });
	                    } },
	                  'back'
	                )
	              )
	            );
	          }
	        }(),
	        function () {
	          ++viewCount;
	          if (_this2.state.display == 'label') {
	            return React.createElement(
	              'div',
	              { className: 'box', style: { zIndex: zIndex + viewCount, paddingTop: paddingTop - 30 * viewCount } },
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'div',
	                  { style: { lineheight: 0 } },
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  )
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'div',
	                  { style: { lineheight: 0 } },
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  )
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'div',
	                  { style: { lineheight: 0 } },
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  )
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'div',
	                  { style: { lineheight: 0 } },
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  ),
	                  React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', { type: 'checkbox' })
	                  )
	                )
	              ),
	              React.createElement(
	                'div',
	                null,
	                React.createElement(
	                  'button',
	                  { className: 'btn btn-default', onClick: function onClick(e) {
	                      return _this2.setState({ display: 0 });
	                    } },
	                  'back'
	                )
	              )
	            );
	          }
	        }()
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	exports.default = App;
	
	
	App.propTypes = {};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function () {
	  var getReactFCInitializer = function getReactFCInitializer(React) {
	    return function initializeReactFastclick() {
	      var originalCreateElement = React.createElement;
	
	      // Moved if Math.abs(downX - upX) > MOVE_THRESHOLD;
	      var MOVE_THRESHOLD = 8;
	      var TOUCH_DELAY = 1000;
	
	      var touchKeysToStore = ['clientX', 'clientY', 'pageX', 'pageY', 'screenX', 'screenY', 'radiusX', 'radiusY'];
	
	      var touchEvents = {
	        downPos: {},
	        lastPos: {}
	      };
	
	      var isDisabled = function isDisabled(element) {
	        if (!element) {
	          return false;
	        }
	        var disabled = element.getAttribute('disabled');
	
	        return disabled !== false && disabled !== null;
	      };
	
	      var focus = function focus(event, target) {
	        var myTarget = target || event.currentTarget;
	
	        if (!myTarget || isDisabled(myTarget)) {
	          return;
	        }
	
	        myTarget.focus();
	      };
	
	      var handleType = {
	        input: function input(event) {
	          if (event.currentTarget.getAttribute('type') == 'text') {
	            event.preventDefault();
	          }
	          focus(event);
	          event.stopPropagation();
	        },
	        textarea: function textarea(event) {
	          event.preventDefault();
	          focus(event);
	          event.stopPropagation();
	        },
	        select: function select(event) {
	          event.preventDefault();
	          focus(event);
	          event.stopPropagation();
	        },
	        label: function label(event) {
	          var input;
	
	          var forTarget = event.currentTarget.getAttribute('for');
	
	          if (forTarget) {
	            input = document.getElementById(forTarget);
	          } else {
	            input = event.currentTarget.querySelectorAll('input, textarea, select')[0];
	          }
	
	          if (input) {
	            focus(event, input);
	          }
	        }
	      };
	
	      var fakeClickEvent = function fakeClickEvent(event) {
	        if (typeof event.persist === 'function') {
	          event.persist();
	        }
	
	        event.fastclick = true;
	        event.type = 'click';
	        event.button = 0;
	      };
	
	      var copyTouchKeys = function copyTouchKeys(touch, target) {
	        if (typeof target.persist === 'function') {
	          target.persist();
	        }
	
	        if (touch) {
	          for (var i = 0; i < touchKeysToStore.length; i += 1) {
	            var key = touchKeysToStore[i];
	            target[key] = touch[key];
	          }
	        }
	      };
	
	      var noTouchHappened = function noTouchHappened() {
	        return !touchEvents.touched && (!touchEvents.lastTouchDate || new Date().getTime() > touchEvents.lastTouchDate + TOUCH_DELAY);
	      };
	
	      var invalidateIfMoreThanOneTouch = function invalidateIfMoreThanOneTouch(event) {
	        touchEvents.invalid = event.touches && event.touches.length > 1 || touchEvents.invalid;
	      };
	
	      var onMouseEvent = function onMouseEvent(callback, event) {
	        // Prevent any mouse events if we touched recently
	        if (typeof callback === 'function' && noTouchHappened()) {
	          callback(event);
	        }
	        if (event.type === 'click') {
	          touchEvents.invalid = false;
	          touchEvents.touched = false;
	          touchEvents.moved = false;
	        }
	      };
	
	      var onTouchStart = function onTouchStart(callback, event) {
	        touchEvents.invalid = false;
	        touchEvents.moved = false;
	        touchEvents.touched = true;
	        touchEvents.lastTouchDate = new Date().getTime();
	
	        copyTouchKeys(event.touches[0], touchEvents.downPos);
	        copyTouchKeys(event.touches[0], touchEvents.lastPos);
	
	        invalidateIfMoreThanOneTouch(event);
	
	        if (typeof callback === 'function') {
	          callback(event);
	        }
	      };
	
	      var onTouchMove = function onTouchMove(callback, event) {
	        touchEvents.touched = true;
	        touchEvents.lastTouchDate = new Date().getTime();
	
	        copyTouchKeys(event.touches[0], touchEvents.lastPos);
	
	        invalidateIfMoreThanOneTouch(event);
	
	        if (Math.abs(touchEvents.downPos.clientX - touchEvents.lastPos.clientX) > MOVE_THRESHOLD || Math.abs(touchEvents.downPos.clientY - touchEvents.lastPos.clientY) > MOVE_THRESHOLD) {
	          touchEvents.moved = true;
	        }
	
	        if (typeof callback === 'function') {
	          callback(event);
	        }
	      };
	
	      var onTouchEnd = function onTouchEnd(callback, onClick, type, event) {
	        touchEvents.touched = true;
	        touchEvents.lastTouchDate = new Date().getTime();
	
	        invalidateIfMoreThanOneTouch(event);
	
	        if (typeof callback === 'function') {
	          callback(event);
	        }
	
	        if (!touchEvents.invalid && !touchEvents.moved) {
	          var box = event.currentTarget.getBoundingClientRect();
	
	          if (touchEvents.lastPos.clientX - (touchEvents.lastPos.radiusX || 0) <= box.right && touchEvents.lastPos.clientX + (touchEvents.lastPos.radiusX || 0) >= box.left && touchEvents.lastPos.clientY - (touchEvents.lastPos.radiusY || 0) <= box.bottom && touchEvents.lastPos.clientY + (touchEvents.lastPos.radiusY || 0) >= box.top) {
	
	            if (!isDisabled(event.currentTarget)) {
	              if (typeof onClick === 'function') {
	                event.preventDefault();
	                copyTouchKeys(touchEvents.lastPos, event);
	                fakeClickEvent(event);
	                onClick(event);
	              }
	
	              if (!event.defaultPrevented && handleType[type]) {
	                handleType[type](event);
	              }
	            }
	          }
	        }
	      };
	
	      var propsWithFastclickEvents = function propsWithFastclickEvents(type, props) {
	        var newProps = {};
	
	        // Loop over props
	        for (var key in props) {
	          // Copy props to newProps
	          newProps[key] = props[key];
	        }
	
	        // Apply our wrapped mouse and touch handlers
	        newProps.onClick = onMouseEvent.bind(null, props.onClick);
	        newProps.onMouseDown = onMouseEvent.bind(null, props.onMouseDown);
	        newProps.onMouseMove = onMouseEvent.bind(null, props.onMouseMove);
	        newProps.onMouseUp = onMouseEvent.bind(null, props.onMouseUp);
	        newProps.onTouchStart = onTouchStart.bind(null, props.onTouchStart);
	        newProps.onTouchMove = onTouchMove.bind(null, props.onTouchMove);
	        newProps.onTouchEnd = onTouchEnd.bind(null, props.onTouchEnd, props.onClick, type);
	
	        if (typeof Object.freeze === 'function') {
	          Object.freeze(newProps);
	        }
	
	        return newProps;
	      };
	
	      React.createElement = function () {
	        // Convert arguments to array
	        var args = Array.prototype.slice.call(arguments);
	
	        var type = args[0];
	        var props = args[1];
	
	        // Check if basic element & has onClick prop
	        if (type && typeof type === 'string' && (props && typeof props.onClick === 'function' || handleType[type])) {
	          // Add our own events to props
	          args[1] = propsWithFastclickEvents(type, props || {});
	        }
	
	        // Apply args to original createElement function
	        return originalCreateElement.apply(null, args);
	      };
	
	      if (_typeof(React.DOM) === 'object') {
	        for (var key in React.DOM) {
	          React.DOM[key] = React.createElement.bind(null, key);
	        }
	      }
	    };
	  };
	
	  /* istanbul ignore next */
	  // Export for commonjs / browserify
	  if (( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
	    var React = __webpack_require__(3);
	    module.exports = getReactFCInitializer(React);
	    // Export for amd / require
	  } else if (true) {
	    // eslint-disable-line no-undef
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ReactAMD) {
	      // eslint-disable-line no-undef
	      return getReactFCInitializer(ReactAMD);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    // Export globally
	  } else {
	    var root;
	
	    if (typeof window !== 'undefined') {
	      root = window;
	    } else if (typeof global !== 'undefined') {
	      root = global;
	    } else if (typeof self !== 'undefined') {
	      root = self;
	    } else {
	      root = this;
	    }
	
	    root.Reorder = getReactFCInitializer(root.React);
	  }
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM2ZmJiMGQ2ZDYzYWJjODg4MTkiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9hcHAuanN4Iiwid2VicGFjazovLy8uL2luZGV4LmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BcHAuZXM2Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vLy4uL3JlYWN0LWZhc3RjbGljay9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImRpc3BsYXkiLCJ2aWV3Q291bnQiLCJ6SW5kZXgiLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInNldFN0YXRlIiwibGluZWhlaWdodCIsInByb3BUeXBlcyIsImdldFJlYWN0RkNJbml0aWFsaXplciIsIlJlYWN0IiwiaW5pdGlhbGl6ZVJlYWN0RmFzdGNsaWNrIiwib3JpZ2luYWxDcmVhdGVFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIk1PVkVfVEhSRVNIT0xEIiwiVE9VQ0hfREVMQVkiLCJ0b3VjaEtleXNUb1N0b3JlIiwidG91Y2hFdmVudHMiLCJkb3duUG9zIiwibGFzdFBvcyIsImlzRGlzYWJsZWQiLCJlbGVtZW50IiwiZGlzYWJsZWQiLCJnZXRBdHRyaWJ1dGUiLCJmb2N1cyIsImV2ZW50IiwidGFyZ2V0IiwibXlUYXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlVHlwZSIsImlucHV0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0ZXh0YXJlYSIsInNlbGVjdCIsImxhYmVsIiwiZm9yVGFyZ2V0IiwicXVlcnlTZWxlY3RvckFsbCIsImZha2VDbGlja0V2ZW50IiwicGVyc2lzdCIsImZhc3RjbGljayIsInR5cGUiLCJidXR0b24iLCJjb3B5VG91Y2hLZXlzIiwidG91Y2giLCJpIiwibGVuZ3RoIiwia2V5Iiwibm9Ub3VjaEhhcHBlbmVkIiwidG91Y2hlZCIsImxhc3RUb3VjaERhdGUiLCJEYXRlIiwiZ2V0VGltZSIsImludmFsaWRhdGVJZk1vcmVUaGFuT25lVG91Y2giLCJpbnZhbGlkIiwidG91Y2hlcyIsIm9uTW91c2VFdmVudCIsImNhbGxiYWNrIiwibW92ZWQiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZSIsIk1hdGgiLCJhYnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hFbmQiLCJvbkNsaWNrIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmFkaXVzWCIsInJpZ2h0IiwibGVmdCIsInJhZGl1c1kiLCJib3R0b20iLCJ0b3AiLCJkZWZhdWx0UHJldmVudGVkIiwicHJvcHNXaXRoRmFzdGNsaWNrRXZlbnRzIiwibmV3UHJvcHMiLCJiaW5kIiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIk9iamVjdCIsImZyZWV6ZSIsImFyZ3MiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImFwcGx5IiwiRE9NIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJSZWFjdEFNRCIsInJvb3QiLCJnbG9iYWwiLCJzZWxmIiwiUmVvcmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7Ozs7O0FBQ0E7O0FBRUFBLFFBQU9DLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQkMsWUFBU0MsTUFBVCxDQUNFLHFDQURGLEVBRUVDLFNB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SUFBSTVDLEdBQVQsSUFBZ0JyQyxNQUFNaUYsR0FBdEIsRUFBMkI7QUFDekJqRixpQkFBTWlGLEdBQU4sQ0FBVTVDLEdBQVYsSUFBaUJyQyxNQUFNRyxhQUFOLENBQW9CaUUsSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0IvQixHQUEvQixDQUFqQjtBQUNEO0FBQ0Y7QUFDRixNQS9PRDtBQWdQRCxJQWpQRDs7QUFtUEE7QUFDQTtBQUNBLE9BQUksZ0NBQU82QyxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9DLE1BQVAsS0FBa0IsV0FBckQsRUFBa0U7QUFDaEUsU0FBSW5GLFFBQVEsbUJBQUFvRixDQUFRLENBQVIsQ0FBWjtBQUNBRCxZQUFPRCxPQUFQLEdBQWlCbkYsc0JBQXNCQyxLQUF0QixDQUFqQjtBQUNGO0FBQ0MsSUFKRCxNQUlPLElBQUksSUFBSixFQUFnRDtBQUFFO0FBQ3ZEcUYsS0FBQSxpQ0FBTyxDQUFDLHNCQUFELENBQVAsa0NBQWtCLFVBQVVDLFFBQVYsRUFBb0I7QUFBRTtBQUN0QyxjQUFPdkYsc0JBQXNCdUYsUUFBdEIsQ0FBUDtBQUNELE1BRkQ7QUFHRjtBQUNDLElBTE0sTUFLQTtBQUNMLFNBQUlDLElBQUo7O0FBRUEsU0FBSSxPQUFPM0csTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQzJHLGNBQU8zRyxNQUFQO0FBQ0QsTUFGRCxNQUVPLElBQUksT0FBTzRHLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDeENELGNBQU9DLE1BQVA7QUFDRCxNQUZNLE1BRUEsSUFBSSxPQUFPQyxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQ3RDRixjQUFPRSxJQUFQO0FBQ0QsTUFGTSxNQUVBO0FBQ0xGLGNBQU8sSUFBUDtBQUNEOztBQUVEQSxVQUFLRyxPQUFMLEdBQWUzRixzQkFBc0J3RixLQUFLdkYsS0FBM0IsQ0FBZjtBQUNEO0FBQ0YsRUE5UUQsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUzNmZiYjBkNmQ2M2FiYzg4ODE5IiwiaW1wb3J0IHtBcHB9IGZyb20gJy4uL2luZGV4LmVzNic7XG5pbXBvcnQgaW5pdFJlYWN0RmFzdGNsaWNrIGZyb20gJy4uLy4uL3JlYWN0LWZhc3RjbGljayc7XG5pbml0UmVhY3RGYXN0Y2xpY2soKTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxBcHAgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKVxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZG9jcy9hcHAuanN4IiwiaW1wb3J0IEFwcCBmcm9tICcuL3NyYy9qcy9jb21wb25lbnRzL0FwcCc7XG5cbmV4cG9ydCB7QXBwfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguZXM2IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkaXNwbGF5OiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGxldCB2aWV3Q291bnQgPSAwO1xuICAgIGxldCB6SW5kZXggPSAxMDAwO1xuICAgIGxldCBwYWRkaW5nVG9wID0gMzMwO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IDMwMCwgaGVpZ2h0OiB6SW5kZXgsIHBvc2l0aW9uOiAncmVsYXRpdmUnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCIgc3R5bGU9e3t6SW5kZXg6IHpJbmRleCwgcGFkZGluZ1RvcDogcGFkZGluZ1RvcH19PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogJ3NlbGVjdCd9KX0+cHVzaDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgKyt2aWV3Q291bnQ7XG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5kaXNwbGF5ID09ICdzZWxlY3QnKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCIgc3R5bGU9e3t6SW5kZXg6IHpJbmRleCArIHZpZXdDb3VudCwgcGFkZGluZ1RvcDogcGFkZGluZ1RvcCAtICgzMCAqIHZpZXdDb3VudCl9fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXtlID0+IHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6ICd0ZXh0YXJlYSd9KX0+cHVzaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4xc3QtMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjFzdC0yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+MXN0LTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4ybmQtMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjJuZC0yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Mm5kLTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4zcmQtMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjNyZC0yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+M3JkLTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj40dGgtMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjR0aC0yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+NHRoLTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj41dGgtMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjV0aC0yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+NXRoLTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogMH0pfT5iYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgKyt2aWV3Q291bnRcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXkgPT0gJ3RleHRhcmVhJyl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiIHN0eWxlPXt7ekluZGV4OiB6SW5kZXggKyB2aWV3Q291bnQsIHBhZGRpbmdUb3A6IHBhZGRpbmdUb3AgLSAoMzAgKiB2aWV3Q291bnQpfX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17ZSA9PiB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiAnY2hlY2tib3gnfSl9PnB1c2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17ZSA9PiB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiAwfSl9PmJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICArK3ZpZXdDb3VudFxuICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZGlzcGxheSA9PSAnY2hlY2tib3gnKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCIgc3R5bGU9e3t6SW5kZXg6IHpJbmRleCArIHZpZXdDb3VudCwgcGFkZGluZ1RvcDogcGFkZGluZ1RvcCAtICgzMCAqIHZpZXdDb3VudCl9fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXtlID0+IHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6ICdyYWRpbyd9KX0+cHVzaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2xpbmVoZWlnaHQ6IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2xpbmVoZWlnaHQ6IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2xpbmVoZWlnaHQ6IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogMH0pfT5iYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgKyt2aWV3Q291bnRcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXkgPT0gJ3JhZGlvJyl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiIHN0eWxlPXt7ekluZGV4OiB6SW5kZXggKyB2aWV3Q291bnQsIHBhZGRpbmdUb3A6IHBhZGRpbmdUb3AgLSAoMzAgKiB2aWV3Q291bnQpfX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17ZSA9PiB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiAnbGFiZWwnfSl9PnB1c2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tsaW5laGVpZ2h0OiAwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tsaW5laGVpZ2h0OiAwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tsaW5laGVpZ2h0OiAwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tsaW5laGVpZ2h0OiAwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz48aW5wdXQgdHlwZT1cInJhZGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+PGlucHV0IHR5cGU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXtlID0+IHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6IDB9KX0+YmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCl9XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICsrdmlld0NvdW50XG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5kaXNwbGF5ID09ICdsYWJlbCcpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIiBzdHlsZT17e3pJbmRleDogekluZGV4ICsgdmlld0NvdW50LCBwYWRkaW5nVG9wOiBwYWRkaW5nVG9wIC0gKDMwICogdmlld0NvdW50KX19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2xpbmVoZWlnaHQ6IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2xpbmVoZWlnaHQ6IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2xpbmVoZWlnaHQ6IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2xpbmVoZWlnaHQ6IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogMH0pfT5iYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQXBwLmVzNiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGdldFJlYWN0RkNJbml0aWFsaXplciA9IGZ1bmN0aW9uIChSZWFjdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpbml0aWFsaXplUmVhY3RGYXN0Y2xpY2sgKCkge1xuICAgICAgdmFyIG9yaWdpbmFsQ3JlYXRlRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQ7XG5cbiAgICAgIC8vIE1vdmVkIGlmIE1hdGguYWJzKGRvd25YIC0gdXBYKSA+IE1PVkVfVEhSRVNIT0xEO1xuICAgICAgdmFyIE1PVkVfVEhSRVNIT0xEID0gODtcbiAgICAgIHZhciBUT1VDSF9ERUxBWSA9IDEwMDA7XG5cbiAgICAgIHZhciB0b3VjaEtleXNUb1N0b3JlID0gW1xuICAgICAgICAnY2xpZW50WCcsXG4gICAgICAgICdjbGllbnRZJyxcbiAgICAgICAgJ3BhZ2VYJyxcbiAgICAgICAgJ3BhZ2VZJyxcbiAgICAgICAgJ3NjcmVlblgnLFxuICAgICAgICAnc2NyZWVuWScsXG4gICAgICAgICdyYWRpdXNYJyxcbiAgICAgICAgJ3JhZGl1c1knXG4gICAgICBdO1xuXG4gICAgICB2YXIgdG91Y2hFdmVudHMgPSB7XG4gICAgICAgIGRvd25Qb3M6IHt9LFxuICAgICAgICBsYXN0UG9zOiB7fVxuICAgICAgfTtcblxuICAgICAgdmFyIGlzRGlzYWJsZWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpc2FibGVkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgcmV0dXJuIGRpc2FibGVkICE9PSBmYWxzZSAmJiBkaXNhYmxlZCAhPT0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIHZhciBmb2N1cyA9IGZ1bmN0aW9uIChldmVudCwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBteVRhcmdldCA9IHRhcmdldCB8fCBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIGlmICghbXlUYXJnZXQgfHwgaXNEaXNhYmxlZChteVRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBteVRhcmdldC5mb2N1cygpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGhhbmRsZVR5cGUgPSB7XG4gICAgICAgIGlucHV0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZihldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgndHlwZScpID09ICd0ZXh0Jyl7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb2N1cyhldmVudCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRleHRhcmVhOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGZvY3VzKGV2ZW50KTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGZvY3VzKGV2ZW50KTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHZhciBpbnB1dDtcblxuICAgICAgICAgIHZhciBmb3JUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZm9yJyk7XG5cbiAgICAgICAgICBpZiAoZm9yVGFyZ2V0KSB7XG4gICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvclRhcmdldCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpWzBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgZm9jdXMoZXZlbnQsIGlucHV0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBmYWtlQ2xpY2tFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIGV2ZW50LnBlcnNpc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5mYXN0Y2xpY2sgPSB0cnVlO1xuICAgICAgICBldmVudC50eXBlID0gJ2NsaWNrJztcbiAgICAgICAgZXZlbnQuYnV0dG9uID0gMDtcbiAgICAgIH07XG5cbiAgICAgIHZhciBjb3B5VG91Y2hLZXlzID0gZnVuY3Rpb24gKHRvdWNoLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQucGVyc2lzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRhcmdldC5wZXJzaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdWNoS2V5c1RvU3RvcmUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0b3VjaEtleXNUb1N0b3JlW2ldO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB0b3VjaFtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG5vVG91Y2hIYXBwZW5lZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICF0b3VjaEV2ZW50cy50b3VjaGVkICYmIChcbiAgICAgICAgICAhdG91Y2hFdmVudHMubGFzdFRvdWNoRGF0ZSB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKSA+IHRvdWNoRXZlbnRzLmxhc3RUb3VjaERhdGUgKyBUT1VDSF9ERUxBWVxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgdmFyIGludmFsaWRhdGVJZk1vcmVUaGFuT25lVG91Y2ggPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdG91Y2hFdmVudHMuaW52YWxpZCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxIHx8IHRvdWNoRXZlbnRzLmludmFsaWQ7XG4gICAgICB9O1xuXG4gICAgICB2YXIgb25Nb3VzZUV2ZW50ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBldmVudCkge1xuICAgICAgICAvLyBQcmV2ZW50IGFueSBtb3VzZSBldmVudHMgaWYgd2UgdG91Y2hlZCByZWNlbnRseVxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmIG5vVG91Y2hIYXBwZW5lZCgpKSB7XG4gICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgdG91Y2hFdmVudHMuaW52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgIHRvdWNoRXZlbnRzLnRvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICB0b3VjaEV2ZW50cy5tb3ZlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBldmVudCkge1xuICAgICAgICB0b3VjaEV2ZW50cy5pbnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHRvdWNoRXZlbnRzLm1vdmVkID0gZmFsc2U7XG4gICAgICAgIHRvdWNoRXZlbnRzLnRvdWNoZWQgPSB0cnVlO1xuICAgICAgICB0b3VjaEV2ZW50cy5sYXN0VG91Y2hEYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgY29weVRvdWNoS2V5cyhldmVudC50b3VjaGVzWzBdLCB0b3VjaEV2ZW50cy5kb3duUG9zKTtcbiAgICAgICAgY29weVRvdWNoS2V5cyhldmVudC50b3VjaGVzWzBdLCB0b3VjaEV2ZW50cy5sYXN0UG9zKTtcblxuICAgICAgICBpbnZhbGlkYXRlSWZNb3JlVGhhbk9uZVRvdWNoKGV2ZW50KTtcblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgb25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGV2ZW50KSB7XG4gICAgICAgIHRvdWNoRXZlbnRzLnRvdWNoZWQgPSB0cnVlO1xuICAgICAgICB0b3VjaEV2ZW50cy5sYXN0VG91Y2hEYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgY29weVRvdWNoS2V5cyhldmVudC50b3VjaGVzWzBdLCB0b3VjaEV2ZW50cy5sYXN0UG9zKTtcblxuICAgICAgICBpbnZhbGlkYXRlSWZNb3JlVGhhbk9uZVRvdWNoKGV2ZW50KTtcblxuICAgICAgICBpZiAoTWF0aC5hYnModG91Y2hFdmVudHMuZG93blBvcy5jbGllbnRYIC0gdG91Y2hFdmVudHMubGFzdFBvcy5jbGllbnRYKSA+IE1PVkVfVEhSRVNIT0xEIHx8XG4gICAgICAgICAgTWF0aC5hYnModG91Y2hFdmVudHMuZG93blBvcy5jbGllbnRZIC0gdG91Y2hFdmVudHMubGFzdFBvcy5jbGllbnRZKSA+IE1PVkVfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgdG91Y2hFdmVudHMubW92ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG9uQ2xpY2ssIHR5cGUsIGV2ZW50KSB7XG4gICAgICAgIHRvdWNoRXZlbnRzLnRvdWNoZWQgPSB0cnVlO1xuICAgICAgICB0b3VjaEV2ZW50cy5sYXN0VG91Y2hEYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaW52YWxpZGF0ZUlmTW9yZVRoYW5PbmVUb3VjaChldmVudCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG91Y2hFdmVudHMuaW52YWxpZCAmJiAhdG91Y2hFdmVudHMubW92ZWQpIHtcbiAgICAgICAgICB2YXIgYm94ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIGlmICh0b3VjaEV2ZW50cy5sYXN0UG9zLmNsaWVudFggLSAodG91Y2hFdmVudHMubGFzdFBvcy5yYWRpdXNYIHx8IDApIDw9IGJveC5yaWdodCAmJlxuICAgICAgICAgICAgdG91Y2hFdmVudHMubGFzdFBvcy5jbGllbnRYICsgKHRvdWNoRXZlbnRzLmxhc3RQb3MucmFkaXVzWCB8fCAwKSA+PSBib3gubGVmdCAmJlxuICAgICAgICAgICAgdG91Y2hFdmVudHMubGFzdFBvcy5jbGllbnRZIC0gKHRvdWNoRXZlbnRzLmxhc3RQb3MucmFkaXVzWSB8fCAwKSA8PSBib3guYm90dG9tICYmXG4gICAgICAgICAgICB0b3VjaEV2ZW50cy5sYXN0UG9zLmNsaWVudFkgKyAodG91Y2hFdmVudHMubGFzdFBvcy5yYWRpdXNZIHx8IDApID49IGJveC50b3ApIHtcblxuICAgICAgICAgICAgaWYgKCFpc0Rpc2FibGVkKGV2ZW50LmN1cnJlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29weVRvdWNoS2V5cyh0b3VjaEV2ZW50cy5sYXN0UG9zLCBldmVudCk7XG4gICAgICAgICAgICAgICAgZmFrZUNsaWNrRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmIGhhbmRsZVR5cGVbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVUeXBlW3R5cGVdKGV2ZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIHByb3BzV2l0aEZhc3RjbGlja0V2ZW50cyA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge1xuICAgICAgICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICAgICAgICAvLyBMb29wIG92ZXIgcHJvcHNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgLy8gQ29weSBwcm9wcyB0byBuZXdQcm9wc1xuICAgICAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwbHkgb3VyIHdyYXBwZWQgbW91c2UgYW5kIHRvdWNoIGhhbmRsZXJzXG4gICAgICAgIG5ld1Byb3BzLm9uQ2xpY2sgPSBvbk1vdXNlRXZlbnQuYmluZChudWxsLCBwcm9wcy5vbkNsaWNrKTtcbiAgICAgICAgbmV3UHJvcHMub25Nb3VzZURvd24gPSBvbk1vdXNlRXZlbnQuYmluZChudWxsLCBwcm9wcy5vbk1vdXNlRG93bik7XG4gICAgICAgIG5ld1Byb3BzLm9uTW91c2VNb3ZlID0gb25Nb3VzZUV2ZW50LmJpbmQobnVsbCwgcHJvcHMub25Nb3VzZU1vdmUpO1xuICAgICAgICBuZXdQcm9wcy5vbk1vdXNlVXAgPSBvbk1vdXNlRXZlbnQuYmluZChudWxsLCBwcm9wcy5vbk1vdXNlVXApO1xuICAgICAgICBuZXdQcm9wcy5vblRvdWNoU3RhcnQgPSBvblRvdWNoU3RhcnQuYmluZChudWxsLCBwcm9wcy5vblRvdWNoU3RhcnQpO1xuICAgICAgICBuZXdQcm9wcy5vblRvdWNoTW92ZSA9IG9uVG91Y2hNb3ZlLmJpbmQobnVsbCwgcHJvcHMub25Ub3VjaE1vdmUpO1xuICAgICAgICBuZXdQcm9wcy5vblRvdWNoRW5kID0gb25Ub3VjaEVuZC5iaW5kKG51bGwsIHByb3BzLm9uVG91Y2hFbmQsIHByb3BzLm9uQ2xpY2ssIHR5cGUpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIE9iamVjdC5mcmVlemUobmV3UHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1Byb3BzO1xuICAgICAgfTtcblxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ29udmVydCBhcmd1bWVudHMgdG8gYXJyYXlcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgICAgIHZhciB0eXBlID0gYXJnc1swXTtcbiAgICAgICAgdmFyIHByb3BzID0gYXJnc1sxXTtcblxuICAgICAgICAvLyBDaGVjayBpZiBiYXNpYyBlbGVtZW50ICYgaGFzIG9uQ2xpY2sgcHJvcFxuICAgICAgICBpZiAodHlwZSAmJiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgJiYgKFxuICAgICAgICAgIChwcm9wcyAmJiB0eXBlb2YgcHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykgfHwgaGFuZGxlVHlwZVt0eXBlXVxuICAgICAgICApKSB7XG4gICAgICAgICAgLy8gQWRkIG91ciBvd24gZXZlbnRzIHRvIHByb3BzXG4gICAgICAgICAgYXJnc1sxXSA9IHByb3BzV2l0aEZhc3RjbGlja0V2ZW50cyh0eXBlLCBwcm9wcyB8fCB7fSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBseSBhcmdzIHRvIG9yaWdpbmFsIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgUmVhY3QuRE9NID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gUmVhY3QuRE9NKSB7XG4gICAgICAgICAgUmVhY3QuRE9NW2tleV0gPSBSZWFjdC5jcmVhdGVFbGVtZW50LmJpbmQobnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgLy8gRXhwb3J0IGZvciBjb21tb25qcyAvIGJyb3dzZXJpZnlcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnZXRSZWFjdEZDSW5pdGlhbGl6ZXIoUmVhY3QpO1xuICAvLyBFeHBvcnQgZm9yIGFtZCAvIHJlcXVpcmVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgIGRlZmluZShbJ3JlYWN0J10sIGZ1bmN0aW9uIChSZWFjdEFNRCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgICByZXR1cm4gZ2V0UmVhY3RGQ0luaXRpYWxpemVyKFJlYWN0QU1EKTtcbiAgICB9KTtcbiAgLy8gRXhwb3J0IGdsb2JhbGx5XG4gIH0gZWxzZSB7XG4gICAgdmFyIHJvb3Q7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJvb3QgPSB3aW5kb3c7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcm9vdCA9IGdsb2JhbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcm9vdCA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3QgPSB0aGlzO1xuICAgIH1cblxuICAgIHJvb3QuUmVvcmRlciA9IGdldFJlYWN0RkNJbml0aWFsaXplcihyb290LlJlYWN0KTtcbiAgfVxufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9yZWFjdC1mYXN0Y2xpY2svc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==