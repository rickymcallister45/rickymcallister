<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>rickyMcAllister.com</title>
	<!--<link rel="stylesheet" type="text/css" href="css/style.css">-->
</head>
<body>
	<header>
		
		<nav>
			<a href="#">
				<img src="img/logo.png">
			</a>
			<ul>
				<li><a href="index.php"></a></li>
				<li><a href="#">Portfolio</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
			<div>
				<form action="php/login.php" method="post">
					<input type="text" name="mailUID" placeholder="username/email...">
					<input type="password" name="password" placeholder="password">
					<button type="submit" name="login-submit">Login</button>
				</form>
				<a href="signup.php">signup</a>
					<form action="php/logout.php" method="post">
					<button type="submit" name="logout-submit">Logout</button>
				</form>
			</div>
		</nav>

	</header>



</body>
</html>