<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];


$EmailTo = "mariano@digitalfellow.co";
$Subject = "Nuevo Contacto Recibido";

// prepare email body text
$Fields .= "Nombre: ";
$Fields .= $name;
$Fields .= "\n";

$Fields.= "Email: ";
$Fields .= $email;
$Fields .= "\n";

$Fields .= "Mensaje: ";
$Fields .= $message;
$Fields .= "\n";


// send email
$success = mail($EmailTo,  $Subject,  $Fields, "From:".$email);