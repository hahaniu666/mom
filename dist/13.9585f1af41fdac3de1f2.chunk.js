webpackJsonp([13],{

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(424)

var Component = __webpack_require__(70)(
  /* script */
  null,
  /* template */
  __webpack_require__(508),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/hahaniu/data0/aa/Circle_html/1/src/views/pages/baidumap.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] baidumap.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8f123cf8", Component.options)
  } else {
    hotAPI.reload("data-v-8f123cf8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 424:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('baidu-map', {
    staticClass: "map",
    attrs: {
      "center": "北京"
    }
  }, [_c('bm-geolocation', {
    staticStyle: {
      "left": "10px"
    },
    attrs: {
      "anchor": "BMAP_ANCHOR_BOTTOM_RIGHT",
      "showAddressBar": true,
      "autoLocation": true
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8f123cf8", module.exports)
  }
}

/***/ })

});