// 防抖---操作时不执行，确定不操作了才执行---一直玩则手机不息屏

// 接收回调函数，返回回调函数;定义定时器
function debounce(fun,delay){
  // 清除定时器--连续操作则不断清除定时器，使定时器无法完成
  let timer;
  return function(){
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      fun.apply(this, arguments);
    },delay);
  }
  // 开启定时器
}


// 节流---到时间必须执行一次-------公交车定时发车
function throttle(fun,time){
  let start = 0;
  return function(){
    let now = new Date();
    if(now - start > time){
      fun.apply(this,arguments);
      start = now
    }
  }
}