import heroImg from './assets/hero.png'
import portraitImg from './assets/sofiane-portrait.png'
import {
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiClock,
  FiCode,
  FiCodepen,
  FiMail,
  FiMessageCircle,
  FiSearch,
  FiSend,
  FiShield,
  FiTarget,
  FiUser,
  FiZap,
} from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import './App.css'

const contact = {
  whatsappNumber: '213541935019',
  email: 'sofianemekkibelhia@gmail.com',
}

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/BelhiaSofiane', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sofiane-belhia/', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com/sofiane_belhia', icon: 'x' },
  { label: 'Upwork', href: 'https://upwork.com/freelancers/~01caeff2c683f45193', icon: 'briefcase' },
]

const authoritySignals = [
  'Self-taught developer',
  'Focused on business results',
  'Clean, fast, responsive interfaces',
]

const mindset = [
  {
    value: 'Discipline',
    detail: 'Consistent execution, clear priorities, and steady progress.',
  },
  {
    value: 'Clarity',
    detail: 'Direct communication that keeps the build focused on outcomes.',
  },
  {
    value: 'Systems',
    detail: 'Structured decisions, reusable components, and practical workflows.',
  },
]

const services = [
  {
    title: 'Conversion Landing Pages',
    outcome: 'Turn cold traffic into calls, messages, and qualified leads.',
    icon: 'target',
  },
  {
    title: 'Personal Brand Portfolios',
    outcome: 'Position your work clearly so prospects understand why to trust you.',
    icon: 'user',
  },
  {
    title: 'WhatsApp-First Business Sites',
    outcome: 'Make it easy for visitors to ask questions and start buying conversations.',
    icon: 'message',
  },
  {
    title: 'React Frontend Systems',
    outcome: 'Ship fast interfaces that stay maintainable as the product grows.',
    icon: 'code',
  },
  {
    title: 'UI/UX Clarity Audits',
    outcome: 'Remove friction, sharpen messaging, and guide users toward action.',
    icon: 'scan',
  },
]

const projects = [
  {
    name: 'Seventeen by Diden',
    description:
      'A mobile-first online shop for a women fashion brand in Sidi Bel Abbes, built around WhatsApp orders.',
    problem:
      'Customers can browse products, choose delivery details, and send structured orders directly to WhatsApp while the seller updates products, categories, and pricing through Google Sheets.',
    stack: ['React', 'WhatsApp Orders', 'Google Sheets'],
    demo: 'https://seventeendz.netlify.app/',
  },
  {
    name: 'Baking Mad Hidden Lab',
    description:
      'A themed restaurant landing page for Baking Mad, a Breaking Bad-inspired burger spot in Lithuania.',
    problem:
      'Presents the menu, restaurant story, location, reviews, and booking path in a bold landing page designed to make visitors hungry and ready to visit.',
    stack: ['React', 'Landing Page', 'Restaurant UX'],
    demo: 'https://baking-mad.netlify.app/',
  },
  {
    name: 'Toji Coaching',
    description:
      'An online and on-site fitness coach website for Abdechafi Akram and his coaching programs.',
    problem:
      'Shows the coach positioning, program tiers, pricing, gym location, and direct contact details with fast GSAP animations and a sharp mobile-first layout.',
    stack: ['React', 'TailwindCSS', 'GSAP'],
    demo: 'https://toji-coaching.netlify.app/',
  },
  {
    name: 'Upwork Project Overview',
    description:
      'A proof-of-work page built for Upwork prospects to compare website packages and live demos.',
    problem:
      'Turns a service offer into a clear buying path with starter, standard, and advanced tiers backed by real mobile-first website examples.',
    stack: ['React', 'Mobile-first', 'Offer Design'],
    demo: 'https://project-template-demo.netlify.app/',
  },
]

