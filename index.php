<html>
    <head>
        <title>Eleli'sPage</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <link href="https://file.myfontastic.com/L3kkxtQTjFsu2uLh9qHZuF/icons.css" rel="stylesheet">
        <!--<link rel="stylesheet" href="css/fonts.css">-->
    </head>
    <body>
        <header>
            <div class="container">
                <div class="icon-laptop"></div>
                <h1> Eleli'sPage</h1>
                <input type="checkbox" id="menu-bar"> 
                <label id="menu-ico" class="icon-list" for="menu-bar"></label>
                <nav class="menu">
                    <label id="menu-items" class="label1" for="radio1">HOME</label>
                    <label id="menu-items" class="label2" for="radio2">ABOUT</label>
                    <label id="menu-items" class="label3" for="radio4">CONTACT</label>
                    <!--<a class="tablinks" href="contacto.php">CONTACT</a>-->
                    
                </nav>
            </div>
        </header>
        <main>
            <!--//////////////////BIENVENIDA//////////////////-->
            <input type="radio" name="radio" id="radio1" checked>
            <section id="home" class="tab1">
                <div class="info">
                    <div class="submenu">
                        <ul id="nav">
                            <li>
                                <input type="checkbox" id="submenu-bar"> 
                                <label id="submenu-ico" class="submenu-ico icon-list" for="submenu-bar"></label>
                                <ul class="submenu-ul">
                                    <li class="li li-inicio">
                                        <label for="radio1-1" id="submenuitem">Inicio</label>
                                    </li>
                                    <li class="li li-linux">
                                        <label for="radio1-2" id="submenuitem">Linux</label>
                                    </li>
                                    <!--<li class="li li-tip">
                                        <label for="radio1-3" id="submenuitem">TIP</label>
                                    </li>-->
                                    <li class="li li-biblioteca">
                                        <label for="radio1-4" id="submenuitem">Biblioteca</label>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!--BIENVENIDA-->
                    <input type="radio" name="radio1" id="radio1-1" checked>
                    <section id="bienvenida"  class="tab1-1">
                        <h2>Bienvenido a mi Pagina</h2>
                        <p>Mi pagina personal, donde pruebo cosas y trabajo</p>
                    </section>
                    <!--LINUX-->
                    <input type="radio" name="radio1" id="radio1-2">
                    <section id="linux"  class="tab1-2">
                        <?php include("linux.html") ?>
                    </section>
                    <!--TIP-->
                    <input type="radio" name="radio1" id="radio1-3" >
                    <section id="TIP"  class="tab1-3">
                        <h2>Pagina en servicio</h2>
                        <p>cosas de la carrera</p>
                    </section>
                    <!--BIENVENIDA-->
                    <input type="radio" name="radio1" id="radio1-4">
                    <section id="library"  class="tab1-4">
                        <h2><strong>Librería</strong></h2>
                        <iframe id="Gdrive" src="https://drive.google.com/embeddedfolderview?id=194dnHNzYuuHYACuZ6gVKysgAxM5HFEBw#list"></iframe>
                    </section>
                    
                </div>
            </section>
            
            <!--//////////////////ABOUT//////////////////-->
            <input type="radio" name="radio" id="radio2" >
            <section id="about"  class="tab2">
                <div class="card">
                    <h2>Elias Bianchi</h2>
                    <p>Programador</p>
                </div>
                <div class="cirular_portrait">
                    <img src="img/Elias.png" alt="programador">
                </div>
                <div class="info">
                    <div class="links">
                        <a href="https://www.facebook.com/bianchi.elias" class="icon-facebook-square"></a>
                        <a href="https://twitter.com/BianchiEliass" class="icon-twitter-square"></a>
                        <a href="https://www.instagram.com/elelibian/" class="icon-instagrem"></a>
                        <a href="https://github.com/Elias288" class="icon-github"></a>
                        <!--<a href="" class="icon-paypal"></a>-->
                    </div>
                    <p>Soy un estudiante de la carrera de Tecnologo en Informatica de Uruguay, 
                        programar es mi pasión dentro de la informática, conozo los 
                        principales lenguajes como java, c++/c y visual studio; 
                        ademas de desarrollo web con HTML, css, php y javascript.
                        Linux es mi sistema operativo favorito, en donde me he especializado 
                        en servidores web.
                    </p>
                    <div class="info-foot">
                        <a href="files/Curriculum Vitae(2020).pdf" class="foot-item" target="_blank">Descargar CV</a>
                        <label class="foot-item icon-envelope" for="radio4"> Contacto</label>
                    </div>
                    
                </div>
            </section>

            <!--//////////////////CONTACTO//////////////////-->
            <input type="radio" name="radio" id="radio4">
            <section id="contacto" class="tab4">
                <div class="card">
                    <h2 class="icon-envelope"> Contacto</h2>
                    <p>Enviame un mensaje</p>
                </div>
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
    <script src="js/verificador.js"></script>
</html>