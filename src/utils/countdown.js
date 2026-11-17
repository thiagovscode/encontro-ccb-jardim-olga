import { EVENT_DATA } from '../data/eventData';

const EVENT_START_MS = new Date(EVENT_DATA.dateISO).getTime();
const EVENT_END_DAY_MS = new Date(EVENT_DATA.endOfDayISO).getTime();

const pad = (n) => String(Math.max(0, n)).padStart(2, '0');

export function getCountdownState(nowMs = Date.now()) {
  const diff = EVENT_START_MS - nowMs;

  if (diff > 0) {
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      phase: 'upcoming',
      days: pad(days),
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(seconds),
      statusText: ''
    };
  }

  if (nowMs <= EVENT_END_DAY_MS) {
    return {
      phase: 'today',
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      statusText: 'Hoje é o nosso grande encontro!'
    };
  }

  return {
    phase: 'past',
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    statusText: 'Nosso encontro já aconteceu. Que Deus abençoe a todos!'
  };
}
