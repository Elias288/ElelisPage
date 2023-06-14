import { Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout.component.blog";
import postList from "../../post.json";
import { useEffect } from "react";
import PostSingleComponent from "../components/PostSingle.component.blog";
import Post from "../../Utils/Post.interface";

function PostPage() {
    const { id } = useParams()
    const fechedPost = postList.find((post: Post) => post.id === id)

    useEffect(() => {
        document.title = `Blog-${id}`;
        window.scroll(0, 0)
    });

    if(!fechedPost || !id) {
        return <Navigate to="/blog/404" />
    }

    return (
        <Layout>
            <PostSingleComponent post={fechedPost} />
        </Layout>
    );
}

export default PostPage;