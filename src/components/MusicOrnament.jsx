/**
 * Ornamentos musicais minimalistas em traço fino inspirados na tradição
 * musical da Congregação Cristã no Brasil (pauta, Clave de Sol, Clave de Fá
 * e instrumentos da orquestra).
 */

export function StaffClefDivider() {
  return (
    <div className="music-staff-divider" aria-hidden="true">
      <span className="divider-line" />
      <svg className="music-staff-svg" viewBox="0 0 180 44" fill="none">
        {/* 5 linhas da pauta */}
        <line x1="6" y1="12" x2="174" y2="12" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.9" />
        <line x1="6" y1="17" x2="174" y2="17" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.9" />
        <line x1="6" y1="22" x2="174" y2="22" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.9" />
        <line x1="6" y1="27" x2="174" y2="27" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.9" />
        <line x1="6" y1="32" x2="174" y2="32" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.9" />

        {/* Clave de Sol (esquerda) */}
        <path
          d="M28 36C25 36 23 34 23 31.5C23 28.5 26 26.5 29 27.5C31.5 28.3 32.5 31 30.8 33.2C29.5 35 26.8 35.2 25.5 33.5C23.5 31 24.5 26.5 28 22.5C30.8 19.3 32.5 16 32.2 12.2C32 9.5 30.2 7.5 28.5 7.5C26.8 7.5 25.5 9.8 25.8 13.5L29.5 36.5C29.8 38.8 28.5 40.5 26.5 40.5C24.8 40.5 23.8 39.2 24.2 37.8"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Notas centrais (mínima / semínima) */}
        <ellipse cx="82" cy="24.5" rx="3.4" ry="2.4" transform="rotate(-18 82 24.5)" stroke="currentColor" strokeWidth="1.25" />
        <line x1="85.2" y1="24" x2="85.2" y2="11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        <ellipse cx="100" cy="19.5" rx="3.4" ry="2.4" transform="rotate(-18 100 19.5)" fill="currentColor" fillOpacity="0.7" />
        <line x1="103.2" y1="19" x2="103.2" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M103.2 7C106.5 8.5 108 11 107.2 14" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />

        {/* Clave de Fá (direita) */}
        <path
          d="M142 16C142 13.5 144.2 12 146.8 12C150 12 152.2 14.5 152.2 18.2C152.2 23 148.2 27.5 142 30.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="143" cy="16.5" r="1.5" fill="currentColor" />
        <circle cx="155.5" cy="14.5" r="1.25" fill="currentColor" />
        <circle cx="155.5" cy="19.5" r="1.25" fill="currentColor" />
      </svg>
      <span className="divider-line" />
    </div>
  );
}

export function OrchestraStrip() {
  return (
    <div className="orchestra-strip" aria-hidden="true">
      {/* Violino */}
      <svg className="instrument-icon" viewBox="0 0 40 40" fill="none" title="Violino">
        <path
          d="M20 7V15M18 7H22M17 15C14.5 15 13 17 13 19.2C13 21 14.5 22 14.5 23.5C14.5 25 12.5 26 12.5 28.5C12.5 31.5 15.5 33.5 20 33.5C24.5 33.5 27.5 31.5 27.5 28.5C27.5 26 25.5 25 25.5 23.5C25.5 22 27 21 27 19.2C27 17 25.5 15 23 15H17Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="20" y1="15" x2="20" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.65" />
      </svg>

      {/* Flauta Transversal */}
      <svg className="instrument-icon" viewBox="0 0 40 40" fill="none" title="Flauta">
        <line x1="6" y1="26" x2="34" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="22.6" r="1.1" fill="currentColor" />
        <circle cx="18.5" cy="20.7" r="1.1" fill="currentColor" />
        <circle cx="23" cy="18.8" r="1.1" fill="currentColor" />
        <circle cx="27.5" cy="16.9" r="1.1" fill="currentColor" />
      </svg>

      {/* Trompete */}
      <svg className="instrument-icon" viewBox="0 0 40 40" fill="none" title="Trompete">
        <path
          d="M7 22H23L32 16V28L23 22"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 22V25.5C12 27 13.2 28 14.8 28H19.2C20.8 28 22 27 22 25.5V22" stroke="currentColor" strokeWidth="1.15" />
        <line x1="15" y1="18.5" x2="15" y2="22" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <line x1="17.5" y1="18.5" x2="17.5" y2="22" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <line x1="20" y1="18.5" x2="20" y2="22" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      </svg>

      {/* Violoncelo */}
      <svg className="instrument-icon" viewBox="0 0 40 40" fill="none" title="Violoncelo">
        <path
          d="M20 5V13M18.5 5H21.5M16.5 13C14 13.5 12.5 15.8 12.5 18.2C12.5 20.2 14 21.2 14 22.8C14 24.4 11.8 25.8 11.8 28.8C11.8 32 15 34 20 34C25 34 28.2 32 28.2 28.8C28.2 25.8 26 24.4 26 22.8C26 21.2 27.5 20.2 27.5 18.2C27.5 15.8 26 13.5 23.5 13H16.5Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="20" y1="34" x2="20" y2="37.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>

      {/* Órgão / Teclado */}
      <svg className="instrument-icon" viewBox="0 0 40 40" fill="none" title="Órgão">
        <rect x="8" y="13" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" />
        <line x1="13" y1="13" x2="13" y2="27" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.6" />
        <line x1="18" y1="13" x2="18" y2="27" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.6" />
        <line x1="23" y1="13" x2="23" y2="27" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.6" />
        <line x1="28" y1="13" x2="28" y2="27" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.6" />
        <rect x="11.5" y="13" width="3" height="8" fill="currentColor" fillOpacity="0.7" />
        <rect x="16.5" y="13" width="3" height="8" fill="currentColor" fillOpacity="0.7" />
        <rect x="26.5" y="13" width="3" height="8" fill="currentColor" fillOpacity="0.7" />
      </svg>
    </div>
  );
}
