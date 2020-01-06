<?php
$folderName = $_SERVER['REQUEST_URI'];
$regexForDirectoryName = "/(\/app\/services\/)(.*)(\/index)/";
preg_match($regexForDirectoryName, $folderName, $matches);
$stepOne = json_encode($matches['2']);
$stepTwo = str_replace('"', "", $stepOne);
$navItemName = ucfirst($stepTwo);

echo "<nav class='navbar navbar-expand-lg navbar-light fixed-top' id='mainNav'>
        <div class='container'>
          <a class='navbar-brand js-scroll-trigger' href='http://rickymcallister.com/'>RickyMcallister.com</a>
          <button class='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
            Menu
            <i class='fas fa-bars'></i>
          </button>
          <div class='collapse navbar-collapse' id='navbarResponsive'>
            <ul class='navbar-nav ml-auto'>
              <li class='nav-item'>
                <a class='nav-link js-scroll-trigger' href='../../services/index.php'>Services</a>
              </li>
              <li class='nav-item'>
                <a class='nav-link js-scroll-trigger' href='./index.php'>{$navItemName}</a>
              </li>
              <li class='nav-item'>
                <a class='nav-link js-scroll-trigger' href='./index.php?contact'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>";
?>
