<?php
 require "header.php";
?>

<main>
	<div class="wrapper-main">
		<section class="section-default">
			<h1>Signup</h1>
			<form action="signup.php" method="post">
				<input type="text" name="UID" placeholder="Username">
				<input type="text" name="email" placeholder="Email">
				<input type="password" name="password" placeholder="Password">
				<input type="password" name="password-repeat" placeholder="Confirm Password">
				<button type="submit" name="signup-submit">Signup</button>
				<!-- # 23:39 https://www.youtube.com/watch?v=LC9GaXkdxF8 -->
			</form>
		</section>
	</div>
</main>

<?php
	require "footer.php";
?>