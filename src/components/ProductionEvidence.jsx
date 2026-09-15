import { useState } from 'react';
import Lightbox from './Lightbox';
import styles from './ProductionEvidence.module.css';

const base = '/images/film/process/';
const photo = (file, alt, caption) => ({ src: `${base}${file}-v1.jpg`, alt, caption });
const examples = {
  'the-exchange': [
    {
      title: 'Scene 8.5: directing the camera and light',
      body: 'The room reference establishes the space, with an annotated path for the intended camera movement. A second frame sets the darkness and flashlight focus before the scene becomes a first-person shot.',
      images: [
        photo('exchange-camera-path', 'Abandoned spacecraft room with a red camera path around the central workbench', '01 · Room and intended camera path'),
        photo('exchange-lighting', 'The same room in darkness with a flashlight illuminating the floor and workbench', '02 · Lighting and focal-point reference'),
      ],
      video: 'exchange-scene-85-v1.mp4',
      poster: 'exchange-lighting-v1.jpg',
      videoLabel: 'Scene 8.5: generated flashlight walkthrough',
      videoCaption: '03 · Generated clip: a first-person flashlight walkthrough of the abandoned spacecraft.',
    },
    {
      title: 'Scene 2.2: keeping the cast consistent',
      body: 'Character sheets establish faces, wardrobe, and distinguishing details before the cast is brought together in one shot. The cockpit clip shows Franco, Liam, and Isla translated from those references into the scene.',
      images: [
        photo('exchange-franco', 'Franco character reference sheet with multiple views and wardrobe details', 'Franco · Character reference'),
      ],
      additionalLabel: 'View the other character references',
      additional: [
        photo('exchange-liam', 'Liam Payet character reference sheet with multiple views and wardrobe details', 'Liam · Character reference'),
        photo('exchange-isla', 'Isla Chen character reference sheet with multiple views and wardrobe details', 'Isla · Character reference'),
      ],
      paired: true,
      video: 'exchange-scene-22-v1.mp4',
      poster: 'exchange-cockpit-v1.jpg',
      videoLabel: 'Scene 2.2: generated cockpit scene',
      videoCaption: 'Generated clip · The three characters together in the cockpit.',
    },
  ],
  coherence: [
    {
      title: 'From references to a finished shot',
      body: 'The character, the Tuner headband, and the room were developed as separate references. The final black-and-white frame brings them together, keeping the person, prop, and setting recognizable within the chosen visual style.',
      featured: photo('coherence-final', 'Finished black-and-white shot of Parcival putting on the Tuner in the room', 'Final generated shot'),
      images: [
        photo('coherence-parcival', 'Parcival character reference sheet showing his face, glasses, black clothing, and multiple views', '01 · Parcival character reference'),
        photo('coherence-tuner', 'Tuner headband reference showing its shape, materials, components, and how it is worn', '02 · Tuner prop reference'),
        photo('coherence-room', 'Room reference with notes, window diagrams, desk, and Tuner headband', '03 · Room and scene reference'),
      ],
    },
    {
      title: 'Finding a consistent visual language',
      body: 'These Midjourney exploration grids show the search across black-and-white, restrained color, and highly saturated environments. The aim was to let different visual styles belong to the same film.',
      images: [
        photo('coherence-style-character', 'Generation grid exploring Parcival in black-and-white and subdued warm lighting', 'Character, monochrome, and restrained color'),
        photo('coherence-style-light', 'Generation grid exploring blue and gold light in geometric environments', 'Saturated light and geometric space'),
      ],
      additionalLabel: 'More environment explorations',
      additional: [
        photo('coherence-style-world', 'Generation grid exploring luminous green environments and monumental organic architecture', 'Environment and organic form'),
      ],
    },
  ],
};

export default function ProductionEvidence({ projectId }) {
  const [selected, setSelected] = useState(null);
  const groups = examples[projectId];
  if (!groups) return null;
  const images = groups.flatMap(group => [group.featured, ...group.images, ...(group.additional || [])].filter(Boolean));
  const current = selected === null ? null : images[selected];
  const renderImage = item => (
    <figure key={item.src}>
      <button type="button" className={styles.imageButton}
        aria-label={`Enlarge: ${item.caption}`}
        onClick={() => setSelected(images.indexOf(item))}>
        <img src={item.src} alt={item.alt} loading="lazy" width="1600" height="1067" />
      </button>
      <figcaption>{item.caption}</figcaption>
    </figure>
  );
  const renderVideo = group => (
    <figure className={styles.clip}>
      <video src={`${base}${group.video}`} poster={`${base}${group.poster}`}
        controls playsInline preload="none" aria-label={group.videoLabel} />
      <figcaption>{group.videoCaption}</figcaption>
    </figure>
  );

  return (
    <section className={styles.evidence} aria-label="Production examples">
      <h4 className={styles.heading}>Inside the production</h4>
      <p className={styles.hint}>Select an image to view the reference in detail.</p>
      {groups.map(group => (
        <div className={styles.example} key={group.title}>
          <h5 className={styles.title}>{group.title}</h5>
          <p className={styles.body}>{group.body}</p>
          {group.featured && <div className={styles.featured}>{renderImage(group.featured)}</div>}
          <div className={styles.grid}>
            {group.images.map(renderImage)}
            {group.paired && renderVideo(group)}
          </div>
          {group.video && !group.paired && renderVideo(group)}
          {group.additional && (
            <details className={styles.additional}>
              <summary>{group.additionalLabel}</summary>
              <div className={styles.grid}>{group.additional.map(renderImage)}</div>
            </details>
          )}
        </div>
      ))}
      {current && <Lightbox src={current.src} alt={current.alt} label={current.caption}
        onClose={() => setSelected(null)}
        onPrev={() => setSelected(index => (index - 1 + images.length) % images.length)}
        onNext={() => setSelected(index => (index + 1) % images.length)} />}
    </section>
  );
}
