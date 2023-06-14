export default interface Post {
    id: string
    title: string
    date?: string
    content: string
    categories: Array<string>
    description: string
    modified_date?: string
}