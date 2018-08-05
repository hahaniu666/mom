webpackJsonp([10],{

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(428)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(410),
  /* template */
  __webpack_require__(500),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/hahaniu/data0/aa/Circle_html/1/src/views/pages/baidumap2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] baidumap2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-567cf85e", Component.options)
  } else {
    hotAPI.reload("data-v-567cf85e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 410:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            markerArr: [{ title: "名称：广州火车站", point: "113.264531,23.157003", address: "广东省广州市广州火车站", tel: "12306" }, {
                title: "名称：广州塔（赤岗塔）",
                point: "113.330934,23.113401",
                address: "广东省广州市广州塔（赤岗塔） ",
                tel: "18500000000"
            }, { title: "名称：广州动物园", point: "113.312213,23.147267", address: "广东省广州市广州动物园", tel: "18500000000" }, { title: "名称：天河公园", point: "113.372867,23.134274", address: "广东省广州市天河公园", tel: "18500000000" }],
            list: [{
                'title': '荟贝佳乐扣乐扣超市',
                'type': '1',
                'address': "四川省成都市温江区柳城文武路26-32号",
                'position': '温江区-柳城',
                'momWechat': '1'
            }, {
                'title': '荟贝佳巧家超市',
                'type': '2',
                'address': "四川省成都市温江区涌泉街道办清泉北街287号",
                'position': '温江区-涌泉街道办',
                'momWechat': '1'
            }, {
                'title': '荟贝佳一点优购',
                'type': '3',
                'address': "四川省成都市郫都区郫筒镇科化北路208号",
                'position': '郫都区-郫筒镇',
                'momWechat': '1'
            }, {
                'title': '荟贝佳谭氏海湾',
                'type': '4',
                'address': "四川省成都市温江区涌泉街江浦路886号",
                'position': '温江区-涌泉街',
                'momWechat': '1'
            }, {
                'title': '荟贝佳美乐超市',
                'type': '5',
                'address': "四川省成都市双流县航空路6号4棟1层1号",
                'position': '双流县-航空路',
                'momWechat': '1'
            }, {
                'title': '荟贝佳开心岛婴童水育乐园',
                'type': '6',
                'address': "四川省成都市温江区柳城文化路繁华时代广场8栋1层6号",
                'position': '温江区-城文化路',
                'momWechat': '1'
            }, {
                'title': '荟贝佳青羊家有宝贝',
                'type': '7',
                'address': "四川省成都市青羊区苏坡中路96号",
                'position': '青羊区-苏坡中路',
                'momWechat': '1'
            }, {
                'title': '荟贝佳家得利',
                'type': '8',
                'address': "四川省成都市温江区南浦路西段546号",
                'position': '温江区-南浦路',
                'momWechat': '1'
            }, {
                'title': '荟贝佳萌贝游泳馆',
                'type': '9',
                'address': "四川省成都市温江区海科路东段688号26栋附101",
                'position': '温江区-海科路',
                'momWechat': '1'
            }, {
                'title': '荟贝佳彭州跨境超市',
                'type': '10',
                'address': "四川省成都市彭州市天彭镇牡丹西路顺风港东门位",
                'position': '天彭镇-牡丹西路',
                'momWechat': '1'
            }, {
                'title': '荟贝佳新都实体店',
                'type': '11',
                'address': "四川省成都市新都区新繁镇东湖路136号",
                'position': '新都区-新繁镇',
                'momWechat': '1'
            }, {
                'title': '荟贝佳南城店',
                'type': '12',
                'address': "四川省成都市高新区南城都汇成汉中路185",
                'position': '高新区-南城都汇',
                'momWechat': '1'
            }, {
                'title': '荟贝佳双流维尼宝贝',
                'type': '13',
                'address': "四川省成都市双流区华阳广都上街56号",
                'position': '双流区-华阳广都',
                'momWechat': '1'
            }, {
                'title': '荟贝佳婴皇贝贝',
                'type': '14',
                'address': "四川省成都市温江区金马镇科源路1031号",
                'position': '温江区-金马镇',
                'momWechat': '1'
            }, {
                'title': '荟贝佳妈咪宝贝',
                'type': '15',
                'address': "四川省成都市新都区新都街道马超东路380号1栋1层121号",
                'position': '新都区-新都街道',
                'momWechat': '1'
            }, {
                'title': '荟贝佳世豪店',
                'type': '16',
                'address': "四川省成都市高新区南华路1500号3幢1层14号",
                'position': '高新区-南华路',
                'momWechat': '1'
            }, {
                'title': '荟贝佳贝比秀',
                'type': '19',
                'address': "四川省成都市青羊区培风横街259号",
                'position': '青羊区-培风横街',
                'momWechat': '1'
            }, {
                'title': '荟贝佳荟贝佳彤宝妈咪',
                'type': '20',
                'address': "四川省乐山市高新区创业街26号",
                'position': '高新区-创业街',
                'momWechat': '1'
            }, {
                'title': '荟贝佳八里小区店',
                'type': '21',
                'address': "四川省成都市成华区八里小区怡福路57号",
                'position': '成华区-八里小区',
                'momWechat': '1'
            }, {
                'title': '荟贝佳郫县希希母婴店',
                'type': '22',
                'address': "四川省成都市郫都区郫筒镇文信路212号1层",
                'position': '郫都区-郫筒镇',
                'momWechat': '1'
            }, {
                'title': '荟贝佳郫县萌大宝',
                'type': '23',
                'address': "四川省成都市郫都区郫筒镇郫花路299号19栋附7号",
                'position': '郫都区-郫筒镇',
                'momWechat': '1'
            }, {
                'title': '荟贝佳温江嘟嘟育婴馆',
                'type': '24',
                'address': "四川省成都市温江区永盛镇尚石中路346号",
                'position': '郫都区-郫筒镇',
                'momWechat': '1'
            }, {
                'title': '荟贝佳辣妈宝贝游家渡店',
                'type': '27',
                'address': "四川省成都市温江区天府街道游家渡小区15号",
                'position': '温江区-郫筒镇',
                'momWechat': '1'
            }, {
                'title': '荟贝佳可可baby',
                'type': '28',
                'address': "四川省成都市温江区来凤路347-349号",
                'position': '温江区-来凤路',
                'momWechat': '1'
            }, {
                'title': '荟贝佳婴之皇',
                'type': '29',
                'address': "四川省成都市青白江区清江中路60号附10号",
                'position': '青白江区-清江中路',
                'momWechat': '1'
            }, {
                'title': '荟贝佳龙泉中心城店',
                'type': '30',
                'address': "四川省成都市龙泉驿区北泉路中心城商铺1-1-100号",
                'position': '龙泉驿区-北泉路',
                'momWechat': '1'
            }]
        };
    },
    created() {},
    methods: {
        drawMap: function () {

            // this.baiduPoint(this.result);

            //
            this.map = new BMap.Map("map_canvas");
            //第1步：设置地图中心点，广州市
            var point = new BMap.Point(113.312213, 23.147267);
            //第2步：初始化地图,设置中心点坐标和地图级别。
            this.map.centerAndZoom(point, 13);
            //第3步：启用滚轮放大缩小
            this.map.enableScrollWheelZoom(true);
            //第4步：向地图中添加缩放控件
            var ctrlNav = new window.BMap.NavigationControl({
                anchor: BMAP_ANCHOR_TOP_LEFT,
                type: BMAP_NAVIGATION_CONTROL_LARGE
            });
            this.map.addControl(ctrlNav);
            //第5步：向地图中添加缩略图控件
            var ctrlOve = new window.BMap.OverviewMapControl({
                anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
                isOpen: 1
            });
            this.map.addControl(ctrlOve);

            //第6步：向地图中添加比例尺控件
            var ctrlSca = new window.BMap.ScaleControl({
                anchor: BMAP_ANCHOR_BOTTOM_LEFT
            });
            this.map.addControl(ctrlSca);

            //
            // this.map = new BMap.Map("map_canvas");        // 创建地图实例
            // let point = new BMap.Point(120.204, 30.715);
            //
            // this.map.centerAndZoom(point, 10);
            // this.map.enableScrollWheelZoom();
            // this.map.enableKeyboard();
            //
            // console.log(this.result);

            //第7步：绘制点
            for (var i = 0; i < this.markerArr.length; i++) {
                var p0 = this.markerArr[i].point.split(",")[0];
                var p1 = this.markerArr[i].point.split(",")[1];
                var maker = this.addMarker(new window.BMap.Point(p0, p1), i);
                this.addInfoWindow(maker, this.markerArr[i], i);
            }
        },
        addMarker: function (point, index) {
            var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {
                offset: new BMap.Size(10, 25),
                imageOffset: new BMap.Size(0, 0 - index * 25)
            });
            var marker = new BMap.Marker(point, { icon: myIcon });
            this.map.addOverlay(marker);
            return marker;
        },
        addInfoWindow(marker, poi) {
            //pop弹窗标题
            var title = '<div style="font-weight:bold;color:#CE5521;font-size:14px">' + poi.title + '</div>';
            //pop弹窗信息
            var html = [];
            html.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px arial,simsun,sans-serif"><tbody>');
            html.push('<tr>');
            html.push('<td style="vertical-align:top;line-height:16px;width:38px;white-space:nowrap;word-break:keep-all">地址:</td>');
            html.push('<td style="vertical-align:top;line-height:16px">' + poi.address + ' </td>');
            html.push('</tr>');
            html.push('</tbody></table>');
            var infoWindow = new BMap.InfoWindow(html.join(""), { title: title, width: 200 });

            var openInfoWinFun = function () {
                marker.openInfoWindow(infoWindow);
            };
            marker.addEventListener("click", openInfoWinFun);
            return openInfoWinFun;
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

/***/ 428:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 500:
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-567cf85e", module.exports)
  }
}

/***/ })

});