<?php 

echo $dateAndTime = date('Y-m-d H:i:s');

require_once('./connect.php');

$sql = "INSERT INTO `message` SET `userName`='RickyMcAllister',`postTime`='{$dateAndTime}',`message`='Content of message'";

$db->query($sql);
if($db->error){
  echo $db->error;
}else{
  echo "Submitted";
}

?>
