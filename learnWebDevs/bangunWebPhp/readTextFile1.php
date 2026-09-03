<?php 
 $filename = 'phonebook.txt';

  if (file_exists($filename)) {
    $fh = fopen($filename, 'r');
    if($fh) {
      while ($line = fgets($fh)) {
        echo($line.'<br />');
      }
    }
    fclose($fh);
  } else {
    echo "file not exist";
  }
?>