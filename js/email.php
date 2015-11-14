<?php 
    $email = $_POST["email"];
    mail($email, "Sample HTML Email", "<h1>TEST</h1>");
?>