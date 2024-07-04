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
        marginTop: '5rem'
      }}>
      <div
          style={{
            marginLeft:'6rem',
            marginRight:'6rem',
            marginBottom:'4rem'
          }}
      >
        {isUpperVisible && (
          <div className="upper-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img
            src={profilePic}
            alt="About Us"
            style={{ width: '300px', height: '320px', borderRadius: '20%' }}
          />
          <div style={{ maxWidth: '350px', marginTop: '1rem' }}>
            <h2>Su Yeon Lee</h2>
            <p>I am passionate about finding and solving problems with technology.</p>
            <p>I am studying Computer Science in Engineering & Economics in Wharton (Jerome Fisher Program in Management and Technology) at UPenn.</p>
          </div>
          {/* <ArrowCircleDownIcon onClick={toggleUpperContent}/> */}
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
