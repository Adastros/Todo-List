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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\nheader {\n  /* position: relative; */\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid black;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  transform: translateX(0);\n  transition: transform 0.25s;\n}\n\ninput {\n  width: 100%;\n}\n\ntextarea {\n  width: 100%;\n  resize: none;\n  overflow: auto;\n}\n\nimg {\n  width: 100%;\n  display: block;\n}\n\n.app-logo-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.app-logo-container > img {\n  height: 2.25rem;\n  width: min-content;\n}\n\n.app-logo-container > h2 {\n  font-size: 2.25rem;\n}\n\n.menu-button {\n  height: 35px;\n  width: 35px;\n  /* position: absolute;\n  top: 50%;\n  left: 1rem;\n  transform: translate(0, -50%); */\n}\n\n.theme-button {\n  height: 35px;\n  width: 35px;\n}\n\n.view-button {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  gap: 0.1rem;\n}\n\n.view-button > img {\n  height: 100%;\n  width: min-content;\n}\n\n.view-options {\n  /* position: absolute;\n  top: 50%;\n  right: 1rem;\n  transform: translate(0, -50%); */\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.menu-bar {\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid black;\n}\n\n.menu-tabs {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.tab {\n  padding: 1rem;\n}\n\n.tab:hover,\n.project-tab:hover {\n  background-color: lightgray;\n}\n\n.linebreak {\n  width: 90%;\n  margin: 1rem auto;\n  border-top: 1px solid grey;\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.project-section {\n  display: flex;\n  flex-direction: column;\n}\n\n.new-project-button {\n  height: 20px;\n  width: 20px;\n}\n\n.project-tab {\n  width: 100%;\n  margin-bottom: 0.25rem;\n}\n\n.new-project-overlay {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.new-project-form {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 1.5rem;\n  border-radius: 16px;\n}\n\n.new-project-form-buttons {\n  align-self: flex-end;\n}\n\n.add-task-button {\n  margin-top: 0.5rem;\n}\n\n.task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.task-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border: 1px solid black;\n}\n\n.task-header {\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n}\n\n.task-description {\n  font-size: 90%;\n}\n\n.checkbox {\n  height: 16px;\n  width: 16px;\n  border: 2px solid blue;\n  border-radius: 25%;\n  text-align: center;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.fade-in-out {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.fade-in-out:hover {\n  opacity: 1;\n}\n\n.closed {\n  transform: translateX(-200px);\n}\n\n.hide {\n  visibility: hidden;\n  overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/stylesheets/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,OAAO;EACP,aAAa;EACb,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX;;;kCAGgC;AAClC;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE;;;kCAGgC;EAChC,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,2BAA2B;AAC7B;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\nheader {\n  /* position: relative; */\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid black;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  transform: translateX(0);\n  transition: transform 0.25s;\n}\n\ninput {\n  width: 100%;\n}\n\ntextarea {\n  width: 100%;\n  resize: none;\n  overflow: auto;\n}\n\nimg {\n  width: 100%;\n  display: block;\n}\n\n.app-logo-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.app-logo-container > img {\n  height: 2.25rem;\n  width: min-content;\n}\n\n.app-logo-container > h2 {\n  font-size: 2.25rem;\n}\n\n.menu-button {\n  height: 35px;\n  width: 35px;\n  /* position: absolute;\n  top: 50%;\n  left: 1rem;\n  transform: translate(0, -50%); */\n}\n\n.theme-button {\n  height: 35px;\n  width: 35px;\n}\n\n.view-button {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  gap: 0.1rem;\n}\n\n.view-button > img {\n  height: 100%;\n  width: min-content;\n}\n\n.view-options {\n  /* position: absolute;\n  top: 50%;\n  right: 1rem;\n  transform: translate(0, -50%); */\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.menu-bar {\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid black;\n}\n\n.menu-tabs {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.tab {\n  padding: 1rem;\n}\n\n.tab:hover,\n.project-tab:hover {\n  background-color: lightgray;\n}\n\n.linebreak {\n  width: 90%;\n  margin: 1rem auto;\n  border-top: 1px solid grey;\n}\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.project-section {\n  display: flex;\n  flex-direction: column;\n}\n\n.new-project-button {\n  height: 20px;\n  width: 20px;\n}\n\n.project-tab {\n  width: 100%;\n  margin-bottom: 0.25rem;\n}\n\n.new-project-overlay {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.new-project-form {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 1.5rem;\n  border-radius: 16px;\n}\n\n.new-project-form-buttons {\n  align-self: flex-end;\n}\n\n.add-task-button {\n  margin-top: 0.5rem;\n}\n\n.task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.task-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border: 1px solid black;\n}\n\n.task-header {\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n}\n\n.task-description {\n  font-size: 90%;\n}\n\n.checkbox {\n  height: 16px;\n  width: 16px;\n  border: 2px solid blue;\n  border-radius: 25%;\n  text-align: center;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.fade-in-out {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.fade-in-out:hover {\n  opacity: 1;\n}\n\n.closed {\n  transform: translateX(-200px);\n}\n\n.hide {\n  visibility: hidden;\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/addTaskButton.js":
/*!*****************************************!*\
  !*** ./src/components/addTaskButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskButton": () => (/* binding */ addTaskButton)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/style.css */ "./src/stylesheets/style.css");



function addTaskButton() {
  let taskButton = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");

  taskButton.textContent = "Add task";
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(taskButton, "add-task-button");

  return taskButton;
}




/***/ }),

/***/ "./src/components/appHeader.js":
/*!*************************************!*\
  !*** ./src/components/appHeader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appHeader": () => (/* binding */ appHeader)
/* harmony export */ });
/* harmony import */ var _appLogo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogo.js */ "./src/components/appLogo.js");
/* harmony import */ var _components_menuButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/menuButton.js */ "./src/components/menuButton.js");
/* harmony import */ var _components_themeButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/themeButton.js */ "./src/components/themeButton.js");
/* harmony import */ var _viewOptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewOptions.js */ "./src/components/viewOptions.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");






function appHeader() {
  let appHeader = (0,_helper_js__WEBPACK_IMPORTED_MODULE_4__.createElement)("header");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_4__.addClass)(appHeader, "appHeader");
  appHeader.append((0,_components_menuButton_js__WEBPACK_IMPORTED_MODULE_1__.menuButton)(), (0,_appLogo_js__WEBPACK_IMPORTED_MODULE_0__.appLogo)(), (0,_components_themeButton_js__WEBPACK_IMPORTED_MODULE_2__.themeButton)());

  return appHeader;
}




/***/ }),

/***/ "./src/components/appLogo.js":
/*!***********************************!*\
  !*** ./src/components/appLogo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appLogo": () => (/* binding */ appLogo)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _image_Todo_ist_Logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/Todo-ist Logo.svg */ "./src/image/Todo-ist Logo.svg");



function appLogo() {
  let appLogoContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    appName = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2"),
    logoImage = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  appName.textContent = "Do It";

  logoImage.setAttribute("src", _image_Todo_ist_Logo_svg__WEBPACK_IMPORTED_MODULE_1__);
  logoImage.setAttribute(
    "alt",
    "Todo-ist Logo. Clipboards with checkmarks on them."
  );

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(appLogoContainer, "app-logo-container");

  appLogoContainer.append(logoImage, appName);

  return appLogoContainer;
}




/***/ }),

/***/ "./src/components/boardViewButton.js":
/*!*******************************************!*\
  !*** ./src/components/boardViewButton.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardViewButton": () => (/* binding */ boardViewButton)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _icons_view_board_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/view-board.svg */ "./src/icons/view-board.svg");



function boardViewButton() {
  let boardViewButton = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  boardViewButton.textContent = "Board View";

  icon.setAttribute("src", _icons_view_board_svg__WEBPACK_IMPORTED_MODULE_1__);
  icon.setAttribute("alt", "Board view icon");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(boardViewButton, "view-button");

  boardViewButton.prepend(icon);

  return boardViewButton;
}




/***/ }),

/***/ "./src/components/checkbox.js":
/*!************************************!*\
  !*** ./src/components/checkbox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkbox": () => (/* binding */ checkbox)
/* harmony export */ });
/* harmony import */ var _taskController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskController.js */ "./src/components/taskController.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _icons_check_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/check.svg */ "./src/icons/check.svg");




function checkbox(taskItemNumber) {
  let checkboxContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    checkbox = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    checkmark = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("img");

  checkmark.setAttribute("src", _icons_check_svg__WEBPACK_IMPORTED_MODULE_2__);
  checkmark.setAttribute("alt", "Checkmark icon");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(checkbox, "checkbox");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(checkmark, "fade-in-out");
  (0,_taskController_js__WEBPACK_IMPORTED_MODULE_0__.toggleTaskStatus)(checkbox, taskItemNumber);

  checkbox.append(checkmark);
  checkboxContainer.append(checkbox);

  return checkboxContainer;
}




/***/ }),

/***/ "./src/components/formValidationControls.js":
/*!**************************************************!*\
  !*** ./src/components/formValidationControls.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "missingValueAggressiveValidation": () => (/* binding */ missingValueAggressiveValidation)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");


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

