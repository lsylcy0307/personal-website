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
            <td>Computational Social Science (CSS) Lab</td>
            <td>Research Assistant</td>
            <td>Working under Dr. Homa Hosseinmardi on a project focused on consumption, production, and recommendation algorithms on YouTube.</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default RoundedTable;