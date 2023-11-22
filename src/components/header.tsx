import { Typography, Button } from '@mui/material';
import { TextField, Link, Grid } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
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

  async function toProjects() {
    navigate('/projects');
  }

  return (
    <div
      className="flex w-full"
      style={{
        marginBottom: '1rem',
        marginLeft:'2rem',
        marginRight:'1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
        <div
        style={{
            width: '20%', 
            height: '100px', 
            backgroundColor: 'green',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white', 
            fontWeight: 'bold',
        }}
        onClick={() => toHome()}
        >
        <HomeIcon className="custom-icon" />
        </div>
        <div
        style={{
            width: '10%', 
            height: '100px', 
            backgroundColor: 'orange',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white', 
            fontWeight: 'bold',
            borderBottomLeftRadius:'20%',
            borderBottomRightRadius:'20%',
        }}
        onClick={() => toGallery()}
        >
        <PersonOutlineIcon className="custom-icon" />
        </div>
        <div
        style={{
            width: '10%', 
            height: '100px', 
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white', 
            fontWeight: 'bold',
            borderBottomLeftRadius:'20%',
            borderBottomRightRadius:'20%',
        }}
        onClick={() => toProjects()}
        >
        <EmojiObjectsOutlinedIcon className="custom-icon" />
        </div>
        <div
        style={{
            width: '20%', 
            height: '100px', 
            backgroundColor: 'blue',
            opacity: '70%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white', 
            fontWeight: 'bold',
        }}
        >
        <PendingOutlinedIcon className="custom-icon" />
        </div>
    </div>
  );
}

export default Header;