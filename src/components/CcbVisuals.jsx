/**
 * Elementos visuais, musicais e arquitetônicos — Encontro CCB Jardim Olga
 * Estética clássica inspirada na Casa de Oração CCB e na Orquestra
 */

// 1. Ornato de Filigrana Dourada Superior
export function TopFiligreeOrnament({ className = '' }) {
  return (
    <div className={`invite-top-filigree ${className}`} aria-hidden="true">
      <svg viewBox="0 0 160 32" fill="none" className="filigree-svg">
        <path
          d="M 80 6 C 68 6 58 14 46 14 C 36 14 30 8 20 8 C 12 8 4 14 2 16 C 12 18 20 22 28 22 C 40 22 48 16 58 16 C 68 16 74 24 80 24 C 86 24 92 16 102 16 C 112 16 120 22 132 22 C 140 22 148 18 158 16 C 156 14 148 8 140 8 C 130 8 124 14 114 14 C 102 14 92 6 80 6 Z"
          stroke="#C8AD7F"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="80" cy="15" r="3" fill="#C8AD7F" />
        <circle cx="58" cy="16" r="2" fill="#C8AD7F" />
        <circle cx="102" cy="16" r="2" fill="#C8AD7F" />
        <circle cx="34" cy="14" r="1.5" fill="#C8AD7F" />
        <circle cx="126" cy="14" r="1.5" fill="#C8AD7F" />
      </svg>
    </div>
  );
}

// 2. Pauta Musical com Claves de Sol, Dó e Fá
export function StaffClefDivider({ light = false }) {
  return (
    <div className={`ccb-staff-divider ${light ? 'ccb-staff-divider--light' : ''}`} aria-hidden="true">
      <span className="ccb-divider-rule" />
      <svg className="ccb-staff-svg" viewBox="0 0 240 46" fill="none">
        {/* 5 Linhas da Pauta */}
        <line x1="6" y1="11" x2="234" y2="11" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="6" y1="16" x2="234" y2="16" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="6" y1="21" x2="234" y2="21" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="6" y1="26" x2="234" y2="26" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="6" y1="31" x2="234" y2="31" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />

        {/* Clave de Sol */}
        <path
          d="M26 35C23 35 21 33 21 30.5C21 27.5 24 25.5 27 26.5C29.5 27.3 30.5 30 28.8 32.2C27.5 34 24.8 34.2 23.5 32.5C21.5 30 22.5 25.5 26 21.5C28.8 18.3 30.5 15 30.2 11.2C30 8.5 28.2 6.5 26.5 6.5C24.8 6.5 23.5 8.8 23.8 12.5L27.5 35.5C27.8 37.8 26.5 39.5 24.5 39.5C22.8 39.5 21.8 38.2 22.2 36.8"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Clave de Dó */}
        <g stroke="currentColor" strokeWidth="1.15" strokeLinecap="round">
          <line x1="82" y1="9" x2="82" y2="33" strokeWidth="1.8" />
          <line x1="85" y1="9" x2="85" y2="33" strokeWidth="0.8" />
          <path d="M85 11C90 11 94 13.5 94 16C94 18.5 90 21 86 21C90 21 94 23.5 94 26C94 28.5 90 31 85 31" />
        </g>

        {/* Notas ligadas */}
        <ellipse cx="122" cy="23.5" rx="3.2" ry="2.2" transform="rotate(-18 122 23.5)" fill="currentColor" fillOpacity="0.85" />
        <line x1="125" y1="23" x2="125" y2="9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <ellipse cx="138" cy="21" rx="3.2" ry="2.2" transform="rotate(-18 138 21)" fill="currentColor" fillOpacity="0.85" />
        <line x1="141" y1="20.5" x2="141" y2="9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <line x1="125" y1="9" x2="141" y2="9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

        {/* Clave de Fá */}
        <path
          d="M198 15C198 12.5 200.2 11 202.8 11C206 11 208.2 13.5 208.2 17.2C208.2 22 204.2 26.5 198 29.5"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <circle cx="199" cy="15.5" r="1.4" fill="currentColor" />
        <circle cx="211.5" cy="13.5" r="1.2" fill="currentColor" />
        <circle cx="211.5" cy="18.5" r="1.2" fill="currentColor" />
      </svg>
      <span className="ccb-divider-rule" />
    </div>
  );
}

