import React from 'react';
import RoundedTable from '../components/table';


function ExperiencesPage() {
    return (
      <div
      style={{
        marginTop: '2rem'
      }}>
        <div
          className="flex w-full"
          style={{
            marginLeft:'10rem',
            marginRight:'10rem',
          }}
          >
            <h1>Experience</h1>
            <RoundedTable />
          </div>
        </div>
      );
}


export default ExperiencesPage;
  