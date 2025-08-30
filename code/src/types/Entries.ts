import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export default interface Entry {
    file: string;
    Component: AstroComponentFactory
}
