import React from 'react';
import lippinbotImage from '../../images/lippinbot.png';

function LippinbotProject() {
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h1>Lippinbot</h1>
      <h2>Challenge</h2>
      <p>
        <a href="https://ai-analytics.wharton.upenn.edu/for-students/wharton-hack-ai-thon/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          #Wharton Hack-AI-thon
        </a>
      </p>
      <h2>Description</h2>
      <p>Technical Track: Create an App Using the OpenAI API</p>
      <p>Tools Provided: OpenAI API, Gradio, Hugging Face</p>
      <h2>GenAI excels at…</h2>
      <ul>
        <li>Personalization</li>
        <li>Understanding user queries</li>
        <li>Processing large text data</li>
        <li>Recommendations</li>
      </ul>
      <h2>Problem</h2>
      <p>
        Many college students struggle to efficiently navigate the vast resources of the library resources, resulting in frustration and wasted time. Despite the Wharton Lippincott Library offering a wide range of resources, from academic research to practical business applications, this challenge leads to significant underutilization of these valuable assets.
      </p>
      <h2>Involvement</h2>
      <ul>
        <li>Integrating OpenAI API with the application</li>
        <li>Prompt engineering to receive the summary of resources and recommendation in user-thinking manner</li>
        <li>Frontend development</li>
      </ul>
      <h2>Product Features</h2>
      <p>
        We leveraged OpenAI's API and additional web scraping, the assistant provides accurate, relevant, and detailed information based on the user's queries.
      </p>
      <img src={lippinbotImage} alt="Lippinbot" style={{ width: '70%', height: 'auto' }} />
      <ul>
        <li>
          <strong>Search and Recommendations:</strong>
          <p>Users can enter a research query, and the assistant will provide relevant resources based on the query. Each resource includes a title, description, and link for further reading.</p>
        </li>
        <li>
          <strong>Guidance and Suggestions:</strong>
          <p>In addition to listing resources, the assistant offers recommendations for the user's research journey and suggests potential follow-up questions for further queries.</p>
        </li>
        <li>
          <strong>User-Friendly Interface:</strong>
          <p>The search engine provides an intuitive and user-friendly interface where users can input their queries and receive a curated list of resources.</p>
        </li>
        <li>
          <strong>OpenAI Integration:</strong>
          <p>The project integrates OpenAI's Chat API (gpt-4-turbo) to generate responses based on the user's query, offering a high-quality research experience.</p>
        </li>
      </ul>
      <h2>GitHub</h2>
      <p>
        <a href="https://github.com/lsylcy0307/lippinbott" target="_blank" rel="noopener noreferrer">
          https://github.com/lsylcy0307/lippinbott
        </a>
      </p>
    </div>
  );
}

export default LippinbotProject;
