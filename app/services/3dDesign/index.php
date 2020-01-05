<?php
include "../resources/head.php";
include "../resources/nav.php";
echo "<body>";
if($_SERVER['REQUEST_URI'] == '/app/services/3dDesign/index' || $_SERVER['REQUEST_URI'] == '/app/services/3dDesign/index.php') {
   include './php/3dDesign.php';
}
if(isset($_GET['contact'])) {
   include('../resources/contact.php');
}
include "../resources/footer.php";
echo "</body>";
?>