/***/ "./src/components/listViewButton.js":
/*!******************************************!*\
  !*** ./src/components/listViewButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listViewButton": () => (/* binding */ listViewButton)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _icons_view_list_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/view-list.svg */ "./src/icons/view-list.svg");



function listViewButton() {
  let listViewButton = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  listViewButton.textContent = "List View";

  icon.setAttribute("src", _icons_view_list_svg__WEBPACK_IMPORTED_MODULE_1__);
  icon.setAttribute("alt", "List icon");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(listViewButton, "view-button");

  listViewButton.prepend(icon);

  return listViewButton;
}




/***/ }),

/***/ "./src/components/menuButton.js":
/*!**************************************!*\
  !*** ./src/components/menuButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuButton": () => (/* binding */ menuButton)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/menu.svg */ "./src/icons/menu.svg");



function menuButton() {
  let menuButton = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  icon.setAttribute("src", _icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__);
  icon.setAttribute("alt", "Menu icon");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(menuButton, "menu-button");

  menuButton.append(icon);

  return menuButton;
}




/***/ }),

/***/ "./src/components/menuController.js":
/*!******************************************!*\
  !*** ./src/components/menuController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuController": () => (/* binding */ menuController)
/* harmony export */ });
/* harmony import */ var _newProjectOverlayForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectOverlayForm.js */ "./src/components/newProjectOverlayForm.js");
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.js */ "./src/components/tab.js");
/* harmony import */ var _formValidationControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formValidationControls.js */ "./src/components/formValidationControls.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");





// Event Listeners expect a function reference instead of the function itself.
// To avoid calling function immediately, either bind 'this', create an
// anonymous function, or have a function return a function.
let menubarTransitionendListener = () => {
  let menubar = document.querySelector(".menu-bar");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(menubar, "hide");
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
  let menuButton = document.querySelector(".menu-button"),
    menubar = document.querySelector(".menu-bar"),
    mainContent = document.querySelector("main");

  menuButton.addEventListener("click", () => {
    if (mainContent.classList.contains("closed")) {
      // Remove listener before starting transition to avoid triggering the
      // listener to hide the menu when the transition ends.
      removeMenubarTransitionendListener(mainContent);

      // Make menu visible before starting transition to show menu.
      (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(menubar, "hide");
    } else {
      // Add listener to set menubar visibility off after it has transitioned
      // outside the viewport.
      addMenubarTransitionendListener(mainContent);
    }
    (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(mainContent, "closed");
  });
}

function displayNewProjectOverlayForm() {
  let newProjectButton = document.querySelector(".new-project-button");

  newProjectButton.addEventListener("click", () => {
    document.body.append((0,_newProjectOverlayForm_js__WEBPACK_IMPORTED_MODULE_0__.newProjectOverlayForm)());

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
      projectTab = (0,_tab_js__WEBPACK_IMPORTED_MODULE_1__.tab)(projectName, "project-tab");

    projectList.append(projectTab);

    bodyTag.removeChild(newProjectOverlay);
  });
}

function menuController() {
  toggleMenubarVisibility();
  displayNewProjectOverlayForm();
}




/***/ }),

/***/ "./src/components/menuTabs.js":
/*!************************************!*\
  !*** ./src/components/menuTabs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuTabs": () => (/* binding */ menuTabs)
/* harmony export */ });
/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.js */ "./src/components/tab.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");



function menuTabs() {
  let menuTabs = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    tabArr = ["Inbox", "Today", "This Week", "Completed"];

  for (let i = 0; i < 4; i++) {
    menuTabs.append((0,_tab_js__WEBPACK_IMPORTED_MODULE_0__.tab)(tabArr[i], 'tab'));
  }

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(menuTabs, "menu-tabs");

  return menuTabs;
}




/***/ }),

/***/ "./src/components/menubar.js":
/*!***********************************!*\
  !*** ./src/components/menubar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menubar": () => (/* binding */ menubar)
/* harmony export */ });
/* harmony import */ var _menuTabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuTabs.js */ "./src/components/menuTabs.js");
/* harmony import */ var _projectSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectSection.js */ "./src/components/projectSection.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");




function menubar() {
  let menubar = (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    linebreak = (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(menubar, "menu-bar");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(linebreak, "linebreak");

  menubar.append((0,_menuTabs_js__WEBPACK_IMPORTED_MODULE_0__.menuTabs)(), linebreak, (0,_projectSection_js__WEBPACK_IMPORTED_MODULE_1__.projectSection)());

  return menubar;
}




/***/ }),

/***/ "./src/components/newProjectButton.js":
/*!********************************************!*\
  !*** ./src/components/newProjectButton.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectButton": () => (/* binding */ newProjectButton)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _icons_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/plus.svg */ "./src/icons/plus.svg");



function newProjectButton() {
  let newProjectButton = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  icon.setAttribute("src", _icons_plus_svg__WEBPACK_IMPORTED_MODULE_1__);
  icon.setAttribute("alt", "Add new project icon");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(newProjectButton, "new-project-button");

  newProjectButton.append(icon);

  return newProjectButton;
}




/***/ }),

/***/ "./src/components/newProjectOverlayForm.js":
/*!*************************************************!*\
  !*** ./src/components/newProjectOverlayForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectOverlayForm": () => (/* binding */ newProjectOverlayForm)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");


function formHeader() {
  let headerContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    header = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2");

  header.textContent = "New Project";

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(headerContainer, "new-project-header-container");
  headerContainer.append(header);

  return headerContainer;
}

function projectNameFormField() {
  let projectNameContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    projectNameLabel = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label"),
    projectNameInput = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("input");

  projectNameLabel.textContent = "Project Name:";
  projectNameLabel.setAttribute("for", "new-project-name");
  projectNameInput.setAttribute("id", "new-project-name");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("name", "newProjectName");
  projectNameInput.setAttribute("maxlength", "150");
  projectNameInput.setAttribute("required", "");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(projectNameContainer, "new-project-name-form-field");

  projectNameContainer.append(projectNameLabel, projectNameInput);

  return projectNameContainer;
}

function projectDescriptionFormField() {
  let projectDescriptionContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    projectDescriptionLabel = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label"),
    projectDescriptionTextarea = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea");

  projectDescriptionLabel.textContent = "Project Description:";
  projectDescriptionLabel.setAttribute("for", "new-project-description");
  projectDescriptionTextarea.setAttribute("id", "new-project-description");
  projectDescriptionTextarea.setAttribute("name", "newProjectDescription");
  projectDescriptionTextarea.setAttribute("rows", "3");
  projectDescriptionTextarea.setAttribute("maxlength", "300");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(projectDescriptionContainer, "new-project-description-form-field");

  projectDescriptionContainer.append(
    projectDescriptionLabel,
    projectDescriptionTextarea
  );

  return projectDescriptionContainer;
}

function createButton(text, cssClass) {
  let button = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");

  button.textContent = text;
  button.setAttribute("type", "button");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(button, cssClass);

  return button;
}

function projectFormButtons() {
  let buttonsContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    cancelNewProjectButton = createButton("Cancel", "new-project-form-cancel-button"),
    addNewProjectButton = createButton(
      "Add New Project",
      "new-project-form-add-button"
    );

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(buttonsContainer, "new-project-form-buttons");
  addNewProjectButton.setAttribute("disabled", "");
  buttonsContainer.append(cancelNewProjectButton, addNewProjectButton);

  return buttonsContainer;
}

function newProjectForm() {
  let newProjectForm = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("form"),
    newProjectButtons = projectFormButtons();

  newProjectForm.setAttribute("action", "");
  newProjectForm.setAttribute("method", "post");
  newProjectForm.setAttribute("name", "newProjectForm");
  newProjectForm.setAttribute("novalidate", "");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(newProjectForm, "new-project-form");

  newProjectForm.append(
    formHeader(),
    projectNameFormField(),
    projectDescriptionFormField(),
    newProjectButtons
  );

  return newProjectForm;
}

function newProjectOverlayForm() {
  let newProjectOverlay = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(newProjectOverlay, "new-project-overlay");
  newProjectOverlay.append(newProjectForm());

  return newProjectOverlay;
}




/***/ }),

/***/ "./src/components/projectList.js":
/*!***************************************!*\
  !*** ./src/components/projectList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");


function projectList() {
  let projectList = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(projectList, "project-list");

  return projectList;
}




/***/ }),

/***/ "./src/components/projectSection.js":
/*!******************************************!*\
  !*** ./src/components/projectSection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectSection": () => (/* binding */ projectSection)
/* harmony export */ });
/* harmony import */ var _newProjectButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectButton.js */ "./src/components/newProjectButton.js");
/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList.js */ "./src/components/projectList.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");




