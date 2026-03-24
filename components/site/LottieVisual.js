"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function LottieVisual({ path, className = "", loop = true }) {
  const [animationData, setAnimationData] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    let active = true;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (event) => {
      if (active) {
        setReducedMotion(event.matches);
      }
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    fetch(encodeURI(path))
      .then((response) => response.json())
      .then((data) => {
        if (!active) {
          return;
        }

        setAnimationData(data);
      })
      .catch(() => {
        if (active) {
          setAnimationData(null);
        }
      });

    return () => {
      active = false;
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, [path]);

  if (!animationData) {
    return <div aria-hidden="true" className={`lottie-fallback ${className}`.trim()} />;
  }

  return (
    <div className={`lottie-shell ${className}`.trim()}>
      <Lottie animationData={animationData} loop={reducedMotion ? false : loop} autoplay />
    </div>
  );
}
