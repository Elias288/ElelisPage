
const router = (route) => {
    const header = document.querySelector('header')
    const about = document.getElementById('sobreMi')
    const proyectos = document.getElementById('proyectos')
    switch (route) {
        case "":
        case "#/":
            /* HEADER */
            window.setTimeout(() => {header.classList.remove('timeout')}, 1000);
            window.setTimeout(() => {header.classList.add('activo')}, 1200);

            /* SOBRE MI */
            about.classList.remove('activo')
            window.setTimeout(() => {about.classList.add('timeout')}, 1000);

            /* PROYECTOS */
            proyectos.classList.remove('activo')
            window.setTimeout(() => {proyectos.classList.add('timeout')}, 1000);

            topFunction();
            break;
        case '#/sobreMi':
            /* SOBRE MI */
            window.setTimeout(() => {about.classList.remove('timeout')}, 1000);
            window.setTimeout(() => {about.classList.add('activo')}, 1200);

            /* HEADER */
            header.classList.remove('activo')
            window.setTimeout(() => {header.classList.add('timeout')}, 1000);

            /* PROYECTOS */
            proyectos.classList.remove('activo')
            window.setTimeout(() => {proyectos.classList.add('timeout')}, 1000);
            
            topFunction();
            break;
        case '#/proyectos':

            /* PROYECTOS */
            window.setTimeout(() => {proyectos.classList.remove('timeout')}, 1000)
            window.setTimeout(() => {proyectos.classList.add('activo')}, 1200)

            /* HEADER */
            header.classList.remove('activo')
            window.setTimeout(() => { header.classList.add('timeout')}, 1000)

            /* SOBRE MI */
            about.classList.remove('activo')
            window.setTimeout(() => { about.classList.add('timeout')}, 1000)
            

            //topFunction();
            break;
        default:
            return console.log('404')
    }
};

router(window.location.hash);

window.addEventListener('hashchange', () => {
    router(window.location.hash)
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