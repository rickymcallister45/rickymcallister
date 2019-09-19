<?php
$path    = '../../../files/mp3';
$files = scandir($path);
$files = array_diff(scandir($path), array('.', '..'));

print_r($files);
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
  for($i=2; $i< $files; $i++){
  echo "<ul class='sounds'>".$files[$i]."</ul>";
}
  ?>
  
  
  
  </div>

</body>
<footer>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script type="text/javascript">
      $('.sounds').click(function() {
        var name = $(this).text();
        var audio = new Audio('../../../files/mp3/' + name + ".mp3"');
        console.log(name);
        audio.play();
        
            });
    
    </script>
</footer>
</html>

