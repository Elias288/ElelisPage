import Layout from "./Layout.component.blog";
import { useEffect } from "react";

function NotFoundBlog() {
    
    useEffect(() => {
        document.title = `Blog-404`;
    }, [])
    
    return (
        <Layout>
            <div className="notFound text-center">
                <h1>Page not Found</h1>
                <h3>404</h3>
            </div>
        </Layout>
    );
}

export default NotFoundBlog;