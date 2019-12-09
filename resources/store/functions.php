<?php
// HELPER FUNCTIONS

function lastOrderId() {
  global $connection;
  return mysqli_insert_id($connection);
}

function set_message($message) {
  if(!empty($message)) {
    $_SESSION['message'] = $message;
  }else{
    $message = "";
  }
}

function display_message() {
  if(isset($_SESSION['message'])) {
    echo $_SESSION['message'];
    unset($_SESSION['message']);
  }
}

function redirect($location) {
  return header("Location: $location ");
}

function query($sql) {
  global $connection;
  return mysqli_query($connection, $sql);
}

function confirm($result) {
  global $connection;
  if(!$result) {
    die('Query Failed ' . mysqli_error($connection));
  }
}

function escape_string($string) {
  global $connection;
  return mysqli_real_escape_string($connection, $string);
}

function fetch_array($result) {
  return mysqli_fetch_array($result);
}

// FRONTEND FUNCTIONS

function get_products() {
  $query = query('SELECT * FROM products');
  confirm($query);
  while($row = fetch_array($query)) {
    echo "<div class='col-sm-4 col-lg-4 col-md-4'>
            <div class='thumbnail'>
              <a href='./item.php?id={$row['product_id']}'><img src='{$row['product_image']}' alt='{$row['product_title']}'></a>
              <div class='caption'>
                <h4 class='pull-right'>&#36;{$row['product_price']}</h4>
                <h4><a href='./item.php?id={$row['product_id']}'>{$row['product_title']}</a></h4>
                <p>{$row['product_short_description']}</p>
                <a class='btn btn-primary' target='_blank' href='./frontEnd/cart.php?add={$row{'product_id'}}'>Add to cart</a>
              </div>
            </div>  
          </div>";
  }
}

function get_categories() {
  $query = query('SELECT * FROM categories');
  confirm($query);
  while($row = fetch_array($query)) {
    echo "<a href='./category.php?id={$row['category_id']}' class='list-group-item'>{$row['category_title']}</a>";
  }
}

function get_products_on_category_page() {
  $query = query("SELECT * FROM products WHERE product_category_id = " . escape_string($_GET['id']) . "");
  confirm($query);
  while($row = fetch_array($query)) {
    echo "<div class='row text-center'>
            <div class='col-md-3 col-sm-6 hero-feature'>
              <div class='thumbnail'>
                <img src='{$row['product_image']}' alt='{$row['product_title']}'>
                  <div class='caption'>
                    <h3>{$row['product_title']}</h3>
                    <p>{$row['product_short_description']}</p>
                    <p>
                      <a href='#' class='btn btn-primary'>Buy Now!</a>
                      <a href='./item.php?id={$row['product_id']}' class='btn btn-default'>More Info</a>
                    </p>
                  </div>
                </div>
            </div>";
  }
}

function get_products_on_shop_page() {
  $query = query("SELECT * FROM products");
  confirm($query);
  while($row = fetch_array($query)) {
    echo "<div class='row text-center'>
            <div class='col-md-3 col-sm-6 hero-feature'>
              <div class='thumbnail'>
                <img src='{$row['product_image']}' alt='{$row['product_title']}'>
                  <div class='caption'>
                    <h3>{$row['product_title']}</h3>
                    <p>{$row['product_short_description']}</p>
                    <p>
                      <a href='#' class='btn btn-primary'>Buy Now!</a>
                      <a href='./item.php?id={$row['product_id']}' class='btn btn-default'>More Info</a>
                    </p>
                  </div>
                </div>
            </div>";
  }
}

function login_user() {
  if(isset($_POST['submit'])) {
    $username = escape_string($_POST['username']);
    $password = escape_string($_POST['password']);
    
    $query = query("SELECT * FROM users WHERE user_name = '{$username}' AND user_password = '{$password}'");
    confirm($query);
    
    if(mysqli_num_rows($query) == 0) {
      
      redirect('./login.php');
    }else{
      $_SESSION['username'] = $username;
      redirect('./admin/index.php');
    }
  }
}

