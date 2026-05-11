import React, { useState } from 'react';
import '../styles/landingpage.css';

const navLinks = ['Our programs', 'Career fields', 'Destinations', 'Alumni stories', 'Learn More'];
const partnerLogos = ['BBC', 'Bloomberg', 'CNN', 'Entrepreneur', 'FT', 'Forbes', 'TIME', 'WSJ'];
const storyCards = [
  { label: 'Meet the intern', title: 'Karanpreet', detail: 'Un vistazo a la experiencia internacional en acción.' },
  { label: 'Career update', title: 'Adeola', detail: 'Historias reales de avance profesional desde Londres.' },
  { label: 'Global team', title: 'Agostina', detail: 'Conexiones internacionales y oportunidades reales.' },
  { label: 'Marketing testimonial', title: 'Alayne', detail: 'Una pasantía con impacto en la industria creativa.' }
];
const stats = [
  { value: '+2,000', label: 'participantes talentosos desarrollan su potencial a través de nuestros programas cada año' },
  { value: '+120', label: 'universidades asociadas de 6 continentes diferentes' },
  { value: '+150', label: 'nacionalidades representadas por nuestro diverso grupo de participantes' },
  { value: '+3,000', label: 'empresas asociadas en búsqueda de pasantes' }
];
const partnerUniversities = ['Penn', 'Sydney', 'Northwestern', 'LSE', 'Tecnológico de Monterrey', 'Cornell', 'NUS', 'Carleton', 'University of York', 'Western Sydney', 'University of Melbourne', 'Monash'];
const testimonials = [
  { name: 'Adelle Dechen Vincent', company: 'School of Visual Arts', location: 'Tokyo' },
  { name: 'Adeola Olatunji', company: 'University of London', location: 'Remote' },
  { name: 'Agostina Laborde', company: 'Universidad de Palermo', location: 'New York' },
  { name: 'Alayne Bohlander', company: 'Western Washington University', location: 'Melbourne' }
];

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    window.setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="landing-page">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand-row">
            <div className="brand-mark">The Intern Group</div>
            <nav className="main-nav">
              {navLinks.map((link) => (
                <a key={link} href="#" className="nav-link">{link}</a>
              ))}
            </nav>
          </div>
          <div className="header-actions">
            <button className="btn btn-tertiary">Idioma</button>
            <a href="#" className="btn btn-ghost">Login</a>
            <button className="btn btn-cta">Aplica ya</button>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-image-wrap">
            <div className="hero-image-mask">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                alt="Interns collaborating at a desk"
                className="hero-image"
              />
            </div>
          </div>
          <div className="hero-copy">
            <span className="hero-eyebrow">Internships abroad for ambitious students</span>
            <h1>Desarrolla tu potencial con una pasantía en el extranjero</h1>
            <p>Postúlate ahora para vivir una experiencia profesional internacional que impulse tu carrera, con conexiones globales, mentoría real y prácticas en empresas líderes.</p>
            <div className="hero-actions">
              <a href="#" className="btn btn-hero">Apply now</a>
              <a href="#" className="hero-link">Ver programas disponibles</a>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-strip">
        <div className="container partner-list">
          {partnerLogos.map((logo) => (
            <span key={logo} className="partner-logo">{logo}</span>
          ))}
        </div>
      </section>

      <section className="section career-section">
        <div className="container career-grid">
          <article className="career-card">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Young professionals collaborating in an office"
              className="career-image"
            />
          </article>
          <div className="career-copy">
            <h2>Elige entre más de 20 carreras profesionales</h2>
            <p>Destaca tu currículum con uno de nuestros programas de pasantías internacionales en una amplia gama de áreas laborales.</p>
            <a href="#" className="link-arrow">Ver todas las carreras disponibles →</a>
          </div>
        </div>
      </section>

      <section className="section destination-section">
        <div className="container destination-grid">
          <div className="destination-copy">
            <h2>Acelera tu carrera con experiencia global</h2>
            <p>Trabaja de forma remota o elige entre 9 emocionantes destinos para hacer pasantía internacional, con hasta 5 días en la oficina.</p>
            <p>Podrías hacer una pasantía en empresas líderes o startups innovadoras en Londres, Nueva York, Madrid, Tokio o en uno de nuestros otros increíbles destinos.</p>
            <a href="#" className="link-arrow">Ver todos los destinos disponibles →</a>
          </div>
          <div className="destination-panel">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="City view with interns exploring destination"
              className="destination-image"
            />
          </div>
        </div>
        <div className="container feature-list">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <div>
              <h3>Aplica</h3>
              <p>Aplica y programa tu entrevista.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <div>
              <h3>Entrevista</h3>
              <p>Si tu entrevista es exitosa, confirma tu inscripción con un depósito de matrícula.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <div>
              <h3>Desarrolla tu potencial</h3>
              <p>Colabora en el proceso de selección de pasantía y acelera tu carrera.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section how-section">
        <div className="container how-grid">
          <div className="how-copy">
            <h2>Cómo funciona</h2>
            <p>Obtén experiencia profesional invaluable, amplía tu red de contactos y haz que tu currículum brille.</p>
            <button className="btn btn-hero">Apply now</button>
          </div>
          <div className="how-cards">
            <article className="how-card">
              <span className="how-step">1</span>
              <h3>Selecciona tu programa</h3>
              <p>Escoge el área profesional y el destino que mejor se adapta a tus metas.</p>
            </article>
            <article className="how-card">
              <span className="how-step">2</span>
              <h3>Entrevista personalizada</h3>
              <p>Recibe feedback y confirma tu cupo con un asesor experto.</p>
            </article>
            <article className="how-card">
              <span className="how-step">3</span>
              <h3>Inicia tu pasantía</h3>
              <p>Vive la experiencia global con mentorías, networking y formación práctica.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container stats-panel">
          <div className="stats-copy">
            <h2>En números</h2>
            <p>En The Intern Group, inspiramos y motivamos a las personas a descubrir su pasión y desarrollar su potencial.</p>
          </div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.value} className="stat-card">
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stories-section">
        <div className="container stories-top">
          <h2>¿Quieres ver qué están haciendo nuestros pasantes?</h2>
          <div className="stories-grid">
            {storyCards.map((story, index) => (
              <article key={story.title} className={`story-card story-index-${index}`}>
                <div className={`story-image story-image-${index}`} />
                <div className="story-text">
                  <span>{story.label}</span>
                  <h3>{story.title}</h3>
                  <p>{story.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="story-actions">
            <a href="#" className="social-btn instagram">Follow us on Instagram</a>
            <a href="#" className="social-btn tiktok">Follow us on TikTok</a>
          </div>
        </div>
      </section>

      <section className="section partners-section">
        <div className="container partners-layout">
          <div className="partners-copy">
            <h2>Socios de 120+ de las mejores universidades de 6 continentes</h2>
          </div>
          <div className="partners-grid">
            {partnerUniversities.map((uni) => (
              <span key={uni} className="university-chip">{uni}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container testimonial-inner">
          <h2>Únete a nuestra red global de +15,000 ex participantes</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <article key={testimonial.name} className="testimonial-card">
                <div className={`testimonial-image testimonial-image-${index}`} />
                <div className="testimonial-info">
                  <div className="testimonial-meta">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.company}</span>
                  </div>
                  <p>“Esta pasantía me ayudó a consolidar una experiencia profesional única y global.”</p>
                  <span className="testimonial-location">{testimonial.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section review-section">
        <div className="container review-inner">
          <div className="review-copy">
            <h2>+1,000 reseñas de cinco estrellas</h2>
            <p>Combinando valiosa experiencia laboral con viajes internacionales y comunidad, nuestros programas de pasantías te brindan la oportunidad de adquirir crecimiento profesional y personal.</p>
          </div>
          <div className="review-cards">
            <div className="review-card"><span>97.6%</span><p>Rating en GoAbroad</p></div>
            <div className="review-card"><span>★★★★★</span><p>GoAbroad</p></div>
            <div className="review-card"><span>★★★★★</span><p>Go Overseas</p></div>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta-panel">
          <h2>¿Listo para destacar con una pasantía en el extranjero?</h2>
          <button className="btn btn-hero">Apply now</button>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container newsletter-inner">
          <div>
            <h3>Subscribe via email</h3>
            <p>Subscribe to get insights sent directly to your inbox.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="name@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="newsletter-input"
              required
            />
            <button type="submit" className="btn btn-subscribe">Subscribe</button>
          </form>
          {subscribed && <p className="newsletter-success">¡Gracias por suscribirte!</p>}
        </div>
      </section>

      <footer className="footer-section">
        <div className="container footer-inner">
          <div className="footer-brand">The Intern Group</div>
          <div className="footer-columns">
            <div className="footer-column">
              <h4>CANDIDATES</h4>
              <a href="#">Internship programs</a>
              <a href="#">How it works</a>
              <a href="#">Destinations</a>
              <a href="#">Career fields</a>
              <a href="#">Program fees</a>
              <a href="#">Apply</a>
            </div>
            <div className="footer-column">
              <h4>MORE</h4>
              <a href="#">Companies</a>
              <a href="#">Universities</a>
              <a href="#">Academic credit</a>
              <a href="#">Learning Experience</a>
              <a href="#">About us</a>
              <a href="#">Health & safety</a>
              <a href="#">DE&I statement</a>
              <a href="#">Careers</a>
            </div>
            <div className="footer-column">
              <h4>CONTACT US</h4>
              <p>UK: +44 20 7193 4188</p>
              <p>US: +1 (718) 878-6393</p>
              <p>AUS: +61 2 8011 3305</p>
              <a href="mailto:info@theinterngroup.com">info@theinterngroup.com</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>©2023 The Intern Group. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Status Page</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
