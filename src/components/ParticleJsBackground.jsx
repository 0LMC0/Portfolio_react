import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesJsBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            autoPlay: true,
            background: {
                color: {
                    value: "#1f3825",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: true,
                        mode: "bubble",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        distance: 400,
                        size: 30,
                        duration: 0.4,
                        opacity: 1,
                    },
                    repulse: {
                        distance: 200,
                        duration: 6,
                    },
                },
            },
            fullScreen:{
                enable: true,
                zIndex: -5,
            },
            particles: {
                color: {
                    value: "#969696",
                },
                links: {
                    color: "#ffffff",
                    distance: 200,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    directions: "none",
                    enable: true,
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 700,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 0, max: 10 },
                },
            },
            detectRetina: false,
        }}
        />
    );
};

export default ParticlesJsBackground;