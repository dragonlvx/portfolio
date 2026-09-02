import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import useIsMobile from '../hooks/useIsMobile';

const EMAIL = 'a.dasilva@project89.org';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const isUXSection =
    location.pathname === '/ux' || location.pathname.startsWith('/work/');

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL).then(() => {
      setShowCopied(true);
      if (isMobile) {
        setTimeout(() => {
          setShowCopied(false);
          setMobileMenuOpen(false);
        }, 1500);
      } else {
        setTimeout(() => setShowCopied(false), 2000);
      }
    });
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link
            to="/"
            className={styles.logo}
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="/images/Andrew-logo.png"
              alt=""
              className={styles.logoIcon}
            />
            Andrew da Silva
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineRotateDown : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineHidden : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineRotateUp : ''}`} />
          </button>

          <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
            <Link
              to="/ux"
              className={`${styles.navLink} ${isUXSection ? styles.navLinkActive : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              UX
            </Link>
            <Link
              to="/film"
              className={`${styles.navLink} ${location.pathname === '/film' ? styles.navLinkActive : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Film
            </Link>
            <Link
              to="/about"
              className={`${styles.navLink} ${location.pathname === '/about' ? styles.navLinkActive : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/extras"
              className={`${styles.navLink} ${location.pathname === '/extras' ? styles.navLinkActive : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Extras
            </Link>
            <button
              className={styles.emailCta}
              onClick={handleEmailClick}
            >
              {EMAIL}
              {showCopied && <span className={styles.copiedToast}>Copied to clipboard!</span>}
            </button>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerName}>
            <img
              src="/images/Andrew-logo.png"
              alt=""
              className={styles.footerLogoIcon}
            />
            <span>Andrew da Silva</span>
          </p>
          <div className={styles.footerLinks}>
            <a href="mailto:a.dasilva@project89.org" className={styles.footerLink}>Email</a>
            <span className={styles.footerDivider}>·</span>
            <a href="https://www.linkedin.com/in/andrew-dasilva-lvx/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
          </div>
          <p className={styles.copyright}>© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
