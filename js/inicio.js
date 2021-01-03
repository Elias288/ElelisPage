window.onload=function(){
    
    document.getElementById("cryptos").addEventListener('click', function(e){
        var cont = document.getElementById('about');
        var MensajeModal = '<div class="modal_wrap" id="modal_wrap">' +
                            '<div class="mensaje_modal_QR">'+
                            '<img id="QR_Code" src="img/QRcryptos.jpg" alt="">'+
                            '<span id="btn_close">Cerrar</span>'+
                            ' </div> </div>';
        cont.insertAdjacentHTML('beforebegin', MensajeModal);

        
        /*Cerrar mensaje de error */
        document.getElementById("btn_close").addEventListener('click', function(e){
            document.getElementById('modal_wrap').remove();
        });
    });
}