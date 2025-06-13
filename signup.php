<?php
require_once 'koneksi.php';

$success = "";
$error = "";

if (isset($_POST['submit'])) {
    $name     = htmlspecialchars($_POST['name']);
    $email    = htmlspecialchars($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Cek apakah email sudah digunakan
    $check = mysqli_query($conn, "SELECT * FROM user WHERE email = '$email'");
    if (mysqli_num_rows($check) > 0) {
        $error = "Email sudah digunakan!";
    } else {
        $query = "INSERT INTO user (name, email, password) VALUES ('$name', '$email', '$password')";
        if (mysqli_query($conn, $query)) {
            $success = "Akun berhasil dibuat! Silakan login.";
            header("Location: login.php"); // redirect ke login setelah daftar
            exit;
        } else {
            $error = "Gagal mendaftar, silakan coba lagi.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Sign Up - LitSpace</title>
    <link rel="stylesheet" href="css/style.css"> <!-- pakai CSS kamu -->
</head>
<body>
    <div class="container">
        <h2>Daftar Akun LitSpace</h2>
        <?php if ($error) echo "<p style='color:red;'>$error</p>"; ?>
        <?php if ($success) echo "<p style='color:green;'>$success</p>"; ?>
        <form method="POST" action="">
            <input type="text" name="name" placeholder="Nama Lengkap" required><br>
            <input type="email" name="email" placeholder="Email" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <button type="submit" name="submit">Daftar</button>
        </form>
        <p>Sudah punya akun? <a href="login.php">Login di sini</a></p>
    </div>
</body>
</html>
