<?php

// helper functions

function set_message($msg) {
  
  if(!empty($msg)) {
    $_SESSION['message'] = $msg;
  }else{
   $msg = '';
  }
}

function dislay_message() {
  if(isset($_SESSION['messgae'])) {
    echo $_SESSION['message'];
    unset($_SESSION['message']);
  }
}

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
    
   echo "<div class='col-sm-4 col-lg-4 col-md-4'>
      <div class='thumbnail'>
        <a href='item.php?id={$row['product_id']}'><img src='{$row['product_image']}' alt='{$row['product_title']}'></a>
          <div class='caption'>
            <h4 class='pull-right'>&#36;{$row['product_price']}</h4>
            <h4><a href='item.php?id={$row['product_id']}'>{$row['product_title']}</a>
            </h4>
            <p>See more snippets like this online store item at <a target='_blank' href='http://www.bootsnipp.com'>Bootsnipp - http://bootsnipp.com</a>.</p>
            <a class='btn btn-primary' target='_blank' href='cart.php?add={$row['product_id']}'>Add to cart</a>
          </div>
        </div>
      </div>";
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
    
   echo "<div class='col-md-3 col-sm-6 hero-feature'>
        <div class='thumbnail'>
            <a href='item.php?id={$row['product_id']}'><img src='{$row['product_image']}' alt='{$row['product_title']}'></a>
            <div class='caption'>
                <h3>{$row['product_title']}</h3>
                <p>{$row['product_short_description']}</p>
                <p>
                    <a href='#' class='btn btn-primary'>Buy Now!</a> <a href='item.php?id={$row['product_id']}' class='btn btn-default'>More Info</a>
                </p>
            </div>
        </div>
    </div>";
    }
}

function get_products_shop_page() {
  
  $query = query('SELECT * FROM products');
  confrim($query);
  
  while($row = fetch_array($query)) {
    
   echo "<div class='col-md-3 col-sm-6 hero-feature'>
        <div class='thumbnail'>
            <a href='item.php?id={$row['product_id']}'><img src='{$row['product_image']}' alt='{$row['product_title']}'></a>
            <div class='caption'>
                <h3>{$row['product_title']}</h3>
                <p>{$row['product_short_description']}</p>
                <p><a href='#' class='btn btn-primary'>Buy Now!</a> <a href='item.php?id={$row['product_id']}' class='btn btn-default'>More Info</a>
                </p>
            </div>
        </div>
    </div>";
    
 
  }
}

function login_user() {
  
  if(isset($_POST['submit'])) {
    $username = escape_string($_POST['username']);
    $password = escape_string($_POST['']);
    
    $query = query("SELECT * FROM users WHERE username = '{$username}' AND password = '{$password}'");
    confirm($query);
    
    if(mysqli_num_rows($query) == 0) {
    set_message('Your entered something wrong idiot');
    redirect('login.php');
    }else{
      set_message('Welcome to Admin {$username}');
      redirect('admin');
    }
  }
}

function send_message() {
  
  if(isset($_POST['submit'])) {
   $to = 'rickymcallister45@gmail.com';
   $from_name = escape_string($_POST['name']);
   $subject = escape_string($_POST['subject']);
   $email = escape_string($_POST['email']);
   $message = escape_string($_POST['message']);
   
   $headers = 'From: {$from_name} {$email}';
   
   $result = mail($to, $subject, $message, $headers);
   
   if(!result) {
     echo "error";
     redirect('./contact.php');
   }else {
     echo "sent";
     redirect('./contact.php');
   }
  }
}

/********************BACK END FUNCTIONS*******************/


?>

