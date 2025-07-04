var _regeneratorRuntime2 = require("../@babel/runtime/helpers/regeneratorRuntime");

var _asyncToGenerator2 = require("../@babel/runtime/helpers/asyncToGenerator");

var common_vendor = require("./vendor.js");

var common_config = require("./config.js");

var store_index = require("../store/index.js");

if (!Array) {
    var _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
    var _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
    (_easycom_uv_icon2 + _easycom_uv_popup2)();
}

var _easycom_uv_icon = function _easycom_uv_icon() {
    return "../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
};

var _easycom_uv_popup = function _easycom_uv_popup() {
    return "../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
};

if (!Math) {
    (_easycom_uv_icon + _easycom_uv_popup)();
}

var _sfc_main = {
    __name: "loginPop",
    setup: function setup(__props, _ref) {
        var __expose = _ref.expose;
        var userStore = store_index.useuserStore();
        var defaultUrl = common_vendor.ref("");
        var nickName = common_vendor.ref("");
        var headerId = common_vendor.ref("");
        var popup = common_vendor.ref(null);
        __expose({
            popup: popup
        });
        var close = function close() {
            popup.value.close();
        };
        var onChooseAvatar = function onChooseAvatar(e) {
            defaultUrl.value = e.detail.avatarUrl;
            common_vendor.index.showLoading({
                title: "上传中",mask:true
            });
            common_vendor.index.uploadFile({
                filePath: e.detail.avatarUrl,
                name: "file",
                url: common_config.baseUrl + "/api/uploadWX",
                formData: {
                    file: e.detail.avatarUrl
                },
                success: function success(res) {
                    headerId.value = JSON.parse(res.data).data;
                },
                fail: function fail(err) {
                    console.log(err);
                },
                complete: function complete() {
                    common_vendor.index.hideLoading();
                }
            });
        };
        var formSubmit = function formSubmit(e) {
            nickName.value = e.detail.value.nickname;
            if (defaultUrl.value == "") return common_vendor.index.$uv.toast("请上传头像");
            if (nickName.value == "") return common_vendor.index.$uv.toast("请输入昵称");
            login();
        };
        var login = /* */ function() {
            var _ref2 = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee() {
                return _regeneratorRuntime2().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        userStore.setuserinfo({
                            avatarUrl: headerId.value.src,
                            nickName: nickName.value,
                            openId: common_vendor.index.getStorageSync("openId")
                        });
                        common_vendor.index.reLaunch({
                            url: "/pages/information/information"
                        });
                        return _context.abrupt("return");

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                }, _callee);
            }));
            return function login() {
                return _ref2.apply(this, arguments);
            };
        }();
        return function(_ctx, _cache) {
            return {
                a: common_vendor.unref(defaultUrl),
                b: common_vendor.o(onChooseAvatar),
                c: common_vendor.unref(nickName),
                d: common_vendor.o(function($event) {
                    return common_vendor.isRef(nickName) ? nickName.value = $event.detail.value : null;
                }),
                e: common_vendor.o(formSubmit),
                f: common_vendor.p({
                    name: "close"
                }),
                g: common_vendor.o(close),
                h: common_vendor.sr(popup, "7f7fa9ff-0", {
                    k: "popup"
                }),
                i: common_vendor.p({
                    mode: "bottom"
                })
            };
        };
    }
};

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-7f7fa9ff" ] ]);

wx.createComponent(Component);