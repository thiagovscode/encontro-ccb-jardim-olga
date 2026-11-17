/**
 * Elementos visuais e musicais da tradição da Congregação Cristã no Brasil (CCB)
 * - Pautas de 5 linhas e claves (Sol, Dó e Fá)
 * - Escala com notas (Dó, Ré, Mi, Fá, Sol, Lá, Si)
 * - Hinário aberto com marcador de fita
 * - Fachada arquitetônica clássica da casa de oração CCB em linhas sóbrias
 * - Instrumentos da orquestra CCB (Cordas, Madeiras, Metais e Órgão)
 * - Silhueta da irmandade em comunhão fraterna
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

        {/* Clave de Sol (Início) */}
        <path
          d="M26 35C23 35 21 33 21 30.5C21 27.5 24 25.5 27 26.5C29.5 27.3 30.5 30 28.8 32.2C27.5 34 24.8 34.2 23.5 32.5C21.5 30 22.5 25.5 26 21.5C28.8 18.3 30.5 15 30.2 11.2C30 8.5 28.2 6.5 26.5 6.5C24.8 6.5 23.5 8.8 23.8 12.5L27.5 35.5C27.8 37.8 26.5 39.5 24.5 39.5C22.8 39.5 21.8 38.2 22.2 36.8"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Clave de Dó (Centro-Esquerda) */}
        <g stroke="currentColor" strokeWidth="1.15" strokeLinecap="round">
          <line x1="82" y1="9" x2="82" y2="33" strokeWidth="1.8" />
          <line x1="85" y1="9" x2="85" y2="33" strokeWidth="0.8" />
          <path d="M85 11C90 11 94 13.5 94 16C94 18.5 90 21 86 21C90 21 94 23.5 94 26C94 28.5 90 31 85 31" />
        </g>

        {/* Notas ligadas (Centro) */}
        <ellipse cx="122" cy="23.5" rx="3.2" ry="2.2" transform="rotate(-18 122 23.5)" fill="currentColor" fillOpacity="0.8" />
        <line x1="125" y1="23" x2="125" y2="9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <ellipse cx="138" cy="21" rx="3.2" ry="2.2" transform="rotate(-18 138 21)" fill="currentColor" fillOpacity="0.8" />
        <line x1="141" y1="20.5" x2="141" y2="9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <line x1="125" y1="9" x2="141" y2="9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

        {/* Clave de Fá (Direita) */}
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

