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
	
	var _react = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      display: false
	    };
	    return _this;
	  }
	
	  App.prototype.render = function render() {
	    var _this2 = this;
	
	    return React.createElement(
	      'div',
	      { style: { width: 300, height: 1000, position: 'relative' } },
	      React.createElement(
	        'div',
	        { className: 'box', style: { zIndex: 1000, paddingTop: '330px' } },
	        React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'button',
	            { className: 'btn btn-default', onClick: function onClick(e) {
	                return _this2.setState({ display: !_this2.state.display });
	              } },
	            'change'
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
	        if (_this2.state.display) {
	          return React.createElement(
	            'div',
	            { className: 'box', style: { zIndex: 1001, paddingTop: '300px' } },
	            React.createElement(
	              'div',
	              null,
	              React.createElement(
	                'button',
	                { className: 'btn btn-default', onClick: function onClick(e) {
	                    return _this2.setState({ display: !_this2.state.display });
	                  } },
	                'back'
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
	            )
	          );
	        }
	      }()
	    );
	  };
	
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

	'use strict';
	
	(function () {
	  var getReactFCInitializer = function (React) {
	    return function initializeReactFastclick () {
	      var originalCreateElement = React.createElement;
	
	      // Moved if Math.abs(downX - upX) > MOVE_THRESHOLD;
	      var MOVE_THRESHOLD = 8;
	      var TOUCH_DELAY = 1000;
	
	      var touchKeysToStore = [
	        'clientX',
	        'clientY',
	        'pageX',
	        'pageY',
	        'screenX',
	        'screenY',
	        'radiusX',
	        'radiusY'
	      ];
	
	      var touchEvents = {
	        downPos: {},
	        lastPos: {}
	      };
	
	      var isDisabled = function (element) {
	        if (!element) {
	          return false;
	        }
	        var disabled = element.getAttribute('disabled');
	
	        return disabled !== false && disabled !== null;
	      };
	
	      var focus = function (event, target) {
	        var myTarget = target || event.currentTarget;
	
	        if (!myTarget || isDisabled(myTarget)) {
	          return;
	        }
	
	        myTarget.focus();
	      };
	
	      var handleType = {
	        input: function (event) {
	          focus(event);
	          event.stopPropagation();
	        },
	        textarea: function (event) {
	          focus(event);
	          event.stopPropagation();
	        },
	        select: function (event) {
	          focus(event);
	          event.stopPropagation();
	        },
	        label: function (event) {
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
	
	      var fakeClickEvent = function (event) {
	        if (typeof event.persist === 'function') {
	          event.persist();
	        }
	
	        event.fastclick = true;
	        event.type = 'click';
	        event.button = 0;
	      };
	
	      var copyTouchKeys = function (touch, target) {
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
	
	      var noTouchHappened = function () {
	        return !touchEvents.touched && (
	          !touchEvents.lastTouchDate || new Date().getTime() > touchEvents.lastTouchDate + TOUCH_DELAY
	        );
	      };
	
	      var invalidateIfMoreThanOneTouch = function (event) {
	        touchEvents.invalid = event.touches && event.touches.length > 1 || touchEvents.invalid;
	      };
	
	      var onMouseEvent = function (callback, event) {
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
	
	      var onTouchStart = function (callback, event) {
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
	
	      var onTouchMove = function (callback, event) {
	        touchEvents.touched = true;
	        touchEvents.lastTouchDate = new Date().getTime();
	
	        copyTouchKeys(event.touches[0], touchEvents.lastPos);
	
	        invalidateIfMoreThanOneTouch(event);
	
	        if (Math.abs(touchEvents.downPos.clientX - touchEvents.lastPos.clientX) > MOVE_THRESHOLD ||
	          Math.abs(touchEvents.downPos.clientY - touchEvents.lastPos.clientY) > MOVE_THRESHOLD) {
	          touchEvents.moved = true;
	        }
	
	        if (typeof callback === 'function') {
	          callback(event);
	        }
	      };
	
	      var onTouchEnd = function (callback, onClick, type, event) {
	        touchEvents.touched = true;
	        touchEvents.lastTouchDate = new Date().getTime();
	
	        invalidateIfMoreThanOneTouch(event);
	
	        if (typeof callback === 'function') {
	          callback(event);
	        }
	
	        if (!touchEvents.invalid && !touchEvents.moved) {
	          var box = event.currentTarget.getBoundingClientRect();
	
	          if (touchEvents.lastPos.clientX - (touchEvents.lastPos.radiusX || 0) <= box.right &&
	            touchEvents.lastPos.clientX + (touchEvents.lastPos.radiusX || 0) >= box.left &&
	            touchEvents.lastPos.clientY - (touchEvents.lastPos.radiusY || 0) <= box.bottom &&
	            touchEvents.lastPos.clientY + (touchEvents.lastPos.radiusY || 0) >= box.top) {
	
	            if (!isDisabled(event.currentTarget)) {
	              if (typeof onClick === 'function') {
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
	
	      var propsWithFastclickEvents = function (type, props) {
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
	        if (type && typeof type === 'string' && (
	          (props && typeof props.onClick === 'function') || handleType[type]
	        )) {
	          // Add our own events to props
	          args[1] = propsWithFastclickEvents(type, props || {});
	        }
	
	        // Apply args to original createElement function
	        return originalCreateElement.apply(null, args);
	      };
	
	      if (typeof React.DOM === 'object') {
	        for (var key in React.DOM) {
	          React.DOM[key] = React.createElement.bind(null, key);
	        }
	      }
	    };
	  };
	
	  /* istanbul ignore next */
	  // Export for commonjs / browserify
	  if (true) {
	    var React = __webpack_require__(3);
	    module.exports = getReactFCInitializer(React);
	  // Export for amd / require
	  } else if (typeof define === 'function' && define.amd) { // eslint-disable-line no-undef
	    define(['react'], function (ReactAMD) { // eslint-disable-line no-undef
	      return getReactFCInitializer(ReactAMD);
	    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTRmYzg5Yzc0MTA1NTkwNzRhNTAiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9hcHAuanN4Iiwid2VicGFjazovLy8uL2luZGV4LmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BcHAuZXM2Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mYXN0Y2xpY2svc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJkaXNwbGF5Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInpJbmRleCIsInBhZGRpbmdUb3AiLCJzZXRTdGF0ZSIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7Ozs7O0FBQ0E7O0FBRUFBLFFBQU9DLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQkMsWUFBU0MsTUFBVCxDQUNFLHFDQURGLEVBRUVDLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FGRjtBQUlELEVBTEQsQzs7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7U0FFUUMsRzs7Ozs7Ozs7Ozs7O0FDRlI7Ozs7Ozs7O0tBRXFCQSxHOzs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrREFDakIsc0JBQU1BLEtBQU4sQ0FEaUI7O0FBRWpCLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBUztBQURFLE1B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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRyx1REFBdUQ7QUFDMUQsNENBQTJDO0FBQzNDO0FBQ0EsTUFBSztBQUNMO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU0ZmM4OWM3NDEwNTU5MDc0YTUwIiwiaW1wb3J0IHtBcHB9IGZyb20gJy4uL2luZGV4LmVzNic7XG5pbXBvcnQgaW5pdFJlYWN0RmFzdGNsaWNrIGZyb20gJ3JlYWN0LWZhc3RjbGljayc7XG5pbml0UmVhY3RGYXN0Y2xpY2soKTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxBcHAgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKVxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZG9jcy9hcHAuanN4IiwiaW1wb3J0IEFwcCBmcm9tICcuL3NyYy9qcy9jb21wb25lbnRzL0FwcCc7XG5cbmV4cG9ydCB7QXBwfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguZXM2IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkaXNwbGF5OiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IDMwMCwgaGVpZ2h0OiAxMDAwLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiIHN0eWxlPXt7ekluZGV4OiAxMDAwLCBwYWRkaW5nVG9wOiAnMzMwcHgnfX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17ZSA9PiB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiAhdGhpcy5zdGF0ZS5kaXNwbGF5fSl9PmNoYW5nZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5kaXNwbGF5KXtcbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIiBzdHlsZT17e3pJbmRleDogMTAwMSwgcGFkZGluZ1RvcDogJzMwMHB4J319PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogIXRoaXMuc3RhdGUuZGlzcGxheX0pfT5iYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+MXN0LTE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+MXN0LTI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+MXN0LTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj4ybmQtMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj4ybmQtMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj4ybmQtMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjNyZC0xPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjNyZC0yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjNyZC0zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+NHRoLTE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+NHRoLTI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+NHRoLTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj41dGgtMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj41dGgtMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj41dGgtMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0FwcC5lczYiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBnZXRSZWFjdEZDSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoUmVhY3QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaW5pdGlhbGl6ZVJlYWN0RmFzdGNsaWNrICgpIHtcbiAgICAgIHZhciBvcmlnaW5hbENyZWF0ZUVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50O1xuXG4gICAgICAvLyBNb3ZlZCBpZiBNYXRoLmFicyhkb3duWCAtIHVwWCkgPiBNT1ZFX1RIUkVTSE9MRDtcbiAgICAgIHZhciBNT1ZFX1RIUkVTSE9MRCA9IDg7XG4gICAgICB2YXIgVE9VQ0hfREVMQVkgPSAxMDAwO1xuXG4gICAgICB2YXIgdG91Y2hLZXlzVG9TdG9yZSA9IFtcbiAgICAgICAgJ2NsaWVudFgnLFxuICAgICAgICAnY2xpZW50WScsXG4gICAgICAgICdwYWdlWCcsXG4gICAgICAgICdwYWdlWScsXG4gICAgICAgICdzY3JlZW5YJyxcbiAgICAgICAgJ3NjcmVlblknLFxuICAgICAgICAncmFkaXVzWCcsXG4gICAgICAgICdyYWRpdXNZJ1xuICAgICAgXTtcblxuICAgICAgdmFyIHRvdWNoRXZlbnRzID0ge1xuICAgICAgICBkb3duUG9zOiB7fSxcbiAgICAgICAgbGFzdFBvczoge31cbiAgICAgIH07XG5cbiAgICAgIHZhciBpc0Rpc2FibGVkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaXNhYmxlZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgIHJldHVybiBkaXNhYmxlZCAhPT0gZmFsc2UgJiYgZGlzYWJsZWQgIT09IG51bGw7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQsIHRhcmdldCkge1xuICAgICAgICB2YXIgbXlUYXJnZXQgPSB0YXJnZXQgfHwgZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBpZiAoIW15VGFyZ2V0IHx8IGlzRGlzYWJsZWQobXlUYXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbXlUYXJnZXQuZm9jdXMoKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBoYW5kbGVUeXBlID0ge1xuICAgICAgICBpbnB1dDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZm9jdXMoZXZlbnQpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LFxuICAgICAgICB0ZXh0YXJlYTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZm9jdXMoZXZlbnQpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGZvY3VzKGV2ZW50KTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHZhciBpbnB1dDtcblxuICAgICAgICAgIHZhciBmb3JUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZm9yJyk7XG5cbiAgICAgICAgICBpZiAoZm9yVGFyZ2V0KSB7XG4gICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvclRhcmdldCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpWzBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgZm9jdXMoZXZlbnQsIGlucHV0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBmYWtlQ2xpY2tFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIGV2ZW50LnBlcnNpc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5mYXN0Y2xpY2sgPSB0cnVlO1xuICAgICAgICBldmVudC50eXBlID0gJ2NsaWNrJztcbiAgICAgICAgZXZlbnQuYnV0dG9uID0gMDtcbiAgICAgIH07XG5cbiAgICAgIHZhciBjb3B5VG91Y2hLZXlzID0gZnVuY3Rpb24gKHRvdWNoLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQucGVyc2lzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRhcmdldC5wZXJzaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdWNoS2V5c1RvU3RvcmUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0b3VjaEtleXNUb1N0b3JlW2ldO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB0b3VjaFtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG5vVG91Y2hIYXBwZW5lZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICF0b3VjaEV2ZW50cy50b3VjaGVkICYmIChcbiAgICAgICAgICAhdG91Y2hFdmVudHMubGFzdFRvdWNoRGF0ZSB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKSA+IHRvdWNoRXZlbnRzLmxhc3RUb3VjaERhdGUgKyBUT1VDSF9ERUxBWVxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgdmFyIGludmFsaWRhdGVJZk1vcmVUaGFuT25lVG91Y2ggPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdG91Y2hFdmVudHMuaW52YWxpZCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxIHx8IHRvdWNoRXZlbnRzLmludmFsaWQ7XG4gICAgICB9O1xuXG4gICAgICB2YXIgb25Nb3VzZUV2ZW50ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBldmVudCkge1xuICAgICAgICAvLyBQcmV2ZW50IGFueSBtb3VzZSBldmVudHMgaWYgd2UgdG91Y2hlZCByZWNlbnRseVxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmIG5vVG91Y2hIYXBwZW5lZCgpKSB7XG4gICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgdG91Y2hFdmVudHMuaW52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgIHRvdWNoRXZlbnRzLnRvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICB0b3VjaEV2ZW50cy5tb3ZlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBldmVudCkge1xuICAgICAgICB0b3VjaEV2ZW50cy5pbnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHRvdWNoRXZlbnRzLm1vdmVkID0gZmFsc2U7XG4gICAgICAgIHRvdWNoRXZlbnRzLnRvdWNoZWQgPSB0cnVlO1xuICAgICAgICB0b3VjaEV2ZW50cy5sYXN0VG91Y2hEYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgY29weVRvdWNoS2V5cyhldmVudC50b3VjaGVzWzBdLCB0b3VjaEV2ZW50cy5kb3duUG9zKTtcbiAgICAgICAgY29weVRvdWNoS2V5cyhldmVudC50b3VjaGVzWzBdLCB0b3VjaEV2ZW50cy5sYXN0UG9zKTtcblxuICAgICAgICBpbnZhbGlkYXRlSWZNb3JlVGhhbk9uZVRvdWNoKGV2ZW50KTtcblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgb25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGV2ZW50KSB7XG4gICAgICAgIHRvdWNoRXZlbnRzLnRvdWNoZWQgPSB0cnVlO1xuICAgICAgICB0b3VjaEV2ZW50cy5sYXN0VG91Y2hEYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgY29weVRvdWNoS2V5cyhldmVudC50b3VjaGVzWzBdLCB0b3VjaEV2ZW50cy5sYXN0UG9zKTtcblxuICAgICAgICBpbnZhbGlkYXRlSWZNb3JlVGhhbk9uZVRvdWNoKGV2ZW50KTtcblxuICAgICAgICBpZiAoTWF0aC5hYnModG91Y2hFdmVudHMuZG93blBvcy5jbGllbnRYIC0gdG91Y2hFdmVudHMubGFzdFBvcy5jbGllbnRYKSA+IE1PVkVfVEhSRVNIT0xEIHx8XG4gICAgICAgICAgTWF0aC5hYnModG91Y2hFdmVudHMuZG93blBvcy5jbGllbnRZIC0gdG91Y2hFdmVudHMubGFzdFBvcy5jbGllbnRZKSA+IE1PVkVfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgdG91Y2hFdmVudHMubW92ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG9uQ2xpY2ssIHR5cGUsIGV2ZW50KSB7XG4gICAgICAgIHRvdWNoRXZlbnRzLnRvdWNoZWQgPSB0cnVlO1xuICAgICAgICB0b3VjaEV2ZW50cy5sYXN0VG91Y2hEYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaW52YWxpZGF0ZUlmTW9yZVRoYW5PbmVUb3VjaChldmVudCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG91Y2hFdmVudHMuaW52YWxpZCAmJiAhdG91Y2hFdmVudHMubW92ZWQpIHtcbiAgICAgICAgICB2YXIgYm94ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIGlmICh0b3VjaEV2ZW50cy5sYXN0UG9zLmNsaWVudFggLSAodG91Y2hFdmVudHMubGFzdFBvcy5yYWRpdXNYIHx8IDApIDw9IGJveC5yaWdodCAmJlxuICAgICAgICAgICAgdG91Y2hFdmVudHMubGFzdFBvcy5jbGllbnRYICsgKHRvdWNoRXZlbnRzLmxhc3RQb3MucmFkaXVzWCB8fCAwKSA+PSBib3gubGVmdCAmJlxuICAgICAgICAgICAgdG91Y2hFdmVudHMubGFzdFBvcy5jbGllbnRZIC0gKHRvdWNoRXZlbnRzLmxhc3RQb3MucmFkaXVzWSB8fCAwKSA8PSBib3guYm90dG9tICYmXG4gICAgICAgICAgICB0b3VjaEV2ZW50cy5sYXN0UG9zLmNsaWVudFkgKyAodG91Y2hFdmVudHMubGFzdFBvcy5yYWRpdXNZIHx8IDApID49IGJveC50b3ApIHtcblxuICAgICAgICAgICAgaWYgKCFpc0Rpc2FibGVkKGV2ZW50LmN1cnJlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvcHlUb3VjaEtleXModG91Y2hFdmVudHMubGFzdFBvcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGZha2VDbGlja0V2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiBoYW5kbGVUeXBlW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVHlwZVt0eXBlXShldmVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBwcm9wc1dpdGhGYXN0Y2xpY2tFdmVudHMgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHtcbiAgICAgICAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgICAgICAgLy8gTG9vcCBvdmVyIHByb3BzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgIC8vIENvcHkgcHJvcHMgdG8gbmV3UHJvcHNcbiAgICAgICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGx5IG91ciB3cmFwcGVkIG1vdXNlIGFuZCB0b3VjaCBoYW5kbGVyc1xuICAgICAgICBuZXdQcm9wcy5vbkNsaWNrID0gb25Nb3VzZUV2ZW50LmJpbmQobnVsbCwgcHJvcHMub25DbGljayk7XG4gICAgICAgIG5ld1Byb3BzLm9uTW91c2VEb3duID0gb25Nb3VzZUV2ZW50LmJpbmQobnVsbCwgcHJvcHMub25Nb3VzZURvd24pO1xuICAgICAgICBuZXdQcm9wcy5vbk1vdXNlTW92ZSA9IG9uTW91c2VFdmVudC5iaW5kKG51bGwsIHByb3BzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgbmV3UHJvcHMub25Nb3VzZVVwID0gb25Nb3VzZUV2ZW50LmJpbmQobnVsbCwgcHJvcHMub25Nb3VzZVVwKTtcbiAgICAgICAgbmV3UHJvcHMub25Ub3VjaFN0YXJ0ID0gb25Ub3VjaFN0YXJ0LmJpbmQobnVsbCwgcHJvcHMub25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgbmV3UHJvcHMub25Ub3VjaE1vdmUgPSBvblRvdWNoTW92ZS5iaW5kKG51bGwsIHByb3BzLm9uVG91Y2hNb3ZlKTtcbiAgICAgICAgbmV3UHJvcHMub25Ub3VjaEVuZCA9IG9uVG91Y2hFbmQuYmluZChudWxsLCBwcm9wcy5vblRvdWNoRW5kLCBwcm9wcy5vbkNsaWNrLCB0eXBlKTtcblxuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5mcmVlemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBPYmplY3QuZnJlZXplKG5ld1Byb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdQcm9wcztcbiAgICAgIH07XG5cbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIENvbnZlcnQgYXJndW1lbnRzIHRvIGFycmF5XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgICAgICB2YXIgdHlwZSA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3NbMV07XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYmFzaWMgZWxlbWVudCAmIGhhcyBvbkNsaWNrIHByb3BcbiAgICAgICAgaWYgKHR5cGUgJiYgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnICYmIChcbiAgICAgICAgICAocHJvcHMgJiYgdHlwZW9mIHByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHx8IGhhbmRsZVR5cGVbdHlwZV1cbiAgICAgICAgKSkge1xuICAgICAgICAgIC8vIEFkZCBvdXIgb3duIGV2ZW50cyB0byBwcm9wc1xuICAgICAgICAgIGFyZ3NbMV0gPSBwcm9wc1dpdGhGYXN0Y2xpY2tFdmVudHModHlwZSwgcHJvcHMgfHwge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwbHkgYXJncyB0byBvcmlnaW5hbCBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uXG4gICAgICAgIHJldHVybiBvcmlnaW5hbENyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodHlwZW9mIFJlYWN0LkRPTSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIFJlYWN0LkRPTSkge1xuICAgICAgICAgIFJlYWN0LkRPTVtrZXldID0gUmVhY3QuY3JlYXRlRWxlbWVudC5iaW5kKG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIC8vIEV4cG9ydCBmb3IgY29tbW9uanMgLyBicm93c2VyaWZ5XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2V0UmVhY3RGQ0luaXRpYWxpemVyKFJlYWN0KTtcbiAgLy8gRXhwb3J0IGZvciBhbWQgLyByZXF1aXJlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICBkZWZpbmUoWydyZWFjdCddLCBmdW5jdGlvbiAoUmVhY3RBTUQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgcmV0dXJuIGdldFJlYWN0RkNJbml0aWFsaXplcihSZWFjdEFNRCk7XG4gICAgfSk7XG4gIC8vIEV4cG9ydCBnbG9iYWxseVxuICB9IGVsc2Uge1xuICAgIHZhciByb290O1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByb290ID0gd2luZG93O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJvb3QgPSBnbG9iYWw7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJvb3QgPSBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290ID0gdGhpcztcbiAgICB9XG5cbiAgICByb290LlJlb3JkZXIgPSBnZXRSZWFjdEZDSW5pdGlhbGl6ZXIocm9vdC5SZWFjdCk7XG4gIH1cbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZmFzdGNsaWNrL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9