'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  title?: string;
  subtitle?: string;
}

interface ImageCarouselProps {
  slides: Slide[];
  autoSlide?: boolean;
  interval?: number;
  height?: string;
}

export default function ImageCarousel({
  slides,
  autoSlide = true,
  interval = 5000,
  height = 'h-[500px]',
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoSlide, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title || `Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {(slide.title || slide.subtitle) && (
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                {slide.title && (
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight animate-fade-in-up">
                    <span className="text-luxury-gradient">{slide.title}</span>
                  </h2>
                )}
                {slide.subtitle && (
                  <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wider text-gold/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {slide.subtitle}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 glass-morphism hover:bg-gold/20 text-gold p-3 rounded-full shadow-luxury transition-all z-10 backdrop-blur-md border border-gold/30 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 glass-morphism hover:bg-gold/20 text-gold p-3 rounded-full shadow-luxury transition-all z-10 backdrop-blur-md border border-gold/30 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gold w-12 shadow-gold'
                  : 'bg-white/30 hover:bg-white/50 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
