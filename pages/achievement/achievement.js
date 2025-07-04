var common_vendor = require("../../common/vendor.js");

var common_config = require("../../common/config.js");

var store_index = require("../../store/index.js");

if (!Array) {
    var _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
    _easycom_uv_avatar2();
}

var _easycom_uv_avatar = function _easycom_uv_avatar() {
    return "../../node-modules/@climblee/uv-ui/components/uv-avatar/uv-avatar.js";
};

if (!Math) {
    (_easycom_uv_avatar + tuiPoster)();
}

var tuiPoster = function tuiPoster() {
    return "../../components/thorui/tui-poster/tui-poster.js";
};

var _sfc_main = {
    __name: "achievement",
    setup: function setup(__props) {
        var userStore = store_index.useuserStore();
        var active = common_vendor.ref(0);
        var changeactive = function changeactive(e) {
            active.value = e;
        };
        var namelist = common_vendor.ref([ {
            status: false,
            name: "洪崖洞"
        }, {
            status: false,
            name: "重庆喜来登"
        }, {
            status: false,
            name: "重庆人民大礼堂"
        }, {
            status: false,
            name: "重庆解放碑"
        }, {
            status: false,
            name: "重庆大剧院"
        }, {
            status: false,
            name: "重庆来福士"
        }, {
            status: false,
            name: "轻轨穿楼"
        }, {
            status: false,
            name: "大足石刻"
        }, {
            status: false,
            name: "荣昌卤鹅"
        }, {
            status: false,
            name: "重庆过江索道"
        }, {
            status: false,
            name: "武隆喀斯特"
        }, {
            status: false,
            name: "长江三峡"
        } ]);
        common_vendor.onLoad(function() {
            namelist.value.map(function(item, index) {
                if (userStore.userinfo.sumStepNumber >= 10e4 * (index + 1)) {
                  return  item.status = true;
                } else {
                  return   item.status = false;
                }
            });
          
        });

        var goodsposterData = common_vendor.ref([ {
            type: "image",
            src: "".concat(common_config.imageUrl, "/achievementimg.png"),
            imgType: 2,
            style: {
                width: 677,
                height: 878,
                left: 0,
                top: 0
            }
        }, {
            type: "image",
            src: userStore.userinfo.wechatHead,
            imgType: 2,
            style: {
                width: 88,
                height: 88,
                left: 94,
                top: 154,
                borderRadius: 88
            }
        }, {
            type: "text",
            text: userStore.userinfo.wechatName,
            style: {
                left: 93,
                top: 280,
                width: 400,
                lineHeight: 32,
                color: "#000",
                fontSize: 30
            }
        }, {
            type: "text",
            text: "恭喜您打卡成功！",
            style: {
                left: 45,
                top: 708,
                width: 400,
                lineHeight: 40,
                color: "#000",
                fontSize: 40
            }
        }, {
            type: "text",
            text: "山城步道，用步数解锁精彩",
            style: {
                left: 45,
                top: 762,
                width: 400,
                lineHeight: 32,
                color: "#2D2D2D",
                fontSize: 28
            }
        } ]);
        var poster = common_vendor.ref(null);
        var init = common_vendor.ref(false);
        var goodsposterUrl = common_vendor.ref("");
        var ready = function ready() {
            init.value = true;
        };
        var submit = function submit() {
            if (/*   */ new Date().getTime() >= 17572608e5) {
                if (!init.value) return;
                if (goodsposterUrl.value) {
                    common_vendor.index.saveImageToPhotosAlbum({
                        filePath: goodsposterUrl.value,
                        success: function success() {
                            common_vendor.index.$uv.toast("保存成功");
                        },
                        fail: function fail() {
                            common_vendor.index.$uv.toast("保存失败");
                        }
                    });
                    return;
                }
                common_vendor.index.showLoading({
                    title: "绘制中...",mask:true
                });
                poster.value.draw(goodsposterData.value, function(filePath) {
                    goodsposterUrl.value = filePath;
                    common_vendor.index.saveImageToPhotosAlbum({
                        filePath: filePath,
                        success: function success() {
                            common_vendor.index.$uv.toast("保存成功");
                        },
                        fail: function fail() {
                            common_vendor.index.$uv.toast("保存失败");
                        }
                    });
                    common_vendor.index.hideLoading();
                });
            } else {
                return common_vendor.index.$uv.toast("活动结束后生成");
            }
        };
        return function(_ctx, _cache) {
            return common_vendor.e({
              stepNumber:common_vendor.t(common_vendor.unref(userStore).userinfo.stepNumber),
              sumStepNumber:common_vendor.t(common_vendor.unref(userStore).userinfo.sumStepNumber),
                day:common_vendor.t(common_vendor.unref(userStore).userinfo.day) === '' ? 0:common_vendor.t(common_vendor.unref(userStore).userinfo.day),
                a: common_vendor.o(function($event) {
                    return changeactive(0);
                }),
                b: common_vendor.unref(active) === 0 ? 1 : "",
                c: common_vendor.o(function($event) {
                    return changeactive(1);
                }),
                d: common_vendor.unref(active) === 1 ? 1 : "",
                e: common_vendor.unref(active) === 0
            }, common_vendor.unref(active) === 0 ? {
                f: "".concat(_ctx.$imageUrl, "/achievementimg.png"),
                g: common_vendor.p({
                    size: "80rpx",
                    src: common_vendor.unref(userStore).userinfo.wechatHead
                }),
                h: common_vendor.t(common_vendor.unref(userStore).userinfo.wechatName),
                i: common_vendor.o(submit)
            } : {}, {
                j: common_vendor.unref(active) === 1
            }, common_vendor.unref(active) === 1 ? {
              
                k: common_vendor.f(common_vendor.unref(namelist), function(item, index, i0) {
                    return common_vendor.e({
                        a: "".concat(_ctx.$imageUrl, "/achievement").concat(index + 1, ".png"),
                        b: common_vendor.t(item.name),
                        c: item.status
                    }, item.status ? {
                        d: "".concat(_ctx.$imageUrl, "/achievement13.png")
                    } : {}, {
                        e: !item.status ? 1 : ""
                    });
                }),
                l: "".concat(_ctx.$imageUrl, "/achievement14.png")
            } : {}, {
                m: common_vendor.sr(poster, "127b3c96-1", {
                    k: "poster"
                }),
                n: common_vendor.o(ready),
                o: common_vendor.p({
                    width: 677,
                    height: 878
                })
            });
        };
    }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-127b3c96" ] ]);

wx.createPage(MiniProgramPage);