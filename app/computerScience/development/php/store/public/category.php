<?php require_once('../resources/config.php'); ?>

<?php include('../resources/header.php'); ?>

    <!-- Page Content -->
    <div class="container">

        <!-- Jumbotron Header -->
        <header class="jumbotron hero-spacer">
            
          <?php get_categories_title(); ?>  
            
            
            
            
            
        </header>

        <hr>

        <!-- Title -->
        <div class="row">
            <div class="col-lg-12">
                <h3>Products</h3>
            </div>
        </div>
        <!-- /.row -->

        <!-- Page Features -->
        <div class="row text-center">

          <?php get_products_category_page(); ?>

        </div>
        <!-- /.row -->

        <hr>
        
<?php include('../resources/footer.php'); ?>
