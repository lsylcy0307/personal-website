import React from 'react';
import thinkshareImg from '../../images/thinkshare.png';
import thinkImg1 from '../../images/think1.png';
import thinkImg2 from '../../images/think2.png';
import thinkImg3 from '../../images/think3.png';
import thinkImg4 from '../../images/think4.png';

function ThinkshareProject() {
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h1>ThinkShare</h1>
      <h2>Pain Point</h2>
      <p>
        While tutoring underserved students at a community center, I noticed their passive attitude toward learning. Their frequent homework mistakes indicated a lack of understanding, yet they hesitated to ask questions. I encouraged them to explain and discuss their reasoning with each other, revealing the value of discussion for learning.
      </p>
      <p>
        To validate this, I returned to my school and interviewed peers who experienced discussion-oriented learning. They shared that it built critical thinking skills and confidence. I then consulted teachers to identify factors for successful discussions.
      </p>
      <h2>Resources for Feedback</h2>
      <p>
        Teachers use the "Harkness Method" to map idea exchanges among students. This feedback is crucial as students struggle to reflect on their own participation.
      </p>
      <ul>
        <li><strong>Inconvenient Note-Taking:</strong> Teachers find it time-consuming and impractical to note specific discussion details, which are vital for understanding participation.</li>
        <li><strong>Lack of Streamlined Feedback:</strong> There's no efficient system for tracking discussions and providing feedback, making it hard for students to see their progress.</li>
        <li><strong>Access to Resources:</strong> The current method requires a trained instructor for feedback, and the lack of an online tool limits learning opportunities from group discussions.</li>
      </ul>
      <h2>Problem Statement</h2>
      <p>
        Teachers and students are frustrated with the absence of a streamlined online feedback process for student participation in class discussions, which moreover prevents equitable access to learning benefits of collaborative learning environment.
      </p>
      <h2>Further Context</h2>
      <p>
        Through our secondary and primary research (42 interviews and surveys), we uncovered a few key user perspectives:
      </p>
      <ul>
        <li>
          Expressed concerns about:
          <ul>
            <li>Focus on metrics over quality of participation</li>
            <li>Need to provide both quantitative and qualitative insights</li>
          </ul>
        </li>
        <li>Comparison with peers:
          <ul>
            <li>Insights on individual performance improvement and history</li>
          </ul>
        </li>
        <li>Benefits of discussions in not only class-wide but also small groups:
          <ul>
            <li>More fit for general purpose than specifically led by teachers</li>
          </ul>
        </li>
        <li>Types of data it tracks and analytics it provide matter significantly</li>
      </ul>
      <h2>Solution</h2>
      
      <h2>Product Features</h2>
      <ul>
        <li>Mobile application built with Swift for use on iPad</li>
        <li><strong>Classroom Management:</strong>
          <p>Manage discussions by classrooms and customize discussion criteria based on subjects (classroom types)</p>
        </li>
        <li><strong>Discussion Settings:</strong>
          <p>Set and share discussion settings, including links to online texts, discussion questions, and criteria. Record new questions arising during discussion at any time. Share settings with students via an auto-generated code for small group discussions.</p>
          <img src={thinkImg3} alt="thinkShare setting" style={{ width: '40%', height: 'auto', margin: '0.5rem' }} />
          <img src={thinkImg4} alt="thinkShare setting" style={{ width: '40%', height: 'auto', margin: '0.5rem' }} />
        </li>
        <li><strong>Discussion Tracking:</strong>
          <p>Record participation by pressing the figure of the speaking student. Record categories of participation (e.g., change of idea, elaboration, agreement, disagreement, question) by pressing buttons enabled after selecting the speaking student. Categories are based on registered discussion criteria. Immediate visualization of discussion flow and participation type with colored lines connecting participants.</p>
          <img src={thinkImg2} alt="thinkShare tracking" style={{ width: '40%', height: 'auto', margin: '0.5rem' }} />
        </li>
        <li><strong>Discussion Feedback (Analytics Page):</strong>
          <p>The analytics provide:</p>
          <ul>
            <li>Graph of individual speaking time distribution</li>
            <li>Graph of speaking frequency</li>
            <li>Count of each participation category</li>
            <li>List of discussed questions and their duration</li>
            <li>Individual student feedback</li>
            <li>See the entire participation history and trend of a student</li>
          </ul>
          <img src={thinkshareImg} alt="thinkShare analytics" style={{ width: '40%', height: 'auto', margin: '0.5rem'}} />
          <img src={thinkImg1} alt="thinkShare analytics 2" style={{ width: '40%', height: 'auto', margin: '0.5rem' }} />
        </li>
      </ul>

      
      <h2>Attachments</h2>
      <p>
        <a href="https://docs.google.com/presentation/d/1PwHV1FyjoxZGBGdGrQD83SaYzfRI0tAzz0U736brmeA/edit#slide=id.gfb87c9a92b_0_921" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          Pitch Deck (Technovation World Summit)
        </a>
      </p>
      <h2>Github</h2>
      <p>
        <a href="https://github.com/lsylcy0307/ThinkShare" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          https://github.com/lsylcy0307/ThinkShare
        </a>
      </p>
    </div>
  );
}

export default ThinkshareProject;
