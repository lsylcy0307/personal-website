import React, { useState, lazy, Suspense } from 'react';
import Modal from 'react-modal';
import '../css/ProjectsPage.css';
import lippinbot from '../images/lippinbot.png';
import promptle from '../images/promptle.png';
import thinkshare from '../images/thinkshare.png';
import reshwap from '../images/rewshap.png';
import westpark from '../images/westpark1.png';
import achievenow from '../images/achievenow.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  component: React.LazyExoticComponent<React.ComponentType<any>> | null;
}

const PromptlePage = lazy(() => import('./projects/promptleProject'));
const LippinbotPage = lazy(() => import('./projects/lippinbotProject'));
const ThinksharePage = lazy(() => import('./projects/thinkshareProject'));
const WestParkPage = lazy(() => import('./projects/westparkProject'));
const AchieveNowPage = lazy(() => import('./projects/achievenowProject'));

const projects: Project[] = [
  {
    title: 'West Park Cultural Center',
    description:  'Donor and donation management made easier for nonprofits',
    tags: ['React', 'TypeScript', 'MongoDB' ],
    link: '',
    image: westpark,
    component: WestParkPage
  },
  {
    title: 'Achieve Now',
    description:  'Learning management application used by students, coaches, and parents',
    tags: ['React', 'TypeScript', 'MongoDB' ],
    link: '',
    image: achievenow,
    component: AchieveNowPage
  },
  {
    title: 'Promptle Game',
    description: 'A web-based game where for every AI generated image, player should guess as many keywords that were used to created the prompt.',
    tags: ['Python', 'JavaScript', 'HTML', 'CSS'],
    link: '',
    image: promptle,
    component: PromptlePage
  },
  {
    title: 'Lippinbot',
    description:  'First AI powered search engine for the Wharton Lippincott Library to help students efficiently find library resources.',
    tags: ['Selenium', 'JSoup', 'TypeScript' ],
    link: '',
    image: lippinbot,
    component: LippinbotPage
  },
  {
    title: 'ThinkShare Mobile Application',
    description:  'Provides teachers and students with the tool to track and provide feedback on classroom discussions.',
    tags: ['Selenium', 'JSoup', 'TypeScript' ],
    link: '',
    image: thinkshare,
    component: ThinksharePage
  },
  {
    title: 'Reshwap',
    description:  'Secondhand item marketplace for my highschool.',
    tags: ['Flask', 'Python', 'Firebase' ],
    link: '',
    image: reshwap,
    component: null
  },
];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '85vh',
    width: '70vw',
    overflow: 'auto',
    border: '6px solid rgb(236, 236, 236)', 
    borderRadius: '8px', 
  },
};

Modal.setAppElement('#root'); // Set the root element for accessibility

function ProjectsPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function openModal(project: Project) {
    setSelectedProject(project);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedProject(null);
  }

  return (
    <div style={{ marginTop: '2rem', marginLeft: '15rem', marginRight: '15rem' }}>
      <h1>Technical Projects</h1>
      <div className="grid-container">
        {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => openModal(project)}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
         ))} 
      </div>

      {selectedProject && selectedProject.component && (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Project Details"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <selectedProject.component />
        </Suspense>
      </Modal>
    )}
    </div>
  );
}

export default ProjectsPage;
