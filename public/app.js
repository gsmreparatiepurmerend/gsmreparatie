(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/fullpage.js/dist/fullpage.js
  var require_fullpage = __commonJS({
    "node_modules/fullpage.js/dist/fullpage.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.fullpage = factory());
      })(exports, function() {
        "use strict";
        if (!Array.prototype.find) {
          Object.defineProperty(Array.prototype, "find", {
            value: function value(predicate) {
              if (this == null) {
                throw new TypeError('"this" is null or not defined');
              }
              var o = Object(this);
              var len = o.length >>> 0;
              if (typeof predicate !== "function") {
                throw new TypeError("predicate must be a function");
              }
              var thisArg = arguments[1];
              var k = 0;
              while (k < len) {
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                  return kValue;
                }
                k++;
              }
              return void 0;
            }
          });
        }
        if (!Array.from) {
          Array.from = function() {
            var toStr = Object.prototype.toString;
            var isCallable = function isCallable2(fn) {
              return typeof fn === "function" || toStr.call(fn) === "[object Function]";
            };
            var toInteger = function toInteger2(value) {
              var number = Number(value);
              if (isNaN(number)) {
                return 0;
              }
              if (number === 0 || !isFinite(number)) {
                return number;
              }
              return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
            };
            var maxSafeInteger = Math.pow(2, 53) - 1;
            var toLength = function toLength2(value) {
              var len = toInteger(value);
              return Math.min(Math.max(len, 0), maxSafeInteger);
            };
            return function from(arrayLike) {
              var C = this;
              var items = Object(arrayLike);
              if (arrayLike == null) {
                throw new TypeError("Array.from requires an array-like object - not null or undefined");
              }
              var mapFn = arguments.length > 1 ? arguments[1] : void 0;
              var T;
              if (typeof mapFn !== "undefined") {
                if (!isCallable(mapFn)) {
                  throw new TypeError("Array.from: when provided, the second argument must be a function");
                }
                if (arguments.length > 2) {
                  T = arguments[2];
                }
              }
              var len = toLength(items.length);
              var A = isCallable(C) ? Object(new C(len)) : new Array(len);
              var k = 0;
              var kValue;
              while (k < len) {
                kValue = items[k];
                if (mapFn) {
                  A[k] = typeof T === "undefined" ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                  A[k] = kValue;
                }
                k += 1;
              }
              A.length = len;
              return A;
            };
          }();
        }
        var win = window;
        var doc = document;
        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
        var isMacDevice = /(Mac|iPhone|iPod|iPad)/i.test(win.navigator.userAgent);
        var isTouch = "ontouchstart" in win || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
        var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
        var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], summary:not([disabled]), [contenteditable]';
        var FP = {
          test: {},
          shared: {}
        };
        var extensions = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards", "dropEffect", "waterEffect"];
        if (win.NodeList && !NodeList.prototype.forEach) {
          NodeList.prototype.forEach = function(callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
              callback.call(thisArg, this[i], i, this);
            }
          };
        }
        if (typeof Object.assign != "function") {
          Object.defineProperty(Object, "assign", {
            value: function assign(target, varArgs) {
              if (target == null) {
                throw new TypeError("Cannot convert undefined or null to object");
              }
              var to = Object(target);
              for (var index2 = 1; index2 < arguments.length; index2++) {
                var nextSource = arguments[index2];
                if (nextSource != null) {
                  for (var nextKey in nextSource) {
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                      to[nextKey] = nextSource[nextKey];
                    }
                  }
                }
              }
              return to;
            },
            writable: true,
            configurable: true
          });
        }
        if (!String.prototype.padStart) {
          String.prototype.padStart = function padStart(targetLength, padString) {
            targetLength = targetLength >> 0;
            padString = String(typeof padString !== "undefined" ? padString : " ");
            if (this.length > targetLength) {
              return String(this);
            } else {
              targetLength = targetLength - this.length;
              if (targetLength > padString.length) {
                padString += Array.apply(null, Array(targetLength)).map(function() {
                  return padString;
                }).join("");
              }
              return padString.slice(0, targetLength) + String(this);
            }
          };
        }
        function showError(type, text) {
          win.console && win.console[type] && win.console[type]("fullPage: " + text);
        }
        function isVisible(el) {
          var style = win.getComputedStyle(el);
          return style.display !== "none";
        }
        function getVisible(elements) {
          return Array.from(elements).filter(function(e) {
            return isVisible(e);
          });
        }
        function $(selector, context) {
          context = arguments.length > 1 ? context : document;
          return context ? context.querySelectorAll(selector) : null;
        }
        function deepExtend(out) {
          out = out || {};
          for (var i = 1, len = arguments.length; i < len; ++i) {
            var obj = arguments[i];
            if (!obj) {
              continue;
            }
            for (var key in obj) {
              if (!obj.hasOwnProperty(key) || key == "__proto__" || key == "constructor") {
                continue;
              }
              if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
                out[key] = deepExtend(out[key], obj[key]);
                continue;
              }
              out[key] = obj[key];
            }
          }
          return out;
        }
        function hasClass(el, className) {
          if (el == null) {
            return false;
          }
          return el.classList.contains(className);
        }
        function getWindowHeight() {
          return "innerHeight" in win ? win.innerHeight : doc.documentElement.offsetHeight;
        }
        function getWindowWidth() {
          return win.innerWidth;
        }
        function css(items, props) {
          items = getList(items);
          var key;
          for (key in props) {
            if (props.hasOwnProperty(key)) {
              if (key !== null) {
                for (var i = 0; i < items.length; i++) {
                  var item = items[i];
                  item.style[key] = props[key];
                }
              }
            }
          }
          return items;
        }
        function prev(item) {
          return item.previousElementSibling;
        }
        function next(item) {
          return item.nextElementSibling;
        }
        function last(item) {
          return item[item.length - 1];
        }
        function index(item, selector) {
          item = isArrayOrList(item) ? item[0] : item;
          var children = selector != null ? $(selector, item.parentNode) : item.parentNode.childNodes;
          var num = 0;
          for (var i = 0; i < children.length; i++) {
            if (children[i] == item) return num;
            if (children[i].nodeType == 1) num++;
          }
          return -1;
        }
        function getList(item) {
          return !isArrayOrList(item) ? [item] : item;
        }
        function hide(el) {
          el = getList(el);
          for (var i = 0; i < el.length; i++) {
            el[i].style.display = "none";
          }
          return el;
        }
        function show(el) {
          el = getList(el);
          for (var i = 0; i < el.length; i++) {
            el[i].style.display = "block";
          }
          return el;
        }
        function isArrayOrList(el) {
          return Object.prototype.toString.call(el) === "[object Array]" || Object.prototype.toString.call(el) === "[object NodeList]";
        }
        function addClass(el, className) {
          el = getList(el);
          for (var i = 0; i < el.length; i++) {
            var item = el[i];
            item.classList.add(className);
          }
          return el;
        }
        function removeClass(el, className) {
          el = getList(el);
          var classNames = className.split(" ");
          for (var a = 0; a < classNames.length; a++) {
            className = classNames[a];
            for (var i = 0; i < el.length; i++) {
              var item = el[i];
              item.classList.remove(className);
            }
          }
          return el;
        }
        function appendTo(el, parent) {
          parent.appendChild(el);
        }
        function wrap(toWrap, wrapper, isWrapAll) {
          var newParent;
          wrapper = wrapper || doc.createElement("div");
          for (var i = 0; i < toWrap.length; i++) {
            var item = toWrap[i];
            if (isWrapAll && !i || !isWrapAll) {
              newParent = wrapper.cloneNode(true);
              item.parentNode.insertBefore(newParent, item);
            }
            newParent.appendChild(item);
          }
          return toWrap;
        }
        function wrapAll(toWrap, wrapper) {
          wrap(toWrap, wrapper, true);
        }
        function wrapInner(parent, wrapper) {
          parent.appendChild(wrapper);
          while (parent.firstChild !== wrapper) {
            wrapper.appendChild(parent.firstChild);
          }
        }
        function unwrap(wrapper) {
          var wrapperContent = doc.createDocumentFragment();
          while (wrapper.firstChild) {
            wrapperContent.appendChild(wrapper.firstChild);
          }
          wrapper.parentNode.replaceChild(wrapperContent, wrapper);
        }
        function closest(el, selector) {
          if (el && el.nodeType === 1) {
            if (matches(el, selector)) {
              return el;
            }
            return closest(el.parentNode, selector);
          }
          return null;
        }
        function after(reference, el) {
          insertBefore(reference, reference.nextSibling, el);
        }
        function before(reference, el) {
          insertBefore(reference, reference, el);
        }
        function insertBefore(reference, beforeElement, el) {
          if (!isArrayOrList(el)) {
            if (typeof el == "string") {
              el = createElementFromHTML(el);
            }
            el = [el];
          }
          for (var i = 0; i < el.length; i++) {
            reference.parentNode.insertBefore(el[i], beforeElement);
          }
        }
        function getScrollTop() {
          var docElement = doc.documentElement;
          return (win.pageYOffset || docElement.scrollTop) - (docElement.clientTop || 0);
        }
        function siblings(el) {
          return Array.prototype.filter.call(el.parentNode.children, function(child) {
            return child !== el;
          });
        }
        function preventDefault(event) {
          event.preventDefault();
        }
        function getAttr(el, attr) {
          return el.getAttribute(attr);
        }
        function docAddEvent(event, callback, options) {
          doc.addEventListener(event, callback, options === "undefined" ? null : options);
        }
        function windowAddEvent(event, callback, options) {
          win.addEventListener(event, callback, options === "undefined" ? null : options);
        }
        function docRemoveEvent(event, callback, options) {
          doc.removeEventListener(event, callback, options === "undefined" ? null : options);
        }
        function windowRemoveEvent(event, callback, options) {
          win.removeEventListener(event, callback, options === "undefined" ? null : options);
        }
        function isFunction(item) {
          if (typeof item === "function") {
            return true;
          }
          var type = Object.prototype.toString.call(item);
          return type === "[object Function]" || type === "[object GeneratorFunction]";
        }
        function trigger2(el, eventName, data2) {
          var event;
          data2 = typeof data2 === "undefined" ? {} : data2;
          if (typeof win.CustomEvent === "function") {
            event = new CustomEvent(eventName, {
              detail: data2
            });
          } else {
            event = doc.createEvent("CustomEvent");
            event.initCustomEvent(eventName, true, true, data2);
          }
          el.dispatchEvent(event);
        }
        function matches(el, selector) {
          return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
        }
        function toggle(el, value) {
          if (typeof value === "boolean") {
            for (var i = 0; i < el.length; i++) {
              el[i].style.display = value ? "block" : "none";
            }
          }
          return el;
        }
        function createElementFromHTML(htmlString) {
          var div = doc.createElement("div");
          div.innerHTML = htmlString.trim();
          return div.firstChild;
        }
        function remove(items) {
          items = getList(items);
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item && item.parentElement) {
              item.parentNode.removeChild(item);
            }
          }
        }
        function untilAll(item, selector, fn) {
          var sibling = item[fn];
          var siblings2 = [];
          while (sibling) {
            if (matches(sibling, selector) || selector == null) {
              siblings2.push(sibling);
            }
            sibling = sibling[fn];
          }
          return siblings2;
        }
        function nextAll(item, selector) {
          return untilAll(item, selector, "nextElementSibling");
        }
        function prevAll(item, selector) {
          return untilAll(item, selector, "previousElementSibling");
        }
        function toArray(objectData) {
          return Object.keys(objectData).map(function(key) {
            return objectData[key];
          });
        }
        function getLast(items) {
          return items[items.length - 1];
        }
        function getAverage(elements, number) {
          var sum = 0;
          var lastElements = elements.slice(Math.max(elements.length - number, 1));
          for (var i = 0; i < lastElements.length; i++) {
            sum = sum + lastElements[i];
          }
          return Math.ceil(sum / number);
        }
        function setSrc(element, attribute) {
          element.setAttribute(attribute, getAttr(element, "data-" + attribute));
          element.removeAttribute("data-" + attribute);
        }
        function getParentsUntil(item, topParentSelector) {
          var parents = [item];
          do {
            item = item.parentNode;
            parents.push(item);
          } while (!matches(item, topParentSelector));
          return parents;
        }
        function isInsideInput() {
          var activeElement = doc.activeElement;
          return matches(activeElement, "textarea") || matches(activeElement, "input") || matches(activeElement, "select") || getAttr(activeElement, "contentEditable") == "true" || getAttr(activeElement, "contentEditable") == "";
        }
        window["fp_utils"] = {
          "$": $,
          "deepExtend": deepExtend,
          "hasClass": hasClass,
          "getWindowHeight": getWindowHeight,
          "css": css,
          "prev": prev,
          "next": next,
          "last": last,
          "index": index,
          "getList": getList,
          "hide": hide,
          "show": show,
          "isArrayOrList": isArrayOrList,
          "addClass": addClass,
          "removeClass": removeClass,
          "appendTo": appendTo,
          "wrap": wrap,
          "wrapAll": wrapAll,
          "unwrap": unwrap,
          "closest": closest,
          "after": after,
          "before": before,
          "insertBefore": insertBefore,
          "getScrollTop": getScrollTop,
          "siblings": siblings,
          "preventDefault": preventDefault,
          "isFunction": isFunction,
          "trigger": trigger2,
          "matches": matches,
          "toggle": toggle,
          "createElementFromHTML": createElementFromHTML,
          "remove": remove,
          // "filter": filter,
          "untilAll": untilAll,
          "nextAll": nextAll,
          "prevAll": prevAll,
          "showError": showError
        };
        var utils = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          showError,
          isVisible,
          getVisible,
          $,
          deepExtend,
          hasClass,
          getWindowHeight,
          getWindowWidth,
          css,
          prev,
          next,
          last,
          index,
          getList,
          hide,
          show,
          isArrayOrList,
          addClass,
          removeClass,
          appendTo,
          wrap,
          wrapAll,
          wrapInner,
          unwrap,
          closest,
          after,
          before,
          insertBefore,
          getScrollTop,
          siblings,
          preventDefault,
          getAttr,
          docAddEvent,
          windowAddEvent,
          docRemoveEvent,
          windowRemoveEvent,
          isFunction,
          trigger: trigger2,
          matches,
          toggle,
          createElementFromHTML,
          remove,
          untilAll,
          nextAll,
          prevAll,
          toArray,
          getLast,
          getAverage,
          setSrc,
          getParentsUntil,
          isInsideInput
        });
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        var EventEmitter = {
          events: {},
          on: function on2(event, listener) {
            var _this = this;
            if (_typeof(this.events[event]) !== "object") {
              this.events[event] = [];
            }
            this.events[event].push(listener);
            return function() {
              return _this.removeListener(event, listener);
            };
          },
          removeListener: function removeListener(event, listener) {
            if (_typeof(this.events[event]) === "object") {
              var idx = this.events[event].indexOf(listener);
              if (idx > -1) {
                this.events[event].splice(idx, 1);
              }
            }
          },
          emit: function emit(event) {
            var _this2 = this;
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            if (_typeof(this.events[event]) === "object") {
              this.events[event].forEach(function(listener) {
                return listener.apply(_this2, args);
              });
            }
          },
          once: function once2(event, listener) {
            var _this3 = this;
            var remove2 = this.on(event, function() {
              remove2();
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              listener.apply(_this3, args);
            });
          }
        };
        var state = {
          numSections: 0,
          numSlides: 0,
          slides: [],
          sections: [],
          activeSection: null,
          scrollTrigger: null,
          isBeyondFullpage: false,
          aboutToScrollToFullPage: false,
          slideMoving: false,
          isResizing: false,
          isScrolling: false,
          lastScrolledDestiny: void 0,
          lastScrolledSlide: void 0,
          activeAnimation: false,
          canScroll: true,
          touchDirection: "none",
          wheelDirection: "none",
          isGrabbing: false,
          isUsingWheel: false,
          isWindowFocused: true,
          previousDestTop: 0,
          windowsHeight: getWindowHeight(),
          isDoingContinousVertical: false,
          timeouts: {},
          scrollY: 0,
          scrollX: 0
        };
        win.state = state;
        function setState(props) {
          Object.assign(state, props);
        }
        function getState() {
          return state;
        }
        function getActivePanel() {
          return state.activeSection && state.activeSection.activeSlide ? state.activeSection.activeSlide : state.activeSection;
        }
        var events = {
          onAfterRenderNoAnchor: "onAfterRenderNoAnchor",
          onClickOrTouch: "onClickOrTouch",
          moveSlideLeft: "moveSlideLeft",
          moveSlideRight: "moveSlideRight",
          onInitialise: "onInitialise",
          beforeInit: "beforeInit",
          bindEvents: "bindEvents",
          onDestroy: "onDestroy",
          contentChanged: "contentChanged",
          onScrollOverflowScrolled: "onScrollOverflowScrolled",
          onScrollPageAndSlide: "onScrollPageAndSlide",
          onKeyDown: "onKeyDown",
          onMenuClick: "onMenuClick",
          scrollPage: "scrollPage",
          landscapeScroll: "landscapeScroll",
          scrollBeyondFullpage: "scrollBeyondFullpage",
          onPerformMovement: "onPerformMovement",
          onSlideLeave: "onSlideLeave",
          onLeave: "onLeave",
          afterSectionLoads: "afterSectionLoads",
          afterSlideLoads: "afterSlideLoads"
        };
        EventEmitter.on(events.bindEvents, bindEvents$c);
        function bindEvents$c() {
          ["click", "touchstart"].forEach(function(eventName) {
            docAddEvent(eventName, delegatedEvents);
          });
          windowAddEvent("focus", focusHandler);
          internalEvents();
        }
        function internalEvents() {
          EventEmitter.on(events.onDestroy, onDestroy$9);
        }
        function delegatedEvents(e) {
          EventEmitter.emit(events.onClickOrTouch, {
            e,
            target: e.target
          });
        }
        function onDestroy$9() {
          ["click", "touchstart"].forEach(function(eventName) {
            docRemoveEvent(eventName, delegatedEvents);
          });
        }
        function focusHandler() {
          setState({
            isWindowFocused: true
          });
        }
        var WRAPPER = "fullpage-wrapper";
        var WRAPPER_SEL = "." + WRAPPER;
        var SCROLLABLE = "fp-scrollable";
        var RESPONSIVE = "fp-responsive";
        var NO_TRANSITION = "fp-notransition";
        var DESTROYED = "fp-destroyed";
        var ENABLED = "fp-enabled";
        var VIEWING_PREFIX = "fp-viewing";
        var ACTIVE = "active";
        var ACTIVE_SEL = "." + ACTIVE;
        var COMPLETELY = "fp-completely";
        var COMPLETELY_SEL = "." + COMPLETELY;
        var SECTION_DEFAULT_SEL = ".section";
        var SECTION = "fp-section";
        var SECTION_SEL = "." + SECTION;
        var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
        var TABLE_CELL = "fp-tableCell";
        var TABLE_CELL_SEL = "." + TABLE_CELL;
        var AUTO_HEIGHT = "fp-auto-height";
        var AUTO_HEIGHT_SEL = "." + AUTO_HEIGHT;
        var AUTO_HEIGHT_RESPONSIVE = "fp-auto-height-responsive";
        var AUTO_HEIGHT_RESPONSIVE_SEL = "." + AUTO_HEIGHT_RESPONSIVE;
        var NORMAL_SCROLL = "fp-normal-scroll";
        var SECTION_NAV = "fp-nav";
        var SECTION_NAV_SEL = "#" + SECTION_NAV;
        var SECTION_NAV_TOOLTIP = "fp-tooltip";
        var SECTION_NAV_TOOLTIP_SEL = "." + SECTION_NAV_TOOLTIP;
        var SHOW_ACTIVE_TOOLTIP = "fp-show-active";
        var SLIDE_DEFAULT_SEL = ".slide";
        var SLIDE = "fp-slide";
        var SLIDE_SEL = "." + SLIDE;
        var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
        var SLIDES_WRAPPER = "fp-slides";
        var SLIDES_WRAPPER_SEL = "." + SLIDES_WRAPPER;
        var SLIDES_CONTAINER = "fp-slidesContainer";
        var SLIDES_CONTAINER_SEL = "." + SLIDES_CONTAINER;
        var TABLE = "fp-table";
        var OVERFLOW = "fp-overflow";
        var OVERFLOW_SEL = "." + OVERFLOW;
        var IS_OVERFLOW = "fp-is-overflow";
        var SLIDES_NAV = "fp-slidesNav";
        var SLIDES_NAV_SEL = "." + SLIDES_NAV;
        var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + " a";
        var SLIDES_STYLED_ARROW = "fp-arrow";
        var SLIDES_ARROW = "fp-controlArrow";
        var SLIDES_ARROW_SEL = "." + SLIDES_ARROW;
        var SLIDES_PREV = "fp-prev";
        var SLIDES_PREV_SEL = "." + SLIDES_PREV;
        var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
        var SLIDES_NEXT = "fp-next";
        var SLIDES_NEXT_SEL = "." + SLIDES_NEXT;
        var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;
        var defaultOptions = {
          //navigation
          menu: false,
          anchors: [],
          lockAnchors: false,
          navigation: false,
          navigationPosition: "right",
          navigationTooltips: [],
          showActiveTooltip: false,
          slidesNavigation: false,
          slidesNavPosition: "bottom",
          scrollBar: false,
          hybrid: false,
          licenseKey: "",
          credits: {
            "enabled": true,
            "label": "Made with fullPage.js",
            "position": "right"
          },
          //scrolling
          css3: true,
          scrollingSpeed: 700,
          autoScrolling: true,
          fitToSection: true,
          fitToSectionDelay: 600,
          easing: "easeInOutCubic",
          easingcss3: "ease",
          loopBottom: false,
          loopTop: false,
          loopHorizontal: true,
          continuousVertical: false,
          continuousHorizontal: false,
          scrollHorizontally: false,
          interlockedSlides: false,
          dragAndMove: false,
          offsetSections: false,
          resetSliders: false,
          fadingEffect: false,
          normalScrollElements: null,
          scrollOverflow: true,
          scrollOverflowReset: false,
          touchSensitivity: 5,
          touchWrapper: null,
          bigSectionsDestination: null,
          //Accessibility
          keyboardScrolling: true,
          animateAnchor: true,
          recordHistory: true,
          allowCorrectDirection: false,
          //design
          scrollOverflowMacStyle: true,
          controlArrows: true,
          controlArrowsHTML: ['<div class="' + SLIDES_STYLED_ARROW + '"></div>', '<div class="' + SLIDES_STYLED_ARROW + '"></div>'],
          controlArrowColor: "#fff",
          verticalCentered: true,
          sectionsColor: [],
          paddingTop: 0,
          paddingBottom: 0,
          fixedElements: null,
          responsive: 0,
          //backwards compabitility with responsiveWiddth
          responsiveWidth: 0,
          responsiveHeight: 0,
          responsiveSlides: false,
          parallax: false,
          parallaxOptions: {
            type: "reveal",
            percentage: 62,
            property: "translate"
          },
          cards: false,
          cardsOptions: {
            perspective: 100,
            fadeContent: true,
            fadeBackground: true
          },
          //Custom selectors
          sectionSelector: SECTION_DEFAULT_SEL,
          slideSelector: SLIDE_DEFAULT_SEL,
          //events
          afterLoad: null,
          beforeLeave: null,
          onLeave: null,
          afterRender: null,
          afterResize: null,
          afterReBuild: null,
          afterSlideLoad: null,
          onSlideLeave: null,
          afterResponsive: null,
          onScrollOverflow: null,
          lazyLoading: true,
          observer: true,
          scrollBeyondFullpage: true
        };
        var container = null;
        var g_initialAnchorsInDom = false;
        var originals = deepExtend({}, defaultOptions);
        var g_options = null;
        function getInitialAnchorsInDom() {
          return g_initialAnchorsInDom;
        }
        function setContainer(value) {
          container = value;
        }
        function getContainer(value) {
          return container;
        }
        function getOptions() {
          return g_options || defaultOptions;
        }
        function setOptions(options) {
          g_options = deepExtend({}, defaultOptions, options);
          originals = Object.assign({}, g_options);
        }
        function getOriginals() {
          return originals;
        }
        function setOption(name, value) {
          defaultOptions[name] = value;
        }
        function setVariableState(variable, value, type) {
          g_options[variable] = value;
          if (type !== "internal") {
            originals[variable] = value;
          }
        }
        function setOptionsFromDOM() {
          if (!getOptions().anchors.length) {
            var anchorsAttribute = "[data-anchor]";
            var anchors = $(getOptions().sectionSelector.split(",").join(anchorsAttribute + ",") + anchorsAttribute, container);
            if (anchors.length && anchors.length === $(getOptions().sectionSelector, container).length) {
              g_initialAnchorsInDom = true;
              anchors.forEach(function(item) {
                getOptions().anchors.push(getAttr(item, "data-anchor").toString());
              });
            }
          }
          if (!getOptions().navigationTooltips.length) {
            var tooltipsAttribute = "[data-tooltip]";
            var tooltips = $(getOptions().sectionSelector.split(",").join(tooltipsAttribute + ",") + tooltipsAttribute, container);
            if (tooltips.length) {
              tooltips.forEach(function(item) {
                getOptions().navigationTooltips.push(getAttr(item, "data-tooltip").toString());
              });
            }
          }
        }
        var plainItem = function plainItem2(panel) {
          this.anchor = panel.anchor;
          this.item = panel.item;
          this.index = panel.index();
          this.isLast = this.index === panel.item.parentElement.querySelectorAll(panel.selector).length - 1;
          this.isFirst = !this.index;
          this.isActive = panel.isActive;
        };
        var Item = function Item2(el, selector) {
          this.parent = this.parent || null;
          this.selector = selector;
          this.anchor = getAttr(el, "data-anchor") || getOptions().anchors[index(el, getOptions().sectionSelector)];
          this.item = el;
          this.isVisible = isVisible(el);
          this.isActive = hasClass(el, ACTIVE);
          this.hasScroll = hasClass(el, OVERFLOW) || $(OVERFLOW_SEL, el)[0] != null;
          this.isSection = selector === getOptions().sectionSelector;
          this.container = closest(el, SLIDES_CONTAINER_SEL) || closest(el, WRAPPER_SEL);
          this.index = function() {
            return this.siblings().indexOf(this);
          };
        };
        Item.prototype.siblings = function() {
          if (this.isSection) {
            if (this.isVisible) {
              return state.sections;
            } else {
              return state.sectionsIncludingHidden;
            }
          }
          return this.parent ? this.parent.slides : 0;
        };
        Item.prototype.prev = function() {
          var siblings2 = this.siblings();
          var currentIndex = this.isSection ? siblings2.indexOf(this) : this.parent.slides.indexOf(this);
          var prevIndex = currentIndex - 1;
          if (prevIndex >= 0) {
            return siblings2[prevIndex];
          }
          return null;
        };
        Item.prototype.next = function() {
          var siblings2 = this.siblings();
          var currentIndex = this.isSection ? siblings2.indexOf(this) : this.parent.slides.indexOf(this);
          var nextIndex = currentIndex + 1;
          if (nextIndex < siblings2.length) {
            return siblings2[nextIndex];
          }
          return null;
        };
        Item.prototype["prevPanel"] = function() {
          return this.prev() || (this.parent ? this.parent.prev() : null);
        };
        Item.prototype["nextPanel"] = function() {
          return this.next() || (this.parent ? this.parent.next() : null);
        };
        Item.prototype.getSiblings = function() {
          if (this.isSection) {
            return state.sections;
          }
          return state.panels;
        };
        function getNodes(panels) {
          return panels.map(function(panel) {
            return panel.item;
          });
        }
        function getPanelByElement(panels, el) {
          return panels.find(function(panel) {
            return panel.item === el;
          });
        }
        var Section = function Section2(el) {
          plainItem.call(this, el);
        };
        var Slide = function Slide2(el) {
          plainItem.call(this, el);
        };
        function getSlideOrSection(destiny) {
          var slide = $(SLIDE_ACTIVE_SEL, destiny);
          if (slide.length) {
            destiny = slide[0];
          }
          return destiny;
        }
        function getSlideOrSectionPanel(panel) {
          if (!panel) {
            return null;
          }
          return panel.activeSlide ? panel.activeSlide : panel;
        }
        function isFullPageAbove() {
          return getContainer().getBoundingClientRect().bottom >= 0;
        }
        function getScrollSettings(top) {
          var options = getOptions();
          var position;
          var element;
          if (options.autoScrolling && !options.scrollBar) {
            position = -top;
            element = $(WRAPPER_SEL)[0];
          } else {
            position = top;
            element = window;
          }
          return {
            options: position,
            element
          };
        }
        function setScrolling(element, val) {
          if (!getOptions().autoScrolling || getOptions().scrollBar || element.self != window && hasClass(element, SLIDES_WRAPPER)) {
            if (element.self != window && hasClass(element, SLIDES_WRAPPER)) {
              element.scrollLeft = val;
            } else {
              element.scrollTo(0, val);
            }
          } else {
            element.style.top = val + "px";
          }
        }
        function addAnimation(element) {
          var transition2 = "transform " + getOptions().scrollingSpeed + "ms " + getOptions().easingcss3;
          removeClass(element, NO_TRANSITION);
          return css(element, {
            "-webkit-transition": transition2,
            "transition": transition2
          });
        }
        function getYmovement(activeSection, destiny) {
          var fromIndex = activeSection.index();
          var toIndex = index(destiny, SECTION_SEL);
          if (fromIndex == toIndex) {
            return "none";
          }
          if (fromIndex > toIndex) {
            return "up";
          }
          return "down";
        }
        function removeAnimation(element) {
          return addClass(element, NO_TRANSITION);
        }
        function getTransforms(translate3d) {
          return {
            "-webkit-transform": translate3d,
            "-moz-transform": translate3d,
            "-ms-transform": translate3d,
            "transform": translate3d
          };
        }
        var silentScrollId;
        function transformContainer(translate3d, animated) {
          if (animated) {
            addAnimation(getContainer());
          } else {
            removeAnimation(getContainer());
          }
          clearTimeout(silentScrollId);
          css(getContainer(), getTransforms(translate3d));
          FP.test.translate3d = translate3d;
          silentScrollId = setTimeout(function() {
            removeClass(getContainer(), NO_TRANSITION);
          }, 10);
        }
        function silentScroll(top) {
          var roundedTop = Math.round(top);
          if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
            var translate3d = "translate3d(0px, -" + roundedTop + "px, 0px)";
            transformContainer(translate3d, false);
          } else if (getOptions().autoScrolling && !getOptions().scrollBar) {
            css(getContainer(), {
              "top": -roundedTop + "px"
            });
            FP.test.top = -roundedTop + "px";
          } else {
            var scrollSettings = getScrollSettings(roundedTop);
            setScrolling(scrollSettings.element, scrollSettings.options);
          }
        }
        FP.setScrollingSpeed = setScrollingSpeed;
        function setScrollingSpeed(value, type) {
          setVariableState("scrollingSpeed", value, type);
        }
        var $body = null;
        var $html = null;
        var $htmlBody = null;
        function setCache() {
          $body = $("body")[0];
          $html = $("html")[0];
          $htmlBody = $("html, body");
        }
        var _g_animateScroll;
        function scrollTo(element, to, duration, callback) {
          var start2 = getScrolledPosition(element);
          var change = to - start2;
          var isCallbackFired = false;
          var startTime;
          var wasAnimationActive = state.activeAnimation;
          setState({
            activeAnimation: true
          });
          if (_g_animateScroll) {
            window.cancelAnimationFrame(_g_animateScroll);
          }
          _g_animateScroll = function g_animateScroll(timestamp) {
            if (!startTime) {
              startTime = timestamp;
            }
            var currentTime = Math.floor(timestamp - startTime);
            if (state.activeAnimation) {
              var val = to;
              if (duration) {
                val = win.fp_easings[getOptions().easing](currentTime, start2, change, duration);
              }
              if (currentTime <= duration) {
                setScrolling(element, val);
              }
              if (currentTime < duration) {
                window.requestAnimationFrame(_g_animateScroll);
              } else if (typeof callback !== "undefined" && !isCallbackFired) {
                callback();
                setState({
                  activeAnimation: false
                });
                isCallbackFired = true;
              }
            } else if (!isCallbackFired && !wasAnimationActive) {
              callback();
              setState({
                activeAnimation: false
              });
              isCallbackFired = true;
            }
          };
          window.requestAnimationFrame(_g_animateScroll);
        }
        function getScrolledPosition(element) {
          var position;
          if (element.self != win && hasClass(element, SLIDES_WRAPPER)) {
            position = element.scrollLeft;
          } else if (!getOptions().autoScrolling || getOptions().scrollBar) {
            position = getScrollTop();
          } else {
            position = element.offsetTop;
          }
          return position;
        }
        function nullOrSection(el) {
          if (el && !el.item) {
            return new Section(new SectionPanel(el));
          }
          return el ? new Section(el) : null;
        }
        function nullOrSlide(el) {
          return el ? new Slide(el) : null;
        }
        function fireCallback(eventName, v) {
          var eventData = getEventData(eventName, v);
          trigger2(getContainer(), eventName, eventData);
          if (getOptions()[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false) {
            return false;
          }
          return true;
        }
        function getEventData(eventName, v) {
          var paramsPerEvent = {
            afterRender: function afterRender2() {
              return {
                section: nullOrSection(getState().activeSection),
                slide: nullOrSlide(getState().activeSection.activeSlide)
              };
            },
            onLeave: function onLeave() {
              return {
                origin: nullOrSection(v.items.origin),
                destination: nullOrSection(v.items.destination),
                direction: v.direction,
                trigger: getState().scrollTrigger
              };
            },
            afterLoad: function afterLoad() {
              return paramsPerEvent.onLeave();
            },
            afterSlideLoad: function afterSlideLoad() {
              return {
                section: nullOrSection(v.items.section),
                origin: nullOrSection(v.items.origin),
                destination: nullOrSection(v.items.destination),
                direction: v.direction,
                trigger: getState().scrollTrigger
              };
            },
            onSlideLeave: function onSlideLeave() {
              return paramsPerEvent.afterSlideLoad();
            },
            beforeLeave: function beforeLeave() {
              return paramsPerEvent.onLeave();
            },
            onScrollOverflow: function onScrollOverflow() {
              return {
                section: nullOrSection(getState().activeSection),
                slide: nullOrSlide(getState().activeSection.activeSlide),
                position: v.position,
                direction: v.direction
              };
            }
          };
          return paramsPerEvent[eventName]();
        }
        function playMedia(destiny) {
          var panel = getSlideOrSection(destiny);
          $("video, audio", panel).forEach(function(element) {
            if (element.hasAttribute("data-autoplay") && typeof element.play === "function") {
              element.play();
            }
          });
          $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element) {
            if (element.hasAttribute("data-autoplay")) {
              playYoutube(element);
            }
            element.onload = function() {
              if (element.hasAttribute("data-autoplay")) {
                playYoutube(element);
              }
            };
          });
        }
        function playYoutube(element) {
          element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
        }
        function stopMedia(destiny) {
          var panel = getSlideOrSection(destiny);
          $("video, audio", panel).forEach(function(element) {
            if (!element.hasAttribute("data-keepplaying") && typeof element.pause === "function") {
              element.pause();
            }
          });
          $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element) {
            if (/youtube\.com\/embed\//.test(getAttr(element, "src")) && !element.hasAttribute("data-keepplaying")) {
              element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            }
          });
        }
        function enableYoutubeAPI() {
          $('iframe[src*="youtube.com/embed/"]', getContainer()).forEach(function(item) {
            addURLParam(item, "enablejsapi=1");
          });
        }
        function addURLParam(element, newParam) {
          var originalSrc = getAttr(element, "src");
          element.setAttribute("src", originalSrc + getUrlParamSign(originalSrc) + newParam);
        }
        function getUrlParamSign(url) {
          return !/\?/.test(url) ? "?" : "&";
        }
        function lazyLoad(destiny) {
          if (!getOptions().lazyLoading) {
            return;
          }
          var panel = getSlideOrSection(destiny);
          $("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", panel).forEach(function(element) {
            ["src", "srcset"].forEach(function(type) {
              var attribute = getAttr(element, "data-" + type);
              if (attribute != null && attribute) {
                setSrc(element, type);
                element.addEventListener("load", function() {
                });
              }
            });
            if (matches(element, "source")) {
              var elementToPlay = closest(element, "video, audio");
              if (elementToPlay) {
                elementToPlay.load();
                elementToPlay.onloadeddata = function() {
                };
              }
            }
          });
        }
        function setBodyClass() {
          var section = getState().activeSection.item;
          var slide = getState().activeSection.activeSlide;
          var sectionAnchor = getAnchor(section);
          var text = String(sectionAnchor);
          if (slide) {
            var slideAnchor = getAnchor(slide.item);
            text = text + "-" + slideAnchor;
          }
          text = text.replace("/", "-").replace("#", "");
          var classRe = new RegExp("\\b\\s?" + VIEWING_PREFIX + "-[^\\s]+\\b", "g");
          $body.className = $body.className.replace(classRe, "");
          addClass($body, VIEWING_PREFIX + "-" + text);
        }
        function getAnchor(element) {
          if (!element) {
            return null;
          }
          var anchor = getAttr(element, "data-anchor");
          var elementIndex = index(element);
          if (anchor == null) {
            anchor = elementIndex;
          }
          return anchor;
        }
        function setPageStatus(slideIndex, slideAnchor, anchorLink) {
          var sectionHash = "";
          if (getOptions().anchors.length && !getOptions().lockAnchors) {
            if (slideIndex) {
              if (anchorLink != null) {
                sectionHash = anchorLink;
              }
              if (slideAnchor == null) {
                slideAnchor = slideIndex;
              }
              setState({
                lastScrolledSlide: slideAnchor
              });
              setUrlHash(sectionHash + "/" + slideAnchor);
            } else if (slideIndex != null) {
              setState({
                lastScrolledSlide: slideAnchor
              });
              setUrlHash(anchorLink);
            } else {
              setUrlHash(anchorLink);
            }
          }
          setBodyClass();
        }
        function setUrlHash(url) {
          if (getOptions().recordHistory) {
            location.hash = url;
          } else {
            if (isTouchDevice || isTouch) {
              win.history.replaceState(void 0, void 0, "#" + url);
            } else {
              var baseUrl = win.location.href.split("#")[0];
              win.location.replace(baseUrl + "#" + url);
            }
          }
        }
        function getBulletLinkName(i, defaultName, item) {
          var anchor = defaultName === "Section" ? getOptions().anchors[i] : getAttr(item, "data-anchor");
          return encodeURI(getOptions().navigationTooltips[i] || anchor || defaultName + " " + (i + 1));
        }
        function slideBulletHandler(e) {
          if (e.cancelable) {
            preventDefault(e);
          }
          setState({
            scrollTrigger: "horizontalNav"
          });
          var sectionElem = closest(this, SECTION_SEL);
          var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
          var section = getPanelByElement(getState().sections, sectionElem);
          var destiny = section.slides[index(closest(this, "li"))];
          EventEmitter.emit(events.landscapeScroll, {
            slides,
            destination: destiny.item
          });
        }
        function activeSlidesNavigation(slidesNav, slideIndex) {
          if (getOptions().slidesNavigation && slidesNav != null) {
            removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
            addClass($("a", $("li", slidesNav)[slideIndex]), ACTIVE);
          }
        }
        function addSlidesNavigation(section) {
          var sectionElem = section.item;
          var numSlides = section.slides.length;
          appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), sectionElem);
          var nav = $(SLIDES_NAV_SEL, sectionElem)[0];
          addClass(nav, "fp-" + getOptions().slidesNavPosition);
          for (var i = 0; i < numSlides; i++) {
            var slide = $(SLIDE_SEL, sectionElem)[i];
            appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">' + getBulletLinkName(i, "Slide", slide) + "</span><span></span></a></li>"), $("ul", nav)[0]);
          }
          css(nav, {
            "margin-left": "-" + nav.innerWidth / 2 + "px"
          });
          var activeSlideIndex = section.activeSlide ? section.activeSlide.index() : 0;
          addClass($("a", $("li", nav)[activeSlideIndex]), ACTIVE);
        }
        var isScrollAllowed = {};
        isScrollAllowed.m = {
          "up": true,
          "down": true,
          "left": true,
          "right": true
        };
        isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
        function setIsScrollAllowed(value, direction, type) {
          if (direction !== "all") {
            isScrollAllowed[type][direction] = value;
          } else {
            Object.keys(isScrollAllowed[type]).forEach(function(key) {
              isScrollAllowed[type][key] = value;
            });
          }
        }
        function getIsScrollAllowed() {
          return isScrollAllowed;
        }
        EventEmitter.on(events.onClickOrTouch, onClickOrTouch$2);
        function onClickOrTouch$2(params) {
          var target = params.target;
          if (matches(target, SLIDES_ARROW_SEL) || closest(target, SLIDES_ARROW_SEL)) {
            slideArrowHandler.call(target, params);
          }
        }
        function slideArrowHandler() {
          var section = closest(this, SECTION_SEL);
          if (hasClass(this, SLIDES_PREV)) {
            if (getIsScrollAllowed().m.left) {
              setState({
                scrollTrigger: "slideArrow"
              });
              EventEmitter.emit(events.moveSlideLeft, {
                section
              });
            }
          } else {
            if (getIsScrollAllowed().m.right) {
              setState({
                scrollTrigger: "slideArrow"
              });
              EventEmitter.emit(events.moveSlideRight, {
                section
              });
            }
          }
        }
        function createSlideArrows(section) {
          var sectionElem = section.item;
          var arrows = [createElementFromHTML(getOptions().controlArrowsHTML[0]), createElementFromHTML(getOptions().controlArrowsHTML[1])];
          after($(SLIDES_WRAPPER_SEL, sectionElem)[0], arrows);
          addClass(arrows, SLIDES_ARROW);
          addClass(arrows[0], SLIDES_PREV);
          addClass(arrows[1], SLIDES_NEXT);
          if (getOptions().controlArrowColor !== "#fff") {
            css($(SLIDES_ARROW_NEXT_SEL, sectionElem), {
              "border-color": "transparent transparent transparent " + getOptions().controlArrowColor
            });
            css($(SLIDES_ARROW_PREV_SEL, sectionElem), {
              "border-color": "transparent " + getOptions().controlArrowColor + " transparent transparent"
            });
          }
          if (!getOptions().loopHorizontal) {
            hide($(SLIDES_ARROW_PREV_SEL, sectionElem));
          }
        }
        function toggleControlArrows(v) {
          if (!getOptions().loopHorizontal && getOptions().controlArrows) {
            toggle($(SLIDES_ARROW_PREV_SEL, v.section), v.slideIndex !== 0);
            toggle($(SLIDES_ARROW_NEXT_SEL, v.section), next(v.destiny) != null);
          }
        }
        FP.setRecordHistory = setRecordHistory;
        function setRecordHistory(value, type) {
          setVariableState("recordHistory", value, type);
        }
        FP.setAutoScrolling = setAutoScrolling;
        FP.test.setAutoScrolling = setAutoScrolling;
        function setAutoScrolling(value, type) {
          if (!value) {
            silentScroll(0);
          }
          setVariableState("autoScrolling", value, type);
          var element = getState().activeSection.item;
          if (getOptions().autoScrolling && !getOptions().scrollBar) {
            css($htmlBody, {
              "overflow": "hidden",
              "height": "100%"
            });
            removeClass($body, "fp-scrollable");
            setRecordHistory(getOriginals().recordHistory, "internal");
            css(getContainer(), {
              "-ms-touch-action": "none",
              "touch-action": "none"
            });
            if (element != null) {
              silentScroll(element.offsetTop);
            }
          } else {
            css($htmlBody, {
              "overflow": "visible",
              "height": "initial"
            });
            addClass($body, "fp-scrollable");
            var recordHistory = !getOptions().autoScrolling ? false : getOriginals().recordHistory;
            setRecordHistory(recordHistory, "internal");
            css(getContainer(), {
              "-ms-touch-action": "",
              "touch-action": ""
            });
            if (element != null) {
              var scrollSettings = getScrollSettings(element.offsetTop);
              scrollSettings.element.scrollTo(0, scrollSettings.options);
            }
          }
        }
        function createInfiniteSections(v) {
          setState({
            isDoingContinousVertical: true
          });
          var activeSectionItem = getState().activeSection.item;
          if (!v.isMovementUp) {
            after(activeSectionItem, prevAll(activeSectionItem, SECTION_SEL).reverse());
          } else {
            before(activeSectionItem, nextAll(activeSectionItem, SECTION_SEL));
          }
          silentScroll(getState().activeSection.item.offsetTop);
          keepSlidesPosition$1();
          v.wrapAroundElements = activeSectionItem;
          v.dtop = v.element.offsetTop;
          v.yMovement = getYmovement(getState().activeSection, v.element);
          return v;
        }
        function keepSlidesPosition$1() {
          var activeSlides = $(SLIDE_ACTIVE_SEL);
          for (var i = 0; i < activeSlides.length; i++) {
            silentLandscapeScroll(activeSlides[i], "internal");
          }
        }
        function keepSlidesPosition() {
          var activeSlides = $(SLIDE_ACTIVE_SEL);
          for (var i = 0; i < activeSlides.length; i++) {
            silentLandscapeScroll(activeSlides[i], "internal");
          }
        }
        function continuousVerticalFixSectionOrder(v) {
          if (v.wrapAroundElements == null) {
            return;
          }
          if (v.isMovementUp) {
            before($(SECTION_SEL)[0], v.wrapAroundElements);
          } else {
            after($(SECTION_SEL)[getState().sections.length - 1], v.wrapAroundElements);
          }
          silentScroll(getState().activeSection.item.offsetTop);
          keepSlidesPosition();
          setState({
            isDoingContinousVertical: false
          });
        }
        function lazyLoadOthers() {
          var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0];
          if (!getOptions().lazyLoading || !hasAutoHeightSections) {
            return;
          }
          $(SECTION_SEL + ":not(" + ACTIVE_SEL + ")").forEach(function(section) {
            if (isSectionInViewport(section)) {
              lazyLoad(section);
            }
          });
        }
        function isSectionInViewport(el) {
          var rect = el.getBoundingClientRect();
          var top = rect.top;
          var bottom = rect.bottom;
          var pixelOffset = 2;
          var isTopInView = top + pixelOffset < state.windowsHeight && top > 0;
          var isBottomInView = bottom > pixelOffset && bottom < state.windowsHeight;
          return isTopInView || isBottomInView;
        }
        function tooltipTextHandler() {
          trigger2(prev(this), "click");
        }
        function activateNavDots(name, sectionIndex) {
          var nav = $(SECTION_NAV_SEL)[0];
          if (getOptions().navigation && nav != null && nav.style.display !== "none") {
            removeClass($(ACTIVE_SEL, nav), ACTIVE);
            if (name) {
              addClass($('a[href="#' + name + '"]', nav), ACTIVE);
            } else {
              addClass($("a", $("li", nav)[sectionIndex]), ACTIVE);
            }
          }
        }
        function addVerticalNavigation() {
          remove($(SECTION_NAV_SEL));
          var navigation = doc.createElement("div");
          navigation.setAttribute("id", SECTION_NAV);
          var divUl = doc.createElement("ul");
          navigation.appendChild(divUl);
          appendTo(navigation, $body);
          var nav = $(SECTION_NAV_SEL)[0];
          addClass(nav, "fp-" + getOptions().navigationPosition);
          if (getOptions().showActiveTooltip) {
            addClass(nav, SHOW_ACTIVE_TOOLTIP);
          }
          var li = "";
          for (var i = 0; i < getState().sections.length; i++) {
            var section = getState().sections[i];
            var link = "";
            if (getOptions().anchors.length) {
              link = section.anchor;
            }
            li += '<li><a href="#' + encodeURI(link) + '"><span class="fp-sr-only">' + getBulletLinkName(section.index(), "Section") + "</span><span></span></a>";
            var tooltip = getOptions().navigationTooltips[section.index()];
            if (typeof tooltip !== "undefined" && tooltip !== "") {
              li += '<div class="' + SECTION_NAV_TOOLTIP + " fp-" + getOptions().navigationPosition + '">' + tooltip + "</div>";
            }
            li += "</li>";
          }
          $("ul", nav)[0].innerHTML = li;
          var bullet = $("li", $(SECTION_NAV_SEL)[0])[getState().activeSection.index()];
          addClass($("a", bullet), ACTIVE);
        }
        function sectionBulletHandler(e) {
          if (e.preventDefault) {
            preventDefault(e);
          }
          setState({
            scrollTrigger: "verticalNav"
          });
          var indexBullet = index(closest(this, SECTION_NAV_SEL + " li"));
          EventEmitter.emit(events.scrollPage, {
            destination: getState().sections[indexBullet]
          });
        }
        function activateMenuAndNav(anchor, index2) {
          activateMenuElement(anchor);
          activateNavDots(anchor, index2);
        }
        function activateMenuElement(name) {
          if (getOptions().menu && getOptions().menu.length) {
            $(getOptions().menu).forEach(function(menu) {
              if (menu != null) {
                removeClass($(ACTIVE_SEL, menu), ACTIVE);
                addClass($('[data-menuanchor="' + name + '"]', menu), ACTIVE);
              }
            });
          }
        }
        (/* @__PURE__ */ new Date()).getTime();
        var oncePerScroll = function() {
          var canTriggerEvent = true;
          var prevWheelTime = (/* @__PURE__ */ new Date()).getTime();
          var result;
          var isScrollingOnInit = !win.fullpage_api;
          return function(scrollTrigger, callback) {
            var currentTime = (/* @__PURE__ */ new Date()).getTime();
            var timeThreshold = scrollTrigger === "wheel" ? getOptions().scrollingSpeed : 100;
            canTriggerEvent = isScrollingOnInit || currentTime - prevWheelTime >= timeThreshold;
            isScrollingOnInit = !win.fullpage_api;
            if (canTriggerEvent) {
              result = callback();
              prevWheelTime = currentTime;
            }
            return typeof result !== "undefined" ? result : true;
          };
        }();
        function fireCallbackOncePerScroll(callbackName, params) {
          if (!isFunction(getOptions().beforeLeave)) {
            return;
          }
          var result = oncePerScroll(getState().scrollTrigger, function() {
            return fireCallback(callbackName, params);
          });
          return result;
        }
        FP.moveTo = moveTo;
        FP.getScrollY = function() {
          return state.scrollY;
        };
        var g_afterSectionLoadsId;
        var g_transitionLapseId;
        EventEmitter.on(events.onDestroy, onDestroy$8);
        function scrollPage(section, callback, isMovementUp) {
          var element = section.item;
          if (element == null) {
            return;
          }
          var dtop = getDestinationPosition(element);
          var slideAnchorLink;
          var slideIndex;
          var v = {
            "element": element,
            "callback": callback,
            "isMovementUp": isMovementUp,
            "dtop": dtop,
            "yMovement": getYmovement(getState().activeSection, element),
            "anchorLink": section.anchor,
            "sectionIndex": section.index(),
            "activeSlide": section.activeSlide ? section.activeSlide.item : null,
            "leavingSection": getState().activeSection.index() + 1,
            //caching the value of isResizing at the momment the function is called
            //because it will be checked later inside a setTimeout and the value might change
            "localIsResizing": state.isResizing,
            "items": {
              "origin": getState().activeSection,
              "destination": section
            },
            "direction": null
          };
          if (getState().activeSection.item == element && !state.isResizing || getOptions().scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT)) {
            return;
          }
          if (v.activeSlide != null) {
            slideAnchorLink = getAttr(v.activeSlide, "data-anchor");
            slideIndex = index(v.activeSlide, null);
          }
          if (!v.localIsResizing) {
            var direction = v.yMovement;
            if (typeof isMovementUp !== "undefined") {
              direction = isMovementUp ? "up" : "down";
            }
            v.direction = direction;
            if (isFunction(getOptions().beforeLeave)) {
              if (fireCallbackOncePerScroll("beforeLeave", v) === false) {
                return;
              }
            }
            if (isFunction(getOptions().onLeave)) {
              if (!fireCallback("onLeave", v)) {
                return;
              }
            }
          }
          if (getOptions().autoScrolling && getOptions().continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == "up" || // Intending to scroll down but about to go up or
          v.isMovementUp && v.yMovement == "down")) {
            v = createInfiniteSections(v);
          }
          if (!v.localIsResizing) {
            stopMedia(getState().activeSection.item);
          }
          addClass(element, ACTIVE);
          removeClass(siblings(element), ACTIVE);
          updateState();
          lazyLoad(element);
          setState({
            canScroll: FP.test.isTesting
          });
          setPageStatus(slideIndex, slideAnchorLink, v.anchorLink);
          EventEmitter.emit(events.onLeave, v);
          performMovement(v);
          setState({
            lastScrolledDestiny: v.anchorLink
          });
          activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }
        function onDestroy$8() {
          clearTimeout(g_afterSectionLoadsId);
          clearTimeout(g_transitionLapseId);
        }
        function getDestinationPosition(element) {
          var elementHeight = element.offsetHeight;
          var elementTop = element.offsetTop;
          var position = elementTop;
          var isScrollingDown = elementTop > state.previousDestTop;
          var sectionBottom = position - getWindowHeight() + elementHeight;
          var bigSectionsDestination = getOptions().bigSectionsDestination;
          if (elementHeight > getWindowHeight()) {
            if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === "bottom") {
              position = sectionBottom;
            }
          } else if (isScrollingDown || state.isResizing && next(element) == null) {
            position = sectionBottom;
          }
          setState({
            previousDestTop: position
          });
          return position;
        }
        function performMovement(v) {
          var isFastSpeed = getOptions().scrollingSpeed < 700;
          var transitionLapse = isFastSpeed ? 700 : getOptions().scrollingSpeed;
          setState({
            touchDirection: "none",
            scrollY: Math.round(v.dtop)
          });
          EventEmitter.emit(events.onPerformMovement);
          if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
            var translate3d = "translate3d(0px, -" + Math.round(v.dtop) + "px, 0px)";
            transformContainer(translate3d, true);
            if (getOptions().scrollingSpeed) {
              clearTimeout(g_afterSectionLoadsId);
              g_afterSectionLoadsId = setTimeout(function() {
                afterSectionLoads$1(v);
                setState({
                  canScroll: !isFastSpeed || FP.test.isTesting
                });
              }, getOptions().scrollingSpeed);
            } else {
              afterSectionLoads$1(v);
            }
          } else {
            var scrollSettings = getScrollSettings(v.dtop);
            FP.test.top = -v.dtop + "px";
            clearTimeout(g_afterSectionLoadsId);
            scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function() {
              if (getOptions().scrollBar) {
                g_afterSectionLoadsId = setTimeout(function() {
                  afterSectionLoads$1(v);
                }, 30);
              } else {
                afterSectionLoads$1(v);
                setState({
                  canScroll: !isFastSpeed || FP.test.isTesting
                });
              }
            });
          }
          if (isFastSpeed) {
            clearTimeout(g_transitionLapseId);
            g_transitionLapseId = setTimeout(function() {
              setState({
                canScroll: true
              });
            }, transitionLapse);
          }
        }
        function afterSectionLoads$1(v) {
          setState({
            isBeyondFullpage: false
          });
          continuousVerticalFixSectionOrder(v);
          if (isFunction(getOptions().afterLoad) && !v.localIsResizing) {
            fireCallback("afterLoad", v);
          }
          updateState();
          if (!v.localIsResizing) {
            playMedia(v.element);
          }
          addClass(v.element, COMPLETELY);
          removeClass(siblings(v.element), COMPLETELY);
          lazyLoadOthers();
          setState({
            canScroll: true
          });
          EventEmitter.emit(events.afterSectionLoads, v);
          if (isFunction(v.callback)) {
            v.callback();
          }
        }
        FP.setFitToSection = setFitToSection;
        FP.fitToSection = fitToSection;
        function setFitToSection(value, type) {
          setVariableState("fitToSection", value, type);
        }
        function fitToSection() {
          if (state.canScroll) {
            setState({
              isResizing: true
            });
            scrollPage(state.activeSection);
            setState({
              isResizing: false
            });
          }
        }
        FP.setResponsive = setResponsive;
        function responsive() {
          var widthLimit = getOptions().responsive || getOptions().responsiveWidth;
          var heightLimit = getOptions().responsiveHeight;
          var isBreakingPointWidth = widthLimit && win.innerWidth < widthLimit;
          var isBreakingPointHeight = heightLimit && win.innerHeight < heightLimit;
          if (widthLimit && heightLimit) {
            setResponsive(isBreakingPointWidth || isBreakingPointHeight);
          } else if (widthLimit) {
            setResponsive(isBreakingPointWidth);
          } else if (heightLimit) {
            setResponsive(isBreakingPointHeight);
          }
        }
        function setResponsive(active) {
          var isResponsive = isResponsiveMode();
          if (active) {
            if (!isResponsive) {
              setAutoScrolling(false, "internal");
              setFitToSection(false, "internal");
              hide($(SECTION_NAV_SEL));
              addClass($body, RESPONSIVE);
              if (isFunction(getOptions().afterResponsive)) {
                getOptions().afterResponsive.call(getContainer(), active);
              }
            }
          } else if (isResponsive) {
            setAutoScrolling(getOriginals().autoScrolling, "internal");
            setFitToSection(getOriginals().autoScrolling, "internal");
            show($(SECTION_NAV_SEL));
            removeClass($body, RESPONSIVE);
            if (isFunction(getOptions().afterResponsive)) {
              getOptions().afterResponsive.call(getContainer(), active);
            }
          }
        }
        function isResponsiveMode() {
          return hasClass($body, RESPONSIVE);
        }
        function addTableClass(element) {
          if (!getOptions().verticalCentered) {
            return;
          }
          if (!getOptions().scrollOverflow && scrollOverflowHandler.shouldBeScrollable(element.item)) {
            return;
          }
          if (!scrollOverflowHandler.isScrollable(element)) {
            if (!hasClass(element.item, TABLE)) {
              addClass(element.item, TABLE);
            }
          }
        }
        var startingSection = null;
        FP.getActiveSection = getActiveSection;
        function getStartingSection() {
          return startingSection;
        }
        function styleSection(section) {
          var sectionElem = section.item;
          var hasSlides = section.allSlidesItems.length;
          var index2 = section.index();
          if (!getState().activeSection && section.isVisible) {
            addClass(sectionElem, ACTIVE);
            updateState();
            startingSection = getState().activeSection.item;
          }
          if (getOptions().paddingTop) {
            css(sectionElem, {
              "padding-top": getOptions().paddingTop
            });
          }
          if (getOptions().paddingBottom) {
            css(sectionElem, {
              "padding-bottom": getOptions().paddingBottom
            });
          }
          if (typeof getOptions().sectionsColor[index2] !== "undefined") {
            css(sectionElem, {
              "background-color": getOptions().sectionsColor[index2]
            });
          }
          if (typeof getOptions().anchors[index2] !== "undefined") {
            sectionElem.setAttribute("data-anchor", section.anchor);
          }
          if (!hasSlides) {
            addTableClass(section);
          }
        }
        function getActiveSection() {
          return getState().activeSection;
        }
        function getSectionFromPanel(panel) {
          return panel.isSection ? panel : panel.parent;
        }
        var g_focusScrollableId;
        EventEmitter.on(events.bindEvents, bindEvents$b);
        function bindEvents$b() {
          EventEmitter.on(events.onAfterRenderNoAnchor, afterRender);
          EventEmitter.on(events.onLeave, scrollOverflowHandler.onLeave);
          EventEmitter.on(events.onSlideLeave, scrollOverflowHandler.onLeave);
          EventEmitter.on(events.afterSlideLoads, scrollOverflowHandler.afterLoad);
          EventEmitter.on(events.afterSectionLoads, scrollOverflowHandler.afterLoad);
          EventEmitter.on(events.onDestroy, onDestroy$7);
          docAddEvent("keyup", scrollOverflowHandler.keyUpHandler);
        }
        function afterRender() {
          if (getOptions().scrollOverflow && !getOptions().scrollBar) {
            scrollOverflowHandler.makeScrollable();
            scrollOverflowHandler.focusScrollable();
          }
        }
        function onDestroy$7() {
          EventEmitter.removeListener(events.onAfterRenderNoAnchor, afterRender);
          docRemoveEvent("keyup", scrollOverflowHandler.keyUpHandler);
        }
        var scrollOverflowHandler = {
          focusedElem: null,
          shouldFocusScrollable: true,
          isInnerScrollAllowed: true,
          timeBeforeReachingLimit: null,
          timeLastScroll: null,
          preventScrollWithMouseWheel: function preventScrollWithMouseWheel(e) {
            if (!state.canScroll) {
              preventDefault(e);
              return false;
            }
          },
          preventScrollWithKeyboard: function preventScrollWithKeyboard(e) {
            if (!isInsideInput() && getOptions().keyboardScrolling) {
              var directionKeys = [38, 33, 32, 40, 34, 36, 35];
              if (directionKeys.indexOf(e.keyCode) > -1 && !scrollOverflowHandler.isInnerScrollAllowed) {
                preventDefault(e);
                return false;
              }
            }
          },
          keyUpHandler: function keyUpHandler2() {
            scrollOverflowHandler.shouldFocusScrollable = state.canScroll;
          },
          // Leaving sections or slides
          onLeave: function onLeave() {
            clearTimeout(g_focusScrollableId);
            scrollOverflowHandler.isInnerScrollAllowed = false;
          },
          // Loading sections or slides
          afterLoad: function afterLoad() {
            scrollOverflowHandler.isInnerScrollAllowed = false;
            clearTimeout(g_focusScrollableId);
            g_focusScrollableId = setTimeout(function() {
              scrollOverflowHandler.shouldFocusScrollable = state.canScroll;
            }, 200);
          },
          // Unfocusing the scrollable element from the orgin section/slide
          unfocusScrollable: function unfocusScrollable() {
            if (doc.activeElement === this.focusedElem) {
              this.focusedElem.blur();
              scrollOverflowHandler.isInnerScrollAllowed = false;
            }
          },
          focusScrollable: function focusScrollable() {
            if (!getOptions().scrollOverflow || !scrollOverflowHandler.shouldFocusScrollable) {
              return;
            }
            scrollOverflowHandler.unfocusScrollable();
            var scrollableItem = scrollOverflowHandler.getScrollableItem(getState().activeSection.item);
            if (scrollableItem && !isTouchDevice && !isTouch) {
              this.focusedElem = scrollableItem;
              requestAnimationFrame(function() {
                scrollableItem.focus();
                scrollOverflowHandler.isInnerScrollAllowed = true;
              });
            }
            scrollOverflowHandler.shouldFocusScrollable = false;
          },
          makeScrollable: function makeScrollable() {
            if (getOptions().scrollOverflowMacStyle && !isMacDevice) {
              addClass($body, "fp-scroll-mac");
            }
            getState().panels.forEach(function(el) {
              if (el.slides && el.slides.length) {
                return;
              }
              if (hasClass(el.item, AUTO_HEIGHT_RESPONSIVE) && isResponsiveMode()) {
                return;
              } else {
                var item = getSlideOrSection(el.item);
                var shouldBeScrollable = scrollOverflowHandler.shouldBeScrollable(el.item);
                var section = getSectionFromPanel(el);
                if (isIE11) {
                  var toggleAction = shouldBeScrollable ? "addClass" : "removeClass";
                  utils[toggleAction](section.item, IS_OVERFLOW);
                  utils[toggleAction](el.item, IS_OVERFLOW);
                } else {
                  addClass(section.item, IS_OVERFLOW);
                  addClass(el.item, IS_OVERFLOW);
                }
                if (!el.hasScroll) {
                  scrollOverflowHandler.createWrapper(item);
                  scrollOverflowHandler.bindEvents(item);
                }
                el.hasScroll = true;
              }
            });
          },
          bindEvents: function bindEvents2(item) {
            scrollOverflowHandler.getScrollableItem(item).addEventListener("scroll", scrollOverflowHandler.onPanelScroll);
            item.addEventListener("wheel", scrollOverflowHandler.preventScrollWithMouseWheel, {
              passive: false
            });
            item.addEventListener("keydown", scrollOverflowHandler.preventScrollWithKeyboard, {
              passive: false
            });
          },
          createWrapper: function createWrapper(item) {
            var overflowWrapper = document.createElement("div");
            overflowWrapper.className = OVERFLOW;
            wrapInner(item, overflowWrapper);
            overflowWrapper.setAttribute("tabindex", "-1");
          },
          destroyWrapper: function destroyWrapper(item) {
            var overflowWrapper = $(OVERFLOW_SEL, item)[0];
            if (overflowWrapper) {
              unwrap(overflowWrapper);
              item.removeAttribute("tabindex");
            }
          },
          getScrollableItem: function getScrollableItem(sectionItem) {
            var panel = getSlideOrSection(sectionItem);
            return $(OVERFLOW_SEL, panel)[0] || panel;
          },
          hasScroll: function hasScroll(panelItem) {
            return hasClass(panelItem, OVERFLOW) || $(OVERFLOW_SEL, panelItem)[0] != null;
          },
          isScrollable: function isScrollable(panel) {
            return panel.isSection && panel.activeSlide ? panel.activeSlide.hasScroll : panel.hasScroll;
          },
          shouldBeScrollable: function shouldBeScrollable(item) {
            var scrollable = scrollOverflowHandler.getScrollableItem(item);
            return scrollable.scrollHeight > win.innerHeight;
          },
          isScrolled: function isScrolled(direction, el) {
            if (!state.canScroll) {
              return false;
            }
            if (getOptions().scrollBar) {
              return true;
            }
            var scrollableItem = scrollOverflowHandler.getScrollableItem(el);
            if (!getOptions().scrollOverflow || !hasClass(scrollableItem, OVERFLOW) || // Checking the section first 
            // In case they apply to both section + slide #4505
            hasClass(el, "fp-noscroll") || // Checking the slide (in case it has)
            hasClass(getSlideOrSection(el), "fp-noscroll")) {
              return true;
            }
            var ie11offset = isIE11 ? 1 : 0;
            var positionY = scrollableItem.scrollTop;
            var isTopReached = direction === "up" && positionY <= 0;
            var isBottomReached = direction === "down" && scrollableItem.scrollHeight <= Math.ceil(scrollableItem.offsetHeight + positionY) + ie11offset;
            var isScrolled2 = isTopReached || isBottomReached;
            if (!isScrolled2) {
              this.timeBeforeReachingLimit = (/* @__PURE__ */ new Date()).getTime();
            }
            return isScrolled2;
          },
          shouldMovePage: function shouldMovePage() {
            this.timeLastScroll = (/* @__PURE__ */ new Date()).getTime();
            var timeDiff = this.timeLastScroll - scrollOverflowHandler.timeBeforeReachingLimit;
            var isUsingTouch = isTouchDevice || isTouch;
            var isGrabbing = isUsingTouch && state.isGrabbing;
            var isNotFirstTimeReachingLimit = state.isUsingWheel && timeDiff > 600;
            return isGrabbing && timeDiff > 400 || isNotFirstTimeReachingLimit;
          },
          onPanelScroll: /* @__PURE__ */ function() {
            var prevPosition = 0;
            return function(e) {
              var currentPosition = e.target.scrollTop;
              var direction = state.touchDirection !== "none" ? state.touchDirection : prevPosition < currentPosition ? "down" : "up";
              prevPosition = currentPosition;
              if (isFunction(getOptions().onScrollOverflow)) {
                fireCallback("onScrollOverflow", {
                  position: currentPosition,
                  direction
                });
              }
              if (hasClass(e.target, OVERFLOW) && state.canScroll) {
                if (scrollOverflowHandler.isScrolled(direction, e.target) && scrollOverflowHandler.shouldMovePage()) {
                  if (scrollOverflowHandler.shouldBeScrollable(getState().activeSection.item)) {
                    EventEmitter.emit(events.onScrollOverflowScrolled, {
                      direction
                    });
                  }
                }
              }
            };
          }()
        };
        var g_afterSlideLoadsId;
        FP.landscapeScroll = landscapeScroll;
        EventEmitter.on(events.bindEvents, bindEvents$a);
        function bindEvents$a() {
          EventEmitter.on(events.onPerformMovement, onPerformMovement);
        }
        function onPerformMovement() {
          clearTimeout(g_afterSlideLoadsId);
          setState({
            slideMoving: false
          });
        }
        function landscapeScroll(slides, destiny, direction) {
          var sectionElem = closest(slides, SECTION_SEL);
          var section = getState().sections.filter(function(section2) {
            return section2.item == sectionElem;
          })[0];
          var slide = section.slides.filter(function(slide2) {
            return slide2.item == destiny;
          })[0];
          var v = {
            "slides": slides,
            "destiny": destiny,
            "direction": direction,
            "destinyPos": {
              "left": destiny.offsetLeft
            },
            "slideIndex": slide.index(),
            "section": sectionElem,
            "sectionIndex": section.index(),
            "anchorLink": section.anchor,
            "slidesNav": $(SLIDES_NAV_SEL, sectionElem)[0],
            "slideAnchor": slide.anchor,
            "prevSlide": section.activeSlide.item,
            "prevSlideIndex": section.activeSlide.index(),
            "items": {
              "section": section,
              "origin": section.activeSlide,
              "destination": slide
            },
            //caching the value of isResizing at the momment the function is called
            //because it will be checked later inside a setTimeout and the value might change
            "localIsResizing": state.isResizing
          };
          v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
          v.direction = v.direction ? v.direction : v.xMovement;
          if (!v.localIsResizing) {
            setState({
              canScroll: false
            });
          }
          if (getOptions().onSlideLeave) {
            if (!v.localIsResizing && v.xMovement !== "none") {
              if (isFunction(getOptions().onSlideLeave)) {
                if (fireCallback("onSlideLeave", v) === false) {
                  setState({
                    slideMoving: false
                  });
                  return;
                }
              }
            }
          }
          addClass(destiny, ACTIVE);
          removeClass(siblings(destiny), ACTIVE);
          updateState();
          if (!v.localIsResizing) {
            stopMedia(v.prevSlide);
            lazyLoad(destiny);
          }
          toggleControlArrows(v);
          if (section.isActive && !v.localIsResizing) {
            setPageStatus(v.slideIndex, v.slideAnchor, v.anchorLink);
          }
          EventEmitter.emit(events.onSlideLeave, v);
          performHorizontalMove(slides, v, true);
        }
        function performHorizontalMove(slides, v, fireCallback2) {
          var destinyPos = v.destinyPos;
          activeSlidesNavigation(v.slidesNav, v.slideIndex);
          setState({
            scrollX: Math.round(destinyPos.left)
          });
          if (getOptions().css3) {
            var translate3d = "translate3d(-" + Math.round(destinyPos.left) + "px, 0px, 0px)";
            FP.test.translate3dH[v.sectionIndex] = translate3d;
            css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));
            clearTimeout(g_afterSlideLoadsId);
            g_afterSlideLoadsId = setTimeout(function() {
              if (fireCallback2) {
                afterSlideLoads(v);
              }
            }, getOptions().scrollingSpeed);
          } else {
            FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);
            scrollTo(slides, Math.round(destinyPos.left), getOptions().scrollingSpeed, function() {
              if (fireCallback2) {
                afterSlideLoads(v);
              }
            });
          }
        }
        function getXmovement(fromIndex, toIndex) {
          if (fromIndex == toIndex) {
            return "none";
          }
          if (fromIndex > toIndex) {
            return "left";
          }
          return "right";
        }
        function onDestroy$6() {
          clearTimeout(g_afterSlideLoadsId);
        }
        function afterSlideLoads(v) {
          if (!v.localIsResizing) {
            if (isFunction(getOptions().afterSlideLoad)) {
              fireCallback("afterSlideLoad", v);
            }
            setState({
              canScroll: true
            });
            playMedia(v.destiny);
            EventEmitter.emit(events.afterSlideLoads, v);
          }
          setState({
            slideMoving: false
          });
        }
        function silentLandscapeScroll(activeSlide, noCallbacks) {
          setScrollingSpeed(0, "internal");
          if (typeof noCallbacks !== "undefined") {
            setState({
              isResizing: true
            });
          }
          landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);
          if (typeof noCallbacks !== "undefined") {
            setState({
              isResizing: false
            });
          }
          setScrollingSpeed(getOriginals().scrollingSpeed, "internal");
        }
        var g_prevActiveSectionIndex = null;
        var g_prevActiveSlideIndex = null;
        function updateState() {
          state.activeSection = null;
          state.sections.map(function(section) {
            var isActive = hasClass(section.item, ACTIVE);
            section.isActive = isActive;
            section.hasScroll = scrollOverflowHandler.hasScroll(section.item);
            if (isActive) {
              state.activeSection = section;
            }
            if (section.slides.length) {
              section.activeSlide = null;
              section.slides.map(function(slide) {
                var isActiveSlide = hasClass(slide.item, ACTIVE);
                slide.hasScroll = scrollOverflowHandler.hasScroll(section.item);
                slide.isActive = isActiveSlide;
                if (isActiveSlide) {
                  section.activeSlide = slide;
                }
              });
            }
          });
          scrollToNewActivePanel();
        }
        function updateStructuralState() {
          var allSectionItems = $(getOptions().sectionSelector, getContainer());
          var sectionsItems = getVisible(allSectionItems);
          var allSections = Array.from(allSectionItems).map(function(item) {
            return new SectionPanel(item);
          });
          var sections = allSections.filter(function(item) {
            return item.isVisible;
          });
          var slides = sections.reduce(function(acc, section) {
            return acc.concat(section.slides);
          }, []);
          g_prevActiveSectionIndex = getPrevActivePanelIndex(state.activeSection);
          g_prevActiveSlideIndex = getPrevActivePanelIndex(state.activeSection ? state.activeSection.activeSlide : null);
          state.numSections = sectionsItems.length;
          state.numSlides = sections.reduce(function(acc, section) {
            return acc + section.slides.length;
          }, 0);
          state.sections = sections;
          state.sectionsIncludingHidden = allSections;
          state.slides = slides;
          state.panels = state.sections.concat(state.slides);
        }
        function getPrevActivePanelIndex(activePanel) {
          if (!activePanel) {
            return null;
          }
          var prevActivePanelItem = activePanel ? activePanel.item : null;
          var hiddenPanels = activePanel.isSection ? state.sectionsIncludingHidden : state.activeSection.slidesIncludingHidden;
          if (prevActivePanelItem) {
            var panel = getPanelByElement(hiddenPanels, prevActivePanelItem);
            return panel ? panel.index() : null;
          }
          return null;
        }
        function scrollToNewActivePanel() {
          var activeSection = state.activeSection;
          var activeSectionHasSlides = state.activeSection ? state.activeSection.slides.length : false;
          var activeSlide = state.activeSection ? state.activeSection.activeSlide : null;
          if (!activeSection && state.sections.length && !getState().isBeyondFullpage && g_prevActiveSectionIndex) {
            var newActiveSection = getNewActivePanel(g_prevActiveSectionIndex, state.sections);
            if (newActiveSection) {
              state.activeSection = newActiveSection;
              state.activeSection.isActive = true;
              addClass(state.activeSection.item, ACTIVE);
            }
            if (state.activeSection) {
              silentScroll(state.activeSection.item.offsetTop);
            }
          }
          if (activeSectionHasSlides && !activeSlide && g_prevActiveSlideIndex) {
            var newActiveSlide = getNewActivePanel(g_prevActiveSlideIndex, state.activeSection.slides);
            if (newActiveSlide) {
              state.activeSection.activeSlide = newActiveSlide;
              state.activeSection.activeSlide.isActive = true;
              addClass(state.activeSection.activeSlide.item, ACTIVE);
            }
            if (state.activeSection.activeSlide) {
              silentLandscapeScroll(state.activeSection.activeSlide.item, "internal");
            }
          }
        }
        function getNewActivePanel(prevActivePanelIndex, siblings2) {
          var newActiveSection;
          var prevIndex = prevActivePanelIndex - 1;
          var nextIndex = prevActivePanelIndex;
          do {
            newActiveSection = siblings2[prevIndex] || siblings2[nextIndex];
            if (newActiveSection) {
              break;
            }
            prevIndex = prevIndex - 1;
            nextIndex = nextIndex + 1;
          } while (prevIndex >= 0 || nextIndex < siblings2.length);
          return newActiveSection;
        }
        var SectionPanel = function SectionPanel2(el) {
          var _this = this;
          [].push.call(arguments, getOptions().sectionSelector);
          Item.apply(this, arguments);
          this.allSlidesItems = $(getOptions().slideSelector, el);
          this.slidesIncludingHidden = Array.from(this.allSlidesItems).map(function(item) {
            return new SlidePanel(item, _this);
          });
          this.slides = this.slidesIncludingHidden.filter(function(slidePanel) {
            return slidePanel.isVisible;
          });
          this.activeSlide = this.slides.length ? this.slides.filter(function(slide) {
            return slide.isActive;
          })[0] || this.slides[0] : null;
        };
        SectionPanel.prototype = Item.prototype;
        SectionPanel.prototype.constructor = SectionPanel;
        var SlidePanel = function SlidePanel2(el, section) {
          this.parent = section;
          Item.call(this, el, getOptions().slideSelector);
        };
        SlidePanel.prototype = Item.prototype;
        SlidePanel.prototype.constructor = SectionPanel;
        function addInternalSelectors() {
          addClass($(getOptions().sectionSelector, getContainer()), SECTION);
          addClass($(getOptions().slideSelector, getContainer()), SLIDE);
        }
        function styleSlides(section) {
          var numSlides = section.slides.length;
          var slidesElems = section.allSlidesItems;
          var slides = section.slides;
          var sliderWidth = numSlides * 100;
          var slideWidth = 100 / numSlides;
          if (!$(SLIDES_WRAPPER_SEL, section.item)[0]) {
            var slidesWrapper = doc.createElement("div");
            slidesWrapper.className = SLIDES_WRAPPER;
            wrapAll(slidesElems, slidesWrapper);
            var slidesContainer = doc.createElement("div");
            slidesContainer.className = SLIDES_CONTAINER;
            wrapAll(slidesElems, slidesContainer);
          }
          css($(SLIDES_CONTAINER_SEL, section.item), {
            "width": sliderWidth + "%"
          });
          if (numSlides > 1) {
            if (getOptions().controlArrows) {
              createSlideArrows(section);
            }
            if (getOptions().slidesNavigation) {
              addSlidesNavigation(section);
            }
          }
          slides.forEach(function(slide) {
            css(slide.item, {
              "width": slideWidth + "%"
            });
            if (getOptions().verticalCentered) {
              addTableClass(slide);
            }
          });
          var startingSlide = section.activeSlide || null;
          if (startingSlide != null && state.activeSection && (state.activeSection.index() !== 0 || state.activeSection.index() === 0 && startingSlide.index() !== 0)) {
            silentLandscapeScroll(startingSlide.item, "internal");
          } else {
            addClass(slidesElems[0], ACTIVE);
          }
        }
        var g_wrapperObserver;
        var g_wrapperObserveConfig = {
          attributes: false,
          subtree: true,
          childList: true,
          characterData: true
        };
        EventEmitter.on(events.bindEvents, bindEvents$9);
        FP["render"] = onContentChange;
        function bindEvents$9() {
          if (getOptions().observer && "MutationObserver" in window && $(WRAPPER_SEL)[0]) {
            g_wrapperObserver = createObserver($(WRAPPER_SEL)[0], onContentChange, g_wrapperObserveConfig);
          }
          EventEmitter.on(events.contentChanged, onContentChange);
        }
        function createObserver(target, callback, config) {
          var observer2 = new MutationObserver(callback);
          observer2.observe(target, config);
          return observer2;
        }
        function didSlidesChange() {
          return getVisible($(getOptions().slideSelector, getContainer())).length !== getState().numSlides;
        }
        function didSectionsChange() {
          return getVisible($(getOptions().sectionSelector, getContainer())).length !== getState().numSections;
        }
        function didSectionsOrSlidesChange() {
          return didSlidesChange() || didSectionsChange();
        }
        function onContentChange(mutations) {
          var _didSlidesChange = didSlidesChange();
          if (didSectionsOrSlidesChange() && !state.isDoingContinousVertical) {
            if (getOptions().observer && g_wrapperObserver) {
              g_wrapperObserver.disconnect();
            }
            updateStructuralState();
            updateState();
            getOptions().anchors = [];
            remove($(SECTION_NAV_SEL));
            addInternalSelectors();
            setOptionsFromDOM();
            if (getOptions().navigation) {
              addVerticalNavigation();
            }
            if (_didSlidesChange) {
              remove($(SLIDES_NAV_SEL));
              remove($(SLIDES_ARROW_SEL));
            }
            getState().sections.forEach(function(section) {
              if (section.slides.length) {
                if (_didSlidesChange) {
                  styleSlides(section);
                }
              } else {
                styleSection(section);
              }
            });
          }
          if (getOptions().observer && g_wrapperObserver && $(WRAPPER_SEL)[0]) {
            g_wrapperObserver.observe($(WRAPPER_SEL)[0], g_wrapperObserveConfig);
          }
        }
        var supportsPassiveEvents = function() {
          var g_supportsPassive = false;
          try {
            var opts = Object.defineProperty({}, "passive", {
              get: function get3() {
                g_supportsPassive = true;
              }
            });
            windowAddEvent("testPassive", null, opts);
            windowRemoveEvent("testPassive", null, opts);
          } catch (e) {
          }
          return function() {
            return g_supportsPassive;
          };
        }();
        function getPassiveOptionsIfPossible() {
          return supportsPassiveEvents() ? {
            passive: false
          } : false;
        }
        var wheelDataHandler = function() {
          var _prevTime = (/* @__PURE__ */ new Date()).getTime();
          var _scrollings = [];
          var isScrollingVertically;
          var direction;
          return {
            registerEvent: function registerEvent(e) {
              e = e || win.event;
              var value = e.wheelDelta || -e.deltaY || -e.detail;
              var delta = Math.max(-1, Math.min(1, value));
              var horizontalDetection = typeof e.wheelDeltaX !== "undefined" || typeof e.deltaX !== "undefined";
              isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
              var curTime = (/* @__PURE__ */ new Date()).getTime();
              direction = delta < 0 ? "down" : "up";
              if (_scrollings.length > 149) {
                _scrollings.shift();
              }
              _scrollings.push(Math.abs(value));
              var timeDiff = curTime - _prevTime;
              _prevTime = curTime;
              if (timeDiff > 200) {
                _scrollings = [];
              }
            },
            isAccelerating: function isAccelerating() {
              var averageEnd = getAverage(_scrollings, 10);
              var averageMiddle = getAverage(_scrollings, 70);
              var isAccelerating2 = averageEnd >= averageMiddle;
              return _scrollings.length ? isAccelerating2 && isScrollingVertically : false;
            },
            getDirection: function getDirection() {
              return direction;
            }
          };
        }();
        function scrollBeyondFullPage() {
          var dtop = getDestinationOffset();
          var scrollSettings = getScrollSettings(dtop);
          FP.test.top = -dtop + "px";
          setState({
            canScroll: false
          });
          scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function() {
            setTimeout(function() {
              setState({
                isBeyondFullpage: true
              });
              setState({
                canScroll: true
              });
            }, 30);
          });
        }
        function onKeyDown() {
          if (!isFullPageAbove()) {
            return;
          } else {
            scrollUpToFullpage();
          }
        }
        function scrollUpToFullpage() {
          var scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop);
          setState({
            canScroll: false
          });
          scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function() {
            setState({
              canScroll: true
            });
            setState({
              isBeyondFullpage: false
            });
            setState({
              isAboutToScrollToFullPage: false
            });
          });
        }
        function getDestinationOffset() {
          if (!getOptions().css3) {
            return getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight;
          }
          return getScrollTop() + getWindowHeight();
        }
        function beyondFullPageHandler(container2, e) {
          (/* @__PURE__ */ new Date()).getTime();
          var pauseScroll = getState().isBeyondFullpage && container2.getBoundingClientRect().bottom >= 0 && wheelDataHandler.getDirection() === "up";
          var g_isAboutToScrollToFullPage = getState().isAboutToScrollToFullPage;
          if (g_isAboutToScrollToFullPage) {
            preventDefault(e);
            return false;
          }
          if (getState().isBeyondFullpage) {
            if (!pauseScroll) {
              keyframeTime("set", "beyondFullpage", 1e3);
            } else {
              var shouldSetFixedPosition = !g_isAboutToScrollToFullPage && (!keyframeTime("isNewKeyframe", "beyondFullpage") || !wheelDataHandler.isAccelerating());
              var scrollSettings;
              if (shouldSetFixedPosition) {
                scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight);
                scrollSettings.element.scrollTo(0, scrollSettings.options);
                setState({
                  isAboutToScrollToFullPage: false
                });
                preventDefault(e);
                return false;
              } else if (wheelDataHandler.isAccelerating()) {
                pauseScroll = false;
                setState({
                  isAboutToScrollToFullPage: true
                });
                setState({
                  scrollTrigger: "wheel"
                });
                scrollUpToFullpage();
                preventDefault(e);
                return false;
              }
            }
            if (!g_isAboutToScrollToFullPage) {
              if (!pauseScroll) {
                return true;
              }
            }
          }
        }
        var keyframeTime = /* @__PURE__ */ function() {
          var isNew = false;
          var frames = {};
          var timeframes = {};
          return function(action, name, timeframe) {
            switch (action) {
              case "set":
                frames[name] = (/* @__PURE__ */ new Date()).getTime();
                timeframes[name] = timeframe;
                break;
              case "isNewKeyframe":
                var current = (/* @__PURE__ */ new Date()).getTime();
                isNew = current - frames[name] > timeframes[name];
                break;
            }
            return isNew;
          };
        }();
        FP.moveSectionDown = moveSectionDown;
        function moveSectionDown() {
          var next2 = getState().activeSection.next();
          if (!next2 && (getOptions().loopBottom || getOptions().continuousVertical)) {
            next2 = getState().sections[0];
          }
          if (next2 != null) {
            scrollPage(next2, null, false);
          } else if (hasContentBeyondFullPage()) {
            EventEmitter.emit(events.scrollBeyondFullpage);
          }
        }
        function hasContentBeyondFullPage() {
          return getContainer().scrollHeight < $body.scrollHeight && getOptions().scrollBar && getOptions().scrollBeyondFullpage;
        }
        FP.moveSectionUp = moveSectionUp;
        function moveSectionUp() {
          var prev2 = getState().activeSection.prev();
          if (!prev2 && (getOptions().loopTop || getOptions().continuousVertical)) {
            prev2 = getLast(getState().sections);
          }
          if (prev2 != null) {
            scrollPage(prev2, null, true);
          }
        }
        var oldPageY = 0;
        function mouseMoveHandler(e) {
          if (!getOptions().autoScrolling) {
            return;
          }
          if (state.canScroll) {
            if (e.pageY < oldPageY && getIsScrollAllowed().m.up) {
              moveSectionUp();
            } else if (e.pageY > oldPageY && getIsScrollAllowed().m.down) {
              moveSectionDown();
            }
          }
          oldPageY = e.pageY;
        }
        function setOldPageY(value) {
          oldPageY = value;
        }
        function scrolling(type) {
          if (!getIsScrollAllowed().m[type]) {
            return;
          }
          var scrollSection = type === "down" ? moveSectionDown : moveSectionUp;
          if (getOptions().scrollOverflow && scrollOverflowHandler.isScrollable(getState().activeSection)) {
            if (scrollOverflowHandler.isScrolled(type, getState().activeSection.item) && scrollOverflowHandler.shouldMovePage()) {
              scrollSection();
            }
          } else {
            scrollSection();
          }
        }
        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;
        var MSPointer = getMSPointer();
        var pointers = {
          touchmove: "ontouchmove" in window ? "touchmove" : MSPointer ? MSPointer.move : null,
          touchstart: "ontouchstart" in window ? "touchstart" : MSPointer ? MSPointer.down : null
        };
        function addTouchHandler() {
          if (!pointers.touchmove) {
            return;
          }
          if (isTouchDevice || isTouch) {
            if (getOptions().autoScrolling) {
              $body.removeEventListener(pointers.touchmove, preventBouncing, {
                passive: false
              });
              $body.addEventListener(pointers.touchmove, preventBouncing, {
                passive: false
              });
            }
            var touchWrapper = getOptions().touchWrapper;
            touchWrapper.removeEventListener(pointers.touchstart, touchStartHandler);
            touchWrapper.removeEventListener(pointers.touchmove, touchMoveHandler, {
              passive: false
            });
            touchWrapper.addEventListener(pointers.touchstart, touchStartHandler);
            touchWrapper.addEventListener(pointers.touchmove, touchMoveHandler, {
              passive: false
            });
          }
        }
        function removeTouchHandler() {
          if (!pointers.touchmove) {
            return;
          }
          if (isTouchDevice || isTouch) {
            if (getOptions().autoScrolling) {
              $body.removeEventListener(pointers.touchmove, touchMoveHandler, {
                passive: false
              });
              $body.removeEventListener(pointers.touchmove, preventBouncing, {
                passive: false
              });
            }
            var touchWrapper = getOptions().touchWrapper;
            touchWrapper.removeEventListener(pointers.touchstart, touchStartHandler);
            touchWrapper.removeEventListener(pointers.touchmove, touchMoveHandler, {
              passive: false
            });
          }
        }
        function touchMoveHandler(e) {
          var activeSection = closest(e.target, SECTION_SEL) || getState().activeSection.item;
          var hasActiveSectionOverflow = scrollOverflowHandler.isScrollable(getState().activeSection);
          if (isReallyTouch(e)) {
            setState({
              isGrabbing: true,
              isUsingWheel: false
            });
            if (getOptions().autoScrolling) {
              if (hasActiveSectionOverflow && !state.canScroll || getOptions().scrollBar) {
                preventDefault(e);
              }
            }
            var touchEvents = getEventsPage(e);
            touchEndY = touchEvents.y;
            touchEndX = touchEvents.x;
            var isVerticalMovementEnough = Math.abs(touchStartY - touchEndY) > win.innerHeight / 100 * getOptions().touchSensitivity;
            var isHorizontalMovementEnough = Math.abs(touchStartX - touchEndX) > getWindowWidth() / 100 * getOptions().touchSensitivity;
            var isHorizontalPredominantMove = $(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY);
            var directionH = touchStartX > touchEndX ? "right" : "left";
            var directionV = touchStartY > touchEndY ? "down" : "up";
            var direction = isHorizontalPredominantMove ? directionH : directionV;
            setState({
              touchDirection: direction
            });
            if (isHorizontalPredominantMove) {
              if (!state.slideMoving && isHorizontalMovementEnough) {
                if (touchStartX > touchEndX) {
                  if (getIsScrollAllowed().m.right) {
                    EventEmitter.emit(events.moveSlideRight, {
                      section: activeSection
                    });
                  }
                } else {
                  if (getIsScrollAllowed().m.left) {
                    EventEmitter.emit(events.moveSlideLeft, {
                      section: activeSection
                    });
                  }
                }
              }
            } else if (getOptions().autoScrolling && state.canScroll) {
              if (isVerticalMovementEnough) {
                scrolling(directionV);
              }
            }
          }
        }
        function isReallyTouch(e) {
          return typeof e.pointerType === "undefined" || e.pointerType != "mouse";
        }
        function touchStartHandler(e) {
          if (getOptions().fitToSection) {
            setState({
              activeAnimation: false
            });
          }
          if (isReallyTouch(e)) {
            var touchEvents = getEventsPage(e);
            touchStartY = touchEvents.y;
            touchStartX = touchEvents.x;
          }
          windowAddEvent("touchend", touchEndHandler);
        }
        function touchEndHandler() {
          windowRemoveEvent("touchend", touchEndHandler);
          setState({
            isGrabbing: false
          });
        }
        function getEventsPage(e) {
          var events2 = {};
          events2.y = typeof e.pageY !== "undefined" && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
          events2.x = typeof e.pageX !== "undefined" && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX;
          if (isTouch && isReallyTouch(e) && getOptions().scrollBar && typeof e.touches !== "undefined") {
            events2.y = e.touches[0].pageY;
            events2.x = e.touches[0].pageX;
          }
          return events2;
        }
        function getMSPointer() {
          var pointer;
          if (win.PointerEvent) {
            pointer = {
              down: "pointerdown",
              move: "pointermove"
            };
          }
          return pointer;
        }
        function preventBouncing(e) {
          if (getOptions().autoScrolling && isReallyTouch(e) && getIsScrollAllowed().m.up) {
            if (!state.canScroll) {
              preventDefault(e);
            }
          }
        }
        FP.moveSlideLeft = moveSlideLeft;
        FP.moveSlideRight = moveSlideRight;
        function moveSlide(direction, section) {
          var activeSectionItem = section == null ? getState().activeSection.item : section;
          var activeSection = getPanelByElement(state.sections, activeSectionItem);
          var slides = $(SLIDES_WRAPPER_SEL, activeSectionItem)[0];
          if (slides == null || state.slideMoving || activeSection.slides.length < 2) {
            return;
          }
          var currentSlide = activeSection.activeSlide;
          var destiny = direction === "left" ? currentSlide.prev() : currentSlide.next();
          if (!destiny) {
            if (!getOptions().loopHorizontal) return;
            destiny = direction === "left" ? getLast(activeSection.slides) : activeSection.slides[0];
          }
          setState({
            slideMoving: !FP.test.isTesting
          });
          landscapeScroll(slides, destiny.item, direction);
        }
        function moveSlideLeft(section) {
          moveSlide("left", section);
        }
        function moveSlideRight(section) {
          moveSlide("right", section);
        }
        function getSectionByAnchor(sectionAnchor) {
          var section = getState().sections.filter(function(section2) {
            return section2.anchor === sectionAnchor;
          })[0];
          if (!section) {
            var sectionIndex = typeof sectionAnchor !== "undefined" ? sectionAnchor - 1 : 0;
            section = getState().sections[sectionIndex];
          }
          return section;
        }
        function scrollSlider(slideElem) {
          if (slideElem != null) {
            landscapeScroll(closest(slideElem, SLIDES_WRAPPER_SEL), slideElem);
          }
        }
        function scrollPageAndSlide(sectionAnchor, slideAnchor) {
          var section = getSectionByAnchor(sectionAnchor);
          if (section == null) return;
          var slideElem = getSlideByAnchor(slideAnchor, section);
          if ((!section.anchor || section.anchor !== state.lastScrolledDestiny) && !hasClass(section.item, ACTIVE)) {
            scrollPage(section, function() {
              scrollSlider(slideElem);
            });
          } else {
            scrollSlider(slideElem);
          }
        }
        function getSlideByAnchor(slideAnchor, section) {
          var slide = section.slides.filter(function(slide2) {
            return slide2.anchor === slideAnchor;
          })[0];
          if (slide == null) {
            slideAnchor = typeof slideAnchor !== "undefined" ? slideAnchor : 0;
            slide = section.slides[slideAnchor];
          }
          return slide ? slide.item : null;
        }
        FP.moveTo = moveTo$1;
        function moveTo$1(sectionAnchor, slideAnchor) {
          var destiny = getSectionByAnchor(sectionAnchor);
          if (typeof slideAnchor !== "undefined") {
            scrollPageAndSlide(sectionAnchor, slideAnchor);
          } else if (destiny != null) {
            scrollPage(destiny);
          }
        }
        var g_controlPressed;
        var g_keydownId;
        var g_elToFocus;
        EventEmitter.on(events.bindEvents, bindEvents$8);
        function bindEvents$8() {
          windowAddEvent("blur", blurHandler);
          docAddEvent("keydown", keydownHandler);
          docAddEvent("keyup", keyUpHandler);
          EventEmitter.on(events.onDestroy, onDestroy$5);
          EventEmitter.on(events.afterSlideLoads, onAfterSlideLoads);
          EventEmitter.on(events.afterSectionLoads, afterSectionLoads);
        }
        function onDestroy$5() {
          clearTimeout(g_keydownId);
          docRemoveEvent("keydown", keydownHandler);
          docRemoveEvent("keyup", keyUpHandler);
        }
        function keydownHandler(e) {
          clearTimeout(g_keydownId);
          var keyCode = e.keyCode;
          var isPressingHorizontalArrows = [37, 39].indexOf(keyCode) > -1;
          var canScrollWithKeyboard = getOptions().autoScrolling || getOptions().fitToSection || isPressingHorizontalArrows;
          if (keyCode === 9) {
            onTab(e);
          } else if (!isInsideInput() && getOptions().keyboardScrolling && canScrollWithKeyboard) {
            g_controlPressed = e.ctrlKey;
            g_keydownId = setTimeout(function() {
              onkeydown(e);
            }, 0);
          }
        }
        function onkeydown(e) {
          var shiftPressed = e.shiftKey;
          var activeElement = doc.activeElement;
          var isMediaFocused = matches(activeElement, "video") || matches(activeElement, "audio");
          var isScrolled = {
            up: scrollOverflowHandler.isScrolled("up", getState().activeSection.item),
            down: scrollOverflowHandler.isScrolled("down", getState().activeSection.item)
          };
          var isUsingHorizontalArrowKeys = [37, 39].indexOf(e.keyCode) > -1;
          cancelDirectionKeyEvents(e);
          if (!state.canScroll && !isUsingHorizontalArrowKeys) {
            return;
          }
          setState({
            scrollTrigger: "keydown"
          });
          switch (e.keyCode) {
            case 38:
            case 33:
              if (getIsScrollAllowed().k.up && isScrolled.up) {
                if (state.isBeyondFullpage) {
                  EventEmitter.emit(events.onKeyDown, {
                    e
                  });
                } else {
                  moveSectionUp();
                }
              } else {
                scrollOverflowHandler.focusScrollable();
              }
              break;
            case 32:
              if (shiftPressed && getIsScrollAllowed().k.up && !isMediaFocused && isScrolled.up) {
                moveSectionUp();
                break;
              }
            case 40:
            case 34:
              if (getIsScrollAllowed().k.down && isScrolled.down) {
                if (state.isBeyondFullpage) {
                  return;
                }
                if (e.keyCode !== 32 || !isMediaFocused) {
                  moveSectionDown();
                }
              } else {
                scrollOverflowHandler.focusScrollable();
              }
              break;
            case 36:
              if (getIsScrollAllowed().k.up) {
                moveTo$1(1);
              }
              break;
            case 35:
              if (getIsScrollAllowed().k.down) {
                moveTo$1(getState().sections.length);
              }
              break;
            case 37:
              if (getIsScrollAllowed().k.left) {
                moveSlideLeft();
              }
              break;
            case 39:
              if (getIsScrollAllowed().k.right) {
                moveSlideRight();
              }
              break;
            default:
              return;
          }
        }
        function keyUpHandler(e) {
          if (state.isWindowFocused) {
            g_controlPressed = e.ctrlKey;
          }
        }
        function blurHandler() {
          setState({
            isWindowFocused: false
          });
          g_controlPressed = false;
        }
        function onTab(e) {
          var isShiftPressed = e.shiftKey;
          var activeElement = doc.activeElement;
          var focusableElements = getFocusables(getSlideOrSection(getState().activeSection.item));
          function preventAndFocusFirst(e2) {
            preventDefault(e2);
            return focusableElements[0] ? focusableElements[0].focus() : null;
          }
          if (!state.canScroll) {
            preventDefault(e);
            return;
          }
          if (isFocusOutside(e)) {
            return;
          }
          if (activeElement) {
            if (closest(activeElement, SECTION_ACTIVE_SEL + "," + SECTION_ACTIVE_SEL + " " + SLIDE_ACTIVE_SEL) == null) {
              activeElement = preventAndFocusFirst(e);
            }
          } else {
            preventAndFocusFirst(e);
          }
          var isFirstFocusableInSection = activeElement == focusableElements[0];
          var isLastFocusableInSection = activeElement == focusableElements[focusableElements.length - 1];
          var isNextItem = !isShiftPressed && isLastFocusableInSection;
          var isPrevItem = isShiftPressed && isFirstFocusableInSection;
          if (isPrevItem || isNextItem) {
            preventDefault(e);
            var focusInfo = getPanelWithFocusable(isPrevItem);
            var destinationPanel = focusInfo ? focusInfo.panel : null;
            if (destinationPanel) {
              var destinationSection = destinationPanel.isSection ? destinationPanel : destinationPanel.parent;
              EventEmitter.emit(events.onScrollPageAndSlide, {
                sectionAnchor: destinationSection.index() + 1,
                slideAnchor: destinationPanel.isSection ? 0 : destinationPanel.index()
              });
              g_elToFocus = focusInfo.itemToFocus;
              preventDefault(e);
            }
          }
        }
        function onAfterSlideLoads(v) {
          focusItem();
        }
        function afterSectionLoads(v) {
          if (!closest(g_elToFocus, SLIDE_SEL) || closest(g_elToFocus, SLIDE_ACTIVE_SEL)) {
            focusItem();
          }
        }
        function focusItem() {
          if (g_elToFocus) {
            g_elToFocus.focus();
            g_elToFocus = null;
          }
        }
        function getPanelWithFocusable(isPrevItem) {
          var action = isPrevItem ? "prevPanel" : "nextPanel";
          var focusableElements = [];
          var panelWithFocusables;
          var currentPanel = getSlideOrSectionPanel(getActivePanel()[action]());
          do {
            focusableElements = getFocusables(currentPanel.item);
            if (focusableElements.length) {
              panelWithFocusables = {
                panel: currentPanel,
                itemToFocus: focusableElements[isPrevItem ? focusableElements.length - 1 : 0]
              };
            }
            currentPanel = getSlideOrSectionPanel(currentPanel[action]());
          } while (currentPanel && focusableElements.length === 0);
          return panelWithFocusables;
        }
        function getFocusables(el) {
          return [].slice.call($(focusableElementsString, el)).filter(function(item) {
            return getAttr(item, "tabindex") !== "-1" && //are also not hidden elements (or with hidden parents)
            item.offsetParent !== null;
          });
        }
        function isFocusOutside(e) {
          var allFocusables = getFocusables(doc);
          var currentFocusIndex = allFocusables.indexOf(doc.activeElement);
          var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
          var focusDestination = allFocusables[focusDestinationIndex];
          var destinationItemSlide = closest(focusDestination, SLIDE_SEL);
          var destinationItemSection = closest(focusDestination, SECTION_SEL);
          return !destinationItemSlide && !destinationItemSection;
        }
        function shouldCancelKeyboardNavigation(e) {
          var keyControls = [40, 38, 32, 33, 34];
          return keyControls.indexOf(e.keyCode) > -1 && !state.isBeyondFullpage;
        }
        function cancelDirectionKeyEvents(e) {
          if (shouldCancelKeyboardNavigation(e) && !closest(e.target, OVERFLOW_SEL)) {
            e.preventDefault();
          }
        }
        function getControlPressed() {
          return g_controlPressed;
        }
        var prevTime = (/* @__PURE__ */ new Date()).getTime();
        var scrollings = [];
        FP.setMouseWheelScrolling = setMouseWheelScrolling;
        function setMouseWheelScrolling(value) {
          if (value) {
            addMouseWheelHandler();
            addMiddleWheelHandler();
          } else {
            removeMouseWheelHandler();
            removeMiddleWheelHandler();
          }
        }
        function addMouseWheelHandler() {
          var prefix2 = "";
          var _addEventListener;
          if (win.addEventListener) {
            _addEventListener = "addEventListener";
          } else {
            _addEventListener = "attachEvent";
            prefix2 = "on";
          }
          var support = "onwheel" in doc.createElement("div") ? "wheel" : (
            // Modern browsers support "wheel"
            // @ts-ignore
            doc.onmousewheel !== void 0 ? "mousewheel" : (
              // Webkit and IE support at least "mousewheel"
              "DOMMouseScroll"
            )
          );
          var passiveEvent = getPassiveOptionsIfPossible();
          if (support == "DOMMouseScroll") {
            doc[_addEventListener](prefix2 + "MozMousePixelScroll", MouseWheelHandler, passiveEvent);
          } else {
            doc[_addEventListener](prefix2 + support, MouseWheelHandler, passiveEvent);
          }
        }
        function addMiddleWheelHandler() {
          getContainer().addEventListener("mousedown", mouseDownHandler);
          getContainer().addEventListener("mouseup", mouseUpHandler);
        }
        function removeMouseWheelHandler() {
          if (doc.addEventListener) {
            docRemoveEvent("mousewheel", MouseWheelHandler, false);
            docRemoveEvent("wheel", MouseWheelHandler, false);
            docRemoveEvent("MozMousePixelScroll", MouseWheelHandler, false);
          } else {
            doc.detachEvent("onmousewheel", MouseWheelHandler);
          }
        }
        function removeMiddleWheelHandler() {
          getContainer().removeEventListener("mousedown", mouseDownHandler);
          getContainer().removeEventListener("mouseup", mouseUpHandler);
        }
        function MouseWheelHandler(e) {
          var curTime = (/* @__PURE__ */ new Date()).getTime();
          var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL);
          var isScrollAllowedBeyondFullPage = beyondFullPageHandler(getContainer(), e);
          if (!state.isUsingWheel) {
            setState({
              isGrabbing: false,
              isUsingWheel: true,
              touchDirection: "none"
            });
          }
          if (!getIsScrollAllowed().m.down && !getIsScrollAllowed().m.up) {
            preventDefault(e);
            return false;
          }
          if (isScrollAllowedBeyondFullPage) {
            return true;
          } else if (isScrollAllowedBeyondFullPage === false) {
            preventDefault(e);
            return false;
          }
          if (getOptions().autoScrolling && !getControlPressed() && !isNormalScroll) {
            e = e || win.event;
            var value = e.wheelDelta || -e.deltaY || -e.detail;
            var delta = Math.max(-1, Math.min(1, value));
            var horizontalDetection = typeof e.wheelDeltaX !== "undefined" || typeof e.deltaX !== "undefined";
            var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
            var direction = delta < 0 ? "down" : delta > 0 ? "up" : "none";
            if (scrollings.length > 149) {
              scrollings.shift();
            }
            scrollings.push(Math.abs(value));
            if (getOptions().scrollBar) {
              preventDefault(e);
            }
            var timeDiff = curTime - prevTime;
            prevTime = curTime;
            if (timeDiff > 200) {
              scrollings = [];
            }
            setState({
              wheelDirection: direction
            });
            if (state.canScroll) {
              var averageEnd = getAverage(scrollings, 10);
              var averageMiddle = getAverage(scrollings, 70);
              var isAccelerating = averageEnd >= averageMiddle;
              if (isAccelerating && isScrollingVertically) {
                setState({
                  scrollTrigger: "wheel"
                });
                if (delta < 0) {
                  scrolling("down");
                } else {
                  scrolling("up");
                }
              }
            }
            return false;
          }
          if (getOptions().fitToSection) {
            setState({
              activeAnimation: false
            });
          }
        }
        function mouseDownHandler(e) {
          if (e.which == 2) {
            setOldPageY(e.pageY);
            getContainer().addEventListener("mousemove", mouseMoveHandler);
          }
        }
        function mouseUpHandler(e) {
          if (e.which == 2) {
            getContainer().removeEventListener("mousemove", mouseMoveHandler);
          }
        }
        function setMouseHijack(value) {
          if (value) {
            setMouseWheelScrolling(true);
            addTouchHandler();
          } else {
            setMouseWheelScrolling(false);
            removeTouchHandler();
          }
        }
        var g_canFireMouseEnterNormalScroll = true;
        EventEmitter.on(events.bindEvents, bindEvents$7);
        function bindEvents$7() {
          if (getOptions().normalScrollElements) {
            ["mouseenter", "touchstart"].forEach(function(eventName) {
              forMouseLeaveOrTouch(eventName, false);
            });
            ["mouseleave", "touchend"].forEach(function(eventName) {
              forMouseLeaveOrTouch(eventName, true);
            });
          }
          EventEmitter.on(events.onDestroy, onDestroy$4);
        }
        function onDestroy$4() {
          ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(eventName) {
            docRemoveEvent(eventName, onMouseEnterOrLeave, true);
          });
        }
        function forMouseLeaveOrTouch(eventName, allowScrolling) {
          document["fp_" + eventName] = allowScrolling;
          docAddEvent(eventName, onMouseEnterOrLeave, true);
        }
        function onMouseEnterOrLeave(e) {
          var type = e.type;
          var isInsideOneNormalScroll = false;
          var target = type === "mouseleave" ? e.toElement || e.relatedTarget : e.target;
          if (target == document || !target) {
            setMouseHijack(true);
            return;
          }
          if (type === "touchend") {
            g_canFireMouseEnterNormalScroll = false;
            setTimeout(function() {
              g_canFireMouseEnterNormalScroll = true;
            }, 800);
          }
          if (type === "mouseenter" && !g_canFireMouseEnterNormalScroll) {
            return;
          }
          var normalSelectors = getOptions().normalScrollElements.split(",");
          normalSelectors.forEach(function(normalSelector) {
            if (!isInsideOneNormalScroll) {
              var isNormalScrollTarget = matches(target, normalSelector);
              var isNormalScrollChildFocused = closest(target, normalSelector);
              if (isNormalScrollTarget || isNormalScrollChildFocused) {
                if (!FP.shared.isNormalScrollElement) {
                  setMouseHijack(false);
                }
                FP.shared.isNormalScrollElement = true;
                isInsideOneNormalScroll = true;
              }
            }
          });
          if (!isInsideOneNormalScroll && FP.shared.isNormalScrollElement) {
            setMouseHijack(true);
            FP.shared.isNormalScrollElement = false;
          }
        }
        FP.silentMoveTo = silentMoveTo;
        function silentMoveTo(sectionAnchor, slideAnchor) {
          setScrollingSpeed(0, "internal");
          moveTo$1(sectionAnchor, slideAnchor);
          setScrollingSpeed(getOriginals().scrollingSpeed, "internal");
        }
        var previousHeight = getWindowHeight();
        var windowsWidth = getWindowWidth();
        var g_resizeId;
        var g_isConsecutiveResize = false;
        var g_resizeMobileHandlerId;
        FP.reBuild = reBuild;
        EventEmitter.on(events.bindEvents, bindEvents$6);
        function bindEvents$6() {
          resizeHandler();
          windowAddEvent("resize", resizeHandler);
          EventEmitter.on(events.onDestroy, onDestroy$3);
        }
        function onDestroy$3() {
          clearTimeout(g_resizeId);
          clearTimeout(g_resizeMobileHandlerId);
          windowRemoveEvent("resize", resizeHandler);
        }
        function resizeHandler() {
          if (!g_isConsecutiveResize) {
            if (getOptions().autoScrolling && !getOptions().scrollBar || !getOptions().fitToSection) {
              setSectionsHeight(getWindowHeight());
            }
          }
          fitToActiveSection();
          g_isConsecutiveResize = true;
          clearTimeout(g_resizeId);
          g_resizeId = setTimeout(function() {
            resizeActions();
            g_isConsecutiveResize = false;
          }, 400);
        }
        function fitToActiveSection() {
          if (isTouchDevice) {
            for (var i = 0; i < 4; i++) {
              g_resizeMobileHandlerId = setTimeout(function() {
                window.requestAnimationFrame(function() {
                  if (getOptions().autoScrolling && !getOptions().scrollBar) {
                    setState({
                      isResizing: true
                    });
                    silentMoveTo(state.activeSection.index() + 1);
                    setState({
                      isResizing: false
                    });
                  }
                });
              }, 200 * i);
            }
          }
        }
        function resizeActions() {
          setState({
            isResizing: true
          });
          setSectionsHeight("");
          if (!getOptions().autoScrolling && !state.isBeyondFullpage) {
            setVhUnits();
          }
          EventEmitter.emit(events.contentChanged);
          updateState();
          responsive();
          if (isTouchDevice) {
            var activeElement = doc.activeElement;
            if (!matches(activeElement, "textarea") && !matches(activeElement, "input") && !matches(activeElement, "select")) {
              var currentHeight = getWindowHeight();
              if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
                reBuild(true);
                previousHeight = currentHeight;
              }
            }
          } else {
            adjustToNewViewport();
          }
          setState({
            isResizing: false
          });
        }
        function reBuild(resizing) {
          if (hasClass(getContainer(), DESTROYED)) {
            return;
          }
          setState({
            isResizing: true,
            windowsHeight: getWindowHeight(),
            windowsWidth: getWindowWidth()
          });
          var sections = getState().sections;
          for (var i = 0; i < sections.length; ++i) {
            var section = sections[i];
            var slidesWrap = $(SLIDES_WRAPPER_SEL, section.item)[0];
            var slides = section.slides;
            if (slides.length > 1) {
              landscapeScroll(slidesWrap, section.activeSlide.item);
            }
          }
          if (getOptions().scrollOverflow) {
            scrollOverflowHandler.makeScrollable();
          }
          var sectionIndex = getState().activeSection.index();
          if (!state.isBeyondFullpage) {
            if (sectionIndex) {
              silentMoveTo(sectionIndex + 1);
            }
          }
          setState({
            isResizing: false
          });
          if (isFunction(getOptions().afterResize) && resizing) {
            getOptions().afterResize.call(getContainer(), win.innerWidth, win.innerHeight);
          }
          if (isFunction(getOptions().afterReBuild) && !resizing) {
            getOptions().afterReBuild.call(getContainer());
          }
          trigger2(getContainer(), "afterRebuild");
        }
        function adjustToNewViewport() {
          var newWindowHeight = getWindowHeight();
          var newWindowWidth = getWindowWidth();
          if (state.windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth) {
            setState({
              windowsHeight: newWindowHeight
            });
            windowsWidth = newWindowWidth;
            reBuild(true);
          }
        }
        function setSectionsHeight(value) {
          var propertyValue = value === "" ? "" : value + "px";
          getState().sections.forEach(function(section) {
            css(section.item, {
              "height": propertyValue
            });
          });
        }
        function setVhUnits() {
          if (!getOptions().autoScrolling || getOptions().scrollBar) {
            var vh = win.innerHeight * 0.01;
            doc.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
          }
        }
        function getAnchorsURL() {
          var section;
          var slide;
          var hash = win.location.hash;
          if (hash.length) {
            var anchorsParts = hash.replace("#", "").split("/");
            var isFunkyAnchor = hash.indexOf("#/") > -1;
            section = isFunkyAnchor ? "/" + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);
            var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];
            if (slideAnchor && slideAnchor.length) {
              slide = decodeURIComponent(slideAnchor);
            }
          }
          return {
            section,
            slide
          };
        }
        FP.setLockAnchors = setLockAnchors;
        EventEmitter.on(events.bindEvents, bindEvents$5);
        function bindEvents$5() {
          windowAddEvent("hashchange", hashChangeHandler);
          EventEmitter.on(events.onDestroy, onDestroy$2);
        }
        function onDestroy$2() {
          windowRemoveEvent("hashchange", hashChangeHandler);
        }
        function setLockAnchors(value) {
          getOptions().lockAnchors = value;
        }
        function hashChangeHandler() {
          if (!state.isScrolling && !getOptions().lockAnchors) {
            var anchors = getAnchorsURL();
            var sectionAnchor = anchors.section;
            var slideAnchor = anchors.slide;
            var isFirstSlideMove = typeof state.lastScrolledDestiny === "undefined";
            var isFirstScrollMove = typeof state.lastScrolledDestiny === "undefined" && typeof slideAnchor === "undefined" && !state.slideMoving;
            if (sectionAnchor && sectionAnchor.length) {
              if (sectionAnchor && sectionAnchor !== state.lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !state.slideMoving && state.lastScrolledSlide != slideAnchor) {
                EventEmitter.emit(events.onScrollPageAndSlide, {
                  sectionAnchor,
                  slideAnchor
                });
              }
            }
          }
        }
        EventEmitter.on(events.bindEvents, bindEvents$4);
        function bindEvents$4() {
          docAddEvent("wheel", wheelDataHandler.registerEvent, getPassiveOptionsIfPossible());
          EventEmitter.on(events.scrollBeyondFullpage, scrollBeyondFullPage);
          EventEmitter.on(events.onKeyDown, onKeyDown);
        }
        EventEmitter.on(events.bindEvents, bindEvents$3);
        function bindEvents$3() {
          EventEmitter.on(events.onClickOrTouch, onClickOrTouch$1);
        }
        function onClickOrTouch$1(params) {
          var target = params.target;
          if (closest(target, getOptions().menu + " [data-menuanchor]")) {
            menuItemsHandler.call(target, params);
          }
        }
        function menuItemsHandler(e) {
          setState({
            scrollTrigger: "menu"
          });
          if ($(getOptions().menu)[0] && (getOptions().lockAnchors || !getOptions().anchors.length)) {
            preventDefault(e);
            EventEmitter.emit(events.onMenuClick, {
              anchor: getAttr(this, "data-menuanchor")
            });
          }
        }
        EventEmitter.on(events.bindEvents, bindEvents$2);
        function bindEvents$2() {
          EventEmitter.on(events.onClickOrTouch, onClickOrTouch);
        }
        function onClickOrTouch(params) {
          var target = params.target;
          if (target && closest(target, SECTION_NAV_SEL + " a")) {
            sectionBulletHandler.call(target, params.e);
          } else if (matches(target, SECTION_NAV_TOOLTIP_SEL)) {
            tooltipTextHandler.call(target);
          } else if (matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null) {
            slideBulletHandler.call(target, params.e);
          }
        }
        var lastScroll = 0;
        var g_scrollId;
        var g_scrollId2;
        EventEmitter.on(events.onDestroy, onDestroy$1);
        function scrollHandler(e) {
          var currentSection;
          var currentSectionElem;
          if (state.isResizing || !getState().activeSection) {
            return;
          }
          getLast(getState().sections);
          if (getState().isBeyondFullpage || getState().isAboutToScrollToFullPage) {
            return;
          }
          if (!getOptions().autoScrolling || getOptions().scrollBar) {
            var currentScroll = getScrollTop();
            var scrollDirection = getScrollDirection(currentScroll);
            var visibleSectionIndex = 0;
            var screen_mid = currentScroll + getWindowHeight() / 2;
            var isAtBottom = $body.scrollHeight - getWindowHeight() === currentScroll;
            var sections = getState().sections;
            setState({
              scrollY: currentScroll
            });
            if (isAtBottom) {
              visibleSectionIndex = sections.length - 1;
            } else if (!currentScroll) {
              visibleSectionIndex = 0;
            } else {
              for (var i = 0; i < sections.length; ++i) {
                var section = sections[i].item;
                if (section.offsetTop <= screen_mid) {
                  visibleSectionIndex = i;
                }
              }
            }
            if (isCompletelyInViewPort(scrollDirection)) {
              if (!hasClass(getState().activeSection.item, COMPLETELY)) {
                addClass(getState().activeSection.item, COMPLETELY);
                removeClass(siblings(getState().activeSection.item), COMPLETELY);
              }
            }
            currentSection = sections[visibleSectionIndex];
            currentSectionElem = currentSection.item;
            if (!currentSection.isActive) {
              setState({
                isScrolling: true
              });
              var leavingSection = getState().activeSection.item;
              var leavingSectionIndex = getState().activeSection.index() + 1;
              var yMovement = getYmovement(getState().activeSection, currentSectionElem);
              var anchorLink = currentSection.anchor;
              var sectionIndex = currentSection.index() + 1;
              var activeSlide = currentSection.activeSlide;
              var slideIndex;
              var slideAnchorLink;
              var callbacksParams = {
                activeSection: leavingSection,
                sectionIndex: sectionIndex - 1,
                anchorLink,
                element: currentSectionElem,
                leavingSection: leavingSectionIndex,
                direction: yMovement,
                items: {
                  origin: getState().activeSection,
                  destination: currentSection
                }
              };
              if (activeSlide) {
                slideAnchorLink = activeSlide.anchor;
                slideIndex = activeSlide.index();
              }
              if (state.canScroll) {
                addClass(currentSectionElem, ACTIVE);
                removeClass(siblings(currentSectionElem), ACTIVE);
                if (isFunction(getOptions().beforeLeave)) {
                  fireCallbackOncePerScroll("beforeLeave", callbacksParams);
                }
                if (isFunction(getOptions().onLeave)) {
                  fireCallback("onLeave", callbacksParams);
                }
                if (isFunction(getOptions().afterLoad)) {
                  fireCallback("afterLoad", callbacksParams);
                }
                stopMedia(leavingSection);
                lazyLoad(currentSectionElem);
                playMedia(currentSectionElem);
                activateMenuAndNav(anchorLink, sectionIndex - 1);
                if (getOptions().anchors.length) {
                  setState({
                    lastScrolledDestiny: anchorLink
                  });
                }
                updateState();
                setPageStatus(slideIndex, slideAnchorLink, anchorLink);
              }
              clearTimeout(g_scrollId);
              g_scrollId = setTimeout(function() {
                setState({
                  isScrolling: false
                });
              }, 100);
            }
            if (getOptions().fitToSection && state.canScroll) {
              clearTimeout(g_scrollId2);
              g_scrollId2 = setTimeout(function() {
                var fixedSections = state.sections.filter(function(section2) {
                  var sectionValues = section2.item.getBoundingClientRect();
                  return Math.round(sectionValues.bottom) === Math.round(getWindowHeight()) || Math.round(sectionValues.top) === 0;
                });
                if (!fixedSections.length) {
                  fitToSection();
                }
              }, getOptions().fitToSectionDelay);
            }
          }
        }
        function onDestroy$1() {
          clearTimeout(g_scrollId);
          clearTimeout(g_scrollId2);
        }
        function getScrollDirection(currentScroll) {
          var direction = currentScroll > lastScroll ? "down" : "up";
          lastScroll = currentScroll;
          setState({
            previousDestTop: currentScroll
          });
          return direction;
        }
        function isCompletelyInViewPort(movement) {
          var top = getState().activeSection.item.offsetTop;
          var bottom = top + getWindowHeight();
          if (movement == "up") {
            return bottom >= getScrollTop() + getWindowHeight();
          }
          return top <= getScrollTop();
        }
        EventEmitter.on(events.bindEvents, bindEvents$1);
        EventEmitter.on(events.onDestroy, onDestroy);
        function onDestroy() {
          windowRemoveEvent("scroll", scrollHandler);
        }
        function bindEvents$1() {
          windowAddEvent("scroll", scrollHandler);
          doc.body.addEventListener("scroll", scrollHandler);
          EventEmitter.on(events.onScrollPageAndSlide, function(params) {
            scrollPageAndSlide(params.sectionAnchor, params.slideAnchor);
          });
          EventEmitter.on(events.onMenuClick, function(params) {
            moveTo$1(params.anchor, void 0);
          });
          EventEmitter.on(events.onScrollOverflowScrolled, function(params) {
            var scrollSection = params.direction === "down" ? moveSectionDown : moveSectionUp;
            scrollSection();
          });
          EventEmitter.on(events.scrollPage, function(params) {
            scrollPage(params.destination);
          });
        }
        FP.getActiveSlide = getActiveSlide;
        FP.getScrollX = function() {
          return state.scrollX;
        };
        EventEmitter.on(events.bindEvents, bindEvents);
        function bindEvents() {
          EventEmitter.on(events.onDestroy, onDestroy$6);
          EventEmitter.on(events.landscapeScroll, function(params) {
            landscapeScroll(params.slides, params.destination);
          });
          EventEmitter.on(events.moveSlideRight, function(params) {
            moveSlideRight(params.section);
          });
          EventEmitter.on(events.moveSlideLeft, function(params) {
            moveSlideLeft(params.section);
          });
        }
        function getActiveSlide() {
          return nullOrSlide(getState().activeSection.activeSlide);
        }
        EventEmitter.on(events.bindEvents, init$1);
        function init$1() {
          var position = getOptions().credits.position || "right";
          var positionStyle = ["left", "right"].indexOf(position) > -1 ? "".concat(position, ": 0;") : "";
          var waterMark = '\n        <div class="fp-watermark" style="'.concat(positionStyle, '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(getOptions().credits.label || "Made with fullPage.js", "\n            </a>\n        </div>\n    ");
          var lastSection = getLast(state.sections);
          var shouldUseWaterMark = !state.isValid || getOptions().credits.enabled;
          if (lastSection && lastSection.item && shouldUseWaterMark) {
            lastSection.item.insertAdjacentHTML("beforeend", waterMark);
          }
        }
        !function() {
          EventEmitter.on(events.onInitialise, function() {
            var n2, a, l;
            setState({
              isValid: (getOptions().licenseKey, n2 = getOptions().licenseKey, a = function(n3) {
                var e2 = parseInt("514").toString(16);
                if (!n3 || n3.length < 29 || 4 === n3.split(t[0]).length) return null;
                var r2 = ["Each", "for"][i()]().join(""), a2 = n3[["split"]]("-"), l2 = [];
                a2[r2](function(t2, n4) {
                  if (n4 < 4) {
                    var r3 = function(t3) {
                      var n5 = t3[t3.length - 1], e3 = ["NaN", "is"][i()]().join("");
                      return window[e3](n5) ? o(n5) : function(t4) {
                        return t4 - ACTIVE.length;
                      }(n5);
                    }(t2);
                    l2.push(r3);
                    var s2 = o(t2[r3]);
                    if (1 === n4) {
                      var a3 = ["pa", "dS", "t", "art"].join("");
                      s2 = s2.toString()[a3](2, "0");
                    }
                    e2 += s2, 0 !== n4 && 1 !== n4 || (e2 += "-");
                  }
                });
                var m = 0, f = "";
                return n3.split("-").forEach(function(t2, n4) {
                  if (n4 < 4) {
                    var _i = 0;
                    for (var e3 = 0; e3 < 4; e3++) {
                      e3 !== l2[n4] && (_i += Math.abs(o(t2[e3])), isNaN(t2[e3]) || m++);
                    }
                    var r3 = s(_i);
                    f += r3;
                  }
                }), f += s(m), {
                  v: /* @__PURE__ */ new Date(e2 + "T00:00"),
                  o: e2.split("-")[2] === 8 * (ACTIVE.length - 2) + "",
                  l: f
                };
              }(n2), l = function(t2) {
                var n3 = r[i()]().join("");
                return t2 && 0 === n3.indexOf(t2) && t2.length === n3.length;
              }(n2), (a || l) && (a && e <= a.v && a.l === n2.split(t[0])[4] || l || a.o) || false)
            });
          });
          var t = ["-"];
          var n = "2024-0-31".split("-"), e = new Date(n[0], n[1], n[2]), r = ["se", "licen", "-", "v3", "l", "gp"];
          function i() {
            return [["re", "verse"].join("")]["".length];
          }
          function o(t2) {
            return t2 ? isNaN(t2) ? t2.charCodeAt(0) - 72 : t2 : "";
          }
          function s(t2) {
            var n2 = 72 + t2;
            return n2 > 90 && n2 < 97 && (n2 += 15), String.fromCharCode(n2).toUpperCase();
          }
        }();
        FP.setKeyboardScrolling = setKeyboardScrolling;
        function setKeyboardScrolling(value, directions) {
          if (typeof directions !== "undefined") {
            directions = directions.replace(/ /g, "").split(",");
            directions.forEach(function(direction) {
              setIsScrollAllowed(value, direction, "k");
            });
          } else {
            setIsScrollAllowed(value, "all", "k");
            getOptions().keyboardScrolling = value;
          }
        }
        function styleMenu(section) {
          var index2 = section.index();
          if (typeof getOptions().anchors[index2] !== "undefined") {
            if (section.isActive) {
              activateMenuAndNav(getOptions().anchors[index2], index2);
            }
          }
          if (getOptions().menu && getOptions().css3 && closest($(getOptions().menu)[0], WRAPPER_SEL) != null) {
            $(getOptions().menu).forEach(function(menu) {
              $body.appendChild(menu);
            });
          }
        }
        function prepareDom() {
          css(getParentsUntil(getContainer(), "body"), {
            "height": "100%",
            "position": "relative"
          });
          addClass(getContainer(), WRAPPER);
          addClass($html, ENABLED);
          setState({
            windowsHeight: getWindowHeight()
          });
          removeClass(getContainer(), DESTROYED);
          addInternalSelectors();
          var sections = getState().sectionsIncludingHidden;
          for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            var slides = section.allSlidesItems;
            var originalStyles = getAttr(section.item, "style");
            if (originalStyles) {
              section.item.setAttribute("data-fp-styles", originalStyles);
            }
            styleSection(section);
            styleMenu(section);
            if (slides.length > 0) {
              styleSlides(section);
            }
          }
          if (getOptions().fixedElements && getOptions().css3) {
            $(getOptions().fixedElements).forEach(function(item) {
              $body.appendChild(item);
            });
          }
          if (getOptions().navigation) {
            addVerticalNavigation();
          }
          enableYoutubeAPI();
          if (getOptions().scrollOverflow) {
            scrollOverflowHandler.makeScrollable();
          }
        }
        FP.shared.afterRenderActions = afterRenderActions;
        function afterRenderActions() {
          var section = getState().activeSection;
          var sectionElem = getState().activeSection.item;
          addClass(sectionElem, COMPLETELY);
          lazyLoad(sectionElem);
          lazyLoadOthers();
          playMedia(sectionElem);
          if (isDestinyTheStartingSection() && isFunction(getOptions().afterLoad)) {
            fireCallback("afterLoad", {
              activeSection: sectionElem,
              element: sectionElem,
              direction: null,
              //for backwards compatibility callback (to be removed in a future!)
              anchorLink: section.anchor,
              sectionIndex: section.index(),
              items: {
                origin: getState().activeSection,
                destination: getState().activeSection
              }
            });
          }
          if (isFunction(getOptions().afterRender)) {
            fireCallback("afterRender");
          }
        }
        function isDestinyTheStartingSection() {
          var anchor = getAnchorsURL();
          var destinationSection = getSectionByAnchor(anchor.section);
          return !anchor.section || !destinationSection || typeof destinationSection !== "undefined" && destinationSection.index() === index(getStartingSection());
        }
        FP.setAllowScrolling = setAllowScrolling;
        function setAllowScrolling(value, directions) {
          if (typeof directions !== "undefined") {
            directions = directions.replace(/ /g, "").split(",");
            directions.forEach(function(direction) {
              setIsScrollAllowed(value, direction, "m");
            });
          } else {
            setIsScrollAllowed(value, "all", "m");
          }
        }
        function scrollToAnchor() {
          var anchors = getAnchorsURL();
          var sectionAnchor = anchors.section;
          var slideAnchor = anchors.slide;
          if (sectionAnchor) {
            if (getOptions().animateAnchor) {
              scrollPageAndSlide(sectionAnchor, slideAnchor);
            } else {
              silentMoveTo(sectionAnchor, slideAnchor);
            }
          } else {
            EventEmitter.emit(events.onAfterRenderNoAnchor, null);
          }
        }
        function destroyStructure() {
          silentScroll(0);
          $("img[data-src], source[data-src], audio[data-src], iframe[data-src]", getContainer()).forEach(function(item) {
            setSrc(item, "src");
          });
          $("img[data-srcset]").forEach(function(item) {
            setSrc(item, "srcset");
          });
          remove($(SECTION_NAV_SEL + ", " + SLIDES_NAV_SEL + ", " + SLIDES_ARROW_SEL));
          css(getNodes(getState().sections), {
            "height": "",
            "background-color": "",
            "padding": ""
          });
          css(getNodes(getState().slides), {
            "width": ""
          });
          css(getContainer(), {
            "height": "",
            "position": "",
            "-ms-touch-action": "",
            "touch-action": ""
          });
          css($htmlBody, {
            "overflow": "",
            "height": ""
          });
          removeClass($html, ENABLED);
          removeClass($body, RESPONSIVE + " " + SCROLLABLE);
          $body.className.split(/\s+/).forEach(function(className) {
            if (className.indexOf(VIEWING_PREFIX) === 0) {
              removeClass($body, className);
            }
          });
          getNodes(getState().panels).forEach(function(item) {
            if (getOptions().scrollOverflow) {
              scrollOverflowHandler.destroyWrapper(item);
            }
            removeClass(item, TABLE + " " + ACTIVE + " " + COMPLETELY + " " + IS_OVERFLOW);
            var previousStyles = getAttr(item, "data-fp-styles");
            if (previousStyles) {
              item.setAttribute("style", previousStyles);
            }
            if (hasClass(item, SECTION) && !getInitialAnchorsInDom()) {
              item.removeAttribute("data-anchor");
            }
          });
          removeAnimation(getContainer());
          [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL, SLIDES_WRAPPER_SEL].forEach(function(selector) {
            $(selector, getContainer()).forEach(function(item) {
              unwrap(item);
            });
          });
          css(getContainer(), {
            "-webkit-transition": "none",
            "transition": "none"
          });
          removeClass(getContainer(), WRAPPER);
          win.scrollTo(0, 0);
          var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
          usedSelectors.forEach(function(item) {
            removeClass($("." + item), item);
          });
        }
        FP.destroy = destroy;
        function init() {
          updateStructuralState();
          updateState();
          getOptions().scrollBar = getOptions().scrollBar || getOptions().hybrid;
          setOptionsFromDOM();
          prepareDom();
          setAllowScrolling(true);
          setMouseHijack(true);
          setAutoScrolling(getOptions().autoScrolling, "internal");
          responsive();
          setBodyClass();
          if (doc.readyState === "complete") {
            scrollToAnchor();
          }
          windowAddEvent("load", scrollToAnchor);
          afterRenderActions();
          updateStructuralState();
          updateState();
        }
        function destroy(all) {
          setAutoScrolling(false, "internal");
          setAllowScrolling(true);
          setMouseHijack(false);
          setKeyboardScrolling(false);
          addClass(getContainer(), DESTROYED);
          EventEmitter.emit(events.onDestroy);
          if (all) {
            destroyStructure();
          }
        }
        var isOK = function isOK2() {
          return getOptions() && state.isValid || doc.domain.indexOf("alvarotrigo.com") > -1;
        };
        function displayWarnings() {
          var l = getOptions()["licenseKey"];
          var msgStyle = "font-size: 15px;background:yellow;";
          if (getOptions().licenseKey.trim() === "") {
            showError("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:");
            showError("error", "https://github.com/alvarotrigo/fullPage.js#options");
          } else if (!isOK()) {
            showError("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:");
            showError("error", "https://alvarotrigo.com/fullPage/pricing");
          } else if (l && l.length < 20) {
            console.warn("%c This website was made using fullPage.js slider. More info on the following website:", msgStyle);
            console.warn("%c https://alvarotrigo.com/fullPage/", msgStyle);
          }
          if (hasClass($html, ENABLED)) {
            showError("error", "Fullpage.js can only be initialized once and you are doing it multiple times!");
            return;
          }
          if (getOptions().continuousVertical && (getOptions().loopTop || getOptions().loopBottom)) {
            getOptions().continuousVertical = false;
            showError("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled");
          }
          if (getOptions().scrollOverflow && (getOptions().scrollBar || !getOptions().autoScrolling)) {
            showError("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox");
          }
          if (getOptions().continuousVertical && (getOptions().scrollBar || !getOptions().autoScrolling)) {
            getOptions().continuousVertical = false;
            showError("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled");
          }
          extensions.forEach(function(extension) {
            if (getOptions()[extension]) {
              showError("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + extension);
            }
          });
          getOptions().anchors.forEach(function(name) {
            var nameAttr = [].slice.call($("[name]")).filter(function(item) {
              return getAttr(item, "name") && getAttr(item, "name").toLowerCase() == name.toLowerCase();
            });
            var idAttr = [].slice.call($("[id]")).filter(function(item) {
              return getAttr(item, "id") && getAttr(item, "id").toLowerCase() == name.toLowerCase();
            });
            if (idAttr.length || nameAttr.length) {
              showError("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
              var propertyName = idAttr.length ? "id" : "name";
              if (idAttr.length || nameAttr.length) {
                showError("error", '"' + name + '" is is being used by another element `' + propertyName + "` property");
              }
            }
          });
        }
        function fullpage(containerSelector, options) {
          setCache();
          if (hasClass($html, ENABLED)) {
            displayWarnings();
            return;
          }
          setOption("touchWrapper", typeof containerSelector === "string" ? $(containerSelector)[0] : containerSelector);
          setOptions(options);
          setContainer(typeof containerSelector === "string" ? $(containerSelector)[0] : containerSelector);
          EventEmitter.emit(events.onInitialise);
          displayWarnings();
          setAPI();
          if (getContainer()) {
            EventEmitter.emit(events.beforeInit);
            init();
            EventEmitter.emit(events.bindEvents);
          }
          return win.fullpage_api;
        }
        function setAPI() {
          FP.getFullpageData = function() {
            return {
              options: getOptions()
            };
          };
          FP.version = "4.0.22";
          FP.test = Object.assign(FP.test, {
            top: "0px",
            translate3d: "translate3d(0px, 0px, 0px)",
            translate3dH: function() {
              var a = [];
              for (var i = 0; i < $(getOptions().sectionSelector, getContainer()).length; i++) {
                a.push("translate3d(0px, 0px, 0px)");
              }
              return a;
            }(),
            left: function() {
              var a = [];
              for (var i = 0; i < $(getOptions().sectionSelector, getContainer()).length; i++) {
                a.push(0);
              }
              return a;
            }(),
            options: getOptions(),
            setAutoScrolling: null
          });
          FP.shared = Object.assign(FP.shared, {
            afterRenderActions: null,
            isNormalScrollElement: false
          });
          win.fullpage_api = FP;
        }
        win.fp_easings = deepExtend(win.fp_easings, {
          easeInOutCubic: function easeInOutCubic(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
          }
        });
        if (win.jQuery) {
          (function($2, fullpage2) {
            if (!$2 || !fullpage2) {
              showError("error", "jQuery is required to use the jQuery fullpage adapter!");
              return;
            }
            $2.fn.fullpage = function(options) {
              options = $2.extend({}, options, {
                "$": $2
              });
              new fullpage2(this[0], options);
              Object.keys(FP).forEach(function(key) {
                getOptions().$.fn.fullpage[key] = FP[key];
              });
            };
          })(win.jQuery, fullpage);
        }
        return fullpage;
      });
    }
  });

  // node_modules/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  var lastFlushedIndex = -1;
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1 && index > lastFlushedIndex)
      queue.splice(index, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i = 0; i < queue.length; i++) {
      queue[i]();
      lastFlushedIndex = i;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = /* @__PURE__ */ new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i) => i());
        };
      }
      el._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  function watch(getter, callback) {
    let firstTime = true;
    let oldValue;
    let effectReference = effect(() => {
      let value = getter();
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    });
    return () => release(effectReference);
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(el, callback) {
    if (typeof callback === "function") {
      if (!el._x_cleanups)
        el._x_cleanups = [];
      el._x_cleanups.push(callback);
    } else {
      callback = el;
      onElRemoveds.push(callback);
    }
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i) => i());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  function cleanupElement(el) {
    if (el._x_cleanups) {
      while (el._x_cleanups.length)
        el._x_cleanups.pop()();
    }
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var queuedMutations = [];
  function flushObserver() {
    let records = observer.takeRecords();
    queuedMutations.push(() => records.length > 0 && onMutate(records));
    let queueLengthWhenTriggered = queuedMutations.length;
    queueMicrotask(() => {
      if (queuedMutations.length === queueLengthWhenTriggered) {
        while (queuedMutations.length > 0)
          queuedMutations.shift()();
      }
    });
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = /* @__PURE__ */ new Set();
    let removedNodes = /* @__PURE__ */ new Set();
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for (let i = 0; i < mutations.length; i++) {
      if (mutations[i].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i].type === "childList") {
        mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.add(node));
        mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.add(node));
      }
      if (mutations[i].type === "attributes") {
        let el = mutations[i].target;
        let name = mutations[i].attributeName;
        let oldValue = mutations[i].oldValue;
        let add2 = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add2();
        } else if (el.hasAttribute(name)) {
          remove();
          add2();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i) => i(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.has(node))
        continue;
      onElRemoveds.forEach((i) => i(node));
    }
    addedNodes.forEach((node) => {
      node._x_ignoreSelf = true;
      node._x_ignore = true;
    });
    for (let node of addedNodes) {
      if (removedNodes.has(node))
        continue;
      if (!node.isConnected)
        continue;
      delete node._x_ignoreSelf;
      delete node._x_ignore;
      onElAddeds.forEach((i) => i(node));
      node._x_ignore = true;
      node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node) => {
      delete node._x_ignoreSelf;
      delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
    };
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    return new Proxy({ objects }, mergeProxyTrap);
  }
  var mergeProxyTrap = {
    ownKeys({ objects }) {
      return Array.from(
        new Set(objects.flatMap((i) => Object.keys(i)))
      );
    },
    has({ objects }, name) {
      if (name == Symbol.unscopables)
        return false;
      return objects.some(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name)
      );
    },
    get({ objects }, name, thisProxy) {
      if (name == "toJSON")
        return collapseProxies;
      return Reflect.get(
        objects.find(
          (obj) => Reflect.has(obj, name)
        ) || {},
        name,
        thisProxy
      );
    },
    set({ objects }, name, value, thisProxy) {
      const target = objects.find(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name)
      ) || objects[objects.length - 1];
      const descriptor = Object.getOwnPropertyDescriptor(target, name);
      if (descriptor?.set && descriptor?.get)
        return Reflect.set(target, name, value, thisProxy);
      return Reflect.set(target, name, value);
    }
  };
  function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key) => {
      acc[key] = Reflect.get(this, key);
      return acc;
    }, {});
  }
  function initInterceptors(data2) {
    let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        if (typeof value === "object" && value !== null && value.__v_skip)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject2(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback]) => {
      let memoizedUtilities = null;
      function getUtilities() {
        if (memoizedUtilities) {
          return memoizedUtilities;
        } else {
          let [utilities, cleanup2] = getElementBoundUtilities(el);
          memoizedUtilities = { interceptor, ...utilities };
          onElRemoved(el, cleanup2);
          return memoizedUtilities;
        }
      }
      Object.defineProperty(obj, `$${name}`, {
        get() {
          return callback(el, getUtilities());
        },
        enumerable: false
      });
    });
    return obj;
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e) {
      handleError(e, el, expression);
    }
  }
  function handleError(error2, el, expression = void 0) {
    error2 = Object.assign(
      error2 ?? { message: "No error message given." },
      { el, expression }
    );
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  var shouldAutoEvaluateFunctions = true;
  function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback();
    shouldAutoEvaluateFunctions = cache;
    return result;
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        let func2 = new AsyncFunction(
          ["__self", "scope"],
          `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
        );
        Object.defineProperty(func2, "name", {
          value: `[Alpine] ${expression}`
        });
        return func2;
      } catch (error2) {
        handleError(error2, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
      } else {
        receiver(result);
      }
    } else if (typeof value === "object" && value instanceof Promise) {
      value.then((i) => receiver(i));
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
    return {
      before(directive2) {
        if (!directiveHandlers[directive2]) {
          console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
          return;
        }
        const pos = directiveOrder.indexOf(directive2);
        directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
      }
    };
  }
  function directiveExists(name) {
    return Object.keys(directiveHandlers).includes(name);
  }
  function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
      let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(vAttributes);
      vAttributes = vAttributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = /* @__PURE__ */ new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback) => cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i) => i());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el, directive2) {
    let noop = () => {
    };
    let handler4 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler4.inline && handler4.inline(el, directive2, utilities);
      handler4 = handler4.bind(handler4, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i) => i;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i) => i.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
  ];
  function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(
      new CustomEvent(name, {
        detail,
        bubbles: true,
        // Allows events to pass the shadow DOM barrier.
        composed: true,
        cancelable: true
      })
    );
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  var started = false;
  function start() {
    if (started)
      warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
    setTimeout(() => {
      warnAboutMissingPlugins();
    });
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback) {
    if (!el)
      return;
    if (callback(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  var initInterceptors2 = [];
  function interceptInit(callback) {
    initInterceptors2.push(callback);
  }
  function initTree(el, walker = walk, intercept = () => {
  }) {
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        intercept(el2, skip);
        initInterceptors2.forEach((i) => i(el2, skip));
        directives(el2, el2.attributes).forEach((handle) => handle());
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root, walker = walk) {
    walker(root, (el) => {
      cleanupAttributes(el);
      cleanupElement(el);
    });
  }
  function warnAboutMissingPlugins() {
    let pluginDirectives = [
      ["ui", "dialog", ["[x-dialog], [x-popover]"]],
      ["anchor", "anchor", ["[x-anchor]"]],
      ["sort", "sort", ["[x-sort]"]]
    ];
    pluginDirectives.forEach(([plugin2, directive2, selectors]) => {
      if (directiveExists(directive2))
        return;
      selectors.some((selector) => {
        if (document.querySelector(selector)) {
          warn(`found "${selector}", but missing ${plugin2} plugin`);
          return true;
        }
      });
    });
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback = () => {
  }) {
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
    return new Promise((res) => {
      tickStack.push(() => {
        callback();
        res();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i) => {
      if (el.classList.contains(i)) {
        el.classList.remove(i);
        removed.push(i);
      }
    });
    forAdd.forEach((i) => {
      if (!el.classList.contains(i)) {
        el.classList.add(i);
        added.push(i);
      }
    });
    return () => {
      removed.forEach((i) => el.classList.add(i));
      added.forEach((i) => el.classList.remove(i));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (expression === false)
      return;
    if (!expression || typeof expression === "boolean") {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      "enter": (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      "leave": (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: `${delay}s`,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: `${delay}s`,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = () => nextTick2(show);
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide));
      el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest = closestHide(el);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el);
      } else {
        nextTick2(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i]) => i());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e) => {
            if (!e.isFromCancelledTransition)
              throw e;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start2);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration" || key === "delay") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback(...args);
  }
  function onlyDuringClone(callback) {
    return (...args) => isCloning && callback(...args);
  }
  var interceptors = [];
  function interceptClone(callback) {
    interceptors.push(callback);
  }
  function cloneNode(from, to) {
    interceptors.forEach((i) => i(from, to));
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      initTree(to, (el, callback) => {
        callback(el, () => {
        });
      });
    });
    isCloning = false;
  }
  var isCloningLegacy = false;
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      case "selected":
      case "checked":
        bindAttributeAndProperty(el, name, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (el.type === "radio") {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        if (typeof value === "boolean") {
          el.checked = safeParseBoolean(el.value) === value;
        } else {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      }
    } else if (el.type === "checkbox") {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value === void 0 ? "" : value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) {
      el[propName] = value;
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function safeParseBoolean(rawValue) {
    if ([1, "1", "true", "on", "yes", true].includes(rawValue)) {
      return true;
    }
    if ([0, "0", "false", "off", "no", false].includes(rawValue)) {
      return false;
    }
    return rawValue ? Boolean(rawValue) : null;
  }
  function isBooleanAttr(attrName) {
    const booleanAttributes = [
      "disabled",
      "checked",
      "required",
      "readonly",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule"
    ];
    return booleanAttributes.includes(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback);
  }
  function extractProp(el, name, fallback, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
      let binding = el._x_inlineBindings[name];
      binding.extract = extract;
      return dontAutoEvaluateFunctions(() => {
        return evaluate(el, binding.expression);
      });
    }
    return getAttributeBinding(el, name, fallback);
  }
  function getAttributeBinding(el, name, fallback) {
    let attr = el.getAttribute(name);
    if (attr === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "")
      return true;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    return attr;
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash;
    let innerHash;
    let reference = effect(() => {
      let outer = outerGet();
      let inner = innerGet();
      if (firstRun) {
        innerSet(cloneIfObject(outer));
        firstRun = false;
      } else {
        let outerHashLatest = JSON.stringify(outer);
        let innerHashLatest = JSON.stringify(inner);
        if (outerHashLatest !== outerHash) {
          innerSet(cloneIfObject(outer));
        } else if (outerHashLatest !== innerHashLatest) {
          outerSet(cloneIfObject(inner));
        } else {
        }
      }
      outerHash = JSON.stringify(outerGet());
      innerHash = JSON.stringify(innerGet());
    });
    return () => {
      release(reference);
    };
  }
  function cloneIfObject(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
  }
  function plugin(callback) {
    let callbacks = Array.isArray(callback) ? callback : [callback];
    callbacks.forEach((i) => i(alpine_default));
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
    initInterceptors(stores[name]);
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
    if (name instanceof Element) {
      return applyBindingsObject(name, getBindings());
    } else {
      binds[name] = getBindings;
    }
    return () => {
    };
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    directives(el, attributes, original).map((handle) => {
      cleanupRunners.push(handle.runCleanups);
      handle();
    });
    return () => {
      while (cleanupRunners.length)
        cleanupRunners.pop()();
    };
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.13.10",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    // INTERNAL: not public API and is subject to change without major release.
    transition,
    // INTERNAL
    setStyles,
    // INTERNAL
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    // INTERNAL
    cloneNode,
    // INTERNAL
    bound: getBinding,
    $data: scope,
    watch,
    walk,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect3();
    }
    return effect3;
  }
  function stop(effect3) {
    if (effect3.active) {
      cleanup(effect3);
      if (effect3.options.onStop) {
        effect3.options.onStop();
      }
      effect3.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
      if (!effect3.active) {
        return fn();
      }
      if (!effectStack.includes(effect3)) {
        cleanup(effect3);
        try {
          enableTracking();
          effectStack.push(effect3);
          activeEffect = effect3;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
  }
  function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect3);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = /* @__PURE__ */ new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect3) => {
          if (effect3 !== activeEffect || effect3.allowRecurse) {
            effects.add(effect3);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect3) => {
      if (effect3.options.onTrigger) {
        effect3.options.onTrigger({
          effect: effect3,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect3.options.scheduler) {
        effect3.options.scheduler(effect3);
      } else {
        effect3();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (true) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (true) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var toReactive = (value) => isObject(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target[
      "__v_raw"
      /* RAW */
    ];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* CLEAR */
      ),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* CLEAR */
      ),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value[
      "__v_skip"
      /* SKIP */
    ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target[
      "__v_isReadonly"
      /* IS_READONLY */
    ]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target[
      "__v_raw"
      /* RAW */
    ] && !(isReadonly && target[
      "__v_isReactive"
      /* IS_REACTIVE */
    ])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed[
      "__v_raw"
      /* RAW */
    ]) || observed;
  }
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => (key, callback) => {
    let evaluate2 = evaluateLater2(key);
    let getter = () => {
      let value;
      evaluate2((i) => value = i);
      return value;
    };
    let unwatch = watch(getter, callback);
    cleanup2(unwatch);
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    findClosest(el, (i) => {
      if (i._x_refs)
        refObjects.push(i._x_refs);
    });
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el, { cleanup: cleanup2 }) => (name, key = null) => {
    let cacheKey = `${name}${key ? `-${key}` : ""}`;
    return cacheIdByNameOnElement(el, cacheKey, cleanup2, () => {
      let root = closestIdRoot(el, name);
      let id = root ? root._x_ids[name] : findAndIncrementId(name);
      return key ? `${name}-${id}-${key}` : `${name}-${id}`;
    });
  });
  interceptClone((from, to) => {
    if (from._x_id) {
      to._x_id = from._x_id;
    }
  });
  function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback) {
    if (!el._x_id)
      el._x_id = {};
    if (el._x_id[cacheKey])
      return el._x_id[cacheKey];
    let output = callback();
    el._x_id[cacheKey] = output;
    cleanup2(() => {
      delete el._x_id[cacheKey];
    });
    return output;
  }
  magic("el", (el) => el);
  warnMissingPluginMagic("Focus", "focus", "focus");
  warnMissingPluginMagic("Persist", "persist", "persist");
  function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i) => result = i);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { "__placeholder": val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      el._x_removeModelListeners["default"]();
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      let releaseEntanglement = entangle(
        {
          get() {
            return outerGet();
          },
          set(value) {
            outerSet(value);
          }
        },
        {
          get() {
            return innerGet();
          },
          set(value) {
            innerSet(value);
          }
        }
      );
      cleanup2(releaseEntanglement);
    });
  });
  directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget(expression);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone2.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e) => {
          e.stopPropagation();
          el.dispatchEvent(new e.constructor(e.type, e));
        });
      });
    }
    addScopeToNode(clone2, {}, el);
    let placeInDom = (clone3, target2, modifiers2) => {
      if (modifiers2.includes("prepend")) {
        target2.parentNode.insertBefore(clone3, target2);
      } else if (modifiers2.includes("append")) {
        target2.parentNode.insertBefore(clone3, target2.nextSibling);
      } else {
        target2.appendChild(clone3);
      }
    };
    mutateDom(() => {
      placeInDom(clone2, target, modifiers);
      skipDuringClone(() => {
        initTree(clone2);
        clone2._x_ignore = true;
      })();
    });
    el._x_teleportPutBack = () => {
      let target2 = getTarget(expression);
      mutateDom(() => {
        placeInDom(el._x_teleport, target2, modifiers);
      });
    };
    cleanup2(() => clone2.remove());
  });
  var teleportContainerDuringClone = document.createElement("div");
  function getTarget(expression) {
    let target = skipDuringClone(() => {
      return document.querySelector(expression);
    }, () => {
      return teleportContainerDuringClone;
    })();
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
  }
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", skipDuringClone((el, { expression }, { effect: effect3 }) => {
    effect3(evaluateLater(el, expression));
  }));
  function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler4 = (e) => callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent"))
      handler4 = wrapHandler(handler4, (next, e) => {
        e.preventDefault();
        next(e);
      });
    if (modifiers.includes("stop"))
      handler4 = wrapHandler(handler4, (next, e) => {
        e.stopPropagation();
        next(e);
      });
    if (modifiers.includes("once")) {
      handler4 = wrapHandler(handler4, (next, e) => {
        next(e);
        listenerTarget.removeEventListener(event, handler4, options);
      });
    }
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler4 = wrapHandler(handler4, (next, e) => {
        if (el.contains(e.target))
          return;
        if (e.target.isConnected === false)
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next(e);
      });
    }
    if (modifiers.includes("self"))
      handler4 = wrapHandler(handler4, (next, e) => {
        e.target === el && next(e);
      });
    handler4 = wrapHandler(handler4, (next, e) => {
      if (isKeyEvent(event)) {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
          return;
        }
      }
      next(e);
    });
    listenerTarget.addEventListener(event, handler4, options);
    return () => {
      listenerTarget.removeEventListener(event, handler4, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    if ([" ", "_"].includes(
      subject
    ))
      return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i) => {
      return !["window", "document", "prevent", "stop", "once", "capture"].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
      let debounceIndex = keyModifiers.indexOf("throttle");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (keyToModifiers(e.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      "ctrl": "control",
      "slash": "/",
      "space": " ",
      "spacebar": " ",
      "cmd": "meta",
      "esc": "escape",
      "up": "arrow-up",
      "down": "arrow-down",
      "left": "arrow-left",
      "right": "arrow-right",
      "period": ".",
      "comma": ",",
      "equal": "=",
      "minus": "-",
      "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let scopeTarget = el;
    if (modifiers.includes("parent")) {
      scopeTarget = el.parentNode;
    }
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    } else if (typeof expression === "function" && typeof expression() === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    } else {
      evaluateSet = () => {
      };
    }
    let getValue = () => {
      let result;
      evaluateGet((value) => result = value);
      return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value) => {
      let result;
      evaluateGet((value2) => result = value2);
      if (isGetterSetter(result)) {
        result.set(value);
      } else {
        evaluateSet(() => {
        }, {
          scope: { "__placeholder": value }
        });
      }
    };
    if (typeof expression === "string" && el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener = isCloning ? () => {
    } : on(el, event, modifiers, (e) => {
      setValue(getInputValue(el, modifiers, e, getValue()));
    });
    if (modifiers.includes("fill")) {
      if ([void 0, null, ""].includes(getValue()) || el.type === "checkbox" && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) {
        setValue(
          getInputValue(el, modifiers, { target: el }, getValue())
        );
      }
    }
    if (!el._x_removeModelListeners)
      el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(() => el._x_removeModelListeners["default"]());
    if (el.form) {
      let removeResetListener = on(el.form, "reset", [], (e) => {
        nextTick(() => el._x_model && el._x_model.set(getInputValue(el, modifiers, { target: el }, getValue())));
      });
      cleanup2(() => removeResetListener());
    }
    el._x_model = {
      get() {
        return getValue();
      },
      set(value) {
        setValue(value);
      }
    };
    el._x_forceModelUpdate = (value) => {
      if (value === void 0 && typeof expression === "string" && expression.match(/\./))
        value = "";
      window.fromModel = true;
      mutateDom(() => bind(el, "value", value));
      delete window.fromModel;
    };
    effect3(() => {
      let value = getValue();
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate(value);
    });
  });
  function getInputValue(el, modifiers, event, currentValue) {
    return mutateDom(() => {
      if (event instanceof CustomEvent && event.detail !== void 0)
        return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
      else if (el.type === "checkbox") {
        if (Array.isArray(currentValue)) {
          let newValue = null;
          if (modifiers.includes("number")) {
            newValue = safeParseNumber(event.target.value);
          } else if (modifiers.includes("boolean")) {
            newValue = safeParseBoolean(event.target.value);
          } else {
            newValue = event.target.value;
          }
          return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
        if (modifiers.includes("number")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          });
        } else if (modifiers.includes("boolean")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseBoolean(rawValue);
          });
        }
        return Array.from(event.target.selectedOptions).map((option) => {
          return option.value || option.text;
        });
      } else {
        let newValue;
        if (el.type === "radio") {
          if (event.target.checked) {
            newValue = event.target.value;
          } else {
            newValue = currentValue;
          }
        } else {
          newValue = event.target.value;
        }
        if (modifiers.includes("number")) {
          return safeParseNumber(newValue);
        } else if (modifiers.includes("boolean")) {
          return safeParseBoolean(newValue);
        } else if (modifiers.includes("trim")) {
          return newValue.trim();
        } else {
          return newValue;
        }
      }
    });
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate2(expression, {}, false);
    }
    return evaluate2(expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.innerHTML = value;
          el._x_ignoreSelf = true;
          initTree(el);
          delete el._x_ignoreSelf;
        });
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3, cleanup: cleanup2 }) => {
    if (!value) {
      let bindingProviders = {};
      injectBindingProviders(bindingProviders);
      let getBindings = evaluateLater(el, expression);
      getBindings((bindings) => {
        applyBindingsObject(el, bindings, original);
      }, { scope: bindingProviders });
      return;
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
      return;
    }
    let evaluate2 = evaluateLater(el, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
        result = "";
      }
      mutateDom(() => bind(el, value, result, modifiers));
    }));
    cleanup2(() => {
      el._x_undoAddedClasses && el._x_undoAddedClasses();
      el._x_undoAddedStyles && el._x_undoAddedStyles();
    });
  };
  handler2.inline = (el, { value, modifiers, expression }) => {
    if (!value)
      return;
    if (!el._x_inlineBindings)
      el._x_inlineBindings = {};
    el._x_inlineBindings[value] = { expression, extract: false };
  };
  directive("bind", handler2);
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
    if (shouldSkipRegisteringDataDuringClone(el))
      return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0 || data2 === true)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
      undo();
    });
  });
  interceptClone((from, to) => {
    if (from._x_dataStack) {
      to._x_dataStack = from._x_dataStack;
      to.setAttribute("data-has-alpine-state", true);
    }
  });
  function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning)
      return false;
    if (isCloningLegacy)
      return true;
    return el.hasAttribute("data-has-alpine-state");
  }
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide)
      el._x_doHide = () => {
        mutateDom(() => {
          el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
      };
    if (!el._x_doShow)
      el._x_doShow = () => {
        mutateDom(() => {
          if (el.style.length === 1 && el.style.display === "none") {
            el.removeAttribute("style");
          } else {
            el.style.removeProperty("display");
          }
        });
      };
    let hide = () => {
      el._x_doHide();
      el._x_isShown = false;
    };
    let show = () => {
      el._x_doShow();
      el._x_isShown = true;
    };
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once(
      (value) => value ? show() : hide(),
      (value) => {
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
          el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        } else {
          value ? clickAwayCompatibleShow() : hide();
        }
      }
    );
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(
      el,
      // the x-bind:key expression is stored for our use instead of evaluated.
      el._x_keyExpression || "index"
    );
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el._x_lookup).forEach((el2) => el2.remove());
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i) => typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i) => i + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject2(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => {
            if (keys.includes(value2))
              warn("Duplicate key on x-for", el);
            keys.push(value2);
          }, { scope: { index: key, ...scope2 } });
          scopes.push(scope2);
        });
      } else {
        for (let i = 0; i < items.length; i++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
          evaluateKey((value) => {
            if (keys.includes(value))
              warn("Duplicate key on x-for", el);
            keys.push(value);
          }, { scope: { index: i, ...scope2 } });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i = 0; i < prevKeys.length; i++) {
        let key = prevKeys[i];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i, 0, key);
          adds.push([lastKey, i]);
        } else if (prevIndex !== i) {
          let keyInSpot = prevKeys.splice(i, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i = 0; i < removes.length; i++) {
        let key = removes[i];
        if (!!lookup[key]._x_effects) {
          lookup[key]._x_effects.forEach(dequeueJob);
        }
        lookup[key].remove();
        lookup[key] = null;
        delete lookup[key];
      }
      for (let i = 0; i < moves.length; i++) {
        let [keyInSpot, keyForSpot] = moves[i];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          if (!elForSpot)
            warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup);
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i = 0; i < adds.length; i++) {
        let [lastKey2, index] = adds[i];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index];
        let key = keys[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        let reactiveScope = reactive(scope2);
        addScopeToNode(clone2, reactiveScope, templateEl);
        clone2._x_refreshXForScope = (newScope) => {
          Object.entries(newScope).forEach(([key2, value]) => {
            reactiveScope[key2] = value;
          });
        };
        mutateDom(() => {
          lastEl.after(clone2);
          skipDuringClone(() => initTree(clone2))();
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i = 0; i < sames.length; i++) {
        lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
      names.forEach((name, i) => {
        scopeVariables[name] = item[i];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler3() {
  }
  handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler3);
  directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-if can only be used on a <template> tag", el);
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        skipDuringClone(() => initTree(clone2))();
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        walk(clone2, (node) => {
          if (!!node._x_effects) {
            node._x_effects.forEach(dequeueJob);
          }
        });
        clone2.remove();
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup2(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
    let names = evaluate2(expression);
    names.forEach((name) => setIdRoot(el, name));
  });
  interceptClone((from, to) => {
    if (from._x_ids) {
      to._x_ids = from._x_ids;
    }
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e) => {
      evaluate2(() => {
      }, { scope: { "$event": e }, params: [e] });
    });
    cleanup2(() => removeListener());
  }));
  warnMissingPluginDirective("Collapse", "collapse", "collapse");
  warnMissingPluginDirective("Intersect", "intersect", "intersect");
  warnMissingPluginDirective("Focus", "trap", "focus");
  warnMissingPluginDirective("Mask", "mask", "mask");
  function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // src/app.js
  var import_fullpage = __toESM(require_fullpage());
  window.Alpine = module_default;
  module_default.start();
})();
/*! Bundled license information:

fullpage.js/dist/fullpage.js:
  (*!
  * fullPage 4.0.22
  * https://github.com/alvarotrigo/fullPage.js
  *
  * @license GPLv3 for open source use only
  * or Fullpage Commercial License for commercial use
  * http://alvarotrigo.com/fullPage/pricing/
  *
  * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
  *)
*/
