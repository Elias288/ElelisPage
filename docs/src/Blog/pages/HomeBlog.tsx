import Layout from "../components/Layout.component.blog";
import PostListBlog from "../components/PostList.component.blog";

function HomeBlog() {
    
    return (
        <>
            <Layout>
                <PostListBlog />
            </Layout>
        </>
    );
}

export default HomeBlog;