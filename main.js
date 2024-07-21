"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/background.webp */ "./src/assets/background.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* GLOBAL */
*,
*::before,
*::after{
  box-sizing: border-box;
  margin: 0;
}

:root{
  font-family: "Fredoka", sans-serif;
  --red: #D57663;
  --dark-red: #F7502F;
  --green: #A2D399;
  --coffee: #2A2217;
  --soft-brown: #E7D7A9;
}

body{
  margin: 0;
}

/* HEADER */
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--coffee);
  padding: 0.8rem 7rem;
  height: 13vh;
}

.logo-container{
  display: flex;
  align-items: center;
  gap: 3rem;
}

.logo-container>h1{
  color: var(--soft-brown);
  margin: 0;
  font-size: 3.4rem;
  font-weight: 300;
}

.logo-container>img{
  width: 115px;
}

nav>button{
  background: none;
  color: var(--soft-brown);
  margin-right: 1.3rem;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s ease;
}

nav>button:hover{
  color: var(--red);
}

/* HOME PAGE */
.home{
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center fixed;
  background-size: cover;
  display: grid;
  place-items: center;
  height: 87vh;
}

.hero{
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.hero>h2{
  background: linear-gradient(to right, var(--soft-brown) 0%, var(--red) 100%); 
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5rem; 
}

.hero>p{
  color: var(--soft-brown);
  font-weight: 600;
  font-size: 1.3rem;
}

.hero>button,
.contact-card>form button{
  padding: 0.6rem 1.4rem;
  font-size: 1.5rem;
  font-family: inherit;
  font-weight: 500;
  border-radius: 25px;
  background-color: var(--red);
  color: var(--soft-brown);
  border: none;
  cursor: pointer;
  transition: 0.5s ease;
  margin: 1rem 0;
}

.hero>button:hover,
.contact-card>form button:hover{
  background-color: var(--dark-red);
}

/* MENU PAGE */
.menu{
  padding: 4rem;
  background-color: var(--soft-brown);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  place-items: center;
  grid-row-gap: 4rem;
  grid-column-gap: 2rem;
}

.card{
  display: flex;
  flex-direction: column;
}

.card>img{
  width: 400px;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
}

.card-info{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background-color: var(--coffee);
  color: #fff;
  border-radius: 0 0 12px 12px;
}

.card-name{
  display: flex;
  justify-content: space-between;
}

/* CONTACT PAGE */
.contact{
  background-color: var(--soft-brown);
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-top: 2rem;
}

.contact>h2{
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--coffee);
}

.contact-card{
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
  background-color: var(--coffee);
  width: 60%;
  padding: 3rem 4rem;
  border-radius: 12px;
}

.contact-card>form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
}

.contact-card>form input{
  border: none;
  border-radius: 6px;
  width: 70%;
  height: 1.5rem;
}

.contact-card>form textarea{
  border: none;
  resize: none;
  width: 70%;
  height: 25%;
}

