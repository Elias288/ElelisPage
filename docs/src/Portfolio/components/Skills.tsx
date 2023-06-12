import {
    IoLogoJavascript,
    IoLogoPython,
    IoLogoNodejs,
    IoLogoReact,
    IoLogoAngular,
    IoLogoHtml5,
    IoLogoDocker,
    IoLogoCss3,
} from "react-icons/io5";
import { GrMysql, } from "react-icons/gr";
import { SiPodman, SiPhp, SiCakephp, SiTypescript, SiGnubash } from "react-icons/si";

function Skills() {
    return (
        <>
            <div className="flex flex-col items-center">
                <hr className="w-full text-white" />
                <h1 className="text-center font-bold text-xl uppercase">
                    Habilidades
                </h1>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 w-3/4 pt-2">
                    <div className="flex flex-col items-center"><IoLogoJavascript className="text-5xl" />javascript</div>
                    <div className="flex flex-col items-center"><SiTypescript className="text-5xl" />Typescript</div>
                    <div className="flex flex-col items-center"><IoLogoPython className="text-5xl" />Python</div>
                    <div className="flex flex-col items-center"><GrMysql className="text-5xl" />MYSQL</div>
                    <div className="flex flex-col items-center"><IoLogoHtml5 className="text-5xl" />HTML5</div>
                    <div className="flex flex-col items-center"><IoLogoCss3 className="text-5xl" />Css</div>
                    <div className="flex flex-col items-center"><IoLogoDocker className="text-5xl" />Docker</div>
                    <div className="flex flex-col items-center"><SiPodman className="text-5xl" />Podman</div>
                    <div className="flex flex-col items-center"><SiPhp className="text-5xl" />PHP</div>
                    <div className="flex flex-col items-center"><SiGnubash className="text-5xl" />Bash</div>
                </div>
            </div>


            <div className="flex flex-col items-center">
                <hr className="w-full text-white" />
                <h1 className="text-center font-bold text-xl uppercase">
                    Frameworks
                </h1>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 w-3/4 pt-2">
                    <div className="flex flex-col items-center"><IoLogoNodejs className="text-5xl" />Nodejs</div>
                    <div className="flex flex-col items-center"><IoLogoAngular className="text-5xl" />Angular</div>
                    <div className="flex flex-col items-center"><IoLogoReact className="text-5xl" />React</div>
                    <div className="flex flex-col items-center"><SiCakephp className="text-5xl" />CakePHP</div>
                </div>
            </div>
        </>
    );
}

export default Skills;