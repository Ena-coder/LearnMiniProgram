//index.js
//获取应用实例
const app = getApp()
Page({
  handleBtnClick(){
    // 1.获取组件对象
    const my_sel = this.selectComponent('.my-sel')
    // 2.通过setData修改组建中的数据（不合理）
    // my_sel.setData({
    //   count: my_sel.data.count + 1
    // })
    // 3.通过方法修改组件中的数据
    my_sel.incrementCount(10)
  },











  data: {
    count: 0
  },
  handleTitleItemClick(e) {
    console.log(e.detail.title, e.detail.index)
  },
  handleIncrement(e){
    console.log(e)
    this.setData({
      count: this.data.count + 1
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
