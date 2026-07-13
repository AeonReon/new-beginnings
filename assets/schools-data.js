// SCHOOLS — alternative & conscious education settings across Northern Ireland.
// A STARTER set of confirmed real settings — to be expanded comprehensively
// (federation-directory method, category by category) over time.
// lat/lon are approximate (town-centre) for v0; refine to exact addresses later.
// cat keys map to CATS below (label + colour).

window.SCHOOL_CATS = {
  montessori: { label: 'Montessori',      color: '#D96B2A' },
  steiner:    { label: 'Steiner · Waldorf', color: '#C73B7A' },
  forest:     { label: 'Forest School',   color: '#1F8F5E' },
  outdoor:    { label: 'Outdoor & Nature', color: '#2C8A6E' },
  homeed:     { label: 'Home-Ed Network', color: '#4FA4D2' }
};

window.SCHOOLS = [
  { name: 'Holywood Steiner School', cat: 'steiner', town: 'Holywood, Co Down', lat: 54.6386, lon: -5.8236, url: 'https://www.holywood-steiner.co.uk/', note: 'The only Steiner-Waldorf school in Ireland taking pupils from preschool to GCSE (ages 3–17). Founded 1975.' },
  { name: 'Squirrels Montessori Nursery', cat: 'montessori', town: 'Enniskillen, Co Fermanagh', lat: 54.3448, lon: -7.6319, url: 'https://www.eani.org.uk/', note: 'Montessori pre-school.' },
  { name: 'Bright Sparks Montessori', cat: 'montessori', town: 'Bangor, Co Down', lat: 54.6560, lon: -5.6700, url: 'https://www.brightsparksbangor.com/', note: 'Montessori pre-school at Bangor Abbey Parish Hall.' },
  { name: "St Bernard's Montessori Preschool", cat: 'montessori', town: 'Rosetta, Belfast', lat: 54.5680, lon: -5.9130, url: 'https://www.thelittlechildcarecompany.family/stbernardsmont', note: 'Montessori pre-school for ages 3–4.' },
  { name: 'Montessori Helen’s Bay', cat: 'montessori', town: "Helen's Bay, Co Down", lat: 54.6631, lon: -5.7460, url: 'https://montessorihelensbay.co.uk/', note: 'Montessori pre-school.' },
  { name: 'Nature Rangers (NIFSA)', cat: 'forest', town: 'Clandeboye, Bangor', lat: 54.6470, lon: -5.6900, url: 'https://www.forestschoolsni.com/nature-rangers', note: 'After-school forest programme by the NI Forest School Association at Clandeboye Estate.' },
  { name: 'Snuggles Day Nursery — Forest School', cat: 'forest', town: 'Bangor, Co Down', lat: 54.6538, lon: -5.6683, url: 'https://www.snugglesdaynursery.co.uk/eco-friendly/forest-schools/', note: 'Nursery with an embedded forest-school programme.' },
  { name: 'Ben Madigan Preparatory — Forest School', cat: 'forest', town: 'Cavehill, Belfast', lat: 54.6420, lon: -5.9500, url: 'https://www.benmadigan.com/school-life/forest-school', note: 'NIFSA-registered forest school within a prep school.' },
  { name: 'Belvoir Park PS — Forest School', cat: 'forest', town: 'Belvoir, Belfast', lat: 54.5560, lon: -5.9160, url: 'https://www.belvoirparkps.co.uk/nursery/forest-school', note: 'Forest-school provision in the nursery.' },
  { name: 'The Jungle NI — Forest School', cat: 'outdoor', town: 'Moneymore, Co Londonderry', lat: 54.6930, lon: -6.6460, url: 'https://www.thejungleni.com/group/forest-school/', note: 'Outdoor-adventure site running forest-school sessions.' },
  { name: "Nature's Way Forest Kindergarten", cat: 'outdoor', town: 'Northern Ireland', lat: null, lon: null, url: 'https://www.discoveroutdoors.school/NATURES-WAY', note: 'Outdoor forest kindergarten (Discover Outdoors). Exact location to confirm.' },
  { name: 'HEdNI — Home Education NI', cat: 'homeed', town: 'Northern Ireland (network)', lat: 54.5973, lon: -5.9301, url: 'https://hedni.org/', note: 'Umbrella network of home-educating families and local groups across NI — meet-ups, support, resources. Method-neutral, all welcome.' }
];
