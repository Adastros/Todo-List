/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\nheader {\n  /* position: relative; */\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid black;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  transform: translateX(0);\n  transition: transform 0.25s;\n}\n\ninput {\n  width: 100%;\n}\n\ntextarea {\n  width: 100%;\n  resize: none;\n  overflow: auto;\n}\n\nimg {\n  width: 100%;\n  display: block;\n}\n\n.app-logo-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.app-logo-container > img {\n  height: 2.25rem;\n  width: min-content;\n}\n\n.app-logo-container > h2 {\n  font-size: 2.25rem;\n}\n\n.icon-button-medium {\n  height: 35px;\n  width: 35px;\n}\n\n.theme-button {\n  height: 35px;\n  width: 35px;\n}\n\n.view-button {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  gap: 0.1rem;\n}\n\n.view-button > img {\n  height: 100%;\n  width: min-content;\n}\n\n.view-options {\n  /* position: absolute;\n  top: 50%;\n  right: 1rem;\n  transform: translate(0, -50%); */\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.menu-bar {\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid black;\n}\n\n.menu-tabs {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.tab {\n  padding: 1rem;\n}\n\n.tab:hover,\n.project-tab:hover {\n  background-color: lightgray;\n}\n\n.linebreak {\n  width: 90%;\n  margin: 1rem auto;\n  border-top: 1px solid grey;\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.project-section {\n  display: flex;\n  flex-direction: column;\n}\n\n.new-project-button {\n  height: 20px;\n  width: 20px;\n}\n\n.project-tab {\n  width: 100%;\n  margin-bottom: 0.25rem;\n}\n\n.new-project-overlay {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.new-project-form {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 1.5rem;\n  border-radius: 16px;\n}\n\n.new-project-form-buttons {\n  align-self: flex-end;\n}\n\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main-content-header {\n  height: 75px;\n  width: 100%;\n}\n\n.task-viewer {\n  flex: 1;\n  width: 100%;\n}\n\n.add-new-task-button {\n  margin-top: 0.5rem;\n}\n\n.task-item {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 0.25rem 1rem;\n  border: 1px solid black;\n}\n\n.checkBoxTaskInfoContainer {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.task-header {\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n}\n\n.task-description {\n  font-size: 90%;\n}\n\n.checkbox {\n  height: 16px;\n  width: 16px;\n  border: 2px solid blue;\n  border-radius: 25%;\n  text-align: center;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.fade-in-out {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.fade-in-out:hover {\n  opacity: 1;\n}\n\n.closed {\n  transform: translateX(-200px);\n}\n\n.hide {\n  visibility: hidden;\n  overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/stylesheets/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,OAAO;EACP,aAAa;EACb,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE;;;kCAGgC;EAChC,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,2BAA2B;AAC7B;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,OAAO;EACP,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\nheader {\n  /* position: relative; */\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid black;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  transform: translateX(0);\n  transition: transform 0.25s;\n}\n\ninput {\n  width: 100%;\n}\n\ntextarea {\n  width: 100%;\n  resize: none;\n  overflow: auto;\n}\n\nimg {\n  width: 100%;\n  display: block;\n}\n\n.app-logo-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.app-logo-container > img {\n  height: 2.25rem;\n  width: min-content;\n}\n\n.app-logo-container > h2 {\n  font-size: 2.25rem;\n}\n\n.icon-button-medium {\n  height: 35px;\n  width: 35px;\n}\n\n.theme-button {\n  height: 35px;\n  width: 35px;\n}\n\n.view-button {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  gap: 0.1rem;\n}\n\n.view-button > img {\n  height: 100%;\n  width: min-content;\n}\n\n.view-options {\n  /* position: absolute;\n  top: 50%;\n  right: 1rem;\n  transform: translate(0, -50%); */\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.menu-bar {\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid black;\n}\n\n.menu-tabs {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.tab {\n  padding: 1rem;\n}\n\n.tab:hover,\n.project-tab:hover {\n  background-color: lightgray;\n}\n\n.linebreak {\n  width: 90%;\n  margin: 1rem auto;\n  border-top: 1px solid grey;\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.project-section {\n  display: flex;\n  flex-direction: column;\n}\n\n.new-project-button {\n  height: 20px;\n  width: 20px;\n}\n\n.project-tab {\n  width: 100%;\n  margin-bottom: 0.25rem;\n}\n\n.new-project-overlay {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.new-project-form {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 1.5rem;\n  border-radius: 16px;\n}\n\n.new-project-form-buttons {\n  align-self: flex-end;\n}\n\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main-content-header {\n  height: 75px;\n  width: 100%;\n}\n\n.task-viewer {\n  flex: 1;\n  width: 100%;\n}\n\n.add-new-task-button {\n  margin-top: 0.5rem;\n}\n\n.task-item {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 0.25rem 1rem;\n  border: 1px solid black;\n}\n\n.checkBoxTaskInfoContainer {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.task-header {\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n}\n\n.task-description {\n  font-size: 90%;\n}\n\n.checkbox {\n  height: 16px;\n  width: 16px;\n  border: 2px solid blue;\n  border-radius: 25%;\n  text-align: center;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.fade-in-out {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.fade-in-out:hover {\n  opacity: 1;\n}\n\n.closed {\n  transform: translateX(-200px);\n}\n\n.hide {\n  visibility: hidden;\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/appHeader/appHeader.js":
/*!***********************************************!*\
  !*** ./src/components/appHeader/appHeader.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appHeader": () => (/* binding */ appHeader)
/* harmony export */ });
/* harmony import */ var _appLogo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogo.js */ "./src/components/appHeader/appLogo.js");
/* harmony import */ var _generalButtons_iconButtonMedium_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generalButtons/iconButtonMedium.js */ "./src/components/generalButtons/iconButtonMedium.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _icons_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/menu.svg */ "./src/icons/menu.svg");
/* harmony import */ var _icons_light_theme_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/light-theme.svg */ "./src/icons/light-theme.svg");






function appHeader() {
  let appHeader = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("header"),
    menuButton = (0,_generalButtons_iconButtonMedium_js__WEBPACK_IMPORTED_MODULE_1__.iconButtonMedium)(_icons_menu_svg__WEBPACK_IMPORTED_MODULE_3__, "Menu icon"),
    themeButton = (0,_generalButtons_iconButtonMedium_js__WEBPACK_IMPORTED_MODULE_1__.iconButtonMedium)(_icons_light_theme_svg__WEBPACK_IMPORTED_MODULE_4__, "Light theme icon");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(menuButton, "menu-button");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(themeButton, "theme-button");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(appHeader, "appHeader");
  appHeader.append(menuButton, (0,_appLogo_js__WEBPACK_IMPORTED_MODULE_0__.appLogo)(), themeButton);

  return appHeader;
}




/***/ }),

/***/ "./src/components/appHeader/appLogo.js":
/*!*********************************************!*\
  !*** ./src/components/appHeader/appLogo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appLogo": () => (/* binding */ appLogo)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _image_Todo_ist_Logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../image/Todo-ist Logo.svg */ "./src/image/Todo-ist Logo.svg");



function appLogo() {
  let appLogoContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    appName = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2"),
    logoImage = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  appName.textContent = "Do It";

  logoImage.setAttribute("src", _image_Todo_ist_Logo_svg__WEBPACK_IMPORTED_MODULE_1__);
  logoImage.setAttribute(
    "alt",
    "Todo-ist Logo. Clipboards with checkmarks on them."
  );

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(appLogoContainer, "app-logo-container");

  appLogoContainer.append(logoImage, appName);

  return appLogoContainer;
}




/***/ }),

/***/ "./src/components/appMainContent/appMainContent.js":
/*!*********************************************************!*\
  !*** ./src/components/appMainContent/appMainContent.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appMainContent": () => (/* binding */ appMainContent)
/* harmony export */ });
/* harmony import */ var _mainContentHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContentHeader.js */ "./src/components/appMainContent/mainContentHeader.js");
/* harmony import */ var _taskViewer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskViewer.js */ "./src/components/appMainContent/taskViewer.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");




function appMainContent() {
  let appMainContent = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    linebreak = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(linebreak, "linebreak");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(appMainContent, "main-content");

  appMainContent.append((0,_mainContentHeader_js__WEBPACK_IMPORTED_MODULE_0__.mainContentHeader)(), linebreak, (0,_taskViewer_js__WEBPACK_IMPORTED_MODULE_1__.taskViewer)());

  return appMainContent;
}




/***/ }),

/***/ "./src/components/appMainContent/mainContentHeader.js":
/*!************************************************************!*\
  !*** ./src/components/appMainContent/mainContentHeader.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainContentHeader": () => (/* binding */ mainContentHeader)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function mainContentHeader() {
  let mainContentHeader = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    headingContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    heading = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1"),
    projectDescription = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(mainContentHeader, "main-content-header");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(headingContainer, "main-content-heading-container");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(heading, "main-content-heading");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(projectDescription, "main-content-project-description");

  headingContainer.append(heading, projectDescription);
  mainContentHeader.append(headingContainer);

  return mainContentHeader;
}




/***/ }),

/***/ "./src/components/appMainContent/task/addNewTaskButton.js":
/*!****************************************************************!*\
  !*** ./src/components/appMainContent/task/addNewTaskButton.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTaskButton": () => (/* binding */ addNewTaskButton)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");


function addNewTaskButton() {
  let addNewTaskButton = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");

  addNewTaskButton.textContent = "Add task";
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(addNewTaskButton, "add-new-task-button");

  return addNewTaskButton;
}




/***/ }),

/***/ "./src/components/appMainContent/task/checkbox.js":
/*!********************************************************!*\
  !*** ./src/components/appMainContent/task/checkbox.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkbox": () => (/* binding */ checkbox)
/* harmony export */ });
/* harmony import */ var _controls_taskController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controls/taskController.js */ "./src/components/controls/taskController.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _icons_check_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icons/check.svg */ "./src/icons/check.svg");




function checkbox(taskItemNumber) {
  let checkboxContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    checkbox = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    checkmark = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("img");

  checkmark.setAttribute("src", _icons_check_svg__WEBPACK_IMPORTED_MODULE_2__);
  checkmark.setAttribute("alt", "Checkmark icon");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(checkbox, "checkbox");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(checkmark, "fade-in-out");
  (0,_controls_taskController_js__WEBPACK_IMPORTED_MODULE_0__.toggleTaskStatus)(checkbox, taskItemNumber);

  checkbox.append(checkmark);
  checkboxContainer.append(checkbox);

  return checkboxContainer;
}




/***/ }),

/***/ "./src/components/appMainContent/task/taskForm.js":
/*!********************************************************!*\
  !*** ./src/components/appMainContent/task/taskForm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generalButtons/textButton.js */ "./src/components/generalButtons/textButton.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");



function createTaskHeaderField(taskHeaderValue) {
  let headerContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    headerLabel = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label"),
    headerInputField = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("textarea");

  headerLabel.textContent = "Task Name";
  if (taskHeaderValue) {
    headerInputField.textContent = taskHeaderValue;
  }

  headerLabel.setAttribute("for", "form-task-header");
  headerInputField.setAttribute("id", "form-task-header");
  headerInputField.setAttribute("required", "");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(headerInputField, "form-task-header");

  headerContainer.append(headerLabel, headerInputField);

  return headerContainer;
}

function createTaskDescriptionField(taskDescriptionValue) {
  let descriptionContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    descriptionLabel = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label"),
    descriptionInputField = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("textarea");

  descriptionLabel.textContent = "Description";
  if (taskDescriptionValue) {
    descriptionInputField.textContent = taskDescriptionValue;
  }

  descriptionLabel.setAttribute("for", "form-task-description");
  descriptionInputField.setAttribute("id", "form-task-description");

  descriptionContainer.append(descriptionLabel, descriptionInputField);

  return descriptionContainer;
}

// The addOrSaveTaskButtonText argument is used to determine if the
// taskForm should state "save" or "add task" for one of the buttons.
function taskForm(
  addOrSaveTaskButtonText = "Add Task",
  taskHeaderValue,
  taskDescriptionValue
) {
  let formContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    taskItemForm = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("form"),
    headerField = createTaskHeaderField(taskHeaderValue),
    descriptionField = createTaskDescriptionField(taskDescriptionValue),
    buttonContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    cancelFormButton = (0,_generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_0__.textButton)("Cancel", "form-cancel-button"),
    addOrSaveTaskButton = (0,_generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_0__.textButton)(
      addOrSaveTaskButtonText,
      "form-add-or-save-task-button"
    );

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(taskItemForm, "task-form");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(formContainer, "task-form-container");

  addOrSaveTaskButton.setAttribute("disabled", "");
  taskItemForm.setAttribute("novalidate", "");

  buttonContainer.append(cancelFormButton, addOrSaveTaskButton);
  taskItemForm.append(headerField, descriptionField, buttonContainer);
  formContainer.append(taskItemForm);

  return formContainer;
}




/***/ }),

/***/ "./src/components/appMainContent/task/taskInfo.js":
/*!********************************************************!*\
  !*** ./src/components/appMainContent/task/taskInfo.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskInfo": () => (/* binding */ taskInfo)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");


function taskInfo(taskHeaderValue, taskDescriptionValue) {
  let taskInformationContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    taskHeaderElement = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3"),
    taskDescriptionElement = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p");

  taskHeaderElement.textContent = taskHeaderValue;
  taskDescriptionElement.textContent = taskDescriptionValue;

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(taskHeaderElement, "task-header");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(taskDescriptionElement, "task-description");

  taskInformationContainer.append(taskHeaderElement, taskDescriptionElement);

  return taskInformationContainer;
}




/***/ }),

/***/ "./src/components/appMainContent/task/taskItem.js":
/*!********************************************************!*\
  !*** ./src/components/appMainContent/task/taskItem.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskItem": () => (/* binding */ taskItem)
/* harmony export */ });
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.js */ "./src/components/appMainContent/task/checkbox.js");
/* harmony import */ var _taskInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskInfo.js */ "./src/components/appMainContent/task/taskInfo.js");
/* harmony import */ var _taskItemActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskItemActions.js */ "./src/components/appMainContent/task/taskItemActions.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");





