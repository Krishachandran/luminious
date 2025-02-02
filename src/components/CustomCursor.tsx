import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor-inner"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: position.x === 0 && position.y === 0 ? 0 : 1,
        }}
      />
      <div
        className={`custom-cursor-outer ${isHovering ? 'hovering' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: position.x === 0 && position.y === 0 ? 0 : 1,
        }}
      />
    </>
  );
};