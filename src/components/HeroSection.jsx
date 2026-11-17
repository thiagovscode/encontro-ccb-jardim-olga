import { ArrowDown } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

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

            <div className="ornament-divider" aria-hidden="true">
              <span className="divider-line" />
              <svg className="olive-mark" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 5C12.5 9.5 10.5 14 10.5 18.5C10.5 22.5 12.9 25.5 16 27C19.1 25.5 21.5 22.5 21.5 18.5C21.5 14 19.5 9.5 16 5Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M16 9.5V27" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path
                  d="M16 15.5L12.5 12.5M16 20L19.5 17"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
              <span className="divider-line" />
            </div>

            <div className="hero-details">
              <p className="hero-date">{EVENT_DATA.dateHighlight}</p>
              <p className="hero-meta">{EVENT_DATA.timeFormatted}</p>
              <p className="hero-venue">{EVENT_DATA.venueName} • Franco da Rocha - SP</p>
            </div>

            <a
              href="#contador"
              className="btn btn-primary hero-cta"
              onClick={onExploreClick}
            >
              <span>CONFIRA OS DETALHES DO ENCONTRO</span>
              <ArrowDown className="btn-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
