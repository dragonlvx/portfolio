import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

const EMAIL = 'a.dasilva@project89.org';

const projects = [
  { id: 'magick', title: 'Magick ML', path: '/work/magick' },
  { id: 'project89', title: 'Project 89', path: '/work/project89' },
  { id: 'rawmagic', title: 'Raw Magic', path: '/work/rawmagic' },
  { id: 'proxim8', title: 'Gamemaker Demo', path: '/work/proxim8' },
];

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isWorkPage = location.pathname.startsWith('/work/');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setWorkDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setWorkDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL).then(() => {
      setShowCopied(true);
      const isMobile = window.innerWidth <= 768;
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
            <div
              className={styles.workDropdown}
              ref={dropdownRef}
            >
              <button
                className={`${styles.navLink} ${styles.workButton} ${isHome || isWorkPage ? styles.navLinkActive : ''}`}
                onClick={() => setWorkDropdownOpen(!workDropdownOpen)}
                aria-expanded={workDropdownOpen}
              >
                Work
                <span className={`${styles.dropdownArrow} ${workDropdownOpen ? styles.dropdownArrowOpen : ''}`}>▾</span>
              </button>
              <div className={`${styles.dropdownMenu} ${workDropdownOpen ? styles.dropdownMenuOpen : ''}`}>
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    to={project.path}
                    className={`${styles.dropdownItem} ${location.pathname === project.path ? styles.dropdownItemActive : ''}`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setWorkDropdownOpen(false);
                    }}
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            </div>
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
