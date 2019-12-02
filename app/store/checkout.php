<?php
include_once '../../resources/store/config.php';
include_once './cart.php';
include_once 'frontEnd/header.php';
include_once 'frontEnd/topNav.php';

if(isset($_SESSION['product_1'])) {
        echo $_SESSION[product_1];
}

echo "<body>
        <!-- Page Content -->
          <div class='container'>
           
            <div class='row'>
              <h4 class='text-center bg-danger'>";
display_message();
        echo "</h4>  
              <h1>Checkout</h1>
                <form action=''>
                  <table class='table table-striped'>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub-total</th>
                      </tr>
                    </thead>
                    <tbody>";
cart();
                /*      <tr>
                        <td>apple</td>
                        <td>$23</td>
                        <td>3</td>
                        <td>2</td>
                        <td><a href='./cart.php?remove=1'>Remove</a></td>
                        <td><a href='./cart.php?delete=1'>Delete</a></td>
                      </tr>
                   */   
             echo "</tbody>
                  </table>
                </form>
                
<!--  ***********CART TOTALS*************-->
            
            <div class='col-xs-4 pull-right'>
              <h2>Cart Totals</h2>
                <table class='table table-bordered' cellspacing='0'>
                  <tbody>
                    <tr class='cart-subtotal'>
                      <th>Items:</th>
                      <td><span class='amount'>4</span></td>
                    </tr>
                    <tr class='shipping'>
                      <th>Shipping and Handling</th>
                      <td>Free Shipping</td>
                    </tr>
                    <tr class='order-total'>
                      <th>Order Total</th>
                      <td><strong><span class='amount'>$3444</span></strong> </td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
          
          
        </div>
      </body>";
      
include_once 'frontEnd/footer.php';
?>
