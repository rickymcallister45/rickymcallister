<?php
include_once '../../resources/store/test.php';
include_once 'frontEnd/header.php';

echo "<body>";
        include_once 'frontEnd/topNav.php';
        echo "<!-- Page Content -->
          <div class='container'>
            <div class='row'>
              <!-- Side Nav -->";
                include_once 'frontEnd/sideNav.php';

$query = query("SELECT * FROM products WHERE product_id =" . escape_string($_GET['id']) . "");
  confirm($query);
  while($row = fetch_array($query)) {
        echo "<div class='col-md-9'>
                <div class='row'>
                  <div class='col-md-7'>
                    <img class='img-responsive' src='{$row[product_image_large]}' alt='{$row[product_title]}'>
                  </div>
                  <div class='col-md-5'>
                    <div class='thumbnail'>
                      <div class='caption-full'>
                        <h4>{$row[product_title]}</h4>
                        <hr>
                        <h4 class=''>&#36;{$row[product_price]}</h4>
                        <div class='ratings'>
                          <p>
                            <span class='glyphicon glyphicon-star'></span>
                            <span class='glyphicon glyphicon-star'></span>
                            <span class='glyphicon glyphicon-star'></span>
                            <span class='glyphicon glyphicon-star'></span>
                            <span class='glyphicon glyphicon-star-empty'></span>
                            4.0 stars
                          </p>
                        </div>
          
                        <p>{$row[product_short_description]}</p>

                        <form action=''>
                          <div class='form-group'>
                            <a href='./cart.php?add={$row['product_id']}' class='btn btn-primary'>ADD TO CART</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              <hr>
                <div class='row'>
                  <div role='tabpanel'>
                    <ul class='nav nav-tabs' role='tablist'>
                      <li role='presentation' class='active'><a href='#home' aria-controls='home' role='tab' data-toggle='tab'>Description</a></li>
                      <li role='presentation'><a href='#profile' aria-controls='profile' role='tab' data-toggle='tab'>Reviews</a></li>
                    </ul>
                    <div class='tab-content'>
                      <div role='tabpanel' class='tab-pane active' id='home'>
                        <p>{$row[product_description]}</p>
                      </div>
                      <div role='tabpanel' class='tab-pane' id='profile'>
                        <div class='col-md-6'>
                          <h3>2 Reviews From </h3>
                          <hr>
                          <div class='row'>
                            <div class='col-md-12'>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star-empty'></span>
                                Anonymous
                              <span class='pull-right'>10 days ago</span>
                              <p>This product was great in terms of quality. I would definitely buy another!</p>
                            </div>
                          </div>
                          <hr>
                          <div class='row'>
                            <div class='col-md-12'>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star-empty'></span>
                              Anonymous
                              <span class='pull-right'>12 days ago</span>
                              <p>I've alredy ordered another one!</p>
                            </div>
                          </div>
                          <hr>
                          <div class='row'>
                            <div class='col-md-12'>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star-empty'></span>
                              Anonymous
                              <span class='pull-right'>15 days ago</span>
                              <p>I've seen some better than this, but not at this price. I definitely recommend this item.</p>
                            </div>
                          </div>
                        </div>
                        <div class='col-md-6'>
                          <h3>Add A review</h3>
                          <form action='' class='form-inline'>
                            <div class='form-group'>
                              <label for=''>Name</label>
                                <input type='text' class='form-control' >
                            </div>
                            <div class='form-group'>
                              <label for=''>Email</label>
                                <input type='test' class='form-control'>
                            </div>
                            <div>
                              <h3>Your Rating</h3>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star'></span>
                              <span class='glyphicon glyphicon-star'></span>
                            </div>
                            <br>
                            <div class='form-group'>
                              <textarea name=' id=' cols='60' rows='10' class='form-control'></textarea>
                            </div>
                            <br>
                            <br>
                            <div class='form-group'>
                              <input type='submit' class='btn btn-primary' value='SUBMIT'>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>";
  }

include_once 'frontEnd/footer.php';
?>
