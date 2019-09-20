<?php
$path    = '../../files/mp3';
$files = scandir($path);
$files = array_diff(scandir($path), array('.', '..'));
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
  for($i=0; $i< count($files); $i++){
  echo "<ul class='sounds'>".$files[$i]."</ul>";
}
  ?>
  
  
  
  </div>

</body>
<footer>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
      <script src="soundboard.js"></script>
    
    </script>
</footer>
</html>

