<?php
if(isset($_GET['id'])) {
        $getIDQueryEditProduct = query("SELECT * FROM products WHERE product_id = " . escape_string($_GET['id']) . " ");
        confirm($getIDQueryEditProduct);
        
        while($row = fetch_array($getIDQueryEditProduct)) {
                $productInventoryCode    = escape_string($row['product_inventory_code']);
                $productTitle            = escape_string($row['product_title']);
                $productCategoryId       = escape_string($row['product_category_id']);
                $productPrice            = escape_string($row['product_price']);
                $productQuantity         = escape_string($row['product_quantity']);
                $productLimitReached     = escape_string($row['product_limit_reached']);
                $productWeight           = escape_string($row['product_weight']);
                $productDescription      = escape_string($row['product_description']);
                $productShortDescription = escape_string($row['product_short_description']);
                $productImage            = escape_string($row['product_image']);               
                $productImageLarge       = escape_string($row['product_image_large']);                
        }        
}

echo "<div class='col-md-12'>
        <div class='row'>
          <h1 class='page-header'>
            Edit Product";
adminEditProduct();
    echo "</h1>
        </div>
        <form action='' method='post' enctype='multipart/form-data'>
          <div class='col-md-8'>
            <div class='form-group'>
              <label for='product-title'>Product Title </label>
              <input type='text' name='product_title' class='form-control' value='{$productTitle}'>
            </div>
            <div class='form-group'>
              <label for='product-title'>Product Description</label>
              <textarea name='product_description' id='' cols='30' rows='3' class='form-control' value='{$productDescription}'></textarea>
            </div>
            <div class='form-group row'>
              <div class='col-xs-3'>
                <label for='product-price'>Product Price</label>
                <input type='number' name='product_price' class='form-control' size='60' value='{$productPrice}'>
              </div>
            </div>
            <div class='form-group'>
              <label for='product_short_description'>Product Short Description</label>
              <textarea name='product_short_description' id='' cols='30' rows='1' class='form-control' value='{$productShortDescription}'></textarea>
            </div>
            <div class='form-group'>
              <label for='product_limit_reached'>Product Limit Reached</label>
              <textarea name='product_limit_reached' id='' cols='30' rows='1' class='form-control' value='{$productLimitReached}'></textarea>
            </div>
          </div>
          <!--Main Content-->
          <!-- SIDEBAR-->
          <aside id='admin_sidebar' class='col-md-4'>
            <div class='form-group'>
              <input type='submit' name='draft' class='btn btn-warning btn-lg' value='Draft'>
              <input type='submit' name='update' class='btn btn-primary btn-lg' value='Update'>
            </div>
            <!-- Product Categories-->
            <div class='form-group'>
              <label for='product-category'>Select Category</label>
              <select name='product_category_id' id='' class='form-control'>
                <option value=''>Select Category</option>";
adminAddCategory();
        echo "</select>
            </div>
            <!-- Product Quantity-->
            <div class='form-group'>
              <label for='product-quantity'>Product Quantity</label>
                <input type='number' name='product_quantity' class='form-control' value='{$productQuantity}'>
            </div>
            <!-- Product Inventory Code -->
            <div class='form-group'>
              <label for='product-title'>Product Inventory Code</label>
              <input type='number' name='product_inventory_code' class='form-control' value='{$productInventoryCode}'>
            </div>
            <!-- Product Weight-->
            <div class='form-group'>
              <label for='product-weight'>Product Weight</label>
                <input type='number' name='product_weight' class='form-control' value='{$productWeight}'>
            </div>
            <!-- Product Image -->
            <div class='form-group'>
              <label for='product-title'>Product Image</label>
              <input type='file' name='file'>
              <img width='200' src='value='{$productImage}'' alt='{$productTitle}'>
            </div>
          </aside>
          <!--SIDEBAR-->
        </form>";
?>
