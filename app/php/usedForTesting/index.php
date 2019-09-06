<?php

  // check if folder exist
  
  if(file_exists("../../../files/img/memes")){
    echo "File Exists";
  }else{
  
  // create folder
  mkdir("../../../files/img/memes");
    echo "Folder Created";
  }
?>