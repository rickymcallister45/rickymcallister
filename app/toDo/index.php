<?php

$errors = "";

$servername = "localhost";
$username = "username";
$password = "Swordfish";
$dbname = "todo";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (isset($_POST['submit'])) {
	if(empty($_POST['title'])) {
		$errors = "You must fill in task";
	} else {
		$title = $_POST['title'];
		$sqlInsert = "INSERT INTO todo (title) VALUES ('$title');";
		mysqli_query($conn, $sqlInsert);		
		header('location: index.php');
	}
}

if(isset($_GET['del_task'])) {
	$id = $_GET['del_task'];

	mysqli_querry($conn, "DELETE FROM `todo` WHERE id=".$id);
	header('location: index.php');
}

?>
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8">
		<title>rickyMcAllister.com</title>
		<meta name="viewport" content="width=device-width. initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>
<body>
		<div id="title">TODO</div>

		<form method="POST" action="php/todo.insert.php">
			<input type="text" name="title" placeholder="TODO" id="insertBox">
			<button type="submit" name="submit" id="addButton">SUBMIT</button>
		</form>
			
<?php if (isset($errors)) { ?>
	<p><?php echo $errors; ?></p>
<?php } ?>

		<table>
			<tbody>
<?php

	$sqlDisplay = "SELECT * FROM todo;";

	$result = mysqli_query($conn, $sqlDisplay);

	$i = 1; while($row = mysqli_fetch_array($result)) { ?>
		<tr>
			<td> <?php echo $i ?> </td>
			<td class="todoList"> <?php echo $row['title']; ?> </td>
			<td class="finished">
				<a href="index.php?del_task=<?php echo $row['id'] ?>">Done</a>
			</td>
		</tr>
		<?php $i++; } 
?>



				<tr>
					<td class="todoList">task</td>
					<td class="finished"> 
						<a href="index.php?del_task=<?php echo $row['id'] ?>">done</a> 
					</td>
				</tr>
				<tr>
					<td class="todoList">tasktasktasktask</td>
					<td class="finished"> 
						<a href="index.php?del_task=<?php echo $row['id'] ?>">done</a> 
					</td>
				</tr>
				<tr>
					<td class="todoList">tasktasktasktask</td>
					<td class="finished"> 
						<a href="index.php?del_task=<?php echo $row['id'] ?>">done</a> 
					</td>
				</tr>
				<tr>
					<td class="todoList">task</td>
					<td class="finished"> 
						<a href="index.php?del_task=<?php echo $row['id'] ?>">done</a> 
					</td>
				</tr>
			</tbody>
		</table>
</body>
<?php
	include ="php/footer.php";
?>
			