// 3. Cantoneiras Clássicas de Convite
export function ConcertCornerOrnament({ position = 'top-left' }) {
  return (
    <div className={`concert-corner concert-corner--${position}`} aria-hidden="true">
      <svg viewBox="0 0 44 44" fill="none" className="concert-corner-svg">
        <path d="M 4 44 V 12 C 4 7.5 7.5 4 12 4 H 44" stroke="#8C939E" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 10 44 V 16 C 10 12.6 12.6 10 16 10 H 44" stroke="#C8AD7F" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.4" fill="#C8AD7F" />
      </svg>
    </div>
  );
}

// 3.1 Folhagem de Ramos de Oliveira para os Cantos do Convite
export function OliveFoliageCorner({ position = 'top-left' }) {
  const isRight = position.includes('right');
  const isBottom = position.includes('bottom');
  return (
    <div className={`olive-corner olive-corner--${position}`} aria-hidden="true">
      <svg
        viewBox="0 0 76 76"
        fill="none"
        className="olive-corner-svg"
        style={{
          transform: `${isRight ? 'scaleX(-1)' : ''} ${isBottom ? 'scaleY(-1)' : ''}`.trim() || undefined
        }}
      >
        <path
          d="M 6 6 C 20 14 36 30 52 60"
          stroke="#4A5846"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeOpacity="0.45"
        />
        <ellipse cx="14" cy="11" rx="9" ry="3.8" transform="rotate(-32 14 11)" fill="#4A5846" fillOpacity="0.4" />
        <ellipse cx="28" cy="19" rx="10" ry="4.2" transform="rotate(-16 28 19)" fill="#63755E" fillOpacity="0.35" />
        <ellipse cx="20" cy="25" rx="8.5" ry="3.6" transform="rotate(42 20 25)" fill="#4A5846" fillOpacity="0.38" />
        <ellipse cx="38" cy="31" rx="10.5" ry="4.2" transform="rotate(-26 38 31)" fill="#4A5846" fillOpacity="0.45" />
        <ellipse cx="33" cy="41" rx="9.5" ry="3.8" transform="rotate(48 33 41)" fill="#63755E" fillOpacity="0.3" />
        <ellipse cx="49" cy="48" rx="8.5" ry="3.6" transform="rotate(-12 49 48)" fill="#4A5846" fillOpacity="0.38" />
        <circle cx="26" cy="25" r="2.2" fill="#C8AD7F" fillOpacity="0.75" />
      </svg>
    </div>
  );
}


