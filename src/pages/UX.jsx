import { Link } from 'react-router-dom';
import styles from './UX.module.css';

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

export default function UX() {
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
          <div className={styles.credentials}>
            {['B.A. Psychology', 'AI-Native Design', 'Co-Founded 3 AI Startups', '14+ Years Design'].map((cred, i) => (
              <span key={i} className={styles.credentialPill}>{cred}</span>
            ))}
          </div>
        </div>
      </header>

      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.path}
              className={styles.projectCard}
              aria-label={`View ${project.title} project`}
            >
              <span
                className={styles.projectArtwork}
                style={{ backgroundImage: `url(${project.image})` }}
                aria-hidden="true"
              />
              <div className={styles.projectOverlay}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
