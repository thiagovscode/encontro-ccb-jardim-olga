import churchImg from '../assets/ccb-igreja.jpg';
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

        {/* Master Card Unificado e Elegante */}
        <div className="countdown-master-card reveal" aria-live="polite">
          {/* Ilustração da Igreja CCB integrada com topo em arco clássico */}
          <div className="countdown-facade-frame">
            <img
              src={churchImg}
              alt="Fachada da Congregação Cristã no Brasil"
              className="countdown-facade-img"
              loading="lazy"
            />
            <div className="countdown-facade-fade" aria-hidden="true" />
          </div>

          <div className="countdown-body">
            <p className="countdown-clock-eyebrow">Tempo Restante para o Encontro</p>

            {phase === 'upcoming' ? (
              <div className="countdown-dials-row">
                <div className="countdown-dial">
                  <span className="countdown-digit">{days}</span>
                  <span className="countdown-tag">Dias</span>
                </div>

                <span className="countdown-colon" aria-hidden="true">:</span>

                <div className="countdown-dial">
                  <span className="countdown-digit">{hours}</span>
                  <span className="countdown-tag">Horas</span>
                </div>

                <span className="countdown-colon" aria-hidden="true">:</span>

                <div className="countdown-dial">
                  <span className="countdown-digit">{minutes}</span>
                  <span className="countdown-tag">Minutos</span>
                </div>

                <span className="countdown-colon" aria-hidden="true">:</span>

                <div className="countdown-dial">
                  <span className="countdown-digit">{seconds}</span>
                  <span className="countdown-tag">Segundos</span>
                </div>
              </div>
            ) : (
              <div className="countdown-status">
                <p className="countdown-status-text">{statusText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
