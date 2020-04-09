<?php
header('Access-Control-Allow-Origin: *');
require_once('./config.php');
require_once('./functions.php');
$conn = connect ();

$id = $_GET['id'];

$sql = "DELETE FROM nomenclature WHERE id ='{$id}' LIMIT 1";

if (mysqli_query($conn, $sql)) {
    return "Record deleted successfully";
} else {
    return "Error: " . $sql . "<br>" . mysqli_error($conn);
}

close ($conn);
