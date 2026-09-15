import { useEffect, useRef, useState } from 'react';

const EMAIL = 'a.dasilva@project89.org';

export default function CopyEmail({ className = '', children = EMAIL }) {
  const [message, setMessage] = useState('');
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(EMAIL);
      setMessage('Email copied to clipboard');
      timer.current = setTimeout(() => setMessage(''), 3500);
    } catch {
      setMessage(`Could not copy automatically. Select and copy: ${EMAIL}`);
    }
  };

  return (
    <>
      <button type="button" className={`copy-email ${className}`} onClick={copy}
        aria-label={`Copy email address: ${EMAIL}`}>{children}</button>
      <span role="status" className={message ? 'email-feedback' : 'sr-only'}>{message}</span>
    </>
  );
}
