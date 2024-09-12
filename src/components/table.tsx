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
            <td>Working under Homa Hosseinmardi, Ph.D. on a project focused on consumption, production, and recommendation algorithms on YouTube.</td>
          </tr>
          <tr>
            <td>Catio</td>
            <td>Business Development Intern</td>
            <td>Assisting the CEO to enhance product-market fit, refine the company website, and build GTM strategies.</td>
          </tr>
          <tr>
            <td>Hack4Impact UPenn</td>
            <td>Full Stack Developer</td>
            <td>Working in a team of developers to build software solutions for non proits.</td>
          </tr>
          <tr>
            <td>Enuma</td>
            <td>Software Development Intern</td>
            <td>Working on building a reading chatbot to enhance personalized learning experience.</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default RoundedTable;