.contact-card>iframe{
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,WAAW;AACX;;;EAGE,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kCAAkC;EAClC,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA,WAAW;AACX;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,+BAA+B;EAC/B,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,SAAS;EACT,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,oBAAoB;EACpB,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,cAAc;AACd;EACE,iFAAqE;EACrE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;EACE,4EAA4E;EAC5E,qBAAqB;EACrB,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;EAEE,sBAAsB;EACtB,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;EAChB,mBAAmB;EACnB,4BAA4B;EAC5B,wBAAwB;EACxB,YAAY;EACZ,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA,cAAc;AACd;EACE,aAAa;EACb,mCAAmC;EACnC,aAAa;EACb,2DAA2D;EAC3D,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,oBAAoB;EACpB,+BAA+B;EAC/B,WAAW;EACX,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA,iBAAiB;AACjB;EACE,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,+BAA+B;EAC/B,UAAU;EACV,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,UAAU;EACV,WAAW;AACb;;AAEA;EACE,WAAW;AACb","sourcesContent":["/* GLOBAL */\n*,\n*::before,\n*::after{\n  box-sizing: border-box;\n  margin: 0;\n}\n\n:root{\n  font-family: \"Fredoka\", sans-serif;\n  --red: #D57663;\n  --dark-red: #F7502F;\n  --green: #A2D399;\n  --coffee: #2A2217;\n  --soft-brown: #E7D7A9;\n}\n\nbody{\n  margin: 0;\n}\n\n/* HEADER */\nheader{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--coffee);\n  padding: 0.8rem 7rem;\n  height: 13vh;\n}\n\n.logo-container{\n  display: flex;\n  align-items: center;\n  gap: 3rem;\n}\n\n.logo-container>h1{\n  color: var(--soft-brown);\n  margin: 0;\n  font-size: 3.4rem;\n  font-weight: 300;\n}\n\n.logo-container>img{\n  width: 115px;\n}\n\nnav>button{\n  background: none;\n  color: var(--soft-brown);\n  margin-right: 1.3rem;\n  border: none;\n  padding: 0.8rem 1.5rem;\n  border-radius: 10px;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: 0.5s ease;\n}\n\nnav>button:hover{\n  color: var(--red);\n}\n\n/* HOME PAGE */\n.home{\n  background: url(assets/background.webp) no-repeat center center fixed;\n  background-size: cover;\n  display: grid;\n  place-items: center;\n  height: 87vh;\n}\n\n.hero{\n  padding: 0.1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n}\n\n.hero>h2{\n  background: linear-gradient(to right, var(--soft-brown) 0%, var(--red) 100%); \n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 5rem; \n}\n\n.hero>p{\n  color: var(--soft-brown);\n  font-weight: 600;\n  font-size: 1.3rem;\n}\n\n.hero>button,\n.contact-card>form button{\n  padding: 0.6rem 1.4rem;\n  font-size: 1.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  border-radius: 25px;\n  background-color: var(--red);\n  color: var(--soft-brown);\n  border: none;\n  cursor: pointer;\n  transition: 0.5s ease;\n  margin: 1rem 0;\n}\n\n.hero>button:hover,\n.contact-card>form button:hover{\n  background-color: var(--dark-red);\n}\n\n/* MENU PAGE */\n.menu{\n  padding: 4rem;\n  background-color: var(--soft-brown);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  place-items: center;\n  grid-row-gap: 4rem;\n  grid-column-gap: 2rem;\n}\n\n.card{\n  display: flex;\n  flex-direction: column;\n}\n\n.card>img{\n  width: 400px;\n  border-radius: 12px 12px 0 0;\n  cursor: pointer;\n}\n\n.card-info{\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem 1.5rem;\n  background-color: var(--coffee);\n  color: #fff;\n  border-radius: 0 0 12px 12px;\n}\n\n.card-name{\n  display: flex;\n  justify-content: space-between;\n}\n\n/* CONTACT PAGE */\n.contact{\n  background-color: var(--soft-brown);\n  height: 87vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5rem;\n  padding-top: 2rem;\n}\n\n.contact>h2{\n  text-align: center;\n  font-size: 2.5rem;\n  font-weight: 500;\n  color: var(--coffee);\n}\n\n.contact-card{\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 1.5rem;\n  background-color: var(--coffee);\n  width: 60%;\n  padding: 3rem 4rem;\n  border-radius: 12px;\n}\n\n.contact-card>form{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 2rem;\n  align-items: center;\n}\n\n.contact-card>form input{\n  border: none;\n  border-radius: 6px;\n  width: 70%;\n  height: 1.5rem;\n}\n\n.contact-card>form textarea{\n  border: none;\n  resize: none;\n  width: 70%;\n  height: 25%;\n}\n\n.contact-card>iframe{\n  width: 100%;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactRender: () => (/* binding */ render)
/* harmony export */ });
function render(){
  const content = document.getElementById("content");
  content.textContent= "";

  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.innerHTML = `
    <h2><u>Contact us</u></h2>
  `;
  content.appendChild(contact);

  const contactCard = document.createElement("div");
  contactCard.classList.add("contact-card");
  contact.appendChild(contactCard);
  contactCard.innerHTML = `
    <form>
      <input type="text" required placeholder="Full Name">
      <input type="email" required placeholder="Email">
      <textarea required placeholder="Type your message..."></textarea>
      <button>Send</button>
    </form>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4966.972402560261!2d-0.10614942307499786!3d51.50429551092977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605a5bbb206db%3A0xa9cfc05c4670e898!2sOrigin%20Coffee%20(Scoresby%20Street)!5e0!3m2!1ses!2ses!4v1721558990623!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeRender: () => (/* binding */ render)
/* harmony export */ });
function render(){
  const content = document.getElementById("content");
  content.textContent= "";

  //Creamos el container del home y lo añadimos al content
  const home = document.createElement("div");
  home.classList.add("home");
  content.appendChild(home);

  //Creamos el contenido
  const hero = document.createElement("div");
  hero.classList.add("hero");
  home.appendChild(hero);
  const title = document.createElement("h2");
  title.textContent = "Experience the Art of Specialty Coffee";
  hero.appendChild(title);
  const quote = document.createElement("p");
  quote.textContent = "Crafted with passion, served with love – your journey to the perfect cup starts here.";
  hero.appendChild(quote);
  const button = document.createElement("button");
  button.id = "hero-button";
  button.textContent = "Order Now";
  hero.appendChild(button);
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





document.addEventListener("DOMContentLoaded", () => {
  function setupEventListeners() {
    const homeButton = document.getElementById("home-button");
    const menuButton = document.getElementById("menu-button");
    const contactButton = document.getElementById("contact-button");
    const heroButton = document.getElementById("hero-button");

    homeButton.addEventListener("click", renderHome);
    menuButton.addEventListener("click", renderMenu);
    contactButton.addEventListener("click", renderContact);
    if(heroButton){
      heroButton.addEventListener("click", renderMenu);
    }
  }

  function renderHome(){
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.homeRender)();
    setupEventListeners();
  }

  function renderMenu(){
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuRender)();
    setupEventListeners();
  }

  function renderContact(){
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.contactRender)();
    setupEventListeners();
  }

  renderHome();
});


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuRender: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _assets_cards_img_1_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/cards/img-1.webp */ "./src/assets/cards/img-1.webp");
/* harmony import */ var _assets_cards_img_2_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/cards/img-2.webp */ "./src/assets/cards/img-2.webp");
/* harmony import */ var _assets_cards_img_3_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/cards/img-3.webp */ "./src/assets/cards/img-3.webp");
/* harmony import */ var _assets_cards_img_4_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/cards/img-4.webp */ "./src/assets/cards/img-4.webp");
/* harmony import */ var _assets_cards_img_5_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/cards/img-5.webp */ "./src/assets/cards/img-5.webp");
/* harmony import */ var _assets_cards_img_6_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/cards/img-6.webp */ "./src/assets/cards/img-6.webp");
/* harmony import */ var _assets_cards_card_1_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/cards/card-1.webp */ "./src/assets/cards/card-1.webp");
/* harmony import */ var _assets_cards_card_2_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/cards/card-2.webp */ "./src/assets/cards/card-2.webp");
/* harmony import */ var _assets_cards_card_3_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/cards/card-3.webp */ "./src/assets/cards/card-3.webp");
/* harmony import */ var _assets_cards_card_4_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/cards/card-4.webp */ "./src/assets/cards/card-4.webp");
/* harmony import */ var _assets_cards_card_5_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/cards/card-5.webp */ "./src/assets/cards/card-5.webp");
/* harmony import */ var _assets_cards_card_6_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/cards/card-6.webp */ "./src/assets/cards/card-6.webp");













const menuItems = [
  { name: "Resolute", price: "10.00€", description: "Stone Fruit, Caramel, Milk Chocolate", defaultImg: _assets_cards_img_1_webp__WEBPACK_IMPORTED_MODULE_0__, hoverImg: _assets_cards_card_1_webp__WEBPACK_IMPORTED_MODULE_6__ },
  { name: "Las Chirimoyas", price: "10.00€", description: "Prune, Brown Sugar, Milk Chocolate", defaultImg: _assets_cards_img_2_webp__WEBPACK_IMPORTED_MODULE_1__, hoverImg: _assets_cards_card_2_webp__WEBPACK_IMPORTED_MODULE_7__ },
  { name: "Santa Elena", price: "12.00€", description: "Strawberry, Apricot, Dark Chocolate", defaultImg: _assets_cards_img_3_webp__WEBPACK_IMPORTED_MODULE_2__, hoverImg: _assets_cards_card_3_webp__WEBPACK_IMPORTED_MODULE_8__ },
  { name: "Meridian", price: "9.00€", description: "Plum, Hazelnut, Chocolate", defaultImg: _assets_cards_img_4_webp__WEBPACK_IMPORTED_MODULE_3__, hoverImg: _assets_cards_card_4_webp__WEBPACK_IMPORTED_MODULE_9__ },
  { name: "Beija Flor", price: "10.00€", description: "Apricot, Cashew, Praline", defaultImg: _assets_cards_img_5_webp__WEBPACK_IMPORTED_MODULE_4__, hoverImg: _assets_cards_card_5_webp__WEBPACK_IMPORTED_MODULE_10__ },
  { name: "Pathfinder", price: "10.00€", description: "Raspberry, Lime Butter", defaultImg: _assets_cards_img_6_webp__WEBPACK_IMPORTED_MODULE_5__, hoverImg: _assets_cards_card_6_webp__WEBPACK_IMPORTED_MODULE_11__ },
] 

function render() {
  const content = document.getElementById("content");
  content.textContent = "";

  const menu = document.createElement("div");
  menu.classList.add("menu");
  content.appendChild(menu);

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.defaultImg}" class="card-img" data-default="${item.defaultImg}" data-hover="${item.hoverImg}">
      <div class="card-info">
        <div class="card-name">
          <h4>${item.name}</h4>
          <p>from ${item.price}</p>
        </div>
        <p>${item.description}</p>
      </div>
    `;
    menu.appendChild(card);
  });

  const cards = document.querySelectorAll(".card-img");
  cards.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.src = img.dataset.hover;
    });

    img.addEventListener("mouseout", () => {
      img.src = img.dataset.default;
    });
  })
}






