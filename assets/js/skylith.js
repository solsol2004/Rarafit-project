/*!-----------------------------------------------------------------
    Name: Skylith - Viral & Creative Multipurpose HTML Template
    Version: 1.2.0
    Author: nK, unvab
    Website: https://nkdev.info/, http://unvab.com/
    Purchase: https://1.envato.market/MVW53
    Support: https://nk.ticksy.com/
    License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
    Copyright 2020.
-------------------------------------------------------------------*/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
var options = {
  enableShortcuts: true,
  scrollToAnchorSpeed: 700,
  parallaxSpeed: 0.8,
  templates: {
    sliderAuthor: 'Author: {{name}}',
    navbarBackItem: 'Back',
    plainVideoIcon: '<span class="nk-video-icon"><span><span class="nk-play-icon"></span></span></span>',
    plainVideoLoadIcon: '<div class="nk-video-icon nk-video-icon-loading"></div>',
    fullscreenVideoClose: '<span class="nk-icon-close"></span>',
    twitter: "<div class=\"nk-twitter\">\n                <span class=\"nk-twitter-icon fa fa-twitter\"></span>\n                <div class=\"nk-twitter-text\">\n                   {{tweet}}\n                </div>\n            </div>",
    twitterLoadingText: 'Loading...',
    twitterFailText: 'Failed to fetch data',
    twitterApiPath: 'php/twitter/tweet.php'
  },
  shortcuts: {
    closeFullscreenVideo: 'esc',
    postScrollToComments: 'c',
    toggleSideLeftNavbar: 'alt+l',
    openSideLeftNavbar: '',
    closeSideLeftNavbar: 'esc',
    toggleSideRightNavbar: 'alt+r',
    openSideRightNavbar: '',
    closeSideRightNavbar: 'esc',
    toggleFullscreenNavbar: 'alt+f',
    openFullscreenNavbar: '',
    closeFullscreenNavbar: 'esc',
    toggleLeftNavbar: 'alt+n',
    openLeftNavbar: '',
    closeLeftNavbar: 'esc'
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _parts_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _parts_setOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _parts_shortcuts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _parts_initNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _parts_initNavbarSide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _parts_initNavbarFullscreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _parts_initNavbarItemsEffect1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _parts_initNavbarDropEffect1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _parts_initNavbarDropEffect2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var _parts_initHeaderTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var _parts_initCounters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19);
/* harmony import */ var _parts_initAnchors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20);
/* harmony import */ var _parts_initVideoBlocks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21);
/* harmony import */ var _parts_initFullPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22);
/* harmony import */ var _parts_initHoverImage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23);
/* harmony import */ var _parts_initPortfolio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24);
/* harmony import */ var _parts_initShop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25);
/* harmony import */ var _parts_initStretch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26);
/* harmony import */ var _parts_initSlider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(27);
/* harmony import */ var _parts_initForms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(28);
/* harmony import */ var _parts_initTeamBlock__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(29);
/* harmony import */ var _parts_initGmaps__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(30);
/* harmony import */ var _parts_initTwitter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(31);
/* harmony import */ var _parts_initPluginObjectFitImages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(32);
/* harmony import */ var _parts_initPluginStickySidebar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(33);
/* harmony import */ var _parts_initPluginNano__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(34);
/* harmony import */ var _parts_initPluginJarallax__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(35);
/* harmony import */ var _parts_initPluginFlickity__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(36);
/* harmony import */ var _parts_initPluginIsotope__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(37);
/* harmony import */ var _parts_initPluginPhotoswipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(38);
/* harmony import */ var _parts_initPluginJustifiedGallery__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(39);
/* harmony import */ var _parts_initPluginBootstrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(40);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

























/* Plugins */










/*------------------------------------------------------------------

  Skylith Class

-------------------------------------------------------------------*/

var SKYLITH = /*#__PURE__*/function () {
  function SKYLITH() {
    _classCallCheck(this, SKYLITH);

    this.options = _parts_options__WEBPACK_IMPORTED_MODULE_0__["options"];
  }

  _createClass(SKYLITH, [{
    key: "init",
    value: function init() {
      // prt:sc:dm
      var self = this;
      self.initNavbar();
      self.initNavbarSide();
      self.initNavbarFullscreen();
      self.initNavbarItemsEffect1();
      self.initNavbarDropEffect1();
      self.initNavbarDropEffect2();
      self.initHeaderTitle();
      self.initCounters();
      self.initAnchors();
      self.initVideoBlocks();
      self.initFullPage();
      self.initHoverImage();
      self.initPortfolio();
      self.initShop();
      self.initStretch();
      self.initSlider();
      self.initForms();
      self.initTeamBlock();
      self.initGmaps();
      self.initTwitter();
      self.initShortcuts(); // init plugins

      self.initPluginObjectFitImages();
      self.initPluginStickySidebar();
      self.initPluginNano();
      self.initPluginJarallax();
      self.initPluginFlickity();
      self.initPluginIsotope();
      self.initPluginPhotoswipe();
      self.initPluginJustifiedGallery();
      self.initPluginBootstrap();
      return self;
    }
  }, {
    key: "setOptions",
    value: function setOptions(newOpts) {
      return _parts_setOptions__WEBPACK_IMPORTED_MODULE_2__["setOptions"].call(this, newOpts);
    }
  }, {
    key: "debounceResize",
    value: function debounceResize(func) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["debounceResize"].call(this, func);
    }
  }, {
    key: "throttleScroll",
    value: function throttleScroll(callback) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["throttleScroll"].call(this, callback);
    }
  }, {
    key: "bodyOverflow",
    value: function bodyOverflow(type) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["bodyOverflow"].call(this, type);
    }
  }, {
    key: "isInViewport",
    value: function isInViewport($item, returnRect) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["isInViewport"].call(this, $item, returnRect);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo($to) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["scrollTo"].call(this, $to);
    }
  }, {
    key: "key",
    value: function key(name, callback) {
      return _parts_shortcuts__WEBPACK_IMPORTED_MODULE_3__["key"].call(this, name, callback);
    }
  }, {
    key: "initShortcuts",
    value: function initShortcuts() {
      return _parts_shortcuts__WEBPACK_IMPORTED_MODULE_3__["initShortcuts"].call(this);
    }
  }, {
    key: "initHeaderTitle",
    value: function initHeaderTitle() {
      return _parts_initHeaderTitle__WEBPACK_IMPORTED_MODULE_10__["initHeaderTitle"].call(this);
    }
  }, {
    key: "initNavbar",
    value: function initNavbar() {
      return _parts_initNavbar__WEBPACK_IMPORTED_MODULE_4__["initNavbar"].call(this);
    }
  }, {
    key: "initNavbarSide",
    value: function initNavbarSide() {
      return _parts_initNavbarSide__WEBPACK_IMPORTED_MODULE_5__["initNavbarSide"].call(this);
    }
  }, {
    key: "initNavbarFullscreen",
    value: function initNavbarFullscreen() {
      return _parts_initNavbarFullscreen__WEBPACK_IMPORTED_MODULE_6__["initNavbarFullscreen"].call(this);
    }
  }, {
    key: "initNavbarItemsEffect1",
    value: function initNavbarItemsEffect1() {
      return _parts_initNavbarItemsEffect1__WEBPACK_IMPORTED_MODULE_7__["initNavbarItemsEffect1"].call(this);
    }
  }, {
    key: "initNavbarDropEffect1",
    value: function initNavbarDropEffect1() {
      return _parts_initNavbarDropEffect1__WEBPACK_IMPORTED_MODULE_8__["initNavbarDropEffect1"].call(this);
    }
  }, {
    key: "initNavbarDropEffect2",
    value: function initNavbarDropEffect2() {
      return _parts_initNavbarDropEffect2__WEBPACK_IMPORTED_MODULE_9__["initNavbarDropEffect2"].call(this);
    }
  }, {
    key: "initCounters",
    value: function initCounters() {
      return _parts_initCounters__WEBPACK_IMPORTED_MODULE_11__["initCounters"].call(this);
    }
  }, {
    key: "initAnchors",
    value: function initAnchors() {
      return _parts_initAnchors__WEBPACK_IMPORTED_MODULE_12__["initAnchors"].call(this);
    }
  }, {
    key: "initVideoBlocks",
    value: function initVideoBlocks() {
      return _parts_initVideoBlocks__WEBPACK_IMPORTED_MODULE_13__["initVideoBlocks"].call(this);
    }
  }, {
    key: "initFullPage",
    value: function initFullPage() {
      return _parts_initFullPage__WEBPACK_IMPORTED_MODULE_14__["initFullPage"].call(this);
    }
  }, {
    key: "initHoverImage",
    value: function initHoverImage() {
      return _parts_initHoverImage__WEBPACK_IMPORTED_MODULE_15__["initHoverImage"].call(this);
    }
  }, {
    key: "initPortfolio",
    value: function initPortfolio() {
      return _parts_initPortfolio__WEBPACK_IMPORTED_MODULE_16__["initPortfolio"].call(this);
    }
  }, {
    key: "initShop",
    value: function initShop() {
      return _parts_initShop__WEBPACK_IMPORTED_MODULE_17__["initShop"].call(this);
    }
  }, {
    key: "initStretch",
    value: function initStretch() {
      return _parts_initStretch__WEBPACK_IMPORTED_MODULE_18__["initStretch"].call(this);
    }
  }, {
    key: "initSlider",
    value: function initSlider() {
      return _parts_initSlider__WEBPACK_IMPORTED_MODULE_19__["initSlider"].call(this);
    }
  }, {
    key: "initForms",
    value: function initForms() {
      return _parts_initForms__WEBPACK_IMPORTED_MODULE_20__["initForms"].call(this);
    }
  }, {
    key: "initTeamBlock",
    value: function initTeamBlock() {
      return _parts_initTeamBlock__WEBPACK_IMPORTED_MODULE_21__["initTeamBlock"].call(this);
    }
  }, {
    key: "initGmaps",
    value: function initGmaps() {
      return _parts_initGmaps__WEBPACK_IMPORTED_MODULE_22__["initGmaps"].call(this);
    }
  }, {
    key: "initTwitter",
    value: function initTwitter() {
      return _parts_initTwitter__WEBPACK_IMPORTED_MODULE_23__["initTwitter"].call(this);
    }
  }, {
    key: "initPluginObjectFitImages",
    value: function initPluginObjectFitImages() {
      return _parts_initPluginObjectFitImages__WEBPACK_IMPORTED_MODULE_24__["initPluginObjectFitImages"].call(this);
    }
  }, {
    key: "initPluginStickySidebar",
    value: function initPluginStickySidebar() {
      return _parts_initPluginStickySidebar__WEBPACK_IMPORTED_MODULE_25__["initPluginStickySidebar"].call(this);
    }
  }, {
    key: "initPluginNano",
    value: function initPluginNano($context) {
      return _parts_initPluginNano__WEBPACK_IMPORTED_MODULE_26__["initPluginNano"].call(this, $context);
    }
  }, {
    key: "initPluginJarallax",
    value: function initPluginJarallax() {
      return _parts_initPluginJarallax__WEBPACK_IMPORTED_MODULE_27__["initPluginJarallax"].call(this);
    }
  }, {
    key: "initPluginFlickity",
    value: function initPluginFlickity() {
      return _parts_initPluginFlickity__WEBPACK_IMPORTED_MODULE_28__["initPluginFlickity"].call(this);
    }
  }, {
    key: "initPluginIsotope",
    value: function initPluginIsotope() {
      return _parts_initPluginIsotope__WEBPACK_IMPORTED_MODULE_29__["initPluginIsotope"].call(this);
    }
  }, {
    key: "initPluginPhotoswipe",
    value: function initPluginPhotoswipe() {
      return _parts_initPluginPhotoswipe__WEBPACK_IMPORTED_MODULE_30__["initPluginPhotoswipe"].call(this);
    }
  }, {
    key: "initPluginJustifiedGallery",
    value: function initPluginJustifiedGallery() {
      return _parts_initPluginJustifiedGallery__WEBPACK_IMPORTED_MODULE_31__["initPluginJustifiedGallery"].call(this);
    }
  }, {
    key: "initPluginBootstrap",
    value: function initPluginBootstrap() {
      return _parts_initPluginBootstrap__WEBPACK_IMPORTED_MODULE_32__["initPluginBootstrap"].call(this);
    }
  }]);

  return SKYLITH;
}();
/*------------------------------------------------------------------

  Init Skylith

-------------------------------------------------------------------*/


