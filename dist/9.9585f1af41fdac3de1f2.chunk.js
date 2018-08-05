webpackJsonp([9],{

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(430)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(412),
  /* template */
  __webpack_require__(502),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/hahaniu/data0/aa/Circle_html/1/src/views/pages/baidumap4.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] baidumap4.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56992760", Component.options)
  } else {
    hotAPI.reload("data-v-56992760", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 412:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            list: [{
                title: '荟贝佳乐扣乐扣超市',
                type: '1',
                address: "四川省成都市温江区柳城文武路26-32号",
                position: '温江区-柳城',
                momWechat: '1'
            }, {
                title: '荟贝佳巧家超市',
                type: '2',
                address: "四川省成都市温江区涌泉街道办清泉北街287号",
                position: '温江区-涌泉街道办',
                momWechat: '1'
            }, {
                title: '荟贝佳一点优购',
                type: '3',
                address: "四川省成都市郫都区郫筒镇科化北路208号",
                position: '郫都区-郫筒镇',
                momWechat: '1'
            }, {
                title: '荟贝佳谭氏海湾',
                type: '4',
                address: "四川省成都市温江区涌泉街江浦路886号",
                position: '温江区-涌泉街',
                momWechat: '1'
            }, {
                title: '荟贝佳美乐超市',
                type: '5',
                address: "四川省成都市双流县航空路6号4棟1层1号",
                position: '双流县-航空路',
                momWechat: '1'
            }, {
                title: '荟贝佳开心岛婴童水育乐园',
                type: '6',
                address: "四川省成都市温江区柳城文化路繁华时代广场8栋1层6号",
                position: '温江区-城文化路',
                momWechat: '1'
            }, {
                title: '荟贝佳青羊家有宝贝',
                type: '7',
                address: "四川省成都市青羊区苏坡中路96号",
                position: '青羊区-苏坡中路',
                momWechat: '1'
            }, {
                title: '荟贝佳家得利',
                type: '8',
                address: "四川省成都市温江区南浦路西段546号",
                position: '温江区-南浦路',
                momWechat: '1'
            }, {
                title: '荟贝佳萌贝游泳馆',
                type: '9',
                address: "四川省成都市温江区海科路东段688号26栋附101",
                position: '温江区-海科路',
                momWechat: '1'
            }, {
                title: '荟贝佳彭州跨境超市',
                type: '10',
                address: "四川省成都市彭州市天彭镇牡丹西路顺风港东门位",
                position: '天彭镇-牡丹西路',
                momWechat: '1'
            }, {
                title: '荟贝佳新都实体店',
                type: '11',
                address: "四川省成都市新都区新繁镇东湖路136号",
                position: '新都区-新繁镇',
                momWechat: '1'
            }, {
                title: '荟贝佳南城店',
                type: '12',
                address: "四川省成都市高新区南城都汇成汉中路185",
                position: '高新区-南城都汇',
                momWechat: '1'
            }, {
                title: '荟贝佳双流维尼宝贝',
                type: '13',
                address: "四川省成都市双流区华阳广都上街56号",
                position: '双流区-华阳广都',
                momWechat: '1'
            }, {
                title: '荟贝佳婴皇贝贝',
                type: '14',
                address: "四川省成都市温江区金马镇科源路1031号",
                position: '温江区-金马镇',
                momWechat: '1'
            }, {
                title: '荟贝佳妈咪宝贝',
                type: '15',
                address: "四川省成都市新都区新都街道马超东路380号1栋1层121号",
                position: '新都区-新都街道',
                momWechat: '1'
            }, {
                title: '荟贝佳世豪店',
                type: '16',
                address: "四川省成都市高新区南华路1500号3幢1层14号",
                position: '高新区-南华路',
                momWechat: '1'
            }, {
                title: '荟贝佳贝比秀',
                type: '19',
                address: "四川省成都市青羊区培风横街259号",
                position: '青羊区-培风横街',
                momWechat: '1'
            }, {
                title: '荟贝佳荟贝佳彤宝妈咪',
                type: '20',
                address: "四川省乐山市高新区创业街26号",
                position: '高新区-创业街',
                momWechat: '1'
            }, {
                title: '荟贝佳八里小区店',
                type: '21',
                address: "四川省成都市成华区八里小区怡福路57号",
                position: '成华区-八里小区',
                momWechat: '1'
            }, {
                title: '荟贝佳郫县希希母婴店',
                type: '22',
                address: "四川省成都市郫都区郫筒镇文信路212号1层",
                position: '郫都区-郫筒镇',
                momWechat: '1'
            }, {
                title: '荟贝佳郫县萌大宝',
                type: '23',
                address: "四川省成都市郫都区郫筒镇郫花路299号19栋附7号",
                position: '郫都区-郫筒镇',
                momWechat: '1'
            }, {
                title: '荟贝佳温江嘟嘟育婴馆',
                type: '24',
                address: "四川省成都市温江区永盛镇尚石中路346号",
                position: '郫都区-郫筒镇',
                momWechat: '1'
            }, {
                title: '荟贝佳辣妈宝贝游家渡店',
                type: '27',
                address: "四川省成都市温江区天府街道游家渡小区15号",
                position: '温江区-郫筒镇',
                momWechat: '1'
            }, {
                title: '荟贝佳可可baby',
                type: '28',
                address: "四川省成都市温江区来凤路347-349号",
                position: '温江区-来凤路',
                momWechat: '1'
            }, {
                title: '荟贝佳婴之皇',
                type: '29',
                address: "四川省成都市青白江区清江中路60号附10号",
                position: '青白江区-清江中路',
                momWechat: '1'
            }, {
                title: '荟贝佳龙泉中心城店',
                type: '30',
                address: "四川省成都市龙泉驿区北泉路中心城商铺1-1-100号",
                position: '龙泉驿区-北泉路',
                momWechat: '1'
            }],
            result: {
                addr: '',
                title: '',
                point: ''
            }
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
            for (var i = 0; i < this.list.length; i++) {

                this.addInfo(this.list[i], i);
            }
        },
        addInfo(list, i) {
            var myGeo = new BMap.Geocoder();
            // 将地址解析结果显示在地图上,并调整地图视野
            var addr = list.address;
            this.result.addr = addr;
            var title = list.title;
            this.result.title = title;
            var th = this;
            console.log(i, th.result);

            myGeo.getPoint(addr, function (point) {
                if (point) {
                    th.result.point = point;
                    console.log(i, th.result);

                    // result.point = point;
                    // console.log(result);
                    // th.addMarker(point, addr, title);
                    // th.clickCenter(result);

                    th.addMarker(point, addr, title, i);
                    if (i == '1') {
                        th.clickCenter(th.result);
                    }
                    // th.addInfoWindow(th.addMarker(point, addr, title, i), th.markerArr[i], i);
                    // th.addMarker(point, addr, title, i);
                    // th.clickCenter(this.result);
                }
            }, "addr");
        },
        clickCenter: function (org) {
            console.log(3, org);
            this.map.centerAndZoom(org.point, 10);
        },
        addMarker: function (point, addr, title, index) {
            var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {
                offset: new BMap.Size(10, 25),
                imageOffset: new BMap.Size(0, 0 - index * 25)
            });
            // var marker = new BMap.Marker(point, {icon: myIcon});
            // this.map.addOverlay(marker);
            var pixel = this.map.pointToOverlayPixel(point);
            console.log('pixel+index', index, pixel);

            var span = this._span = document.createElement("span");
            this._span.innerHTML = title;
            this._span.style.left = pixel.x + 'px';
            this._span.style.top = pixel.y + 'px';
            this._span.style.display = 'block';
            this._span.style.width = '140px';
            this._span.style.position = 'absolute';
            this._span.style.background = '#44b2f7';

            this._span.style.padding = '5px';
            this._span.style.width = '100px';
            this._span.style.textOverflow = 'ellipsis';
            this._span.style.overflow = 'hidden';
            this._span.style.textAlign = 'center';
            this._span.style.whiteSpace = 'nowrap';
            this._span.style.borderRadius = '50px';

            // padding: 10px;
            // /* background: blue; */
            // width: 100px;
            // white-space: nowrap;
            // text-overflow: ellipsis;
            // overflow: hidden;
            // text-align: center;

            this.map.getPanes().labelPane.appendChild(span);

            var marker = new BMap.Marker(point);
            marker.setIcon(myIcon);
            this.map.addOverlay(marker);
            console.log(2);
            // var opts = {
            //     width: 200,     // 信息窗口宽度
            //     height: 100,     // 信息窗口高度
            //     title: title, // 信息窗口标题
            //     enableMessage: true//设置允许信息窗发送短息
            // };
            // var infoWindow = new BMap.InfoWindow("地址：" + addr, opts);  // 创建信息窗口对象
            // var infoWindow = new BMap.InfoWindow("地址：" + addr, opts);  // 创建信息窗口对象

            var th1 = this;
            //
            marker.addEventListener("click", function (e) {
                console.log('3', e);

                // th1._span.style.left = pixel.x + 'px';
                // th1._span.style.top = pixel.y + 'px';
                // this.map.openInfoWindow(infoWindow, point); //开启信息窗口
                th1.map.centerAndZoom(point, 10);
            });
            // marker.addEventListener("click", this.markDiv(addr));
            return marker;
        },
        markDiv(addr) {
            var p = addr;
            console.log('p, text', p);

            var text = "marker的位置是" + addr;
            console.log('p, text', p, text);

            var div = window._infoDiv;
            if (!div) {
                div = window._infoDiv = document.createElement("div");
                div.className = "infoBox";
                document.body.appendChild("div");
            }
            div.innerHTML = text;
            div.style.left = 500 + 'px';
            div.style.top = 500 + 'px';
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

/***/ 430:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 502:
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-56992760", module.exports)
  }
}

/***/ })

});