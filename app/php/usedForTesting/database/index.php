<?php 
$IP_Adress = $_SERVER[REMOTE_ADDR];

echo $dateAndTime = date('Y-m-d H:i:s');

require_once('./connect.php');

$sql = "INSERT INTO `toDo` SET `Title`='testing todo insert',`time`='{$dateAndTime}',`ip`='{$IP_Adress}'";

$db->query($sql);
if($db->error){
  echo $db->error;
}else{
  echo "Submitted from  ".$IP_Adress;
}

?>
