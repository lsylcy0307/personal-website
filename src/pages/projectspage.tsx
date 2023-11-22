import React from 'react';
import RoundedTable from '../components/table';


function ProjectsPage() {
    return (
      <div
      style={{
        marginTop: '2rem'
      }}>
        <div
          className="flex w-full"
          style={{
            marginLeft:'6rem',
            marginRight:'6rem',
          }}
          >
            <h1>Project List</h1>
            <RoundedTable />
          </div>
        </div>
      );
}


export default ProjectsPage;
  