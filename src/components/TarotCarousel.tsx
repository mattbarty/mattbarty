'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface TarotCard {
  id: string;
  name: string;
  image: string;
}

interface TarotCarouselProps {
  cards: TarotCard[];
  className?: string;
}

// Helper to convert number to Roman numeral (0-21 for Major Arcana)
const romanNumerals = [
  '0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
  'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI'
];
function toRoman(num: number) {
  return romanNumerals[num] || num.toString();
}

export function TarotCarousel({ cards, className }: TarotCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (cards.length <= 2) return 0;
    return Math.floor(Math.random() * (cards.length - 2)) + 1;
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [infoKey, setInfoKey] = useState(0); // for triggering text animation

  const handlePrevious = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setDirection('right');
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isAnimating || currentIndex === cards.length - 1) return;
    setIsAnimating(true);
    setDirection('left');
    setCurrentIndex((prev) => prev + 1);
  };

  const handleCardClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 'left' : 'right');
    setCurrentIndex(index);
  };

  const handleIndicatorClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 'left' : 'right');
    setCurrentIndex(index);
  };

  useEffect(() => {
    setInfoKey((k) => k + 1); // trigger text animation
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with the transition duration in the CSS
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getCardStyle = (index: number) => {
    const position = index - currentIndex;
    const isCenter = position === 0;
    const isLeft = position === -1;
    const isRight = position === 1;
    const isFarLeft = position < -1;
    const isFarRight = position > 1;

    return clsx(
      'absolute transition-all duration-500 ease-in-out',
      'aspect-[5/7] w-full max-w-[200px] md:max-w-[300px]',
      isCenter && 'z-20 scale-100 translate-x-0',
      isLeft && 'z-10 scale-75 -translate-x-[60%] md:-translate-x-[70%]',
      isRight && 'z-10 scale-75 translate-x-[60%] md:translate-x-[70%]',
      isFarLeft && direction === 'left' && 'opacity-0 -translate-x-[120%] scale-75',
      isFarLeft && direction === 'right' && 'opacity-0 translate-x-[120%] scale-75',
      isFarRight && direction === 'left' && 'opacity-0 translate-x-[120%] scale-75',
      isFarRight && direction === 'right' && 'opacity-0 -translate-x-[120%] scale-75'
    );
  };

  const getOverlayStyle = (index: number) => {
    const position = index - currentIndex;
    const isCenter = position === 0;
    const isLeft = position === -1;
    const isRight = position === 1;

    return clsx(
      'absolute inset-0 transition-all duration-500 ease-in-out rounded-[14px]',
      isCenter && 'bg-transparent',
      isLeft && 'bg-gradient-to-r from-black/80 to-black/40',
      isRight && 'bg-gradient-to-l from-black/80 to-black/40',
      !isCenter && !isLeft && !isRight && 'bg-black/90'
    );
  };

  // Info bar overlay style (persistent, below carousel)
  const infoBarStyle =
    'absolute left-1/2 -translate-x-1/2 z-40 flex flex-col items-center ' +
    'w-[90vw] max-w-[200px] md:max-w-[300px] px-4 py-3 rounded-xl ' +
    ' ';

  // Info text animation
  const infoTextClass =
    'transition-opacity duration-300 ease-in-out opacity-100 will-change-opacity w-full';

  return (
    <div className={clsx('relative w-full h-[400px] md:h-[550px]', className)}>
      {/* Persistent Info Bar Overlay (below cards) */}
      <div className={infoBarStyle} style={{ bottom: 0, marginBottom: 16 }}>
        <div
          key={infoKey}
          className={infoTextClass}
          style={{ minHeight: 48 }}
        >
          <div className="flex flex-col items-center mt-1">
            <div className="flex items-center gap-1">
              {cards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleIndicatorClick(idx)}
                  className={clsx(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    'hover:scale-125',
                    currentIndex === idx
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  )}
                  aria-label={`Go to card ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-xs text-zinc-300 mt-1">
              {currentIndex + 1} of {cards.length}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className={clsx(
          "absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 text-white p-2 rounded-full transition-colors",
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-black/70"
        )}
        aria-label="Previous card"
        disabled={currentIndex === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className={clsx(
          "absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 text-white p-2 rounded-full transition-colors",
          currentIndex === cards.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-black/70"
        )}
        aria-label="Next card"
        disabled={currentIndex === cards.length - 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Cards Container */}
      <div className="relative w-full h-full flex items-start justify-center overflow-hidden">
        {cards.map((card, index) => {
          const position = index - currentIndex;
          const isVisible = position >= -1 && position <= 1;
          const isCenter = position === 0;
          return (
            <div
              key={card.id}
              className={getCardStyle(index)}
              onClick={() => isVisible && handleCardClick(index)}
              style={{ cursor: isVisible ? 'pointer' : 'default' }}
            >
              {/* Card Frame */}
              <div className="relative w-full h-full rounded-[18px] border-4 border-black box-content">
                {/* Top Roman Numeral Panel */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2 z-20 px-6 py-1 bg-black rounded-xl flex items-center justify-center shadow-md min-w-[56px]">
                  <span
                    className={clsx(
                      'text-xs md:text-lg font-bold tracking-widest select-none',
                      isCenter ? 'text-yellow-200' : 'text-zinc-800'
                    )}
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {toRoman(index)}
                  </span>
                </div>
                {/* Card Image */}
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover rounded-[14px] shadow-lg"
                  sizes="(max-width: 768px) 200px, 300px"
                />
                <div className={getOverlayStyle(index)} />
                {/* Bottom Card Name Panel */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 rounded-b-xl px-4 pb-4 pt-3 bg-black flex items-center justify-center shadow-md min-w-[80px] w-full">
                  <span
                    className={clsx(
                      'text-sm md:text-lg font-semibold text-center w-full select-none',
                      isCenter ? 'text-yellow-200' : 'text-zinc-800'
                    )}
                    style={{ letterSpacing: '0.04em' }}
                  >
                    {card.name}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div >
  );
} 