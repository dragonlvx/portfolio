import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/caseStudy.module.css';
import Lightbox from '../components/Lightbox';

export default function RawMagic() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const allLightboxItems = [
    // The Challenge
    { src: '/images/rawmagic/products-7.JPG', alt: 'Raw Magic Chocolate Products', label: 'The Challenge' },
    { src: '/images/rawmagic/products-cart.JPG', alt: 'Raw Magic Chocolate Products Display', label: 'The Challenge' },
    // My Role
    { src: '/images/rawmagic/Raw-Magic-tasteful-photo.webp', alt: 'Brand & Visual Design', label: 'My Role' },
    { src: '/images/rawmagic/marketing-cards.jpg', alt: 'Product & Experience Design', label: 'My Role' },
    { src: '/images/rawmagic/products-phoenix.JPG', alt: 'Business & Operations', label: 'My Role' },
    // Brand & Packaging Design
    { src: '/images/rawmagic/header-cauldron.png', alt: 'Raw Magic Chocolate Packaging', label: 'Brand & Packaging Design' },
    { src: '/images/rawmagic/bar-label-front.webp', alt: 'Front layouts with bold colors and archetypal artwork', label: 'Brand & Packaging Design' },
    { src: '/images/rawmagic/bar-label-back.webp', alt: 'Back wrapper layout with typography and ingredient system', label: 'Brand & Packaging Design' },
    { src: '/images/rawmagic/4flavours-Product-label-designs.webp', alt: 'Four flavors product label designs', label: 'Brand & Packaging Design' },
    // Symbolic Design & Seals
    { src: '/images/rawmagic/4-custom-icons.png', alt: 'Circular symbolic seals: raw, paleo, honey-sweetened, energetic', label: 'Symbolic Design & Seals' },
    // The Rebrand
    { src: '/images/rawmagic/products-old.JPG', alt: 'Raw Dragon Chocolate Alchemy — before rebrand', label: 'The Rebrand' },
    { src: '/images/rawmagic/products-new.png', alt: 'Raw Magic Chocolate — after rebrand', label: 'The Rebrand' },
    { src: '/images/rawmagic/IMG_7878.JPG', alt: 'Raw Magic Chocolate product photo', label: 'The Rebrand' },
    { src: '/images/rawmagic/faerie.jpeg', alt: 'Raw Magic Chocolate Faerie bar', label: 'The Rebrand' },
    { src: '/images/rawmagic/IMG_7879.JPG', alt: 'Raw Magic Chocolate product photo', label: 'The Rebrand' },
    // Product & Physical Design
    { src: '/images/rawmagic/bar-mold-concept.webp', alt: 'CAD design of chocolate bar mold', label: 'Product & Physical Design' },
    { src: '/images/rawmagic/barmold-concept.jpg', alt: 'Chocolate bar mold concept detail', label: 'Product & Physical Design' },
    { src: '/images/rawmagic/new-bar-mold-pic.webp', alt: 'Finished chocolate bars from custom mold', label: 'Product & Physical Design' },
    // Experiential Content & Displays
    { src: '/images/rawmagic/header-pour.png', alt: 'Raw Magic Chocolate experiential design', label: 'Experiential Content & Displays' },
    { src: '/images/rawmagic/experience-fortune-square.JPG', alt: 'Fortune cards inside Raw Magic chocolate bars', label: 'Experiential Content & Displays' },
    { src: '/images/rawmagic/castle-box-w-dimensions-design.webp', alt: 'Display box with production dimensions', label: 'Experiential Content & Displays' },
    { src: '/images/rawmagic/castle-box.webp', alt: 'Castle-style retail display box', label: 'Experiential Content & Displays' },
    { src: '/images/rawmagic/experience-halloween2.JPG', alt: 'Halloween seasonal product', label: 'Experiential Content & Displays' },
    { src: '/images/rawmagic/experience-yule.png', alt: 'Yule seasonal product', label: 'Experiential Content & Displays' },
    // Key Learnings
    { src: '/images/rawmagic/header-products.png', alt: 'Raw Magic Chocolate products packaged and ready for shipping', label: 'Key Learnings' },
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
            src="/images/rawmagic/header-packaged.png"
            alt="Raw Magic Chocolate"
            className={styles.heroImage}
            style={{ objectPosition: 'center center' }}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Raw Magic Chocolate</h1>
          <h2 className={styles.heroSubtitle}>Building a Story-Driven Wellness Brand Through Design & Experience</h2>
          <p className={styles.heroIntro}>
            Raw Magic Chocolate was a seven-year founder-led project where I designed and built a ritual-inspired wellness brand from the ground up. Through packaging, symbolism, product design, and experiential storytelling, I led a full rebrand that doubled sales and transformed how customers experienced the product.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className={styles.quickFacts}>
        <div className={styles.quickFactsGrid}>
          {[
            { label: 'Role', value: 'Founder / Creative Director' },
            { label: 'Industry', value: 'Food & Wellness' },
            { label: 'Scope', value: 'Brand · Packaging · Product · Ops' },
            { label: 'Duration', value: '7+ Years', subValue: '2012–2019' },
            { label: 'Focus', value: 'Experiential Branding' },
            { label: 'Outcome', value: '+100% Sales Growth' }
          ].map((fact, i) => (
            <div key={i} className={styles.quickFactItem}>
              <span className={styles.quickFactLabel}>{fact.label}</span>
              <span className={styles.quickFactValue}>
                {fact.value}
              </span>
              {fact.subValue && (
                <span className={styles.quickFactSubValue}>{fact.subValue}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* The Challenge */}
      <section className={styles.section}>
        <div className={styles.sectionInnerWide}>
          <div className={styles.sectionBanner}>
            <img
              src="/images/rawmagic/products-7.JPG"
              alt="Raw Magic Chocolate Products"
              className={`${styles.sectionBannerImage} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/rawmagic/products-7.JPG', 'Raw Magic Chocolate Products')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <p className={styles.paragraph}>
            Raw Magic began as a niche wellness chocolate competing in a crowded health-food market. The challenge was to differentiate not only visually, but emotionally, turning a simple product into a memorable ritual and building a scalable brand system that could grow across packaging, displays, and future products.
          </p>
          <div className={styles.goalsList}>
            <h3 className={styles.goalsHeading}>Goals</h3>
            {[
              'Stand out on retail shelves',
              'Communicate quality, magic, and wellness',
              'Build emotional connection with customers',
              'Increase conversion and repeat purchase'
            ].map((goal, i) => (
              <div key={i} className={styles.goalItem}>
                <span className={styles.goalIcon}>◇</span>
                <span className={styles.goalText}>{goal}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sectionInnerWide}>
          <div className={styles.sectionBanner} style={{ marginTop: '32px', marginBottom: '0' }}>
            <img
              src="/images/rawmagic/products-cart.JPG"
              alt="Raw Magic Chocolate Products Display"
              className={`${styles.sectionBannerImage} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/rawmagic/products-cart.JPG', 'Raw Magic Chocolate Products Display')}
            />
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>My Role</h2>
          <p className={styles.paragraph}>
            I founded and led Raw Magic as both creative director and product owner, overseeing nearly every aspect of the brand and business.
          </p>

          <div className={styles.rolesGrid}>
            {[
              {
                title: 'Brand & Visual Design',
                image: '/images/rawmagic/Raw-Magic-tasteful-photo.webp',
                items: [
                  'Brand identity and visual system',
                  'Packaging layout and illustration',
                  'Typography and symbolic graphics'
                ]
              },
              {
                title: 'Product & Experience Design',
                image: '/images/rawmagic/marketing-cards.jpg',
                items: [
                  'Fortune cards and narrative inserts',
                  'Custom retail displays and packaging formats',
                  'Chocolate bar molds and physical product design'
                ]
              },
              {
                title: 'Business & Operations',
                image: '/images/rawmagic/products-phoenix.JPG',
                items: [
                  'Product positioning and strategy',
                  'Production oversight and iteration',
                  'Retail presentation systems'
                ]
              }
            ].map((role, i) => (
              <div key={i} className={styles.roleCardWithBorder}>
                <div className={styles.roleCardImage}>
                  <img
                    src={role.image}
                    alt={role.title}
                    className={`${styles.roleCardImg} ${styles.clickableImage}`}
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

      {/* Brand & Packaging Design */}
      <section className={styles.section}>
        <div className={styles.sectionInnerWide}>
          <div className={styles.sectionBanner}>
            <img
              src="/images/rawmagic/header-cauldron.png"
              alt="Raw Magic Chocolate Packaging"
              className={`${styles.sectionBannerImage} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/rawmagic/header-cauldron.png', 'Raw Magic Chocolate Packaging')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Brand & Packaging Design</h2>
          <p className={styles.paragraph}>
            Using archetypal imagery, color psychology, and symbolic design, I rebuilt Raw Magic's visual identity to create packaging that felt ritualistic, premium, and emotionally engaging — designed to "pop" on shelves while telling a story.
          </p>

          <div className={styles.imageGrid}>
            <div className={styles.imageGridItem}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/rawmagic/bar-label-front.webp"
                  alt="Bar label front design"
                  className={`${styles.image} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/rawmagic/bar-label-front.webp', 'Front layouts with bold colors and archetypal artwork')}
                />
              </div>
              <span className={styles.imageLabel}>Front layouts with bold colors and archetypal artwork</span>
            </div>
            <div className={styles.imageGridItem}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/rawmagic/bar-label-back.webp"
                  alt="Bar label back design"
                  className={`${styles.image} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/rawmagic/bar-label-back.webp', 'Back wrapper layout with typography and ingredient system')}
                />
              </div>
              <span className={styles.imageLabel}>Back wrapper layout with typography and ingredient system</span>
            </div>
          </div>

          <div className={styles.imageContainer} style={{ marginTop: '32px' }}>
            <img
              src="/images/rawmagic/4flavours-Product-label-designs.webp"
              alt="Four flavors product label designs"
              className={`${styles.image} ${styles.clickableImage}`}
              style={{ width: '100%' }}
              onClick={() => openLightbox('/images/rawmagic/4flavours-Product-label-designs.webp', 'Four flavors product label designs')}
            />
          </div>

          <div className={styles.bulletGrid}>
            {[
              'Shelf-optimized color systems',
              'Archetypal and mythic illustration language',
              'Scalable layout templates for new flavors',
              'Consistent visual hierarchy across SKUs'
            ].map((item, i) => (
              <div key={i} className={styles.bulletItem}>
                <span className={styles.bulletIcon}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Symbolic Design & Seals - Subsection */}
        <div className={styles.sectionInner} style={{ marginTop: '48px' }}>
          <h3 className={styles.sectionTitle}>Symbolic Design & Seals</h3>
          <p className={styles.paragraph}>
            I created a set of custom symbolic seals to communicate product qualities visually — turning ingredient information into brand mythology and emotional cues.
          </p>

          <div className={styles.imageContainer} style={{ marginTop: '32px' }}>
            <img
              src="/images/rawmagic/4-custom-icons.png"
              alt="Custom seal icons"
              className={`${styles.image} ${styles.clickableImage}`}
              style={{ width: '100%' }}
              onClick={() => openLightbox('/images/rawmagic/4-custom-icons.png', 'Circular symbolic seals: raw, paleo, honey-sweetened, energetic')}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '12px', textAlign: 'center' }}>
            {[
              'Emotional anchors for repeat buyers',
              'Brand mythology elements',
              'Visual shorthand for product attributes',
              'Reduced reliance on dense marketing copy'
            ].map((item, i) => (
              <span key={i} style={{ fontSize: '13px', color: '#888', lineHeight: '1.4' }}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Rebranding */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInnerWide}>
          <div className={styles.imageGrid} style={{ marginBottom: '32px' }}>
            <div className={styles.imageGridItem}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/rawmagic/products-old.JPG"
                  alt="Raw Dragon Chocolate Alchemy — before rebrand"
                  className={`${styles.image} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/rawmagic/products-old.JPG', 'Raw Dragon Chocolate Alchemy \u2014 before rebrand')}
                />
              </div>
              <span className={styles.imageLabel}>Before — Raw Dragon Chocolate Alchemy</span>
            </div>
            <div className={styles.imageGridItem}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/rawmagic/products-new.png"
                  alt="Raw Magic Chocolate — after rebrand"
                  className={`${styles.image} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/rawmagic/products-new.png', 'Raw Magic Chocolate \u2014 after rebrand')}
                />
              </div>
              <span className={styles.imageLabel}>After — Raw Magic Chocolate</span>
            </div>
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>The Rebrand</h2>
          <p className={styles.paragraph}>
            The brand originally launched as "Raw Dragon Chocolate Alchemy." The packaging was almost entirely dark with only a small touch of colour for each flavour. The product names were poetic but obscure; "Silva Luna" for hempermint, "Milky Fae" for cashew cream, and the bars were wrapped in biodegradable clear plastic, which, while well-intentioned, made the product look amateur and homemade on the shelf.
          </p>
          <p className={styles.paragraph}>
            The rebrand into "Raw Magic Chocolate" was designed to fix all of this. Each flavour was given a vibrant, standout colour so the bars would pop off the shelf. Every flavour was paired with a simple, immediately recognizable magical archetype; the Goddess for Hempermint, the Faerie for Cashew Cream, with the artwork displayed large and bold so there was no mistaking it. The clear plastic was replaced with a shiny foil wrapper that elevated the perceived quality. Custom castle-shaped retail display boxes reinforced the magical identity, and the new name made the brand's promise unmistakable: Raw Magic Chocolate, a magical brand of raw chocolate bars.
          </p>
          <p className={styles.paragraph}>
            The result was a 100% increase in sales over a six-month period and helped expand retail presence from approximately 30 stores to over 70+ locations throughout Canada.
          </p>
        </div>
        <div className={styles.sectionInnerWide} style={{ marginTop: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { src: '/images/rawmagic/IMG_7878.JPG', alt: 'Raw Magic Chocolate product photo' },
              { src: '/images/rawmagic/faerie.jpeg', alt: 'Raw Magic Chocolate Faerie bar' },
              { src: '/images/rawmagic/IMG_7879.JPG', alt: 'Raw Magic Chocolate product photo' }
            ].map((img, i) => (
              <div key={i} className={styles.imageContainer} style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`${styles.image} ${styles.clickableImage}`}
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                  onClick={() => openLightbox(img.src, img.alt)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product & Physical Design */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Product & Physical Design</h2>
          <p className={styles.paragraph}>
            Beyond graphics, I designed the physical product itself, including recipes and custom chocolate bar molds, shaping the tactile and mouthwatering experience of the brand.
          </p>

          <div className={styles.imageGrid} style={{ alignItems: 'stretch' }}>
            <div className={styles.imageGridItem} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className={styles.imageContainer} style={{ flex: 1 }}>
                <img
                  src="/images/rawmagic/bar-mold-concept.webp"
                  alt="Bar mold concept"
                  className={`${styles.image} ${styles.clickableImage}`}
                  style={{ height: '100%', objectFit: 'cover' }}
                  onClick={() => openLightbox('/images/rawmagic/bar-mold-concept.webp', 'CAD design of chocolate bar mold')}
                />
              </div>
              <div className={styles.imageContainer} style={{ flex: 1 }}>
                <img
                  src="/images/rawmagic/barmold-concept.jpg"
                  alt="Bar mold concept detail"
                  className={`${styles.image} ${styles.clickableImage}`}
                  style={{ height: '100%', objectFit: 'cover' }}
                  onClick={() => openLightbox('/images/rawmagic/barmold-concept.jpg', 'Chocolate bar mold concept detail')}
                />
              </div>
              <span className={styles.imageLabel}>CAD design and concept for chocolate bar mold</span>
            </div>
            <div className={styles.imageGridItem}>
              <div className={styles.imageContainer} style={{ flex: 1 }}>
                <img
                  src="/images/rawmagic/new-bar-mold-pic.webp"
                  alt="Finished chocolate bars"
                  className={`${styles.image} ${styles.clickableImage}`}
                  style={{ height: '100%', objectFit: 'cover' }}
                  onClick={() => openLightbox('/images/rawmagic/new-bar-mold-pic.webp', 'Finished chocolate bars from custom mold')}
                />
              </div>
              <span className={styles.imageLabel}>Finished chocolate bars from custom mold</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '24px' }}>
            {[
              'Custom mold geometry',
              'Production-ready designs',
              'Brand identity carried into form factor'
            ].map((item, i) => (
              <div key={i} className={styles.bulletItem}>
                <span className={styles.bulletIcon}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Displays */}
      <section className={styles.sectionAccent}>
        <div className={styles.sectionInnerWide}>
          <div className={styles.sectionBannerDark} style={{ border: 'none', height: 'auto', overflow: 'hidden', borderRadius: '12px' }}>
            <img
              src="/images/rawmagic/header-pour.png"
              alt="Raw Magic Chocolate experiential design"
              className={`${styles.sectionBannerImage} ${styles.clickableImage}`}
              style={{ objectFit: 'contain', height: 'auto' }}
              onClick={() => openLightbox('/images/rawmagic/header-pour.png', 'Raw Magic Chocolate experiential design')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitleLight}>Experiential Content & Displays</h2>
          <p className={styles.paragraphLight}>
            To deepen engagement, I designed fortune cards inside each bar and custom retail display boxes, transforming each purchase into a small narrative moment and strengthening brand loyalty.
          </p>

          <div className={styles.sectionBannerDark} style={{ border: 'none', height: 'auto', overflow: 'visible' }}>
            <img
              src="/images/rawmagic/experience-fortune-banner.png"
              alt="Fortune cards inside Raw Magic chocolate bars"
              className={`${styles.sectionBannerImage} ${styles.clickableImage}`}
              style={{ objectFit: 'contain', height: 'auto' }}
              onClick={() => openLightbox('/images/rawmagic/experience-fortune-square.JPG', 'Fortune cards inside Raw Magic chocolate bars')}
            />
          </div>
          <p className={styles.paragraphLight} style={{ fontSize: '14px', marginTop: '-16px', marginBottom: '32px', color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
            Every bar included a "fortune card"; tarot artwork paired with words of wisdom. Collect a full set to win a free box of chocolate.
          </p>

          <div className={styles.imageGrid}>
            <div className={styles.imageGridItem}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/rawmagic/castle-box-w-dimensions-design.webp"
                  alt="Castle box with dimensions"
                  className={`${styles.image} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/rawmagic/castle-box-w-dimensions-design.webp', 'Display box with production dimensions')}
                />
              </div>
              <span className={styles.imageLabel} style={{ color: 'rgba(255,255,255,0.7)' }}>Display box with production dimensions</span>
            </div>
            <div className={styles.imageGridItem}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/rawmagic/castle-box.webp"
                  alt="Castle display box"
                  className={`${styles.image} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/rawmagic/castle-box.webp', 'Castle-style retail display box')}
                />
              </div>
              <span className={styles.imageLabel} style={{ color: 'rgba(255,255,255,0.7)' }}>Castle-style retail display box</span>
            </div>
          </div>
        </div>

        {/* Seasonal Products & Promotions */}
        <div className={styles.sectionInner} style={{ marginTop: '48px' }}>
          <h3 className={styles.sectionTitleLight} style={{ fontSize: '20px' }}>Seasonal Products & Promotions</h3>
          <p className={styles.paragraphLight} style={{ fontSize: '15px' }}>
            I designed limited-edition seasonal products and promotional campaigns that leaned into holiday themes — extending the brand's storytelling into gifting moments.
          </p>

          <div className={styles.imageGrid} style={{ marginTop: '24px' }}>
            <div className={styles.imageGridItem}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/rawmagic/experience-halloween2.JPG"
                  alt="Halloween seasonal product"
                  className={`${styles.image} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/rawmagic/experience-halloween2.JPG', 'Halloween seasonal product')}
                />
              </div>
              <span className={styles.imageLabel} style={{ color: 'rgba(255,255,255,0.7)' }}>Halloween limited edition</span>
            </div>
            <div className={styles.imageGridItem}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/rawmagic/experience-yule.png"
                  alt="Yule seasonal product"
                  className={`${styles.image} ${styles.clickableImage}`}
                  onClick={() => openLightbox('/images/rawmagic/experience-yule.png', 'Yule seasonal product')}
                />
              </div>
              <span className={styles.imageLabel} style={{ color: 'rgba(255,255,255,0.7)' }}>Yule holiday edition</span>
            </div>
          </div>
        </div>
      </section>


      {/* Key Learnings */}
      <section className={styles.section}>
        <div className={styles.sectionInnerWide}>
          <div className={styles.sectionBanner}>
            <img
              src="/images/rawmagic/header-products.png"
              alt="Raw Magic Chocolate products packaged and ready for shipping"
              className={`${styles.sectionBannerImage} ${styles.clickableImage}`}
              onClick={() => openLightbox('/images/rawmagic/header-products.png', 'Raw Magic Chocolate products packaged and ready for shipping')}
            />
          </div>
        </div>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Key Learnings</h2>

          <div className={styles.keyLearningsGrid}>
            {[
              { title: 'Bold Beats Obscure', text: 'Switching from dark, obscure packaging to bold, vibrant archetypes doubled sales in six months' },
              { title: 'Product as Ritual', text: 'Fortune cards turned a chocolate bar into a collectible ritual, driving repeat purchases' },
              { title: 'Visual Consistency Scales', text: 'A consistent visual system across bars, boxes, and displays made our presence in 70+ health food locations feel like one brand' },
              { title: 'Engagement Beyond the Product', text: 'Customers didn\'t just buy the chocolate, they collected the fortune cards, shared them, and came back for more' },
              { title: 'Own Every Touchpoint', text: 'Owning everything from recipe to shelf display meant every touchpoint reinforced the same story' }
            ].map((item, i) => (
              <div key={i} className={styles.keyLearningCard}>
                <span className={styles.keyLearningNumber}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.keyLearningTitle}>{item.title}</span>
                <span className={styles.keyLearningText}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Methods */}
      <section className={styles.toolsSection}>
        <div className={styles.toolsInner}>
          <div className={styles.toolsList}>
            {['Brand Design', 'Packaging', 'Illustration', 'Typography', 'Product Design', 'Retail Displays', 'Production Oversight', 'Business Strategy'].map((tool, i) => (
              <span key={i} className={styles.toolTag}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Note */}
      <section className={styles.openSourceSection}>
        <div className={styles.openSourceInner}>
          <div className={styles.openSourceContent}>
            <img
              src="/images/rawmagic/raw-magic-wordmark-logo.webp"
              alt="Raw Magic Chocolate Logo"
              className={styles.openSourceLogo}
              style={{ width: '289px', maxWidth: '289px' }}
            />
            <h3 className={styles.openSourceTitle}>No Longer in Business</h3>
            <p className={styles.openSourceDesc}>
              Raw Magic Chocolate ceased operations in 2019. While the brand is no longer active, the work lives on as a testament to what's possible when design, storytelling, and product come together. A case study on our custom retail packaging was featured by Pak Factory, the company that produced our castle display boxes.
            </p>
            <div className={styles.openSourceLinks}>
              <a
                href="https://pakfactory.com/blog/raw-magic-chocolate/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openSourceButton}
              >
                Read the Pak Factory Case Study →
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
          onClose={() => setLightboxIndex(null)}
          onPrev={goPrev}
          onNext={goNext}
          label={currentImage.label}
        />
      )}
    </main>
  );
}
