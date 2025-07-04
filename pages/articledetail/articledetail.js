Page({
  data: {
    id: null,
    data: {},
    imgs: [],
    videos: [],
    content: '',
    playStates: false
  },
  onReady() {
    this.videoContext = wx.createVideoContext('myVideo')
    console.log('yemian', this.videoContext);
  },

  onLoad(options) {
    var info = wx.getStorageSync("articledetail")
    // 初始化播放状态对象
    this.setData({
      data: info
    });
    wx.removeStorage("articledetail")
  },


  bindtimeupdate(e) {

    // console.log('当前播放长度(s)：' + (parseInt(e.detail.duration / 4)));

    var aa = 1; // 是否开启可以视频快进 1 禁止开启

    //跳转到指定播放位置 initial-time 时间为秒

    let that = this;

    //播放的总时长

    var duration = parseInt(e.detail.duration)

    //实时播放进度 秒数

    var currentTime = parseInt(e.detail.currentTime);

    if (that.data.video_real_time == 0) {



      var jump_time = parseInt(that.data.initial_time) + parseInt(that.data.video_real_time)

    } else {

      var jump_time = parseInt(that.data.video_real_time)

    }

    if (aa == 1) {

      if (currentTime > jump_time && currentTime - jump_time > 3) {

        this.videoContext.seek(that.data.video_real_time)

        wx.showToast({

          title: '未完整看完该视频，不能快进',

          icon: 'none',

          duration: 2000,

        })

        return false;

      }

    }

    that.setData({

      video_real_time: currentTime, //实时播放进度

    })

  },

  // 视频开始播放
  bindplay(e) {

    this.setData({
      playStates: true
    });
  },

  // 视频暂停播放
  bindended(e) {
    var tonek = wx.getStorageSync('token')
    if (!tonek) {
      return false
    }

    if (this.data.playStates) {
      wx.showToast({
        title: '观看完成',
        icon: 'none',
        duration: 2000
      })

      wx.request({
        url: 'https://stepapi.cyuncq.com/api/client/cqPopularizationOfScience/updatePopularizationNumber/' + this.data.data.id,

        data: {

        },
        header: {
          'content-type': 'application/json', // 默认值
          token: wx.getStorageSync('token')
        },
        success(res) {
          console.log(res)

          wx.navigateBack({
            delta: 1
          })
        },
        error(ero) {
          console.log(ero)
        }
      })
    }
  },
});