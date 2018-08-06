var app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [{
        name: '罗布泊',
        isChoosed: 0
      },
      {
        name: '阿尔金',
        isChoosed: 0
      },
      {
        name: '西藏羌塘',
        isChoosed: 0
      },
      {
        name: '可可西里',
        isChoosed: 0
      },
      {
        name: '泸亚线',
        isChoosed: 0
      },
      {
        name: '沿边公路',
        isChoosed: 0
      },
      {
        name: '茶马古道',
        isChoosed: 0
      },
      {
        name: '丙察左线',
        isChoosed: 0
      },
      {
        name: '杂多线',
        isChoosed: 0
      },
      {
        name: '川藏线',
        isChoosed: 0
      },
      {
        name: '格聂南线',
        isChoosed: 0
      },
      {
        name: '措亚线',
        isChoosed: 0
      },
      {
        name: '德贡公路',
        isChoosed: 0
      },
      {
        name: '独库公路',
        isChoosed: 0
      },
      {
        name: '青藏线',
        isChoosed: 0
      },
      {
        name: '老掌沟',
        isChoosed: 0
      },
      {
        name: '滇缅公路-晴隆二十四拐',
        isChoosed: 0
      },
      {
        name: '哈拉湖穿越线',
        isChoosed: 0
      },
      {
        name: '库布齐沙漠越野穿越',
        isChoosed: 0
      },
      {
        name: '阿拉善穿越线',
        isChoosed: 0
      }
    ],
    choosed: [],
    userInfo: null,
    isSubmit: 0,
    flag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      userInfo: app.globalData.userInfo,
      flag: app.globalData.flag
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {

      title: '[有人@我]来来来，全国20条最值得豁车路线,你去过哪个？',

      path: '/pages/index/index'

    }


  },
  //打开APP出错
  launchAppError: function (e) {
    console.log(e.detail.errMsg)
  },
  choose: function(event) {
    var name = event.currentTarget.dataset.name;
    var index = event.currentTarget.dataset.index;
    var ischoosed = event.currentTarget.dataset.ischoosed;
    var arr = this.data.arr;
    arr.forEach(function(item) {
      if (item.name == name) {
        if (ischoosed == 0) {
          item.isChoosed = 1;
        } else {
          item.isChoosed = 0;
        }

      }
    })
    var choosed = this.data.choosed;

    if (ischoosed == 0) {
      var obj = {};
      obj.name = name;
      obj.index = index + 1
      choosed.push(obj);
    } else {
      var len = choosed.length
      choosed.forEach(function(item, nindex) {
        if (item.name == name) {
          choosed = choosed.slice(0, nindex).concat(choosed.slice(nindex + 1, len))
        }

      })
    }
    this.setData({
      arr: arr,
      choosed: choosed
    })
    //console.log(this.data.choosed);
  },
  //提交
  getUserInfo: function(e) {
    //console.log(e.detail.errMsg)
    if (e.detail.errMsg == 'getUserInfo:fail auth deny') {
      wx.openSetting({
        success: (res) => {
          res.authSetting = {
            "scope.userInfo": true,
          }
          app.globalData.userInfo = e.detail.userInfo;
          this.setData({
            userInfo: e.detail.userInfo
          })
          var userInfo = e.detail.userInfo;
          this.submit()
        }
      })
    } else {
      app.globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: e.detail.userInfo
      })
      var userInfo = e.detail.userInfo;
      this.submit()
    }
  },
  hasSubmit: function() {},
  submit: function() {
    //console.log('tap');
    var _this = this;
    var postData = {};
    var choosed = _this.data.choosed;
    var len = choosed.length
    var choosedName = [];
    var choosedIndex = [];
    choosed.forEach(function(item) {
      choosedName.push(item.name);
      choosedIndex.push(item.index);
    })
    postData.routes = choosedIndex.join(',')
    var nameStr = choosedName.join(',')
    wx.showLoading({
      title: '计算中',
    })
    _this.setData({
      isSubmit: 1
    })
    var nickname = app.globalData.userInfo.nickName
    var headimg = app.globalData.userInfo.avatarUrl
    wx.login({
      success: function(res) {
        if (res.code) {
          var obj = {}
          obj.js_code = res.code;
          obj.nickname = nickname;
          obj.headimg = headimg;
          if (nameStr == '') {
            wx.hideLoading()
            _this.setData({
              isSubmit: 0
            })
            wx.navigateTo({
              url: '/pages/result/result?percent=0%' + '&names=' + nameStr + '&nick=' + nickname + '&len=0',
            })
          } else {
            //发起网络请求
            wx.request({
              url: app.globalData.baseUrl + '/used_shop/index.php/wxapp/login/user_login',
              method: 'POST',
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              data: util.json2Form(obj),
              success: function(msg) {
                //console.log('msg==', msg);
                postData.token = msg.data.data.token;
                wx.request({
                  url: app.globalData.baseUrl + '/used_shop/index.php/wxapp/evaluate/index',
                  method: 'POST',
                  header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                  data: util.json2Form(postData),
                  success: function(evalue) {
                    //console.log('evalue', evalue)
                    if (evalue.data.data.err_code == 0) {
                      wx.hideLoading()
                      _this.setData({
                        isSubmit: 0
                      })
                      wx.navigateTo({
                        url: '/pages/result/result?percent=' + evalue.data.data.result + '&names=' + nameStr + '&nick=' + nickname + '&len=' + len,
                      })
                    }

                  }
                })

              }
            })
          }



        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  }
})