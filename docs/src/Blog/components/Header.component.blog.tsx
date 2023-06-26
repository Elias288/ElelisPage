import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function HeaderBlog() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const showMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const handleResize = () => {
            setToggleMenu(window.innerWidth >= 768);
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <div className="header w-full h-[64px] flex bg-dark-blue text-white px-4 py-2">
                <Link to="/blog" className="text-white hover:bg-very-dark-blue/[.4] hover:text-gray-400">
                    <h1 className="m-0 p-0">
                        Eleli's Blog
                    </h1>
                </Link>
                <div className="menu absolute top-0 right-0 h-[64px] p-2 cursor-pointer bg-black md:hidden">
                    <IoMenu className="w-[50px] h-[50px] text-white" onClick={showMenu}></IoMenu>
                </div>
            </div>

            <AnimatePresence>
                {
                    toggleMenu && (
                        <motion.div
                            className={`navbarBlog md:w-max md:absolute md:top-0 md:right-0 md:h-[64px]`}
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ bounce: 0 }}
                        >
                            <div className="w-full flex flex-col justify-around bg-dark-blue gap-2 md:flex-row md:gap-8 md:h-full">
                                <Link to="/blog" className="w-full text-white px-10 hover:bg-very-dark-blue/[.4] hover:text-gray-400 bg-light-blue/[.3] py-6 md:max-w-max md:h-full md:py-0 md:leading-[64px]">Inicio</Link>
                                <Link to="/" className="w-full text-white px-10 hover:bg-very-dark-blue/[.4] hover:text-gray-400 bg-light-blue/[.3] py-6 md:max-w-max md:h-full md:py-0 md:leading-[64px]">Portafolio</Link>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    );
}

export default HeaderBlog;