function projectSection() {
  let projectSection = (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    projectHeader = (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div"),
    heading = (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("h2");

  heading.textContent = "Projects";

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(projectHeader, "project-header");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(projectSection, "project-section");

  projectHeader.append(heading, (0,_newProjectButton_js__WEBPACK_IMPORTED_MODULE_0__.newProjectButton)());
  projectSection.append(projectHeader, (0,_projectList_js__WEBPACK_IMPORTED_MODULE_1__.projectList)());

  return projectSection;
}




/***/ }),

/***/ "./src/components/tab.js":
/*!*******************************!*\
  !*** ./src/components/tab.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tab": () => (/* binding */ tab)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");


function tab(text, cssClass) {
  let tab = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

  tab.textContent = text;
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(tab, cssClass);

  return tab;
}




/***/ }),

/***/ "./src/components/taskController.js":
/*!******************************************!*\
  !*** ./src/components/taskController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskController": () => (/* binding */ taskController),
/* harmony export */   "toggleTaskStatus": () => (/* binding */ toggleTaskStatus)
/* harmony export */ });
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskForm.js */ "./src/components/taskForm.js");
/* harmony import */ var _addTaskButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskButton.js */ "./src/components/addTaskButton.js");
/* harmony import */ var _taskItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskItem.js */ "./src/components/taskItem.js");
/* harmony import */ var _formValidationControls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formValidationControls.js */ "./src/components/formValidationControls.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");






function setTaskEditable() {
  let addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.addEventListener("click", (e) => {
    let taskList = document.querySelector(".task-list");

    taskList.append((0,_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.taskForm)());
    taskList.removeChild(addTaskButton);

    let formTaskHeader = document.querySelector("#form-task-header"),
      formAddTaskButton = document.querySelector(".form-add-task-button");

    // Activate listeners for form buttons
    cancelTaskEditListener();
    addTaskToTaskListListener();
    (0,_formValidationControls_js__WEBPACK_IMPORTED_MODULE_3__.missingValueAggressiveValidation)(formTaskHeader, formAddTaskButton);
  });
}

function cancelTaskEditListener() {
  let cancelButton = document.querySelector(".form-cancel-button");

  cancelButton.addEventListener("click", () => {
    let taskList = document.querySelector(".task-list"),
      taskFormContainer = document.querySelector(".task-form-container");

    taskList.removeChild(taskFormContainer);

    if (!taskList.contains(document.querySelector(".add-task-button"))) {
      taskList.append((0,_addTaskButton_js__WEBPACK_IMPORTED_MODULE_1__.addTaskButton)());
      setTaskEditable();
    }
  });
}

function addTaskToTaskListListener() {
  let formAddTaskButton = document.querySelector(".form-add-task-button");

  formAddTaskButton.addEventListener("click", () => {
    let taskList = document.querySelector(".task-list"),
      taskFormContainer = document.querySelector(".task-form-container"),
      taskHeaderValue = document.querySelector("#form-task-header").value,
      taskDescriptionValue = document.querySelector(
        "#form-task-description"
      ).value,
      taskItemNumber = document.getElementsByClassName("task-item").length + 1;

    taskList.removeChild(taskFormContainer);
    taskList.append(
      (0,_taskItem_js__WEBPACK_IMPORTED_MODULE_2__.taskItem)(taskHeaderValue, taskDescriptionValue, taskItemNumber),
      (0,_addTaskButton_js__WEBPACK_IMPORTED_MODULE_1__.addTaskButton)()
    );

    setTaskEditable();
  });
}

// Aggressively checks if task header field is empty and disables "Add task button" if empty
function isFormTaskHeaderEmpty() {
  let formTaskHeader = document.querySelector("#form-task-header"),
    formAddTaskButton = document.querySelector(".form-add-task-button");

  formTaskHeader.addEventListener("input", (e) => {
    if (e.currentTarget.validity.valid) {
      formAddTaskButton.removeAttribute("disabled", "");
    } else {
      formAddTaskButton.setAttribute("disabled", "");
    }
  });
}

function toggleTaskStatus(checkbox, taskItemNumber) {
  checkbox.addEventListener("click", () => {
    let taskItem = document.querySelector(
        `[data-task-item = '${taskItemNumber}']`
      ),
      checkmark = checkbox.firstChild;

    // if (taskItem.classList.contains("completed")) {
    //   removeClass(taskItem, "completed");
    //   addClass(checkmark, "fade-in-out");
    // } else {
    //   addClass(taskItem, "completed");
    //   removeClass(checkmark, "fade-in-out");
    // }
    (0,_helper_js__WEBPACK_IMPORTED_MODULE_4__.toggleClass)(taskItem, "completed");
    (0,_helper_js__WEBPACK_IMPORTED_MODULE_4__.toggleClass)(checkmark, "fade-in-out");
  });
}

function taskController() {
  // initialize event listener on app load
  setTaskEditable();
}




/***/ }),

/***/ "./src/components/taskForm.js":
/*!************************************!*\
  !*** ./src/components/taskForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/style.css */ "./src/stylesheets/style.css");



function createTaskFormButton(text) {
  let button = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button");

  button.textContent = text;
  button.setAttribute("type", "button");

  return button;
}

function createTaskHeaderField() {
  let headerContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    headerLabel = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label"),
    headerInputField = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea");

  headerLabel.textContent = "Task Name";

  headerLabel.setAttribute("for", "form-task-header");
  headerInputField.setAttribute("id", "form-task-header");
  headerInputField.setAttribute("required", "");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(headerInputField, "form-task-header");

  headerContainer.append(headerLabel, headerInputField);

  return headerContainer;
}

function createTaskDescriptionField() {
  let descriptionContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    descriptionLabel = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("label"),
    descriptionInputField = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea");

  descriptionLabel.textContent = "Description";

  descriptionLabel.setAttribute("for", "form-task-description");
  descriptionInputField.setAttribute("id", "form-task-description");

  descriptionContainer.append(descriptionLabel, descriptionInputField);

  return descriptionContainer;
}

function taskForm() {
  let formContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    taskItemForm = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("form"),
    headerField = createTaskHeaderField(),
    descriptionField = createTaskDescriptionField(),
    buttonContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
    cancelFormButton = createTaskFormButton("Cancel"),
    addTaskFormButton = createTaskFormButton("Add task");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(cancelFormButton, "form-cancel-button");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(addTaskFormButton, "form-add-task-button");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(taskItemForm, "task-form");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(formContainer, "task-form-container");

  addTaskFormButton.setAttribute("disabled", "");
  taskItemForm.setAttribute("novalidate", "");

  buttonContainer.append(cancelFormButton, addTaskFormButton);
  taskItemForm.append(headerField, descriptionField, buttonContainer);
  formContainer.append(taskItemForm);

  return formContainer;
}




/***/ }),

/***/ "./src/components/taskItem.js":
/*!************************************!*\
  !*** ./src/components/taskItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskItem": () => (/* binding */ taskItem)
/* harmony export */ });
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.js */ "./src/components/checkbox.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");



function taskItem(taskHeaderValue, taskDescriptionValue, taskItemNumber) {
  let taskItem = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    taskInformationContainer = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"),
    taskHeaderElement = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3"),
    taskDescriptionElement = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("p");

  taskHeaderElement.textContent = taskHeaderValue;
  taskDescriptionElement.textContent = taskDescriptionValue;

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(taskItem, "task-item");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(taskHeaderElement, "task-header");
  (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(taskDescriptionElement, "task-description");
  taskItem.dataset.taskItem = taskItemNumber;

  taskInformationContainer.append(taskHeaderElement, taskDescriptionElement);
  taskItem.append((0,_checkbox_js__WEBPACK_IMPORTED_MODULE_0__.checkbox)(taskItemNumber), taskInformationContainer);

  return taskItem;
}




/***/ }),

/***/ "./src/components/themeButton.js":
/*!***************************************!*\
  !*** ./src/components/themeButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "themeButton": () => (/* binding */ themeButton)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");
/* harmony import */ var _icons_light_theme_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/light-theme.svg */ "./src/icons/light-theme.svg");



function themeButton() {
  let themeButton = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
    icon = (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img");

  icon.setAttribute("src", _icons_light_theme_svg__WEBPACK_IMPORTED_MODULE_1__);
  icon.setAttribute("alt", "Light theme icon");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(themeButton, "theme-button");

  themeButton.append(icon);

  return themeButton;
}




/***/ }),

/***/ "./src/components/viewOptions.js":
/*!***************************************!*\
  !*** ./src/components/viewOptions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewOptions": () => (/* binding */ viewOptions)
/* harmony export */ });
/* harmony import */ var _components_boardViewButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/boardViewButton.js */ "./src/components/boardViewButton.js");
/* harmony import */ var _components_listViewButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/listViewButton.js */ "./src/components/listViewButton.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper.js */ "./src/helper.js");




function viewOptions() {
  let viewOptions = (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.createElement)("div");

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(viewOptions, "view-options");

  viewOptions.append((0,_components_boardViewButton_js__WEBPACK_IMPORTED_MODULE_0__.boardViewButton)(), (0,_components_listViewButton_js__WEBPACK_IMPORTED_MODULE_1__.listViewButton)());

  return viewOptions;
}




/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
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

function addClass(element, cssClass) {
  element.classList.add(cssClass);
}

function removeClass(element, cssClass) {
  element.classList.remove(cssClass);
}

