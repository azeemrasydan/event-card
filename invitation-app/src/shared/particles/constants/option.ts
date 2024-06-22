import { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";

export const CONFETTI_DEFAULT: ISourceOptions = {
    fullScreen: {
        enable: false,
        zIndex: 1000
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
            speed: { min: 0.5, max: 3 },
            direction: MoveDirection.bottom,
            outModes: OutMode.out,
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
}

export const CONFETTI_SCHOOLCARD: ISourceOptions = {
    fullScreen: {
        enable: false,
        zIndex: 1000
    },
    style: {
        position: "absolute",
    },
    particles: {
        number: {
            value: 4
        },
        color: {
            value: [
                "#ADD8E6"
            ],
        },
        shape: {
            type: ["circle"],
        },
        opacity: {
            value: 0.6,
        },
        "size": {
            "value": { min: 3, max: 10 },
        },
        move: {
            enable: true,
            speed: { min: 0.5, max: 3 },
            direction: MoveDirection.bottom,
            outModes: OutMode.out,
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
            onClick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            push: {
                quantity: 1,
            },
        },
    },
}