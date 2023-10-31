import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Back from "./components/Back/Back";
import { useEffect, useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // let back = document.querySelector("#back")
  


  const textAnimation = () => {
    if (animating) return;
    setAnimating(true);

    const elems = document.querySelectorAll(".elem");
    elems.forEach((elem)=>{

      const h1s = elem.querySelectorAll("h1");

    gsap.to(h1s[index], {
      top: "-=100%",
      ease: "expo.inOut",
      duration: 1,
      onComplete: function () {
        gsap.set(this._targets[0], { top: "100%" });
        setAnimating(false);
      },
    });

    const nextIndex = (index + 1) % h1s.length;
    setIndex(nextIndex);

    gsap.to(h1s[nextIndex], {
      top: "-=100%",
      ease: "expo.inOut",
      duration: 1,
    });

    })
    
  };

  // useEffect(() => {
  //   Shery.imageEffect("#back", {
  //     style: 5,
  //     config: {
  //       a: { value: 1.49, range: [0, 30] },
  //       b: { value: -0.98, range: [-1, 1] },
  //       aspect: { value: 1.8822947576656774 },
  //       gooey: { value: true },
  //       infiniteGooey: { value: true },
  //       durationOut: { value: 1, range: [0.1, 5] },
  //       durationIn: { value: 1.5, range: [0.1, 5] },
  //       displaceAmount: { value: 0.5 },
  //       masker: { value: true },
  //       maskVal: { value: 1.33, range: [1, 5] },
  //       scrollType: { value: 0 },
  //       geoVertex: { range: [1, 64], value: 1 },
  //       noEffectGooey: { value: false },
  //       onMouse: { value: 1 },
  //       noise_speed: { value: 1.59, range: [0, 10] },
  //       metaball: { value: 0.21, range: [0, 2] },
  //       discard_threshold: { value: 0.5, range: [0, 1] },
  //       antialias_threshold: { value: 0, range: [0, 0.1] },
  //       noise_height: { value: 0.47, range: [0, 2] },
  //       noise_scale: { value: 12.15, range: [0, 100] },
  //     },
  //     gooey: true,
  //   });
  // }, []);


  return (
    <>
      <div onClick={textAnimation} id="main">
      {/* <div id="main"> */}
        <div id="back">
          <Back />
        </div>
        <div id="top">
          <div id="workingArea">
            <Header />
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