function toggleClass(element, cssClass) {
  element.classList.toggle(cssClass);
}




/***/ }),

/***/ "./src/icons/check.svg":
/*!*****************************!*\
  !*** ./src/icons/check.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddce2e1e5ef60024f029.svg";

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

/***/ "./src/icons/view-board.svg":
/*!**********************************!*\
  !*** ./src/icons/view-board.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d6f85604211320659ca.svg";

/***/ }),

/***/ "./src/icons/view-list.svg":
/*!*********************************!*\
  !*** ./src/icons/view-list.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "176525d5635b224dfd88.svg";

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
/* harmony import */ var _components_appHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/appHeader.js */ "./src/components/appHeader.js");
/* harmony import */ var _components_taskController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/taskController.js */ "./src/components/taskController.js");
/* harmony import */ var _components_menuController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menuController */ "./src/components/menuController.js");
/* harmony import */ var _components_addTaskButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/addTaskButton.js */ "./src/components/addTaskButton.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper.js */ "./src/helper.js");
/* harmony import */ var _components_menubar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menubar.js */ "./src/components/menubar.js");
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stylesheets/style.css */ "./src/stylesheets/style.css");








function initControllers() {
  (0,_components_taskController_js__WEBPACK_IMPORTED_MODULE_1__.taskController)();
  (0,_components_menuController__WEBPACK_IMPORTED_MODULE_2__.menuController)();
}

function renderPage() {
  let bodyTag = document.body,
    mainTag = (0,_helper_js__WEBPACK_IMPORTED_MODULE_4__.createElement)("main"),
    taskList = (0,_helper_js__WEBPACK_IMPORTED_MODULE_4__.createElement)("div"),
    addTaskButtonOnLoad = (0,_components_addTaskButton_js__WEBPACK_IMPORTED_MODULE_3__.addTaskButton)();

  (0,_helper_js__WEBPACK_IMPORTED_MODULE_4__.addClass)(taskList, "task-list");

  taskList.append(addTaskButtonOnLoad);
  mainTag.append((0,_components_menubar_js__WEBPACK_IMPORTED_MODULE_5__.menubar)(), taskList);
  bodyTag.append((0,_components_appHeader_js__WEBPACK_IMPORTED_MODULE_0__.appHeader)(), mainTag);
}

