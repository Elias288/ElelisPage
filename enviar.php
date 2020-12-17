<?php

if(!empty($_POST['name']) && !empty($_POST['mail']) && !empty($_POST['message'])){
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $message = $_POST['message'];
    $header = 'Form: ' . $mail . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $message = "Este mensaje fue enviado por: " . $name . "\r\n";
    $message .= "Su e-mail es: " . $mail . "\r\n";
    $message .= "Mensaje: " . $_POST['message'] . "\r\n";
    $message .= "Enviado el: " . date('d/m/Y', time());

    $para = 'bianchi.elias@gmail.com';
    $asunto = 'Mensaje de prueba';

    mail($para, $asunto, utf8_decode($message), $header);

    if($mali){
        header("Location: index.html");
    }
    print("Error!!!");
}else
    print("Algo esta vacio");


/*
$to = "bianchi.elias@gmail.com";
$subjet = "My subject";
$txt = "Hello World";
$headers = "From: webmaster@example.com" . "\r\n" . "CC: sombodyelse@example.com";

mail($to, $subjet, $txt, $headers);
*/
//mail($para, $asunto, utf8_decode($message), $header);


//header("Location: index.html");
?>