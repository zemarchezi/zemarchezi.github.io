export interface Publication {
  year: string;
  title: string;
  authors: string;
  venue: string;
  doi: string;
  firstAuthor: boolean;
}

const ORCID_ID = '0000-0002-2904-6411';
const CONTACT_EMAIL = 'jpmarchezi@gmail.com';

// Real published articles not yet linked on the ORCID record above (checked 2026-09-17).
// Once added there (orcid.org > Works > Add > Search & Link, by DOI), they'll be picked
// up automatically and can be dropped from here.
const EXTRA_DOIS = [
  '10.3389/fspas.2024.1478489', // Ultra-relativistic electron flux enhancement under persistent HSS
  '10.3389/fspas.2025.1550635', // Space weather effects over SAMA during the May 10-11, 2024 storm
  '10.3389/fspas.2023.1197430', // Why can the auroral-type sporadic E layer be detected over SAMA?
  '10.3389/fspas.2022.970308', // Role of the inner radiation belt dynamic in auroral-type sporadic E-layers
  '10.1029/2025SW004781', // New Observations of Cosmic Noise Absorption in SAMA
  '10.1029/2025SW004669', // Extra Ionization Causing the Anomalous Auroral Sporadic E Layer
  '10.3389/fspas.2025.1610276', // Localized geomagnetic disturbances: a statistical analysis of spatial scale
];

