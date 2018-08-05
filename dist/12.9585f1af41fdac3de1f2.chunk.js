webpackJsonp([12],{

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(423)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(408),
  /* template */
  __webpack_require__(506),
  /* scopeId */
  "data-v-76c61d03",
  /* cssModules */
  null
)
Component.options.__file = "/Users/hahaniu/data0/aa/Circle_html/1/src/views/pages/aa.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] aa.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76c61d03", Component.options)
  } else {
    hotAPI.reload("data-v-76c61d03", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 408:
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

// import {TMap} from '../../Map'
var map = null;
var searchService = null;
/* harmony default export */ __webpack_exports__["default"] = ({

    data() {
        return {
            latelyWidth: 0
        };
    },
    components: {},
    mounted() {
        this.init();
    },
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
        },
        init() {
            TMap('SBBBZ-6DNKU-7IBV7-27ZD5-JL2V7-KTF3Q ').then(qq => {
                var center = new qq.maps.LatLng(39.916527, 116.397128);
                map = new qq.maps.Map(document.getElementById('container'), {
                    center: center,
                    zoomLevel: 13
                });
                //调用Poi检索类
                searchService = new qq.maps.SearchService({
                    panel: document.getElementById('infoDiv'),
                    map: map
                });
                this.getResult();
            });
        },
        getResult() {

            //设置searchRequest
            var poiText = document.getElementById("poiText").value;
            var regionText = document.getElementById("regionText").value;

            searchService.setLocation(regionText);

            searchService.search(poiText);
        }

    }

});

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    attrs: {
      "id": "container"
    }
  }), _vm._v(" "), _c('div', [_vm._v("区域 "), _c('input', {
    attrs: {
      "type": "text",
      "value": "北京",
      "id": "regionText"
    }
  }), _vm._v("\n        地点 "), _c('input', {
    attrs: {
      "type": "text",
      "value": "酒店",
      "id": "poiText"
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "type": "button",
      "value": "Search"
    },
    on: {
      "click": function($event) {
        _vm.getResult()
      }
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "id": "pageIndexLabel"
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "500px",
      "height": "180px"
    },
    attrs: {
      "id": "infoDiv"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-76c61d03", module.exports)
  }
}

/***/ })

});