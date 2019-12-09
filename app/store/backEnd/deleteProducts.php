<?php
include_once '../../../resources/store/config.php';
include_once '../../../resources/store/functions.php';
if(isset($_GET['id'])) {
  $deleteOrderQuery = query("DELETE FROM orders WHERE order_id =" . escape_string($_GET['id']) . "");
  confirm($deleteOrderQuery);
  redirect("../admin/index.php?orders");
}else{
  redirect("../admin/index.php?orders");
}
?>
