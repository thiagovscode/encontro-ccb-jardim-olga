import { ArrowDown } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { StaffClefDivider } from './CcbVisuals';

export default function HeroSection({ onExploreClick }) {
  return (
    <header id="convite" className="hero">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-container">
        <div className="invitation-frame hero-animate">
          <div className="invitation-inner">
            <p className="eyebrow">Convite Especial</p>

            <h1 className="hero-title">{EVENT_DATA.title}</h1>

            <p className="hero-subtitle">"{EVENT_DATA.subtitle}"</p>

            <StaffClefDivider />

            {/* Local removido daqui: permanece exclusivamente na seção do mapa */}
            <div className="hero-details">
              <p className="hero-date">{EVENT_DATA.dateHighlight}</p>
              <p className="hero-time">{EVENT_DATA.timeFormatted}</p>
            </div>

            <a href="#contador" className="btn btn-primary hero-cta" onClick={onExploreClick}>
              <span>CONFIRA OS DETALHES DO ENCONTRO</span>
              <ArrowDown className="btn-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
