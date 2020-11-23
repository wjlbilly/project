
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
      console.log(data);
      $.each(data,function(index,ele){
          showData+=`<li class="line"><a href="#"><img src="${ele.imgurl}" alt=""><span>${ele.title}</span><p>${ele.price}</p></a></li>`
      }) 
      $('.show ul').html(showData);
      $('.show ul').prepend('<li><a href="#"><img src="../img/show2.png" alt=""><span>Remdi K30 至尊纪念版</span><p>5299元起</p></a></li>')
    },
    error:function(data){
      console.log(data);
    }
});
   $('.show').mouseenter(function(){
    $('.show').css("display",'block')
   })
    
})

$('.nav-list li').mouseleave(function(){
    $('.show').css('display',"none")
 
    $('.show').mouseleave(function(){
        $('.show').slideUp('slow')
    })
      
  })


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
      
  })

  // 运动
$('.left').click(function(){
    var page =1;
    var i=4;
    var ant = $('#oul');
    var len= $('#oul').find('li').length
    var page_count = Math.ceil(len/i); 

  if( page=page_count){
    ant.animate({'left':'248'},1000)

  }else{
    ant.animate({'left':'248*page_count'},1000)
    page--
  }


  
})
$('.right').click(function(){
    $('.animate').animate({'right':'248'},1000)
 
 })


  