<?php
header('Access-Control-Allow-Origin: *');
require_once('./config.php');
require_once('./functions.php');
$conn = connect();

    
$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$id = $_GET['id'];
$name = trim($obj['name']);
$price = trim($obj['price']);
$fromDate = trim($obj['fromDate']);
$toDate = trim($obj['toDate']);


$sql = "UPDATE `nomenclature` SET name='".$name."', price='".$price."', fromDate='".$fromDate."', toDate='".$toDate."' WHERE id = '$id' LIMIT 1";


if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

close ($conn);
