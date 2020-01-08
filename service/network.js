export default function request(options){
  return new Promise((resolve,reject) => {
    wx: wx.request({
      url: options.url,
      data: options.data || {},
      header: {},
      method: options.method || 'GET',
      dataType: 'json',
      responseType: 'text',
      success: resolve,
      fail: reject,
      complete: function (res) { },
    })
  })
}