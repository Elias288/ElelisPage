<html>
    <head>
        <title>Eleli'sPage</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/fonts.css">
    </head>
    <body>
        <header>
            <div class="container">
                <div class="icon-laptop"></div>
                <h1> Eleli'sPage</h1>
                <a href="index.html" class="volver icon-paper-plane" for="menu-bar"></a>
                
            </div>
        </header>
        <main>
            <section id="contacto"  class="tabcontent">
                <h2>Contacto</h2>
                <p>bianchi.elias@gmail.com</p>
                <div class="formulario">
                    <form method="post" >
                        <input type="text" name="name" id="name" class="inf" placeholder="NOMRE">
                        <input type="text" name="mail" id="mail" class="inf" placeholder="CORREO">
                        <input type="text" name="asunto" id="asunto" class="inf" placeholder="ASUNTO">
                        <textarea name="message" class="message" placeholder="MENSAJE ... " id="mensaje"></textarea>
                        <div class="con-md-8">
                            <input type="submit" class="enviar" value="ENVIAR" name="enviar">
                            <!--<button type="submit" class="btn btn-primary">ENVIAR</button>-->
                        </div>
                    </form>
                    <?php include("enviar.php");?>
                </div>
            </section>
        </main>
    </body>
</html>

            