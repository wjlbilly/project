


//show json数据
$('.nav-list li').mouseenter(function(){
    $('.show').slideDown('slow');
     $('.show').css("zIndex",'20')
 $.ajax({
    url:'../data/show.json',
    type:"get",
    dataType:"json",
    success:function(data){
      var showData='';
      $.each(data,function(index,ele){
          showData+=`<li class="line"><a href="#"><img src="${ele.imgurl}" alt=""><span>${ele.title}</span><p>${ele.price}</p></a></li>`
      }) ;
      $('.show ul').html(showData);
      $('.show ul').prepend('<li><a href="#"><img src="../img/show2.png" alt=""><span>Remdi K30 至尊纪念版</span><p>5299元起</p></a></li>')
       $('.show ul').on('click','li img',function(){
        location.href='../goodsList.html';
       })
    },
    error:function(data){
      console.log(data);
    }
});
   $('.show').mouseenter(function(){
    $('.show').css("display",'block')
   })
    
});

$('.nav-list li').mouseleave(function(){
    $('.show').css('display',"none")
 
    $('.show').mouseleave(function(){
        $('.show').slideUp('slow')
    })
      
  });


  //轮播左侧的列表
  $('.menu ul li').mouseenter(function(){
    $('.menu-list').css("display",'block')

   $('.menu-list').mouseenter(function(){
    $('.menu-list').css("display",'block')
   })
    
})
  $('.menu ul li').mouseleave(function(){
    $('.menu-list').css('display',"none")
 
    $('.menu-list').mouseleave(function(){
        $('.menu-list').css('display',"none")
    })
      
  });

  



  //box-right json 数据渲染
  $.ajax({
    url:'../data/box-right.json',
    type:"get",
    dataType:"json",
    success:function(data){
      var showData='';
      // console.log(data);
      $.each(data,function(index,ele){
          showData+=` <li>
                 <div > 
                <a href="#"><img src="${ele.imgurl}" alt=""> 
                  <h3>${ele.h3}</h3>
                  <span>${ele.span}</span>
                  <p>${ele.p}</p>
             </div>
           </li>`
      }) 
      $('.box-right ul').html(showData);
      $('.box-right ul').on('click','li  a img',function(){
        location.href='../goodsList.html';
       })
    },
    error:function(data){
      console.log(data);
    }
});


//select  切换
$('.table-list ul li').on("click",function(){
   var index = $(this).index()
   $('.row-right #select').eq(index).css("display","block").siblings(" .row-right #select").css("display","none")
})

// 购物车数量
$('.topbar-cart a').click(function(){
  if(!!sessionStorage.getItem('ID')){
    var num = JSON.parse(localStorage.getItem('tot'));
      $('.topbar-cart a span').text(`(${num})`); 
   location.href = "../goodsCart.html";
 
  }else{
    $('.topbar-cart a span').text('0')
    alert("请先登录"); 
    location.href = "../login.html";
}
   
})
if(!!sessionStorage.getItem('ID')){
  var num = JSON.parse(localStorage.getItem('tot'));
  $('.topbar-cart a span').text(`(${num})`);

}

 

   // 点击注册弹出mask agreement-box
         $('.topbar-info .register').click(function(){
            $('#mask').css("display","block");
            $(".agreement-box").css("display","block");
         })
     //点击x隐藏  mask agreement-box
         $('.log-header a').click(function(){
          $('#mask').css("display","none");
          $(".agreement-box").css("display","none");
         })
  //点击不同意隐藏  mask agreement-box
         $('.log_footer .btn-gray').click(function(){
          $('#mask').css("display","none");
          $(".agreement-box").css("display","none");
         })
  // 点击同意跳转到注册页面
         $('.log_footer .btn-primary').click(function(){
           window.location.href ='../register.html';
         })

         
  // 运动
$('.right').click(function(){
    var oul = $('.animate #oul');
    var left =oul.offset().left
    var oulLeft = left-310;
     oul.css('left',oulLeft);
     if(left <= -oul.width()+2000){
      oul.css('left','0');
     }
            
});
setInterval(() => {
  var oul = $('.animate #oul');
  var left =oul.offset().left
  var oulLeft = left-310;
  oul.animate({left:oulLeft },600,'swing',function(){
    if(left <= -oul.width()+2000){
      oul.css('left','0');
     }
})    
}, 5000);

$('.left').click(function(){
  var oul = $('.animate #oul');
  var oulLeft = oul.offset().left+310;
   oul.css('left',oulLeft);
   if(left>=0){
    oul.css('left','0');
   }
 })

//倒计时
var  d= $('.time #d');
var f =$('.time #f');
var m =$('.time #m');
function countTime(time){
  setInterval(function(){
     var nowTime = new Date().getTime();
     var endTime = new Date(time).getTime();
     var res = parseInt(endTime - nowTime);
      //补零
       function db(item){
           return  item <10 ? "0"+item : item;
       }
       var  houre=res/1000/60/60;//得到小时
       var dd = db(parseInt(houre/24));
       var hh =db( parseInt((houre/24 - dd) * 24));
       var ff = db(parseInt(((houre/24 - dd) * 24 - hh) * 60));
       var mm=db( parseInt((((houre/24 - dd) * 24 - hh) * 60 - ff) * 60));
          d.text(hh);
          f.text(ff);
           m.text(mm);
        if(res<0){
         d.text('00');
         f.text('00');
         m.text('00');
           }

  },1000)
}
countTime("2020-11-30 22:00:00");

// $('#oul').css("width", $('#oul li').length*234);
// $('.left').click(function(){

//     var left_animate = $('#oul li').css('left');
//     if (left_animate != '0px') {
//         $('#oul li').animate({left:'+=234px'}, 100);
//     }
//     });
    
//     // 点击向右滑动（先获取列表的长度，然后减去5,5代表一下显示5个li，得到的值乘以234，比较大小，如果不相等，left向右移动239px）
//     $('.right').click(function(){
//     var right_animate = $('#oul li').css('left');
//     var right_num =$('#oul li').length;
//     console.log(right_num);
    
//     right_num = Number(-(right_num-5));
//     right_num = Number(right_num*234)+'px';
    
//     if (right_animate != right_num) {
//         $('#oul li').animate({left:'-=234px'}, 100);
//     }
//     });
