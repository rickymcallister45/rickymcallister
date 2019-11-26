<?php
// HELPER FUNCTIONS

function redirect($location) {
  header('LocationL $location');
}

function query($sql) {
  global $connection;
  return mysqli_query($conncection, $sql);
}

function confirm($result) {
  global $connection;
  if(!$result) {
    die('Query Failed ' . mysqli_error($connection));
  }
}

function escape_string($string) {
  global $connection;
  return mysqli_real_escape_string($connection, $string);
}

function fetch_array($result) {
  return mysqli_fetch_array($result);
}

// FRONTEND FUNCTIONS

// BACKEND FUNCTIONS

?>
