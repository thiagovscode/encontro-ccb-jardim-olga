export const EVENT_DATA = {
  title: 'ENCONTRO CCB JARDIM OLGA',
  shortTitle: 'Encontro CCB Jardim Olga',
  subtitle: 'Um dia especial de comunhão, união e gratidão a Deus.',
  dateISO: '2026-11-21T11:30:00-03:00',
  endOfDayISO: '2026-11-21T23:59:59-03:00',
  dateHighlight: '21 DE NOVEMBRO DE 2026',
  dateFormatted: 'Sábado, 21 de novembro de 2026.',
  timeFormatted: 'A partir das 11h30.',
  timezone: 'America/Sao_Paulo',
  venue: 'Chácara Sthefani.',
  venueName: 'Chácara Sthefani',
  city: 'Franco da Rocha - SP.',
  addressShort: 'Estrada Sete Voltas, Franco da Rocha - SP.',
  addressFull: 'Estrada Sete Voltas, Franco da Rocha - SP, 07830-460.',
  fullLocation: 'Chácara Sthefani, Estrada Sete Voltas, Franco da Rocha - SP, 07830-460',
  description: 'Um dia especial de comunhão, união e gratidão a Deus. A partir das 11h30.',
  messageParagraphs: [
    'Há momentos que se tornam especiais pela oportunidade de estarmos juntos, compartilhando a fé, a comunhão e a alegria de servir a Deus.',
    'Preparamos este encontro com carinho e será uma alegria compartilhar esse dia com nossos irmãos.'
  ],
  scripture: {
    text: 'Oh! quão bom e quão suave é que os irmãos vivam em união.',
    reference: 'Salmos 133:1'
  },
  maps: {
    embedUrl:
      'https://maps.google.com/maps?q=Ch%C3%A1cara+Sthefani,+Estrada+Sete+Voltas,+Franco+da+Rocha+-+SP,+07830-460&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Ch%C3%A1cara+Sthefani,+Estrada+Sete+Voltas,+Franco+da+Rocha+-+SP,+07830-460',
    searchUrl:
      'https://www.google.com/maps/search/?api=1&query=Ch%C3%A1cara+Sthefani,+Estrada+Sete+Voltas,+Franco+da+Rocha+-+SP,+07830-460'
  }
};

export function buildCalendarUrls() {
  const googleParams = new URLSearchParams({
    action: 'TEMPLATE',
    text: EVENT_DATA.shortTitle,
    dates: '20261121T113000/20261121T113000',
    ctz: EVENT_DATA.timezone,
    details: EVENT_DATA.description,
    location: EVENT_DATA.fullLocation
  });

  const outlookParams = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: EVENT_DATA.shortTitle,
    startdt: EVENT_DATA.dateISO,
    enddt: EVENT_DATA.dateISO,
    body: EVENT_DATA.description,
    location: EVENT_DATA.fullLocation
  });

  return {
    google: `https://calendar.google.com/calendar/render?${googleParams.toString()}`,
    outlook: `https://outlook.live.com/calendar/0/deeplink/compose?${outlookParams.toString()}`,
    ics: '/api/calendar.ics'
  };
}
