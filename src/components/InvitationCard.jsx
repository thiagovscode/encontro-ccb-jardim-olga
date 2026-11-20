import { Calendar, Clock, MapPin } from 'lucide-react';
import {
  CcbChurchCenterpiece,
  ConcertCornerOrnament,
  OliveFoliageCorner,
  TopFiligreeOrnament
} from './CcbVisuals';

export default function InvitationCard({ id = 'convite-card', countdown, className = '' }) {
  const { phase, days, hours, minutes, seconds, statusText } = countdown || {};

  return (
    <article
      id={id}
      className={`native-invite-card ${className}`}
      aria-label="Convite Oficial — Encontro CCB Jardim Olga"
    >
      {/* Cantoneiras Clássicas Ornamentais nos 4 Cantos */}
      <ConcertCornerOrnament position="top-left" />
      <ConcertCornerOrnament position="top-right" />
      <ConcertCornerOrnament position="bottom-left" />
      <ConcertCornerOrnament position="bottom-right" />

      {/* Ramos Suaves de Oliveira nos Cantos Superiores */}
      <OliveFoliageCorner position="top-left" />
      <OliveFoliageCorner position="top-right" />

      {/* Topo: Filigrana Dourada */}
      <TopFiligreeOrnament />

      {/* Eyebrow: —— CONVITE ESPECIAL —— */}
      <div className="invite-eyebrow-line">
        <span className="eyebrow-rule" aria-hidden="true" />
        <span className="eyebrow-text">CONVITE ESPECIAL</span>
        <span className="eyebrow-rule" aria-hidden="true" />
      </div>

      {/* Título Principal: ENCONTRO CCB */}
      <h1 className="invite-main-title">ENCONTRO CCB</h1>

      {/* Ribbon Badge: JARDIM OLGA */}
      <div className="invite-ribbon-wrapper">
        <span className="invite-ribbon-flourish" aria-hidden="true">❧</span>
        <div className="invite-ribbon-badge">
          <span>JARDIM OLGA</span>
        </div>
        <span className="invite-ribbon-flourish" aria-hidden="true">☙</span>
      </div>

      {/* Subtítulo Poético */}
      <p className="invite-quote-subtitle">
        &ldquo;Um dia especial de comunhão, união e gratidão a Deus.&rdquo;
      </p>

      {/* Centro Arquitetônico & Musical da Fachada CCB */}
      <div className="invite-centerpiece-area">
        <CcbChurchCenterpiece />
      </div>

      {/* Bloco de Informações do Evento e Contagem */}
      <div className="invite-details-group">
        {/* 1. Card de Data */}
        <div className="invite-card-badge invite-card-badge--date">
          <Calendar className="badge-icon badge-icon--gold" aria-hidden="true" />
          <span className="badge-text">21 DE NOVEMBRO DE 2026</span>
        </div>

        {/* 2. Horário */}
        <div className="invite-time-rule-row">
          <span className="time-rule-line" aria-hidden="true" />
          <div className="time-rule-content">
            <Clock className="time-icon" aria-hidden="true" />
            <span>A partir das 11h30.</span>
          </div>
          <span className="time-rule-line" aria-hidden="true" />
        </div>

        {/* 3. Card de Local (Somente o nome da chácara, conforme regras) */}
        <div className="invite-card-badge invite-card-badge--venue">
          <MapPin className="badge-icon badge-icon--olive" aria-hidden="true" />
          <span className="badge-text">Local: Chácara Sthefani</span>
        </div>

        {/* 4. Bloco da Contagem Regressiva em Tempo Real */}
        <div id="contador" className="invite-countdown-block" aria-live="polite">
          <div className="countdown-pill-header">
            <span>CONTAGEM REGRESSIVA</span>
          </div>

          <div className="countdown-display-card">
            {phase === 'upcoming' ? (
              <div className="countdown-columns">
                {/* DIAS */}
                <div className="countdown-unit">
                  <span className="unit-number">{String(days ?? 0).padStart(2, '0')}</span>
                  <span className="unit-label">DIAS</span>
                </div>

                <div className="countdown-unit-divider" aria-hidden="true" />

                {/* HORAS */}
                <div className="countdown-unit">
                  <span className="unit-number">{String(hours ?? 0).padStart(2, '0')}</span>
                  <span className="unit-label">HORAS</span>
                </div>

                <div className="countdown-unit-divider" aria-hidden="true" />

                {/* MINUTOS */}
                <div className="countdown-unit">
                  <span className="unit-number">{String(minutes ?? 0).padStart(2, '0')}</span>
                  <span className="unit-label">MINUTOS</span>
                </div>

                <div className="countdown-unit-divider" aria-hidden="true" />

                {/* SEGUNDOS */}
                <div className="countdown-unit">
                  <span className="unit-number">{String(seconds ?? 0).padStart(2, '0')}</span>
                  <span className="unit-label">SEGUNDOS</span>
                </div>
              </div>
            ) : (
              <div className="countdown-live-status">
                <span>{statusText || 'Hoje é o grande encontro!'}</span>
              </div>
            )}
          </div>
        </div>

        {/* 5. Citação Bíblica: Salmos 133:1 */}
        <footer className="invite-scripture-footer">
          <blockquote className="scripture-verse">
            &ldquo;Oh! quão bom e quão suave é que os irmãos vivam em união.&rdquo;
          </blockquote>
          <div className="scripture-ref-row">
            <span className="scripture-rule" aria-hidden="true" />
            <cite className="scripture-ref">SALMOS 133:1</cite>
            <span className="scripture-rule" aria-hidden="true" />
          </div>
        </footer>
      </div>
    </article>
  );
}
