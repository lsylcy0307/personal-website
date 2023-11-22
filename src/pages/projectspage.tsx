import React from 'react';
import ProjectCard from '../components/projectcard';
import RoundedTable from '../components/table';

const exampleProject = {
    id: '1',
    title: 'Example Project',
    description: 'This is an example project.',
    imageUrl: 'https://example.com/image.jpg',
    createdAt: 'October 1, 2023',
  };

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
  