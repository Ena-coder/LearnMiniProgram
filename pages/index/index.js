//index.js
//获取应用实例
const app = getApp()
Page({
  btnClick(){
    wx.navigateTo({
      url: '/pages/detail/detail?name=lily&age=15&height=1.33'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    name:'john'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title:'你好啊，世界！',
      imageUrl:'https://img.alicdn.com/imgextra/i4/2145496527/O1CN01y1z0Rs1y5Pfsxs7pX_!!0-item_pic.jpg_430x430q90.jpg'
    }
  }
})
