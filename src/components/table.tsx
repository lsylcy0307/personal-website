import React from 'react';
import '../css/style.css';

const RoundedTable = () => {
  return (
    <div className="rounded-table-container">
      <table className="rounded-table">
      <thead>
          <tr>
            <th>Company/Project</th>
            <th>Role</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Enuma</td>
            <td>R&D Intern (Prompt Engineering / Competitor Product Research)</td>
            <td>Developed a reading chatbot and analyzed adaptive learning services in the market.</td>
          </tr>
          <tr>
            <td>Hack4Impact UPenn</td>
            <td>Full Stack Developer</td>
            <td>Working in a team of developers to build software solutions for non proits.</td>
          </tr>
          <tr>
            <td>ModLab</td>
            <td>Undergraduate Research Assistant</td>
            <td>Working under Professor Yim to develop a python simulation of swarm robot behaviors.</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default RoundedTable;