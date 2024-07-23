import React from 'react';
import promptleImage from '../../images/promptle.png';

function PromptleProject() {
  return (
    <div>
        <div style={{ width: '80%', margin: '0 auto' }}>
            <h1>Promptle Game</h1>
            <h2>Description</h2>
            <p>
                The 2024 Penn Generative AI Hackathon is a university-wide two day event (2/16-17) in Tangen Hall for students across Penn’s ecosystem to learn, build, and create Gen AI based applications. Sponsored by today’s leading Gen AI companies and backers, join Penn’s top builders in competing across six categories for over $5,000 in prizes.
            </p>
            <h2>Problem</h2>
            <p>
                How can we help people learn GenAI and prompt engineering in a more fun, light-hearted way?
            </p>
            <h2>Solution</h2>
            <img src={promptleImage} alt="Promptle" style={{ width: '70%', height: 'auto' }} />
            <p>
                We created a web-based game where for every Gen-AI generated image, players should guess as many keywords that were used to create the prompt.
            </p>
            <h2>Development Milestones</h2>
            <ul>
                <li>
                <strong>GPT Prompt:</strong> “We want a prompt to generate an image using between three to six keywords. Include a keyword for the style of the image. The keywords can be related to anything. Give me the keywords in a json format.”
                </li>
                <li>
                <strong>DALL-E Image Generation:</strong> Use the GPT-generated keywords for image generation.
                </li>
                <li>
                <strong>Semantic Similarity:</strong> Create text embedding and calculate the cosine similarity between the player’s guess and keyword to weigh the point.
                </li>
            </ul>
            <h2>GitHub</h2>
            <p>
                <a href="https://github.com/joshchen984/Promptle/tree/master/backend/app" target="_blank" rel="noopener noreferrer">
                https://github.com/joshchen984/Promptle/tree/master/backend/app
                </a>
            </p>
        </div>
    </div>
  );
}

export default PromptleProject;

