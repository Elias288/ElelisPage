import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import SocialMedias from "../components/SocialMedias";

function Home() {
    return (
        <div className="home w-full min-h-screen flex flex-col pb-4 gap-10 bg-dark-blue/[.9] lg:w-[800px] lg:min-h-0 lg:h-min">

            <h1 className=" title bg-white py-4 text-black w-full text-center uppercase text-2xl font-bold">
                Elías Bianchi
            </h1>

            <Navbar />

            <hr />
            <Skills />

            <hr />
            <SocialMedias />
            <hr />

            <div className="copyright w-full text-center">
                <p>&copy;2021 - ElelisPage</p>
            </div>
        </div>
    );
}

export default Home;