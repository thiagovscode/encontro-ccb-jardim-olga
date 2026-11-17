import { ArrowDown, Calendar, Clock } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export default function HeroSection({ onExploreClick }) {
  return (
    <header id="convite" className="hero">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-container">
        <div className="official-invite-card hero-animate">
          {/* Ornato de Filigrana Dourada no Topo */}
          <div className="invite-top-filigree" aria-hidden="true">
            <svg viewBox="0 0 160 32" fill="none" className="filigree-svg">
              <path d="M 80 6 C 68 6 58 14 46 14 C 36 14 30 8 20 8 C 12 8 4 14 2 16 C 12 18 20 22 28 22 C 40 22 48 16 58 16 C 68 16 74 24 80 24 C 86 24 92 16 102 16 C 112 16 120 22 132 22 C 140 22 148 18 158 16 C 156 14 148 8 140 8 C 130 8 124 14 114 14 C 102 14 92 6 80 6 Z" stroke="#C8AD7F" strokeWidth="1.2" fill="none" />
              <circle cx="80" cy="15" r="3" fill="#C8AD7F" />
              <circle cx="58" cy="16" r="2" fill="#C8AD7F" />
              <circle cx="102" cy="16" r="2" fill="#C8AD7F" />
            </svg>
          </div>

          <div className="invite-eyebrow-rule">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">CONVITE ESPECIAL</span>
            <span className="eyebrow-line" />
          </div>

          {/* Título Principal */}
          <h1 className="invite-main-title">ENCONTRO CCB</h1>

          {/* Faixa / Faixa Verde-Oliva com Dourado "JARDIM OLGA" */}
          <div className="invite-ribbon-wrap">
            <span className="ribbon-flourish" aria-hidden="true">❧</span>
            <div className="invite-ribbon">
              <span>JARDIM OLGA</span>
            </div>
            <span className="ribbon-flourish" aria-hidden="true">☙</span>
          </div>

          <p className="invite-subtitle">"{EVENT_DATA.subtitle}"</p>

          {/* Caixa de Data em Destaque Nobre */}
          <div className="invite-date-box">
            <Calendar className="invite-box-icon" aria-hidden="true" />
            <span className="invite-date-text">{EVENT_DATA.dateHighlight.toUpperCase()}</span>
          </div>

          {/* Linha de Horário */}
          <div className="invite-time-line">
            <span className="time-line-rule" />
            <Clock className="time-icon" aria-hidden="true" />
            <span className="time-text">{EVENT_DATA.timeFormatted}</span>
            <span className="time-line-rule" />
          </div>

          {/* Botão de Ação */}
          <div className="invite-cta-wrap">
            <a href="#contador" className="btn btn-primary invite-cta" onClick={onExploreClick}>
              <span>CONFIRA OS DETALHES DO ENCONTRO</span>
              <ArrowDown className="btn-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
