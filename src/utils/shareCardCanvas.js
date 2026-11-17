import { EVENT_DATA } from '../data/eventData';

function drawOliveSprig(ctx, x, y, scaleX, scaleY) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scaleX, scaleY);
  ctx.strokeStyle = 'rgba(82, 94, 71, 0.45)';
  ctx.fillStyle = 'rgba(122, 134, 110, 0.22)';
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(45, 22, 95, 75);
  ctx.stroke();

  const leaves = [
    { cx: 28, cy: 14, angle: -0.45, rx: 16, ry: 6 },
    { cx: 52, cy: 32, angle: 0.75, rx: 16, ry: 6 },
    { cx: 68, cy: 48, angle: -0.35, rx: 15, ry: 5.5 },
    { cx: 88, cy: 68, angle: 0.6, rx: 14, ry: 5 }
  ];

  leaves.forEach((leaf) => {
    ctx.save();
    ctx.translate(leaf.cx, leaf.cy);
    ctx.rotate(leaf.angle);
    ctx.beginPath();
    ctx.ellipse(0, 0, leaf.rx, leaf.ry, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  });

  ctx.restore();
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

  ctx.fillStyle = '#FAF8F4';
  ctx.fillRect(0, 0, w, h);

  const grad = ctx.createRadialGradient(w / 2, h * 0.35, 60, w / 2, h * 0.45, 760);
  grad.addColorStop(0, 'rgba(255, 253, 249, 0.95)');
  grad.addColorStop(1, 'rgba(242, 236, 224, 0.65)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Moldura dupla clássica em dourado champagne
  ctx.strokeStyle = '#B89F72';
  ctx.lineWidth = 3;
  ctx.strokeRect(48, 48, w - 96, h - 96);

  ctx.strokeStyle = 'rgba(184, 159, 114, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(66, 66, w - 132, h - 132);

  drawOliveSprig(ctx, 84, 84, 1, 1);
  drawOliveSprig(ctx, w - 84, 84, -1, 1);
  drawOliveSprig(ctx, 84, h - 84, 1, -1);
  drawOliveSprig(ctx, w - 84, h - 84, -1, -1);

  ctx.textAlign = 'center';

  ctx.fillStyle = '#525E47';
  ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('CONVITE ESPECIAL', w / 2, 170);

  ctx.fillStyle = '#2B2D28';
  ctx.font = '600 62px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('ENCONTRO CCB', w / 2, 255);
  ctx.fillText('JARDIM OLGA', w / 2, 325);

  ctx.fillStyle = '#4D5148';
  ctx.font = 'italic 400 32px "Cormorant Garamond", Georgia, serif';
  wrapText(ctx, `"${EVENT_DATA.subtitle}"`, w / 2, 395, w - 220, 44);

  ctx.strokeStyle = 'rgba(184, 159, 114, 0.6)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 140, 485);
  ctx.lineTo(w / 2 + 140, 485);
  ctx.stroke();

  // Bloco do contador ao vivo
  const boxX = 120;
  const boxY = 535;
  const boxW = w - 240;
  const boxH = 260;

  ctx.fillStyle = '#FFFDF9';
  ctx.fillRect(boxX, boxY, boxW, boxH);
  ctx.strokeStyle = 'rgba(184, 159, 114, 0.55)';
  ctx.lineWidth = 2;
  ctx.strokeRect(boxX, boxY, boxW, boxH);

  if (countdownState && countdownState.phase === 'upcoming') {
    ctx.fillStyle = '#70746A';
    ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('CONTAGEM REGRESSIVA', w / 2, boxY + 54);

    const items = [
      { val: countdownState.days, label: 'DIAS' },
      { val: countdownState.hours, label: 'HORAS' },
      { val: countdownState.minutes, label: 'MINUTOS' }
    ];

    const colW = boxW / 3;
    items.forEach((item, idx) => {
      const cx = boxX + colW * idx + colW / 2;
      ctx.fillStyle = '#525E47';
      ctx.font = '600 84px "Cormorant Garamond", Georgia, serif';
      ctx.fillText(item.val, cx, boxY + 155);

      ctx.fillStyle = '#70746A';
      ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(item.label, cx, boxY + 205);

      if (idx < items.length - 1) {
        ctx.strokeStyle = 'rgba(184, 159, 114, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(boxX + colW * (idx + 1), boxY + 85);
        ctx.lineTo(boxX + colW * (idx + 1), boxY + 215);
        ctx.stroke();
      }
    });
  } else {
    ctx.fillStyle = '#525E47';
    ctx.font = '600 42px "Cormorant Garamond", Georgia, serif';
    wrapText(
      ctx,
      countdownState ? countdownState.statusText : 'Hoje é o nosso grande encontro!',
      w / 2,
      boxY + 125,
      boxW - 80,
      52
    );
  }

  // Informações do evento
  ctx.fillStyle = '#525E47';
  ctx.font = '600 38px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(EVENT_DATA.dateHighlight, w / 2, 885);

  ctx.fillStyle = '#2B2D28';
  ctx.font = '500 28px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('A partir das 11h30', w / 2, 938);

  ctx.fillStyle = '#2B2D28';
  ctx.font = '600 32px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(EVENT_DATA.venueName, w / 2, 1005);

  ctx.fillStyle = '#4D5148';
  ctx.font = '400 24px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Estrada Sete Voltas, Franco da Rocha - SP', w / 2, 1048);

  // Versículo bíblico
  ctx.strokeStyle = 'rgba(184, 159, 114, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 120, 1108);
  ctx.lineTo(w / 2 + 120, 1108);
  ctx.stroke();

  ctx.fillStyle = '#4D5148';
  ctx.font = 'italic 400 29px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(`"${EVENT_DATA.scripture.text}"`, w / 2, 1168);

  ctx.fillStyle = '#525E47';
  ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(EVENT_DATA.scripture.reference.toUpperCase(), w / 2, 1212);
}
