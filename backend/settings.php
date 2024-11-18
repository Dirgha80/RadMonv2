<?php
/*
*******************************************************************************************************************
* Warning!!!, Tidak untuk diperjual belikan!, Cukup pakai sendiri atau share kepada orang lain secara gratis
*******************************************************************************************************************
* Author : @Maizil https://t.me/maizil41
*******************************************************************************************************************
* © 2024 Mutiara-Net By @Maizil
*******************************************************************************************************************
*/
require_once '../config/mysqli_db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['save'])) {
    $useradm = $_POST['useradm'];
    $passadm = $_POST['passadm'];

    $sql = "UPDATE operators SET username = ?, password = ? WHERE id = 1";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $useradm, $passadm);

    if ($stmt->execute()) {
        $message = urlencode("✅ Success.");
        header('Location: ../pages/admin.php?message=' . $message);
        exit();
    } else {
    $message = urlencode("❌ Failed.");
        header('Location: ../pages/admin.php?message=' . $message);
        exit();
    }
}

$sql = "SELECT * FROM operators WHERE id = 1";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

$username_value = $row['username'];
$password_value = $row['password'];

$conn->close();
?>
