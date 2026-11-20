import { useState } from 'react';
import { Check, Copy, Download, FolderOpen, MapPin, MessageCircle, Share2, X } from 'lucide-react';
import CalendarMenu from './CalendarMenu';
import InvitationCard from './InvitationCard';
import { generateInvitationCanvas } from '../utils/renderInvitationCanvas';

export default function HeroSection({ countdown }) {
  const [feedback, setFeedback] = useState('');
  const [previewModal, setPreviewModal] = useState(null); // { dataUrl, jpegBlob, pngBlob, mode, savedLocation }
  const [copied, setCopied] = useState(false);

  function canvasToBlob(canvas, type = 'image/jpeg', quality = 0.96) {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), type, quality);
    });
  }

  // Abre a janela nativa do Windows "Salvar como..." para o usuário escolher a pasta
  async function handleSaveAsDialog(blobToSave) {
    const blob = blobToSave || previewModal?.jpegBlob;
    if (!blob) return false;

    if (typeof window !== 'undefined' && 'showSaveFilePicker' in window) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: 'convite-encontro-ccb-jardim-olga.jpg',
          types: [
            {
              description: 'Imagem JPEG do Convite',
              accept: { 'image/jpeg': ['.jpg', '.jpeg'] }
            }
          ]
        });
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        setFeedback(`Imagem salva com sucesso em: ${handle.name}`);
        setPreviewModal((prev) =>
          prev ? { ...prev, savedLocation: `Salvo na pasta escolhida como "${handle.name}"` } : prev
        );
        return true;
      } catch (err) {
        if (err && err.name === 'AbortError') return false;
      }
    }

    // Fallback download direto na pasta Downloads do navegador
    triggerBrowserDownload(blob, 'convite-encontro-ccb-jardim-olga.jpg');
    return true;
  }

  function triggerBrowserDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  async function handleCopyImageToClipboard(pngBlobToCopy) {
    const blob = pngBlobToCopy || previewModal?.pngBlob;
    if (!blob) return false;
    try {
      if (navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([
          new window.ClipboardItem({ 'image/png': blob })
        ]);
        setCopied(true);
        setFeedback('Imagem copiada! Agora basta dar Ctrl+V na conversa do WhatsApp.');
        setTimeout(() => setCopied(false), 4000);
        return true;
      }
    } catch {
      // Clipboard API pode não estar disponível em contextos não-HTTPS
    }
    return false;
  }

  // Botão: BAIXAR IMAGEM DO CONVITE
  async function handleDownloadImage() {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    const canvas = generateInvitationCanvas(countdown);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.96);
    const [jpegBlob, pngBlob] = await Promise.all([
      canvasToBlob(canvas, 'image/jpeg', 0.96),
      canvasToBlob(canvas, 'image/png')
    ]);

    // Se o navegador suportar "Salvar Como..." (Chrome / Edge no Windows), abre o seletor de pastas
    if (typeof window !== 'undefined' && 'showSaveFilePicker' in window) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: 'convite-encontro-ccb-jardim-olga.jpg',
          types: [
            {
              description: 'Imagem JPEG do Convite',
              accept: { 'image/jpeg': ['.jpg', '.jpeg'] }
            }
          ]
        });
        const writable = await handle.createWritable();
        await writable.write(jpegBlob);
        await writable.close();

        setPreviewModal({
          dataUrl,
          jpegBlob,
          pngBlob,
          mode: 'download',
          savedLocation: `Arquivo "${handle.name}" salvo na pasta que você escolheu.`
        });
        setFeedback(`Imagem salva como "${handle.name}".`);
        return;
      } catch (err) {
        if (err && err.name === 'AbortError') return;
      }
    }

    // Caso contrário, baixa na pasta Downloads padrão e abre o modal mostrando onde foi salvo
    triggerBrowserDownload(jpegBlob, 'convite-encontro-ccb-jardim-olga.jpg');
    setPreviewModal({
      dataUrl,
      jpegBlob,
      pngBlob,
      mode: 'download',
      savedLocation: 'Salvo na pasta "Downloads" do seu aparelho como convite-encontro-ccb-jardim-olga.jpg'
    });
    setFeedback('Imagem baixada na sua pasta "Downloads".');
  }

  // Botão: COMPARTILHAR NO WHATSAPP
  async function handleShareWhatsApp() {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    const canvas = generateInvitationCanvas(countdown);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.96);
    const [jpegBlob, pngBlob] = await Promise.all([
      canvasToBlob(canvas, 'image/jpeg', 0.96),
      canvasToBlob(canvas, 'image/png')
    ]);

    const file = new File([jpegBlob], 'convite-encontro-ccb-jardim-olga.jpg', {
      type: 'image/jpeg'
    });

    // No celular (Android / iPhone): compartilha o arquivo JPEG diretamente no app do WhatsApp
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || '');
    if (isMobile && navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file]
        });
        setFeedback('Convite compartilhado no WhatsApp.');
        return;
      } catch (err) {
        if (err && err.name === 'AbortError') return;
      }
    }

    // No computador (Windows / Mac): copia a imagem para a área de transferência (Ctrl+V)
    // e abre o modal visual com a imagem pronta e botão para abrir o WhatsApp
    const didCopy = await handleCopyImageToClipboard(pngBlob);

    setPreviewModal({
      dataUrl,
      jpegBlob,
      pngBlob,
      mode: 'whatsapp',
      savedLocation: didCopy
        ? 'A imagem já foi COPIADA! Abra a conversa no WhatsApp e pressione Ctrl + V para colar.'
        : 'Clique em "Escolher Pasta para Salvar" ou copie a imagem abaixo para enviar no WhatsApp.'
    });
  }

  function handleOpenWhatsAppWeb() {
    const currentUrl =
      typeof window !== 'undefined' ? window.location.href.split('#')[0] : '';
    const cleanMsg = `Convite: Encontro CCB Jardim Olga — 21 de Novembro de 2026\n${currentUrl}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(cleanMsg)}`,
      '_blank',
      'noopener,noreferrer'
    );
  }

  return (
    <header id="convite" className="hero-master">
      <div className="hero-ambient-bg" aria-hidden="true" />

      <div className="container hero-master-container">
        {/* Cartão Oficial do Convite (Único em todo o site) */}
        <InvitationCard id="convite-card" countdown={countdown} />

        {/* Barra de Ações Rápidas Diretas */}
        <div className="master-hero-actions">
          <CalendarMenu />

          <div className="master-quick-buttons">
            <button
              type="button"
              className="btn btn-primary action-btn"
              onClick={handleShareWhatsApp}
            >
              <Share2 className="btn-icon" aria-hidden="true" />
              <span>COMPARTILHAR NO WHATSAPP</span>
            </button>

            <button
              type="button"
              className="btn btn-secondary action-btn"
              onClick={handleDownloadImage}
            >
              <Download className="btn-icon" aria-hidden="true" />
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

      {/* Modal Visual de Confirmação, Download e Envio para WhatsApp */}
      {previewModal && (
        <div
          className="invite-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-invite-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPreviewModal(null);
          }}
        >
          <div className="invite-modal-box">
            <button
              type="button"
              className="invite-modal-close"
              aria-label="Fechar janela"
              onClick={() => setPreviewModal(null)}
            >
              <X size={20} />
            </button>

            <h2 id="modal-invite-title" className="invite-modal-title">
              {previewModal.mode === 'whatsapp'
                ? 'Imagem Pronta para o WhatsApp'
                : 'Imagem do Convite Gerada'}
            </h2>

            <p className="invite-modal-status">{previewModal.savedLocation}</p>

            <div className="invite-modal-preview-wrap">
              <img
                src={previewModal.dataUrl}
                alt="Convite Encontro CCB Jardim Olga gerado em alta resolução"
                className="invite-modal-img"
              />
            </div>

            <div className="invite-modal-actions">
              <button
                type="button"
                className="btn btn-primary modal-action-btn"
                onClick={() => handleCopyImageToClipboard()}
              >
                {copied ? <Check className="btn-icon" /> : <Copy className="btn-icon" />}
                <span>
                  {copied
                    ? 'IMAGEM COPIADA! DÊ CTRL+V NO WHATSAPP'
                    : 'COPIAR IMAGEM (COLAR COM CTRL+V)'}
                </span>
              </button>

              <button
                type="button"
                className="btn btn-secondary modal-action-btn"
                onClick={() => handleSaveAsDialog()}
              >
                <FolderOpen className="btn-icon" />
                <span>ESCOLHER PASTA PARA SALVAR...</span>
              </button>

              <button
                type="button"
                className="btn btn-outline modal-action-btn"
                onClick={handleOpenWhatsAppWeb}
              >
                <MessageCircle className="btn-icon" />
                <span>ABRIR WHATSAPP WEB / APP</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
