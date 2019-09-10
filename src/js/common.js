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


export {
  ajaxCallback, //ajax方法回调处理
}

