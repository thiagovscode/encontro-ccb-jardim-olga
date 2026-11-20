import { useState } from 'react';
import { Download, Share2 } from 'lucide-react';
import masterInvitationImg from '../assets/ccb-convite-oficial.jpg';
import { ConcertCornerOrnament, StaffClefDivider } from './CcbVisuals';

export default function ShareWhatsAppSection() {
  const [feedback, setFeedback] = useState('');

  // Baixar imagem oficial do convite em alta resolução
  function handleDownloadImage() {
    const link = document.createElement('a');
    link.href = masterInvitationImg;
    link.download = 'convite-encontro-ccb-jardim-olga.jpg';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setFeedback('Imagem do convite baixada com sucesso.');
  }

  // Compartilhar estritamente a imagem no WhatsApp (sem texto longo desnecessário)
  async function handleShareWhatsApp() {
    try {
      const response = await fetch(masterInvitationImg);
      const blob = await response.blob();
      const file = new File([blob], 'convite-encontro-ccb-jardim-olga.jpg', {
        type: 'image/jpeg'
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file]
        });
        setFeedback('Convite compartilhado com sucesso.');
        return;
      }
    } catch (err) {
      if (err && err.name === 'AbortError') return;
    }

    // Se o navegador não suportar compartilhamento direto de arquivos (ex: desktop)
    const currentUrl =
      typeof window !== 'undefined' ? window.location.href.split('#')[0] : '';
    const cleanMsg = `Convite: Encontro CCB Jardim Olga — 21 de Novembro de 2026\n${currentUrl}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(cleanMsg)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setFeedback('Abrindo WhatsApp...');
  }

  return (
    <section id="compartilhar" className="section section-share" aria-labelledby="share-heading">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Compartilhar Convite</p>
          <h2 id="share-heading" className="section-title">
            Convite para WhatsApp
          </h2>
          <StaffClefDivider />
          <p className="section-caption">
            Envie a arte oficial do convite para os irmãos ou salve a imagem em seu aparelho.
          </p>
        </div>

        {/* Showcase Centralizado e Elegante do Convite */}
        <div className="share-showcase-container reveal">
          <div className="share-showcase-frame">
            {/* Cantoneiras Clássicas Ornamentais */}
            <ConcertCornerOrnament position="top-left" />
            <ConcertCornerOrnament position="top-right" />
            <ConcertCornerOrnament position="bottom-left" />
            <ConcertCornerOrnament position="bottom-right" />

            <img
              src={masterInvitationImg}
              alt="Arte Oficial do Convite — Encontro CCB Jardim Olga"
              className="share-showcase-image"
              loading="lazy"
            />
          </div>

          {/* Grupo de Ações Equilibrado e Objetivo */}
          <div className="share-actions-group">
            <button
              type="button"
              className="btn btn-primary share-action-btn"
              onClick={handleShareWhatsApp}
            >
              <Share2 className="btn-icon" aria-hidden="true" />
              <span>COMPARTILHAR NO WHATSAPP</span>
            </button>

            <button
              type="button"
              className="btn btn-secondary share-action-btn"
              onClick={handleDownloadImage}
            >
              <Download className="btn-icon" aria-hidden="true" />
              <span>BAIXAR IMAGEM DO CONVITE</span>
            </button>
          </div>

          {feedback && (
            <p className="share-feedback-toast" aria-live="polite">
              {feedback}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
