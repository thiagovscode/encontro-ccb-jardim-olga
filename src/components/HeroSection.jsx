import { MapPin, Share2 } from 'lucide-react';
import masterInvitationImg from '../assets/ccb-convite-oficial.jpg';
import CalendarMenu from './CalendarMenu';

export default function HeroSection({ countdown }) {
  const { phase, days, hours, minutes, seconds, statusText } = countdown || {};

  return (
    <header id="convite" className="hero-master">
      <div className="hero-ambient-bg" aria-hidden="true" />

      <div className="container hero-master-container">
        {/* Cartão Oficial do Convite com Contagem Regressiva em Tempo Real */}
        <div className="master-card-container">
          <div className="master-card-frame">
            <img
              src={masterInvitationImg}
              alt="Convite Oficial — Encontro CCB Jardim Olga"
              className="master-card-image"
              loading="eager"
            />

            {/* Overlay da Contagem Regressiva Dinâmica perfeitamente alinhado com a arte */}
            <div id="contador" className="master-card-countdown-overlay" aria-live="polite">
              {phase === 'upcoming' ? (
                <div className="master-countdown-grid">
                  {/* DIAS */}
                  <div className="master-countdown-col">
                    <span className="master-countdown-num">{String(days).padStart(2, '0')}</span>
                    <span className="master-countdown-tag">DIAS</span>
                  </div>

                  <div className="master-countdown-sep" aria-hidden="true" />

                  {/* HORAS */}
                  <div className="master-countdown-col">
                    <span className="master-countdown-num">{String(hours).padStart(2, '0')}</span>
                    <span className="master-countdown-tag">HORAS</span>
                  </div>

                  <div className="master-countdown-sep" aria-hidden="true" />

                  {/* MINUTOS */}
                  <div className="master-countdown-col">
                    <span className="master-countdown-num">{String(minutes).padStart(2, '0')}</span>
                    <span className="master-countdown-tag">MINUTOS</span>
                  </div>

                  <div className="master-countdown-sep" aria-hidden="true" />

                  {/* SEGUNDOS */}
                  <div className="master-countdown-col">
                    <span className="master-countdown-num">{String(seconds).padStart(2, '0')}</span>
                    <span className="master-countdown-tag">SEGUNDOS</span>
                  </div>
                </div>
              ) : (
                <div className="master-countdown-status">
                  <span>{statusText || 'Hoje é o grande encontro!'}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Barra de Ações Rápidas Elegante */}
        <div className="master-hero-actions">
          <CalendarMenu />

          <div className="master-quick-buttons">
            <a href="#localizacao" className="btn btn-primary action-btn">
              <MapPin className="btn-icon" aria-hidden="true" />
              <span>COMO CHEGAR (MAPA)</span>
            </a>

            <a href="#compartilhar" className="btn btn-outline action-btn">
              <Share2 className="btn-icon" aria-hidden="true" />
              <span>COMPARTILHAR NO WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
