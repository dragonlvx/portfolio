import { Link } from 'react-router-dom';
import AmbientVideo from '../components/AmbientVideo';
import styles from './Landing.module.css';

const categories = [
  {
    id: 'ux',
    title: 'User Experience',
    subtitle: 'AI product design, onboarding, and interaction systems',
    path: '/ux',
    image: '/images/magick/Node-Graph-widescreen-banner.jpg',
  },
  {
    id: 'film',
    title: 'Film & Video',
    subtitle: 'Trailers, music videos, and cinematics built with AI pipelines',
    path: '/film',
    video: '/images/film/imaginal-banner-720.mp4',
  },
];

export default function Landing() {
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
              <span className={styles.title3}>Film &amp; Video</span>
            </h2>
          </div>
          <p className={styles.intro}>
            <span className={styles.introLine1}>Hey! I'm Andrew.</span>
            <br className={styles.desktopBreak} />
            <span className={styles.introLine2}>
              I direct and edit film and video, design AI-native products, and teach teams to
              build with generative AI.
            </span>
          </p>
          <div className={styles.credentials}>
            {['B.A. Psychology', 'AI-Native Design', 'Co-Founded 3 AI Startups', '14+ Years Design'].map(
              (cred, i) => (
                <span key={i} className={styles.credentialPill}>
                  {cred}
                </span>
              )
            )}
          </div>
        </div>
      </header>

      <section className={styles.categoriesSection}>
        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <div key={category.id} className={styles.categoryItem}>
              <Link
                to={category.path}
                className={styles.categoryCard}
                style={category.image ? { backgroundImage: `url(${category.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
                aria-label={`View ${category.title} work`}
              >
                {category.video && (
                  <AmbientVideo className={styles.categoryVideo} src={category.video} poster="/images/film/project89-trailer-titlecard.jpg" label="Film preview" decorative />
                )}
                <div className={styles.categoryLabel}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
              </Link>
              <p className={styles.mobileDescription}>{category.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
