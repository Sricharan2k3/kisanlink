"use client";
import { useEffect, useState, useRef } from "react";

export default function Component() {
  const [imageIndex, setImageIndex] = useState(0);
  const containerRef = useRef(null);
  const revealCircleRef = useRef(null);
  const circleSizeRef = useRef(0);
  const scrollEnabledRef = useRef(false);

  const images = [
    "https://wallpapers.com/images/hd/winter-streets-full-screen-hd-desktop-1q0dygcf3sty40ef.jpg",
    "https://wallpapers.com/images/hd/kayak-boat-full-screen-hd-desktop-0mr2y1jsnimnbjin.jpg",
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const maxSize = Math.sqrt(
      Math.pow(container.offsetWidth, 2) + Math.pow(container.offsetHeight, 2)
    );

    const handleWheel = (e) => {
      if (scrollEnabledRef.current) {
        if (e.deltaY < 0 && circleSizeRef.current === maxSize) {
          scrollEnabledRef.current = false;
        } else {
          return;
        }
      }

      e.preventDefault();

      if (e.deltaY > 0) {
        circleSizeRef.current = Math.min(circleSizeRef.current + 50, maxSize);
      } else {
        circleSizeRef.current = Math.max(circleSizeRef.current - 50, 0);
      }

      if (revealCircleRef.current) {
        revealCircleRef.current.style.width = `${circleSizeRef.current}px`;
        revealCircleRef.current.style.height = `${circleSizeRef.current}px`;
      }

      if (circleSizeRef.current === maxSize) {
        // setImageIndex(1);
        scrollEnabledRef.current = true;
      } else if (circleSizeRef.current === 0) {
        setImageIndex(0);
        scrollEnabledRef.current = true;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const revealCircle = document.createElement("div");
    revealCircle.className = "reveal-circle";
    container.appendChild(revealCircle);
    revealCircleRef.current = revealCircle;

    revealCircle.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: ${circleSizeRef.current}px;
      height: ${circleSizeRef.current}px;
      border-radius: 50%;
      background-image: url(${images[1]});
      background-size: ${container.offsetWidth}px ${container.offsetHeight}px;
      background-position: center;
      transform: translate(-50%, -50%);
      transition: all 0.1s linear;
      z-index: 10;
    `;

    return () => {
      container.removeChild(revealCircle);
    };
  }, [images]);

  return (
    <div className="relative h-screen overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 z-0">
        <img
          src={images[0]}
          alt="First Image"
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center text-primary-foreground">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Immerse Yourself
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          {imageIndex === 0
            ? "Scroll down to reveal the next image"
            : "Scroll up to return to the previous image"}
        </p>
        {scrollEnabledRef.current && (
          <p className="mt-2 text-sm">Normal scrolling is now enabled</p>
        )}
      </div>
    </div>
  );
}