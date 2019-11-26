<?php

echo "<div class='col-md-3'>
        <p class='lead'>Ricky McAllister's Store</p>
          <div class='list-group'>";
                get_categories();
/*
        $query = "SELECT * FROM categories";
        $send_query = mysqli_query($connection, $query);
        
        if(!$send_query) {
                die('QUERY FAILED' . mysqli_error($connection));
        }
        
        while($row = myswli_fetch_assoc($send_query)) {
             echo "<a href='#' class='list-group-item'>{$row['category_title']}</a>";
        }

echo  "<a href='category.html' class='list-group-item'>Category 1</a>
       <a href='#' class='list-group-item'>Category 2</a>
       <a href='#' class='list-group-item'>Category 3</a>";
*/
echo "</div>
  </div>";
?>
