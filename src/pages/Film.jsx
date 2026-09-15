import { Fragment, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductionEvidence from '../components/ProductionEvidence';
import CopyEmail from '../components/CopyEmail';
import AmbientVideo from '../components/AmbientVideo';
import styles from './Film.module.css';
import Lightbox from '../components/Lightbox';
import useIsMobile from '../hooks/useIsMobile';


// What someone can hire me to make, and how; formats and capabilities rather
// than tools, which are listed per project below.
const capabilities = [
  'Directing & Editing',
  'Narrative & Promo Work',
  'AI Generative Pipelines',
  'Consulting & Training',
];

// The Exchange leads: it is the only paid contract work, and its stat stays
// visible while collapsed so it reads as the standout without extra size.
const projects = [
  {
    id: 'the-exchange',
    year: '2026',
    title: 'The Exchange',
    client: 'Space Supply Cocoa Beach',
    role: 'AI Film Consultant · Asset & Video Generation',
    summary:
      'Hired to consult on AI film production as well as generate assets and final shots. I built the generation workflow, taught it to the client, and produced 33 of the 43 final shots in the trailer.',
    tools: ['Photoshop', 'ChatGPT', 'Midjourney', 'Runway', 'Luma Labs', 'Veo', 'Seedance'],
    video: '/images/film/the-exchange-720.mp4',
    poster: '/images/film/the-exchange-titlecard.jpg',
    gradient: 'linear-gradient(135deg, #1a2332 0%, #24384a 50%, #0f3460 100%)',
    caseStudy: [
      {
        heading: 'What I did',
        body: "I was brought on as an AI film consultant and asset generator. I designed the generation pipeline the production ran on, then trained the client's two-person team, the writer and the director-editor, to work it themselves. Alongside that I generated reference sheets, still frames, and video clips, and delivered 33 of the 43 shots that made the final cut. The writer produced the remaining ten under my direction.",
      },
      {
        heading: "Building consistency before generation",
        body: "I established character and environment references first, then composed still frames against them before moving into video generation. This gave the team a consistent foundation for faces, wardrobe, locations, and lighting across the trailer.",
      },
      {
        heading: "Leaving the team ready to continue",
        body: "Alongside delivering 33 of the trailer’s 43 final shots, I trained the writer and director-editor to use the workflow themselves. The writer produced the remaining ten shots under my direction, leaving the team with a process they could continue using after the engagement.",
      },
    ],
  },
  {
    id: 'coherence',
    year: '2026',
    title: 'COHERENCE',
    client: 'Imaginal Media',
    role: 'Director · AI Generation',
    summary:
      "Imaginal Media's submission to the XPRIZE Future Visions contest. Concept, art direction, generation, edit, and sound. Produced end to end on my own in three weeks.",
    tools: ['Photoshop', 'ChatGPT', 'Midjourney', 'Runway', 'Luma Labs', 'Veo', 'Seedance', 'Suno', 'Premiere Pro'],
    video: '/images/film/coherence-720.mp4',
    poster: '/images/film/coherence-titlecard.jpg',
    gradient: 'linear-gradient(135deg, #2d1b4e 0%, #1e3a5f 50%, #134e5e 100%)',
    caseStudy: [
      {
        heading: "What I did",
        body: "I produced COHERENCE end to end in three weeks, from story concept and art direction through generation, editing, music, and sound design. I would normally allow myself around six weeks for that scope. Delivering it alongside The Exchange meant extra hours, rapid experimentation, and adapting my workflows to speed up stages wherever I could. Both projects were delivered on time.",
      },
      {
        heading: "How it came together",
        body: "The film moves between a restrained black-and-white world and saturated, geometric environments. The challenge was to make those different visual styles feel like parts of the same story. Character, prop, and location references provided continuity while I explored lighting, color, and form.",
      },
      {
        heading: "What the deadline taught me",
        body: "The compressed schedule pushed me to adapt quickly and look for faster ways through the production. It also made the value of a small, coordinated team clearer: I could deliver the full project alone, but sharing responsibility across production stages would make that pace more sustainable.",
      },
    ],
  },
  {
    id: 'project89-trailer',
    year: '2026',
    title: 'Project 89 Trailer',
    client: 'Project 89',
    role: 'Director · AI Generation',
    summary:
      "A thriller trailer translating the opening of Project 89’s text adventure into film. I directed and produced it end to end, incorporating established lore, hidden references, and working activation codes that connect the trailer to the game.",
    link: { prefix: 'Playable at', label: 'project89.org', href: 'https://www.project89.org' },
    tools: ['Photoshop', 'ChatGPT', 'Veo', 'Suno', 'ElevenLabs', 'Premiere Pro'],
    video: '/images/film/project89-trailer-720.mp4',
    poster: '/images/film/project89-trailer-titlecard.jpg',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    caseStudy: [
      {
        heading: 'What I did',
        body: 'A thriller trailer introducing the Project 89 mystery to new audiences and visualising the opening of the text adventure game it promotes. I directed and produced it end to end. Woven through it are references to the wider Project 89 universe; custom posters on walls, easter eggs, and working activation codes for the game itself.',
      },
      {
        heading: "How it came together",
        body: "ChatGPT and Photoshop built the still frames, Google Veo drove the video generation, Suno scored it, and ElevenLabs handled sound design. Preserving the world’s symbols, visual identity, and narrative details required repeated generation passes and manual cleanup.",
      },
      {
        heading: "Connecting the trailer to the game",
        body: "The most interesting part was making the trailer function as another entry point into the story. Posters, background details, and working activation codes gave viewers connections to discover beyond the main sequence.",
      },
    ],
  },
  {
    id: 'ghost-neuralnet',
    year: '2025',
    title: 'Ghost in the NeuralNet',
    client: 'Project 89',
    role: 'Director · AI Generation',
    summary:
      "A music video for SIM SIREN, Project 89’s AI popstar, produced in about a week. I generated the footage and manually edited it to the track, shaping the rhythm, shot variety, and singing sequences.",
    tools: ['Photoshop', 'ChatGPT', 'Midjourney', 'Veo', 'Suno', 'Premiere Pro'],
    video: '/images/project89/showcase-ghost-neuralnet.mp4',
    poster: '/images/project89/showcase-ghost-neuralnet-poster.jpg',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    caseStudy: [
      {
        heading: 'What I did',
        body: 'A music video for SIM SIREN, our AI popstar creation, cut to an original AI generated track. I built it in about a week in 2025, generating a large volume of clips in Midjourney and Veo while pushing for character and art style consistency across a range of locations and outfits. Generating the footage was the quick part.',
      },
      {
        heading: "How it came together",
        body: "The edit was where the time went. I cut the strongest shots manually against the music to maximise visual flow and keep the shot variety moving. With the tools I was using at the time, the singing sections required manual synchronization. I selected and timed clips against the vocal track to make those moments feel connected to the performance.",
      },
      {
        heading: "Shaping the performance",
        body: "The edit was the most satisfying part: finding shots that worked together, shaping their rhythm, and making the performance feel connected to the music.",
      },
    ],
  },
  {
    id: 'timeline-wars',
    year: '2025',
    title: 'Timeline Wars',
    client: 'Project 89',
    role: 'Director · AI Generation',
    summary:
      "A commercial promo for Timeline Wars, combining cinematic imagery, animation, and footage of the game’s prototype interface within one Project 89 visual identity.",
    tools: ['Photoshop', 'ChatGPT', 'Midjourney', 'Nanobanana', 'Veo', 'Suno', 'ElevenLabs', 'Premiere Pro'],
    video: '/images/project89/P89-TimelineWars-commercial.mp4',
    poster: '/images/project89/P89-TimelineWars-commercial-poster.jpg',
    gradient: 'linear-gradient(135deg, #3d1f1f 0%, #5c2e2e 50%, #2d1a1a 100%)',
    caseStudy: [
      {
        heading: "What I did",
        body: "A commercial promo for Timeline Wars, an immersive AI powered game inside the Project 89 universe. The spot pulled in three different visual modes: cinematic imagery, animation, and real prototype UI captured from the game as it headed toward launch. All of it had to read as one consistent brand by the end.",
      },
      {
        heading: "How it came together",
        body: "Many shots began with carefully prepared start and end frames. I refined those images in Photoshop, generated the motion between them, and used editing to bring the different visual modes together.",
      },
      {
        heading: "One consistent identity",
        body: "Bringing character imagery, animation, and product screens into one consistent identity was the central challenge. That combination remains my favourite part of the piece.",
      },
    ],
  },
  {
    id: 'the-dragon',
    year: '2026',
    title: 'The Dragon: Ep. 1',
    client: 'Personal Project',
    role: 'Director · AI Generation',
    summary:
      "A one-minute superhero pilot created in a single day as an experiment in AI-assisted production, from concept to finished cut.",
    tools: ['ChatGPT', 'Seedance', 'Premiere Pro'],
    video: '/images/film/dragon-ep01-720.mp4',
    poster: '/images/film/dragon-ep01-titlecard.jpg',
    gradient: 'linear-gradient(135deg, #4a1e14 0%, #7a3218 50%, #2b1410 100%)',
    caseStudy: [
      {
        heading: 'What I did',
        body: 'A pilot for a superhero mini episode, built in a single working session. The premise puts a new custom hero against real world cryptids in an unfamiliar setting, with a few easter eggs pointing back at the Project 89 universe without depending on it. About a minute long, concept through finished cut, all in one day.',
      },
      {
        heading: "How it came together",
        body: "I tested how much of the workflow could be automated, using GPT image models and Seedance 2.0 across story development, storyboards, visuals, and shot flow, with manual editing at the end.",
      },
      {
        heading: "What the experiment showed",
        body: "The result helped me assess what the workflow could produce in one session and where further manual refinement would improve the finished piece.",
      },
    ],
  },
];

// Ordered list of everything the lightbox can page through. YouTube-only entries
// stay out until they have a local export.
const playable = projects.filter((p) => p.video);

function ToolChips({ tools }) {
  return (
    <div className={styles.tools}>
      {tools.map((tool) => (
        <span key={tool} className={styles.toolChip}>
          {tool}
        </span>
      ))}
    </div>
  );
}

// Poster at rest, muted preview on hover, click opens the lightbox.
// Nothing downloads until the pointer lands.
function HoverVideo({ project, className, onOpen }) {
  const videoRef = useRef(null);
  const [showPoster, setShowPoster] = useState(true);
  const isMobile = useIsMobile();

  // The `poster` attribute is dropped for good once the element decodes a frame,
  // so the titlecard is layered on top and faded instead.
  const play = () => {
    setShowPoster(false);
    videoRef.current?.play().catch(() => setShowPoster(true));
  };

  const stop = () => {
    const video = videoRef.current;
    setShowPoster(true);
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  if (isMobile) {
    return (
      <button type="button" className={`${className} ${styles.clickable}`} onClick={onOpen} aria-label={`Play ${project.title}`}>
        <img src={project.poster} alt={project.title} className={styles.embed} loading="lazy" />
        <span className={styles.playBadge} aria-hidden="true">▶</span>
      </button>
    );
  }

  return (
    <div
      className={`${className} ${styles.clickable}`}
      onMouseEnter={play}
      onMouseLeave={stop}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      aria-label={`Play ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <video
        ref={videoRef}
        className={styles.embed}
        src={project.video}
        poster={project.poster}
        muted
        loop
        playsInline
        preload="none"
      />
      <img
        src={project.poster}
        alt={project.title}
        className={`${styles.posterOverlay} ${showPoster ? '' : styles.posterHidden}`}
        loading="lazy"
      />
      <span
        className={`${styles.playBadge} ${showPoster ? '' : styles.playBadgeHidden}`}
        aria-hidden="true"
      >
        ▶
      </span>
    </div>
  );
}

function ProjectMedia({ project, className, onOpen }) {
  if (project.video) {
    return <HoverVideo project={project} className={className} onOpen={onOpen} />;
  }

  if (project.youtubeId) {
    return (
      <div className={className}>
        <iframe
          className={styles.embed}
          src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?rel=0`}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <div className={styles.mediaPlaceholder} style={{ background: project.gradient }}>
        <span className={styles.placeholderLabel}>{project.title}</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `case-${project.id}`;

  return (
    <article className={styles.project}>
      <ProjectMedia project={project} className={styles.projectMedia} onOpen={onOpen} />

      <div className={styles.projectInfo}>
        <div className={styles.metaRow}>
          <span className={styles.client}>{project.client}</span>
          <span className={styles.metaDivider}>·</span>
          <span className={styles.role}>{project.role}</span>
          <span className={styles.metaDivider}>·</span>
          <span className={styles.year}>{project.year}</span>
        </div>

        <h3 className={styles.projectTitle}>{project.title}</h3>

        <p className={styles.summary}>
          {project.summary}
          {project.link && (
            <>
              {' '}
              {project.link.prefix}{' '}
              <a
                className={styles.summaryLink}
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {project.link.label}
              </a>
            </>
          )}
        </p>

        <ToolChips tools={project.tools} />

        <button
          type="button"
          className={styles.expandButton}
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={panelId}
          aria-label={`${expanded ? "Close" : "Read"} ${project.title} case study`}
        >
          {expanded ? 'Close' : 'Read case study'}
          <span className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`} aria-hidden="true">
            ▾
          </span>
        </button>

        {/* 0fr → 1fr animates height without measuring the content */}
        <div className={`${styles.caseWrap} ${expanded ? styles.caseWrapOpen : ''}`} hidden={!expanded}>
          <div className={styles.caseInner}>
            <div id={panelId} className={styles.caseStudy}>
              {project.caseStudy.map((section, index) => (
                <Fragment key={section.heading}>
                <div className={styles.caseSection}>
                  <h4 className={styles.caseHeading}>{section.heading}</h4>
                  <p className={styles.caseBody}>{section.body}</p>
                </div>
                {expanded && index === 1 && <ProductionEvidence projectId={project.id} />}
                </Fragment>
              ))}
              {['the-exchange', 'coherence'].includes(project.id) && (
                <div className={styles.caseSection}>
                  <p className={styles.caseBody}>These examples show part of the process. Get in touch to discuss the workflow or how it could apply to your production.</p>
                  <CopyEmail className={styles.evidenceContact}>Copy email to get in touch</CopyEmail>
                </div>
              )}
              {project.id === 'project89-trailer' && (
                <p className={styles.caseBody}>
                  Explore the wider story world, production workflows, and community tutorials in the{' '}
                  <Link className={styles.summaryLink} to="/work/project89">Project 89 case study</Link>.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Film() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (project) => {
    const idx = playable.findIndex((p) => p.id === project.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const goNext = () => setLightboxIndex((i) => (i + 1) % playable.length);
  const goPrev = () => setLightboxIndex((i) => (i - 1 + playable.length) % playable.length);

  const current = lightboxIndex !== null ? playable[lightboxIndex] : null;

  return (
    <div className={styles.main}>
      <header className={styles.hero}>
        <AmbientVideo
          className={styles.heroVideo}
          src="/images/film/film-header-720.mp4"
          poster="/images/film/project89-trailer-titlecard.jpg"
          label="Showreel"
        />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Film &amp; Video</h1>
        </div>
      </header>

      <section className={styles.capabilities}>
        <div className={styles.capabilitiesInner}>
          {capabilities.map((item) => (
            <span key={item} className={styles.capabilityPill}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.approach}>
        <div className={styles.approachInner}>
          <h2 className={styles.approachHeading}>How I work</h2>

          <p className={styles.approachBody}>
            Film &amp; Video production is a craft I've perpetually been sharpening for its ability
            to quickly captivate audiences. From long-form film to short-form videos, I've had
            years of training with the medium.
          </p>

          <p className={styles.approachBody}>
            Generative tools now support nearly every stage of the pipeline; storyboards to
            post-production. They do not replace the craft, they collapse the distance between an
            idea and a finished shot. I have worked with AI since these tools first became
            publicly available in 2021, and my skills have improved every year since, because{' '}
            <em>this is the worst the tech will ever be</em>.
          </p>

          <p className={styles.approachBody}>
            What does not change is creative discernment and traditional experience. Taste,
            pacing, and a refined eye for detail are not things generative models supply. I am not
            a traditional filmmaker who's learned to add AI, and I am not an AI filmmaker who
            skipped the craft, I build and run pipelines that draw on both, and I teach teams to
            do the same.
          </p>
        </div>
      </section>

      <section className={styles.workSection}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>Selected work</span>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => openLightbox(project)}
              />
            ))}
          </div>

          <aside className={styles.closing}>
            <span className={styles.eyebrow}>Looking ahead</span>
            <p className={styles.closingBody}>
              Past the current frontier, I see the most interesting work ahead not as AI imitating
              traditional film, but as a new kind of native AI experience. Forms that will only be
              possible because this technology exists. From responsive and highly personalized
              content to immersive trans-media narratives, these are the spaces I am personally
              passionate about building toward.
            </p>
          </aside>
        </div>
      </section>

      <section className={styles.testimonial}>
        <div className={styles.testimonialInner}>
          <blockquote className={styles.quote}>
            &ldquo;Andrew's ability to help generate video imagery for me has been a game changer.
            Instead of being stuck with a mediocre representation of the shot or style I'm looking
            for, he's able to help me create the cinematically motivated shots, scenes and images
            that I need to tell my story in the emotional way I'm intending. He's got a magic bag
            of tricks to get it to do what he wants and it's shocking and amazing. He's able to
            create grounded realism and stylized artistry with a flare, quickly. The best part is
            he does it quickly and contributes his own sense of creativity that elevates the work.
            Narrative or marketing, Andrew can help bring the financially impossible stories I'm
            trying to create to life.&rdquo;
          </blockquote>
          <div className={styles.attribution}>
            <span className={styles.attrName}>Ben Tedesco</span>
            <span className={styles.attrRole}>Director</span>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <h2 className={styles.contactHeading}>Working on something?</h2>
          <p className={styles.contactBody}>
            I take on directing and editing work, AI generation for film, and consulting or
            training for teams building their own pipelines. Currently available for new
            projects, from single shots to full productions. Working remotely with teams
            anywhere.
          </p>
          <CopyEmail className={styles.contactButton} />
        </div>
      </section>

      {current && (
        <Lightbox
          src={current.video}
          alt={current.title}
          label={current.title}
          isVideo
          onClose={() => setLightboxIndex(null)}
          onPrev={playable.length > 1 ? goPrev : undefined}
          onNext={playable.length > 1 ? goNext : undefined}
        />
      )}
    </div>
  );
}
