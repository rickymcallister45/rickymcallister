<?php
$dbServername ="localhost";
$dbUsername = "newuser";
$dbPassword = "password";
$dbName = "testSoundboard";

$db = @new mysqli($dbServername, $dbUsername, $dbPassword, $dbName);

?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>rickyMcAllister</title>
    <link rel="stylesheet" type="text/css" href="soundboard.css">
      <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
  <h1>rickyMcAllister</h1>
    <div id="soundboard">
  
    <?php
        $sqlDisplay = "SELECT * FROM main ORDER BY timesPlayed DESC;";
        $displayResult = mysqli_query($db, $sqlDisplay);
        $displayCheck = mysqli_num_rows($displayResult);
        
      
      if($displayCheck > 0){
          $path    = '../../../files/mp3';
          $files = scandir($path); 
          $files = array_diff(scandir($path), array('.', '..'));
        
        echo "<script>
                $('.sounds').click(function() {
                  var name = $(this).text();
                  var audio = new Audio('../../../files/mp3/' + name + '.mp3');
                  console.log(name);
                    audio.play();
                });</script>";
            
           for($i=2; $i< count($files); $i++){
            $seperateTheFileAtTheDot = explode('.', $files[$i]);
            $file = $seperateTheFileAtTheDot[0];
            echo "<ul class='sounds'>".$file."</ul>";
            }
      }else{
        while($row = mysqli_fetch_assoc($displayResult)) {

            echo "<ul class='sounds'>
                    <form action='' method='POST' target='dirtyTrick'>
                      <input type='hidden' name='id' value='".$row['id']."'>
                      <input type='hidden' name='playCount' value='".$row['timesPlayed']."'>
                      <input type='submit' name='update' value='".$row['name']."'>
                    </form>
                  </ul>"; 
      }
        echo "<script type='text/javascript'>
                $('.sounds').click(function() {
                  var name = $(this).attr('value');
                  var audio = new Audio('../../../files/mp3/' + name + '.mp3');
                  console.log(name);
                    audio.play();
                });</script>";
     } 
      
      if(!empty($_POST['update'])) {
        
        $id = $_POST["id"];
        $timesPlayedPlusOne = $_POST["timesPlayed"]++;
        $sqlUpdate = "UPDATE `testSoundboard` SET `timesPlayed`='".$timesPlayedPlusOne."' WHERE `id`='".$id."';";
        
        $db->query($sqlUpdate);
         if($db->error){
            echo $db->error;
        }else{
            echo "statement fired";
        }
      }
         
    ?>
    
  </div>
  <iframe name="dirtyTrick" style="display:none;"></iframe>
</body>
<footer>

</footer>
</html>