window.Skylith = new SKYLITH();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tween", function() { return tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOs", function() { return isIOs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouch", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$wnd", function() { return $wnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$doc", function() { return $doc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$body", function() { return $body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wndW", function() { return wndW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wndH", function() { return wndH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docH", function() { return docH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceResize", function() { return debounceResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleScroll", function() { return throttleScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bodyOverflow", function() { return bodyOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBodyOverflowed", function() { return isBodyOverflowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInViewport", function() { return isInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(throttle_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rafl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var rafl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rafl__WEBPACK_IMPORTED_MODULE_1__);
/*------------------------------------------------------------------

  Utility

-------------------------------------------------------------------*/


var $ = jQuery;
var tween = window.gsap;
var isIOs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera);
var isTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
/**
 * window size
 */

var $wnd = $(window);
var $doc = $(document);
var $body = $('body');
var $html = $('html');
var wndW = 0;
var wndH = 0;
var docH = 0;

function getWndSize() {
  wndW = $wnd.width();
  wndH = $wnd.height();
  docH = $doc.height();
}

getWndSize();
$wnd.on('resize load orientationchange', getWndSize); // add 'is-mobile' or 'is-desktop' classname to html tag

$html.addClass(isMobile ? 'is-mobile' : 'is-desktop');
/**
 * Debounce resize
 */

var resizeArr = [];

function debounceResized() {
  if (resizeArr.length) {
    for (var k = 0; k < resizeArr.length; k++) {
      resizeArr[k]();
    }
  }
}

$wnd.on('ready load resize orientationchange', Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_0__["throttle"])(200, function () {
  rafl__WEBPACK_IMPORTED_MODULE_1___default()(debounceResized);
}));
debounceResized();

function debounceResize(func) {
  if (typeof func === 'function') {
    resizeArr.push(func);
  } else {
    window.dispatchEvent(new Event('resize'));
  }
}
/**
 * Throttle scroll
 */


var hideOnScrollList = [];
var lastST = 0;

function hasScrolled() {
  var ST = $wnd.scrollTop();
  var type = ''; // [up, down, end, start]

  if (ST > lastST) {
    type = 'down';
  } else if (ST < lastST) {
    type = 'up';
  } else {
    type = 'none';
  }

  if (ST === 0) {
    type = 'start';
  } else if (ST >= docH - wndH) {
    type = 'end';
  }

  hideOnScrollList.forEach(function (value) {
    if (typeof value === 'function') {
      value(type, ST, lastST, $wnd);
    }
  });
  lastST = ST;
}

$wnd.on('scroll ready load resize orientationchange', Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_0__["throttle"])(200, function () {
  if (hideOnScrollList.length) {
    rafl__WEBPACK_IMPORTED_MODULE_1___default()(hasScrolled);
  }
}));

function throttleScroll(callback) {
  hideOnScrollList.push(callback);
}
/**
 * Body Overflow
 * Thanks https://jsfiddle.net/mariusc23/s6mLJ/31/
 * Usage:
 *    // enable
 *    bodyOverflow(1);
 *
 *    // disable
 *    bodyOverflow(0);
 */


var bodyOverflowEnabled;
var isBodyOverflowing;
var scrollbarWidth;
var originalBodyStyle;
var $header = $('.nk-header');
var $fullNavbar = $('.nk-navbar-full');
var stopOverflowing = $('.nk-fullpage').length;

function isBodyOverflowed() {
  return bodyOverflowEnabled;
}

function bodyGetScrollbarWidth() {
  // thx d.walsh
  var scrollDiv = document.createElement('div');
  scrollDiv.className = 'nk-body-scrollbar-measure';
  $body[0].appendChild(scrollDiv);
  var result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  $body[0].removeChild(scrollDiv);
  return result;
}

function bodyCheckScrollbar() {
  var fullWindowWidth = window.innerWidth;

  if (!fullWindowWidth) {
    // workaround for missing window.innerWidth in IE8
    var documentElementRect = document.documentElement.getBoundingClientRect();
    fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }

  isBodyOverflowing = $body[0].clientWidth < fullWindowWidth;
  scrollbarWidth = bodyGetScrollbarWidth();
}

function bodySetScrollbar() {
  if (typeof originalBodyStyle === 'undefined') {
    originalBodyStyle = $body.attr('style') || '';
  }

  var originalBodyPadding = parseFloat($body.css('padding-right')) || 0;

  if (isBodyOverflowing) {
    $body.css('paddingRight', "".concat(scrollbarWidth + originalBodyPadding, "px"));
    $header.filter(':not(.nk-header-opaque)').children().add($header.filter('.nk-header-opaque').children('.nk-navbar-fixed')).add($fullNavbar).css('paddingRight', "".concat(scrollbarWidth, "px"));
  }
}

function bodyResetScrollbar() {
  $body.attr('style', originalBodyStyle);
  $header.children().add($fullNavbar).css('paddingRight', '');
}

function bodyOverflow(enable) {
  if (stopOverflowing) {
    return;
  }

  if (enable && !bodyOverflowEnabled) {
    bodyOverflowEnabled = 1;
    bodyCheckScrollbar();
    bodySetScrollbar();
    $html.css('overflow', 'hidden');
  } else if (!enable && bodyOverflowEnabled) {
    bodyOverflowEnabled = 0;
    $html.css('overflow', '');
    bodyResetScrollbar();
  }
}
/**
 * In Viewport checker
 * return visible percent from 0 to 1
 */


function isInViewport($item, returnRect) {
  var rect = $item[0].getBoundingClientRect();
  var result = 1;

  if (rect.right <= 0 || rect.left >= wndW) {
    result = 0;
  } else if (rect.bottom < 0 && rect.top <= wndH) {
    result = 0;
  } else {
    var beforeTopEnd = Math.max(0, rect.height + rect.top);
    var beforeBottomEnd = Math.max(0, rect.height - (rect.top + rect.height - wndH));
    var afterTop = Math.max(0, -rect.top);
    var beforeBottom = Math.max(0, rect.top + rect.height - wndH);

    if (rect.height < wndH) {
      result = 1 - (afterTop || beforeBottom) / rect.height;
    } else if (beforeTopEnd <= wndH) {
      result = beforeTopEnd / wndH;
    } else if (beforeBottomEnd <= wndH) {
      result = beforeBottomEnd / wndH;
    }

    result = result < 0 ? 0 : result;
  }

  if (returnRect) {
    return [result, rect];
  }

  return result;
}
/**
 * Scroll To
 */


function scrollTo($to) {
  var scrollPos = false;

  if ($to === 'top') {
    scrollPos = 0;
  } else if ($to === 'bottom') {
    scrollPos = Math.max(0, docH - wndH);
  } else if (typeof $to === 'number') {
    scrollPos = $to;
  } else {
    scrollPos = $to.offset ? $to.offset().top : false;
  }

  if (scrollPos !== false && $wnd.scrollTop() !== scrollPos) {
    window.scrollTo({
      top: scrollPos,
      behavior: 'smooth'
    });
  }
}



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports) {
  'use strict';
  /* eslint-disable no-undefined,no-param-reassign,no-shadow */

  /**
   * Throttle execution of a function. Especially useful for rate limiting
   * execution of handlers on events like resize and scroll.
   *
   * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
   * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
   *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
   *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
   *                                    the internal counter is reset).
   * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
   *                                    to `callback` when the throttled-function is executed.
   * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
   *                                    schedule `callback` to execute after `delay` ms.
   *
   * @returns {Function}  A new, throttled, function.
   */

  function throttle(delay, noTrailing, callback, debounceMode) {
    /*
     * After wrapper has stopped being called, this timeout ensures that
     * `callback` is executed at the proper times in `throttle` and `end`
     * debounce modes.
     */
    var timeoutID;
    var cancelled = false; // Keep track of the last time `callback` was executed.

    var lastExec = 0; // Function to clear existing timeout

    function clearExistingTimeout() {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    } // Function to cancel next exec


    function cancel() {
      clearExistingTimeout();
      cancelled = true;
    } // `noTrailing` defaults to falsy.


    if (typeof noTrailing !== 'boolean') {
      debounceMode = callback;
      callback = noTrailing;
      noTrailing = undefined;
    }
    /*
     * The `wrapper` function encapsulates all of the throttling / debouncing
     * functionality and when executed will limit the rate at which `callback`
     * is executed.
     */


    function wrapper() {
      for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
        arguments_[_key] = arguments[_key];
      }

      var self = this;
      var elapsed = Date.now() - lastExec;

      if (cancelled) {
        return;
      } // Execute `callback` and update the `lastExec` timestamp.


      function exec() {
        lastExec = Date.now();
        callback.apply(self, arguments_);
      }
      /*
       * If `debounceMode` is true (at begin) this is used to clear the flag
       * to allow future `callback` executions.
       */


      function clear() {
        timeoutID = undefined;
      }

      if (debounceMode && !timeoutID) {
        /*
         * Since `wrapper` is being called for the first time and
         * `debounceMode` is true (at begin), execute `callback`.
         */
        exec();
      }

      clearExistingTimeout();

      if (debounceMode === undefined && elapsed > delay) {
        /*
         * In throttle mode, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      } else if (noTrailing !== true) {
        /*
         * In trailing throttle mode, since `delay` time has not been
         * exceeded, schedule `callback` to execute `delay` ms after most
         * recent execution.
         *
         * If `debounceMode` is true (at begin), schedule `clear` to execute
         * after `delay` ms.
         *
         * If `debounceMode` is false (at end), schedule `callback` to
         * execute after `delay` ms.
         */
        timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
      }
    }

    wrapper.cancel = cancel; // Return the wrapper function.

    return wrapper;
  }
  /* eslint-disable no-undefined */

  /**
   * Debounce execution of a function. Debouncing, unlike throttling,
   * guarantees that a function is only executed a single time, either at the
   * very beginning of a series of calls, or at the very end.
   *
   * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
   * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
   *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
   *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
   * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
   *                                  to `callback` when the debounced-function is executed.
   *
   * @returns {Function} A new, debounced function.
   */


  function debounce(delay, atBegin, callback) {
    return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
  }

  exports.debounce = debounce;
  exports.throttle = throttle;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
/**
 * `requestAnimationFrame()`
 */


var request = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || fallback;
var prev = +new Date();

function fallback(fn) {
  var curr = +new Date();
  var ms = Math.max(0, 16 - (curr - prev));
  var req = setTimeout(fn, ms);
  return prev = curr, req;
}
/**
 * `cancelAnimationFrame()`
 */


var cancel = global.cancelAnimationFrame || global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || clearTimeout;

if (Function.prototype.bind) {
  request = request.bind(global);
  cancel = cancel.bind(global);
}

exports = module.exports = request;
exports.cancel = cancel;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
  win = window;
} else if (typeof global !== "undefined") {
  win = global;
} else if (typeof self !== "undefined") {
  win = self;
} else {
  win = {};
}

module.exports = win;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOptions", function() { return setOptions; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Set Custom Options

-------------------------------------------------------------------*/

function setOptions(newOpts) {
  var self = this;
  var optsTemplates = _utility__WEBPACK_IMPORTED_MODULE_0__["$"].extend({}, this.options.templates, newOpts && newOpts.templates || {});
  var optsShortcuts = _utility__WEBPACK_IMPORTED_MODULE_0__["$"].extend({}, this.options.shortcuts, newOpts && newOpts.shortcuts || {});
  self.options = _utility__WEBPACK_IMPORTED_MODULE_0__["$"].extend({}, self.options, newOpts);
  self.options.templates = optsTemplates;
  self.options.shortcuts = optsShortcuts;
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "key", function() { return key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initShortcuts", function() { return initShortcuts; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Shortcuts
  https://github.com/madrobby/keymaster

-------------------------------------------------------------------*/

function key(name, fn) {
  if (typeof window.key === 'undefined') {
    return;
  }

  name = this.options && this.options.shortcuts && this.options.shortcuts[name];

  if (name) {
    window.key(name, fn);
  }
}

function initShortcuts() {
  if (typeof window.key === 'undefined' || !this.options.enableShortcuts) {
    return;
  }

  var self = this; // FullScreen Video

  self.key('closeFullscreenVideo', function () {
    if (self.closeFullScreenVideo) {
      self.closeFullScreenVideo();
    }
  }); // post single

  self.key('postScrollToComments', function () {
    var $comments = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('#comments');

    if ($comments.length) {
      self.scrollTo($comments);
    }
  }); // Side Left Navbar

  var $leftSide = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-left-side');
  self.key('toggleSideLeftNavbar', function () {
    self.toggleSide($leftSide);
  });
  self.key('openSideLeftNavbar', function () {
    self.openSide($leftSide);
  });
  self.key('closeSideLeftNavbar', function () {
    self.closeSide($leftSide);
  }); // Side Right Navbar

  var $rightSide = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-right-side');
  self.key('toggleSideRightNavbar', function () {
    self.toggleSide($rightSide);
  });
  self.key('openSideRightNavbar', function () {
    self.openSide($rightSide);
  });
  self.key('closeSideRightNavbar', function () {
    self.closeSide($rightSide);
  }); // Fullscreen Navbar

  self.key('toggleFullscreenNavbar', function () {
    self.toggleFullscreenNavbar();
  });
  self.key('openFullscreenNavbar', function () {
    self.openFullscreenNavbar();
  });
  self.key('closeFullscreenNavbar', function () {
    self.closeFullscreenNavbar();
  }); // Left Navbar

  self.key('toggleLeftNavbar', function () {
    self.toggleLeftNavbar();
  });
  self.key('openLeftNavbar', function () {
    self.openLeftNavbar();
  });
  self.key('closeLeftNavbar', function () {
    self.closeLeftNavbar();
  }); // ESC - use also inside form elements

  window.key.filter = function (event) {
    var _ref = event.target || event.srcElement,
        tagName = _ref.tagName;

    var isContentEditable = (event.target || event.srcElement).getAttribute('contenteditable');
    var isESC = window.key.isPressed('esc');
    return isESC || !(isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA');
  };
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNavbar", function() { return initNavbar; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Navbar

-------------------------------------------------------------------*/

function initNavbar() {
  var self = this;
  var $navbarTop = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-top'); // add mobile navbar

  var $mobileNavItems = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('[data-nav-mobile]');

  if ($mobileNavItems.length) {
    $mobileNavItems.each(function () {
      var $nav = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).html());
      var $mobileNav = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-nav-mobile')); // insert into mobile nav

      $mobileNav.find('.nk-navbar-mobile-content > ul.nk-nav').append($nav);
    });
    var $nav = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-mobile-content > ul.nk-nav'); // remove background images

    $nav.find('.bg-image, .bg-video').remove(); // remove mega menus

    $nav.find('.nk-mega-item > .dropdown').each(function () {
      var $drop = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).children('ul').addClass('dropdown'); // fix mega menu columns

      $drop.find('> li > ul').each(function () {
        var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
        var $parent = $this.parent();
        var $label = $this.prev('label'); // if label exists - make dropdown

        if ($label.length) {
          $this.addClass('dropdown');
          $parent.addClass('nk-drop-item');
          $label.replaceWith(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<a href="#"></a>').html($label.html()));
        } else {
          $this.children('li').each(function () {
            $parent.before(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
          });
          $parent.remove();
        }
      });
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).replaceWith($drop);
    });
    $nav.find('.nk-mega-item').removeClass('nk-mega-item');
  } // collapsed navbar


  var $navCollapsed = $navbarTop.find('.nk-nav-collapsed');
  var $navCollapsedToggle = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-collapsed-toggle');
  $navCollapsedToggle.on('click', function (e) {
    e.preventDefault();

    if ($navCollapsed.hasClass('showed')) {
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].staggerTo($navCollapsed.children(), 0.2, {
        y: -10,
        opacity: 0
      }, 0.04, function () {
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($navCollapsed.children(), {
          visibility: 'hidden'
        });
      });
      $navCollapsedToggle.removeClass('active');
    } else {
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($navCollapsed.children(), {
        y: -10,
        opacity: 0,
        visibility: 'visible'
      });
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].staggerTo($navCollapsed.children(), 0.2, {
        y: 0,
        opacity: 1
      }, 0.04);
      $navCollapsedToggle.addClass('active');
    }

    $navCollapsed.toggleClass('showed');
  }); // sticky navbar

  var navbarTop = $navbarTop.length ? $navbarTop.offset().top : 0; // fake hidden navbar to prevent page jumping on stick

  var $navbarFake = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div>').hide();

  function onScrollNav() {
    var stickyOn = _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].scrollTop() >= navbarTop;

    if (stickyOn) {
      $navbarTop.addClass('nk-navbar-fixed');
      $navbarFake.show();
    } else {
      $navbarTop.removeClass('nk-navbar-fixed');
      $navbarFake.hide();
    }
  }

  if ($navbarTop.hasClass('nk-navbar-sticky')) {
    $navbarTop.after($navbarFake);
    $navbarFake.height($navbarTop.innerHeight());
    self.debounceResize(function () {
      $navbarFake.height($navbarTop.innerHeight());
    });
    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('scroll resize', onScrollNav);
    onScrollNav();
  } // correct dropdown position


  function correctDropdown($item) {
    var $dropdown = $item.children('.dropdown');

    if ($item.parent().is('.nk-nav')) {
      var $parent = $item.closest('.nk-navbar');
      var $parentContainer = $parent.children('.container');
      $parentContainer = $parentContainer.length ? $parentContainer : $parent; // fix right value when sub menu is not hidden

      var css = {
        marginLeft: '',
        marginRight: '',
        marginTop: 0
      };
      $dropdown.css(css);
      var rect = $dropdown[0].getBoundingClientRect();
      var rectContainer = $parentContainer[0].getBoundingClientRect();
      var itemRect = $item[0].getBoundingClientRect(); // move dropdown from right corner (right corner will check in nav container)

      if (rect.right > rectContainer.right) {
        css.marginLeft = rectContainer.right - rect.right;
        $dropdown.css(css);
        rect = $dropdown[0].getBoundingClientRect();
      } // move dropdown from left corner


      if (rect.left < 0) {
        css.marginLeft = -rect.left;
        $dropdown.css(css);
        rect = $dropdown[0].getBoundingClientRect();
      } // check if dropdown not under item


      var currentLeftPost = rect.left + (css.marginLeft || 0);

      if (currentLeftPost > itemRect.left) {
        css.marginLeft = (css.marginLeft || 0) - (currentLeftPost - itemRect.left);
      } // correct top position
      // 10 - transform value


      css.marginTop = $parent.innerHeight() - $dropdown.offset().top + $parent.offset().top + 10;
      $dropdown.css(css);
    } else {
      $item.removeClass('nk-drop-item-reverse');

      var _rect = $dropdown[0].getBoundingClientRect();

      if (_rect.left + _rect.width > _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"]) {
        $item.addClass('nk-drop-item-reverse');
      }
    }
  }

  $navbarTop.on('mouseenter', 'li.nk-drop-item', function () {
    correctDropdown(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
  }); // correct on page load.

  $navbarTop.find('li.nk-drop-item').each(function () {
    correctDropdown(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
  }); // hide / show
  // add / remove solid color

  var $autohideNav = $navbarTop.filter('.nk-navbar-autohide');
  self.throttleScroll(function (type, scroll) {
    var start = 400;
    var hideClass = 'nk-onscroll-hide';
    var showClass = 'nk-onscroll-show'; // hide / show

    if (type === 'down' && scroll > start) {
      $autohideNav.removeClass(showClass).addClass(hideClass);
    } else if (type === 'up' || type === 'end' || type === 'start') {
      $autohideNav.removeClass(hideClass).addClass(showClass);
    } // add solid color


    if ($navbarTop.hasClass('nk-navbar-transparent') && $navbarTop.hasClass('nk-navbar-sticky')) {
      $navbarTop["".concat(scroll > 70 ? 'add' : 'remove', "Class")]('nk-navbar-solid');
    }
  }); // left navbar

  var $navbarLeft = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-left');
  var isOpenedLeft;
  var $overlay = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-navbar-overlay">').appendTo(_utility__WEBPACK_IMPORTED_MODULE_0__["$body"]);

  self.fullscreenNavbarIsOpened = function () {
    return isOpenedLeft;
  };

  self.toggleLeftNavbar = function () {
    self[isOpenedLeft ? 'closeLeftNavbar' : 'openLeftNavbar']();
  };

  self.openLeftNavbar = function () {
    if (isOpenedLeft || !$navbarLeft.length) {
      return;
    }

    isOpenedLeft = 1; // active all togglers

    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-left-toggle').addClass('active'); // open

    $navbarLeft.addClass('open'); // show overlay

    if ($navbarLeft.hasClass('nk-navbar-overlay-content')) {
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($overlay, {
        duration: 0.3,
        opacity: 0.6,
        display: 'block'
      });
    } // prevent body scrolling


    self.bodyOverflow(1); // trigger event

    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].trigger('nk-open-left-navbar', [$navbarLeft]);
  };

  self.closeLeftNavbar = function (dontTouchBody) {
    if (!isOpenedLeft || !$navbarLeft.length) {
      return;
    }

    isOpenedLeft = 0; // deactive all togglers

    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-left-toggle').removeClass('active'); // open

    $navbarLeft.removeClass('open'); // hide overlay

    if ($navbarLeft.hasClass('nk-navbar-overlay-content')) {
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($overlay, {
        duration: 0.3,
        opacity: 0,
        display: 'none'
      });
    } // restore body scrolling


    if (!dontTouchBody) {
      self.bodyOverflow(0);
    } // trigger event


    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].trigger('nk-close-left-navbar', [$navbarLeft]);
  }; // overlay


  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.nk-navbar-overlay', function () {
    self.closeLeftNavbar();
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.nk-navbar-left-toggle', function (e) {
    self.toggleLeftNavbar();
    e.preventDefault();
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('nk-open-share-place', self.closeLeftNavbar);
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNavbarSide", function() { return initNavbarSide; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Navbar Side

-------------------------------------------------------------------*/

function initNavbarSide() {
  var self = this;
  var $overlay = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-navbar-overlay">').appendTo(_utility__WEBPACK_IMPORTED_MODULE_0__["$body"]); // side navbars

  var $leftSide = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-left-side');
  var $rightSide = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-right-side');
  var $sideNavs = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-side');

  self.sideNavbarIsOpened = function () {
    return $sideNavs.hasClass('open');
  }; // toggle navbars


  function updateTogglers() {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('[data-nav-toggle]').each(function () {
      var active = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-nav-toggle')).hasClass('open');
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this)["".concat(active ? 'add' : 'remove', "Class")]('active');
    });
  }

  self.toggleSide = function ($side, speed) {
    self[$side.hasClass('open') ? 'closeSide' : 'openSide']($side, speed);
  };

  self.openSide = function ($side, speed) {
    if ($side.css('display') === 'none') {
      return;
    }

    $side.addClass('open'); // show sidebar

    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($side, {
      duration: speed || 0.4,
      x: $side.hasClass('nk-navbar-left-side') ? '100%' : '-100%'
    }); // show overlay

    if ($side.hasClass('nk-navbar-overlay-content')) {
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($overlay, {
        duration: 0.3,
        opacity: 0.6,
        display: 'block'
      });
    }

    updateTogglers();
  };

  self.closeSide = function ($side, speed) {
    $side.each(function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).removeClass('open'); // hide sidebar

      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to(this, {
        duration: speed || 0.4,
        x: '0%'
      });
      updateTogglers();
    });

    if (!$sideNavs.filter('.nk-navbar-overlay-content.open').length) {
      // hide overlay
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($overlay, {
        duration: 0.3,
        opacity: 0,
        display: 'none'
      });
    }
  };

  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '[data-nav-toggle]', function (e) {
    var $nav = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-nav-toggle'));

    if ($nav.hasClass('open')) {
      self.closeSide($nav);
    } else {
      // hide another navigations
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('[data-nav-toggle]').each(function () {
        self.closeSide(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-nav-toggle')));
      });
      self.openSide($nav);
    }

    e.preventDefault();
  }); // overlay

  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.nk-navbar-overlay', function () {
    self.closeSide($sideNavs);
  }); // hide sidebar if it invisible

  self.debounceResize(function () {
    $sideNavs.filter('.open').each(function () {
      if (!Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).is(':visible')) {
        self.closeSide(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
      }
    });
  }); // swipe side navbars

  if (!_utility__WEBPACK_IMPORTED_MODULE_0__["isTouch"] || typeof Hammer === 'undefined') {
    return;
  }

  var swipeStartSize = 50;
  var $swipeItem;
  var navSize;
  var openNav;
  var closeNav;
  var isRightSide;
  var isLeftSide;
  var isScrolling = 0;
  var swipeDir;
  var sidePos = false;
  var startSwipe = false;
  var endSwipe = false; // strange solution to fix pan events on the latest Chrome
  // https://github.com/hammerjs/hammer.js/issues/1065

  var mc = new Hammer.Manager(document, {
    touchAction: 'auto',
    inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
    recognizers: [[Hammer.Pan, {
      direction: Hammer.DIRECTION_HORIZONTAL
    }]]
  }); // If we detect a scroll before a panleft/panright, disable panning
  // thanks: https://github.com/hammerjs/hammer.js/issues/771

  mc.on('panstart', function (e) {
    if (e.additionalEvent === 'panup' || e.additionalEvent === 'pandown') {
      isScrolling = 1;
    }
  }); // Reenable panning

  mc.on('panend', function (e) {
    if (!isScrolling) {
      if ($swipeItem) {
        var swipeSize;

        if (sidePos) {
          if (openNav) {
            swipeSize = sidePos;
          } else if (closeNav) {
            swipeSize = navSize - sidePos;
          } else {
            swipeSize = 0;
          }
        } else {
          swipeSize = 0;
        }

        var transitionTime = Math.max(0.15, 0.4 * (navSize - swipeSize) / navSize);
        var swiped = 0;

        if (swipeSize && swipeSize > 10) {
          var velocityTest = Math.abs(e.velocityX) > 0.7;

          if (swipeSize >= navSize / 3 || velocityTest) {
            swiped = 1;

            if (openNav) {
              self.openSide($swipeItem, transitionTime);
            } else {
              self.closeSide($swipeItem, transitionTime);
            }
          }
        }

        if (!swiped) {
          if (openNav) {
            self.closeSide($swipeItem, transitionTime);
          } else {
            self.openSide($swipeItem, transitionTime);
          }
        }
      }

      openNav = false;
      closeNav = false;
      isRightSide = false;
      isLeftSide = false;
      swipeDir = false;
      sidePos = false;
      $swipeItem = false;
      startSwipe = false;
      endSwipe = false;
    }

    isScrolling = 0;
  });
  mc.on('panleft panright panup pandown', function (e) {
    if (isScrolling) {
      return;
    }

    var isFirst = false;
    var isFinal = e.isFinal;

    if (startSwipe === false) {
      startSwipe = e.center.x;
      isFirst = true;
    }

    endSwipe = e.center.x; // init

    if (isFirst) {
      if (e.direction === 2) {
        swipeDir = 'left';
      } else if (e.direction === 4) {
        swipeDir = 'right';
      } else {
        swipeDir = false;
      } // right side


      if ($rightSide && $rightSide.length) {
        navSize = $rightSide.width(); // open

        if (_utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] - startSwipe <= swipeStartSize && !$rightSide.hasClass('open') && !$leftSide.hasClass('open')) {
          openNav = 1;
          isRightSide = 1; // close
        } else if (_utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] - startSwipe >= navSize - 100 && $rightSide.hasClass('open')) {
          closeNav = 1;
          isRightSide = 1;
        }
      } // left side


      if ($leftSide && $leftSide.length && !isRightSide && $leftSide.is(':visible')) {
        navSize = $leftSide.width(); // open

        if (startSwipe <= swipeStartSize && !$rightSide.hasClass('open') && !$leftSide.hasClass('open')) {
          openNav = 1;
          isLeftSide = 1; // close
        } else if (startSwipe >= navSize - 100 && $leftSide.hasClass('open')) {
          closeNav = 1;
          isLeftSide = 1;
        }
      } // swipe item


      if (isLeftSide) {
        $swipeItem = $leftSide;
      } else if (isRightSide) {
        $swipeItem = $rightSide;
      } else {
        $swipeItem = false;
      } // move

    } else if (!isFinal && $swipeItem) {
      if (isRightSide && (openNav && swipeDir === 'left' || closeNav && swipeDir === 'right')) {
        // open side navbar
        if (openNav) {
          sidePos = Math.min(navSize, Math.max(0, startSwipe - endSwipe));
        } // close side navbar


        if (closeNav) {
          var curPos = startSwipe - endSwipe;

          if (startSwipe < _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] - navSize) {
            curPos = _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] - navSize - endSwipe;
          }

          sidePos = navSize - Math.abs(Math.max(-navSize, Math.min(0, curPos)));
        }

        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($swipeItem, {
          x: "".concat(-100 * sidePos / navSize, "%")
        });
      } else if (isLeftSide && (openNav && swipeDir === 'right' || closeNav && swipeDir === 'left')) {
        // open mobile navbar
        if (openNav) {
          sidePos = Math.min(navSize, Math.max(0, endSwipe - startSwipe));
        } // close mobile navbar


        if (closeNav) {
          var curPos2 = endSwipe - startSwipe;

          if (startSwipe > navSize) {
            curPos2 = endSwipe - navSize;
          }

          sidePos = navSize - Math.abs(Math.max(-navSize, Math.min(0, curPos2)));
        }

        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($swipeItem, {
          x: "".concat(100 * sidePos / navSize, "%")
        });
      }
    }
  }); // prevent scrolling when opening/hiding navigation

  window.addEventListener('touchmove', function (e) {
    if (isRightSide || isLeftSide) {
      e.preventDefault();
    }
  }, {
    passive: false
  });
}



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNavbarFullscreen", function() { return initNavbarFullscreen; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Navbar Fullscreen

