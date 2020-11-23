$(function(){
    // 获取数据
    $.ajax({
        url:'./data/goods.json',
        type:"get",
        dataType:"json",
        success:function(data){
          var goodsData='';
          $.each(data,function(index,ele){
              goodsData+=` <div class="goods">
                 <img src="${ele.imgurl}" alt="">
                 <p>${ele.price}元</p>
                  <h1>${ele.title}</h1>
                  <span code="${ele.code}">加入购物车</span>
          </div>`
          }) 
          $('.content').html(goodsData);
        },
        error:function(data){
          console.log(data);
        }
    });
    //点击加入购物车 用事件委托的形式
    $('.content').on("click"," .goods span",function(){
        console.log(1);
        //获取当前单击商品的编号
         var code = $(this).attr("code");

         //localStorage 存储方式 key = value
          // 形式goods = [{code:'abc1',num:1},{code:'abc2',num:2}]
     // 判断有没有数据
     if(localStorage.getItem('goods')){
         //又数据把数据取出来 转为对象
          var goodsArr = JSON.parse(localStorage.getItem('goods'));
     }else{
         var goodsArr =[];
     }
     //判断所选商品是否在其中 在其中num+1
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
})