// Used only if the build can't reach ORCID/Crossref (offline, API outage, etc).
// Last refreshed 2026-09-17.
const FALLBACK: Publication[] = [
  {
    year: '2026',
    title: 'On the Effects of the Solar Wind Structure in the Global Distribution of dBH/dt Spikes During Geomagnetic Storms',
    authors: 'Marchezi, J. P. et al.',
    venue: 'Journal of Geophysical Research: Space Physics',
    doi: '10.1029/2025JA034994',
    firstAuthor: true,
  },
  {
    year: '2025',
    title: 'Temporal and Latitudinal Occurrences of Geomagnetic Pulsations Recorded in South America by the Embrace Magnetometer Network',
    authors: 'Marchezi, J. P., Mendes, O. & Denardini, C. M.',
    venue: 'Atmosphere',
    doi: '10.3390/atmos16060742',
    firstAuthor: true,
  },
  {
    year: '2022',
    title: 'Electron Flux Variability and Ultra-Low Frequency Wave Activity in the Outer Radiation Belt Under the Influence of Interplanetary Coronal Mass Ejections and High-Speed Solar Wind Streams: A Statistical Analysis From the Van Allen Probes Era',
    authors: 'Marchezi, J. P. et al.',
    venue: 'Journal of Geophysical Research: Space Physics',
    doi: '10.1029/2021JA029887',
    firstAuthor: true,
  },
  {
    year: '2026',
    title: 'Peculiar Magnetosphere-Atmosphere Coupling and Its Impacts Over the South American Magnetic Anomaly Region',
    authors: 'Da Silva, L. A. et al.',
    venue: 'Journal of Geophysical Research: Space Physics',
    doi: '10.1029/2026JA035200',
    firstAuthor: false,
  },
  {
    year: '2026',
    title: 'New Observations of Cosmic Noise Absorption in the South American Magnetic Anomaly (SAMA) Using a Next-Generation Riometer',
    authors: 'Moro, J. et al.',
    venue: 'Space Weather',
    doi: '10.1029/2025SW004781',
    firstAuthor: false,
  },
  {
    year: '2025',
    title: 'Space weather effects over SAMA during the extreme geomagnetic storm on May 10-11, 2024: disturbances of the neutral and ionized atmosphere',
    authors: 'Da Silva, L. A. et al.',
    venue: 'Frontiers in Astronomy and Space Sciences',
    doi: '10.3389/fspas.2025.1550635',
    firstAuthor: false,
  },
  {
    year: '2025',
    title: 'Extra Ionization Causing the Anomalous Auroral Sporadic E Layer (Esa) Over the Equatorial Brazilian Region During the Recovery Phase of the Magnetic Storm on 10 May 2024',
    authors: 'Resende, L. C. A. et al.',
    venue: 'Space Weather',
    doi: '10.1029/2025SW004669',
    firstAuthor: false,
  },
  {
    year: '2025',
    title: 'Localized geomagnetic disturbances: a statistical analysis of spatial scale',
    authors: 'Mukundan, R. et al.',
    venue: 'Frontiers in Astronomy and Space Sciences',
    doi: '10.3389/fspas.2025.1610276',
    firstAuthor: false,
  },
  {
    year: '2025',
    title: 'Using Machine Learning Explainability Techniques to Examine Drivers of Ground Magnetic Field Localization',
    authors: 'Coughlan, M. et al.',
    venue: 'Space Weather',
    doi: '10.1029/2025SW004391',
    firstAuthor: false,
  },
  {
    year: '2024',
    title: 'Ultra-relativistic electron flux enhancement under persistent high speed solar wind stream',
    authors: 'Alves, L. R. et al.',
    venue: 'Frontiers in Astronomy and Space Sciences',
    doi: '10.3389/fspas.2024.1478489',
    firstAuthor: false,
  },
  {
    year: '2023',
    title: 'High-Energy Electron Flux Enhancement Pattern in the Outer Radiation Belt in Response to the Interplanetary Coronal Mass Ejections',
    authors: 'Da Silva, L. A. et al.',
    venue: 'Journal of Geophysical Research: Space Physics',
    doi: '10.1029/2023JA031360',
    firstAuthor: false,
  },
  {
    year: '2023',
    title: 'Probabilistic Forecasting of Ground Magnetic Perturbation Spikes at Mid-Latitude Stations',
    authors: 'Coughlan, M. et al.',
    venue: 'Space Weather',
    doi: '10.1029/2023SW003446',
    firstAuthor: false,
  },
  {
    year: '2023',
    title: 'The 14 December 2020 Total Solar Eclipse Effects on Geomagnetic Field Variations and Plasma Density Over South America',
    authors: 'Chen, S. S. et al.',
    venue: 'Journal of Geophysical Research: Space Physics',
    doi: '10.1029/2022JA030775',
    firstAuthor: false,
  },
  {
    year: '2023',
    title: 'Why can the auroral-type sporadic E layer be detected over the South America Magnetic Anomaly (SAMA) region? An investigation of a case study under the influence of the high-speed solar wind stream',
    authors: 'Da Silva, L. A. et al.',
    venue: 'Frontiers in Astronomy and Space Sciences',
    doi: '10.3389/fspas.2023.1197430',
    firstAuthor: false,
  },
  {
    year: '2023',
    title: 'Analysis of the different physical mechanisms in the atypical sporadic E (Es) layer occurrence over a low latitude region in the Brazilian sector',
    authors: 'Resende, L. C. A. et al.',
    venue: 'Frontiers in Astronomy and Space Sciences',
    doi: '10.3389/fspas.2023.1193268',
    firstAuthor: false,
  },
  {
    year: '2022',
    title: 'A multi-instrumental and modeling analysis of the ionospheric responses to the solar eclipse on 14 December 2020 over the Brazilian region',
    authors: 'Resende, L. C. A. et al.',
    venue: 'Annales Geophysicae',
    doi: '10.5194/angeo-40-191-2022',
    firstAuthor: false,
  },
  {
    year: '2022',
    title: 'Analysis of the Sporadic-E Layer Behavior in Different American Stations during the Days around the September 2017 Geomagnetic Storm',
    authors: 'Resende, L. C. A. et al.',
    venue: 'Atmosphere',
    doi: '10.3390/atmos13101714',
    firstAuthor: false,
  },
  {
    year: '2022',
    title: 'Global Modeling of the Inner Magnetosphere Under the Influence of a Magnetic Cloud Associated With an Interplanetary Coronal Mass Ejection: Energy Conversion and Ultra-Low Frequency Wave Activity',
    authors: 'Jauer, P. R. et al.',
    venue: 'Journal of Geophysical Research: Space Physics',
    doi: '10.1029/2022JA030615',
    firstAuthor: false,
  },
  {
    year: '2022',
    title: 'New Findings Relating Tidal Variability and Solar Activity in the Low Latitude MLT Region',
    authors: 'Andrioli, V. F. et al.',
    venue: 'Journal of Geophysical Research: Space Physics',
    doi: '10.1029/2021JA030239',
    firstAuthor: false,
  },
  {
    year: '2022',
    title: 'The role of the inner radiation belt dynamic in the generation of auroral-type sporadic E-layers over south American magnetic anomaly',
    authors: 'Da Silva, L. A. et al.',
    venue: 'Frontiers in Astronomy and Space Sciences',
    doi: '10.3389/fspas.2022.970308',
    firstAuthor: false,
  },
  {
    year: '2021',
    title: 'High-Energy Electron Flux Enhancement Pattern in the Outer Radiation Belt in Response to the Alfvénic Fluctuations Within High-Speed Solar Wind Stream: A Statistical Analysis',
    authors: 'Da Silva, L. A. et al.',
    venue: 'Journal of Geophysical Research: Space Physics',
    doi: '10.1029/2021JA029363',
    firstAuthor: false,
  },
  {
    year: '2020',
    title: "Dynamic Mechanisms Associated With High-Energy Electron Flux Dropout in the Earth's Outer Radiation Belt Under the Influence of a Coronal Mass Ejection Sheath Region",
    authors: 'Da Silva, L. A. et al.',
    venue: 'Journal of Geophysical Research: Space Physics',
    doi: '10.1029/2020JA028492',
    firstAuthor: false,
  },
  {
    year: '2020',
    title: 'Electromagnetic Ion Cyclotron Waves Pattern Recognition Based on a Deep Learning Technique: Bag-of-Features Algorithm Applied to Spectrograms',
    authors: 'Medeiros, C. et al.',
    venue: 'The Astrophysical Journal Supplement Series',
    doi: '10.3847/1538-4365/ab9697',
    firstAuthor: false,
  },
  {
    year: '2019',
    title: 'A Global Magnetohydrodynamic Simulation Study of Ultra-low-frequency Wave Activity in the Inner Magnetosphere: Corotating Interaction Region + Alfvénic Fluctuations',
    authors: 'Jauer, P. R. et al.',
    venue: 'The Astrophysical Journal',
    doi: '10.3847/1538-4357/ab4db5',
    firstAuthor: false,
  },
  {
    year: '2019',
    title: 'Contribution of ULF Wave Activity to the Global Recovery of the Outer Radiation Belt During the Passage of a High-Speed Solar Wind Stream Observed in September 2014',
    authors: 'Da Silva, L. A. et al.',
    venue: 'Journal of Geophysical Research: Space Physics',
    doi: '10.1029/2018JA026184',
    firstAuthor: false,
  },
  {
    year: '2019',
    title: 'On the Contribution of EMIC Waves to the Reconfiguration of the Relativistic Electron Butterfly Pitch Angle Distribution Shape on 2014 September 12 — A Case Study',
    authors: 'Medeiros, C. et al.',
    venue: 'The Astrophysical Journal',
    doi: '10.3847/1538-4357/aaf970',
    firstAuthor: false,
  },
  {
    year: '2017',
    title: 'Acceleration of radiation belt electrons and the role of the average interplanetary magnetic field Bz component in high-speed streams',
    authors: 'Souza, V. M. et al.',
    venue: 'Journal of Geophysical Research: Space Physics',
    doi: '10.1002/2017JA024187',
    firstAuthor: false,
  },
  {
    year: '2017',
    title: 'The Role of Solar Wind Structures in the Generation of ULF Waves in the Inner Magnetosphere',
    authors: 'Alves, L. R. et al.',
    venue: 'Solar Physics',
    doi: '10.1007/s11207-017-1113-4',
    firstAuthor: false,
  },
  {
    year: '2016',
    title: 'A neural network approach for identifying particle pitch angle distributions in Van Allen Probes data',
    authors: 'Souza, V. M. et al.',
    venue: 'Space Weather',
    doi: '10.1002/2015SW001349',
    firstAuthor: false,
  },
  {
    year: '2016',
    title: 'Comparison of geophysical patterns in the southern hemisphere mid-latitude region',
    authors: 'Da Silva, L. A. et al.',
    venue: 'Advances in Space Research',
    doi: '10.1016/j.asr.2016.04.003',
    firstAuthor: false,
  },
  {
    year: '2015',
    title: 'Outer radiation belt dropout dynamics following the arrival of two interplanetary coronal mass ejections',
    authors: 'Alves, L. R. et al.',
    venue: 'Geophysical Research Letters',
    doi: '10.1002/2015GL067066',
    firstAuthor: false,
  },
];

