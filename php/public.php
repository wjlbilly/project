<?php 
// 处理中文
header("Content-Type:text/html;charset=utf-8");
        function getConnect($sql){
        //连接数据源
        $conn = mysqli_connect("localhost","root","","project-xm");
        //判断是否连接成功
        if(!$conn){
            die('连接失败：'.mysqli_connect_error());
        }
        //设置字符编码
        
            // mysqli_query($conn,"set names utf8");
                mysqli_set_charset($conn,'utf8');
        // 自定义sql 语句
        //执行结果
            $result = mysqli_query($conn,$sql);
            // $num = mysqli_affected_rows($conn); 影响得条数
            return $result;
        }




?>