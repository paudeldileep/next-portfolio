export const fireWorks = {
  detectRetina: true,
  background: {
    color: "#36454f",
  },
  fpsLimit: 60,
  emitters: {
    direction: "top",
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.1,
    },
    rate: {
      delay: 0.5,
      quantity: 1,
    },
    size: {
      width: 100,
      height: 0,
    },
    position: {
      y: 100,
      x: 50,
    },
  },
  particles: {
    number: {
      value: 0,
    },
    destroy: {
      mode: "split",
      split: {
        count: 1,
        factor: {
          value: 0.333333,
        },
        rate: {
          value: 100,
        },
        particles: {
          stroke: {
            width: 0,
          },
          color: {
            value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
          },
          number: {
            value: 0,
          },
          collisions: {
            enable: false,
          },
          opacity: {
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 0.7,
              sync: false,
              startValue: "max",
              destroy: "min",
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
            animation: {
              enable: false,
            },
          },
          life: {
            count: 1,
            duration: {
              value: {
                min: 1,
                max: 2,
              },
            },
          },
          move: {
            enable: true,
            gravity: {
              enable: false,
            },
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outMode: "destroy",
          },
        },
      },
    },
    life: {
      count: 1,
    },
    shape: {
      type: "line",
    },
    size: {
      value: {
        min: 0.1,
        max: 50,
      },
      animation: {
        enable: true,
        sync: true,
        speed: 90,
        startValue: "max",
        destroy: "min",
      },
    },
    stroke: {
      color: {
        value: "#ffffff",
      },
      width: 1,
    },
    rotate: {
      path: true,
    },
    move: {
      enable: true,
      gravity: {
        acceleration: 15,
        enable: true,
        inverse: true,
        maxSpeed: 100,
      },
      speed: {
        min: 10,
        max: 20,
      },
      outModes: {
        default: "destroy",
        top: "none",
      },
      trail: {
        fillColor: "#16161D",
        enable: true,
        length: 10,
      },
    },
  },
};

//type fountain effect

// const options = {
//   fpsLimit: 60,
//   interactivity: {
//     events: {
//       onClick: {
//         enable: true,
//         mode: "push",
//       },
//       onHover: {
//         enable: true,
//         mode: "repulse",
//       },
//       resize: true,
//     },
//     modes: {
//       bubble: {
//         distance: 400,
//         duration: 2,
//         opacity: 0.8,
//         size: 40,
//       },
//       push: {
//         quantity: 4,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//     },
//   },
//   particles: {
//     bounce: {
//       vertical: {
//         value: 0.85,
//         random: {
//           enable: true,
//           minimumValue: 0.75,
//         },
//       },
//     },
//     color: {
//       value: [
//         "#3998D0",
//         "#2EB6AF",
//         "#A9BD33",
//         "#FEC73B",
//         "#F89930",
//         "#F45623",
//         "#D62E32",
//         "#EB586E",
//         "#9952CF",
//       ],
//     },
//     number: {
//       value: 0,
//     },
//     destroy: {
//       mode: "split",
//       split: {
//         count: 2,
//         factor: {
//           value: 2,
//           random: {
//             enable: true,
//             minimumValue: 1.1,
//           },
//         },
//         rate: {
//           value: 3,
//           random: {
//             enable: true,
//             minimumValue: 2,
//           },
//         },
//       },
//     },
//     shape: {
//       type: "circle",
//     },
//     opacity: {
//       value: 0.5,
//     },
//     size: {
//       value: 20,
//       random: {
//         enable: true,
//         minimumValue: 10,
//       },
//     },
//     move: {
//       enable: true,
//       gravity: {
//         enable: true,
//         maxSpeed: 50,
//       },
//       speed: {
//         min: 10,
//         max: 20,
//       },
//       direction: "none",
//       random: false,
//       straight: false,
//       outModes: {
//         bottom: "split",
//         default: "bounce",
//         top: "none",
//       },
//       trail: {
//         enable: true,
//         fillColor: "#fff",
//         length: 3,
//       },
//     },
//   },
//   detectRetina: true,
//   background: {
//     color: "#fff",
//   },
//   emitters: {
//     direction: "top",
//     life: {
//       count: 0,
//       duration: 0.15,
//       delay: 3,
//     },
//     rate: {
//       delay: 0.1,
//       quantity: 5,
//     },
//     size: {
//       width: 0,
//       height: 0,
//     },
//   },
// };

//options for particles with type links
export const links = {
  background: {
    color: {
      value: "#ffffff",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#7F00FF",
    },
    links: {
      color: "7F00FF",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
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
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};
