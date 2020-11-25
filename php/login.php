<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:text/html;charset=utf-8");
$responseDate = array("code"=>0,"massage"=>" ");
$phone = $_POST["phone"];
$upwd = $_POST["upwd"];
//做个简单得验证
//用户名不能为空
if(!$phone){
    $responseDate["code"]=1;
    $responseDate["massage"]="手机号不能为空";
    echo json_encode( $responseDate);
    exit;
}
//密码不能为空
if(!$upwd){
    $responseDate["code"]=2;
    $responseDate["massage"]="密码不能为空";
    echo json_encode( $responseDate);
      exit;
}
 $conn = mysqli_connect("localhost","root","","project-xm");

if(!$conn){
    $responseDate["code"]=3;
    $responseDate["massage"]="数据库连接失败";
    echo json_encode( $responseDate);
      exit;
}
mysqli_set_charset($conn,'utf8');


$sql = "select * from user where phone='$phone' and upwd ='$upwd'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);// 查询数据
if(!$row){
    $responseDate["code"]=4;
    $responseDate["massage"]="用户名或者密码错误";
    echo json_encode( $responseDate);
      
}else{
    $responseDate["massage"]="登录成功";
    echo json_encode( $responseDate);
    
}
   
?>