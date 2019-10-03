<?php 
    $sqlTableVariable = "toDo";

    $IP_Adress = $_SERVER[REMOTE_ADDR];
    $dateAndTime = date('Y-m-d H:i:s');
echo "<div id='info'>Your IP Adress is ".$IP_Adress."</div>";

require_once('./connect.db.php');


if(!empty($_POST['submit'])) {
    $_POST['title'] = addslashes($_POST['title']); 
    $sql = "INSERT INTO `{$sqlTableVariable}` SET `title`='{$_POST['title']}', `time`='{$dateAndTime}', `ip`='$IP_Adress', `status`='open';";

$db->query($sql);
if($db->error){
  echo $db->error;
}else{
   header("Location: ./index.php");
    }
}

?>
<!doctype html>

<html>
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>RickyMcAllister</title>
      <link rel="stylesheet" href="style.css">
    
  </head>

  <body>
      <hr>
      <h1 id="headerLink"><a href="http://rickymcallister.com/">RickyMcAllister.com</a></h1>
      <hr>
    <form id='inputForm' action="" method="POST">
    <input id='titleInput' name='title' type='text' value=''/>
    <input id='submitButton' name='submit' type='submit' value='submit'/>
</form>
  
<?php

    $sqlDisplay = "SELECT * FROM {$sqlTableVariable} ORDER BY status DESC";
    $displayResult = mysqli_query($db, $sqlDisplay);
    $displayCheck = mysqli_num_rows($displayResult);

    if($displayCheck > 0) {
        while($row = mysqli_fetch_assoc($displayResult)) {
            echo "<div class='".$row['status']." items'><p id='task'>".$row['title']."</p></div>
            <div id='statusForm'><form action='' method='POST'><input type='hidden' name='id' value='".$row["id"]."'>
            <input class='updateButton' name='status' type='submit' value='done'/></form></div><br>";   
        }
    }

    if($_POST['status']) {
        $id = $_POST["id"];
        $sqlUpdate = "UPDATE `{$sqlTableVariable}` SET `status`='done' WHERE `id`='".$id."';";
    
        $db->query($sqlUpdate);

       if($db->error){
            echo $db->error;
       }else{
            header("Location: ./index.php");
        }
    }

?>
  </body>
</html>