function send_message() {
  if(isset($_POST['submit'])){
    $to        = 'rickymcallister45@gmail.com';
    $from_name = escape_string($_POST['name']);
    $subject   = escape_string($_POST['subject']);
    $email     = escape_string($_POST['email']);
    $message   = escape_string($_POST['message']);
  
    $headers = "From: {$from_name} {$email}";
  
    $result = mail($to, $subject, $headers);
    
    if(!result) {
      set_message("Error email not sent!!");
      redirect('./contact.php');
    }else{
      set_message("Message sent");
      redirect('./contact.php');
    }
  }  
}


// BACKEND FUNCTIONS

function displayOrders() {
  $displayOrdersQuery = query('SELECT * FROM orders');
  confirm($displayOrdersQuery);
  
  while($row = fetch_array($displayOrdersQuery)) {
    echo "<tr>
            <td>{$row['order_id']}</td>
            <td>{$row['order_ammount']}</td>
            <td>{$row['order_transaction']}</td>
            <td>{$row['order_currency']}</td>
            <td>{$row['order_status']}</td>
            <td>
              <a class='btn btn-danger' href='../backEnd/deleteOrders.php?id={$row['order_id']}'>
                <span class-'glyphicon glyphicon-remove'></span>
              </a>
            </td>
          </tr>";
  }
}

function adminGetProducts() {
  $adminGetProductsQuery = query("SELECT * FROM products");
  confirm($adminGetProductsQuery);
  
  while($row = fetch_array($adminGetProductsQuery)) {
    echo "<tr>
              <td>{$row['product_id']}</td>
              <td>{$row['product_title']}<br>
                <a href='index.php?editProduct&id={$row['product_id']}'><img src='{$row['product_image']}' alt='{$row['product_title']}'></a>
              </td>
              <td>Category</td>
              <td>{$row['product_price']}</td>
              <td>{$row['product_quantity']}</td>
              <td>
                <a class='btn btn-danger' href='../backEnd/deleteProducts.php?id={$row['product_id']}'>
                  <span class-'glyphicon glyphicon-remove'></span>
                </a>
            </td>
            </tr>";    
  }
}

function adminAddProduct() {
  if(isset($_POST['publish'])) {
    $productInventoryCode    = escape_string($_POST['product_inventory_code']);
    $productTitle            = escape_string($_POST['product_title']);
    $productCategoryId       = escape_string($_POST['product_category_id']);
    $productPrice            = escape_string($_POST['product_price']);
    $productQuantity         = escape_string($_POST['product_quantity']);
    $productLimitReached     = escape_string($_POST['product_limit_reached']);
    $productWeight           = escape_string($_POST['product_weight']);
    $productDescription      = escape_string($_POST['product_description']);
    $productShortDescription = escape_string($_POST['product_short_description']);
    $productImage            = escape_string($_FILES['file']['name']);
    $productImageTemp        = escape_string($_FILES['file']['tmp_name']);
    $productImageLarge       = escape_string($_FILES['file']['name']);
    $productImageLargeTemp   = escape_string($_FILES['file']['tmp_name']);
    
    move_uploaded_file($productImageTemp, "../uploads/" . $productImage);
    
    $createNewProductQuery = query("INSERT INTO products(product_inventory_code, product_title, product_category_id, product_price, product_quantity, product_limit_reached, product_weight, product_description, product_short_description, product_image, product_image_large) 
                                                  VALUES('{$productInventoryCode}', '{$productTitle}', '{$productCategoryId}', '{$productPrice}', '{$productQuantity}', '{$productLimitReached}', '{$productWeight}', '{$productDescription}', '{$productShortDescription}', '{$productImage}', '{$productImageLarge}')");
    confirm($createNewProductQuery);
    set_message("Upload Successful");
    redirect("./index.php?products");
  }  
}

function adminAddCategory() {
  
  $adminAddCategoryQuery = query('SELECT * FROM categories');
  confirm($adminAddCategoryQuery);
  while($row = fetch_array($query)) {
    echo "<option value='{$row['category_id']}'>{$row['category_title']}</option>";
  }
}

?>
