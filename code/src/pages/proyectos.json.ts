import type Project from "src/types/Project"

/**
 * Project template
    {
        title: "",
        tags: [],
        description: "",
        links: {
            github: "",
            gitlab: "",
            demo: "",
        },
    },
 */

export async function GET({ }): Promise<Response> {
    const projects: Project[] = [
        {
            title: "Game of Life",
            tags: ["Javascript", "Game", "HTML", "CSS"],
            description: "Implementación del juego de Jhon Conway \"Game of life\", un juego sin jugador que simula un comportamiento complejo mediante reglas simples.",
            links: {
                codepen: "https://codepen.io/sbianchi/pen/gORGZae",
            },

        },
        {
            title: "WordleToy",
            tags: ["Game", "ReactJs", "Typescript", "Containers", "NestJs", "CSS"],
            description: "Práctica de programación recreando el famoso juego WordleToy usando ReactJs, Nest y contenedores podman.",
            links: {
                github: "https://github.com/Elias288/WordleToy",
            },
        },
        {
            title: "Web Scraping Concept",
            tags: ["NodeJs", "Typescript", "Ejs", "Cheerio", "Web Scraping", "HTML"],
            description: "Prueba de concepto de página web estática haciendo web scraping con github actions, en cada ejecución de <code>github Action</code> se ejecuta el script de web scraping que genera el archivo <code>html</code> con la información obtenida",
            links: {
                github: "https://github.com/Elias288/WebScraping-concept-test",
                demo: "https://elias288.github.io/WebScraping-concept-test/",
            },
        },
        {
            title: "Web page utilities",
            tags: ["HTML", "CSS", "AstroJs"],
            description: "Página web estática desarrollada en <code>AstroJs</code> donde listar estilos útiles, comandos de <code>javascript</code>, ideas prácticas para proyectos webs y referencias a herramientas.",
            links: {
                gitlab: "https://gitlab.com/bianchi.elias/web-page-utilities/",
                demo: "https://web-page-utilities-272ebb.gitlab.io/",
            },
        },
        {
            title: "Servidor Personal",
            tags: ["Infrastructure", "Podman", "NginxProxy", "Server"],
            description: "Configuración desde 0 de un servidor, exponiendo servicios dentro de contenedores usando <code>Podman</code>, aplicando medidas de seguridad y encriptación <code>https</code>, y proxy reverso.",
            links: {
                gitlab: "https://gitlab.com/bianchi.elias/servidor-personal",
                demo: "https://home.ebianchiserver.duckdns.org/",
            },
        },
        {
            title: "Seguimiento Comida",
            tags: ["NodeJs", "MySQL", "Angular", "Podman"],
            description: "Aplicación <code>full stack</code> en <code>Angular</code> y backend en contenedores, de registro y seguimiento de los almuerzos, gestión de usuarios y sincronización con base de datos.",
            links: {
                github: "https://github.com/Elias288/Seguimiento_Comida",
            },
        },
        {
            title: "Hormiga de Langton",
            tags: ["Javascript", "JsDoc", "HTML", "CSS"],
            description: "Implementación de la Maquina de turing - La hormiga de Langton es un una máquina de Turing bidimensional con un conjunto de reglas muy sencillo, que sin embargo da lugar a comportamientos emergentes complejos.",
            links: {
                github: "https://github.com/Elias288/hormiga_de_langton",
            },
        },
        {
            title: "Gym App",
            tags: ["React Native", "JsDoc", "MongoDB", "Podman", "NestJs"],
            description: "Proyecto full-stack para el seguimiento de las rutinas del gimnasio en una aplicación movil. en una aplicación movil. en una aplicación movil. en una aplicación movil.",
            links: {
                github: "https://github.com/Elias288/Gym_App",
            },
        },
    ]

    return new Response(JSON.stringify(projects), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}