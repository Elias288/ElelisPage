export type PostData = {
    title: string;
    description: string
    date: Date | string;
    img?: string;
    tags?: string[];
    suggestedPosts?: string[]
}