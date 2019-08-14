import $ from "jquery";

// 获得ajax post返回Json数据    (地址，参数，同步/异步（true,false），交互类型，回调，是否显示异常弹窗)
function ajaxCallback(url, async, param, type, callback, errorMsgShow) {
  param = JSON.stringify(param);
  $.ajax({
    url: url,
    type: type,
    dataType: "json",
    contentType: 'application/json;charset=utf-8',
    data: param,
    async: async,
    headers: {},
    success: function (data) {
        callback(data)
    },
    error: function (e) {
      console.info("ajax连接异常", e)
    }
  });
}

// 获得ajax post返回Json数据    (地址，参数，同步/异步（true,false），交互类型，回调，是否显示异常弹窗)
function ajaxReturn(url, param) {
  let result = "";
  param = JSON.stringify(param);
  $.ajax({
    url: url,
    type: "POST",
    dataType: "json",
    contentType: 'application/json;charset=utf-8',
    data: param,
    async: false,
    success: function (data) {
      result = data;
    },
    error: function (e) {
      console.info("ajax连接异常", e)
    }
  });
  return result;
}

export {
  ajaxCallback, //ajax方法回调处理
  ajaxReturn, //ajax同步方法返回不处理
}

