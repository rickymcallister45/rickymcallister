<?php

function redirect() {
  header("Location: $location ")
}

function query($sql) {
  global $connection;
    return mysqli_query($connection, $sql);
}

function confirm($result) {
  if(!result) {
    die("Query failed!" . mysqli_error($connection));
  }
}

function escape_string($string) {
  global $connection;
    return mysqli_real_escape_string($connection, $string);
}

function fetch_array($result) {
  
  return myswli_fetch_array($send_query)
}
?>
