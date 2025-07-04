var common_vendor = require("./vendor.js");

var common_config = require("./config.js");

var Request = function Request(vm) {
    common_vendor.index.$uv.http.setConfig(function(config) {
        config.baseURL = common_config.baseUrl;
        config.custom.auth = true;
        config.custom.loading = true;
        return config;
    });
    common_vendor.index.$uv.http.interceptors.request.use(function(config) {
        config.data = config.data || {};
        if (config.custom.loading) {
            common_vendor.index.showLoading({
                title: "加载中...",mask:true
            });
        }
        var token = common_vendor.index.getStorageSync("token");
        if (token) {
            config.header.token = token;
        }
        return config;
    }, function(config) {
        return Promise.reject(config);
    });
   
    var isshowmodel = common_vendor.ref(true);
    var changeshowmodel = function changeshowmodel() {
        isshowmodel.value = false;
        setTimeout(function() {
            isshowmodel.value = true;
        }, 3e3);
    };
    common_vendor.index.$uv.http.interceptors.response.use(function(response) {
        var _a;
        var data = response.data;
        var custom = (_a = response.config) == null ? void 0 : _a.custom;
        if (custom.loading) {
            common_vendor.index.hideLoading();
        }
        if (data.code !== 200) {
            if (data.code === 401) {
                custom.toast = false;
                common_vendor.index.removeStorageSync("token");
                if (isshowmodel.value) {
                    changeshowmodel();
                    common_vendor.index.$uuu.isgologin();
                }
            }
            if (data.code === 1011008 || data.code === 1011006) {
                custom.toast = false;
                common_vendor.index.removeStorageSync("token");
                common_vendor.index.$uuu.isgologin();
            }
            if (custom.toast !== false) {
                common_vendor.index.$uv.toast(data.msg);
            }
            if (custom == null ? void 0 : custom.catch) {
                return Promise.reject(data);
            } else {
                return new Promise(function() {});
            }
        }
        return data.data === void 0 ? {} : data;
    }, function(response) {
        var _a;
        var custom = (_a = response.config) == null ? void 0 : _a.custom;
        if (custom.loading) {
            common_vendor.index.hideLoading();
        }
        return Promise.reject(response);
    });
};

exports.Request = Request;