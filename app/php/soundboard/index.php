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
</head>
<body>
  <h1>rickyMcAllister</h1>
    <div id="soundboard">
  
    <?php
        $sqlDisplay = "SELECT * FROM testSoundboard ORDER BY timesPlayed DESC";
        $displayResult = mysqli_query($db, $sqlDisplay);
        $displayCheck = mysqli_num_rows($displayResult);
      
      if($displayCheck > 0){
          while($row = mysqli_fetch_assoc($displayResult)) {
            echo "<ul class='sounds'>".$row['name']."</ul>";
         }
        
      }else{
        
      $path    = '../../../files/mp3';
      $files = scandir($path);
      $files = array_diff(scandir($path), array('.', '..'));
      
      for($i=0; $i< count($files); $i++){
      echo "<ul class='sounds'>".$files[$i + 2]."</ul>";
        }
      }  
    ?>
    
  </div>
</body>
<footer>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="soundboard.js"></script>
</footer>
</html>
