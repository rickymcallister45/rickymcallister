<?php 
if(!empty($_POST['submit'])){
	// error 1 check
	$folderNameValue = $_POST['folderName'];
	$renameFileValue = $_POST['renameFile'];
	
	if ($_FILES['upload']['error']==0) {
		switch ($_FILES['upload']['type']) {
			case 'audio/mp3';
				echo "file type accepted";
				break;
				exit('wrong file type');
		}
		$array=explode(".", $_FILES['upload']['name']);
		$fileNameExtension=array_pop($array);
		$finalFileName=$renameFileValue.$fileNameExtension;
		$finalDestination = "../../files/mp3/";
		if(!is_dir($finalDestination)){
			$destination=$finalDestination."/".$finalFileName;
		}else{
			$destination=$finalDestination."/".$finalFileName;
		}
		if (move_uploaded_file($_FILES['upload']['tmp_name'], $destination)) {
			echo "success";
		}else{
			echo "failure";
		}
	}else{
				// error 2 check
		if ($_FILES['upload']['error']==2 | $_FILES['upload']['error']==2) {
			echo "File is too big";
		}
	}
	}
?>
