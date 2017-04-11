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
	          null,
	          React.createElement('input', { type: 'text', className: 'form-control' })
	        ),
	        React.createElement(
	          'div',
	          null,
	          React.createElement('input', { type: 'text', className: 'form-control' })
	        ),
	        React.createElement(
	          'div',
	          null,
	          React.createElement('input', { type: 'text', className: 'form-control' })
	        ),
	        React.createElement(
	          'div',
	          null,
	          React.createElement('input', { type: 'text', className: 'form-control' })
	        ),
	        React.createElement(
	          'div',
	          null,
	          React.createElement('input', { type: 'text', className: 'form-control' })
	        ),
	        React.createElement(
	          'div',
	          null,
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
	            ),
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
	            ),
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
	            ),
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
	            ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZThlYjg2NTIxYWI1ZjUxZGY3YjMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy8uL2luZGV4LmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BcHAuZXM2Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mYXN0Y2xpY2svc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJkaXNwbGF5Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInpJbmRleCIsInBhZGRpbmdUb3AiLCJzZXRTdGF0ZSIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7Ozs7O0FBQ0E7O0FBRUFBLFFBQU9DLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQkMsWUFBU0MsTUFBVCxDQUNFLHFDQURGLEVBRUVDLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FGRjtBQUlELEVBTEQsQzs7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7U0FFUUMsRzs7Ozs7Ozs7Ozs7O0FDRlI7Ozs7Ozs7O0tBRXFCQSxHOzs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrREFDakIsc0JBQU1BLEtBQU4sQ0FEaUI7O0FBRWpCLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBUztBQURF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LEM7Ozs7OztBQy9FQSx3Qjs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUcsdURBQXVEO0FBQzFELDRDQUEyQztBQUMzQztBQUNBLE1BQUs7QUFDTDtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlOGViODY1MjFhYjVmNTFkZjdiMyIsImltcG9ydCB7QXBwfSBmcm9tICcuLi9pbmRleC5lczYnO1xuaW1wb3J0IGluaXRSZWFjdEZhc3RjbGljayBmcm9tICdyZWFjdC1mYXN0Y2xpY2snO1xuaW5pdFJlYWN0RmFzdGNsaWNrKCk7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJylcbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUvYXBwLmpzeCIsImltcG9ydCBBcHAgZnJvbSAnLi9zcmMvanMvY29tcG9uZW50cy9BcHAnO1xuXG5leHBvcnQge0FwcH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmVzNiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogZmFsc2VcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAzMDAsIGhlaWdodDogMTAwMCwgcG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIiBzdHlsZT17e3pJbmRleDogMTAwMCwgcGFkZGluZ1RvcDogJzMzMHB4J319PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogIXRoaXMuc3RhdGUuZGlzcGxheX0pfT5jaGFuZ2U8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZGlzcGxheSl7XG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCIgc3R5bGU9e3t6SW5kZXg6IDEwMDEsIHBhZGRpbmdUb3A6ICczMDBweCd9fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXtlID0+IHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6ICF0aGlzLnN0YXRlLmRpc3BsYXl9KX0+YmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjFzdC0xPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjFzdC0yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjFzdC0zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+Mm5kLTE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+Mm5kLTI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+Mm5kLTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj4zcmQtMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj4zcmQtMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj4zcmQtMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjR0aC0xPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjR0aC0yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjR0aC0zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+NXRoLTE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+NXRoLTI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+NXRoLTM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9BcHAuZXM2IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgZ2V0UmVhY3RGQ0luaXRpYWxpemVyID0gZnVuY3Rpb24gKFJlYWN0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGluaXRpYWxpemVSZWFjdEZhc3RjbGljayAoKSB7XG4gICAgICB2YXIgb3JpZ2luYWxDcmVhdGVFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcblxuICAgICAgLy8gTW92ZWQgaWYgTWF0aC5hYnMoZG93blggLSB1cFgpID4gTU9WRV9USFJFU0hPTEQ7XG4gICAgICB2YXIgTU9WRV9USFJFU0hPTEQgPSA4O1xuICAgICAgdmFyIFRPVUNIX0RFTEFZID0gMTAwMDtcblxuICAgICAgdmFyIHRvdWNoS2V5c1RvU3RvcmUgPSBbXG4gICAgICAgICdjbGllbnRYJyxcbiAgICAgICAgJ2NsaWVudFknLFxuICAgICAgICAncGFnZVgnLFxuICAgICAgICAncGFnZVknLFxuICAgICAgICAnc2NyZWVuWCcsXG4gICAgICAgICdzY3JlZW5ZJyxcbiAgICAgICAgJ3JhZGl1c1gnLFxuICAgICAgICAncmFkaXVzWSdcbiAgICAgIF07XG5cbiAgICAgIHZhciB0b3VjaEV2ZW50cyA9IHtcbiAgICAgICAgZG93blBvczoge30sXG4gICAgICAgIGxhc3RQb3M6IHt9XG4gICAgICB9O1xuXG4gICAgICB2YXIgaXNEaXNhYmxlZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGlzYWJsZWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblxuICAgICAgICByZXR1cm4gZGlzYWJsZWQgIT09IGZhbHNlICYmIGRpc2FibGVkICE9PSBudWxsO1xuICAgICAgfTtcblxuICAgICAgdmFyIGZvY3VzID0gZnVuY3Rpb24gKGV2ZW50LCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIG15VGFyZ2V0ID0gdGFyZ2V0IHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgaWYgKCFteVRhcmdldCB8fCBpc0Rpc2FibGVkKG15VGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG15VGFyZ2V0LmZvY3VzKCk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgaGFuZGxlVHlwZSA9IHtcbiAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGZvY3VzKGV2ZW50KTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dGFyZWE6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGZvY3VzKGV2ZW50KTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBmb2N1cyhldmVudCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB2YXIgaW5wdXQ7XG5cbiAgICAgICAgICB2YXIgZm9yVGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2ZvcicpO1xuXG4gICAgICAgICAgaWYgKGZvclRhcmdldCkge1xuICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JUYXJnZXQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKVswXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIGZvY3VzKGV2ZW50LCBpbnB1dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgZmFrZUNsaWNrRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudC5wZXJzaXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQuZmFzdGNsaWNrID0gdHJ1ZTtcbiAgICAgICAgZXZlbnQudHlwZSA9ICdjbGljayc7XG4gICAgICAgIGV2ZW50LmJ1dHRvbiA9IDA7XG4gICAgICB9O1xuXG4gICAgICB2YXIgY29weVRvdWNoS2V5cyA9IGZ1bmN0aW9uICh0b3VjaCwgdGFyZ2V0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0LnBlcnNpc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0YXJnZXQucGVyc2lzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvdWNoKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3VjaEtleXNUb1N0b3JlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdG91Y2hLZXlzVG9TdG9yZVtpXTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdG91Y2hba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBub1RvdWNoSGFwcGVuZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhdG91Y2hFdmVudHMudG91Y2hlZCAmJiAoXG4gICAgICAgICAgIXRvdWNoRXZlbnRzLmxhc3RUb3VjaERhdGUgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkgPiB0b3VjaEV2ZW50cy5sYXN0VG91Y2hEYXRlICsgVE9VQ0hfREVMQVlcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBpbnZhbGlkYXRlSWZNb3JlVGhhbk9uZVRvdWNoID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRvdWNoRXZlbnRzLmludmFsaWQgPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSB8fCB0b3VjaEV2ZW50cy5pbnZhbGlkO1xuICAgICAgfTtcblxuICAgICAgdmFyIG9uTW91c2VFdmVudCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZXZlbnQpIHtcbiAgICAgICAgLy8gUHJldmVudCBhbnkgbW91c2UgZXZlbnRzIGlmIHdlIHRvdWNoZWQgcmVjZW50bHlcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiBub1RvdWNoSGFwcGVuZWQoKSkge1xuICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgIHRvdWNoRXZlbnRzLmludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB0b3VjaEV2ZW50cy50b3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgdG91Y2hFdmVudHMubW92ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZXZlbnQpIHtcbiAgICAgICAgdG91Y2hFdmVudHMuaW52YWxpZCA9IGZhbHNlO1xuICAgICAgICB0b3VjaEV2ZW50cy5tb3ZlZCA9IGZhbHNlO1xuICAgICAgICB0b3VjaEV2ZW50cy50b3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgdG91Y2hFdmVudHMubGFzdFRvdWNoRGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGNvcHlUb3VjaEtleXMoZXZlbnQudG91Y2hlc1swXSwgdG91Y2hFdmVudHMuZG93blBvcyk7XG4gICAgICAgIGNvcHlUb3VjaEtleXMoZXZlbnQudG91Y2hlc1swXSwgdG91Y2hFdmVudHMubGFzdFBvcyk7XG5cbiAgICAgICAgaW52YWxpZGF0ZUlmTW9yZVRoYW5PbmVUb3VjaChldmVudCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBldmVudCkge1xuICAgICAgICB0b3VjaEV2ZW50cy50b3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgdG91Y2hFdmVudHMubGFzdFRvdWNoRGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGNvcHlUb3VjaEtleXMoZXZlbnQudG91Y2hlc1swXSwgdG91Y2hFdmVudHMubGFzdFBvcyk7XG5cbiAgICAgICAgaW52YWxpZGF0ZUlmTW9yZVRoYW5PbmVUb3VjaChldmVudCk7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHRvdWNoRXZlbnRzLmRvd25Qb3MuY2xpZW50WCAtIHRvdWNoRXZlbnRzLmxhc3RQb3MuY2xpZW50WCkgPiBNT1ZFX1RIUkVTSE9MRCB8fFxuICAgICAgICAgIE1hdGguYWJzKHRvdWNoRXZlbnRzLmRvd25Qb3MuY2xpZW50WSAtIHRvdWNoRXZlbnRzLmxhc3RQb3MuY2xpZW50WSkgPiBNT1ZFX1RIUkVTSE9MRCkge1xuICAgICAgICAgIHRvdWNoRXZlbnRzLm1vdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBvblRvdWNoRW5kID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBvbkNsaWNrLCB0eXBlLCBldmVudCkge1xuICAgICAgICB0b3VjaEV2ZW50cy50b3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgdG91Y2hFdmVudHMubGFzdFRvdWNoRGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGludmFsaWRhdGVJZk1vcmVUaGFuT25lVG91Y2goZXZlbnQpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRvdWNoRXZlbnRzLmludmFsaWQgJiYgIXRvdWNoRXZlbnRzLm1vdmVkKSB7XG4gICAgICAgICAgdmFyIGJveCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICBpZiAodG91Y2hFdmVudHMubGFzdFBvcy5jbGllbnRYIC0gKHRvdWNoRXZlbnRzLmxhc3RQb3MucmFkaXVzWCB8fCAwKSA8PSBib3gucmlnaHQgJiZcbiAgICAgICAgICAgIHRvdWNoRXZlbnRzLmxhc3RQb3MuY2xpZW50WCArICh0b3VjaEV2ZW50cy5sYXN0UG9zLnJhZGl1c1ggfHwgMCkgPj0gYm94LmxlZnQgJiZcbiAgICAgICAgICAgIHRvdWNoRXZlbnRzLmxhc3RQb3MuY2xpZW50WSAtICh0b3VjaEV2ZW50cy5sYXN0UG9zLnJhZGl1c1kgfHwgMCkgPD0gYm94LmJvdHRvbSAmJlxuICAgICAgICAgICAgdG91Y2hFdmVudHMubGFzdFBvcy5jbGllbnRZICsgKHRvdWNoRXZlbnRzLmxhc3RQb3MucmFkaXVzWSB8fCAwKSA+PSBib3gudG9wKSB7XG5cbiAgICAgICAgICAgIGlmICghaXNEaXNhYmxlZChldmVudC5jdXJyZW50VGFyZ2V0KSkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb3B5VG91Y2hLZXlzKHRvdWNoRXZlbnRzLmxhc3RQb3MsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBmYWtlQ2xpY2tFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgb25DbGljayhldmVudCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgJiYgaGFuZGxlVHlwZVt0eXBlXSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZVR5cGVbdHlwZV0oZXZlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgcHJvcHNXaXRoRmFzdGNsaWNrRXZlbnRzID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7XG4gICAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gICAgICAgIC8vIExvb3Agb3ZlciBwcm9wc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAvLyBDb3B5IHByb3BzIHRvIG5ld1Byb3BzXG4gICAgICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBseSBvdXIgd3JhcHBlZCBtb3VzZSBhbmQgdG91Y2ggaGFuZGxlcnNcbiAgICAgICAgbmV3UHJvcHMub25DbGljayA9IG9uTW91c2VFdmVudC5iaW5kKG51bGwsIHByb3BzLm9uQ2xpY2spO1xuICAgICAgICBuZXdQcm9wcy5vbk1vdXNlRG93biA9IG9uTW91c2VFdmVudC5iaW5kKG51bGwsIHByb3BzLm9uTW91c2VEb3duKTtcbiAgICAgICAgbmV3UHJvcHMub25Nb3VzZU1vdmUgPSBvbk1vdXNlRXZlbnQuYmluZChudWxsLCBwcm9wcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgIG5ld1Byb3BzLm9uTW91c2VVcCA9IG9uTW91c2VFdmVudC5iaW5kKG51bGwsIHByb3BzLm9uTW91c2VVcCk7XG4gICAgICAgIG5ld1Byb3BzLm9uVG91Y2hTdGFydCA9IG9uVG91Y2hTdGFydC5iaW5kKG51bGwsIHByb3BzLm9uVG91Y2hTdGFydCk7XG4gICAgICAgIG5ld1Byb3BzLm9uVG91Y2hNb3ZlID0gb25Ub3VjaE1vdmUuYmluZChudWxsLCBwcm9wcy5vblRvdWNoTW92ZSk7XG4gICAgICAgIG5ld1Byb3BzLm9uVG91Y2hFbmQgPSBvblRvdWNoRW5kLmJpbmQobnVsbCwgcHJvcHMub25Ub3VjaEVuZCwgcHJvcHMub25DbGljaywgdHlwZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZnJlZXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgT2JqZWN0LmZyZWV6ZShuZXdQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3UHJvcHM7XG4gICAgICB9O1xuXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBDb252ZXJ0IGFyZ3VtZW50cyB0byBhcnJheVxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgdmFyIHR5cGUgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcHJvcHMgPSBhcmdzWzFdO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGJhc2ljIGVsZW1lbnQgJiBoYXMgb25DbGljayBwcm9wXG4gICAgICAgIGlmICh0eXBlICYmIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyAmJiAoXG4gICAgICAgICAgKHByb3BzICYmIHR5cGVvZiBwcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB8fCBoYW5kbGVUeXBlW3R5cGVdXG4gICAgICAgICkpIHtcbiAgICAgICAgICAvLyBBZGQgb3VyIG93biBldmVudHMgdG8gcHJvcHNcbiAgICAgICAgICBhcmdzWzFdID0gcHJvcHNXaXRoRmFzdGNsaWNrRXZlbnRzKHR5cGUsIHByb3BzIHx8IHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGx5IGFyZ3MgdG8gb3JpZ2luYWwgY3JlYXRlRWxlbWVudCBmdW5jdGlvblxuICAgICAgICByZXR1cm4gb3JpZ2luYWxDcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWFjdC5ET00gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBSZWFjdC5ET00pIHtcbiAgICAgICAgICBSZWFjdC5ET01ba2V5XSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQuYmluZChudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAvLyBFeHBvcnQgZm9yIGNvbW1vbmpzIC8gYnJvd3NlcmlmeVxuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGdldFJlYWN0RkNJbml0aWFsaXplcihSZWFjdCk7XG4gIC8vIEV4cG9ydCBmb3IgYW1kIC8gcmVxdWlyZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgZGVmaW5lKFsncmVhY3QnXSwgZnVuY3Rpb24gKFJlYWN0QU1EKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICAgIHJldHVybiBnZXRSZWFjdEZDSW5pdGlhbGl6ZXIoUmVhY3RBTUQpO1xuICAgIH0pO1xuICAvLyBFeHBvcnQgZ2xvYmFsbHlcbiAgfSBlbHNlIHtcbiAgICB2YXIgcm9vdDtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcm9vdCA9IHdpbmRvdztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByb290ID0gZ2xvYmFsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByb290ID0gc2VsZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdCA9IHRoaXM7XG4gICAgfVxuXG4gICAgcm9vdC5SZW9yZGVyID0gZ2V0UmVhY3RGQ0luaXRpYWxpemVyKHJvb3QuUmVhY3QpO1xuICB9XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWZhc3RjbGljay9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==