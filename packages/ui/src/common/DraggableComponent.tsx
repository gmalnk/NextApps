import React, { useState, MouseEvent } from "react";

interface Position {
  x: number;
  y: number;
}

const DraggableComponent = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState<Position>({
    x: 100,
    y: 100,
  });

  const handleMouseDown = (event: MouseEvent) => {
    const isDraggable = (event.target as HTMLElement).closest("#draggable");

    if (isDraggable) {
      const initialX = event.clientX;
      const initialY = event.clientY;

      const initialPosition = { x: position.x, y: position.y };

      const handleMouseMove = (event: MouseEvent): void => {
        const deltaX = event.clientX - initialX;
        const deltaY = event.clientY - initialY;

        setPosition({
          x: initialPosition.x + deltaX,
          y: initialPosition.y + deltaY,
        });
      };

      document.addEventListener(
        "mousemove",
        handleMouseMove as unknown as EventListener
      );

      const handleMouseUp = () => {
        document.removeEventListener(
          "mousemove",
          handleMouseMove as unknown as EventListener
        );
      };

      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        zIndex: 1000,
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default DraggableComponent;
