webpackJsonp([7],{

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(434)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(414),
  /* template */
  __webpack_require__(507),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/hahaniu/data0/aa/Circle_html/1/src/views/pages/bb.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] bb.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78890d23", Component.options)
  } else {
    hotAPI.reload("data-v-78890d23", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            modal10: false
        };
    }
});

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Button', {
    on: {
      "click": function($event) {
        _vm.modal10 = true
      }
    }
  }, [_vm._v("Vertical center")]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "Title",
      "class-name": "vertical-center-modal"
    },
    model: {
      value: (_vm.modal10),
      callback: function($$v) {
        _vm.modal10 = $$v
      },
      expression: "modal10"
    }
  }, [_c('p', [_vm._v("Content of dialog")]), _vm._v(" "), _c('p', [_vm._v("Content of dialog")]), _vm._v(" "), _c('p', [_vm._v("Content of dialog")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-78890d23", module.exports)
  }
}

/***/ })

});