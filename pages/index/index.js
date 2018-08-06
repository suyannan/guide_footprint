var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight:'',
    flag:false
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log('page')
    this.setData({ windowHeight: app.globalData.windowHeight, flag: app.globalData.flag})
    //console.log(this.data.windowHeight)
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {

      title: '[有人@我]来来来，全国20条最值得豁车路线,你去过哪个？',

      path: '/pages/index/index'

    }
    
  },
  //打开APP出错
  launchAppError: function (e) {
    console.log(e.detail.errMsg)
  },
  goNow:function(){
    wx.navigateTo({
      url: '/pages/line/line',
    })
  }
})