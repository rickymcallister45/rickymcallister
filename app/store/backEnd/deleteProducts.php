<?php
include_once '../../../resources/store/config.php';
include_once '../../../resources/store/functions.php';

if(isset($_GET['id'])) {
  $deleteProductQuery = query("DELETE FROM products WHERE product_id =" . escape_string($_GET['id']) . "");
  confirm($deleteProductQuery);
  redirect("../admin/index.php?products");
}else{
  redirect("../admin/index.php?products");
}
?>
