import CopyEmail from '../components/CopyEmail';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutMain}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImageContainer}>
          <img
            src="/images/Andrew-headshot.jpg"
            alt="Andrew da Silva"
            className={styles.aboutImage}
          />
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.aboutSection}>
            <h1 className={styles.aboutHeading}>Hey, I'm Andrew.</h1>
            <p className={styles.aboutText}>
              I'm a creative technologist based in Nelson, British Columbia. I direct and edit film and video, design AI-native products, and help teams build practical generative AI workflows. Across 14+ years in design, my work has connected visual craft, technology, and storytelling.
            </p>
            <p className={styles.aboutText}>
              My work in AI includes contracting at Latitude on AI Dungeon, co-founding Magick ML as Chief Design Officer, and co-founding Imaginal Media as Design Director. At Magick ML, I led product design for a visual AI development platform. Through Imaginal Media and my film work, I bring that same attention to structure and detail to stories on screen.
            </p>
            <p className={styles.aboutText}>
              My B.A. in Psychology from Trent University informs how I approach both disciplines: understanding what people notice, how they make decisions, and what makes an experience feel intuitive or a story resonate.
            </p>
          </section>

          <section className={styles.aboutSection}>
            <h2 className={styles.aboutHeading}>What I Bring</h2>
            <div className={styles.highlightGrid}>
              {[
                { icon: '◈', label: 'Film & Video', detail: 'Direction, editing, and visual storytelling across trailers, music videos, promos, and short-form narrative.' },
                { icon: '◈', label: 'UX & Product Design', detail: 'User flows, onboarding, interfaces, and design systems that make complex AI tools approachable.' },
                { icon: '◈', label: 'AI Production Pipelines', detail: 'Workflows that connect reference assets, image and video generation, and post-production while keeping a consistent visual identity.' },
                { icon: '◈', label: 'Consulting & Training', detail: 'Hands-on guidance that helps teams understand the tools, run their own workflows, and keep producing independently.' },
                { icon: '◈', label: 'Visual Craft', detail: 'A foundation in typography, layout, branding, and art direction, carried through from product interfaces to finished films.' },
                { icon: '◈', label: 'Creative Leadership', detail: 'Experience co-founding AI startups, leading designers, and collaborating with founders, engineers, and production teams.' },
              ].map((item, i) => (
                <div key={i} className={styles.highlightCard}>
                  <span className={styles.highlightIcon}>{item.icon}</span>
                  <div>
                    <span className={styles.highlightLabel}>{item.label}</span>
                    <span className={styles.highlightDetail}>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.aboutSection}>
            <h2 className={styles.aboutHeading}>How I Work</h2>
            <p className={styles.aboutText}>
              I start with the experience we're trying to create, then work backward to the design decisions and production steps it needs. I move between strategy and hands-on making, test ideas early, and refine the details that affect the final result. Whether I'm designing an interface or editing a sequence, clarity, pacing, and consistency matter. When I build a workflow for a team, I make sure they can use it themselves.
            </p>
          </section>

          <section className={styles.aboutSection}>
            <h2 className={styles.aboutHeading}>What I'm Looking For</h2>
            <p className={styles.aboutText}>
              I'm currently focused on film and video projects, along with AI production consulting and training. I'm also open to UX and product design roles. I'm especially drawn to work that connects design, AI, games, and entertainment. Based in Nelson, I collaborate remotely with teams anywhere. If you have a project, a role, or a question about how we might work together, get in touch.
            </p>
            <div className={styles.contactLinks}>
              <CopyEmail className={styles.contactLink}>Copy email</CopyEmail>
              <a href="https://www.linkedin.com/in/andrew-dasilva-lvx/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
