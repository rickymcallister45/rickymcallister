<?php
  if (isset($_POST['submit'])) {
	    if(empty($_POST['input'])) {
		      $errors = "You must fill in input";
	    } else {
		    $pathYouAreChecking = $_POST['input'];
		    $files = scandir($pathYouAreChecking);
        $files = array_diff(scandir($path), array('.', '..'));
        print_r($files);
	}
}
?>
