import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import { Animate, AnimateGroup } from 'react-simple-animate';

function HomePage() {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:'6rem',
      marginRight:'6rem',
    }}>
      <div
        className="flex w-full"
        style={{
          display: 'flex',
          flexDirection: 'row',
          width:'80%',
          height: '90vh',
          alignItems:'center',
        }}
      >
        {/* Left Panel (30%) */}
        <div
          style={{
            width: '30%',
            height: '50%',
            backgroundColor: 'lightgray',
            borderRadius:'20%',
            padding: '20px',
            flexDirection: 'row',
            alignItems:'center',
            color:'white',
          }}
        >
          <p>coming soon...</p>
        </div>

        {/* Right Panel (70%) */}
        <div
          style={{
            width: '70%',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <div
              style={{
                  width: '40%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
              >
                  <Typography sx={{ fontWeight: 'bold', fontSize: '65px', color: 'black',}}>Yeon</Typography>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: 'black',}}>Lee</Typography>
                  <Typography sx={{ fontWeight: 'normal', fontSize: '25px', color: 'black',}}>__________</Typography>
                  <Typography sx={{ fontWeight: 'normal', fontSize: '25px', color: 'black',}}>Software Engineer from Korea</Typography>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
