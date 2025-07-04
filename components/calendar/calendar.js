var common_vendor = require("../../common/vendor.js");

var store_index = require("../../store/index.js");

if (!Array) {
    var _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
    var _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
    (_easycom_uv_icon2 + _easycom_uv_popup2)();
}

var _easycom_uv_icon = function _easycom_uv_icon() {
    return "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
};

var _easycom_uv_popup = function _easycom_uv_popup() {
    return "../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
};

if (!Math) {
    (_easycom_uv_icon + _easycom_uv_popup)();
}

var _sfc_main = {
    __name: "calendar",
    setup: function setup(__props, _ref) {
        var __expose = _ref.expose;
        var userStore = store_index.useuserStore();
        common_vendor.onMounted(function() {
            if (common_vendor.index.getStorageSync("token")) {
                getdate();
                getstep();
            }
            common_vendor.index.$on("loginok", function() {
                getdate();
                getstep();
            });
        });
        var step = common_vendor.ref(0);
        var getstep = function getstep() {
            common_vendor.index.$uv.http.get("/api/client/cqClockRestrict/cqClockRestrictdetils", {
                custom: {
                    loading: false
                }
            }).then(function(res) {
                step.value = res.data;
            });
        };
        var year = common_vendor.ref(/*   */ new Date().getFullYear());
        var month = common_vendor.ref(/*   */ new Date().getMonth() + 1 < 10 ? "0".concat(/*   */ new Date().getMonth() + 1) : /*   */ new Date().getMonth() + 1);
        common_vendor.ref({});
        var getdata = function getdata() {
            common_vendor.index.$uv.http.get("/api/client/cqDayStepUser/cqDayStepUserList/".concat(year.value, "/").concat(month.value), {
                custom: {
                    loading: false
                }
            }).then(function(res) {
                date.value.forEach(function(item) {
                    item.forEach(function(item1) {
                        var _a;
                        if (item1.day) {
                            item1.stepNumber = (_a = res.data[item1.day]) == null ? void 0 : _a.stepNumber;
                        }
                    });
                });
            });
        };
        var date = common_vendor.ref([]);
        var getdate = function getdate() {
            var daysInMonth = new Date(year.value, month.value, 0).getDate();
            var firstDayOfWeek = new Date(year.value, month.value - 1, 1).getDay();
            var lastDayOfWeek = new Date(year.value, month.value - 1, daysInMonth).getDay();
            var paddingBefore = firstDayOfWeek;
            var paddingAfter = (6 - lastDayOfWeek) % 7;
            var totalDays = daysInMonth + paddingBefore + paddingAfter;
            var totalWeeks = Math.ceil(totalDays / 7);
            var dates = [];
            var dayCounter = 1 - paddingBefore;
            for (var week2 = 0; week2 < totalWeeks; week2++) {
                var weekDates = [];
                for (var dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
                    if (dayCounter >= 1 && dayCounter <= daysInMonth) {
                        weekDates.push({
                            day: dayCounter
                        });
                    } else {
                        weekDates.push({
                            day: null
                        });
                    }
                    dayCounter++;
                }
                dates.push(weekDates);
            }
            date.value = dates;
            getdata();
        };
        var week = common_vendor.ref([ "日", "一", "二", "三", "四", "五", "六" ]);
        var prevyear = function prevyear() {
            year.value--;
            getdate();
        };
        var nextyear = function nextyear() {
            year.value++;
            getdate();
        };
        var prevmouth = function prevmouth() {
            month.value = +month.value - 1 < 10 ? "0".concat(+month.value - 1) : +month.value - 1;
            if (month.value == 0) {
                month.value = 12;
                year.value--;
            }
            getdate();
        };
        var nextmouth = function nextmouth() {
            month.value = +month.value + 1 < 10 ? "0".concat(+month.value + 1) : +month.value + 1;
            if (month.value == 13) {
                month.value = "01";
                year.value++;
            }
            getdate();
        };
        var popup = common_vendor.ref(null);
        var open = function open() {
            popup.value.open();
        };
        var close = function close() {
            popup.value.close();
        };
        __expose({
            open: open,
            close: close,
            getdate: getdate
        });
        return function(_ctx, _cache) {
            return {
                a: "".concat(_ctx.$imageUrl, "/calendarbg.png"),
                b: common_vendor.o(prevyear),
                c: "".concat(_ctx.$imageUrl, "/yearleft.png"),
                d: common_vendor.o(prevmouth),
                e: "".concat(_ctx.$imageUrl, "/monthleft.png"),
                f: common_vendor.t(common_vendor.unref(year)),
                g: common_vendor.t(common_vendor.unref(month)),
                h: common_vendor.o(nextmouth),
                i: "".concat(_ctx.$imageUrl, "/monthright.png"),
                j: common_vendor.o(nextyear),
                k: "".concat(_ctx.$imageUrl, "/yearright.png"),
                l: common_vendor.f(common_vendor.unref(week), function(item, k0, i0) {
                    return {
                        a: common_vendor.t(item)
                    };
                }),
                m: common_vendor.f(common_vendor.unref(date), function(maxitem, k0, i0) {
                    return {
                        a: common_vendor.f(maxitem, function(item, k1, i1) {
                            return common_vendor.e({
                                a: common_vendor.t(item.day),
                                b: item.stepNumber > common_vendor.unref(userStore).step
                            }, item.stepNumber > common_vendor.unref(userStore).step ? {
                                c: "".concat(_ctx.$imageUrl, "/calendarsuccess.png")
                            } : {}, {
                                d: common_vendor.t(item.stepNumber)
                            });
                        })
                    };
                }),
                n: common_vendor.p({
                    name: "close-circle",
                    size: "63rpx",
                    color: "#fff"
                }),
                o: common_vendor.o(close),
                p: common_vendor.sr(popup, "3a94fe31-0", {
                    k: "popup"
                }),
                q: common_vendor.p({
                    safeAreaInsetBottom: false,
                    bgColor: "none",
                    closeOnClickOverlay: false
                })
            };
        };
    }
};

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-3a94fe31" ] ]);

wx.createComponent(Component);