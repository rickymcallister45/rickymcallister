<?php

include "../resources/head.php";
include "../resources/nav.php";

echo "<body>";

if($_SERVER['REQUEST_URI'] == '/app/services/alterations/index' || $_SERVER['REQUEST_URI'] == '/app/services/alterations/index.php') {
   include './php/alteratiions.php';
}

if(isset($_GET['contact'])) {
   include('../resources/contact.php');
}


include "../resources/footer.php";

echo "</body>";


?>

