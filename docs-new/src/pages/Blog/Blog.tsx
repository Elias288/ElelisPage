import { Outlet } from "react-router-dom";
function Blog() {
    return (
        <div className="bg-gray-100">
            <Outlet />
        </div>
    );
}

export default Blog;