/***/ }),

/***/ "./src/assets/background.webp":
/*!************************************!*\
  !*** ./src/assets/background.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f0b656953524a8df3de9.webp";

/***/ }),

/***/ "./src/assets/cards/card-1.webp":
/*!**************************************!*\
  !*** ./src/assets/cards/card-1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/882150e1a629d80d6ca0.webp";

/***/ }),

/***/ "./src/assets/cards/card-2.webp":
/*!**************************************!*\
  !*** ./src/assets/cards/card-2.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/4b032b9b956e17c236b5.webp";

/***/ }),

/***/ "./src/assets/cards/card-3.webp":
/*!**************************************!*\
  !*** ./src/assets/cards/card-3.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/98b57c511e6aa5d0d5b7.webp";

/***/ }),

/***/ "./src/assets/cards/card-4.webp":
/*!**************************************!*\
  !*** ./src/assets/cards/card-4.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2f7e9ef428563965dbd3.webp";

/***/ }),

/***/ "./src/assets/cards/card-5.webp":
/*!**************************************!*\
  !*** ./src/assets/cards/card-5.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ae9fd59d861e5d71c476.webp";

/***/ }),

/***/ "./src/assets/cards/card-6.webp":
/*!**************************************!*\
  !*** ./src/assets/cards/card-6.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5af70cdca7e5a2095833.webp";

/***/ }),

