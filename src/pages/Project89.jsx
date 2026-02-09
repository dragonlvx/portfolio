import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/caseStudy.module.css';
import Lightbox from '../components/Lightbox';

export default function Project89() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [beforeAfterIndex, setBeforeAfterIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const beforeCarouselRef = useRef(null);
  const memeCarouselRef = useRef(null);

  // Meme images array
  const memeImages = [
    { src: '/images/project89/memes/89_glitch.webp', alt: '89 Glitch' },
    { src: '/images/project89/memes/89_memes.webp', alt: '89 Memes' },
    { src: '/images/project89/memes/GM.webp', alt: 'GM' },
    { src: '/images/project89/memes/GMagents.webp', alt: 'GM Agents' },
    { src: '/images/project89/memes/GMhackReality.webp', alt: 'GM Hack Reality' },
    { src: '/images/project89/memes/Tag-youreIT.jpg', alt: 'Tag You\'re IT' },
    { src: '/images/project89/memes/VIRUS WARNING.jpg', alt: 'Virus Warning' },
    { src: '/images/project89/memes/YesterdaysTomorrowToday.jpg', alt: 'Yesterdays Tomorrow Today' },
    { src: '/images/project89/memes/art-magick-culture.webp', alt: 'Art Magick Culture' },
    { src: '/images/project89/memes/awake-not-woke.webp', alt: 'Awake Not Woke' },
    { src: '/images/project89/memes/awake.webp', alt: 'Awake' },
    { src: '/images/project89/memes/coming_to_a_realit_near_you.webp', alt: 'Coming To A Reality Near You' },
    { src: '/images/project89/memes/consiousness_update.webp', alt: 'Consciousness Update' },
    { src: '/images/project89/memes/cult_back_in_culture.webp', alt: 'Cult Back In Culture' },
    { src: '/images/project89/memes/enter_the_game.webp', alt: 'Enter The Game' },
    { src: '/images/project89/memes/glitchinthe_matrix.webp', alt: 'Glitch In The Matrix' },
    { src: '/images/project89/memes/hack_and_singulate.webp', alt: 'Hack And Singulate' },
    { src: '/images/project89/memes/imaginatiion.webp', alt: 'Imagination' },
    { src: '/images/project89/memes/infosymbiote.jpg', alt: 'Info Symbiote' },
    { src: '/images/project89/memes/its-emergent.jpg', alt: 'It\'s Emergent' },
    { src: '/images/project89/memes/its-watching.jpg', alt: 'It\'s Watching' },
    { src: '/images/project89/memes/itsgrowing.jpg', alt: 'It\'s Growing' },
    { src: '/images/project89/memes/machine-elf-terrance mcKenna-img.png', alt: 'Machine Elf' },
    { src: '/images/project89/memes/question everything.jpg', alt: 'Question Everything' },
    { src: '/images/project89/memes/reality-is-sentient-89.jpg', alt: 'Reality Is Sentient' },
    { src: '/images/project89/memes/simulated.jpg', alt: 'Simulated' },
    { src: '/images/project89/memes/stay for the memes.jpg', alt: 'Stay For The Memes' },
    { src: '/images/project89/memes/tag-it.jpg', alt: 'Tag It' },
    { src: '/images/project89/memes/take both pills.jpg', alt: 'Take Both Pills' },
    { src: '/images/project89/memes/the-virus.jpg', alt: 'The Virus' },
    { src: '/images/project89/memes/theresacodeinthefont.jpg', alt: 'There\'s A Code In The Font' },
    { src: '/images/project89/memes/think for yourself.jpg', alt: 'Think For Yourself' },
    { src: '/images/project89/memes/time-to-reprogram.webp', alt: 'Time To Reprogram' },
  ];

  // Randomize meme order once on mount
  const shuffledMemes = useMemo(() => {
    const shuffled = [...memeImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);
  const afterCarouselRef = useRef(null);

  const beforeAfterImages = [
    { before: '/images/project89/before-after/1.before-brochure-0.png', after: '/images/project89/before-after/1.refined-brochure-1.jpg', name: 'Brochure' },
    { before: '/images/project89/before-after/2.before-bunny-0.png', after: '/images/project89/before-after/2.refined-bunny-1.jpg', name: 'Bunny' },
    { before: '/images/project89/before-after/3.before-eye-0.png', after: '/images/project89/before-after/3.refined-eye-1.jpg', name: 'Eye' },
    { before: '/images/project89/before-after/4.before-loading-0.png', after: '/images/project89/before-after/4.refined-loading-1.webp', name: 'Loading' },
    { before: '/images/project89/before-after/5.before-tv-0.png', after: '/images/project89/before-after/5.refined-tv-1.jpg', name: 'TV' },
    { before: '/images/project89/before-after/6.before-virus-0.png', after: '/images/project89/before-after/6.refined-virus-1.jpg', name: 'Virus' },
  ];

  // Auto-scroll timer for before/after
  useEffect(() => {
    if (!isAutoScrolling) return;
    const timer = setInterval(() => {
      setBeforeAfterIndex((prev) => (prev + 1) % beforeAfterImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoScrolling, beforeAfterImages.length]);

  // Meme carousel - CSS animation handles smooth auto-scroll
  // This effect handles pausing on user interaction
  const memeTrackRef = useRef(null);

  useEffect(() => {
    const carousel = memeCarouselRef.current;
    const track = memeTrackRef.current;
    if (!carousel || !track) return;

    let userInteractionTimeout;

    const pauseAnimation = () => {
      track.style.animationPlayState = 'paused';
      clearTimeout(userInteractionTimeout);
      userInteractionTimeout = setTimeout(() => {
        track.style.animationPlayState = 'running';
      }, 2000); // Resume after 2 seconds of no interaction
    };

    // Pause on any user interaction
    carousel.addEventListener('mousedown', pauseAnimation);
    carousel.addEventListener('touchstart', pauseAnimation);
    carousel.addEventListener('wheel', pauseAnimation);

    return () => {
      carousel.removeEventListener('mousedown', pauseAnimation);
      carousel.removeEventListener('touchstart', pauseAnimation);
      carousel.removeEventListener('wheel', pauseAnimation);
      clearTimeout(userInteractionTimeout);
    };
  }, [shuffledMemes]);

  // Sync scroll handler
  const handleCarouselScroll = (e, source) => {
    setIsAutoScrolling(false);
    const scrollLeft = e.target.scrollLeft;
    if (source === 'before' && afterCarouselRef.current) {
      afterCarouselRef.current.scrollLeft = scrollLeft;
    } else if (source === 'after' && beforeCarouselRef.current) {
      beforeCarouselRef.current.scrollLeft = scrollLeft;
    }
  };

  // Navigate to specific index
  const goToIndex = (index) => {
    setIsAutoScrolling(false);
    setBeforeAfterIndex(index);
  };

  // Flat array of ALL lightbox items for carousel navigation
  const allLightboxItems = [
    // The Concept
    { src: '/images/project89/89banner1.mp4', alt: 'Project 89 Concept Banner', isVideo: true, label: 'The Concept' },
    { src: '/images/project89/Oneirocom-logo-simulations.jpeg', alt: 'Cyberpunk story world with corporate mythos (Oneirocom)', isVideo: false, label: 'The Concept' },
    { src: '/images/project89/theresacodeinthefont.jpg', alt: 'Breadcrumb-driven discovery across platforms', isVideo: false, label: 'The Concept' },
    { src: '/images/project89/X-screenshot-community-mission-share.png', alt: 'Community participation as part of the narrative', isVideo: false, label: 'The Concept' },
    { src: '/images/project89/VEO STUDIO-prototype3.png', alt: 'AI-augmented production for rapid iteration', isVideo: false, label: 'The Concept' },
    // My Role
    { src: '/images/project89/89banner-dragon.mp4', alt: 'My Role Banner', isVideo: true, label: 'My Role' },
    { src: '/images/project89/Role-Seraph-help.png', alt: 'Narrative & Experience Design', isVideo: false, label: 'My Role' },
    { src: '/images/project89/Role-mission-complete.png', alt: 'AI-Augmented Production', isVideo: false, label: 'My Role' },
    { src: '/images/project89/Role-X89.png', alt: 'Community & Operations', isVideo: false, label: 'My Role' },
    // What We Built
    { src: '/images/project89/89banner-glitch.mp4', alt: 'What We Built Banner', isVideo: true, label: 'What We Built' },
    { src: '/images/project89/video-89-motorbike-scene.mp4', alt: 'Narrative Content Streams', isVideo: true, label: 'What We Built' },
    { src: '/images/project89/P89-TimelineWars-commercial.mp4', alt: 'AI-Augmented Video', isVideo: true, label: 'What We Built' },
    { src: '/images/project89/ONEIROCOM-HeroBanner.mp4', alt: 'Branded Web Presence', isVideo: true, label: 'What We Built' },
    { src: '/images/project89/Project89-LORE-ad.mp4', alt: 'Community Story Layer', isVideo: true, label: 'What We Built' },
    // Visual Content Pipeline - Before/After (all 12)
    { src: '/images/project89/before-after/1.before-brochure-0.png', alt: 'Brochure - Before', isVideo: false, label: 'Visual Content Pipeline' },
    { src: '/images/project89/before-after/1.refined-brochure-1.jpg', alt: 'Brochure - After', isVideo: false, label: 'Visual Content Pipeline' },
    { src: '/images/project89/before-after/2.before-bunny-0.png', alt: 'Bunny - Before', isVideo: false, label: 'Visual Content Pipeline' },
    { src: '/images/project89/before-after/2.refined-bunny-1.jpg', alt: 'Bunny - After', isVideo: false, label: 'Visual Content Pipeline' },
    { src: '/images/project89/before-after/3.before-eye-0.png', alt: 'Eye - Before', isVideo: false, label: 'Visual Content Pipeline' },
    { src: '/images/project89/before-after/3.refined-eye-1.jpg', alt: 'Eye - After', isVideo: false, label: 'Visual Content Pipeline' },
    { src: '/images/project89/before-after/4.before-loading-0.png', alt: 'Loading - Before', isVideo: false, label: 'Visual Content Pipeline' },
    { src: '/images/project89/before-after/4.refined-loading-1.webp', alt: 'Loading - After', isVideo: false, label: 'Visual Content Pipeline' },
    { src: '/images/project89/before-after/5.before-tv-0.png', alt: 'TV - Before', isVideo: false, label: 'Visual Content Pipeline' },
    { src: '/images/project89/before-after/5.refined-tv-1.jpg', alt: 'TV - After', isVideo: false, label: 'Visual Content Pipeline' },
    { src: '/images/project89/before-after/6.before-virus-0.png', alt: 'Virus - Before', isVideo: false, label: 'Visual Content Pipeline' },
    { src: '/images/project89/before-after/6.refined-virus-1.jpg', alt: 'Virus - After', isVideo: false, label: 'Visual Content Pipeline' },
    // Visual Content Pipeline - Animated Eye banner
    { src: '/images/project89/animated-eye.mp4', alt: 'Visual Content Pipeline', isVideo: true, label: 'Visual Content Pipeline' },
    // Visual Content Examples (memes - all 33 in original order)
    ...memeImages.map(img => ({ src: img.src, alt: img.alt, isVideo: false, label: 'Visual Content Examples' })),
    // AI-Native Video Production
    { src: '/images/project89/animated-cyber-tree.mp4', alt: 'AI-Native Video Production', isVideo: true, label: 'AI-Native Video Production' },
    // AI-Native Video Production - Pipeline steps
    { src: '/images/project89/Project89-Team-character_sheets.png', alt: 'Script & Story', isVideo: false, label: 'AI-Native Video Production' },
    { src: '/images/project89/proxim8-anime-character_sheets.jpg', alt: 'Script & Story', isVideo: false, label: 'AI-Native Video Production' },
    { src: '/images/project89/video-pipeline2.png', alt: 'Scene Imagery', isVideo: false, label: 'AI-Native Video Production' },
    { src: '/images/project89/video-pipeline2.jpeg', alt: 'Scene Imagery', isVideo: false, label: 'AI-Native Video Production' },
    { src: '/images/project89/video-pipeline3.mp4', alt: 'Motion & Video', isVideo: true, label: 'AI-Native Video Production' },
    { src: '/images/project89/PX8-message-2.mp4', alt: 'Voice & Character', isVideo: true, label: 'AI-Native Video Production' },
    { src: '/images/project89/video-pipeline5.mp4', alt: 'Sound Design', isVideo: true, label: 'AI-Native Video Production' },
    { src: '/images/project89/video-pipeline6.mp4', alt: 'Edit & Assemble', isVideo: true, label: 'AI-Native Video Production' },
    // Tutorials
    { src: '/images/project89/how-to-make-PX8-message-video.mp4', alt: 'How to Make PX8 Message Video', isVideo: true, label: 'Community Tutorials' },
    { src: '/images/project89/PX8-message.mp4', alt: 'PX8 Message Example', isVideo: true, label: 'Community Tutorials' },
    // Video Content Showcase
    { src: '/images/project89/showcase-what-is-project89.mp4', alt: 'What is Project 89?', isVideo: true, label: 'Video Content Showcase' },
    { src: '/images/project89/showcase-ghost-neuralnet.mp4', alt: 'Ghost in the Neural Net', isVideo: true, label: 'Video Content Showcase' },
    { src: '/images/project89/showcase-seraph-transmission.mp4', alt: 'Seraph Transmission', isVideo: true, label: 'Video Content Showcase' },
    { src: '/images/project89/showcase-timelinewars-intro.mp4', alt: 'Timeline Wars Intro', isVideo: true, label: 'Video Content Showcase' },
    { src: '/images/project89/showcase-anime-ep1.mp4', alt: 'Anime Episode 1', isVideo: true, label: 'Video Content Showcase' },
    { src: '/images/project89/showcase-anime-ep5.mp4', alt: 'Anime Episode 5', isVideo: true, label: 'Video Content Showcase' },
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
          <video
            src="/images/project89/89-banner.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Project 89</h1>
          <h2 className={styles.heroSubtitle}>Immersive AI-Augmented Narrative & Transmedia Experience</h2>
          <p className={styles.heroIntro}>
            Project 89 is an ongoing, multi-platform narrative experience set in a cyberpunk simulation where a mega-corporation (Oneirocom) controls reality itself. I create AI-augmented content; visuals, videos, audio, and interactive puzzle games. These are designed to build intrigue, community participation, and a cohesive story world.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className={styles.quickFacts}>
        <div className={styles.quickFactsGrid}>
          {[
            { label: 'Role', value: <>Creative Technologist /<br />Content & Ops Lead</> },
            { label: 'Type', value: <>Transmedia /<br />ARG-inspired Narrative</> },
            { label: 'Platforms', value: <>Web · X ·<br />Discord</> },
            { label: 'Media', value: <>Visual · Video ·<br />Audio · Interactive</> },
            { label: 'Tools', value: <>Gen-AI ·<br />Design Craft</> },
            { label: 'Status', value: 'Ongoing' }
          ].map((fact, i) => (
            <div key={i} className={styles.quickFactItem}>
              <span className={styles.quickFactLabel}>{fact.label}</span>
              <span className={styles.quickFactValue}>{fact.value}</span>
            </div>
          ))}
          <a
            href="https://project89.org"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickFactPlayNow}
          >
            View Website →
          </a>
        </div>
      </section>

      {/* The Concept */}
      <section className={styles.section}>
        <div className={styles.sectionInnerWide}>
          <div
            className={styles.sectionBanner}
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) video.play();
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) { video.pause(); video.currentTime = 0; }
            }}
          >
            <video
              src="/images/project89/89banner1.mp4"
              muted
              loop
              playsInline
              className={`${styles.sectionBannerVideo} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/project89/89banner1.mp4', 'Project 89 Concept Banner')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>The Concept</h2>
          <p className={styles.paragraph}>
            Project 89 explores simulation theory, AI consciousness, and liberation through narrative design. The fictional corporation Oneirocom acts as the "face" of the simulation; an in-world brand used to deliver story fragments, clues, and propaganda that audiences can decode over time.
          </p>

          <div className={styles.conceptGrid}>
            {[
              { text: 'Cyberpunk story world with corporate mythos (Oneirocom)', image: '/images/project89/Oneirocom-logo-simulations.jpeg' },
              { text: 'Breadcrumb-driven discovery across platforms', image: '/images/project89/theresacodeinthefont.jpg' },
              { text: 'Community participation as part of the narrative', image: '/images/project89/X-screenshot-community-mission-share.png' },
              { text: 'AI-augmented production for rapid iteration', image: '/images/project89/VEO STUDIO-prototype3.png' }
            ].map((item, i) => (
              <div key={i} className={styles.conceptItem}>
                <div className={styles.conceptImageContainer}>
                  <img
                    src={item.image}
                    alt={item.text}
                    className={`${styles.conceptImage} ${styles.clickableImage}`}
                    onClick={() => openLightbox(item.image, item.text)}
                  />
                </div>
                <div className={styles.conceptText}>
                  <span className={styles.bulletIcon}>◈</span>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInnerWide}>
          <div
            className={styles.sectionBanner}
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) video.play();
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) { video.pause(); video.currentTime = 0; }
            }}
          >
            <video
              src="/images/project89/89banner-dragon.mp4"
              muted
              loop
              playsInline
              className={`${styles.sectionBannerVideo} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/project89/89banner-dragon.mp4', 'My Role Banner')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>My Role</h2>
          <p className={styles.paragraph}>
            I led ongoing creative production and systems design across narrative, media, and community touchpoints.
          </p>

          <div className={styles.rolesGrid}>
            {[
              {
                title: 'Narrative & Experience Design',
                image: '/images/project89/Role-Seraph-help.png',
                items: [
                  'Worldbuilding and story framing across platforms',
                  'Designing breadcrumb trails and community missions',
                  'Maintaining tone and consistency across the universe'
                ]
              },
              {
                title: 'AI-Augmented Production',
                image: '/images/project89/Role-mission-complete.png',
                items: [
                  'Generating and refining images, videos, and audio',
                  'Compositing, typography, and brand overlays for polish',
                  'Rapid iteration using tool-chaining workflows'
                ]
              },
              {
                title: 'Community & Operations',
                image: '/images/project89/Role-X89.png',
                topAlign: true,
                items: [
                  'Content planning and release cadence',
                  'Coordinating assets and maintaining a coherent narrative arc',
                  'Supporting community engagement across X and Discord'
                ]
              }
            ].map((role, i) => (
              <div key={i} className={styles.roleCardWithBorder}>
                <div className={styles.roleCardImage}>
                  <img
                    src={role.image}
                    alt={role.title}
                    className={`${role.topAlign ? styles.roleCardImgTop : styles.roleCardImg} ${styles.clickableImage}`}
                    onClick={() => openLightbox(role.image, role.title)}
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

      {/* What We Built */}
      <section className={styles.sectionAccent}>
        <div className={styles.sectionInnerWide}>
          <div
            className={styles.sectionBannerDark}
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) video.play();
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) { video.pause(); video.currentTime = 0; }
            }}
          >
            <video
              src="/images/project89/89banner-glitch.mp4"
              muted
              loop
              playsInline
              className={`${styles.sectionBannerVideo} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/project89/89banner-glitch.mp4', 'What We Built Banner')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitleLight}>What We Built</h2>
          <div className={styles.builtGrid}>
            {[
              {
                title: 'Narrative Content Streams',
                description: 'Memes, micro-stories, visual fragments',
                video: '/images/project89/video-89-motorbike-scene.mp4'
              },
              {
                title: 'AI-Augmented Video',
                description: 'Lectures, transmissions, music videos',
                video: '/images/project89/P89-TimelineWars-commercial.mp4'
              },
              {
                title: 'Branded Web Presence',
                description: 'Oneirocom site with interactive elements',
                video: '/images/project89/ONEIROCOM-HeroBanner.mp4',
                link: 'https://www.oneirocom.ai'
              },
              {
                title: 'Community Story Layer',
                description: 'Discord and social breadcrumbs',
                video: '/images/project89/Project89-LORE-ad.mp4'
              }
            ].map((item, i) => (
              <div
                key={i}
                className={styles.builtCard}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) { video.pause(); video.currentTime = 0; }
                }}
              >
                <div className={styles.builtCardVideo}>
                  <video
                    src={item.video}
                    muted
                    loop
                    playsInline
                    className={styles.builtVideo}
                    onClick={() => openLightbox(item.video, item.title)}
                  />
                </div>
                <div className={styles.builtCardContent}>
                  <h3 className={styles.builtCardTitle}>{item.title}</h3>
                  <p className={styles.builtCardDesc}>
                    {item.description}
                    {item.link && (
                      <>
                        {' → '}
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.builtCardLink}>
                          {item.link.replace('https://', '')}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Production - Visual Content */}
      <section className={styles.section}>
        <div className={styles.sectionInnerWide}>
          <div
            className={styles.sectionBanner}
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) video.play();
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) { video.pause(); video.currentTime = 0; }
            }}
          >
            <video
              src="/images/project89/animated-eye.mp4"
              muted
              loop
              playsInline
              className={`${styles.sectionBannerVideo} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/project89/animated-eye.mp4', 'Visual Content Pipeline')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <span className={styles.badgeLight}>Process</span>
          <h2 className={styles.sectionTitle}>Visual Content Pipeline</h2>
          <p className={styles.paragraph}>
            Creating visual content for Project 89 meant translating complex lore, strategy discussions, and creative concepts into shareable, on-brand imagery—fast.
          </p>
        </div>
        <div className={styles.sectionInnerWide}>
          {/* Process Steps with Synchronized Carousels */}
          <div className={styles.beforeAfterWrapper}>
            {/* Left Arrow */}
            <button
              className={styles.beforeAfterArrow}
              onClick={() => {
                setIsAutoScrolling(false);
                setBeforeAfterIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
              }}
              aria-label="Previous example"
            >
              ←
            </button>

            <div className={styles.beforeAfterContainer}>
              {/* Before - Generate */}
              <div className={styles.beforeAfterColumn}>
                <div className={styles.beforeAfterHeader}>
                  <span className={styles.beforeAfterNumber}>01</span>
                  <div>
                    <h4 className={styles.beforeAfterTitle}>Generate</h4>
                    <p className={styles.beforeAfterDesc}>Source material from creative conversations, strategy docs, and lore → AI image generation with careful prompting</p>
                  </div>
                </div>
                <div className={styles.beforeAfterCarousel}>
                  <div className={styles.beforeAfterLabel}>Before</div>
                  <div className={styles.beforeAfterImageWrapper}>
                    <img
                      src={beforeAfterImages[beforeAfterIndex].before}
                      alt={`${beforeAfterImages[beforeAfterIndex].name} - Before`}
                      className={`${styles.beforeAfterImage} ${styles.clickableImage}`}
                      onClick={() => openLightbox(beforeAfterImages[beforeAfterIndex].before, `${beforeAfterImages[beforeAfterIndex].name} - Before`)}
                    />
                  </div>
                </div>
              </div>

              {/* After - Refine */}
              <div className={styles.beforeAfterColumn}>
                <div className={styles.beforeAfterHeader}>
                  <span className={styles.beforeAfterNumber}>02</span>
                  <div>
                    <h4 className={styles.beforeAfterTitle}>Refine & Polish</h4>
                    <p className={styles.beforeAfterDesc}>Photoshop editing to add typography, adjust compositions, layer brand elements, and ensure every piece hits the right tone</p>
                  </div>
                </div>
                <div className={styles.beforeAfterCarousel}>
                  <div className={styles.beforeAfterLabel}>After</div>
                  <div className={styles.beforeAfterImageWrapper}>
                    <img
                      src={beforeAfterImages[beforeAfterIndex].after}
                      alt={`${beforeAfterImages[beforeAfterIndex].name} - After`}
                      className={`${styles.beforeAfterImage} ${styles.clickableImage}`}
                      onClick={() => openLightbox(beforeAfterImages[beforeAfterIndex].after, `${beforeAfterImages[beforeAfterIndex].name} - After`)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              className={styles.beforeAfterArrow}
              onClick={() => {
                setIsAutoScrolling(false);
                setBeforeAfterIndex((prev) => (prev + 1) % beforeAfterImages.length);
              }}
              aria-label="Next example"
            >
              →
            </button>
          </div>

          {/* Carousel Navigation Dots */}
          <div className={styles.beforeAfterNav}>
            {beforeAfterImages.map((_, i) => (
              <button
                key={i}
                className={`${styles.beforeAfterDot} ${i === beforeAfterIndex ? styles.beforeAfterDotActive : ''}`}
                onClick={() => goToIndex(i)}
                aria-label={`View example ${i + 1}`}
              />
            ))}
            <button
              className={styles.beforeAfterPlayPause}
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              aria-label={isAutoScrolling ? 'Pause' : 'Play'}
            >
              {isAutoScrolling ? '❚❚' : '▶'}
            </button>
          </div>

          {/* Meme Carousel */}
          <div className={styles.carouselSection}>
            <h3 className={styles.carouselTitle}>Visual Content Examples</h3>
            <div className={styles.infiniteCarousel} ref={memeCarouselRef}>
              <div className={styles.infiniteCarouselTrack} ref={memeTrackRef}>
                {/* Duplicate the shuffled array for seamless infinite loop */}
                {[...shuffledMemes, ...shuffledMemes].map((item, i) => (
                  <div key={i} className={styles.infiniteCarouselItem}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`${styles.infiniteCarouselImage} ${styles.clickableImage}`}
                      onClick={() => openLightbox(item.src, item.alt)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Production - Video/Episodes */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInnerWide}>
          <div
            className={styles.sectionBannerDark}
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) video.play();
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) { video.pause(); video.currentTime = 0; }
            }}
          >
            <video
              src="/images/project89/animated-cyber-tree.mp4"
              muted
              loop
              playsInline
              className={`${styles.sectionBannerVideo} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/project89/animated-cyber-tree.mp4', 'AI-Native Video Production')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <span className={styles.badge}>Key Differentiator</span>
          <h2 className={styles.sectionTitleLight}>AI-Native Video Production</h2>

          {/* Hero Callout */}
          <div className={styles.heroCallout}>
            <div className={styles.heroCalloutContent}>
              <p className={styles.heroCalloutText}>
                As a <strong>solo creator</strong>, I produced full 5–10 minute anime-style episodes in <strong>3–4 weeks</strong>. This is work that traditionally requires entire teams and months of production time.
              </p>
            </div>
          </div>

          <p className={styles.paragraphLight}>
            Each episode pushed the limits of emerging generative tools while maintaining narrative coherence with our live game storyline. Here's the pipeline I developed:
          </p>

          {/* Video Production Pipeline */}
          <div className={styles.videoPipeline}>
            {[
              {
                step: '01',
                title: 'Script & Story',
                desc: 'Collaborative writing with team and AI to align with live game events and ongoing narratives',
                media: '/images/project89/Project89-Team-character_sheets.png',
                mediaHover: '/images/project89/proxim8-anime-character_sheets.jpg',
                isVideo: false,
                hasHoverImage: true
              },
              {
                step: '02',
                title: 'Scene Imagery',
                desc: 'Generate and refine image prompts for each scene, using Photoshop to adjust compositions',
                media: '/images/project89/video-pipeline2.png',
                mediaHover: '/images/project89/video-pipeline2.jpeg',
                isVideo: false,
                hasHoverImage: true
              },
              {
                step: '03',
                title: 'Motion & Video',
                desc: 'Create video prompts from images, generate clips, iterate until movement feels right',
                media: '/images/project89/video-pipeline3.mp4',
                isVideo: true
              },
              {
                step: '04',
                title: 'Voice & Character',
                desc: 'Generate and refine AI voiceovers, ensuring consistent character voices across scenes',
                media: '/images/project89/PX8-message-2.mp4',
                isVideo: true
              },
              {
                step: '05',
                title: 'Sound Design',
                desc: 'Layer in generated sound effects and original music to build atmosphere',
                media: '/images/project89/video-pipeline5.mp4',
                isVideo: true
              },
              {
                step: '06',
                title: 'Edit & Assemble',
                desc: 'Final cut with transitions, glitch effects, pacing—telling a tight story, cutting what doesn\'t serve it',
                media: '/images/project89/video-pipeline6.mp4',
                isVideo: true
              }
            ].map((item, i) => (
              <div
                key={i}
                className={styles.pipelineStep}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) { video.pause(); video.currentTime = 0; }
                }}
              >
                <div className={styles.pipelineStepMedia}>
                  {item.isVideo ? (
                    <video
                      src={item.media}
                      muted
                      loop
                      playsInline
                      className={styles.pipelineStepVideo}
                      onClick={() => openLightbox(item.media, item.title)}
                    />
                  ) : item.hasHoverImage ? (
                    <div className={styles.hoverImageContainer}>
                      <img
                        src={item.media}
                        alt={item.title}
                        className={`${styles.pipelineStepImg} ${styles.hoverImageBase}`}
                        onClick={() => openLightbox(item.media, item.title)}
                      />
                      <img
                        src={item.mediaHover}
                        alt={`${item.title} - hover`}
                        className={`${styles.pipelineStepImg} ${styles.hoverImageOverlay}`}
                        onClick={() => openLightbox(item.mediaHover, item.title)}
                      />
                    </div>
                  ) : (
                    <img
                      src={item.media}
                      alt={item.title}
                      className={`${styles.pipelineStepImg} ${styles.clickableImage}`}
                      onClick={() => openLightbox(item.media, item.title)}
                    />
                  )}
                </div>
                <div className={styles.pipelineStepNumber}>{item.step}</div>
                <div className={styles.pipelineStepContent}>
                  <h4 className={styles.pipelineStepTitle}>{item.title}</h4>
                  <p className={styles.pipelineStepDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Community Tutorial: PX8 Message Videos */}
          <div className={styles.tutorialSection}>
            <h3 className={styles.tutorialTitle}>Teaching the Pipeline: Community Tutorials</h3>
            <p className={styles.paragraphLight}>
              Beyond creating content myself, I documented my workflows to help community members create their own Proxim8 message videos. This tutorial walks through the full multi-tool pipeline; from AI generation to final compositing, showing how anyone can chain together generative tools to produce polished video content.
            </p>
            <div className={styles.tutorialVideos}>
              <div
                className={styles.tutorialVideoCard}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) { video.pause(); video.currentTime = 0; }
                }}
              >
                <div className={styles.tutorialVideoWrapper}>
                  <video
                    src="/images/project89/how-to-make-PX8-message-video.mp4"
                    muted
                    loop
                    playsInline
                    className={styles.tutorialVideo}
                    onClick={() => openLightbox('/images/project89/how-to-make-PX8-message-video.mp4', 'How to Make PX8 Message Video')}
                  />
                </div>
                <div className={styles.tutorialVideoLabel}>
                  <span className={styles.tutorialBadge}>Tutorial</span>
                  <span>How to Make a PX8 Message</span>
                </div>
              </div>
              <div
                className={styles.tutorialVideoCard}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) { video.pause(); video.currentTime = 0; }
                }}
              >
                <div className={styles.tutorialVideoWrapper}>
                  <video
                    src="/images/project89/PX8-message.mp4"
                    muted
                    loop
                    playsInline
                    className={styles.tutorialVideo}
                    onClick={() => openLightbox('/images/project89/PX8-message.mp4', 'PX8 Message Example')}
                  />
                </div>
                <div className={styles.tutorialVideoLabel}>
                  <span className={styles.tutorialBadge}>Result</span>
                  <span>Finished PX8 Message</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Carousel */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInnerWide}>
          <h2 className={styles.sectionTitleLight}>Video Content Showcase</h2>
          <p className={styles.paragraphLight}>
            From short social clips to full anime episodes—scroll through examples of AI-augmented video production.
          </p>

          {/* Video Carousel - Horizontal Scroll */}
          <div className={styles.videoCarousel}>
            {[
              { src: '/images/project89/showcase-what-is-project89.mp4', title: 'What is Project 89?', type: 'Explainer', poster: '/images/project89/screenshot-whatis89.png' },
              { src: '/images/project89/showcase-ghost-neuralnet.mp4', title: 'Ghost in the Neural Net', type: 'Music Video' },
              { src: '/images/project89/showcase-seraph-transmission.mp4', title: 'Seraph Transmission', type: 'Message', poster: '/images/project89/screenshot-seraph.png' },
              { src: '/images/project89/showcase-timelinewars-intro.mp4', title: 'Timeline Wars Intro', type: 'Game Intro' },
              { src: '/images/project89/showcase-anime-ep1.mp4', title: 'Anime Episode 1', type: 'Episode' },
              { src: '/images/project89/showcase-anime-ep5.mp4', title: 'Anime Episode 5', type: 'Episode' },
            ].map((item, i) => (
              <div
                key={i}
                className={styles.videoCarouselItem}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) { video.pause(); video.currentTime = 0; }
                }}
              >
                <div className={styles.videoCarouselBadge}>{item.type}</div>
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={item.poster}
                  className={styles.videoCarouselVideo}
                  onClick={() => openLightbox(item.src, item.title)}
                />
                <div className={styles.videoCarouselTitle}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Learnings */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Impact & Learnings</h2>

          <div className={styles.twoColumnGrid}>
            <div>
              <h3 className={styles.columnTitle}>Impact</h3>
              <div className={styles.columnItems}>
                {[
                  'Built a cohesive transmedia brand and story world',
                  'Established a repeatable AI-augmented production pipeline',
                  'Increased audience intrigue and community participation over time',
                  'Demonstrated consistent visual identity across diverse media'
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
                  'Narrative systems need consistency more than volume',
                  'AI speed is useless without strong editorial taste',
                  'Tool-chaining beats single-tool dependency',
                  'Community feedback is a design input, not just a reaction'
                ].map((item, i) => (
                  <div key={i} className={styles.columnItem}>
                    <span className={styles.columnIconPurple}>◇</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Methods */}
      <section className={styles.toolsSection}>
        <div className={styles.toolsInner}>
          <div className={styles.toolsList}>
            {['Creative Direction', 'Narrative Design', 'Gen-AI Toolchains', 'Graphic Design', 'Video Editing', 'Audio Production', 'Community Ops', 'Rapid Prototyping'].map((tool, i) => (
              <span key={i} className={styles.toolTag}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Project Banner */}
      <section className={styles.openSourceSection}>
        <div className={styles.openSourceInner}>
          <div className={styles.openSourceContent}>
            <img
              src="/images/project89/89wordmark.png"
              alt="Project 89 Logo"
              className={styles.openSourceLogo}
            />
            <h3 className={styles.openSourceTitle}>Ongoing Project</h3>
            <p className={styles.openSourceDesc}>
              Project 89 is a living, evolving narrative experience. Follow along, join the community, or dive deeper into the simulation.
            </p>
            <div className={styles.openSourceLinks}>
              <a
                href="https://project89.org"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openSourceButton}
              >
                Visit Website →
              </a>
              <a
                href="https://x.com/project_89"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openSourceButton}
              >
                Follow on X →
              </a>
              <a
                href="https://www.youtube.com/@project_89"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openSourceButton}
              >
                Watch on YouTube →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaButtons}>
            <Link to="/work/magick" className={styles.ctaButton}>
              → View Magick ML
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
