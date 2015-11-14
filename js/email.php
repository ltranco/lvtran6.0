<?php 
    $email = $_POST["email"];

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    mail($email, "Sample HTML Email", "<h1>TEST</h1>", $headers);
?>