import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Download, MessageCircle, Share2 } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { renderShareCardCanvas } from '../utils/shareCardCanvas';
import { ClefWatermark, StaffClefDivider } from './CcbVisuals';

export default function ShareWhatsAppSection({ countdown }) {
  const canvasRef = useRef(null);
  const [feedback, setFeedback] = useState('');
  const [copied, setCopied] = useState(false);

  const { phase, days, hours, minutes } = countdown;

  useEffect(() => {
    const draw = () => renderShareCardCanvas(canvasRef.current, countdown);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(draw);
    } else {
      draw();
    }
  }, [phase, days, hours, minutes]);

  const currentUrl =
    typeof window !== 'undefined' ? window.location.href.split('#')[0] : '';

  // Mensagem bem formatada e elegante para o WhatsApp
  const whatsappMessage = [
    `*${EVENT_DATA.title}*`,
    `"${EVENT_DATA.subtitle}"`,
    '',
    `Data: ${EVENT_DATA.dateFormatted}`,
    `Horário: ${EVENT_DATA.timeFormatted}`,
    '',
    `Acesse o convite e confira os detalhes:`,
    currentUrl
  ].join('\n');

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

  function triggerDownload() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    renderShareCardCanvas(canvas, countdown);
    const link = document.createElement('a');
    link.download = 'convite-encontro-ccb-jardim-olga.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  function handleDownload() {
    triggerDownload();
    setFeedback('Imagem do convite salva. Você já pode enviá-la aos irmãos pelo WhatsApp.');
  }

  async function handleCopyText() {
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      setCopied(true);
      setFeedback('Texto do convite copiado! Você já pode colar na conversa.');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setFeedback('Não foi possível copiar automaticamente no navegador.');
    }
  }

  function handleShareImage() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    renderShareCardCanvas(canvas, countdown);

    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], 'convite-encontro-ccb-jardim-olga.png', {
        type: 'image/png'
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            title: EVENT_DATA.shortTitle,
            text: whatsappMessage,
            files: [file]
          });
          setFeedback('Convite compartilhado com sucesso.');
          return;
        } catch (err) {
          if (err && err.name === 'AbortError') return;
        }
      }

      triggerDownload();
      setFeedback('Imagem baixada! Você pode anexá-la no WhatsApp Web ou pelo celular.');
    }, 'image/png');
  }

  return (
    <section id="compartilhar" className="section section-share" aria-labelledby="share-heading">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Compartilhe com a Irmandade</p>
          <h2 id="share-heading" className="section-title">
            Convite para WhatsApp
          </h2>
          <p className="section-caption">
            Gere uma imagem atualizada com a contagem regressiva, as claves e a fachada da igreja para enviar aos irmãos.
          </p>
          <StaffClefDivider />
        </div>

        <div className="share-card reveal">
          <div className="card-corner card-corner--left" aria-hidden="true">
            <ClefWatermark type="treble" />
          </div>
          <div className="card-corner card-corner--right" aria-hidden="true">
            <ClefWatermark type="bass" />
          </div>

          <div className="share-preview-wrap">
            <canvas
              ref={canvasRef}
              className="share-canvas"
              width={1080}
              height={1350}
              aria-label="Prévia do cartão digital de convite com contador regressivo e elementos CCB"
            />
          </div>

          <div className="share-actions-col">
            <div className="share-actions">
              <button type="button" className="btn btn-primary" onClick={handleShareImage}>
                <Share2 className="btn-icon" aria-hidden="true" />
                <span>COMPARTILHAR IMAGEM NO WHATSAPP</span>
              </button>

              <button type="button" className="btn btn-secondary" onClick={handleDownload}>
                <Download className="btn-icon" aria-hidden="true" />
                <span>BAIXAR IMAGEM DO CONVITE</span>
              </button>

              <button type="button" className="btn btn-outline" onClick={handleCopyText}>
                {copied ? (
                  <Check className="btn-icon" aria-hidden="true" />
                ) : (
                  <Copy className="btn-icon" aria-hidden="true" />
                )}
                <span>{copied ? 'MENSAGEM COPIADA!' : 'COPIAR TEXTO DO CONVITE'}</span>
              </button>

              <a
                href={whatsappHref}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="btn-icon" aria-hidden="true" />
                <span>Abrir conversa no WhatsApp</span>
              </a>
            </div>

            <p className="share-feedback" aria-live="polite">
              {feedback}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
