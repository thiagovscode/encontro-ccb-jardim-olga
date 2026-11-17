import { StaffClefDivider } from './CcbVisuals';

export default function CountdownSection({ countdown }) {
  const { phase, days, hours, minutes, seconds, statusText } = countdown;

  return (
    <section id="contador" className="section section-countdown" aria-labelledby="countdown-heading">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Contagem Regressiva</p>
          <h2 id="countdown-heading" className="section-title">
            Aguardamos este dia com alegria
          </h2>
          <p className="section-caption">
            21 de novembro de 2026, às 11h30 — Horário de Brasília
          </p>

          <StaffClefDivider />
        </div>

        {/* Desenho arquitetônico da Igreja CCB integrado ao contador */}
        <div className="countdown-illustration-wrap reveal">
          <img
            src="/images/ccb-igreja.jpg"
            alt="Ilustração da fachada da Congregação Cristã no Brasil"
            className="countdown-church-img"
            loading="lazy"
          />
        </div>

        <div className="countdown-card reveal" aria-live="polite">
          {phase === 'upcoming' ? (
            <div className="countdown-grid">
              <div className="countdown-item">
                <span className="countdown-number">{days}</span>
                <span className="countdown-label">Dias</span>
              </div>
              <div className="countdown-divider" aria-hidden="true" />
              <div className="countdown-item">
                <span className="countdown-number">{hours}</span>
                <span className="countdown-label">Horas</span>
              </div>
              <div className="countdown-divider" aria-hidden="true" />
              <div className="countdown-item">
                <span className="countdown-number">{minutes}</span>
                <span className="countdown-label">Minutos</span>
              </div>
              <div className="countdown-divider" aria-hidden="true" />
              <div className="countdown-item">
                <span className="countdown-number">{seconds}</span>
                <span className="countdown-label">Segundos</span>
              </div>
            </div>
          ) : (
            <div className="countdown-status">
              <p className="countdown-status-text">{statusText}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
