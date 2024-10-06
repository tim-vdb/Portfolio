<?php
$mysqli = new mysqli("localhost", "root", "", "td1");
if ($mysqli->connect_error) {
    /* Use your preferred error logging method here */
    error_log('Connection error: ' . $mysqli->connect_error);
}