import { useState } from 'react';
import Lightbox from './Lightbox';
import CopyEmail from './CopyEmail';
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
        photo('exchange-liam', 'Liam Payet character reference sheet with multiple views and wardrobe details', 'Liam · Character reference'),
        photo('exchange-isla', 'Isla Chen character reference sheet with multiple views and wardrobe details', 'Isla · Character reference'),
      ],
      video: 'exchange-scene-22-v1.mp4',
      poster: 'exchange-cockpit-v1.jpg',
      videoLabel: 'Scene 2.2: generated cockpit scene',
      videoCaption: 'Generated clip · The three characters together in the cockpit.',
    },
  ],
  coherence: [
    {
      title: 'Finding a consistent visual language',
      body: 'These Midjourney exploration grids show the search across black-and-white, restrained color, and highly saturated environments. The aim was to let different visual styles belong to the same film.',
      images: [
        photo('coherence-style-character', 'Generation grid exploring Parcival in black-and-white and subdued warm lighting', 'Character, monochrome, and restrained color'),
        photo('coherence-style-world', 'Generation grid exploring luminous green environments and monumental organic architecture', 'Environment and organic form'),
        photo('coherence-style-light', 'Generation grid exploring blue and gold light in geometric environments', 'Saturated light and geometric space'),
      ],
    },
    {
      title: 'From reference assets to the finished shot',
      body: 'The character, the Tuner headband, and the room were developed as separate references. The final black-and-white frame brings them together, keeping the person, prop, and setting recognizable within the chosen visual style.',
      images: [
        photo('coherence-parcival', 'Parcival character reference sheet showing his face, glasses, black clothing, and multiple views', '01 · Parcival character reference'),
        photo('coherence-tuner', 'Tuner headband reference showing its shape, materials, components, and how it is worn', '02 · Tuner prop reference'),
        photo('coherence-room', 'Room reference with notes, window diagrams, desk, and Tuner headband', '03 · Room and scene reference'),
        photo('coherence-final', 'Finished black-and-white shot of Parcival putting on the Tuner in the room', '04 · Final generated shot'),
      ],
    },
  ],
};

export default function ProductionEvidence({ projectId }) {
  const [selected, setSelected] = useState(null);
  const groups = examples[projectId];
  if (!groups) return null;
  const images = groups.flatMap(group => group.images);
  const current = selected === null ? null : images[selected];

  return (
    <section className={styles.evidence} aria-label="Production examples">
      <h4 className={styles.heading}>Inside the production</h4>
      <p className={styles.hint}>Select an image to view the reference in detail.</p>
      {groups.map(group => (
        <div className={styles.example} key={group.title}>
          <h5 className={styles.title}>{group.title}</h5>
          <p className={styles.body}>{group.body}</p>
          <div className={styles.grid}>
            {group.images.map(item => (
              <figure key={item.src}>
                <button type="button" className={styles.imageButton}
                  aria-label={`Enlarge: ${item.caption}`}
                  onClick={() => setSelected(images.indexOf(item))}>
                  <img src={item.src} alt={item.alt} loading="lazy" width="1600" height="1067" />
                </button>
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
          {group.video && (
            <figure className={styles.clip}>
              <video src={`${base}${group.video}`} poster={`${base}${group.poster}`}
                controls playsInline preload="none" aria-label={group.videoLabel} />
              <figcaption>{group.videoCaption}</figcaption>
            </figure>
          )}
        </div>
      ))}
      <p className={styles.invitation}>These examples show part of the process. Get in touch to discuss the workflow or how it could apply to your production.</p>
      <CopyEmail className={styles.contact}>Copy email to get in touch</CopyEmail>
      {current && <Lightbox src={current.src} alt={current.alt} label={current.caption}
        onClose={() => setSelected(null)}
        onPrev={() => setSelected(index => (index - 1 + images.length) % images.length)}
        onNext={() => setSelected(index => (index + 1) % images.length)} />}
    </section>
  );
}
