var _toConsumableArray2 = require("../../@babel/runtime/helpers/toConsumableArray");

var common_vendor = require("../../common/vendor.js");

var common_assets = require("../../common/assets.js");

var _sfc_main = {
    __name: "article",
    setup: function setup(__props) {
        common_vendor.onLoad(function(e) {
          type.value = e.id
          title.value = e.title
            getlist();
            common_vendor.index.$on("issue", function() {
                pageNo.value = 1;
                list.value = [];
                status.value = "loadmore";
                empty.value = false;
                getlist();
            });
        });
        common_vendor.onUnload(function() {
            common_vendor.index.$off("issue");
        });
        common_vendor.ref(null);
        var title = common_vendor.ref();
        var type = common_vendor.ref(1);
        var pageNo = common_vendor.ref(1);
        var list = common_vendor.ref([]);
        var status = common_vendor.ref("loadmore");
        var empty = common_vendor.ref(false);
        var getlist = function getlist() {
            common_vendor.index.$uv.http.get("/api/client/cqPopularizationOfScience/cqPopularizationOfSciencePage?type="+type.value+"&current=".concat(pageNo.value, "&size=20")).then(function(res) {
                if (res.data.records.length === 0) {
                    empty.value = true;
                    return;
                } else {
                    empty.value = false;
                }
                if (res.data.pages > pageNo.value) {
                    list.value = [].concat(_toConsumableArray2(list.value), _toConsumableArray2(res.data.records));
                    status.value = "loadmore";
                } else {
                    list.value = [].concat(_toConsumableArray2(list.value), _toConsumableArray2(res.data.records));
                    status.value = "nomore";
                }
            });
        };
        common_vendor.onReachBottom(function() {
            if (status.value === "loadmore") {
                pageNo.value++;
                getlist();
            }
        });
        var navtoarticledetail = function navtoarticledetail(item) {
          common_vendor.index.setStorageSync("articledetail",item)
            common_vendor.index.navigateTo({
                // url: "/pages/articledetail/articledetail?id=".concat(id)
                url: "/pages/articledetail/articledetail"
            });
        };
        return function(_ctx, _cache) {
            return {
                a: "https://step-cyuncq.oss-cn-beijing.aliyuncs.com/step/rankimg.png",
                b: common_vendor.f(common_vendor.unref(list), function(item, index, i0) {
                    var _a;
                    return {
                        a: (_a = item.img) == null ? void 0 : _a.split(",")[0],
                        b: common_vendor.o(function($event) {
                            return navtoarticledetail(item);
                        }),
                        c:common_vendor.t(item.title),
                        d:common_vendor.t(item.updateTime),
                    };
                }),
                c: common_assets._imports_0$1,
                title:common_vendor.unref(title)
            };
        };
    }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-33268ad9" ] ]);

wx.createPage(MiniProgramPage);