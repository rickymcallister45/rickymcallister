<?php
include "../resources/head.php";
include "../resources/nav.php";
echo "<body>";
if($_SERVER['REQUEST_URI'] == '/app/services/3dmodeling/index' || $_SERVER['REQUEST_URI'] == '/app/services/3dmodeling/index.php') {
   include './php/3dmodeling.php';
}
if(isset($_GET['contact'])) {
   include('../resources/contact.php');
}
include "../resources/footer.php";
echo "</body>";
?>