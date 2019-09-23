<?php 
    $sqlTableVariable = "toDo";

    $IP_Adress = $_SERVER[REMOTE_ADDR];
    $dateAndTime = date('Y-m-d H:i:s');
echo "<div id='info'>Your IP Adress is ".$IP_Adress."     And the current Date Time IS".$dateAndTime."</div>";

require_once('./connect.db.php');


if(!empty($_POST['submit'])) {
    $_POST['title'] = addslashes($_POST['title']); 
    $sql = "INSERT INTO `{$sqlTableVariable}` SET `title`='{$_POST['title']}', `time`='{$dateAndTime}', `ip`='$IP_Adress', `status`='open';";

$db->query($sql);
if($db->error){
  echo $db->error;
}else{
  echo "Submitted from  ".$IP_Adress;
    }
}

?>

<form id='inputForm' action="" method="POST">
    <input id='titleInput' name='title' type='text' value=''/>
    <input id='submitButton' name='submit' type='submit' value='submit'/>
</form>
  
<?php

    $sqlDisplay = "SELECT * FROM {$sqlTableVariable}";
    $displayResult = mysqli_query($db, $sqlDisplay);
    $displayCheck = mysqli_num_rows($displayResult);

    if($displayCheck > 0) {
        while($row = mysqli_fetch_assoc($displayResult)) {
            echo "<div class='".$row['status']." items'>".$row['title']."<input class='updateButton' name='status' type='submit' value='done'/><br>";   
        }
    }

    if(!empty($_POST['status'])) {
        $sqlUpdate = "UPDATE INTO `{$sqlTableVariable}` SET `status`='done'";
    
        $db->query($sqlUpdate);

        if($db->error){
            echo $db->error;
        }else{
            echo "     Submitted from  ".$IP_Adress;
        }
}

?>
