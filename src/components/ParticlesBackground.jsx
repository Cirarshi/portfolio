import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles init");
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "#000000" },
        },
        particles: {
          number: {
            value: 50,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;

// This component uses the `react-tsparticles` library to create a particle background effect.
// The `particlesInit` function initializes the particles engine, and the `particlesOptions` object defines the configuration for the particles.
// The `Particles` component is rendered with the specified options, creating a dynamic and interactive background.
// The particles will respond to user interactions, such as clicks and hovers, and will have a bouncing effect when they reach the edges of the screen.
// The background color is set to black, and the particles are white with a specified size and opacity.
// The component can be used in a React application to enhance the visual appeal of the user interface.
// The `ParticlesBackground` component can be imported and used in other components or pages of the application.
// It is a reusable component that can be easily integrated into different parts of the application.
// The `particlesInit` function is called when the particles engine is initialized, allowing for custom initialization logic if needed.
// The `particlesOptions` object contains various properties to customize the appearance and behavior of the particles.
