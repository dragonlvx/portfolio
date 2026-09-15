import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import CopyEmail from './CopyEmail';
import useIsMobile from '../hooks/useIsMobile';


export default function Layout({ children }) {
  const [menuPath, setMenuPath] = useState(null);
  const menuButton = useRef(null);
  const location = useLocation();
  const mobileMenuOpen = menuPath === location.key;
  const setMobileMenuOpen = useCallback((open) => setMenuPath(open ? location.key : null), [location.key]);
  const isMobile = useIsMobile();
  const pathname = location.pathname.replace(/\/$/, '') || '/';
  const isUXSection =
    pathname === '/ux' || pathname.startsWith('/work/');

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const escape = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [mobileMenuOpen, setMobileMenuOpen]);

  return (
    <div className={styles.container}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav className={styles.nav} aria-label="Main navigation">
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
            ref={menuButton}
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="main-navigation"
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineRotateDown : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineHidden : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineRotateUp : ''}`} />
          </button>

          <div id="main-navigation" inert={isMobile && !mobileMenuOpen} className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
            <Link
              to="/ux"
              aria-current={isUXSection ? "page" : undefined}
              className={`${styles.navLink} ${isUXSection ? styles.navLinkActive : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              UX
            </Link>
            <Link
              to="/film"
              aria-current={pathname === '/film' ? "page" : undefined}
              className={`${styles.navLink} ${pathname === '/film' ? styles.navLinkActive : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Film
            </Link>
            <Link
              to="/about"
              aria-current={pathname === '/about' ? "page" : undefined}
              className={`${styles.navLink} ${pathname === '/about' ? styles.navLinkActive : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/extras"
              aria-current={pathname === '/extras' ? "page" : undefined}
              className={`${styles.navLink} ${pathname === '/extras' ? styles.navLinkActive : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Extras
            </Link>
            <CopyEmail className={styles.emailCta} />
          </div>
        </div>
      </nav>

      <main id="main-content" tabIndex={-1} className={styles.main}>
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
            <CopyEmail className={styles.footerLink}>Copy email</CopyEmail>
            <span className={styles.footerDivider}>·</span>
            <a href="https://www.linkedin.com/in/andrew-dasilva-lvx/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
          </div>
          <p className={styles.copyright}>© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