-------------------------------------------------------------------*/

function initNavbarFullscreen() {
  var self = this;
  var $navbar = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-full');

  self.fullscreenNavbarIsOpened = function () {
    return $navbar.hasClass('open');
  };

  self.toggleFullscreenNavbar = function () {
    self[self.fullscreenNavbarIsOpened() ? 'closeFullscreenNavbar' : 'openFullscreenNavbar']();
  };

  self.openFullscreenNavbar = function () {
    if (self.fullscreenNavbarIsOpened() || !$navbar.length) {
      return;
    } // active all togglers


    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-full-toggle').addClass('active');
    $navbar.addClass('open'); // prevent body scrolling

    self.bodyOverflow(1); // trigger event

    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].trigger('nk-open-full-navbar', [$navbar]);
  };

  self.closeFullscreenNavbar = function () {
    if (!self.fullscreenNavbarIsOpened() || !$navbar.length) {
      return;
    } // deactive all togglers


    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-full-toggle').removeClass('active'); // open navbar block

    $navbar.removeClass('open'); // restore body scrolling after a small delay

    setTimeout(function () {
      if (!self.fullscreenNavbarIsOpened()) {
        self.bodyOverflow(0);
      }
    }, 150); // trigger event

    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].trigger('nk-close-full-navbar', [$navbar]);
  };

  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.nk-navbar-full-toggle', function (e) {
    self.toggleFullscreenNavbar();
    e.preventDefault();
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('nk-open-share-place', self.closeFullscreenNavbar);
}



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNavbarItemsEffect1", function() { return initNavbarItemsEffect1; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

 Init Items Effect 1 for navbars

 -------------------------------------------------------------------*/

function initNavbarItemsEffect1() {
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-items-effect-1 .nk-nav li > a').each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).wrapInner('<span>');
  });
}



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNavbarDropEffect1", function() { return initNavbarDropEffect1; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Dropdown Effect 1 for side navbars and fullscreen

-------------------------------------------------------------------*/

function initNavbarDropEffect1() {
  var self = this;
  var $navbars = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-drop-effect-1'); // add back item for dropdowns

  $navbars.find('.dropdown').prepend("<li class=\"dropdown-back\"><a href=\"#\">".concat(self.options.templates.navbarBackItem, "</a></li>")); // change height of opened dropdown

  function updateSideNavDropdown($item) {
    var $nav = $item.closest('.nk-navbar');
    var $khNav = $nav.find('.nk-nav');
    var $nanoCont = $nav.find('.nano-content');
    var $drop = $nav.find('.nk-drop-item.open > .dropdown:not(.closed)');
    var dropHeight = '';

    if ($drop.length) {
      dropHeight = $drop.innerHeight();
    }

    $khNav.css({
      height: dropHeight,
      minHeight: dropHeight
    });
    self.initPluginNano($nav); // scroll to top
    // TODO: remove nano script since it was removed from template.

    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($nanoCont, {
      duration: 0.3,
      scrollTo: {
        y: 0
      },
      delay: 0.2
    });
  } // open / close submenu


  function toggleSubmenu(open, $drop) {
    var $newItems = $drop.find('> .dropdown > li > a');
    var $oldItems = $drop.parent().find('> li > a');

    if (open) {
      $drop.addClass('open').parent().addClass('closed');
    } else {
      $drop.removeClass('open').parent().removeClass('closed');
      var tmp = $newItems;
      $newItems = $oldItems;
      $oldItems = tmp;
    } // show items


    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($newItems, {
      x: open ? '15%' : '-15%',
      opacity: 0,
      display: 'block'
    }, 0.1);
    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].staggerTo($newItems, 0.2, {
      x: '0%',
      opacity: 1,
      delay: 0.1
    }, 0.03); // hide items

    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].staggerTo($oldItems, 0.2, {
      x: open ? '-15%' : '15%',
      opacity: 0
    }, 0.03, function () {
      $oldItems.css('display', 'none');
    });
  }

  $navbars.on('click', '.nk-drop-item > a', function (e) {
    toggleSubmenu(true, Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent());
    updateSideNavDropdown(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
    e.preventDefault();
  });
  $navbars.on('click', '.dropdown-back > a', function (e) {
    toggleSubmenu(false, Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().parent().parent());
    updateSideNavDropdown(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
    e.preventDefault();
  });
}



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNavbarDropEffect2", function() { return initNavbarDropEffect2; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

 Init Dropdown Effect 2 for side navbars and fullscreen

 -------------------------------------------------------------------*/

function initNavbarDropEffect2() {
  var self = this;
  var $navbars = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-drop-effect-2'); // open / close submenu

  function toggleSubmenu($dropdown) {
    var $nav = $dropdown.closest('.nk-navbar');
    var height = $dropdown.innerHeight(); // close sibling navigations

    var $openedSiblings = $nav.find('.dropdown.open').filter(function () {
      return !(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).is($dropdown) || Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find($dropdown).length);
    });
    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($openedSiblings, {
      duration: 0.3,
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      display: 'none',
      onComplete: function onComplete() {
        $openedSiblings.attr('style', '');
        $openedSiblings.removeClass('open');
      }
    }); // show current dropdown

    $dropdown.addClass('open');
    $dropdown.css({
      display: 'block',
      height: 0
    });
    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($dropdown, {
      duration: 0.3,
      height: height,
      onComplete: function onComplete() {
        $dropdown.css('height', ''); // TODO: remove nano script since it was removed from template.

        self.initPluginNano($nav);
      }
    });
  }

  $navbars.on('click', '.nk-drop-item > a', function (e) {
    var $dropdown = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).next('.dropdown:not(.open)');

    if ($dropdown.length) {
      toggleSubmenu($dropdown);
      e.preventDefault();
    }
  });
}



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHeaderTitle", function() { return initHeaderTitle; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Header Title

