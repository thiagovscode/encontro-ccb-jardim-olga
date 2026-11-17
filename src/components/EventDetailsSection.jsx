import { Calendar, Clock, MapPin } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import CalendarMenu from './CalendarMenu';
import { ClefWatermark, StaffClefDivider } from './CcbVisuals';

export default function EventDetailsSection() {
  const details = [
    { icon: Calendar, label: 'Data', value: EVENT_DATA.dateFormatted },
    { icon: Clock, label: 'Horário', value: EVENT_DATA.timeFormatted },
    { icon: MapPin, label: 'Local', value: EVENT_DATA.venueName }
  ];

  return (
    <section id="detalhes" className="section section-details" aria-labelledby="details-heading">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Informações</p>
          <h2 id="details-heading" className="section-title">
            NOSSO ENCONTRO
          </h2>
          <StaffClefDivider />
        </div>

        <div className="details-card reveal">
          <div className="card-corner card-corner--left" aria-hidden="true">
            <ClefWatermark type="treble" />
          </div>
          <div className="card-corner card-corner--right" aria-hidden="true">
            <ClefWatermark type="bass" />
          </div>

          <ul className="details-list details-list--three">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="details-item">
                  <div className="details-icon-wrap" aria-hidden="true">
                    <Icon className="details-icon" />
                  </div>
                  <div className="details-content">
                    <span className="details-label">{item.label}</span>
                    <span className="details-value">{item.value}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <CalendarMenu />
        </div>
      </div>
    </section>
  );
}