// 4. Centro da Fachada CCB com Notas Musicais Flutuantes e Clave
export function CcbChurchCenterpiece({ className = '' }) {
  return (
    <div className={`church-centerpiece-wrap ${className}`} aria-hidden="true">
      {/* Clave de Sol Translúcida no Fundo Esquerdo */}
      <svg viewBox="0 0 100 160" fill="none" className="floating-clef-bg">
        <path
          d="M 52 142 C 42 142 36 134 36 124 C 36 110 48 102 60 106 C 70 109 74 122 68 131 C 62 138 52 139 46 132 C 38 122 42 100 58 82 C 70 68 76 52 74 36 C 73 24 67 16 60 16 C 53 16 48 24 49 38 L 56 145 C 57 154 52 159 45 159 C 38 159 34 154 36 148"
          stroke="#C8AD7F"
          strokeWidth="3"
          strokeOpacity="0.22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Fachada Arquitetônica da Igreja CCB */}
      <svg
        className="church-facade-svg"
        viewBox="0 0 640 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="facadeWallWash" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#F1F4F8" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="facadeGlassWash" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A564A" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#2E372E" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Linha arquitetônica da base e solo */}
        <line x1="40" y1="318" x2="600" y2="318" stroke="#22262E" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="60" y1="322" x2="580" y2="322" stroke="#C8AD7F" strokeWidth="0.8" strokeOpacity="0.6" strokeLinecap="round" />

        {/* Parede da Fachada com Frontão Escalonado CCB */}
        <path
          d="M 80 318 V 104 L 125 104 V 86 L 175 86 V 68 L 230 68 V 52 L 320 34 L 410 52 V 68 L 465 68 V 86 L 515 86 V 104 L 560 104 V 318 Z"
          fill="url(#facadeWallWash)"
          stroke="#22262E"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        {/* Moldura dupla da platibanda / beiral escalonado */}
        <path
          d="M 74 104 L 121 104 V 82 L 171 82 V 64 L 226 64 V 48 L 320 28 L 414 48 V 64 L 469 64 V 82 L 519 82 V 104 L 566 104"
          stroke="#C8AD7F"
          strokeWidth="1.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M 70 108 L 117 108 V 86 L 167 86 V 68 L 222 68 V 52 L 320 32 L 418 52 V 68 L 473 68 V 86 L 523 86 V 108 L 570 108"
          stroke="#22262E"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Frisos verticais em relevo arquitetônico */}
        <g stroke="#9AA3AF" strokeWidth="0.75" strokeOpacity="0.4">
          <line x1="98" y1="104" x2="98" y2="200" />
          <line x1="148" y1="86" x2="148" y2="200" />
          <line x1="200" y1="68" x2="200" y2="200" />
          <line x1="260" y1="52" x2="260" y2="200" />
          <line x1="290" y1="42" x2="290" y2="200" />
          <line x1="320" y1="36" x2="320" y2="200" strokeOpacity="0.6" stroke="#22262E" />
          <line x1="350" y1="42" x2="350" y2="200" />
          <line x1="380" y1="52" x2="380" y2="200" />
          <line x1="440" y1="68" x2="440" y2="200" />
          <line x1="492" y1="86" x2="492" y2="200" />
          <line x1="542" y1="104" x2="542" y2="200" />
        </g>

        {/* 7 Janelas Ogivais Características com Vitrais / Caixilharia */}
        {[
          { x: 100, y: 116 },
          { x: 156, y: 116 },
          { x: 214, y: 116 },
          { x: 304, y: 114, isCenter: true },
          { x: 394, y: 116 },
          { x: 452, y: 116 },
          { x: 508, y: 116 }
        ].map((win, idx) => (
          <g key={idx} transform={`translate(${win.x}, ${win.y})`}>
            <path
              d={win.isCenter ? "M 0 78 V 26 Q 0 5 16 0 Q 32 5 32 26 V 78 Z" : "M 0 76 V 26 Q 0 5 16 0 Q 32 5 32 26 V 76 Z"}
              fill="url(#facadeGlassWash)"
              stroke="#22262E"
              strokeWidth={win.isCenter ? "1.4" : "1.3"}
            />
            <line x1="16" y1="2" x2="16" y2={win.isCenter ? "78" : "76"} stroke="#22262E" strokeWidth="0.8" />
            <line x1="0" y1="32" x2="32" y2="32" stroke="#22262E" strokeWidth="0.75" />
            <line x1="0" y1={win.isCenter ? "55" : "54"} x2="32" y2={win.isCenter ? "55" : "54"} stroke="#22262E" strokeWidth="0.75" />
            <line x1="-3" y1={win.isCenter ? "78" : "76"} x2="35" y2={win.isCenter ? "78" : "76"} stroke="#22262E" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        ))}

        {/* Faixa Arquitetônica Horizontal / Lintel com o Letreiro Institucional */}
        <rect x="74" y="202" width="492" height="26" fill="#FFFFFF" stroke="#22262E" strokeWidth="1.3" />
        <line x1="74" y1="205" x2="566" y2="205" stroke="#C8AD7F" strokeWidth="0.75" strokeOpacity="0.65" />
        <line x1="74" y1="225" x2="566" y2="225" stroke="#C8AD7F" strokeWidth="0.75" strokeOpacity="0.65" />

        <text
          x="320"
          y="219"
          textAnchor="middle"
          fill="#1F242B"
          fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
          fontSize="10.5"
          fontWeight="700"
          letterSpacing="0.22em"
        >
          CONGREGAÇÃO CRISTÃ NO BRASIL
        </text>

        {/* Térreo: Pilares, Cobogós e Portão */}
        <g fill="#F1F4F8" stroke="#22262E" strokeWidth="0.7" strokeOpacity="0.5">
          <rect x="100" y="234" width="28" height="14" />
          <rect x="136" y="234" width="28" height="14" />
          <rect x="172" y="234" width="28" height="14" />
          <rect x="440" y="234" width="28" height="14" />
          <rect x="476" y="234" width="28" height="14" />
          <rect x="512" y="234" width="28" height="14" />
        </g>

        <rect x="80" y="228" width="16" height="90" fill="#FFFFFF" stroke="#22262E" strokeWidth="1.2" />
        <rect x="544" y="228" width="16" height="90" fill="#FFFFFF" stroke="#22262E" strokeWidth="1.2" />
        <rect x="250" y="228" width="12" height="90" fill="#FFFFFF" stroke="#22262E" strokeWidth="1.1" />
        <rect x="378" y="228" width="12" height="90" fill="#FFFFFF" stroke="#22262E" strokeWidth="1.1" />

        <line x1="96" y1="254" x2="544" y2="254" stroke="#22262E" strokeWidth="1.4" />
        <line x1="96" y1="312" x2="544" y2="312" stroke="#22262E" strokeWidth="1.4" />

        <g stroke="#22262E" strokeWidth="0.85" strokeOpacity="0.55">
          {[108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240].map((x) => (
            <line key={x} x1={x} y1="254" x2={x} y2="312" />
          ))}
          <line x1="262" y1="254" x2="262" y2="312" strokeOpacity="0.8" />
          <line x1="274" y1="254" x2="274" y2="312" />
          <line x1="286" y1="254" x2="286" y2="312" />
          <line x1="298" y1="254" x2="298" y2="312" />
          <line x1="310" y1="254" x2="310" y2="312" />
          <line x1="320" y1="230" x2="320" y2="312" strokeWidth="1.2" strokeOpacity="0.9" />
          <line x1="330" y1="254" x2="330" y2="312" />
          <line x1="342" y1="254" x2="342" y2="312" />
          <line x1="354" y1="254" x2="354" y2="312" />
          <line x1="366" y1="254" x2="366" y2="312" />
          {[400, 412, 424, 436, 448, 460, 472, 484, 496, 508, 520, 532].map((x) => (
            <line key={x} x1={x} y1="254" x2={x} y2="312" />
          ))}
        </g>
      </svg>

      {/* Pautas e Notas Musicais Douradas Flutuando à Direita */}
      <svg viewBox="0 0 160 120" fill="none" className="floating-stave-notes">
        {/* Pauta Ondulada */}
        <path d="M 10 70 Q 60 40 140 20" stroke="#C8AD7F" strokeWidth="1" strokeOpacity="0.45" />
        <path d="M 12 76 Q 62 46 142 26" stroke="#C8AD7F" strokeWidth="1" strokeOpacity="0.45" />
        <path d="M 14 82 Q 64 52 144 32" stroke="#C8AD7F" strokeWidth="1" strokeOpacity="0.45" />

        {/* Notas Musicais em Dourado */}
        {/* Colcheia 1 */}
        <ellipse cx="65" cy="52" rx="4" ry="2.8" transform="rotate(-15 65 52)" fill="#C8AD7F" />
        <line x1="68" y1="51" x2="68" y2="28" stroke="#C8AD7F" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M 68 28 Q 78 32 75 42" stroke="#C8AD7F" strokeWidth="1.3" fill="none" />

        {/* Semínima */}
        <ellipse cx="105" cy="38" rx="4.2" ry="3" transform="rotate(-15 105 38)" fill="#C8AD7F" />
        <line x1="108.5" y1="37" x2="108.5" y2="14" stroke="#C8AD7F" strokeWidth="1.3" strokeLinecap="round" />

        {/* Duas colcheias ligadas */}
        <ellipse cx="128" cy="24" rx="3.6" ry="2.5" transform="rotate(-15 128 24)" fill="#C8AD7F" />
        <line x1="131" y1="23" x2="131" y2="6" stroke="#C8AD7F" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="146" cy="18" rx="3.6" ry="2.5" transform="rotate(-15 146 18)" fill="#C8AD7F" />
        <line x1="149" y1="17" x2="149" y2="2" stroke="#C8AD7F" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="131" y1="6" x2="149" y2="2" stroke="#C8AD7F" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// 5. Ilustração da Fachada Isolada (para a Seção de Localização)
export function CcbFacadeIllustration() {
  return (
    <div className="ccb-facade-wrap" aria-hidden="true">
      <StaffClefDivider />
    </div>
  );
}

// 6. Barra Final de Partitura Musical
export function FinalBarDivider() {
  return (
    <div className="ccb-final-bar-divider" aria-hidden="true">
      <span className="ccb-divider-rule" />
      <svg className="ccb-final-bar-svg" viewBox="0 0 90 32" fill="none">
        <line x1="6" y1="9" x2="84" y2="9" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="6" y1="14" x2="84" y2="14" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="6" y1="19" x2="84" y2="19" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
        <line x1="6" y1="24" x2="84" y2="24" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
        <path d="M40 6C40 2.5 50 2.5 50 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="45" cy="5.5" r="0.9" fill="currentColor" />
        <line x1="42" y1="9" x2="42" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="47" y1="9" x2="47" y2="24" stroke="currentColor" strokeWidth="2.8" />
      </svg>
      <span className="ccb-divider-rule" />
    </div>
  );
}
