interface Links {
    github?: string;
    gitlab?: string;
    demo?: string;
    codepen?: string;
}
export default interface Project {
    title: string;
    tags?: string[],
    description: string;
    img: string;
    links: Links;
}