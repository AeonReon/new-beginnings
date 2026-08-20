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
    id: 'i5QWMm4yMIA',
    title: 'Starting Charlotte Mason from Scratch',
    channel: 'Simply Charlotte Mason',
    mins: '9:19',
    views: 59913,
    why: 'Sonya Shafer talking to a parent who is about to begin, in the tone the whole method is written in — unhurried and kind. Three things to watch for and three things to do, the most useful being: you do not have to teach everything this year. Small constant touches, layer on layer.',
    checked: '2026-08-20'
  },

  montessori: {
    id: 'GcgN0lEh5IA',
    title: 'Montessori Madness!',
    channel: '321fastdraw',
    mins: '5:44',
    views: 926165,
    why: 'It opens with a mother describing her son moving from a Montessori school to a conventional one — she does not talk about grades or class sizes, she says she watched the light in his eyes go out. From there it lays out the one real difference: conventional schools assume a child must be made to learn, Montessori assumes the child already wants to.',
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
    id: 'Bg-GEzM7iTk',
    title: 'The decline of play',
    channel: 'Peter Gray · TEDxNavesink',
    mins: '16:03',
    views: 869126,
    why: 'The research case underneath unschooling, from the man who made it. Gray studies play as a biologist: what it is for, what it builds, and what has happened to children over the fifty years in which free play has been steadily taken away from them. The most persuasive sixteen minutes on why self-directed learning is not neglect.',
    checked: '2026-08-20'
  },

  athens: {
    id: 'ar8S6virCwM',
    title: 'A day in the life of an ancient Athenian',
    channel: 'TED-Ed',
    mins: '5:02',
    views: 4709620,
    why: 'One family in Athens in 427 BC, hour by hour — the household, the children, the assembly, the workshop. It puts you inside the city that invented this way of raising a person, rather than describing it from outside.',
    note: 'It is honest about the parts we would not keep: the family owns slaves, and Dexileia can neither vote nor own property. Worth seeing whole rather than tidied up.',
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
