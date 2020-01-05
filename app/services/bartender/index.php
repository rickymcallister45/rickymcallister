<?php
include "../resources/head.php";
include "../resources/nav.php";
echo "<body>";
if($_SERVER['REQUEST_URI'] == '/app/services/bartender/index' || $_SERVER['REQUEST_URI'] == '/app/services/bartender/index.php') {
   include './php/bartender.php';
}
if(isset($_GET['contact'])) {
   include('../resources/contact.php');
}
include "../resources/footer.php";
echo "</body>";
?>
