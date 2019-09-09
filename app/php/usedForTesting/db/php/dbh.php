<?php

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "todo";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(mysqli_connect_errno()){
  echo "something went wrong dipshit";
}else{
  echo "database connected";
}


?>