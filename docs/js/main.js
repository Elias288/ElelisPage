const header = document.querySelector('header'),
    main = document.querySelector('.main'),
    about = document.getElementById('sobreMi'),
    proyectos = document.getElementById('proyectos'),
    aboutBtn = document.querySelector("header .container nav ul li:nth-of-type(1) a"),
    proyectosBtn = document.querySelector("header .container nav ul li:nth-of-type(2) a"),
    aboutClose = document.querySelector("#sobreMi a");
    proyectosClose = document.querySelector("#proyectos a");


function endListenerAbout(evt) {
    main.style.display = "";
    about.style.display = "";
    header.style.display = "none";

    window.setTimeout(() => {
        topFunction();
        main.classList.toggle("activo");
        about.classList.toggle("activo");
    }, 50);
    evt.currentTarget.removeEventListener("transitionend", endListenerAbout);
}

function endListenerInicio(evt) {
    header.style.display = "";
    main.style.display = "none";
    about.style.display = "none";
    proyectos.style.display = "none";

    window.setTimeout(() => {
        topFunction();
        header.classList.toggle("activo");
    }, 50);
    evt.currentTarget.removeEventListener("transitionend", endListenerInicio);
}

function endListenerProyect(evt) {
    main.style.display = "";
    proyectos.style.display = "";
    header.style.display = "none";

    window.setTimeout(() => {
        topFunction();
        proyectos.classList.toggle("activo");
        main.classList.toggle("activo");
    }, 50);
    evt.currentTarget.removeEventListener("transitionend", endListenerProyect);
}

aboutBtn.addEventListener("click", function(){
    header.classList.toggle("activo");
    header.addEventListener("transitionend", endListenerAbout);
});

aboutClose.addEventListener("click", function(){
    main.classList.toggle("activo")
    about.classList.toggle("activo")
    about.addEventListener("transitionend", endListenerInicio)
});

proyectosBtn.addEventListener("click", function(){
    header.classList.toggle("activo");
    header.addEventListener("transitionend", endListenerProyect);
});

proyectosClose.addEventListener("click", function(){
    main.classList.toggle("activo")
    proyectos.classList.toggle("activo")
    proyectos.addEventListener("transitionend", endListenerInicio)
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

particlesJS(
    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": false,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
);