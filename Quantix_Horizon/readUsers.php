<?php
include("mydb.php");

$result = $mysqli->query('SELECT * FROM users');
$rows = $result->fetch_all(MYSQLI_ASSOC);
