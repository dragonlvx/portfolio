import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import useIsMobile from '../hooks/useIsMobile';

const projects = [
  {
    id: 'magick',
    title: 'Magick ML',
    subtitle: 'Designing a Visual AI Development Platform',
    image: '/images/magick/0-magickML-logo.jpg',
    path: '/work/magick',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
  },
  {
    id: 'project89',
    title: 'Project 89',
    subtitle: 'Immersive AI-Driven Narrative Experience',
    image: '/images/project89/0.0-89-logo.jpg',
    path: '/work/project89',
    gradient: 'linear-gradient(135deg, #2d1b4e 0%, #1e3a5f 50%, #134e5e 100%)'
  },
  {
    id: 'rawmagic',
    title: 'Raw Magic Chocolate',
    subtitle: 'Building a Story-Driven Wellness Brand',
    image: '/images/rawmagic/0-raw-magic-logo.jpg',
    path: '/work/rawmagic',
    gradient: 'linear-gradient(135deg, #3d2914 0%, #5c3d2e 50%, #2d1f1a 100%)'
  },
  {
    id: 'proxim8',
    title: 'Gamemaker Demo',
    subtitle: 'AI-Accelerated Game Development',
    image: '/images/proxim8/0-PX8-gamemakker-logo.jpg',
    path: '/work/proxim8',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d3a 50%, #1f2937 100%)'
  }
];

export default function Home() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [tappedCard, setTappedCard] = useState(null);
  const isMobile = useIsMobile();

  const handleCardInteraction = (project, e) => {
    if (isMobile) {
      e.preventDefault();
      if (tappedCard === project.id) {
        navigate(project.path);
        setTappedCard(null);
      } else {
        setTappedCard(project.id);
      }
    } else {
      e.preventDefault();
      navigate(project.path);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.project-card')) {
        setTappedCard(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeader}>
            <h1 className={styles.h1}>Andrew da Silva</h1>
            <h2 className={styles.h2}>
            <span className={styles.title1}>Creative Technologist</span>
            <span className={styles.titleSep}> · </span>
            <span className={styles.title2}>AI-Enhanced UX</span>
            <span className={styles.titleSep}> · </span>
            <span className={styles.title3}>Product Designer</span>
          </h2>
          </div>
          <p className={styles.intro}>
            <span className={styles.introLine1}>Hey! I'm Andrew.</span>
            <br className={styles.desktopBreak} />
            <span className={styles.introLine2}>I design experiences that blend AI, UX, game mechanics, and storytelling into products people love.</span>
          </p>
        </div>
      </header>

      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.path}
              className={`project-card ${styles.projectCard}`}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={(e) => handleCardInteraction(project, e)}
              tabIndex={0}
              aria-label={`View ${project.title} project`}
            >
              <div
                className={styles.projectOverlay}
                style={{
                  opacity: (hoveredCard === project.id || tappedCard === project.id) ? 1 : 0
                }}
              >
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
                {tappedCard === project.id && (
                  <span className={styles.viewButton}>View Project</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