-------------------------------------------------------------------*/

function initHeaderTitle() {
  var self = this;
  var $navbarHeader = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-header:not(.nk-header-left)');
  var isNavbarOpaque = $navbarHeader.hasClass('nk-header-opaque');
  var isNavbarTransparent = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-top').hasClass('nk-header-transparent');
  var $headerTitle = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-header-title > .nk-header-content');
  var $fullHeaderTitle = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-header-title-full > .nk-header-content'); // remove header title padding if navbar opaque

  if (isNavbarOpaque) {
    $headerTitle.css('padding-top', 0);
  }

  self.debounceResize(function () {
    if ((isNavbarTransparent || isNavbarOpaque) && (!$fullHeaderTitle.length || !isNavbarOpaque)) {
      return;
    }

    var navH = $navbarHeader.outerHeight() || 0; // add header title padding

    if (!isNavbarTransparent && !isNavbarOpaque) {
      $headerTitle.css('padding-top', navH);
    } // fix header title height


    if ($fullHeaderTitle.length) {
      var headerH = '100vh';

      if (isNavbarOpaque) {
        headerH = "calc(100vh - ".concat(navH, "px)");
      }

      $fullHeaderTitle.css('min-height', headerH);
    }
  });
}



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCounters", function() { return initCounters; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Counters

-------------------------------------------------------------------*/

function initCounters() {
  var self = this;
  var $progressCount = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-progress.nk-count');
  var $numberCount = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-count:not(.nk-progress)'); // set default progress

  $progressCount.each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-nk-count', Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-progress')).attr('data-nk-mask', Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-progress-mask')).find('.nk-progress-line > div').css('width', "".concat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-nk-count-from') || '0', "%")).find('.nk-progress-percent').html('');
  }); // set default numbers

  $numberCount.each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-nk-count', Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-nk-count') || parseInt(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).text(), 10)).html(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-nk-count-from') || '0');
  });
  var countersNum = 1;

  function runCounters() {
    if (!countersNum) {
      return;
    }

    var progress = $progressCount.filter('[data-nk-count]');
    var numbers = $numberCount.filter('[data-nk-count]');
    countersNum = progress.length + numbers.length; // progress

    $progressCount.filter('[data-nk-count]').each(function () {
      var $item = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);

      if (self.isInViewport($item)) {
        var count = {
          curr: $item.attr('data-nk-count-from') || '0',
          to: $item.attr('data-nk-count'),
          mask: $item.attr('data-nk-mask') || '{$}%'
        };
        var $itemLine = $item.find('.nk-progress-line > div');
        var $itemLabel = $item.find('.nk-progress-percent');
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($itemLine, {
          duration: 1,
          width: "".concat(count.to, "%")
        });
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to(count, {
          duration: 1,
          curr: count.to,
          roundProps: 'curr',
          ease: Circ.easeIn,
          onUpdate: function onUpdate() {
            $itemLabel.text(count.mask.replace('{$}', count.curr));
          }
        });
        $item.removeAttr('data-nk-count');
      }
    }); // number

    $numberCount.filter('[data-nk-count]').each(function () {
      var $item = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);

      if (self.isInViewport($item)) {
        var count = {
          curr: $item.text(),
          to: $item.attr('data-nk-count')
        };
        $item.removeAttr('data-nk-count data-nk-count-from');
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to(count, {
          duration: 1,
          curr: count.to,
          roundProps: 'curr',
          ease: Circ.easeIn,
          onUpdate: function onUpdate() {
            $item.text(count.curr);
          }
        });
      }
    });
  }

  self.throttleScroll(runCounters);
  runCounters();
}



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAnchors", function() { return initAnchors; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Anchors

-------------------------------------------------------------------*/

function initAnchors() {
  var self = this; // click on anchors

  var $leftSideNav = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-left-side');
  var $rightSideNav = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-right-side');

  function closeNavs() {
    self.closeSide($leftSideNav);
    self.closeSide($rightSideNav);
    self.closeFullscreenNavbar();
  }

  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.navbar a, .nk-navbar a, a.btn, a.nk-btn, a.nk-anchor', function (e) {
    var isHash = this.hash;
    var isURIsame = this.baseURI === window.location.href;

    if (isHash && isURIsame) {
      e.preventDefault(); // sometimes hashes contains non-valid selector like ##hash, it will throw errors

      try {
        var $hashBlock = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(isHash);
        var hash = isHash.replace(/^#/, '');

        if ($hashBlock.length || hash === 'top' || hash === 'bottom') {
          // close navigations
          closeNavs(); // scroll to block

          self.scrollTo($hashBlock.length ? $hashBlock : hash);
        }
      } catch (ev) {} // eslint-disable-line

    }
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.ghostkit-toc a', function (evt) {
    evt.preventDefault();

    if (!evt.target || !evt.target.hash) {
      return;
    }

    var offset = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(evt.target.hash).offset();

    if ('undefined' === typeof offset) {
      return;
    }

    var $adminBar = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('#wpadminbar');
    var top = offset.top; // Admin bar offset.

    if ($adminBar.length && 'fixed' === $adminBar.css('position')) {
      top -= $adminBar.outerHeight();
    } // Limit max offset.


    top = Math.max(0, top);
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  }); // add active class on navbar items

  var $anchorItems = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar .nk-nav > li > a[href*="#"]');
  var anchorBlocks = [];

  function hashInArray(item) {
    for (var k = 0; k < anchorBlocks.length; k++) {
      if (anchorBlocks[k].hash === item) {
        return k;
      }
    }

    return false;
  } // get all anchors + blocks on the page


  $anchorItems.each(function () {
    var hash = this.hash.replace(/^#/, '');

    if (!hash) {
      return;
    }

    var $item = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent();
    var $block = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])("#".concat(hash));

    if (hash && $block.length || hash === 'top') {
      var inArray = hashInArray(hash);

      if (inArray === false) {
        anchorBlocks.push({
          hash: hash,
          $item: $item,
          $block: $block
        });
      } else {
        anchorBlocks[inArray].$item = anchorBlocks[inArray].$item.add($item);
      }
    }
  }); // prepare anchor list and listen for scroll to activate items in navbar

  function updateAnchorItemsPositions() {
    for (var k = 0; k < anchorBlocks.length; k++) {
      var item = anchorBlocks[k];
      var blockTop = 0;
      var blockH = _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"];

      if (item.$block.length) {
        blockTop = item.$block.offset().top;
        blockH = item.$block.innerHeight();
      }

      item.activate = blockTop - _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"] / 2;
      item.deactivate = blockTop + blockH - _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"] / 2;
    }
  }

  function setAnchorActiveItem(type, ST) {
    for (var k = 0; k < anchorBlocks.length; k++) {
      var item = anchorBlocks[k];
      var active = ST >= item.activate && ST < item.deactivate;
      item.$item[active ? 'addClass' : 'removeClass']('active');
    }
  }

  if (anchorBlocks.length) {
    updateAnchorItemsPositions();
    setAnchorActiveItem('static', _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].scrollTop());
    self.throttleScroll(setAnchorActiveItem);
    self.debounceResize(updateAnchorItemsPositions);
  } // show/hide scroll up button


  var $scrollUp = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-scroll-up');

  if ($scrollUp.length) {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["throttleScroll"])(function (type, top) {
      if (top > 400) {
        $scrollUp.addClass('nk-scroll-up-show');
      } else {
        $scrollUp.removeClass('nk-scroll-up-show');
      }
    });
  }
}



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initVideoBlocks", function() { return initVideoBlocks; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

 Init Video Blocks

 -------------------------------------------------------------------*/

function initVideoBlocks() {
  if (typeof window.VideoWorker === 'undefined') {
    return;
  }

  var self = this; // open fullscreen videos

  var openedFSVideo;

  self.openFullScreenVideo = function (url) {
    if (openedFSVideo) {
      return;
    }

    openedFSVideo = 1; // get api for this video

    self.FullScreenVideoApi = new VideoWorker(url, {
      autoplay: 1,
      loop: 0,
      mute: 0,
      controls: 1
    }); // set video size

    function setVideoSize() {
      var ratio = 16 / 9;
      var resultW;
      var resultH;

      if (ratio > _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] / _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"]) {
        resultW = _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] * 0.9;
        resultH = resultW / ratio;
      } else {
        resultH = _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"] * 0.9;
        resultW = resultH * ratio;
      }

      self.FullScreenVideoWrapper.css({
        width: resultW,
        height: resultH,
        top: (_utility__WEBPACK_IMPORTED_MODULE_0__["wndH"] - resultH) / 2,
        left: (_utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] - resultW) / 2
      });
    } // create fullscreen video wrapper if doesn't exist


    if (!self.FullScreenVideo) {
      self.FullScreenVideo = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-video-fullscreen"></div>').appendTo(_utility__WEBPACK_IMPORTED_MODULE_0__["$body"]);

      self.closeFullScreenVideo = function () {
        if (openedFSVideo) {
          openedFSVideo = 0;
          self.FullScreenVideoApi.pause(); // hide animation

          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to(self.FullScreenVideo, {
            duration: 0.4,
            opacity: 0,
            display: 'none',
            onComplete: function onComplete() {
              self.FullScreenVideoWrapper.html('');
            }
          });
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to(self.FullScreenVideoWrapper, {
            duration: 0.4,
            scale: 0.9
          }); // restore body scrolling

          self.bodyOverflow(0);
        }
      }; // close icon


      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"nk-video-fullscreen-close\">".concat(self.options.templates.fullscreenVideoClose, "</div>")).on('click', self.closeFullScreenVideo).appendTo(self.FullScreenVideo); // video container

      self.FullScreenVideoWrapper = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-video-fullscreen-cont"></div>').appendTo(self.FullScreenVideo);
      setVideoSize();
      self.debounceResize(setVideoSize);
    } // check api and run fullscreen


    if (self.FullScreenVideoApi && self.FullScreenVideoApi.isValid()) {
      self.FullScreenVideoApi.getIframe(function (iframe) {
        var $parent = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(iframe).parent();
        self.FullScreenVideoWrapper.append(iframe);
        $parent.remove(); // pause audio

        if (typeof soundManager !== 'undefined') {
          soundManager.pauseAll();
        } // show animation


        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].fromTo(self.FullScreenVideo, {
          opacity: 0
        }, {
          duration: 0.4,
          opacity: 1,
          display: 'block'
        });
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].fromTo(self.FullScreenVideoWrapper, {
          opacity: 0,
          scale: 0.9
        }, {
          duration: 0.4,
          opacity: 1,
          scale: 1,
          delay: 0.3
        }); // prevent body scrolling

        self.bodyOverflow(1);
      });
    }
  };

  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.nk-video-fullscreen-toggle', function (e) {
    e.preventDefault();
    self.openFullScreenVideo(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('href'));
  }); // init plain video

  function addPlainPlayButton($plainCont) {
    $plainCont.find('.nk-video-plain-toggle').html(self.options.templates.plainVideoIcon);
  }

  function addPlainLoadButton($plainCont) {
    $plainCont.find('.nk-video-plain-toggle').html(self.options.templates.plainVideoLoadIcon || self.options.templates.plainVideoIcon);
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-plain-video[data-video]').each(function () {
    var $plainCont = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var $plainIframe;
    var url = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-video');
    var thumb = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-video-thumb');
    var api = new VideoWorker(url, {
      autoplay: 0,
      loop: 0,
      mute: 0,
      controls: 1
    });

    if (api && api.isValid()) {
      var loaded = 0;
      var clicked = 0; // add play event

      $plainCont.on('click', function () {
        if (_utility__WEBPACK_IMPORTED_MODULE_0__["isMobile"]) {
          window.open(api.url);
          return;
        }

        if (clicked) {
          return;
        }

        clicked = 1; // add loading button

        if (!loaded) {
          addPlainLoadButton($plainCont);
          api.getIframe(function (iframe) {
            // add iframe
            $plainIframe = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(iframe);
            var $parent = $plainIframe.parent();
            _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set(iframe, {
              opacity: 0,
              left: '101%'
            });
            $plainIframe.appendTo($plainCont);
            $parent.remove();
            api.play();
          });
        } else {
          api.play();
        }
      }); // add play button

      $plainCont.append('<span class="nk-video-plain-toggle"></span>');
      addPlainPlayButton($plainCont); // set thumb

      if (thumb) {
        $plainCont.css('background-image', "url(\"".concat(thumb, "\")"));
      } else {
        api.getImageURL(function (imgSrc) {
          $plainCont.css('background-image', "url(\"".concat(imgSrc, "\")"));
        });
      }

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isMobile"]) {
        return;
      }

      api.on('ready', function () {
        api.play();
      });
      api.on('play', function () {
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($plainIframe, {
          left: '0%'
        });
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($plainIframe, {
          duration: 0.5,
          opacity: 1,
          onComplete: function onComplete() {
            // add play button
            if (!loaded) {
              addPlainPlayButton($plainCont);
              loaded = 1;
            }
          }
        }); // pause audio

        if (typeof soundManager !== 'undefined') {
          soundManager.pauseAll();
        }
      });
    }
  });
}



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFullPage", function() { return initFullPage; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Fullpage

-------------------------------------------------------------------*/

