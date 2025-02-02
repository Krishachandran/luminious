import { useCallback } from 'react';
import { Container, Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Particles from '@tsparticles/react';
import { useTheme } from '../hooks/useTheme';

export const ParticlesBackground = () => {
  const { theme } = useTheme();
  
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log('Initializing particles...');
    try {
      await loadSlim(engine);
      console.log('Particles initialized successfully');
    } catch (error) {
      console.error('Error initializing particles:', error);
    }
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log('Particles container loaded:', container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.2,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#1e293b",
          },
          links: {
            color: "#1e293b",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 w-full h-full"
    />
  );
};