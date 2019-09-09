<?php
  // check if folder exist
  
  if(folder_exists("test")){
    echo "File Exists";
  }else{
    mkdir("test");
    echo "Folder Created";
  }
?>
