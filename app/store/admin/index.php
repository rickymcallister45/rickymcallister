<?php
include_once '../../../resources/store/config.php';
include_once '../backEnd/header.php';

   echo "<div id='page-wrapper'>
           <div class='container-fluid'>;
             
echo $_SERVER['REQUEST_URI'];

if($_SERVER['REQUEST_URI'] == 'app/store/admin/' || $_SERVER['REQUEST_URI'] == 'app/store/admin/index.php') {
   include '../backEnd/adminDashboardContent.php';
}

if(isset($_GET['orders'])) {
   include('../backEnd/adminOrders.php');
}
   
   echo "</div>
         <!-- /.container-fluid -->
       </div>
       <!-- /#page-wrapper -->
     </div>
     <!-- /#wrapper -->";

include_once '../backEnd/footer.php';   

?>
