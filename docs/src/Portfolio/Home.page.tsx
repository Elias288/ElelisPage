import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import SocialMedias from "./components/SocialMedias";
import { motion } from "framer-motion";

function Home() {
    useEffect(() => {
        document.title = 'Inicio';
        window.scroll(0, 0);
    }, []);

    return (
        <motion.div
            className="home w-full min-h-screen flex flex-col pb-4 gap-5 bg-dark-blue/[.9] lg:w-[800px] lg:min-h-0 lg:h-min"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
        >

            <div className="title bg-white uppercase text-center text-black py-2">
                <h1 className="p-0 m-0">Elías Bianchi</h1>
            </div>

            <Navbar />

            <Skills />

            <SocialMedias />

            <div className="copyright w-full text-center text-white">
                <hr className="w-full text-white" />
                <p>&copy;2021 - ElelisPage</p>
            </div>
        </motion.div>
    );
}

export default Home;