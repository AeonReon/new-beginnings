// SCHOOLS — alternative & conscious education settings across Northern Ireland.
// A growing directory (federation-directory method, category by category).
// Each category carries a representative image (from assets/tiles/). lat/lon are
// approximate town-centre for now; exact addresses shown on the card where known.
// Entries without a confirmed pin get lat/lon = null (list-only).

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
  { name: 'Holywood Steiner School', cat: 'steiner', town: 'Holywood', address: 'Croft Road, Holywood, Co Down, BT18 0PR', lat: 54.6386, lon: -5.8236, url: 'https://www.holywood-steiner.co.uk/', note: 'The only Steiner-Waldorf school in Ireland taking pupils from preschool to GCSE (ages 3–17). Founded 1975.' },

  // ── Montessori ──
  { name: 'Montessori Helen’s Bay', cat: 'montessori', town: "Helen's Bay", address: '13b Fort Road, Helen’s Bay, Bangor, Co Down, BT19 1LA', lat: 54.6631, lon: -5.7460, url: 'https://montessorihelensbay.co.uk/', note: 'Warm, nurturing Montessori pre-school where children explore at their own pace.' },
  { name: 'Bright Sparks Montessori', cat: 'montessori', town: 'Bangor', address: 'Bangor Abbey Parish Hall, Bangor, Co Down', lat: 54.6560, lon: -5.6700, url: 'https://www.brightsparksbangor.com/', note: 'Montessori pre-school with ample parking, in a newly renovated hall.' },
  { name: "St Bernard's Montessori Preschool", cat: 'montessori', town: 'Belfast', address: 'Rosetta, Belfast (The Little Childcare Company)', lat: 54.5680, lon: -5.9130, url: 'https://www.thelittlechildcarecompany.family/stbernardsmont', note: 'Child-led Montessori pre-school for ages 3–4; day extendable to 6pm.' },
  { name: 'Montessori Pre-School (Lambeg)', cat: 'montessori', town: 'Lisburn', address: '102 Queensway, Lambeg, Lisburn, Co Antrim, BT27 4QP', lat: 54.5170, lon: -6.0530, url: 'https://www.familysupportni.gov.uk/', note: 'Montessori pre-school in Lambeg, near Lisburn.' },
  { name: 'Kidz Montessori Day Nursery', cat: 'montessori', town: 'Londonderry / Derry', address: 'Waterside, Londonderry', lat: 54.9966, lon: -7.3100, url: 'https://www.kidzmontessoridaynursery.co.uk/', note: 'Purpose-built family-run Montessori day nursery on the Waterside.' },
  { name: 'Squirrels Montessori Nursery', cat: 'montessori', town: 'Enniskillen', address: 'Enniskillen, Co Fermanagh', lat: 54.3448, lon: -7.6319, url: 'https://www.eani.org.uk/', note: 'Montessori pre-school (EANI-listed).' },
  { name: 'McMillen Montessori School', cat: 'montessori', town: 'Northern Ireland', address: 'Location to confirm', lat: null, lon: null, url: 'https://www.instagram.com/mcmillenmontessorischool/', note: 'Montessori school — exact location to confirm.' },

  // ── Forest School (NIFSA / accredited) ──
  { name: 'Nature Rangers (NIFSA)', cat: 'forest', town: 'Clandeboye, Bangor', address: 'Clandeboye Estate, Bangor, Co Down', lat: 54.6470, lon: -5.6900, url: 'https://www.forestschoolsni.com/nature-rangers', note: 'After-school forest programme by the NI Forest School Association at Clandeboye Estate.' },
  { name: 'Snuggles Day Nursery — Forest School', cat: 'forest', town: 'Bangor', address: 'Bangor, Co Down', lat: 54.6538, lon: -5.6683, url: 'https://www.snugglesdaynursery.co.uk/eco-friendly/forest-schools/', note: 'NIFSA-member nursery with an embedded forest-school programme.' },
  { name: 'Ben Madigan Preparatory — Forest School', cat: 'forest', town: 'Belfast (Cavehill)', address: 'Antrim Road, Belfast', lat: 54.6420, lon: -5.9500, url: 'https://www.benmadigan.com/school-life/forest-school', note: 'NIFSA-registered forest school within a prep school, using its own woodland.' },
  { name: "St Teresa's Nursery School — Forest School", cat: 'forest', town: 'Belfast', address: 'Glen Road, Belfast', lat: 54.5840, lon: -6.0050, url: 'https://www.stteresasnursery.com/', note: 'Official NIFSA Forest School nursery.' },
  { name: 'Holy Rosary Nursery School — Forest School', cat: 'forest', town: 'Belfast', address: 'South Belfast', lat: 54.5820, lon: -5.9250, url: 'https://www.holyrosarynurseryschool.com/our-school/forest-school/', note: 'NIFSA-accredited Forest School nursery.' },
  { name: 'Bangor Central Nursery School — Forest School', cat: 'forest', town: 'Bangor', address: 'Bangor, Co Down', lat: 54.6600, lon: -5.6730, url: 'https://bangornurseryschool.co.uk/curriculum/forest-schools/', note: 'Official NIFSA-accredited Forest School.' },
  { name: 'Kylemore Nursery School — Forest School', cat: 'forest', town: 'Belfast', address: 'Belfast', lat: 54.5900, lon: -5.9900, url: 'https://www.kylemorenursery.com/our-projects/forest-school-/', note: 'Forest-school sessions in partnership with NIFSA.' },
  { name: 'Belvoir Park PS — Forest School', cat: 'forest', town: 'Belfast (Belvoir)', address: 'Belvoir, Belfast', lat: 54.5560, lon: -5.9160, url: 'https://www.belvoirparkps.co.uk/nursery/forest-school', note: 'Forest-school provision in the nursery.' },

  // ── Outdoor & Nature ──
  { name: 'The Jungle NI — Forest School', cat: 'outdoor', town: 'Moneymore', address: 'Desertmartin Road, Moneymore, Co Londonderry', lat: 54.6930, lon: -6.6460, url: 'https://www.thejungleni.com/group/forest-school/', note: 'Outdoor-adventure site running forest-school sessions.' },
  { name: "Nature's Way Forest Kindergarten", cat: 'outdoor', town: 'Northern Ireland', address: 'Discover Outdoors — location to confirm', lat: null, lon: null, url: 'https://www.discoveroutdoors.school/NATURES-WAY', note: 'Outdoor forest kindergarten by Discover Outdoors.' },

  // ── Reggio-inspired ──
  { name: 'Jolly Jesters', cat: 'reggio', town: 'Dromore', address: 'Dromore, Co Down', lat: 54.4085, lon: -6.1520, url: 'https://www.familysupportni.gov.uk/', note: 'Nursery run on the Reggio Emilia philosophy, with rich outdoor learning spaces.' },
  { name: 'Little Rays Nursery', cat: 'reggio', town: 'Northern Ireland', address: 'Location to confirm', lat: null, lon: null, url: 'http://www.littleraysnursery.com/', note: 'Curiosity Approach nursery drawing on Reggio Emilia, Pikler and Steiner — child-led, in-the-moment learning.' },

  // ── Home-Ed Network ──
  { name: 'HEdNI — Home Education NI', cat: 'homeed', town: 'Northern Ireland (network)', address: 'NI-wide network + local groups', lat: 54.5973, lon: -5.9301, url: 'https://hedni.org/', note: 'Umbrella network of home-educating families and local groups across NI — meet-ups, support, resources. Method-neutral, all welcome.' }
];
