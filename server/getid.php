<?php
header('Access-Control-Allow-Origin: *');
require_once('./config.php');
require_once('./functions.php');
$conn = connect ();

$id = $_GET['id'];

$sql = "SELECT * FROM nomenclature WHERE id ='{$id}' LIMIT 1";

$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
//print_r($row);

$json = json_encode($row);

close ($conn);
