<?php
// HELPER FUNCTIONS

function redirect($location) {
  header('LocationL $location');
}

function query($sql) {
  global $connection;
  return mysqli_query($conncection, $sql);
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
              <img src='http://placehold.it/320x150' alt='>
              <div class='caption'>
                <h4 class='pull-right'>$24.99</h4>
                <h4><a href='product.html'>First Product</a></h4>
                <p>See more snippets like this online store item at <a target='_blank' href='#'>Bootsnipp - http://bootsnipp.com</a>.</p>
              </div>
            </div>  
          </div>";
  }
}


// BACKEND FUNCTIONS

?>
