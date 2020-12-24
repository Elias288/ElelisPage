<?php

if(isset($_POST['enviar'])){
    if( !empty($_POST['name']) && !empty($_POST['mail']) && !empty($_POST['message']) ){
        $name = $_POST['name'];
        $mail = $_POST['mail'];
        $message = $_POST['message'];
        $asunto = $_POST['asunto'];

        $header = "From: noreply@examen.com" . "\r\n";
        $header .= "Reply-To: noreply@example.com" . "\r\n";
        $header .= "X-Mailer: PHP/" .phpversion();

        $message = "Este mensaje fue enviado por: " . $name . "\r\n";
        $message .= "Su e-mail es: " . $mail . "\r\n";
        $message .= "Mensaje: " . $_POST['message'] . "\r\n";
        $message .= "Enviado el: " . date('d/m/Y', time());

        $mail = mail("bianchi.elias@gmail.com", $asunto, $message, $header);
        if($mail){
            /*echo "<div class=\"mensaje_modal\"><h3>Mensaje enviado correctamente</h3>";
            echo "</div></div>';";
            header( "refresh:10; url=index.php" );*/
            echo "<script>";
            echo "var cont = document.getElementById('contacto');";
            echo "var MensajeModal = '<div class=\"modal_wrap\" id=\"modal_wrap\">";
            echo "<div class=\"mensaje_modal\"><h3>Mensaje enviado correctamente</h3>";
            echo "<span id=\"btn_close\">Cerrar</span></div></div>';";
            echo "cont.insertAdjacentHTML('beforebegin', MensajeModal);";
            
            echo "document.getElementById('btn_close').addEventListener('click', function(e){";
            echo "document.getElementById('modal_wrap').remove();";
            echo "document.getElementById('formEnviar').setAttribute('action', '');});";
            
            echo "</script>";
        }
    }
    
}
?>