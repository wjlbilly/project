$('#oul').css("width", $('#oul li').length*234);
$('.left').click(function(){

    var left_animate = $('#oul li').css('left');
    if (left_animate != '0px') {
        $('#oul li').animate({left:'+=234px'}, 100);
    }
    });
    
    // 点击向右滑动（先获取列表的长度，然后减去5,5代表一下显示5个li，得到的值乘以234，比较大小，如果不相等，left向右移动239px）
    $('.right').click(function(){
    var right_animate = $('#oul li').css('left');
    var right_num =$('#oul li').length;
    
    right_num = Number(-(right_num-5));
    right_num = Number(right_num*234)+'px';
    
    if (right_animate != right_num) {
        $('#oul li').animate({left:'-=234px'}, 100);
    }
    });