let cached: Promise<Publication[]> | null = null;

export function getPublications(): Promise<Publication[]> {
  if (!cached) {
    cached = fetchPublications().catch((err) => {
      console.warn('[publications] falling back to static list:', err.message);
      return FALLBACK;
    });
  }
  return cached;
}

async function fetchPublications(): Promise<Publication[]> {
  const worksRes = await fetch(`https://pub.orcid.org/v3.0/${ORCID_ID}/works`, {
    headers: { Accept: 'application/json' },
  });
  if (!worksRes.ok) throw new Error(`ORCID request failed: ${worksRes.status}`);
  const worksData = await worksRes.json();

  const dois = new Set<string>();
  for (const group of worksData.group ?? []) {
    const summary = group['work-summary']?.[0];
    if (!summary || summary.type !== 'journal-article') continue;
    const doi = (group['external-ids']?.['external-id'] ?? []).find(
      (e: { 'external-id-type': string }) => e['external-id-type'] === 'doi'
    )?.['external-id-value'];
    if (doi) dois.add(doi);
  }
  for (const doi of EXTRA_DOIS) dois.add(doi);

  if (dois.size === 0) throw new Error('No journal-article DOIs found in ORCID record');

  const results = await mapWithConcurrency([...dois], 4, (doi) =>
    fetchCrossrefRecord(doi).catch(() => null)
  );
  const publications = results.filter((p): p is Publication => p !== null);

  if (publications.length === 0) throw new Error('Could not resolve any publication via Crossref');

  publications.sort((a, b) => {
    if (a.firstAuthor !== b.firstAuthor) return a.firstAuthor ? -1 : 1;
    return Number(b.year) - Number(a.year);
  });

  return publications;
}

