import { EVENT_DATA } from '../data/eventData';
import {
  BrotherhoodSilhouette,
  OpenHymnalIllustration,
  OrchestraEnsemble,
  StaffClefDivider
} from './CcbVisuals';

export default function MessageSection() {
  return (
    <section id="mensagem" className="section section-message" aria-labelledby="message-heading">
      <div className="container">
        <div className="message-card reveal">
          <p className="eyebrow">Comunhão e Gratidão</p>
          <h2 id="message-heading" className="section-title">
            Uma Palavra aos Irmãos
          </h2>

          <StaffClefDivider />

          {/* Ilustração artística do Hinário Aberto CCB */}
          <OpenHymnalIllustration />

          <div className="message-body">
            {EVENT_DATA.messageParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="scripture-box">
            <p className="scripture-text">"{EVENT_DATA.scripture.text}"</p>
            <footer className="scripture-ref">{EVENT_DATA.scripture.reference}</footer>
          </blockquote>

          {/* Silhueta da irmandade em comunhão */}
          <BrotherhoodSilhouette />

          {/* Orquestra CCB com todos os instrumentos tradicionais */}
          <div className="orchestra-section-block">
            <div className="orchestra-intro">
              <span className="orchestra-badge">Tradição Musical e Louvor</span>
              <h3 className="orchestra-title">Instrumentos da Orquestra</h3>
              <p className="orchestra-caption">
                Cordas, Madeiras, Metais e Órgão que entoam os louvores nas congregações
              </p>
            </div>
            <OrchestraEnsemble />
          </div>
        </div>
      </div>
    </section>
  );
}
