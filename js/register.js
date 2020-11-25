$(function(){
$('.sub').click(function(){
    // var uVal = $('.upwd').val();
    var pVal = $('.call').val();
    var  num = /[1][3578]\d{9}/;
    if(!pVal && ! $('.upwd').val()){
       $('.yzm').text('手机号或密码不能为空');
       $('.yzm').css('color','red');
       return false;
    } else if(num.test(pVal)){
       $('.yzm').text('手机号可以注册');
       $('.yzm').css('color','green');

    }else{
       $('.yzm').text('不符合手机号的规则');
       $('.yzm').css('color','red');
    }
    
    $.ajax({
        type:'post',
        url:'http://localhost/project/xiaomi/dist/php/register.php',
        data:{
            phone :$('.call').val(),
            upwd: $('.upwd').val()
        },
        success:function(data){
        var str=JSON.parse(data);
        console.log(str);
        if(!str.code){
            $('.yzm').text('注册成功');
            $('.yzm').css('color','green');
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
})

