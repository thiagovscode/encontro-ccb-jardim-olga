import { useState } from 'react';
import { Download, Loader2, Share2 } from 'lucide-react';
import { toBlob, toPng } from 'html-to-image';
import { StaffClefDivider } from './CcbVisuals';
import InvitationCard from './InvitationCard';

export default function ShareWhatsAppSection({ countdown }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState('');

  // Captura o cartão oficial do convite em altíssima definição (retina 2x)
  async function getCardNode() {
    return (
      document.getElementById('convite-share-card') ||
      document.getElementById('convite-card')
    );
  }

  // Baixar imagem do convite em alta resolução PNG
  async function handleDownloadImage() {
    try {
      setIsProcessing(true);
      setFeedback('Gerando imagem em alta resolução...');

      const node = await getCardNode();
      if (!node) throw new Error('Card não encontrado');

      const dataUrl = await toPng(node, {
        pixelRatio: 2,
        cacheBust: true
      });

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'convite-encontro-ccb-jardim-olga.png';
      document.body.appendChild(link);
      link.click();
      link.remove();

      setFeedback('Imagem do convite salva com sucesso.');
    } catch (err) {
      console.error(err);
      setFeedback('Não foi possível gerar a imagem no momento.');
    } finally {
      setIsProcessing(false);
    }
  }

  // Compartilhar a imagem gerada diretamente no WhatsApp
  async function handleShareWhatsApp() {
    try {
      setIsProcessing(true);
      setFeedback('Preparando convite para envio...');

      const node = await getCardNode();
      if (!node) throw new Error('Card não encontrado');

      const blob = await toBlob(node, {
        pixelRatio: 2,
        cacheBust: true
      });

      if (!blob) throw new Error('Falha ao gerar blob');

      const file = new File([blob], 'convite-encontro-ccb-jardim-olga.png', {
        type: 'image/png'
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file]
        });
        setFeedback('Convite compartilhado com sucesso.');
        setIsProcessing(false);
        return;
      }

      // Se for desktop ou navegador sem suporte a compartilhamento de arquivos nativo:
      const dataUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'convite-encontro-ccb-jardim-olga.png';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(dataUrl);

      const currentUrl =
        typeof window !== 'undefined' ? window.location.href.split('#')[0] : '';
      const cleanMsg = `Convite: Encontro CCB Jardim Olga — 21 de Novembro de 2026\n${currentUrl}`;
      window.open(
        `https://wa.me/?text=${encodeURIComponent(cleanMsg)}`,
        '_blank',
        'noopener,noreferrer'
      );
      setFeedback('Imagem baixada e WhatsApp aberto para envio.');
    } catch (err) {
      if (err && err.name === 'AbortError') {
        setFeedback('');
        return;
      }
      console.error(err);
      setFeedback('Não foi possível compartilhar a imagem.');
    } finally {
      setIsProcessing(false);
    }
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
            Envie a arte oficial do convite para os irmãos ou baixe a imagem em seu aparelho.
          </p>
        </div>

        {/* Prévia Fiel do Cartão do Convite (Novo Design) */}
        <div className="share-showcase-container reveal">
          <div className="share-card-wrapper">
            <InvitationCard id="convite-share-card" countdown={countdown} />
          </div>

          {/* Grupo de Ações Equilibrado e Objetivo */}
          <div className="share-actions-group">
            <button
              type="button"
              className="btn btn-primary share-action-btn"
              onClick={handleShareWhatsApp}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <Loader2 className="btn-icon animate-spin" aria-hidden="true" />
              ) : (
                <Share2 className="btn-icon" aria-hidden="true" />
              )}
              <span>COMPARTILHAR NO WHATSAPP</span>
            </button>

            <button
              type="button"
              className="btn btn-secondary share-action-btn"
              onClick={handleDownloadImage}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <Loader2 className="btn-icon animate-spin" aria-hidden="true" />
              ) : (
                <Download className="btn-icon" aria-hidden="true" />
              )}
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
