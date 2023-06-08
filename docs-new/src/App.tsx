import { useCallback } from "react"
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, [])

  return (
    <>
      <div className="w-full h-screen z-10 position: absolute text-white flex justify-center">
        <div
          className="w-full h-full bg-very-dark-blue/[.6] lg:w-[800px] lg:bg-very-dark-blue/[.9]"
        >
          <h1 className="w-full text-center uppercase text-xl">Elías Bianchi</h1>
        </div>
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000714",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            },
            number: {
              density: {
                enable: false,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 6
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
              anim: {
                enable: false,
                speed: 40,
                sync: false
              }
            },
          },
          detectRetina: true,
        }}
      />
    </>
  )
}

export default App
