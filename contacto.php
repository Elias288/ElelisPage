<html>
    <head>
        <title>Eleli'sPage</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <!--<link rel="stylesheet" href="css/fonts.css">-->
        <link href="https://file.myfontastic.com/L3kkxtQTjFsu2uLh9qHZuF/icons.css" rel="stylesheet">
        <script src="js/verificador.js"></script>
    </head>
    <body>
        <header>
            <div class="container">
                <div class="icon-laptop"></div>
                <h1> Eleli'sPage</h1>
                <a href="index.html" class="volver icon-reply-all" for="menu-bar"></a>
                
            </div>
        </header>
        <main>
            <section id="contacto" class="tab4">
                <h2 class="icon-envelope"> Contacto</h2>
                <p>Enviame un mensaje</p>
                <div class="formulario">
                    <form action="" method="post" id="formEnviar">
                        <input type="text" name="name" id="name" class="inf" placeholder="NOMRE" require>
                        <input type="text" name="mail" id="mail" class="inf" placeholder="CORREO"require>
                        <input type="text" name="asunto" id="asunto" class="inf" placeholder="ASUNTO">
                        <textarea name="message" class="message" placeholder="MENSAJE ... " id="mensaje" require></textarea>
                        <div class="con-md-8">
                            <input type="submit" id="btn_send" class="enviar" value="ENVIAR" name="enviar">
                        </div>
                    </form>
                    <?php include("enviar.php");?>
                </div>
            </section>
        </main>
    </body>
</html>

            