// pages/home/home.js
const appInstance  = getApp()
Page({
  handleBtnClick(event) {
    console.log(event.detail.userInfo)
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(appInstance.globalData.name)
    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
      success: (res) => {
        const data = res.data.data.banner.list
        console.log(res)
        this.setData({
          list:data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面已到底部')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll: function (obj) {
    // 页面滚动时执行
    console.log(obj)
  },
  onTabItemTap() {
    console.log('点击了tabbar')
  }
})