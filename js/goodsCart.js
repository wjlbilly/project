$(function(){
     if(localStorage.getItem('goods')){
         var goodsArr = JSON.parse(localStorage.getItem("goods"));
         $.ajax({
            url:'./data/goods.json',
            type:"get",
            dataType:"json",
            success:function(data){
                console.log(data);
                var goodSData ='';
              $.each(goodsArr,function(index,ele){
              $.each(data,function(inde,item){
                  // 判断code是否相等 
                  if(ele.code === item.code){
                     goodSData +=` <li>
                     <input type="checkbox" index=''>
                     <img src="${item.imgurl}" alt="">
                     <h3>${item.title}</h3>
                     <p price='${item.price}'>￥${item.price}</p>
                     <div ><em>-</em><a href="#" num='${ele.num}'>${ele.num}</a><span>+</span></div>
                     <i }'>￥${item.price*ele.num}</i>
                     <h4 code='${item.code}'>x</h4>
                   </li>`;
                  }
                })         
              }) 
              $('.list').html(goodSData);
            
            },
            error:function(data){
              console.log(data);
            }
        });
            //加减商品 事件委托  计算小计
            //减
            $('.list').on('click','li div em',function(){
               //获取添加的数值
                var num = $(this).siblings('a').text();
                var  price = $(this).parent().siblings('p').attr("price")
              
                 if(num<=1){
                    $(this).parent().siblings('i').text('￥'+price);
                    alert("修改数量不能小于0")
                    // return;
                }else{
                   num--;
                   var countPrice =num*price;
                  $(this).parent().siblings('i').text('￥'+countPrice);
                }  
                $(this).siblings('a').text(num);

                var code = $(this).parent().siblings('h4').attr('code') // 要减的商品的编号
                $.each(goodsArr,function (index,item){
                  if (item.code === code) {
                      goodsArr[index].num=num;
                      localStorage.setItem('goods',JSON.stringify(goodsArr))
                    }
                  })
                
       
            });
          
              //加
              $('.list').on('click','li div span',function(){
                //获取添加的数值
                 var num = $(this).siblings('a').text();
                 var  price = $(this).parent().siblings('p').attr("price")
              
                    num++;
                    var countPrice =num*price;
                   $(this).parent().siblings('i').text('￥'+countPrice); 
                   $(this).siblings('a').text(num);

                 var code = $(this).parent().siblings('h4').attr('code') // 要减的商品的编号
                 $.each(goodsArr,function (index,item){
                   if (item.code === code) {
                       goodsArr[index].num=num;
                       localStorage.setItem('goods',JSON.stringify(goodsArr))
                     }
                   })
                 
        
             });
            
             $('#tot p u').text(goodsArr.length);
            // 商品移出购物车
            $('.list').on('click','li h4',function (){
                // 删除该商品对应的li
                $(this).parent().remove();
      
                // 更新本地存储中的数据
                var code = $(this).attr('code') // 要删除商品的编号
                // 删除数组元素：pop()  unshift()  splice(index,1)
                $.each(goodsArr,function (index,item){
                if (item.code === code) {
                    goodsArr.splice(index,1);
                    $('#tot p u').text(goodsArr.length);
                    return false
                  }
                })

                // 判断购物车是否还有数据
                if (goodsArr.length > 0) {
                // 更新本地数据
                localStorage.setItem('goods',JSON.stringify(goodsArr))
                } else {
                // 清除本地数据
                localStorage.removeItem('goods')
                $('#tot p u').text(0);
                $('#tot i u').text(0); 
                $('#tot h3 u').text(0);
                $('.al').prop('ckecked',false);
                var nodata = '<li class="no">购物车暂无数据！</li>'
                $('.list').html(nodata)
                }

                alert('商品移出购物车成功！')

            })
          
     }
     else {// 没数据
        var nodata = '<li class="no">购物车暂无数据！</li>'
        $('.list').html(nodata)
      }
      
     
})