function initFullPage() {
  var $fullPage = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-fullpage:eq(0)');
  var $eachItems = $fullPage.find('.nk-fullpage-item');
  var $topNavbar = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-top');

  if (!$fullPage.length || !$eachItems.length) {
    return;
  } // hide footer


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-footer').hide();
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('html').css('overflow', 'hidden');
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-main').css('overflow', 'visible');
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 10); // parse slides

  var slides = [];
  $eachItems.each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    slides.push({
      $item: $this,
      $viewBtn: $this.find('.nk-fullpage-view-button').html(),
      $content: $this.find('.nk-fullpage-content').html(),
      img: $this.find('.nk-fullpage-image').attr('src') || '',
      letter: $this.attr('data-letter') || '',
      number: $this.attr('data-number') || '',
      bgDark: $this.hasClass('nk-fullpage-item-bg-dark')
    });
  }); // image blocks

  var $image1 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-fullpage-bg-image">').appendTo($fullPage);
  var $image2 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-fullpage-bg-image">').appendTo($fullPage); // content

  var $content = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-fullpage-content">');
  var $content2 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-fullpage-content">');
  var $contentButton = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-fullpage-view-button">');
  $fullPage.append($content);
  $fullPage.append($content2);
  $fullPage.append($contentButton); // bullet navigation

  var $bullets = '<ul class="nk-fullpage-nav active">';

  for (var k = 0; k < slides.length; k++) {
    $bullets += "<li>".concat(slides[k].letter, "</li>");
  }

  $bullets += '</ul>';
  $bullets = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])($bullets);
  $fullPage.append($bullets);
  var $bulletsItems = $bullets.children('li'); // numbers

  var $numbers = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-fullpage-number">');
  var $numbers2 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-fullpage-number">');
  $fullPage.append($numbers);
  $fullPage.append($numbers2);
  var isBusy = 0;
  var curIndex = 0; // show new slide
  // effect: fade, up, down

  function slideShow(index) {
    var effect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fade';
    var force = arguments.length > 2 ? arguments[2] : undefined;

    if (typeof slides[index] !== 'undefined' && curIndex !== index && !isBusy || force) {
      isBusy = 1; // animate image background

      switch (effect) {
        case 'up':
        case 'down':
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image2, {
            y: effect === 'down' ? '100%' : '-100%',
            scale: 1.1,
            display: 'block'
          });
          $image2.css('background-image', "url(\"".concat(slides[index].img, "\")"));
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($image2, {
            duration: 0.5,
            y: '0%',
            scale: 1,
            force3D: true,
            ease: Power1.easeInOut,
            onComplete: function onComplete() {
              $image2.css('background-image', '');
              _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image2, {
                display: 'none',
                clearProps: 'transform'
              });
            }
          });
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($image1, {
            duration: 0.5,
            opacity: 0,
            scale: 0.9,
            force3D: true,
            ease: Power1.easeInOut,
            onComplete: function onComplete() {
              $image1.css('background-image', "url(\"".concat(slides[index].img, "\")"));
              _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image1, {
                opacity: 1,
                clearProps: 'transform'
              });
              isBusy = 0;
            }
          });
          break;

        default:
          // fade
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image2, {
            opacity: 0,
            display: 'block'
          });
          $image2.css('background-image', "url(\"".concat(slides[index].img, "\")"));
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($image2, {
            duration: 0.5,
            opacity: 1,
            force3D: true,
            onComplete: function onComplete() {
              $image1.css('background-image', "url(\"".concat(slides[index].img, "\")"));
              $image2.css('background-image', '');
              _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image2, {
                display: 'none'
              });
              isBusy = 0;
            }
          });
          break;
      } // activate bullet


      $bulletsItems.removeClass('active');
      $bulletsItems.eq(index).addClass('active'); // show slide number

      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($numbers2, {
        opacity: 0,
        y: 0,
        display: 'block'
      });
      $numbers2.html(slides[index].number);
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($numbers, {
        duration: 0.5,
        opacity: 0,
        y: -50,
        force3D: true
      });
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($numbers2, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        force3D: true,
        delay: 0.1,
        onComplete: function onComplete() {
          $numbers.html(slides[index].number);
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($numbers, {
            opacity: 1,
            y: 0
          });
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($numbers2, {
            display: 'none'
          });
        }
      }); // set new content

      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($content2, {
        opacity: 0,
        y: effect === 'down' ? 100 : -100,
        scale: 0.9,
        display: 'flex'
      });
      $content2.html(slides[index].$content);
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($content, {
        duration: 0.5,
        opacity: 0,
        y: effect === 'down' ? -100 : 100,
        scale: 0.9,
        force3D: true,
        onComplete: function onComplete() {
          // change navbar color
          if ($topNavbar.hasClass('nk-navbar-transparent')) {
            $topNavbar[slides[index].bgDark ? 'addClass' : 'removeClass']('nk-navbar-dark');
          }
        }
      });
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($content2, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        scale: 1,
        force3D: true,
        delay: 0.4,
        onComplete: function onComplete() {
          $content.html(slides[index].$content);
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($content, {
            opacity: 1,
            clearProps: 'transform'
          });
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($content2, {
            display: 'none'
          });
        }
      }); // set new button

      $contentButton.html(slides[index].$viewBtn);
      curIndex = index;
    }
  }

  slideShow(curIndex, 'fade', 1);
  $bullets.on('click', '> li', function () {
    var index = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).index();

    if (index > curIndex) {
      slideShow(index, 'down');
    } else if (index < curIndex) {
      slideShow(index, 'up');
    }
  }); // show next / previous slider

  function slideShowNext() {
    if (curIndex !== slides.length - 1) {
      slideShow(curIndex + 1, 'down');
    }
  }

  function slideShowPrev() {
    if (curIndex !== 0) {
      slideShow(curIndex - 1, 'up');
    }
  } // next button click


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-fullpage').on('click', '.nk-fullpage-scroll-down', function (e) {
    e.preventDefault();
    slideShowNext();
  });
  var wheelEvent = 'onwheel' in document ? 'wheel' : 'mousewheel';

  if (wheelEvent) {
    // mouse wheel scroll
    var timeout;
    var isStopped = true;
    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on(wheelEvent, function (e) {
      // check if delta >= 2 and mouse under slider
      if (Math.abs(e.originalEvent.deltaY) < 2 || !Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).parents('.nk-fullpage').length) {
        return;
      } // we need to check acceleration because of mac os smooth scroll.


      clearTimeout(timeout);
      timeout = setTimeout(function () {
        isStopped = true;
      }, 100);

      if (!isStopped) {
        return;
      }

      isStopped = false;

      if (e.originalEvent.deltaY > 0) {
        slideShowNext();
      } else if (e.originalEvent.deltaY < 0) {
        slideShowPrev();
      }
    });
  } // touch swipe


  var touchStart = 0;
  var touchDelta = 0;
  _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('touchstart', function (e) {
    touchStart = e.originalEvent.touches[0].screenY;
    touchDelta = 0;
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('touchmove touchend', function (e) {
    var y = e.originalEvent.touches && e.originalEvent.touches.length ? e.originalEvent.touches[0].screenY : false;
    touchDelta = y === false ? touchDelta : touchStart - y; // check if delta >= 2 and mouse under slider

    if (Math.abs(touchDelta) < 2 || !Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).parents('.nk-fullpage').length) {
      return;
    }

    if (e.type === 'touchend') {
      if (touchDelta > 0) {
        slideShowNext();
      } else if (touchDelta < 0) {
        slideShowPrev();
      }
    }
  });
}



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHoverImage", function() { return initHoverImage; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Hover Image */

function initHoverImage() {
  var $hoverImages = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-hover-image');

  if (!$hoverImages.length) {
    return;
  }

  function lazyLoadImage(img, cb) {
    var startTime = new Date().getMilliseconds();
    var tempImg = new Image();

    tempImg.onload = function () {
      cb(new Date().getMilliseconds() - startTime);
    };

    tempImg.src = img;
  }

  function reflow($item) {
    // Trigger a reflow, flushing the CSS changes. This need to place new element in dom and show it, then add opacity 0 with transition.
    // Info here - https://stackoverflow.com/questions/11131875/what-is-the-cleanest-way-to-disable-css-transition-effects-temporarily
    // eslint-disable-next-line
    $item[0].offsetHeight;
  } // change image src on links hover


  var hoverInstanceId = 0;

  function setHoverImage($item) {
    hoverInstanceId += 1;
    $item.each(function () {
      var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      var $hoverImage = $this.closest('.nk-hover-image');
      $hoverImage.find('.nk-hover-image-links a').removeClass('active');
      $this.addClass('active');
      var $img = $hoverImage.find('.nk-hover-image-img:not(.hide):eq(0)');
      var $imgLink = $img.parent('a');
      var $clonedImg = $img.clone();
      $img.attr('src', '');
      $img.after($clonedImg);
      $img.addClass('loading');
      var currentInstance = hoverInstanceId;
      var newSrc = $this.attr('data-hover-image');
      lazyLoadImage(newSrc, function (time) {
        if (currentInstance === hoverInstanceId) {
          if (time > 70) {
            $img.css({
              opacity: 0
            });
          }

          $img.attr('src', newSrc);
          $img.removeClass('loading');

          if (time > 70) {
            reflow($img);
            $img.css({
              opacity: ''
            });
          }
        }
      });

      if ($imgLink.length) {
        $imgLink.attr('href', $this.attr('href'));
      }

      reflow($clonedImg);
      $clonedImg.addClass('hide');
      setTimeout(function () {
        $clonedImg.remove();
      }, 500);
    });
  }

  $hoverImages.on('mouseover', '.nk-hover-image-links a:not(.active)', function () {
    setHoverImage(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
  });
  setHoverImage(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-hover-image .nk-hover-image-links a.active')); // sticky image

  function updateImagePosition() {
    window.requestAnimationFrame(function () {
      $hoverImages.each(function () {
        var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
        var $cont = $this.find('.nk-hover-image-img-cont');
        var $img = $cont.find('.bg-image');
        var thisRect = $this[0].getBoundingClientRect();
        var setTop = 0;
        var fixed = false; // if scrolled page - enable sticky

        if (thisRect.top <= 0 && _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"] - thisRect.bottom <= 0) {
          fixed = true; // scrolled down - need to stick to the parent bottom
        } else if (_utility__WEBPACK_IMPORTED_MODULE_0__["wndH"] - thisRect.bottom > 0) {
          setTop = thisRect.bottom - thisRect.top - _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"];
        }

        $img.css({
          position: fixed ? 'fixed' : '',
          left: fixed ? $cont.offset().left : '',
          width: fixed ? $cont.width() : '',
          top: setTop || ''
        });
      });
    });
  }

  updateImagePosition();
  _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('ready load resize orientationchange scroll', updateImagePosition);
}



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPortfolio", function() { return initPortfolio; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Portfolio */

function initPortfolio() {
  var $halfCarousel = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-portfolio-single-half > .row > div').children('.nk-carousel, .nk-carousel-2, .nk-carousel-3');

  if (!$halfCarousel.length) {
    return;
  } // half portfolio carousel size


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])(function () {
    $halfCarousel.css('height', '');
    $halfCarousel.find('.flickity-viewport').css('height', Math.max(800, Math.min(_utility__WEBPACK_IMPORTED_MODULE_0__["wndH"], $halfCarousel.closest('.nk-portfolio-single-half').height())));
  });
}



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initShop", function() { return initShop; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Shop */

function initShop() {
  var self = this;
  var $header = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-shop-header');
  var $products = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-shop-products'); // saved layout size.

  var layoutSize = localStorage.getItem('skylith-shop-layout-size');

  if (!layoutSize) {
    if ($products.hasClass('nk-shop-products-1-col')) {
      layoutSize = 1;
    } else if ($products.hasClass('nk-shop-products-2-col')) {
      layoutSize = 2;
    } else if ($products.hasClass('nk-shop-products-4-col')) {
      layoutSize = 4;
    } else {
      layoutSize = 3;
    }
  }

  function updateLayoutClass() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
    size = parseInt(size, 10) || 3;
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-shop-layout-toggle').removeClass('active').filter("[data-cols=\"".concat(size, "\"]")).addClass('active');
    $products.removeClass('nk-shop-products-1-col nk-shop-products-2-col nk-shop-products-3-col nk-shop-products-4-col').addClass("nk-shop-products-".concat(size, "-col"));
    localStorage.setItem('skylith-shop-layout-size', size);
  }

  if ($products.length) {
    updateLayoutClass(layoutSize); // on layout toggle click.

    $header.on('click', '.nk-shop-layout-toggle:not(.active)', function (e) {
      e.preventDefault();
      var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      updateLayoutClass($this.attr('data-cols'));
    });
  } // filter toggle


  var $filter = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-shop-filter');

  function toggleFilter() {
    var active = $filter.hasClass('active');
    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($filter, {
      display: 'block',
      height: 'auto',
      marginBottom: '',
      paddingTop: '',
      paddingBottom: ''
    });
    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($filter, {
      height: $filter.outerHeight()
    });

    if (active) {
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($filter, {
        duration: 0.3,
        display: 'none',
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 0,
        ease: Power1.easeInOut,
        onComplete: function onComplete() {
          $filter.removeAttr('style');
          Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])();
        }
      });
      $filter.removeClass('active');
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-shop-filter-toggle').removeClass('active');
    } else {
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].from($filter, {
        duration: 0.3,
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 0,
        ease: Power1.easeInOut,
        onComplete: function onComplete() {
          $filter.removeAttr('style');
          Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])();
        }
      });
      $filter.addClass('active');
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-shop-filter-toggle').addClass('active');
    }
  }

  if ($filter.length) {
    $header.on('click', '.nk-shop-filter-toggle', function (e) {
      e.preventDefault();
      toggleFilter();
    });
  } // Cart toggle


  var $cart = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-shop-cart');

  if ($cart.length) {
    $header.on('click', '.nk-shop-cart-toggle', function (e) {
      e.preventDefault();
      $cart.toggleClass('active');
    });
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-shop-cart-close').on('click', function (e) {
      e.preventDefault();
      $cart.toggleClass('active');
    });
    $cart.on('click', function (e) {
      if (e.target === this) {
        e.stopPropagation();
        $cart.toggleClass('active');
      }
    });
  } // scroll to ratings


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('a.nk-product-rating').on('click', function (e) {
    var isHash = this.hash;

    if (isHash) {
      var $hashBlock = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(isHash).closest('.nk-tabs');

      if ($hashBlock.length) {
        self.scrollTo($hashBlock);
      }

      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-tabs').find("[data-toggle=\"tab\"][href=\"".concat(isHash, "\"]")).click();
    }

    e.preventDefault();
  }); // carousel for products

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-product-carousel').each(function () {
    var $carousel = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.nk-carousel-inner');
    var $thumbs = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.nk-product-carousel-thumbs');
    var $thumbsCont = $thumbs.children();
    var curY = 0;
    var thumbsH = 0;
    var thumbsContH = 0;
    var thumbsBusy = false;

    function updateValues() {
      if ($thumbsCont[0]._gsTransform && $thumbsCont[0]._gsTransform.y) {
        curY = $thumbsCont[0]._gsTransform.y;
      } else {
        curY = 0;
      }

      thumbsH = $thumbs.height();
      thumbsContH = $thumbsCont.height();
    }

    $thumbsCont.on('click', '> div', function () {
      if (thumbsBusy) {
        return;
      }

      var index = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).index();
      $carousel.flickity('select', index);
    });
    $carousel.on('select.flickity', function () {
      var api = $carousel.data('flickity');

      if (!api) {
        return;
      } // set selected nav cell


      var $selected = $thumbsCont.children().removeClass('active').eq(api.selectedIndex).addClass('active'); // scroll nav

      updateValues();
      var selectedTop = $selected.position().top + curY;

      if (selectedTop < 0) {
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($thumbsCont, {
          duration: 0.2,
          y: curY - selectedTop
        });
      } else {
        var selectedH = $selected.outerHeight(true);

        if (selectedTop + selectedH > thumbsH) {
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($thumbsCont, {
            duration: 0.2,
            y: curY - (selectedTop + selectedH - thumbsH)
          });
        }
      }
    });
    var startY = false;
    var mc = new Hammer.Manager($thumbs[0]);
    mc.add(new Hammer.Pan({
      pointers: 1,
      threshold: 0
    }));
    mc.on('pan press', function (e) {
      e.preventDefault(); // init

      if (startY === false) {
        updateValues();
        startY = curY;
      } // move


      thumbsBusy = true;

      if (thumbsContH > thumbsH) {
        curY = Math.min(0, Math.max(e.deltaY + startY, thumbsH - thumbsContH));
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($thumbsCont, {
          y: curY
        });
      }

      if (e.isFinal) {
        startY = false;
        setTimeout(function () {
          thumbsBusy = false;
        }, 0);
      }
    });
  });
}



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStretch", function() { return initStretch; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Stretch items */

function initStretch() {
  var $stretchItems = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-stretch, .nk-blog-isotope-wide');

  if (!$stretchItems.length) {
    return;
  }

  var $customCSS = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<style>').appendTo('head'); // add ID

  var uniqid = 1;
  $stretchItems.each(function () {
    if (!$stretchItems.attr('id')) {
      $stretchItems.attr('id', "nk-stretch-item-".concat(uniqid++));
    }
  });

  function stretchThumbnails() {
    var styles = '';
    $stretchItems.each(function () {
      var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      var rect = this.getBoundingClientRect();
      var left = rect.left;
      var right = rect.right - rect.width;
      var ml = parseFloat($this.css('margin-left') || 0);
      var mr = parseFloat($this.css('margin-right') || 0);

      if ($this.hasClass('nk-blog-isotope-wide')) {
        if (left === right) {
          styles += "#".concat($this.attr('id'), " .nk-post-thumb {\n                        left: ").concat(-rect.left + ml, "px;\n                        right: ").concat(-rect.left + mr, "px;\n                        width: calc(100% + ").concat(rect.left * 2 - ml - mr, "px);\n                    }");
        }
      } else {
        styles += "#".concat($this.attr('id'), " {\n                    margin-left: ").concat(ml - left, "px;\n                    margin-right: ").concat(mr - right, "px;\n                }");
      }
    });
    $customCSS.html(styles); // relayout isotope

    $stretchItems.closest('.nk-isotope').each(function () {
      if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).data('isotope')) {
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).isotope('layout');
      }
    });
  }

  stretchThumbnails();
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])(stretchThumbnails);
}



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSlider", function() { return initSlider; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

 Init Slider

 -------------------------------------------------------------------*/

