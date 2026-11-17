import { Calendar, Clock, Trees } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import CalendarMenu from './CalendarMenu';

export default function EventDetailsSection() {
  const details = [
    { icon: Calendar, label: 'Data', value: EVENT_DATA.dateFormatted },
    { icon: Clock, label: 'Horário', value: EVENT_DATA.timeFormatted },
    {
      icon: Trees,
      label: 'Local',
      value: `${EVENT_DATA.venueName} — Franco da Rocha - SP.`,
      fullWidth: true
    }
  ];

  return (
    <section id="detalhes" className="section section-details" aria-labelledby="details-heading">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Informações</p>
          <h2 id="details-heading" className="section-title">
            NOSSO ENCONTRO
          </h2>
        </div>

        <div className="details-card reveal">
          <ul className="details-list">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  className={`details-item${item.fullWidth ? ' details-item--full' : ''}`}
                >
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
