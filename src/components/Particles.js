import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
//import { loadFull } from 'tsparticles';
import { useCallback, useMemo } from 'react';

const PartilesComponent = () => {
    const options = useMemo(() => {
        return {
            fullScreen: {
                enable: true,
                zIndex: 0
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onMover: {
                        enable: true,
                        mode: "repulse"
                    }
                },
                modes: {
                    push: {
                        quantity: 5
                    },
                    repulse: {
                        distance: 100
                    }
                }
            },
            particles: {
                links: {
                    enable: true,
                    color: "0de622"
                },
                move: {
                    enable: true,
                    speed: { min: 0.5, max: 1 }
                },
                opacity: {
                    value: { min: 0.3, max: 0.9 }
                },
                size: {
                    value: { min: 0.5, max: 3 }
                },
                color: {
                    value: "#0de622"
                }
            }
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        // loadFull(engine); 
    }, [])

    return <Particles init={particlesInit} options={options} />
};

export default PartilesComponent;