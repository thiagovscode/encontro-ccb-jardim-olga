import churchSvg from '../assets/ccb-facade-minimal.svg';
import { EVENT_DATA } from '../data/eventData';

let cachedChurchImg = null;
let isImgLoading = false;

function loadChurchImage(callback) {
  if (cachedChurchImg && cachedChurchImg.complete && cachedChurchImg.naturalWidth > 0) {
    callback(cachedChurchImg);
    return;
  }

  if (isImgLoading) return;
  isImgLoading = true;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = churchSvg;
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

  // 1. Fundo Marfim Suave com Iluminação Central
  ctx.fillStyle = '#FAF8F4';
  ctx.fillRect(0, 0, w, h);

  const bgGrad = ctx.createRadialGradient(w / 2, h * 0.45, 100, w / 2, h * 0.5, 800);
  bgGrad.addColorStop(0, '#FFFFFF');
  bgGrad.addColorStop(0.6, '#FAF8F4');
  bgGrad.addColorStop(1, '#F2EEE6');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // 2. Moldura Dupla Clássica Minimalista
  ctx.strokeStyle = '#8C939E';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(36, 36, w - 72, h - 72);

  ctx.strokeStyle = 'rgba(194, 166, 118, 0.45)';
  ctx.lineWidth = 1;
  ctx.strokeRect(48, 48, w - 96, h - 96);

  // Cantoneiras refinadas nos 4 cantos
  const corners = [
    { x: 36, y: 36, dx: 1, dy: 1 },
    { x: w - 36, y: 36, dx: -1, dy: 1 },
    { x: 36, y: h - 36, dx: 1, dy: -1 },
    { x: w - 36, y: h - 36, dx: -1, dy: -1 }
  ];
  ctx.strokeStyle = '#4A515D';
  ctx.lineWidth = 1.5;
  corners.forEach((c) => {
    ctx.beginPath();
    ctx.moveTo(c.x, c.y + c.dy * 24);
    ctx.lineTo(c.x, c.y);
    ctx.lineTo(c.x + c.dx * 24, c.y);
    ctx.stroke();
  });

  // Claves decorativas sutis nos cantos superiores
  ctx.fillStyle = 'rgba(74, 81, 93, 0.55)';
  ctx.font = '400 36px "Cormorant Garamond", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('𝄞', 82, 92);
  ctx.fillText('𝄢', w - 82, 92);

  // 3. Estrela de 4 pontas no topo
  ctx.fillStyle = '#C2A676';
  ctx.font = '400 22px "Cormorant Garamond", serif';
  ctx.fillText('✦', w / 2, 90);

  // 4. Cabeçalho Editorial
  ctx.fillStyle = '#5B6852';
  ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('C O N V I T E   E S P E C I A L', w / 2, 126);

  ctx.fillStyle = '#22262E';
  ctx.font = '600 52px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('ENCONTRO CCB JARDIM OLGA', w / 2, 185);

  ctx.fillStyle = '#555E6B';
  ctx.font = 'italic 400 24px "Cormorant Garamond", Georgia, serif';
  wrapText(ctx, `"${EVENT_DATA.subtitle}"`, w / 2, 226, w - 240, 32);

  // 5. Ilustração Arquitetônica Vetorial Minimalista da Fachada CCB
  const drawChurchIllustration = (img) => {
    const imgW = 540;
    const imgH = 286;
    const imgX = (w - imgW) / 2;
    const imgY = 258;

    ctx.drawImage(img, imgX, imgY, imgW, imgH);
  };

  if (cachedChurchImg && cachedChurchImg.complete && cachedChurchImg.naturalWidth > 0) {
    drawChurchIllustration(cachedChurchImg);
  } else {
    loadChurchImage(() => {
      renderShareCardCanvas(canvas, countdownState);
    });
  }

  // 6. Contagem Regressiva no Estilo Minimalista (Caixinhas Clássicas)
  const startCountY = 578;

  // Estrela e título da contagem
  ctx.fillStyle = '#C2A676';
  ctx.font = '400 16px "Cormorant Garamond", serif';
  ctx.fillText('✦', w / 2, startCountY);

  ctx.fillStyle = '#8C8275';
  ctx.font = '500 15px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('C O N T A G E M   R E G R E S S I V A', w / 2, startCountY + 28);

  if (countdownState && countdownState.phase === 'upcoming') {
    const items = [
      { num: countdownState.days, label: 'DIAS' },
      { num: countdownState.hours, label: 'HORAS' },
      { num: countdownState.minutes, label: 'MINUTOS' },
      { num: countdownState.seconds, label: 'SEGUNDOS' }
    ];

    const boxW = 120;
    const boxH = 128;
    const gap = 16;
    const colonW = 18;
    const totalW = 4 * boxW + 3 * (gap * 2 + colonW);
    const startX = (w - totalW) / 2;
    const boxY = startCountY + 46;

    items.forEach((item, idx) => {
      const curX = startX + idx * (boxW + gap * 2 + colonW);

      // Caixa com borda hairline champagne
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(curX, boxY, boxW, boxH);
      ctx.strokeStyle = 'rgba(194, 166, 118, 0.55)';
      ctx.lineWidth = 1.2;
      ctx.strokeRect(curX, boxY, boxW, boxH);

      // Dígito grande slender
      ctx.fillStyle = '#22262E';
      ctx.font = '400 58px "Cormorant Garamond", Georgia, serif';
      ctx.textAlign = 'center';
      ctx.fillText(item.num, curX + boxW / 2, boxY + 84);

      // Label abaixo da caixa
      ctx.fillStyle = '#8C857B';
      ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(item.label, curX + boxW / 2, boxY + boxH + 26);

      // Dois pontos entre as caixas
      if (idx < items.length - 1) {
        ctx.fillStyle = '#C2A676';
        ctx.font = '400 28px "Cormorant Garamond", Georgia, serif';
        ctx.fillText(':', curX + boxW + gap + colonW / 2, boxY + boxH / 2 + 8);
      }
    });
  } else {
    ctx.fillStyle = '#22262E';
    ctx.font = '600 32px "Cormorant Garamond", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      countdownState ? countdownState.statusText : 'Hoje é o nosso grande encontro!',
      w / 2,
      startCountY + 95
    );
  }

  // 7. Data e Horário
  const infoY = 820;
  ctx.fillStyle = '#5B6852';
  ctx.font = '600 34px "Cormorant Garamond", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText(EVENT_DATA.dateHighlight, w / 2, infoY);

  ctx.fillStyle = '#4A515D';
  ctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(EVENT_DATA.timeFormatted, w / 2, infoY + 40);

  // 8. LOCAL: Chácara Sthefani em Destaque
  // Regra obrigatória: Somente o nome do local, sem exibir o endereço completo nesta imagem
  const localY = infoY + 115;
  ctx.strokeStyle = 'rgba(194, 166, 118, 0.4)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 140, localY - 24);
  ctx.lineTo(w / 2 + 140, localY - 24);
  ctx.stroke();

  ctx.fillStyle = '#22262E';
  ctx.font = '600 38px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(`Local: ${EVENT_DATA.venueName}`, w / 2, localY + 16);

  ctx.beginPath();
  ctx.moveTo(w / 2 - 140, localY + 38);
  ctx.lineTo(w / 2 + 140, localY + 38);
  ctx.stroke();

  // 9. Versículo Bíblico no Rodapé
  const verseY = 1110;
  // Pauta musical sutil como divisor
  ctx.strokeStyle = 'rgba(140, 147, 158, 0.3)';
  ctx.lineWidth = 0.8;
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(w / 2 - 160, verseY - 30 + i * 6);
    ctx.lineTo(w / 2 + 160, verseY - 30 + i * 6);
    ctx.stroke();
  }

  ctx.fillStyle = '#4A515D';
  ctx.font = 'italic 400 26px "Cormorant Garamond", Georgia, serif';
  wrapText(ctx, `"${EVENT_DATA.scripture.text}"`, w / 2, verseY + 28, w - 240, 36);

  ctx.fillStyle = '#5B6852';
  ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(EVENT_DATA.scripture.reference.toUpperCase(), w / 2, verseY + 115);
}
