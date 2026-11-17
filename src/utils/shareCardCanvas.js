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

  // Fundo marfim suave com textura luminosa
  ctx.fillStyle = '#FAF9F6';
  ctx.fillRect(0, 0, w, h);

  const bgGrad = ctx.createRadialGradient(w / 2, h * 0.45, 80, w / 2, h * 0.5, 850);
  bgGrad.addColorStop(0, '#FFFFFF');
  bgGrad.addColorStop(0.7, '#F7F8FA');
  bgGrad.addColorStop(1, '#EEF0F3');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // Moldura dupla clássica e discreta
  ctx.strokeStyle = '#8C939E';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(36, 36, w - 72, h - 72);

  ctx.strokeStyle = 'rgba(194, 166, 118, 0.45)';
  ctx.lineWidth = 1.2;
  ctx.strokeRect(48, 48, w - 96, h - 96);

  // Cantoneiras arquitetônicas nos 4 cantos
  const corners = [
    { x: 36, y: 36, dx: 1, dy: 1 },
    { x: w - 36, y: 36, dx: -1, dy: 1 },
    { x: 36, y: h - 36, dx: 1, dy: -1 },
    { x: w - 36, y: h - 36, dx: -1, dy: -1 }
  ];
  ctx.strokeStyle = '#4A515D';
  ctx.lineWidth = 2;
  corners.forEach((c) => {
    ctx.beginPath();
    ctx.moveTo(c.x, c.y + c.dy * 26);
    ctx.lineTo(c.x, c.y);
    ctx.lineTo(c.x + c.dx * 26, c.y);
    ctx.stroke();
  });

  // Claves decorativas nos cantos
  ctx.fillStyle = '#4A515D';
  ctx.font = '400 40px "Cormorant Garamond", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('𝄞', 80, 96);
  ctx.fillText('𝄢', w - 80, 96);

  // 1. Cabeçalho do Convite
  ctx.fillStyle = '#5B6852';
  ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('CONVITE ESPECIAL', w / 2, 100);

  ctx.fillStyle = '#22262E';
  ctx.font = '600 54px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('ENCONTRO CCB JARDIM OLGA', w / 2, 165);

  ctx.fillStyle = '#4A515D';
  ctx.font = 'italic 400 27px "Cormorant Garamond", Georgia, serif';
  wrapText(ctx, `"${EVENT_DATA.subtitle}"`, w / 2, 215, w - 220, 36);

  // 2. Mesclagem da Ilustração da Igreja CCB com o Convite
  const drawBlendedChurch = (img) => {
    const imgW = 860;
    const imgH = 360;
    const imgX = (w - imgW) / 2;
    const imgY = 265;

    ctx.save();
    // Arco suave no topo da ilustração
    ctx.beginPath();
    const r = 10;
    ctx.moveTo(imgX + r, imgY);
    ctx.lineTo(imgX + imgW - r, imgY);
    ctx.quadraticCurveTo(imgX + imgW, imgY, imgX + imgW, imgY + r);
    ctx.lineTo(imgX + imgW, imgY + imgH);
    ctx.lineTo(imgX, imgY + imgH);
    ctx.lineTo(imgX, imgY + r);
    ctx.quadraticCurveTo(imgX, imgY, imgX + r, imgY);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(img, imgX, imgY, imgW, imgH);

    // Efeito de mesclagem suave na base (fadeout gradiente) para fundir perfeitamente com o convite
    const fadeGrad = ctx.createLinearGradient(0, imgY + imgH - 120, 0, imgY + imgH);
    fadeGrad.addColorStop(0, 'rgba(250, 249, 246, 0)');
    fadeGrad.addColorStop(0.55, 'rgba(250, 249, 246, 0.65)');
    fadeGrad.addColorStop(1, '#FAF9F6');
    ctx.fillStyle = fadeGrad;
    ctx.fillRect(imgX - 10, imgY + imgH - 130, imgW + 20, 140);

    ctx.restore();

    // Friso sutil e moldura ao redor da imagem mesclada
    ctx.strokeStyle = 'rgba(140, 147, 158, 0.45)';
    ctx.lineWidth = 1;
    ctx.strokeRect(imgX, imgY, imgW, imgH);
  };

  if (cachedChurchImg && cachedChurchImg.complete) {
    drawBlendedChurch(cachedChurchImg);
  } else {
    loadChurchImage(() => {
      renderShareCardCanvas(canvas, countdownState);
    });
  }

  // Pauta musical sutil no divisor
  const staffY = 645;
  ctx.strokeStyle = 'rgba(140, 147, 158, 0.35)';
  ctx.lineWidth = 0.9;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(w / 2 - 200, staffY + i * 8);
    ctx.lineTo(w / 2 + 200, staffY + i * 8);
    ctx.stroke();
  }
  ctx.fillStyle = '#5B6852';
  ctx.font = '400 26px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('𝄞', w / 2 - 165, staffY + 28);
  ctx.fillText('𝄢', w / 2 + 165, staffY + 26);

  // 3. Bloco Elegante da Contagem Regressiva
  const boxX = 120;
  const boxY = 705;
  const boxW = w - 240;
  const boxH = 220;

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(boxX, boxY, boxW, boxH);
  ctx.strokeStyle = '#8C939E';
  ctx.lineWidth = 1.4;
  ctx.strokeRect(boxX, boxY, boxW, boxH);

  // Friso interno dourado suave
  ctx.strokeStyle = 'rgba(194, 166, 118, 0.35)';
  ctx.lineWidth = 1;
  ctx.strokeRect(boxX + 5, boxY + 5, boxW - 10, boxH - 10);

  if (countdownState && countdownState.phase === 'upcoming') {
    ctx.fillStyle = '#7C8B72';
    ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('CONTAGEM REGRESSIVA PARA O ENCONTRO', w / 2, boxY + 40);

    const items = [
      { val: countdownState.days, label: 'DIAS' },
      { val: countdownState.hours, label: 'HORAS' },
      { val: countdownState.minutes, label: 'MINUTOS' }
    ];

    const colW = boxW / 3;
    items.forEach((item, idx) => {
      const cx = boxX + colW * idx + colW / 2;
      ctx.fillStyle = '#22262E';
      ctx.font = '600 76px "Cormorant Garamond", Georgia, serif';
      ctx.fillText(item.val, cx, boxY + 128);

      ctx.fillStyle = '#8C939E';
      ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(item.label, cx, boxY + 172);

      if (idx < items.length - 1) {
        ctx.strokeStyle = 'rgba(140, 147, 158, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(boxX + colW * (idx + 1), boxY + 65);
        ctx.lineTo(boxX + colW * (idx + 1), boxY + 185);
        ctx.stroke();
      }
    });
  } else {
    ctx.fillStyle = '#22262E';
    ctx.font = '600 36px "Cormorant Garamond", Georgia, serif';
    wrapText(
      ctx,
      countdownState ? countdownState.statusText : 'Hoje é o nosso grande encontro!',
      w / 2,
      boxY + 105,
      boxW - 80,
      44
    );
  }

  // 4. Data, Horário e LOCAL (exclusivo nessa imagem de convite)
  ctx.fillStyle = '#5B6852';
  ctx.font = '600 34px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(EVENT_DATA.dateHighlight, w / 2, 975);

  ctx.fillStyle = '#4A515D';
  ctx.font = '500 23px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(EVENT_DATA.timeFormatted, w / 2, 1018);

  // LOCAL: Chácara Sthefani em destaque elegante
  ctx.fillStyle = '#22262E';
  ctx.font = '600 36px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(`Local: ${EVENT_DATA.venueName}`, w / 2, 1080);

  // 5. Versículo Bíblico na base do cartão
  ctx.strokeStyle = 'rgba(140, 147, 158, 0.4)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 130, 1140);
  ctx.lineTo(w / 2 + 130, 1140);
  ctx.stroke();

  ctx.fillStyle = '#4A515D';
  ctx.font = 'italic 400 26px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(`"${EVENT_DATA.scripture.text}"`, w / 2, 1205);

  ctx.fillStyle = '#5B6852';
  ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(EVENT_DATA.scripture.reference.toUpperCase(), w / 2, 1248);
}