function taskItem(taskHeaderValue, taskDescriptionValue, taskItemNumber) {
  let taskItem = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div"),
    checkBoxTaskInfoContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(checkBoxTaskInfoContainer, "checkBoxTaskInfoContainer");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.addClass)(taskItem, "task-item");

  taskItem.dataset.taskItem = taskItemNumber;

  checkBoxTaskInfoContainer.append(
    (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_0__.checkbox)(taskItemNumber),
    (0,_taskInfo_js__WEBPACK_IMPORTED_MODULE_1__.taskInfo)(taskHeaderValue, taskDescriptionValue)
  );
  taskItem.append(checkBoxTaskInfoContainer, (0,_taskItemActions_js__WEBPACK_IMPORTED_MODULE_2__.taskItemActions)(taskItemNumber));

  return taskItem;
}




/***/ }),

/***/ "./src/components/appMainContent/task/taskItemActions.js":
/*!***************************************************************!*\
  !*** ./src/components/appMainContent/task/taskItemActions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskItemActions": () => (/* binding */ taskItemActions)
/* harmony export */ });
/* harmony import */ var _generalButtons_iconButtonMedium_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generalButtons/iconButtonMedium.js */ "./src/components/generalButtons/iconButtonMedium.js");
/* harmony import */ var _controls_taskController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controls/taskController.js */ "./src/components/controls/taskController.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons/edit.svg */ "./src/icons/edit.svg");





function taskItemActions(taskItemNumber) {
  let taskItemActions = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    editButton = (0,_generalButtons_iconButtonMedium_js__WEBPACK_IMPORTED_MODULE_0__.iconButtonMedium)(
      _icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__,
      "Task Edit Icon Button"
    );

  (0,_controls_taskController_js__WEBPACK_IMPORTED_MODULE_1__.AddEditButtonListener)(editButton, taskItemNumber);

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(taskItemActions, "task-item-actions");

  taskItemActions.append(editButton);

  return taskItemActions;
}




/***/ }),

/***/ "./src/components/appMainContent/taskViewer.js":
/*!*****************************************************!*\
  !*** ./src/components/appMainContent/taskViewer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskViewer": () => (/* binding */ taskViewer)
/* harmony export */ });
/* harmony import */ var _task_addNewTaskButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task/addNewTaskButton.js */ "./src/components/appMainContent/task/addNewTaskButton.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");



function taskViewer() {
  let taskViewer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(taskViewer, "task-viewer");

  taskViewer.append((0,_task_addNewTaskButton_js__WEBPACK_IMPORTED_MODULE_0__.addNewTaskButton)());

  return taskViewer;
}




/***/ }),

/***/ "./src/components/controls/formValidationControls.js":
/*!***********************************************************!*\
  !*** ./src/components/controls/formValidationControls.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "missingValueAggressiveValidation": () => (/* binding */ missingValueAggressiveValidation)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


// Aggressively checks and disables the add button if if form field is empty
function missingValueAggressiveValidation(eventListenerNode, buttonToDisable) {
  eventListenerNode.addEventListener("input", (e) => {
    if (e.currentTarget.validity.valid) {
      buttonToDisable.removeAttribute("disabled", "");
    } else {
      buttonToDisable.setAttribute("disabled", "");
    }
  });
}




/***/ }),

/***/ "./src/components/controls/menuController.js":
/*!***************************************************!*\
  !*** ./src/components/controls/menuController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuController": () => (/* binding */ menuController)
/* harmony export */ });
/* harmony import */ var _project_newProjectOverlayForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project/newProjectOverlayForm.js */ "./src/components/project/newProjectOverlayForm.js");
/* harmony import */ var _menubar_tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menubar/tab.js */ "./src/components/menubar/tab.js");
/* harmony import */ var _formValidationControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formValidationControls.js */ "./src/components/controls/formValidationControls.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");





// Event Listeners expect a function reference instead of the function itself.
// To avoid calling function immediately, either bind 'this', create an
// anonymous function, or have a function return a function.
let menubarTransitionendListener = () => {
  let menubar = document.querySelector(".menu-bar");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(menubar, "hide");
};

function addMenubarTransitionendListener(mainContent) {
  mainContent.addEventListener("transitionend", menubarTransitionendListener);
}

function removeMenubarTransitionendListener(mainContent) {
  mainContent.removeEventListener(
    "transitionend",
    menubarTransitionendListener
  );
}

function toggleMenubarVisibility() {
  let menuButton = document.querySelector("header").firstElementChild,
    menubar = document.querySelector(".menu-bar"),
    mainContent = document.querySelector("main");

  menuButton.addEventListener("click", () => {
    if (mainContent.classList.contains("closed")) {
      // Remove listener before starting transition to avoid triggering the
      // listener to hide the menu when the transition ends.
      removeMenubarTransitionendListener(mainContent);

      // Make menu visible before starting transition to show menu.
      (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(menubar, "hide");
    } else {
      // Add listener to set menubar visibility off after it has transitioned
      // outside the viewport.
      addMenubarTransitionendListener(mainContent);
    }
    (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(mainContent, "closed");
  });
}

function displayNewProjectOverlayForm() {
  let newProjectButton = document.querySelector(".new-project-button");

  newProjectButton.addEventListener("click", () => {
    document.body.append((0,_project_newProjectOverlayForm_js__WEBPACK_IMPORTED_MODULE_0__.newProjectOverlayForm)());

    let newProjectNameNode = document.querySelector("#new-project-name"),
      newProjectAddButton = document.querySelector(
        ".new-project-form-add-button"
      );

    cancelNewProjectButtonListener();
    addNewProjectButtonListener();
    (0,_formValidationControls_js__WEBPACK_IMPORTED_MODULE_2__.missingValueAggressiveValidation)(newProjectNameNode, newProjectAddButton);
  });
}

function cancelNewProjectButtonListener() {
  let cancelButton = document.querySelector(".new-project-form-cancel-button");

  cancelButton.addEventListener("click", () => {
    let bodyTag = document.body,
      newProjectOverlay = document.querySelector(".new-project-overlay");

    bodyTag.removeChild(newProjectOverlay);
  });
}

function addProjectTabListener(
  projectName,
  projectDescription,
  projectTabClass
) {
  let projectTab = document.querySelector("." + projectTabClass);

  projectTab.addEventListener("click", () => {
    updateMainContentHeading(projectName);
    updateMainContentProjectDescription(projectDescription);
  });
}

function updateMainContentProjectDescription(projectDescription) {
  let projectDescriptionHeaderSection = document.querySelector(
    ".main-content-project-description"
  );

  projectDescriptionHeaderSection.textContent = projectDescription;
}

function addNewProjectButtonListener() {
  let addNewProjectButton = document.querySelector(
    ".new-project-form-add-button"
  );

  addNewProjectButton.addEventListener("click", () => {
    let bodyTag = document.body,
      newProjectOverlay = document.querySelector(".new-project-overlay"),
      projectList = document.querySelector(".project-list"),
      projectName = document.querySelector("#new-project-name").value,
      projectDescription = document.querySelector(
        "#new-project-description"
      ).value,
      projectSpecificClass =
        "project-" + projectName.toLowerCase().replace(/\s/g, "-"),
      projectTab = (0,_menubar_tab_js__WEBPACK_IMPORTED_MODULE_1__.tab)(projectName, "project-tab", projectSpecificClass),
      mainContentHeading = document.querySelector(".main-content-heading"),
      mainContentProjectDescription = document.querySelector(
        ".main-content-project-description"
      );

    mainContentProjectDescription.textContent = projectDescription;
    mainContentHeading.textContent = projectName;

    projectList.append(projectTab);
    addProjectTabListener(
      projectName,
      projectDescription,
      projectSpecificClass
    );

    bodyTag.removeChild(newProjectOverlay);
  });
}

function updateMainContentHeading(text) {
  let mainContentHeading = document.querySelector(".main-content-heading");

  mainContentHeading.textContent = text;
}

function inboxTabListener() {
  let inboxTab = document.querySelector(".menu-tab-inbox");

  inboxTab.addEventListener("click", () => {
    updateMainContentHeading("Inbox");
    updateMainContentProjectDescription("");
  });
}

function todayTabListener() {
  let todayTab = document.querySelector(".menu-tab-today");

  todayTab.addEventListener("click", () => {
    updateMainContentHeading("Today");
    updateMainContentProjectDescription("");
  });
}

function upcomingTabListener() {
  let upcomingTab = document.querySelector(".menu-tab-upcoming");

  upcomingTab.addEventListener("click", () => {
    updateMainContentHeading("Upcoming");
    updateMainContentProjectDescription("");
  });
}

function completedTabListener() {
  let completedTab = document.querySelector(".menu-tab-completed");

  completedTab.addEventListener("click", () => {
    updateMainContentHeading("Completed");
    updateMainContentProjectDescription("");
  });
}

function initMenuTabListeners() {
  inboxTabListener();
  todayTabListener();
  upcomingTabListener();
  completedTabListener();
}

function menuController() {
  toggleMenubarVisibility();
  initMenuTabListeners();
  displayNewProjectOverlayForm();
}




/***/ }),

/***/ "./src/components/controls/taskController.js":
/*!***************************************************!*\
  !*** ./src/components/controls/taskController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditButtonListener": () => (/* binding */ AddEditButtonListener),
/* harmony export */   "taskController": () => (/* binding */ taskController),
/* harmony export */   "toggleTaskStatus": () => (/* binding */ toggleTaskStatus)
/* harmony export */ });
/* harmony import */ var _appMainContent_task_taskForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appMainContent/task/taskForm.js */ "./src/components/appMainContent/task/taskForm.js");
/* harmony import */ var _appMainContent_task_addNewTaskButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appMainContent/task/addNewTaskButton.js */ "./src/components/appMainContent/task/addNewTaskButton.js");
/* harmony import */ var _appMainContent_task_taskItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appMainContent/task/taskItem.js */ "./src/components/appMainContent/task/taskItem.js");
/* harmony import */ var _formValidationControls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formValidationControls.js */ "./src/components/controls/formValidationControls.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");






function addNewTaskButtonListener() {
  let addNewTaskButton = document.querySelector(".add-new-task-button");

  addNewTaskButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      newTaskForm = (0,_appMainContent_task_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.taskForm)();

    taskViewer.append(newTaskForm);
    taskViewer.removeChild(addNewTaskButton);

    let formTaskHeader = newTaskForm.querySelector("#form-task-header"),
      formAddTaskButton = newTaskForm.querySelector(
        ".form-add-or-save-task-button"
      );

    // Activate listeners for form buttons
    cancelTaskEditListener(newTaskForm);
    addTaskToTaskViewerListener(newTaskForm);
    (0,_formValidationControls_js__WEBPACK_IMPORTED_MODULE_3__.missingValueAggressiveValidation)(formTaskHeader, formAddTaskButton);
  });
}

function cancelTaskEditListener(taskForm, taskItemNumber) {
  let formCancelButton = taskForm.querySelector(".form-cancel-button");

  formCancelButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskHeaderValue = taskForm.querySelector("#form-task-header").value,
      taskDescriptionValue = taskForm.querySelector(
        "#form-task-description"
      ).value;

    // Checks to see if user is editing a task by checking if a
    // taskItemNumber exists.
    if (taskItemNumber !== undefined) {
      taskViewer.insertBefore(
        (0,_appMainContent_task_taskItem_js__WEBPACK_IMPORTED_MODULE_2__.taskItem)(taskHeaderValue, taskDescriptionValue, taskItemNumber),
        taskForm.nextSibling
      );
    }

    taskForm.remove();
    checkNewTaskButtonExist();
  });
}

function addTaskToTaskViewerListener(taskForm, taskItemNumber) {
  let formAddOrSaveTaskButton = taskForm.querySelector(
    ".form-add-or-save-task-button"
  );

  formAddOrSaveTaskButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskHeaderValue = taskForm.querySelector("#form-task-header").value,
      taskDescriptionValue = taskForm.querySelector(
        "#form-task-description"
      ).value;

    // Only enters if the user is creating a new task.
    // Otherwise, the user is editing and saving a task and a
    // new task item # is not needed.
    if (!taskItemNumber) {
      taskItemNumber = document.getElementsByClassName("task-item").length;
    }

    taskViewer.insertBefore(
      (0,_appMainContent_task_taskItem_js__WEBPACK_IMPORTED_MODULE_2__.taskItem)(taskHeaderValue, taskDescriptionValue, taskItemNumber),
      taskForm.nextSibling
    );
    taskForm.remove();
    checkNewTaskButtonExist();
  });
}

function AddEditButtonListener(editButton, taskItemNumber) {
  editButton.addEventListener("click", () => {
    let taskViewer = document.querySelector(".task-viewer"),
      taskItemToEdit = taskViewer.querySelector(
        `[data-task-item="${taskItemNumber}"]`
      ),
      taskHeaderValue =
        taskItemToEdit.querySelector(".task-header").textContent,
      taskDescriptionValue =
        taskItemToEdit.querySelector(".task-description").textContent,
      taskFormToInsert = (0,_appMainContent_task_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.taskForm)(
        "Save",
        taskHeaderValue,
        taskDescriptionValue
      ),
      formTaskHeader = taskFormToInsert.querySelector("#form-task-header"),
      formAddTaskButton = taskFormToInsert.querySelector(
        ".form-add-or-save-task-button"
      );
    
    taskViewer.insertBefore(taskFormToInsert, taskItemToEdit.nextSibling);
    taskViewer.removeChild(taskItemToEdit);

    cancelTaskEditListener(taskFormToInsert, taskItemNumber);
    addTaskToTaskViewerListener(taskFormToInsert, taskItemNumber);
    (0,_formValidationControls_js__WEBPACK_IMPORTED_MODULE_3__.missingValueAggressiveValidation)(formTaskHeader, formAddTaskButton);
  });
}

function toggleTaskStatus(checkbox, taskItemNumber) {
  checkbox.addEventListener("click", () => {
    let taskItem = document.querySelector(
        `[data-task-item = '${taskItemNumber}']`
      ),
      checkmark = checkbox.firstChild;

    (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__.toggleClass)(taskItem, "completed");
    (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__.toggleClass)(checkmark, "fade-in-out");
  });
}

