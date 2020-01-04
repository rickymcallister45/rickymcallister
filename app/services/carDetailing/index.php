<?php
include "../resources/head.php";
include "../resources/nav.php";
echo "<body>";
if($_SERVER['REQUEST_URI'] == '/app/services/carDetailing/index' || $_SERVER['REQUEST_URI'] == '/app/services/carDetailing/index.php') {
   include './php/carDetailing.php';
}
if(isset($_GET['contact'])) {
   include('../resources/contact.php');
}
include "../resources/footer.php";
echo "</body>";
?>
