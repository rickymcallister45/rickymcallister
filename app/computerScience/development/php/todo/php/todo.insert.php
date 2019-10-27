<?php
	$title = $_POST['tilte'];
	$sql = "INSERT INTO todo (title) VALUES ('$title');";
	$result = mysqli_query($conn, $sql);	
