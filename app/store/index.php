<?php
include_once '../../resources/store/test.php';
include_once 'frontEnd/header.php';
include_once 'frontEnd/topNav.php';

echo "<body>
        <!-- Page Content -->
          <div class='container'>
            <div class='row'>
              <!-- Side Nav -->";
                include_once 'frontEnd/sideNav.php';
                  echo "<div class='col-md-9'>
              <!-- Slider -->";
                include_once 'frontEnd/slider.php';
                  echo "<!-- Products -->";
                include_once 'frontEnd/products.php';
                  echo "</div>
          </div>
    </div>
</body>";
include_once 'frontEnd/footer.php';
?>
