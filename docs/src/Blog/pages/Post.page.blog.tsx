import { Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout.component.blog";
import postList from "../../post.json";
import { useEffect } from "react";
import PostComponent from "../components/Post.component.blog";

interface Post {
    id: string
    title: string
    date?: string
    content: string
    modified_date?: string
}

function PostPage() {
    const { id } = useParams()
    const fechedPost = postList.find((post: Post) => post.id === id)

    useEffect(() => {
        document.title = `Blog-${id}`;
        window.scroll(0, 0)
    });

    if(!fechedPost) {
        return <Navigate to="/blog/404" />
    }

    if (!id) {
        return <Navigate to="/blog/404" />
    }

    return (
        <Layout>
            <PostComponent post={fechedPost} />
        </Layout>
    );
}

export default PostPage;