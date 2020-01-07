//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    age :19,
    nowDate:new Date().toLocaleString(),
    isActive:false,
    score:38,
    isShow:true,
    timestamp: 1578301421158,
    num: 25.6666666,
    price:25.66,
    titles: ['标题一', '标题二','标题三']
  },
  handleCapRed(){
    console.log('handleCapRed')
  },
  handleCapYellow() {
    console.log('handleCapYellow')
  },
  handleCapBlue() {
    console.log('handleCapBlue')
  },
  handleRed() {
    console.log('handleRed')
  },
  handleBlue() {
    console.log('handleBlue')
  },
  handleYellow() {
    console.log('handleYellow')
  },
  handleCapRed() {
    console.log('handleCapRed')
  },
  handleItemClick(e){
    // console.log(e)
    var index = e.currentTarget.dataset.index
    var title = e.currentTarget.dataset.title
    console.log(index + '-' + title)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // console.log(this.data.timestamp)
    setInterval(()=> {
      this.setData({
        nowDate: new Date().toLocaleString()
      })
    },1000)
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
  },
  handleTimeClass(){
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleScoreShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  numTofixed(){
    this.setData({
      num: this.data.num.toFixed(2)
    })
  },
  bindtouchstart() {
    console.log('bindtouchstart')
  },
  bindtouchend(){
    console.log('bindtouchend')
  },
  bindtouchmove() {
    console.log('bindtouchmove')
  },
  bindlongtap() {
    console.log('bindlongtap')
  },
  handleOuter(e){
    console.log(e)
  },
  handleInner(e){
    console.log(e)
  }
})
