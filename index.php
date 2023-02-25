<?php
$data = "Hello World"; // Replace with your actual data
$time = date("Y-m-d H:i:s"); // Get the current time

// Return the data and the current time in JSON format
echo json_encode(array("data" => $data, "time" => $time));
?>
