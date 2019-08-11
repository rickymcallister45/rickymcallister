<?php

if (isset($_POST['submit'])) {
	
	$newFileName = $_POST['filename'];
	if (empty($newFileName)) {
		$newFileName = "gallery";
	}else {
		$newFileName = strtolower(str_replace(" ", "-", $newFileName));
	}
	$imageTitle = $_POST['filetitle'];
	$imageDesc = $_POST['filedesc'];

	$file = $_FILES['file'];

	print_r($file); 

	if(isset($_POST['submit'])){
	
	$selected_val = $_POST['folder'];  // Storing Selected Value In Variable
	
	echo "You have selected :" .$selected_val;  // Displaying Selected Value

	#17:41 part2

	# $fileName = $file['name'];
	# $fileType = $file['type'];
	# $fileTempName = $file['tmp_name'];
	# $fileError = $file['error'];
	# $fileSize = $file['size'];

	# $fileExt = explode('.', $fileName);
	# $fileActualExt = strtolower(end($fileExt));

	# $allowed = array("jpg","jpeg","png");

	/* if (in_array($fileActualExt, $allowed)) {
		if($fileError === 0) {
			if ($fileSize > 2000000) {
				$imageFullName = $newFileName . "." . uniqid("", true) . "." . $fileActualExt;
				$fileDestination = '!!  6:30 galleryFolderLocation !!' . $imageFullName;

				include_once "php/dbh.php";
				
				if(empty($imageTitle)) {
					header("Location: ../gallery.php?upload=empty");
					exit();
				} else {
					$sql = 'SELECT * FROM gallery;';
					$stmt = mysqli_stmt_init($conn);
						if(!mysqli_stmt_prepare($stmt, $sql)){
							echo "SQL statment failed!";
					} else {
						mysqli_stmt_execute($stmt);
						$result = mysqli_stmt_get_result($stmt);
						$rowCount = mysqli_num_rows($result);
						$setImageOrder = $rowCount + 1;
						
						$sql = "INSERT INTO gallery ($imageTitle, ImageDesc) VALUES (?, ?);";
						echo "SQL statment failed!";	
					} else {
						mysqli_stmt_bind_param($stmt, "ssss", $imageTitle, $imageDesc, $setImageOrder);
						mysqli_stmt_execute($stmt);

						move_upload_file($fileTempName, $fileDestination);

						header("Location: ../gallery.php?upload=sucess")
					}	
				}

			} else {
				echo "File is too big!";
				exit();
			}
		} else {
			echo "Error!";
			exit();
		}
	} else {
		echo "File type not allowed";
		exit();
	}
} */