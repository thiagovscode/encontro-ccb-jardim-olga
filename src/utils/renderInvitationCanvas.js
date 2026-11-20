/**
 * Renderizador 2D Canvas de Alta Definição (1200 x 1600 px — Proporção 3:4)
 * Desenha o Cartão Oficial do Convite com fundo sólido marfim (#FAF9F6),
 * fachada arquitetônica vetorial da CCB, pautas musicais e contagem dinâmica.
 * Nunca gera fundo preto ou transparente.
 */

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawCornerOrnament(ctx, x, y, flipX, flipY, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(flipX ? -scale : scale, flipY ? -scale : scale);

  const p1 = new Path2D('M 4 44 V 12 C 4 7.5 7.5 4 12 4 H 44');
  ctx.strokeStyle = '#8C939E';
  ctx.lineWidth = 1.4;
  ctx.lineCap = 'round';
  ctx.stroke(p1);

  const p2 = new Path2D('M 10 44 V 16 C 10 12.6 12.6 10 16 10 H 44');
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 1.0;
  ctx.stroke(p2);

  ctx.fillStyle = '#C8AD7F';
  ctx.beginPath();
  ctx.arc(12, 12, 2.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawOliveFoliage(ctx, x, y, flipX, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(flipX ? -scale : scale, scale);

  const stem = new Path2D('M 6 6 C 20 14 36 30 52 60');
  ctx.strokeStyle = 'rgba(74, 88, 70, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.lineCap = 'round';
  ctx.stroke(stem);

  const leaves = [
    { cx: 14, cy: 11, rx: 9, ry: 3.8, rot: -32, color: 'rgba(74, 88, 70, 0.40)' },
    { cx: 28, cy: 19, rx: 10, ry: 4.2, rot: -16, color: 'rgba(99, 117, 94, 0.35)' },
    { cx: 20, cy: 25, rx: 8.5, ry: 3.6, rot: 42, color: 'rgba(74, 88, 70, 0.38)' },
    { cx: 38, cy: 31, rx: 10.5, ry: 4.2, rot: -26, color: 'rgba(74, 88, 70, 0.45)' },
    { cx: 33, cy: 41, rx: 9.5, ry: 3.8, rot: 48, color: 'rgba(99, 117, 94, 0.30)' },
    { cx: 49, cy: 48, rx: 8.5, ry: 3.6, rot: -12, color: 'rgba(74, 88, 70, 0.38)' }
  ];

  leaves.forEach((leaf) => {
    ctx.save();
    ctx.translate(leaf.cx, leaf.cy);
    ctx.rotate((leaf.rot * Math.PI) / 180);
    ctx.fillStyle = leaf.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, leaf.rx, leaf.ry, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  ctx.fillStyle = 'rgba(200, 173, 127, 0.75)';
  ctx.beginPath();
  ctx.arc(26, 25, 2.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawTopFiligree(ctx, centerX, topY, scale) {
  ctx.save();
  ctx.translate(centerX - 80 * scale, topY);
  ctx.scale(scale, scale);

  const p = new Path2D(
    'M 80 6 C 68 6 58 14 46 14 C 36 14 30 8 20 8 C 12 8 4 14 2 16 C 12 18 20 22 28 22 C 40 22 48 16 58 16 C 68 16 74 24 80 24 C 86 24 92 16 102 16 C 112 16 120 22 132 22 C 140 22 148 18 158 16 C 156 14 148 8 140 8 C 130 8 124 14 114 14 C 102 14 92 6 80 6 Z'
  );
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 1.3;
  ctx.stroke(p);

  const dots = [
    { x: 80, y: 15, r: 3 },
    { x: 58, y: 16, r: 2 },
    { x: 102, y: 16, r: 2 },
    { x: 34, y: 14, r: 1.5 },
    { x: 126, y: 14, r: 1.5 }
  ];
  ctx.fillStyle = '#C8AD7F';
  dots.forEach((d) => {
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}

function drawChurchCenterpiece(ctx, centerX, topY, scale) {
  // 1. Clave de Sol Translúcida à Esquerda
  ctx.save();
  ctx.translate(centerX - 360 * scale, topY - 10 * scale);
  ctx.scale(scale * 1.4, scale * 1.4);
  const clefPath = new Path2D(
    'M 52 142 C 42 142 36 134 36 124 C 36 110 48 102 60 106 C 70 109 74 122 68 131 C 62 138 52 139 46 132 C 38 122 42 100 58 82 C 70 68 76 52 74 36 C 73 24 67 16 60 16 C 53 16 48 24 49 38 L 56 145 C 57 154 52 159 45 159 C 38 159 34 154 36 148'
  );
  ctx.strokeStyle = 'rgba(200, 173, 127, 0.28)';
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke(clefPath);
  ctx.restore();

  // 2. Pauta e Notas Musicais à Direita
  ctx.save();
  ctx.translate(centerX + 185 * scale, topY - 18 * scale);
  ctx.scale(scale * 1.35, scale * 1.35);
  ctx.strokeStyle = 'rgba(200, 173, 127, 0.5)';
  ctx.lineWidth = 1.1;
  ctx.stroke(new Path2D('M 10 70 Q 60 40 140 20'));
  ctx.stroke(new Path2D('M 12 76 Q 62 46 142 26'));
  ctx.stroke(new Path2D('M 14 82 Q 64 52 144 32'));

  ctx.fillStyle = '#C8AD7F';
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 1.4;
  ctx.lineCap = 'round';

  // Nota 1
  ctx.save();
  ctx.translate(65, 52);
  ctx.rotate((-15 * Math.PI) / 180);
  ctx.beginPath();
  ctx.ellipse(0, 0, 4, 2.8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  ctx.beginPath();
  ctx.moveTo(68, 51);
  ctx.lineTo(68, 28);
  ctx.stroke();
  ctx.stroke(new Path2D('M 68 28 Q 78 32 75 42'));

  // Nota 2
  ctx.save();
  ctx.translate(105, 38);
  ctx.rotate((-15 * Math.PI) / 180);
  ctx.beginPath();
  ctx.ellipse(0, 0, 4.2, 3, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  ctx.beginPath();
  ctx.moveTo(108.5, 37);
  ctx.lineTo(108.5, 14);
  ctx.stroke();

  // Duas colcheias ligadas
  [
    { x: 128, y: 24, top: 6 },
    { x: 146, y: 18, top: 2 }
  ].forEach((n) => {
    ctx.save();
    ctx.translate(n.x, n.y);
    ctx.rotate((-15 * Math.PI) / 180);
    ctx.beginPath();
    ctx.ellipse(0, 0, 3.6, 2.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(n.x + 3, n.y - 1);
    ctx.lineTo(n.x + 3, n.top);
    ctx.stroke();
  });
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(131, 6);
  ctx.lineTo(149, 2);
  ctx.stroke();
  ctx.restore();

  // 3. Fachada Arquitetônica da Igreja CCB (viewBox 640 x 340)
  ctx.save();
  ctx.translate(centerX - 320 * scale, topY);
  ctx.scale(scale, scale);

  // Linha de base
  ctx.strokeStyle = '#22262E';
  ctx.lineWidth = 1.8;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(40, 318);
  ctx.lineTo(600, 318);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(200, 173, 127, 0.6)';
  ctx.lineWidth = 0.9;
  ctx.beginPath();
  ctx.moveTo(60, 322);
  ctx.lineTo(580, 322);
  ctx.stroke();

  // Parede da fachada com frontão escalonado
  const wallPath = new Path2D(
    'M 80 318 V 104 L 125 104 V 86 L 175 86 V 68 L 230 68 V 52 L 320 34 L 410 52 V 68 L 465 68 V 86 L 515 86 V 104 L 560 104 V 318 Z'
  );
  const wallGrad = ctx.createLinearGradient(0, 34, 0, 318);
  wallGrad.addColorStop(0, '#FFFFFF');
  wallGrad.addColorStop(1, '#F1F4F8');
  ctx.fillStyle = wallGrad;
  ctx.fill(wallPath);
  ctx.strokeStyle = '#22262E';
  ctx.lineWidth = 1.6;
  ctx.lineJoin = 'round';
  ctx.stroke(wallPath);

  // Moldura dupla da platibanda
  const trimGold = new Path2D(
    'M 74 104 L 121 104 V 82 L 171 82 V 64 L 226 64 V 48 L 320 28 L 414 48 V 64 L 469 64 V 82 L 519 82 V 104 L 566 104'
  );
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 1.3;
  ctx.stroke(trimGold);

  const trimDark = new Path2D(
    'M 70 108 L 117 108 V 86 L 167 86 V 68 L 222 68 V 52 L 320 32 L 418 52 V 68 L 473 68 V 86 L 523 86 V 108 L 570 108'
  );
  ctx.strokeStyle = '#22262E';
  ctx.lineWidth = 1.0;
  ctx.stroke(trimDark);

  // Frisos verticais
  const friezes = [
    [98, 104],
    [148, 86],
    [200, 68],
    [260, 52],
    [290, 42],
    [320, 36],
    [350, 42],
    [380, 52],
    [440, 68],
    [492, 86],
    [542, 104]
  ];
  friezes.forEach(([fx, fy]) => {
    ctx.strokeStyle = fx === 320 ? 'rgba(34, 38, 46, 0.5)' : 'rgba(154, 163, 175, 0.4)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(fx, fy);
    ctx.lineTo(fx, 200);
    ctx.stroke();
  });

  // 7 Janelas Ogivais
  const windows = [
    { x: 100, y: 116 },
    { x: 156, y: 116 },
    { x: 214, y: 116 },
    { x: 304, y: 114, isCenter: true },
    { x: 394, y: 116 },
    { x: 452, y: 116 },
    { x: 508, y: 116 }
  ];
  windows.forEach((win) => {
    ctx.save();
    ctx.translate(win.x, win.y);
    const h = win.isCenter ? 78 : 76;
    const wPath = new Path2D(`M 0 ${h} V 26 Q 0 5 16 0 Q 32 5 32 26 V ${h} Z`);
    ctx.fillStyle = 'rgba(74, 86, 74, 0.11)';
    ctx.fill(wPath);
    ctx.strokeStyle = '#22262E';
    ctx.lineWidth = win.isCenter ? 1.4 : 1.3;
    ctx.stroke(wPath);

    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(16, 2);
    ctx.lineTo(16, h);
    ctx.moveTo(0, 32);
    ctx.lineTo(32, 32);
    ctx.moveTo(0, win.isCenter ? 55 : 54);
    ctx.lineTo(32, win.isCenter ? 55 : 54);
    ctx.stroke();

    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(-3, h);
    ctx.lineTo(35, h);
    ctx.stroke();
    ctx.restore();
  });

  // Faixa horizontal com letreiro CONGREGAÇÃO CRISTÃ NO BRASIL
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#22262E';
  ctx.lineWidth = 1.3;
  ctx.fillRect(74, 202, 492, 26);
  ctx.strokeRect(74, 202, 492, 26);

  ctx.strokeStyle = 'rgba(200, 173, 127, 0.65)';
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(74, 205);
  ctx.lineTo(566, 205);
  ctx.moveTo(74, 225);
  ctx.lineTo(566, 225);
  ctx.stroke();

  ctx.fillStyle = '#1F242B';
  ctx.font = '700 10.5px "Plus Jakarta Sans", -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C O N G R E G A Ç Ã O   C R I S T Ã   N O   B R A S I L', 320, 215.5);

  // Térreo: Cobogós
  ctx.fillStyle = '#F1F4F8';
  ctx.strokeStyle = 'rgba(34, 38, 46, 0.5)';
  ctx.lineWidth = 0.7;
  [100, 136, 172, 440, 476, 512].forEach((rx) => {
    ctx.fillRect(rx, 234, 28, 14);
    ctx.strokeRect(rx, 234, 28, 14);
  });

  // Pilares
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#22262E';
  ctx.lineWidth = 1.2;
  [
    [80, 16],
    [544, 16],
    [250, 12],
    [378, 12]
  ].forEach(([px, pw]) => {
    ctx.fillRect(px, 228, pw, 90);
    ctx.strokeRect(px, 228, pw, 90);
  });

  // Grades do portão
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(96, 254);
  ctx.lineTo(544, 254);
  ctx.moveTo(96, 312);
  ctx.lineTo(544, 312);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(34, 38, 46, 0.55)';
  ctx.lineWidth = 0.85;
  const bars = [
    108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240,
    262, 274, 286, 298, 310, 330, 342, 354, 366,
    400, 412, 424, 436, 448, 460, 472, 484, 496, 508, 520, 532
  ];
  ctx.beginPath();
  bars.forEach((bx) => {
    ctx.moveTo(bx, 254);
    ctx.lineTo(bx, 312);
  });
  ctx.stroke();

  // Eixo central do portão
  ctx.strokeStyle = 'rgba(34, 38, 46, 0.9)';
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.moveTo(320, 230);
  ctx.lineTo(320, 312);
  ctx.stroke();

  ctx.restore();
}

function drawCalendarIcon(ctx, cx, cy, size) {
  ctx.save();
  ctx.translate(cx - size / 2, cy - size / 2);
  const s = size / 24;
  ctx.scale(s, s);
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  drawRoundedRect(ctx, 3, 4, 18, 18, 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(16, 2);
  ctx.lineTo(16, 6);
  ctx.moveTo(8, 2);
  ctx.lineTo(8, 6);
  ctx.moveTo(3, 10);
  ctx.lineTo(21, 10);
  ctx.stroke();
  ctx.restore();
}

function drawClockIcon(ctx, cx, cy, size) {
  ctx.save();
  ctx.translate(cx, cy);
  const r = size / 2;
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 2.2;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -r * 0.55);
  ctx.lineTo(0, 0);
  ctx.lineTo(r * 0.4, r * 0.25);
  ctx.stroke();
  ctx.restore();
}

function drawMapPinIcon(ctx, cx, cy, size) {
  ctx.save();
  ctx.translate(cx - size / 2, cy - size / 2);
  const s = size / 24;
  ctx.scale(s, s);
  ctx.strokeStyle = '#4A5846';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const pin = new Path2D('M 20 10 C 20 16 12 22 12 22 C 12 22 4 16 4 10 A 8 8 0 0 1 20 10 Z');
  ctx.stroke(pin);
  ctx.beginPath();
  ctx.arc(12, 10, 3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

export function generateInvitationCanvas(countdown) {
  const W = 1200;
  const H = 1600;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // 1. FUNDO SÓLIDO MARFIM / OFF-WHITE (Garante que NUNCA fique preto)
  ctx.fillStyle = '#FAF9F6';
  ctx.fillRect(0, 0, W, H);

  const bgGrad = ctx.createRadialGradient(W / 2, H * 0.2, 50, W / 2, H * 0.45, W * 0.85);
  bgGrad.addColorStop(0, '#FFFFFF');
  bgGrad.addColorStop(1, '#F6F4EE');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // 2. MOLDURA DUPLA DOURADA EXTERNA E INTERNA
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 3;
  drawRoundedRect(ctx, 24, 24, W - 48, H - 48, 28);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(200, 173, 127, 0.48)';
  ctx.lineWidth = 1.6;
  drawRoundedRect(ctx, 42, 42, W - 84, H - 84, 20);
  ctx.stroke();

  // 3. CANTONEIRAS E RAMOS DE OLIVEIRA
  drawCornerOrnament(ctx, 48, 48, false, false, 1.5);
  drawCornerOrnament(ctx, W - 48, 48, true, false, 1.5);
  drawCornerOrnament(ctx, 48, H - 48, false, true, 1.5);
  drawCornerOrnament(ctx, W - 48, H - 48, true, true, 1.5);

  drawOliveFoliage(ctx, 32, 32, false, 1.65);
  drawOliveFoliage(ctx, W - 32, 32, true, 1.65);

  // 4. TOPO: FILIGRANA DOURADA
  drawTopFiligree(ctx, W / 2, 70, 1.65);

  // 5. EYEBROW: —— CONVITE ESPECIAL ——
  const eyebrowY = 148;
  ctx.fillStyle = '#555E6B';
  ctx.font = '700 22px "Plus Jakarta Sans", -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C O N V I T E   E S P E C I A L', W / 2, eyebrowY);

  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 330, eyebrowY);
  ctx.lineTo(W / 2 - 210, eyebrowY);
  ctx.moveTo(W / 2 + 210, eyebrowY);
  ctx.lineTo(W / 2 + 330, eyebrowY);
  ctx.stroke();

  // 6. TÍTULO PRINCIPAL: ENCONTRO CCB
  ctx.fillStyle = '#1F242B';
  ctx.font = '700 92px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('ENCONTRO CCB', W / 2, 232);

  // 7. FAIXA VERDE-OLIVA: JARDIM OLGA
  const ribW = 390;
  const ribH = 62;
  const ribX = (W - ribW) / 2;
  const ribY = 290;

  const ribGrad = ctx.createLinearGradient(0, ribY, 0, ribY + ribH);
  ribGrad.addColorStop(0, '#4F5E4B');
  ribGrad.addColorStop(1, '#3D4A39');
  ctx.fillStyle = ribGrad;
  drawRoundedRect(ctx, ribX, ribY, ribW, ribH, 10);
  ctx.fill();
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 2.2;
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '600 34px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('J A R D I M   O L G A', W / 2, ribY + ribH / 2 + 2);

  // Arabescos laterais da faixa
  ctx.fillStyle = '#C8AD7F';
  ctx.font = '34px Georgia, serif';
  ctx.fillText('❧', ribX - 32, ribY + ribH / 2 + 2);
  ctx.fillText('☙', ribX + ribW + 32, ribY + ribH / 2 + 2);

  // 8. SUBTÍTULO POÉTICO
  ctx.fillStyle = '#4A5260';
  ctx.font = 'italic 34px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('“Um dia especial de comunhão, união e gratidão a Deus.”', W / 2, 396);

  // 9. FACHADA ARQUITETÔNICA CCB E ELEMENTOS MUSICAIS
  drawChurchCenterpiece(ctx, W / 2, 425, 1.32);

  // 10. CARD DE DATA: 21 DE NOVEMBRO DE 2026
  const badgeW = 860;
  const badgeH = 88;
  const badgeX = (W - badgeW) / 2;
  const dateBadgeY = 895;

  ctx.fillStyle = '#FFFFFF';
  drawRoundedRect(ctx, badgeX, dateBadgeY, badgeW, badgeH, 18);
  ctx.fill();
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 2.2;
  ctx.stroke();

  drawCalendarIcon(ctx, W / 2 - 275, dateBadgeY + badgeH / 2, 36);
  ctx.fillStyle = '#1F242B';
  ctx.font = '700 42px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('21 DE NOVEMBRO DE 2026', W / 2 + 22, dateBadgeY + badgeH / 2 + 2);

  // 11. LINHA DE HORÁRIO: A partir das 11h30.
  const timeY = 1025;
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(badgeX + 20, timeY);
  ctx.lineTo(W / 2 - 195, timeY);
  ctx.moveTo(W / 2 + 195, timeY);
  ctx.lineTo(badgeX + badgeW - 20, timeY);
  ctx.stroke();

  drawClockIcon(ctx, W / 2 - 148, timeY, 30);
  ctx.fillStyle = '#374234';
  ctx.font = '600 38px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('A partir das 11h30.', W / 2 + 20, timeY + 2);

  // 12. CARD DE LOCAL: Local: Chácara Sthefani
  const venueBadgeY = 1066;
  ctx.fillStyle = '#FFFFFF';
  drawRoundedRect(ctx, badgeX, venueBadgeY, badgeW, badgeH, 18);
  ctx.fill();
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 2.2;
  ctx.stroke();

  drawMapPinIcon(ctx, W / 2 - 235, venueBadgeY + badgeH / 2, 36);
  ctx.fillStyle = '#1F242B';
  ctx.font = '700 42px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('Local: Chácara Sthefani', W / 2 + 22, venueBadgeY + badgeH / 2 + 2);

  // 13. BLOCO DE CONTAGEM REGRESSIVA
  const cdCardY = 1205;
  const cdCardH = 170;

  ctx.fillStyle = '#FFFFFF';
  drawRoundedRect(ctx, badgeX, cdCardY, badgeW, cdCardH, 22);
  ctx.fill();
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 2.2;
  ctx.stroke();

  // Pill Header "CONTAGEM REGRESSIVA"
  const pillW = 420;
  const pillH = 44;
  const pillX = (W - pillW) / 2;
  const pillY = cdCardY - pillH / 2;

  ctx.fillStyle = '#4A5846';
  drawRoundedRect(ctx, pillX, pillY, pillW, pillH, 22);
  ctx.fill();
  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '700 19px "Plus Jakarta Sans", -apple-system, sans-serif';
  ctx.fillText('C O N T A G E M   R E G R E S S I V A', W / 2, pillY + pillH / 2 + 1);

  const { phase, days, hours, minutes, seconds, statusText } = countdown || {};
  if (phase === 'upcoming') {
    const units = [
      { num: String(days ?? 0).padStart(2, '0'), label: 'DIAS' },
      { num: String(hours ?? 0).padStart(2, '0'), label: 'HORAS' },
      { num: String(minutes ?? 0).padStart(2, '0'), label: 'MINUTOS' },
      { num: String(seconds ?? 0).padStart(2, '0'), label: 'SEGUNDOS' }
    ];

    const colW = badgeW / 4;
    units.forEach((u, idx) => {
      const colCenter = badgeX + colW * idx + colW / 2;

      ctx.fillStyle = '#1F242B';
      ctx.font = '700 66px "Cormorant Garamond", Georgia, serif';
      ctx.fillText(u.num, colCenter, cdCardY + 82);

      ctx.fillStyle = '#555E6B';
      ctx.font = '700 18px "Plus Jakarta Sans", -apple-system, sans-serif';
      ctx.fillText(u.label, colCenter, cdCardY + 132);

      if (idx > 0) {
        const divX = badgeX + colW * idx;
        ctx.strokeStyle = '#E6DCB8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(divX, cdCardY + 45);
        ctx.lineTo(divX, cdCardY + cdCardH - 35);
        ctx.stroke();
      }
    });
  } else {
    ctx.fillStyle = '#4A5846';
    ctx.font = '600 40px "Cormorant Garamond", Georgia, serif';
    ctx.fillText(statusText || 'Hoje é o grande encontro!', W / 2, cdCardY + cdCardH / 2 + 10);
  }

  // 14. CITAÇÃO BÍBLICA: SALMOS 133:1
  ctx.fillStyle = '#374234';
  ctx.font = 'italic 34px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('“Oh! quão bom e quão suave é que os irmãos vivam em união.”', W / 2, 1438);

  const refY = 1495;
  ctx.fillStyle = '#7A8494';
  ctx.font = '700 21px "Plus Jakarta Sans", -apple-system, sans-serif';
  ctx.fillText('S A L M O S   1 3 3 : 1', W / 2, refY);

  ctx.strokeStyle = '#C8AD7F';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 250, refY);
  ctx.lineTo(W / 2 - 140, refY);
  ctx.moveTo(W / 2 + 140, refY);
  ctx.lineTo(W / 2 + 250, refY);
  ctx.stroke();

  return canvas;
}
