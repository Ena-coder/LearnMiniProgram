// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  onUnload: function () {
    // 1.获取当前首页的页面
    // getCurrentPages()获取所有栈的页面
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]//pages.length-1拿到detail页面
    // 调用首页setData()
    console.log()
    home.setData({
      name: this.options.name,
      age: this.options.age,
      height: this.options.height,
    })
  },
  methods:{
    

  }
})