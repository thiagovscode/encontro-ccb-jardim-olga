import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import calendarRouter from './server/routes/calendar.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const distPath = path.join(__dirname, 'dist');

app.disable('x-powered-by');

// API routes
app.use('/api', calendarRouter);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Serve built Vite React app
app.use(express.static(distPath, { maxAge: '1d', etag: true }));

app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor Encontro CCB Jardim Olga ativo em http://localhost:${PORT}`);
});
