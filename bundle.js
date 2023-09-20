"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["bundle"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background: red;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB","sourcesContent":["body {\n    background: red;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


(0,_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/page-load.ts":
/*!**************************!*\
  !*** ./src/page-load.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad() {
    var body = document.querySelector('body');
    var createDiv = function () {
        var div = document.createElement('div');
        return div;
    };
    var createSpan = function () {
        var span = document.createElement('span');
        return span;
    };
    var createP = function () {
        var p = document.createElement('p');
        return p;
    };
    var createAnchor = function () {
        var a = document.createElement('a');
        return a;
    };
    // string sanitizer
    function capitalizeWith(input) {
        return input.replace(/^\bwith\b|\b\w+\b/g, function (match) {
            return match.toLowerCase() === 'with' ? 'With' : match.toLowerCase();
        });
    }
    // instantiate header nav
    var idContentDivArray = [
        'content-wrapper',
        'header-nav',
        'reservation-button',
        'menu-section',
        'allergy-disclaimer',
        'pre-footer-image',
        'footer-nav',
        'copyright',
    ];
    var idSpanArray = [
        'menu',
        'contact',
        'location',
        'header-logo',
        'header-restaurant-namer',
        'hreader-social-icon',
    ];
    var imageArray = ['img1', 'img2', 'img3', 'img4'];
    idContentDivArray.forEach(function (e) {
        var div = createDiv();
        body.appendChild(div);
        div.setAttribute('id', e);
    });
    idSpanArray.forEach(function (e) {
        var span = createSpan();
        body.appendChild(span);
        span.setAttribute('id', e);
    });
    // instantiate divs and spans
    var contentWrapper = document.getElementById('content-wrapper');
    var nodeDivArray = Array.from(document.querySelectorAll('div'));
    nodeDivArray.slice(1).forEach(function (e) {
        contentWrapper.appendChild(e);
    });
    nodeDivArray[1].setAttribute('role', 'navigation');
    nodeDivArray[1].setAttribute('aria-label', 'Main');
    // instantiate span menu and images on header and footer
    var nodeSpanArray = Array.from(document.querySelectorAll('span'));
    nodeSpanArray.forEach(function (e, i) {
        nodeDivArray[1].appendChild(e);
        if (i < 3) {
            var span = createSpan();
            var a = createAnchor();
            e.appendChild(a);
            a.textContent = idSpanArray[i];
            nodeDivArray[6].appendChild(span);
            span.textContent = idSpanArray[i];
        }
        else if (i >= 3 && i < 6) {
            var div = createDiv();
            e.appendChild(div);
            div.textContent = imageArray[i - 3];
        }
        if (i === 1) {
            var div = createDiv();
            nodeDivArray[5].appendChild(div);
            div.textContent = imageArray[3];
        }
    });
    // instantiate menu section
    (function () {
        for (var i = 0; i < 8; i += 1) {
            var menuItem = createDiv();
            var menuItemTitle = createDiv();
            var menuItemDescritpion = createDiv();
            var menuItemPrice = createSpan();
            var currencySign = createSpan();
            menuItem.setAttribute('class', 'menu-item');
            menuItemTitle.setAttribute('class', 'menu-item-title');
            menuItemDescritpion.setAttribute('class', 'menu-item-description');
            menuItemPrice.setAttribute('class', 'menu-item-price');
            currencySign.setAttribute('class', 'currency-sign');
            nodeDivArray[3].appendChild(menuItem);
            menuItemPrice.appendChild(currencySign);
            menuItem.appendChild(menuItemPrice);
            menuItem.appendChild(menuItemTitle);
            menuItem.appendChild(menuItemDescritpion);
        }
        var menuItems = [
            'Chili Cup',
            'Hamburger',
            'Cheese Burger',
            'Bacon, Lettuce, Tomato',
            "Chef's Salad",
            'Tossed Green Salad',
            'Steak Tartare',
            'Roast Cornish Hen',
        ];
        var menuItemsArray = Array.from(document.querySelectorAll('.menu-item-title'));
        console.log(menuItemsArray);
        menuItemsArray.forEach(function (e, i) {
            var div = createDiv();
            div.setAttribute('class', 'menu-item-text');
            div.textContent = capitalizeWith(menuItems[i]);
            e.appendChild(div);
        });
        var menuDescriptions = [
            'Spicy Bulgogi Beef, Gochujang-Infused Beans',
            'With Waygu Chop, Fresh Kimchi, Sesame Mayo, ',
            'With Bulgogi Beef, American Cheese, Gochujang Mayo',
            'Guanciale, Pickled Daikon',
            'Crispy Quinoa, Purple Shiso Leaves, Gochujang Dressing',
            'Watermelon Radish, Yuzu-Infused Avocado, Furikake',
            'With Quail Egg, Shiso Cress, Black Sesame Crackers',
            'With Kimchi Pancakes, Pickled Perilla Leaves',
        ];
        var menuDescriptionsArray = Array.from(document.querySelectorAll('.menu-item-description'));
        menuDescriptionsArray.forEach(function (e, i) {
            var div = createDiv();
            div.setAttribute('class', 'menu-description-text');
            div.textContent = capitalizeWith(menuDescriptions[i]);
            e.appendChild(div);
        });
        var menuItemPrices = ['7', '16', '19', '18', '17', '15', '28', '35'];
        var menuItemPricArray = Array.from(document.querySelectorAll('.menu-item-price'));
        menuItemPricArray.forEach(function (e, i) {
            var span = createSpan();
            span.setAttribute('class', 'item-price');
            span.textContent = menuItemPrices[i];
            e.appendChild(span);
        });
        var currencySignArray = Array.from(document.querySelectorAll('.currency-sign'));
        currencySignArray.forEach(function (e) {
            e.textContent = '$';
        });
    })();
    // instantiate allergy disclaimer
    var allergyP = createP();
    allergyP.setAttribute('id', 'allergy-paragraph');
    nodeDivArray[4].appendChild(allergyP);
    allergyP.textContent =
        'Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.';
    // instantiate pre-footer image
    nodeDivArray[7].textContent = '©Zardoz8901';
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsYUFBYSxDQUFDO0FBQ2hELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9wYWdlLWxvYWQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbnBhZ2VMb2FkKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNyZWF0ZURpdiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVTcGFuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICByZXR1cm4gc3BhbjtcbiAgICB9O1xuICAgIGNvbnN0IGNyZWF0ZVAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH07XG4gICAgY29uc3QgY3JlYXRlQW5jaG9yID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9O1xuICAgIC8vIHN0cmluZyBzYW5pdGl6ZXJcbiAgICBmdW5jdGlvbiBjYXBpdGFsaXplV2l0aChpbnB1dDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxid2l0aFxcYnxcXGJcXHcrXFxiL2csIChtYXRjaCkgPT5cbiAgICAgICAgICAgIG1hdGNoLnRvTG93ZXJDYXNlKCkgPT09ICd3aXRoJyA/ICdXaXRoJyA6IG1hdGNoLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICB9XG4gICAgLy8gaW5zdGFudGlhdGUgaGVhZGVyIG5hdlxuICAgIGNvbnN0IGlkQ29udGVudERpdkFycmF5ID0gW1xuICAgICAgICAnY29udGVudC13cmFwcGVyJyxcbiAgICAgICAgJ2hlYWRlci1uYXYnLFxuICAgICAgICAncmVzZXJ2YXRpb24tYnV0dG9uJyxcbiAgICAgICAgJ21lbnUtc2VjdGlvbicsXG4gICAgICAgICdhbGxlcmd5LWRpc2NsYWltZXInLFxuICAgICAgICAncHJlLWZvb3Rlci1pbWFnZScsXG4gICAgICAgICdmb290ZXItbmF2JyxcbiAgICAgICAgJ2NvcHlyaWdodCcsXG4gICAgXTtcbiAgICBjb25zdCBpZFNwYW5BcnJheSA9IFtcbiAgICAgICAgJ21lbnUnLFxuICAgICAgICAnY29udGFjdCcsXG4gICAgICAgICdsb2NhdGlvbicsXG4gICAgICAgICdoZWFkZXItbG9nbycsXG4gICAgICAgICdoZWFkZXItcmVzdGF1cmFudC1uYW1lcicsXG4gICAgICAgICdocmVhZGVyLXNvY2lhbC1pY29uJyxcbiAgICBdO1xuICAgIGNvbnN0IGltYWdlQXJyYXkgPSBbJ2ltZzEnLCAnaW1nMicsICdpbWczJywgJ2ltZzQnXTtcbiAgICBpZENvbnRlbnREaXZBcnJheS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZURpdigpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgZSk7XG4gICAgfSk7XG4gICAgaWRTcGFuQXJyYXkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBjb25zdCBzcGFuID0gY3JlYXRlU3BhbigpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnaWQnLCBlKTtcbiAgICB9KTtcbiAgICAvLyBpbnN0YW50aWF0ZSBkaXZzIGFuZCBzcGFuc1xuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtd3JhcHBlcicpO1xuICAgIGNvbnN0IG5vZGVEaXZBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2JykpO1xuICAgIG5vZGVEaXZBcnJheS5zbGljZSgxKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGUpO1xuICAgIH0pO1xuICAgIG5vZGVEaXZBcnJheVsxXS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbmF2aWdhdGlvbicpO1xuICAgIG5vZGVEaXZBcnJheVsxXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnTWFpbicpO1xuICAgIC8vIGluc3RhbnRpYXRlIHNwYW4gbWVudSBhbmQgaW1hZ2VzIG9uIGhlYWRlciBhbmQgZm9vdGVyXG4gICAgY29uc3Qgbm9kZVNwYW5BcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpKTtcbiAgICBub2RlU3BhbkFycmF5LmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgICAgbm9kZURpdkFycmF5WzFdLmFwcGVuZENoaWxkKGUpO1xuICAgICAgICBpZiAoaSA8IDMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVTcGFuKCk7XG4gICAgICAgICAgICBjb25zdCBhID0gY3JlYXRlQW5jaG9yKCk7XG4gICAgICAgICAgICBlLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgICAgYS50ZXh0Q29udGVudCA9IGlkU3BhbkFycmF5W2ldO1xuICAgICAgICAgICAgbm9kZURpdkFycmF5WzZdLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGlkU3BhbkFycmF5W2ldO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPj0gMyAmJiBpIDwgNikge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgICAgICAgICBlLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBpbWFnZUFycmF5W2kgLSAzXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgICAgICAgICBub2RlRGl2QXJyYXlbNV0uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIFssICwgLCBkaXYudGV4dENvbnRlbnRdID0gaW1hZ2VBcnJheTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGluc3RhbnRpYXRlIG1lbnUgc2VjdGlvblxuICAgICgoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZURpdigpO1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1UaXRsZSA9IGNyZWF0ZURpdigpO1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1EZXNjcml0cGlvbiA9IGNyZWF0ZURpdigpO1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1QcmljZSA9IGNyZWF0ZVNwYW4oKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5U2lnbiA9IGNyZWF0ZVNwYW4oKTtcbiAgICAgICAgICAgIG1lbnVJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG4gICAgICAgICAgICBtZW51SXRlbVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgICAgICAgICBtZW51SXRlbURlc2NyaXRwaW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBtZW51SXRlbVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtLXByaWNlJyk7XG4gICAgICAgICAgICBjdXJyZW5jeVNpZ24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjdXJyZW5jeS1zaWduJyk7XG4gICAgICAgICAgICBub2RlRGl2QXJyYXlbM10uYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgICAgICAgICAgbWVudUl0ZW1QcmljZS5hcHBlbmRDaGlsZChjdXJyZW5jeVNpZ24pO1xuICAgICAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1QcmljZSk7XG4gICAgICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbVRpdGxlKTtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzY3JpdHBpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICAgICAgICAgICdDaGlsaSBDdXAnLFxuICAgICAgICAgICAgJ0hhbWJ1cmdlcicsXG4gICAgICAgICAgICAnQ2hlZXNlIEJ1cmdlcicsXG4gICAgICAgICAgICAnQmFjb24sIExldHR1Y2UsIFRvbWF0bycsXG4gICAgICAgICAgICBcIkNoZWYncyBTYWxhZFwiLFxuICAgICAgICAgICAgJ1Rvc3NlZCBHcmVlbiBTYWxhZCcsXG4gICAgICAgICAgICAnU3RlYWsgVGFydGFyZScsXG4gICAgICAgICAgICAnUm9hc3QgQ29ybmlzaCBIZW4nLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBtZW51SXRlbXNBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbS10aXRsZScpKTtcbiAgICAgICAgY29uc29sZS5sb2cobWVudUl0ZW1zQXJyYXkpO1xuICAgICAgICBtZW51SXRlbXNBcnJheS5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoKTtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbS10ZXh0Jyk7XG4gICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplV2l0aChtZW51SXRlbXNbaV0pO1xuICAgICAgICAgICAgZS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbWVudURlc2NyaXB0aW9ucyA9IFtcbiAgICAgICAgICAgICdTcGljeSBCdWxnb2dpIEJlZWYsIEdvY2h1amFuZy1JbmZ1c2VkIEJlYW5zJyxcbiAgICAgICAgICAgICdXaXRoIFdheWd1IENob3AsIEZyZXNoIEtpbWNoaSwgU2VzYW1lIE1heW8sICcsXG4gICAgICAgICAgICAnV2l0aCBCdWxnb2dpIEJlZWYsIEFtZXJpY2FuIENoZWVzZSwgR29jaHVqYW5nIE1heW8nLFxuICAgICAgICAgICAgJ0d1YW5jaWFsZSwgUGlja2xlZCBEYWlrb24nLFxuICAgICAgICAgICAgJ0NyaXNweSBRdWlub2EsIFB1cnBsZSBTaGlzbyBMZWF2ZXMsIEdvY2h1amFuZyBEcmVzc2luZycsXG4gICAgICAgICAgICAnV2F0ZXJtZWxvbiBSYWRpc2gsIFl1enUtSW5mdXNlZCBBdm9jYWRvLCBGdXJpa2FrZScsXG4gICAgICAgICAgICAnV2l0aCBRdWFpbCBFZ2csIFNoaXNvIENyZXNzLCBCbGFjayBTZXNhbWUgQ3JhY2tlcnMnLFxuICAgICAgICAgICAgJ1dpdGggS2ltY2hpIFBhbmNha2VzLCBQaWNrbGVkIFBlcmlsbGEgTGVhdmVzJyxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgbWVudURlc2NyaXB0aW9uc0FycmF5ID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0tZGVzY3JpcHRpb24nKVxuICAgICAgICApO1xuXG4gICAgICAgIG1lbnVEZXNjcmlwdGlvbnNBcnJheS5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoKTtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtZGVzY3JpcHRpb24tdGV4dCcpO1xuICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZVdpdGgobWVudURlc2NyaXB0aW9uc1tpXSk7XG4gICAgICAgICAgICBlLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtZW51SXRlbVByaWNlcyA9IFsnNycsICcxNicsICcxOScsICcxOCcsICcxNycsICcxNScsICcyOCcsICczNSddO1xuICAgICAgICBjb25zdCBtZW51SXRlbVByaWNBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbS1wcmljZScpKTtcbiAgICAgICAgbWVudUl0ZW1QcmljQXJyYXkuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGNyZWF0ZVNwYW4oKTtcbiAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtLXByaWNlJyk7XG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gbWVudUl0ZW1QcmljZXNbaV07XG4gICAgICAgICAgICBlLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY3VycmVuY3lTaWduQXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJyZW5jeS1zaWduJykpO1xuICAgICAgICBjdXJyZW5jeVNpZ25BcnJheS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBlLnRleHRDb250ZW50ID0gJyQnO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuICAgIC8vIGluc3RhbnRpYXRlIGFsbGVyZ3kgZGlzY2xhaW1lclxuICAgIGNvbnN0IGFsbGVyZ3lQID0gY3JlYXRlUCgpO1xuICAgIGFsbGVyZ3lQLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxsZXJneS1wYXJhZ3JhcGgnKTtcbiAgICBub2RlRGl2QXJyYXlbNF0uYXBwZW5kQ2hpbGQoYWxsZXJneVApO1xuICAgIGFsbGVyZ3lQLnRleHRDb250ZW50ID1cbiAgICAgICAgJ0NvbnN1bWluZyByYXcgb3IgdW5kZXJjb29rZWQgbWVhdHMsIHBvdWx0cnksIHNlYWZvb2QsIHNoZWxsZmlzaCwgb3IgZWdncyBtYXkgaW5jcmVhc2UgeW91ciByaXNrIG9mIGZvb2Rib3JuZSBpbGxuZXNzLCBlc3BlY2lhbGx5IGlmIHlvdSBoYXZlIGNlcnRhaW4gbWVkaWNhbCBjb25kaXRpb25zLic7XG4gICAgLy8gaW5zdGFudGlhdGUgcHJlLWZvb3RlciBpbWFnZVxuICAgIG5vZGVEaXZBcnJheVs3XS50ZXh0Q29udGVudCA9ICfCqVphcmRvejg5MDEnO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9