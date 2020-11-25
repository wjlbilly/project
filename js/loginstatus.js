$(function(){
   var ID = $('.topbar-info .ID');
   if(!!localStorage.getItem('ID')){
       var txt =localStorage.getItem('ID')
       ID.text(`欢迎:${txt}`);
      ID.href ="javascript:disabled";
   }else{
    ID.text('登录');
   ID.href = "./login.html";
   }
   
})