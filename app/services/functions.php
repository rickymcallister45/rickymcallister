<?php
// HELPER FUNCTIONS

$dbTitle = $dataBaseTitle;

function redirect($location) {
  header('LocationL $location');
}

function query($sql) {
  global $connection;
  return mysqli_query($connection, $sql);
}

function confirm($result) {
  global $connection;
  if(!$result) {
    die('Query Failed ' . mysqli_error($connection));
  }
}

function fetch_array($result) {
  return mysqli_fetch_array($result);
}

// FRONTEND FUNCTIONS

function get_services() {
  $query = query('SELECT * FROM {$dbTitle}');
  confirm($query);
  while($row = fetch_array($query)) {
    echo " <a href='{$row['link']}'>
             <div class='col-md-4 mb-5'>
               <div class='card h-100'>
                 <img class='card-img-top' src='{$row['image']}' alt='{$row['service_title']}'>
                   <div class='card-body'>
                     <h4 class='card-title'>{$row['service_title']}</h4>
                     <p class='card-text'>{$row['description']}</p>
                   </div>
                   <div class='card-footer'>
                     <a href='{$row['link']}' class='btn btn-primary'>Find Out More!</a>
                   </div>
                 </div>
               </div>";
  }
}

?>
