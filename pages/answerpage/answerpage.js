var common_vendor = require("../../common/vendor.js");

var _sfc_main = {
    __name: "answerpage",
    setup: function setup(__props) {
        common_vendor.onLoad(function(e) {
            getlist(e.id);
            knowledgeId.value = e.id
        });

        var knowledgeId = common_vendor.ref([]);
        var list = common_vendor.ref([]);
        var getlist = function getlist(id) {
            common_vendor.index.$uv.http.get("/api/client/cqTopic/cqTopicAnswerList/".concat(id)).then(function(res) {
                list.value = res.data;
            });
        };
        var isactive = common_vendor.computed(function() {
            var _a;
            return ((_a = list.value[index.value]) == null ? void 0 : _a.cqAnswerList.filter(function(item) {
                return item.status;
            }).length) ? false : true;
        });
        var index = common_vendor.ref(0);
        var cqTopicUserAnswerList = common_vendor.ref([]);
        var grades = common_vendor.ref(0);
        var correctlist = common_vendor.ref([]);
        var select = function select(id) {
            var _a;
            (_a = list.value[index.value]) == null ? void 0 : _a.cqAnswerList.forEach(function(item) {
                if (item.id == id) {
                    item.status = true;
                } else {
                    item.status = false;
                }
            });
        };
        var next = function next() {
            var _a, _b, _c;
            var arr = (_a = list.value[index.value]) == null ? void 0 : _a.cqAnswerList.filter(function(item) {
                return item.status;
            });
            if (arr.length === 0) return common_vendor.index.$uv.toast("请选择答案");
            if (arr[0].isType === 1) {
                grades.value += (_b = list.value[index.value]) == null ? void 0 : _b.integralNumber;
            } else {
                var arr1 = list.value[index.value];
                arr1.topicTitle = arr1.title;
                arr1.isOption = arr[0].isOption;
                arr1.isTureOption = arr1.cqAnswerList.filter(function(item) {
                    return item.isType === 1;
                })[0].isOption;
                arr1.topicId = arr1.id;
                correctlist.value.push(arr1);
            }
            cqTopicUserAnswerList.value.push((_c = list.value[index.value]) == null ? void 0 : _c.id);
            index.value++;
        };
        var navtoanswerresult = function navtoanswerresult() {
            var _a, _b, _c;
            var arr = (_a = list.value[index.value]) == null ? void 0 : _a.cqAnswerList.filter(function(item) {
                return item.status;
            });
            if (arr.length === 0) return common_vendor.index.$uv.toast("请选择答案");
            if (arr[0].isType === 1) {
                grades.value += (_b = list.value[index.value]) == null ? void 0 : _b.integralNumber;
            } else {
                var arr1 = list.value[index.value];
                arr1.topicTitle = arr1.title;
                arr1.isOption = arr[0].isOption;
                arr1.isTureOption = arr1.cqAnswerList.filter(function(item) {
                    return item.isType === 1;
                })[0].isOption;
                arr1.topicId = arr1.id;
                correctlist.value.push(arr1);
            }
            cqTopicUserAnswerList.value.push((_c = list.value[index.value]) == null ? void 0 : _c.id);
            common_vendor.index.$uv.http.post("/api/client/cqTopic/cqTopicUserAnswer", {
                cqTopicUserAnswerList: cqTopicUserAnswerList.value,
                grades: grades.value,
                knowledgeId: knowledgeId.value
            }).then(function(res) {
                var _a2;
                correctlist.value = correctlist.value.map(function(item) {
                    item.id = "";
                    return item;
                });
                common_vendor.index.$uv.http.post("/api/client/cqTopic/cqCorrectionNotebook", correctlist.value);
                common_vendor.index.navigateTo({
                    url: "/pages/answersuccess/answersuccess?grades=".concat(grades.value, "&id=").concat((_a2 = correctlist.value[0]) == null ? void 0 : _a2.knowledgeId)
                });
            });
        };
        return function(_ctx, _cache) {
            var _a, _b;
            return common_vendor.e({
                a: common_vendor.unref(list).length === 0
            }, common_vendor.unref(list).length === 0 ? {} : {}, {
                b: common_vendor.unref(list).length !== 0
            }, common_vendor.unref(list).length !== 0 ? {
                c: common_vendor.t(common_vendor.unref(index) + 1),
                d: common_vendor.t(common_vendor.unref(list).length),
                e: common_vendor.t(common_vendor.unref(index) + 1),
                f: common_vendor.t((_a = common_vendor.unref(list)[common_vendor.unref(index)]) == null ? void 0 : _a.title),
                g: common_vendor.f((_b = common_vendor.unref(list)[common_vendor.unref(index)]) == null ? void 0 : _b.cqAnswerList, function(item, k0, i0) {
                    return {
                        a: common_vendor.t(item.isOption),
                        b: common_vendor.t(item.answer),
                        c: common_vendor.o(function($event) {
                            return select(item.id);
                        }),
                        d: item.status ? 1 : ""
                    };
                })
            } : {}, {
                h: common_vendor.unref(list).length !== 0
            }, common_vendor.unref(list).length !== 0 ? common_vendor.e({
                i: common_vendor.unref(index) + 1 < common_vendor.unref(list).length
            }, common_vendor.unref(index) + 1 < common_vendor.unref(list).length ? {
                j: common_vendor.o(next),
                k: common_vendor.unref(isactive) ? 1 : ""
            } : {
                l: common_vendor.o(navtoanswerresult)
            }) : {});
        };
    }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-b9ea4f35" ] ]);

wx.createPage(MiniProgramPage);