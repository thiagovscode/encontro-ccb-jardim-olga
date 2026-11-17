import { EVENT_DATA } from '../data/eventData';
import { FinalBarDivider } from './CcbVisuals';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <FinalBarDivider />
        <p className="footer-title">{EVENT_DATA.shortTitle}</p>
        <p className="footer-meta">Sábado, 21 de novembro de 2026 • A partir das 11h30</p>
        <p className="footer-note">Convite de encontro da irmandade • {EVENT_DATA.venueName}</p>
      </div>
    </footer>
  );
}
