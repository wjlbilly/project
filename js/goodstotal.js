$(function(){
    // 单选
   var totalList = {
       init:function(){
           this.getElement();
           this.addEvent();
       },
       getElement:function(){
           this.$al =$('.al');
           this.$list = $('.list');
           this.$tot =$('#tot');
           this.$pu=$('#tot p u');
           this.$h3u =$('#tot h3 u');
           this.$iu =$('#tot i u');
           this.$h2 = $('#tot h2');
           
       },
      addEvent:function(){
        function sum(){
            var arr = JSON.parse(localStorage.getItem("goods"));
            var tot=0;
            for(var key in arr) {
               tot += Number(arr[key]['num']);
            }   
            return tot;
          }
          $('#tot p u').text(sum());
          localStorage.setItem('tot',JSON.stringify(sum()))// 存储购物车得数量

          
          var _this = this;
  //单个勾选任务
  this.$list.on('click','li input',function(){
    $(' .list  input').each(function(index,item){
        if(!$(item).prop('checked')){
           _this.$al.prop('checked',false);
           return false;        
        }
        _this.$al.prop('checked',true);
       });
   })
 // 点击全部 全选
 this.$al.click(function(){
    if($(this).prop('checked')){
        $('.list  input').prop('checked',true); 
    }else{
        $('.list  input').prop('checked',false); 
    }
   });
 
//单选计算总数
this.$list.on('click','li input',function(){
    var total=0;
    var speed=0;
    $('.list input').each(function(index,item){;

        if($(item).prop('checked')){
            speed+= Number($(item).siblings('div').find('a').text())
            total +=Number($(item).siblings('i').text().split('￥').slice(1));
        }
        _this.$iu.text(total);
        _this.$h3u.text(speed);

    });
})
// 全选计算总数
this.$al.click(function(){
    var total=0;
    var speed=0;
    if($(this).prop('checked')){
        $('.list input').each(function(index,item){;
            total +=Number($(item).siblings('i').text().split('￥').slice(1));
            speed+= Number($(item).siblings('div').find('a').text())
                _this.$h3u.text(speed);
                 _this.$iu.text(total); 
            });
    }else{
        _this.$iu.text(0);
        _this.$h3u.text(0);

    }    
  });
   //选中 在进行加减
    
   $('.list').on('click','li div em',function(){
        var inPut = $(this).parent().siblings('input');
        var num = $(this).siblings('a').text();
        var price = $(this).parent().siblings('p').attr("price");
        // num--;
        // if(num<=1){
        //     num=1;
        // }
        $('#tot p u').text(sum());
        localStorage.setItem('tot',JSON.stringify(sum()))
     $(this).siblings('a').text(num);
     var countPrice =num*price;
     $(this).parent().siblings('i').text('￥'+countPrice);
     //获取添加的数值
     if( inPut.prop('checked')){
      var total=0;
      var speed=0
      $('.list input').each(function(index,item){
          if($(item).prop('checked')){
            total +=Number($(item).siblings('i').text().split('￥').slice(1));
            speed+= Number($(item).siblings('div').find('a').text())
            _this.$h3u.text(speed);
            _this.$iu.text(total); 
          }
       })
   
     }
      
  });

   //选中 在进行加减
    
   $('.list').on('click','li div span',function(){
    var inPut = $(this).parent().siblings('input');
    var num = $(this).siblings('a').text();
    var price = $(this).parent().siblings('p').attr("price");
    $('#tot p u').text(sum());
    localStorage.setItem('tot',JSON.stringify(sum()))
    // num++;
 $(this).siblings('a').text(num);
 var countPrice =num*price;
 $(this).parent().siblings('i').text('￥'+countPrice);
 //获取添加的数值
 if( inPut.prop('checked')){
  var total=0;
  var speed=0;
  $('.list input').each(function(index,item){
      if($(item).prop('checked')){
        speed+= Number($(item).siblings('div').find('a').text())
        _this.$h3u.text(speed);
        total +=Number($(item).siblings('i').text().split('￥').slice(1));
        _this.$iu.text(total); 
      }
   })

 }
  
});
//删除商品
$('.list').on('click','li h4',function (){
    var  inPut = $(this).siblings('input');
    $(this).parent().remove();
    $('#tot p u').text(sum());
    localStorage.setItem('tot',JSON.stringify(sum()))
    console.log($('.list')[0].children.length);
    if( $('.list')[0].children.length===0){
           $('.al').prop('checked','false')
           return;
      }
      if( $('.list input').prop('checked')){
        $('.al').prop('checked','true')
      }
    var total=0;
    var speed=0;
    $('.list input').each(function(index,item){
        if($(item).prop('checked')){
            speed+= Number($(item).siblings('div').find('a').text())
            _this.$h3u.text(speed);
          total +=Number($(item).siblings('i').text().split('￥').slice(1));
          _this.$iu.text(total);  
       }else{
        _this.$iu.text(0); 
        _this.$h3u.text(0);
        }
     })
 
})

}

 }
   totalList.init(); 
})