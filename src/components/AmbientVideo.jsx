import { useEffect, useRef, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

export default function AmbientVideo({ className, src, poster, label, decorative = false }) {
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const mobile = useMediaQuery('(max-width: 768px)');
  const shouldPlay = !reducedMotion && !(decorative && mobile);

  useEffect(() => {
    if (shouldPlay) video.current?.play().catch(() => {});
    else video.current?.pause();
  }, [shouldPlay]);

  return (
    <>
      <video ref={video} className={className} src={src} poster={poster}
        autoPlay={shouldPlay} muted loop playsInline preload={shouldPlay ? 'auto' : 'none'}
        aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
      {!decorative && (
        <button type="button" className="ambient-control"
          aria-label={`${playing ? 'Pause' : 'Play'} ${label.toLowerCase()}`}
          onClick={() => {
            if (video.current.paused) video.current.play().catch(() => {});
            else video.current.pause();
          }}>
          {playing ? 'Pause' : 'Play'} {label.toLowerCase()}
        </button>
      )}
    </>
  );
}
