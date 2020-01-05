//app.js
App({
    // 在 App 的 onLaunch 和 onShow中的options获取场景值scene
  onLaunch: function () {//可传入options参数
  // wx.getUserInfo({
  //   success: function(res) {
  //     console.log(res)
  //   }
  // })

  },
  onShow: function (options) {
    console.log(options.scene)//1001--发现栏小程序主入口
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData:{
    name:'lili',
    age:16
  }
})
