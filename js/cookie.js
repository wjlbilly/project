
function $1(selector){
  return document.querySelector(selector);
}
function $2(selector){
  return document.querySelectorAll(selector);
};


// 设置cookie
function setCookie(options){
  options.days = options.days || 0
  options.path = options.path || ''
  if (options.days === 0) {
    document.cookie = options.key+'='+options.val+'; path='+options.path
  } else {
    var d = new Date()
    d.setDate(d.getDate()+options.days)
    document.cookie = options.key+'='+options.val+'; expires='+d+'; path='+options.path
  }
};

// 获取cookie
function getCookie(key){
  var arr = document.cookie.split('; ')
  for (var i = 0, len = arr.length; i < len; i++){
    var arr2 = arr[i].split('=')
    if (arr2[0] === key) {
      return arr2[1]
    }
  }
  return null
};

// 删除cookie（cookie过期浏览器自动删除）
function removeCookie(key){
  setCookie({
    key: key,
    val: '123',
    days: -2
  })
};

