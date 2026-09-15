import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import useIsMobile from '../hooks/useIsMobile';
import styles from './Lightbox.module.css';

export default function Lightbox({ src, alt, onClose, isVideo, keepMuted, onPrev, onNext, label, lightboxBg }) {
  const dialogRef = useRef(null);
  const mobile = useIsMobile();

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <dialog ref={dialogRef} className={styles.overlay} aria-label={label || alt || 'Media viewer'}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      onKeyDown={(event) => {
        if (event.key === 'Tab') {
          const items = Array.from(dialogRef.current.querySelectorAll('button, video[controls]'));
          const first = items[0];
          const last = items[items.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }
        // Leave native video keys available for seeking and volume.
        if (event.target.tagName === 'VIDEO') return;
        if (event.key === 'ArrowLeft' && onPrev) { event.preventDefault(); onPrev(); }
        if (event.key === 'ArrowRight' && onNext) { event.preventDefault(); onNext(); }
      }}>
      <button type="button" autoFocus className={styles.closeButton} onClick={onClose} aria-label="Close media viewer">×</button>
      {onPrev && <button type="button" className={`${styles.navButton} ${styles.navPrev}`} onClick={onPrev} aria-label="Previous media">‹</button>}
      {isVideo ? (
        <video key={src} src={src} autoPlay loop muted={keepMuted} playsInline
          controls={mobile || !keepMuted} className={styles.image} aria-label={alt || label} />
      ) : (
        <img src={src} alt={alt || label || ''} className={`${styles.image} ${lightboxBg ? styles.imageLightBg : ''}`} />
      )}
      {onNext && <button type="button" className={`${styles.navButton} ${styles.navNext}`} onClick={onNext} aria-label="Next media">›</button>}
      {label && <span className={styles.label} aria-live="polite">{label}</span>}
    </dialog>, document.body
  );
}
