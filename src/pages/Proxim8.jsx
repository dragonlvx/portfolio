import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/caseStudy.module.css';
import Lightbox from '../components/Lightbox';
import useIsMobile from '../hooks/useIsMobile';

export default function Proxim8() {
  const isMobile = useIsMobile();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [demoPaused, setDemoPaused] = useState(false);
  const [demoHovered, setDemoHovered] = useState(false);
  const [artCardHovered, setArtCardHovered] = useState(false);
  const [cityscapePaused, setCityscapePaused] = useState(false);
  const [cityscapeHovered, setCityscapeHovered] = useState(false);
  const demoVideoRef = useRef(null);
  const cityscapeVideoRef = useRef(null);

  const allLightboxItems = [
    // Hero
    { src: '/images/proxim8/1.banner-video.mp4', alt: 'Proxim8 Protocol gameplay', isVideo: true, keepMuted: false, label: 'Hero' },
    // Overview
    { src: '/images/proxim8/header1.png', alt: 'Proxim8 Protocol gameplay overview', isVideo: false, keepMuted: false, label: 'Overview' },
    // The Challenge
    { src: '/images/proxim8/challenge1.mp4', alt: 'Learn a full game engine from scratch', isVideo: true, keepMuted: true, label: 'The Challenge' },
    { src: '/images/proxim8/challenge2.mp4', alt: 'Design and ship a complete vertical slice', isVideo: true, keepMuted: true, label: 'The Challenge' },
    { src: '/images/proxim8/challenge3.mp4', alt: 'Build all systems, assets, and audio solo', isVideo: true, keepMuted: true, label: 'The Challenge' },
    { src: '/images/proxim8/challenge4.mp4', alt: 'Achieve this in 4 weeks of hobby time, not months or years', isVideo: true, keepMuted: true, label: 'The Challenge' },
    // My Role & Skills
    { src: '/images/proxim8/cutscene-clip-briefing.mp4', alt: 'Mission briefing cutscene', isVideo: true, keepMuted: false, label: 'My Role & Skills' },
    { src: '/images/proxim8/game-mechanics1.mp4', alt: 'Game mechanics gameplay', isVideo: true, keepMuted: true, label: 'My Role & Skills' },
    { src: '/images/proxim8/gamemaker-UI-running-clip.mp4', alt: 'GameMaker UI running clip', isVideo: true, keepMuted: true, label: 'My Role & Skills' },
    { src: '/images/proxim8/player-sprite-sheet.png', alt: 'Player sprite sheet', isVideo: false, keepMuted: false, label: 'My Role & Skills' },
    { src: '/images/proxim8/player-sprite-sheet-2.png', alt: 'Player sprite sheet 2', isVideo: false, keepMuted: false, label: 'My Role & Skills' },
    { src: '/images/proxim8/PROXIM8-Protocol-intro-cutscene.mp4', alt: 'Proxim8 Protocol intro cutscene', isVideo: true, keepMuted: false, label: 'My Role & Skills' },
    // Human–AI Workflow
    { src: '/images/proxim8/workflow-banner.mp4', alt: 'Human-AI Workflow', isVideo: true, keepMuted: true, label: 'Human\u2013AI Workflow' },
    { src: '/images/proxim8/workflow1-gamemaker.png', alt: 'GameMaker learning', isVideo: false, keepMuted: false, label: 'Human\u2013AI Workflow' },
    { src: '/images/proxim8/workflow-code.png', alt: 'Code generation', isVideo: false, keepMuted: false, label: 'Human\u2013AI Workflow' },
    { src: '/images/proxim8/drone-razorbot-enemy.jpeg', alt: 'Sprite generation', isVideo: false, keepMuted: false, label: 'Human\u2013AI Workflow' },
    { src: '/images/proxim8/workflow4-suno.png', alt: 'Suno music generation', isVideo: false, keepMuted: false, label: 'Human\u2013AI Workflow' },
    // Visual & World Design
    { src: '/images/proxim8/proxim8-player-charactersheet-img.png', alt: 'Proxim8 character design sheet', isVideo: false, keepMuted: false, label: 'Visual & World Design' },
    { src: '/images/proxim8/player-sprite-sheet.png', alt: 'Final sprite sheet after manual adjustments', isVideo: false, keepMuted: false, label: 'Visual & World Design' },
    { src: '/images/proxim8/cityscape.mp4', alt: 'Cyberpunk cityscape', isVideo: true, keepMuted: true, label: 'Visual & World Design' },
    // Difficulties Encountered
    { src: '/images/proxim8/prototype.mp4', alt: 'Early prototype in Gemini Canvas', isVideo: true, keepMuted: true, label: 'Difficulties Encountered' },
    { src: '/images/proxim8/AI-pass-run.png', alt: 'AI-generated sprite pass', isVideo: false, keepMuted: false, label: 'Difficulties Encountered' },
    { src: '/images/proxim8/huneter-seeker-test.jpeg', alt: 'Hunter seeker sprite test', isVideo: false, keepMuted: false, label: 'Difficulties Encountered' },
    { src: '/images/proxim8/hunter-seeker-animation.mp4', alt: 'Hunter seeker animation', isVideo: true, keepMuted: true, label: 'Difficulties Encountered' },
    { src: '/images/proxim8/glitch-ledge-grab.mp4', alt: 'Glitch ledge grab gameplay', isVideo: true, keepMuted: true, label: 'Difficulties Encountered' },
    // Impact
    { src: '/images/proxim8/impact-highscore.png', alt: 'High score screen', isVideo: false, keepMuted: false, label: 'Impact' },
    // Key Takeaways
    { src: '/images/proxim8/takeaways.mp4', alt: 'Key takeaways gameplay', isVideo: true, keepMuted: true, label: 'Key Takeaways' },
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
        <div className={styles.heroVideoContainer} style={{ background: '#111' }}>
          <a href="https://gx.games/games/la4e64/project-89-proxim8-protocol/" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
            {isMobile ? (
              <img
                src="/images/proxim8/banner-video-poster.jpg"
                alt="Proxim8 Protocol gameplay"
                className={`${styles.heroVideo} ${styles.clickableImage}`}
                style={{ objectFit: 'contain', width: '100%' }}
              />
            ) : (
              <video
                src="/images/proxim8/banner-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={`${styles.heroVideo} ${styles.clickableImage}`}
                style={{ objectFit: 'contain' }}
              />
            )}
          </a>
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>AI‑Accelerated Game Development Case Study (Project 89)</p>
          <h1 className={styles.heroTitle}>Proxim8 Protocol <br /> - Shadow Heist - </h1>
          <p className={styles.heroSubtitle}>
            A fully playable platformer built from zero experience in 4 weeks of hobby time using human–AI collaboration.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className={styles.quickFacts}>
        <div className={styles.quickFactsGrid}>
          {[
            { label: 'Role', value: <>Game Designer & Developer<br />(Solo)</> },
            { label: 'Engine', value: 'GameMaker' },
            { label: 'Type', value: <>Platformer Demo<br />(Vertical Slice)</> },
            { label: 'Timeline', value: <>4 Weeks<br />(Hobby Time)</> },
            { label: 'Scope', value: <>Design · Code ·<br />Art · Audio</> },
            { label: 'Approach', value: <>Human–AI<br />Collaboration</> }
          ].map((fact, i) => (
            <div key={i} className={styles.quickFactItem}>
              <span className={styles.quickFactLabel}>{fact.label}</span>
              <span className={styles.quickFactValue}>{fact.value}</span>
            </div>
          ))}
          <a
            href="https://gx.games/games/la4e64/project-89-proxim8-protocol/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickFactPlayNow}
          >
            Play Now →
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.section}>
        <div className={styles.sectionInnerWide}>
          <div className={styles.sectionBanner}>
            <img
              src="/images/proxim8/header1.png"
              alt="Proxim8 Protocol gameplay overview"
              loading="lazy"
              className={`${styles.sectionBannerImage} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/proxim8/header1.png', 'Proxim8 Protocol gameplay overview')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.paragraph}>
            Shadow Heist is a playable platformer demo set in the Project 89 universe. Starting with no prior GameMaker or formal game‑dev experience, I designed and built a complete level with player controls, enemy AI, puzzles, UI, cutscenes, music, and sound, compressing what would easily take months into 4 weeks of hobby time using AI‑augmented workflows.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInnerWide}>
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '32px' }}>The Challenge</h2>
          <div className={styles.challengeGrid}>
            {[
              { video: '/images/proxim8/challenge1.mp4', text: 'Learn a full game engine from scratch' },
              { video: '/images/proxim8/challenge2.mp4', text: 'Design and ship a complete vertical slice' },
              { video: '/images/proxim8/challenge3.mp4', text: 'Build all systems, assets, and audio solo' },
              { video: '/images/proxim8/challenge4.mp4', text: 'Achieve this in 4 weeks of hobby time, not months or years' }
            ].map((challenge, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #e5e5e5',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {isMobile ? (
                  <img
                    src={challenge.video.replace('.mp4', '-poster.jpg')}
                    alt={challenge.text}
                    loading="lazy"
                    className={styles.clickableImage}
                    style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                    onClick={() => openLightbox(challenge.video, challenge.text)}
                  />
                ) : (
                  <video
                    src={challenge.video}
                    loop
                    muted
                    playsInline
                    className={styles.clickableImage}
                    style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                    onClick={() => openLightbox(challenge.video, challenge.text)}
                  />
                )}
                <div style={{ padding: '16px', textAlign: 'center' }}>
                  <span style={{ color: '#888', fontSize: '13px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontSize: '14px', lineHeight: '1.5', color: '#444' }}>{challenge.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitleLight}>What I Built</h2>

          <div
            style={{ marginBottom: '32px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}
            onMouseEnter={() => setDemoHovered(true)}
            onMouseLeave={() => setDemoHovered(false)}
          >
            {isMobile ? (
              <img
                src="/images/proxim8/full-demo-poster.jpg"
                alt="Full demo playthrough"
                loading="lazy"
                style={{ width: '100%', display: 'block' }}
              />
            ) : (
              <>
                <video
                  ref={demoVideoRef}
                  src="/images/proxim8/full-demo.mp4"
                  autoPlay
                  muted
                  playsInline
                  loop
                  style={{ width: '100%', display: 'block' }}
                />
                {/* Pause/Play button - visible on hover */}
                {demoHovered && (
                  <button
                    onClick={() => {
                      if (demoPaused) {
                        demoVideoRef.current.play();
                        setDemoPaused(false);
                      } else {
                        demoVideoRef.current.pause();
                        setDemoPaused(true);
                      }
                    }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(0,0,0,0.6)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '24px',
                      transition: 'opacity 0.2s'
                    }}
                  >
                    {demoPaused ? '▶' : '⏸'}
                  </button>
                )}
                {/* Fullscreen button - bottom right corner */}
                <button
                  onClick={() => {
                    if (demoVideoRef.current.requestFullscreen) {
                      demoVideoRef.current.requestFullscreen();
                    } else if (demoVideoRef.current.webkitRequestFullscreen) {
                      demoVideoRef.current.webkitRequestFullscreen();
                    } else if (demoVideoRef.current.webkitEnterFullscreen) {
                      demoVideoRef.current.webkitEnterFullscreen();
                    }
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(0,0,0,0.6)',
                    border: 'none',
                    borderRadius: '8px',
                    width: '36px',
                    height: '36px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '16px'
                  }}
                >
                  ⛶
                </button>
              </>
            )}
            <span className={styles.imageLabel} style={{ color: 'rgba(255,255,255,0.7)', marginTop: '8px', display: 'block' }}>Full demo playthrough</span>
          </div>

          <p className={styles.paragraphLight}>A fully playable demo featuring:</p>
          <div className={styles.featureGrid}>
            {[
              'One complete level',
              'Player movement, physics, and controls',
              'Enemy patrol + detection AI',
              'Health, timer, and scoring systems',
              'Cutscenes and narrative transitions',
              'Original music and sound design'
            ].map((feature, i) => (
              <div key={i} className={styles.featureItem}>
                <span className={styles.featureCheck}>✓</span>
                <span className={styles.featureText}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Role & Skills */}
      <section className={styles.section}>
        <div className={styles.sectionInnerWide}>
          <div className={styles.sectionBanner}>
            {isMobile ? (
              <img
                src="/images/proxim8/cutscene-clip-briefing-poster.jpg"
                alt="Mission briefing cutscene"
                loading="lazy"
                className={`${styles.sectionBannerVideo} ${styles.clickableImage}`}
                onClick={() => openLightbox('/images/proxim8/cutscene-clip-briefing.mp4', 'Mission briefing cutscene')}
              />
            ) : (
              <video
                src="/images/proxim8/cutscene-clip-briefing.mp4"
                muted
                playsInline
                loop
                className={`${styles.sectionBannerVideo} ${styles.clickableImage}`}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                onClick={() => openLightbox('/images/proxim8/cutscene-clip-briefing.mp4', 'Mission briefing cutscene')}
              />
            )}
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>My Role & Skills</h2>
          <p className={styles.paragraph}>I handled the entire project end‑to‑end:</p>

          <div className={styles.roleCardsGrid}>
            {/* Game & Systems Design */}
            <div style={{
              background: '#fff',
              border: '1px solid #e5e5e5',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <div style={{ height: '140px', overflow: 'hidden' }}>
                {isMobile ? (
                  <img
                    src="/images/proxim8/game-mechanics1-poster.jpg"
                    alt="Game mechanics gameplay"
                    loading="lazy"
                    className={styles.clickableImage}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onClick={() => openLightbox('/images/proxim8/game-mechanics1.mp4', 'Game mechanics gameplay')}
                  />
                ) : (
                  <video
                    src="/images/proxim8/game-mechanics1.mp4"
                    muted
                    playsInline
                    loop
                    className={styles.clickableImage}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                    onClick={() => openLightbox('/images/proxim8/game-mechanics1.mp4', 'Game mechanics gameplay')}
                  />
                )}
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className={styles.roleTitle}>Game & Systems Design</h3>
                <div className={styles.roleItems}>
                  {['Core mechanics and pacing', 'Enemy behavior and alert states', 'Puzzle and hacking interactions'].map((item, j) => (
                    <div key={j} className={styles.roleItem}>
                      <span className={styles.roleItemBullet}>→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Programming */}
            <div style={{
              background: '#fff',
              border: '1px solid #e5e5e5',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <div style={{ height: '140px', overflow: 'hidden', background: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {isMobile ? (
                  <img
                    src="/images/proxim8/gamemaker-UI-running-clip-poster.jpg"
                    alt="GameMaker UI running clip"
                    loading="lazy"
                    className={styles.clickableImage}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    onClick={() => openLightbox('/images/proxim8/gamemaker-UI-running-clip.mp4', 'GameMaker UI running clip')}
                  />
                ) : (
                  <video
                    src="/images/proxim8/gamemaker-UI-running-clip.mp4"
                    muted
                    playsInline
                    loop
                    className={styles.clickableImage}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                    onClick={() => openLightbox('/images/proxim8/gamemaker-UI-running-clip.mp4', 'GameMaker UI running clip')}
                  />
                )}
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className={styles.roleTitle}>Programming</h3>
                <div className={styles.roleItems}>
                  {['Movement, collisions, triggers', 'AI state logic', 'UI, HUD, timers, and scoring'].map((item, j) => (
                    <div key={j} className={styles.roleItem}>
                      <span className={styles.roleItemBullet}>→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Art & Animation */}
            <div
              style={{
                background: '#fff',
                border: '1px solid #e5e5e5',
                borderRadius: '12px',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setArtCardHovered(true)}
              onMouseLeave={() => setArtCardHovered(false)}
            >
              <div style={{ height: '140px', overflow: 'hidden' }}>
                <img
                  src={artCardHovered ? '/images/proxim8/player-sprite-sheet-2.png' : '/images/proxim8/player-sprite-sheet.png'}
                  alt="Player sprite sheet"
                  loading="lazy"
                  className={styles.clickableImage}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.2s' }}
                  onClick={() => openLightbox(artCardHovered ? '/images/proxim8/player-sprite-sheet-2.png' : '/images/proxim8/player-sprite-sheet.png', artCardHovered ? 'Player sprite sheet 2' : 'Player sprite sheet')}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className={styles.roleTitle}>Art & Animation</h3>
                <div className={styles.roleItems}>
                  {['Sprite generation and cleanup', 'Character and environment animation', 'Tilesets and level layout'].map((item, j) => (
                    <div key={j} className={styles.roleItem}>
                      <span className={styles.roleItemBullet}>→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Audio & Narrative */}
            <div style={{
              background: '#fff',
              border: '1px solid #e5e5e5',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <div style={{ height: '140px', overflow: 'hidden' }}>
                {isMobile ? (
                  <img
                    src="/images/proxim8/PROXIM8-Protocol-intro-cutscene-poster.jpg"
                    alt="Proxim8 Protocol intro cutscene"
                    loading="lazy"
                    className={styles.clickableImage}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onClick={() => openLightbox('/images/proxim8/PROXIM8-Protocol-intro-cutscene.mp4', 'Proxim8 Protocol intro cutscene')}
                  />
                ) : (
                  <video
                    src="/images/proxim8/PROXIM8-Protocol-intro-cutscene.mp4"
                    muted
                    playsInline
                    loop
                    className={styles.clickableImage}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                    onClick={() => openLightbox('/images/proxim8/PROXIM8-Protocol-intro-cutscene.mp4', 'Proxim8 Protocol intro cutscene')}
                  />
                )}
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className={styles.roleTitle}>Audio & Narrative</h3>
                <div className={styles.roleItems}>
                  {['Music generation and curation', 'Sound effects and feedback loops', 'Narrative beats and transitions'].map((item, j) => (
                    <div key={j} className={styles.roleItem}>
                      <span className={styles.roleItemBullet}>→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human–AI Workflow */}
      <section className={styles.sectionAccent}>
        <div className={styles.sectionInnerWide}>
          <div className={styles.sectionBanner}>
            {isMobile ? (
              <img
                src="/images/proxim8/workflow-banner-poster.jpg"
                alt="Human-AI Workflow"
                loading="lazy"
                className={`${styles.sectionBannerVideo} ${styles.clickableImage}`}
                onClick={() => openLightbox('/images/proxim8/workflow-banner.mp4', 'Human-AI Workflow')}
              />
            ) : (
              <video
                src="/images/proxim8/workflow-banner.mp4"
                muted
                playsInline
                loop
                className={`${styles.sectionBannerVideo} ${styles.clickableImage}`}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                onClick={() => openLightbox('/images/proxim8/workflow-banner.mp4', 'Human-AI Workflow')}
              />
            )}
          </div>
        </div>
        <div className={styles.sectionInner}>
          <span className={styles.badge}>Key Differentiator</span>
          <h2 className={styles.sectionTitleLight}>Human–AI Workflow</h2>
          <p className={styles.paragraphLight}>
            This project was built through continuous human–AI collaboration:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '24px' }}>
            {/* AI-assisted learning */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <div style={{ height: '140px', overflow: 'hidden' }}>
                <img
                  src="/images/proxim8/workflow1-gamemaker.png"
                  alt="GameMaker learning"
                  loading="lazy"
                  className={styles.clickableImage}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onClick={() => openLightbox('/images/proxim8/workflow1-gamemaker.png', 'GameMaker learning')}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <span style={{ color: '#fff', fontSize: '14px' }}>AI‑assisted learning of GameMaker and GML</span>
              </div>
            </div>

            {/* Code generation */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <div style={{ height: '140px', overflow: 'hidden' }}>
                <img
                  src="/images/proxim8/workflow-code.png"
                  alt="Code generation"
                  loading="lazy"
                  className={styles.clickableImage}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onClick={() => openLightbox('/images/proxim8/workflow-code.png', 'Code generation')}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <span style={{ color: '#fff', fontSize: '14px' }}>Code generation, debugging, and optimization</span>
              </div>
            </div>

            {/* Sprite generation */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <div style={{ height: '140px', overflow: 'hidden' }}>
                <img
                  src="/images/proxim8/drone-razorbot-enemy.jpeg"
                  alt="Sprite generation"
                  loading="lazy"
                  className={styles.clickableImage}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onClick={() => openLightbox('/images/proxim8/drone-razorbot-enemy.jpeg', 'Sprite generation')}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <span style={{ color: '#fff', fontSize: '14px' }}>Sprite and environment generation with manual cleanup</span>
              </div>
            </div>

            {/* AI-generated music */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <div style={{ height: '140px', overflow: 'hidden' }}>
                <img
                  src="/images/proxim8/workflow4-suno.png"
                  alt="Suno music generation"
                  loading="lazy"
                  className={styles.clickableImage}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onClick={() => openLightbox('/images/proxim8/workflow4-suno.png', 'Suno music generation')}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <span style={{ color: '#fff', fontSize: '14px' }}>AI‑generated music curated and synced to gameplay</span>
              </div>
            </div>
          </div>

          <p className={styles.paragraphLight} style={{ marginTop: '24px', fontWeight: '500' }}>
            Result: rapid skill acquisition + production speed without sacrificing system design or polish.
          </p>
        </div>
      </section>

      {/* Visual & World Design */}
      <section className={styles.section}>
        <div className={styles.sectionInnerWide}>
          <h2 className={styles.sectionTitle}>Visual & World Design</h2>

          <div className={styles.imageGrid}>
            <div className={styles.imageGridItem}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/proxim8/proxim8-player-charactersheet-img.png"
                  alt="Proxim8 character sheet"
                  loading="lazy"
                  className={`${styles.image} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/proxim8/proxim8-player-charactersheet-img.png', 'Proxim8 character design sheet')}
                />
              </div>
              <span className={styles.imageLabel}>Proxim8 character design sheet</span>
            </div>
            <div className={styles.imageGridItem}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/proxim8/player-sprite-sheet.png"
                  alt="Final sprite sheet after manual adjustments"
                  loading="lazy"
                  className={`${styles.image} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/proxim8/player-sprite-sheet.png', 'Final sprite sheet after manual adjustments')}
                />
              </div>
              <span className={styles.imageLabel}>Final sprite sheet after manual adjustments</span>
            </div>
          </div>

          <div className={styles.goalsList} style={{ marginTop: '32px' }}>
            <h3 className={styles.goalsHeading}>Design Goals</h3>
            {[
              'Adapt character designs from the existing Project 89 universe into sprite sheets and animation states',
              'High contrast design for readability; distinguishing player, enemies, collectibles, and foreground elements from busy backgrounds',
              'A single level designed to be replayable and challenging, with a hidden cutscene unlocked by beating the timer, rewarding skilled players with a secret clue to the Project 89 universe',
              'Story-driven intro with a mission briefing cutscene setting up the heist',
              'Visual continuity with the Project 89 & Oneirocom brands'
            ].map((goal, i) => (
              <div key={i} className={styles.goalItem}>
                <span className={styles.goalIcon}>◇</span>
                <span className={styles.goalText}>{goal}</span>
              </div>
            ))}
          </div>

          <div
            className={styles.sectionBanner}
            style={{ marginTop: '32px', position: 'relative' }}
            onMouseEnter={!isMobile ? () => setCityscapeHovered(true) : undefined}
            onMouseLeave={!isMobile ? () => setCityscapeHovered(false) : undefined}
          >
            {isMobile ? (
              <img
                src="/images/proxim8/cityscape-poster.jpg"
                alt="Cyberpunk cityscape"
                loading="lazy"
                className={`${styles.sectionBannerVideo} ${styles.clickableImage}`}
                onClick={() => openLightbox('/images/proxim8/cityscape.mp4', 'Cyberpunk cityscape')}
              />
            ) : (
              <>
                <video
                  ref={cityscapeVideoRef}
                  src="/images/proxim8/cityscape.mp4"
                  autoPlay
                  muted
                  playsInline
                  loop
                  className={`${styles.sectionBannerVideo} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/proxim8/cityscape.mp4', 'Cyberpunk cityscape')}
                />
                {cityscapeHovered && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (cityscapePaused) {
                        cityscapeVideoRef.current.play();
                        setCityscapePaused(false);
                      } else {
                        cityscapeVideoRef.current.pause();
                        setCityscapePaused(true);
                      }
                    }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(0,0,0,0.6)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '24px',
                      transition: 'opacity 0.2s'
                    }}
                  >
                    {cityscapePaused ? '▶' : '⏸'}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Difficulties Encountered */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Difficulties Encountered</h2>
          <p className={styles.paragraph}>
            I started prototyping in Gemini Canvas for rapid layout testing, but it couldn't support pixel art — so I pivoted to GameMaker and rebuilt from scratch.
          </p>
          <div style={{ margin: '24px 0', borderRadius: '12px', overflow: 'hidden' }}>
            {isMobile ? (
              <img
                src="/images/proxim8/prototype-poster.jpg"
                alt="Early prototype in Gemini Canvas"
                loading="lazy"
                className={styles.clickableImage}
                style={{ width: '100%', display: 'block', borderRadius: '12px' }}
                onClick={() => openLightbox('/images/proxim8/prototype.mp4', 'Early prototype in Gemini Canvas')}
              />
            ) : (
              <video
                src="/images/proxim8/prototype.mp4"
                muted
                playsInline
                loop
                className={styles.clickableImage}
                style={{ width: '100%', display: 'block', borderRadius: '12px' }}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                onClick={() => openLightbox('/images/proxim8/prototype.mp4', 'Early prototype in Gemini Canvas')}
              />
            )}
          </div>
          <p className={styles.paragraph} style={{ marginTop: '96px' }}>
            AI felt like a superpower, until it didn't. Generating pixel art sprite sheets was a major friction point: some came out great, others refused to cooperate no matter how I adjusted prompts. I ended up manually tweaking sprites in Photoshop and Aseprite, adding hours to what should have been quick.
          </p>
          <div style={{ margin: '24px 0' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <img
                src="/images/proxim8/AI-pass-run.png"
                alt="AI-generated sprite pass"
                loading="lazy"
                className={styles.clickableImage}
                style={{ width: '100%', display: 'block', borderRadius: '12px' }}
                onClick={() => openLightbox('/images/proxim8/AI-pass-run.png', 'AI-generated sprite pass')}
              />
            </div>
            <span className={styles.imageLabel} style={{ marginTop: '8px', display: 'block' }}>Often AI would generate a sprite sheet where the same leg is forward in every frame, and other strange visual oddities</span>
          </div>
          <p className={styles.paragraph} style={{ marginTop: '96px' }}>
            I did find workarounds, like using video generation to animate a single sprite, then extracting frames into a sprite sheet. Faster than manual animation by a long shot.
          </p>
          <div className={styles.difficultiesTwoUp}>
            <div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', height: '280px' }}>
                <img
                  src="/images/proxim8/huneter-seeker-test.jpeg"
                  alt="Hunter seeker sprite test"
                  loading="lazy"
                  className={styles.clickableImage}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onClick={() => openLightbox('/images/proxim8/huneter-seeker-test.jpeg', 'Hunter seeker sprite test')}
                />
              </div>
              <span className={styles.imageLabel} style={{ marginTop: '8px', display: 'block' }}>Nanobanana Pro sprite sheets often over-delivered with funny visual anomalies</span>
            </div>
            <div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', height: '280px' }}>
                {isMobile ? (
                  <img
                    src="/images/proxim8/hunter-seeker-animation-poster.jpg"
                    alt="Hunter seeker animation"
                    loading="lazy"
                    className={styles.clickableImage}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onClick={() => openLightbox('/images/proxim8/hunter-seeker-animation.mp4', 'Hunter seeker animation')}
                  />
                ) : (
                  <video
                    src="/images/proxim8/hunter-seeker-animation.mp4"
                    muted
                    playsInline
                    loop
                    className={styles.clickableImage}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                    onClick={() => openLightbox('/images/proxim8/hunter-seeker-animation.mp4', 'Hunter seeker animation')}
                  />
                )}
              </div>
              <span className={styles.imageLabel} style={{ marginTop: '8px', display: 'block' }}>Running a single sprite through VEO 3.1 produced consistent animations far more easily</span>
            </div>
          </div>
          <p className={styles.paragraph} style={{ marginTop: '96px' }}>
            Some AI tools just aren't there yet. For gameplay bugs like ledge-grabbing, the AI's solutions were overengineered, simple one‑line fixes often worked better.
          </p>
          <div style={{ margin: '24px 0' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', maxHeight: '400px' }}>
              {isMobile ? (
                <img
                  src="/images/proxim8/glitch-ledge-grab-poster.jpg"
                  alt="Glitch ledge grab gameplay"
                  loading="lazy"
                  className={styles.clickableImage}
                  style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center top', display: 'block', borderRadius: '12px' }}
                  onClick={() => openLightbox('/images/proxim8/glitch-ledge-grab.mp4', 'Glitch ledge grab gameplay')}
                />
              ) : (
                <video
                  src="/images/proxim8/glitch-ledge-grab.mp4"
                  muted
                  playsInline
                  loop
                  className={styles.clickableImage}
                  style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center top', display: 'block', borderRadius: '12px' }}
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                  onClick={() => openLightbox('/images/proxim8/glitch-ledge-grab.mp4', 'Glitch ledge grab gameplay')}
                />
              )}
            </div>
            <span className={styles.imageLabel} style={{ marginTop: '8px', display: 'block' }}>A recurring glitch when coding with Gemini: the sprite wouldn't grab onto ledges properly</span>
          </div>
          <p className={styles.paragraph} style={{ marginTop: '96px' }}>
            The takeaway: knowing when to override AI is just as important as knowing when to lean on it.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInnerWide}>
          <h2 className={styles.sectionTitleLight}>Impact</h2>
          <div className={styles.impactWithImage}>
            <div className={styles.impactCards}>
              {[
                'Early beta testers were impressed with the challenge and found themselves competing to maximize their high score',
                'AI‑empowered designers are moving into a new era — becoming creative directors who build and test demos, shifting from pixel‑pushing perfection into builders of good, fun user experiences',
                'Learning to use AI as a personal tutor made fields that once felt intimidating due to complexity and time suddenly approachable and fun to learn and build in, in real time',
                'Leaning less on a full team allowed me to build with creative freedom and speed on an end‑to‑end vertical slice that I owned every aspect of — without compromising quality or velocity'
              ].map((impact, i) => (
                <div key={i} className={styles.impactItem}>
                  <span className={styles.impactIcon}>★</span>
                  <span className={styles.impactText}>{impact}</span>
                </div>
              ))}
            </div>
            <div className={styles.impactImageContainer}>
              <img
                src="/images/proxim8/impact-highscore.png"
                alt="High score screen"
                loading="lazy"
                className={styles.clickableImage}
                onClick={() => openLightbox('/images/proxim8/impact-highscore.png', 'High score screen')}
              />
            </div>
          </div>

          <div style={{ marginTop: '32px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>What Players Said</h3>
            <div className={styles.feedbackGrid}>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '24px', borderLeft: '3px solid #fbbf24' }}>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', fontStyle: 'italic', margin: 0 }}>
                  "Music: excellent. Graphics: awesome. Story: complicated, but works! That game was cool. I died so many times!"
                </p>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '12px', display: 'block' }}>— Beta Tester</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '24px', borderLeft: '3px solid #fbbf24' }}>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', fontStyle: 'italic', margin: 0 }}>
                  "The soundtrack is TOO GOOD. The introduction is fantastic. The failure scary is scary as f***. The whole experience blends really well."
                </p>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '12px', display: 'block' }}>— Beta Tester</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Key Takeaways</h2>
          <div className={styles.takeawaysGrid}>
            {[
              { number: '01', text: 'AI taught me GameMaker\'s GML in days, but I still had to design which systems to build and why' },
              { number: '02', text: 'Generated sprites got me 70% there; the last 30% of cleanup and consistency was all human judgment' },
              { number: '03', text: 'Chaining multiple AI models together (code + art + music) created a production pipeline that felt like having a small team' }
            ].map((takeaway, i) => (
              <div key={i} className={styles.takeawayCard}>
                <span className={styles.takeawayNumber}>{takeaway.number}</span>
                <span className={styles.takeawayText}>{takeaway.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sectionInnerWide} style={{ marginTop: '48px' }}>
          {isMobile ? (
            <div
              className={styles.sectionBanner}
              style={{ position: 'relative', minHeight: '200px' }}
              onClick={() => openLightbox('/images/proxim8/takeaways.mp4', 'Key takeaways gameplay')}
            >
              <img
                src="/images/proxim8/takeaways.png"
                alt="Key takeaways"
                loading="lazy"
                className={styles.clickableImage}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', position: 'absolute', top: 0, left: 0 }}
              />
            </div>
          ) : (
            <div
              className={styles.sectionBanner}
              style={{ position: 'relative', minHeight: '200px' }}
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector('video');
                const img = e.currentTarget.querySelector('img');
                if (video) { video.style.opacity = '1'; video.play(); }
                if (img) img.style.opacity = '0';
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector('video');
                const img = e.currentTarget.querySelector('img');
                if (video) { video.style.opacity = '0'; video.pause(); video.currentTime = 0; }
                if (img) img.style.opacity = '1';
              }}
              onClick={() => openLightbox('/images/proxim8/takeaways.mp4', 'Key takeaways gameplay')}
            >
              <img
                src="/images/proxim8/takeaways.png"
                alt="Key takeaways"
                loading="lazy"
                className={styles.clickableImage}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', position: 'absolute', top: 0, left: 0, transition: 'opacity 0.3s ease' }}
              />
              <video
                src="/images/proxim8/takeaways.mp4"
                muted
                playsInline
                loop
                className={styles.clickableImage}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', position: 'absolute', top: 0, left: 0, opacity: 0, transition: 'opacity 0.3s ease' }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Tools & Methods */}
      <section className={styles.toolsSection}>
        <div className={styles.toolsInner}>
          <div className={styles.toolsList}>
            {['GameMaker', 'Photoshop', 'Aseprite', 'GPT‑4o'].map((tool, i) => (
              <span key={i} className={styles.toolTag}>{tool}</span>
            ))}
          </div>
          <div className={styles.toolsBreak} />
          <div className={styles.toolsList}>
            {['Gemini Studio', 'VEO 3.1', 'Suno', 'ElevenLabs', 'Nanobanana Pro'].map((tool, i) => (
              <span key={i} className={styles.toolTag}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Try the Demo */}
      <section className={styles.openSourceSection}>
        <div className={styles.openSourceInner}>
          <div className={styles.openSourceContent}>
            <img
              src="/images/proxim8/Proxim8-Protocol-logo.png"
              alt="Proxim8 Protocol Logo"
              loading="lazy"
              className={styles.openSourceLogo}
            />
            <h3 className={styles.openSourceTitle}>Try the Demo</h3>
            <p className={styles.openSourceDesc}>
              Proxim8 Protocol – Shadow Heist is a live, playable GameMaker demo available online now. Jump in and try to beat the high score. Updates and new features are added regularly.
            </p>
            <div className={styles.openSourceLinks}>
              <a
                href="https://gx.games/games/la4e64/project-89-proxim8-protocol/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openSourceButton}
              >
                Play Now →
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
            <Link to="/work/project89" className={styles.ctaButton}>
              → View Project 89
            </Link>
            <Link to="/work/rawmagic" className={styles.ctaButton}>
              → View Raw Magic
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
          keepMuted={currentImage.keepMuted}
          onClose={() => setLightboxIndex(null)}
          onPrev={goPrev}
          onNext={goNext}
          label={currentImage.label}
        />
      )}
    </main>
  );
}
