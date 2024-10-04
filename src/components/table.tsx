import React from 'react';
import '../css/style.css';

const RoundedTable = () => {
  return (
    <div className="rounded-table-container">
      <table className="rounded-table">
      <thead>
          <tr>
            <th>Company/Organization</th>
            <th>Role</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Penn Computational Social Science (CSS) Lab</td>
            <td>Research Assistant</td>
            <td>Working under Homa Hosseinmardi, Ph.D. on a project focused on media bias on Youtube. Developed a data collection pipeline in Python for collecting metadata from Youtube channels and videos.</td>
          </tr>
          <tr>
            <td>Catio</td>
            <td>Business Development Intern</td>
            <td>Led the development of the business website end-to-end, expected to significantly improve visitor-to-lead conversion.</td>
          </tr>
          <tr>
            <td>Hack4Impact UPenn</td>
            <td>Full Stack Developer</td>
            <td>Working in a team of developers to build software applications to empower non profits.</td>
          </tr>
          <tr>
            <td>Enuma</td>
            <td>Software Development Intern</td>
            <td>Built a reading chatbot to enhance personalized learning experience for global student users.</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default RoundedTable;