import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type Entry from "src/types/Entries";
import path from 'path'

/**
 * Valida la existencia de campos en la metadata del archivo astro
 * @param file Archivo al que se le realizará la validación
 * @param obj La metadata del archivo a ser validado
 * @param campos Campos que son obligatorios
 */
function validateKeys<T>(file: string, obj: T, campos: (keyof T)[]) {
    const faltantes = campos.filter(campo => obj[campo] === undefined)
    if (faltantes.length > 0) throw new Error(`Los siguientes campos {${faltantes.join(", ")}} están indefinidos en el archivo \n${file}`)
}

const modules = import.meta.glob('../content/proyectos/*.astro');
/**
 * Obtiene todos los archivos astro dentro del directorio `/components/proyectos/*.astro`
 * @returns Colección de componentes astro
 */
async function loadProyects(): Promise<Entry[]> {
    const entries: Entry[] = await Promise.all(
        Object.entries(modules).map(async ([filepath, resolver]) => {
            const mod = (await resolver()) as Entry & {
                default: AstroComponentFactory
            }

            // validateKeys(mod.file, mod, ["link", "file"])

            return {
                path: filepath,
                file: path.basename(mod.file, ".astro"),
                Component: mod.default
            }
        })
    )
        .then(entries => entries.filter(mod => !mod.file.includes("Template")))

    return entries
}

export default loadProyects;