export const URL='http://result.eolinker.com/tC5mjBN6cd038db43759e1b87c84083dd798f78f45f17a2?uri='
/**
 * 获取url问号后参数
 */
export function getUrlParam(name) {
  let reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)","i");
  if(reg.test(window.location.href)){
    return unescape(RegExp.$2.replace(/\+/g," "))
  }else{
    return false;
  }
}
