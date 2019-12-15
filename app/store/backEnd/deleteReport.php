<?php
include_once '../../../resources/store/config.php';
include_once '../../../resources/store/functions.php';
if(isset($_GET['id'])) {
  $deleteReportQuery = query("DELETE FROM reports WHERE report_id =" . escape_string($_GET['id']) . "");
  confirm($deleteReportQuery);
  redirect("../admin/index.php?reports");
}else{
  redirect("../admin/index.php?reports");
}
?>
