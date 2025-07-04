var common_vendor = require("../../common/vendor.js");

var _sfc_main = {
    __name: "answersuccess",
    setup: function setup(__props) {
        var grades = common_vendor.ref(0);
        var id = common_vendor.ref("");
        common_vendor.onLoad(function(e) {
            id.value = e.id;
            grades.value = e.grades;
            getlist();
        });
        var list = common_vendor.ref([]);
        var getlist = function getlist() {
            common_vendor.index.$uv.http.get("/api/client/cqTopic/cqCorrectionNotebookList/".concat(id.value)).then(function(res) {
                list.value = res.data;
            });
        };
        var raindex = function raindex() {
            common_vendor.index.reLaunch({
                url: "/pages/index/index"
            });
        };
        var rarank = function rarank() {
            common_vendor.index.reLaunch({
                url: "/pages/rank/rank"
            });
        };
        return function(_ctx, _cache) {
            return {
                a: "".concat(_ctx.$imageUrl, "/successbg.png"),
                b: "".concat(_ctx.$imageUrl, "/success1.png"),
                c: "".concat(_ctx.$imageUrl, "/success2.png"),
                d: common_vendor.t(common_vendor.unref(grades)),
                e: common_vendor.o(raindex),
                f: common_vendor.o(rarank),
                g: common_vendor.f(common_vendor.unref(list), function(item, index, i0) {
                    return {
                        a: common_vendor.t(index + 1),
                        b: common_vendor.t(item.topicTitle),
                        c: common_vendor.t(item.isTureOption),
                        d: common_vendor.t(item.isOption),
                        e: common_vendor.f(item.cqAnswerList, function(item1, k1, i1) {
                            return {
                                a: common_vendor.t(item1.isOption),
                                b: common_vendor.t(item1.answer)
                            };
                        })
                    };
                })
            };
        };
    }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-fa1377c8" ] ]);

wx.createPage(MiniProgramPage);