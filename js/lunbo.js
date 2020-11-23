//轮播图
window.onload=function(){
    var option ={
        banner:document.getElementById("lunbo"),
        imgList:document.getElementById("img-list"),
         navList:document.getElementById("lunbo-nav-list"),
         arr:document.getElementById("arr"),
         toLeft:document.getElementById("toLeft"),
         toRight:document.getElementById("toRight"),
    }
    var lunBo = new AutoLunBo(option);
}

function  AutoLunBo(option){
 this.banner=option.banner;
 this.imgList = option.imgList;
 this.navList = option.navList;
 this.toLeft = option.toLeft;
 this.toRight = option.toRight;
 this.arr = option.arr;
 this.imgLi = this.imgList.children;
 this.navLi = this.navList.children;

 this.timer=null;
 this.index=0;
 this.init();
 }
 AutoLunBo.prototype.init = function(){
     //自动轮播播放的调用
     this.autoPlay();
 //鼠标移入banner  让自动轮播停止  左右按钮显示的调用
   this.mouseover();
//鼠标移出banner   自动播放开始   左右按钮隐藏   
     this.mouseout();
 //调用点击左右按钮的方法
     this.moveLeft();
     this.moveRight();
     //调用方法，移入小图标功能
     this.overNavLi();
 }
 //自动轮播
 AutoLunBo.prototype.autoPlay=function() {
     var _this=this;
     //开启一个定时器
     this.timer = setInterval(function(){
           if(_this.index === _this.imgLi.length-1){//5
               _this.imgList.style.left=0;//让图片强制回到开始
               _this.index=1; // 最后一张在向左动, 下标因该从1开始
           }else{
               _this.index++;
           }
           //0 1 2 3  =》  对应 ul>li 1 2 3 4 
           var itemIndex = _this.index ===  _this.imgLi.length-1 ? 0: _this.index;
           //动画播放
           _this.move(itemIndex);
           
     },2000)
 }
//实现动画
AutoLunBo.prototype.move=function(itemIndex){
   for( var i=0; i<this.navLi.length; i++){//排他处理
       this.navLi[i].className="";
   }
   //实现动画
   //this.index   1 2 3 4 
   animate(this.imgList,{left: -1226*this.index},20);
   this.navLi[itemIndex].className="active";
}


//鼠标移入banner  让自动轮播停止  左右按钮显示
AutoLunBo.prototype.mouseover = function(){
   var _this = this;
   this.banner.onmouseover =  function (){
       clearInterval( _this.timer);
       //显示按钮
       animate(_this.arr,{opacity:30},10)
   }
}

//鼠标移出banner   左右按钮隐藏   自动播放开始
AutoLunBo.prototype.mouseout = function(){
   var _this = this;
   this.banner.onmouseout =  function (){
       //恢复自动播放
     _this.autoPlay();
     //隐藏按钮
     animate(_this.arr,{opacity:0},10)
   }
}
 
 //点击左右按钮手动播放
  AutoLunBo.prototype.moveLeft =function(){
      var _this=this;
      // 3 2 1 0  
      // 4 3 2 1   
      this.toLeft.onclick = function (){
          if(_this.index===_this.navLi.length){//当下标为4是  对应第五张图
             _this.index.imgList.style.left = 0;//回到开始
             _this.index=0;//往左边走  当下标为4是  对应第五张图  直接回到第一张图开始
          }else if(_this.index===0){
             _this.index=0;
          }else{
             _this.index--;
          }
          _this.move(_this.index);
      }
  }

  AutoLunBo.prototype.moveRight =function(){
      var _this=this;
      // 下标 0 1 2  3
      // 图标数字1 2 3 4
      this.toRight.onclick = function (){
          if(_this.index===_this.navLi.length){//当下标为4时  对应第五张图
             _this.index.imgList.style.left = 0;//回到开始
             _this.index=1;//第五张图是在运动的  应该从下标为1  对应第二张图开始
          }else if(_this.index===_this.navLi.length-1){//当达到最由边时  不能在往右走了
             _this.index=_this.navLi.length-1; 
          }else{
             _this.index++;//其他情况就++
          }
          _this.move(_this.index);
      }
  }

  //点到下图标就运动到对应图的位置
  AutoLunBo.prototype.overNavLi= function (){
      var _this = this;
  //遍历小图标  给每个小图标加上移入事件 运动到对应图的位置
  for( let i=0 ; i<this.navLi.length ; i++)	{//让变量私有化
     this.navLi[i].onmouseover= function (){
          _this.index=i;
          //_this.move(_this.index);
          _this.move(i);
      }
  } 
}




