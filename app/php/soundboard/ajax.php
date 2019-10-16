<?php

$id = $_POST["id"];
        $sqlUpdate = "UPDATE `testSoundboard` SET `timesPlayed`='+1' WHERE `id`='".$id."';";
    
        $db->query($sqlUpdate);
        if($db->error){
            echo $db->error;
        }else{
           header("Location: ./index.php");
        }

?>