/***/ "./src/assets/cards/img-1.webp":
/*!*************************************!*\
  !*** ./src/assets/cards/img-1.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2530339960dc13e730c8.webp";

/***/ }),

/***/ "./src/assets/cards/img-2.webp":
/*!*************************************!*\
  !*** ./src/assets/cards/img-2.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d925b23582e95136e15a.webp";

/***/ }),

/***/ "./src/assets/cards/img-3.webp":
/*!*************************************!*\
  !*** ./src/assets/cards/img-3.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/82db79821614874e75f5.webp";

/***/ }),

/***/ "./src/assets/cards/img-4.webp":
/*!*************************************!*\
  !*** ./src/assets/cards/img-4.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/084878d3d181cd6e5e67.webp";

/***/ }),

/***/ "./src/assets/cards/img-5.webp":
/*!*************************************!*\
  !*** ./src/assets/cards/img-5.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/40ae6cb64bfbd56dce7b.webp";

/***/ }),

/***/ "./src/assets/cards/img-6.webp":
/*!*************************************!*\
  !*** ./src/assets/cards/img-6.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1bb5a55982f0677a110b.webp";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsT0FBTyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZ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QTBGLHFEQUFJLFlBQVksdURBQUssRUFBRTtBQUNySCxJQUFJLHdGQUF3RixxREFBSSxZQUFZLHVEQUFLLEVBQUU7QUFDbkg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0IsbUNBQW1DLGdCQUFnQixnQkFBZ0IsY0FBYztBQUNuSDtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUIsb0JBQW9CLFdBQVc7QUFDL0I7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7OztBQUlnQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2JhY2tncm91bmQud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR0xPQkFMICovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXJ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbn1cblxuOnJvb3R7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZWRva2FcIiwgc2Fucy1zZXJpZjtcbiAgLS1yZWQ6ICNENTc2NjM7XG4gIC0tZGFyay1yZWQ6ICNGNzUwMkY7XG4gIC0tZ3JlZW46ICNBMkQzOTk7XG4gIC0tY29mZmVlOiAjMkEyMjE3O1xuICAtLXNvZnQtYnJvd246ICNFN0Q3QTk7XG59XG5cbmJvZHl7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogSEVBREVSICovXG5oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29mZmVlKTtcbiAgcGFkZGluZzogMC44cmVtIDdyZW07XG4gIGhlaWdodDogMTN2aDtcbn1cblxuLmxvZ28tY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNyZW07XG59XG5cbi5sb2dvLWNvbnRhaW5lcj5oMXtcbiAgY29sb3I6IHZhcigtLXNvZnQtYnJvd24pO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMy40cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ubG9nby1jb250YWluZXI+aW1ne1xuICB3aWR0aDogMTE1cHg7XG59XG5cbm5hdj5idXR0b257XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1zb2Z0LWJyb3duKTtcbiAgbWFyZ2luLXJpZ2h0OiAxLjNyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG59XG5cbm5hdj5idXR0b246aG92ZXJ7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xufVxuXG4vKiBIT01FIFBBR0UgKi9cbi5ob21le1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogODd2aDtcbn1cblxuLmhlcm97XG4gIHBhZGRpbmc6IDAuMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5oZXJvPmgye1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXNvZnQtYnJvd24pIDAlLCB2YXIoLS1yZWQpIDEwMCUpOyBcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogNXJlbTsgXG59XG5cbi5oZXJvPnB7XG4gIGNvbG9yOiB2YXIoLS1zb2Z0LWJyb3duKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5oZXJvPmJ1dHRvbixcbi5jb250YWN0LWNhcmQ+Zm9ybSBidXR0b257XG4gIHBhZGRpbmc6IDAuNnJlbSAxLjRyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcbiAgY29sb3I6IHZhcigtLXNvZnQtYnJvd24pO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmhlcm8+YnV0dG9uOmhvdmVyLFxuLmNvbnRhY3QtY2FyZD5mb3JtIGJ1dHRvbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1yZWQpO1xufVxuXG4vKiBNRU5VIFBBR0UgKi9cbi5tZW51e1xuICBwYWRkaW5nOiA0cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zb2Z0LWJyb3duKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtcm93LWdhcDogNHJlbTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xufVxuXG4uY2FyZHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNhcmQ+aW1ne1xuICB3aWR0aDogNDAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtaW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29mZmVlKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XG59XG5cbi5jYXJkLW5hbWV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLyogQ09OVEFDVCBQQUdFICovXG4uY29udGFjdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc29mdC1icm93bik7XG4gIGhlaWdodDogODd2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cmVtO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLmNvbnRhY3Q+aDJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2ZmZWUpO1xufVxuXG4uY29udGFjdC1jYXJke1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gIGdhcDogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2ZmZWUpO1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAzcmVtIDRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5jb250YWN0LWNhcmQ+Zm9ybXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtY2FyZD5mb3JtIGlucHV0e1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5jb250YWN0LWNhcmQ+Zm9ybSB0ZXh0YXJlYXtcbiAgYm9yZGVyOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMjUlO1xufVxuXG4uY29udGFjdC1jYXJkPmlmcmFtZXtcbiAgd2lkdGg6IDEwMCU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWDs7O0VBR0Usc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLGNBQWM7QUFDZDtFQUNFLGlGQUFxRTtFQUNyRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNEVBQTRFO0VBQzVFLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGlDQUFpQztBQUNuQzs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHTE9CQUwgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlcntcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290e1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVkb2thXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tcmVkOiAjRDU3NjYzO1xcbiAgLS1kYXJrLXJlZDogI0Y3NTAyRjtcXG4gIC0tZ3JlZW46ICNBMkQzOTk7XFxuICAtLWNvZmZlZTogIzJBMjIxNztcXG4gIC0tc29mdC1icm93bjogI0U3RDdBOTtcXG59XFxuXFxuYm9keXtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2ZmZWUpO1xcbiAgcGFkZGluZzogMC44cmVtIDdyZW07XFxuICBoZWlnaHQ6IDEzdmg7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXI+aDF7XFxuICBjb2xvcjogdmFyKC0tc29mdC1icm93bik7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDMuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lcj5pbWd7XFxuICB3aWR0aDogMTE1cHg7XFxufVxcblxcbm5hdj5idXR0b257XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXNvZnQtYnJvd24pO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjNyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXG59XFxuXFxubmF2PmJ1dHRvbjpob3ZlcntcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4vKiBIT01FIFBBR0UgKi9cXG4uaG9tZXtcXG4gIGJhY2tncm91bmQ6IHVybChhc3NldHMvYmFja2dyb3VuZC53ZWJwKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogODd2aDtcXG59XFxuXFxuLmhlcm97XFxuICBwYWRkaW5nOiAwLjFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmhlcm8+aDJ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXNvZnQtYnJvd24pIDAlLCB2YXIoLS1yZWQpIDEwMCUpOyBcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogNXJlbTsgXFxufVxcblxcbi5oZXJvPnB7XFxuICBjb2xvcjogdmFyKC0tc29mdC1icm93bik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5oZXJvPmJ1dHRvbixcXG4uY29udGFjdC1jYXJkPmZvcm0gYnV0dG9ue1xcbiAgcGFkZGluZzogMC42cmVtIDEuNHJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICBjb2xvcjogdmFyKC0tc29mdC1icm93bik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLmhlcm8+YnV0dG9uOmhvdmVyLFxcbi5jb250YWN0LWNhcmQ+Zm9ybSBidXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXJlZCk7XFxufVxcblxcbi8qIE1FTlUgUEFHRSAqL1xcbi5tZW51e1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNvZnQtYnJvd24pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtcm93LWdhcDogNHJlbTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcXG59XFxuXFxuLmNhcmR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQ+aW1ne1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcmQtaW5mb3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2ZmZWUpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xcbn1cXG5cXG4uY2FyZC1uYW1le1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogQ09OVEFDVCBQQUdFICovXFxuLmNvbnRhY3R7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zb2Z0LWJyb3duKTtcXG4gIGhlaWdodDogODd2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdD5oMntcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB2YXIoLS1jb2ZmZWUpO1xcbn1cXG5cXG4uY29udGFjdC1jYXJke1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdhcDogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29mZmVlKTtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAzcmVtIDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jYXJkPmZvcm17XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZD5mb3JtIGlucHV0e1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4uY29udGFjdC1jYXJkPmZvcm0gdGV4dGFyZWF7XFxuICBib3JkZXI6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAyNSU7XFxufVxcblxcbi5jb250YWN0LWNhcmQ+aWZyYW1le1xcbiAgd2lkdGg6IDEwMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHJlbmRlcigpe1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LnRleHRDb250ZW50PSBcIlwiO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICBjb250YWN0LmlubmVySFRNTCA9IGBcbiAgICA8aDI+PHU+Q29udGFjdCB1czwvdT48L2gyPlxuICBgO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gIGNvbnN0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdENhcmQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY2FyZFwiKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0Q2FyZCk7XG4gIGNvbnRhY3RDYXJkLmlubmVySFRNTCA9IGBcbiAgICA8Zm9ybT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiPlxuICAgICAgPHRleHRhcmVhIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLi5cIj48L3RleHRhcmVhPlxuICAgICAgPGJ1dHRvbj5TZW5kPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNDk2Ni45NzI0MDI1NjAyNjEhMmQtMC4xMDYxNDk0MjMwNzQ5OTc4NiEzZDUxLjUwNDI5NTUxMDkyOTc3ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg0ODc2MDVhNWJiYjIwNmRiJTNBMHhhOWNmYzA1YzQ2NzBlODk4ITJzT3JpZ2luJTIwQ29mZmVlJTIwKFNjb3Jlc2J5JTIwU3RyZWV0KSE1ZTAhM20yITFzZXMhMnNlcyE0djE3MjE1NTg5OTA2MjMhNW0yITFzZXMhMnNlc1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5cbiAgYDtcbn1cblxuZXhwb3J0IHtyZW5kZXIgYXMgY29udGFjdFJlbmRlcn07IiwiZnVuY3Rpb24gcmVuZGVyKCl7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQ9IFwiXCI7XG5cbiAgLy9DcmVhbW9zIGVsIGNvbnRhaW5lciBkZWwgaG9tZSB5IGxvIGHDsWFkaW1vcyBhbCBjb250ZW50XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gIC8vQ3JlYW1vcyBlbCBjb250ZW5pZG9cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaGVybyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiRXhwZXJpZW5jZSB0aGUgQXJ0IG9mIFNwZWNpYWx0eSBDb2ZmZWVcIjtcbiAgaGVyby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnN0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHF1b3RlLnRleHRDb250ZW50ID0gXCJDcmFmdGVkIHdpdGggcGFzc2lvbiwgc2VydmVkIHdpdGggbG92ZSDigJMgeW91ciBqb3VybmV5IHRvIHRoZSBwZXJmZWN0IGN1cCBzdGFydHMgaGVyZS5cIjtcbiAgaGVyby5hcHBlbmRDaGlsZChxdW90ZSk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5pZCA9IFwiaGVyby1idXR0b25cIjtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcbiAgaGVyby5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuXG5leHBvcnQge3JlbmRlciBhcyBob21lUmVuZGVyfTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgaG9tZVJlbmRlciB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IG1lbnVSZW5kZXIgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjb250YWN0UmVuZGVyIH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idXR0b25cIik7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idXR0b25cIik7XG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1idXR0b25cIik7XG4gICAgY29uc3QgaGVyb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVyby1idXR0b25cIik7XG5cbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJIb21lKTtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJNZW51KTtcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJDb250YWN0KTtcbiAgICBpZihoZXJvQnV0dG9uKXtcbiAgICAgIGhlcm9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlck1lbnUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckhvbWUoKXtcbiAgICBob21lUmVuZGVyKCk7XG4gICAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyTWVudSgpe1xuICAgIG1lbnVSZW5kZXIoKTtcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJDb250YWN0KCl7XG4gICAgY29udGFjdFJlbmRlcigpO1xuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHJlbmRlckhvbWUoKTtcbn0pO1xuIiwiaW1wb3J0IGltZzEgZnJvbSAnLi9hc3NldHMvY2FyZHMvaW1nLTEud2VicCc7XG5pbXBvcnQgaW1nMiBmcm9tICcuL2Fzc2V0cy9jYXJkcy9pbWctMi53ZWJwJztcbmltcG9ydCBpbWczIGZyb20gJy4vYXNzZXRzL2NhcmRzL2ltZy0zLndlYnAnO1xuaW1wb3J0IGltZzQgZnJvbSAnLi9hc3NldHMvY2FyZHMvaW1nLTQud2VicCc7XG5pbXBvcnQgaW1nNSBmcm9tICcuL2Fzc2V0cy9jYXJkcy9pbWctNS53ZWJwJztcbmltcG9ydCBpbWc2IGZyb20gJy4vYXNzZXRzL2NhcmRzL2ltZy02LndlYnAnO1xuaW1wb3J0IGNhcmQxIGZyb20gJy4vYXNzZXRzL2NhcmRzL2NhcmQtMS53ZWJwJztcbmltcG9ydCBjYXJkMiBmcm9tICcuL2Fzc2V0cy9jYXJkcy9jYXJkLTIud2VicCc7XG5pbXBvcnQgY2FyZDMgZnJvbSAnLi9hc3NldHMvY2FyZHMvY2FyZC0zLndlYnAnO1xuaW1wb3J0IGNhcmQ0IGZyb20gJy4vYXNzZXRzL2NhcmRzL2NhcmQtNC53ZWJwJztcbmltcG9ydCBjYXJkNSBmcm9tICcuL2Fzc2V0cy9jYXJkcy9jYXJkLTUud2VicCc7XG5pbXBvcnQgY2FyZDYgZnJvbSAnLi9hc3NldHMvY2FyZHMvY2FyZC02LndlYnAnO1xuXG5jb25zdCBtZW51SXRlbXMgPSBbXG4gIHsgbmFtZTogXCJSZXNvbHV0ZVwiLCBwcmljZTogXCIxMC4wMOKCrFwiLCBkZXNjcmlwdGlvbjogXCJTdG9uZSBGcnVpdCwgQ2FyYW1lbCwgTWlsayBDaG9jb2xhdGVcIiwgZGVmYXVsdEltZzogaW1nMSwgaG92ZXJJbWc6IGNhcmQxIH0sXG4gIHsgbmFtZTogXCJMYXMgQ2hpcmltb3lhc1wiLCBwcmljZTogXCIxMC4wMOKCrFwiLCBkZXNjcmlwdGlvbjogXCJQcnVuZSwgQnJvd24gU3VnYXIsIE1pbGsgQ2hvY29sYXRlXCIsIGRlZmF1bHRJbWc6IGltZzIsIGhvdmVySW1nOiBjYXJkMiB9LFxuICB7IG5hbWU6IFwiU2FudGEgRWxlbmFcIiwgcHJpY2U6IFwiMTIuMDDigqxcIiwgZGVzY3JpcHRpb246IFwiU3RyYXdiZXJyeSwgQXByaWNvdCwgRGFyayBDaG9jb2xhdGVcIiwgZGVmYXVsdEltZzogaW1nMywgaG92ZXJJbWc6IGNhcmQzIH0sXG4gIHsgbmFtZTogXCJNZXJpZGlhblwiLCBwcmljZTogXCI5LjAw4oKsXCIsIGRlc2NyaXB0aW9uOiBcIlBsdW0sIEhhemVsbnV0LCBDaG9jb2xhdGVcIiwgZGVmYXVsdEltZzogaW1nNCwgaG92ZXJJbWc6IGNhcmQ0IH0sXG4gIHsgbmFtZTogXCJCZWlqYSBGbG9yXCIsIHByaWNlOiBcIjEwLjAw4oKsXCIsIGRlc2NyaXB0aW9uOiBcIkFwcmljb3QsIENhc2hldywgUHJhbGluZVwiLCBkZWZhdWx0SW1nOiBpbWc1LCBob3ZlckltZzogY2FyZDUgfSxcbiAgeyBuYW1lOiBcIlBhdGhmaW5kZXJcIiwgcHJpY2U6IFwiMTAuMDDigqxcIiwgZGVzY3JpcHRpb246IFwiUmFzcGJlcnJ5LCBMaW1lIEJ1dHRlclwiLCBkZWZhdWx0SW1nOiBpbWc2LCBob3ZlckltZzogY2FyZDYgfSxcbl0gXG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBzcmM9XCIke2l0ZW0uZGVmYXVsdEltZ31cIiBjbGFzcz1cImNhcmQtaW1nXCIgZGF0YS1kZWZhdWx0PVwiJHtpdGVtLmRlZmF1bHRJbWd9XCIgZGF0YS1ob3Zlcj1cIiR7aXRlbS5ob3ZlckltZ31cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbmFtZVwiPlxuICAgICAgICAgIDxoND4ke2l0ZW0ubmFtZX08L2g0PlxuICAgICAgICAgIDxwPmZyb20gJHtpdGVtLnByaWNlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPiR7aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkLWltZ1wiKTtcbiAgY2FyZHMuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgaW1nLnNyYyA9IGltZy5kYXRhc2V0LmhvdmVyO1xuICAgIH0pO1xuXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICBpbWcuc3JjID0gaW1nLmRhdGFzZXQuZGVmYXVsdDtcbiAgICB9KTtcbiAgfSlcbn1cblxuXG5cbmV4cG9ydCB7IHJlbmRlciBhcyBtZW51UmVuZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=