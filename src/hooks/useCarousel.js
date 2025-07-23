import { useState, useMemo, useCallback } from "react";

export const useCarousel = (items) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  // Get three visible items (previous, current, next)
  const visibleItems = useMemo(() => {
    const total = items.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    return [items[prevIndex], items[currentIndex], items[nextIndex]];
  }, [items, currentIndex]);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  // Card flip functions
  const toggleCardFlip = useCallback((cardId) => {
    setFlippedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  }, []);

  const isCardFlipped = useCallback(
    (cardId) => {
      return !!flippedCards[cardId];
    },
    [flippedCards],
  );

  return {
    visibleItems,
    currentIndex,
    goToPrevious,
    goToNext,
    toggleCardFlip,
    isCardFlipped,
  };
};