// 2. Escala com Notas Musicais (Dó, Ré, Mi, Fá, Sol, Lá, Si)
export function SolfeggioStrip() {
  const notes = [
    { name: 'Dó', cy: 30, line: true },
    { name: 'Ré', cy: 27, line: false },
    { name: 'Mi', cy: 24, line: false },
    { name: 'Fá', cy: 21, line: false },
    { name: 'Sol', cy: 18, line: false },
    { name: 'Lá', cy: 15, line: false },
    { name: 'Si', cy: 12, line: false }
  ];

  return (
    <div className="ccb-solfeggio-container" aria-hidden="true">
      <svg className="ccb-solfeggio-svg" viewBox="0 0 320 62" fill="none">
        {/* Pauta */}
        <line x1="10" y1="12" x2="310" y2="12" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.8" />
        <line x1="10" y1="16.5" x2="310" y2="16.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.8" />
        <line x1="10" y1="21" x2="310" y2="21" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.8" />
        <line x1="10" y1="25.5" x2="310" y2="25.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.8" />
        <line x1="10" y1="30" x2="310" y2="30" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.8" />

        {/* Clave de Sol sutil no início */}
        <path
          d="M24 33C21.5 33 20 31.5 20 29.5C20 27 22.5 25.5 25 26.2C27 27 27.8 29 26.5 30.8C25.5 32 23.5 32.2 22.5 31C21 29 21.8 25.5 24.5 22.5C26.5 20 28 17.5 27.8 14.2C27.5 12 26 10.5 24.8 10.5C23.5 10.5 22.5 12 22.8 15L25.8 33.5C26 35.5 25 37 23.5 37"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {notes.map((note, idx) => {
          const cx = 65 + idx * 36;
          return (
            <g key={note.name}>
              {/* Linha suplementar para Dó */}
              {note.line && (
                <line x1={cx - 7} y1={note.cy} x2={cx + 7} y2={note.cy} stroke="currentColor" strokeWidth="0.9" />
              )}
              {/* Cabeça da nota */}
              <ellipse cx={cx} cy={note.cy} rx="3.3" ry="2.3" transform={`rotate(-18 ${cx} ${note.cy})`} fill="currentColor" />
              {/* Haste */}
              <line x1={cx + 3.1} y1={note.cy} x2={cx + 3.1} y2={note.cy - 14} stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
              {/* Nome da nota (solfejo) */}
              <text x={cx} y="54" textAnchor="middle" fill="currentColor" className="ccb-solfeggio-text">
                {note.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// 3. Ilustração de Hinário Aberto CCB com marcador de fita
export function OpenHymnalIllustration() {
  return (
    <div className="ccb-hymnal-wrap" aria-hidden="true">
      <svg className="ccb-hymnal-svg" viewBox="0 0 160 90" fill="none">
        {/* Capa e borda externa do hinário */}
        <path
          d="M12 72C28 69 52 69 78 74L78 20C54 16 28 16 12 19Z"
          fill="#FAF9F6"
          stroke="#8C939E"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path
          d="M148 72C132 69 108 69 82 74L82 20C106 16 132 16 148 19Z"
          fill="#FAF9F6"
          stroke="#8C939E"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        {/* Lombada central */}
        <path d="M78 20C79.5 21 80.5 21 82 20L82 74C80.5 75 79.5 75 78 74Z" fill="#D8DCE2" stroke="#8C939E" strokeWidth="0.8" />

        {/* Linhas de partitura na página esquerda */}
        <g stroke="#8C939E" strokeOpacity="0.5" strokeWidth="0.6">
          <line x1="22" y1="28" x2="70" y2="28" />
          <line x1="22" y1="31" x2="70" y2="31" />
          <line x1="22" y1="34" x2="70" y2="34" />
          <line x1="22" y1="42" x2="70" y2="42" />
          <line x1="22" y1="45" x2="70" y2="45" />
          <line x1="22" y1="48" x2="70" y2="48" />
          <line x1="22" y1="56" x2="70" y2="56" />
          <line x1="22" y1="59" x2="70" y2="59" />
          <line x1="22" y1="62" x2="70" y2="62" />
        </g>
        {/* Clave de Sol estilizada na página esquerda */}
        <path
          d="M26 35C24.5 35 23.5 34 23.5 32.5C23.5 30.5 25.5 29.5 27 30C28.5 30.5 29 32 28 33.2C27 34 25.5 34.2 24.8 33C24 31 24.5 28.5 26 26.5L27 35"
          stroke="#5B6852"
          strokeWidth="0.9"
        />

        {/* Linhas de partitura na página direita */}
        <g stroke="#8C939E" strokeOpacity="0.5" strokeWidth="0.6">
          <line x1="90" y1="28" x2="138" y2="28" />
          <line x1="90" y1="31" x2="138" y2="31" />
          <line x1="90" y1="34" x2="138" y2="34" />
          <line x1="90" y1="42" x2="138" y2="42" />
          <line x1="90" y1="45" x2="138" y2="45" />
          <line x1="90" y1="48" x2="138" y2="48" />
          <line x1="90" y1="56" x2="138" y2="56" />
          <line x1="90" y1="59" x2="138" y2="59" />
          <line x1="90" y1="62" x2="138" y2="62" />
        </g>

        {/* Fita marcadora clássica do hinário */}
        <path
          d="M80 18C79 32 82 50 86 82L81 80L76 82C78 50 79 32 80 18Z"
          fill="#5B6852"
          fillOpacity="0.75"
        />
      </svg>
      <span className="ccb-hymnal-caption">Louvor e comunhão</span>
    </div>
  );
}

// 4. Fachada Arquitetônica Clássica da Casa de Oração CCB
export function CcbFacadeIllustration() {
  return (
    <div className="ccb-facade-wrap" aria-hidden="true">
      <svg className="ccb-facade-svg" viewBox="0 0 280 100" fill="none">
        {/* Céu sutil */}
        {/* Platibanda e Friso Superior Geométrico */}
        <rect x="30" y="24" width="220" height="6" fill="#EEF0F3" stroke="#8C939E" strokeWidth="0.9" />
        <rect x="40" y="16" width="200" height="8" fill="#F8F9FA" stroke="#8C939E" strokeWidth="0.9" />
        {/* Frontão clássico suave central */}
        <path d="M100 16L140 8L180 16Z" fill="#EEF0F3" stroke="#8C939E" strokeWidth="0.9" />

        {/* Corpo principal do edifício em branco limpo */}
        <rect x="42" y="30" width="196" height="58" fill="#FFFFFF" stroke="#8C939E" strokeWidth="0.9" />

        {/* Pilastras em relevo cinza claro */}
        <rect x="46" y="30" width="10" height="58" fill="#F0F2F5" stroke="#D8DCE2" strokeWidth="0.7" />
        <rect x="94" y="30" width="8" height="58" fill="#F0F2F5" stroke="#D8DCE2" strokeWidth="0.7" />
        <rect x="178" y="30" width="8" height="58" fill="#F0F2F5" stroke="#D8DCE2" strokeWidth="0.7" />
        <rect x="224" y="30" width="10" height="58" fill="#F0F2F5" stroke="#D8DCE2" strokeWidth="0.7" />

        {/* Janelas verticais com arcos suaves (laterais) */}
        <path
          d="M66 40C66 36 74 36 74 40V68H66V40Z"
          fill="#FAF9F6"
          stroke="#8C939E"
          strokeWidth="0.8"
        />
        <line x1="70" y1="37" x2="70" y2="68" stroke="#8C939E" strokeWidth="0.6" />
        <line x1="66" y1="52" x2="74" y2="52" stroke="#8C939E" strokeWidth="0.6" />

        <path
          d="M206 40C206 36 214 36 214 40V68H206V40Z"
          fill="#FAF9F6"
          stroke="#8C939E"
          strokeWidth="0.8"
        />
        <line x1="210" y1="37" x2="210" y2="68" stroke="#8C939E" strokeWidth="0.6" />
        <line x1="206" y1="52" x2="214" y2="52" stroke="#8C939E" strokeWidth="0.6" />

        {/* Porta Central Imponente com arco clássico */}
        <path
          d="M120 44C120 36 160 36 160 44V88H120V44Z"
          fill="#F6F7F9"
          stroke="#4A515D"
          strokeWidth="1"
        />
        <line x1="140" y1="38" x2="140" y2="88" stroke="#4A515D" strokeWidth="0.8" />
        <line x1="120" y1="56" x2="160" y2="56" stroke="#4A515D" strokeWidth="0.7" />

        {/* Degraus da entrada */}
        <rect x="112" y="88" width="56" height="3" fill="#EEF0F3" stroke="#8C939E" strokeWidth="0.7" />
        <rect x="108" y="91" width="64" height="3" fill="#E2E5EA" stroke="#8C939E" strokeWidth="0.7" />

        {/* Linha de base do solo */}
        <line x1="18" y1="94" x2="262" y2="94" stroke="#8C939E" strokeWidth="0.9" />
      </svg>
    </div>
  );
}

// 5. Silhueta da Irmandade e Comunhão
export function BrotherhoodSilhouette() {
  return (
    <div className="ccb-brotherhood-wrap" aria-hidden="true">
      <svg className="ccb-brotherhood-svg" viewBox="0 0 160 42" fill="none">
        {/* Silhuetas suaves em cinza arquitetônico e traço sutil */}
        {/* Figura 1 (Irmão à esquerda) */}
        <circle cx="34" cy="11" r="4.2" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />
        <path d="M25 36C25 24 43 24 43 36" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />

        {/* Figura 2 (Irmã com véu/vestimenta sóbria ao centro-esquerda) */}
        <circle cx="56" cy="12" r="4" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />
        <path d="M50 14C49 22 48 30 46 36H66C64 30 63 22 62 14" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />

        {/* Figura 3 (Irmão ao centro com hinário na mão) */}
        <circle cx="80" cy="10" r="4.3" stroke="#5B6852" strokeWidth="1.1" fill="#FAF9F6" />
        <path d="M70 36C70 23 90 23 90 36" stroke="#5B6852" strokeWidth="1.1" fill="#FAF9F6" />
        <rect x="76" y="22" width="8" height="6" rx="1" stroke="#5B6852" strokeWidth="0.8" fill="#FFFFFF" />

        {/* Figura 4 (Irmã ao centro-direita) */}
        <circle cx="104" cy="12" r="4" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />
        <path d="M98 14C97 22 96 30 94 36H114C112 30 111 22 110 14" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />

        {/* Figura 5 (Irmão à direita) */}
        <circle cx="126" cy="11" r="4.2" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />
        <path d="M117 36C117 24 135 24 135 36" stroke="#4A515D" strokeWidth="1" fill="#FAF9F6" />

        {/* Linha suave de união */}
        <line x1="16" y1="36" x2="144" y2="36" stroke="#8C939E" strokeWidth="0.75" strokeOpacity="0.45" />
      </svg>
      <span className="ccb-brotherhood-caption">União e comunhão da irmandade</span>
    </div>
  );
}

// 6. Selo de Marca d'água das Claves (Sol, Fá e Dó)
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

  // Clave de Dó
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

// 7. Todos os Instrumentos da Orquestra CCB (Cordas, Madeiras, Metais e Órgão)
export function OrchestraEnsemble() {
  const instruments = [
    {
      name: 'Violino',
      cat: 'Cordas',
      svg: (
        <svg viewBox="0 0 44 44" fill="none" className="inst-svg">
          <path
            d="M22 6V15M20 6H24M18.5 15C15.5 15 13.5 17.5 13.5 20C13.5 22 15.5 23 15.5 24.5C15.5 26 13 27.2 13 30.5C13 34 16.5 36.5 22 36.5C27.5 36.5 31 34 31 30.5C31 27.2 28.5 26 28.5 24.5C28.5 23 30.5 22 30.5 20C30.5 17.5 28.5 15 25.5 15H18.5Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="22" y1="15" x2="22" y2="33" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.7" />
          <path d="M18 24C19 25 19 26 18 27" stroke="currentColor" strokeWidth="0.8" />
          <path d="M26 24C25 25 25 26 26 27" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      )
    },
    {
      name: 'Viola',
      cat: 'Cordas',
      svg: (
        <svg viewBox="0 0 44 44" fill="none" className="inst-svg">
          <path
            d="M22 5V14M19.5 5H24.5M18 14C14.8 14 12.8 16.8 12.8 19.5C12.8 21.8 15 22.8 15 24.5C15 26.2 12.2 27.5 12.2 31C12.2 34.8 16 37.5 22 37.5C28 37.5 31.8 34.8 31.8 31C31.8 27.5 29 26.2 29 24.5C29 22.8 31.2 21.8 31.2 19.5C31.2 16.8 29.2 14 26 14H18Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="22" y1="14" x2="22" y2="34" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.7" />
        </svg>
      )
    },
    {
      name: 'Violoncelo',
      cat: 'Cordas',
      svg: (
        <svg viewBox="0 0 44 44" fill="none" className="inst-svg">
          <path
            d="M22 4V13M20 4H24M17.5 13C14 13.5 12 16 12 19C12 21.5 14.5 22.5 14.5 24.5C14.5 26.5 11.5 28 11.5 32C11.5 36.5 15.5 39 22 39C28.5 39 32.5 36.5 32.5 32C32.5 28 29.5 26.5 29.5 24.5C29.5 22.5 32 21.5 32 19C32 16 30 13.5 26.5 13H17.5Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="22" y1="39" x2="22" y2="43" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Contrabaixo',
      cat: 'Cordas',
      svg: (
        <svg viewBox="0 0 44 44" fill="none" className="inst-svg">
          <path
            d="M22 3V12M19 3H25M16.5 12C13 12.8 10.5 15.8 10.5 19.5C10.5 22.5 13.5 23.5 13.5 25.5C13.5 27.5 10 29.5 10 33.5C10 38.5 14.8 41 22 41C29.2 41 34 38.5 34 33.5C34 29.5 30.5 27.5 30.5 25.5C30.5 23.5 33.5 22.5 33.5 19.5C33.5 15.8 31 12.8 27.5 12H16.5Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="22" y1="41" x2="22" y2="44" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Flauta',
      cat: 'Madeiras',
      svg: (
        <svg viewBox="0 0 44 44" fill="none" className="inst-svg">
          <line x1="5" y1="30" x2="39" y2="14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="14" cy="25.8" r="1.1" fill="currentColor" />
          <circle cx="19" cy="23.4" r="1.1" fill="currentColor" />
          <circle cx="24" cy="21" r="1.1" fill="currentColor" />
          <circle cx="29" cy="18.6" r="1.1" fill="currentColor" />
          <circle cx="34" cy="16.2" r="1.1" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'Clarinete',
      cat: 'Madeiras',
      svg: (
        <svg viewBox="0 0 44 44" fill="none" className="inst-svg">
          <path d="M20 6H24L26 36L28 39H16L18 36L20 6Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          <circle cx="22" cy="14" r="1" fill="currentColor" />
          <circle cx="22" cy="19" r="1" fill="currentColor" />
          <circle cx="22" cy="24" r="1" fill="currentColor" />
          <circle cx="22" cy="29" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'Saxofone',
      cat: 'Madeiras',
      svg: (
        <svg viewBox="0 0 44 44" fill="none" className="inst-svg">
          <path
            d="M14 8L18 6L18 24C18 29 21 34 26 34C31 34 34 30 34 24V19L38 18V24C38 33 32 37 25 37C17 37 14 31 14 24V8Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="18" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.1" />
          <line x1="18" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth="1.1" />
          <line x1="18" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1.1" />
        </svg>
      )
    },
    {
      name: 'Trompete',
      cat: 'Metais',
      svg: (
        <svg viewBox="0 0 44 44" fill="none" className="inst-svg">
          <path d="M7 23H25L36 16V30L25 23" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 23V27C13 28.5 14.5 29.5 16 29.5H21C22.5 29.5 24 28.5 24 27V23" stroke="currentColor" strokeWidth="1.15" />
          <line x1="16" y1="19" x2="16" y2="23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="18.5" y1="19" x2="18.5" y2="23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="21" y1="19" x2="21" y2="23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Trombone',
      cat: 'Metais',
      svg: (
        <svg viewBox="0 0 44 44" fill="none" className="inst-svg">
          <path d="M6 18H28L38 13V25L28 20H12V24H32V26H10C8 26 6 24 6 22V18Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'Órgão',
      cat: 'Teclas',
      svg: (
        <svg viewBox="0 0 44 44" fill="none" className="inst-svg">
          {/* Caixa do órgão */}
          <rect x="6" y="10" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.2" />
          {/* Teclado manual */}
          <rect x="9" y="19" width="26" height="7" fill="#FAF9F6" stroke="currentColor" strokeWidth="0.8" />
          <line x1="14" y1="19" x2="14" y2="26" stroke="currentColor" strokeWidth="0.7" />
          <line x1="19" y1="19" x2="19" y2="26" stroke="currentColor" strokeWidth="0.7" />
          <line x1="24" y1="19" x2="24" y2="26" stroke="currentColor" strokeWidth="0.7" />
          <line x1="29" y1="19" x2="29" y2="26" stroke="currentColor" strokeWidth="0.7" />
          {/* Teclas pretas */}
          <rect x="12" y="19" width="2" height="4" fill="currentColor" />
          <rect x="17" y="19" width="2" height="4" fill="currentColor" />
          <rect x="22" y="19" width="2" height="4" fill="currentColor" />
          <rect x="27" y="19" width="2" height="4" fill="currentColor" />
          {/* Pedaleira inferior clássica */}
          <line x1="11" y1="30" x2="11" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <line x1="16" y1="30" x2="16" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <line x1="21" y1="30" x2="21" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <line x1="26" y1="30" x2="26" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <line x1="31" y1="30" x2="31" y2="34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="ccb-orchestra-grid" aria-hidden="true">
      {instruments.map((inst) => (
        <div key={inst.name} className="ccb-orchestra-card">
          <div className="inst-icon-wrap">{inst.svg}</div>
          <span className="inst-name">{inst.name}</span>
          <span className="inst-cat">{inst.cat}</span>
        </div>
      ))}
    </div>
  );
}

// 8. Barra Final de Partitura Musical (Dupla com Fermata)
export function FinalBarDivider() {
  return (
    <div className="ccb-final-bar-divider" aria-hidden="true">
      <span className="ccb-divider-rule" />
      <svg className="ccb-final-bar-svg" viewBox="0 0 90 32" fill="none">
        {/* Pauta */}
        <line x1="6" y1="9" x2="84" y2="9" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />
        <line x1="6" y1="14" x2="84" y2="14" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />
        <line x1="6" y1="19" x2="84" y2="19" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />
        <line x1="6" y1="24" x2="84" y2="24" stroke="currentColor" strokeOpacity="0.32" strokeWidth="0.8" />

        {/* Fermata suave sobre a barra final */}
        <path d="M40 6C40 2.5 50 2.5 50 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="45" cy="5.5" r="0.9" fill="currentColor" />

        {/* Barra dupla final */}
        <line x1="42" y1="9" x2="42" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="47" y1="9" x2="47" y2="24" stroke="currentColor" strokeWidth="2.8" />
      </svg>
      <span className="ccb-divider-rule" />
    </div>
  );
}