async function mapWithConcurrency<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

async function fetchCrossrefRecord(doi: string, attempt = 0): Promise<Publication | null> {
  const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
    headers: { 'User-Agent': `josemarchezi.com (mailto:${CONTACT_EMAIL})` },
  });
  if (res.status === 429 && attempt < 3) {
    await sleep(500 * (attempt + 1));
    return fetchCrossrefRecord(doi, attempt + 1);
  }
  if (!res.ok) return null;
  const data = await res.json();
  const msg = data.message;

  const authors: { family?: string; given?: string }[] = msg.author ?? [];
  if (authors.length === 0) return null;

  const year = msg.published?.['date-parts']?.[0]?.[0];
  const rawTitle = Array.isArray(msg.title) ? msg.title[0] : msg.title;
  const rawVenue = Array.isArray(msg['container-title']) ? msg['container-title'][0] : msg['container-title'];
  if (!year || !rawTitle || !rawVenue) return null;

  const firstAuthor = (authors[0].family ?? '').toLowerCase().includes('marchezi');

  return {
    year: String(year),
    title: stripTags(rawTitle),
    authors: formatAuthors(authors),
    venue: stripTags(rawVenue),
    doi,
    firstAuthor,
  };
}

function formatAuthors(authors: { family?: string; given?: string }[]): string {
  const name = (a: { family?: string; given?: string }) =>
    `${a.family ?? ''}, ${initials(a.given)}`.trim();

  if (authors.length === 1) return name(authors[0]);
  if (authors.length <= 3) {
    return authors.map(name).join(', ');
  }
  return `${name(authors[0])} et al.`;
}

function initials(given?: string): string {
  if (!given) return '';
  return given
    .split(/\s+/)
    .filter(Boolean)
    .map((n) => `${n[0]}.`)
    .join(' ');
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Crossref occasionally embeds JATS/HTML markup (<i>, <sub>, <sup>, …) — sometimes with
// surrounding newlines/indentation — in titles and container-titles, e.g. for subscripts
// like "B<sub>z</sub>" or "Es\n  <sub>a</sub>\n  ".
function stripTags(text: string): string {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s+([),.;:])/g, '$1')
    .trim();
}
