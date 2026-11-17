import { EVENT_DATA } from '../data/eventData';

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

  // Fundo branco limpo com textura sutil em off-white e cinza arquitetônico
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, w, h);

  const grad = ctx.createRadialGradient(w / 2, h * 0.35, 60, w / 2, h * 0.45, 780);
  grad.addColorStop(0, '#FFFFFF');
  grad.addColorStop(0.65, '#F8F9FA');
  grad.addColorStop(1, '#EEF0F3');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Moldura dupla geométrica inspirada nos frisos das casas de oração CCB
  // Moldura externa em cinza arquitetônico
  ctx.strokeStyle = '#8C939E';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(44, 44, w - 88, h - 88);

  // Moldura interna em champagne/dourado suave
  ctx.strokeStyle = 'rgba(194, 166, 118, 0.55)';
  ctx.lineWidth = 1.25;
  ctx.strokeRect(58, 58, w - 116, h - 116);

  // Cantoneiras arquitetônicas sutis
  const corners = [
    { x: 44, y: 44, dx: 1, dy: 1 },
    { x: w - 44, y: 44, dx: -1, dy: 1 },
    { x: 44, y: h - 44, dx: 1, dy: -1 },
    { x: w - 44, y: h - 44, dx: -1, dy: -1 }
  ];
  ctx.strokeStyle = '#4A515D';
  ctx.lineWidth = 2;
  corners.forEach((c) => {
    ctx.beginPath();
    ctx.moveTo(c.x, c.y + c.dy * 28);
    ctx.lineTo(c.x, c.y);
    ctx.lineTo(c.x + c.dx * 28, c.y);
    ctx.stroke();
  });

  // Claves desenhadas nos cantos superiores
  // Clave de Sol (Superior Esquerdo)
  ctx.fillStyle = '#4A515D';
  ctx.font = '400 48px "Cormorant Garamond", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('𝄞', 95, 115);

  // Clave de Fá (Superior Direito)
  ctx.fillText('𝄢', w - 95, 115);

  // Eyebrow
  ctx.fillStyle = '#5B6852';
  ctx.font = '600 22px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('CONVITE ESPECIAL', w / 2, 145);

  // Título principal
  ctx.fillStyle = '#242830';
  ctx.font = '600 58px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('ENCONTRO CCB', w / 2, 230);
  ctx.fillText('JARDIM OLGA', w / 2, 298);

  // Subtítulo
  ctx.fillStyle = '#4A515D';
  ctx.font = 'italic 400 30px "Cormorant Garamond", Georgia, serif';
  wrapText(ctx, `"${EVENT_DATA.subtitle}"`, w / 2, 362, w - 240, 42);

  // Pauta musical clássica de 5 linhas com Clave de Sol e Clave de Fá
  const staffY = 432;
  ctx.strokeStyle = 'rgba(140, 147, 158, 0.45)';
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

  // Notas solfejadas no divisor
  ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#8C939E';
  ctx.fillText('DÓ • MI • SOL • SI • DÓ', w / 2, staffY + 54);

  // Bloco da Contagem Regressiva em tempo real
  const boxX = 110;
  const boxY = 515;
  const boxW = w - 220;
  const boxH = 265;

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(boxX, boxY, boxW, boxH);
  ctx.strokeStyle = '#8C939E';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(boxX, boxY, boxW, boxH);

  // Friso interno no box do contador
  ctx.strokeStyle = 'rgba(194, 166, 118, 0.4)';
  ctx.lineWidth = 1;
  ctx.strokeRect(boxX + 6, boxY + 6, boxW - 12, boxH - 12);

  if (countdownState && countdownState.phase === 'upcoming') {
    ctx.fillStyle = '#7A8771';
    ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('CONTAGEM REGRESSIVA PARA O ENCONTRO', w / 2, boxY + 50);

    const items = [
      { val: countdownState.days, label: 'DIAS' },
      { val: countdownState.hours, label: 'HORAS' },
      { val: countdownState.minutes, label: 'MINUTOS' }
    ];

    const colW = boxW / 3;
    items.forEach((item, idx) => {
      const cx = boxX + colW * idx + colW / 2;
      ctx.fillStyle = '#242830';
      ctx.font = '600 82px "Cormorant Garamond", Georgia, serif';
      ctx.fillText(item.val, cx, boxY + 152);

      ctx.fillStyle = '#8C939E';
      ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(item.label, cx, boxY + 202);

      if (idx < items.length - 1) {
        ctx.strokeStyle = 'rgba(140, 147, 158, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(boxX + colW * (idx + 1), boxY + 80);
        ctx.lineTo(boxX + colW * (idx + 1), boxY + 215);
        ctx.stroke();
      }
    });
  } else {
    ctx.fillStyle = '#242830';
    ctx.font = '600 40px "Cormorant Garamond", Georgia, serif';
    wrapText(
      ctx,
      countdownState ? countdownState.statusText : 'Hoje é o nosso grande encontro!',
      w / 2,
      boxY + 125,
      boxW - 80,
      50
    );
  }

  // Detalhes do Evento
  ctx.fillStyle = '#5B6852';
  ctx.font = '600 36px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(EVENT_DATA.dateHighlight, w / 2, 875);

  ctx.fillStyle = '#242830';
  ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('A partir das 11h30', w / 2, 928);

  // LOCAL: EXIBIR ESTRITAMENTE APENAS "Chácara Sthefani" (Regra Obrigatória nº 7)
  ctx.fillStyle = '#242830';
  ctx.font = '600 34px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(EVENT_DATA.venueName, w / 2, 1005);

  // Versículo Bíblico na base do cartão
  ctx.strokeStyle = 'rgba(140, 147, 158, 0.4)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 140, 1075);
  ctx.lineTo(w / 2 + 140, 1075);
  ctx.stroke();

  ctx.fillStyle = '#4A515D';
  ctx.font = 'italic 400 27px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(`"${EVENT_DATA.scripture.text}"`, w / 2, 1140);

  ctx.fillStyle = '#5B6852';
  ctx.font = '600 19px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(EVENT_DATA.scripture.reference.toUpperCase(), w / 2, 1184);

  // Claves discretas na base
  ctx.fillStyle = '#8C939E';
  ctx.font = '400 32px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('𝄞', 95, h - 90);
  ctx.fillText('𝄢', w - 95, h - 90);
}
