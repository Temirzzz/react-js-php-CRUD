<?php
header('Access-Control-Allow-Origin: *');
require_once('./config.php');
require_once('./functions.php');
$conn = connect();
mysqli_set_charset($conn, "utf8");
$id = '';

$sql = "SELECT * FROM nomenclature";
$result = mysqli_query($conn, $sql);


if (mysqli_num_rows($result) > 0) {
  if (!$id) echo '[';
    for ($i = 0; $i < mysqli_num_rows($result); $i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';

}

close ($conn);


