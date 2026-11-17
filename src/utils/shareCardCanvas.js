import masterInvitationImg from '../assets/ccb-convite-oficial.jpg';
import { EVENT_DATA } from '../data/eventData';

let cachedMasterImg = null;
let isImgLoading = false;

function loadMasterImage(callback) {
  if (cachedMasterImg && cachedMasterImg.complete && cachedMasterImg.naturalWidth > 0) {
    callback(cachedMasterImg);
    return;
  }

  if (isImgLoading) return;
  isImgLoading = true;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = masterInvitationImg;
  img.onload = () => {
    cachedMasterImg = img;
    isImgLoading = false;
    callback(img);
  };
  img.onerror = () => {
    isImgLoading = false;
  };
}

export function renderShareCardCanvas(canvas, countdownState) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Resolução nítida em alta definição baseada no layout do convite oficial (768 x 1024)
  const targetW = 1152;
  const targetH = 1536;

  if (canvas.width !== targetW || canvas.height !== targetH) {
    canvas.width = targetW;
    canvas.height = targetH;
  }

  const w = canvas.width;
  const h = canvas.height;
  const scale = w / 768; // Escala proporcional exata de 1.5x

  const drawCardContent = (img) => {
    // 1. Desenha a obra de arte oficial do convite
    ctx.drawImage(img, 0, 0, w, h);

    // 2. Atualização Dinâmica da Caixa de Contagem Regressiva
    if (countdownState && countdownState.phase === 'upcoming') {
      const boxX = 176 * scale;
      const boxY = 720 * scale;
      const boxW = 434 * scale;
      const boxH = 72 * scale;
      const cornerRadius = 14 * scale;

      // Fundo suave da caixa interna
      ctx.save();
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(boxX, boxY, boxW, boxH, cornerRadius);
      } else {
        ctx.rect(boxX, boxY, boxW, boxH);
      }
      ctx.fillStyle = '#FDFCFA';
      ctx.fill();

      // Borda dourada acetinada
      ctx.strokeStyle = '#D4C29E';
      ctx.lineWidth = 1.3 * scale;
      ctx.stroke();

      // Divisórias verticais entre as 4 colunas
      const colW = boxW / 4;
      ctx.strokeStyle = '#E5D8C3';
      ctx.lineWidth = 1 * scale;
      for (let i = 1; i < 4; i++) {
        const divX = boxX + colW * i;
        ctx.beginPath();
        ctx.moveTo(divX, boxY + 8 * scale);
        ctx.lineTo(divX, boxY + boxH - 8 * scale);
        ctx.stroke();
      }

      // 4 Colunas com os números dinâmicos em tempo real
      const values = [
        { num: String(countdownState.days).padStart(2, '0'), label: 'DIAS' },
        { num: String(countdownState.hours).padStart(2, '0'), label: 'HORAS' },
        { num: String(countdownState.minutes).padStart(2, '0'), label: 'MINUTOS' },
        { num: String(countdownState.seconds).padStart(2, '0'), label: 'SEGUNDOS' }
      ];

      ctx.textAlign = 'center';
      values.forEach((val, idx) => {
        const colCenter = boxX + colW * idx + colW / 2;

        // Dígitos em Cormorant Garamond nobre
        ctx.fillStyle = '#1F242B';
        ctx.font = `600 ${36 * scale}px "Cormorant Garamond", Georgia, serif`;
        ctx.fillText(val.num, colCenter, boxY + 44 * scale);

        // Rótulos em caixa alta com tracking
        ctx.fillStyle = '#4A5260';
        ctx.font = `600 ${9.5 * scale}px "Plus Jakarta Sans", -apple-system, sans-serif`;
        ctx.fillText(val.label, colCenter, boxY + 62 * scale);
      });

      ctx.restore();
    } else if (countdownState && countdownState.phase !== 'upcoming') {
      // Estado de evento em andamento ou concluído
      const boxX = 176 * scale;
      const boxY = 720 * scale;
      const boxW = 434 * scale;
      const boxH = 72 * scale;
      const cornerRadius = 14 * scale;

      ctx.save();
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(boxX, boxY, boxW, boxH, cornerRadius);
      } else {
        ctx.rect(boxX, boxY, boxW, boxH);
      }
      ctx.fillStyle = '#FDFCFA';
      ctx.fill();
      ctx.strokeStyle = '#D4C29E';
      ctx.lineWidth = 1.3 * scale;
      ctx.stroke();

      ctx.fillStyle = '#1F242B';
      ctx.font = `600 ${20 * scale}px "Cormorant Garamond", Georgia, serif`;
      ctx.textAlign = 'center';
      ctx.fillText(countdownState.statusText || 'Hoje é o nosso grande encontro!', boxX + boxW / 2, boxY + 44 * scale);
      ctx.restore();
    }
  };

  if (cachedMasterImg && cachedMasterImg.complete && cachedMasterImg.naturalWidth > 0) {
    drawCardContent(cachedMasterImg);
  } else {
    loadMasterImage(() => {
      renderShareCardCanvas(canvas, countdownState);
    });
  }
}
