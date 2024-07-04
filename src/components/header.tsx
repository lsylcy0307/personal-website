import { useNavigate } from 'react-router-dom';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SpokeIcon from '@mui/icons-material/Spoke';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import '../css/style.css';

function Header() {
  const navigate = useNavigate();

  async function toHome() {
    navigate('/home');
  }

  async function toGallery() {
    navigate('/about');
  }

  async function toExperience() {
    navigate('/experiences');
  }

  async function toProjects() {
    navigate('/projects');
  }

  return (
    <div className="header-container">
      <div className="header-title">
        <h3>
          <a href='/about'>Su Yeon Lee</a>
        </h3>
      </div>
      <div className="colored-div green-div" onClick={toGallery}>
        <PersonOutlineIcon className="custom-icon" />
      </div>
      <div className="colored-div orange-div" onClick={toExperience}>
        <SpokeIcon className="custom-icon" />
      </div>
      <div className="colored-div red-div" onClick={toProjects}>
        <EmojiObjectsOutlinedIcon className="custom-icon" />
      </div>
      <div className="colored-div blue-div">
        <PendingOutlinedIcon className="custom-icon" />
      </div>
    </div>
  );
}

export default Header;
