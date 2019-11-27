<?php
include_once '../../resources/store/test.php';
include_once 'frontEnd/header.php';
echo "<body>";
        include_once 'frontEnd/topNav.php';
echo "<!-- Page Content -->
       <div class='container'>

        <!-- Jumbotron Header -->
        <header class='jumbotron hero-spacer'>
            <h1>A Warm Welcome!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
            <p><a class='btn btn-primary btn-large'>Call to action!</a>
            </p>
        </header>

        <hr>

        <!-- Title -->
        <div class='row'>
            <div class='col-lg-12'>
                <h3>Latest Features</h3>
            </div>
        </div>
        <!-- /.row -->

        <!-- Page Features -->";
        
        get_products_on_category_page();
             
          
   echo " </div>
        </div>";
include_once 'frontEnd/footer.php';
echo "</body>";
?>
