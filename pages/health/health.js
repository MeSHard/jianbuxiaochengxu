var common_vendor = require("../../common/vendor.js");

var store_index = require("../../store/index.js");

if (!Array) {
    var _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
    _easycom_qiun_data_charts2();
}

var _easycom_qiun_data_charts = function _easycom_qiun_data_charts() {
    return "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
};

if (!Math) {
    _easycom_qiun_data_charts();
}
var isfolat = function isFloat(value) {
  return !isNaN(value) && parseFloat(value) === Number(value);
}
var _sfc_main = {
    __name: "health",
    setup: function setup(__props) {
        var userStore = store_index.useuserStore();
        var weight = common_vendor.ref("");
        var stature = common_vendor.ref("");
        var waist =  common_vendor.ref("");
        var hip =  common_vendor.ref("");
        var pro =  common_vendor.ref("");
        var submit = function submit() {
            if (!stature.value || !isfolat(stature.value)) return common_vendor.index.$uv.toast("请输入身高");
            if (!weight.value || !isfolat(weight.value)) return common_vendor.index.$uv.toast("请输入正确的体重");
            if (!waist.value || !isfolat(waist.value)) return common_vendor.index.$uv.toast("请输入正确的腰围");
            if (!hip.value || !isfolat(hip.value)) return common_vendor.index.$uv.toast("请输入正确的臀围");
           
            common_vendor.index.$uv.debounce(function() {
                common_vendor.index.$uv.http.post("/api/client/cqUserHealth/savecqUserHealth", {
                    stature: stature.value,
                    weight: weight.value,
                    waist:waist.value,
                    hip:hip.value,
                    pro:pro.value
                }).then(function(res) {
                    common_vendor.index.$uv.toast("保存成功");
                    setTimeout(function() {
                      stature.value = ''
                      weight.value = ''
                      waist.value = ''
                      hip.value = ''
                      pro.value = ''
                        getdata();
                    }, 1e3);
                });
            }, 500);
        };
        common_vendor.onLoad(function() {
            getdata();
        });
        var getdata = function getdata() {
            common_vendor.index.$uv.http.get("/api/client/cqUserHealth/cqUserHealthList").then(function(res) {
                chartData.value.categories = res.data.records.map(function(item) {
                    return item.createTime.slice(5, 10);
                });
                // 体脂率
                var fatSeries = {
                  data:res.data.records.map(function(item) {
                    return item.pro;
                  }),
                  name:"体脂率%",
                  yAxisIndex:0
                }

                 // 体重
                 var weightSeries = {
                  data:res.data.records.map(function(item) {
                    return item.weight;
                  }),
                  name:"体重KG",
                  yAxisIndex:1
                }

                 // 腰围
                 var waistSeries = {
                  data:res.data.records.map(function(item) {
                    return item.waist ?? 0 ;
                  }),
                  name:"腰围cm",
                  yAxisIndex:0
                }

                // 臀围
                var hipSeries = {
                  data:res.data.records.map(function(item) {
                    return item.hip ?? 0;
                  }),
                  name:"臀围cm",
                  yAxisIndex:0
                }
                // var chartDataobj = {
                //     data: [],
                //     name: "体脂率%"
                // };
                // chartDataobj.data = res.data.records.map(function(item) {
                //     return item.bodyFatPercentage;
                // });
                // chartData.value.series = [ chartDataobj ];
                chartData.value.series = [fatSeries,weightSeries,waistSeries,hipSeries];
            });
        };
        var opts = common_vendor.ref({
            color: [ "#09B88D","#FFA500","#800080","#99ff33" ],
            padding: [ 50, 12, 30, 12 ],
            enableScroll: false,
            dataLabel: false,
            legend: {
                show: true,
                position:"top"
            },
            xAxis: {
                disableGrid: true,
                axisLineColor: "#BDE5C0",
                fontColor: "#83BE9B",
                fontSize: 10
            },
            yAxis: {
              
                gridColor: "#E8F6EE",
                gridType: "dash",
                dashLength: 2,
                showTitle: false,
                data: [ {
                  show:false,
                  splitLine:false,
                    axisLine: false,
                    fontColor: "#83BE9B",
                    fontSize: 10,
                    title: "体脂率%",
                    titleFontColor: "#83BE9B",
                    titleOffsetY: -10,
                    min:0,
                    max:100,
                    splitNumber:10
                }
                ]

              //   ,{
              //     position: 'right',
              //     fontColor: "#FFA500",
              //     fontSize: 10,
              //     title: "体重(KG)",
              //     titleFontColor: "#FFA500",
              //     titleOffsetY: -10,
              //     axisLine:false,
              //     min:0,
              //     max:100
              // }
            
            },
            extra: {
                area: {
                    type: "curve",
                    opacity: .2,
                    addLine: true,
                    width: 2,
                    gradient: true,
                    activeType: "hollow"
                }
            }
        });
        var chartData = common_vendor.ref({});
        return function(_ctx, _cache) {
            return {
                a: "".concat(_ctx.$imageUrl, "/healthbg.png"),
                b: common_vendor.p({
                    type: "area",
                    opts: common_vendor.unref(opts),
                    chartData: common_vendor.unref(chartData)
                }),
                c: common_vendor.unref(stature),
                d: common_vendor.o(function($event) {
                    return common_vendor.isRef(stature) ? stature.value = $event.detail.value : null;
                }),
                e: common_vendor.unref(weight),
                f: common_vendor.o(function($event) {
                    return common_vendor.isRef(weight) ? weight.value = $event.detail.value : null;
                }),
                waist: common_vendor.unref(waist),
                bindwaist: common_vendor.o(function($event) {
                  return common_vendor.isRef(waist) ? waist.value = $event.detail.value : null;
                }),
                hip: common_vendor.unref(hip),
                bindhip: common_vendor.o(function($event) {
                  return common_vendor.isRef(hip) ? hip.value = $event.detail.value : null;
                }),
                pro: common_vendor.unref(pro),
                bindpro: common_vendor.o(function($event) {
                  return common_vendor.isRef(pro) ? pro.value = $event.detail.value : null;
                }),
                g: common_vendor.o(submit)
            };
        };
    }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-04910d43" ] ]);

wx.createPage(MiniProgramPage);