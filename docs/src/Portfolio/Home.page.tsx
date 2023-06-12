import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import SocialMedias from "./components/SocialMedias";

function Home() {
    useEffect(() => {
        document.title = 'Inicio';
    }, []);

    return (
        <div className="home w-full min-h-screen flex flex-col pb-4 gap-5 bg-dark-blue/[.9] lg:w-[800px] lg:min-h-0 lg:h-min">

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
        </div>
    );
}

export default Home;