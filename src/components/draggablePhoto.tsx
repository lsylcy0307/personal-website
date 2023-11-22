
import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import '../css/style.css';

interface DraggablePhotoProps {
    src: string;
    alt: string;
  }

  const DraggablePhoto: React.FC<DraggablePhotoProps> = ({ src, alt }) => {
    const [position, setPosition] = useState({ x: 20, y: 20 });

    const [{ isDragging }, drag] = useDrag({
        type: 'PHOTO',
        item: { src, alt, position },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      });

    const containerWidthPercentage = 80;
    const containerWidth = (containerWidthPercentage / 100) * window.innerWidth;
    const containerHeight = 400;

    const photoWidth = 100;
    const photoHeight = 100;

    const minX = 0;
    const minY = 0;
    const maxX = containerWidth - photoWidth;
    const maxY = containerHeight - photoHeight;

    useEffect(() => {
      const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
      const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
      setPosition({ x: randomX, y: randomY });
    }, []); // 
    
      const handleMouseMove = (e) => {
        const newPosition = {
            x: position.x + e.movementX,
            y: position.y + e.movementY,
        };
        if (
            newPosition.x >= minX &&
            newPosition.x <= maxX &&
            newPosition.y >= minY &&
            newPosition.y <= maxY
        ) {
            setPosition(newPosition);
        }
      };

      return (
        <div 
          ref={(node) => drag(node)}
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move',
            position: 'absolute',
            left: position.x,
            top: position.y,
          }}
          onMouseMove={handleMouseMove}
        >
          <img className="galleryImage" src={src} alt={alt}/>
        </div>
      );
    };
    
    export default DraggablePhoto;