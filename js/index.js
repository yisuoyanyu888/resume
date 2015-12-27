mui.plusReady(function() {
        //读取本地存储，检查是否为首次启动
        // var showGuide = plus.storage.getItem("lauchFlag");
        // if(showGuide){
        //   //有值，说明已经显示过了，无需显示；
        //   //关闭splash页面；
        //   plus.navigator.closeSplashscreen();
        //   plus.navigator.setFullscreen(false);
        //   //初始化模板
        //   initTemplates(); 
        //   //预加载
        //   preload();
        // }else{
          //显示启动导航
          mui.openWindow({
            id:'guide',
            url:'guide.html',
            show:{
              aniShow:'none'
            },
            waiting:{
              autoShow:false
            }
          });
          //延迟的原因：优先打开启动导航页面，避免资源争夺
          // setTimeout(function () {
          //   //初始化模板
          //   initTemplates(); 
          //   //预加载
          //   preload();
          // },200);
        // }
      });

//首页返回键处理
//处理逻辑：1秒内，连续两次按返回键，则退出应用；
var first = null;
mui.back = function() {
	//首次按键，提示‘再按一次退出应用’
	if (!first) {
		first = new Date().getTime();
		mui.toast('再按一次退出应用');
		setTimeout(function() {
			first = null;
		}, 1000);
	} else {
		if (new Date().getTime() - first < 1000) {
			plus.runtime.quit();
		}
	}
};