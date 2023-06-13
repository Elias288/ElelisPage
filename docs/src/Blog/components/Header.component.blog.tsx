import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

function HeaderBlog() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const showMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <>
            <div className="header w-full h-[64px] flex bg-dark-blue text-white px-4 py-2">
                <h1 className="m-0 p-0">
                    Eleli's Blog
                </h1>
                <div className="menu absolute top-0 right-0 h-[64px] p-2 cursor-pointer bg-black md:hidden">
                    <IoMenu className="w-[50px] h-[50px] text-white" onClick={showMenu}></IoMenu>
                </div>
            </div>
            <div className={`navbarBlog ${!toggleMenu ? 'menuNotShow' : ''} md:w-max md:absolute md:top-0 md:right-0 md:h-[64px]`}>
                <div className="w-full flex flex-col justify-around bg-dark-blue gap-2 md:flex-row md:gap-8 md:h-full">
                    <Link to="/blog" className="w-full text-white px-10 hover:bg-very-dark-blue/[.4] hover:text-gray-400 bg-light-blue/[.3] py-6 md:max-w-max md:h-full md:py-0 md:leading-[64px]">Inicio</Link>
                    <Link to="/" className="w-full text-white px-10 hover:bg-very-dark-blue/[.4] hover:text-gray-400 bg-light-blue/[.3] py-6 md:max-w-max md:h-full md:py-0 md:leading-[64px]">Portafolio</Link>
                </div>
            </div>
        </>
    );
}

export default HeaderBlog;