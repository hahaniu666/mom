webpackJsonp([6],{

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(433)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(415),
  /* template */
  __webpack_require__(505),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/hahaniu/data0/aa/Circle_html/1/src/views/pages/cityPosition.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cityPosition.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-708ffe52", Component.options)
  } else {
    hotAPI.reload("data-v-708ffe52", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 415:
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
            latelyWidth: 0,
            noneCity: ['阿坝市', '乐山市', '南充市', '涪陵市', '拉萨市', '南宁市', '柳州市', '西安市', '咸阳市', '银川市', '兰州市']
        };
    },
    components: {},
    mounted() {},
    methods: {

        goNotice() {
            this.$router.push({
                path: '/'
            });
        }

    }
});

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "posi-tips"
  }, [_vm._v("\n        当前定位城市\n        "), _c('span', {
    staticClass: "back",
    on: {
      "click": function($event) {
        _vm.$router.go(-1)
      }
    }
  }, [_vm._v("返回首页")])]), _vm._v(" "), _c('div', {
    staticClass: "address"
  }, [_c('span', [_vm._v("成都市")]), _vm._v(" "), _c('Icon', {
    attrs: {
      "type": "pinpoint"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "has-circle"
  }, [_vm._v("已开通妈妈圈城市")]), _vm._v(" "), _c('div', {
    staticClass: "has-address",
    on: {
      "click": _vm.goNotice
    }
  }, [_c('span', [_vm._v("成都市")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "visibility": "hidden"
    }
  }, [_vm._v("成都市")])]), _vm._v(" "), _c('div', {
    staticClass: "posi-tips"
  }, [_vm._v("正在开通城市，敬请期待")]), _vm._v(" "), _c('div', {
    staticClass: "will-address"
  }, [_vm._l((_vm.noneCity), function(item, i) {
    return _c('span', {
      key: i
    }, [_vm._v(_vm._s(item))])
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "height": "0px",
      "visibility": "hidden"
    }
  }, [_vm._v("最后一")])], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-708ffe52", module.exports)
  }
}

/***/ })

});