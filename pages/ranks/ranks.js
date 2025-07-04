
var _toConsumableArray2 = require("../../@babel/runtime/helpers/toConsumableArray");

var common_vendor = require("../../common/vendor.js");

var store_index = require("../../store/index.js");

if (!Array) {
    var _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
    var _easycom_uv_load_more2 = common_vendor.resolveComponent("uv-load-more");
    var _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
    (_easycom_uv_avatar2 + _easycom_uv_load_more2 + _easycom_uv_empty2)();
}

var _easycom_uv_avatar = function _easycom_uv_avatar() {
    return "../../node-modules/@climblee/uv-ui/components/uv-avatar/uv-avatar.js";
};

var _easycom_uv_load_more = function _easycom_uv_load_more() {
    return "../../node-modules/@climblee/uv-ui/components/uv-load-more/uv-load-more.js";
};

var _easycom_uv_empty = function _easycom_uv_empty() {
    return "../../node-modules/@climblee/uv-ui/components/uv-empty/uv-empty.js";
};

if (!Math) {
    (_easycom_uv_avatar + _easycom_uv_load_more + _easycom_uv_empty)();
}

var _sfc_main = {
    __name: "rank",
    setup: function setup(__props) {
        var userStore = store_index.useuserStore();
        common_vendor.onLoad(function() {
            getlist();
        });
        var list = common_vendor.ref([]);
        var pageNo = common_vendor.ref(1);
        var status = common_vendor.ref("nomore");
        var empty = common_vendor.ref(false);
        var getlist = function getlist() {
            if (active.value === 0) {
                common_vendor.index.$uv.http.get("/api/client/cqUser/cqCounyList").then(function(res) {
                    list.value = res.data;
                });
            } else if (active.value === 1) {
                common_vendor.index.$uv.http.get("/api/client/cqUser/userSteptList?current=".concat(pageNo.value, "&size=20")).then(function(res) {
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
            } else if (active.value === 2) {
                common_vendor.index.$uv.http.get("/api/client/cqUser/userGradeList?current=".concat(pageNo.value, "&size=20")).then(function(res) {
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
            }
        };
        var scrolltolower = function scrolltolower() {
            if (status.value === "loadmore") {
                pageNo.value++;
                getlist();
            }
        };
        var active = common_vendor.ref(0);
        var changeactive = function changeactive(e) {
            active.value = e;
            list.value = [];
            pageNo.value = 1;
            status.value = "nomore";
            empty.value = false;
            getlist();
        };
        var index = common_vendor.ref(0);
        var array = common_vendor.ref(['区县','单位','队伍','个人']);
        var bindPickerChange = function bindPickerChange(e) {
          index.value = e * 1
        }
        return function(_ctx, _cache) {
            return common_vendor.e({
              index:index,
              indexA: common_vendor.unref(index) === 0,
              indexB: common_vendor.unref(index) === 1,
              indexC: common_vendor.unref(index) === 2,
              indexD: common_vendor.unref(index) === 3,

              array:array,
              bindPickerChange: common_vendor.o(function($event) {
                return bindPickerChange($event.detail.value);
              }),
                a: "https://step-cyuncq.oss-cn-beijing.aliyuncs.com/step/rankimg.png",
                b: common_vendor.o(function($event) {
                    return changeactive(0);
                }),
                c: common_vendor.unref(active) === 0 ? 1 : "",
                d: common_vendor.o(function($event) {
                    return changeactive(1);
                }),
                e: common_vendor.unref(active) === 1 ? 1 : "",
                f: common_vendor.o(function($event) {
                    return changeactive(2);
                }),
                g: common_vendor.unref(active) === 2 ? 1 : "",
                h: common_vendor.unref(active) !== 0
            }, common_vendor.unref(active) !== 0 ? {} : {}, {
                i: common_vendor.unref(active) !== 0
            }, common_vendor.unref(active) !== 0 ? {} : {}, {
                j: common_vendor.unref(active) === 0
            }, common_vendor.unref(active) === 0 ? {} : {}, {
                k: common_vendor.unref(active) === 0
            }, common_vendor.unref(active) === 0 ? {} : {}, {
                l: common_vendor.unref(active) === 1
            }, common_vendor.unref(active) === 1 ? {} : {}, {
                m: common_vendor.unref(active) === 2
            }, common_vendor.unref(active) === 2 ? {} : {}, {
                n: common_vendor.f(common_vendor.unref(list).slice(0, 3), function(item, index, i0) {
                    return common_vendor.e({
                        a: "".concat(_ctx.$imageUrl, "/rank").concat(index + 1, ".png")
                    }, common_vendor.unref(active) !== 0 ? {
                        b: "716fbf2c-0-" + i0,
                        c: common_vendor.p({
                            size: "52rpx",
                            src: item.wechatHead
                        })
                    } : {}, common_vendor.unref(active) !== 0 ? {
                        d: common_vendor.t(item.wechatName)
                    } : {}, common_vendor.unref(active) === 0 ? {
                        e: common_vendor.t(item.title)
                    } : {}, common_vendor.unref(active) === 0 ? {
                        f: common_vendor.t(item.integral)
                    } : {}, common_vendor.unref(active) === 0 ? {
                      id: common_vendor.t(item.id)//区县排名
                    } : {}, common_vendor.unref(active) === 1 ? {
                        g: common_vendor.t(item.stepNumber)
                    } : {}, common_vendor.unref(active) === 2 ? {
                        h: common_vendor.t(item.answerNumber)
                    } : {}, {
                        i: item.openid === common_vendor.unref(userStore).userinfo.openid ? 1 : "",
                        j: item.title === common_vendor.unref(userStore).userinfo.countyTitle ? 1 : ""
                    });
                }),
                o: common_vendor.unref(active) !== 0,
                p: common_vendor.unref(active) !== 0,
                q: common_vendor.unref(active) === 0,
                r: common_vendor.unref(active) === 0,
                s: common_vendor.unref(active) === 1,
                t: common_vendor.unref(active) === 2,
                v: common_vendor.f(common_vendor.unref(list).slice(3), function(item, index, i0) {
                    return common_vendor.e({
                        a: common_vendor.t(index + 4 > 9 ? index + 4 : "0".concat(index + 4))
                    }, common_vendor.unref(active) !== 0 ? {
                        b: "716fbf2c-1-" + i0,
                        c: common_vendor.p({
                            size: "52rpx",
                            src: item.wechatHead
                        })
                    } : {}, common_vendor.unref(active) !== 0 ? {
                        d: common_vendor.t(item.wechatName)
                    } : {}, common_vendor.unref(active) === 0 ? {
                        e: common_vendor.t(item.title)
                    } : {}, common_vendor.unref(active) === 0 ? {
                        f: common_vendor.t(item.integral)
                    } : {}, common_vendor.unref(active) === 0 ? {
                      id: common_vendor.t(item.id)//区县排名
                    } : {}, common_vendor.unref(active) === 1 ? {
                        g: common_vendor.t(item.stepNumber)
                    } : {}, common_vendor.unref(active) === 2 ? {
                        h: common_vendor.t(item.answerNumber)
                    } : {}, {
                        i: item.openid === common_vendor.unref(userStore).userinfo.openid ? 1 : "",
                        j: item.title === common_vendor.unref(userStore).userinfo.countyTitle ? 1 : ""
                    });
                }),
                w: common_vendor.unref(active) !== 0,
                x: common_vendor.unref(active) !== 0,
                y: common_vendor.unref(active) === 0,
                z: common_vendor.unref(active) === 0,
                A: common_vendor.unref(active) === 1,
                B: common_vendor.unref(active) === 2,
                C: !common_vendor.unref(empty)
            }, !common_vendor.unref(empty) ? {
                D: common_vendor.p({
                    status: common_vendor.unref(status)
                })
            } : {}, {
                E: common_vendor.o(scrolltolower)
            });
        };
    }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-716fbf2c" ] ]);

wx.createPage(MiniProgramPage);