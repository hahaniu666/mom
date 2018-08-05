webpackJsonp([11],{

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(427)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(409),
  /* template */
  __webpack_require__(499),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/hahaniu/data0/aa/Circle_html/1/src/views/pages/baidumap1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] baidumap1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-566ee0dd", Component.options)
  } else {
    hotAPI.reload("data-v-566ee0dd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 409:
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
            result: { addr: "", title: "", point: "" },
            test: '1'
        };
    },
    created() {},
    methods: {
        drawMap: function () {
            this.map = new BMap.Map("map_canvas"); // 创建地图实例
            let point = new BMap.Point(120.204, 30.715);

            this.map.centerAndZoom(point, 10);
            this.map.enableScrollWheelZoom();
            this.map.enableKeyboard();

            console.log(this.result);

            this.baiduPoint(this.result);
        },
        addMarker: function (point, addr, title) {
            var marker = new BMap.Marker(point);
            this.map.addOverlay(marker);
            console.log(2);
            var opts = {
                width: 200, // 信息窗口宽度
                height: 100, // 信息窗口高度
                title: title, // 信息窗口标题
                enableMessage: true //设置允许信息窗发送短息
            };
            var infoWindow = new BMap.InfoWindow("地址：" + addr, opts); // 创建信息窗口对象
            marker.addEventListener("click", function () {
                this.map.openInfoWindow(infoWindow, point); //开启信息窗口
            });
        },
        baiduPoint: function (result) {
            var myGeo = new BMap.Geocoder();
            // 将地址解析结果显示在地图上,并调整地图视野
            var addr = '成都市温江区涌泉街道办清泉北街287号';
            result.addr = addr;
            var title = '荟贝佳巧家超市';
            result.title = title;
            var th = this;
            myGeo.getPoint(addr, function (point) {
                if (point) {
                    result.point = point;
                    console.log(result);
                    th.addMarker(point, addr, title);
                    th.clickCenter(result);
                }
            }, "addr");
        },

        clickCenter: function (org) {
            console.log(3, org);
            this.map.centerAndZoom(org.point, 16);
        }

    },
    mounted() {
        // this.loadBMapScript();

        console.log(document.body.clientWidth);
        this.$nextTick(function () {
            this.drawMap();
        });
    }
});

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "parent"
  }, [_c('div', {
    staticClass: "allmap",
    attrs: {
      "id": "map_canvas"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-566ee0dd", module.exports)
  }
}

/***/ })

});