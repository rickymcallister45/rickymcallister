<?php

$folderName = $_SERVER['REQUEST_URI'];
$regexForDirectoryName = "/(\/app\/services\/)(.*)(\/index)/";
preg_match($regexForDirectoryName, $folderName, $matches);
$navItemName = json_encode($matches['2']);


include "../resources/head.php";
include "../resources/nav.php";
echo "<body>";
if($_SERVER['REQUEST_URI'] == '/app/services/{$navItemName}/index' || $_SERVER['REQUEST_URI'] == '/app/services/{$navItemName}/index.php') {
   include './php/{$navItemName}.php';
}
if(isset($_GET['contact'])) {
   include('../resources/contact.php');
}
include "../resources/footer.php";
echo "</body>";
?>

