import { IoMail, IoLogoLinkedin, IoLogoGithub, IoLogoCodepen } from "react-icons/io5";

function SocialMedias() {
    return (
        <div className="RedesSociales flex flex-col items-center">
            <hr className="w-full text-white" />
            <h2 className="text-center font-bold text-xl uppercase">
                Redes sociales
            </h2>

            <div className="flex flex-col w-max lg:flex-wrap lg:flex-row">

                <a className="m-0 px-4 py-4 rounded-xl text-gray-400 flex items-center gap-2 hover:bg-white hover:text-black lg:flex-col" href="mailto:bianchi.elias@gmail.com">
                    <IoMail className="text-3xl" />
                    Mail to bianchi.elias@gmail.com
                </a>
                
                <a className="m-0 px-4 py-4 rounded-xl text-gray-400 flex items-center gap-2 hover:bg-white hover:text-black lg:flex-col" href="https://www.linkedin.com/in/elias-bianchi-3a5012183/">
                    <IoLogoLinkedin className="text-3xl" />
                    Linkedin
                </a>
                
                <a className="m-0 px-4 py-4 rounded-xl text-gray-400 flex items-center gap-2 hover:bg-white hover:text-black lg:flex-col" href="https://github.com/Elias288">
                    <IoLogoGithub className="text-3xl" />
                    Github
                </a>
                
                <a className="m-0 px-4 py-4 rounded-xl text-gray-400 flex items-center gap-2 hover:bg-white hover:text-black lg:flex-col" href="https://codepen.io/sbianchi">
                    <IoLogoCodepen className="text-3xl" />
                    Codepen
                </a>

            </div>
        </div>
    );
}

export default SocialMedias;