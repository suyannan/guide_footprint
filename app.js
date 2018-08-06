//app.js
App({
  onLaunch: function (options) {
    //console.log(options.scene)
    var scene = options.scene;
    if (scene == 1036 || scene==1069){
      this.globalData.flag=true;
      // 当小程序从 1036（App 分享消息卡片） 打开时，该状态置为 true。
      // 当小程序从 1069（App 打开小程序） 打开时，该状态置为 true。
    } else if (scene == 1089 || scene == 1090){
      // 当小程序从 1089（微信聊天主界面下拉）或 1090（长按小程序右上角菜单唤出最近使用历史）的场景打开时，该状态不变，即保持上一次打开小程序时该状态的值。
    }else{
      this.globalData.flag = false;  
      // 当小程序从非 1036/ 1069 / 1089 / 1090 的场景打开，该状态置为 false。
    }
  },
  globalData: {
    flag:false,
    userInfo: null,
    windowHeight:'',
    baseUrl: 'https://aigoaigo.cn',
  }
})