import { EVENT_DATA } from '../data/eventData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="ornament-divider ornament-divider--compact" aria-hidden="true">
          <span className="divider-line" />
          <span className="divider-dot" />
          <span className="divider-line" />
        </div>
        <p className="footer-title">{EVENT_DATA.shortTitle}</p>
        <p className="footer-meta">Sábado, 21 de novembro de 2026 • A partir das 11h30</p>
        <p className="footer-note">Convite de evento local • Franco da Rocha - SP</p>
      </div>
    </footer>
  );
}
