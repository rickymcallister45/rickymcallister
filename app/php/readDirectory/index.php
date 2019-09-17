<?php

$path    = '../../../files/mp3';
$files = scandir($path);

$files = array_diff(scandir($path), array('.', '..'));

var_dump($files);


?>
