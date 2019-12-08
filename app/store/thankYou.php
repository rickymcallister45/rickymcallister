<?php
include_once '../../resources/store/test.php';
include './frontEnd/cart.php';
include_once 'frontEnd/header.php';

processTransactions();

echo "<body>";
        include_once 'frontEnd/topNav.php';
        echo "<!-- Page Content -->
          <div class='container'>
            <div class='row'>
              <!-- Side Nav -->";
                include_once 'frontEnd/sideNav.php';
         echo "<div class='col-md-9'>
                 <h1 class='text-center'>THANK YOU!!</h1>
               </div>
          </div>
    </div>";

include_once 'frontEnd/footer.php';

echo "</body>";
?>
