"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesConfig from "./Particle-config";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const App = () => {
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

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      particles: {
        options: { fullscreen: { enable: false, zIndex: 0 } },
        color: {
          value: "#ff0000",
          animation: {
            enable: true,
            speed: 20,
            sync: true,
          },
        },
        lineLinked: {
          blink: false,
          color: "random",
          consent: false,
          distance: 30,
          enable: true,
          opacity: 0.3,
          width: 0.5,
        },
        move: {
          attract: {
            enable: false,
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          bounce: false,
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: false,
            area: 2000,
          },
          limit: 0,
          value: 200,
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.05,
            speed: 2,
            sync: false,
          },
          random: false,
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          animation: {
            enable: false,
            minimumValue: 0.1,
            speed: 40,
            sync: false,
          },
          random: true,
          value: 1,
        },
      },
      polygon: {
        draw: {
          enable: true,
          lineColor: "rgba(255,255,255,0.2)",
          lineWidth: 0.3,
        },
        move: {
          radius: 10,
        },
        inlineArrangement: "equidistant",
        scale: 0.5,
        type: "inline",
        url: "https://particles.js.org/images/smalldeer.svg",
      },
    }),
    []
  );

  if (init) {
    return (
      <div>
        <Particles particlesLoaded={particlesLoaded} options={options} />
      </div>
    );
  }

  return <>error</>;
};

export default App;
