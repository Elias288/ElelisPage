import type Project from "src/types/Project"
import json from '../components/Proyectos/proyectos.json'

/* Project template
    {
        title: "",
        tags: [],
        description: "",
        img: "",
        links: {
            github: "",
            gitlab: "",
            demo: "",
        },
    },
 */

export async function GET({ }): Promise<Response> {
    const projects: Project[] = json;
    return new Response(JSON.stringify(projects), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}