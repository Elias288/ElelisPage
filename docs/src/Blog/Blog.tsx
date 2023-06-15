import { Outlet } from "react-router-dom";
import { PostFilterProvider } from "./context/PostFilter.context.blog";
function Blog() {
    return (
        <div className="bg-gray-100">
            <PostFilterProvider>
                <Outlet />
            </PostFilterProvider>
        </div>
    );
}

export default Blog;