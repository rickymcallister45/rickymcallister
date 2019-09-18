<?php
$path    = '../../../files/mp3';
$files = scandir($path);
$files = array_diff(scandir($path), array('.', '..'));

foreach($sound as $files){
  echo "<ul class='sounds'>.$sound.</ul>";
}



print_r($files);
?>