function initSlider() {
  var $sliders = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-slider');

  if (!$sliders.length) {
    return;
  }

  var self = this; // init each slider

  $sliders.each(function () {
    var $slider = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var $eachItems = $slider.find('.nk-slider-item'); // parse slides

    var slides = [];
    $eachItems.each(function () {
      var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      slides.push({
        $item: $this,
        $content: $this.find('.nk-slider-content').html(),
        img: $this.find('.nk-slider-image').attr('src'),
        author: $this.attr('data-author'),
        title: $this.attr('data-title'),
        thumb: $this.attr('data-thumb')
      });
    }); // set height

    var height = $slider.attr('data-height') || 600;
    $slider.css('min-height', height); // container for slider items

    var $container = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"container".concat($slider.attr('data-container') === 'false' ? '-fluid' : '', "\">"));
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-slider-container">').append($container).appendTo($slider); // image blocks

    var $image1 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-slider-bg-image">').appendTo($slider);
    var $image2 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-slider-bg-image">').appendTo($slider); // content

    var $content = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-slider-content">').append('<div></div>').appendTo($container);
    var $content2 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-slider-content">').append('<div></div>').appendTo($container); // content centering

    var contentCentering = $slider.attr('data-content-centering') || 'bottom';
    $content.addClass("nk-slider-content-".concat(contentCentering));
    $content2.addClass("nk-slider-content-".concat(contentCentering));
    var isBusy = 0;
    var curIndex = 0; // autoplay

    var enableAutoplay = $slider.attr('data-autoplay');
    var autoplayTimeout;

    function runAutoplay() {
      clearTimeout(autoplayTimeout);

      if (enableAutoplay) {
        autoplayTimeout = setTimeout(function () {
          // eslint-disable-next-line
          slideShowNext();
        }, Math.max(parseInt(enableAutoplay, 10), 1000));
      }
    } // author name


    var showAuthor = $slider.attr('data-show-author') === 'true';
    var $author = showAuthor ? Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-slider-author">').appendTo($container) : false;

    function updateAuthor() {
      if (showAuthor && $author) {
        var text = '';

        if (typeof slides[curIndex] !== 'undefined' && slides[curIndex].author) {
          text = self.options.templates.sliderAuthor.replace('{{name}}', slides[curIndex].author);
        }

        $author.html(text);
      }
    } // slide number


    var showSlideNumbers = $slider.attr('data-show-slide-numbers') === 'true';
    var $slideNumbers = showSlideNumbers ? Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-slider-numbers">').appendTo($container) : false;

    function updateSlideNumbers() {
      if (showSlideNumbers && $slideNumbers) {
        $slideNumbers.html("".concat((curIndex < 9 ? '0' : '') + (curIndex + 1), " / ").concat(slides.length < 10 ? '0' : '').concat(slides.length));
      }
    } // navigation


    var $rightNav;

    if ($slider.attr('data-show-nav') === 'true') {
      $rightNav = '<ul class="nk-slider-nav">';

      for (var k = 0; k < slides.length; k++) {
        $rightNav += "<li>".concat(k < 9 ? '0' : '').concat(k + 1, "</li>");
      }

      $rightNav += '</ul>';
      $rightNav = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])($rightNav);
      $container.append($rightNav);
      $rightNav.on('click', 'li:not(.active)', function () {
        var idx = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).index();
        var direction = 'right';

        if (idx > curIndex) {
          direction = 'left';
        } // eslint-disable-next-line


        slideShow(idx, direction);
      });
    }

    function updateNavNumbers() {
      if ($rightNav && $rightNav.length) {
        $rightNav.children('li').removeClass('active').eq(curIndex).addClass('active');
      }
    } // bullets


    var $bullets;

    if ($slider.attr('data-show-bullets') === 'true') {
      $bullets = '<ul class="nk-slider-bullets">';

      for (var _k = 0; _k < slides.length; _k++) {
        $bullets += "<li>".concat(_k < 9 ? '0' : '').concat(_k + 1, "</li>");
      }

      $bullets += '</ul>';
      $bullets = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])($bullets);
      $container.append($bullets);
      $bullets.on('click', 'li:not(.active)', function () {
        var idx = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).index();
        var direction = 'right';

        if (idx > curIndex) {
          direction = 'left';
        } // eslint-disable-next-line


        slideShow(idx, direction);
      });
    }

    function updateBullets() {
      if ($bullets && $bullets.length) {
        $bullets.children('li').removeClass('active').eq(curIndex).addClass('active');
      }
    } // thumbs


    var $thumbs;
    var $thumbsCont;
    var thumbsCurX = 0;
    var thumbsW = 0;
    var thumbsContW = 0;
    var thumbsBusy = false;

    function updateThumbs() {
      if ($thumbsCont && $thumbsCont.length) {
        $thumbsCont.children('li').removeClass('active').eq(curIndex).addClass('active');

        if ($thumbsCont[0]._gsTransform && $thumbsCont[0]._gsTransform.x) {
          thumbsCurX = $thumbsCont[0]._gsTransform.x;
        } else {
          thumbsCurX = 0;
        }

        thumbsW = $thumbs.width();
        thumbsContW = $thumbsCont.width();
      }
    }

    function scrollThumbs() {
      if ($thumbs && $thumbs.length) {
        var $selected = $thumbsCont.children('li').eq(curIndex);
        var selectedLeft = $selected.position().left;

        if (selectedLeft < 0) {
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($thumbsCont, {
            duration: 0.2,
            x: thumbsCurX - selectedLeft
          });
        } else {
          var selectedW = $selected.outerWidth(true);

          if (selectedLeft + selectedW > thumbsW) {
            _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($thumbsCont, {
              duration: 0.2,
              x: thumbsCurX - (selectedLeft + selectedW - thumbsW)
            });
          }
        }
      }
    }

    if ($slider.attr('data-show-thumbs') === 'true') {
      $thumbs = '<div class="nk-slider-thumbs"><ul>';

      for (var _k2 = 0; _k2 < slides.length; _k2++) {
        $thumbs += "<li><img src=\"".concat(slides[_k2].thumb, "\" alt=\"\"></li>");
      }

      $thumbs += '</ul></div>';
      $thumbs = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])($thumbs);
      $thumbsCont = $thumbs.children();
      $container.append($thumbs);
      $thumbsCont.on('click', 'li:not(.active)', function () {
        if (thumbsBusy) {
          return;
        }

        var idx = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).index();
        var direction = 'right';

        if (idx > curIndex) {
          direction = 'left';
        } // eslint-disable-next-line


        slideShow(idx, direction);
        scrollThumbs();
      }); // swipe

      var thumbsStartX = false;
      var mc = new Hammer.Manager($thumbs[0]);
      mc.add(new Hammer.Pan({
        pointers: 1,
        threshold: 0
      }));
      mc.on('pan press', function (e) {
        e.preventDefault(); // init

        if (thumbsStartX === false) {
          updateThumbs();
          thumbsStartX = thumbsCurX;
        } // move


        thumbsBusy = true;

        if (thumbsContW > thumbsW) {
          thumbsCurX = Math.min(0, Math.max(e.deltaX + thumbsStartX, thumbsW - thumbsContW));
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($thumbsCont, {
            x: thumbsCurX
          });
        }

        if (e.isFinal) {
          thumbsStartX = false;
          setTimeout(function () {
            thumbsBusy = false;
          }, 0);
        }
      });
    } // show new slide
    // effect: fade, up, down


    function slideShow(index) {
      var effect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fade';
      var force = arguments.length > 2 ? arguments[2] : undefined;

      if (typeof slides[index] !== 'undefined' && curIndex !== index && !isBusy || force) {
        isBusy = 1; // animate image background

        switch (effect) {
          case 'left':
          case 'right':
            _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image2, {
              x: effect === 'left' ? '100%' : '-100%',
              display: 'block'
            });
            $image2.css('background-image', "url(\"".concat(slides[index].img, "\")"));
            _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($image2, {
              duration: 0.8,
              x: '0%',
              force3D: true,
              ease: Power1.easeInOut
            });
            _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($image1, {
              duration: 0.8,
              opacity: 0,
              scale: 0.9,
              force3D: true,
              ease: Power1.easeInOut,
              onComplete: function onComplete() {
                $image1.css('background-image', "url(\"".concat(slides[index].img, "\")"));
                _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image1, {
                  scale: 1,
                  opacity: 1
                });
                $image2.css('background-image', '');
                _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image2, {
                  display: 'none'
                });
                isBusy = 0;
              }
            });
            break;

          default:
            // fade
            _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image2, {
              opacity: 0,
              display: 'block'
            });
            $image2.css('background-image', "url(\"".concat(slides[index].img, "\")"));
            _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($image2, {
              duration: 0.8,
              opacity: 1,
              force3D: true,
              onComplete: function onComplete() {
                $image1.css('background-image', "url(\"".concat(slides[index].img, "\")"));
                $image2.css('background-image', '');
                _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image2, {
                  display: 'none'
                });
                isBusy = 0;
              }
            });
            break;
        } // set new content


        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($content2, {
          opacity: 0,
          y: effect === 'left' ? 100 : -100,
          display: 'flex'
        });
        $content2.children().html(slides[index].$content);
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($content, {
          duration: 0.5,
          opacity: 0,
          y: effect === 'left' ? -100 : 100,
          force3D: true
        });
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($content2, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          force3D: true,
          delay: 0.1,
          onComplete: function onComplete() {
            $content.children().html(slides[index].$content);
            _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($content, {
              opacity: 1,
              clearProps: 'transform'
            });
            _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($content2, {
              display: 'none'
            });
          }
        });
        curIndex = index;
        $eachItems.removeClass('nk-slider-item-current').eq(index).addClass('nk-slider-item-current');
        updateAuthor();
        updateSlideNumbers();
        updateNavNumbers();
        updateBullets();
        updateThumbs();
        scrollThumbs();
        runAutoplay();
      }
    }

    slideShow(curIndex, 'fade', 1); // show next / previous slider

    function slideShowNext() {
      slideShow(curIndex !== slides.length - 1 ? curIndex + 1 : 0, 'left');
    }

    function slideShowPrev() {
      slideShow(curIndex !== 0 ? curIndex - 1 : slides.length - 1, 'right');
    } // create arrows


    if ($slider.attr('data-show-arrows') === 'true') {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-slider-arrow nk-slider-arrow-prev"><span class="pe-7s-angle-left"></span></div>').appendTo($container);
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-slider-arrow nk-slider-arrow-next"><span class="pe-7s-angle-right"></span></div>').appendTo($container);
    } // create slideshow controls


    if ($slider.attr('data-show-slideshow-nav') === 'true') {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"nk-slider-slideshow-nav\">\n                <div class=\"nk-slider-arrow nk-slider-arrow-prev\"><span class=\"pe-7s-angle-left\"></span></div>\n                <div class=\"nk-slider-arrow nk-slider-arrow-next\"><span class=\"pe-7s-angle-right\"></span></div>\n                <div class=\"nk-slider-fullscreen\"><span class=\"pe-7s-expand1\"></span></div>\n            </div>").appendTo($container);
    } // click on controls


    $slider.on('click', '.nk-slider-arrow-prev', function () {
      slideShowPrev();
    });
    $slider.on('click', '.nk-slider-arrow-next', function () {
      slideShowNext();
    }); // touch swipe

    var touchStart = 0;
    var touchDelta = 0;
    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('touchstart', function (e) {
      touchStart = e.originalEvent.touches[0].screenX;
      touchDelta = 0;
    });
    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('touchmove touchend', function (e) {
      var x = e.originalEvent.touches && e.originalEvent.touches.length ? e.originalEvent.touches[0].screenX : false;
      touchDelta = x === false ? touchDelta : touchStart - x; // check if delta >= 2 and mouse under slider

      if (Math.abs(touchDelta) < 2 || !Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).parents('.nk-slider').length) {
        return;
      }

      if (e.type === 'touchend') {
        if (touchDelta > 0) {
          slideShowNext();
        } else if (touchDelta < 0) {
          slideShowPrev();
        }
      }
    });
  });
}



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initForms", function() { return initForms; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init AJAX Forms

-------------------------------------------------------------------*/

function initForms() {
  var self = this; // Create Spinners in input number

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<span class="nk-form-control-number-up"></span>').insertAfter('.nk-form-control-number input');
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<span class="nk-form-control-number-down"></span>').insertAfter('.nk-form-control-number input');
  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.nk-form-control-number-up', function () {
    var $input = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).siblings('input');
    var max = $input.attr('max') || 9999999;
    var newVal;
    var oldValue = parseFloat($input.val());

    if (oldValue >= max) {
      newVal = oldValue;
    } else {
      newVal = oldValue + 1;
    }

    $input.val(newVal);
    $input.trigger('change');
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.nk-form-control-number-down', function () {
    var $input = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).siblings('input');
    var min = $input.attr('min') || -9999999;
    var newVal;
    var oldValue = parseFloat($input.val());

    if (oldValue <= min) {
      newVal = oldValue;
    } else {
      newVal = oldValue - 1;
    }

    $input.val(newVal);
    $input.trigger('change');
  });

  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].validator === 'undefined') {
    return;
  } // Validate Forms


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('form:not(.nk-form-ajax):not([novalidate])').each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).validate({
      errorClass: 'nk-error',
      errorElement: 'div',
      errorPlacement: function errorPlacement(error, element) {
        var $parent = element.parent('.input-group');
        var $parentNumber = element.parent('.nk-form-control-number');

        if ($parent.length) {
          $parent.after(error);
        } else if ($parentNumber.length) {
          $parentNumber.parent().after(error);
        } else {
          element.after(error);
        }

        self.debounceResize();
      }
    });
  }); // ajax form

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('form.nk-form-ajax:not([novalidate])').each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).validate({
      errorClass: 'nk-error',
      errorElement: 'div',
      errorPlacement: function errorPlacement(error, element) {
        var $parent = element.parent('.input-group');

        if ($parent.length) {
          $parent.after(error);
        } else {
          element.after(error);
        }

        self.debounceResize();
      },
      // Submit the form via ajax (see: jQuery Form plugin)
      submitHandler: function submitHandler(form) {
        var $form = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(form);
        var $responseSuccess = $form.find('.nk-form-response-success');
        var $responseError = $form.find('.nk-form-response-error');
        _utility__WEBPACK_IMPORTED_MODULE_0__["$"].ajax({
          type: 'POST',
          url: $form.attr('action'),
          data: $form.serialize(),
          success: function success(response) {
            response = JSON.parse(response);

            if (response.type && response.type === 'success') {
              $responseError.hide();
              $responseSuccess.html(response.response).show();
              form.reset();
            } else {
              $responseSuccess.hide();
              $responseError.html(response.response).show();
            }

            self.debounceResize();
          },
          error: function error(response) {
            $responseSuccess.hide();
            $responseError.html(response.responseText).show();
            self.debounceResize();
          }
        });
      }
    });
  });
}



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTeamBlock", function() { return initTeamBlock; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

 Team Block

 -------------------------------------------------------------------*/

function initTeamBlock() {
  function activateMemberBlock($item) {
    var id = $item.attr('data-item-id'); // add active class to item

    $item.siblings().removeClass('active');
    $item.addClass('active'); // add class to item background

    $item.siblings('.nk-team-block-backgrounds:eq(0)').find("[data-bg-id=\"".concat(id, "\"]")).addClass('active').siblings().removeClass('active');
  } // prepare team blocks


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-team-block').each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this); // prepare backgrounds

    var $backgrounds = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-team-block-backgrounds">');
    $this.find('.nk-team-member img.nk-team-member-photo').each(function () {
      var $img = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      var $parent = $img.parent();
      var id = $parent.index();
      $parent.attr('data-item-id', id);
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div>').css({
        'background-image': "url(\"".concat($img.attr('src'), "\")")
      }).attr('data-bg-id', id).appendTo($backgrounds);
    });
    $this.append($backgrounds); // activate item

    var $activeMember = $this.children('.nk-team-member.active:eq(0)');

    if (!$activeMember.length) {
      $activeMember = $this.children('.nk-team-member:eq(0)');
    }

    activateMemberBlock($activeMember);
  }); // hover activation

  _utility__WEBPACK_IMPORTED_MODULE_0__["$body"].on('click', '.nk-team-block .nk-team-member', function () {
    activateMemberBlock(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
  });
}



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGmaps", function() { return initGmaps; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Gmaps