(function initApp() {
  renderPage();
  initControllers();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzRDtBQUNVO0FBQ0g7QUFDQztBQUNSO0FBQ0o7QUFDakI7O0FBRWpDO0FBQ0EsRUFBRSw2RUFBYztBQUNoQixFQUFFLDBFQUFjO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSxjQUFjLHlEQUFhO0FBQzNCLGVBQWUseURBQWE7QUFDNUIsMEJBQTBCLDJFQUFhOztBQUV2QyxFQUFFLG9EQUFROztBQUVWO0FBQ0EsaUJBQWlCLCtEQUFPO0FBQ3hCLGlCQUFpQixtRUFBUztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZS5jc3M/YmZmYyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FkZFRhc2tCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXBwSGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FwcExvZ28uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYm9hcmRWaWV3QnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NoZWNrYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2Zvcm1WYWxpZGF0aW9uQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbGlzdFZpZXdCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWVudUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tZW51Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tZW51VGFicy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tZW51YmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL25ld1Byb2plY3RCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbmV3UHJvamVjdE92ZXJsYXlGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RTZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3RhYi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90aGVtZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy92aWV3T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmFwcC1sb2dvLWNvbnRhaW5lciA+IGltZyB7XFxuICBoZWlnaHQ6IDIuMjVyZW07XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5hcHAtbG9nby1jb250YWluZXIgPiBoMiB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogMXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpOyAqL1xcbn1cXG5cXG4udGhlbWUtYnV0dG9uIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4udmlldy1idXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgZ2FwOiAwLjFyZW07XFxufVxcblxcbi52aWV3LWJ1dHRvbiA+IGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi52aWV3LW9wdGlvbnMge1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm1lbnUtYmFyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tZW51LXRhYnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi50YWIge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRhYjpob3ZlcixcXG4ucHJvamVjdC10YWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4ubGluZWJyZWFrIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LXRhYiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcblxcbi5uZXctcHJvamVjdC1vdmVybGF5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybS1idXR0b25zIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiA5MCU7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAyNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmZhZGUtaW4tb3V0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxufVxcblxcbi5mYWRlLWluLW91dDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2xvc2VkIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwcHgpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1g7OztrQ0FHZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTs7O2tDQUdnQztFQUNoQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcbmlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmFwcC1sb2dvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uYXBwLWxvZ28tY29udGFpbmVyID4gaW1nIHtcXG4gIGhlaWdodDogMi4yNXJlbTtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLmFwcC1sb2dvLWNvbnRhaW5lciA+IGgyIHtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7ICovXFxufVxcblxcbi50aGVtZS1idXR0b24ge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxufVxcblxcbi52aWV3LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBnYXA6IDAuMXJlbTtcXG59XFxuXFxuLnZpZXctYnV0dG9uID4gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLnZpZXctb3B0aW9ucyB7XFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubWVudS1iYXIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1lbnUtdGFicyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLnRhYiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udGFiOmhvdmVyLFxcbi5wcm9qZWN0LXRhYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5saW5lYnJlYWsge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3Qtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtdGFiIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW92ZXJsYXkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtLWJ1dHRvbnMge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDkwJTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uZmFkZS1pbi1vdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXG59XFxuXFxuLmZhZGUtaW4tb3V0OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jbG9zZWQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDBweCk7XFxufVxcblxcbi5oaWRlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXNoZWV0cy9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gYWRkVGFza0J1dHRvbigpIHtcbiAgbGV0IHRhc2tCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIHRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG4gIGFkZENsYXNzKHRhc2tCdXR0b24sIFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuXG4gIHJldHVybiB0YXNrQnV0dG9uO1xufVxuXG5leHBvcnQgeyBhZGRUYXNrQnV0dG9uIH07XG4iLCJpbXBvcnQgeyBhcHBMb2dvIH0gZnJvbSBcIi4vYXBwTG9nby5qc1wiO1xuaW1wb3J0IHsgbWVudUJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL21lbnVCdXR0b24uanNcIjtcbmltcG9ydCB7IHRoZW1lQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGhlbWVCdXR0b24uanNcIjtcbmltcG9ydCB7IHZpZXdPcHRpb25zIH0gZnJvbSBcIi4vdmlld09wdGlvbnMuanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBhcHBIZWFkZXIoKSB7XG4gIGxldCBhcHBIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gIGFkZENsYXNzKGFwcEhlYWRlciwgXCJhcHBIZWFkZXJcIik7XG4gIGFwcEhlYWRlci5hcHBlbmQobWVudUJ1dHRvbigpLCBhcHBMb2dvKCksIHRoZW1lQnV0dG9uKCkpO1xuXG4gIHJldHVybiBhcHBIZWFkZXI7XG59XG5cbmV4cG9ydCB7IGFwcEhlYWRlciB9O1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5pbXBvcnQgbG9nb0ltZyBmcm9tIFwiLi4vaW1hZ2UvVG9kby1pc3QgTG9nby5zdmdcIjtcblxuZnVuY3Rpb24gYXBwTG9nbygpIHtcbiAgbGV0IGFwcExvZ29Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGFwcE5hbWUgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiksXG4gICAgbG9nb0ltYWdlID0gY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBhcHBOYW1lLnRleHRDb250ZW50ID0gXCJEbyBJdFwiO1xuXG4gIGxvZ29JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbG9nb0ltZyk7XG4gIGxvZ29JbWFnZS5zZXRBdHRyaWJ1dGUoXG4gICAgXCJhbHRcIixcbiAgICBcIlRvZG8taXN0IExvZ28uIENsaXBib2FyZHMgd2l0aCBjaGVja21hcmtzIG9uIHRoZW0uXCJcbiAgKTtcblxuICBhZGRDbGFzcyhhcHBMb2dvQ29udGFpbmVyLCBcImFwcC1sb2dvLWNvbnRhaW5lclwiKTtcblxuICBhcHBMb2dvQ29udGFpbmVyLmFwcGVuZChsb2dvSW1hZ2UsIGFwcE5hbWUpO1xuXG4gIHJldHVybiBhcHBMb2dvQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBhcHBMb2dvIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIuanNcIjtcbmltcG9ydCBib2FyZEljb24gZnJvbSBcIi4uL2ljb25zL3ZpZXctYm9hcmQuc3ZnXCI7XG5cbmZ1bmN0aW9uIGJvYXJkVmlld0J1dHRvbigpIHtcbiAgbGV0IGJvYXJkVmlld0J1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksXG4gICAgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgYm9hcmRWaWV3QnV0dG9uLnRleHRDb250ZW50ID0gXCJCb2FyZCBWaWV3XCI7XG5cbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYm9hcmRJY29uKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJCb2FyZCB2aWV3IGljb25cIik7XG5cbiAgYWRkQ2xhc3MoYm9hcmRWaWV3QnV0dG9uLCBcInZpZXctYnV0dG9uXCIpO1xuXG4gIGJvYXJkVmlld0J1dHRvbi5wcmVwZW5kKGljb24pO1xuXG4gIHJldHVybiBib2FyZFZpZXdCdXR0b247XG59XG5cbmV4cG9ydCB7IGJvYXJkVmlld0J1dHRvbiB9O1xuIiwiaW1wb3J0IHsgdG9nZ2xlVGFza1N0YXR1cyB9IGZyb20gXCIuL3Rhc2tDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIuanNcIjtcbmltcG9ydCBjaGVja21hcmtJY29uIGZyb20gXCIuLi9pY29ucy9jaGVjay5zdmdcIjtcblxuZnVuY3Rpb24gY2hlY2tib3godGFza0l0ZW1OdW1iZXIpIHtcbiAgbGV0IGNoZWNrYm94Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBjaGVja2JveCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgY2hlY2ttYXJrID0gY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBjaGVja21hcmsuc2V0QXR0cmlidXRlKFwic3JjXCIsIGNoZWNrbWFya0ljb24pO1xuICBjaGVja21hcmsuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiQ2hlY2ttYXJrIGljb25cIik7XG5cbiAgYWRkQ2xhc3MoY2hlY2tib3gsIFwiY2hlY2tib3hcIik7XG4gIGFkZENsYXNzKGNoZWNrbWFyaywgXCJmYWRlLWluLW91dFwiKTtcbiAgdG9nZ2xlVGFza1N0YXR1cyhjaGVja2JveCwgdGFza0l0ZW1OdW1iZXIpO1xuXG4gIGNoZWNrYm94LmFwcGVuZChjaGVja21hcmspO1xuICBjaGVja2JveENvbnRhaW5lci5hcHBlbmQoY2hlY2tib3gpO1xuXG4gIHJldHVybiBjaGVja2JveENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY2hlY2tib3ggfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gXCIuLi9oZWxwZXIuanNcIjtcblxuLy8gQWdncmVzc2l2ZWx5IGNoZWNrcyBhbmQgZGlzYWJsZXMgdGhlIGFkZCBidXR0b24gaWYgaWYgZm9ybSBmaWVsZCBpcyBlbXB0eVxuZnVuY3Rpb24gbWlzc2luZ1ZhbHVlQWdncmVzc2l2ZVZhbGlkYXRpb24oZXZlbnRMaXN0ZW5lck5vZGUsIGJ1dHRvblRvRGlzYWJsZSkge1xuICBldmVudExpc3RlbmVyTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBidXR0b25Ub0Rpc2FibGUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRvRGlzYWJsZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbiB9O1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5pbXBvcnQgbGlzdEljb24gZnJvbSBcIi4uL2ljb25zL3ZpZXctbGlzdC5zdmdcIjtcblxuZnVuY3Rpb24gbGlzdFZpZXdCdXR0b24oKSB7XG4gIGxldCBsaXN0Vmlld0J1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksXG4gICAgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgbGlzdFZpZXdCdXR0b24udGV4dENvbnRlbnQgPSBcIkxpc3QgVmlld1wiO1xuXG4gIGljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGxpc3RJY29uKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJMaXN0IGljb25cIik7XG5cbiAgYWRkQ2xhc3MobGlzdFZpZXdCdXR0b24sIFwidmlldy1idXR0b25cIik7XG5cbiAgbGlzdFZpZXdCdXR0b24ucHJlcGVuZChpY29uKTtcblxuICByZXR1cm4gbGlzdFZpZXdCdXR0b247XG59XG5cbmV4cG9ydCB7IGxpc3RWaWV3QnV0dG9uIH07XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIuanNcIjtcbmltcG9ydCBtZW51SWNvbiBmcm9tIFwiLi4vaWNvbnMvbWVudS5zdmdcIjtcblxuZnVuY3Rpb24gbWVudUJ1dHRvbigpIHtcbiAgbGV0IG1lbnVCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLFxuICAgIGljb24gPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIGljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIG1lbnVJY29uKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJNZW51IGljb25cIik7XG5cbiAgYWRkQ2xhc3MobWVudUJ1dHRvbiwgXCJtZW51LWJ1dHRvblwiKTtcblxuICBtZW51QnV0dG9uLmFwcGVuZChpY29uKTtcblxuICByZXR1cm4gbWVudUJ1dHRvbjtcbn1cblxuZXhwb3J0IHsgbWVudUJ1dHRvbiB9O1xuIiwiaW1wb3J0IHsgbmV3UHJvamVjdE92ZXJsYXlGb3JtIH0gZnJvbSBcIi4vbmV3UHJvamVjdE92ZXJsYXlGb3JtLmpzXCI7XG5pbXBvcnQgeyB0YWIgfSBmcm9tIFwiLi90YWIuanNcIjtcbmltcG9ydCB7IG1pc3NpbmdWYWx1ZUFnZ3Jlc3NpdmVWYWxpZGF0aW9uIH0gZnJvbSBcIi4vZm9ybVZhbGlkYXRpb25Db250cm9scy5qc1wiO1xuaW1wb3J0IHsgdG9nZ2xlQ2xhc3MgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5cbi8vIEV2ZW50IExpc3RlbmVycyBleHBlY3QgYSBmdW5jdGlvbiByZWZlcmVuY2UgaW5zdGVhZCBvZiB0aGUgZnVuY3Rpb24gaXRzZWxmLlxuLy8gVG8gYXZvaWQgY2FsbGluZyBmdW5jdGlvbiBpbW1lZGlhdGVseSwgZWl0aGVyIGJpbmQgJ3RoaXMnLCBjcmVhdGUgYW5cbi8vIGFub255bW91cyBmdW5jdGlvbiwgb3IgaGF2ZSBhIGZ1bmN0aW9uIHJldHVybiBhIGZ1bmN0aW9uLlxubGV0IG1lbnViYXJUcmFuc2l0aW9uZW5kTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGxldCBtZW51YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJhclwiKTtcbiAgdG9nZ2xlQ2xhc3MobWVudWJhciwgXCJoaWRlXCIpO1xufTtcblxuZnVuY3Rpb24gYWRkTWVudWJhclRyYW5zaXRpb25lbmRMaXN0ZW5lcihtYWluQ29udGVudCkge1xuICBtYWluQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBtZW51YmFyVHJhbnNpdGlvbmVuZExpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWVudWJhclRyYW5zaXRpb25lbmRMaXN0ZW5lcihtYWluQ29udGVudCkge1xuICBtYWluQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgIFwidHJhbnNpdGlvbmVuZFwiLFxuICAgIG1lbnViYXJUcmFuc2l0aW9uZW5kTGlzdGVuZXJcbiAgKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudWJhclZpc2liaWxpdHkoKSB7XG4gIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1dHRvblwiKSxcbiAgICBtZW51YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJhclwiKSxcbiAgICBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAobWFpbkNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAvLyBSZW1vdmUgbGlzdGVuZXIgYmVmb3JlIHN0YXJ0aW5nIHRyYW5zaXRpb24gdG8gYXZvaWQgdHJpZ2dlcmluZyB0aGVcbiAgICAgIC8vIGxpc3RlbmVyIHRvIGhpZGUgdGhlIG1lbnUgd2hlbiB0aGUgdHJhbnNpdGlvbiBlbmRzLlxuICAgICAgcmVtb3ZlTWVudWJhclRyYW5zaXRpb25lbmRMaXN0ZW5lcihtYWluQ29udGVudCk7XG5cbiAgICAgIC8vIE1ha2UgbWVudSB2aXNpYmxlIGJlZm9yZSBzdGFydGluZyB0cmFuc2l0aW9uIHRvIHNob3cgbWVudS5cbiAgICAgIHRvZ2dsZUNsYXNzKG1lbnViYXIsIFwiaGlkZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWRkIGxpc3RlbmVyIHRvIHNldCBtZW51YmFyIHZpc2liaWxpdHkgb2ZmIGFmdGVyIGl0IGhhcyB0cmFuc2l0aW9uZWRcbiAgICAgIC8vIG91dHNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAgYWRkTWVudWJhclRyYW5zaXRpb25lbmRMaXN0ZW5lcihtYWluQ29udGVudCk7XG4gICAgfVxuICAgIHRvZ2dsZUNsYXNzKG1haW5Db250ZW50LCBcImNsb3NlZFwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0T3ZlcmxheUZvcm0oKSB7XG4gIGxldCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b25cIik7XG5cbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG5ld1Byb2plY3RPdmVybGF5Rm9ybSgpKTtcblxuICAgIGxldCBuZXdQcm9qZWN0TmFtZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LW5hbWVcIiksXG4gICAgICBuZXdQcm9qZWN0QWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIubmV3LXByb2plY3QtZm9ybS1hZGQtYnV0dG9uXCJcbiAgICAgICk7XG5cbiAgICBjYW5jZWxOZXdQcm9qZWN0QnV0dG9uTGlzdGVuZXIoKTtcbiAgICBhZGROZXdQcm9qZWN0QnV0dG9uTGlzdGVuZXIoKTtcbiAgICBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbihuZXdQcm9qZWN0TmFtZU5vZGUsIG5ld1Byb2plY3RBZGRCdXR0b24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsTmV3UHJvamVjdEJ1dHRvbkxpc3RlbmVyKCkge1xuICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1mb3JtLWNhbmNlbC1idXR0b25cIik7XG5cbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGJvZHlUYWcgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgbmV3UHJvamVjdE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LW92ZXJsYXlcIik7XG5cbiAgICBib2R5VGFnLnJlbW92ZUNoaWxkKG5ld1Byb2plY3RPdmVybGF5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RCdXR0b25MaXN0ZW5lcigpIHtcbiAgbGV0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLm5ldy1wcm9qZWN0LWZvcm0tYWRkLWJ1dHRvblwiXG4gICk7XG5cbiAgYWRkTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBib2R5VGFnID0gZG9jdW1lbnQuYm9keSxcbiAgICAgIG5ld1Byb2plY3RPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1vdmVybGF5XCIpLFxuICAgICAgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKSxcbiAgICAgIHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1uYW1lXCIpLnZhbHVlLFxuICAgICAgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIjbmV3LXByb2plY3QtZGVzY3JpcHRpb25cIlxuICAgICAgKS52YWx1ZSxcbiAgICAgIHByb2plY3RUYWIgPSB0YWIocHJvamVjdE5hbWUsIFwicHJvamVjdC10YWJcIik7XG5cbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdFRhYik7XG5cbiAgICBib2R5VGFnLnJlbW92ZUNoaWxkKG5ld1Byb2plY3RPdmVybGF5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1lbnVDb250cm9sbGVyKCkge1xuICB0b2dnbGVNZW51YmFyVmlzaWJpbGl0eSgpO1xuICBkaXNwbGF5TmV3UHJvamVjdE92ZXJsYXlGb3JtKCk7XG59XG5cbmV4cG9ydCB7IG1lbnVDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyB0YWIgfSBmcm9tIFwiLi90YWIuanNcIjtcbmltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBtZW51VGFicygpIHtcbiAgbGV0IG1lbnVUYWJzID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICB0YWJBcnIgPSBbXCJJbmJveFwiLCBcIlRvZGF5XCIsIFwiVGhpcyBXZWVrXCIsIFwiQ29tcGxldGVkXCJdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgbWVudVRhYnMuYXBwZW5kKHRhYih0YWJBcnJbaV0sICd0YWInKSk7XG4gIH1cblxuICBhZGRDbGFzcyhtZW51VGFicywgXCJtZW51LXRhYnNcIik7XG5cbiAgcmV0dXJuIG1lbnVUYWJzO1xufVxuXG5leHBvcnQgeyBtZW51VGFicyB9O1xuIiwiaW1wb3J0IHsgbWVudVRhYnMgfSBmcm9tIFwiLi9tZW51VGFicy5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdFNlY3Rpb24gfSBmcm9tIFwiLi9wcm9qZWN0U2VjdGlvbi5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIG1lbnViYXIoKSB7XG4gIGxldCBtZW51YmFyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBsaW5lYnJlYWsgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZENsYXNzKG1lbnViYXIsIFwibWVudS1iYXJcIik7XG4gIGFkZENsYXNzKGxpbmVicmVhaywgXCJsaW5lYnJlYWtcIik7XG5cbiAgbWVudWJhci5hcHBlbmQobWVudVRhYnMoKSwgbGluZWJyZWFrLCBwcm9qZWN0U2VjdGlvbigpKTtcblxuICByZXR1cm4gbWVudWJhcjtcbn1cblxuZXhwb3J0IHsgbWVudWJhciB9O1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5pbXBvcnQgcGx1c0ljb24gZnJvbSBcIi4uL2ljb25zL3BsdXMuc3ZnXCI7XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3RCdXR0b24oKSB7XG4gIGxldCBuZXdQcm9qZWN0QnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSxcbiAgICBpY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBpY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBwbHVzSWNvbik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiQWRkIG5ldyBwcm9qZWN0IGljb25cIik7XG5cbiAgYWRkQ2xhc3MobmV3UHJvamVjdEJ1dHRvbiwgXCJuZXctcHJvamVjdC1idXR0b25cIik7XG5cbiAgbmV3UHJvamVjdEJ1dHRvbi5hcHBlbmQoaWNvbik7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3RCdXR0b247XG59XG5cbmV4cG9ydCB7IG5ld1Byb2plY3RCdXR0b24gfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBmb3JtSGVhZGVyKCkge1xuICBsZXQgaGVhZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xuXG4gIGFkZENsYXNzKGhlYWRlckNvbnRhaW5lciwgXCJuZXctcHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGhlYWRlcik7XG5cbiAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE5hbWVGb3JtRmllbGQoKSB7XG4gIGxldCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgcHJvamVjdE5hbWVMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcbiAgICBwcm9qZWN0TmFtZUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIHByb2plY3ROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZTpcIjtcbiAgcHJvamVjdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXctcHJvamVjdC1uYW1lXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXByb2plY3QtbmFtZVwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3UHJvamVjdE5hbWVcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTUwXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gIGFkZENsYXNzKHByb2plY3ROYW1lQ29udGFpbmVyLCBcIm5ldy1wcm9qZWN0LW5hbWUtZm9ybS1maWVsZFwiKTtcblxuICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVMYWJlbCwgcHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgcmV0dXJuIHByb2plY3ROYW1lQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0RGVzY3JpcHRpb25Gb3JtRmllbGQoKSB7XG4gIGxldCBwcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHByb2plY3REZXNjcmlwdGlvbkxhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuICAgIHByb2plY3REZXNjcmlwdGlvblRleHRhcmVhID0gY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG4gIHByb2plY3REZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IERlc2NyaXB0aW9uOlwiO1xuICBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXctcHJvamVjdC1kZXNjcmlwdGlvblwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uVGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdC1kZXNjcmlwdGlvblwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uVGV4dGFyZWEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ld1Byb2plY3REZXNjcmlwdGlvblwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uVGV4dGFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjNcIik7XG4gIHByb2plY3REZXNjcmlwdGlvblRleHRhcmVhLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwMFwiKTtcblxuICBhZGRDbGFzcyhwcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXIsIFwibmV3LXByb2plY3QtZGVzY3JpcHRpb24tZm9ybS1maWVsZFwiKTtcblxuICBwcm9qZWN0RGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKFxuICAgIHByb2plY3REZXNjcmlwdGlvbkxhYmVsLFxuICAgIHByb2plY3REZXNjcmlwdGlvblRleHRhcmVhXG4gICk7XG5cbiAgcmV0dXJuIHByb2plY3REZXNjcmlwdGlvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQsIGNzc0NsYXNzKSB7XG4gIGxldCBidXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBhZGRDbGFzcyhidXR0b24sIGNzc0NsYXNzKTtcblxuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0Rm9ybUJ1dHRvbnMoKSB7XG4gIGxldCBidXR0b25zQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICBjYW5jZWxOZXdQcm9qZWN0QnV0dG9uID0gY3JlYXRlQnV0dG9uKFwiQ2FuY2VsXCIsIFwibmV3LXByb2plY3QtZm9ybS1jYW5jZWwtYnV0dG9uXCIpLFxuICAgIGFkZE5ld1Byb2plY3RCdXR0b24gPSBjcmVhdGVCdXR0b24oXG4gICAgICBcIkFkZCBOZXcgUHJvamVjdFwiLFxuICAgICAgXCJuZXctcHJvamVjdC1mb3JtLWFkZC1idXR0b25cIlxuICAgICk7XG5cbiAgYWRkQ2xhc3MoYnV0dG9uc0NvbnRhaW5lciwgXCJuZXctcHJvamVjdC1mb3JtLWJ1dHRvbnNcIik7XG4gIGFkZE5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGNhbmNlbE5ld1Byb2plY3RCdXR0b24sIGFkZE5ld1Byb2plY3RCdXR0b24pO1xuXG4gIHJldHVybiBidXR0b25zQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0Rm9ybSgpIHtcbiAgbGV0IG5ld1Byb2plY3RGb3JtID0gY3JlYXRlRWxlbWVudChcImZvcm1cIiksXG4gICAgbmV3UHJvamVjdEJ1dHRvbnMgPSBwcm9qZWN0Rm9ybUJ1dHRvbnMoKTtcblxuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXdQcm9qZWN0Rm9ybVwiKTtcbiAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwibm92YWxpZGF0ZVwiLCBcIlwiKTtcblxuICBhZGRDbGFzcyhuZXdQcm9qZWN0Rm9ybSwgXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuXG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZChcbiAgICBmb3JtSGVhZGVyKCksXG4gICAgcHJvamVjdE5hbWVGb3JtRmllbGQoKSxcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25Gb3JtRmllbGQoKSxcbiAgICBuZXdQcm9qZWN0QnV0dG9uc1xuICApO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0Rm9ybTtcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdE92ZXJsYXlGb3JtKCkge1xuICBsZXQgbmV3UHJvamVjdE92ZXJsYXkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZENsYXNzKG5ld1Byb2plY3RPdmVybGF5LCBcIm5ldy1wcm9qZWN0LW92ZXJsYXlcIik7XG4gIG5ld1Byb2plY3RPdmVybGF5LmFwcGVuZChuZXdQcm9qZWN0Rm9ybSgpKTtcblxuICByZXR1cm4gbmV3UHJvamVjdE92ZXJsYXk7XG59XG5cbmV4cG9ydCB7IG5ld1Byb2plY3RPdmVybGF5Rm9ybSB9O1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHByb2plY3RMaXN0KCkge1xuICBsZXQgcHJvamVjdExpc3QgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZENsYXNzKHByb2plY3RMaXN0LCBcInByb2plY3QtbGlzdFwiKTtcblxuICByZXR1cm4gcHJvamVjdExpc3Q7XG59XG5cbmV4cG9ydCB7IHByb2plY3RMaXN0IH07XG4iLCJpbXBvcnQgeyBuZXdQcm9qZWN0QnV0dG9uIH0gZnJvbSBcIi4vbmV3UHJvamVjdEJ1dHRvbi5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdC5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHByb2plY3RTZWN0aW9uKCkge1xuICBsZXQgcHJvamVjdFNlY3Rpb24gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHByb2plY3RIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcblxuICBhZGRDbGFzcyhwcm9qZWN0SGVhZGVyLCBcInByb2plY3QtaGVhZGVyXCIpO1xuICBhZGRDbGFzcyhwcm9qZWN0U2VjdGlvbiwgXCJwcm9qZWN0LXNlY3Rpb25cIik7XG5cbiAgcHJvamVjdEhlYWRlci5hcHBlbmQoaGVhZGluZywgbmV3UHJvamVjdEJ1dHRvbigpKTtcbiAgcHJvamVjdFNlY3Rpb24uYXBwZW5kKHByb2plY3RIZWFkZXIsIHByb2plY3RMaXN0KCkpO1xuXG4gIHJldHVybiBwcm9qZWN0U2VjdGlvbjtcbn1cblxuZXhwb3J0IHsgcHJvamVjdFNlY3Rpb24gfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiB0YWIodGV4dCwgY3NzQ2xhc3MpIHtcbiAgbGV0IHRhYiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgdGFiLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYWRkQ2xhc3ModGFiLCBjc3NDbGFzcyk7XG5cbiAgcmV0dXJuIHRhYjtcbn1cblxuZXhwb3J0IHsgdGFiIH07XG4iLCJpbXBvcnQgeyB0YXNrRm9ybSB9IGZyb20gXCIuL3Rhc2tGb3JtLmpzXCI7XG5pbXBvcnQgeyBhZGRUYXNrQnV0dG9uIH0gZnJvbSBcIi4vYWRkVGFza0J1dHRvbi5qc1wiO1xuaW1wb3J0IHsgdGFza0l0ZW0gfSBmcm9tIFwiLi90YXNrSXRlbS5qc1wiO1xuaW1wb3J0IHsgbWlzc2luZ1ZhbHVlQWdncmVzc2l2ZVZhbGlkYXRpb24gfSBmcm9tIFwiLi9mb3JtVmFsaWRhdGlvbkNvbnRyb2xzLmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsIHRvZ2dsZUNsYXNzIH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuXG5mdW5jdGlvbiBzZXRUYXNrRWRpdGFibGUoKSB7XG4gIGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XG5cbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcblxuICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrRm9ybSgpKTtcbiAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIGxldCBmb3JtVGFza0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10YXNrLWhlYWRlclwiKSxcbiAgICAgIGZvcm1BZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWFkZC10YXNrLWJ1dHRvblwiKTtcblxuICAgIC8vIEFjdGl2YXRlIGxpc3RlbmVycyBmb3IgZm9ybSBidXR0b25zXG4gICAgY2FuY2VsVGFza0VkaXRMaXN0ZW5lcigpO1xuICAgIGFkZFRhc2tUb1Rhc2tMaXN0TGlzdGVuZXIoKTtcbiAgICBtaXNzaW5nVmFsdWVBZ2dyZXNzaXZlVmFsaWRhdGlvbihmb3JtVGFza0hlYWRlciwgZm9ybUFkZFRhc2tCdXR0b24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsVGFza0VkaXRMaXN0ZW5lcigpIHtcbiAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jYW5jZWwtYnV0dG9uXCIpO1xuXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpLFxuICAgICAgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybS1jb250YWluZXJcIik7XG5cbiAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrRm9ybUNvbnRhaW5lcik7XG5cbiAgICBpZiAoIXRhc2tMaXN0LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpKSkge1xuICAgICAgdGFza0xpc3QuYXBwZW5kKGFkZFRhc2tCdXR0b24oKSk7XG4gICAgICBzZXRUYXNrRWRpdGFibGUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9UYXNrTGlzdExpc3RlbmVyKCkge1xuICBsZXQgZm9ybUFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tYWRkLXRhc2stYnV0dG9uXCIpO1xuXG4gIGZvcm1BZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIiksXG4gICAgICB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtLWNvbnRhaW5lclwiKSxcbiAgICAgIHRhc2tIZWFkZXJWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10YXNrLWhlYWRlclwiKS52YWx1ZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIjZm9ybS10YXNrLWRlc2NyaXB0aW9uXCJcbiAgICAgICkudmFsdWUsXG4gICAgICB0YXNrSXRlbU51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWl0ZW1cIikubGVuZ3RoICsgMTtcblxuICAgIHRhc2tMaXN0LnJlbW92ZUNoaWxkKHRhc2tGb3JtQ29udGFpbmVyKTtcbiAgICB0YXNrTGlzdC5hcHBlbmQoXG4gICAgICB0YXNrSXRlbSh0YXNrSGVhZGVyVmFsdWUsIHRhc2tEZXNjcmlwdGlvblZhbHVlLCB0YXNrSXRlbU51bWJlciksXG4gICAgICBhZGRUYXNrQnV0dG9uKClcbiAgICApO1xuXG4gICAgc2V0VGFza0VkaXRhYmxlKCk7XG4gIH0pO1xufVxuXG4vLyBBZ2dyZXNzaXZlbHkgY2hlY2tzIGlmIHRhc2sgaGVhZGVyIGZpZWxkIGlzIGVtcHR5IGFuZCBkaXNhYmxlcyBcIkFkZCB0YXNrIGJ1dHRvblwiIGlmIGVtcHR5XG5mdW5jdGlvbiBpc0Zvcm1UYXNrSGVhZGVyRW1wdHkoKSB7XG4gIGxldCBmb3JtVGFza0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10YXNrLWhlYWRlclwiKSxcbiAgICBmb3JtQWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1hZGQtdGFzay1idXR0b25cIik7XG5cbiAgZm9ybVRhc2tIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgZm9ybUFkZFRhc2tCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1BZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRhc2tTdGF0dXMoY2hlY2tib3gsIHRhc2tJdGVtTnVtYmVyKSB7XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHRhc2tJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLXRhc2staXRlbSA9ICcke3Rhc2tJdGVtTnVtYmVyfSddYFxuICAgICAgKSxcbiAgICAgIGNoZWNrbWFyayA9IGNoZWNrYm94LmZpcnN0Q2hpbGQ7XG5cbiAgICAvLyBpZiAodGFza0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGVkXCIpKSB7XG4gICAgLy8gICByZW1vdmVDbGFzcyh0YXNrSXRlbSwgXCJjb21wbGV0ZWRcIik7XG4gICAgLy8gICBhZGRDbGFzcyhjaGVja21hcmssIFwiZmFkZS1pbi1vdXRcIik7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGFkZENsYXNzKHRhc2tJdGVtLCBcImNvbXBsZXRlZFwiKTtcbiAgICAvLyAgIHJlbW92ZUNsYXNzKGNoZWNrbWFyaywgXCJmYWRlLWluLW91dFwiKTtcbiAgICAvLyB9XG4gICAgdG9nZ2xlQ2xhc3ModGFza0l0ZW0sIFwiY29tcGxldGVkXCIpO1xuICAgIHRvZ2dsZUNsYXNzKGNoZWNrbWFyaywgXCJmYWRlLWluLW91dFwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tDb250cm9sbGVyKCkge1xuICAvLyBpbml0aWFsaXplIGV2ZW50IGxpc3RlbmVyIG9uIGFwcCBsb2FkXG4gIHNldFRhc2tFZGl0YWJsZSgpO1xufVxuXG5leHBvcnQgeyB0YXNrQ29udHJvbGxlciwgdG9nZ2xlVGFza1N0YXR1cyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgYWRkQ2xhc3MgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXNoZWV0cy9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm1CdXR0b24odGV4dCkge1xuICBsZXQgYnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblxuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrSGVhZGVyRmllbGQoKSB7XG4gIGxldCBoZWFkZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIGhlYWRlckxhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuICAgIGhlYWRlcklucHV0RmllbGQgPSBjcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cbiAgaGVhZGVyTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgTmFtZVwiO1xuXG4gIGhlYWRlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tdGFzay1oZWFkZXJcIik7XG4gIGhlYWRlcklucHV0RmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLXRhc2staGVhZGVyXCIpO1xuICBoZWFkZXJJbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBhZGRDbGFzcyhoZWFkZXJJbnB1dEZpZWxkLCBcImZvcm0tdGFzay1oZWFkZXJcIik7XG5cbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZChoZWFkZXJMYWJlbCwgaGVhZGVySW5wdXRGaWVsZCk7XG5cbiAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Rlc2NyaXB0aW9uRmllbGQoKSB7XG4gIGxldCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgZGVzY3JpcHRpb25MYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcbiAgICBkZXNjcmlwdGlvbklucHV0RmllbGQgPSBjcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblxuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tdGFzay1kZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS10YXNrLWRlc2NyaXB0aW9uXCIpO1xuXG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvbkxhYmVsLCBkZXNjcmlwdGlvbklucHV0RmllbGQpO1xuXG4gIHJldHVybiBkZXNjcmlwdGlvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gdGFza0Zvcm0oKSB7XG4gIGxldCBmb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICB0YXNrSXRlbUZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiKSxcbiAgICBoZWFkZXJGaWVsZCA9IGNyZWF0ZVRhc2tIZWFkZXJGaWVsZCgpLFxuICAgIGRlc2NyaXB0aW9uRmllbGQgPSBjcmVhdGVUYXNrRGVzY3JpcHRpb25GaWVsZCgpLFxuICAgIGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgY2FuY2VsRm9ybUJ1dHRvbiA9IGNyZWF0ZVRhc2tGb3JtQnV0dG9uKFwiQ2FuY2VsXCIpLFxuICAgIGFkZFRhc2tGb3JtQnV0dG9uID0gY3JlYXRlVGFza0Zvcm1CdXR0b24oXCJBZGQgdGFza1wiKTtcblxuICBhZGRDbGFzcyhjYW5jZWxGb3JtQnV0dG9uLCBcImZvcm0tY2FuY2VsLWJ1dHRvblwiKTtcbiAgYWRkQ2xhc3MoYWRkVGFza0Zvcm1CdXR0b24sIFwiZm9ybS1hZGQtdGFzay1idXR0b25cIik7XG4gIGFkZENsYXNzKHRhc2tJdGVtRm9ybSwgXCJ0YXNrLWZvcm1cIik7XG4gIGFkZENsYXNzKGZvcm1Db250YWluZXIsIFwidGFzay1mb3JtLWNvbnRhaW5lclwiKTtcblxuICBhZGRUYXNrRm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgdGFza0l0ZW1Gb3JtLnNldEF0dHJpYnV0ZShcIm5vdmFsaWRhdGVcIiwgXCJcIik7XG5cbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjYW5jZWxGb3JtQnV0dG9uLCBhZGRUYXNrRm9ybUJ1dHRvbik7XG4gIHRhc2tJdGVtRm9ybS5hcHBlbmQoaGVhZGVyRmllbGQsIGRlc2NyaXB0aW9uRmllbGQsIGJ1dHRvbkNvbnRhaW5lcik7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kKHRhc2tJdGVtRm9ybSk7XG5cbiAgcmV0dXJuIGZvcm1Db250YWluZXI7XG59XG5cbmV4cG9ydCB7IHRhc2tGb3JtIH07XG4iLCJpbXBvcnQgeyBjaGVja2JveCB9IGZyb20gXCIuL2NoZWNrYm94LmpzXCI7XG5pbXBvcnQgeyBhZGRDbGFzcywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9oZWxwZXIuanNcIjtcblxuZnVuY3Rpb24gdGFza0l0ZW0odGFza0hlYWRlclZhbHVlLCB0YXNrRGVzY3JpcHRpb25WYWx1ZSwgdGFza0l0ZW1OdW1iZXIpIHtcbiAgbGV0IHRhc2tJdGVtID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICB0YXNrSW5mb3JtYXRpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgIHRhc2tIZWFkZXJFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImgzXCIpLFxuICAgIHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICB0YXNrSGVhZGVyRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2tIZWFkZXJWYWx1ZTtcbiAgdGFza0Rlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2tEZXNjcmlwdGlvblZhbHVlO1xuXG4gIGFkZENsYXNzKHRhc2tJdGVtLCBcInRhc2staXRlbVwiKTtcbiAgYWRkQ2xhc3ModGFza0hlYWRlckVsZW1lbnQsIFwidGFzay1oZWFkZXJcIik7XG4gIGFkZENsYXNzKHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQsIFwidGFzay1kZXNjcmlwdGlvblwiKTtcbiAgdGFza0l0ZW0uZGF0YXNldC50YXNrSXRlbSA9IHRhc2tJdGVtTnVtYmVyO1xuXG4gIHRhc2tJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQodGFza0hlYWRlckVsZW1lbnQsIHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQpO1xuICB0YXNrSXRlbS5hcHBlbmQoY2hlY2tib3godGFza0l0ZW1OdW1iZXIpLCB0YXNrSW5mb3JtYXRpb25Db250YWluZXIpO1xuXG4gIHJldHVybiB0YXNrSXRlbTtcbn1cblxuZXhwb3J0IHsgdGFza0l0ZW0gfTtcbiIsImltcG9ydCB7IGFkZENsYXNzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2hlbHBlci5qc1wiO1xuaW1wb3J0IGxpZ2h0SWNvbiBmcm9tIFwiLi4vaWNvbnMvbGlnaHQtdGhlbWUuc3ZnXCI7XG5cbmZ1bmN0aW9uIHRoZW1lQnV0dG9uKCkge1xuICBsZXQgdGhlbWVCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLFxuICAgIGljb24gPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIGljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGxpZ2h0SWNvbik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiTGlnaHQgdGhlbWUgaWNvblwiKTtcblxuICBhZGRDbGFzcyh0aGVtZUJ1dHRvbiwgXCJ0aGVtZS1idXR0b25cIik7XG5cbiAgdGhlbWVCdXR0b24uYXBwZW5kKGljb24pO1xuXG4gIHJldHVybiB0aGVtZUJ1dHRvbjtcbn1cblxuZXhwb3J0IHsgdGhlbWVCdXR0b24gfTtcbiIsImltcG9ydCB7IGJvYXJkVmlld0J1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL2JvYXJkVmlld0J1dHRvbi5qc1wiO1xuaW1wb3J0IHsgbGlzdFZpZXdCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9saXN0Vmlld0J1dHRvbi5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHZpZXdPcHRpb25zKCkge1xuICBsZXQgdmlld09wdGlvbnMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGFkZENsYXNzKHZpZXdPcHRpb25zLCBcInZpZXctb3B0aW9uc1wiKTtcblxuICB2aWV3T3B0aW9ucy5hcHBlbmQoYm9hcmRWaWV3QnV0dG9uKCksIGxpc3RWaWV3QnV0dG9uKCkpO1xuXG4gIHJldHVybiB2aWV3T3B0aW9ucztcbn1cblxuZXhwb3J0IHsgdmlld09wdGlvbnMgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY3NzQ2xhc3MpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY3NzQ2xhc3MpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY3NzQ2xhc3MpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNzc0NsYXNzKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCB0b2dnbGVDbGFzcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGFwcEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwSGVhZGVyLmpzXCI7XG5pbXBvcnQgeyB0YXNrQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFza0NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IG1lbnVDb250cm9sbGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tZW51Q29udHJvbGxlclwiO1xuaW1wb3J0IHsgYWRkVGFza0J1dHRvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWRkVGFza0J1dHRvbi5qc1wiO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9oZWxwZXIuanNcIjtcbmltcG9ydCB7IG1lbnViYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnViYXIuanNcIjtcbmltcG9ydCBcIi4vc3R5bGVzaGVldHMvc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGluaXRDb250cm9sbGVycygpIHtcbiAgdGFza0NvbnRyb2xsZXIoKTtcbiAgbWVudUNvbnRyb2xsZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcbiAgbGV0IGJvZHlUYWcgPSBkb2N1bWVudC5ib2R5LFxuICAgIG1haW5UYWcgPSBjcmVhdGVFbGVtZW50KFwibWFpblwiKSxcbiAgICB0YXNrTGlzdCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgYWRkVGFza0J1dHRvbk9uTG9hZCA9IGFkZFRhc2tCdXR0b24oKTtcblxuICBhZGRDbGFzcyh0YXNrTGlzdCwgXCJ0YXNrLWxpc3RcIik7XG5cbiAgdGFza0xpc3QuYXBwZW5kKGFkZFRhc2tCdXR0b25PbkxvYWQpO1xuICBtYWluVGFnLmFwcGVuZChtZW51YmFyKCksIHRhc2tMaXN0KTtcbiAgYm9keVRhZy5hcHBlbmQoYXBwSGVhZGVyKCksIG1haW5UYWcpO1xufVxuXG4oZnVuY3Rpb24gaW5pdEFwcCgpIHtcbiAgcmVuZGVyUGFnZSgpO1xuICBpbml0Q29udHJvbGxlcnMoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=