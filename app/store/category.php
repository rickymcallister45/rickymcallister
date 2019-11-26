<?php
include_once '../../resources/store/test.php';
include_once 'frontEnd/header.php';
echo "<body>";
        include_once 'frontEnd/topNav.php';
echo "<!-- Header -->
        <header class='bg-primary py-5 mb-5'>
          <div class='container h-100'>
            <div class='row h-100 align-items-center'>
              <div class='col-lg-12'>
                <h1 class='display-4 text-white mt-5 mb-2'>Business Name or Tagline</h1>
                <p class='lead mb-5 text-white-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam.</p>
              </div>
            </div>
          </div>
        </header>
<!-- Page Content -->
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
        
        
        /*
     echo "<div class='row text-center'>

            <div class='col-md-3 col-sm-6 hero-feature'>
                <div class='thumbnail'>
                    <img src='http://placehold.it/800x500' alt=''>
                    <div class='caption'>
                        <h3>Feature Label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>
                            <a href='#' class='btn btn-primary'>Buy Now!</a> <a href='#' class='btn btn-default'>More Info</a>
                        </p>
                    </div>
                </div>
            </div>
          </div>";
          */
          
          
          
   echo "</div>";
include_once 'frontEnd/footer.php';
echo "</body>";
?>