-------------------------------------------------------------------*/

function initGmaps() {
  // stretch gmaps
  function stretch() {
    // column stretch
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-gmaps-stretch').each(function () {
      var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      var $row = $this.closest('.row');
      var $col = $this.closest('[class*="col-"]');
      var rectGmap = this.getBoundingClientRect();
      var rectRow = $row[0].getBoundingClientRect();
      var rectCol = $col[0].getBoundingClientRect();
      var leftGmap = rectGmap.left;
      var rightGmap = _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] - rectGmap.right;
      var leftRow = rectRow.left + (parseFloat($row.css('padding-left')) || 0);
      var rightRow = _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] - rectRow.right + (parseFloat($row.css('padding-right')) || 0);
      var leftCol = rectCol.left;
      var rightCol = _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] - rectCol.right;
      var css = {
        'margin-left': 0,
        'margin-right': 0
      };
      var bodyLeft = parseFloat(_utility__WEBPACK_IMPORTED_MODULE_0__["$body"].css('paddingLeft'));
      var bodyRight = parseFloat(_utility__WEBPACK_IMPORTED_MODULE_0__["$body"].css('paddingRight')); // We need to round numbers because in some situations the same blocks have different offsets, for example
      // Row right is 68
      // Col right is 68.015625
      // I don't know why :(

      if (Math.round(leftRow) === Math.round(leftCol)) {
        var ml = parseFloat($this.css('margin-left') || 0);
        css['margin-left'] = ml - leftGmap + bodyLeft;
      }

      if (Math.round(rightRow) === Math.round(rightCol)) {
        var mr = parseFloat($this.css('margin-right') || 0);
        css['margin-right'] = mr - rightGmap + bodyRight;
      }

      $this.css(css);
    });
  }

  stretch();
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])(function () {
    stretch();
  });
}



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTwitter", function() { return initTwitter; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Twitter

-------------------------------------------------------------------*/

function initTwitter() {
  var self = this;
  var $twtFeeds = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-twitter-list, .nk-twitter-list-2');

  if (!$twtFeeds.length || !self.options.templates.twitter) {
    return;
  }
  /**
   * Templating a tweet using '{{ }}' braces
   * @param  {Object} data Tweet details are passed
   * @return {String}      Templated string
   */


  function templating(data, temp) {
    var tempVariables = ['date', 'tweet', 'avatar', 'url', 'retweeted', 'screen_name', 'user_name'];

    for (var i = 0, len = tempVariables.length; i < len; i++) {
      temp = temp.replace(new RegExp("{{".concat(tempVariables[i], "}}"), 'gi'), data[tempVariables[i]]);
    }

    return temp;
  }

  $twtFeeds.each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var options = {
      username: $this.attr('data-twitter-user-name') || null,
      list: null,
      hashtag: $this.attr('data-twitter-hashtag') || null,
      count: $this.attr('data-twitter-count') || 2,
      hideReplies: $this.attr('data-twitter-hide-replies') === 'true',
      template: $this.attr('data-twitter-template') || self.options.templates.twitter,
      loadingText: self.options.templates.twitterLoadingText,
      failText: self.options.templates.twitterFailText,
      apiPath: self.options.templates.twitterApiPath
    }; // stop if running in file protocol

    if (window.location.protocol === 'file:') {
      $this.html(options.failText); // eslint-disable-next-line

      console.error('You should run you website on webserver with PHP to get working Twitter');
      return;
    } // Set loading


    $this.html("<span>".concat(options.loadingText, "</span>")); // Fetch tweets

    _utility__WEBPACK_IMPORTED_MODULE_0__["$"].getJSON(options.apiPath, {
      username: options.username,
      list: options.list,
      hashtag: options.hashtag,
      count: options.count,
      exclude_replies: options.hideReplies
    }, function (twt) {
      $this.html('');

      for (var i = 0; i < options.count; i++) {
        var tweet = false;

        if (twt[i]) {
          tweet = twt[i];
        } else if (twt.statuses && twt.statuses[i]) {
          tweet = twt.statuses[i];
        } else {
          break;
        }

        var tempData = {
          user_name: tweet.user.name,
          date: tweet.date_formatted,
          tweet: tweet.text_entitled,
          avatar: "<img src=\"".concat(tweet.user.profile_image_url, "\" />"),
          url: "https://twitter.com/".concat(tweet.user.screen_name, "/status/").concat(tweet.id_str),
          retweeted: tweet.retweeted,
          screen_name: "@".concat(tweet.user.screen_name)
        };
        $this.append(templating(tempData, options.template));
      } // resize window


      self.debounceResize();
    }).fail(function (a) {
      $this.html(options.failText);
      _utility__WEBPACK_IMPORTED_MODULE_0__["$"].error(a.responseText);
    });
  });
}



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginObjectFitImages", function() { return initPluginObjectFitImages; });
/* Object Fit Images */
function initPluginObjectFitImages() {
  if (typeof objectFitImages !== 'undefined') {
    objectFitImages();
  }
}



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginStickySidebar", function() { return initPluginStickySidebar; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Plugin Sticky Sidebar

-------------------------------------------------------------------*/

function initPluginStickySidebar() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.stick_in_parent === 'undefined') {
    return;
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-sidebar-sticky').each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var $parent = $this.parent();
    $parent.addClass('nk-sidebar-sticky-parent');
    $this.wrapInner('<div>').children().stick_in_parent({
      parent: $parent,
      recalc_every: 50,
      offset_top: parseInt($this.attr('data-offset-top'), 10) || 0,
      // fixed ADS reloading issue https://github.com/leafo/sticky-kit/issues/45
      spacer: false
    }) // we need to set min height on parent block (in theme it is equal height column) to prevent sidebar content jumping
    .on('sticky_kit:unbottom sticky_kit:stick sticky_kit:bottom', function () {
      $parent.css('min-height', Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).height());
    }).on('sticky_kit:unstick', function () {
      $parent.css('min-height', '');
    });
  });
}



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginNano", function() { return initPluginNano; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Nano Scroller */
// TODO: remove nano script since it was removed from template.

function initPluginNano($context) {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.nanoScroller !== 'undefined') {
    ($context || _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"]).find('.nano').nanoScroller();
  }
}



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginJarallax", function() { return initPluginJarallax; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Jarallax */

function initPluginJarallax() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.jarallax === 'undefined') {
    return;
  }

  var self = this; // video backgrounds

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.bg-video[data-video]').each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-jarallax-video', Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-video'));
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).removeAttr('data-video');
  }); // header parallax

  var $parallaxHeader = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-header-title-parallax-content').eq(0);

  if ($parallaxHeader.length) {
    var $headerImageOrVideo = $parallaxHeader.find('> .bg-image, > .bg-video').eq(0);
    var $headerContent = $headerImageOrVideo.find('~ *');
    var options = {};
    var parallaxedBg = $headerImageOrVideo.hasClass('bg-image-parallax') || $headerImageOrVideo.hasClass('bg-video-parallax');

    if (parallaxedBg) {
      $parallaxHeader = $headerImageOrVideo;
      options.speed = self.options.parallaxSpeed;
    } else {
      options = {
        type: 'custom',
        imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        imgWidth: 1,
        imgHeight: 1
      };
    }

    options.onScroll = function (calc) {
      var scrollContent = Math.min(50, 50 * (1 - calc.visiblePercent)); // fix if top banner not on top

      if (calc.beforeTop > 0) {
        scrollContent = 0;
      }

      $headerContent.css({
        opacity: calc.visiblePercent < 0 || calc.beforeTop > 0 ? 1 : calc.visiblePercent,
        transform: "translateY(".concat(scrollContent, "px) translateZ(0)")
      });
    };

    $parallaxHeader.jarallax(options);
  } // footer parallax


  var $parallaxFooter = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-footer-parallax, .nk-footer-parallax-opacity').eq(0);

  if ($parallaxFooter.length) {
    var $footerImage = $parallaxFooter.find('> .bg-image > div');
    var $footerContent = $parallaxFooter.find('> .bg-image ~ *');
    var footerParallaxScroll = $parallaxFooter.hasClass('nk-footer-parallax');
    var footerParallaxOpacity = $parallaxFooter.hasClass('nk-footer-parallax-opacity');
    $parallaxFooter.jarallax({
      type: 'custom',
      imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      imgWidth: 1,
      imgHeight: 1,
      onScroll: function onScroll(calc) {
        var scrollImg = -Math.min(100, 100 * (1 - calc.visiblePercent));
        var scrollInfo = -Math.min(50, 50 * (1 - calc.visiblePercent));

        if (footerParallaxScroll) {
          $footerImage.css({
            transform: "translateY(".concat(scrollImg, "px) translateZ(0)")
          });
          $footerContent.css({
            transform: "translateY(".concat(scrollInfo, "px) translateZ(0)")
          });
        }

        if (footerParallaxOpacity) {
          $footerContent.css({
            opacity: calc.visiblePercent < 0 ? 1 : calc.visiblePercent
          });
        }
      }
    });
  } // primary parallax


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.bg-image-parallax, .bg-video-parallax').jarallax({
    speed: self.options.parallaxSpeed
  }); // video without parallax

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.bg-video:not(.bg-video-parallax)').jarallax({
    speed: 1
  });
}



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginFlickity", function() { return initPluginFlickity; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


function addDefaultArrows($carousel) {
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-flickity-arrow nk-flickity-arrow-prev"><span class="pe-7s-angle-left"></span></div>').on('click', function () {
    $carousel.flickity('previous');
  }).appendTo($carousel);
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-flickity-arrow nk-flickity-arrow-next"><span class="pe-7s-angle-right"></span></div>').on('click', function () {
    $carousel.flickity('next');
  }).appendTo($carousel);
}

function updateCustomArrows($carousel) {
  var data = $carousel.children('.nk-carousel-inner').data('flickity');
  var currIndex = data.selectedIndex;
  var nextIndex;
  var prevIndex; // get next and prev cells

  if (currIndex === 0) {
    nextIndex = 1;
    prevIndex = data.cells.length - 1;
  } else if (currIndex === data.cells.length - 1) {
    nextIndex = 0;
    prevIndex = data.cells.length - 2;
  } else {
    nextIndex = currIndex + 1;
    prevIndex = currIndex - 1;
  }

  var $nextCell = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(data.cells[nextIndex].element);
  var $prevCell = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(data.cells[prevIndex].element);
  var $currCell = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(data.cells[currIndex].element); // get name and sources

  var nextName = $nextCell.find('.nk-carousel-item-name').text();
  var prevName = $prevCell.find('.nk-carousel-item-name').text();
  var currName = $currCell.find('.nk-carousel-item-name').html();
  var currLinks = $currCell.find('.nk-carousel-item-links').html(); // add info to buttons

  $carousel.find('.nk-carousel-next > .nk-carousel-arrow-name').html(nextName);
  $carousel.find('.nk-carousel-prev > .nk-carousel-arrow-name').html(prevName);
  $carousel.find('.nk-carousel-current > .nk-carousel-name').html(currName);
  $carousel.find('.nk-carousel-current > .nk-carousel-links').html(currLinks);
} // prevent click event fire when drag carousel


function noClickEventOnDrag($carousel) {
  $carousel.on('dragStart.flickity', function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.flickity-viewport').addClass('is-dragging');
  });
  $carousel.on('dragEnd.flickity', function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.flickity-viewport').removeClass('is-dragging');
  });
}
/* Flickity */


function initPluginFlickity() {
  if (typeof window.Flickity === 'undefined') {
    return;
  }
  /*
   * Hack to add imagesLoaded event
   * https://github.com/metafizzy/flickity/issues/328
   */


  Flickity.prototype.imagesLoaded = function () {
    if (!this.options.imagesLoaded) {
      return;
    }

    var _this = this;

    var timeout = false;
    imagesLoaded(this.slider).on('progress', function (instance, image) {
      var cell = _this.getParentCell(image.img);

      _this.cellSizeChange(cell && cell.element);

      if (!_this.options.freeScroll) {
        _this.positionSliderAtSelected();
      }

      clearTimeout(timeout);
      timeout = setTimeout(function () {
        _this.dispatchEvent('imagesLoadedTimeout', null, [image.img, cell.element]);
      }, 100);
    });
  };

  var self = this; // carousel 1

  var $carousel1 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-carousel > .nk-carousel-inner:not(.flickity-enabled)').parent();

  if ($carousel1.length) {
    $carousel1.children('.nk-carousel-inner').each(function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).flickity({
        pageDots: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-dots') === 'true' || false,
        autoPlay: parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-autoplay')) || false,
        prevNextButtons: false,
        wrapAround: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-loop') === 'true',
        cellAlign: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-cell-align') || 'center'
      });

      if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-arrows') === 'true') {
        addDefaultArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
      }

      updateCustomArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent());
    }).on('select.flickity', function () {
      updateCustomArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent());
    });
    $carousel1.on('click', '.nk-carousel-next', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().children('.nk-carousel-inner').flickity('next');
    });
    $carousel1.on('click', '.nk-carousel-prev', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().children('.nk-carousel-inner').flickity('previous');
    });
    noClickEventOnDrag($carousel1.children('.nk-carousel-inner'));
  } // carousel 2


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-carousel-2 > .nk-carousel-inner:not(.flickity-enabled)').each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).flickity({
      pageDots: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-dots') === 'true' || false,
      autoPlay: parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-autoplay')) || false,
      prevNextButtons: false,
      wrapAround: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-loop') === 'true',
      imagesLoaded: true,
      cellAlign: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-cell-align') || 'center'
    });

    if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-arrows') === 'true') {
      addDefaultArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
    }

    noClickEventOnDrag(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
  }); // carousel 3

  var $carousel3 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-carousel-3 > .nk-carousel-inner:not(.flickity-enabled)').parent(); // set height for items

  function setHeightCarousel3() {
    $carousel3.each(function () {
      var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      var $allImages = $this.find('img');
      var size = $this.attr('data-size') || 0.8; // fit item to container

      if (size === 'container') {
        var $cont = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.container:eq(0)');
        var containerW = $cont.length ? $cont.width() : '';
        $allImages.css({
          'max-width': containerW,
          height: 'auto'
        });
      } else {
        var resultH = _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"] * size;
        var maxItemW = Math.min($this.parent().width(), _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"]) * size;
        $allImages.each(function () {
          if (this.naturalWidth && this.naturalHeight && resultH * this.naturalWidth / this.naturalHeight > maxItemW) {
            resultH = maxItemW * this.naturalHeight / this.naturalWidth;
          }
        });
        $allImages.css('height', resultH);
      }

      $this.children('.nk-carousel-inner').flickity('reposition');
    });
  }

  if ($carousel3.length) {
    $carousel3.children('.nk-carousel-inner').each(function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).flickity({
        pageDots: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-dots') === 'true' || false,
        autoPlay: parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-autoplay')) || false,
        prevNextButtons: false,
        wrapAround: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-loop') === 'true',
        imagesLoaded: true,
        cellAlign: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-cell-align') || 'center'
      });
      updateCustomArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent());

      if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-arrows') === 'true') {
        addDefaultArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
      }
    }).on('select.flickity', function () {
      updateCustomArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent());
    }).on('imagesLoadedTimeout.flickity', function () {
      // fix items height when images loaded
      setHeightCarousel3();
    });
    $carousel3.on('click', '.nk-carousel-next', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).closest('.nk-carousel-3').children('.nk-carousel-inner').flickity('next');
    });
    $carousel3.on('click', '.nk-carousel-prev', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).closest('.nk-carousel-3').children('.nk-carousel-inner').flickity('previous');
    });
    setHeightCarousel3();
    self.debounceResize(setHeightCarousel3);
    noClickEventOnDrag($carousel3.children('.nk-carousel-inner'));
  } // update products carousel


  var $storeCarousel = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-carousel-1, .nk-carousel-1, .nk-carousel-2, .nk-carousel-3').filter('.nk-store:not(.nk-store-carousel-enabled)').addClass('.nk-store-carousel-enabled');

  function updateStoreProducts() {
    $storeCarousel.each(function () {
      var currentTallest = 0;
      var currentRowStart = 0;
      var rowDivs = [];
      var topPosition = 0;
      var currentDiv = 0;
      var $el;
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.nk-product').each(function () {
        $el = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
        $el.css('height', '');
        topPosition = $el.position().top;

        if (currentRowStart !== topPosition) {
          for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].css('height', currentTallest);
          }

          rowDivs.length = 0; // empty the array

          currentRowStart = topPosition;
          currentTallest = $el.innerHeight();
          rowDivs.push($el);
        } else {
          rowDivs.push($el);
          currentTallest = currentTallest < $el.innerHeight() ? $el.innerHeight() : currentTallest;
        }

        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
          rowDivs[currentDiv].css('height', currentTallest);
        }
      });
    });
  }

  if ($storeCarousel.length) {
    $storeCarousel.children('.nk-carousel-inner').on('imagesLoadedTimeout.flickity', function () {
      // fix items height when images loaded
      setHeightCarousel3();
    });
    self.debounceResize(updateStoreProducts);
    updateStoreProducts();
  } // Carousel Parallax
  // thanks to https://github.com/metafizzy/flickity/issues/468#issuecomment-309120518


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-carousel, .nk-carousel-2, .nk-carousel-3').filter('[data-parallax="true"]').each(function () {
    var $carousel = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.flickity-enabled');
    var flkty = $carousel.data('flickity');
    var $imgs = $carousel.find('.flickity-slider > div .nk-carousel-parallax-img');
    $carousel.on('scroll.flickity', function () {
      flkty.slides.forEach(function (slide, i) {
        var img = $imgs[i];
        var x = 0;

        if (i === 0) {
          x = Math.abs(flkty.x) > flkty.slidesWidth ? flkty.slidesWidth + flkty.x + flkty.slides[flkty.slides.length - 1].outerWidth + slide.target : slide.target + flkty.x;
        } else if (i === flkty.slides.length - 1) {
          x = Math.abs(flkty.x) + flkty.slides[i].outerWidth < flkty.slidesWidth ? slide.target - flkty.slidesWidth + flkty.x - flkty.slides[i].outerWidth : slide.target + flkty.x;
        } else {
          x = slide.target + flkty.x;
        }

        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(img).css('transform', "translateX(".concat(x * (-1 / 5), "px)"));
      });
    });
  }); // Add numbers inside dots

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-carousel-dots-3').each(function () {
    var count = 0;
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.flickity-page-dots .dot').each(function () {
      count++;
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).append((count < 10 ? '0' : '') + count);
    });
  }); // Set position to arrows when aligner to the bottom and enabled dots

  function correctBottomArrows(item) {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(item);
    var carouselOffset = $this.offset();
    var $dots = $this.find('.flickity-page-dots .dot');
    var $arrPrev = $this.find('.nk-flickity-arrow-prev');
    var $arrNext = $this.find('.nk-flickity-arrow-next'); // calculate position for the prev and next arrows

    var prevPosX = false;
    var nextPosX = false;
    var posY = $dots.offset().top;
    $dots.each(function () {
      var $dot = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      var dotOffset = $dot.offset();

      if (prevPosX === false || prevPosX > dotOffset.left) {
        prevPosX = dotOffset.left;
      }

      if (nextPosX === false || nextPosX < dotOffset.left) {
        nextPosX = dotOffset.left;
      }
    });
    prevPosX -= carouselOffset.left;
    nextPosX -= carouselOffset.left;
    posY -= carouselOffset.top;
    $arrPrev.css({
      top: posY,
      left: prevPosX,
      right: 'auto',
      bottom: 'auto'
    });
    $arrNext.css({
      top: posY,
      left: nextPosX,
      right: 'auto',
      bottom: 'auto'
    });
  }

  var resizeTimeout;
  _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('ready load resize', function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('[data-arrows="true"][data-dots="true"].nk-carousel-arrows-bottom-center .flickity-enabled').each(function () {
      var _this2 = this;

      correctBottomArrows(this);
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        correctBottomArrows(_this2);
      }, 155); // flickity have debounce with 150ms
    });
  });
}



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginIsotope", function() { return initPluginIsotope; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Isotope */

