$(function(){
    $('.btn').click(function(){
        var uVal = $('.upwd').val();
        var pVal = $('.call').val();
       
        if(!pVal){
            $('.yzm').text('手机号不能为空');
            $('.yzm').css('color','red');
            return;
        }
     
        if(!uVal){
            $('.yzm').text('密码不能为空');
            $('.yzm').css('color','red');
            return;
        }
       
        
        $.ajax({
            type:'post',
            url:'http://localhost/project/xiaomi/dist/php/login.php',
            data:{
                phone :pVal,
                upwd: uVal
            },
            success:function(data){
            var str=JSON.parse(data);
            console.log(str);
            if(!str.code){
                $('.yzm').text(str.massage);
                $('.yzm').css('color','green');
      sessionStorage.setItem('ID',pVal);
                location.href ='./index.html';
            }else{
                $('.yzm').text(str.massage);
                $('.yzm').css('color','red');
            }
            },
            error:function(res){
                console.log(res);
            }
        })
    })
  $('#zhanghao').click(function(){
     $('.select1').css('display','block');
     $('.select2').css('display','none')

  })
  $('#saoma').click(function(){
    $('.select1').css('display','none');
    $('.select2').css('display','block')

 })

    })
    
    