import { useEffect, useRef, useState } from 'react';
import { Calendar, CalendarPlus, ChevronDown, Download, Mail, Smartphone } from 'lucide-react';
import { buildCalendarUrls } from '../data/eventData';

export default function CalendarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const urls = buildCalendarUrls();

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  async function handleIcsDownload(event) {
    event.preventDefault();
    setIsOpen(false);

    try {
      const response = await fetch(urls.ics);
      const contentType = response.headers.get('content-type') || '';
      if (response.ok && contentType.includes('text/calendar')) {
        const blob = await response.blob();
        triggerBlobDownload(blob);
        return;
      }
    } catch {
      // Fallback to client-side .ics generation when running as static site (e.g. GitHub Pages)
    }

    const icsLines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Encontro CCB Jardim Olga//Convite Digital//PT',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VTIMEZONE',
      'TZID:America/Sao_Paulo',
      'BEGIN:STANDARD',
      'DTSTART:19700101T000000',
      'TZOFFSETFROM:-0300',
      'TZOFFSETTO:-0300',
      'TZNAME:-03',
      'END:STANDARD',
      'END:VTIMEZONE',
      'BEGIN:VEVENT',
      'UID:encontro-ccb-jardim-olga-20261121@encontroccb.local',
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
      'DTSTART;TZID=America/Sao_Paulo:20261121T113000',
      'SUMMARY:Encontro CCB Jardim Olga',
      'LOCATION:Chácara Sthefani\\, Estrada Sete Voltas\\, Franco da Rocha - SP\\, 07830-460',
      'DESCRIPTION:Um dia especial de comunhão\\, união e gratidão a Deus. A partir das 11h30.',
      'STATUS:CONFIRMED',
      'TRANSP:OPAQUE',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n') + '\r\n';

    triggerBlobDownload(new Blob([icsLines], { type: 'text/calendar;charset=utf-8' }));
  }

  function triggerBlobDownload(blob) {
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = 'encontro-ccb-jardim-olga.ics';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
  }

  return (
    <div className="calendar-action-area">
      <div className="calendar-dropdown-wrapper" ref={wrapperRef}>
        <button
          type="button"
          id="calendar-toggle-btn"
          className="btn btn-secondary calendar-toggle-btn"
          aria-expanded={isOpen}
          aria-controls="calendar-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <CalendarPlus className="btn-icon" aria-hidden="true" />
          <span>ADICIONAR À MINHA AGENDA</span>
          <ChevronDown className="btn-icon btn-chevron" aria-hidden="true" />
        </button>

        {isOpen && (
          <div id="calendar-menu" className="calendar-menu" role="menu" aria-labelledby="calendar-toggle-btn">
            <a
              href={urls.google}
              className="calendar-option"
              role="menuitem"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Calendar className="option-icon" aria-hidden="true" />
              <span>Google Calendar</span>
            </a>

            <a
              href={urls.ics}
              className="calendar-option"
              role="menuitem"
              download="encontro-ccb-jardim-olga.ics"
              onClick={handleIcsDownload}
            >
              <Smartphone className="option-icon" aria-hidden="true" />
              <span>Apple Calendar</span>
            </a>

            <a
              href={urls.outlook}
              className="calendar-option"
              role="menuitem"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="option-icon" aria-hidden="true" />
              <span>Outlook</span>
            </a>

            <a
              href={urls.ics}
              className="calendar-option"
              role="menuitem"
              download="encontro-ccb-jardim-olga.ics"
              onClick={handleIcsDownload}
            >
              <Download className="option-icon" aria-hidden="true" />
              <span>Baixar arquivo de calendário (.ics)</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
