export default function CountdownSection({ countdown }) {
  const { phase, days, hours, minutes, seconds, statusText } = countdown;

  return (
    <section id="contador" className="section section-countdown" aria-labelledby="countdown-heading">
      <div className="container">
        <div className="countdown-master-container reveal">
          {/* Badge em verde-oliva com dourado */}
          <div className="countdown-pill-badge" id="countdown-heading">
            <span>CONTAGEM REGRESSIVA</span>
          </div>

          {phase === 'upcoming' ? (
            <div className="countdown-master-panel" aria-live="polite">
              {/* Coluna DIAS */}
              <div className="countdown-master-col">
                <span className="countdown-master-num">{String(days).padStart(2, '0')}</span>
                <span className="countdown-master-label">DIAS</span>
              </div>

              <div className="countdown-master-divider" aria-hidden="true" />

              {/* Coluna HORAS */}
              <div className="countdown-master-col">
                <span className="countdown-master-num">{String(hours).padStart(2, '0')}</span>
                <span className="countdown-master-label">HORAS</span>
              </div>

              <div className="countdown-master-divider" aria-hidden="true" />

              {/* Coluna MINUTOS */}
              <div className="countdown-master-col">
                <span className="countdown-master-num">{String(minutes).padStart(2, '0')}</span>
                <span className="countdown-master-label">MINUTOS</span>
              </div>

              <div className="countdown-master-divider" aria-hidden="true" />

              {/* Coluna SEGUNDOS */}
              <div className="countdown-master-col">
                <span className="countdown-master-num">{String(seconds).padStart(2, '0')}</span>
                <span className="countdown-master-label">SEGUNDOS</span>
              </div>
            </div>
          ) : (
            <div className="countdown-status">
              <p className="countdown-status-text">{statusText}</p>
            </div>
          )}

          {/* Versículo de Salmos 133:1 emoldurado */}
          <div className="countdown-scripture-wrap">
            <p className="countdown-scripture-quote">
              “Oh! quão bom e quão suave é que os irmãos vivam em união.”
            </p>
            <div className="countdown-scripture-rule">
              <span className="rule-line" />
              <span className="rule-text">SALMOS 133:1</span>
              <span className="rule-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