const testimonials = [
  {
    name: 'Hachemi Amime',
    role: 'Team Lead and Backend Developer',
    href: 'https://dz.linkedin.com/in/amiinehachemi',
    quote:
      "I've known Sofiane both personally and professionally, and I can confidently say he has a natural talent for web development. His curiosity, dedication, and eye for detail make him a reliable developer to work with. I'm sure any team would benefit from having him on board.",
  },
  {
    name: 'Zakaria Belhaoua',
    role: 'UX/UI Designer',
    href: 'https://www.linkedin.com/in/zakaria-belhaoua/',
    quote:
      'Collaborating with Sofiane has been a great experience. He combines strong front-end skills with a real user-centered mindset, which makes working together smooth and productive. His openness to feedback and passion for creating intuitive solutions really stand out.',
  },
]

const workflow = [
  'Understand the business goal',
  'Map the conversion flow',
  'Design a clear interface',
  'Build a fast responsive UI',
  'Optimize for clicks, leads, and messages',
]

function getWhatsAppUrl(
  message = "Hi Sofiane, I'm interested in building a website that can help generate more clients.",
) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

function Icon({ name }) {
  const icons = {
    arrow: FiArrowRight,
    target: FiTarget,
    user: FiUser,
    message: FiMessageCircle,
    whatsapp: FaWhatsapp,
    code: FiCode,
    scan: FiSearch,
    github: FaGithub,
    linkedin: FaLinkedinIn,
    x: FaXTwitter,
    briefcase: FiBriefcase,
    mail: FiMail,
    brand: FiCodepen,
    clock: FiClock,
    zap: FiZap,
    shield: FiShield,
    check: FiCheck,
    send: FiSend,
  }
  const IconComponent = icons[name]

  return IconComponent ? <IconComponent className="icon" aria-hidden="true" focusable="false" /> : null
}

