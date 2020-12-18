window.onload=function(){
    
    document.getElementById("btn_send").addEventListener('click', function(e){
        //alert("ok");
        var errores = '';

        if(document.getElementById("name").value == ''){
            errores += '<p>Escriba un nombre</p>';
            document.getElementById('name').style.borderBottomColor = "#F14B4B";
        }else{
            document.getElementById('name').style.borderBottomColor = "black";
        }
        if(document.getElementById("mail").value == ''){
            errores += '<p>Ingrese su correo</p>';
            document.getElementById('mail').style.borderBottomColor = "#F14B4B";
        }else{
            document.getElementById('mail').style.borderBottomColor = "black";
        }
        if(document.getElementById("mensaje").value == ''){
            errores += '<p>Escriba un mensaje</p>';
            document.getElementById('mensaje').style.borderBottom = "2px solid #F14B4B";
        }else{
            document.getElementById('mensaje').style.borderBottom = "2px solid black";
        }

        if( errores == '' == false){
            document.getElementById('formEnviar').setAttribute('action', 'javascript:void(0);');
            var cont = document.getElementById('contacto');
            var MensajeModal = '<div class="modal_wrap" id="modal_wrap">' +
                                '<div class="mensaje_modal">'+
                                '<h3>Errores encontrados</h3>'+
                                errores +
                                '<span id="btn_close">Cerrar</span>'+
                                ' </div> </div>'
           cont.insertAdjacentHTML('beforebegin', MensajeModal);

           
            /*Cerrar mensaje de error */
            document.getElementById("btn_close").addEventListener('click', function(e){
                document.getElementById('modal_wrap').remove();
                document.getElementById('formEnviar').setAttribute('action', '');
            });
        }

    });
}