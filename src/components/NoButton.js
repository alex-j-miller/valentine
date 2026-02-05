import { useCallback, useLayoutEffect, useRef, useState } from 'react';

const getRandomPosition = (containerRect, buttonRect) => {
  const maxX = Math.max(0, containerRect.width - buttonRect.width);
  const maxY = Math.max(0, containerRect.height - buttonRect.height);

  return {
    x: Math.round(Math.random() * maxX),
    y: Math.round(Math.random() * maxY),
  };
};

function NoButton({ containerRef, disabled }) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = useCallback(() => {
    if (disabled) {
      return;
    }

    const container = containerRef.current;
    const button = buttonRef.current;

    if (!container || !button) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const nextPosition = getRandomPosition(containerRect, buttonRect);

    setPosition(nextPosition);
  }, [containerRef, disabled]);

  useLayoutEffect(() => {
    moveButton();
  }, [moveButton]);

  useLayoutEffect(() => {
    if (disabled) {
      return undefined;
    }

    const handleResize = () => moveButton();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [disabled, moveButton]);

  const handleTouchStart = (event) => {
    event.preventDefault();
    moveButton();
  };

  return (
    <button
      ref={buttonRef}
      className="valentine-button no-button"
      type="button"
      style={{ left: position.x, top: position.y }}
      onMouseEnter={moveButton}
      onClick={moveButton}
      onTouchStart={handleTouchStart}
      disabled={disabled}
      aria-disabled={disabled}
    >
      No
    </button>
  );
}

export default NoButton;
