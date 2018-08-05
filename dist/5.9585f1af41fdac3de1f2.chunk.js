webpackJsonp([5],{

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(426)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(417),
  /* template */
  __webpack_require__(497),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/hahaniu/data0/aa/Circle_html/1/src/views/pages/goToPosition.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] goToPosition.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4766fe22", Component.options)
  } else {
    hotAPI.reload("data-v-4766fe22", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 417:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {

            src: '',
            content: '',
            title: '我的位置',
            lng: '',
            lat: ''
        };
    },
    created() {},
    methods: {},
    mounted() {
        if (this.$route.query.addr) {
            this.content = this.$route.query.addr;
            this.title = '我的位置';
            this.lat = this.$route.query.lat;
            this.lng = this.$route.query.lng;
            this.src = `http://api.map.baidu.com/marker?location=${this.lat},${this.lng}&title=我的位置&content=${this.content}&output=html`;
        } else {
            this.content = '四川省成都市彭州市天彭镇牡丹西路顺风港东门位';
            this.title = '我的位置';
            this.lat = '30.995305';
            this.lng = '103.962799';
            this.src = `http://api.map.baidu.com/marker?location=${this.lat},${this.lng}&title=我的位置&content=${this.content}&output=html`;
        }
    }
});

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "parent"
  }, [_c('iframe', {
    staticStyle: {
      "border": "none"
    },
    attrs: {
      "src": _vm.src,
      "width": "100%",
      "height": "100%"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4766fe22", module.exports)
  }
}

/***/ })

});