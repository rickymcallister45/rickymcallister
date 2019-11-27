<?php
// HELPER FUNCTIONS

function redirect($location) {
  header('LocationL $location');
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
                <a class='btn btn-primary' target='_blank' href='#'>Add to cart</a>
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


// BACKEND FUNCTIONS

?>
