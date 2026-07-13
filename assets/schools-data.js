// SCHOOLS — alternative & conscious education settings across Northern Ireland.
// A growing directory. Montessori enriched from the official Family Support NI
// registry (name/address/phone). Other categories: NIFSA + confirmed sources.
// lat/lon approximate town-centre; null = list-only (location to confirm).

window.SCHOOL_CATS = {
  montessori: { label: 'Montessori',        color: '#D96B2A', img: 'assets/tiles/montessori.jpg' },
  steiner:    { label: 'Steiner · Waldorf', color: '#C73B7A', img: 'assets/tiles/waldorf.jpg' },
  forest:     { label: 'Forest School',     color: '#1F8F5E', img: 'assets/tiles/forest-school.jpg' },
  outdoor:    { label: 'Outdoor & Nature',  color: '#2C8A6E', img: 'assets/tiles/wild-free.jpg' },
  reggio:     { label: 'Reggio-inspired',   color: '#7C3AED', img: 'assets/tiles/reggio.jpg' },
  homeed:     { label: 'Home-Ed Network',   color: '#4FA4D2', img: 'assets/tiles/unschooling.jpg' }
};

window.SCHOOLS = [
  // ── Steiner / Waldorf ──
  { name: 'Holywood Steiner School', cat: 'steiner', town: 'Holywood', address: 'Croft Road, Holywood, Co Down, BT18 0PR', phone: '028 9042 8029', lat: 54.6386, lon: -5.8236, url: 'https://www.holywood-steiner.co.uk/', note: 'The only Steiner-Waldorf school in Ireland taking pupils preschool to GCSE (ages 3–17). Founded 1975.' },

  // ── Montessori (Family Support NI registry) ──
  { name: 'Montessori Helen’s Bay', cat: 'montessori', town: "Helen's Bay", address: '13b Fort Road, Helen’s Bay, Bangor, Co Down, BT19 1LA', phone: '074 7624 1435', lat: 54.6631, lon: -5.7460, url: 'https://montessorihelensbay.co.uk/', note: 'Warm, nurturing Montessori pre-school where children explore at their own pace.' },
  { name: 'Bright Sparks Montessori Pre-School', cat: 'montessori', town: 'Bangor', address: 'Bangor Abbey Parish Hall, 1 St Malachy’s Way, Bangor, Co Down, BT20 4JF', phone: '074 4565 3017', lat: 54.6620, lon: -5.6720, url: 'https://www.brightsparksbangor.com/', note: 'Montessori pre-school, 9am–12.30pm term-time.' },
  { name: 'Kidz Montessori Day Nursery', cat: 'montessori', town: 'Campsie, Derry', address: 'McCauley Business Park, 30 Courtauld Way, Campsie, Co Londonderry, BT47 3DW', phone: '028 7181 1124', lat: 55.0300, lon: -7.2100, url: 'https://www.kidzmontessoridaynursery.co.uk/', note: 'Family-run Montessori day nursery, 3 months–4 years.' },
  { name: 'Little Kidz by Kidz Montessori', cat: 'montessori', town: 'Altnagelvin, Derry', address: 'MDEC Building, Altnagelvin Hospital, Glenshane Road, Derry, BT47 6SB', phone: '028 7116 4782', lat: 54.9930, lon: -7.2870, url: 'https://www.kidzmontessoridaynursery.co.uk/', note: 'Montessori day nursery at Altnagelvin, 7.30am–6.15pm.' },
  { name: 'Appletree Montessori', cat: 'montessori', town: 'Belfast (Finaghy)', address: "St Anne’s Parish Hall, Kingsway, Belfast, BT10 0NE (also Blacks Road, BT11)", phone: '028 9061 4441', lat: 54.5630, lon: -5.9700, url: 'https://www.familysupportni.gov.uk/', note: 'Small family-run Montessori — pre-school, daycare & afterschool. Two Belfast sites.' },
  { name: 'McMillen Montessori School', cat: 'montessori', town: 'Belfast', address: 'Belfast (opened 2024)', phone: '', lat: 54.5850, lon: -5.9350, url: 'https://www.mcmillenmontessorischool.com/', note: 'New small Montessori school, opened September 2024.' },
  { name: "St Bernard's Montessori Preschool", cat: 'montessori', town: 'Belfast (Rosetta)', address: 'Rosetta, Belfast (The Little Childcare Company)', phone: '', lat: 54.5680, lon: -5.9130, url: 'https://www.thelittlechildcarecompany.family/stbernardsmont', note: 'Child-led Montessori pre-school for ages 3–4; day extendable to 6pm.' },
  { name: 'Squirrels Montessori Nursery', cat: 'montessori', town: 'Enniskillen', address: 'Enniskillen, Co Fermanagh', phone: '', lat: 54.3448, lon: -7.6319, url: 'https://www.eani.org.uk/', note: 'Montessori pre-school playgroup (EANI-listed).' },

  // ── Forest School (NIFSA / accredited) ──
  { name: 'Nature Rangers (NIFSA)', cat: 'forest', town: 'Clandeboye, Bangor', address: 'Clandeboye Estate, Bangor, Co Down', phone: '', lat: 54.6470, lon: -5.6900, url: 'https://www.forestschoolsni.com/nature-rangers', note: 'After-school forest programme by the NI Forest School Association at Clandeboye Estate.' },
  { name: 'Snuggles Day Nursery — Forest School', cat: 'forest', town: 'Bangor', address: 'Bangor, Co Down', phone: '', lat: 54.6538, lon: -5.6683, url: 'https://www.snugglesdaynursery.co.uk/eco-friendly/forest-schools/', note: 'NIFSA-member nursery with an embedded forest-school programme.' },
  { name: 'Ben Madigan Preparatory — Forest School', cat: 'forest', town: 'Belfast (Cavehill)', address: 'Antrim Road, Belfast', phone: '', lat: 54.6420, lon: -5.9500, url: 'https://www.benmadigan.com/school-life/forest-school', note: 'NIFSA-registered forest school within a prep school, using its own woodland.' },
  { name: "St Teresa's Nursery School — Forest School", cat: 'forest', town: 'Belfast', address: 'Glen Road, Belfast', phone: '', lat: 54.5840, lon: -6.0050, url: 'https://www.stteresasnursery.com/', note: 'Official NIFSA Forest School nursery.' },
  { name: 'Holy Rosary Nursery School — Forest School', cat: 'forest', town: 'Belfast', address: 'South Belfast', phone: '', lat: 54.5820, lon: -5.9250, url: 'https://www.holyrosarynurseryschool.com/our-school/forest-school/', note: 'NIFSA-accredited Forest School nursery.' },
  { name: 'Bangor Central Nursery School — Forest School', cat: 'forest', town: 'Bangor', address: 'Bangor, Co Down', phone: '', lat: 54.6600, lon: -5.6730, url: 'https://bangornurseryschool.co.uk/curriculum/forest-schools/', note: 'Official NIFSA-accredited Forest School.' },
  { name: 'Kylemore Nursery School — Forest School', cat: 'forest', town: 'Belfast', address: 'Belfast', phone: '', lat: 54.5900, lon: -5.9900, url: 'https://www.kylemorenursery.com/our-projects/forest-school-/', note: 'Forest-school sessions in partnership with NIFSA.' },
  { name: 'Belvoir Park PS — Forest School', cat: 'forest', town: 'Belfast (Belvoir)', address: 'Belvoir, Belfast', phone: '', lat: 54.5560, lon: -5.9160, url: 'https://www.belvoirparkps.co.uk/nursery/forest-school', note: 'Forest-school provision in the nursery.' },

  // ── Outdoor & Nature ──
  { name: 'The Jungle NI — Forest School', cat: 'outdoor', town: 'Moneymore', address: 'Desertmartin Road, Moneymore, Co Londonderry', phone: '', lat: 54.6930, lon: -6.6460, url: 'https://www.thejungleni.com/group/forest-school/', note: 'Outdoor-adventure site running forest-school sessions.' },
  { name: "Nature's Way Forest Kindergarten", cat: 'outdoor', town: 'Northern Ireland', address: 'Discover Outdoors — location to confirm', phone: '', lat: null, lon: null, url: 'https://www.discoveroutdoors.school/NATURES-WAY', note: 'Outdoor forest kindergarten by Discover Outdoors.' },

  // ── Reggio-inspired ──
  { name: 'Jolly Jesters', cat: 'reggio', town: 'Dromore', address: 'Dromore, Co Down', phone: '', lat: 54.4085, lon: -6.1520, url: 'https://www.familysupportni.gov.uk/', note: 'Nursery run on the Reggio Emilia philosophy, with rich outdoor learning spaces.' },
  { name: 'Little Rays Nursery', cat: 'reggio', town: 'Northern Ireland', address: 'Location to confirm', phone: '', lat: null, lon: null, url: 'http://www.littleraysnursery.com/', note: 'Curiosity Approach nursery drawing on Reggio Emilia, Pikler and Steiner — child-led, in-the-moment learning.' },

  // ── Home-Ed Network ──
  { name: 'HEdNI — Home Education NI', cat: 'homeed', town: 'Northern Ireland (network)', address: 'NI-wide network + local groups', phone: '', lat: 54.5973, lon: -5.9301, url: 'https://hedni.org/', note: 'Umbrella network of home-educating families and local groups across NI — meet-ups, support, resources. Method-neutral, all welcome.' }
];
