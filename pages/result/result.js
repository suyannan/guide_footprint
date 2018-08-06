var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    names: '老掌沟，可可西里，罗布泊，西藏羌塘，阿尔金，泸亚线，沿边公路，茶马古道，丙察左线，杂多线，川藏线，格聂南线，措亚线，德贡公路，独库公路，青藏线，哈拉湖穿越线，滇缅公路-晴隆二十四拐，库布齐沙漠越野穿越',
    percent: '99.9%',
    nick: 'YOU',
    len: 20,
    windowHeight: '',
    windowWidth: '',
    qrcode: '',
    codePath: '',
    arr: [{
        name: '罗布泊',
        isChoosed: 0,
        linePath: '/images/line1.png',
        left: 240,
        top: 668,
        width: 49,
        height: 29
      },
      {
        name: '阿尔金',
        isChoosed: 0,
        linePath: '/images/line2.png',
        left: 234,
        top: 580,
        width: 18,
        height: 55
      },
      {
        name: '西藏羌塘',
        isChoosed: 0,
        linePath: '/images/line3.png',
        left: 240,
        top: 642,
        width: 24,
        height: 44
      },
      {
        name: '可可西里',
        isChoosed: 0,
        linePath: '/images/line4.png',
        left: 234,
        top: 618,
        width: 29,
        height: 42
      },
      {
        name: '泸亚线',
        isChoosed: 0,
        linePath: '/images/line5.png',
        left: 240,
        top: 670,
        width: 23,
        height: 38
      },
      {
        name: '沿边公路',
        isChoosed: 0,
        linePath: '/images/line6.png',
        left: 398,
        top: 780,
        width: 51,
        height: 40
      },
      {
        name: '茶马古道',
        isChoosed: 0,
        linePath: '/images/line7.png',
        left: 332,
        top: 710,
        width: 28,
        height: 80
      },
      {
        name: '丙察左线',
        isChoosed: 0,
        linePath: '/images/line8.png',
        left: 314,
        top: 710,
        width: 63,
        height: 67
      },
      {
        name: '杂多线',
        isChoosed: 0,
        linePath: '/images/line9.png',
        left: 250,
        top: 666,
        width: 92,
        height: 42
      },
      {
        name: '川藏线',
        isChoosed: 0,
        linePath: '/images/line10.png',
        left: 172,
        top: 595,
        width: 221,
        height: 139
      },
      {
        name: '格聂南线',
        isChoosed: 0,
        linePath: '/images/line11.png',
        left: 350,
        top: 714,
        width: 43,
        height: 24
      },
      {
        name: '措亚线',
        isChoosed: 0,
        linePath: '/images/line12.png',
        left: 338,
        top: 706,
        width: 56,
        height: 25
      },
      {
        name: '德贡公路',
        isChoosed: 0,
        linePath: '/images/line13.png',
        left: 314,
        top: 694,
        width: 14,
        height: 34
      },
      {
        name: '独库公路',
        isChoosed: 0,
        linePath: '/images/line14.png',
        left: 204,
        top: 502,
        width: 33,
        height: 47
      },
      {
        name: '青藏线',
        isChoosed: 0,
        linePath: '/images/line15.png',
        left: 240,
        top: 644,
        width: 64,
        height: 47
      },
      {
        name: '老掌沟',
        isChoosed: 0,
        linePath: '/images/line16.png',
        left: 482,
        top: 598,
        width: 13,
        height: 36
      },
      {
        name: '滇缅公路-晴隆二十四拐',
        isChoosed: 0,
        linePath: '/images/line17.png',
        left: 354,
        top: 734,
        width: 29,
        height: 23
      },
      {
        name: '哈拉湖穿越线',
        isChoosed: 0,
        linePath: '/images/line18.png',
        left: 328,
        top: 634,
        width: 56,
        height: 34
      },
      {
        name: '库布齐沙漠越野穿越',
        isChoosed: 0,
        linePath: '/images/line19.png',
        left: 424,
        top: 562,
        width: 45,
        height: 31
      },
      {
        name: '阿拉善穿越线',
        isChoosed: 0,
        linePath: '/images/line20.png',
        left: 346,
        top: 584,
        width: 71,
        height: 26
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    //console.log(options.names,options.percent);
    this.setData({ names: options.names.replace(/,/g, '，'), percent: options.percent, nick: options.nick,len:options.len})
    //this.setData({ names: options.names.replace(/,/g, '，'), percent: options.percent, nick: '谢谢你，慌乱了我的年华', len: options.len })
    //console.log(this.data.names=='')
    var nameArr = this.data.names.split('，')
    var arr = this.data.arr;
    arr.forEach(function(item) {
      nameArr.forEach(function(nitem) {
        if (item.name == nitem) {
          item.isChoosed = 1;
        }
      })
    })
    this.setData({
      arr: arr
    })

    //console.log(this.data.names, this.data.percent)
    // wx.request({
    //   url: app.globalData.baseUrl + '/used_shop/index.php/wxapp/login/getAppQrcode',
    //   success:function(res){
    //     console.log('rewww',res)
    //     _this.setData({ qrcode:res.data.data})
    //     wx.downloadFile({
    //       url: res.data.data, //仅为示例，并非真实的资源
    //       success: function (res) {
    //         console.log('789',res)
    //         // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    //         if (res.statusCode === 200) {
    //           var tempFilePath = res.tempFilePath
    //           wx.saveFile({
    //             tempFilePath: tempFilePath,
    //             success: function (res) {
    //               console.log('123', res)
    //               var savedFilePath = res.savedFilePath
    //               _this.setData({codePath:res.savedFilePath})
    //               try {
    //                 var res = wx.getSystemInfoSync()
    //                 console.log(res);
    //                 _this.setData({ windowWidth: res.windowWidth, windowHeight: res.windowHeight })
    //                 _this.drawImage()
    //               } catch (e) {
    //                 // Do something when catch error
    //               }
    //             }
    //           })
    //         }
    //       }
    //     })
    //   }
    // })
    try {
      var res = wx.getSystemInfoSync()
      //console.log(res);
      var windowWidth = res.windowWidth;
      var windowHeight = windowWidth / 750 * 1334
      //console.log(windowHeight)
      _this.setData({
        windowWidth: windowWidth,
        windowHeight: windowHeight
      })
      // _this.setData({
      //   windowWidth: res.windowWidth,
      //   windowHeight: res.windowHeight
      // })
      _this.drawImage()
    } catch (e) {
      // Do something when catch error
    }

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
  drawImage() {
    //绘制canvas图片
    var that = this
    const ctx = wx.createCanvasContext('myCanvas')
    var bgPath = '/images/bg3.jpg'
    var rewardPath = "/images/logo.png"
    var carPath = "/images/car.png"

    var nickname = that.data.nick
    var len = that.data.len
    var percent = that.data.percent
    if (that.data.names==''){
      var text = ''
    }else{
      var text = '已豁过路线：' + that.data.names
    }
    
    //var codePath = that.data.codePath
    var codePath = '/images/ma.jpg'
    //var codePath = that.data.codePath
    var windowWidth = that.data.windowWidth
    var windowHeight = that.data.windowHeight
    windowHeight = windowWidth / 750 * 1334
    //绘制背景图片
    ctx.drawImage(bgPath, 0, 0, windowWidth, windowHeight)

    //绘制头像
    ctx.save()
    ctx.setTextAlign('center')
    ctx.drawImage(rewardPath, windowWidth * 0.168, windowHeight * 0.0337, 0.6773 * windowWidth, 0.241 * windowWidth)
    ctx.save()
    ctx.setFillStyle('#ffffff')
    // ctx.setFontSize(0.04 * windowWidth)
    // ctx.setTextAlign('left')
    // ctx.fillText('“ ' + nickname + ' ”' , windowWidth * 0.2267, windowHeight * 0.233)
    ctx.setTextAlign('center')
    ctx.setFontSize(0.0373 * windowWidth)
    ctx.setFillStyle('#ffffff')
    ctx.fillText('“ ' + nickname + ' ”' + ' 在目前越野生涯中豁遍', windowWidth / 2, windowHeight * 0.213)
    ctx.setTextAlign('left')
    ctx.fillText('全国' + len + '条线路超越了', windowWidth * 0.1188, windowHeight * 0.258)
    ctx.setFillStyle('#fffb80')
    ctx.setFontSize(0.0667 * windowWidth)
    ctx.fillText(percent, windowWidth * 0.472, windowHeight * 0.263)
    ctx.setFillStyle('#ffffff')
    ctx.setFontSize(0.0373 * windowWidth)
    ctx.fillText('的Guide用户！', windowWidth * 0.688, windowHeight * 0.258)
    ctx.setTextAlign('center')
    ctx.fillText('特发此奖，以资鼓励', windowWidth / 2, windowHeight * 0.298)
    ctx.save()

    if (that.data.names != '') {
      var mapPath = '/images/bg-map.png'
      var line1 = '/images/line1.png'
      var arr = that.data.arr;
      //ctx.drawImage(mapPath, windowWidth * 0.14267, windowHeight * 0.3175967, 0.708 * windowWidth, 0.61467 * windowWidth)
      //ctx.drawImage(mapPath, windowWidth * 0.14267, windowHeight * 0.305, 0.708 * windowWidth, 0.61467 * windowWidth)
      ctx.drawImage(mapPath, windowWidth * 0.14267, windowHeight * 0.330, 0.708 * windowWidth, 0.61467 * windowWidth)
      arr.forEach(function(item) {
        if (item.isChoosed == 1) {
          // ctx.drawImage(item.linePath, item.left / 750 * windowWidth, item.top / 1255 * windowHeight, item.width / 750 * windowWidth, item.height / 750 * windowWidth)
          ctx.drawImage(item.linePath, item.left / 750 * windowWidth, item.top / 1276 * windowHeight, item.width / 750 * windowWidth, item.height / 750 * windowWidth)
        }
      })

    } else {
      var mapPath = '/images/zero.png'
      //ctx.drawImage(mapPath, windowWidth * 0.14267, windowHeight * 0.3175967, 0.708 * windowWidth, 0.61467 * windowWidth)
      ctx.drawImage(mapPath, windowWidth * 0.14267, windowHeight * 0.330, 0.708 * windowWidth, 0.61467 * windowWidth)
    }
    ctx.save()
    // windowHeight = that.data.windowHeight;
    ctx.setTextAlign('center')
    var chr = text.split(""); //这个方法是将一个字符串分割成字符串数组
    var temp = "";
    var row = [];
    ctx.setFontSize(0.0293 * windowWidth)
    ctx.setFillStyle("#fff")
    for (var a = 0; a < chr.length; a++) {
      if (ctx.measureText(temp).width <= (0.8 * windowWidth)) {
        temp += chr[a];
      } else {
        temp += chr[a];
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp);
   // console.log(row)
    var y = windowHeight * 0.330 + 0.61467 * windowWidth+25;
    for (var b = 0; b < row.length; b++) {
      //ctx.fillText(row[b], windowWidth / 2, 0.72 * windowHeight + b * 18, 0.77 * windowWidth);
      ctx.fillText(row[b], windowWidth / 2, y + b * 18, 0.77 * windowWidth);
    }
    ctx.save()
    ctx.drawImage(carPath, windowWidth * 0.1, windowHeight * 0.898, 293/750 * windowWidth, 81/750 * windowWidth)
    ctx.drawImage(codePath, windowWidth * 0.135, windowHeight * 0.852, 0.133 * windowWidth, 0.133 * windowWidth)
    //ctx.drawImage(codePath, windowWidth * 0.165, windowHeight * 0.850, 50,50)
    ctx.save()
    ctx.draw();
  },
  save: function() {
    wx.showLoading({
      title: '保存中',
    })
    var that = this;
    wx.canvasToTempFilePath({
      canvasId: 'myCanvas',
      success: function(res) {
        // console.log('888', res.tempFilePath)
        that.isSaveAuthor(res.tempFilePath)
        // var urls = [];
        // urls.push(res.tempFilePath);
        // wx.previewImage({
        //   current: '', // 当前显示图片的http链接
        //   urls: urls, // 需要预览的图片http链接列表
        //   success: function () {
        //     console.log('555')
        //     that.isSaveAuthor(res.tempFilePath)
        //   }
        // })

      }
    })

  },
  //判断是否授权保存相册
  isSaveAuthor: function(picPath) {
    var _this = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.hideLoading()
          wx.openSetting({
            success: (res) => {
              res.authSetting = {
                "scope.writePhotosAlbum": true,
              }
              _this.saveImageToPhotosAlbum(picPath)
            }
          })
        } else {
          //console.log('授权成功')
          _this.saveImageToPhotosAlbum(picPath)
        }
      }
    })
  },
  //保存图片到本地相册
  saveImageToPhotosAlbum: function(picPath) {
    wx.saveImageToPhotosAlbum({
      filePath: picPath,
      success(res) {
        wx.hideLoading()
        //console.log('11',res)
        wx.showModal({
          title: '提示',
          content: '保存成功，快去发圈炫耀一下吧~',
          showCancel: false,
          success: function(res) {

          }
        })
      }
    })
  }
})