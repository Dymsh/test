<?php

  if (isset($_GET['pas']) && $_GET['pas'] == 'atik') {
    echo json_encode('get enter');
  }
  if (isset($_POST['pas']) && $_POST['pas'] == 'atik') {
        echo json_encode('post enter');
  }


?>
