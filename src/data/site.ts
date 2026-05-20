/**
 * Single source of truth for all site content.
 * Edit values here — they propagate automatically through the site.
 */

export type Phone = {
  label: string;
  display: string;
  /** E.164 telephone number for tel: links (or null if WhatsApp-only) */
  tel: string | null;
  /** International number without + or spaces, for wa.me/<num> */
  whatsapp: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  blurb: string;
  details: string[];
  /** Filename slug under src/assets/images/<image>.jpg */
  image: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export const site = {
  name: 'DF Isolationen',
  legalName: 'DF Isolationen GmbH',
  tagline: 'Fassadenisolation · Industrieböden · Maler · Gipser',
  url: 'https://dfisolationen.ch',
  description:
    'Spezialisiert auf Fassadenisolation und Epoxy-Industrieböden. Generalunternehmer für Umbau, Neubau, Maler- und Gipserarbeiten in Zürich. Über 15 Jahre Handwerk. Offerte: 076 302 32 23.',

  contact: {
    address: {
      street: 'Dübendorfstrasse 4',
      city: 'Zürich',
      postal: '8051',
      country: 'CH',
      countryName: 'Schweiz',
      lat: 47.4115,
      lng: 8.5483,
    },
    phones: [
      {
        label: 'Telefon · WhatsApp',
        display: '076 302 32 23',
        tel: '+41763023223',
        whatsapp: '41763023223',
      },
      {
        label: 'WhatsApp',
        display: '076 399 15 33',
        tel: null,
        whatsapp: '41763991533',
      },
    ] satisfies Phone[],
    email: 'df.isolationen.auto@gmx.ch', // TODO: durch echte Adresse ersetzen
    hours: [
      { days: 'Mo – Fr', time: '07:00 – 18:00' },
      { days: 'Sa', time: 'nach Vereinbarung' },
      { days: 'So', time: 'geschlossen' },
    ],
  },

  hero: {
    eyebrow: 'Über 15 Jahre Handwerk · Zürich',
    headline: 'Handwerk mit Präzision und Leidenschaft.',
    sub: 'Vom Fassadenputz bis zum Epoxy-Boden. Vom Pinselstrich bis zum Gesamtumbau. Alles aus einer Hand — sauber, pünktlich, persönlich.',
    primaryCta: { label: 'Offerte anfragen', href: '#kontakt' },
    secondaryCta: { label: '076 302 32 23 anrufen', href: 'tel:+41763023223' },
  },

  services: [
    {
      slug: 'fassadenisolation',
      number: '01',
      title: 'Fassadenisolation',
      blurb:
        'Aussenwände, die Energie sparen. Fachgerechte Dämmsysteme inklusive Putz und Anstrich.',
      details: [
        'Wärmedämmverbundsysteme (WDVS)',
        'Sanierung & Neubau',
        'Putz und Endbeschichtung',
        'Wirtschaftlich und nachhaltig',
      ],
      image: 'service-fassade',
    },
    {
      slug: 'industrieboeden',
      number: '02',
      title: 'Industrieböden & Epoxy',
      blurb:
        'Fugenlose, robuste Beschichtungen für Werkstatt, Halle und Garage. Spezialisiert auf Epoxy-Beläge.',
      details: [
        'Epoxy- und PU-Beschichtungen',
        'Werkstatt · Halle · Garage',
        'Fugenlos, abriebfest, hygienisch',
        'Sanierung bestehender Beläge',
      ],
      image: 'service-boden',
    },
    {
      slug: 'maler',
      number: '03',
      title: 'Malerarbeiten',
      blurb:
        'Innen und aussen. Sauber abgedeckt, sauber gestrichen, sauber verlassen.',
      details: [
        'Innenanstrich',
        'Aussenanstrich & Fassadenfarbe',
        'Renovation & Auffrischung',
        'Lackierungen & Spezialtechniken',
      ],
      image: 'service-maler',
    },
    {
      slug: 'gipser',
      number: '04',
      title: 'Gipserarbeiten',
      blurb:
        'Verputz, Trockenbau, Spachtel. Glatte Wände als solides Fundament.',
      details: [
        'Innenputz & Glättputz',
        'Trockenbau & Gipskartonwände',
        'Spachtelarbeiten Q1 – Q4',
        'Akustik- und Abhangdecken',
      ],
      image: 'service-gipser',
    },
    {
      slug: 'umbau',
      number: '05',
      title: 'Umbau & Renovation',
      blurb:
        'Vom Bad bis zum kompletten Umbau. Ein Ansprechpartner für alle Gewerke.',
      details: [
        'Wohnungs- und Hausumbauten',
        'Bad- und Küchenrenovation',
        'Anbauten und Aufstockungen',
        'Energetische Sanierungen',
      ],
      image: 'service-umbau',
    },
    {
      slug: 'neubau',
      number: '06',
      title: 'Neubau & Generalunternehmung',
      blurb:
        'Wir koordinieren alles rund ums Haus. Sie haben einen Ansprechpartner — und das fertige Resultat.',
      details: [
        'Generalunternehmung',
        'Bauleitung vor Ort',
        'Gewerkekoordination',
        'Termin- und Kostenkontrolle',
      ],
      image: 'service-neubau',
    },
  ] satisfies Service[],

  about: {
    eyebrow: 'Über uns',
    headline: 'Über 15 Jahre Handwerk. Alles rund ums Haus.',
    body: 'DF Isolationen steht für erfahrenes Handwerk in Zürich — mit über 15 Jahren auf der Baustelle. Spezialisiert auf Fassadenisolation und Epoxy-Industrieböden. Wenn Sie Ihren Umbau oder Neubau aber nicht in drei separate Telefonate aufteilen wollen, sind wir Ihr Ansprechpartner für alles rund ums Haus. Persönlich erreichbar, transparent in der Offerte, sauber auf der Baustelle.',
    values: [
      { word: 'Sauber', body: 'Auf der Baustelle und im Umgang.' },
      { word: 'Pünktlich', body: 'Ein Termin gilt. Punkt.' },
      { word: 'Persönlich', body: 'Sie reden direkt mit der Person, die baut.' },
      { word: 'Transparent', body: 'Offerten ohne Kleingedrucktes.' },
    ],
    caption: { left: 'DF Isolationen GmbH', right: 'Zürich · 15+ Jahre Handwerk' },
    tag: 'Handwerk · seit über 15 Jahren',
  },

  process: {
    eyebrow: 'Ablauf',
    headline: 'In vier Schritten zu Ihrem Resultat.',
    steps: [
      {
        number: '01',
        title: 'Beratung',
        body: 'Wir kommen vorbei oder telefonieren. Wir hören zu, fragen nach. Kostenlos und unverbindlich.',
      },
      {
        number: '02',
        title: 'Klare Offerte',
        body: 'Schriftlich, transparent, ohne Überraschungen. Sie wissen, was Sie erhalten — und was es kostet.',
      },
      {
        number: '03',
        title: 'Saubere Ausführung',
        body: 'Pünktlich vor Ort, ordentlich auf der Baustelle, kommunikativ während des ganzen Projekts.',
      },
      {
        number: '04',
        title: 'Übergabe mit Garantie',
        body: 'Wir gehen erst, wenn Sie zufrieden sind. Mit Schlussreinigung und schriftlicher Garantie.',
      },
    ] satisfies ProcessStep[],
  },

  contact_section: {
    eyebrow: 'Kontakt',
    headline: 'Reden wir über Ihr Projekt.',
    sub: 'Telefon, WhatsApp oder E-Mail. Die erste Beratung ist kostenlos und unverbindlich.',
    whatsappMessage:
      'Guten Tag, ich interessiere mich für eine Offerte von DF Isolationen.',
  },
} as const;

export type Site = typeof site;
