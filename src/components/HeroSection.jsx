import { MapPin, Share2 } from 'lucide-react';
import CalendarMenu from './CalendarMenu';
import InvitationCard from './InvitationCard';

export default function HeroSection({ countdown }) {
  return (
    <header id="convite" className="hero-master">
      <div className="hero-ambient-bg" aria-hidden="true" />

      <div className="container hero-master-container">
        {/* Cartão Oficial do Convite 100% em Código Web Nativo */}
        <InvitationCard id="convite-card" countdown={countdown} />

        {/* Barra de Ações Rápidas Diretas */}
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
