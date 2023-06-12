import { Link } from "react-router-dom";
import curriculum from "../../assets/Curriculum_Vitae_(2022).pdf";

function Navbar() {
    return (
        <div className="text-center font-bold text-xl">
            <div className="flex flex-col justify-center px-4 w-full lg:flex-row">

                <div className="border-solid border-gray-400 border-2 hover:bg-white">
                    <Link className="block w-full m-0 p-4 text-gray-400 hover:text-black lg:py-2" to={'about'}>
                        Sobre Mi
                    </Link>
                </div>

                {/* <div className="border-solid border-gray-400 border-2 hover:bg-white">
                        <Link className="block w-full m-0 p-4 text-gray-400 hover:text-black lg:py-2" to={'proyects'}>Proyects</Link>
                    </div> */}
                    
                <div className="border-solid border-gray-400 border-2 hover:bg-white">
                    <Link className="block w-full m-0 p-4 text-gray-400 hover:text-black lg:py-2" to={'blog'}>
                        Blog
                    </Link>
                </div>

                <div className="border-solid border-gray-400 border-2 hover:bg-white">
                    <a href={curriculum} className="block w-full m-0 p-4 text-gray-400 hover:text-black lg:py-2">
                        Descargar CV
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Navbar;