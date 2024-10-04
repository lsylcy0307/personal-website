import React from 'react';
import achievenow from '../../images/achievenow.png';

function AchieveNowProject() {
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div style={{ width: '80%', margin: '0 auto' }}>
            <h1>Learning Management Application for <a href='https://www.achieve-now.com/'>Achieve Now</a></h1>
            <h2>Client Description</h2>
            <img src={achievenow} alt="Client" style={{ width: '30%', height: 'auto' }} />
            <p>
             Achieve Now is a Philadelphia-based literacy nonprofit.
            </p>
            <h2>Project Overview</h2>
            <p> We built an internal infrastructure to transition all of our program logistics, data collection, assessment processes, and student progress monitoring to a streamlined online platform. The platform allows to: 1) push curriculum to students and coaches; 2) collect data from coaching sessions and present the relevant progress numbers to Achieve Now staff, volunteer coaches, parents, and teachers; 3) conduct assessments and collect student progress data.</p>
            <h2>GitHub</h2>
            <p>
                <a href="https://github.com/hack4impact-upenn/achieve-now" target="_blank" rel="noopener noreferrer">
                https://github.com/hack4impact-upenn/achieve-now
                </a>
            </p>
        </div>
    </div>
  );
}

export default AchieveNowProject;
