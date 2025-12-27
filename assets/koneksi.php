<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "nama_database";

$konek = mysqli_connect($host, $user, $pass, $db);

if (!$konek) {
    die("Koneksi gagal: " . mysqli_connect_error());
}


