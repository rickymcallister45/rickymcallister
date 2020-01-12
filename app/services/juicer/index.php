<?php
include "../resources/head.php";
include "../resources/nav.php";
echo "<body>";
if($_SERVER['REQUEST_URI'] == '/app/services/juicer/index' || $_SERVER['REQUEST_URI'] == '/app/services/juicer/index.php') {
   include './php/juiceBase.php';
}
if(isset($_GET['contact'])) {
   include('../resources/contact.php');
}
include "../resources/footer.php";
echo "</body>";
?>
