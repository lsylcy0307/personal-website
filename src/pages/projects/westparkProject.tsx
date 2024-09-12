import React from 'react';
import west1 from '../../images/westpark1.png';
import west2 from '../../images/westpark2.png';
import west3 from '../../images/westpark3.png';
import west4 from '../../images/westpark4.png';

function WestParkProject() {
  return (
    <div>
        <div style={{ width: '80%', margin: '0 auto' }}>
            <h1>Donation Management Application for <a href='https://westparkcultural.org/'>West Park Cultural Center</a></h1>
            <h2>Client Description</h2>
            <img src={west4} alt="Client" style={{ width: '30%', height: 'auto' }} />
            <p>
             West Park Cultural Center (WPCC) was established in 2001 to provide accessible arts and cultural education programs for children, youth, and families in underserved communities. Recognizing the risks posed by the absence of structured programs and activities during the summer, WPCC offers a safe and engaging environment for children.
            </p>
            <h2>Application Demo</h2>
            <p>
                <a href='https://docs.google.com/presentation/d/1FCIGr5ALwXApGWxMSwlmNG5NyLcOV6rP2ISaVoAQSo4/edit?usp=sharing'>Demo Slide</a>
            </p>
            <h2>Development Milestones</h2>
            <ul>
                <li>
                <strong>Donation & Donor Dashboard:</strong> Easy add and search for donors and donations.
                </li>
                <li>
                <strong>Reports:</strong> Statistics and charts for internal management.
                </li>
                <li>
                <strong>Outreach:</strong> Facilitate targeted outreach to enhance donation.
                </li>
            </ul>
            <h2>Solution</h2>
            <img src={west1} alt="Dashboard" style={{ width: '70%', height: 'auto' }} />
            <img src={west2} alt="Registeration Form" style={{ width: '70%', height: 'auto' }} />
            <img src={west3} alt="Communication" style={{ width: '70%', height: 'auto' }} />
            <p>
            <ul>
                <li>
                Filter and search through dashboards by date, amount, campaign, etc.
                </li>
                <li>
                View donation statistics over calendar / fiscal years. Explore detailed, visual breakdown of donation data.
                </li>
                <li>
                Create targeted communication group by donor's historical contributions. Quick donation follow-up for donor engagement.
                </li>
            </ul>
            </p>
            <h2>GitHub</h2>
            <p>
                <a href="https://github.com/hack4impact-upenn/west-park-cultural" target="_blank" rel="noopener noreferrer">
                https://github.com/hack4impact-upenn/west-park-cultural
                </a>
            </p>
        </div>
    </div>
  );
}

export default WestParkProject;

