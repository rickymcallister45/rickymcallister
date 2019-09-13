<?php 

if(!empty($_POST['submit'])){
	//
	var_dump($_FILES);
	// error 1 check
	$folderNameValue = $_POST['folderName'];
	$renameFileValue = $_POST['renameFile'];
	
	echo $folderNameValue;
	echo $renameFileValue;
	
	/*
	if ($_FILES['upload']['error']==0) {
		switch ($_FILES['upload']['type']) {
			case 'image/jpeg':
				echo "file type accepted"
				break;
				case 'image/png':
					echo "file type accepted";
				break;
				exit('wrong file type');
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




*/


	}
?>