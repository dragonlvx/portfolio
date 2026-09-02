import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Landing.module.css';
import useIsMobile from '../hooks/useIsMobile';

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
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [tappedCard, setTappedCard] = useState(null);
  const isMobile = useIsMobile();

  const handleCardInteraction = (category, e) => {
    if (isMobile) {
      e.preventDefault();
      if (tappedCard === category.id) {
        navigate(category.path);
        setTappedCard(null);
      } else {
        setTappedCard(category.id);
      }
    } else {
      e.preventDefault();
      navigate(category.path);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.category-card')) {
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
              <span className={styles.title3}>Film &amp; Video</span>
            </h2>
          </div>
          <p className={styles.intro}>
            <span className={styles.introLine1}>Hey! I'm Andrew.</span>
            <br className={styles.desktopBreak} />
            <span className={styles.introLine2}>
              I design AI-native products and produce AI-generated film, and I teach teams to
              do both.
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
          {categories.map((category) => {
            const isActive = hoveredCard === category.id || tappedCard === category.id;
            return (
              <a
                key={category.id}
                href={category.path}
                className={`category-card ${styles.categoryCard}`}
                style={
                  category.image
                    ? {
                        backgroundImage: `url(${category.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : undefined
                }
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={(e) => handleCardInteraction(category, e)}
                tabIndex={0}
                aria-label={`View ${category.title} work`}
              >
                {category.video && (
                  <video
                    className={styles.categoryVideo}
                    src={category.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                )}

                {/* Always-visible label so both paths are readable without hovering */}
                <div className={styles.categoryLabel}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>

                <div className={styles.categoryOverlay} style={{ opacity: isActive ? 1 : 0 }}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categorySubtitle}>{category.subtitle}</p>
                  {tappedCard === category.id && (
                    <span className={styles.viewButton}>View Work</span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
