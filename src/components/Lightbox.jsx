import { useEffect, useRef } from 'react';
import styles from './Lightbox.module.css';

export default function Lightbox({ src, alt, onClose, isVideo, keepMuted, onPrev, onNext, label, lightboxBg }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Unmute video after it starts playing (user interaction has occurred via click)
    if (isVideo && videoRef.current && !keepMuted) {
      videoRef.current.muted = false;
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, isVideo, onPrev, onNext]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close">
        ×
      </button>

      {onPrev && (
        <button
          className={`${styles.navButton} ${styles.navPrev}`}
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      {isVideo ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted={keepMuted}
          playsInline
          controls={!keepMuted}
          className={styles.image}
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${styles.image} ${lightboxBg ? styles.imageLightBg : ''}`}
          onClick={(e) => e.stopPropagation()}
        />
      )}

      {onNext && (
        <button
          className={`${styles.navButton} ${styles.navNext}`}
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next image"
        >
          ›
        </button>
      )}

      {label && (
        <span className={styles.label} onClick={(e) => e.stopPropagation()}>{label}</span>
      )}
    </div>
  );
}