function checkNewTaskButtonExist() {
  let taskViewer = document.querySelector(".task-viewer");

  if (!taskViewer.contains(document.querySelector(".add-task-button"))) {
    taskViewer.append((0,_appMainContent_task_addNewTaskButton_js__WEBPACK_IMPORTED_MODULE_1__.addNewTaskButton)());
    addNewTaskButtonListener();
  }
}

function taskController() {
  // initialize event listener on app load
  addNewTaskButtonListener();
}




/***/ }),

/***/ "./src/components/generalButtons/iconButtonMedium.js":
/*!***********************************************************!*\
  !*** ./src/components/generalButtons/iconButtonMedium.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iconButtonMedium": () => (/* binding */ iconButtonMedium)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function iconButtonMedium(imgSrc, altText) {
  let iconButtonMedium = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  icon.setAttribute("src", imgSrc);
  icon.setAttribute("alt", altText);

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(iconButtonMedium, 'icon-button-medium');

  iconButtonMedium.append(icon);

  return iconButtonMedium;
}




/***/ }),

/***/ "./src/components/generalButtons/textButton.js":
/*!*****************************************************!*\
  !*** ./src/components/generalButtons/textButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textButton": () => (/* binding */ textButton)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function textButton(text, ...cssClass) {
  let button = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");

  button.textContent = text;
  button.setAttribute("type", "button");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(button, ...cssClass);

  return button;
}




/***/ }),

/***/ "./src/components/helper/helper.js":
/*!*****************************************!*\
  !*** ./src/components/helper/helper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass)
/* harmony export */ });
function createElement(element) {
  return document.createElement(element);
}

function addClass(element, ...cssClasses) {
  element.classList.add(...cssClasses);
}

function removeClass(element, ...cssClass) {
  element.classList.remove(...cssClass);
}

function toggleClass(element, cssClass) {
  element.classList.toggle(cssClass);
}




/***/ }),

/***/ "./src/components/menubar/menuTabs.js":
/*!********************************************!*\
  !*** ./src/components/menubar/menuTabs.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuTabs": () => (/* binding */ menuTabs)
/* harmony export */ });
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.js */ "./src/components/menubar/tab.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");



function menuTabs() {
  let menuTabs = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    tabArr = ["Inbox", "Today", "Upcoming", "Completed"];

  for (let i = 0; i < 4; i++) {
    let tabSpecificClass = "menu-tab-" + tabArr[i].toLowerCase();
    menuTabs.append((0,_tab_js__WEBPACK_IMPORTED_MODULE_0__.tab)(tabArr[i], "tab", tabSpecificClass));
  }

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(menuTabs, "menu-tabs");

  return menuTabs;
}




/***/ }),

/***/ "./src/components/menubar/menubar.js":
/*!*******************************************!*\
  !*** ./src/components/menubar/menubar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menubar": () => (/* binding */ menubar)
/* harmony export */ });
/* harmony import */ var _menuTabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuTabs.js */ "./src/components/menubar/menuTabs.js");
/* harmony import */ var _projectSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectSection.js */ "./src/components/menubar/projectSection.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");




function menubar() {
  let menubar = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    linebreak = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(menubar, "menu-bar");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(linebreak, "linebreak");

  menubar.append((0,_menuTabs_js__WEBPACK_IMPORTED_MODULE_0__.menuTabs)(), linebreak, (0,_projectSection_js__WEBPACK_IMPORTED_MODULE_1__.projectSection)());

  return menubar;
}




/***/ }),

/***/ "./src/components/menubar/projectList.js":
/*!***********************************************!*\
  !*** ./src/components/menubar/projectList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function projectList() {
  let projectList = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(projectList, "project-list");

  return projectList;
}




/***/ }),

/***/ "./src/components/menubar/projectSection.js":
/*!**************************************************!*\
  !*** ./src/components/menubar/projectSection.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectSection": () => (/* binding */ projectSection)
/* harmony export */ });
/* harmony import */ var _generalButtons_iconButtonMedium_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalButtons/iconButtonMedium.js */ "./src/components/generalButtons/iconButtonMedium.js");
/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList.js */ "./src/components/menubar/projectList.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _icons_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/plus.svg */ "./src/icons/plus.svg");





function projectSection() {
  let projectSection = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    projectHeader = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    heading = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("h2"),
    newProjectButton = (0,_generalButtons_iconButtonMedium_js__WEBPACK_IMPORTED_MODULE_0__.iconButtonMedium)(_icons_plus_svg__WEBPACK_IMPORTED_MODULE_3__, "Add new project icon");

  heading.textContent = "Projects";

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(newProjectButton, "new-project-button");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(projectHeader, "project-header");
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(projectSection, "project-section");

  projectHeader.append(heading, newProjectButton);
  projectSection.append(projectHeader, (0,_projectList_js__WEBPACK_IMPORTED_MODULE_1__.projectList)());

  return projectSection;
}




/***/ }),

/***/ "./src/components/menubar/tab.js":
/*!***************************************!*\
  !*** ./src/components/menubar/tab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tab": () => (/* binding */ tab)
/* harmony export */ });
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");


function tab(text, ...cssClass) {
  let tab = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

  tab.textContent = text;
  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(tab, ...cssClass);

  return tab;
}




/***/ }),

/***/ "./src/components/project/newProjectOverlayForm.js":
/*!*********************************************************!*\
  !*** ./src/components/project/newProjectOverlayForm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectOverlayForm": () => (/* binding */ newProjectOverlayForm)
/* harmony export */ });
/* harmony import */ var _generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generalButtons/textButton.js */ "./src/components/generalButtons/textButton.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper.js */ "./src/components/helper/helper.js");



function formHeader() {
  let headerContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    header = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2");

  header.textContent = "New Project";

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(headerContainer, "new-project-header-container");
  headerContainer.append(header);

  return headerContainer;
}

function projectNameFormField() {
  let projectNameContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    projectNameLabel = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label"),
    projectNameInput = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("input");

  projectNameLabel.textContent = "Project Name:";
  projectNameLabel.setAttribute("for", "new-project-name");
  projectNameInput.setAttribute("id", "new-project-name");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("name", "newProjectName");
  projectNameInput.setAttribute("maxlength", "150");
  projectNameInput.setAttribute("required", "");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(projectNameContainer, "new-project-name-form-field");

  projectNameContainer.append(projectNameLabel, projectNameInput);

  return projectNameContainer;
}

function projectDescriptionFormField() {
  let projectDescriptionContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    projectDescriptionLabel = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("label"),
    projectDescriptionTextarea = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("textarea");

  projectDescriptionLabel.textContent = "Project Description:";
  projectDescriptionLabel.setAttribute("for", "new-project-description");
  projectDescriptionTextarea.setAttribute("id", "new-project-description");
  projectDescriptionTextarea.setAttribute("name", "newProjectDescription");
  projectDescriptionTextarea.setAttribute("rows", "3");
  projectDescriptionTextarea.setAttribute("maxlength", "300");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(projectDescriptionContainer, "new-project-description-form-field");

  projectDescriptionContainer.append(
    projectDescriptionLabel,
    projectDescriptionTextarea
  );

  return projectDescriptionContainer;
}

function projectFormButtons() {
  let buttonsContainer = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    cancelNewProjectButton = (0,_generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_0__.textButton)(
      "Cancel",
      "new-project-form-cancel-button"
    ),
    addNewProjectButton = (0,_generalButtons_textButton_js__WEBPACK_IMPORTED_MODULE_0__.textButton)(
      "Add New Project",
      "new-project-form-add-button"
    );

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(buttonsContainer, "new-project-form-buttons");
  addNewProjectButton.setAttribute("disabled", "");
  buttonsContainer.append(cancelNewProjectButton, addNewProjectButton);

  return buttonsContainer;
}

function newProjectForm() {
  let newProjectForm = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("form"),
    newProjectButtons = projectFormButtons();

  newProjectForm.setAttribute("action", "");
  newProjectForm.setAttribute("method", "post");
  newProjectForm.setAttribute("name", "newProjectForm");
  newProjectForm.setAttribute("novalidate", "");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(newProjectForm, "new-project-form");

  newProjectForm.append(
    formHeader(),
    projectNameFormField(),
    projectDescriptionFormField(),
    newProjectButtons
  );

  return newProjectForm;
}

function newProjectOverlayForm() {
  let newProjectOverlay = (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div");

  (0,_helper_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(newProjectOverlay, "new-project-overlay");
  newProjectOverlay.append(newProjectForm());

  return newProjectOverlay;
}




/***/ }),

/***/ "./src/icons/check.svg":
/*!*****************************!*\
  !*** ./src/icons/check.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddce2e1e5ef60024f029.svg";

/***/ }),

/***/ "./src/icons/edit.svg":
/*!****************************!*\
  !*** ./src/icons/edit.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d317290131028fe10cf.svg";

/***/ }),

/***/ "./src/icons/light-theme.svg":
/*!***********************************!*\
  !*** ./src/icons/light-theme.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83fa0c9fe1ff51982b36.svg";

/***/ }),

/***/ "./src/icons/menu.svg":
/*!****************************!*\
  !*** ./src/icons/menu.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d4061552fac064ed076.svg";

/***/ }),

/***/ "./src/icons/plus.svg":
/*!****************************!*\
  !*** ./src/icons/plus.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/image/Todo-ist Logo.svg":
/*!*************************************!*\
  !*** ./src/image/Todo-ist Logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb57796f7b18f3c7c87e.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_appHeader_appHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/appHeader/appHeader.js */ "./src/components/appHeader/appHeader.js");
/* harmony import */ var _components_appMainContent_appMainContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/appMainContent/appMainContent.js */ "./src/components/appMainContent/appMainContent.js");
/* harmony import */ var _components_controls_taskController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controls/taskController.js */ "./src/components/controls/taskController.js");
/* harmony import */ var _components_controls_menuController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/controls/menuController */ "./src/components/controls/menuController.js");
/* harmony import */ var _components_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/helper/helper.js */ "./src/components/helper/helper.js");
/* harmony import */ var _components_menubar_menubar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menubar/menubar.js */ "./src/components/menubar/menubar.js");
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stylesheets/style.css */ "./src/stylesheets/style.css");








function initControllers() {
  (0,_components_controls_taskController_js__WEBPACK_IMPORTED_MODULE_2__.taskController)();
  (0,_components_controls_menuController__WEBPACK_IMPORTED_MODULE_3__.menuController)();
}

function renderPage() {
  let bodyTag = document.body,
    mainTag = (0,_components_helper_helper_js__WEBPACK_IMPORTED_MODULE_4__.createElement)("main");

  mainTag.append((0,_components_menubar_menubar_js__WEBPACK_IMPORTED_MODULE_5__.menubar)(), (0,_components_appMainContent_appMainContent_js__WEBPACK_IMPORTED_MODULE_1__.appMainContent)());
  bodyTag.append((0,_components_appHeader_appHeader_js__WEBPACK_IMPORTED_MODULE_0__.appHeader)(), mainTag);
}

