<?php
include_once '../../resources/store/test.php';
include_once 'frontEnd/header.php';

if(isset($_GET['tx'])) {
        $ammount = $_GET['amt'];
        $currency = $_GET['cc'];
        $transaction =$_GET['tx'];
        $status = $_GET['st'];
        
        $query = query("INSERT INTO orders (order_amount, order_transaction, order_status, order_currency)
                                      VALUES('{$ammount}', '{$transaction}', '{$status}', '{$currency}')");
        confirm($query);
        
        session_destroy();
        
}else{
        redirect('./index.php');
} 

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
