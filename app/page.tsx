const skills = [
  {
    category: 'Frontend',
    tags: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS']
  },
  {
    category: 'Backend',
    tags: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL']
  },
  {
    category: 'Tools & DevOps',
    tags: ['Git', 'Docker', 'CI/CD', 'Linux']
  },
  {
    category: 'Design',
    tags: ['Figma', 'Responsive Design', 'Accessibility']
  }
];

const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'This very site — a clean, dark-themed portfolio built with Next.js 15 and TypeScript, deployed on Replit.',
    tags: ['Next.js', 'TypeScript'],
    href: '#'
  },
  {
    title: 'Project Two',
    description:
      'A full-stack web application with real-time features, authentication, and a RESTful API backend.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    href: '#'
  },
  {
    title: 'Project Three',
    description:
      'An open-source tool that automates repetitive developer workflows, saving hours every week.',
    tags: ['TypeScript', 'CLI', 'Docker'],
    href: '#'
  }
];

export default function Home() {
  return (
    <>
      {/* ── Navigation ── */}
      <nav className="nav">
        <span className="nav-logo">rj.</span>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <p className="hero-eyebrow">Hi, my name is</p>
        <h1>Rujhanna Jib</h1>
        <p className="hero-title">Full-Stack Developer</p>
        <p className="hero-bio">
          I build thoughtful, performant web experiences — from clean UIs to
          robust back-end systems. Passionate about open source, good design,
          and learning in public.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about">
        <p className="section-label">About</p>
        <h2>A bit about me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m a full-stack developer who enjoys turning complex
              problems into simple, beautiful, and intuitive solutions. My
              focus is on writing clean, maintainable code and shipping
              products that make a real difference.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m usually exploring new
              technologies, contributing to open-source projects, or
              enjoying a good cup of coffee.
            </p>
          </div>
          <div className="about-facts">
            <div className="fact">
              <p className="fact-label">Location</p>
              <p className="fact-value">Available Remotely</p>
            </div>
            <div className="fact">
              <p className="fact-label">Experience</p>
              <p className="fact-value">Full-Stack Development</p>
            </div>
            <div className="fact">
              <p className="fact-label">Interests</p>
              <p className="fact-value">Web, Open Source, Design Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills">
        <p className="section-label">Skills</p>
        <h2>What I work with</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.category} className="skill-card">
              <h3>{s.category}</h3>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects">
        <p className="section-label">Projects</p>
        <h2>Things I&apos;ve built</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-footer">
                <div className="skill-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <a href={p.href} className="project-link">
                  View ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact">
        <p className="section-label">Contact</p>
        <h2>Let&apos;s connect</h2>
        <div className="contact-inner">
          <p>
            I&apos;m always open to new opportunities, collaborations, or
            just a friendly chat. Feel free to reach out through any of the
            channels below.
          </p>
          <div className="contact-links">
            <a href="mailto:hello@rujhannajib.dev" className="btn btn-primary">
              Email Me
            </a>
            <a
              href="https://github.com/rujhannajib"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <p>© {new Date().getFullYear()} Rujhanna Jib — Built with Next.js</p>
      </footer>
    </>
  );
}

