"use client";
import { useEffect, useRef } from "react";

export default function Component() {
  const containerRef = useRef(null);
  const revealCircleRef = useRef(null);
  const circleSizeRef = useRef(0);
  const scrollEnabledRef = useRef(false);
  const contentScrolledRef = useRef(false);
  const textTransitionedRef = useRef(false);

  const images = ["./img1.jpg", "./img2.jpg"];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const maxSize = Math.sqrt(
      Math.pow(container.offsetWidth, 2) + Math.pow(container.offsetHeight, 2)
    );

    const initialTextElements = container.querySelectorAll('.initial-text');
    const finalTextElements = container.querySelectorAll('.final-text');
    const scrollInfoElement = container.querySelector('.scroll-info');

    const handleWheel = (e) => {
      if (scrollEnabledRef.current) {
        if (e.deltaY < 0 && !contentScrolledRef.current) {
          contentScrolledRef.current = true;
          return;
        }
        return;
      }

      e.preventDefault();

      if (e.deltaY > 0) {
        circleSizeRef.current = Math.min(circleSizeRef.current + 50, maxSize);

        if (revealCircleRef.current) {
          revealCircleRef.current.style.width = `${circleSizeRef.current}px`;
          revealCircleRef.current.style.height = `${circleSizeRef.current}px`;
        }

        if (circleSizeRef.current === maxSize) {
          scrollEnabledRef.current = true;
          contentScrolledRef.current = false;
          
          // Transition text
          if (!textTransitionedRef.current) {
            initialTextElements.forEach(el => el.style.opacity = '0');
            finalTextElements.forEach(el => el.style.opacity = '1');
            if (scrollInfoElement) scrollInfoElement.style.opacity = '1';
            textTransitionedRef.current = true;
          }
        }
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
    <>
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
            <span className="initial-text transition-opacity duration-500 opacity-100">
              Digital solutions for a sustainable tomorrow
            </span>
          
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            <span className="initial-text transition-opacity duration-500 opacity-100">
              Scroll down to reveal more
            </span>
            <span className="final-text transition-opacity duration-500 opacity-0 absolute top-0 left-0 right-0">
              Image transition complete
            </span>
          </p>
          
          <h1 className="scroll-info mt-2 text-4xl transition-opacity duration-500 opacity-0">
            Normal scrolling is now enabled
          </h1>
        </div>
      </div>
      {/* Additional content */}
      <div style={{ height: "1000px" }}></div>
    </>
  );
}