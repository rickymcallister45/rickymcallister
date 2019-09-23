<?php 
    $sqlTableVariable = "toDo";

    $IP_Adress = $_SERVER[REMOTE_ADDR];
    $dateAndTime = date('Y-m-d H:i:s');
echo "Your IP Adress is ".$IP_Adress."     And the current Date Time IS".$dateAndTime;

require_once('./connect.db.php');


if(!empty($_POST['submit'])) {
    $_POST['title'] = addslashes($_POST['title']); 
    $sql = "INSERT INTO `{$sqlTableVariable}` SET `title`='{$_POST['title']}', `time`='{$dateAndTime}', `ip`='$IP_Adress'";

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
  
<?php

    $sqlDisplay = "SELECT * FROM {$sqlTableVariable}";
    $displayResult = mysqli_query($db, $sqlDisplay);
    $displayCheck = mysqli_num_rows($displayResult);

    if($displayCheck > 0) {
        while($row = mysqli_fetch_assoc($displayResult)) {
            echo $row['title']."<br>";   
        }
    }

?>