function initPluginIsotope() {
  if (typeof window.Isotope === 'undefined') {
    return;
  }

  var self = this;
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-isotope').each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var $grid = $this.isotope({
      itemSelector: '.nk-isotope-item'
    });
    $grid.imagesLoaded().progress(function () {
      $grid.isotope('layout');
    });
    $grid.on('arrangeComplete', function () {
      self.debounceResize();
    }); // filter

    var $filter = [];

    if ($this.parent().hasClass('nk-portfolio-list')) {
      $filter = $this.parent().prev('.nk-isotope-filter');
    } else {
      $filter = $this.prev('.nk-isotope-filter');
    }

    if ($filter.length) {
      $filter.on('click', '[data-filter]', function (e) {
        e.preventDefault();
        var filter = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-filter');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).addClass('active').siblings().removeClass('active');
        $grid.isotope({
          filter: filter === '*' ? '' : "[data-filter*=".concat(filter, "]")
        });
      });
    }
  }); // filter toggler

  _utility__WEBPACK_IMPORTED_MODULE_0__["$body"].on('click', '[href="#nk-toggle-filter"]:not(.busy)', function (e) {
    var $pagination = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent('.nk-pagination');
    var $filter = $pagination.next('.nk-isotope-filter');
    var isActive = $filter.hasClass('nk-isotope-filter-active');

    if (!$pagination.length || !$filter.length) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    $pagination.addClass('busy');

    if (isActive) {
      $pagination.removeClass('nk-isotope-filter-active');
      $filter.removeClass('nk-isotope-filter-active');
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($filter.children(), {
        duration: 0.2,
        opacity: 0
      });
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($filter, {
        duration: 0.2,
        height: 0,
        marginBottom: 0,
        marginTop: 0,
        force3D: true,
        delay: 0.2,
        display: 'none',
        onComplete: function onComplete() {
          $pagination.removeClass('busy');
          Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])();
        }
      });
    } else {
      $pagination.addClass('nk-isotope-filter-active');
      $filter.addClass('nk-isotope-filter-active');
      $filter.css('height', 'auto');
      var filterHeight = $filter.height();
      $filter.css('height', 0);
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($filter.children(), {
        y: -10,
        opacity: 0
      });
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($filter, {
        duration: 0.2,
        height: filterHeight,
        marginBottom: 30,
        marginTop: -23,
        force3D: true,
        display: 'block'
      });
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].staggerTo($filter.children(), 0.2, {
        y: 0,
        opacity: 1,
        delay: 0.1
      }, 0.04, function () {
        $pagination.removeClass('busy');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])();
      });
    }
  });
}



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginPhotoswipe", function() { return initPluginPhotoswipe; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* PhotoSwipe */

function initPluginPhotoswipe() {
  var $gallery = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-popup-gallery');
  var $slideshow = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-slider .nk-slider-fullscreen').closest('.nk-slider');

  if ($slideshow.length) {
    $gallery = $gallery.add($slideshow);
  }

  if (typeof PhotoSwipe === 'undefined' || !$gallery.length) {
    return;
  }

  function parseVideoURL(url) {
    // parse youtube ID
    function getYoutubeID(ytUrl) {
      // eslint-disable-next-line no-useless-escape
      var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
      var match = ytUrl.match(regExp);
      return match && match[1].length === 11 ? match[1] : false;
    } // parse vimeo ID


    function getVimeoID(vmUrl) {
      // eslint-disable-next-line no-useless-escape
      var regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
      var match = vmUrl.match(regExp);
      return match && match[3] ? match[3] : false;
    }

    var Youtube = getYoutubeID(url);
    var Vimeo = getVimeoID(url);

    if (Youtube) {
      return {
        type: 'youtube',
        id: Youtube
      };
    } else if (Vimeo) {
      return {
        type: 'vimeo',
        id: Vimeo
      };
    }

    return false;
  } // prepare photoswipe markup


  var markup = '' + '<div class="pswp nk-pswp" tabindex="-1" role="dialog" aria-hidden="true">' + '   <div class="pswp__bg"></div>' + '   <div class="pswp__scroll-wrap">' + '      <div class="pswp__container">' + '          <div class="pswp__item"></div>' + '          <div class="pswp__item"></div>' + '          <div class="pswp__item"></div>' + '      </div>' + '      <div class="pswp__ui pswp__ui--hidden">' + '          <div class="pswp__top-bar">' + '              <div class="pswp__counter"></div>' + '              <a class="pswp__button pswp__button--close" title="Close"></a>' + '              <a class="pswp__button pswp__button--share" title="Share"></a>' + '              <a class="pswp__button pswp__button--fs" title="Fullscreen"></a>' + '              <a class="pswp__button pswp__button--zoom" title="Zoom"></a>' + '          </div>' + '          <div class="pswp__preloader">' + '              <div class="pswp__preloader__icn">' + '                  <div class="pswp__preloader__cut">' + '                      <div class="pswp__preloader__donut"></div>' + '                  </div>' + '              </div>' + '          </div>' + '          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">' + '              <div class="pswp__share-tooltip"></div>' + '          </div>' + '          <a class="pswp__button pswp__button--arrow--left" title="Previous"></a>' + '          <a class="pswp__button pswp__button--arrow--right" title="Next"></a>' + '          <div class="pswp__caption">' + '              <div class="pswp__caption__center"></div>' + '          </div>' + '      </div>' + '   </div>' + '</div>';
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('body').append(markup); // init code

  function parseThumbnailElements(el) {
    var thumbElements = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(el).find('.nk-gallery-item:visible, .nk-slider-item > .nk-slider-image');
    var items = [];
    var $meta;
    var size;
    var videoSize;
    var item;
    var video;
    thumbElements.each(function () {
      $meta = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      size = ($meta.attr('data-size') || '1920x1080').split('x');
      videoSize = ($meta.attr('data-video-size') || '1920x1080').split('x');
      video = $meta.attr('data-video');
      video = video ? parseVideoURL(video) : video;

      if (video) {
        if (video.type === 'youtube') {
          video = "<div class=\"nk-pswp-video\"><div><iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/".concat(video.id, "\" frameborder=\"0\" allowfullscreen></iframe></div></div>");
        } else {
          video = "<div class=\"nk-pswp-video\"><div><iframe src=\"https://player.vimeo.com/video/".concat(video.id, "?byline=0&portrait=0\" width=\"640\" height=\"360\" frameborder=\"0\" allowfullscreen></iframe></div></div>");
        }

        item = {
          html: video,
          vw: parseInt(videoSize[0], 10),
          vh: parseInt(videoSize[1], 10)
        };
      } else {
        // create slide object
        item = {
          src: $meta.hasClass('nk-slider-image') ? $meta.attr('src') : $meta.attr('href'),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10)
        }; // save link to element for getThumbBoundsFn

        item.el = this;
      }

      items.push(item);
    });
    return items;
  }

  function resizeVideo(data, curItem) {
    if (typeof curItem === 'undefined') {
      if (data && data.itemHolders.length) {
        data.itemHolders.forEach(function (val) {
          if (val.item && val.item.html) {
            resizeVideo(data, val.item);
          }
        });
      }

      return;
    } // calculate real viewport in pixels


    var vpW = data.viewportSize.x * window.devicePixelRatio;
    var vpH = data.viewportSize.y * window.devicePixelRatio;
    var ratio = curItem.vw / curItem.vh;
    var resultW;
    var $container = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(curItem.container);
    var bars = data.options.barsSize;
    var barTop = 0;
    var barBot = 0;

    if (bars) {
      barTop = bars.top && bars.top !== 'auto' ? bars.top : 0;
      barBot = bars.bottom && bars.bottom !== 'auto' ? bars.bottom : 0;
    }

    vpH -= barTop + barBot;

    if (ratio > vpW / vpH) {
      resultW = vpW;
    } else {
      resultW = vpH * ratio;
    }

    $container.find('.nk-pswp-video').css('max-width', resultW);
    $container.css({
      top: barTop,
      bottom: barBot
    });
  }

  function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
    var pswpElement = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-pswp')[0];
    var items = parseThumbnailElements(galleryElement); // define options (if needed)

    var options = {
      captionAndToolbarShowEmptyCaptions: false,
      closeEl: true,
      captionEl: false,
      fullscreenEl: true,
      zoomEl: true,
      shareEl: true,
      counterEl: true,
      arrowEl: true,
      shareButtons: [{
        id: 'facebook',
        label: 'Share in Facebook',
        url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}'
      }, {
        id: 'twitter',
        label: 'Share in Twitter',
        url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'
      }, {
        id: 'pinterest',
        label: 'Pin to Pinterest',
        url: 'https://www.pinterest.com/pin/create/button/' + '?url={{url}}&media={{image_url}}&description={{text}}'
      }],
      bgOpacity: 1,
      tapToClose: true,
      tapToToggleControls: false,
      showHideOpacity: true,
      galleryUID: galleryElement.getAttribute('data-pswp-uid')
    };

    if (fromURL) {
      if (options.galleryPIDs) {
        // parse real index when custom PIDs are used
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid === index) {
            options.index = j;
            break;
          }
        }
      } else {
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    } // exit if index not found


    if (Number.isNaN(options.index)) {
      return;
    }

    if (disableAnimation) {
      options.showAnimationDuration = 0;
    } // Pass data to PhotoSwipe and initialize it


    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.listen('resize', function () {
      resizeVideo(this);
    });
    gallery.listen('afterChange', function () {
      resizeVideo(this);
    });
    gallery.init();
  }

  function photoswipeParseHash() {
    var hash = window.location.hash.substring(1);
    var params = {};

    if (hash.length < 5) {
      // pid=1
      return params;
    }

    var vars = hash.split('&');

    for (var _i = 0; _i < vars.length; _i++) {
      if (!vars[_i]) {
        continue;
      }

      var pair = vars[_i].split('=');

      if (pair.length < 2) {
        continue;
      }

      params[pair[0]] = pair[1];
    }

    return params;
  } // select all gallery elements


  var i = 0;
  $gallery.each(function () {
    var $thisGallery = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    $thisGallery.attr('data-pswp-uid', i + 1);
    $thisGallery.on('click', '.nk-gallery-item, .nk-slider-fullscreen', function (e) {
      e.preventDefault();
      var index = 0;
      var isSlider = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).hasClass('nk-slider-fullscreen');
      var clicked = this;
      $thisGallery.find('.nk-gallery-item:visible, .nk-slider-item').each(function (idx) {
        if (isSlider && Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).hasClass('nk-slider-item-current') || !isSlider && this === clicked) {
          index = idx;
          return false;
        }

        return true;
      });
      openPhotoSwipe(index, $thisGallery[0]);
    });
    i++;
  }); // Parse URL and open gallery if it contains #&pid=3&gid=1

  var hashData = photoswipeParseHash();

  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, $gallery.get(hashData.gid - 1), true, true);
  }
}



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginJustifiedGallery", function() { return initPluginJustifiedGallery; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* JustifiedGallery */

function initPluginJustifiedGallery() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.justifiedGallery === 'undefined') {
    return;
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-justified-gallery').each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var margin = parseFloat($this.data('margins')) || 30;
    $this.css({
      marginLeft: -margin,
      marginRight: -margin,
      width: "calc(100% + ".concat(margin * 2, "px)")
    }).justifiedGallery({
      rowHeight: $this.data('rowHeight') || 300,
      maxRowHeight: $this.data('maxRowHeight') || 400,
      lastRow: $this.data('lastRow') || 'justify',
      margins: margin
    });
  });
}



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginBootstrap", function() { return initPluginBootstrap; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Bootstrap */

function initPluginBootstrap() {
  var self = this; // Tabs

  _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('shown.bs.tab', function () {
    self.debounceResize();
  }); // Tooltips

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('[data-toggle="tooltip"]').tooltip();
}



/***/ })
/******/ ]);