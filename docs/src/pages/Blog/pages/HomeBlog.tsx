import { useEffect } from "react";
import Layout from "../components/Layout.component.blog";
import PostListBlog from "../components/PostList.component.blog";

function HomeBlog() {
    
    useEffect(() => {
        document.title = 'Blog-Inicio';
    }, []);
    
    return (
        <>
            <Layout>
                <PostListBlog />
            </Layout>
        </>
    );
}

export default HomeBlog;