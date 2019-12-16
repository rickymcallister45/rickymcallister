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
                      <a href='./frontEnd/cart.php?id={$row['product_id']}' class='btn btn-primary'>Add to Cart</a>
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
                      <a href='./frontEnd/cart.php?add={$row['product_id']}' class='btn btn-primary'>Add to Cart</a>
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
    $category = adminShowProductCategory($row['product_category_id']);
    echo "<tr>
              <td>{$row['product_id']}</td>
              <td>{$row['product_title']}<br>
                <a href='index.php?editProduct&id={$row['product_id']}'><img  width='100' src='../{$row['product_image']}' alt='{$row['product_title']}'></a>
              </td>
              <td>{$category}</td>
              <td>{$row['product_price']}</td>
              <td>{$row['product_quantity']}</td>
              <td>
                <a class='btn btn-danger' href='../backEnd/deleteProducts.php?id={$row['product_id']}'>
                  <span class='glyphicon glyphicon-remove'></span>
                </a>
            </td>
          </tr>";    
  }
}

function adminShowProductCategory($product_category_id) {
  $showProductCategoryQuery = query("SELECT * FROM categories WHERE category_id = '{$product_category_id}'");
  confirm($showProductCategoryQuery);
  
  while($category_row = fetch_array($showProductCategoryQuery)) {
    return $category_row['category_title'];
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
    $productImageLarge       = escape_string($_FILES['fileImageLarge']['name']);
    $productImageLargeTemp   = escape_string($_FILES['fileImageLarge']['tmp_name']);
    
    move_uploaded_file($productImageTemp, "../../../app/store/img/" . $productImage);
    
    $createNewProductQuery = query("INSERT INTO products(product_inventory_code, product_title, product_category_id, product_price, product_quantity, product_limit_reached, product_weight, product_description, product_short_description, product_image, product_image_large) 
                                                  VALUES('{$productInventoryCode}', '{$productTitle}', '{$productCategoryId}', '{$productPrice}', '{$productQuantity}', '{$productLimitReached}', '{$productWeight}', '{$productDescription}', '{$productShortDescription}', './img/{$productImage}', './img/{$productImageLarge}')");
    confirm($createNewProductQuery);
    set_message("Upload Successful");
    redirect("./index.php?products");
  }  
}

function adminAddCategory() {
  
  $adminAddCategoryQuery = query("SELECT * FROM categories");
  confirm($adminAddCategoryQuery);
  while($row = fetch_array($adminAddCategoryQuery)) {
    echo "<option value='{$row['category_id']}'>{$row['category_title']}</option>";
  }
}

function adminEditProduct() {
  if(isset($_POST['update'])) {
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
    $productImageLarge       = escape_string($_FILES['fileImageLarge']['name']);
    $productImageLargeTemp   = escape_string($_FILES['fileImageLarge']['tmp_name']);
    
    if(empty($productImage)) {
      $getImage = query("SELECT product_image FROM products WHERE product_id =" . escape_string($_GET['id']) . " ");
      confirm($getImage);
      
      while($imageReceived = fetch_array($getImage)) {
       $productImage = $imageReceived['product_image'];
      }
    }
    
    if(empty($productImageLarge)) {
      $getImageLarge = query("SELECT product_image_large FROM products WHERE product_id =" . escape_string($_GET['id']) . " ");
      confirm($getImageLarge);
      
      while($imageLargeReceived = fetch_array($getImageLarge)) {
       $productImageLarge = $imageLargeReceived['product_image'];
      }
    }
    
    move_uploaded_file($productImageTemp, "../img/" . $productImage);
    
    $updateProductQuery = "UPDATE products SET ";
    $updateProductQuery .= "product_inventory_code     ='{$productInventoryCode}'     , ";
    $updateProductQuery .= "product_title              ='{$productTitle}'             , ";
    $updateProductQuery .= "product_category_id        ='{$productCategoryId}'        , ";
    $updateProductQuery .= "product_price              ='{$productPrice}'             , ";
    $updateProductQuery .= "product_quantity           ='{$productQuantity}'          , ";
    $updateProductQuery .= "product_limit_reached      ='{$productLimitReached}'      , ";
    $updateProductQuery .= "product_weight             ='{$productWeight}'            , "; 
    $updateProductQuery .= "product_description        ='{$productDescription}'       , ";
    $updateProductQuery .= "product_short_description  ='{$productShortDescription}'  , ";
    $updateProductQuery .= "product_image              ='{$productImage}'             , ";
    $updateProductQuery .= "product_image_large        ='{$productImageLarge}'        , ";
    $updateProductQuery .= " WHERE product_id=" . escape_string($_GET['id']);
    
    $sendUpdateQuery = query($updateProductQuery);
    confirm($sendUpdateQuery);
    set_message("Upload Successful");
    redirect("./index.php?products");
  }  
}

function adminShowCategories() {
  $selectAllCategoriesQuery = query("SELECT * FROM categories");
  confirm($selectAllCategoriesQuery);
  
  while($row = fetch_array($selectAllCategoriesQuery)) {
    $categoryId = $row['category_id'];
    $categoryTitle = $row['category_title'];
    
    echo "<tr>
            <td>{$categoryId}</td>
            <td>{$categoryTitle}</td>
            <td>
              <a class='btn btn-danger' href='../backEnd/deleteCategory.php?id={$categoryId}'>
                <span class='glyphicon glyphicon-remove'></span>
              </a>
            </td>
          </tr>";
    }
  }

function addCategory() {
  if(isset($_POST['add_category'])) {
    $categoryTitle = escape_string($_POST['category_title']);
    $addCategory = query("INSERT INTO categories(category_title) VALUES('{$categoryTitle}')");
    confirm($addCategory);
    redirect("./index.php?categories");
    
  }
}

function adminShowUsers() {
  $selectAllUsersQuery = query("SELECT * FROM users");
  confirm($selectAllUsersQuery);
  
  while($row = fetch_array($selectAllUsersQuery)) {
    $userId = $row['user_id'];
    $userName = $row['user_name'];
    $userEmail = $row['user_email'];
    $userImage = $row['user_image'];
        
    echo "<tr>
          <td>{$userId}</td>
          <td>{$userName}</td>
          <td>{$userEmail}</td>
          <td>
            <a class='btn btn-danger' href='../backEnd/deleteUser.php?id={$userId}'>
              <span class='glyphicon glyphicon-remove'></span>
            </a>
          </td>
          </tr>";
  }
}

function adminAddUser() {
  if(isset($_POST['add_user'])) {
    $addUsername      = escape_string($_POST['username']);
    $addEmail         = escape_string($_POST['email']);
    $addPassword      = escape_string($_POST['password']);
    $addUserPhoto     = escape_string($_FILES['file']['name']);
    $addUserPhotoTemp = escape_string($_FILES['file']['tmp']);
    
    move_uploaded_file($addUserPhotoTemp, "../img/" . $addUserPhoto);
    
    $addUserQuery = query("INSERT INTO users (user_name, user_email, user_password, user_photo) 
                                      VALUES ('{$addUsername}', '{$addEmail}', '{$addPassword}', '{$addUserPhoto}')");
    confirm($addUserQuery);
    redirect("./index.php?users");
  }
}

function adminGetReports() {
  $adminGetReportsQuery = query("SELECT * FROM reports");
  confirm($adminGetReportsQuery);
  
  while($row = fetch_array($adminGetReportsQuery)) {
    
    echo "<tr>
              <td>{$row['report_id']}</td>
              <td>{$row['report_product_id']}</td>
              <td>{$row['report_order_id']}</td>
              <td>{$row['report_product_title']}</td>
              <td>{$row['report_product_price']}</td>
              <td>{$row['report_product_quantity']}</td>
              <td>
                <a class='btn btn-danger' href='../backEnd/deleteReport.php?id={$row['report_id']}'>
                  <span class='glyphicon glyphicon-remove'></span>
                </a>
            </td>
          </tr>";    
  }
}

function countOrders(){
  $adminCountOrdersQuery = query("SELECT * FROM reports");
  confirm($adminCountOrdersQuery);
  $orderCount = mysqli_num_rows($adminCountOrdersQuery);
}

function countProducts() {
  $admincountProductsQuery = query("SELECT * FROM reports");
  confirm($admincountProductsQuery);
  $productCount = mysqli_num_rows($admincountProductsQuery);
}

function countCategories() {
  $admincountCategoriesQuery = query("SELECT * FROM reports");
  confirm($admincountCategoriesQuery);
  $categoryCount = mysqli_num_rows($admincountCategoriesQuery);
}

function getSlides() {
  $getSlidesQuery = query("SELECT * FROM slides");
  confirm($getSlidesQuery);
  
  while($row = fetch_array($getSlidesQuery)) {
    echo "<div class='item'>
            <img class='slide-image' src='{$row['slide_image']}' alt='{$row['slide_title']}'>
          </div>";
  }
}

function getActiveSlide() {
  $getSlideActiveQuery = query("SELECT * FROM slides ORDER BY slide_id DESC LIMIT 1");
  confirm($getSlideActiveQuery);
  
  while($row = fetch_array($getSlideActiveQuery)) {
    echo "<div class='item active'>
            <img class='slide-image' src='{$row['slide_image']}' alt='{$row['slide_title']}'>
          </div>";
  }
}  

/*
  
function addSlides() {}

function getCurrentSlide() {}



function getSlideThumbnail() {}
*/
?>
