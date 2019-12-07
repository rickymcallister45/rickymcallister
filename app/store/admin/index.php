<?php
include_once '../../../resources/store/config.php';
include_once '../backEnd/header.php';

   echo "<div id='page-wrapper'>
           <div class='container-fluid'>
             <!-- Page Heading -->
               <div class='row'>
                 <div class='col-lg-12'>
                   <h1 class='page-header'>
                     Dashboard <small>Statistics Overview</small>
                   </h1>
                   <ol class='breadcrumb'>
                     <li class='active'>
                       <i class='fa fa-dashboard'></i> Dashboard
                     </li>
                   </ol>
                 </div>
               </div>
             <!-- /.row -->";
echo $_SERVER['REQUEST_URI'];

if($_SERVER['REQUEST_URI'] == 'app/store/admin/' || $_SERVER['REQUEST_URI'] == 'app/store/admin/index.php') {
   include '../backEnd/adminPageContent.php';
}

if(isset($_GET['orders'])) {
   include('../backEnd/orders.php');
}
   
   echo "</div>
         <!-- /.container-fluid -->
       </div>
       <!-- /#page-wrapper -->
     </div>
     <!-- /#wrapper -->";

include_once '../backEnd/footer.php';   

?>
