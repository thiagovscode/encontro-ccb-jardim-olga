import { useEffect, useRef, useState } from 'react';
import { Download, MessageCircle, Share2 } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { renderShareCardCanvas } from '../utils/shareCardCanvas';
import { StaffClefDivider } from './CcbVisuals';

export default function ShareWhatsAppSection({ countdown }) {
  const canvasRef = useRef(null);
  const [feedback, setFeedback] = useState('');

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

  const whatsappMessage = [
    `*${EVENT_DATA.title}*`,
    `"${EVENT_DATA.subtitle}"`,
    '',
    `Data: ${EVENT_DATA.dateFormatted}`,
    `Horário: ${EVENT_DATA.timeFormatted}`,
    '',
    `Confira o convite: ${currentUrl}`
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
    setFeedback('Imagem do convite salva.');
  }

  // Compartilha estritamente apenas a imagem, sem texto adicional
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
            files: [file]
          });
          setFeedback('Convite compartilhado com sucesso.');
          return;
        } catch (err) {
          if (err && err.name === 'AbortError') return;
        }
      }

      triggerDownload();
      setFeedback('Imagem baixada para você enviar no WhatsApp.');
    }, 'image/png');
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
        </div>

        <div className="share-card reveal">
          <div className="share-preview-wrap">
            <canvas
              ref={canvasRef}
              className="share-canvas"
              width={1080}
              height={1350}
              aria-label="Prévia do cartão digital de convite mesclado com a igreja CCB"
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

              <a
                href={whatsappHref}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="btn-icon" aria-hidden="true" />
                <span>COMPARTILHAR NO WHATSAPP</span>
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
