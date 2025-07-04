var common_vendor = require("../common/vendor.js");

var useuserStore = common_vendor.defineStore("useuserStore", function() {
    var userinfo = common_vendor.ref({});
    var setuserinfo = function setuserinfo(data) {
        userinfo.value = data;
    };
    var getuserinfo = function getuserinfo() {
        common_vendor.index.$uv.http.get("/api/client/cqUser/cqUserDetail", {
            custom: {
                loading: false
            }
        }).then(function(res) {
            userinfo.value = res.data;
        });
    };
    var clearuserinfo = function clearuserinfo() {
        userinfo.value = {};
    };
    return {
        userinfo: userinfo,
        setuserinfo: setuserinfo,
        getuserinfo: getuserinfo,
        clearuserinfo: clearuserinfo
    };
});

exports.useuserStore = useuserStore;