import eliasImg from "../assets/elias.jpg";

function AboutMe() {
    return (
        <div className="aboutMe w-full min-h-screen flex flex-col pb-4 gap-10 bg-dark-blue/[.9] lg:w-[800px] lg:min-h-0 lg:h-min">

            <h1 className="title bg-white py-4 text-black w-full text-center uppercase text-2xl font-bold">
                About Me
            </h1>

            <div className="img w-full flex justify-center">
                <div className="imgbox w-[150px] h-[150px] overflow-hidden rounded-md">
                    <img src={eliasImg} alt="" className="object-cover w-full" />
                </div>
            </div>

            <div className="desc px-4 w-full">
                <p>Computer technologist, web and application developer. I am a student of computer science, currently studying the career of computer technologist in Paysandú and working in Sofka.</p>
                <p>I have good experience in application development and web development. I am always looking to learn new programming languages and develop my programming skills.</p>
            </div>

            <div className="education px-4 w-full">
                <h2 className="underline font-bold text-lg">Education</h2>
                <h5 className="uppercase">university of the republic (udelar) and utec (2018-present)</h5>
                <ul>
                    <li>Computer Technologist</li>
                </ul>
            </div>

            {/* <div className="experience px-4 w-full">
                <h2 className="underline font-bold text-lg">Work Experience</h2>
            </div> */}

            <div className="languages px-4 w-full">
                <h2 className="underline font-bold text-lg">Languages</h2>
                <ul>
                    <li>Spanish: Native.</li>
                    <li>Inglish: Intermediate.</li>
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