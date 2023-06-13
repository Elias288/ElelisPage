import { SiGithub } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function FooterBlog() {
    return (
        <div className="footer py-8">
            <hr />
            <div className="w-full flex justify-center">
                <div className="max-w-sm">
                    <Link to={'/'} className="flex items-center gap-2"><AiFillHome /> Volver al portafolio</Link>
                    <a href="https://github.com/Elias288/ElelisPage" target="_blank" className="flex items-center gap-2"><SiGithub />Visita el repositorio del Blog</a>
                </div>
            </div>
            <p className="m-0 text-center mt-2">&copy;2021 - ElelisPage</p>
        </div>
    );
}

export default FooterBlog;