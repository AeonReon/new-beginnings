// METHODS — extended methodology data for the launcher and per-tradition pages.
// Each entry has visual identity (color triplet, icon, era) plus deep content where built.
// The `sections` object holds the five sub-tiles. Unbuilt sub-tiles show a "coming soon" card.

window.METHODS = [
  {
    id: 'charlotte-mason',
    name: 'Charlotte Mason',
    short: 'Mason',
    tagline: 'Living books · narration · nature · habit',
    era: 'England · 1842–1923',
    color: '#65a30d',
    colorDeep: '#3f6212',
    colorSoft: '#ecfccb',
    icon: 'leaf',
    built: true,
    blurb: 'A Victorian schoolmistress who rejected fact-cramming and built a method around living books, the child\'s own narration, hours outdoors, the slow training of habit, and what she called "the inward part of education."',
    borrows: 'Almost everything. Living books, narration, picture and composer study, nature journals, habit training, short lessons.',
    avoids: 'Nothing structural — her method is the spine. We only add Montessori\'s math materials, since her own math is thin.',
    sections: {
      'core-idea': {
        title: 'Core idea',
        icon: 'compass',
        intro: 'A child is a person, not a vessel to be filled. The parent\'s job is to set a wide and generous feast, train good habits, and then get out of the way.',
        principles: [
          {
            name: 'The child is born a person',
            body: 'Not a blank slate, not a lump of clay. A whole human being with a will, an intellect, and an inner life from day one.',
            why: 'How you treat a child at 4 — as a person to be reasoned with or as an object to be managed — shapes who they become at 14. The method changes when the philosophy changes.'
          },
          {
            name: 'Education is the science of relations',
            body: 'A child learns by forming real relationships with real things — a tree, a poem, a piece of music, a story, a person — not by consuming pre-digested information about them.',
            why: 'A 4-year-old who has sat under one oak in four seasons knows that oak in a way no textbook can deliver. The relationship is the knowledge.'
          },
          {
            name: 'Living books, not twaddle',
            body: 'Books written by one passionate author who loves their subject, in language that is alive. Not committee-written textbooks, not dumbed-down readers, not licensed character books.',
            why: 'A child fed on twaddle develops a taste for twaddle. A child fed on Beatrix Potter, Mother Goose, Robert Louis Stevenson develops a taste for the real thing — which lasts a lifetime.'
          },
          {
            name: 'Narration: the child tells it back',
            body: 'After reading aloud, the parent asks, "Tell me what you remember." The child speaks; the parent listens. No quizzing. No correcting. Just listening.',
            why: 'Retelling forces synthesis. The child who can tell a story back has truly understood it. The act of speaking it locks it in better than any worksheet ever could.'
          },
          {
            name: 'Short lessons, full attention',
            body: 'Ten to fifteen minutes at four. Whole attention for that brief window — then stop while attention is still warm. Never push past the point of focus.',
            why: 'Attention is the master habit. Stopping while the child is still attending teaches them that they can attend. Pushing past it teaches the opposite.'
          },
          {
            name: 'Habit as the rail',
            body: 'Lay one habit at a time, as a rail the child\'s life can run on. Obedience, attention, truthfulness, neatness. One habit, six weeks, until it runs without thought.',
            why: 'A 4yo with the habit of coming the first time you call lives a different life from one who must be called five times. The habit is freedom from the constant friction of small battles.'
          },
          {
            name: 'Out of doors, hours every day',
            body: 'Mason said 4–6 hours outside in good weather. At minimum, 2–3 hours, in nearly any weather. Not "a nature walk" — just outside.',
            why: 'The 4yo body is still integrating itself through motion, balance, risk, sensory variety. Indoors deprives them of the very thing they are made to do at this age.'
          }
        ]
      },
      'day-in-life': {
        title: 'A day in the life',
        icon: 'sun',
        intro: 'A Mason day for a 4-year-old is unhurried, anchored by a morning ritual, then mostly outside and play. Formal lessons are not part of the day yet — Mason did not begin them until 6.',
        timeline: [
          { time: '7:00', title: 'Slow morning', body: 'Wake naturally. Get dressed. Breakfast with the family — adult conversation around the table is part of the education.' },
          { time: '8:30', title: 'Morning basket', body: 'Fifteen to twenty minutes around the breakfast table or on the rug: a poem, a hymn or folk song, one picture book, one Bible story or myth. Repeat the same material for a fortnight.' },
          { time: '9:00', title: 'Outdoor block', body: 'Two to four hours outside. A walk, the garden, the park, the woods. The parent narrates one or two things they see ("the buds are tight today") and otherwise lets the child lead.' },
          { time: '12:30', title: 'Family lunch', body: 'A real meal together. Conversation. The child helps lay the table and tidy after.' },
          { time: '13:30', title: 'Rest / quiet time', body: 'A nap, or an hour of independent quiet play in their room. A picture book on the bed. No screens.' },
          { time: '15:00', title: 'Free play', body: 'Blocks, dolls, dress-up, drawing, mud. No adult agenda. The parent is nearby and available but not directing.' },
          { time: '16:30', title: 'Practical life', body: 'The child helps with whatever real work is happening — chopping a banana, folding tea towels, sweeping the porch, watering plants.' },
          { time: '17:30', title: 'Family dinner', body: 'A second real meal together. Read aloud at the table if everyone is content.' },
          { time: '19:00', title: 'Bedtime ritual', body: 'Bath, a chapter from a long read-aloud (Beatrix Potter, A.A. Milne, Wind in the Willows), a verse or prayer, lights out by 19:30–20:00.' }
        ],
        note: 'This is the shape, not the timetable. If outdoor block runs until 1pm because the child found a snail, that is the day doing its job.'
      },
      'activities': {
        title: 'Things you can do this week',
        icon: 'hand',
        intro: 'Twenty Mason-true activities for a 4-year-old. Pick one or two a day. None of them is "the lesson"; they are how the day fills itself.',
        items: [
          { name: 'Memorise one short verse', body: 'Eight to twelve lines. Say it together once at breakfast and once at bedtime, every day for two weeks. By week 2 the child will say it with you.' },
          { name: 'Visit one tree, one season', body: 'Pick a tree near you. Visit it weekly. Notice what is the same and what has changed. Take a leaf home in autumn.' },
          { name: 'Read one Beatrix Potter, twice', body: 'Choose Peter Rabbit, Squirrel Nutkin, or Jemima Puddle-Duck. Read it Monday. Read it Tuesday. Ask Wednesday: "Can you tell me what happened?"' },
          { name: 'A loaf of bread together', body: 'The child measures (with help), kneads, watches it rise. Eat it warm. Repeat weekly until they can do most of it themselves.' },
          { name: 'Picture study, one painting, two weeks', body: 'Print one painting (Vermeer, Renoir, Van Gogh). Put it on the wall. Look at it for two minutes a day. Talk about what you see.' },
          { name: 'Composer study, one piece, two weeks', body: 'Play one piece daily — Mozart\'s Magic Flute overture, Vivaldi\'s Spring. Don\'t explain. Let it become familiar.' },
          { name: 'Pour water from a small pitcher', body: 'Set up a child-sized pitcher and two cups on a tray. Let them pour every morning. Spills are part of it.' },
          { name: 'Sweep with a child-sized broom', body: 'Real broom, child-sized. Real mess to sweep. Real work — not pretend.' },
          { name: 'Cut a banana with a butter knife', body: 'Sitting at the table. The child does the cutting. You watch and do nothing.' },
          { name: 'Find and name three birds', body: 'On your walks. Use one good field guide or a printed page from RSPB. Repeat until they greet the robin like a friend.' },
          { name: 'Tell a fairy tale from memory', body: 'No book. Just you, telling. Hansel and Gretel, Three Billy Goats Gruff, Goldilocks. Tell it differently than the book — that is the point.' },
          { name: 'Sing a hymn, daily, for a month', body: 'One hymn. Same one. Every morning. By month\'s end it is theirs forever.' },
          { name: 'Walk to the post box', body: 'A short errand the child can lead. Buy a stamp. Post a letter to a grandparent. Real-world competence.' },
          { name: 'Bring something in from outside', body: 'A pinecone, a feather, an interesting stone. Put it on a nature shelf. Add to it over the year.' },
          { name: 'Help set the table', body: 'Every meal. The same way each time. Practice = habit.' },
          { name: 'A finger-rhyme repertoire', body: 'Round and Round the Garden, This Little Piggy, Five Little Ducks. Repeat until the parent is sick of them and the child still asks.' },
          { name: 'Beeswax modelling', body: 'A small block of beeswax warmed in the hand. Shape into an animal, a person, a snail. No instructions.' },
          { name: 'Watercolour without a plan', body: 'Wet paper, a few colours, one brush. No "paint a tree." Just colour, water, paper.' },
          { name: 'Lie on the grass and listen', body: 'Five minutes. Eyes closed. Name three sounds. Repeat in different places.' },
          { name: 'Read aloud above their level', body: 'A chapter of Winnie-the-Pooh, of Charlotte\'s Web, of The Wind in the Willows. They will not catch every word. They will catch the shape and rhythm of real English.' }
        ]
      },
      'reading-list': {
        title: 'Reading list',
        icon: 'book',
        intro: 'Two columns: what to read to the child, and what to read for yourself. Mason expected the parent to keep reading too — the child is being formed partly by the inner furniture of the adult.',
        forChild: {
          intro: 'Living books only. Read aloud, even when the chapter is "above" their age. They take in the rhythm of real English long before they decode the words.',
          groups: [
            {
              heading: 'Picture books to own',
              books: [
                'Beatrix Potter — the complete set (Peter Rabbit, Squirrel Nutkin, Tom Kitten, Jemima Puddle-Duck, etc.)',
                'Robert McCloskey — Make Way for Ducklings, Blueberries for Sal, One Morning in Maine',
                'Margaret Wise Brown — Goodnight Moon, The Runaway Bunny',
                'Wanda Gág — Millions of Cats',
                'Virginia Lee Burton — Mike Mulligan and His Steam Shovel, The Little House',
                'Marjorie Flack — Angus and the Ducks',
                'Beatrice Schenk de Regniers — May I Bring a Friend?'
              ]
            },
            {
              heading: 'Mother Goose & verse',
              books: [
                'Mother Goose — any well-illustrated edition (Tasha Tudor, Blanche Fisher Wright)',
                'Robert Louis Stevenson — A Child\'s Garden of Verses',
                'A.A. Milne — When We Were Very Young, Now We Are Six',
                'Christina Rossetti — Sing-Song (a nursery rhyme book)'
              ]
            },
            {
              heading: 'Fairy tales & myth (told and read)',
              books: [
                'The Brothers Grimm — selected (avoid the heavily sanitised editions)',
                'Hans Christian Andersen — selected',
                'Aesop\'s Fables — a children\'s edition with one fable per page',
                'D\'Aulaires\' Book of Greek Myths — start dipping at 5, listening earlier'
              ]
            },
            {
              heading: 'Chapter books to read aloud',
              books: [
                'A.A. Milne — Winnie-the-Pooh, The House at Pooh Corner',
                'Kenneth Grahame — The Wind in the Willows (start a chapter at a time near 4½)',
                'E.B. White — Charlotte\'s Web',
                'Laura Ingalls Wilder — Little House in the Big Woods (later in the year)'
              ]
            },
            {
              heading: 'Bible & sacred (if your tradition uses it)',
              books: [
                'A children\'s storybook Bible — The Jesus Storybook Bible (Sally Lloyd-Jones) is widely loved',
                'Tomie dePaola — The Lady of Guadalupe, Patrick: Patron Saint of Ireland (for narrative)'
              ]
            }
          ]
        },
        forParent: {
          intro: 'Mason cannot be summarised in a paragraph. If she becomes your spine, plan to spend a year reading slowly.',
          books: [
            { title: 'Home Education (Volume 1)', author: 'Charlotte Mason, 1886', note: 'Free at amblesideonline.org. Dense Victorian prose. Skim, return, skim again. The first 100 pages are the most important.' },
            { title: 'A Charlotte Mason Companion', author: 'Karen Andreola', note: 'The gentlest popular introduction. Read first if Mason herself is too much.' },
            { title: 'For the Children\'s Sake', author: 'Susan Schaeffer Macaulay', note: 'The book that brought Mason back to a generation of home-educating parents. Short, warm, persuasive.' },
            { title: 'When Children Love to Learn', author: 'Elaine Cooper (ed.)', note: 'Essays by Mason teachers. Practical. Useful once you have decided.' },
            { title: 'Know and Tell', author: 'Karen Glass', note: 'The single best treatment of narration as a method.' },
            { title: 'Consider This', author: 'Karen Glass', note: 'Mason in conversation with the classical tradition. Short and clear.' },
            { title: 'A Living Education: 75 Habits, Skills and Attitudes', author: 'Jen Mackintosh', note: 'A practical handbook for the early years specifically.' }
          ]
        },
        free: 'Almost everything Mason wrote is at amblesideonline.org for free, plus their full curriculum guide. Year 0 (under 6) is their preschool plan.'
      },
      'competency': {
        title: 'What to expect at four',
        icon: 'sprout',
        intro: 'Mason was suspicious of milestone checklists — she thought they made parents anxious and children performative. What follows is what a typical 4-year-old in a Mason home is doing. None of it is a test; missing items at five are cues, not alarms.',
        landmarks: [
          { area: 'Attention', items: ['Sits through a short read-aloud (5–15 minutes) without wriggling away', 'Can be called once and come (with the habit set)', 'Tells back, in their own words, what was just read'] },
          { area: 'Language', items: ['Uses sentences of 4–6 words', 'Asks "why" and "how" questions', 'Recognises rhyme and plays with rhyming words', 'Knows the names and sounds of some letters (most, not yet)'] },
          { area: 'Knowledge of the world', items: ['Names common birds, trees, or flowers from your area', 'Recognises one painting they have looked at often', 'Hums or sings a hymn or folk song they have heard for weeks', 'Re-tells a familiar fairy tale or fable'] },
          { area: 'Habits', items: ['Brings a coat without being asked when going outside', 'Helps clear the table without complaint (most days)', 'Goes to bed in the same order each night without protest (most nights)'] },
          { area: 'Hands', items: ['Holds a crayon with a tripod-ish grip', 'Cuts along a line with safety scissors', 'Spreads butter, pours water from a small pitcher, strings beads'] },
          { area: 'Body', items: ['Climbs confidently', 'Hops on one foot a few times', 'Catches a large ball most of the time', 'Pedals a tricycle or balance bike'] }
        ],
        note: 'A child missing several items at five is not "behind" — they are showing you which underlying activity to introduce. Habits laid down at four run the engine. Skills laid down at four neutralise by ten.'
      }
    }
  },
  {
    id: 'montessori',
    name: 'Montessori',
    short: 'Montessori',
    tagline: 'Prepared environment · practical life · self-correction',
    era: 'Italy · 1907',
    color: '#c2410c',
    colorDeep: '#7c2d12',
    colorSoft: '#ffedd5',
    icon: 'cube',
    built: false,
    blurb: 'Italian physician Maria Montessori built a method around the prepared environment, beautiful real materials, and trusting the child to choose their own work during a long uninterrupted block.',
    borrows: 'Practical life with real tools, the math materials (number rods, golden beads), respect for the child\'s independence.',
    avoids: 'The prohibition on fantasy play — fairy tales do real work on moral imagination.'
  },
  {
    id: 'waldorf',
    name: 'Waldorf',
    short: 'Waldorf',
    tagline: 'Rhythm · beauty · imagination · no early academics',
    era: 'Germany · 1919',
    color: '#be185d',
    colorDeep: '#831843',
    colorSoft: '#fce7f3',
    icon: 'flower',
    built: false,
    blurb: 'Rudolf Steiner\'s schools wrap childhood in a strong daily and seasonal rhythm — beeswax, watercolour, fairy tales told from memory, hours outside, no letters or numbers before the second teeth.',
    borrows: 'Predictable rhythm, natural materials, festival life, stories told and re-told.',
    avoids: 'Strict delayed-reading dogma; the underlying anthroposophy. Practices stand on their own.'
  },
  {
    id: 'classical',
    name: 'Classical',
    short: 'Classical',
    tagline: 'Truth · goodness · beauty · the great tradition',
    era: 'Greece & Rome · refined by the medieval Christian schools',
    color: '#1d4ed8',
    colorDeep: '#1e3a8a',
    colorSoft: '#dbeafe',
    icon: 'column',
    built: false,
    blurb: 'The Trivium — grammar, logic, rhetoric — applied to a 4-year-old means fill the well: memorise a poem, sing a hymn, hear a myth, watch a parent do real work. Formal trivium begins later.',
    borrows: 'The frame — education as paideia, the formation of a whole person oriented to truth, goodness, beauty. A reading list spanning the Western canon.',
    avoids: 'Fact-memorisation drill at four; the Classical Conversations co-op pressure.'
  },
  {
    id: 'wild-free',
    name: 'Wild + Free',
    short: 'Wild+Free',
    tagline: 'Outdoors first · slow living · childhood as sacred',
    era: 'USA · 2014–',
    color: '#059669',
    colorDeep: '#064e3b',
    colorSoft: '#d1fae5',
    icon: 'tree',
    built: false,
    blurb: 'Ainsley Arment\'s movement gathers Mason, nature-study, and a reverent view of childhood into a modern, photogenic practice. Hours outside, morning baskets, mixed-age siblings, slow mornings.',
    borrows: 'The outdoor primacy, the slowness, the picture-book curation.',
    avoids: 'The Instagram performance treadmill; over-romanticised aesthetic that can become its own pressure.'
  },
  {
    id: 'reggio',
    name: 'Reggio Emilia',
    short: 'Reggio',
    tagline: 'The hundred languages · child as researcher',
    era: 'Italy · post-WWII',
    color: '#ea580c',
    colorDeep: '#9a3412',
    colorSoft: '#ffedd5',
    icon: 'palette',
    built: false,
    blurb: 'Born in the rubble of post-war Italy, the Reggio approach treats the child as a competent researcher, the classroom as a "third teacher," and art as one of a hundred languages a child uses to think.',
    borrows: 'Documentation (the parent observing and recording), beautiful prepared spaces, taking children\'s questions seriously.',
    avoids: 'The dependence on a full studio/atelier and a trained atelierista — most of it is impractical at home.'
  },
  {
    id: 'forest-school',
    name: 'Forest School',
    short: 'Forest',
    tagline: 'Woods as the classroom · risk as part of learning',
    era: 'Scandinavia · 1950s, UK · 1990s',
    color: '#15803d',
    colorDeep: '#14532d',
    colorSoft: '#dcfce7',
    icon: 'pine',
    built: false,
    blurb: 'A weekly half- or full-day in the woods, in any weather. Tools, fire, dens, real risk under supervision. Strong in the UK, Scandinavia, increasingly worldwide.',
    borrows: 'The weekly woods commitment, the trust in tools and real risk.',
    avoids: 'Treating it as a complete method — it is one anchor in the week, not the whole education.'
  },
  {
    id: 'unschooling',
    name: 'Unschooling',
    short: 'Unschooling',
    tagline: 'Child-led · trust-based · no imposed curriculum',
    era: 'USA · 1970s · John Holt',
    color: '#0284c7',
    colorDeep: '#075985',
    colorSoft: '#e0f2fe',
    icon: 'compass',
    built: false,
    blurb: 'John Holt\'s response to compulsory schooling: follow the child\'s interests, surround them with rich resources, learn through living. Useful as a corrective to over-schooling.',
    borrows: 'The trust in the child\'s intrinsic motivation, the warning against premature instruction.',
    avoids: 'The neutrality on content — a tradition worth inheriting (Homer, Bach, the virtues) does not transmit itself by accident.'
  },
  {
    id: 'great-empires',
    name: 'Great Empires',
    short: 'Empires',
    tagline: 'How great civilisations formed their young',
    era: 'Athens · Rome · (more coming)',
    color: '#7c3aed',
    colorDeep: '#5b21b6',
    colorSoft: '#ede9fe',
    icon: 'laurel',
    built: false,
    blurb: 'Athens, Rome, and the later empires at their height each had a deliberate vision of how to raise a child into a citizen. What they read aloud, what virtues they trained, what work they expected. A grown-up library to inherit selectively.',
    borrows: 'Plutarch\'s Lives as moral biography. Quintilian on the early years. The Roman insistence that the family is the first school. The Greek paideia — the forming of a whole person.',
    avoids: 'The brutalities — slavery, severity, the warrior cult. We take the parts of the tradition that have stood the test of reasoning.'
  }
];

window.METHOD_BY_ID = (id) => window.METHODS.find(m => m.id === id);
