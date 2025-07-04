var common_vendor = require("../common/vendor.js");

var common_config = require("../common/config.js");

var fimg = function fimg(id) {
    if (id && id.indexOf("https") === -1) {
        return common_config.baseUrl + "/sysFileInfo/preview?id=" + id;
    }
    return id;
};

var islogin = function islogin() {
    return common_vendor.index.getStorageSync("token") ? true : false;
};

var isgologin = function isgologin() {
    common_vendor.index.showModal({
        title: "提示",
        content: "您还未登录，是否去登录",
        success: function success(res) {
            if (res.confirm) {
                common_vendor.index.navigateTo({
                    url: "/pages/login/login"
                });
            }
        }
    });
};

var utils = {
    install: function install() {
        common_vendor.index.$uuu = {
            fimg: fimg,
            islogin: islogin,
            isgologin: isgologin
        };
    }
};

exports.utils = utils;