function ExternalLink({ href, children, className = '', ariaLabel }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

function App() {
  return (
    <main>
      <section className="hero section" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Sofiane Belhia home">
            <span className="brand-mark">
              <Icon name="brand" />
            </span>
            <span>Sofiane Belhia</span>
          </a>
          <div className="nav-links" aria-label="Section links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#testimonials">Proof</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href={getWhatsAppUrl()} aria-label="Start a WhatsApp chat">
            <Icon name="whatsapp" />
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Frontend developer in Algeria</p>
            <h1>I build fast, conversion-focused websites that turn visitors into clients.</h1>
            <p className="hero-text">
              Focused developer building real-world web solutions for people who need clarity,
              speed, and measurable action from their website.
            </p>

            <div className="cta-row">
              <a className="button primary" href={getWhatsAppUrl()}>
                Start a WhatsApp Chat
                <Icon name="arrow" />
              </a>
              <a className="button secondary" href="#work">
                See My Work
              </a>
            </div>

            <ul className="signal-list" aria-label="Professional signals">
              {authoritySignals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </div>

          <aside className="profile-panel" aria-label="Sofiane Belhia profile summary">
            <div className="portrait-shell">
              <img src={portraitImg} alt="Sofiane Belhia" />
            </div>
            <div className="profile-card">
              <p className="profile-kicker">Available for focused builds</p>
              <h2>Calm execution. Practical web systems.</h2>
              <p>
                React, JavaScript, modern UI, performance, and conversion flow thinking.
              </p>
            </div>
            <img className="system-mark" src={heroImg} alt="" aria-hidden="true" />
          </aside>
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-title">
        <div className="section-heading compact">
          <p className="eyebrow">Mindset</p>
          <h2 id="trust-title">Built for people who need progress, not noise.</h2>
        </div>
        <div className="mindset-grid">
          {mindset.map((item) => (
            <article className="mindset-card" key={item.value}>
              <span>{item.value}</span>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2 id="services-title">Every build is shaped around the result it needs to create.</h2>
          <p>
            The goal is not to decorate a page. The goal is to help the visitor understand,
            trust, and take the next step.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="card-icon">
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="work" aria-labelledby="projects-title">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-title">Real demos built around clear business actions.</h2>
          </div>
          <p>
            Each project is structured to help visitors understand the offer, take action, and move
            from browsing to contact or order.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div>
                <p className="project-label">Live project</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div className="problem-box">
                <span>Problem solved</span>
                <p>{project.problem}</p>
              </div>
              <ul className="stack-list" aria-label={`${project.name} tech stack`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section testimonials"
        id="testimonials"
        aria-labelledby="testimonials-title"
      >
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Testimonials</p>
            <h2 id="testimonials-title">People who worked with me noticed the same thing.</h2>
          </div>
          <p>
            Reliable execution, clear collaboration, and attention to the user experience behind
            the interface.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <blockquote>{testimonial.quote}</blockquote>
              <div className="testimonial-author">
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
                <ExternalLink
                  className="testimonial-link"
                  href={testimonial.href}
                  ariaLabel={`Open ${testimonial.name} on LinkedIn`}
                >
                  <Icon name="linkedin" />
                  LinkedIn
                </ExternalLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process" aria-labelledby="process-title">
        <div className="section-heading compact">
          <p className="eyebrow">How I work</p>
          <h2 id="process-title">A simple system for turning intent into action.</h2>
        </div>
        <ol className="process-list">
          {workflow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section final-cta" aria-labelledby="cta-title">
        <p className="eyebrow">Start the conversation</p>
        <h2 id="cta-title">Let's build something that brings you clients, not just views.</h2>
        <p>
          I take on a limited number of projects so each build gets proper focus, clean execution,
          and a clear path to launch.
        </p>
        <a className="button primary" href={getWhatsAppUrl()}>
          Start a WhatsApp Chat
          <Icon name="arrow" />
        </a>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-hero">
          <p className="eyebrow">Ready to start?</p>
          <h2 id="contact-title">
            One message away from a website that actually works for your business.
          </h2>
          <p className="contact-sub">
            No sales calls. No questionnaires. Just tell me what you need and I will
            reply with a clear plan, timeline, and price.
          </p>

          <div className="contact-promises">
            <div className="promise">
              <Icon name="zap" />
              <span>Reply within 2 hours</span>
            </div>
            <div className="promise">
              <Icon name="shield" />
              <span>No commitment required</span>
            </div>
            <div className="promise">
              <Icon name="clock" />
              <span>Free initial consultation</span>
            </div>
          </div>
        </div>

        <div className="contact-grid">
          <a className="wa-magnet" href={getWhatsAppUrl()}>
            <div className="wa-magnet-badge">Fastest way to reach me</div>
            <div className="wa-magnet-body">
              <div className="wa-magnet-icon">
                <Icon name="whatsapp" />
              </div>
              <h3>Start a WhatsApp conversation</h3>
              <p>
                Send a quick message about your project. I will respond with
                actionable next steps, not a generic reply.
              </p>
              <div className="wa-magnet-cta">
                Message now
                <Icon name="arrow" />
              </div>
            </div>
            <ul className="wa-checklist">
              <li><Icon name="check" /> Describe your project in 2 sentences</li>
              <li><Icon name="check" /> Get a clear response with pricing direction</li>
              <li><Icon name="check" /> No back-and-forth, just decisions</li>
            </ul>
          </a>

          <div className="contact-alt">
            <form
              className="inquiry-form"
              action={`mailto:${contact.email}`}
              method="post"
              encType="text/plain"
            >
              <div className="form-header">
                <Icon name="send" />
                <div>
                  <h3>Send a project brief</h3>
                  <p>Prefer email? Share a few details and I will get back to you.</p>
                </div>
              </div>
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  placeholder="What should I call you?"
                  autoComplete="name"
                  required
                />
              </label>
              <label>
                What do you need?
                <input
                  name="project"
                  type="text"
                  placeholder="Landing page, business site, UI redesign..."
                />
              </label>
              <label>
                Tell me more
                <textarea
                  name="message"
                  rows="3"
                  placeholder="What should the website do for your business? Any deadlines?"
                />
              </label>
              <button className="button secondary" type="submit">
                Send project brief
                <Icon name="arrow" />
              </button>
            </form>

            <a className="contact-card email-card" href={`mailto:${contact.email}`}>
              <Icon name="mail" />
              <span>
                <strong>{contact.email}</strong>
                Direct email if you prefer a quick note.
              </span>
            </a>

            <div className="social-row" aria-label="Professional profile links">
              {profileLinks.map((link) => (
                <ExternalLink
                  className="social-link"
                  href={link.href}
                  key={link.label}
                  ariaLabel={`Open Sofiane Belhia on ${link.label}`}
                >
                  <Icon name={link.icon} />
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
