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

// 2. Silhueta Arquitetônica Exata da Fachada CCB (Sem Fundo / Transparente)
// Fiel à imagem real enviada: frontão escalonado, 7 janelas ogivais, letreiro e portão
export function CcbFacadeIllustration() {
  return (
    <div className="ccb-facade-wrap" aria-hidden="true">
      <svg
        className="ccb-facade-svg"
        viewBox="0 0 500 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Parede frontal superior em cinza arquitetônico suave com recorte escalonado */}
        <path
          d="M70 200V85H82V65H132V50H172V40H212V32H288V40H328V50H368V65H418V85H430V200H70Z"
          fill="#DFE4EC"
          stroke="#4A515D"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Moldura da platibanda escalonada superior (topo branco CCB) */}
        <path
          d="M66 85H78V62H128V46H168V36H208V28H292V36H332V46H372V62H422V85H434"
          stroke="#22262E"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M74 89H84V66H134V50H174V40H214V32H286V40H326V50H366V66H416V89H426"
          stroke="#FFFFFF"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Frisos verticais em relevo branco sobre a fachada cinza */}
        {[
          92, 108, 124, 144, 160, 178, 196, 214, 232, 250, 268, 286, 304, 322, 340, 356, 376, 392, 408
        ].map((x) => (
          <line
            key={x}
            x1={x}
            y1={x < 132 || x > 368 ? 72 : x < 172 || x > 328 ? 58 : x < 212 || x > 288 ? 48 : 38}
            x2={x}
            y2={196}
            stroke="#FFFFFF"
            strokeWidth="1.6"
            strokeOpacity="0.9"
          />
        ))}

        {/* 7 Janelas Ogivais Características da CCB */}
        {[96, 140, 184, 228, 272, 316, 360].map((wx, idx) => (
          <g key={idx}>
            {/* Vão da janela com arco ogival */}
            <path
              d={`M${wx} 190V136C${wx} 120 ${wx + 16} 110 ${wx + 16} 110C${wx + 16} 110 ${wx + 32} 120 ${wx + 32} 136V190H${wx}Z`}
              fill="#2E3C44"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            {/* Divisória central vertical */}
            <line x1={wx + 16} y1={113} x2={wx + 16} y2={190} stroke="#FFFFFF" strokeWidth="1.2" />
            {/* Travessa horizontal */}
            <line x1={wx} y1={155} x2={wx + 32} y2={155} stroke="#FFFFFF" strokeWidth="1" />
            <line x1={wx} y1={175} x2={wx + 32} y2={175} stroke="#FFFFFF" strokeWidth="1" />
          </g>
        ))}

        {/* Faixa branca horizontal do letreiro institucional */}
        <rect x="60" y="198" width="380" height="24" fill="#FFFFFF" stroke="#8C939E" strokeWidth="1.2" />
        <text
          x="250"
          y="214"
          textAnchor="middle"
          fill="#22262E"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="11.5"
          fontWeight="700"
          letterSpacing="0.16em"
        >
          CONGREGAÇÃO CRISTÃ NO BRASIL
        </text>

        {/* Nível inferior: pilares, cobogós e portão frontal */}
        {/* Pilares laterais e muro */}
        <rect x="36" y="140" width="28" height="135" fill="#F4F6F9" stroke="#8C939E" strokeWidth="1.2" />
        <rect x="436" y="140" width="28" height="135" fill="#F4F6F9" stroke="#8C939E" strokeWidth="1.2" />

        {/* Parede recuada inferior com cobogós/grades de ventilação */}
        <rect x="64" y="222" width="372" height="53" fill="#EEF1F5" />
        {[72, 100, 128, 156, 320, 348, 376, 404].map((gx) => (
          <rect key={gx} x={gx} y={226} width="22" height="14" fill="#D5DAE2" stroke="#8C939E" strokeWidth="0.8" />
        ))}

        {/* Gradil e portão frontal branco */}
        {/* Viga horizontal superior do portão */}
        <line x1="60" y1="228" x2="440" y2="228" stroke="#4A515D" strokeWidth="2.2" />
        <line x1="60" y1="272" x2="440" y2="272" stroke="#4A515D" strokeWidth="2.2" />

        {/* Barras verticais do portão */}
        {Array.from({ length: 48 }).map((_, i) => {
          const px = 64 + i * 7.8;
          return (
            <line
              key={i}
              x1={px}
              y1={228}
              x2={px}
              y2={272}
              stroke="#FFFFFF"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          );
        })}

        {/* Linha de base do solo */}
        <line x1="20" y1="275" x2="480" y2="275" stroke="#4A515D" strokeWidth="2" strokeLinecap="round" />
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
