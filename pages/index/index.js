var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");

var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");

var common_vendor = require("../../common/vendor.js");

var common_assets = require("../../common/assets.js");

var store_index = require("../../store/index.js");

if (!Array) {
    var _easycom_tui_circular_progress2 = common_vendor.resolveComponent("tui-circular-progress");
    var _easycom_calendar2 = common_vendor.resolveComponent("calendar");
    (_easycom_tui_circular_progress2 + _easycom_calendar2)();
}

var _easycom_tui_circular_progress = function _easycom_tui_circular_progress() {
    return "../../components/tui-circular-progress/tui-circular-progress.js";
};

var _easycom_calendar = function _easycom_calendar() {
    return "../../components/calendar/calendar.js";
};

if (!Math) {
    (_easycom_tui_circular_progress + _easycom_calendar)();
}

var _sfc_main = {
    __name: "index",
    setup: function setup(__props) {
        common_vendor.ref(true);
        var userStore = store_index.useuserStore();
        var percent = common_vendor.ref(0);
        var isaccomplish = common_vendor.ref(0);
        var stepNumber = common_vendor.ref(0);
        common_vendor.onLoad(function() {
            if (common_vendor.index.getStorageSync("token")) {
                userStore.getuserinfo();
                getdata();
            }
        });
        common_vendor.index.$on("loginok", function() {
            userStore.getuserinfo();
            getdata();
        });
        common_vendor.onUnload(function() {
            common_vendor.index.$off("loginok");
        });
        common_vendor.ref([ {
            status: false
        }, {
            status: false
        }, {
            status: false
        }, {
            status: false
        }, {
            status: false
        }, {
            status: false
        }, {
            status: false
        }, {
            status: false
        }, {
            status: false
        }, {
            status: false
        }, {
            status: false
        }, {
            status: false
        } ]);
        var getdata = /* */ function() {
            var _ref = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee() {
                var _yield$common_vendor$, code;
                return _regeneratorRuntime2().wrap(function _callee$(_context) {
                 
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (common_vendor.index.getStorageSync("token")) {
                            _context.next = 2;
                            break;
                        }
                       
                        return _context.abrupt("return", common_vendor.index.$uuu.isgologin());

                      case 2:
                        
                        common_vendor.index.showLoading({
                            title: "加载中",
							mask:true
                        });
                        _context.next = 5;
                        return common_vendor.index.login();

                      case 5:
                        
                        _yield$common_vendor$ = _context.sent;
                        code = _yield$common_vendor$.code;
                        common_vendor.wx$1.getWeRunData({
                            success: function success(e) {
                              if(!common_vendor.index.getStorageSync("token")){
                                return false
                              }
                                common_vendor.index.$uv.http.post("/api/client/setps", {
                                    encryptedDate: e.encryptedData,
                                    iv: e.iv,
                                    code: code
                                }, {
                                    custom: {
                                        loading: false
                                    }
                                }).then(function(res) {
                                    common_vendor.index.$uv.http.get("/api/client/cqClockRestrict/cqClockRestrictdetils", {
                                        custom: {
                                            loading: false
                                        }
                                    }).then(function(step) {
                                        stepNumber.value = res.data;
                                        
                                        var count = Math.floor(res.data / step.data * 100);
                                        if (count >= 100) {
                                            percent.value = 100;
                                            isaccomplish.value = 2;
                                        } else {
                                            percent.value = count;
                                            isaccomplish.value = 1;
                                        }
                                        userStore.getuserinfo();
                                        calendarRef.value.getdate();
                                        common_vendor.index.hideLoading();
                                        common_vendor.index.$uv.toast("获取成功");
                                    });
                                });
                            },
                            fail: function fail(err) {
                                console.log(err);
                                common_vendor.index.hideLoading();
                            }
                        });

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                }, _callee);
            }));
            return function getdata() {
                return _ref.apply(this, arguments);
            };
        }();
        var calendarRef = common_vendor.ref(null);
        var opencalendar = function opencalendar() {
            if (!common_vendor.index.getStorageSync("token")) return common_vendor.index.$uuu.isgologin();
            calendarRef.value.open();
        };
        var navto = function navto(path) {
            common_vendor.index.navigateTo({
                url: "/pages/".concat(path, "/").concat(path)
            });
        };
        return function(_ctx, _cache) {
            return common_vendor.e({
                a: "https://step-cyuncq.oss-cn-beijing.aliyuncs.com/step/indexbg.png",
                b: "".concat(_ctx.$imageUrl, "/indexbgf.png"),
                c: "".concat(_ctx.$imageUrl, "/rank.png"),
                d: common_vendor.o(function($event) {
                    return navto("rank");
                    // return navto("ranks");
                }),
                e: "".concat(_ctx.$imageUrl, "/achievement.png"),
                f: common_vendor.o(function($event) {
                  if (!common_vendor.index.getStorageSync("token")) {
                    return  common_vendor.index.$uuu.isgologin();
                }
                    return navto("achievement");
                }),
                g: "".concat(_ctx.$imageUrl, "/calendar.png"),
                h: common_vendor.o(opencalendar),
                i: "".concat(_ctx.$imageUrl, "/indexbtn1.png"),
                j: "".concat(_ctx.$imageUrl, "/indexbtn2.png"),
                k: common_vendor.o(function($event) {
                    return navto("health");
                }),
                kk:common_vendor.o(function($event) {
                  if (!common_vendor.index.getStorageSync("token")) {
                    return  common_vendor.index.$uuu.isgologin();
                }
                  return navto("information");
                }),
                l: common_vendor.unref(isaccomplish) == 0
            }, common_vendor.unref(isaccomplish) == 0 ? {} : {}, {
                m: common_vendor.unref(isaccomplish) == 1
            }, common_vendor.unref(isaccomplish) == 1 ? {
                n: common_assets._imports_0,
                o: common_vendor.t(common_vendor.unref(stepNumber))
            } : {}, {
                p: common_vendor.unref(isaccomplish) == 2
            }, common_vendor.unref(isaccomplish) == 2 ? {
                q: "".concat(_ctx.$imageUrl, "/botlistcenterimg.png")
            } : {}, {
                r: common_vendor.unref(isaccomplish) == 2 ? 1 : "",
                s: common_vendor.o(getdata),
                t: "".concat(_ctx.$imageUrl, "/indexbtn3.png"),
                v: common_vendor.o(function($event) {
                    return navto("answer");
                }),
                w: "".concat(_ctx.$imageUrl, "/indexbtn4.png"),
                x: common_vendor.o(function($event) {
                    return navto("article");
                }),
                y: common_vendor.f(12, function(item, index, i0) {
                    var _a, _b;
                    return common_vendor.e({
                        a: (index + 1) * 10e4 <= ((_a = common_vendor.unref(userStore).userinfo) == null ? void 0 : _a.sumStepNumber)
                    }, (index + 1) * 10e4 <= ((_b = common_vendor.unref(userStore).userinfo) == null ? void 0 : _b.sumStepNumber) ? {
                        b: "".concat(_ctx.$imageUrl, "/lockopen.png")
                    } : {
                        c: "".concat(_ctx.$imageUrl, "/lockclose.png")
                    });
                }),
                z: common_vendor.unref(percent) >= 100
            }, common_vendor.unref(percent) >= 100 ? {
                A: common_vendor.p({
                    diam: 97,
                    lineWidth: 6,
                    fontShow: false,
                    defaultShow: false,
                    progressColor: "#F3A442",
                    gradualColor: "#DD4141",
                    percentage: common_vendor.unref(percent)
                })
            } : {
                B: common_vendor.p({
                    diam: 97,
                    lineWidth: 6,
                    fontShow: false,
                    defaultShow: false,
                    progressColor: "#C2E7C6",
                    gradualColor: "#0BB88B",
                    percentage: common_vendor.unref(percent)
                })
            }, {
                C: common_vendor.o(getdata),
                D: common_vendor.sr(calendarRef, "1cf27b2a-2", {
                    k: "calendarRef"
                })
            });
        };
    }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-1cf27b2a" ] ]);

wx.createPage(MiniProgramPage);