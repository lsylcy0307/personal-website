import React, { useState } from 'react';
import '../css/style.css';
import DraggablePhoto from '../components/draggablePhoto';

const photos: { src: string; alt: string }[] = [
    { src: 'https://picsum.photos/3000/2000', alt: 'Photo 2' },
    { src: 'https://picsum.photos/3000/2000', alt: 'Photo 2' },
    { src: 'https://picsum.photos/3000/2000', alt: 'Photo 2' },
];

const ToggleContentPage = () => {
  const [isUpperVisible, setIsUpperVisible] = useState(true);

  const toggleUpperContent = () => {
    setIsUpperVisible(!isUpperVisible);
  };

  return (
    <div
        style={{
          marginLeft:'6rem',
          marginRight:'6rem',
        }}
    >
      <h1>Profile</h1>
      <button onClick={toggleUpperContent}>
        {isUpperVisible ? 'Show Lower Content' : 'Show Upper Content'}
      </button>
      {isUpperVisible && (
        <div className="upper-content">
          <h1>Hello</h1>
        </div>
      )}
      {!isUpperVisible && (
        <div className="lower-content">
          <h1>Draggable Photo Gallery</h1>
            <div className="galleryContainer">
                {photos.map((photo, index) => (
                    <DraggablePhoto key={index} src={photo.src} alt={photo.alt} />
                ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default ToggleContentPage;
