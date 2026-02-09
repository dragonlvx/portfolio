import { useState } from 'react';
import styles from './Extras.module.css';
import Lightbox from '../components/Lightbox';

const projects = [
  {
    title: 'Space Pirates Board Game',
    category: 'Game Design',
    description: 'Took a board game from rough prototype to polished product; designing the logo, game boards, character cards, item cards, and scalable templates for future expansions. The visual overhaul led to a noticeable lift in player engagement during local playtesting.',
    layout: 'banner',
    bannerColumns: '2fr 1fr 1fr',
    images: [
      { src: '/images/extras/SPACE-PIRATES-logo-title.jpg', alt: 'Space Pirates logo and title design', contain: true, background: '#000' },
      { src: '/images/extras/SPACE-PIRATES-ALL-boards.jpg', alt: 'Space Pirates complete board designs' },
      { src: '/images/extras/SPACE-PIRATES-card.png', alt: 'Space Pirates card design', objectPosition: 'right center' },
    ],
  },
  {
    title: 'Cards & Deck Boxes',
    category: 'Product Design',
    description: 'End-to-end design and production of custom playing cards and deck boxes; original card art, typography, and packaging carried through to print-ready files. Dozens of fully realized physical products across both invented and reimagined card games.',
    images: [
      { src: '/images/extras/SPIRIT-cards-photo.jpeg', alt: 'Spirit card game — printed cards fanned out' },
      { src: '/images/extras/sleeping-queens-rose.png', alt: 'Sleeping Queens custom rose card art', objectPosition: 'center 25%' },
      { src: '/images/extras/ninja.jpg', alt: 'Ninja card illustration', objectPosition: 'center 25%' },
      { src: '/images/extras/cardbox-photo.jpeg', alt: 'Custom printed deck box' },
    ],
  },
  {
    title: 'Comic & Story Book Design',
    category: 'Illustration',
    description: 'Blending AI-generated imagery with manual graphic design to produce comic pages and illustrated storybooks — from cover art and panel composition to full page layouts with dynamic multi-panel spreads.',
    layout: 'banner',
    images: [
      { src: '/images/extras/Story-in-the-Stars-cover.png', alt: 'Story in the Stars comic cover' },
      { src: '/images/extras/Bloop-cover.jpg', alt: 'Bloop comic cover' },
      { src: '/images/extras/phoenix-comic-layout.jpg', alt: 'Phoenix comic page layout' },
    ],
  },
  {
    title: 'Logo Design',
    category: 'Brand Identity',
    description: 'A curated collection of logo marks designed for clients and personal ventures — from AI startups and creative studios to community-driven brands and sustainability projects.',
    layout: 'octet',
    images: [
      { src: '/images/extras/logo-1.png', alt: 'Logo design 1', contain: true, lightboxBg: true },
      { src: '/images/extras/logo-2.png', alt: 'Logo design 2', contain: true, lightboxBg: true },
      { src: '/images/extras/logo-3.png', alt: 'Logo design 3', contain: true, lightboxBg: true },
      { src: '/images/extras/logo-4.png', alt: 'Logo design 4', contain: true, lightboxBg: true },
      { src: '/images/extras/logo-5.png', alt: 'Logo design 5', contain: true, lightboxBg: true },
      { src: '/images/extras/logo-6.png', alt: 'Logo design 6', contain: true, lightboxBg: true },
      { src: '/images/extras/logo-7.png', alt: 'Logo design 7', contain: true, lightboxBg: true },
      { src: '/images/extras/logo-8.png', alt: 'Logo design 8', contain: true, lightboxBg: true },
    ],
  },
  {
    title: 'Illustrations',
    category: 'Digital Art',
    description: 'Personal illustration work spanning detailed fantasy landscapes, stylized iconography, and spiritual imagery — created across Procreate, Photoshop, Illustrator, and augmented with AI-assisted workflows.',
    layout: 'banner',
    images: [
      { src: '/images/extras/fairy-forest.jpg', alt: 'Fairy forest landscape illustration' },
      { src: '/images/extras/Musk-Deer-illustration.jpg', alt: 'Musk Deer illustration' },
      { src: '/images/extras/k09.jpeg', alt: 'Stylized tarot iconography' },
      { src: '/images/extras/chenrezei-bust.jpg', alt: 'Chenrezig spiritual illustration', lightboxSrc: '/images/extras/chenrezei-01.jpg' },
    ],
  },
  {
    title: 'AI Chat App Concept',
    category: 'UI Design',
    description: 'A pre-ChatGPT contract to design a character-driven AI chat app. Explored conversational interfaces, character selection, and chat history patterns while the design language for AI interactions was still being invented.',
    layout: 'banner',
    bannerColumns: '1fr 1fr 2fr',
    images: [
      { src: '/images/extras/ai-chat-app-design-chat-history-screenshot.png', alt: 'AI chat app chat history design', objectPosition: 'center top' },
      { src: '/images/extras/ai-chat-app-design-chat-screenshot.png', alt: 'AI chat app conversation interface design', objectPosition: 'center top' },
      { src: '/images/extras/ai-chat-app-all-designs.png', alt: 'AI chat app full design system' },
    ],
  },
  {
    title: 'Pixel This',
    category: 'Game Design',
    description: 'A pixel art guessing game built as a mobile-first web app. Players race to identify what\'s being drawn pixel-by-pixel. Designed the UI, custom fonts, and full game flow.',
    images: [
      { src: '/images/extras/Pixel-This-titlescreen.png', alt: 'Pixel This title screen' },
      { src: '/images/extras/Pixel-This-game-screenshot.png', alt: 'Pixel This gameplay' },
    ],
  },
  {
    title: 'ARCADE UX Prototype',
    category: 'UX Design',
    description: 'A high-fidelity prototype for a retro-themed arcade discovery app. Designed the complete user flow — from onboarding through to purchase — with an emphasis on playful micro-interactions and nostalgic visual cues.',
    layout: 'gif',
    images: [
      { src: '/images/extras/ARCADE-app-userflow.gif', alt: 'ARCADE app user flow prototype animation' },
    ],
  },
];

