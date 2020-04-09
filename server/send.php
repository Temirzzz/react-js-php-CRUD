<?php
header('Access-Control-Allow-Origin: *');
require_once('./config.php');
require_once('./functions.php');
$conn = connect ();


$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$login = trim($obj['username']);
$password = trim(md5($obj['password']));


if ($login != "") {
    $result = mysqli_query($conn, "SELECT * FROM users WHERE login='$login' and pass='$password'");
    if ($result->num_rows == 0) {
        echo json_encode("Wrong value");
    }
    else {
        echo json_encode("Ok");
    }
}
else {
    echo json_encode('try again');
}

close ($conn);
