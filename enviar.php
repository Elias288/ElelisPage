<?php

if(isset($_POST['enviar'])){
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $message = $_POST['message'];
    $asunto = $_POST['asunto'];

    $header = "From: " . $mail . "\r\n";
    $header .= "Reply-To: noreply@example.com" . "\r\n";
    $header .= "X-Mailer: PHP/" .phpversion();

    $message = "Este mensaje fue enviado por: " . $name . "\r\n";
    $message .= "Su e-mail es: " . $mail . "\r\n";
    $message .= "Mensaje: " . $_POST['message'] . "\r\n";
    $message .= "Enviado el: " . date('d/m/Y', time());

    $mail = mail("bianchi.elias@gmail.com", $asunto, $message, $header);
    if($mail){
        //echo "<h2>Mail enviado exitosamente</h2>";
        echo '<div class="modal_wrap" id="modal_wrap">' +
                '<div class="mensaje_modal">'+
                '<h3>Mensaje enviado exitosamente</h3>'+
                '</div></div>';
    }
}
?>