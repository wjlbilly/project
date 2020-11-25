$(function(){
$('.sub').click(function(){
    var uVal = $('.upwd').val();
    var pVal = $('.call').val();
    var  num = /^[1][3578]\d{9}$/;
    var pass =/^[a-zA-z]\w{5,7}/;
    if(!pVal){
        $('.yzm').text('手机号不能为空');
        $('.yzm').css('color','red');
        return;
    }
    if(!num.test(pVal)){
        $('.yzm').text('不符合手机号的规则');
       $('.yzm').css('color','red');
       return;
    }
    if(!uVal){
        $('.yzm').text('密码不能为空');
        $('.yzm').css('color','red');
        return;
    }
    if(!pass.test(uVal)){
        $('.yzm').text('请输入6-8位的密码要以字母开头');
        $('.yzm').css('color','red');
        return ;
    }
  
    
    $.ajax({
        type:'post',
        url:'http://localhost/project/xiaomi/dist/php/register.php',
        data:{
            phone :pVal,
            upwd: uVal
        },
        success:function(data){
        var str=JSON.parse(data);
        console.log(str);
        if(!str.code){
            $('.yzm').text('注册成功');
            $('.yzm').css('color','green');
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
})

