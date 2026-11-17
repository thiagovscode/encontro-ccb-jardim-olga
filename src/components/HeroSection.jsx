import { ArrowDown } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { ClefWatermark, StaffClefDivider } from './CcbVisuals';

export default function HeroSection({ onExploreClick }) {
  return (
    <header id="convite" className="hero">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-music-staves-watermark" aria-hidden="true" />

      <div className="container hero-container">
        <div className="invitation-frame hero-animate">
          {/* Marcas d'água das claves clássicas nos cantos da moldura */}
          <div className="frame-corner frame-corner--tl" aria-hidden="true">
            <ClefWatermark type="treble" />
          </div>
          <div className="frame-corner frame-corner--tr" aria-hidden="true">
            <ClefWatermark type="bass" />
          </div>
          <div className="frame-corner frame-corner--bl" aria-hidden="true">
            <ClefWatermark type="alto" />
          </div>
          <div className="frame-corner frame-corner--br" aria-hidden="true">
            <ClefWatermark type="treble" />
          </div>

          <div className="invitation-inner">
            <div className="hero-header-badge">
              <span className="badge-line" />
              <p className="eyebrow">Convite Especial</p>
              <span className="badge-line" />
            </div>

            <h1 className="hero-title">{EVENT_DATA.title}</h1>

            <p className="hero-subtitle">"{EVENT_DATA.subtitle}"</p>

            <StaffClefDivider />

            <div className="hero-details">
              <p className="hero-date">{EVENT_DATA.dateHighlight}</p>
              <p className="hero-time">{EVENT_DATA.timeFormatted}</p>
              <p className="hero-venue">{EVENT_DATA.venueName}</p>
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
