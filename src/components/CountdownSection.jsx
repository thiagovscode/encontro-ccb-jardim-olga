export default function CountdownSection({ countdown }) {
  const { phase, days, hours, minutes, seconds, statusText } = countdown;

  return (
    <section id="contador" className="section section-countdown" aria-labelledby="countdown-heading">
      <div className="container">
        <div className="countdown-minimal-wrap reveal">
          {/* Estrela de 4 pontas sutil e elegante */}
          <div className="countdown-minimal-star" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L13.8 9.2L21 11L13.8 12.8L12 20L10.2 12.8L3 11L10.2 9.2L12 2Z"
                fill="#C2A676"
              />
            </svg>
          </div>

          <h2 id="countdown-heading" className="countdown-minimal-heading">
            C O N T A G E M &nbsp; R E G R E S S I V A
          </h2>

          {phase === 'upcoming' ? (
            <div className="countdown-minimal-row" aria-live="polite">
              {/* DIAS */}
              <div className="countdown-box-col">
                <div className="countdown-box">
                  <span className="countdown-box-num">{days}</span>
                </div>
                <span className="countdown-box-label">DIAS</span>
              </div>

              <span className="countdown-box-sep" aria-hidden="true">:</span>

              {/* HORAS */}
              <div className="countdown-box-col">
                <div className="countdown-box">
                  <span className="countdown-box-num">{hours}</span>
                </div>
                <span className="countdown-box-label">HORAS</span>
              </div>

              <span className="countdown-box-sep" aria-hidden="true">:</span>

              {/* MINUTOS */}
              <div className="countdown-box-col">
                <div className="countdown-box">
                  <span className="countdown-box-num">{minutes}</span>
                </div>
                <span className="countdown-box-label">MINUTOS</span>
              </div>

              <span className="countdown-box-sep" aria-hidden="true">:</span>

              {/* SEGUNDOS */}
              <div className="countdown-box-col">
                <div className="countdown-box">
                  <span className="countdown-box-num">{seconds}</span>
                </div>
                <span className="countdown-box-label">SEGUNDOS</span>
              </div>
            </div>
          ) : (
            <div className="countdown-status">
              <p className="countdown-status-text">{statusText}</p>
            </div>
          )}

          <p className="countdown-minimal-date">
            21 de novembro de 2026, às 11h30
          </p>
        </div>
      </div>
    </section>
  );
}

