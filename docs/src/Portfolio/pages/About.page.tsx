import { useEffect } from "react";
import eliasImg from "../../assets/elias.jpg";

function AboutMe() {
    
    useEffect(() => {
        document.title = 'Sobre mi';
    }, []);
    
    return (
        <div className="aboutMe w-full min-h-screen flex flex-col pb-4 gap-10 bg-dark-blue/[.9] lg:w-[800px] lg:min-h-0 lg:h-min">

            <h1 className="title bg-white py-4 text-black w-full text-center uppercase text-2xl font-bold">
                Sobre Mi
            </h1>

            <div className="img w-full flex justify-center">
                <div className="imgbox w-[150px] h-[150px] overflow-hidden rounded-md">
                    <img src={eliasImg} alt="" className="object-cover w-full" />
                </div>
            </div>

            <div className="desc px-4 w-full">

                <p>
                    Soy estudiante de informática, actualmente cursando la carrera de Tecnólogo en informática en Paysandú y trabajando en Sofka Co.<br />
                    Tengo buena experiencia en desarrollo de aplicaciones y desarrollo web. Siempre estoy buscando aprender nuevos lenguajes de programación
                    y desarrollar mis habilidades de programación.
                </p>
            </div>

            <div className="education px-4 w-full">
                <h2 className="underline font-bold text-lg">Education</h2>
                <h5 className="uppercase">UNIVERSIDAD DE LA REPÚBLICA (UDELAR) Y UTEC (2018 - actualidad)</h5>
                <ul>
                    <li>Tecnólogo en Informática</li>
                </ul>
            </div>

            {/* <div className="experience px-4 w-full">
                <h2 className="underline font-bold text-lg">Work Experience</h2>
            </div> */}

            <div className="languages px-4 w-full">
                <h2 className="underline font-bold text-lg">Lenguajes</h2>
                <ul>
                    <li>Español: Nativo.</li>
                    <li>Ingles: Intermedio.</li>
                </ul>
            </div>
            <hr />

            <div className="copyright w-full text-center">
                <p>&copy;2021 - ElelisPage</p>
            </div>
        </div>
    );
}

export default AboutMe;