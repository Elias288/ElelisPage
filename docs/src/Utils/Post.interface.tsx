export default interface Post {
    id: string
    title: string
    date?: string
    contents: Array<string>
    categories: Array<string>
    description: string
    modified_date?: string
}