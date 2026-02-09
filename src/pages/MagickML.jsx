import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/caseStudy.module.css';
import Lightbox from '../components/Lightbox';

export default function MagickML() {
  const [currentPitchSlide, setCurrentPitchSlide] = useState(0);
  const [currentDesignSlide, setCurrentDesignSlide] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showcaseVideoPaused, setShowcaseVideoPaused] = useState(false);
  const autoScrollRef = useRef(null);
  const showcaseVideoRef = useRef(null);

  const toggleShowcaseVideo = () => {
    if (showcaseVideoRef.current) {
      if (showcaseVideoRef.current.paused) {
        showcaseVideoRef.current.play();
        setShowcaseVideoPaused(false);
      } else {
        showcaseVideoRef.current.pause();
        setShowcaseVideoPaused(true);
      }
    }
  };

  const pitchDeckSlides = Array.from({ length: 13 }, (_, i) =>
    `/images/magick/pitch-deck-slides${i + 1}.png`
  ).filter((_, i) => i !== 6); // Remove slide 7 (index 6)
  const designSystemImages = Array.from({ length: 13 }, (_, i) =>
    `/images/magick/complex-design-system${i + 1}.png`
  );

  // Auto-scroll carousel every 2 seconds
  useEffect(() => {
    if (autoScrollEnabled) {
      autoScrollRef.current = setInterval(() => {
        setCurrentDesignSlide(prev =>
          prev === designSystemImages.length - 1 ? 0 : prev + 1
        );
      }, 2000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [autoScrollEnabled, designSystemImages.length]);

  // Stop auto-scroll when user manually interacts
  const handleManualNavigation = (callback) => {
    setAutoScrollEnabled(false);
    callback();
  };

  const allLightboxItems = [
    // The Challenge
    { src: '/images/magick/challenge-magick-maker.png', alt: 'Become a Magick Maker', isVideo: false, label: 'The Challenge' },
    { src: '/images/magick/challenge-onboarding.png', alt: 'Onboarding pop-up design', isVideo: false, label: 'The Challenge' },
    // Mapping the User Journey
    { src: '/images/magick/userflow-wireframe-overview.png', alt: 'User flow wireframe overview', isVideo: false, label: 'Mapping the User Journey' },
    { src: '/images/magick/userflow-desktop-1.png', alt: 'User logs in and lands at the portal homepage', isVideo: false, label: 'Mapping the User Journey' },
    { src: '/images/magick/userflow-desktop-2.png', alt: 'Detailed info page for a template agent', isVideo: false, label: 'Mapping the User Journey' },
    { src: '/images/magick/userflow-desktop-3.png', alt: 'AIDE workspace prompts subscription when credits run low', isVideo: false, label: 'Mapping the User Journey' },
    { src: '/images/magick/userflow-desktop-4.png', alt: 'Subscription page with purchase options', isVideo: false, label: 'Mapping the User Journey' },
    // My Role
    { src: '/images/magick/myrole-product.png', alt: 'Product & UX', isVideo: false, label: 'My Role' },
    { src: '/images/magick/myrole-design.png', alt: 'Design Systems & UI', isVideo: false, label: 'My Role' },
    { src: '/images/magick/myrole-Leadership.png', alt: 'Leadership & Strategy', isVideo: false, label: 'My Role' },
    // What We Built
    { src: '/images/magick/VIDEO-MagickML-showcase.mp4', alt: 'MagickML Platform Showcase', isVideo: true, label: 'What We Built' },
    { src: '/images/magick/marketing-landing-page.png', alt: 'Marketing landing page', isVideo: false, label: 'What We Built' },
    { src: '/images/magick/portal-screenshot.png', alt: 'User portal dashboard', isVideo: false, label: 'What We Built' },
    { src: '/images/magick/graph-banner.png', alt: 'AIDE builder interface', isVideo: false, label: 'What We Built' },
    // Design Evolution
    { src: '/images/magick/thoth-AIDEconcept0.png', alt: 'Early functional design concept', isVideo: false, label: 'Design Evolution' },
    { src: '/images/magick/graph-visual-IDE-Design-Concept.png', alt: 'Neon design exploration', isVideo: false, label: 'Design Evolution' },
    { src: '/images/magick/graph-visual-for a dungeon-adventure-agent.png', alt: 'Final refined design', isVideo: false, label: 'Design Evolution' },
    // Design Process
    { src: '/images/magick/wireframe-template-iteration-1.png', alt: 'B&W concept wireframe', isVideo: false, label: 'Design Process' },
    { src: '/images/magick/wireframe-template-iteration-2.png', alt: 'First color pass', isVideo: false, label: 'Design Process' },
    { src: '/images/magick/wireframe-template-iteration-3.png', alt: 'MVP hi-fi concept', isVideo: false, label: 'Design Process' },
    { src: '/images/magick/wireframe-template-iteration-4.png', alt: 'Final design', isVideo: false, label: 'Design Process' },
    // Designing for Complex Systems (all 13 design system slides)
    ...designSystemImages.map((src, i) => ({ src, alt: `Design system example ${i + 1}`, isVideo: false, label: 'Designing for Complex Systems' })),
    // Strategy & Leadership - Banners
    { src: '/images/magick/marketing-magick-banner-top.png', alt: 'Magick marketing materials', isVideo: false, label: 'Strategy & Leadership' },
    { src: '/images/magick/marketing-magick-banner-bottom.png', alt: 'Magick marketing examples', isVideo: false, label: 'Strategy & Leadership' },
    // Strategy & Leadership - Pitch Deck (all 12 slides)
    ...pitchDeckSlides.map((src, i) => ({ src, alt: `Pitch deck slide ${i + 1}`, isVideo: false, label: 'Strategy & Leadership' })),
    // Strategy & Leadership - Pitch Deck History
    { src: '/images/magick/pitch-deck-history.png', alt: 'Evolution of pitch deck designs across multiple versions', isVideo: false, label: 'Strategy & Leadership' },
    // Impact & Learnings
    { src: '/images/magick/userflow-overview.png', alt: 'Comprehensive user flow overview showing the full product journey', isVideo: false, label: 'Impact & Learnings' },
  ];

  const openLightbox = (src, alt) => {
    const index = allLightboxItems.findIndex(item => item.src === src && item.alt === alt);
    if (index !== -1) setLightboxIndex(index);
  };

  const goNext = () => {
    setLightboxIndex(prev => (prev + 1) % allLightboxItems.length);
  };

  const goPrev = () => {
    setLightboxIndex(prev => (prev - 1 + allLightboxItems.length) % allLightboxItems.length);
  };

  const currentImage = lightboxIndex !== null ? allLightboxItems[lightboxIndex] : null;

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageContainer}>
          <img
            src="/images/magick/Node-Graph-widescreen-banner.jpg"
            alt="Magick ML Node Builder Interface"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Magick ML</h1>
          <h2 className={styles.heroSubtitle}>Designing a Visual AI Development Platform</h2>
          <p className={styles.heroIntro}>
            Magick ML is a node-based AI development environment for building and deploying intelligent agents without code. As Co-Founder and Chief Design Officer, I led product design, onboarding, and design systems across the platform — translating complex AI tooling into an approachable creative interface.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className={styles.quickFacts}>
        <div className={styles.quickFactsGrid}>
          {[
            { label: 'Role', value: 'Co-Founder / Chief Design Officer' },
            { label: 'Product', value: 'Visual AI Development Platform' },
            { label: 'Scope', value: 'UX · UI · Design Systems · Strategy' },
            { label: 'Users', value: 'Creative technologists & developers' },
            { label: 'Years', value: '2022–2025' },
            { label: 'Focus', value: 'AI tooling & onboarding' }
          ].map((fact, i) => (
            <div key={i} className={styles.quickFactItem}>
              <span className={styles.quickFactLabel}>{fact.label}</span>
              <span className={styles.quickFactValue}>{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* The Challenge */}
      <section className={styles.section}>
        <div className={styles.sectionInnerWide}>
          <div className={styles.sectionBanner}>
            <img
              src="/images/magick/challenge-magick-maker.png"
              alt="Become a Magick Maker"
              className={`${styles.sectionBannerImage} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/magick/challenge-magick-maker.png', 'Become a Magick Maker')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <p className={styles.paragraph}>
            Designing a visual AI development tool meant balancing power and approachability. The platform included advanced features (agents, templates, nodes, deployments, memory, documentation, etc) yet needed to feel intuitive to first-time users without overwhelming them.
          </p>
          <div className={styles.goalsList}>
            <h3 className={styles.goalsHeading}>Goals</h3>
            {[
              'Reduce cognitive load in a complex system',
              'Enable fast onboarding and early success',
              'Maintain flexibility for advanced workflows'
            ].map((goal, i) => (
              <div key={i} className={styles.goalItem}>
                <span className={styles.goalIcon}>◇</span>
                <span className={styles.goalText}>{goal}</span>
              </div>
            ))}
          </div>

          {/* Onboarding Solutions */}
          <div className={styles.imageGrid} style={{ marginTop: '48px' }}>
            <div className={styles.imageGridItem}>
              <div className={styles.imageContainerCropped}>
                <img
                  src="/images/magick/challenge-onboarding.png"
                  alt="Onboarding pop-up design"
                  className={`${styles.imageCroppedTop} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/magick/challenge-onboarding.png', 'Onboarding pop-up design')}
                />
              </div>
              <span className={styles.imageLabel}>Progressive onboarding pop-ups guided new users through key features step-by-step</span>
            </div>
            <div className={styles.imageGridItem}>
              <div className={styles.videoEmbed}>
                <iframe
                  src="https://www.youtube.com/embed/LqwPOSDPCKI"
                  title="MagickML Tutorial Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.videoIframe}
                />
              </div>
              <span className={styles.imageLabel}>I created video tutorials to help new users learn how to use MagickML</span>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow Research */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInnerWide}>
          <div className={styles.sectionBanner}>
            <img
              src="/images/magick/userflow-wireframe-overview.png"
              alt="User flow wireframe overview"
              className={`${styles.sectionBannerImage} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/magick/userflow-wireframe-overview.png', 'User flow wireframe overview')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Mapping the User Journey</h2>
          <p className={styles.paragraph}>
            Before diving into interface design, I mapped out comprehensive user flows to understand every touchpoint — from initial login through subscription purchase. These birds-eye views helped identify friction points and opportunities for progressive disclosure.
          </p>
          <div className={styles.userflowGrid}>
            {[
              { num: 1, img: 'userflow-desktop-1.png', caption: 'User logs in and lands at the portal homepage' },
              { num: 2, img: 'userflow-desktop-2.png', caption: 'Detailed info page for a template agent' },
              { num: 3, img: 'userflow-desktop-3.png', caption: 'AIDE workspace prompts subscription when credits run low' },
              { num: 4, img: 'userflow-desktop-4.png', caption: 'Subscription page with purchase options' },
            ].map((step) => (
              <div key={step.num} className={styles.userflowItem}>
                <span className={styles.userflowNumber}>{step.num}</span>
                <div className={styles.imageContainer}>
                  <img
                    src={`/images/magick/${step.img}`}
                    alt={step.caption}
                    className={`${styles.image} ${styles.clickableImage}`}
                    onClick={() => openLightbox(`/images/magick/${step.img}`, step.caption)}
                  />
                </div>
                <span className={styles.imageLabel}>{step.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>My Role</h2>
          <p className={styles.paragraph}>
            I led design strategy and execution across the entire product ecosystem.
          </p>

          <div className={styles.rolesGrid}>
            {[
              {
                title: 'Product & UX',
                image: 'myrole-product.png',
                items: [
                  'Core interface design for the AIDE builder',
                  'Onboarding flows and progressive disclosure',
                  'User research and iteration with early adopters'
                ]
              },
              {
                title: 'Design Systems & UI',
                image: 'myrole-design.png',
                items: [
                  'Built atomic design system (components, colors, typography)',
                  'Cross-surface consistency between marketing content, web-portal, and AIDE builder',
                  'Interaction feedback and visual affordances'
                ]
              },
              {
                title: 'Leadership & Strategy',
                image: 'myrole-Leadership.png',
                items: [
                  'Led design team contractors',
                  'Partnered with product, engineering, and marketing teams',
                  'Designed investor pitch decks and product storytelling'
                ]
              }
            ].map((role, i) => (
              <div key={i} className={styles.roleCard}>
                <div className={styles.roleImageContainer}>
                  <img
                    src={`/images/magick/${role.image}`}
                    alt={role.title}
                    className={`${styles.roleImage} ${styles.clickableImage}`}
                    onClick={() => openLightbox(`/images/magick/${role.image}`, role.title)}
                  />
                </div>
                <div className={styles.roleCardContent}>
                  <h3 className={styles.roleTitle}>{role.title}</h3>
                  <div className={styles.roleItems}>
                    {role.items.map((item, j) => (
                      <div key={j} className={styles.roleItem}>
                        <span className={styles.roleItemBullet}>→</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Built - with images */}
      <section className={styles.sectionAccent}>
        <div className={styles.sectionInnerWide}>
          <div className={styles.showcaseVideoContainer}>
            <div
              className={styles.showcaseVideoWrapper}
              onClick={toggleShowcaseVideo}
            >
              <video
                ref={showcaseVideoRef}
                src="/images/magick/VIDEO-MagickML-showcase.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles.showcaseVideo}
              />
              <div
                className={`${styles.showcaseVideoPlayButton} ${showcaseVideoPaused ? styles.showcaseVideoPlayButtonVisible : ''}`}
                aria-label={showcaseVideoPaused ? 'Play video' : 'Pause video'}
              >
                {showcaseVideoPaused ? '▶' : '❚❚'}
              </div>
              <button
                className={styles.showcaseVideoFullscreenButton}
                onClick={(e) => {
                  e.stopPropagation();
                  openLightbox('/images/magick/VIDEO-MagickML-showcase.mp4', 'MagickML Platform Showcase');
                }}
                aria-label="View fullscreen"
              >
                ⛶
              </button>
            </div>
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitleLight}>What We Built</h2>
          <p className={styles.paragraphLight}>
            The platform consisted of three interconnected surfaces, each designed to serve different stages of the user journey.
          </p>
        </div>
        <div className={styles.sectionInnerWide}>
          <div className={styles.builtGridThree}>
            <div className={styles.builtItem}>
              <div className={styles.builtItemImageContainer}>
                <img
                  src="/images/magick/marketing-landing-page.png"
                  alt="Marketing landing page"
                  className={`${styles.builtItemImage} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/magick/marketing-landing-page.png', 'Marketing landing page')}
                />
              </div>
              <div className={styles.builtItemContent}>
                <h3 className={styles.builtItemTitle}>Marketing Website</h3>
                <p className={styles.builtItemDesc}>Onboarding-focused landing pages that communicated the platform's value and guided users to sign up.</p>
              </div>
            </div>
            <div className={styles.builtItem}>
              <div className={styles.builtItemImageContainer}>
                <img
                  src="/images/magick/portal-screenshot.png"
                  alt="User portal dashboard"
                  className={`${styles.builtItemImage} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/magick/portal-screenshot.png', 'User portal dashboard')}
                />
              </div>
              <div className={styles.builtItemContent}>
                <h3 className={styles.builtItemTitle}>User Portal</h3>
                <p className={styles.builtItemDesc}>Account management, template library, documentation, and agent deployment hub.</p>
              </div>
            </div>
            <div className={styles.builtItem}>
              <div className={styles.builtItemImageContainer}>
                <img
                  src="/images/magick/graph-banner.png"
                  alt="AIDE builder interface"
                  className={`${styles.builtItemImageCentered} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/magick/graph-banner.png', 'AIDE builder interface')}
                />
              </div>
              <div className={styles.builtItemContent}>
                <h3 className={styles.builtItemTitle}>AIDE Builder</h3>
                <p className={styles.builtItemDesc}>The core node-based visual AI development environment where users build and test agents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Evolution */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Design Evolution</h2>
          <p className={styles.paragraph}>
            Over three years, the node-graph interface went through significant visual evolution. We started with a basic, monochromatic design focused purely on function. Then we swung toward a vibrant neon aesthetic that looked exciting but proved too stimulating for practical use; the visual noise made it harder to parse complex graphs during long sessions. Our final design found the balance: a calmer palette where color serves a functional purpose, helping users quickly differentiate node types and connection states rather than existing purely for aesthetics. This journey taught me that every design decision needs to be rooted in something functional, not just visual appeal.
          </p>
        </div>
        <div className={styles.sectionInnerWide}>
          <div className={styles.evolutionGrid}>
            <div className={styles.evolutionItem}>
              <div className={styles.evolutionLabel}>Initial</div>
              <div className={styles.evolutionImageContainer}>
                <img
                  src="/images/magick/thoth-AIDEconcept0.png"
                  alt="Early functional design concept"
                  className={`${styles.evolutionImage} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/magick/thoth-AIDEconcept0.png', 'Early functional design concept')}
                />
              </div>
              <span className={styles.imageLabel}>Early concept — basic and functional</span>
            </div>
            <div className={styles.evolutionItem}>
              <div className={`${styles.evolutionLabel} ${styles.evolutionLabelMiddle}`}>Exploration</div>
              <div className={styles.evolutionImageContainer}>
                <img
                  src="/images/magick/graph-visual-IDE-Design-Concept.png"
                  alt="Neon design exploration"
                  className={`${styles.evolutionImage} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/magick/graph-visual-IDE-Design-Concept.png', 'Neon design exploration')}
                />
              </div>
              <span className={styles.imageLabel}>Visual exploration — exciting but impractical</span>
            </div>
            <div className={styles.evolutionItem}>
              <div className={`${styles.evolutionLabel} ${styles.evolutionLabelFinal}`}>Final</div>
              <div className={styles.evolutionImageContainer}>
                <img
                  src="/images/magick/graph-visual-for a dungeon-adventure-agent.png"
                  alt="Final refined design"
                  className={`${styles.evolutionImage} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/magick/graph-visual-for a dungeon-adventure-agent.png', 'Final refined design')}
                />
              </div>
              <span className={styles.imageLabel}>Final design — color with purpose</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframe Progression */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Design Process: From Wireframe to Final</h2>
          <p className={styles.paragraph}>
            Each screen went through multiple iterations — starting with black-and-white wireframes, progressing through color exploration, and arriving at polished high-fidelity designs. Here's the evolution of the template page:
          </p>
        </div>
        <div className={styles.sectionInnerWide}>
          <div className={styles.progressionGrid}>
            <div className={styles.progressionItem}>
              <div className={styles.progressionNumber}>1</div>
              <div className={styles.progressionImageContainer}>
                <img
                  src="/images/magick/wireframe-template-iteration-1.png"
                  alt="Wireframe iteration 1"
                  className={`${styles.progressionImage} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/magick/wireframe-template-iteration-1.png', 'B&W concept wireframe')}
                />
              </div>
              <span className={styles.imageLabel}>B&W concept wireframe</span>
            </div>
            <div className={styles.progressionItem}>
              <div className={styles.progressionNumber}>2</div>
              <div className={styles.progressionImageContainer}>
                <img
                  src="/images/magick/wireframe-template-iteration-2.png"
                  alt="Wireframe iteration 2"
                  className={`${styles.progressionImage} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/magick/wireframe-template-iteration-2.png', 'First color pass')}
                />
              </div>
              <span className={styles.imageLabel}>First color pass</span>
            </div>
            <div className={styles.progressionItem}>
              <div className={styles.progressionNumber}>3</div>
              <div className={styles.progressionImageContainer}>
                <img
                  src="/images/magick/wireframe-template-iteration-3.png"
                  alt="Wireframe iteration 3"
                  className={`${styles.progressionImage} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/magick/wireframe-template-iteration-3.png', 'MVP hi-fi concept')}
                />
              </div>
              <span className={styles.imageLabel}>MVP hi-fi concept</span>
            </div>
            <div className={styles.progressionItem}>
              <div className={styles.progressionNumber}>4</div>
              <div className={styles.progressionImageContainer}>
                <img
                  src="/images/magick/wireframe-template-iteration-4.png"
                  alt="Wireframe iteration 4"
                  className={`${styles.progressionImage} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/magick/wireframe-template-iteration-4.png', 'Final design')}
                />
              </div>
              <span className={styles.imageLabel}>Final design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Designing for Complex Systems</h2>
          <p className={styles.paragraph}>
            This project focused on making advanced AI workflows feel approachable. I applied progressive onboarding, visual hierarchy, and consistent interaction patterns so users could move from first experiment to advanced systems without friction.
          </p>

          {/* Image Carousel */}
          <div className={styles.carousel}>
            <div className={styles.carouselContainer}>
              <img
                src={designSystemImages[currentDesignSlide]}
                alt={`Design system example ${currentDesignSlide + 1}`}
                className={styles.carouselImage}
                onClick={() => openLightbox(designSystemImages[currentDesignSlide], `Design system example ${currentDesignSlide + 1}`)}
              />
              <button
                className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
                onClick={() => handleManualNavigation(() =>
                  setCurrentDesignSlide(prev =>
                    prev === 0 ? designSystemImages.length - 1 : prev - 1
                  )
                )}
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
                onClick={() => handleManualNavigation(() =>
                  setCurrentDesignSlide(prev =>
                    prev === designSystemImages.length - 1 ? 0 : prev + 1
                  )
                )}
                aria-label="Next image"
              >
                →
              </button>
            </div>
            <div className={styles.carouselDots}>
              {designSystemImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.carouselDot} ${index === currentDesignSlide ? styles.carouselDotActive : ''}`}
                  onClick={() => handleManualNavigation(() => setCurrentDesignSlide(index))}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            <div className={styles.carouselCounter}>
              {currentDesignSlide + 1} / {designSystemImages.length}
            </div>
          </div>

          <div className={styles.bulletGrid}>
            {[
              'Progressive disclosure for feature discovery',
              'Strong hierarchy and grouping for node graphs',
              'Clear affordances and feedback loops',
              'Consistent visual language across all surfaces'
            ].map((principle, i) => (
              <div key={i} className={styles.bulletItem}>
                <span className={styles.bulletIcon}>✓</span>
                <span>{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy & Leadership with Pitch Deck */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInnerWide}>
          <div className={styles.sectionBannerDark}>
            <img
              src="/images/magick/marketing-magick-banner-top.png"
              alt="Magick marketing materials"
              className={`${styles.sectionBannerImage} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/magick/marketing-magick-banner-top.png', 'Magick marketing materials')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitleLight}>Strategy & Leadership</h2>
          <p className={styles.paragraphLight}>
            Beyond interface design, I worked closely with the other founders, marketing team, designers, and engineers on product direction, investor storytelling, and roadmap planning, helping to shape both the product experience and the business narrative.
          </p>

          <div className={styles.impactGridRow}>
            {[
              'Product positioning & value articulation',
              'Investor pitch deck design',
              'Cross-functional collaboration'
            ].map((item, i) => (
              <div key={i} className={styles.impactItem}>
                <span className={styles.impactIcon}>★</span>
                <span className={styles.impactText}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sectionInnerWide}>
          <div className={styles.sectionBannerDark} style={{ marginTop: '32px' }}>
            <img
              src="/images/magick/marketing-magick-banner-bottom.png"
              alt="Magick marketing examples"
              className={`${styles.sectionBannerImage} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/magick/marketing-magick-banner-bottom.png', 'Magick marketing examples')}
            />
          </div>
        </div>

        {/* Pitch Deck Carousel */}
        <div className={styles.sectionInner} style={{ marginTop: '48px' }}>
          <p className={styles.pdfCaption}>
            Over three years, we iterated on 10+ versions of the pitch deck as first-time founders learning to refine our story. Browse through some slides below:
          </p>
        </div>
        <div className={styles.sectionInnerWide}>
          <div className={styles.carouselDark}>
            <div className={styles.carouselContainer}>
              <img
                src={pitchDeckSlides[currentPitchSlide]}
                alt={`Pitch deck slide ${currentPitchSlide + 1}`}
                className={styles.carouselImage}
                onClick={() => openLightbox(pitchDeckSlides[currentPitchSlide], `Pitch deck slide ${currentPitchSlide + 1}`)}
              />
              <button
                className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
                onClick={() => setCurrentPitchSlide(prev =>
                  prev === 0 ? pitchDeckSlides.length - 1 : prev - 1
                )}
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
                onClick={() => setCurrentPitchSlide(prev =>
                  prev === pitchDeckSlides.length - 1 ? 0 : prev + 1
                )}
                aria-label="Next slide"
              >
                →
              </button>
            </div>
            <div className={styles.carouselDots}>
              {pitchDeckSlides.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.carouselDot} ${index === currentPitchSlide ? styles.carouselDotActive : ''}`}
                  onClick={() => setCurrentPitchSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className={styles.carouselCounterLight}>
              {currentPitchSlide + 1} / {pitchDeckSlides.length}
            </div>
          </div>
          <span className={styles.imageLabelLight}>Investor pitch deck — July 2024 version</span>

          {/* Pitch Deck History */}
          <div className={styles.pitchDeckHistory}>
            <img
              src="/images/magick/pitch-deck-history.png"
              alt="Three earlier versions of the pitch deck cover slide"
              className={`${styles.pitchDeckHistoryImage} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/magick/pitch-deck-history.png', 'Evolution of pitch deck designs across multiple versions')}
            />
            <span className={styles.imageLabelLight}>Evolution of pitch deck designs across multiple versions</span>
          </div>
        </div>
      </section>

      {/* Impact & Learnings */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Impact & Learnings</h2>

          <div className={styles.twoColumnGrid}>
            <div>
              <h3 className={styles.columnTitle}>Impact</h3>
              <div className={styles.columnItems}>
                {[
                  'Improved onboarding clarity and early user engagement',
                  'Strong design system adoption across teams',
                  'Platform evolved through continuous iteration and feedback'
                ].map((item, i) => (
                  <div key={i} className={styles.columnItem}>
                    <span className={styles.columnIconGreen}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className={styles.columnTitle}>Key Learnings</h3>
              <div className={styles.columnItems}>
                {[
                  'Designing for AI systems requires constant prioritization',
                  'Early success moments are critical for retention',
                  'Functional and scalable systems matter more than perfect screens'
                ].map((item, i) => (
                  <div key={i} className={styles.columnItem}>
                    <span className={styles.columnIconPurple}>◇</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.reflectionBlock}>
            <p className={styles.reflectionText}>
              Startup pace meant wearing many hats and rapid growth across disciplines, teaching me that versatility and adaptability are just as valuable as specialization.
            </p>
          </div>
        </div>
        <div className={styles.sectionInnerWide}>
          <div className={styles.reflectionImageContainer}>
            <img
              src="/images/magick/userflow-overview.png"
              alt="Comprehensive user flow overview showing the full product journey"
              className={`${styles.reflectionImage} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/magick/userflow-overview.png', 'Comprehensive user flow overview showing the full product journey')}
            />
          </div>
        </div>
      </section>

      {/* Tools & Methods */}
      <section className={styles.toolsSection}>
        <div className={styles.toolsInner}>
          <div className={styles.toolsList}>
            {['Figma', 'UX Research', 'Design Systems', 'Prototyping', 'Generative AI', 'Product Strategy', 'Team Leadership', 'Pitch Deck Design'].map((tool, i) => (
              <span key={i} className={styles.toolTag}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Banner */}
      <section className={styles.openSourceSection}>
        <div className={styles.openSourceInner}>
          <div className={styles.openSourceContent}>
            <img
              src="/images/magick/Banner-light.png"
              alt="Magick ML Logo"
              className={styles.openSourceLogo}
            />
            <h3 className={styles.openSourceTitle}>Open Source Project</h3>
            <p className={styles.openSourceDesc}>
              Magick ML is an active open-source project. Explore the codebase, contribute, or fork it for your own AI experiments.
            </p>
            <a
              href="https://www.magickml.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openSourceButton}
            >
              View the Website →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaButtons}>
            <Link to="/work/project89" className={styles.ctaButton}>
              → View Project 89
            </Link>
            <Link to="/work/rawmagic" className={styles.ctaButton}>
              → View Raw Magic
            </Link>
            <Link to="/work/proxim8" className={styles.ctaButton}>
              → View Gamemaker Demo
            </Link>
          </div>
          <Link to="/" className={styles.backLink}>
            ← Back to Work
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {currentImage && (
        <Lightbox
          src={currentImage.src}
          alt={currentImage.alt}
          isVideo={currentImage.isVideo}
          onClose={() => setLightboxIndex(null)}
          onPrev={goPrev}
          onNext={goNext}
          label={currentImage.label}
        />
      )}
    </main>
  );
}
