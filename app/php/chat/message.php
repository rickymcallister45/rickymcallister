<?php
  
  include 'connect.db.php';
  
  switch( $_REQUEST['action]) {
    case "sendMessage":
      
      $query = $db->prepare("INSERT INTO messages SET message=?");
      
      $query->execute([$_REQUEST['message']]);
    break;
    
  }

?>
