import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import Particles from '@tsparticles/react';

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadFull(engine as any);
    } catch (error) {
      console.error('Error initializing particles:', error);
    }
  }, []);

  return (
    <Particles
      id="tsparticles"
      particlesInit={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: false,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#0f172a",
          },
          collisions: {
            enable: true,
          },
          links: {
            color: "#0f172a",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 w-full h-full -z-10"
    />
  );
};