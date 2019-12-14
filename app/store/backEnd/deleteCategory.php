<?php
include_once '../../../resources/store/config.php';
include_once '../../../resources/store/functions.php';
if(isset($_GET['id'])) {
  $deleteCategoryQuery = query("DELETE FROM categories WHERE category_id =" . escape_string($_GET['id']) . "");
  confirm($deleteCategoryQuery);
  redirect("../admin/index.php?categories");
}else{
  redirect("../admin/index.php?categories");
}
?>
