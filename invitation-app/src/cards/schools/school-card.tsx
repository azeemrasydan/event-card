import { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

import WidgetsGroup from "../../components/widgets-group/widgets-group";
import "./school-card.css";

export default function SchoolCard() {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: false
            },
            style: {
                position: "absolute",
            },
            particles: {
                number: {
                    value: 10
                },
                color: {
                    value: [
                        "#1E00FF",
                        "#FF0061",
                        "#E1FF00",
                        "#00FF9E"
                      ],
                },
                shape: {
                    type: ["square"],
                },
                opacity: {
                    value: 1,
                },
                "size": {
                    "value": 3,
                    "animation": {
                      "enable": true,
                      "startValue": "min",
                      "count": 1,
                      "speed": 16,
                      "sync": true
                    }
                  },
                move: {
                    enable: true,
                    speed: { min: 0.5, max: 3},
                    direction: MoveDirection.bottom,
                    outMode: OutMode.out,
                },
                "rotate": {
                    "value": {
                        "min": 0,
                        "max": 360
                    },
                    "direction": "random",
                    "animation": {
                        "enable": true,
                        "speed": 30
                    }
                },
                "tilt": {
                    "direction": "random",
                    "enable": true,
                    "value": {
                        "min": 0,
                        "max": 360
                    },
                    "animation": {
                        "enable": true,
                        "speed": 30
                    }
                },
                "roll": {
                    "darken": {
                        "enable": true,
                        "value": 25
                    },
                    "enlighten": {
                        "enable": true,
                        "value": 25
                    },
                    "enable": true,
                    "speed": {
                        "min": 5,
                        "max": 15
                    }
                },
                
                "wobble": {
                    "distance": 30,
                    "enable": true,
                    "speed": {
                        "min": -7,
                        "max": 7
                    }
                },
                
            },
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                },
                modes: {
                    repulse: {
                        distance: 100,
                    },
                    push: {
                        quantity: 4,
                    },
                },
            },
        }),
        []
    );


    if (init) {
        return <>
            <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
            <div className="absolute items-center top-36 w-full app-fade-in-from-none-animate ">
                <h1 className="playwrite-fr-moderne-bold justify-center flex text-center">
                    MAJLIS GRADUASI
                </h1>
            </div>
            <div className="absolute items-center top-48 app-fade-in-from-none-animate ">
                <h1 className="text-3xl font-bold justify-center flex text-center">
                    SPM & APRESIASI KOKURIKULUM 2024
                </h1>
            </div>
            <div className="absolute items-center top-[18rem] w-full app-fade-in-from-none-animate ">
                <h1 className="flex font-bold justify-center text-center">
                    Jumaat, 19 DISEMBER 2024
                </h1>
            </div>
            <div className="absolute items-center top-[22rem] w-full app-fade-in-from-none-animate ">
                <h1 className="font-bold justify-center text-center">
                    DEWAN HANG TUAH
                </h1>
            </div>
            <div className="absolute items-center top-[24rem] w-full app-fade-in-from-none-animate ">
                <p className="text-xs font-bold justify-center text-center">
                    - Kolej Melayu Kuala Kangsar -
                </p>
            </div>
            <div className="absolute items-center top-[45rem] w-full app-fade-in-from-none-animate ">
                <p className="text-xs font-bold justify-center text-center">
                    - Kolej Melayu Kuala Kangsar -
                </p>
            </div>
            <div className="absolute items-center top-[50rem] w-full app-fade-in-from-none-animate ">
                <p className="text-xs font-bold justify-center text-center">
                    - End of card -
                </p>
            </div>
            <WidgetsGroup />
        </>
    }

    return <>Loading</>

}