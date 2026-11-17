import { ExternalLink, Navigation } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export default function LocationSection() {
  return (
    <section id="localizacao" className="section section-location" aria-labelledby="location-heading">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Localização</p>
          <h2 id="location-heading" className="section-title">
            ONDE VAMOS NOS ENCONTRAR?
          </h2>
        </div>

        <div className="location-card reveal">
          <div className="location-info">
            <h3 className="location-venue">{EVENT_DATA.venue}</h3>
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
