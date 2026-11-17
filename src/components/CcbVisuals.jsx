/**
 * Elementos visuais e musicais da tradição da Congregação Cristã no Brasil (CCB)
 * - Pautas de 5 linhas e claves (Sol, Dó e Fá)
 * - Escala com notas (Dó, Ré, Mi, Fá, Sol, Lá, Si)
 * - Silhueta arquitetônica transparente EXATA da Casa de Oração CCB baseada na imagem de referência
 * - Silhueta minimalista da irmandade em comunhão fraterna
 * - Barra final de partitura musical
 */

// 1. Pauta Musical com Clave de Sol, Clave de Dó e Clave de Fá
export function StaffClefDivider({ light = false }) {
  return (
    <div className={`ccb-staff-divider ${light ? 'ccb-staff-divider--light' : ''}`} aria-hidden="true">
      <span className="ccb-divider-rule" />
      <svg className="ccb-staff-svg" viewBox="0 0 240 46" fill="none">
        {/* 5 Linhas da Pauta */}
        <line x1="6" y1="11" x2="234" y2="11" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />
        <line x1="6" y1="16" x2="234" y2="16" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />
        <line x1="6" y1="21" x2="234" y2="21" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />
        <line x1="6" y1="26" x2="234" y2="26" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />
        <line x1="6" y1="31" x2="234" y2="31" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />

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
        <ellipse cx="122" cy="23.5" rx="3.2" ry="2.2" transform="rotate(-18 122 23.5)" fill="currentColor" fillOpacity="0.8" />
        <line x1="125" y1="23" x2="125" y2="9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <ellipse cx="138" cy="21" rx="3.2" ry="2.2" transform="rotate(-18 138 21)" fill="currentColor" fillOpacity="0.8" />
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

// Marca d'água das claves para cantos dos cards
export function ClefWatermark({ type = 'treble' }) {
  if (type === 'treble') {
    return (
      <svg className="ccb-clef-watermark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M25 38C21.5 38 19 35.5 19 32.5C19 28.8 22.8 26.5 26.5 27.8C29.5 28.8 30.8 32 28.8 34.8C27 37 23.8 37.2 22.2 35C19.8 31.8 21 26.2 25.2 21.5C28.5 17.8 30.5 13.8 30 9.5C29.8 6.5 27.8 4.2 25.8 4.2C23.8 4.2 22.2 7 22.6 11.2L27 38.8C27.3 41.5 25.8 43.5 23.5 43.5C21.5 43.5 20.2 42 20.8 40.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'bass') {
    return (
      <svg className="ccb-clef-watermark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M15 16C15 12.2 18.2 10 22 10C26.8 10 30 13.8 30 19.2C30 26.5 24.2 33 15 37.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="16.5" cy="17" r="2" fill="currentColor" />
        <circle cx="34.5" cy="14" r="1.6" fill="currentColor" />
        <circle cx="34.5" cy="21" r="1.6" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg className="ccb-clef-watermark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <line x1="16" y1="8" x2="16" y2="40" stroke="currentColor" strokeWidth="2.5" />
      <line x1="20" y1="8" x2="20" y2="40" stroke="currentColor" strokeWidth="1" />
      <path
        d="M20 12C28 12 34 16 34 20C34 24 28 28 22 28C28 28 34 32 34 36C34 40 28 44 20 44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 2. Silhueta Arquitetônica Vetorial Minimalista da Fachada CCB (Sem Fundo / Transparente)
// Ilustração técnica clássica com frontão escalonado, 7 janelas ogivais, frisos e letreiro institucional
export function CcbFacadeIllustration() {
  return (
    <div className="ccb-facade-wrap" aria-hidden="true">
      <svg
        className="ccb-facade-svg"
        viewBox="0 0 640 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wallWash" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FAF9F6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F2EFE9" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="glassWash" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4E5A4B" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#3A4638" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Linha arquitetônica da base e solo */}
        <line x1="40" y1="318" x2="600" y2="318" stroke="#3A424E" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="60" y1="322" x2="580" y2="322" stroke="#C2A676" strokeWidth="0.8" strokeOpacity="0.5" strokeLinecap="round" />

        {/* Parede da Fachada com Frontão Escalonado CCB */}
        <path
          d="M 80 318 V 104 L 125 104 V 86 L 175 86 V 68 L 230 68 V 52 L 320 34 L 410 52 V 68 L 465 68 V 86 L 515 86 V 104 L 560 104 V 318 Z"
          fill="url(#wallWash)"
          stroke="#3A424E"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        {/* Moldura dupla da platibanda / beiral escalonado */}
        <path
          d="M 74 104 L 121 104 V 82 L 171 82 V 64 L 226 64 V 48 L 320 28 L 414 48 V 64 L 469 64 V 82 L 519 82 V 104 L 566 104"
          stroke="#C2A676"
          strokeWidth="1.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M 70 108 L 117 108 V 86 L 167 86 V 68 L 222 68 V 52 L 320 32 L 418 52 V 68 L 473 68 V 86 L 523 86 V 108 L 570 108"
          stroke="#3A424E"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Frisos verticais em relevo arquitetônico (traços finos clássicos) */}
        <g stroke="#3A424E" strokeWidth="0.75" strokeOpacity="0.28">
          <line x1="98" y1="104" x2="98" y2="200" />
          <line x1="148" y1="86" x2="148" y2="200" />
          <line x1="200" y1="68" x2="200" y2="200" />
          <line x1="260" y1="52" x2="260" y2="200" />
          <line x1="290" y1="42" x2="290" y2="200" />
          <line x1="320" y1="36" x2="320" y2="200" strokeOpacity="0.4" />
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
              fill="url(#glassWash)"
              stroke="#3A424E"
              strokeWidth={win.isCenter ? "1.4" : "1.3"}
            />
            <line x1="16" y1="2" x2="16" y2={win.isCenter ? "78" : "76"} stroke="#3A424E" strokeWidth="0.8" />
            <line x1="0" y1="32" x2="32" y2="32" stroke="#3A424E" strokeWidth="0.75" />
            <line x1="0" y1={win.isCenter ? "55" : "54"} x2="32" y2={win.isCenter ? "55" : "54"} stroke="#3A424E" strokeWidth="0.75" />
            <line x1="-3" y1={win.isCenter ? "78" : "76"} x2="35" y2={win.isCenter ? "78" : "76"} stroke="#3A424E" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        ))}

        {/* Faixa Arquitetônica Horizontal / Lintel com o Letreiro Institucional */}
        <rect x="74" y="202" width="492" height="26" fill="#FFFFFF" stroke="#3A424E" strokeWidth="1.3" />
        <line x1="74" y1="205" x2="566" y2="205" stroke="#C2A676" strokeWidth="0.75" strokeOpacity="0.6" />
        <line x1="74" y1="225" x2="566" y2="225" stroke="#C2A676" strokeWidth="0.75" strokeOpacity="0.6" />

        <text
          x="320"
          y="219"
          textAnchor="middle"
          fill="#22262E"
          fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
          fontSize="10.5"
          fontWeight="700"
          letterSpacing="0.22em"
        >
          CONGREGAÇÃO CRISTÃ NO BRASIL
        </text>

        {/* Térreo: Pilares, Cobogós e Portão / Entrada Minimalista */}
        <g fill="#F2EFE9" stroke="#3A424E" strokeWidth="0.7" strokeOpacity="0.6">
          <rect x="100" y="234" width="28" height="14" />
          <rect x="136" y="234" width="28" height="14" />
          <rect x="172" y="234" width="28" height="14" />
          <rect x="440" y="234" width="28" height="14" />
          <rect x="476" y="234" width="28" height="14" />
          <rect x="512" y="234" width="28" height="14" />
        </g>

        {/* Pilares laterais do portão */}
        <rect x="80" y="228" width="16" height="90" fill="#FFFFFF" stroke="#3A424E" strokeWidth="1.2" />
        <rect x="544" y="228" width="16" height="90" fill="#FFFFFF" stroke="#3A424E" strokeWidth="1.2" />
        <rect x="250" y="228" width="12" height="90" fill="#FFFFFF" stroke="#3A424E" strokeWidth="1.1" />
        <rect x="378" y="228" width="12" height="90" fill="#FFFFFF" stroke="#3A424E" strokeWidth="1.1" />

        {/* Viga horizontal do portão frontal */}
        <line x1="96" y1="254" x2="544" y2="254" stroke="#3A424E" strokeWidth="1.4" />
        <line x1="96" y1="312" x2="544" y2="312" stroke="#3A424E" strokeWidth="1.4" />

        {/* Gradil vertical minimalista do portão */}
        <g stroke="#3A424E" strokeWidth="0.85" strokeOpacity="0.55">
          {/* Bloco Esquerdo */}
          {[108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240].map((x) => (
            <line key={x} x1={x} y1="254" x2={x} y2="312" />
          ))}

          {/* Entrada Central com Porta Dupla Arquitetônica */}
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

          {/* Bloco Direito */}
          {[400, 412, 424, 436, 448, 460, 472, 484, 496, 508, 520, 532].map((x) => (
            <line key={x} x1={x} y1="254" x2={x} y2="312" />
          ))}
        </g>
      </svg>
    </div>
  );
}

// 3. Silhueta da Irmandade e Comunhão
export function BrotherhoodSilhouette() {
  return (
    <div className="ccb-brotherhood-wrap" aria-hidden="true">
      <svg className="ccb-brotherhood-svg" viewBox="0 0 160 42" fill="none">
        <circle cx="34" cy="11" r="4.2" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />
        <path d="M25 36C25 24 43 24 43 36" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />

        <circle cx="56" cy="12" r="4" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />
        <path d="M50 14C49 22 48 30 46 36H66C64 30 63 22 62 14" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />

        <circle cx="80" cy="10" r="4.3" stroke="#5B6852" strokeWidth="1.1" fill="#FAF9F6" />
        <path d="M70 36C70 23 90 23 90 36" stroke="#5B6852" strokeWidth="1.1" fill="#FAF9F6" />
        <rect x="76" y="22" width="8" height="6" rx="1" stroke="#5B6852" strokeWidth="0.8" fill="#FFFFFF" />

        <circle cx="104" cy="12" r="4" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />
        <path d="M98 14C97 22 96 30 94 36H114C112 30 111 22 110 14" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />

        <circle cx="126" cy="11" r="4.2" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />
        <path d="M117 36C117 24 135 24 135 36" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />

        <line x1="16" y1="36" x2="144" y2="36" stroke="#8C939E" strokeWidth="0.75" strokeOpacity="0.45" />
      </svg>
      <span className="ccb-brotherhood-caption">União e comunhão da irmandade</span>
    </div>
  );
}

// 4. Barra Final de Partitura Musical
export function FinalBarDivider() {
  return (
    <div className="ccb-final-bar-divider" aria-hidden="true">
      <span className="ccb-divider-rule" />
      <svg className="ccb-final-bar-svg" viewBox="0 0 90 32" fill="none">
        <line x1="6" y1="9" x2="84" y2="9" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />
        <line x1="6" y1="14" x2="84" y2="14" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />
        <line x1="6" y1="19" x2="84" y2="19" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />
        <line x1="6" y1="24" x2="84" y2="24" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />

        <path d="M40 6C40 2.5 50 2.5 50 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="45" cy="5.5" r="0.9" fill="currentColor" />

        <line x1="42" y1="9" x2="42" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="47" y1="9" x2="47" y2="24" stroke="currentColor" strokeWidth="2.8" />
      </svg>
      <span className="ccb-divider-rule" />
    </div>
  );
}
