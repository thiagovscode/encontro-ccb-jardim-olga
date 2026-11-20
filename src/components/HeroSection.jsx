import { useState } from 'react';
import { Download, Loader2, MapPin, Share2 } from 'lucide-react';
import { toBlob, toPng } from 'html-to-image';
import CalendarMenu from './CalendarMenu';
import InvitationCard from './InvitationCard';

export default function HeroSection({ countdown }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState('');

  // Baixar imagem do convite em alta resolução PNG
  async function handleDownloadImage() {
    try {
      setIsProcessing(true);
      setFeedback('Gerando imagem em alta resolução...');

      const node = document.getElementById('convite-card');
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

      const node = document.getElementById('convite-card');
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

      // Fallback para desktop ou navegadores sem compartilhamento de arquivos
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
    <header id="convite" className="hero-master">
      <div className="hero-ambient-bg" aria-hidden="true" />

      <div className="container hero-master-container">
        {/* Cartão Oficial do Convite (Único em todo o site) */}
        <InvitationCard id="convite-card" countdown={countdown} />

        {/* Barra de Ações Rápidas Diretas */}
        <div className="master-hero-actions">
          {/* Adicionar à Agenda */}
          <CalendarMenu />

          {/* Botões Principais de Compartilhamento e Ação */}
          <div className="master-quick-buttons">
            <button
              type="button"
              className="btn btn-primary action-btn"
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
              className="btn btn-secondary action-btn"
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

            <a href="#localizacao" className="btn btn-outline action-btn">
              <MapPin className="btn-icon" aria-hidden="true" />
              <span>COMO CHEGAR (MAPA)</span>
            </a>
          </div>

          {feedback && (
            <p className="share-feedback-toast" aria-live="polite">
              {feedback}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