// Build a flat list of all lightbox-ready images across all projects
const allLightboxImages = projects.flatMap((project) =>
  project.images.map((img) => ({
    src: img.lightboxSrc || img.src,
    alt: img.alt,
    projectTitle: project.title,
    lightboxBg: img.lightboxBg || false,
  }))
);

export default function Extras() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (src, alt) => {
    const idx = allLightboxImages.findIndex((item) => item.src === src && item.alt === alt);
    setLightboxIndex(idx !== -1 ? idx : null);
  };

  const goNext = () => {
    setLightboxIndex((prev) => (prev + 1) % allLightboxImages.length);
  };

  const goPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + allLightboxImages.length) % allLightboxImages.length);
  };

  const currentImage = lightboxIndex !== null ? allLightboxImages[lightboxIndex] : null;

  const renderImages = (project) => {
    const { images, layout } = project;

    // Animated GIF layout
    if (layout === 'gif') {
      return (
        <div className={styles.projectImageGif}>
          <img
            src={images[0].src}
            alt={images[0].alt}
            className={styles.projectImg}
            style={{ maxWidth: '600px', maxHeight: '289px', width: '100%', height: 'auto', margin: '0 auto' }}
            onClick={() => openLightbox(images[0].src, images[0].alt)}
          />
        </div>
      );
    }

    // 4x2 octet grid (8 images)
    if (layout === 'octet') {
      return (
        <div className={styles.projectImageOctet}>
          {images.map((img, i) => (
            <div key={i} className={styles.projectImageOctetItem}>
              <img
                src={img.src}
                alt={img.alt}
                className={styles.projectImg}
                style={img.contain ? { objectFit: 'contain', padding: '16px', background: '#f0efed' } : {}}
                onClick={() => openLightbox(img.src, img.alt)}
              />
            </div>
          ))}
        </div>
      );
    }

    // Single-row banner (3 or 4 images)
    if (layout === 'banner') {
      const colClass = images.length === 3 ? styles.cols3 : styles.cols4;
      const customStyle = project.bannerColumns ? { gridTemplateColumns: project.bannerColumns } : {};
      return (
        <div className={`${styles.projectImageBanner} ${colClass}`} style={customStyle}>
          {images.map((img, i) => (
            <div key={i} className={styles.projectImageBannerItem}>
              <img
                src={img.src}
                alt={img.alt}
                className={styles.projectImg}
                style={{
                  ...(img.contain ? { objectFit: 'contain', padding: '16px', background: img.background || '#f0efed' } : {}),
                  ...(img.objectPosition ? { objectPosition: img.objectPosition } : {}),
                }}
                onClick={() => openLightbox(img.lightboxSrc || img.src, img.alt)}
              />
            </div>
          ))}
        </div>
      );
    }

    // Existing layouts
    if (images.length === 1) {
      return (
        <div className={styles.projectImageSingle}>
          <img
            src={images[0].src}
            alt={images[0].alt}
            className={styles.projectImg}
            style={images[0].contain ? { objectFit: 'contain', padding: '24px', background: '#f0efed' } : {}}
            onClick={() => openLightbox(images[0].src, images[0].alt)}
          />
        </div>
      );
    }

    if (images.length === 2) {
      return (
        <div className={styles.projectImageDuo}>
          {images.map((img, i) => (
            <div key={i} className={styles.projectImageDuoItem}>
              <img
                src={img.src}
                alt={img.alt}
                className={styles.projectImg}
                style={img.contain ? { objectFit: 'contain', padding: '16px', background: '#f0efed' } : {}}
                onClick={() => openLightbox(img.src, img.alt)}
              />
            </div>
          ))}
        </div>
      );
    }

    if (images.length === 3) {
      return (
        <div className={styles.projectImageTrio}>
          <div className={styles.projectImageTrioMain}>
            <img
              src={images[0].src}
              alt={images[0].alt}
              className={styles.projectImg}
              style={images[0].contain ? { objectFit: 'contain', padding: '24px', background: '#f0efed' } : {}}
              onClick={() => openLightbox(images[0].src, images[0].alt)}
            />
          </div>
          <div className={styles.projectImageTrioSide}>
            {images.slice(1).map((img, i) => (
              <div key={i} className={styles.projectImageTrioSideItem}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className={styles.projectImg}
                  style={img.contain ? { objectFit: 'contain', padding: '16px', background: '#f0efed' } : {}}
                  onClick={() => openLightbox(img.src, img.alt)}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 4 images (2x2 quad) — default
    return (
      <div className={styles.projectImageQuad}>
        {images.map((img, i) => (
          <div key={i} className={styles.projectImageQuadItem}>
            <img
              src={img.src}
              alt={img.alt}
              className={styles.projectImg}
              style={{
                ...(img.contain ? { objectFit: 'contain', padding: '16px', background: '#f0efed' } : {}),
                ...(img.objectPosition ? { objectPosition: img.objectPosition } : {}),
              }}
              onClick={() => openLightbox(img.src, img.alt)}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className={styles.extrasMain}>
      <div className={styles.extrasContainer}>
        <header className={styles.extrasHeader}>
          <h1 className={styles.extrasTitle}>Extras</h1>
          <p className={styles.extrasSubtitle}>
            A selection of side projects, experiments, and creative work spanning brand, product, illustration, and UI design.
          </p>
        </header>

        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <article key={index} className={styles.projectCard}>
              <div className={styles.projectImages}>
                {renderImages(project)}
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {currentImage && (
        <Lightbox
          src={currentImage.src}
          alt={currentImage.alt}
          label={currentImage.projectTitle}
          lightboxBg={currentImage.lightboxBg}
          onClose={() => setLightboxIndex(null)}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </main>
  );
}
