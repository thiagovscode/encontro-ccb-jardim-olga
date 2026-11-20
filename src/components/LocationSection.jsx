import { ExternalLink, MapPin, Navigation } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { StaffClefDivider } from './CcbVisuals';

export default function LocationSection() {
  return (
    <section id="localizacao" className="section section-location" aria-labelledby="location-heading">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Localização do Encontro</p>
          <h2 id="location-heading" className="section-title">
            ONDE VAMOS NOS ENCONTRAR?
          </h2>
          <StaffClefDivider />
        </div>

        <div className="location-card reveal">
          {/* Caixa de Local idêntica ao Convite Oficial */}
          <div className="invite-venue-box">
            <MapPin className="venue-box-icon" aria-hidden="true" />
            <span className="venue-box-title">Local: {EVENT_DATA.venueName}</span>
          </div>

          <div className="location-info">
            {/* O endereço completo aparece exclusivamente nesta seção do mapa */}
            <p className="location-address">{EVENT_DATA.addressFull}</p>
          </div>

          <div className="map-frame">
            <iframe
              title="Mapa de localização — Chácara Sthefani, Estrada Sete Voltas, Franco da Rocha - SP, 07830-460"
              src={EVENT_DATA.maps.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="location-actions">
            <a
              href={EVENT_DATA.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Navigation className="btn-icon" aria-hidden="true" />
              <span>COMO CHEGAR</span>
            </a>

            <a
              href={EVENT_DATA.maps.searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <ExternalLink className="btn-icon" aria-hidden="true" />
              <span>Abrir no Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
