import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbarBlog w-full flex justify-around py-4 lg:justify-center">
            <Link to="/blog" className="px-4 py-2 rounded-md text-black hover:bg-dark-blue hover:text-white">Home</Link>
            <Link to="/" className="px-4 py-2 rounded-md text-black hover:bg-dark-blue hover:text-white">Portfolio</Link>
        </div>
    );
}

export default Navbar;