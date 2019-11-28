<?php
include "./config.php";
include "./functions.php";

echo "<!DOCTYPE html>
<html lang='en'>

<head>

  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
  <meta name='description' content='Ricky Mcallister's portfolio'>
  <meta name='author' content='Ricky Mcallister'>
  <link rel='icon' href='../../resources/favicon/favicon.ico' type='image/x-icon'>

  <title>Serivce</title>

 <link href='./css/bootstrap.min.css' rel='stylesheet'>
 <link href='./css/business-frontpage.css' rel='stylesheet'>

</head>

<body>

  <!-- Navigation -->
  <nav class='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
    <div class='container'>
      <a class='navbar-brand' href='http://rickymcallister.com/'>RickyMcAllister.com</a>
      <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse' id='navbarResponsive'>
        <ul class='navbar-nav ml-auto'>
          <li class='nav-item active'>
            <a class='nav-link' href='http://rickymcallister.com/'>Home
              <span class='sr-only'>(current)</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#services'>Services</a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='./contact.php'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Header -->
  <header class='bg-primary py-5 mb-5'>
    <div class='container h-100'>
      <div class='row h-100 align-items-center'>
        <div class='col-lg-12'>
          <h1 class='display-4 text-white mt-5 mb-2'>My skills portfolio.</h1>
          <p class='lead mb-5 text-white-50'</p>
        </div>
      </div>
    </div>
  </header>

  <!-- Page Content -->
  <div class='container'>

    <div class='row'>
      <div class='col-md-8 mb-5'>
        <h2>How can I help you?</h2>
        <hr>
        <p>This is a portfolio showcasing proofs of what I can do.</p>
      </div>
      <div class='col-md-4 mb-5'>
        <h2>Contact Us</h2>
        <hr>
        <address>
          <strong>Ricky McAllister</strong>
          <br>651 Moses Drive
          <br>Carlisle, OH 45005
          <br>
        </address>
        <address>
          <abbr title='Phone'>P:</abbr>
          (440) 265-5218
          <br>
          <abbr title='Email'>E:</abbr>
          <a href='mailto:#'>rickymcallister45@gmail.com</a>
        </address>
      </div>
    </div>
    <!-- /.row -->

    <div class='row' id='services'>";
    
get_services();    

echo  "</div>
  <!-- /.container --><!-- Footer -->
  <footer class='py-5 bg-dark'>
    <div class='container'>
      <p class='m-0 text-center text-white'>Copyright &copy; Ricky McAllister 2019</p>
    </div>
    <!-- /.container -->
  </footer>

  <!-- Bootstrap core JavaScript -->
  <script src='./js/jquery.min.js'></script>
  <script src='./js/bootstrap.bundle.min.js'></script>

</body>

</html>";

?>
