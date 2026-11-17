import { Router } from 'express';
import { EVENT_CONFIG } from '../config/event.js';
import { generateIcsContent } from '../utils/icsGenerator.js';

const router = Router();

router.get('/calendar.ics', (req, res) => {
  const icsContent = generateIcsContent(EVENT_CONFIG);

  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="encontro-ccb-jardim-olga.ics"');
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).send(icsContent);
});

export default router;
