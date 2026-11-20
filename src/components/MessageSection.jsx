import { EVENT_DATA } from '../data/eventData';
import { StaffClefDivider } from './CcbVisuals';

export default function MessageSection() {
  return (
    <section id="mensagem" className="section section-message" aria-labelledby="message-heading">
      <div className="container">
        <div className="message-card reveal">
          <p className="eyebrow">Comunhão e Gratidão</p>
          <h2 id="message-heading" className="section-title">
            Uma Palavra à Irmandade
          </h2>

          <StaffClefDivider />

          <div className="message-body">
            {EVENT_DATA.messageParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="scripture-box">
            <span className="scripture-quote-mark" aria-hidden="true">“</span>
            <p className="scripture-text">{EVENT_DATA.scripture.text}</p>
            <footer className="scripture-ref">{EVENT_DATA.scripture.reference}</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
