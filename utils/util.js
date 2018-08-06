const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const mobileTest = n => {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(n)) {
    wx.showModal({
      title: '提示',
      content: '请输入正确的手机号',
      showCancel: false,
      success: function (res) {
      }
    })
  }
}
/*时间转换函数*/
const timeChange = createdTime => {

  var date1 = new Date(createdTime.replace(/-/, '/'));  //开始时间
  var date2 = new Date();    //结束时间
  var date3 = date2.getTime() - date1.getTime();  //时间差的毫秒数
  //计算出相差天数
  var days = Math.floor(date3 / (24 * 3600 * 1000));
  //计算出小时数
  var leave1 = date3 % (24 * 3600 * 1000);   //计算天数后剩余的毫秒数
  var hours = Math.floor(leave1 / (3600 * 1000));
  //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000));
  //计算相差秒数
  var leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000);
  if (days == 0 && hours == 0 && minutes == 0 && seconds != 0) {
    return '刚刚';
  } else if (days == 0 && hours == 0 && minutes > 0) {
    return minutes + '分钟前';
  } else if (days == 0 && hours > 0) {
    return hours + '小时前';
  } else if (0 < parseInt(days) && parseInt(days) <= 7) {
    return days + '天前';
  } else {
    var cTime = createdTime.split(' ')[0].split('-');
    return cTime[0] + '-' + cTime[1] + '-' + cTime[2];
  }

}

const jsonForm = form => {
  var arr = [];
  for (var key in form) {
    arr.push(key + "=" + form[key]);
  }
  return arr.join("&");
}


const json2Form = json => {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}




module.exports = {
  formatTime: formatTime,
  mobileTest: mobileTest,
  jsonForm: jsonForm,
  json2Form: json2Form,
  timeChange: timeChange
}
