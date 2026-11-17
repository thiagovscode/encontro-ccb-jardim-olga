import churchImg from '../assets/ccb-igreja.jpg';
import { EVENT_DATA } from '../data/eventData';

let cachedChurchImg = null;
let isImgLoading = false;

function loadChurchImage(callback) {
  if (cachedChurchImg && cachedChurchImg.complete) {
    callback(cachedChurchImg);
    return;
  }

  if (isImgLoading) return;
  isImgLoading = true;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = churchImg;
  img.onload = () => {
    cachedChurchImg = img;
    isImgLoading = false;
    callback(img);
  };
  img.onerror = () => {
    isImgLoading = false;
  };
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line.trim(), x, currentY);
      line = words[i] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line.trim()) {
    ctx.fillText(line.trim(), x, currentY);
  }
  return currentY;
}

export function renderShareCardCanvas(canvas, countdownState) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;

  // Fundo branco limpo com gradiente suave
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, w, h);

  const grad = ctx.createRadialGradient(w / 2, h * 0.35, 60, w / 2, h * 0.45, 780);
  grad.addColorStop(0, '#FFFFFF');
  grad.addColorStop(0.7, '#F7F8FA');
  grad.addColorStop(1, '#EEF0F3');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Moldura geométrica sóbria
  ctx.strokeStyle = '#8C939E';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(40, 40, w - 80, h - 80);

  ctx.strokeStyle = 'rgba(194, 166, 118, 0.45)';
  ctx.lineWidth = 1.2;
  ctx.strokeRect(52, 52, w - 104, h - 104);

  // Claves nos cantos superiores
  ctx.fillStyle = '#4A515D';
  ctx.font = '400 44px "Cormorant Garamond", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('𝄞', 85, 105);
  ctx.fillText('𝄢', w - 85, 105);

  // Eyebrow
  ctx.fillStyle = '#5B6852';
  ctx.font = '600 22px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('CONVITE ESPECIAL', w / 2, 112);

  // Título principal
  ctx.fillStyle = '#22262E';
  ctx.font = '600 58px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('ENCONTRO CCB', w / 2, 185);
  ctx.fillText('JARDIM OLGA', w / 2, 248);

  // Subtítulo
  ctx.fillStyle = '#4A515D';
  ctx.font = 'italic 400 28px "Cormorant Garamond", Georgia, serif';
  wrapText(ctx, `"${EVENT_DATA.subtitle}"`, w / 2, 305, w - 240, 38);

  // Desenho da Igreja CCB (imagem de referência) integrado ao cartão
  const drawChurch = (img) => {
    const imgW = 760;
    const imgH = 340;
    const imgX = (w - imgW) / 2;
    const imgY = 360;

    ctx.save();
    // Moldura com cantos arredondados
    ctx.beginPath();
    const r = 8;
    ctx.moveTo(imgX + r, imgY);
    ctx.lineTo(imgX + imgW - r, imgY);
    ctx.quadraticCurveTo(imgX + imgW, imgY, imgX + imgW, imgY + r);
    ctx.lineTo(imgX + imgW, imgY + imgH - r);
    ctx.quadraticCurveTo(imgX + imgW, imgY + imgH, imgX + imgW - r, imgY + imgH);
    ctx.lineTo(imgX + r, imgY + imgH);
    ctx.quadraticCurveTo(imgX, imgY + imgH, imgX, imgY + imgH - r);
    ctx.lineTo(imgX, imgY + r);
    ctx.quadraticCurveTo(imgX, imgY, imgX + r, imgY);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(img, imgX, imgY, imgW, imgH);
    ctx.restore();

    // Borda elegante ao redor da ilustração
    ctx.strokeStyle = '#8C939E';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(imgX, imgY, imgW, imgH);
  };

  if (cachedChurchImg && cachedChurchImg.complete) {
    drawChurch(cachedChurchImg);
  } else {
    loadChurchImage(() => {
      renderShareCardCanvas(canvas, countdownState);
    });
  }

  // Pauta musical sutil no divisor
  const staffY = 730;
  ctx.strokeStyle = 'rgba(140, 147, 158, 0.42)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(w / 2 - 200, staffY + i * 8);
    ctx.lineTo(w / 2 + 200, staffY + i * 8);
    ctx.stroke();
  }
  ctx.fillStyle = '#5B6852';
  ctx.font = '400 28px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('𝄞', w / 2 - 165, staffY + 28);
  ctx.fillText('𝄢', w / 2 + 165, staffY + 26);

  // Bloco do contador regressivo ao vivo
  const boxX = 110;
  const boxY = 795;
  const boxW = w - 220;
  const boxH = 245;

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(boxX, boxY, boxW, boxH);
  ctx.strokeStyle = '#8C939E';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(boxX, boxY, boxW, boxH);

  if (countdownState && countdownState.phase === 'upcoming') {
    ctx.fillStyle = '#7C8B72';
    ctx.font = '600 17px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('CONTAGEM REGRESSIVA PARA O ENCONTRO', w / 2, boxY + 44);

    const items = [
      { val: countdownState.days, label: 'DIAS' },
      { val: countdownState.hours, label: 'HORAS' },
      { val: countdownState.minutes, label: 'MINUTOS' }
    ];

    const colW = boxW / 3;
    items.forEach((item, idx) => {
      const cx = boxX + colW * idx + colW / 2;
      ctx.fillStyle = '#22262E';
      ctx.font = '600 80px "Cormorant Garamond", Georgia, serif';
      ctx.fillText(item.val, cx, boxY + 140);

      ctx.fillStyle = '#8C939E';
      ctx.font = '600 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(item.label, cx, boxY + 188);

      if (idx < items.length - 1) {
        ctx.strokeStyle = 'rgba(140, 147, 158, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(boxX + colW * (idx + 1), boxY + 70);
        ctx.lineTo(boxX + colW * (idx + 1), boxY + 200);
        ctx.stroke();
      }
    });
  } else {
    ctx.fillStyle = '#22262E';
    ctx.font = '600 38px "Cormorant Garamond", Georgia, serif';
    wrapText(
      ctx,
      countdownState ? countdownState.statusText : 'Hoje é o nosso grande encontro!',
      w / 2,
      boxY + 115,
      boxW - 80,
      48
    );
  }

  // Data e Horário (sem repetição de local)
  ctx.fillStyle = '#5B6852';
  ctx.font = '600 34px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(EVENT_DATA.dateHighlight, w / 2, 1085);

  ctx.fillStyle = '#4A515D';
  ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(EVENT_DATA.timeFormatted, w / 2, 1128);

  // Versículo Bíblico na base do cartão
  ctx.strokeStyle = 'rgba(140, 147, 158, 0.4)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 140, 1170);
  ctx.lineTo(w / 2 + 140, 1170);
  ctx.stroke();

  ctx.fillStyle = '#4A515D';
  ctx.font = 'italic 400 25px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(`"${EVENT_DATA.scripture.text}"`, w / 2, 1225);

  ctx.fillStyle = '#5B6852';
  ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(EVENT_DATA.scripture.reference.toUpperCase(), w / 2, 1264);
}
