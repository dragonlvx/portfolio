import styles from './About.module.css';

export default function About() {
  return (
    <main className={styles.aboutMain}>
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
            <h2 className={styles.aboutHeading}>Hey, I'm Andrew.</h2>
            <p className={styles.aboutText}>
              I'm a UX & Product Designer who's been working at the intersection of AI, design, and creative technology since before ChatGPT existed. I started in the AI space in 2022 as a contractor at AI Dungeon, and I haven't looked back.
            </p>
          </section>

          <section className={styles.aboutSection}>
            <h2 className={styles.aboutHeading}>What I Bring</h2>
            <div className={styles.highlightGrid}>
              {[
                { icon: '◈', label: 'AI Startups', detail: 'Co-founded 2 AI startups. Led product design, built design systems from scratch.' },
                { icon: '◈', label: 'AI Fluency Since 2022', detail: 'Daily generative AI usage since before ChatGPT — in production, not just experiments.' },
                { icon: '◈', label: 'AI-Native UX', detail: 'Designing interfaces for complex AI systems with a deep understanding of the technology.' },
                { icon: '◈', label: 'Design Craft & Tools', detail: 'Illustrator, Photoshop, Premiere Pro, Figma, Google Workspace. Strong typographic and layout foundations.' },
                { icon: '◈', label: 'User-Centered Design', detail: 'Mapping flows, reducing cognitive load, making complex systems feel approachable.' },
                { icon: '◈', label: 'Cross-Functional Leadership', detail: 'Partnering with engineering, product, and stakeholders. Leading designers and collaborating with founders.' },
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
              I'm detail-obsessed but pragmatic. I care about typography, spacing, and polish, but I also care about shipping. I bring patience and empathy to cross-functional collaboration, and I thrive in fast-paced environments where I can wear multiple hats; design, strategy, prototyping, and production.
            </p>
          </section>

          <section className={styles.aboutSection}>
            <h2 className={styles.aboutHeading}>What I'm Looking For</h2>
            <p className={styles.aboutText}>
              I'm drawn to creative technology; especially roles at the intersection of UX, AI, games, or entertainment media. But ultimately, I'm open to any work that feels meaningful and lets me bring genuine creativity to the table.
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:a.dasilva@project89.org" className={styles.contactLink}>
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/andrew-dasilva-lvx/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
