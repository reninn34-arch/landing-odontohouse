"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeftRight, ImageIcon } from "lucide-react";

export const SmileDesign = () => {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [beforeLoaded, setBeforeLoaded] = useState(true);
  const [afterLoaded, setAfterLoaded] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  const imagesReady = beforeLoaded && afterLoaded;

  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[var(--color-brand-gold)] font-bold uppercase tracking-widest text-xs md:text-sm">Results</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-blue-dark)] mt-3 mb-3 md:mb-4">
          {t.smileDesign.title}
        </h2>
        <p className="text-base text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto">
          {t.smileDesign.description}
        </p>

        {/* Slider Container */}
        <div
          ref={containerRef}
          className={`relative w-full max-w-4xl mx-auto h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl select-none ${imagesReady ? "cursor-col-resize" : "cursor-default"}`}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={(e) => { if (imagesReady) { setIsDragging(true); handleMove(e.clientX); } }}
          onTouchStart={(e) => { if (imagesReady) { setIsDragging(true); handleMove(e.touches[0].clientX); } }}
        >
          {/* Placeholder when images are not uploaded */}
          {!imagesReady && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 z-40">
              <ImageIcon className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-400 font-semibold text-lg">Before & After photos coming soon</p>
              <p className="text-gray-300 text-sm mt-2">Upload <code className="bg-gray-200 px-2 py-0.5 rounded text-xs">before.jpg</code> and <code className="bg-gray-200 px-2 py-0.5 rounded text-xs">after.jpg</code> to <code className="bg-gray-200 px-2 py-0.5 rounded text-xs">public/</code></p>
            </div>
          )}

          {/* After Image (Background — full width, color) */}
          <div className="absolute inset-0">
            <Image
              src="/after.jpg"
              alt="Smile after dental treatment"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              draggable={false}
              onError={() => setAfterLoaded(false)}
              onLoad={() => setAfterLoaded(true)}
            />
          </div>

          {/* Before Image (Foreground — clipped to left side, grayscale) */}
          <div
            className="absolute inset-0 z-10"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/before.jpg"
              alt="Smile before dental treatment"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover grayscale"
              draggable={false}
              onError={() => setBeforeLoaded(false)}
              onLoad={() => setBeforeLoaded(true)}
            />
          </div>

          {/* Fixed labels — always visible when images are loaded */}
          {imagesReady && (
            <>
              <div className="absolute top-4 left-4 z-30 bg-black/60 text-white px-4 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm pointer-events-none">
                {t.smileDesign.before}
              </div>
              <div className="absolute top-4 right-4 z-30 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue-dark)] px-4 py-1.5 rounded-full text-sm font-bold shadow-lg pointer-events-none">
                {t.smileDesign.after}
              </div>
            </>
          )}

          {/* Slider Handle */}
          {imagesReady && (
            <div
              className="absolute top-0 bottom-0 z-20 w-0.5 bg-white cursor-col-resize"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-10 md:h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[var(--color-brand-gold)]">
                <ArrowLeftRight className="w-5 h-5 text-[var(--color-brand-blue-dark)]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
