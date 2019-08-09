<?php
	$_SESSION['username'] = "Admin"
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>rickyMcAllister.com</title>
		<meta name="viewport" content="width=device-width. initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>
	<body>
		<header>
			<a class="homePage" href="http://rickymcallister.com/desktop"></a>
			<nav>
				<ul>
					<li><a href="#">folder 1</a></li>
					<li><a href="#">folder 2</a></li>
					<li><a href="#">folder 3</a></li>
				</ul>
			</nav>
		</header>
		<main>
			<section class="galley-links">
				<div class="wrapper">
					<h2>Gallery</h2>

					<div class="gallery-container">
						<?php
						include_once 'php/dbh.php'

						$sql = 'SELECT * FROM gallery ORDER BY orderGallery DESC;';
						$stmt = mysqli_stmt_init($conn);
						if(mysqli_stmt_prepare($stmt, $sql)) {
							echo "SQL statement failed!";
						} else {
							mysli_stmt_execute($stmt);
							$result = mysli_stmt_get_result($stmt);

							while($row = mysqli_fetch_assoc($result)) {
								echo '<a href="#">
										<div style="background-image: url(img/gallery/)"></div>
										<h3>".$row["titleGallery"]."</h3>
									</a>';
							}
						}

						
						?>	
					</div>

					<?php
					if(isset($_SESSION['username'])) {
						echo '<div class="gallery-upload">
						<form action="php/gallery_upload.php" method="post" enctype="multipart/form-data">
							<input type="text" name="filename" placeholder="File name...">
							<input type="text" name="filename" placeholder="Image title...">
							<input type="text" name="filename" placeholder="Image description...">
							<input type="file" name="file">
							<button type="submit" name="submit">UPLOAD</button>
						</form>
					</div>';
					}
					
					?>
				</div>
			</section>
		</main>
	</body>
