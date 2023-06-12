import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
    
    useEffect(() => {
        document.title = `Page not Found - 404`;
    }, [])
    
    return (
        <div className="text-center">
            <h1>Page not Found</h1>
            <h3>404</h3>
            <Link to="/" className="bg-white px-4 py-2 cursor-pointer text-black rounded-md">Ir atras</Link>
        </div>
    );
}

export default NotFound;