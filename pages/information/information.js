var _objectSpread2 = require("../../@babel/runtime/helpers/objectSpread2");

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
  __name: "information",
  setup: function setup(__props) {
    var userStore = store_index.useuserStore();
    var checkboxValue = common_vendor.ref(false);
    var changecheckboxValue = function changecheckboxValue() {
      checkboxValue.value = !checkboxValue.value;
    };
    var from = common_vendor.ref({
      id: "",
      name: "",
      phone: "",
      county: "",
      unit: "",
      is_type: ""
    });


    var submit = function submit() {
      if (from.value.is_type == 2) {
        return common_vendor.index.$uv.toast("您已修改过信息，如需继续修改，请联系管理人员！");
      }
      if (!from.value.name) return common_vendor.index.$uv.toast("请输入昵称");


      if (!/^1[3-9]\d{9}$/.test(from.value.phone)) {
        return common_vendor.index.$uv.toast("请输入正确的手机号");
      }

      if (!from.value.county) return common_vendor.index.$uv.toast("请选择所属区县");
      if (!from.value.unit) return common_vendor.index.$uv.toast("请填写自己的单位");


      if (!checkboxValue.value) return common_vendor.index.$uv.toast("请阅读并勾选知情书");

      if (from.value.id) {
        common_vendor.index.$uv.debounce(function () {
          common_vendor.index.$uv.http.post("/api/updateInfo", _objectSpread2(
            _objectSpread2({}, userStore.userinfo), from.value), {
            custom: {
              auth: false
            }
          }).then(function (res) {
            common_vendor.index.$uv.toast("信息修改成功");
            setTimeout(function () {
              userStore.getuserinfo();
              common_vendor.index.navigateBack({
                delta: 1
              });
            }, 500);
          });
        }, 500);
      } else {

        common_vendor.index.$uv.debounce(function () {
          common_vendor.index.$uv.http.post("/api/minniLogin", _objectSpread2(
            _objectSpread2({}, userStore.userinfo), from.value), {
            custom: {
              auth: false
            }
          }).then(function (res) {
            common_vendor.index.setStorageSync("token", res.data);
            common_vendor.index.$uv.toast("信息填写成功");
            setTimeout(function () {
              common_vendor.index.$emit("loginok");
              userStore.getuserinfo();
              common_vendor.index.reLaunch({
                url: "/pages/index/index"
              });
            }, 500);
          });
        }, 500);
      }






    };

    common_vendor.onLoad(function () {

      if (common_vendor.index.getStorageSync("token")) {
        getuserinfo()
      }


      getlist();
    });

    var getuserinfo = function getuserinfo() {
      common_vendor.index.$uv.http.get("/api/client/cqUser/cqUserDetail", {
        custom: {
          loading: false
        }
      }).then(function (res) {
        userinfo.value = {
          ...res.data
        };
        from.value.id = res.data.id
        from.value.name = res.data.name
        from.value.phone = res.data.phone

        from.value.unit = res.data.unitName

        from.value.county = res.data.countyTitle
        from.value.is_type = res.data.isType
        checkboxValue.value = 1

      });
    };

    var userinfo = common_vendor.ref();
    var isopen = common_vendor.ref(false);
    var open = function open() {
      isopen.value = !isopen.value
    }
    var getlist = function getlist() {
      common_vendor.index.$uv.http.get("/sys/dept/listAll").then(function (res) {
        list.value = res.data[0].children;
        citylist.value = res.data[0].children;
      });
    };
    var list = common_vendor.ref([]);
    var citylist = common_vendor.ref([]);

    var is_unit = common_vendor.ref(null);
    var popup = common_vendor.ref(null);
    var openpopup = function openpopup() {
      is_unit.value = 1;
      citylist.value = list.value;
      pickervalue.value[0] = 0
      popup.value.open();
    };

    var openpopup2 = function openpopup2() {
      is_unit.value = 2;

      var city = list.value.filter((res)=> res.name == from.value.county)

      citylist.value = city[0].children
      pickervalue.value[0] = 0
      popup.value.open();
    };
    var citydata = common_vendor.ref([]);
    var popupconfirm = function popupconfirm() {
      console.log(is_unit.value)
      if (is_unit.value == 1) {
        citydata.value = list.value[pickervalue.value[0]];
        if (from.value.county !== citydata.value.name) {
          from.value.unit = '';
          from.value.unitId = ''
        }
        from.value.county = citydata.value.name;
        from.value.countyId = citydata.value.id;
      } else {
        from.value.unit = citylist.value[pickervalue.value[0]].name
        from.value.unitId = citylist.value[pickervalue.value[0]].id
      }

      popup.value.close();
    };
    var popupcancel = function popupcancel() {
      popup.value.close();
    };
    var pickervalue = common_vendor.ref([0]);
    var pickerChange = function pickerChange(e) {
      pickervalue.value = e.detail.value;
    };


    var navtoprotocol = function navtoprotocol() {
      common_vendor.index.navigateTo({
        url: "/pages/protocol/protocol?type=2"
      });
    };
    return function (_ctx, _cache) {
      return {
        userinfo: common_vendor.unref(userinfo),
        isopen: common_vendor.unref(isopen),
        aa: common_vendor.unref(from).id,
        a: common_vendor.unref(from).name,
        b: common_vendor.o(function ($event) {
          return common_vendor.unref(from).name = $event.detail.value;
        }),
        c: common_vendor.unref(from).phone,
        d: common_vendor.o(function ($event) {

          return common_vendor.unref(from).phone = $event.detail.value;
        }),
        e: common_vendor.unref(from).county,
        f: common_vendor.o(function ($event) {
          return common_vendor.unref(from).county = $event.detail.value;
        }),
        g: common_vendor.p({
          name: "arrow-right",
          size: "32rpx",
          color: "#393939"
        }),
        gg: common_vendor.p({
          name: "arrow-right",
          size: "32rpx",
          color: "#393939"
        }),
        open: common_vendor.o(function ($event) {
          return open();
        }),
        h: common_vendor.o(openpopup),
        hh: common_vendor.o(openpopup2),
        i: common_vendor.unref(from).unit,
        j: common_vendor.o(function ($event) {
          return common_vendor.unref(from).unit = $event.detail.value;
        }),
        k: "".concat(_ctx.$imageUrl, "/logincheck.png"),
        l: common_vendor.unref(checkboxValue) ? 1 : "",
        m: common_vendor.o(navtoprotocol),
        n: common_vendor.o(changecheckboxValue),
        o: common_vendor.o(submit),
        p: common_vendor.f(common_vendor.unref(citylist), function (item, k0, i0) {
          return {
            a: common_vendor.t(item.name)
          };
        }),
        q: common_vendor.unref(pickervalue),
        r: common_vendor.o(pickerChange),
        s: common_vendor.o(popupcancel),
        t: common_vendor.o(popupconfirm),
        v: common_vendor.sr(popup, "17c83bce-1", {
          k: "popup"
        }),
        w: common_vendor.p({
          mode: "bottom",
          round: "20rpx"
        })
      };
    };
  }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [
  ["__scopeId", "data-v-17c83bce"]
]);

wx.createPage(MiniProgramPage);