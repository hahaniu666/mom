webpackJsonp([3],{

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(425)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(419),
  /* template */
  __webpack_require__(509),
  /* scopeId */
  "data-v-e6db0ee2",
  /* cssModules */
  null
)
Component.options.__file = "/Users/hahaniu/data0/aa/Circle_html/1/src/views/pages/my.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] my.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e6db0ee2", Component.options)
  } else {
    hotAPI.reload("data-v-e6db0ee2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 419:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            latelyWidth: 0
        };
    },
    components: {},
    mounted() {},
    methods: {

        goNotice(item) {
            if (item.format == 2) {
                window.location.href = item.content;
            } else {
                this.$router.push({
                    path: '/noticeDetail',
                    query: { id: item.id }
                });
            }
        }

    }
});

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_vm._v("\n    w d\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e6db0ee2", module.exports)
  }
}

/***/ })

});