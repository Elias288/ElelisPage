export type PostData = {
    title: string;
    description: string
    slug: string;
    date: string;
    img?: string;
    tags?: string[];
    suggestedPosts?: string[]
}