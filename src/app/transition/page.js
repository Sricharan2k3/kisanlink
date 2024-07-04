"use client";
import { useEffect, useState, useRef } from "react";

export default function Component() {
  const [imageIndex, setImageIndex] = useState(0);
  const [revealSize, setRevealSize] = useState(0);
  const [transitionComplete, setTransitionComplete] = useState(false);
  const containerRef = useRef(null);
  const scrollThreshold = 100; // Amount of scroll needed for full reveal

  const images = [
    "https://wallpapers.com/images/hd/winter-streets-full-screen-hd-desktop-1q0dygcf3sty40ef.jpg",
    "https://wallpapers.com/images/hd/kayak-boat-full-screen-hd-desktop-0mr2y1jsnimnbjin.jpg",
  ];

  useEffect(() => {
    let scrollAmount = 0;
    const handleWheel = (e) => {
      if (transitionComplete) {
        return; // Allow normal scrolling after transition is complete
      }

      e.preventDefault();

      scrollAmount += e.deltaY;
      const progress = Math.min(Math.abs(scrollAmount) / scrollThreshold, 1);
      setRevealSize(progress);

      if (Math.abs(scrollAmount) >= scrollThreshold) {
        if (scrollAmount > 0 && imageIndex < images.length - 1) {
          setImageIndex((prev) => prev + 1);
        } else if (scrollAmount < 0 && imageIndex > 0) {
          setImageIndex((prev) => prev - 1);
        }
        scrollAmount = 0;
        setRevealSize(0);

        if (imageIndex === images.length - 2) {
          setTransitionComplete(true);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [imageIndex, images.length, transitionComplete]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const revealCircle = document.createElement("div");
    revealCircle.className = "reveal-circle";
    container.appendChild(revealCircle);

    const updateRevealCircle = () => {
      const size = Math.sqrt(
        Math.pow(container.offsetWidth + 100, 2) +
          Math.pow(container.offsetHeight + 100, 2)
      );

      revealCircle.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: ${size * revealSize}px;
        height: ${size * revealSize}px;
        border-radius: 50%;
        background-image: url(${images[imageIndex]});
        background-size: ${container.offsetWidth}px ${container.offsetHeight}px;
        background-position: center;
        transform: translate(-50%, -50%);
        transition: width 0.1s ease-out, height 0.1s ease-out;
      `;
    };

    updateRevealCircle();
    window.addEventListener("resize", updateRevealCircle);

    return () => {
      container.removeChild(revealCircle);
      window.removeEventListener("resize", updateRevealCircle);
    };
  }, [imageIndex, images, revealSize]);

  return (
    <div className="relative">
      <div className="h-screen overflow-hidden" ref={containerRef}>
        <div className="absolute inset-0 z-0">
          <img
            src={images[(imageIndex - 1 + images.length) % images.length]}
            alt={`Previous Image`}
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Immerse Yourself
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            {transitionComplete
              ? "Scroll down to explore more"
              : "Use scroll to explore the journey"}
          </p>
        </div>
      </div>
      {transitionComplete && (
        <div className="h-screen bg-gray-100 flex items-center justify-center">
          <h2 className="text-3xl font-bold">Next Section</h2>
        </div>
      )}
    </div>
  );
}
