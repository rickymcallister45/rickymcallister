<?php 
$IP_Adress = $_SERVER[REMOTE_ADDR];

echo $dateAndTime = date('Y-m-d H:i:s');

require_once('./connect.db.php');

$sql = "INSERT INTO `toDo` SET `title`='testing todo insert',`time`='{$dateAndTime}',`ip`='{$IP_Adress}'";

$db->query($sql);
if($db->error){
  echo $db->error;
}else{
  echo "Submitted from  ".$IP_Adress;
}

?>

/*

  9:05 //delete lines 7 through here 

if(!empty($_POST['submit'])) {
    $sql = "INSERT INTO `toDo` SET `title`='{$_POST['title']}', `time`='{$dateAndTime}', `ip`='$IP_Adress'";

$db->query($sql);
if($db->error){
  echo $db->error;
}else{
  echo "Submitted from  ".$IP_Adress;
}


}

?>

<form action="" method="POST">
  TASK: <input name='title' type='text' value=''/><br/>
  <input name='submit' type='submit' value='submit'/>
</form>


*/
