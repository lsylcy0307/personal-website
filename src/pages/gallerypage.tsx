import React, { useState } from 'react';
import '../css/style.css';
import DraggablePhoto from '../components/draggablePhoto';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import profilePic from '../images/profile.png';

const photos: { src: string; alt: string }[] = [
    { src: 'https://picsum.photos/3000/2000', alt: 'Photo 2' },
    { src: 'https://picsum.photos/3000/2000', alt: 'Photo 2' },
    { src: 'https://picsum.photos/3000/2000', alt: 'Photo 2' },
];

const GalleryPage = () => {
  const [isUpperVisible, setIsUpperVisible] = useState(true);

  const toggleUpperContent = () => {
    setIsUpperVisible(!isUpperVisible);
  };

  return (
    <div
      style={{
        marginTop: '2rem'
      }}>
      <div
          style={{
            marginLeft:'6rem',
            marginRight:'6rem',
            marginBottom:'4rem'
          }}
      >
        {isUpperVisible && (
          <div className="upper-content" style={{alignItems: 'center',}}>
            <h1>About</h1>
            <img
              src={profilePic}
              alt="About Us"
              style={{ width: '300px', height: '320px', borderRadius: '20%'}}
            />
            <h2>Yeon Lee</h2>
            <p>- Freshman studying computer science and finance at UPenn.</p>
            <p>- Love building and solving.</p>
            <p>- Passion for food and arts.</p>
            <ArrowCircleDownIcon onClick={toggleUpperContent}/>
          </div>
        )}

        {!isUpperVisible && (
          <div className="lower-content">
            <ArrowCircleUpIcon onClick={toggleUpperContent}/>
            <h1>Photo Gallery</h1>
            <h3>Drag!</h3>
              <div className="galleryContainer">
                  {photos.map((photo, index) => (
                      <DraggablePhoto key={index} src={photo.src} alt={photo.alt} />
                  ))}
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
