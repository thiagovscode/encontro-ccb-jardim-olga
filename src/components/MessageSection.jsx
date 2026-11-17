import { EVENT_DATA } from '../data/eventData';
import { ConcertCornerOrnament, StaffClefDivider } from './CcbVisuals';

export default function MessageSection() {
  return (
    <section id="mensagem" className="section section-message" aria-labelledby="message-heading">
      <div className="container">
        <div className="concert-message-card reveal">
          <ConcertCornerOrnament position="top-left" />
          <ConcertCornerOrnament position="top-right" />
          <ConcertCornerOrnament position="bottom-left" />
          <ConcertCornerOrnament position="bottom-right" />

          <div className="concert-message-inner">
            <p className="message-eyebrow">COMUNHÃO E GRATIDÃO</p>
            <h2 id="message-heading" className="concert-message-title">
              Uma Palavra aos Irmãos
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
      </div>
    </section>
  );
}
