<?php
include_once '../../resources/store/test.php';
include_once 'frontEnd/header.php';
echo "<body>";
        include_once 'frontEnd/topNav.php';
echo "<!-- Page Content -->
       <div class='container'>
         <!-- Page Features -->";
        
get_products_on_shop_page();

echo " </div>
        </div>";

include_once 'frontEnd/footer.php';
echo "</body>";
?>
