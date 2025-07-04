var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");

var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");

var common_vendor = require("../../common/vendor.js");

var store_index = require("../../store/index.js");

if (!Math) {
    loginPop();
}

var loginPop = function loginPop() {
    return "../../common/loginPop.js";
};

var _sfc_main = {
    __name: "login",
    setup: function setup(__props) {
        var userStore = store_index.useuserStore();
        var loginpop = common_vendor.ref(null);
        var showloginpop = function showloginpop() {
            loginpop.value.popup.open();
        };
        var checkboxValue = common_vendor.ref(false);
        var changecheckboxValue = function changecheckboxValue() {
            checkboxValue.value = !checkboxValue.value;
        };
        var login = /* */ function() {
            var _ref = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee() {
                var _yield$common_vendor$, code;
                return _regeneratorRuntime2().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (checkboxValue.value) {
                            _context.next = 2;
                            break;
                        }
                        return _context.abrupt("return", common_vendor.index.$uv.toast("请勾选协议"));

                      case 2:
                        _context.next = 4;
                        return common_vendor.index.login();

                      case 4:
                        _yield$common_vendor$ = _context.sent;
                        code = _yield$common_vendor$.code;
                        common_vendor.index.$uv.http.get("/api/preLogin/".concat(code), {
                            custom: {
                                auth: false
                            }
                        }).then(function(res) {
                  
                            if (res.data.token) {
                                common_vendor.index.setStorageSync("token", res.data.token);
                                common_vendor.index.$uv.toast("登录成功");
                                setTimeout(function() {
                                    userStore.getuserinfo();
                                    common_vendor.index.$emit("loginok");
                                    common_vendor.index.navigateBack();
                                }, 500);
                            } else {
                                common_vendor.index.setStorageSync("openId", res.data.wxMaJscode2SessionResult.openid);
                                showloginpop();
                            }
                        });

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                }, _callee);
            }));
            return function login() {
                return _ref.apply(this, arguments);
            };
        }();
        var navtoprotocol = function navtoprotocol(e) {
            common_vendor.index.navigateTo({
                url: "/pages/protocol/protocol?type=".concat(e)
            });
        };
        return function(_ctx, _cache) {
            return {
                a: "https://step-cyuncq.oss-cn-beijing.aliyuncs.com/step/loginbg.png",
                b: "".concat(_ctx.$imageUrl, "/login1.png"),
                c: "".concat(_ctx.$imageUrl, "/login2.png"),
                d: common_vendor.o(login),
                e: "".concat(_ctx.$imageUrl, "/logincheck.png"),
                f: common_vendor.unref(checkboxValue) ? 1 : "",
                g: common_vendor.o(function($event) {
                    return navtoprotocol(0);
                }),
                h: common_vendor.o(function($event) {
                    return navtoprotocol(1);
                }),
                i: common_vendor.o(changecheckboxValue),
                j: common_vendor.sr(loginpop, "e4e4508d-0", {
                    k: "loginpop"
                })
            };
        };
    }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-e4e4508d" ] ]);

wx.createPage(MiniProgramPage);