<?php
header('Access-Control-Allow-Origin: *');
require_once('./config.php');
require_once('./functions.php');
$conn = connect();

$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$name = trim($obj['name']);
$price = trim($obj['price']);
$fromDate = trim($obj['fromDate']);
$toDate = trim($obj['toDate']);


$sql = 'INSERT INTO nomenclature (name, price, fromDate, toDate) VALUES ("'.$name.'", "'.$price.'", "'.$fromDate.'", "'.$toDate.'")';


if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

close ($conn);
