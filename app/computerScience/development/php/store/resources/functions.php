<?php

// helper functions

function redirect() {
  header("Location: $location ");
}

function query($sql) {
  global $connection;
    return mysqli_query($connection, $sql);
}

function confirm($result) {
  if(!result) {
    die("Query failed!" . mysqli_error($connection));
  }
}

function escape_string($string) {
  global $connection;
    return mysqli_real_escape_string($connection, $string);
}

function fetch_array($result) {
  
  return myswli_fetch_array($send_query);
}



/**********************FRONT END FUNCTIONS********************/

// GET PRODUCTS

function get_products() {
  
  $query = query(' SELECT * FROM products');
  confrim($query);
  
  while($row = fetch_array($query)) {
    
   $product = <<<DELIMETER
    <div class="col-sm-4 col-lg-4 col-md-4">
      <div class="thumbnail">
        <a href="item.php?id={$row['product_id']}"><img src="{$row['product_image']}" alt="{$row['product_title']}"></a>
          <div class="caption">
            <h4 class="pull-right">&#36;{$row['product_price']}</h4>
            <h4><a href="item.php?id={$row['product_id']}">{$row['product_title']}</a>
            </h4>
            <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
            <a class="btn btn-primary" target="_blank" href="item.php?id={$row['product_id']}">Add to cart</a>
          </div>
        </div>
      </div>
DELIMETER;
    
 echo $product;
    
    
  }
}

// GET CATEGORIES

function get_categories() {
  
    $query = query("SELECT * FROM categories");
    confirm($query);
    
   while($row = fetch_array($query)) {
    
    $categories_links = <<<DELIMETER
    <a href='category.php?id={$row['category_id']}' class='list-group-item'>{$row['catregory_title']}</a>
DELIMETER;

echo $categories_links;
    
    }
  }

// GET DATA FOR CATEGORY.PHP

function get_categories_title() {
  
    $query = query('SELECT * FROM categories WHERE product_category_id=' . escape_string($GET['id']) . '');
    confirm($query);
    
   while($row = fetch_array($query)) {
    
    $categories_links = <<<DELIMETER
    <h1>{$row['category_title']}</h1>
            <p>{$row['category_description']}</p>
            <p><a class="btn btn-primary btn-large">Call to action!</a>
            </p>
DELIMETER;

echo $categories_links;
    
    }
  }

function get_products_category_page() {
  
  $query = query(' SELECT * FROM products WHERE product_category_id='. escape_string($GET['id']) .'');
  confrim($query);
  
  while($row = fetch_array($query)) {
    
   $product = <<<DELIMETER
    <div class="col-md-3 col-sm-6 hero-feature">
        <div class="thumbnail">
            <a href='item.php?id={$row['product_id']}'><img src="{$row['product_image']}" alt="{$row['product_title']}"></a>
            <div class="caption">
                <h3>{$row['product_title']}</h3>
                <p>{$row['product_short_description']}</p>
                <p>
                    <a href="#" class="btn btn-primary">Buy Now!</a> <a href="item.php?id={$row['product_id']}" class="btn btn-default">More Info</a>
                </p>
            </div>
        </div>
    </div>
DELIMETER;
    
 echo $product;
    
    
  }
}

function get_products_shop_page() {
  
  $query = query('SELECT * FROM products');
  confrim($query);
  
  while($row = fetch_array($query)) {
    
   $product = <<<DELIMETER
    <div class="col-md-3 col-sm-6 hero-feature">
        <div class="thumbnail">
            <a href='item.php?id={$row['product_id']}'><img src="{$row['product_image']}" alt="{$row['product_title']}"></a>
            <div class="caption">
                <h3>{$row['product_title']}</h3>
                <p>{$row['product_short_description']}</p>
                <p>
                    <a href="#" class="btn btn-primary">Buy Now!</a> <a href="item.php?id={$row['product_id']}" class="btn btn-default">More Info</a>
                </p>
            </div>
        </div>
    </div>
DELIMETER;
    
 echo $product;
    
    
  }
}

/********************BACK END FUNCTIONS*******************/


?>