(function initApp() {
  renderPage();
  initControllers();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFVBQVUsc0JBQXNCLGdCQUFnQix1QkFBdUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsR0FBRyxZQUFZLDJCQUEyQixvQkFBb0IsbUNBQW1DLGtCQUFrQixtQ0FBbUMsR0FBRyxVQUFVLFlBQVksa0JBQWtCLDZCQUE2QixnQ0FBZ0MsR0FBRyxXQUFXLGdCQUFnQixHQUFHLGNBQWMsZ0JBQWdCLGlCQUFpQixtQkFBbUIsR0FBRyxTQUFTLGdCQUFnQixtQkFBbUIsR0FBRyx5QkFBeUIsa0JBQWtCLHdCQUF3QixnQkFBZ0IsR0FBRywrQkFBK0Isb0JBQW9CLHVCQUF1QixHQUFHLDhCQUE4Qix1QkFBdUIsR0FBRyx5QkFBeUIsaUJBQWlCLGdCQUFnQixHQUFHLG1CQUFtQixpQkFBaUIsZ0JBQWdCLEdBQUcsa0JBQWtCLGlCQUFpQixrQkFBa0Isd0JBQXdCLHFCQUFxQixnQkFBZ0IsR0FBRyx3QkFBd0IsaUJBQWlCLHVCQUF1QixHQUFHLG1CQUFtQiwwQkFBMEIsYUFBYSxnQkFBZ0IsbUNBQW1DLG9CQUFvQix3QkFBd0IsZ0JBQWdCLEdBQUcsZUFBZSxpQkFBaUIsa0JBQWtCLDJCQUEyQixrQ0FBa0MsR0FBRyxnQkFBZ0IsZ0JBQWdCLG9CQUFvQixHQUFHLFVBQVUsa0JBQWtCLEdBQUcscUNBQXFDLGdDQUFnQyxHQUFHLGdCQUFnQixlQUFlLHNCQUFzQiwrQkFBK0IsR0FBRyxxQkFBcUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsMEJBQTBCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsR0FBRyx5QkFBeUIsaUJBQWlCLGdCQUFnQixHQUFHLGtCQUFrQixnQkFBZ0IsMkJBQTJCLEdBQUcsMEJBQTBCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLFdBQVcsWUFBWSxpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IseUNBQXlDLEdBQUcsdUJBQXVCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLG9CQUFvQix3QkFBd0IsR0FBRywrQkFBK0IseUJBQXlCLEdBQUcsbUJBQW1CLFlBQVksa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRywwQkFBMEIsaUJBQWlCLGdCQUFnQixHQUFHLGtCQUFrQixZQUFZLGdCQUFnQixHQUFHLDBCQUEwQix1QkFBdUIsR0FBRyxnQkFBZ0IsZ0JBQWdCLGtCQUFrQixtQ0FBbUMsNEJBQTRCLDBCQUEwQiw0QkFBNEIsR0FBRyxnQ0FBZ0Msa0JBQWtCLHdCQUF3QixjQUFjLEdBQUcsa0JBQWtCLDBCQUEwQix3QkFBd0IsR0FBRyx1QkFBdUIsbUJBQW1CLEdBQUcsZUFBZSxpQkFBaUIsZ0JBQWdCLDJCQUEyQix1QkFBdUIsdUJBQXVCLEdBQUcsZ0JBQWdCLGtDQUFrQyxnQkFBZ0IsR0FBRyxrQkFBa0IsZUFBZSw2QkFBNkIsR0FBRyx3QkFBd0IsZUFBZSxHQUFHLGFBQWEsa0NBQWtDLEdBQUcsV0FBVyx1QkFBdUIscUJBQXFCLEdBQUcsU0FBUyw0RkFBNEYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLDZCQUE2QixjQUFjLGVBQWUsMkJBQTJCLEdBQUcsVUFBVSxzQkFBc0IsZ0JBQWdCLHVCQUF1QixrQkFBa0IsMkJBQTJCLGlCQUFpQixHQUFHLFlBQVksMkJBQTJCLG9CQUFvQixtQ0FBbUMsa0JBQWtCLG1DQUFtQyxHQUFHLFVBQVUsWUFBWSxrQkFBa0IsNkJBQTZCLGdDQUFnQyxHQUFHLFdBQVcsZ0JBQWdCLEdBQUcsY0FBYyxnQkFBZ0IsaUJBQWlCLG1CQUFtQixHQUFHLFNBQVMsZ0JBQWdCLG1CQUFtQixHQUFHLHlCQUF5QixrQkFBa0Isd0JBQXdCLGdCQUFnQixHQUFHLCtCQUErQixvQkFBb0IsdUJBQXVCLEdBQUcsOEJBQThCLHVCQUF1QixHQUFHLHlCQUF5QixpQkFBaUIsZ0JBQWdCLEdBQUcsbUJBQW1CLGlCQUFpQixnQkFBZ0IsR0FBRyxrQkFBa0IsaUJBQWlCLGtCQUFrQix3QkFBd0IscUJBQXFCLGdCQUFnQixHQUFHLHdCQUF3QixpQkFBaUIsdUJBQXVCLEdBQUcsbUJBQW1CLDBCQUEwQixhQUFhLGdCQUFnQixtQ0FBbUMsb0JBQW9CLHdCQUF3QixnQkFBZ0IsR0FBRyxlQUFlLGlCQUFpQixrQkFBa0IsMkJBQTJCLGtDQUFrQyxHQUFHLGdCQUFnQixnQkFBZ0Isb0JBQW9CLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyxxQ0FBcUMsZ0NBQWdDLEdBQUcsZ0JBQWdCLGVBQWUsc0JBQXNCLCtCQUErQixHQUFHLHFCQUFxQixrQkFBa0IsbUNBQW1DLHdCQUF3QiwwQkFBMEIsR0FBRyxzQkFBc0Isa0JBQWtCLDJCQUEyQixHQUFHLHlCQUF5QixpQkFBaUIsZ0JBQWdCLEdBQUcsa0JBQWtCLGdCQUFnQiwyQkFBMkIsR0FBRywwQkFBMEIsaUJBQWlCLGdCQUFnQix1QkFBdUIsV0FBVyxZQUFZLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3Qix5Q0FBeUMsR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsb0JBQW9CLHdCQUF3QixHQUFHLCtCQUErQix5QkFBeUIsR0FBRyxtQkFBbUIsWUFBWSxrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLDBCQUEwQixpQkFBaUIsZ0JBQWdCLEdBQUcsa0JBQWtCLFlBQVksZ0JBQWdCLEdBQUcsMEJBQTBCLHVCQUF1QixHQUFHLGdCQUFnQixnQkFBZ0Isa0JBQWtCLG1DQUFtQyw0QkFBNEIsMEJBQTBCLDRCQUE0QixHQUFHLGdDQUFnQyxrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxrQkFBa0IsMEJBQTBCLHdCQUF3QixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyxlQUFlLGlCQUFpQixnQkFBZ0IsMkJBQTJCLHVCQUF1Qix1QkFBdUIsR0FBRyxnQkFBZ0Isa0NBQWtDLGdCQUFnQixHQUFHLGtCQUFrQixlQUFlLDZCQUE2QixHQUFHLHdCQUF3QixlQUFlLEdBQUcsYUFBYSxrQ0FBa0MsR0FBRyxXQUFXLHVCQUF1QixxQkFBcUIsR0FBRyxxQkFBcUI7QUFDenFSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDa0M7QUFDWDtBQUNsQjtBQUNROztBQUVwRDtBQUNBLGtCQUFrQixnRUFBYTtBQUMvQixpQkFBaUIscUZBQWdCLENBQUMsNENBQVE7QUFDMUMsa0JBQWtCLHFGQUFnQixDQUFDLG1EQUFTOztBQUU1QyxFQUFFLDJEQUFRO0FBQ1YsRUFBRSwyREFBUTtBQUNWLEVBQUUsMkRBQVE7QUFDViwrQkFBK0Isb0RBQU87O0FBRXRDO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CeUM7QUFDVjs7QUFFcEQ7QUFDQSx5QkFBeUIsZ0VBQWE7QUFDdEMsY0FBYyxnRUFBYTtBQUMzQixnQkFBZ0IsZ0VBQWE7O0FBRTdCOztBQUVBLGdDQUFnQyxxREFBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJEQUFROztBQUVWOztBQUVBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QndDO0FBQ2Q7QUFDaUI7O0FBRTlEO0FBQ0EsdUJBQXVCLGdFQUFhO0FBQ3BDLGdCQUFnQixnRUFBYTs7QUFFN0IsRUFBRSwyREFBUTtBQUNWLEVBQUUsMkRBQVE7O0FBRVYsd0JBQXdCLHdFQUFpQixlQUFlLDBEQUFVOztBQUVsRTtBQUNBOztBQUUwQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCb0M7O0FBRTlEO0FBQ0EsMEJBQTBCLGdFQUFhO0FBQ3ZDLHVCQUF1QixnRUFBYTtBQUNwQyxjQUFjLGdFQUFhO0FBQzNCLHlCQUF5QixnRUFBYTs7QUFFdEMsRUFBRSwyREFBUTtBQUNWLEVBQUUsMkRBQVE7QUFDVixFQUFFLDJEQUFRO0FBQ1YsRUFBRSwyREFBUTs7QUFFVjtBQUNBOztBQUVBO0FBQ0E7O0FBRTZCOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJvQzs7QUFFakU7QUFDQSx5QkFBeUIsZ0VBQWE7O0FBRXRDO0FBQ0EsRUFBRSwyREFBUTs7QUFFVjtBQUNBOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHdDO0FBQ0g7QUFDWjs7QUFFckQ7QUFDQSwwQkFBMEIsZ0VBQWE7QUFDdkMsZUFBZSxnRUFBYTtBQUM1QixnQkFBZ0IsZ0VBQWE7O0FBRTdCLGdDQUFnQyw2Q0FBYTtBQUM3Qzs7QUFFQSxFQUFFLDJEQUFRO0FBQ1YsRUFBRSwyREFBUTtBQUNWLEVBQUUsNkVBQWdCOztBQUVsQjtBQUNBOztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCNEM7QUFDQzs7QUFFakU7QUFDQSx3QkFBd0IsZ0VBQWE7QUFDckMsa0JBQWtCLGdFQUFhO0FBQy9CLHVCQUF1QixnRUFBYTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBUTs7QUFFVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLGdFQUFhO0FBQzFDLHVCQUF1QixnRUFBYTtBQUNwQyw0QkFBNEIsZ0VBQWE7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnRUFBYTtBQUNuQyxtQkFBbUIsZ0VBQWE7QUFDaEM7QUFDQTtBQUNBLHNCQUFzQixnRUFBYTtBQUNuQyx1QkFBdUIseUVBQVU7QUFDakMsMEJBQTBCLHlFQUFVO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJEQUFRO0FBQ1YsRUFBRSwyREFBUTs7QUFFVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFNkM7O0FBRWpFO0FBQ0EsaUNBQWlDLGdFQUFhO0FBQzlDLHdCQUF3QixnRUFBYTtBQUNyQyw2QkFBNkIsZ0VBQWE7O0FBRTFDO0FBQ0E7O0FBRUEsRUFBRSwyREFBUTtBQUNWLEVBQUUsMkRBQVE7O0FBRVY7O0FBRUE7QUFDQTs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnFCO0FBQ0E7QUFDYztBQUNVOztBQUVqRTtBQUNBLGlCQUFpQixnRUFBYTtBQUM5QixnQ0FBZ0MsZ0VBQWE7O0FBRTdDLEVBQUUsMkRBQVE7QUFDVixFQUFFLDJEQUFROztBQUVWOztBQUVBO0FBQ0EsSUFBSSxzREFBUTtBQUNaLElBQUksc0RBQVE7QUFDWjtBQUNBLDZDQUE2QyxvRUFBZTs7QUFFNUQ7QUFDQTs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QndEO0FBQ0g7QUFDUjtBQUNsQjs7QUFFL0M7QUFDQSx3QkFBd0IsZ0VBQWE7QUFDckMsaUJBQWlCLHFGQUFnQjtBQUNqQyxNQUFNLDRDQUFRO0FBQ2Q7QUFDQTs7QUFFQSxFQUFFLGtGQUFxQjs7QUFFdkIsRUFBRSwyREFBUTs7QUFFVjs7QUFFQTtBQUNBOztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQm1DO0FBQ0E7O0FBRTlEO0FBQ0EsbUJBQW1CLGdFQUFhOztBQUVoQyxFQUFFLDJEQUFROztBQUVWLG9CQUFvQiwyRUFBZ0I7O0FBRXBDO0FBQ0E7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7O0FDYnNDOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRTRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmdDO0FBQ3BDO0FBQ3VDO0FBQ0o7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUFXO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSw4REFBVztBQUNqQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFXO0FBQ2YsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsd0ZBQXFCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw0RkFBZ0M7QUFDcEMsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBRztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekxvQztBQUNnQjtBQUNoQjtBQUNpQjtBQUM3Qjs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDBFQUFROztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNEZBQWdDO0FBQ3BDLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMEVBQVE7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sMEVBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEVBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw0RkFBZ0M7QUFDcEMsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0E7O0FBRUEsSUFBSSw4REFBVztBQUNmLElBQUksOERBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwRkFBZ0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVtRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJTDs7QUFFOUQ7QUFDQSx5QkFBeUIsZ0VBQWE7QUFDdEMsV0FBVyxnRUFBYTs7QUFFeEI7QUFDQTs7QUFFQSxFQUFFLDJEQUFROztBQUVWOztBQUVBO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJrQzs7QUFFOUQ7QUFDQSxlQUFlLGdFQUFhOztBQUU1QjtBQUNBO0FBQ0EsRUFBRSwyREFBUTs7QUFFVjtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFNkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEI5QjtBQUMrQjs7QUFFOUQ7QUFDQSxpQkFBaUIsZ0VBQWE7QUFDOUI7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQSxvQkFBb0IsNENBQUc7QUFDdkI7O0FBRUEsRUFBRSwyREFBUTs7QUFFVjtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJxQjtBQUNZO0FBQ1M7O0FBRTlEO0FBQ0EsZ0JBQWdCLGdFQUFhO0FBQzdCLGdCQUFnQixnRUFBYTs7QUFFN0IsRUFBRSwyREFBUTtBQUNWLEVBQUUsMkRBQVE7O0FBRVYsaUJBQWlCLHNEQUFRLGVBQWUsa0VBQWM7O0FBRXREO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7O0FDaEIyQzs7QUFFOUQ7QUFDQSxvQkFBb0IsZ0VBQWE7O0FBRWpDLEVBQUUsMkRBQVE7O0FBRVY7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWa0Q7QUFDMUI7QUFDZTtBQUNsQjs7QUFFNUM7QUFDQSx1QkFBdUIsZ0VBQWE7QUFDcEMsb0JBQW9CLGdFQUFhO0FBQ2pDLGNBQWMsZ0VBQWE7QUFDM0IsdUJBQXVCLHFGQUFnQixDQUFDLDRDQUFROztBQUVoRDs7QUFFQSxFQUFFLDJEQUFRO0FBQ1YsRUFBRSwyREFBUTtBQUNWLEVBQUUsMkRBQVE7O0FBRVY7QUFDQSx1Q0FBdUMsNERBQVc7O0FBRWxEO0FBQ0E7O0FBRTBCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJvQzs7QUFFOUQ7QUFDQSxZQUFZLGdFQUFhOztBQUV6QjtBQUNBLEVBQUUsMkRBQVE7O0FBRVY7QUFDQTs7QUFFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYOEM7QUFDQzs7QUFFOUQ7QUFDQSx3QkFBd0IsZ0VBQWE7QUFDckMsYUFBYSxnRUFBYTs7QUFFMUI7O0FBRUEsRUFBRSwyREFBUTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsZ0VBQWE7QUFDMUMsdUJBQXVCLGdFQUFhO0FBQ3BDLHVCQUF1QixnRUFBYTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwyREFBUTs7QUFFVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGdFQUFhO0FBQ2pELDhCQUE4QixnRUFBYTtBQUMzQyxpQ0FBaUMsZ0VBQWE7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJEQUFROztBQUVWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsZ0VBQWE7QUFDdEMsNkJBQTZCLHlFQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5RUFBVTtBQUNwQztBQUNBO0FBQ0E7O0FBRUEsRUFBRSwyREFBUTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixnRUFBYTtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLDJEQUFROztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGdFQUFhOztBQUV2QyxFQUFFLDJEQUFRO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6R2pDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0U7QUFDZTtBQUNOO0FBQ0g7QUFDRTtBQUNkO0FBQ3pCOztBQUVqQztBQUNBLEVBQUUsc0ZBQWM7QUFDaEIsRUFBRSxtRkFBYztBQUNoQjs7QUFFQTtBQUNBO0FBQ0EsY0FBYywyRUFBYTs7QUFFM0IsaUJBQWlCLHVFQUFPLElBQUksNEZBQWM7QUFDMUMsaUJBQWlCLDZFQUFTO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLmNzcz9iZmZjIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXBwSGVhZGVyL2FwcEhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBIZWFkZXIvYXBwTG9nby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC9hcHBNYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC9tYWluQ29udGVudEhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC90YXNrL2FkZE5ld1Rhc2tCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXBwTWFpbkNvbnRlbnQvdGFzay9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC90YXNrL3Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcE1haW5Db250ZW50L3Rhc2svdGFza0luZm8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXBwTWFpbkNvbnRlbnQvdGFzay90YXNrSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC90YXNrL3Rhc2tJdGVtQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hcHBNYWluQ29udGVudC90YXNrVmlld2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL2Zvcm1WYWxpZGF0aW9uQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvbWVudUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvdGFza0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbEJ1dHRvbnMvaWNvbkJ1dHRvbk1lZGl1bS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsQnV0dG9ucy90ZXh0QnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2hlbHBlci9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWVudWJhci9tZW51VGFicy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tZW51YmFyL21lbnViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWVudWJhci9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tZW51YmFyL3Byb2plY3RTZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21lbnViYXIvdGFiLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QvbmV3UHJvamVjdE92ZXJsYXlGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmFwcC1sb2dvLWNvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDIuMjVyZW07XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIgPiBoMiB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbi5pY29uLWJ1dHRvbi1tZWRpdW0ge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxufVxcblxcbi50aGVtZS1idXR0b24ge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxufVxcblxcbi52aWV3LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBnYXA6IDAuMXJlbTtcXG59XFxuXFxuLnZpZXctYnV0dG9uID4gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLnZpZXctb3B0aW9ucyB7XFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubWVudS1iYXIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1lbnUtdGFicyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLnRhYiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udGFiOmhvdmVyLFxcbi5wcm9qZWN0LXRhYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5saW5lYnJlYWsge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3Qtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtdGFiIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW92ZXJsYXkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtLWJ1dHRvbnMge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGVudC1oZWFkZXIge1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLXZpZXdlciB7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtbmV3LXRhc2stYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2hlY2tCb3hUYXNrSW5mb0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5mYWRlLWluLW91dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbn1cXG5cXG4uZmFkZS1pbi1vdXQ6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNsb3NlZCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMHB4KTtcXG59XFxuXFxuLmhpZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7OztrQ0FHZ0M7RUFDaEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsT0FBTztFQUNQLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYXBwLWxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIgPiBpbWcge1xcbiAgaGVpZ2h0OiAyLjI1cmVtO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uYXBwLWxvZ28tY29udGFpbmVyID4gaDIge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbn1cXG5cXG4uaWNvbi1idXR0b24tbWVkaXVtIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4udGhlbWUtYnV0dG9uIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4udmlldy1idXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgZ2FwOiAwLjFyZW07XFxufVxcblxcbi52aWV3LWJ1dHRvbiA+IGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi52aWV3LW9wdGlvbnMge1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm1lbnUtYmFyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tZW51LXRhYnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi50YWIge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRhYjpob3ZlcixcXG4ucHJvamVjdC10YWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4ubGluZWJyZWFrIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LXRhYiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcblxcbi5uZXctcHJvamVjdC1vdmVybGF5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybS1idXR0b25zIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQtaGVhZGVyIHtcXG4gIGhlaWdodDogNzVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay12aWV3ZXIge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLW5ldy10YXNrLWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNoZWNrQm94VGFza0luZm9Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDkwJTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uZmFkZS1pbi1vdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXG59XFxuXFxuLmZhZGUtaW4tb3V0OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jbG9zZWQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDBweCk7XFxufVxcblxcbi5oaWRlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYXBwTG9nbyB9IGZyb20gXCIuL2FwcExvZ28uanNcIjtcbmltcG9ydCB7IGljb25CdXR0b25NZWRpdW0gfSBmcm9tIFwiLi4vZ2VuZXJhbEJ1dHRvbnMvaWNvbkJ1dHRvbk1lZGl1bS5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gXCIuLi8uLi9pY29ucy9tZW51LnN2Z1wiO1xuaW1wb3J0IGxpZ2h0SWNvbiBmcm9tIFwiLi4vLi4vaWNvbnMvbGlnaHQtdGhlbWUuc3ZnXCI7XG5cbmZ1bmN0aW9uIGFwcEhlYWRlcigpIHtcbiAgbGV0IGFwcEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiksXG4gICAgbWVudUJ1dHRvbiA9IGljb25CdXR0b25NZWRpdW0obWVudUljb24sIFwiTWVudSBpY29uXCIpLFxuICAgIHRoZW1lQnV0dG9uID0gaWNvbkJ1dHRvbk1lZGl1bShsaWdodEljb24sIFwiTGlnaHQgdGhlbWUgaWNvblwiKTtcblxuICBhZGRDbGFzcyhtZW51QnV0dG9uLCBcIm1lbnUtYnV0dG9uXCIpO1xuICBhZGRDbGFzcyh0aGVtZUJ1dHRvbiwgXCJ0aGVtZS1idXR0b25cIik7XG4gIGFkZENsYXNzKGFwcEhlYWRlciwgXCJhcHBIZWFkZXJcIik7XG4gIGFwcEhlYWRlci5hcHBlbmQobWVudUJ1dHRvbiwgYXBwTG9nbygpLCB0aGVtZUJ1dHRvbik7XG5cbiAgcmV0dXJuIGFwcEhlYWRlcjtcbn1cblxuZXhwb3J0IHsgYXBwSGVhZGVyIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5pbXBvcnQgbG9nb0ltZyBmcm9tIFwiLi4vLi4vaW1hZ2UvVG9kby1pc3QgTG9nby5zdmdcIjtcblxuZnVuY3Rpb24gYXBwTG9nbygpIHtcbiAgbGV0IGFwcExvZ29Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGFwcE5hbWUgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiksXG4gICAgbG9nb0ltYWdlID0gY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBhcHBOYW1lLnRleHRDb250ZW50ID0gXCJEbyBJdFwiO1xuXG4gIGxvZ29JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbG9nb0ltZyk7XG4gIGxvZ29JbWFnZS5zZXRBdHRyaWJ1dGUoXG4gICAgXCJhbHRcIixcbiAgICBcIlRvZG8taXN0IExvZ28uIENsaXBib2FyZHMgd2l0aCBjaGVja21hcmtzIG9uIHRoZW0uXCJcbiAgKTtcblxuICBhZGRDbGFzcyhhcHBMb2dvQ29udGFpbmVyLCBcImFwcC1sb2dvLWNvbnRhaW5lclwiKTtcblxuICBhcHBMb2dvQ29udGFpbmVyLmFwcGVuZChsb2dvSW1hZ2UsIGFwcE5hbWUpO1xuXG4gIHJldHVybiBhcHBMb2dvQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBhcHBMb2dvIH07XG4iLCJpbXBvcnQgeyBtYWluQ29udGVudEhlYWRlciB9IGZyb20gXCIuL21haW5Db250ZW50SGVhZGVyLmpzXCI7XG5pbXBvcnQgeyB0YXNrVmlld2VyIH0gZnJvbSBcIi4vdGFza1ZpZXdlci5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBhcHBNYWluQ29udGVudCgpIHtcbiAgbGV0IGFwcE1haW5Db250ZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBsaW5lYnJlYWsgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZENsYXNzKGxpbmVicmVhaywgXCJsaW5lYnJlYWtcIik7XG4gIGFkZENsYXNzKGFwcE1haW5Db250ZW50LCBcIm1haW4tY29udGVudFwiKTtcblxuICBhcHBNYWluQ29udGVudC5hcHBlbmQobWFpbkNvbnRlbnRIZWFkZXIoKSwgbGluZWJyZWFrLCB0YXNrVmlld2VyKCkpO1xuXG4gIHJldHVybiBhcHBNYWluQ29udGVudDtcbn1cblxuZXhwb3J0IHsgYXBwTWFpbkNvbnRlbnQgfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gbWFpbkNvbnRlbnRIZWFkZXIoKSB7XG4gIGxldCBtYWluQ29udGVudEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgaGVhZGluZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiKSxcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBhZGRDbGFzcyhtYWluQ29udGVudEhlYWRlciwgXCJtYWluLWNvbnRlbnQtaGVhZGVyXCIpO1xuICBhZGRDbGFzcyhoZWFkaW5nQ29udGFpbmVyLCBcIm1haW4tY29udGVudC1oZWFkaW5nLWNvbnRhaW5lclwiKTtcbiAgYWRkQ2xhc3MoaGVhZGluZywgXCJtYWluLWNvbnRlbnQtaGVhZGluZ1wiKTtcbiAgYWRkQ2xhc3MocHJvamVjdERlc2NyaXB0aW9uLCBcIm1haW4tY29udGVudC1wcm9qZWN0LWRlc2NyaXB0aW9uXCIpO1xuXG4gIGhlYWRpbmdDb250YWluZXIuYXBwZW5kKGhlYWRpbmcsIHByb2plY3REZXNjcmlwdGlvbik7XG4gIG1haW5Db250ZW50SGVhZGVyLmFwcGVuZChoZWFkaW5nQ29udGFpbmVyKTtcblxuICByZXR1cm4gbWFpbkNvbnRlbnRIZWFkZXI7XG59XG5cbmV4cG9ydCB7IG1haW5Db250ZW50SGVhZGVyIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2tCdXR0b24oKSB7XG4gIGxldCBhZGROZXdUYXNrQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBhZGROZXdUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuICBhZGRDbGFzcyhhZGROZXdUYXNrQnV0dG9uLCBcImFkZC1uZXctdGFzay1idXR0b25cIik7XG5cbiAgcmV0dXJuIGFkZE5ld1Rhc2tCdXR0b247XG59XG5cbmV4cG9ydCB7IGFkZE5ld1Rhc2tCdXR0b24gfTtcbiIsImltcG9ydCB7IHRvZ2dsZVRhc2tTdGF0dXMgfSBmcm9tIFwiLi4vLi4vY29udHJvbHMvdGFza0NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2hlbHBlci9oZWxwZXIuanNcIjtcbmltcG9ydCBjaGVja21hcmtJY29uIGZyb20gXCIuLi8uLi8uLi9pY29ucy9jaGVjay5zdmdcIjtcblxuZnVuY3Rpb24gY2hlY2tib3godGFza0l0ZW1OdW1iZXIpIHtcbiAgbGV0IGNoZWNrYm94Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBjaGVja2JveCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgY2hlY2ttYXJrID0gY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBjaGVja21hcmsuc2V0QXR0cmlidXRlKFwic3JjXCIsIGNoZWNrbWFya0ljb24pO1xuICBjaGVja21hcmsuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiQ2hlY2ttYXJrIGljb25cIik7XG5cbiAgYWRkQ2xhc3MoY2hlY2tib3gsIFwiY2hlY2tib3hcIik7XG4gIGFkZENsYXNzKGNoZWNrbWFyaywgXCJmYWRlLWluLW91dFwiKTtcbiAgdG9nZ2xlVGFza1N0YXR1cyhjaGVja2JveCwgdGFza0l0ZW1OdW1iZXIpO1xuXG4gIGNoZWNrYm94LmFwcGVuZChjaGVja21hcmspO1xuICBjaGVja2JveENvbnRhaW5lci5hcHBlbmQoY2hlY2tib3gpO1xuXG4gIHJldHVybiBjaGVja2JveENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY2hlY2tib3ggfTtcbiIsImltcG9ydCB7IHRleHRCdXR0b24gfSBmcm9tIFwiLi4vLi4vZ2VuZXJhbEJ1dHRvbnMvdGV4dEJ1dHRvbi5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYWRkQ2xhc3MgfSBmcm9tIFwiLi4vLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrSGVhZGVyRmllbGQodGFza0hlYWRlclZhbHVlKSB7XG4gIGxldCBoZWFkZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGhlYWRlckxhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuICAgIGhlYWRlcklucHV0RmllbGQgPSBjcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cbiAgaGVhZGVyTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgTmFtZVwiO1xuICBpZiAodGFza0hlYWRlclZhbHVlKSB7XG4gICAgaGVhZGVySW5wdXRGaWVsZC50ZXh0Q29udGVudCA9IHRhc2tIZWFkZXJWYWx1ZTtcbiAgfVxuXG4gIGhlYWRlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tdGFzay1oZWFkZXJcIik7XG4gIGhlYWRlcklucHV0RmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLXRhc2staGVhZGVyXCIpO1xuICBoZWFkZXJJbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBhZGRDbGFzcyhoZWFkZXJJbnB1dEZpZWxkLCBcImZvcm0tdGFzay1oZWFkZXJcIik7XG5cbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXJMYWJlbCwgaGVhZGVySW5wdXRGaWVsZCk7XG5cbiAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Rlc2NyaXB0aW9uRmllbGQodGFza0Rlc2NyaXB0aW9uVmFsdWUpIHtcbiAgbGV0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBkZXNjcmlwdGlvbkxhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuICAgIGRlc2NyaXB0aW9uSW5wdXRGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblxuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuICBpZiAodGFza0Rlc2NyaXB0aW9uVmFsdWUpIHtcbiAgICBkZXNjcmlwdGlvbklucHV0RmllbGQudGV4dENvbnRlbnQgPSB0YXNrRGVzY3JpcHRpb25WYWx1ZTtcbiAgfVxuXG4gIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9ybS10YXNrLWRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0RmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLXRhc2stZGVzY3JpcHRpb25cIik7XG5cbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXRGaWVsZCk7XG5cbiAgcmV0dXJuIGRlc2NyaXB0aW9uQ29udGFpbmVyO1xufVxuXG4vLyBUaGUgYWRkT3JTYXZlVGFza0J1dHRvblRleHQgYXJndW1lbnQgaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlXG4vLyB0YXNrRm9ybSBzaG91bGQgc3RhdGUgXCJzYXZlXCIgb3IgXCJhZGQgdGFza1wiIGZvciBvbmUgb2YgdGhlIGJ1dHRvbnMuXG5mdW5jdGlvbiB0YXNrRm9ybShcbiAgYWRkT3JTYXZlVGFza0J1dHRvblRleHQgPSBcIkFkZCBUYXNrXCIsXG4gIHRhc2tIZWFkZXJWYWx1ZSxcbiAgdGFza0Rlc2NyaXB0aW9uVmFsdWVcbikge1xuICBsZXQgZm9ybUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgdGFza0l0ZW1Gb3JtID0gY3JlYXRlRWxlbWVudChcImZvcm1cIiksXG4gICAgaGVhZGVyRmllbGQgPSBjcmVhdGVUYXNrSGVhZGVyRmllbGQodGFza0hlYWRlclZhbHVlKSxcbiAgICBkZXNjcmlwdGlvbkZpZWxkID0gY3JlYXRlVGFza0Rlc2NyaXB0aW9uRmllbGQodGFza0Rlc2NyaXB0aW9uVmFsdWUpLFxuICAgIGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgY2FuY2VsRm9ybUJ1dHRvbiA9IHRleHRCdXR0b24oXCJDYW5jZWxcIiwgXCJmb3JtLWNhbmNlbC1idXR0b25cIiksXG4gICAgYWRkT3JTYXZlVGFza0J1dHRvbiA9IHRleHRCdXR0b24oXG4gICAgICBhZGRPclNhdmVUYXNrQnV0dG9uVGV4dCxcbiAgICAgIFwiZm9ybS1hZGQtb3Itc2F2ZS10YXNrLWJ1dHRvblwiXG4gICAgKTtcblxuICBhZGRDbGFzcyh0YXNrSXRlbUZvcm0sIFwidGFzay1mb3JtXCIpO1xuICBhZGRDbGFzcyhmb3JtQ29udGFpbmVyLCBcInRhc2stZm9ybS1jb250YWluZXJcIik7XG5cbiAgYWRkT3JTYXZlVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgdGFza0l0ZW1Gb3JtLnNldEF0dHJpYnV0ZShcIm5vdmFsaWRhdGVcIiwgXCJcIik7XG5cbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjYW5jZWxGb3JtQnV0dG9uLCBhZGRPclNhdmVUYXNrQnV0dG9uKTtcbiAgdGFza0l0ZW1Gb3JtLmFwcGVuZChoZWFkZXJGaWVsZCwgZGVzY3JpcHRpb25GaWVsZCwgYnV0dG9uQ29udGFpbmVyKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmQodGFza0l0ZW1Gb3JtKTtcblxuICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgdGFza0Zvcm0gfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gdGFza0luZm8odGFza0hlYWRlclZhbHVlLCB0YXNrRGVzY3JpcHRpb25WYWx1ZSkge1xuICBsZXQgdGFza0luZm9ybWF0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICB0YXNrSGVhZGVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJoM1wiKSxcbiAgICB0YXNrRGVzY3JpcHRpb25FbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgdGFza0hlYWRlckVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrSGVhZGVyVmFsdWU7XG4gIHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrRGVzY3JpcHRpb25WYWx1ZTtcblxuICBhZGRDbGFzcyh0YXNrSGVhZGVyRWxlbWVudCwgXCJ0YXNrLWhlYWRlclwiKTtcbiAgYWRkQ2xhc3ModGFza0Rlc2NyaXB0aW9uRWxlbWVudCwgXCJ0YXNrLWRlc2NyaXB0aW9uXCIpO1xuXG4gIHRhc2tJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQodGFza0hlYWRlckVsZW1lbnQsIHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQpO1xuXG4gIHJldHVybiB0YXNrSW5mb3JtYXRpb25Db250YWluZXI7XG59XG5cbmV4cG9ydCB7IHRhc2tJbmZvIH07XG4iLCJpbXBvcnQgeyBjaGVja2JveCB9IGZyb20gXCIuL2NoZWNrYm94LmpzXCI7XG5pbXBvcnQgeyB0YXNrSW5mbyB9IGZyb20gXCIuL3Rhc2tJbmZvLmpzXCI7XG5pbXBvcnQgeyB0YXNrSXRlbUFjdGlvbnMgfSBmcm9tIFwiLi90YXNrSXRlbUFjdGlvbnMuanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gdGFza0l0ZW0odGFza0hlYWRlclZhbHVlLCB0YXNrRGVzY3JpcHRpb25WYWx1ZSwgdGFza0l0ZW1OdW1iZXIpIHtcbiAgbGV0IHRhc2tJdGVtID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBjaGVja0JveFRhc2tJbmZvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBhZGRDbGFzcyhjaGVja0JveFRhc2tJbmZvQ29udGFpbmVyLCBcImNoZWNrQm94VGFza0luZm9Db250YWluZXJcIik7XG4gIGFkZENsYXNzKHRhc2tJdGVtLCBcInRhc2staXRlbVwiKTtcblxuICB0YXNrSXRlbS5kYXRhc2V0LnRhc2tJdGVtID0gdGFza0l0ZW1OdW1iZXI7XG5cbiAgY2hlY2tCb3hUYXNrSW5mb0NvbnRhaW5lci5hcHBlbmQoXG4gICAgY2hlY2tib3godGFza0l0ZW1OdW1iZXIpLFxuICAgIHRhc2tJbmZvKHRhc2tIZWFkZXJWYWx1ZSwgdGFza0Rlc2NyaXB0aW9uVmFsdWUpXG4gICk7XG4gIHRhc2tJdGVtLmFwcGVuZChjaGVja0JveFRhc2tJbmZvQ29udGFpbmVyLCB0YXNrSXRlbUFjdGlvbnModGFza0l0ZW1OdW1iZXIpKTtcblxuICByZXR1cm4gdGFza0l0ZW07XG59XG5cbmV4cG9ydCB7IHRhc2tJdGVtIH07XG4iLCJpbXBvcnQgeyBpY29uQnV0dG9uTWVkaXVtIH0gZnJvbSBcIi4uLy4uL2dlbmVyYWxCdXR0b25zL2ljb25CdXR0b25NZWRpdW0uanNcIjtcbmltcG9ydCB7IEFkZEVkaXRCdXR0b25MaXN0ZW5lciB9IGZyb20gXCIuLi8uLi9jb250cm9scy90YXNrQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuLi8uLi8uLi9pY29ucy9lZGl0LnN2Z1wiO1xuXG5mdW5jdGlvbiB0YXNrSXRlbUFjdGlvbnModGFza0l0ZW1OdW1iZXIpIHtcbiAgbGV0IHRhc2tJdGVtQWN0aW9ucyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgZWRpdEJ1dHRvbiA9IGljb25CdXR0b25NZWRpdW0oXG4gICAgICBlZGl0SWNvbixcbiAgICAgIFwiVGFzayBFZGl0IEljb24gQnV0dG9uXCJcbiAgICApO1xuXG4gIEFkZEVkaXRCdXR0b25MaXN0ZW5lcihlZGl0QnV0dG9uLCB0YXNrSXRlbU51bWJlcik7XG5cbiAgYWRkQ2xhc3ModGFza0l0ZW1BY3Rpb25zLCBcInRhc2staXRlbS1hY3Rpb25zXCIpO1xuXG4gIHRhc2tJdGVtQWN0aW9ucy5hcHBlbmQoZWRpdEJ1dHRvbik7XG5cbiAgcmV0dXJuIHRhc2tJdGVtQWN0aW9ucztcbn1cblxuZXhwb3J0IHsgdGFza0l0ZW1BY3Rpb25zIH07XG4iLCJpbXBvcnQgeyBhZGROZXdUYXNrQnV0dG9uIH0gZnJvbSBcIi4vdGFzay9hZGROZXdUYXNrQnV0dG9uLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHRhc2tWaWV3ZXIoKSB7XG4gIGxldCB0YXNrVmlld2VyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBhZGRDbGFzcyh0YXNrVmlld2VyLCBcInRhc2stdmlld2VyXCIpO1xuXG4gIHRhc2tWaWV3ZXIuYXBwZW5kKGFkZE5ld1Rhc2tCdXR0b24oKSk7XG5cbiAgcmV0dXJuIHRhc2tWaWV3ZXI7XG59XG5cbmV4cG9ydCB7IHRhc2tWaWV3ZXIgfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbi8vIEFnZ3Jlc3NpdmVseSBjaGVja3MgYW5kIGRpc2FibGVzIHRoZSBhZGQgYnV0dG9uIGlmIGlmIGZvcm0gZmllbGQgaXMgZW1wdHlcbmZ1bmN0aW9uIG1pc3NpbmdWYWx1ZUFnZ3Jlc3NpdmVWYWxpZGF0aW9uKGV2ZW50TGlzdGVuZXJOb2RlLCBidXR0b25Ub0Rpc2FibGUpIHtcbiAgZXZlbnRMaXN0ZW5lck5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgYnV0dG9uVG9EaXNhYmxlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25Ub0Rpc2FibGUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgbWlzc2luZ1ZhbHVlQWdncmVzc2l2ZVZhbGlkYXRpb24gfTtcbiIsImltcG9ydCB7IG5ld1Byb2plY3RPdmVybGF5Rm9ybSB9IGZyb20gXCIuLi9wcm9qZWN0L25ld1Byb2plY3RPdmVybGF5Rm9ybS5qc1wiO1xuaW1wb3J0IHsgdGFiIH0gZnJvbSBcIi4uL21lbnViYXIvdGFiLmpzXCI7XG5pbXBvcnQgeyBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbiB9IGZyb20gXCIuL2Zvcm1WYWxpZGF0aW9uQ29udHJvbHMuanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50LCB0b2dnbGVDbGFzcyB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbi8vIEV2ZW50IExpc3RlbmVycyBleHBlY3QgYSBmdW5jdGlvbiByZWZlcmVuY2UgaW5zdGVhZCBvZiB0aGUgZnVuY3Rpb24gaXRzZWxmLlxuLy8gVG8gYXZvaWQgY2FsbGluZyBmdW5jdGlvbiBpbW1lZGlhdGVseSwgZWl0aGVyIGJpbmQgJ3RoaXMnLCBjcmVhdGUgYW5cbi8vIGFub255bW91cyBmdW5jdGlvbiwgb3IgaGF2ZSBhIGZ1bmN0aW9uIHJldHVybiBhIGZ1bmN0aW9uLlxubGV0IG1lbnViYXJUcmFuc2l0aW9uZW5kTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGxldCBtZW51YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJhclwiKTtcbiAgdG9nZ2xlQ2xhc3MobWVudWJhciwgXCJoaWRlXCIpO1xufTtcblxuZnVuY3Rpb24gYWRkTWVudWJhclRyYW5zaXRpb25lbmRMaXN0ZW5lcihtYWluQ29udGVudCkge1xuICBtYWluQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBtZW51YmFyVHJhbnNpdGlvbmVuZExpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWVudWJhclRyYW5zaXRpb25lbmRMaXN0ZW5lcihtYWluQ29udGVudCkge1xuICBtYWluQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgIFwidHJhbnNpdGlvbmVuZFwiLFxuICAgIG1lbnViYXJUcmFuc2l0aW9uZW5kTGlzdGVuZXJcbiAgKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudWJhclZpc2liaWxpdHkoKSB7XG4gIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5maXJzdEVsZW1lbnRDaGlsZCxcbiAgICBtZW51YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJhclwiKSxcbiAgICBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAobWFpbkNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAvLyBSZW1vdmUgbGlzdGVuZXIgYmVmb3JlIHN0YXJ0aW5nIHRyYW5zaXRpb24gdG8gYXZvaWQgdHJpZ2dlcmluZyB0aGVcbiAgICAgIC8vIGxpc3RlbmVyIHRvIGhpZGUgdGhlIG1lbnUgd2hlbiB0aGUgdHJhbnNpdGlvbiBlbmRzLlxuICAgICAgcmVtb3ZlTWVudWJhclRyYW5zaXRpb25lbmRMaXN0ZW5lcihtYWluQ29udGVudCk7XG5cbiAgICAgIC8vIE1ha2UgbWVudSB2aXNpYmxlIGJlZm9yZSBzdGFydGluZyB0cmFuc2l0aW9uIHRvIHNob3cgbWVudS5cbiAgICAgIHRvZ2dsZUNsYXNzKG1lbnViYXIsIFwiaGlkZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWRkIGxpc3RlbmVyIHRvIHNldCBtZW51YmFyIHZpc2liaWxpdHkgb2ZmIGFmdGVyIGl0IGhhcyB0cmFuc2l0aW9uZWRcbiAgICAgIC8vIG91dHNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAgYWRkTWVudWJhclRyYW5zaXRpb25lbmRMaXN0ZW5lcihtYWluQ29udGVudCk7XG4gICAgfVxuICAgIHRvZ2dsZUNsYXNzKG1haW5Db250ZW50LCBcImNsb3NlZFwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0T3ZlcmxheUZvcm0oKSB7XG4gIGxldCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b25cIik7XG5cbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG5ld1Byb2plY3RPdmVybGF5Rm9ybSgpKTtcblxuICAgIGxldCBuZXdQcm9qZWN0TmFtZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LW5hbWVcIiksXG4gICAgICBuZXdQcm9qZWN0QWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIubmV3LXByb2plY3QtZm9ybS1hZGQtYnV0dG9uXCJcbiAgICAgICk7XG5cbiAgICBjYW5jZWxOZXdQcm9qZWN0QnV0dG9uTGlzdGVuZXIoKTtcbiAgICBhZGROZXdQcm9qZWN0QnV0dG9uTGlzdGVuZXIoKTtcbiAgICBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbihuZXdQcm9qZWN0TmFtZU5vZGUsIG5ld1Byb2plY3RBZGRCdXR0b24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsTmV3UHJvamVjdEJ1dHRvbkxpc3RlbmVyKCkge1xuICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1mb3JtLWNhbmNlbC1idXR0b25cIik7XG5cbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGJvZHlUYWcgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgbmV3UHJvamVjdE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LW92ZXJsYXlcIik7XG5cbiAgICBib2R5VGFnLnJlbW92ZUNoaWxkKG5ld1Byb2plY3RPdmVybGF5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUYWJMaXN0ZW5lcihcbiAgcHJvamVjdE5hbWUsXG4gIHByb2plY3REZXNjcmlwdGlvbixcbiAgcHJvamVjdFRhYkNsYXNzXG4pIHtcbiAgbGV0IHByb2plY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgcHJvamVjdFRhYkNsYXNzKTtcblxuICBwcm9qZWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdXBkYXRlTWFpbkNvbnRlbnRIZWFkaW5nKHByb2plY3ROYW1lKTtcbiAgICB1cGRhdGVNYWluQ29udGVudFByb2plY3REZXNjcmlwdGlvbihwcm9qZWN0RGVzY3JpcHRpb24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTWFpbkNvbnRlbnRQcm9qZWN0RGVzY3JpcHRpb24ocHJvamVjdERlc2NyaXB0aW9uKSB7XG4gIGxldCBwcm9qZWN0RGVzY3JpcHRpb25IZWFkZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5tYWluLWNvbnRlbnQtcHJvamVjdC1kZXNjcmlwdGlvblwiXG4gICk7XG5cbiAgcHJvamVjdERlc2NyaXB0aW9uSGVhZGVyU2VjdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3REZXNjcmlwdGlvbjtcbn1cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdEJ1dHRvbkxpc3RlbmVyKCkge1xuICBsZXQgYWRkTmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIubmV3LXByb2plY3QtZm9ybS1hZGQtYnV0dG9uXCJcbiAgKTtcblxuICBhZGROZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGJvZHlUYWcgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgbmV3UHJvamVjdE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LW92ZXJsYXlcIiksXG4gICAgICBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpLFxuICAgICAgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LW5hbWVcIikudmFsdWUsXG4gICAgICBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIiNuZXctcHJvamVjdC1kZXNjcmlwdGlvblwiXG4gICAgICApLnZhbHVlLFxuICAgICAgcHJvamVjdFNwZWNpZmljQ2xhc3MgPVxuICAgICAgICBcInByb2plY3QtXCIgKyBwcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCBcIi1cIiksXG4gICAgICBwcm9qZWN0VGFiID0gdGFiKHByb2plY3ROYW1lLCBcInByb2plY3QtdGFiXCIsIHByb2plY3RTcGVjaWZpY0NsYXNzKSxcbiAgICAgIG1haW5Db250ZW50SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50LWhlYWRpbmdcIiksXG4gICAgICBtYWluQ29udGVudFByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLm1haW4tY29udGVudC1wcm9qZWN0LWRlc2NyaXB0aW9uXCJcbiAgICAgICk7XG5cbiAgICBtYWluQ29udGVudFByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3REZXNjcmlwdGlvbjtcbiAgICBtYWluQ29udGVudEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcblxuICAgIHByb2plY3RMaXN0LmFwcGVuZChwcm9qZWN0VGFiKTtcbiAgICBhZGRQcm9qZWN0VGFiTGlzdGVuZXIoXG4gICAgICBwcm9qZWN0TmFtZSxcbiAgICAgIHByb2plY3REZXNjcmlwdGlvbixcbiAgICAgIHByb2plY3RTcGVjaWZpY0NsYXNzXG4gICAgKTtcblxuICAgIGJvZHlUYWcucmVtb3ZlQ2hpbGQobmV3UHJvamVjdE92ZXJsYXkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTWFpbkNvbnRlbnRIZWFkaW5nKHRleHQpIHtcbiAgbGV0IG1haW5Db250ZW50SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50LWhlYWRpbmdcIik7XG5cbiAgbWFpbkNvbnRlbnRIZWFkaW5nLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuZnVuY3Rpb24gaW5ib3hUYWJMaXN0ZW5lcigpIHtcbiAgbGV0IGluYm94VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRhYi1pbmJveFwiKTtcblxuICBpbmJveFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVwZGF0ZU1haW5Db250ZW50SGVhZGluZyhcIkluYm94XCIpO1xuICAgIHVwZGF0ZU1haW5Db250ZW50UHJvamVjdERlc2NyaXB0aW9uKFwiXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9kYXlUYWJMaXN0ZW5lcigpIHtcbiAgbGV0IHRvZGF5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRhYi10b2RheVwiKTtcblxuICB0b2RheVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVwZGF0ZU1haW5Db250ZW50SGVhZGluZyhcIlRvZGF5XCIpO1xuICAgIHVwZGF0ZU1haW5Db250ZW50UHJvamVjdERlc2NyaXB0aW9uKFwiXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBjb21pbmdUYWJMaXN0ZW5lcigpIHtcbiAgbGV0IHVwY29taW5nVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRhYi11cGNvbWluZ1wiKTtcblxuICB1cGNvbWluZ1RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVwZGF0ZU1haW5Db250ZW50SGVhZGluZyhcIlVwY29taW5nXCIpO1xuICAgIHVwZGF0ZU1haW5Db250ZW50UHJvamVjdERlc2NyaXB0aW9uKFwiXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVkVGFiTGlzdGVuZXIoKSB7XG4gIGxldCBjb21wbGV0ZWRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGFiLWNvbXBsZXRlZFwiKTtcblxuICBjb21wbGV0ZWRUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB1cGRhdGVNYWluQ29udGVudEhlYWRpbmcoXCJDb21wbGV0ZWRcIik7XG4gICAgdXBkYXRlTWFpbkNvbnRlbnRQcm9qZWN0RGVzY3JpcHRpb24oXCJcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0TWVudVRhYkxpc3RlbmVycygpIHtcbiAgaW5ib3hUYWJMaXN0ZW5lcigpO1xuICB0b2RheVRhYkxpc3RlbmVyKCk7XG4gIHVwY29taW5nVGFiTGlzdGVuZXIoKTtcbiAgY29tcGxldGVkVGFiTGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gbWVudUNvbnRyb2xsZXIoKSB7XG4gIHRvZ2dsZU1lbnViYXJWaXNpYmlsaXR5KCk7XG4gIGluaXRNZW51VGFiTGlzdGVuZXJzKCk7XG4gIGRpc3BsYXlOZXdQcm9qZWN0T3ZlcmxheUZvcm0oKTtcbn1cblxuZXhwb3J0IHsgbWVudUNvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IHRhc2tGb3JtIH0gZnJvbSBcIi4uL2FwcE1haW5Db250ZW50L3Rhc2svdGFza0Zvcm0uanNcIjtcbmltcG9ydCB7IGFkZE5ld1Rhc2tCdXR0b24gfSBmcm9tIFwiLi4vYXBwTWFpbkNvbnRlbnQvdGFzay9hZGROZXdUYXNrQnV0dG9uLmpzXCI7XG5pbXBvcnQgeyB0YXNrSXRlbSB9IGZyb20gXCIuLi9hcHBNYWluQ29udGVudC90YXNrL3Rhc2tJdGVtLmpzXCI7XG5pbXBvcnQgeyBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbiB9IGZyb20gXCIuL2Zvcm1WYWxpZGF0aW9uQ29udHJvbHMuanNcIjtcbmltcG9ydCB7IHRvZ2dsZUNsYXNzIH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gYWRkTmV3VGFza0J1dHRvbkxpc3RlbmVyKCkge1xuICBsZXQgYWRkTmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW5ldy10YXNrLWJ1dHRvblwiKTtcblxuICBhZGROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHRhc2tWaWV3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdmlld2VyXCIpLFxuICAgICAgbmV3VGFza0Zvcm0gPSB0YXNrRm9ybSgpO1xuXG4gICAgdGFza1ZpZXdlci5hcHBlbmQobmV3VGFza0Zvcm0pO1xuICAgIHRhc2tWaWV3ZXIucmVtb3ZlQ2hpbGQoYWRkTmV3VGFza0J1dHRvbik7XG5cbiAgICBsZXQgZm9ybVRhc2tIZWFkZXIgPSBuZXdUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tdGFzay1oZWFkZXJcIiksXG4gICAgICBmb3JtQWRkVGFza0J1dHRvbiA9IG5ld1Rhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmZvcm0tYWRkLW9yLXNhdmUtdGFzay1idXR0b25cIlxuICAgICAgKTtcblxuICAgIC8vIEFjdGl2YXRlIGxpc3RlbmVycyBmb3IgZm9ybSBidXR0b25zXG4gICAgY2FuY2VsVGFza0VkaXRMaXN0ZW5lcihuZXdUYXNrRm9ybSk7XG4gICAgYWRkVGFza1RvVGFza1ZpZXdlckxpc3RlbmVyKG5ld1Rhc2tGb3JtKTtcbiAgICBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbihmb3JtVGFza0hlYWRlciwgZm9ybUFkZFRhc2tCdXR0b24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsVGFza0VkaXRMaXN0ZW5lcih0YXNrRm9ybSwgdGFza0l0ZW1OdW1iZXIpIHtcbiAgbGV0IGZvcm1DYW5jZWxCdXR0b24gPSB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY2FuY2VsLWJ1dHRvblwiKTtcblxuICBmb3JtQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHRhc2tWaWV3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdmlld2VyXCIpLFxuICAgICAgdGFza0hlYWRlclZhbHVlID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNmb3JtLXRhc2staGVhZGVyXCIpLnZhbHVlLFxuICAgICAgdGFza0Rlc2NyaXB0aW9uVmFsdWUgPSB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIiNmb3JtLXRhc2stZGVzY3JpcHRpb25cIlxuICAgICAgKS52YWx1ZTtcblxuICAgIC8vIENoZWNrcyB0byBzZWUgaWYgdXNlciBpcyBlZGl0aW5nIGEgdGFzayBieSBjaGVja2luZyBpZiBhXG4gICAgLy8gdGFza0l0ZW1OdW1iZXIgZXhpc3RzLlxuICAgIGlmICh0YXNrSXRlbU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXNrVmlld2VyLmluc2VydEJlZm9yZShcbiAgICAgICAgdGFza0l0ZW0odGFza0hlYWRlclZhbHVlLCB0YXNrRGVzY3JpcHRpb25WYWx1ZSwgdGFza0l0ZW1OdW1iZXIpLFxuICAgICAgICB0YXNrRm9ybS5uZXh0U2libGluZ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXNrRm9ybS5yZW1vdmUoKTtcbiAgICBjaGVja05ld1Rhc2tCdXR0b25FeGlzdCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvVGFza1ZpZXdlckxpc3RlbmVyKHRhc2tGb3JtLCB0YXNrSXRlbU51bWJlcikge1xuICBsZXQgZm9ybUFkZE9yU2F2ZVRhc2tCdXR0b24gPSB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmZvcm0tYWRkLW9yLXNhdmUtdGFzay1idXR0b25cIlxuICApO1xuXG4gIGZvcm1BZGRPclNhdmVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHRhc2tWaWV3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdmlld2VyXCIpLFxuICAgICAgdGFza0hlYWRlclZhbHVlID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNmb3JtLXRhc2staGVhZGVyXCIpLnZhbHVlLFxuICAgICAgdGFza0Rlc2NyaXB0aW9uVmFsdWUgPSB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIiNmb3JtLXRhc2stZGVzY3JpcHRpb25cIlxuICAgICAgKS52YWx1ZTtcblxuICAgIC8vIE9ubHkgZW50ZXJzIGlmIHRoZSB1c2VyIGlzIGNyZWF0aW5nIGEgbmV3IHRhc2suXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGUgdXNlciBpcyBlZGl0aW5nIGFuZCBzYXZpbmcgYSB0YXNrIGFuZCBhXG4gICAgLy8gbmV3IHRhc2sgaXRlbSAjIGlzIG5vdCBuZWVkZWQuXG4gICAgaWYgKCF0YXNrSXRlbU51bWJlcikge1xuICAgICAgdGFza0l0ZW1OdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1pdGVtXCIpLmxlbmd0aDtcbiAgICB9XG5cbiAgICB0YXNrVmlld2VyLmluc2VydEJlZm9yZShcbiAgICAgIHRhc2tJdGVtKHRhc2tIZWFkZXJWYWx1ZSwgdGFza0Rlc2NyaXB0aW9uVmFsdWUsIHRhc2tJdGVtTnVtYmVyKSxcbiAgICAgIHRhc2tGb3JtLm5leHRTaWJsaW5nXG4gICAgKTtcbiAgICB0YXNrRm9ybS5yZW1vdmUoKTtcbiAgICBjaGVja05ld1Rhc2tCdXR0b25FeGlzdCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gQWRkRWRpdEJ1dHRvbkxpc3RlbmVyKGVkaXRCdXR0b24sIHRhc2tJdGVtTnVtYmVyKSB7XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgdGFza1ZpZXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3ZXJcIiksXG4gICAgICB0YXNrSXRlbVRvRWRpdCA9IHRhc2tWaWV3ZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLXRhc2staXRlbT1cIiR7dGFza0l0ZW1OdW1iZXJ9XCJdYFxuICAgICAgKSxcbiAgICAgIHRhc2tIZWFkZXJWYWx1ZSA9XG4gICAgICAgIHRhc2tJdGVtVG9FZGl0LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIikudGV4dENvbnRlbnQsXG4gICAgICB0YXNrRGVzY3JpcHRpb25WYWx1ZSA9XG4gICAgICAgIHRhc2tJdGVtVG9FZGl0LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCxcbiAgICAgIHRhc2tGb3JtVG9JbnNlcnQgPSB0YXNrRm9ybShcbiAgICAgICAgXCJTYXZlXCIsXG4gICAgICAgIHRhc2tIZWFkZXJWYWx1ZSxcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uVmFsdWVcbiAgICAgICksXG4gICAgICBmb3JtVGFza0hlYWRlciA9IHRhc2tGb3JtVG9JbnNlcnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLXRhc2staGVhZGVyXCIpLFxuICAgICAgZm9ybUFkZFRhc2tCdXR0b24gPSB0YXNrRm9ybVRvSW5zZXJ0LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmZvcm0tYWRkLW9yLXNhdmUtdGFzay1idXR0b25cIlxuICAgICAgKTtcbiAgICBcbiAgICB0YXNrVmlld2VyLmluc2VydEJlZm9yZSh0YXNrRm9ybVRvSW5zZXJ0LCB0YXNrSXRlbVRvRWRpdC5uZXh0U2libGluZyk7XG4gICAgdGFza1ZpZXdlci5yZW1vdmVDaGlsZCh0YXNrSXRlbVRvRWRpdCk7XG5cbiAgICBjYW5jZWxUYXNrRWRpdExpc3RlbmVyKHRhc2tGb3JtVG9JbnNlcnQsIHRhc2tJdGVtTnVtYmVyKTtcbiAgICBhZGRUYXNrVG9UYXNrVmlld2VyTGlzdGVuZXIodGFza0Zvcm1Ub0luc2VydCwgdGFza0l0ZW1OdW1iZXIpO1xuICAgIG1pc3NpbmdWYWx1ZUFnZ3Jlc3NpdmVWYWxpZGF0aW9uKGZvcm1UYXNrSGVhZGVyLCBmb3JtQWRkVGFza0J1dHRvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXNrU3RhdHVzKGNoZWNrYm94LCB0YXNrSXRlbU51bWJlcikge1xuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB0YXNrSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS10YXNrLWl0ZW0gPSAnJHt0YXNrSXRlbU51bWJlcn0nXWBcbiAgICAgICksXG4gICAgICBjaGVja21hcmsgPSBjaGVja2JveC5maXJzdENoaWxkO1xuXG4gICAgdG9nZ2xlQ2xhc3ModGFza0l0ZW0sIFwiY29tcGxldGVkXCIpO1xuICAgIHRvZ2dsZUNsYXNzKGNoZWNrbWFyaywgXCJmYWRlLWluLW91dFwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTmV3VGFza0J1dHRvbkV4aXN0KCkge1xuICBsZXQgdGFza1ZpZXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay12aWV3ZXJcIik7XG5cbiAgaWYgKCF0YXNrVmlld2VyLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpKSkge1xuICAgIHRhc2tWaWV3ZXIuYXBwZW5kKGFkZE5ld1Rhc2tCdXR0b24oKSk7XG4gICAgYWRkTmV3VGFza0J1dHRvbkxpc3RlbmVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFza0NvbnRyb2xsZXIoKSB7XG4gIC8vIGluaXRpYWxpemUgZXZlbnQgbGlzdGVuZXIgb24gYXBwIGxvYWRcbiAgYWRkTmV3VGFza0J1dHRvbkxpc3RlbmVyKCk7XG59XG5cbmV4cG9ydCB7IHRhc2tDb250cm9sbGVyLCB0b2dnbGVUYXNrU3RhdHVzLCBBZGRFZGl0QnV0dG9uTGlzdGVuZXIgfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gaWNvbkJ1dHRvbk1lZGl1bShpbWdTcmMsIGFsdFRleHQpIHtcbiAgbGV0IGljb25CdXR0b25NZWRpdW0gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLFxuICAgIGljb24gPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIGljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZ1NyYyk7XG4gIGljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIGFsdFRleHQpO1xuXG4gIGFkZENsYXNzKGljb25CdXR0b25NZWRpdW0sICdpY29uLWJ1dHRvbi1tZWRpdW0nKTtcblxuICBpY29uQnV0dG9uTWVkaXVtLmFwcGVuZChpY29uKTtcblxuICByZXR1cm4gaWNvbkJ1dHRvbk1lZGl1bTtcbn1cblxuZXhwb3J0IHsgaWNvbkJ1dHRvbk1lZGl1bSB9O1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiB0ZXh0QnV0dG9uKHRleHQsIC4uLmNzc0NsYXNzKSB7XG4gIGxldCBidXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBhZGRDbGFzcyhidXR0b24sIC4uLmNzc0NsYXNzKTtcblxuICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgeyB0ZXh0QnV0dG9uIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmNzc0NsYXNzZXMpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNzc0NsYXNzZXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCAuLi5jc3NDbGFzcykge1xuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY3NzQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjc3NDbGFzcykge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY3NzQ2xhc3MpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsIHRvZ2dsZUNsYXNzIH07XG4iLCJpbXBvcnQgeyB0YWIgfSBmcm9tIFwiLi90YWIuanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gbWVudVRhYnMoKSB7XG4gIGxldCBtZW51VGFicyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgdGFiQXJyID0gW1wiSW5ib3hcIiwgXCJUb2RheVwiLCBcIlVwY29taW5nXCIsIFwiQ29tcGxldGVkXCJdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgbGV0IHRhYlNwZWNpZmljQ2xhc3MgPSBcIm1lbnUtdGFiLVwiICsgdGFiQXJyW2ldLnRvTG93ZXJDYXNlKCk7XG4gICAgbWVudVRhYnMuYXBwZW5kKHRhYih0YWJBcnJbaV0sIFwidGFiXCIsIHRhYlNwZWNpZmljQ2xhc3MpKTtcbiAgfVxuXG4gIGFkZENsYXNzKG1lbnVUYWJzLCBcIm1lbnUtdGFic1wiKTtcblxuICByZXR1cm4gbWVudVRhYnM7XG59XG5cbmV4cG9ydCB7IG1lbnVUYWJzIH07XG4iLCJpbXBvcnQgeyBtZW51VGFicyB9IGZyb20gXCIuL21lbnVUYWJzLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0U2VjdGlvbiB9IGZyb20gXCIuL3Byb2plY3RTZWN0aW9uLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIG1lbnViYXIoKSB7XG4gIGxldCBtZW51YmFyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBsaW5lYnJlYWsgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZENsYXNzKG1lbnViYXIsIFwibWVudS1iYXJcIik7XG4gIGFkZENsYXNzKGxpbmVicmVhaywgXCJsaW5lYnJlYWtcIik7XG5cbiAgbWVudWJhci5hcHBlbmQobWVudVRhYnMoKSwgbGluZWJyZWFrLCBwcm9qZWN0U2VjdGlvbigpKTtcblxuICByZXR1cm4gbWVudWJhcjtcbn1cblxuZXhwb3J0IHsgbWVudWJhciB9O1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBwcm9qZWN0TGlzdCgpIHtcbiAgbGV0IHByb2plY3RMaXN0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBhZGRDbGFzcyhwcm9qZWN0TGlzdCwgXCJwcm9qZWN0LWxpc3RcIik7XG5cbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufVxuXG5leHBvcnQgeyBwcm9qZWN0TGlzdCB9O1xuIiwiaW1wb3J0IHsgaWNvbkJ1dHRvbk1lZGl1bSB9IGZyb20gXCIuLi9nZW5lcmFsQnV0dG9ucy9pY29uQnV0dG9uTWVkaXVtLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RMaXN0LmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIvaGVscGVyLmpzXCI7XG5pbXBvcnQgcGx1c0ljb24gZnJvbSBcIi4uLy4uL2ljb25zL3BsdXMuc3ZnXCI7XG5cbmZ1bmN0aW9uIHByb2plY3RTZWN0aW9uKCkge1xuICBsZXQgcHJvamVjdFNlY3Rpb24gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHByb2plY3RIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiksXG4gICAgbmV3UHJvamVjdEJ1dHRvbiA9IGljb25CdXR0b25NZWRpdW0ocGx1c0ljb24sIFwiQWRkIG5ldyBwcm9qZWN0IGljb25cIik7XG5cbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcblxuICBhZGRDbGFzcyhuZXdQcm9qZWN0QnV0dG9uLCBcIm5ldy1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgYWRkQ2xhc3MocHJvamVjdEhlYWRlciwgXCJwcm9qZWN0LWhlYWRlclwiKTtcbiAgYWRkQ2xhc3MocHJvamVjdFNlY3Rpb24sIFwicHJvamVjdC1zZWN0aW9uXCIpO1xuXG4gIHByb2plY3RIZWFkZXIuYXBwZW5kKGhlYWRpbmcsIG5ld1Byb2plY3RCdXR0b24pO1xuICBwcm9qZWN0U2VjdGlvbi5hcHBlbmQocHJvamVjdEhlYWRlciwgcHJvamVjdExpc3QoKSk7XG5cbiAgcmV0dXJuIHByb2plY3RTZWN0aW9uO1xufVxuXG5leHBvcnQgeyBwcm9qZWN0U2VjdGlvbiB9O1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiB0YWIodGV4dCwgLi4uY3NzQ2xhc3MpIHtcbiAgbGV0IHRhYiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgdGFiLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYWRkQ2xhc3ModGFiLCAuLi5jc3NDbGFzcyk7XG5cbiAgcmV0dXJuIHRhYjtcbn1cblxuZXhwb3J0IHsgdGFiIH07XG4iLCJpbXBvcnQgeyB0ZXh0QnV0dG9uIH0gZnJvbSBcIi4uL2dlbmVyYWxCdXR0b25zL3RleHRCdXR0b24uanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gZm9ybUhlYWRlcigpIHtcbiAgbGV0IGhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgaGVhZGVyID0gY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcblxuICBhZGRDbGFzcyhoZWFkZXJDb250YWluZXIsIFwibmV3LXByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiKTtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXIpO1xuXG4gIHJldHVybiBoZWFkZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lRm9ybUZpZWxkKCkge1xuICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHByb2plY3ROYW1lTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG4gICAgcHJvamVjdE5hbWVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBwcm9qZWN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWU6XCI7XG4gIHByb2plY3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV3LXByb2plY3QtbmFtZVwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1wcm9qZWN0LW5hbWVcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ld1Byb2plY3ROYW1lXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjE1MFwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICBhZGRDbGFzcyhwcm9qZWN0TmFtZUNvbnRhaW5lciwgXCJuZXctcHJvamVjdC1uYW1lLWZvcm0tZmllbGRcIik7XG5cbiAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lTGFiZWwsIHByb2plY3ROYW1lSW5wdXQpO1xuXG4gIHJldHVybiBwcm9qZWN0TmFtZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdERlc2NyaXB0aW9uRm9ybUZpZWxkKCkge1xuICBsZXQgcHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25UZXh0YXJlYSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblxuICBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBEZXNjcmlwdGlvbjpcIjtcbiAgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV3LXByb2plY3QtZGVzY3JpcHRpb25cIik7XG4gIHByb2plY3REZXNjcmlwdGlvblRleHRhcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXByb2plY3QtZGVzY3JpcHRpb25cIik7XG4gIHByb2plY3REZXNjcmlwdGlvblRleHRhcmVhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXdQcm9qZWN0RGVzY3JpcHRpb25cIik7XG4gIHByb2plY3REZXNjcmlwdGlvblRleHRhcmVhLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCIzXCIpO1xuICBwcm9qZWN0RGVzY3JpcHRpb25UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIzMDBcIik7XG5cbiAgYWRkQ2xhc3MocHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyLCBcIm5ldy1wcm9qZWN0LWRlc2NyaXB0aW9uLWZvcm0tZmllbGRcIik7XG5cbiAgcHJvamVjdERlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZChcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbCxcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25UZXh0YXJlYVxuICApO1xuXG4gIHJldHVybiBwcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RGb3JtQnV0dG9ucygpIHtcbiAgbGV0IGJ1dHRvbnNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGNhbmNlbE5ld1Byb2plY3RCdXR0b24gPSB0ZXh0QnV0dG9uKFxuICAgICAgXCJDYW5jZWxcIixcbiAgICAgIFwibmV3LXByb2plY3QtZm9ybS1jYW5jZWwtYnV0dG9uXCJcbiAgICApLFxuICAgIGFkZE5ld1Byb2plY3RCdXR0b24gPSB0ZXh0QnV0dG9uKFxuICAgICAgXCJBZGQgTmV3IFByb2plY3RcIixcbiAgICAgIFwibmV3LXByb2plY3QtZm9ybS1hZGQtYnV0dG9uXCJcbiAgICApO1xuXG4gIGFkZENsYXNzKGJ1dHRvbnNDb250YWluZXIsIFwibmV3LXByb2plY3QtZm9ybS1idXR0b25zXCIpO1xuICBhZGROZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChjYW5jZWxOZXdQcm9qZWN0QnV0dG9uLCBhZGROZXdQcm9qZWN0QnV0dG9uKTtcblxuICByZXR1cm4gYnV0dG9uc0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdEZvcm0oKSB7XG4gIGxldCBuZXdQcm9qZWN0Rm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLFxuICAgIG5ld1Byb2plY3RCdXR0b25zID0gcHJvamVjdEZvcm1CdXR0b25zKCk7XG5cbiAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3UHJvamVjdEZvcm1cIik7XG4gIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcIm5vdmFsaWRhdGVcIiwgXCJcIik7XG5cbiAgYWRkQ2xhc3MobmV3UHJvamVjdEZvcm0sIFwibmV3LXByb2plY3QtZm9ybVwiKTtcblxuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmQoXG4gICAgZm9ybUhlYWRlcigpLFxuICAgIHByb2plY3ROYW1lRm9ybUZpZWxkKCksXG4gICAgcHJvamVjdERlc2NyaXB0aW9uRm9ybUZpZWxkKCksXG4gICAgbmV3UHJvamVjdEJ1dHRvbnNcbiAgKTtcblxuICByZXR1cm4gbmV3UHJvamVjdEZvcm07XG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3RPdmVybGF5Rm9ybSgpIHtcbiAgbGV0IG5ld1Byb2plY3RPdmVybGF5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBhZGRDbGFzcyhuZXdQcm9qZWN0T3ZlcmxheSwgXCJuZXctcHJvamVjdC1vdmVybGF5XCIpO1xuICBuZXdQcm9qZWN0T3ZlcmxheS5hcHBlbmQobmV3UHJvamVjdEZvcm0oKSk7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3RPdmVybGF5O1xufVxuXG5leHBvcnQgeyBuZXdQcm9qZWN0T3ZlcmxheUZvcm0gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBhcHBIZWFkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcEhlYWRlci9hcHBIZWFkZXIuanNcIjtcbmltcG9ydCB7IGFwcE1haW5Db250ZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBNYWluQ29udGVudC9hcHBNYWluQ29udGVudC5qc1wiO1xuaW1wb3J0IHsgdGFza0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRyb2xzL3Rhc2tDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBtZW51Q29udHJvbGxlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29udHJvbHMvbWVudUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWxwZXIvaGVscGVyLmpzXCI7XG5pbXBvcnQgeyBtZW51YmFyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tZW51YmFyL21lbnViYXIuanNcIjtcbmltcG9ydCBcIi4vc3R5bGVzaGVldHMvc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGluaXRDb250cm9sbGVycygpIHtcbiAgdGFza0NvbnRyb2xsZXIoKTtcbiAgbWVudUNvbnRyb2xsZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcbiAgbGV0IGJvZHlUYWcgPSBkb2N1bWVudC5ib2R5LFxuICAgIG1haW5UYWcgPSBjcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblxuICBtYWluVGFnLmFwcGVuZChtZW51YmFyKCksIGFwcE1haW5Db250ZW50KCkpO1xuICBib2R5VGFnLmFwcGVuZChhcHBIZWFkZXIoKSwgbWFpblRhZyk7XG59XG5cbihmdW5jdGlvbiBpbml0QXBwKCkge1xuICByZW5kZXJQYWdlKCk7XG4gIGluaXRDb250cm9sbGVycygpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==