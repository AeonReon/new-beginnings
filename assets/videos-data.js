// videos-data.js — one curated video per tradition, shown in a "Watch" block
// on the tradition landing page (methodology.html).
//
// WHY: a parent weighing up eleven traditions can read for an hour and still
// not know what any of them FEEL like. Five minutes of seeing one is worth
// more. The reading is still the substance; the video is the way in.
//
// THE SELECTION RULE (follow it when adding or replacing):
//   1. From inside. Each tradition is shown at full strength, on its own
//      terms, by people who practise it or by a fair explainer. No debunks,
//      no exposés, no "the problem with Waldorf". A parent should be able to
//      watch all eleven and genuinely want each one — that IS the buffet.
//   2. Watchable. Popularity and production quality count. A correct video
//      nobody finishes is worth nothing here.
//   3. Verified. Every id below was checked live: the transcript was read
//      right through for framing and accuracy, and the video confirmed public
//      and embeddable. `views` is a real recorded figure, not an estimate.
//   4. Honest about gaps. If a tradition has no good video, it gets none and
//      says so, rather than a weak one.
//
// The School of Light has no video on purpose — it is being built now, and
// there is nothing to show yet.
//
// Run `node scripts/check-videos.mjs` to re-verify and refresh view counts.

window.VIDEOS = {

  'charlotte-mason': {
    id: 'uapHUlVb7T8',
    title: 'Charlotte Mason for Beginners: The Basics You Need to Know',
    channel: 'How to Homeschool',
    mins: '8:08',
    views: 16154,
    why: 'Eight minutes on the whole method and where it came from — a classical educator in the 1800s who thought classical schooling had gone rigid, and wanted more nature, more character, and far better books. Her own summary is here too: education is an atmosphere, a discipline, a life. Then the practices that follow from it — habit training, living books, and hours outdoors.',
    checked: '2026-08-20'
  },

  montessori: {
    id: 'UzmvtVAuuyI',
    title: 'Montessori School Education',
    channel: 'Sprouts',
    mins: '3:35',
    views: 1226003,
    why: 'Three and a half minutes and you know what Montessori is. Rome in 1907, a school for the children of low-income workers; the materials Maria Montessori built after noticing children understand more when every sense is involved; the deep concentration she watched them fall into when left alone. It ends with the checklist every Montessori setting shares — free choice of work, open rooms, the materials, mixed ages, three uninterrupted hours, no grades and no homework, a trained teacher who guides rather than instructs.',
    checked: '2026-08-20'
  },

  waldorf: {
    id: 'BkrgkslnD9g',
    title: 'Waldorf School Education',
    channel: 'Sprouts',
    mins: '4:00',
    views: 553005,
    why: 'Four minutes and it covers the whole shape — Stuttgart in 1919, a school built for factory workers\' children where everyone got the same education regardless of status; then storytelling and making as the main way in, twelve years of painting, knitting, wood, pottery, music and two languages, and a class play at fourteen and at eighteen.',
    checked: '2026-08-20'
  },

  classical: {
    id: 'V95cvA26n2k',
    title: 'What is Classical Education?',
    channel: 'Memoria Press',
    mins: '4:52',
    views: 69043,
    why: 'Martin Cothran answering the question straight, and refusing the two easy answers — that it is just the three stages, or just history in order. What it is really for, he says, is forming a wise and virtuous person: teaching a child how to think and what to do.',
    checked: '2026-08-20'
  },

  reggio: {
    id: '7n2hCebmT4c',
    title: 'Reggio Emilia Education',
    channel: 'Sprouts',
    mins: '6:15',
    views: 461092,
    why: 'Starts where Reggio started — a town in the wreckage after the Second World War deciding that it must never happen again, and building a school to raise children who would not let it. Then the idea everything rests on: the image of the child as already capable, curious and able to build their own learning.',
    checked: '2026-08-20'
  },

  'forest-school': {
    id: 'tjzFfU43wuQ',
    title: 'Outdoor Learning with Forest School',
    channel: 'The Yard Mint',
    mins: '13:46',
    views: 72452,
    why: 'A British primary school actually doing it, filmed over a term — the same reception and Year 1 children going back to the same wood every fortnight, all year, in all weather. Useful because it shows the ordinary mechanics: the boundary line, the leader training, the fire, and what a teacher notices changing in the children.',
    checked: '2026-08-20'
  },

  unschooling: {
    id: 'hfwrCnt6N34',
    title: 'Unschooling: Why Parents Teach Their Kids at Home',
    channel: 'Sprouts',
    mins: '6:47',
    views: 62268,
    why: 'Opens by asking where compulsory school actually came from — Prussia in 1763 — and then lays out what unschoolers do instead: no curriculum, no timetable, the child choosing what to pursue and how deep to go, learning to ask why this is worth learning rather than only what is on the test. Closes on John Holt, who started the whole thing.',
    checked: '2026-08-20'
  },

  athens: {
    id: 'ar8S6virCwM',
    title: 'A day in the life of an ancient Athenian',
    channel: 'TED-Ed',
    mins: '5:02',
    views: 4709620,
    why: 'This shows you the life an Athenian upbringing was aiming at. You follow one citizen through a single day in 427 BC — the household shrine at dawn, the assembly on the Pnyx where five thousand men debate and vote, and the symposium at night where nine friends argue a decision until they change their minds about it. Watch it for what a formed Athenian was expected to be able to do.',
    note: 'It shows the city rather than the schoolroom — the reading above is where the actual upbringing is. There is no good short video anywhere on Greek paideia itself; the one that exists is thinly written and has a few thousand views. It is also honest about what we would not keep: the family owns slaves, and the wife can neither vote nor own property.',
    checked: '2026-08-20'
  },

  rome: {
    id: 'juWYhMoDTN0',
    title: 'A glimpse of teenage life in ancient Rome',
    channel: 'TED-Ed',
    mins: '6:34',
    views: 12730300,
    why: 'A day with Lucius, seventeen, in Rome in AD 73 — his brother coming of age, the household shrine, and the education that is nearly finished: speaking well, making a public speech, reading and writing both Latin and Greek. That list is the Roman idea of a formed person, and it is the whole tradition in one sentence.',
    checked: '2026-08-20'
  },

  'future-of-education': {
    id: 'YXxRsLvRLY4',
    title: 'School of the Future with No Teachers — Full Tour',
    channel: 'Ana Lorena Fabrega',
    mins: '9:31',
    views: 72346,
    why: 'A walk round Alpha in Austin, guided by one of the pupils, which is the right way to see it. He explains the three commitments in his own words, shows the two-hour morning on the apps, what happens when you get stuck, and what the rest of the day is spent on.',
    checked: '2026-08-20'
  }

  // wild-free: no video. The Wild + Free movement is a book and a conference
  //   community; it has almost no video presence at all — the best result in a
  //   proper search has about 2,000 views. Better a gap than a weak pick.
  // school-of-light: no video on purpose. It is being built now.

};
