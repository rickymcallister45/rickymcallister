
<!DOCTYPE html>
<html>
<head>
	<title>phpTest</title>
</head>
<body>

<?php	

$dbServername ="localhost";
$dbUsername = "username";
$dbPassword = "Swordfish";
$dbName = "loginsystem";

$dbcon = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

if (!$dbcon){
	die('error connecting');
}
echo 'connected';

$sql = "SELECT * FROM users;";
	$result = mysqli_query($dbcon, $sql);
	$resultCheck = mysqli_num_rows($result);

	if ($resultCheck > 0) {
		while ($row = mysqli_fetch_assoc($result)) {
			echo $row['user_first'];
		}
	}
?>
</body>
</html>