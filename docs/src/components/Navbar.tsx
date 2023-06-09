import { Link } from "react-router-dom";
import curriculum from "../assets/Curriculum_Vitae_(2022).pdf";

function Navbar() {
    return (
        <div>
            <h1 className="text-center font-bold text-xl">
                <div className="flex flex-col justify-center px-4 w-full lg:flex-row">
                    <div className="border-solid border-gray-400 border-2 hover:bg-white">
                        <Link className="p-4 block w-full lg:p-2 text-gray-400 hover:text-black" to={'about'}>About Me</Link>
                    </div>
                    {/* <div className="border-solid border-gray-400 border-2 hover:bg-white hover:text-black">
                        <Link className="p-4 block w-full lg:p-2" to={'proyects'}>Proyects</Link>
                    </div> */}
                    <div className="border-solid border-gray-400 border-2 hover:bg-white">
                        <Link className="p-4 block w-full lg:p-2 text-gray-400 hover:text-black" to={'blog'}>Blog</Link>
                    </div>
                    <div className="border-solid border-gray-400 border-2 hover:bg-white">
                        <a href={curriculum} className="p-4 block w-full lg:p-2 text-gray-400 hover:text-black">Curriculum</a>
                    </div>
                </div>
            </h1>
        </div>
    );
}

export default Navbar;