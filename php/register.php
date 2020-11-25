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

//连接数据库
 $conn = mysqli_connect("localhost","root","",'project-xm');

if(!$conn){
    $responseDate["code"]=3;
    $responseDate["massage"]="数据库连接失败";
    echo json_encode( $responseDate);
      exit;
}
//设置字符编码
mysqli_set_charset($conn,'utf8'); 
//查询数据
// 验证用户名是否存在
$sql1 = "select * from user where phone='$phone'";
$result1 = mysqli_query($conn,$sql1);

// 获取数据 判断手机号是否存在
$row = mysqli_fetch_assoc($result1);
if($row){
    $responseDate["code"]=4;
    $responseDate["massage"]="手机号也存在";
    echo json_encode( $responseDate);
      exit;
}
//插入数据
//加密操作
/*  $str =md5(($upwd)."xxx");
$sql2 = "insert into user (uname,upwd) values ('$name','$str')"; */

$sql2 = "insert into user (phone,upwd) values ('$phone','$upwd')";
$result2 = mysqli_query($conn,$sql2);

if(!$result2){
    $responseDate["code"]=5;
    $responseDate["massage"]="注册失败";
    echo json_encode( $responseDate);
}else{
    $responseDate["code"]=0;
    $responseDate["massage"]="注册成功";
    echo json_encode( $responseDate);

}
mysqli_close($conn);
?>