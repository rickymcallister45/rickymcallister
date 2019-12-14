<?php 

include_once '../../../resources/store/config.php';
include_once '../../../resources/store/functions.php';


if(isset($_GET['delete_user_id'])) {
  $deleteUserQuery = query("DELETE FROM users WHERE user_id = " . escape_string($_GET['id']) . " ");
  confirm($deleteUserQuery);
  redirect("../admin/index.php?users");
  
}else{
  redirect("../admin/index.php?users");
}

 ?>
