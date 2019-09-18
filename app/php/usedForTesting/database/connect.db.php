<?php

$dbServername ="localhost";
$dbUsername = "username";
$dbPassword = "Swordfish";
$dbName = "loginsystem";

$db = @new mysqli($dbServername, $dbUsername, $dbPassword, $dbName);

if($db->connect_error){
  echo $db->connect_error;
}

echo "Connection Successful";

?>
