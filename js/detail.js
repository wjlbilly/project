//show json数据
$('.nav-list li').mouseenter(function(){
    $('.show-json').slideDown('slow');
     $('.show-json').css("zIndex",'20')
 $.ajax({
    url:'../data/show.json',
    type:"get",
    dataType:"json",
    success:function(data){
      var showData='';
      $.each(data,function(index,ele){
          showData+=`<li class="line"><a href="#"><img src="${ele.imgurl}" alt=""><span>${ele.title}</span><p>${ele.price}</p></a></li>`
      }) 
      $('.show-json ul').html(showData);
      $('.show-json  ul').prepend('<li><a href="#"><img src="../img/show2.png" alt=""><span>Remdi K30 至尊纪念版</span><p>5299元起</p></a></li>')
    },
    error:function(data){
      console.log(data);
    }
});
   $('.show-json').mouseenter(function(){
    $(this).css("display",'block')
   })
    
});

$('.nav-list li').mouseleave(function(){
    $('.show-json').css('display',"none")
 
    $('.show-json').mouseleave(function(){
        $(this).slideUp('slow')
    })
      
  });

  // 购物车
  var num = JSON.parse(localStorage.getItem('tot'))
     $('.topbar-cart a span').text(`(${num})`)

//吸顶效果
var nav = document.getElementById("list")
// console.log(nav);

	window.onscroll = function(){
		//console.log(1)
		//获取浏览器向上滚走的距离
		var stop = document.documentElement.scrollTop || document.body.scrollTop;
		
		if(stop >= 140){
			//导航固定定位
			nav.style.position = "fixed";
			nav.style.zIndex = 999;
			nav.style.top = 0;
		}else{
			nav.style.position = "static";
		}
    }
    
    // 放大镜
    var  small = document.getElementById("small");
      var ol = document.getElementsByClassName("smallOl");
   var  smallImg = small.getElementsByTagName("img");
   var  select = document.getElementById("select");
   var  selectImg = select.getElementsByTagName("img");
   var  big= document.getElementById("big");
   var  bigImg = big.getElementsByTagName("img");
   var mask = document.getElementById("mask");


    function offset(dom,bool){
			var t = 0, l = 0
			var bdl = dom.clientLeft // 保存当前元素的左边框
			var bdt = dom.clientTop// 保存当前元素的上边框
			while(dom){
			  l += dom.offsetLeft + dom.clientLeft
			  t += dom.offsetTop + dom.clientTop
			  // 每次循环完让当前dom元素等于他的定位父级
			  dom = dom.offsetParent
			}
			if (bool) {// 包含自身边框
			  return {left: l, top: t}
			} else {// 不包含自身边框
			  return {left: l-bdl, top: t-bdt}
			}
      }
      
    
     var speed=4;
     for(var i= 0 ;i<selectImg.length;i++){
      selectImg[i].index =i;
         selectImg[i].onclick = function(){
           for(var j= 0;j<selectImg.length;j++){
            smallImg[j].style.display="none";
           }
           smallImg[this.index].style.display ="block" ;
           speed++;
           bigImg[this.index].style.zIndex=speed;
          show(ol[0],mask,bigImg[this.index],big);
         }
          
     } 
     
function show(ol,mask,bigImg,big){
  ol.onmouseenter = function(){
    console.log(1);
       mask.style.display = "block";
       big.style.display = "block";
       
   }
 ol.onmouseleave = function(){
       mask.style.display = "none";
       big.style.display = "none";
   }
ol.onmousemove = function(eve){
       var e = eve || window.event;
        var l = e.pageX - offset(ol).left -mask.offsetWidth/2;
        var t = e.pageY - offset(ol).top -mask.offsetHeight/2;

        var maxl = ol.offsetWidth - mask.offsetWidth;
       var maxt = ol.offsetHeight - mask.offsetHeight;

         l=l<0 ? 0 :(l >maxl ? maxl :l);
        t=t<0 ? 0 :(t >maxt ? maxt :t); 

       mask.style.left = l +"px";
       mask.style.top = t+"px";
      //  bigImg.style.left=-(big.clientWidth/mask.offsetWidth)*l+"px";
      //  bigImg.style.top=-(big.clientHeight/mask.offsetHeight)*t+"px";   

      bigImg.style.left=-3*l+"px";
      bigImg.style.top=-3*t+"px"; 
   }
      
}


// 获取code值

$('.sale-btn .btn').click(function(){
  var code = location.search.split('?')[1].split('=')[1];
 
  // 判断有没有数据
     if(localStorage.getItem('goods')){
         //又数据把数据取出来 转为对象
          var goodsArr = JSON.parse(localStorage.getItem('goods'));
     }else{
         var goodsArr =[];
     }
     var hasGoods=false;
     if(goodsArr.length>0){
         // 遍历数组
         $.each(goodsArr,function(index,ele){
           if(ele.code===code){
               ele.num++
               hasGoods = true
               return false
           }
         })
     }
      //如果购物车中没有该商品 添加在里面
      if(!hasGoods){
        goodsArr.push({code:code,num:1}) 
      }
      //更新本地存储的数据
      localStorage.setItem("goods",JSON.stringify( goodsArr))
      alert('添加购物车成功')
})