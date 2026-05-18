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
    built: true,
    blurb: 'Italian physician Maria Montessori built a method around the prepared environment, beautiful real materials, and trusting the child to choose their own work during a long uninterrupted block. The 3–6 classroom is called the "Primary" or "Children\'s House."',
    sections: {
      'core-idea': {
        title: 'Core idea',
        icon: 'compass',
        intro: 'Montessori observed that a young child, given a beautiful prepared environment and the freedom to choose meaningful work, will concentrate deeply, repeat eagerly, and develop themselves. The adult prepares; the child works.',
        principles: [
          { name: 'Follow the child', body: 'Watch what the child chooses, what they return to, what they ignore. Their interests are the curriculum — your job is to present rich possibilities and notice which take root.', why: 'A 4-year-old\'s developing brain prioritises certain skills in certain windows. The child knows what they need before any test could detect it. Watching saves you from forcing the wrong work at the wrong time.' },
          { name: 'The prepared environment', body: 'A low shelf with a handful of carefully chosen materials, each on its own tray, each complete and beautiful. The room is the teacher; the adult mostly observes.', why: 'Choice in a contained, deliberate environment trains both freedom and self-discipline. Too much choice overwhelms; no choice infantilises. Eight beautiful trays beats a hundred plastic toys.' },
          { name: 'The three-hour work cycle', body: 'A long uninterrupted block (90 minutes to three hours) where the child chooses, works, repeats, finishes. The deepest concentration happens around the 90-minute mark — not before.', why: 'Adults underestimate how long it takes a 4yo to enter true concentration. Constant interruption ("now we do snack, now we do circle") prevents the deepest learning of all — the learning to attend.' },
          { name: 'Real work over pretend', body: 'A child-sized broom that sweeps real dirt. A small pitcher that pours real water. A butter knife that cuts real banana. Practical life is not a warm-up to "real" school — it is the school.', why: 'Competence comes from work that matters. Toy kitchens teach the child their work is fake. Real kitchens teach them they are a person among persons.' },
          { name: 'Self-correcting materials', body: 'Materials reveal their own errors — the cylinder block has only one hole each cylinder fits, so the child sees their own mistake. No adult intervention required.', why: 'An adult saying "wrong, try again" undermines confidence. The material saying "this one doesn\'t fit here" builds confidence — the child solves it without losing face.' },
          { name: 'The absorbent mind', body: 'Under six, children take in everything around them without effort — language, manners, music, atmosphere. After six, learning costs more effort. So fill the environment with what you most want them to absorb.', why: 'What surrounds the 4yo becomes them. The quality of the music, the kindness of the words, the order of the home — all of it sinks in unfiltered. Choose carefully what you put around them.' },
          { name: 'Grace and courtesy', body: 'Direct teaching of how to interrupt, how to greet, how to pass, how to apologise, how to say no. Modelled, named, practised. Not "be good" — specific, learnable lessons.', why: 'Social grace is a skill, not a personality trait. A 4yo who has been shown "say excuse me, then wait" knows what to do; one who has only been told "don\'t interrupt" doesn\'t. Teach the skill.' }
        ]
      },
      'day-in-life': {
        title: 'A day in the life',
        icon: 'sun',
        intro: 'A Montessori day for a 4-year-old at home centres on a long work cycle in the morning and freedom in the afternoon. The home shelves are the "prepared environment" — kept tidy, rotated weekly.',
        timeline: [
          { time: '7:00', title: 'Slow morning', body: 'Wake. Dress (the child dresses themselves — Velcro shoes, easy buttons, hooks at child height). Help lay the table. Breakfast together.' },
          { time: '8:30', title: 'Tidy and set up', body: 'The child puts their breakfast plate in the sink. Wipes their place. Goes to the work shelf and chooses today\'s first work.' },
          { time: '9:00', title: 'Work cycle (long)', body: 'A 90-minute to three-hour block. The child chooses their work — pouring rice, sandpaper letters, the pink tower, the number rods. They work, repeat, put away, choose again. The adult observes, only intervenes if needed.' },
          { time: '11:30', title: 'Snack (prepared by the child)', body: 'The child chops their own banana, spreads butter on toast, pours their own water. Sits at the table to eat.' },
          { time: '12:00', title: 'Outside', body: 'Garden, park, woods. Real walking, real climbing. The garden is part of practical life — watering, weeding, harvesting whatever is ready.' },
          { time: '13:00', title: 'Family lunch', body: 'A real meal. The child helps prepare and clear.' },
          { time: '14:00', title: 'Rest', body: 'A nap, or an hour of quiet on the bed with a picture book. No screens.' },
          { time: '15:30', title: 'Free play and creative work', body: 'Drawing with real pencils on real paper, modelling with clay, dress-up, blocks. Materials are accessible at child height; child puts them away when finished.' },
          { time: '17:30', title: 'Help with dinner', body: 'Set the table. Wash lettuce. Stir what is being stirred. The kitchen is part of the schoolroom.' },
          { time: '18:30', title: 'Dinner, bath, bed', body: 'Family meal. Bath (the child washes themselves). One story. Lights out by 19:30.' }
        ],
        note: 'The non-negotiable is the long uninterrupted morning work cycle. Everything else flexes.'
      },
      'activities': {
        title: 'Things you can do this week',
        icon: 'hand',
        intro: 'Twenty Montessori-true activities for a 4-year-old at home. Many use what is already in your kitchen. None require expensive materials.',
        items: [
          { name: 'Set up a pouring tray', body: 'A small pitcher, two small cups, a sponge, a tray. The child pours water from one cup to the other and back, all morning if they like.' },
          { name: 'Spoon dried beans', body: 'Two small bowls, a spoon, a tray of dried chickpeas. The child spoons from one bowl to the other. When they finish, they reverse it.' },
          { name: 'Polish a piece of silver', body: 'A small jar of polish, a soft cloth, a piece of real silver (a spoon, a small dish). The child polishes until it gleams.' },
          { name: 'Wash a small mirror', body: 'A spray bottle of water, a cloth, a small framed mirror. They learn to spray, wipe, dry.' },
          { name: 'Sandpaper letters', body: 'Buy a set (Melissa & Doug do an inexpensive one) or make your own. The child traces each letter while you say the sound (not the name).' },
          { name: 'Number rods or red rods', body: 'A graduated set of rods (long to short). Lay them out, run a finger along each, count as you go. The hand learns what the brain will later understand.' },
          { name: 'Sort buttons by colour', body: 'A bowl of mixed buttons, several smaller bowls. The child sorts. Simple. Absorbing.' },
          { name: 'Chop a soft fruit', body: 'A banana, a strawberry, a pear quarter, a butter knife. Real knife eventually. Sit with them but do not chop for them.' },
          { name: 'Open and close containers', body: 'A basket of jars, boxes, tins with different lids — screw, snap, hinged. The child opens, closes, opens again.' },
          { name: 'Lace beads on a string', body: 'Wooden beads with a generous hole, a stiff cord. Make patterns or just thread. Builds the pencil grip that will later write.' },
          { name: 'Wash dishes (a few real ones)', body: 'A low stool at the sink. Warm water, soap, a small towel. They wash their own plate after lunch.' },
          { name: 'Fold tea towels', body: 'A basket of clean tea towels. Show them how to fold once. Then let them fold the whole basket, however they manage.' },
          { name: 'Match leaves', body: 'On a walk, pick up two of each kind of leaf. Bring them home, lay them out, find the matching pairs.' },
          { name: 'Pin pricking', body: 'A printed shape on cardstock, a thumbtack (with cork), a piece of felt underneath. The child pricks along the line. When done, the shape pops out. Hand control.' },
          { name: 'Make a sandwich, end to end', body: 'Bread, butter, filling, knife, plate. The child does the whole thing. Their lunch.' },
          { name: 'Watering plants', body: 'A small watering can, the houseplants. The child waters each one in turn — same plant, same can, every morning.' },
          { name: 'Sort socks', body: 'The clean laundry basket. The child finds matching pairs and folds them.' },
          { name: 'Practise saying excuse me', body: 'A grace-and-courtesy lesson. Model: tap shoulder, wait, say excuse me. Practise with you, with siblings.' },
          { name: 'Pin work', body: 'Cork board, push pins, a piece of paper. The child arranges pins in a pattern. Concentration.' },
          { name: 'Dust the bookshelf', body: 'A small cloth. Show them once. Then they dust every Saturday morning, their job.' }
        ]
      },
      'reading-list': {
        title: 'Reading list',
        icon: 'book',
        intro: 'Montessori herself wrote about education for the parent. For the child, the recommendation is reality-based stories at four — the imaginary creature stories come later. Many Montessori families relax this rule.',
        forChild: {
          intro: 'Real-world books, beautifully illustrated. Fairy tales are not forbidden in your home even if the purist classroom omits them.',
          groups: [
            { heading: 'Reality-based picture books', books: [
              'Tana Hoban — Black on White, White on Black, I Read Signs (photographs of the real world)',
              'Robert McCloskey — Make Way for Ducklings, Blueberries for Sal',
              'Ezra Jack Keats — The Snowy Day, Whistle for Willie',
              'Margaret Wise Brown — The Important Book',
              'Gail Gibbons — anything (clear non-fiction on bees, gardens, weather)'
            ]},
            { heading: 'Nature and observation', books: [
              'Aliki — Digging Up Dinosaurs, A Weed Is a Flower',
              'Lois Ehlert — Planting a Rainbow, Eating the Alphabet',
              'Steve Jenkins — Actual Size, What Do You Do With a Tail Like This?'
            ]},
            { heading: 'Practical life and family', books: [
              'Vera B. Williams — A Chair for My Mother',
              'Mem Fox — Time for Bed, Where Is the Green Sheep?',
              'Helen Oxenbury — All Fall Down, Tickle Tickle, Clap Hands'
            ]},
            { heading: 'Fairy tales (purists disagree; we include them)', books: [
              'The Brothers Grimm — selected, unsanitised',
              'Beatrix Potter — the full set',
              'Aesop\'s Fables — for the moral imagination'
            ]}
          ]
        },
        forParent: {
          intro: 'Montessori\'s own books are dense. Start with a modern interpreter, then return to her if you want depth.',
          books: [
            { title: 'The Absorbent Mind', author: 'Maria Montessori, 1949', note: 'The most accessible of her major works. Her theory of the under-six mind. Slow reading.' },
            { title: 'The Discovery of the Child', author: 'Maria Montessori, 1948', note: 'Her clearest account of the method itself. The materials, the prepared environment, the role of the adult.' },
            { title: 'Montessori from the Start', author: 'Paula Polk Lillard & Lynn Lillard Jessen', note: 'Birth to three but the philosophy applies beyond. Practical, gentle, beautifully done.' },
            { title: 'How to Raise an Amazing Child the Montessori Way', author: 'Tim Seldin', note: 'Photo-rich, practical, age-graded. The book to flip through in the early weeks.' },
            { title: 'The Montessori Toddler', author: 'Simone Davies', note: 'The most popular modern Montessori book. Davies also runs The Montessori Notebook online.' },
            { title: 'Understanding Montessori', author: 'Maren Schmidt', note: 'A short, clear primer if you only read one.' }
          ]
        },
        free: 'AMI (Association Montessori Internationale) hosts free essays at montessori-ami.org. The Montessori Notebook blog by Simone Davies is the best free practical resource.'
      },
      'competency': {
        title: 'What to expect at four',
        icon: 'sprout',
        intro: 'A 4-year-old in a Montessori-aware home is independent in self-care, capable of long concentration on a chosen task, and starting to recognise letters and numbers through the hand before the brain.',
        landmarks: [
          { area: 'Independence', items: ['Dresses themselves (Velcro or simple buttons)', 'Pours their own water from a small pitcher', 'Prepares a simple snack (banana, toast, cheese on bread)', 'Carries a tray steadily across the room', 'Puts work away before choosing the next'] },
          { area: 'Concentration', items: ['Sustains a chosen activity 20–45 minutes (longer with the right material)', 'Repeats a satisfying activity many times in a row', 'Returns to unfinished work the next day'] },
          { area: 'Hand', items: ['Tripod-ish pencil grip', 'Threads beads, laces cards, picks up small objects with thumb-finger pincer', 'Traces sandpaper letters and recognises some by feel'] },
          { area: 'Early literacy (through the hand)', items: ['Recognises most letter sounds (not necessarily names)', 'Identifies the first sound of a familiar word ("mmm-mum")', 'May begin to build simple words with the movable alphabet (cat, mat, pin)'] },
          { area: 'Early numeracy (through the materials)', items: ['Counts objects 1-to-10 with one-to-one correspondence', 'Recognises numerals 1–10 by sight', 'Compares "more" and "less" with concrete objects'] },
          { area: 'Grace and courtesy', items: ['Says excuse me to interrupt', 'Pours water for a guest', 'Greets adults by name', 'Apologises specifically when prompted ("I\'m sorry I spilled your tea")'] }
        ],
        note: 'Independence is the most visible marker. A 4-year-old who can dress themselves, prepare a snack, and clean up after themselves has had something done right.'
      }
    }
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
    built: true,
    blurb: 'Rudolf Steiner\'s schools wrap childhood in a strong daily, weekly, and seasonal rhythm. Beeswax modelling, wet-on-wet watercolour, fairy tales told from memory, hours outside in any weather, festival life — and no letters or numbers introduced until the second teeth come in around age 6 or 7.',
    sections: {
      'core-idea': {
        title: 'Core idea',
        icon: 'compass',
        intro: 'Steiner held that the first seven years are about building the physical body and the will, through imitation, rhythm, and warmth. Intellectual work belongs to a later stage. The early years are protected.',
        principles: [
          { name: 'Rhythm before schedule', body: 'A day, a week, a year that returns in roughly the same shape. Monday is bread day. Tuesday is painting day. Advent unfolds the same way each year. The shape is the security.', why: 'A 4-year-old has not yet developed the ability to imagine the future. Rhythm gives them the feeling that the world is reliable, which is the foundation of all later confidence.' },
          { name: 'Imitation, not instruction', body: 'A 4yo does not learn from being told. They learn from watching a parent knead bread, sweep the floor, sing while mending. Live well in their presence; they will absorb it.', why: 'The under-seven brain is wired for imitation. Direct instruction at this age either fails or shifts the child into a precocious-adult mode that costs more than it gives.' },
          { name: 'Protect the senses', body: 'Natural materials (wood, wool, silk, beeswax). Soft voices. No screens. No commercial characters. Cardboard, sticks, scarves over plastic.', why: 'The 4yo\'s nervous system is still being built and is unusually open to sensory input. Plastic, screens, and over-stimulation jangle a system that should be settling.' },
          { name: 'Stories told, not read', body: 'A simple fairy tale memorised by the parent, told in your own voice, repeated for a fortnight without variation. The same story, the same words, every night.', why: 'A told story comes from your voice and face and is alive. A read story is one step removed. A repeated story tells the child the world is large enough to come back to.' },
          { name: 'Festival life', body: 'Mark the seasons in real ways — make lanterns for Martinmas, plant bulbs in autumn, light candles in winter, dance in spring. The year has a shape; the child feels it.', why: 'A 4yo who lives a festival year develops a sense of time that no calendar can teach. Spring is not a fact; it is the feeling of warmth returning after candles.' },
          { name: 'Outside in any weather', body: 'There is no bad weather, only bad clothes. Wellies, waterproofs, warm wool. Two to four hours outside, every day.', why: 'The body is still building itself through movement, balance, weather, light. The cold day makes the warm home meaningful. Avoidance teaches the child the world is fragile.' },
          { name: 'No early academics', body: 'No letters before six. No numbers as abstractions. Reading and writing belong to the next stage of development — the brain is not yet ready in a way that protects life-long love of learning.', why: 'Reading taught too early gives a two-year head start that is neutralised by ten in every longitudinal study. The cost is often a child who finds reading a chore for the rest of school.' }
        ]
      },
      'day-in-life': {
        title: 'A day in the life',
        icon: 'sun',
        intro: 'A Waldorf day for a 4-year-old is unhurried, anchored in rhythm, full of warmth, song, and outdoors. The week has anchors: bread day, painting day, soup day.',
        timeline: [
          { time: '7:00', title: 'Slow waking', body: 'Wake without alarms if possible. A candle lit at the table. Warm porridge or buttered bread. The parent moves calmly; the child imitates.' },
          { time: '8:00', title: 'Circle time', body: 'A short verse, a seasonal song, a finger rhyme, a movement game. Same opening every day for the week. Repeated through the term.' },
          { time: '8:30', title: 'The day\'s anchor work', body: 'Monday — bake bread. Tuesday — wet-on-wet watercolour. Wednesday — beeswax modelling. Thursday — soup-making. Friday — beeswax cleanup and house cleaning. The parent leads; the child joins as they can.' },
          { time: '10:00', title: 'Free play', body: 'Open-ended toys — silks, blocks, a basket of pinecones, dolls without faces. The parent works nearby (mending, kneading, knitting). The child plays, joins, drifts back.' },
          { time: '12:00', title: 'Outside, in any weather', body: 'Two hours minimum. The garden, a walk, the woods. Boots, waterproofs. Real climbing, real puddles.' },
          { time: '13:30', title: 'Family lunch', body: 'A warm meal. Grace before, song after. The same meal returns weekly.' },
          { time: '14:30', title: 'Rest with a story', body: 'Lie on a bed or under a blanket on the rug. The parent tells a fairy tale from memory — the same one for the week. Quiet afterwards.' },
          { time: '15:30', title: 'Helping with house', body: 'Sweeping, polishing, watering, folding. Whatever real work is happening, the child is included.' },
          { time: '17:00', title: 'Family dinner', body: 'Candle lit, hands held briefly, simple grace. Real food, family conversation. The child sets the table; helps clear.' },
          { time: '18:30', title: 'Bedtime ritual', body: 'Bath. A told story (often the same one as the afternoon, repeated). Verse. Lullaby. Lights out by 19:30.' }
        ],
        note: 'The week\'s anchor days are the spine. Monday is bread; Tuesday is painting. A 4yo who has lived two months of this can tell you what day it is by what is in the oven.'
      },
      'activities': {
        title: 'Things you can do this week',
        icon: 'hand',
        intro: 'Twenty Waldorf-true activities for a 4-year-old. Most use natural materials you can buy once and use for years.',
        items: [
          { name: 'Bake a loaf together, weekly', body: 'A simple recipe, the same one. The child measures, kneads, watches it rise. Eat the warm bread together. Repeat every Monday.' },
          { name: 'Wet-on-wet watercolour', body: 'Wet the paper, drop in two primary colours, watch them bleed. No "paint a tree." Just colour meeting water.' },
          { name: 'Beeswax modelling', body: 'A block of natural beeswax warmed in the hand. Shape a snail, a sleeping mouse, a fish. The wax is the material; the child is the artist.' },
          { name: 'Tell a fairy tale from memory', body: 'Pick one (Sweet Porridge, Goldilocks, Three Billy Goats Gruff). Memorise it. Tell it every night for two weeks. Do not vary it.' },
          { name: 'Make a lantern for Martinmas (November)', body: 'A glass jar, tissue paper, glue, a tea light. Process the child through the doing. Walk with lanterns at dusk on November 11th, singing a lantern song.' },
          { name: 'Sing the same song, daily, for a season', body: 'Pick one folk song or seasonal verse. Sing it every morning. By month\'s end the child sings it without prompting.' },
          { name: 'Finger-knit a snake', body: 'Wool yarn, four fingers. Show how to loop. Hours of meditative work for the child. Use the snake as a doll\'s belt afterwards.' },
          { name: 'A nature table', body: 'A low table or windowsill with a silk cloth in this season\'s colour. Add pinecones, leaves, a vase of weeds, a tiny gnome. Change with the season.' },
          { name: 'Plant a spring bulb in autumn', body: 'A daffodil bulb, a pot, soil. Plant in October. Watch through winter. Bloom in spring. The year is real.' },
          { name: 'Beeswax candle dipping (around Advent)', body: 'A pot of melted beeswax, a length of wick. Dip, dry, dip again. Slow, satisfying, beautiful.' },
          { name: 'A pentatonic flute or kantele', body: 'A simple five-note instrument. Even random playing sounds musical. No instruction — just availability.' },
          { name: 'Make soup together from scratch', body: 'A vegetable each day cut for the soup. By Thursday it is a meal. The child has cut every vegetable that is in the pot.' },
          { name: 'A silk for play', body: 'A 90cm square of dyed silk. Becomes a cape, a baby blanket, a roof, a river. Open-ended for years.' },
          { name: 'Sweep the floor with a real broom', body: 'A child-sized broom and dustpan. Sweep the same patch each morning. The habit forms over weeks.' },
          { name: 'Walk in any weather', body: 'Even — especially — when it is raining. A puddle is a destination. Boots and a waterproof are the curriculum.' },
          { name: 'A verse before meals', body: 'A short blessing or seasonal verse. The same one for the season, then change at the next festival. Spoken or sung together.' },
          { name: 'Light a candle at dinner', body: 'Every evening meal. The child lights it (with help). The candle is blown out together at the end.' },
          { name: 'Sing while you work', body: 'Folk songs while sweeping, lullabies while kneading. The child hears that work has a soundtrack and that you choose it.' },
          { name: 'A puppet from a wool sock', body: 'Wool sock, simple stitched eyes, a story to tell with it. The child can take it over for their own stories.' },
          { name: 'Mend something visibly', body: 'A small rip in clothes. Sit and stitch in front of the child. Let them try. Real repair, named.' }
        ]
      },
      'reading-list': {
        title: 'Reading list',
        icon: 'book',
        intro: 'For the child, the Waldorf instinct is oral storytelling over books. But picture books from the tradition exist, and chapter books for read-aloud belong in the home.',
        forChild: {
          intro: 'Less is more. A handful of beautiful books, returned to often, beats a shelf of novelties.',
          groups: [
            { heading: 'Stories to tell from memory (collect the texts)', books: [
              'Brothers Grimm — start with Sweet Porridge, The Bremen Town Musicians, The Star Money',
              'Russian fairy tales (Vasilisa, the Firebird)',
              'Norse and Celtic myths — start gently around 5–6'
            ]},
            { heading: 'Beautifully illustrated picture books', books: [
              'Elsa Beskow — Children of the Forest, Peter in Blueberry Land, Around the Year',
              'Sibylle von Olfers — The Story of the Root Children, The Story of the Snow Children',
              'Astrid Lindgren — illustrated editions (The Tomten, Christmas in Noisy Village)',
              'Jane Ray — The Twelve Dancing Princesses, illustrated Bible stories'
            ]},
            { heading: 'Seasonal and festival books', books: [
              'Susan Cooper — The Shortest Day (poem with illustrations)',
              'Tasha Tudor — A Time to Keep, The Doll\'s Christmas',
              'A "Wynstones Press" seasonal songbook'
            ]},
            { heading: 'Read-aloud for the parent\'s voice', books: [
              'A.A. Milne — Winnie-the-Pooh (gentle, perfect at four)',
              'Beatrix Potter — read aloud, never on screen',
              'Selma Lagerlöf — The Wonderful Adventures of Nils (around 5–6)'
            ]}
          ]
        },
        forParent: {
          intro: 'Steiner himself is difficult and esoteric. Modern Waldorf interpreters are much more accessible.',
          books: [
            { title: 'You Are Your Child\'s First Teacher', author: 'Rahima Baldwin Dancy', note: 'The classic Waldorf parenting book for the early years. Practical, warm, deeply rooted.' },
            { title: 'Heaven on Earth', author: 'Sharifa Oppenheimer', note: 'A handbook of creating a Waldorf-inspired home for ages 3–12. Lush, specific.' },
            { title: 'Beyond the Rainbow Bridge', author: 'Barbara Patterson & Pamela Bradley', note: 'Nurturing healthy children in the first seven years. Gentle and practical.' },
            { title: 'Simplicity Parenting', author: 'Kim John Payne', note: 'Not Waldorf-branded but Waldorf in spirit. On reducing, slowing, protecting childhood.' },
            { title: 'The First Three Years of the Child', author: 'Karl König', note: 'Steiner-inspired but accessible. The developmental view of the under-three years.' },
            { title: 'Children at Play', author: 'Heidi Britz-Crecelius', note: 'A short book on the seriousness of children\'s play. Worth reading slowly.' }
          ]
        },
        free: 'WaldorfToday.com aggregates free articles and seasonal verses. The Wynstones Press song collections are paid but worth the small cost.'
      },
      'competency': {
        title: 'What to expect at four',
        icon: 'sprout',
        intro: 'A 4-year-old in a Waldorf-aware home is calm, capable in the body, alive in imagination, and not yet pushed into letters or numbers. The "delay" is intentional, not neglectful.',
        landmarks: [
          { area: 'Imagination', items: ['Engages in long pretend play with simple props', 'Re-enacts stories they have heard repeatedly', 'Gives life to inanimate objects (sticks become horses, scarves become babies)', 'Joins in song and verse without needing to be asked'] },
          { area: 'Body', items: ['Climbs trees, balances on logs', 'Walks long distances (a 4yo can walk 2–4 km)', 'Manages outdoor risk — picks themselves up, tries again'] },
          { area: 'Hands', items: ['Models with wax or clay', 'Threads beads, finger-knits, tears paper purposefully', 'Holds a paintbrush with care'] },
          { area: 'Social', items: ['Imitates the adult\'s tone, words, gestures', 'Plays alongside other children (parallel play deepening to cooperative)', 'Says please and thank you because they hear you saying it'] },
          { area: 'Rhythm and habit', items: ['Knows the shape of the day without being told', 'Looks forward to Friday\'s ritual', 'Can be redirected with a song rather than a command'] },
          { area: 'What is NOT expected (and that\'s the point)', items: ['Not reading', 'Not writing letters', 'Not doing arithmetic', 'Not naming all the letters of the alphabet'] }
        ],
        note: 'Waldorf parents often face anxiety when they meet "their child should be reading" expectations. The longitudinal data on Waldorf-educated children shows they catch up to and surpass early-readers by age 10–12, with better attitudes to learning. Hold your nerve.'
      }
    }
  },
  {
    id: 'classical',
    name: 'Classical',
    short: 'Classical',
    tagline: 'Truth · goodness · beauty · the great tradition',
    era: 'Greece & Rome · refined by medieval and modern Christian schools',
    color: '#1d4ed8',
    colorDeep: '#1e3a8a',
    colorSoft: '#dbeafe',
    icon: 'column',
    built: true,
    blurb: 'The classical tradition holds that education is paideia — the formation of a whole human being, oriented to truth, goodness, and beauty. For a 4-year-old this means filling the well: memorise a poem, sing a hymn, hear a myth, watch a parent do real work. The formal trivium (grammar, logic, rhetoric) begins later — at four, the ground is being prepared.',
    sections: {
      'core-idea': {
        title: 'Core idea',
        icon: 'compass',
        intro: 'The classical tradition is not a method — it is an inheritance. The Greeks asked what makes a human flourish; the Romans asked how to form a citizen; the medieval Christians asked how to form a soul. All three answered: through truth, goodness, beauty, and the company of those who came before. At four, you are giving the child their first taste of that company.',
        principles: [
          { name: 'Paideia, not training', body: 'Paideia is the Greek word for forming a whole person — body, mind, soul, character. Not the production of a worker. Not the cramming of facts. The making of a human being.', why: 'A 4yo trained for utility becomes adept at the task and shallow in the soul. A 4yo formed in paideia may not yet read, but will know that the world has Mozart in it, and Homer, and saints, and that they belong to that.' },
          { name: 'Truth, goodness, beauty are real', body: 'The classical tradition holds that these are not preferences. A 4yo can sense the difference between a true word and a lie, between a kind act and a cruel one, between a beautiful song and a jingle. Teach them to attend.', why: 'A culture that calls everything relative produces a child unable to discern. A 4yo who has heard beautiful music will reject ugly music without being told to. The discernment is built by exposure.' },
          { name: 'The great books from the start', body: 'Even at four. Read aloud from Homer (a children\'s retelling), from the Bible, from Plutarch (selected stories), from Aesop, from the Bhagavad Gita if your tradition includes it. Not because the child will analyse them — because the rhythm and grandeur will enter.', why: 'A child who hears great language at four develops an ear for it. The "twaddle" books written for early readers leave them with a taste for twaddle. The real books leave them with a taste for the real.' },
          { name: 'Memory as filling the well', body: 'Memorised poems, verses, prayers, songs are treasures the child will draw from for life. Pick one short piece a month and learn it together by repetition, not by drill.', why: 'A 4yo memorises easily — it is what their brain is built to do. What they memorise now becomes accessible later when they are ready to understand it. The well is filled now; the bucket is drawn down for decades.' },
          { name: 'Virtue is a habit, not a feeling', body: 'Aristotle: we are what we repeatedly do. Honesty is not a feeling — it is the habit of telling the truth, formed by telling the truth many times. Teach virtues by structuring the daily act of them.', why: 'A 4yo who is told "be kind" but lives in chaos learns to perform kindness when watched. A 4yo whose day includes regular acts of small kindness (greeting a neighbour, sharing a snack) develops the habit, which becomes the disposition.' },
          { name: 'Stories form the moral imagination', body: 'Fairy tales, myths, saints\' lives, hero stories — unsanitised — are how a 4yo learns what cowardice looks like, what loyalty looks like, what honour looks like. Stripped fairy tales rob the child of the lesson.', why: 'You cannot tell a 4yo what courage is. They learn it by hearing about the youngest brother who set out alone. The moral imagination is built by story long before it can be argued.' },
          { name: 'The parent as mentor, not entertainer', body: 'In the classical tradition, the adult\'s authority is real — earned by knowing the tradition, lived in the daily example. Not friend, not entertainer, not service provider. Mentor.', why: 'A 4yo who senses their parent is forming them with purpose develops a different relationship to instruction than one who senses the parent is "providing experiences." Authority well-used is freeing, not restrictive.' }
        ]
      },
      'day-in-life': {
        title: 'A day in the life',
        icon: 'sun',
        intro: 'A classical day for a 4-year-old looks much like a Mason day with extra attention to memory work, virtue cultivation, and exposure to the great tradition. Short, deliberate inputs; long unstructured living.',
        timeline: [
          { time: '7:00', title: 'Morning prayer or verse', body: 'A short prayer if your tradition includes it; otherwise a verse memorised together. The same one for the week. Spoken at the table before breakfast.' },
          { time: '7:30', title: 'Family breakfast', body: 'A real meal. Adult conversation. The child hears, absorbs, sometimes joins.' },
          { time: '8:30', title: 'Memory work + read-aloud', body: 'Fifteen minutes. Repeat this month\'s poem together. Read one section of a story (Aesop\'s fable, a saint\'s life, a Plutarch episode). Ask "Tell me what happened?" — that is the day\'s narration.' },
          { time: '9:00', title: 'Outdoor block', body: 'Two to three hours outside. Free play and walking. The parent narrates one or two natural things they see.' },
          { time: '12:00', title: 'Practical life', body: 'Help cook lunch. Set the table. Pour water for the family.' },
          { time: '12:30', title: 'Family lunch + grace', body: 'A short grace. Conversation. The child listens to the adults.' },
          { time: '13:30', title: 'Rest with composer or picture', body: 'A piece of music chosen for the term (one composer for 4–6 weeks). Or a print of a painting on the wall to look at for two quiet minutes. Then quiet time in bed.' },
          { time: '15:00', title: 'Free play', body: 'Open-ended. The child plays alone or with siblings. The parent works nearby.' },
          { time: '16:30', title: 'Help with real work', body: 'Sweeping, folding, chopping, gardening. Adult tools, adult tasks, child-scaled.' },
          { time: '17:30', title: 'Family dinner', body: 'Grace. Real meal. Sometimes a short reading at the end (a paragraph from a saint\'s life, a single Psalm, a fable).' },
          { time: '19:00', title: 'Bedtime ritual', body: 'Bath. A chapter of read-aloud (Beatrix Potter, Wind in the Willows, a Bible story). Evening prayer or verse. Lights out by 19:30.' }
        ],
        note: 'The memory work and read-aloud at 8:30 is the "school" part of the day. Fifteen minutes. The rest is paideia in the broader sense — the whole life forming the child.'
      },
      'activities': {
        title: 'Things you can do this week',
        icon: 'hand',
        intro: 'Twenty classical activities for a 4-year-old. Most are short, repeatable, and inheritable.',
        items: [
          { name: 'Memorise one short verse a month', body: 'Pick a 4–8 line poem. Say it together at breakfast and bedtime. By month\'s end the child has it.' },
          { name: 'Sing one hymn or folk song daily', body: 'The same one for the season. Sing while you cook, while you walk. The child learns it without effort.' },
          { name: 'Tell an Aesop fable from memory', body: 'Pick one a week. Tell it; ask the child to tell it back. By month\'s end you have four together.' },
          { name: 'Look at one painting for a month', body: 'Print it. Put it on the wall at child height. Look together for two minutes a day. Name what you see.' },
          { name: 'A composer for the term', body: 'Pick one (Bach, Vivaldi, Mozart, Handel). Play one piece daily for 6 weeks. No explanation needed.' },
          { name: 'Read a saint\'s life or hero story weekly', body: 'Short, narrative, with a virtue at the centre. The story carries the moral; do not preach.' },
          { name: 'A Plutarch story, simplified', body: 'Plutarch wrote moral biography. Tell one episode (the boy Cyrus, young Alexander, the boy Pythagoras). The child meets the great as children themselves.' },
          { name: 'Bible story or myth daily', body: 'A short story from your tradition. Genesis stories, Greek myths, Hindu epics — depending on what tradition you are passing on.' },
          { name: 'Practise one virtue for a fortnight', body: 'Pick one (truthfulness, courage, kindness, attention). Notice it, name it, celebrate when seen, gently address when missed.' },
          { name: 'Latin or Greek alphabet (gentle exposure)', body: 'Sing the Greek alphabet as a song around 5–6. Not before. Just exposure, not instruction.' },
          { name: 'Pour libation of milk for the household saint or hero', body: 'A small ritual — every Sunday, place fresh water, milk, or a small flower at the family shrine, ancestor photo, or hero shelf. A tradition the child owns.' },
          { name: 'Light a candle for the day\'s reading', body: 'When you read a story or do memory work, light a candle. Mark the moment as worth attention. Blow it out together at the end.' },
          { name: 'Family verse before bed', body: 'A short blessing said over the child by the parent. Same words, every night, for years.' },
          { name: 'Walk past a noble building', body: 'A church, an old town hall, an old library. Name what it is, who used it. The child meets the inheritance physically.' },
          { name: 'Beautiful objects at home', body: 'A few — a small icon, a vase of weeds, a hand-bound book, a candle. The child grows up surrounded by considered beauty.' },
          { name: 'A real conversation at the dinner table', body: 'About something serious — a beautiful thing, a true thing, a hard thing in the world. The 4yo does not need to follow it. They are absorbing the register.' },
          { name: 'A handcraft each season', body: 'Make a candle, a wreath, a small carving, a bound notebook. Skilled hands; visible workmanship.' },
          { name: 'Identify three constellations', body: 'On clear nights, find the Plough, Orion, the Pleiades. Name them. The sky is named, not random.' },
          { name: 'A small library shelf at child height', body: 'Twenty or thirty real, beautiful books they can take down and look at. Replace seasonally.' },
          { name: 'Visit one place of beauty monthly', body: 'A cathedral, a museum, a stately garden, a great library. Quiet visits. The child sees what care has produced.' }
        ]
      },
      'reading-list': {
        title: 'Reading list',
        icon: 'book',
        intro: 'The classical reading list begins simply at four — picture books that already point to the great tradition — and over years widens into the canon itself.',
        forChild: {
          intro: 'Real books pointing toward real things. At four, do not push abstraction. Trust beauty.',
          groups: [
            { heading: 'Picture books that carry the tradition', books: [
              'D\'Aulaires\' Book of Greek Myths — start dipping at 4–5',
              'D\'Aulaires\' Book of Norse Myths — later, around 5–6',
              'Tomie dePaola — The Clown of God, Patrick Saint of Ireland, The Lady of Guadalupe',
              'The Jesus Storybook Bible (Sally Lloyd-Jones) for Christian families',
              'James Mayhew — Katie series (introducing famous paintings)',
              'Anna Harwell Celenza — child\'s biographies of composers (Bach, Vivaldi, Mozart, Handel)'
            ]},
            { heading: 'Aesop and fables', books: [
              'Aesop\'s Fables — Milo Winter\'s illustrated edition is the classic',
              'Arnold Lobel — Fables (modern Aesop-style, original)',
              'Eric Carle — Aesop\'s Fables (board book introduction)'
            ]},
            { heading: 'Mother Goose & poetry', books: [
              'Mother Goose — Blanche Fisher Wright, Tasha Tudor, or Tomie dePaola edition',
              'Robert Louis Stevenson — A Child\'s Garden of Verses',
              'A.A. Milne — When We Were Very Young',
              'A first book of psalms or hymns (with images)'
            ]},
            { heading: 'Read-aloud chapter books', books: [
              'A.A. Milne — Winnie-the-Pooh',
              'Kenneth Grahame — The Wind in the Willows (start near 4½)',
              'E.B. White — Charlotte\'s Web (around 5)',
              'Hugh Lofting — Doctor Dolittle (selectively, around 5–6)'
            ]}
          ]
        },
        forParent: {
          intro: 'The classical home-education literature is rich. Start with one persuasive book and one practical one.',
          books: [
            { title: 'The Well-Trained Mind', author: 'Susan Wise Bauer & Jessie Wise', note: 'The canonical American classical homeschooling manual. End-to-end. Use for orientation; selectively for practice.' },
            { title: 'Beauty for Truth\'s Sake', author: 'Stratford Caldecott', note: 'The classical liberal arts rehabilitated for a modern parent. Short, profound, worth re-reading.' },
            { title: 'Norms and Nobility', author: 'David Hicks', note: 'The deepest defence of classical education as the formation of nobility of soul. Slow reading.' },
            { title: 'The Liberal Arts Tradition', author: 'Kevin Clark & Ravi Scott Jain', note: 'A clear modern restatement of the seven liberal arts and their place in raising a person.' },
            { title: 'Climbing Parnassus', author: 'Tracy Lee Simmons', note: 'Why Latin and Greek matter, written for the parent considering whether to teach them.' },
            { title: 'Consider This', author: 'Karen Glass', note: 'Charlotte Mason in conversation with the classical tradition. Short and clear.' },
            { title: 'Tending the Heart of Virtue', author: 'Vigen Guroian', note: 'On why fairy tales, unsanitised, form moral imagination. Essential.' },
            { title: 'Ten Ways to Destroy the Imagination of Your Child', author: 'Anthony Esolen', note: 'Short, sharp, diagnostic — what modern childhood has lost.' }
          ]
        },
        free: 'Memoria Press, Classical Academic Press, and the CiRCE Institute (circeinstitute.org) all have free articles. Project Gutenberg has the entire Western canon.'
      },
      'competency': {
        title: 'What to expect at four',
        icon: 'sprout',
        intro: 'A 4-year-old in a classical home shows the early shoots of paideia — attention to beauty, the beginnings of a memorised repertoire, comfort with the great tradition. Reading and arithmetic are not yet pressed.',
        landmarks: [
          { area: 'Memory', items: ['Knows 2–4 short poems by heart', 'Knows 4–6 hymns or folk songs by heart', 'Re-tells familiar fables and myths in their own words', 'Knows 4–5 paintings by sight and one fact about each'] },
          { area: 'Attention', items: ['Sits quietly through a short read-aloud (5–15 minutes)', 'Looks at a painting for 1–2 minutes without prompting', 'Listens to a piece of music without needing it to be loud or fast'] },
          { area: 'Virtue (early signs)', items: ['Tells the truth (most of the time, with prompting)', 'Shows kindness without being asked', 'Says please, thank you, excuse me as habits', 'Accepts being told no without prolonged collapse (most days)'] },
          { area: 'Knowledge of the world', items: ['Recognises a few constellations', 'Names a few historical figures from stories', 'Knows the basic shape of the day, week, year', 'Can describe one beautiful thing they have seen'] },
          { area: 'Language', items: ['Uses sentences of 5–8 words', 'Has a richer vocabulary than peers (from read-aloud exposure)', 'Imitates the rhythm of formal speech sometimes'] },
          { area: 'What is NOT pressed', items: ['Reading independently', 'Doing arithmetic on paper', 'Formal phonics drill', 'Writing letters with pencil grip beyond what comes naturally'] }
        ],
        note: 'A classical 4yo may seem old-fashioned to peers — they greet adults, listen at the table, know what a saint is, sing a hymn. That is the point. They are being formed for a different life than the screen-saturated default.'
      }
    }
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
    built: true,
    blurb: 'Ainsley Arment\'s movement gathers Charlotte Mason, nature study, and a reverent view of childhood into a modern, beautifully-photographed practice. Hours outside, morning baskets, mixed-age siblings, slow mornings, real food, real books. Especially strong in the United States, growing worldwide.',
    sections: {
      'core-idea': {
        title: 'Core idea',
        icon: 'compass',
        intro: 'Wild + Free is a recovery of unhurried, outdoor, book-rich childhood — against the cultural default of screen-saturated, scheduled, school-shaped early years. The method is mostly Charlotte Mason; the spirit is contemporary nature-romantic.',
        principles: [
          { name: 'Childhood is sacred', body: 'A 4-year-old is not a small adult, not a future worker, not a problem to be optimised. They are a person at a stage that has its own dignity and its own time.', why: 'A culture that hurries children into productivity ends up with adults who never recovered the part of themselves that should have been allowed to play. Slow at four buys depth at twenty.' },
          { name: 'Outdoors is the curriculum', body: 'Two to four hours outside, every day. Not a "nature walk" — just outside. Garden, woods, beach, park, rain or shine. The body is doing the work.', why: 'The 4yo nervous system needs movement, sensory variety, real risk, light. Indoor-only childhood is now correlated with anxiety, attention problems, weak immunity, poor sleep. Outdoors is not optional.' },
          { name: 'Living books over textbooks', body: 'Beautiful picture books, written by people who loved their subject. Read aloud, often. The home is full of beautiful books at child height.', why: 'A child fed on living books develops a taste for real writing. Textbooks and "educational" books teach the child that learning is dry. Living books teach them that knowledge is delicious.' },
          { name: 'The morning basket', body: 'A short, gathered morning ritual at the breakfast table or on the rug. A poem, a hymn, a picture book, a fairy tale, a Bible story or myth. Fifteen to twenty minutes.', why: 'A gathered, beautiful start to the day signals that the day will be unhurried and meaningful. It is also nearly the only "formal" learning a 4yo needs.' },
          { name: 'Mixed-age siblings together', body: 'Older siblings teach younger ones. Younger ones stretch older ones. Play happens across ages, not in same-age boxes.', why: 'A 4yo with an older sibling learns by watching what an 8yo does, which is more efficient than any adult instruction. The 8yo learns to teach by teaching. School age-segregation is a recent and questionable convention.' },
          { name: 'Reframe motherhood as vocation', body: 'Raising a child well is serious skilled work — not babysitting, not a holding pattern. Wild + Free explicitly elevates the work of mothering at home.', why: 'A culture that disdains domestic work produces parents who feel diminished by it. A mother who senses she is doing important work brings her best self to it. The same logic applies to fathers and other primary carers.' },
          { name: 'Reject the comparison feed', body: 'Every Wild + Free home looks different. Yours will not look like the photographs. That is fine — the photographs are a small slice. Do the daily thing, not the photogenic thing.', why: 'The movement\'s own dark side is performance pressure. The cure is to stop comparing and start living. A messy unphotographed Tuesday is as good as a perfect Sunday post.' }
        ]
      },
      'day-in-life': {
        title: 'A day in the life',
        icon: 'sun',
        intro: 'A Wild + Free day for a 4-year-old centres on the morning basket and the outdoor block, with read-aloud and free play filling the rest. Schedule is light; rhythm is real.',
        timeline: [
          { time: '7:30', title: 'Slow morning, real breakfast', body: 'No rush. Oats with berries, eggs with toast. The child helps with what they can. Coffee for you. No screens, no school-prep hustle.' },
          { time: '8:30', title: 'Morning basket', body: 'On the rug or at the table. Light a candle. Read one poem, sing one hymn or folk song, read one picture book, tell one fairy tale or myth. Fifteen to twenty minutes. Same content for the fortnight.' },
          { time: '9:00', title: 'Outdoor block', body: 'Two to four hours. Garden, walk, woods, park, beach. Boots and waterproofs in winter. The child leads; you accompany.' },
          { time: '12:00', title: 'Family lunch at home', body: 'Soup, bread, cheese, fruit. The child helps prepare and clear.' },
          { time: '13:00', title: 'Quiet hour', body: 'A nap, or independent quiet play in their room with picture books. No screens.' },
          { time: '14:30', title: 'Free play and creative time', body: 'Open-ended. Drawing, painting, blocks, dress-up, mud kitchen outside if weather allows. The parent is nearby, mostly hands-off.' },
          { time: '16:00', title: 'Read aloud', body: 'A chapter from the current read-aloud (Pooh, Wind in the Willows, Beatrix Potter). The child curls up on the couch.' },
          { time: '17:00', title: 'Help with dinner', body: 'Wash vegetables, set the table, stir the pot. The child is part of the daily work, not entertained while it happens.' },
          { time: '18:00', title: 'Family dinner', body: 'A real meal. Adult conversation. The child listens and joins.' },
          { time: '19:00', title: 'Bedtime ritual', body: 'Bath, story, lullaby or prayer. Lights out by 19:30.' }
        ],
        note: 'No school work. No worksheets. No "preschool prep." The morning basket and the outdoor block are doing the work that matters.'
      },
      'activities': {
        title: 'Things you can do this week',
        icon: 'hand',
        intro: 'Twenty Wild + Free activities for a 4-year-old. Most happen outside. All are slow, beautiful, repeatable.',
        items: [
          { name: 'A morning basket setup', body: 'A real basket on the table. Inside: this week\'s poem (printed), the current picture book, a fairy tale book, a hymn-and-folk-song book. Ready every morning.' },
          { name: 'A weekly nature walk to the same place', body: 'Pick one woodland, hedgerow, stretch of river. Visit every week. Note what is changing. Bring something small home.' },
          { name: 'A nature shelf', body: 'A low shelf with the things brought home — feathers, pinecones, shells, interesting stones. Add monthly; rotate seasonally.' },
          { name: 'A weekly muffin or bread bake', body: 'The child measures and stirs. Same recipe weekly. By Christmas they can make it nearly alone.' },
          { name: 'Plant a small vegetable garden', body: 'Beans, peas, lettuce, tomatoes. A 4yo can plant, water, weed, harvest. Real food they grew.' },
          { name: 'A monthly art print on the wall', body: 'Pick one painting. Print it large. Hang it at child height. Look together for two minutes a day.' },
          { name: 'Read one Beatrix Potter twice', body: 'Read Monday, read Tuesday, ask Wednesday: "Can you tell me what happened?" By the end of the year the child knows the whole set.' },
          { name: 'Watch the moon for a month', body: 'On clear nights, step outside and find it. New, crescent, half, full, gibbous. The child sees the cycle.' },
          { name: 'A jar of found objects', body: 'On every walk, find one small thing. Put it in the jar at home. By the end of summer the jar is a museum.' },
          { name: 'Make a wildflower posy weekly', body: 'On Sunday walks, gather a few wildflowers (where legal). Put them in a small jar on the kitchen table.' },
          { name: 'Lie on the grass and look at clouds', body: 'Ten minutes. Name the shapes. No agenda.' },
          { name: 'Family read-aloud at every meal', body: 'A chapter of a book during dinner. The child listens. The adults take turns reading. Two years of dinners = many books.' },
          { name: 'A messy mud day', body: 'A wet day, old clothes, the back garden. No clean-up rule. Two hours of mud.' },
          { name: 'Bird feeder at the window', body: 'Hang it where the child can see. Learn the names of the regulars together.' },
          { name: 'Pick blackberries (or apples, plums, what is in season)', body: 'A bag, a hedgerow, an afternoon. Eat them; cook them into something.' },
          { name: 'A monthly meet-up with another family', body: 'Outside. Mixed-age children together. Coffee for the adults. Hours of free play.' },
          { name: 'Sing a folk song while you do anything', body: 'While walking, while cooking, while folding washing. The child learns the song without it being a "lesson."' },
          { name: 'Watch a sunset together once a week', body: 'Whatever the weather. Step outside, face west, watch the light go. Talk or do not.' },
          { name: 'A simple seasonal celebration', body: 'May Day with flowers in the hair. Midsummer with a candle outside at the longest day. Harvest with apples and bread. Mark the year.' },
          { name: 'Refuse one thing this week', body: 'A class, a screen time, a "must-do" preschool activity. Replace it with an afternoon outside. Notice the difference.' }
        ]
      },
      'reading-list': {
        title: 'Reading list',
        icon: 'book',
        intro: 'Wild + Free has built excellent booklists. The pattern is: beautiful, living, often older, often illustrated.',
        forChild: {
          intro: 'The Wild + Free booklists overlap heavily with Charlotte Mason. Quality over quantity.',
          groups: [
            { heading: 'The W+F early-years staples', books: [
              'Beatrix Potter — the complete set',
              'Robert McCloskey — Make Way for Ducklings, Blueberries for Sal, One Morning in Maine',
              'Tasha Tudor — A Time to Keep, The Doll\'s Christmas, anything she illustrated',
              'Elsa Beskow — Children of the Forest, Around the Year',
              'Virginia Lee Burton — Mike Mulligan and His Steam Shovel, The Little House',
              'Wanda Gág — Millions of Cats'
            ]},
            { heading: 'Nature and seasons', books: [
              'Anna Comstock — Handbook of Nature Study (parent reference, free on Gutenberg)',
              'Jim Arnosky — anything (gentle nature illustrations)',
              'Lois Ehlert — Leaf Man, Red Leaf Yellow Leaf',
              'Steve Jenkins — paper-cut nature books'
            ]},
            { heading: 'Mother Goose & poetry', books: [
              'Mother Goose — Tasha Tudor or Blanche Fisher Wright edition',
              'Robert Louis Stevenson — A Child\'s Garden of Verses',
              'A.A. Milne — When We Were Very Young'
            ]},
            { heading: 'Read-aloud chapter books', books: [
              'A.A. Milne — Winnie-the-Pooh',
              'Kenneth Grahame — The Wind in the Willows',
              'E.B. White — Charlotte\'s Web, Stuart Little',
              'Laura Ingalls Wilder — Little House in the Big Woods (start near 5)'
            ]}
          ]
        },
        forParent: {
          intro: 'The Wild + Free literature is mostly modern, accessible, photo-rich. Easy to start with.',
          books: [
            { title: 'The Call of the Wild + Free', author: 'Ainsley Arment', note: 'The movement\'s founding book. Warm, persuasive, accessible. Start here.' },
            { title: 'Wild + Free Handcrafts', author: 'Ainsley Arment (ed.)', note: 'Anthology of crafts and projects by W+F mentors. Practical.' },
            { title: 'Wild + Free Nature', author: 'Ainsley Arment (ed.)', note: 'Anthology on nature study, foraging, gardening with children.' },
            { title: 'For the Children\'s Sake', author: 'Susan Schaeffer Macaulay', note: 'The bridge between W+F and Charlotte Mason. Short, warm, essential.' },
            { title: 'Balanced and Barefoot', author: 'Angela Hanscom', note: 'An OT\'s case for outdoor, messy, physical childhood. The research underneath W+F\'s instincts.' },
            { title: 'Last Child in the Woods', author: 'Richard Louv', note: 'The book that named "nature-deficit disorder." Foundational reading for any outdoor-first parent.' },
            { title: 'Simplicity Parenting', author: 'Kim John Payne', note: 'On slowing down and saying no to busyness. Pairs perfectly with W+F.' }
          ]
        },
        free: 'wildandfree.com hosts free articles. Their podcast (The Wild + Free Podcast) is free and excellent. Anna Comstock\'s Handbook of Nature Study is on Gutenberg.'
      },
      'competency': {
        title: 'What to expect at four',
        icon: 'sprout',
        intro: 'A 4-year-old in a Wild + Free home is bodily competent outdoors, well-versed in beautiful books, comfortable with slow time, and not yet pressed into formal academics.',
        landmarks: [
          { area: 'Outdoor body', items: ['Walks 2–4 km willingly', 'Climbs trees and rocks confidently', 'Wears appropriate clothing for the weather without complaint', 'Knows their local landscape well enough to lead a short walk'] },
          { area: 'Nature knowledge', items: ['Names common local birds, trees, flowers', 'Recognises the moon phase, can find north at dusk', 'Knows what is in season — what is flowering, what to harvest', 'Has a few small "personal" places — a favourite tree, a favourite rock'] },
          { area: 'Books and stories', items: ['Has a deep familiarity with a small canon of picture books', 'Re-tells favourite fairy tales', 'Sits through a chapter read-aloud', 'Asks for specific books by name'] },
          { area: 'Capable hands', items: ['Helps prepare meals (with real knives)', 'Sets the table', 'Folds laundry', 'Gardens a little — plants, waters, harvests'] },
          { area: 'Calm and presence', items: ['Tolerates boredom; finds their own activity', 'Sits at a meal without screens', 'Goes to sleep without devices or constant stimulation'] },
          { area: 'What is NOT pressed', items: ['Reading independently', 'Worksheets', 'Pre-school academics', 'Scheduled enrichment activities'] }
        ],
        note: 'A Wild + Free 4yo often "looks behind" peers academically and well ahead in physical capacity, self-direction, and book-richness. By age 8 the comparison reverses.'
      }
    }
  },
  {
    id: 'reggio',
    name: 'Reggio Emilia',
    short: 'Reggio',
    tagline: 'The hundred languages · child as researcher',
    era: 'Italy · post-WWII (Loris Malaguzzi)',
    color: '#ea580c',
    colorDeep: '#9a3412',
    colorSoft: '#ffedd5',
    icon: 'palette',
    built: true,
    blurb: 'Born in the rubble of post-war Italy by educator Loris Malaguzzi and the parents of a few northern Italian villages, the Reggio approach treats the child as a competent researcher with a hundred languages — drawing, building, dancing, speaking, sculpting — for thinking through the world. The classroom is the "third teacher" after the parent and peer.',
    sections: {
      'core-idea': {
        title: 'Core idea',
        icon: 'compass',
        intro: 'Malaguzzi wrote a poem called "The Hundred Languages" that captures the heart of Reggio. A child has a hundred ways to think — but the world (and most schools) take ninety-nine away. The Reggio approach is the refusal to take any away.',
        principles: [
          { name: 'The child is competent', body: 'Not a vessel, not a tabula rasa, not an emergent project — a present, capable researcher. Their questions, observations, theories are taken seriously.', why: 'A 4yo who is treated as competent acts competently. One who is treated as incapable acts incapably. The expectation forms the child.' },
          { name: 'The hundred languages', body: 'Drawing, painting, sculpting, dancing, building, singing, dramatising, writing, speaking — each is a way the child thinks, not just expresses. Provide many materials; let the child choose how to "think."', why: 'A 4yo who can only think with words is a thinner thinker than one who can also think with clay, paint, body, building. The languages train the brain.' },
          { name: 'The environment as third teacher', body: 'The first teacher is the parent. The second is other children. The third is the carefully prepared space — light, mirror, beautiful materials, organised access. The room speaks.', why: 'A 4yo in a chaotic room behaves chaotically. In an ordered beautiful space, they behave with care. The environment carries half the lesson.' },
          { name: 'Long projects driven by the child\'s question', body: 'A 4yo asks "where does the puddle go?" That question, taken seriously, becomes a week of investigation — go to the puddle daily, draw it, predict, observe, theorise. The adult facilitates; does not steer.', why: 'A real question answered through real investigation teaches the child that thinking is powerful. A pre-packaged "lesson on water" teaches them that adults already have the answers. The first builds thinkers; the second builds receivers.' },
          { name: 'Documentation: the parent as observer', body: 'Photograph what the child does. Write down what they say. Keep their drawings dated. Revisit weekly to see what is unfolding. This is not for show — it is for understanding.', why: 'A parent who documents notices what they would otherwise miss. The 4yo whose work is taken seriously enough to be photographed and saved learns that their work matters.' },
          { name: 'Provocation, not direction', body: 'Set out interesting materials on a table — a light box, prisms, leaves, magnifying glass — and see what the child does. Do not say "today we are doing colour mixing." Let the encounter unfold.', why: 'A child who is told what to do learns to wait for instructions. A child who is given materials and trusted develops initiative. The provocation invites; it does not prescribe.' },
          { name: 'Mistakes are theories', body: 'A 4yo who says "the moon follows me" is not wrong — they are theorising about how the world works. Do not correct. Ask, "Does it always?" Investigate together.', why: 'Correction shuts down theorising. Inquiry deepens it. The 4yo who is taken seriously as a thinker becomes a thinker. The one who is corrected learns to stop guessing.' }
        ]
      },
      'day-in-life': {
        title: 'A day in the life',
        icon: 'sun',
        intro: 'A Reggio-inspired day at home for a 4-year-old has rhythm but is loosely structured around the child\'s current investigation. Morning and afternoon are open work blocks; the parent observes and provokes.',
        timeline: [
          { time: '7:30', title: 'Slow breakfast, real conversation', body: 'Ask the child what they have been thinking about. Listen. The day might pivot on what they say.' },
          { time: '8:30', title: 'Visit the current investigation', body: 'If this week\'s project is shadows, step outside and look at them. If it is bugs, check the bug spot in the garden. Five minutes of attention to the ongoing wonder.' },
          { time: '9:00', title: 'Provocation table', body: 'Set out new materials on the work table — clay, watercolours, a tray of seeds, a magnifying glass, a mirror. Let the child encounter and choose.' },
          { time: '10:00', title: 'Long work block', body: 'The child works (paints, builds, sculpts) on something connected to their interest. The parent observes and quietly photographs, jots, listens.' },
          { time: '11:30', title: 'Outdoor block', body: 'Garden, walk, park. Bring back materials or observations to add to the current investigation.' },
          { time: '12:30', title: 'Family lunch', body: 'Talk about what was noticed. The 4yo names what they saw; the adult listens.' },
          { time: '13:30', title: 'Rest', body: 'Quiet time with books.' },
          { time: '14:30', title: 'Free creative time', body: 'Open materials available — paper, paints, scissors, glue, fabric scraps, found objects. The child makes what they want.' },
          { time: '16:00', title: 'Document the day', body: 'Sit with the child. Pin up today\'s drawing. Write one sentence the child said. The child sees their work valued.' },
          { time: '17:00', title: 'Help with dinner; family meal', body: 'Real preparation, real meal. Talk continues from the day.' },
          { time: '19:00', title: 'Bedtime ritual', body: 'Bath, story, lights out.' }
        ],
        note: 'A Reggio day looks unstructured but is intensely attentive. The parent\'s work is observation and provocation, not direction.'
      },
      'activities': {
        title: 'Things you can do this week',
        icon: 'hand',
        intro: 'Twenty Reggio-inspired activities for a 4-year-old at home. Most involve setting up an environment or provocation, then stepping back.',
        items: [
          { name: 'Set up a light table', body: 'A clear plastic bin lit from below with battery LEDs, or even a window with a piece of frosted paper. Place coloured cellophane, glass beads, leaves on top. The child explores.' },
          { name: 'A mirror on the table', body: 'A safe mirror flat on the table. Place small objects on it. The child sees the object plus its reflection — and starts asking about symmetry.' },
          { name: 'A clay station', body: 'Real clay (terracotta, air-drying). A small wooden board, a few wire tools. The child sculpts what they have been thinking about — a bird, a snail, themselves.' },
          { name: 'Take a "shadow walk" at three times of day', body: 'Morning, noon, late afternoon. Stand in the same place. Notice how the shadows change. Draw them when you come home.' },
          { name: 'A puddle investigation', body: 'After rain, visit the same puddle daily for a week. Mark its edge with a stick. Notice when it shrinks, grows, dries. Theorise together about where the water goes.' },
          { name: 'A "look closely" magnifying tray', body: 'Magnifying glass, a tray of natural objects (acorn, leaf, feather, seed). The child looks closely. Draw what they see, much bigger.' },
          { name: 'Mix only two colours', body: 'Provoke with red and yellow paint. Let them discover orange. Next time, blue and yellow. Discovery, not instruction.' },
          { name: 'Document today\'s work', body: 'Photograph today\'s drawing or building. Print and pin it to a board with the date. By month\'s end you have a record.' },
          { name: 'Listen to one sound for one minute', body: 'Sit outside. Close eyes. Name what you hear. Birds, wind, traffic, neighbour\'s door. The child trains attention to one sense at a time.' },
          { name: 'Bring the outside in', body: 'Sticks, stones, leaves, feathers brought home are set on a beautiful tray in the dining room. They become the centrepiece.' },
          { name: 'A weekly "wonder question"', body: 'Each week, the child names one thing they are wondering about. Together you find one way to investigate it. Document the journey.' },
          { name: 'Make a "self-portrait" with materials', body: 'Buttons, pipe-cleaners, wool, paper. The child makes themselves. The result reveals more about the child than any drawing.' },
          { name: 'Big paper, small child', body: 'Roll out a long strip of butcher paper on the floor. Let the child paint the whole strip. The scale invites different work.' },
          { name: 'Build with loose parts', body: 'Wooden blocks, but also stones, shells, pinecones, fabric scraps. The child constructs, deconstructs, theorises.' },
          { name: 'Walk and collect "treasures"', body: 'On every walk, the child collects three things. Bring them home, sort them, name them, draw them.' },
          { name: 'Listen to and draw a piece of music', body: 'Play one piece. The child draws what they hear (no instructions on what it should look like).' },
          { name: 'A child-led "garden meeting"', body: 'Once a week, sit in the garden together. What is new? What changed? The child notices; you record.' },
          { name: 'A drawing of a question, not an answer', body: 'Ask "where do birds sleep?" The child draws their theory. Investigate the answer together later.' },
          { name: 'A weekly "exhibition"', body: 'On Friday, pin up the week\'s drawings and photos on one wall. Walk the whole family through it. The child explains.' },
          { name: 'A "no plastic" hour', body: 'Once a week, an hour with only natural materials — wood, wool, cloth, clay. Notice the difference in play.' }
        ]
      },
      'reading-list': {
        title: 'Reading list',
        icon: 'book',
        intro: 'Reggio is light on prescribed children\'s books — the philosophy distrusts pre-packaged content. But beautiful books support the inquiry.',
        forChild: {
          intro: 'Books that invite wondering. Books that ask questions. Books that take children\'s thinking seriously.',
          groups: [
            { heading: 'Books that invite wonder', books: [
              'Tana Hoban — Look Book, Look Again, Look! Look! Look! (photographs that make you look)',
              'Steve Jenkins — Actual Size, What Do You Do With a Tail Like This? (questions answered visually)',
              'Aaron Becker — Journey, Quest, Return (wordless picture books for the child\'s own story)',
              'Suzy Lee — Wave, Shadow, Mirror (wordless, beautiful, leave room for thought)',
              'Peter Spier — Noah\'s Ark, People (visual books with no narration)'
            ]},
            { heading: 'Real-world picture books', books: [
              'Robert McCloskey — Time of Wonder, One Morning in Maine',
              'Margaret Wise Brown — The Important Book, The Quiet Noisy Book',
              'Vera B. Williams — More More More Said the Baby',
              'Lois Ehlert — Snowballs, Leaf Man (collage from natural materials)'
            ]},
            { heading: 'Books for parents and children to look at together', books: [
              'Iela Mari — The Apple and the Butterfly, The Egg and the Chicken (wordless cycle books)',
              'Beatrice Alemagna — anything (Italian Reggio-adjacent illustrator)',
              'Hervé Tullet — Press Here, Mix It Up! (interactive, invitation to wonder)'
            ]},
            { heading: 'Bilingual or Italian books', books: [
              'Bruno Munari — anything (Italian designer, beautifully experimental for children)',
              'A few Italian picture books in translation for cultural exposure'
            ]}
          ]
        },
        forParent: {
          intro: 'The Reggio literature is dense and academic. A few accessible entry points exist.',
          books: [
            { title: 'The Hundred Languages of Children', author: 'Carolyn Edwards, Lella Gandini, George Forman (eds.)', note: 'The canonical English-language Reggio text. Dense; pick the chapters that speak to you.' },
            { title: 'Bringing Reggio Emilia Home', author: 'Louise Boyd Cadwell', note: 'An American educator\'s adaptation of Reggio principles for a non-Italian setting. Practical and warm.' },
            { title: 'In the Spirit of the Studio', author: 'Lella Gandini et al.', note: 'On the atelier — the art studio. For parents wanting to set one up at home.' },
            { title: 'The Power of Documentation', author: 'Carol Anne Wien (ed.)', note: 'On the central Reggio practice of observing and recording children\'s work.' },
            { title: 'The Wonder of Learning DVD/guide', author: 'Reggio Children', note: 'A travelling exhibit captured as a guide — the work of real Reggio classrooms.' },
            { title: 'Bringing Learning to Life', author: 'Louise Boyd Cadwell', note: 'A follow-up to Bringing Reggio Emilia Home with more practical case studies.' }
          ]
        },
        free: 'reggiochildren.it (the foundation in Reggio Emilia) has free essays. The North American Reggio Emilia Alliance (reggioalliance.org) hosts articles and podcasts.'
      },
      'competency': {
        title: 'What to expect at four',
        icon: 'sprout',
        intro: 'A 4-year-old in a Reggio-inspired home is observant, articulate about their own thinking, comfortable with many materials, and used to being taken seriously.',
        landmarks: [
          { area: 'Inquiry and thinking', items: ['Asks rich questions ("Where does the rain go?")', 'Offers theories ("I think the moon follows us")', 'Investigates over multiple days, not just minutes', 'Revisits earlier drawings and adds to them'] },
          { area: 'The hundred languages', items: ['Draws, paints, sculpts with familiarity', 'Builds elaborate structures with loose parts', 'Uses body to enact ideas (becomes the bird, becomes the wind)', 'Talks fluently about what they made and why'] },
          { area: 'Observation', items: ['Notices small changes in familiar places', 'Sustains attention to one phenomenon (a shadow, a snail) for many minutes', 'Distinguishes what they see from what they thought they would see'] },
          { area: 'Collaboration', items: ['Works with siblings or friends on shared projects', 'Listens to another child\'s theory and responds', 'Negotiates use of shared materials'] },
          { area: 'Self-knowledge', items: ['Can name what they are interested in', 'Can ask for materials they need', 'Knows what kind of work they like best (paint, clay, building)'] },
          { area: 'Body and hands', items: ['Familiar with paint, clay, scissors, glue', 'Confident with a magnifying glass and small tools', 'Cares for materials and puts them away'] }
        ],
        note: 'A Reggio 4yo is often surprisingly articulate and slow to give quick answers. They have learned to think before speaking. This is a gift.'
      }
    }
  },
  {
    id: 'forest-school',
    name: 'Forest School',
    short: 'Forest',
    tagline: 'Woods as the classroom · risk as part of learning',
    era: 'Scandinavia · 1950s · UK from 1993',
    color: '#15803d',
    colorDeep: '#14532d',
    colorSoft: '#dcfce7',
    icon: 'pine',
    built: true,
    blurb: 'Forest School emerged from Scandinavian preschools in the 1950s, brought to the UK by Bridgwater College nursery in 1993, and now run worldwide. A weekly half-day or full-day in the woods, in any weather. Real tools, real fire, real dens, real assessed risk, under trained supervision. The woods are the classroom.',
    sections: {
      'core-idea': {
        title: 'Core idea',
        icon: 'compass',
        intro: 'Forest School holds that the woodland is the most generative learning environment for a young child. Real terrain, real weather, real tools, real fire — supervised, but not sanitised. The teacher facilitates; the woods teach.',
        principles: [
          { name: 'The same woodland, every week, every season', body: 'Forest School is not a series of nature outings. It is the same patch of woods, visited weekly, through the year. The child comes to know it like family.', why: 'A 4yo who visits one wood weekly for a year learns it deeply — knows the badger sett, the wind-fallen oak, the boggy patch in March. Variety would prevent this. Repetition makes the wood theirs.' },
          { name: 'Risk is assessed, not avoided', body: 'Climbing trees, lighting fires, using a real bow saw, walking on slippery logs — all under trained eye, all with the child\'s genuine agency. The adult assesses the risk; the child takes it.', why: 'A 4yo who has only known padded environments grows into a teenager who cannot judge real risk. One who has met assessed risk steadily becomes capable. Risk-deprivation is its own danger.' },
          { name: 'No bad weather, only bad clothes', body: 'Rain, snow, frost, wind — all are part of the woods. The right clothes (waterproofs, wool layers, wellies, hats) make it possible. Wet days are often the best days.', why: 'A child who has only known dry sunny outdoors avoids the outdoors most of the year. One who has played in November rain knows that being warm and dry is something you make, not something you find.' },
          { name: 'Long unstructured time', body: 'A Forest School session is hours, not minutes. The first 45 minutes are often restless; deep play emerges around 90 minutes. Cut it short and you cut off the best of it.', why: 'A 4yo needs time to enter their own play. Adult-scheduled "nature time" of 30 minutes never reaches the depth that an unhurried 3-hour session does. Hold your nerve through the restless phase.' },
          { name: 'Real tools, real fire (with supervision)', body: 'A 4yo can use a peeler on a stick under supervision. They can carry a small log. They can help feed a fire with adult hands. Tools are not toys.', why: 'Tool use is one of the deepest pleasures of being human. Withholding tools from a competent child is a small theft. Carefully introducing them builds the kind of confidence no toy can.' },
          { name: 'The child leads; the adult facilitates', body: 'No lesson plan. The adult sets up the space and the safety boundaries, then watches. The child notices the mushroom, follows the bird, builds the den they want.', why: 'A 4yo who is allowed to lead their own woodland play develops curiosity and agency. One who is constantly directed develops compliance. The first is far more valuable.' },
          { name: 'Reflection and ritual close', body: 'A Forest School session begins with a gathering — a song, a check-in — and ends with one too. The child marks the time as special, not random.', why: 'Ritual makes the experience memorable and frames it as belonging to a tradition larger than today. The child carries the wood home in their head.' }
        ]
      },
      'day-in-life': {
        title: 'A day in the life',
        icon: 'sun',
        intro: 'Forest School is usually one half-day or full day per week, not the whole week. The rest of the week is ordinary home life. This is the rhythm.',
        timeline: [
          { time: 'Sunday evening', title: 'Get the kit ready', body: 'Wellies dry, waterproofs hung up, a thermos and snacks ready. The child helps. Tomorrow is woodland day.' },
          { time: 'Monday 8:30', title: 'Gear up and travel', body: 'Layer up — wool base, fleece, waterproof. The child carries their own water bottle. Travel to the same woodland weekly.' },
          { time: '9:00', title: 'Arrival ritual', body: 'A gathering circle at the entrance. A short song or call-and-response. Name the day, the weather, what is in the woods.' },
          { time: '9:15', title: 'Free woodland play', body: 'Two to three hours. The child wanders, climbs, builds, watches, gets muddy. Adults are present but quiet.' },
          { time: '11:30', title: 'Make a small fire (with adults)', body: 'Tinder, twigs, larger sticks. The child helps gather. The adult lights. Sit by it.' },
          { time: '12:00', title: 'Outdoor lunch', body: 'Soup from the thermos. Sandwich. A piece of fruit cooked briefly on a stick over the fire. Sit on logs.' },
          { time: '12:30', title: 'More play, or a project', body: 'A den, a small bow drill, peeling sticks, identifying tree leaves. The afternoon flows.' },
          { time: '14:00', title: 'Closing circle', body: 'Back to the entrance. Each person says one thing they noticed. A song to close.' },
          { time: '14:30', title: 'Home: wet kit off, warm bath', body: 'Strip muddy gear at the door. Warm bath. Quiet afternoon. The 4yo may sleep deeply.' },
          { time: '17:00', title: 'Family dinner', body: 'The child tells what they did. The parent listens.' },
          { time: '19:00', title: 'Early bed', body: 'A long woodland day exhausts; the 4yo sleeps better than any other night of the week.' }
        ],
        note: 'Mid-week, the rest of life resumes. But Sundays now anticipate Monday, and Tuesday rests on Monday. The week has a centre.'
      },
      'activities': {
        title: 'Things you can do this week',
        icon: 'hand',
        intro: 'Twenty Forest School activities for a 4-year-old. Most are for the woodland session; some can be done in a garden or park.',
        items: [
          { name: 'Find your "sit spot"', body: 'On your first visit, the child picks a tree to be their tree. Visit it every week. Notice the changes.' },
          { name: 'Build a small den', body: 'Long sticks leaned against a fallen tree make a teepee. Add branches, leaves. The child sits inside.' },
          { name: 'Whittle a stick (with peeler)', body: 'A potato peeler is safe for a 4yo on a green stick. Show the away-from-body motion. They peel for ages.' },
          { name: 'Identify three trees', body: 'Pick three that are common in your wood (oak, birch, beech). Learn the leaf, the bark, the seed. The child names them on every visit.' },
          { name: 'Find five birds by sound', body: 'Sit quietly for ten minutes. Name what you hear. By month\'s end the child knows them.' },
          { name: 'Light a small fire (with adult)', body: 'Tinder bundle, twigs in a pyramid. The adult lights with a match or steel and flint. The child feeds it small sticks.' },
          { name: 'Cook a sausage or a marshmallow on a stick', body: 'A peeled stick, a sausage threaded on. Held over the fire. Eaten. Real cooking.' },
          { name: 'Climb one tree (assessed)', body: 'The adult checks the tree — alive, branches solid, low first branches. The child climbs as high as they can comfortably get down from.' },
          { name: 'Cross a log over the stream', body: 'A fallen log over a small stream. Hands on a low branch for balance. The child crosses.' },
          { name: 'Bow saw a small branch (with two hands and adult)', body: 'Adult holds the branch. Child saws. Both hands on the bow saw. The wood is cut by the child.' },
          { name: 'Make tea from foraged leaves', body: 'Pine needles, mint, blackberry leaves (all edible). Boil over the fire. Cool. Drink.' },
          { name: 'Mud paints', body: 'Mud, water, a stick. Paint on a tree, on a rock. Wash off in the next rain.' },
          { name: 'A "fairy door"', body: 'At the base of a tree, arrange sticks, moss, stones into a tiny door. The child invents the story.' },
          { name: 'A rope swing on a low branch', body: 'A short rope, a knot, a stick to sit on. The adult hangs it. The child swings.' },
          { name: 'Track an animal', body: 'A mud bank, a snowy day. Find prints. Whose? Follow as far as they go.' },
          { name: 'Collect natural items for a face on the ground', body: 'A flat patch, sticks, leaves, stones. Make a face. Walk away.' },
          { name: 'Hammock from a sheet between two trees', body: 'A simple sheet tied at both ends. A heavy 4yo can lie in it.' },
          { name: 'Bird call call-and-response', body: 'You imitate a bird; the child answers. Quietly. See if a real bird responds.' },
          { name: 'Make a small bow and arrow (around 5)', body: 'A green springy stick, string. Aim at a soft target only. Real craft.' },
          { name: 'Close the day with a story by the fire', body: 'No book. Just you. A simple woodland tale. The child remembers it.' }
        ]
      },
      'reading-list': {
        title: 'Reading list',
        icon: 'book',
        intro: 'Forest School is more about doing than reading. But beautiful books support it.',
        forChild: {
          intro: 'Books that name what you find in the woods, books that celebrate outdoor childhood.',
          groups: [
            { heading: 'Field guides for children', books: [
              'Usborne — Nature Trail series (UK trees, birds, bugs)',
              'RSPB Children\'s Guide to Birds, Plants, Bugs',
              'A small printed wildflower or tree key for the local area'
            ]},
            { heading: 'Picture books celebrating outdoor childhood', books: [
              'Robert McCloskey — One Morning in Maine, Time of Wonder',
              'Margaret Wise Brown — The Little Island, Wait Till the Moon is Full',
              'Vera B. Williams — Three Days on a River in a Red Canoe',
              'Jeanne Birdsall — Flora the Frog (or any similar woodland-set storybook)'
            ]},
            { heading: 'Foraging and fire books (for adults to use with children)', books: [
              'A simple foraging book for your local area (Roger Phillips for the UK)',
              'A children\'s tracking guide (look for "Animal Tracks" series)'
            ]},
            { heading: 'Stories of woodland and adventure', books: [
              'Beatrix Potter — set in the Lake District woodland',
              'Kenneth Grahame — The Wind in the Willows',
              'A.A. Milne — Winnie-the-Pooh (the Hundred Acre Wood)',
              'Astrid Lindgren — Children of Noisy Village, Ronia the Robber\'s Daughter'
            ]}
          ]
        },
        forParent: {
          intro: 'A handful of practical books cover the territory.',
          books: [
            { title: 'Forest School and Outdoor Learning in the Early Years', author: 'Sara Knight', note: 'The standard UK introduction. Practical, evidence-based, accessible.' },
            { title: 'Run Wild!', author: 'Boff Whalley', note: 'A short, persuasive book on why messy outdoor play matters.' },
            { title: 'Balanced and Barefoot', author: 'Angela Hanscom', note: 'An OT\'s case for outdoor play. The clearest research-backed argument.' },
            { title: 'Last Child in the Woods', author: 'Richard Louv', note: 'Named "nature-deficit disorder." Foundational.' },
            { title: 'There\'s No Such Thing as Bad Weather', author: 'Linda Åkeson McGurk', note: 'A Swedish-American mother on outdoor parenting. Practical, warm.' },
            { title: 'The Wild Network handbook', author: 'The Wild Network', note: 'A UK-based campaign with free downloads and event guides.' },
            { title: 'Coyote\'s Guide to Connecting with Nature', author: 'Jon Young', note: 'A deeper, mentor-oriented book on cultivating real outdoor knowledge in children.' }
          ]
        },
        free: 'The Forest School Association (forestschoolassociation.org) has free guidance and a UK practitioner directory. Outdoor Classroom Day (outdoorclassroomday.com) hosts free downloads.'
      },
      'competency': {
        title: 'What to expect at four',
        icon: 'sprout',
        intro: 'A 4-year-old with regular Forest School experience is bodily confident outdoors, knows their local woodland deeply, and is comfortable with tools, fire, and weather that would alarm a screen-raised peer.',
        landmarks: [
          { area: 'Outdoor body', items: ['Walks, climbs, balances confidently on uneven terrain', 'Dresses themselves for the weather (with help on zippers)', 'Tolerates cold, wet, mud without distress', 'Carries their own day pack with water, snack, spare gloves'] },
          { area: 'Tool use (assessed and supervised)', items: ['Whittles a stick with a potato peeler', 'Helps with a bow saw using two hands', 'Lights a tinder bundle from a glowing ember (with adult)', 'Carries and uses a stick safely (not at others)'] },
          { area: 'Fire (with adult)', items: ['Helps gather tinder, kindling, fuel', 'Tends a small fire by adding sticks', 'Cooks a marshmallow or sausage on a stick', 'Understands fire safety basics — do not step over, do not run near'] },
          { area: 'Woodland knowledge', items: ['Names 3–5 common trees by leaf and bark', 'Identifies their "sit spot" tree across seasons', 'Notices small changes in familiar place (new growth, fallen branch)', 'Knows the sound of 3–5 common birds'] },
          { area: 'Risk', items: ['Climbs trees only as high as they can climb down', 'Crosses streams on logs with hands for balance', 'Stops when an adult names a real risk', 'Returns from where they wandered when called'] },
          { area: 'Calm and presence', items: ['Sits quietly to watch a bird or insect', 'Tolerates long unstructured time without screens or scheduled stimulation', 'Comes home tired and sleeps well'] }
        ],
        note: 'Forest School 4yos sometimes seem "different" from screen-raised peers — calmer, more bodily, more comfortable alone. This is what childhood used to look like and what the data suggests it should still look like.'
      }
    }
  },
  {
    id: 'unschooling',
    name: 'Unschooling',
    short: 'Unschooling',
    tagline: 'Child-led · trust-based · no imposed curriculum',
    era: 'USA · 1970s · John Holt and his successors',
    color: '#0284c7',
    colorDeep: '#075985',
    colorSoft: '#e0f2fe',
    icon: 'compass',
    built: true,
    blurb: 'John Holt watched what schools did to children\'s natural curiosity and concluded the cure was to stop schooling. Unschooling means following the child\'s interests, surrounding them with rich resources, and trusting that real learning happens in real life. Especially valuable as a corrective to over-scheduled childhood — and worth understanding even if you choose differently.',
    sections: {
      'core-idea': {
        title: 'Core idea',
        icon: 'compass',
        intro: 'John Holt began as a school reformer and ended convinced that compulsory schooling could not be reformed — it had to be replaced with something more like a richly resourced life. For a 4-year-old, this means: no preschool, no scheduled academics, no "curriculum." Instead: time, space, materials, attention, conversation, and trust.',
        principles: [
          { name: 'Children are natural learners', body: 'A 1-year-old learns to walk and talk without instruction. A 2-year-old learns the names of every animal they meet. A 4-year-old will learn anything they are deeply interested in. The capacity is there from the start.', why: 'The premise of schooling is that children must be made to learn. The premise of unschooling is that they cannot help but learn — unless we make them dislike it. A 4yo who has not been disengaged by force-fed instruction is naturally hungry.' },
          { name: 'Follow the interest', body: 'When the child becomes obsessed with dinosaurs, feed it — books, fossils at the museum, paintings, films, dinner conversation, the trip to see real fossils. Ride the wave.', why: 'A 4yo who deep-dives one obsession learns more about that topic than a curriculum could give them in a term. And they learn how to learn — which transfers to the next interest.' },
          { name: 'Strewing', body: 'A core unschooling practice. Leave interesting things in the child\'s path — a new book on the table, a microscope on the desk, a documentary on the TV at dinner. Do not require engagement; just provide.', why: 'A 4yo refuses what is pushed and approaches what is offered. Strewing puts the choice with the child, which preserves curiosity. The right thing at the right moment becomes the next deep dive.' },
          { name: 'Real life is the curriculum', body: 'Cooking is chemistry. Grocery shopping is math. Conversation is language arts. Walking the neighbourhood is geography. The 4yo is learning constantly — there is no need to interrupt it with "lessons."', why: 'A 4yo who is part of real life learns vocabulary, measurement, navigation, conversation, money, weather, plants. The same content packaged as "lessons" is thinner and less engaging.' },
          { name: 'The adult as resource, not instructor', body: 'When the child asks, answer. When they want to know, find out together. When they hit something hard, sit with them. But do not pre-empt — let the asking come.', why: 'A 4yo who experiences the adult as a useful resource builds a different relationship to learning than one who experiences the adult as a tester. The first becomes resourceful; the second becomes compliant or rebellious.' },
          { name: 'Trust the timing', body: 'Some children read at four. Some at eight. Some at ten. In an unschooling home, the variation is welcomed. The child who reads at eight reads as well as the one who read at four by the time they are twelve.', why: 'A 4yo pressed to read before they are ready often develops a lifelong wariness of reading. One who comes to it at their own pace falls in love with it. The early-start head start neutralises by ten; the lifelong love stays.' },
          { name: 'Honour boredom', body: 'A 4yo who says "I\'m bored" is at the doorway of their own creativity. The unschooling parent resists rescuing them with screens or planned activities. Boredom is the precursor to invention.', why: 'A child who is constantly entertained never develops the inner resourcefulness to invent their own play. Boredom is uncomfortable, then productive. Sit through it with them.' }
        ]
      },
      'day-in-life': {
        title: 'A day in the life',
        icon: 'sun',
        intro: 'Unschooling at four is the absence of an imposed schedule, not the absence of structure. The structure is provided by family life, real work, and the child\'s own rhythm.',
        timeline: [
          { time: '7:30–9:00', title: 'Wake when ready, slow start', body: 'No alarm. Breakfast with whoever is up. The child is part of the morning, not herded through it.' },
          { time: '9:00 onward', title: 'The day unfolds', body: 'The child plays, joins what an adult is doing, asks to go somewhere, gets absorbed in something on the floor. The parent has things to do but is interruptible.' },
          { time: 'Mid-morning', title: 'Outside', body: 'Garden, park, library, woods, friend\'s house — depending on the day. Not scheduled; chosen.' },
          { time: 'Lunch', title: 'Real food together', body: 'The child helped make it (or watched). Conversation is whatever is alive in the family today.' },
          { time: 'Afternoon', title: 'Strewing, side-by-side work, library, errands', body: 'A new book left on the couch. A documentary while folding washing. A walk to the library. A visit to a museum. A grandparent\'s house.' },
          { time: 'Late afternoon', title: 'Deep play or current obsession', body: 'A long absorption in whatever the child is into this month. Adults nearby, available but not directing.' },
          { time: 'Evening', title: 'Family dinner, read-aloud', body: 'Real meal. A chapter from a book at the table or after.' },
          { time: 'Bedtime', title: 'Bath, story, sleep', body: 'A predictable closing ritual — even unschooling has bedtime.' }
        ],
        note: 'There is no "school time." There are no "lessons." There is also no chaos — the day has rhythm from family life. The 4yo lives the day with the family, not in a parallel child-track.'
      },
      'activities': {
        title: 'Things you can do this week',
        icon: 'hand',
        intro: 'Unschooling doesn\'t prescribe activities — but here are twenty ways to support a 4-year-old\'s self-directed learning.',
        items: [
          { name: 'Take them on every errand', body: 'Post office, grocery, bank, hardware shop, the dump. They watch you do real things and ask real questions.' },
          { name: 'Subscribe to one good magazine', body: 'National Geographic Kids, Storytime, Anorak. A new issue monthly. Leave it on the table.' },
          { name: 'A weekly library visit', body: 'No agenda. The child chooses. Sometimes 10 picture books. Sometimes one. Always go.' },
          { name: 'A documentary at dinner', body: 'Once a week, a David Attenborough or similar. The child watches as long as they want.' },
          { name: 'Set up a "yes" environment', body: 'A home where most things can be touched, tried, opened, climbed. Removes the constant "no" and frees curiosity.' },
          { name: 'A monthly museum visit', body: 'No itinerary. The child leads. Sometimes the gift shop is the highlight. Sometimes one dinosaur for an hour. Both are good.' },
          { name: 'Cook a meal end-to-end together', body: 'Pick a meal. The child helps with every step (with help). It is dinner.' },
          { name: 'A walk to no destination', body: 'Just walking. The child stops to look at things. You stop too.' },
          { name: 'Strew a new tool or material', body: 'A new musical instrument left on the floor. A new set of pencils. A microscope. A handful of magnets. No instructions.' },
          { name: 'A visit to someone who does interesting work', body: 'A potter, a baker, a beekeeper, a farmer. The 4yo asks questions; the worker answers.' },
          { name: 'Plant something the child chose', body: 'They picked the seed. They water it. They notice it.' },
          { name: 'Build with what is available', body: 'A pile of cushions. A blanket fort. A cardboard box. A roll of masking tape. Hours.' },
          { name: 'Conversations that take the 4yo seriously', body: 'At meals, in the car, on walks. Listen, ask follow-up questions, do not condescend.' },
          { name: 'A weekly bath-painting session', body: 'Washable bath paints. The child decorates the tiles. Wash off at end.' },
          { name: 'Loud music dance party', body: 'Choose a piece (anything from Bach to Beyoncé). Dance. The whole family.' },
          { name: 'A trip on public transport', body: 'A bus, a train, a tram. The journey is the lesson — tickets, maps, stops, the view.' },
          { name: 'Real money and a piggy bank', body: 'Coins to sort, a tin to keep them in. A weekly small allowance. They learn what coins are by handling them.' },
          { name: 'Read whatever they ask for, again', body: 'The seventh time of the same book is the seventh time deeper. Do not skip pages.' },
          { name: 'Visit a relative for a long afternoon', body: 'Grandparents, uncles, aunts, family friends. Long visits, not quick ones. The child sees how others live.' },
          { name: 'A boredom afternoon', body: 'One afternoon a week, no screens, no planned activity. Let them complain. Let them invent.' }
        ]
      },
      'reading-list': {
        title: 'Reading list',
        icon: 'book',
        intro: 'Unschooling does not prescribe a child\'s reading list. The principle is: surround them with good books at all levels and let them choose.',
        forChild: {
          intro: 'Whatever they pick at the library is fine. But a few staples in the home shelf catch on for most children.',
          groups: [
            { heading: 'Read-alouds that have endured', books: [
              'A.A. Milne — Winnie-the-Pooh',
              'Beatrix Potter — the full set',
              'Roald Dahl — start with The Enormous Crocodile, Fantastic Mr. Fox',
              'Astrid Lindgren — Pippi Longstocking (around 5)',
              'Kenneth Grahame — The Wind in the Willows'
            ]},
            { heading: 'Picture books that delight', books: [
              'Dr. Seuss — selected (his rhythm is irresistible)',
              'Maurice Sendak — Where the Wild Things Are',
              'Eric Carle — The Very Hungry Caterpillar, The Tiny Seed',
              'Jon Klassen — I Want My Hat Back, This Is Not My Hat'
            ]},
            { heading: 'Information books they may obsess over', books: [
              'Usborne — first big book of (anything they\'re into)',
              'DK — first encyclopaedia, first picture atlas',
              'A subscription to Storytime or similar magazine'
            ]},
            { heading: 'Books for following an obsession', books: [
              'Whatever subject grabs them — dinosaurs, trains, princesses, weather — buy or borrow the best books on that. Feed the fire.',
              'A few books slightly above their level for "stretching"'
            ]}
          ]
        },
        forParent: {
          intro: 'Holt himself, and a handful of modern voices, lay out the philosophy clearly.',
          books: [
            { title: 'How Children Learn', author: 'John Holt, 1967', note: 'Holt\'s most beloved book — observations of how young children actually learn. Persuasive, warm.' },
            { title: 'How Children Fail', author: 'John Holt, 1964', note: 'His earlier book — why school makes children stupid. The case for the alternative.' },
            { title: 'Teach Your Own', author: 'John Holt & Pat Farenga', note: 'Holt\'s practical homeschooling manual. The founding text of US homeschooling.' },
            { title: 'Free to Learn', author: 'Peter Gray', note: 'A developmental psychologist on why play matters and what schooling has cost. Research-backed.' },
            { title: 'The Brave Learner', author: 'Julie Bogart', note: 'A modern, warm, practical book on home-based learning. Especially good for parents anxious about not "doing enough."' },
            { title: 'Unschooled', author: 'Kerry McDonald', note: 'A modern overview of unschooling, with case studies and the research evidence.' },
            { title: 'Hold On to Your Kids', author: 'Gordon Neufeld & Gabor Maté', note: 'Not specifically unschooling, but the case for parent-child attachment over peer-orientation — the relational ground unschooling stands on.' }
          ]
        },
        free: 'johnholtgws.com hosts free archives. The Self-Directed Education Alliance (sde.alliance.org) hosts free essays. Pat Farenga\'s blog is a continuing resource.'
      },
      'competency': {
        title: 'What to expect at four',
        icon: 'sprout',
        intro: 'An unschooled 4-year-old shows wide variation — that is the point. But they generally share a few traits: long attention on chosen interests, strong conversational skills, comfort with adults, and unimpaired curiosity.',
        landmarks: [
          { area: 'Curiosity and attention', items: ['Sustains attention to a chosen interest for long periods', 'Asks rich questions without prompting', 'Pursues topics across days and weeks', 'Does not require external rewards to engage'] },
          { area: 'Conversation', items: ['Holds extended conversations with adults', 'Articulates thoughts and feelings clearly', 'Listens as well as speaks', 'Knows when to be quiet (most of the time)'] },
          { area: 'Real-life competence', items: ['Helps with cooking, shopping, errands as a matter of course', 'Knows how money works at a basic level', 'Can navigate familiar neighbourhood', 'Manages own basic care (dressing, simple hygiene)'] },
          { area: 'Variation (and that\'s fine)', items: ['May read fluently, or not yet', 'May count to 100 or to 10', 'May know dozens of countries or none', 'May know everything about one topic and little about the rest'] },
          { area: 'Family relationships', items: ['Strong attachment to parents and siblings', 'Comfortable with extended family', 'Plays well with mixed-age children', 'Trusts adults as resources, not authorities to fear'] },
          { area: 'What is NOT expected', items: ['Specific academic milestones', 'Uniform progress with peers', 'Compliance with externally-imposed schedule', 'Skill at sitting still for adult-driven activities'] }
        ],
        note: 'The unschooled 4yo can look "advanced" in their obsession and "behind" in standard milestones. The variation is not a problem; it is the design. The trajectory by age 10 generally reaches or surpasses schooled peers — and the love of learning is intact.'
      }
    }
  },
  {
    id: 'athens',
    name: 'Athenian',
    short: 'Athens',
    tagline: 'Paideia · the forming of a free citizen',
    era: 'Athens · 5th–4th century BC',
    color: '#7c3aed',
    colorDeep: '#5b21b6',
    colorSoft: '#ede9fe',
    icon: 'owl',
    built: true,
    blurb: 'In the Athens of Pericles, Socrates, and Plato, the citizen-class family understood education as paideia — the lifelong shaping of a free human being capable of beauty, reason, and self-government. The 4-year-old in such a household was being prepared, slowly and beautifully, to take their place among the free.',
    sections: {
      'core-idea': {
        title: 'Core idea',
        icon: 'compass',
        intro: 'The Athenian noble holds that a child is born with the seed of arete — excellence of soul — and that the work of the family is to cultivate it. Not knowledge as accumulation. Not skill as utility. The making of a person fit to be free, fit to govern themselves, fit to take part in the conversation of the city.',
        principles: [
          { name: 'Paideia: the forming of a person', body: 'Paideia is the entire process by which a child becomes a fully-realised human being — body, mind, soul, character. Music shapes the soul. Gymnastics shapes the body. Story shapes the imagination. Conversation shapes the reasoning. All of it together makes the man (or woman, in some households) of arete.', why: 'A 4-year-old is not too young for this. The work begins now. The shape the child receives in these early years is the shape they will carry. Begin too late and the soul has set in a lesser form.' },
          { name: 'Arete: excellence as the goal', body: 'Arete is excellence in the highest sense — being the best version of what one is. For a 4-year-old, it begins as becoming the best small person they can be. Honest in their words. Brave in their small acts. Beautiful in their care for others. Skilled in their hands.', why: 'A child raised to merely fit in becomes adequate. A child raised to arete is given a measure that lifts them. They will not always reach it; the measure itself is the gift.' },
          { name: 'Music and gymnastic, in balance', body: 'Plato held that the early years require both. Music — meaning the arts of the Muses: poetry, song, story, dance — softens the soul and trains its loves. Gymnastic — the disciplined use of the body — hardens it and trains its courage. Neither alone makes the citizen.', why: 'A 4yo who only sings and reads becomes refined but soft. One who only runs and wrestles becomes capable but unrefined. Both together produce the harmonious person the city needs.' },
          { name: 'Homer is the textbook', body: 'Every Athenian child grew up on the Iliad and the Odyssey, told and re-told. The names of the heroes — Achilles, Odysseus, Hector, Penelope — entered them with their mother\'s milk. The deeds of the heroes became the inner gallery of what a worthy life looks like.', why: 'A 4yo who has heard Hector say goodbye to Andromache and Astyanax learns what tenderness in a warrior looks like. Heard the hundred deceptions of Odysseus, what cleverness in service of homecoming looks like. The stories are the moral imagination.' },
          { name: 'The household gods, daily honoured', body: 'The hearth of Hestia. The household shrine. Daily libations of milk or wine. Festivals through the year. A child who lives in a house where the gods are honoured grows up knowing the world is sacred and that they belong to a tradition larger than themselves.', why: 'A 4yo formed in regular ritual develops a different relationship to time, place, and meaning than one formed only in casual secularity. The ritual is the curriculum even when no words are spoken.' },
          { name: 'The mother is the first teacher; the household the first school', body: 'In the citizen family, the mother (and the trusted household women) raised the small child. She taught the prayers, the songs, the manners, the names of the gods, the family stories. She held the centre of the child\'s world until they were old enough to begin lessons proper.', why: 'A 4yo raised by their own mother (or primary carer) in their own household learns from someone who knows them, loves them, and is forming them as part of a family\'s continuation. No professional service can replace this.' },
          { name: 'Conversation as the highest education', body: 'The Athenian household at table is conversation about ideas, beauty, the city, what is right. The 4yo sits in. They do not need to follow the argument; they absorb the register, the seriousness, the manners of speech.', why: 'A 4yo whose family discusses ideas at the table grows up thinking ideas are worth discussing. One whose family sits in silence or stares at screens grows up thinking ideas belong somewhere else.' }
        ]
      },
      'day-in-life': {
        title: 'A day in the life',
        icon: 'sun',
        intro: 'A reconstruction of how a 4-year-old in a citizen-class Athenian household might have lived their day. Some of it we adapt; some of it we deliberately leave.',
        timeline: [
          { time: 'Dawn', title: 'Wake with the household', body: 'Rise with the sun. Splash water at the courtyard basin. Dress in a simple chiton. Greet the herm at the doorway and the small statue of the household god at the hearth.' },
          { time: 'Early morning', title: 'Breakfast and prayer', body: 'Bread, olives, fruit, watered wine for the adults, water with a drop of wine for the child. A short prayer or libation at the hearth.' },
          { time: 'Mid-morning', title: 'In the women\'s court with the mother', body: 'The 4yo is mostly in the gunaikon (the women\'s quarters) — but this is not the modern picture of confinement. It is the centre of household life. The child hears spinning songs, watches weaving, helps with small tasks, plays with knucklebones in the courtyard.' },
          { time: 'Late morning', title: 'Lessons begin around the edges', body: 'Older children may have a paidagogos (a tutor) for letters and music. The 4yo is on the edges — hearing a song repeated, watching a stylus on wax, learning by absorption rather than instruction.' },
          { time: 'Midday', title: 'Family meal and rest', body: 'Bread, cheese, olives, fish, fruit. A short rest in the cool of the day.' },
          { time: 'Afternoon', title: 'Play in the courtyard', body: 'Knucklebones, hoops, balls, wooden animals, dolls. Mixed-age sibling play. Some climbing, some running. A nurse or older sister supervises.' },
          { time: 'Late afternoon', title: 'A small errand or task', body: 'Carrying a message to a neighbour, helping carry small items, watering plants at the courtyard. Real participation in the household, scaled to the child.' },
          { time: 'Early evening', title: 'The mother\'s teaching time', body: 'A short session — telling a story (Hesiod, Aesop, Homer), teaching a song or short prayer, naming the gods. The same stories returned to many times.' },
          { time: 'Evening', title: 'Family meal', body: 'In the andron (men\'s dining room) for the simpler family meal; the 4yo eats with the adults. Conversation about the day, the city, sometimes a guest or two. The child listens.' },
          { time: 'Bedtime', title: 'Story, prayer, sleep', body: 'A told story (often the same one for a week). A short prayer to a household god. Sleep by full dark.' }
        ],
        note: 'What we keep: the central role of the mother and household, ritual marking the day, story-rich evenings, family meals with real conversation, the 4yo as participant rather than spectator. What we leave: the gender segregation in its strict form, the dependence on slave-labour, the limits on what daughters were taught.'
      },
      'activities': {
        title: 'Things you can do this week',
        icon: 'hand',
        intro: 'Twenty ways to bring the spirit of the Athenian household into a modern home for a 4-year-old.',
        items: [
          { name: 'Tell a Homer episode from memory', body: 'The wooden horse. Odysseus and the Cyclops. Hector\'s farewell. Tell it; do not read. A new episode every fortnight.' },
          { name: 'Memorise a short Greek phrase', body: '"Gnothi seauton" — know yourself. "Meden agan" — nothing in excess. The 4yo says it; you say what it means.' },
          { name: 'Visit a museum and find a Greek vase', body: 'Find one with a scene. Have the child describe what is happening. Who is the hero? What are they doing?' },
          { name: 'A small herm or shrine at the front door', body: 'A small statue, a flat stone with a candle, a photograph of a beloved ancestor. Touch it as you come and go.' },
          { name: 'Family libation on a special day', body: 'A small ritual on Sundays or special meals. Pour a few drops of water, milk, or wine onto the earth (outside) or into a small bowl before drinking. Say a brief blessing or name a thing you are grateful for.' },
          { name: 'Knucklebones (or jacks)', body: 'The Athenian child\'s favourite game. Buy a set; play. Hand skill, attention.' },
          { name: 'A weekly hymn', body: 'Pick a piece of music — Greek Orthodox chant, classical Greek-themed piece, or any old hymn. Sing or listen once a week. By the season it is theirs.' },
          { name: 'Olive oil at every meal', body: 'A simple Mediterranean practice. Good olive oil on bread, on salads. The 4yo grows up with the taste of the Greek table.' },
          { name: 'Plant an olive (if your climate allows) or a grapevine', body: 'A small symbolic planting. Athena\'s tree. Even a potted bay laurel does the work.' },
          { name: 'A family dinner conversation about virtue', body: 'Once a week, at dinner, raise one question: What does it mean to be brave? Honest? Kind? The 4yo listens and sometimes joins.' },
          { name: 'Wrestling, running, balance — the gymnastic side', body: 'Pretend wrestling on the rug, foot races in the garden, balancing on logs. The Athenian child did all of this daily.' },
          { name: 'A short verse before bed', body: 'A prayer, a line from a poem, a wish for the next day. Same words, every night, for years.' },
          { name: 'A printed Greek alphabet on the wall', body: 'Alpha, beta, gamma. The 4yo sees the letters. Sing them as a song around 5–6.' },
          { name: 'Read a picture book about a Greek hero', body: 'D\'Aulaires\' Greek Myths. Sutcliff\'s retellings. One chapter at dinner.' },
          { name: 'Mark the seasons with the Greek calendar', body: 'The festival of Athena in summer. Demeter\'s mourning in winter. Persephone\'s return in spring. The year has a Greek shape.' },
          { name: 'Look at one Greek sculpture for a month', body: 'The Charioteer of Delphi. A photo of the Parthenon frieze. Pinned to the wall at child height.' },
          { name: 'A Greek-style picnic', body: 'Bread, olives, cheese, grapes, figs, fish. Eaten outside, on a blanket, with conversation.' },
          { name: 'Visit a Greek-style architecture nearby', body: 'A neoclassical building, a Greek revival church, a museum portico. Name what it is, where it came from.' },
          { name: 'Family conversation about the gods (or virtues, or values)', body: 'For modern families, the Greek gods can be discussed as personifications of human qualities — Athena (wisdom), Apollo (light, music), Artemis (the wild). The 4yo meets the qualities through the figures.' },
          { name: 'One handcraft each season', body: 'A wreath of laurel for spring. A small clay lamp for winter. The hands learn the tradition.' }
        ]
      },
      'reading-list': {
        title: 'Reading list',
        icon: 'book',
        intro: 'For the child, beautiful retellings of Greek myth and history. For the parent, slow reading in the primary sources and the modern interpreters.',
        forChild: {
          intro: 'The Greek world enters the child through story and image.',
          groups: [
            { heading: 'Greek myth — the essentials', books: [
              'D\'Aulaires\' Book of Greek Myths — the standard for a generation, beautifully illustrated',
              'Rosemary Sutcliff — Black Ships Before Troy, The Wanderings of Odysseus (around 5)',
              'Geraldine McCaughrean — The Orchard Book of Greek Myths',
              'Marcia Williams — Greek Myths (comic-strip style, very accessible)'
            ]},
            { heading: 'Heroes and history', books: [
              'Diane Stanley — Plato (a child\'s biography)',
              'James Mayhew — Katie Meets the Impressionists series (one with Greek vases)',
              'Susan Williams Beckhorn — The Wolf\'s Boy (for older readers, but the spirit transfers)'
            ]},
            { heading: 'Aesop', books: [
              'Aesop\'s Fables — Milo Winter\'s illustrated edition (the classic)',
              'Arnold Lobel — Fables (modern, in the spirit)'
            ]},
            { heading: 'Beautiful picture books with Greek subjects', books: [
              'Brian Wildsmith — Professor Noah\'s Spaceship (not Greek, but his style suits the Mediterranean)',
              'Petra Mathers — Sophie and Lou (whimsical)',
              'Any beautifully illustrated children\'s book on Greek vase painting'
            ]}
          ]
        },
        forParent: {
          intro: 'Read slowly. The Greeks reward patience.',
          books: [
            { title: 'The Iliad and The Odyssey', author: 'Homer (Fagles, Lattimore, or Wilson translation)', note: 'The foundational poems. Read aloud to yourself; the 4yo hears the children\'s versions but you should know the real.' },
            { title: 'The Republic, Book II–III', author: 'Plato', note: 'On music, gymnastic, and the education of the guardians. Selectively read.' },
            { title: 'Protagoras', author: 'Plato', note: 'The shortest of Plato\'s dialogues on virtue and whether it can be taught. Begin here.' },
            { title: 'Nicomachean Ethics, Book I–II', author: 'Aristotle', note: 'On the good life and on virtue as habit. The most influential ethics book in the West.' },
            { title: 'Lives of Theseus and Solon', author: 'Plutarch', note: 'Two of his Greek lives. Read for the moral biography.' },
            { title: 'Paideia: The Ideals of Greek Culture', author: 'Werner Jaeger', note: 'The 20th-century classic on Greek education. Three volumes; the first is the most accessible.' },
            { title: 'The Greek Way', author: 'Edith Hamilton', note: 'A warm 20th-century introduction to the Greek mind. Easy reading.' }
          ]
        },
        free: 'Project Gutenberg has Homer, Plato, Aristotle, Plutarch in older translations. Librivox has free audio. The Perseus Digital Library (perseus.tufts.edu) has the originals plus English alongside.'
      },
      'competency': {
        title: 'What an Athenian noble would expect at four',
        icon: 'sprout',
        intro: 'A 4-year-old of the Athenian citizen class is calm, knows the household ritual, has heard the great stories repeatedly, and is being formed in arete.',
        landmarks: [
          { area: 'Knowledge of the heroes', items: ['Knows the names of the great Homeric figures (Achilles, Odysseus, Hector, Penelope, Athena)', 'Re-tells at least one episode from Homer', 'Recognises a Greek hero by attribute (Hercules with his club, Athena with her owl)'] },
          { area: 'Virtue (early signs)', items: ['Practises small acts of truthfulness, courage, honour', 'Knows the word arete and what it means', 'Has a sense of being part of a tradition larger than themselves'] },
          { area: 'Music and gymnastic', items: ['Sings a few songs from memory', 'Has heard music chosen for its formative power, often', 'Runs, climbs, wrestles, balances — body well-used'] },
          { area: 'Ritual and household', items: ['Knows the household shrine and how to honour it', 'Recognises the gods (or qualities) of the family', 'Participates in family meals as a real member, not a spectator'] },
          { area: 'Language', items: ['Knows a few words of Greek (or another classical tongue)', 'Has memorised one or two short verses or prayers', 'Has a richer vocabulary than peers from exposure to retold stories'] },
          { area: 'Body', items: ['Walks, climbs, wrestles confidently', 'Helps with real household work', 'Manages simple tools'] }
        ],
        note: 'The Athenian noble would say: a 4yo who has heard Hector and Achilles, who knows the family\'s shrine, who can sing a hymn and run a race, who eats at the table with adults talking of ideas — this child is on the road to becoming a free citizen.'
      }
    }
  },
  {
    id: 'rome',
    name: 'Roman',
    short: 'Rome',
    tagline: 'Pietas · gravitas · the citizen of the Republic',
    era: 'Roman Republic · 500–27 BC (high point)',
    color: '#9f1239',
    colorDeep: '#7f1d1d',
    colorSoft: '#ffe4e6',
    icon: 'laurel',
    built: true,
    blurb: 'In the Roman Republic at its height — the centuries of Cincinnatus, the Scipios, Cato the Elder — the patrician family understood the raising of a child as the most serious work of the household. Pietas (duty to family, gods, and country). Gravitas (weight of character). Virtus (courage and excellence). The 4-year-old in such a household was being formed to one day stand among the magistrates of Rome.',
    sections: {
      'core-idea': {
        title: 'Core idea',
        icon: 'compass',
        intro: 'The Roman patrician holds that a child is the future of the family and the Republic. The father (paterfamilias) and mother together carry the responsibility of shaping a citizen — disciplined, dutiful, faithful, brave. Not by sentiment. By the unhurried, daily living of a Roman life.',
        principles: [
          { name: 'Pietas: duty in all directions', body: 'Pietas means duty — to the gods of the household, to the ancestors, to one\'s parents, to one\'s family, to the Republic. It is not warmth or sentiment. It is the right ordering of one\'s loves and obligations.', why: 'A 4yo raised in pietas learns there is a structure to life and to belonging. They are part of a family, part of a line, part of a city. This is not restriction; it is the deepest kind of belonging.' },
          { name: 'Gravitas: the weight of character', body: 'Gravitas is the quality of a person whose words and acts have weight — not lightness, not chatter, not show. A Roman of gravitas is taken seriously because they take themselves seriously. The work of forming this begins in childhood.', why: 'A 4yo whose parents speak with gravitas absorbs that register. One whose home is constant noise, light entertainment, and casual talk grows up unable to bear weight. Gravitas is a learned posture, not a natural one.' },
          { name: 'The mos maiorum — the way of the ancestors', body: 'The Romans called their inherited tradition the mos maiorum — the customs of the ancestors. Stories of the great Romans of old (Cincinnatus, Horatius, Lucretia, Cornelia) were told and re-told. The child grew up knowing what kind of person their ancestors had been and was held to that.', why: 'A 4yo who knows the family legends and the great deeds of the city has a measure to live up to. The expectation lifts them. Without such examples, the child looks only sideways at peers.' },
          { name: 'The father as model and authority', body: 'The paterfamilias is not a tyrant but the head of the household — present, weighty, responsible. He sets the moral example, decides the serious matters, and is honoured. The mother holds the daily life. Both are essential.', why: 'A 4yo with a present, weighty father (or father-figure) has a different inner world than one without. The child internalises an authority figure they can later look to or argue with — but who is real.' },
          { name: 'The mother as the first and most important teacher', body: 'The Roman ideal was the mother who taught her own children. Cornelia, mother of the Gracchi, was praised for refusing to send her boys away and for teaching them herself. The mother formed the child in the years that mattered most.', why: 'A 4yo formed primarily by their own mother (or chief caregiver) develops the deepest attachment, learns the family\'s particular ways, and absorbs the mother\'s register of speech, virtue, and care. No school can replace this.' },
          { name: 'Real work, real responsibility, from young', body: 'Roman children of the better sort carried messages, ran errands, helped with the household, witnessed real adult business — meetings with clients, religious rituals, family decisions. They were part of the daily life of the Republic from young.', why: 'A 4yo who is part of real adult life learns competence and dignity. One who is held in a parallel children\'s world learns nothing about the world they will one day join.' },
          { name: 'The household gods, daily honoured', body: 'Every Roman home had its lararium — the household shrine with the lares (guardians of the family), the penates (guardians of the pantry), the genius of the father. Daily offerings, daily prayers, daily memory of the ancestors.', why: 'A 4yo who sees their parents bow at the household shrine learns that the world is sacred and that the family is held by powers larger than itself. The ritual marks the household as belonging to a tradition.' }
        ]
      },
      'day-in-life': {
        title: 'A day in the life',
        icon: 'sun',
        intro: 'A reconstruction of how a 4-year-old of a Roman patrician family might have lived their day, at the height of the Republic.',
        timeline: [
          { time: 'Dawn', title: 'Wake with the household', body: 'Rise with the sun. Wash at the courtyard basin. Dress in a simple tunic. The whole household begins the day together.' },
          { time: 'Early morning', title: 'Salutatio at the lararium', body: 'A short morning prayer at the household shrine. The paterfamilias leads. A small offering of grain, wine, or incense. The child stands and watches.' },
          { time: 'Mid-morning', title: 'In the atrium with the mother', body: 'The 4yo spends much of the morning with their mother — watching her spin wool (the traditional symbol of the Roman matron), helping with small household tasks, hearing stories of the family\'s past.' },
          { time: 'Late morning', title: 'Witness the salutatio (formal greeting)', body: 'In a patrician household, clients arrived early to greet the paterfamilias. The 4yo might sit on the edge, watching the formal exchanges. Even at four, they were absorbing the rituals of public life.' },
          { time: 'Midday', title: 'Family lunch (prandium)', body: 'A simple meal — bread, cheese, olives, fruit. Eaten quickly. The Roman day continued.' },
          { time: 'Early afternoon', title: 'Rest in the cool of the day', body: 'The Roman siesta. The household quiet. The 4yo naps or plays quietly.' },
          { time: 'Mid-afternoon', title: 'Play and small responsibilities', body: 'Wooden swords, hoops, dolls, knucklebones. Also small tasks — carrying a message, watering the courtyard plants, helping the older siblings with chores.' },
          { time: 'Late afternoon', title: 'Stories from the mother', body: 'The mother\'s great work — telling the family stories and the stories of Rome. Cincinnatus and his plough. Horatius at the bridge. Lucretia\'s honour. The 4yo hears the same stories many times.' },
          { time: 'Evening', title: 'Family meal (cena)', body: 'The main meal of the day. The whole family together. The father may speak about the day in the forum, the family\'s affairs, the news of the Republic. The 4yo listens.' },
          { time: 'Bedtime', title: 'Evening prayer, family kiss, sleep', body: 'A short prayer to the lares. A goodnight from each parent. The household closes for the night.' }
        ],
        note: 'What we keep: the present father, the central mother, the ritual marking of the day, the family stories as moral curriculum, the inclusion of the child in adult life. What we leave: slavery, the harsher elements of patria potestas, the gender restrictions in their absolute form.'
      },
      'activities': {
        title: 'Things you can do this week',
        icon: 'hand',
        intro: 'Twenty ways to bring the spirit of the Roman household into a modern home for a 4-year-old.',
        items: [
          { name: 'Tell the story of Cincinnatus', body: 'The farmer called from his plough to save Rome, who served as dictator only long enough to win the war, then went home to his plough. Tell it; re-tell it. Pietas in action.' },
          { name: 'Tell the story of Horatius at the bridge', body: 'The single Roman who held the bridge against the Etruscan army. Courage, sacrifice, loyalty to the Republic.' },
          { name: 'Tell the story of Cornelia and her jewels', body: 'When asked to show her jewels, Cornelia pointed to her two sons (the Gracchi). The mother\'s honour.' },
          { name: 'A household shrine (lararium)', body: 'A small shelf with a candle, a photograph of grandparents, an icon if your tradition includes it, a small bowl for grain or salt. The family\'s sacred spot.' },
          { name: 'Morning blessing at the shrine', body: 'Before breakfast, a brief moment at the shrine. A word of thanks, a remembrance of an ancestor, a wish for the day. The child watches; soon joins.' },
          { name: 'A weekly family meal with real conversation', body: 'Once a week, a deliberate dinner with adult conversation about ideas, family matters, the city. The 4yo sits in.' },
          { name: 'Memorise a Latin phrase a season', body: '"Carpe diem." "Memento mori." "Audentes Fortuna iuvat." The child says it; you say what it means.' },
          { name: 'A Latin grace before meals', body: '"Benedic, Domine, nos et haec tua dona quae de tua largitate sumus sumpturi." A short Latin blessing the family says together.' },
          { name: 'The child carries the day\'s message', body: 'Send the 4yo with a real message to a neighbour, a relative, the parent. They learn the dignity of being entrusted.' },
          { name: 'Visit a Roman or neoclassical building', body: 'A bank, a courthouse, an old church. Name the columns, the architraves, the pediments. The Roman world is built into our cities.' },
          { name: 'Look at a Roman bust or sculpture for a month', body: 'Print one — Marcus Aurelius, Augustus, Cicero. Hang at child height. Look together. The Roman face.' },
          { name: 'A wooden sword and a small shield', body: 'The Roman boy played at being a soldier. Wooden gladius, simple shield. Pretend battles in the garden. Courage is rehearsed in play.' },
          { name: 'A weekly family hike or walk', body: 'The Romans built their citizens through real walking and hard travel. A family walk every Sunday. Rain or shine.' },
          { name: 'Read a picture-book biography of a Roman', body: 'Marcus Aurelius for children. Caesar. Cicero. Augustine (in late antiquity). Real lives, simply told.' },
          { name: 'Tell the family\'s own stories', body: 'A great-grandparent\'s emigration. A grandfather\'s war. A family victory or hardship. The 4yo learns they belong to a line.' },
          { name: 'Daily small responsibility', body: 'A specific small task the 4yo owns. Watering a particular plant. Setting their place at the table. Putting the family napkins out. Same task every day.' },
          { name: 'A weekly visit to an elder', body: 'A grandparent, a great-aunt, an older neighbour. The child learns to honour age and to listen.' },
          { name: 'A short prayer at bedtime', body: 'A simple invocation to the family\'s gods, ancestors, or to a remembered loved one. Same words, every night.' },
          { name: 'Mark the family calendar', body: 'Birthdays of living and dead family members. Wedding anniversaries. Days the family remembers. The 4yo grows up knowing what the family marks.' },
          { name: 'A weekly handcraft or domestic skill', body: 'Bread, mending, polishing, gardening. The 4yo learns one or two real skills by the end of the year, taught by the parent.' }
        ]
      },
      'reading-list': {
        title: 'Reading list',
        icon: 'book',
        intro: 'For the child, the great Roman stories told beautifully. For the parent, the primary sources and the modern interpreters.',
        forChild: {
          intro: 'Romans were practical, dutiful, story-loving people. The books should be too.',
          groups: [
            { heading: 'Roman heroes for children', books: [
              'Geraldine McCaughrean — The Orchard Book of Roman Myths',
              'Caroline Lawrence — The Roman Mysteries series (for older readers; read-aloud earlier)',
              'A Child\'s Book of Roman Heroes (search Catholic or classical curriculum publishers)',
              'Diane Stanley — Cleopatra (technically late Ptolemaic Egypt but speaks to the Roman world)'
            ]},
            { heading: 'Picture books with Roman settings', books: [
              'Marcia Williams — Ancient Rome (comic-strip-style retellings)',
              'Mary Pope Osborne — Vacation Under the Volcano (Magic Tree House #13, Pompeii)',
              'Stephen Biesty — Cross-Sections: Rome (richly illustrated, slightly older)'
            ]},
            { heading: 'Aesop and moral fable (Romans loved these too)', books: [
              'Aesop\'s Fables — Milo Winter\'s edition',
              'Arnold Lobel — Fables'
            ]},
            { heading: 'Read-aloud chapter books', books: [
              'Rosemary Sutcliff — Eagle of the Ninth (for older readers, but read-aloud earlier)',
              'Henry Winterfeld — Detectives in Togas (a classic Latin-flavoured chapter book)',
              'Caroline Lawrence — The Thieves of Ostia (Roman Mysteries Book 1)'
            ]}
          ]
        },
        forParent: {
          intro: 'The Romans wrote much about themselves. Read selectively; they reward patience.',
          books: [
            { title: 'Institutio Oratoria, Book I', author: 'Quintilian, c. 95 AD', note: 'A Roman rhetorician on early education. Practical, warm, surprisingly modern. Begin here.' },
            { title: 'Plutarch\'s Roman Lives (selected)', author: 'Plutarch', note: 'Cincinnatus, Cato the Elder, Cicero, Caesar, Brutus, Marcus Aurelius. Moral biography at its highest.' },
            { title: 'Meditations', author: 'Marcus Aurelius', note: 'The personal notebook of a Roman emperor and a Stoic. Read for the voice of a Roman of weight.' },
            { title: 'On Duties (De Officiis)', author: 'Cicero', note: 'Cicero\'s letter to his son on how to live a Roman life. The book on pietas, decorum, virtue.' },
            { title: 'On Old Age, On Friendship', author: 'Cicero', note: 'Two short dialogues. Easier than On Duties; equally valuable.' },
            { title: 'Letters from a Stoic', author: 'Seneca', note: 'Seneca\'s practical letters on living a virtuous Roman life.' },
            { title: 'Roman Lives, Roman Letters', author: 'Various', note: 'Anthologies are easy to find; pick one for a slow daily reading.' },
            { title: 'How to Be a Roman', author: 'Mary Beard', note: 'A modern historian, accessible and accurate. Good orientation.' }
          ]
        },
        free: 'Gutenberg has all of Cicero, Seneca, Plutarch, Marcus Aurelius. Librivox has free audio. The Loeb Classical Library volumes are paid but the gold standard.'
      },
      'competency': {
        title: 'What a Roman patrician would expect at four',
        icon: 'sprout',
        intro: 'A 4-year-old of a Roman patrician family is dignified, knows the household ritual, has heard the great stories of Rome, and is being trained in pietas and gravitas.',
        landmarks: [
          { area: 'Knowledge of the Roman heroes', items: ['Knows the names of the great Romans (Cincinnatus, Horatius, Cato, Caesar, Augustus)', 'Re-tells at least one Roman virtue story', 'Recognises a Roman bust, a column, the eagle'] },
          { area: 'Pietas (early signs)', items: ['Honours parents and elders with the right manners', 'Participates in family ritual at the household shrine', 'Knows the family\'s ancestors by name and one fact each'] },
          { area: 'Gravitas (early signs)', items: ['Can sit through a serious adult conversation without disrupting', 'Speaks with some weight, not constant chatter', 'Is taken seriously by adults when they speak'] },
          { area: 'Real responsibility', items: ['Has one daily household task they own', 'Carries messages and runs small errands', 'Is part of family meals as a real participant'] },
          { area: 'Language and memory', items: ['Knows a few words of Latin', 'Has memorised one or two short blessings or verses', 'Has heard the family stories repeatedly'] },
          { area: 'Body', items: ['Walks, runs, climbs vigorously', 'Manages a small tool or weapon (a wooden sword) with care', 'Has a beginning of the Roman virtue of endurance (puts up with cold, hunger, tiredness without immediate complaint)'] }
        ],
        note: 'The Roman patrician would say: a 4yo who honours the shrine, knows the family stories, sits at the family table, does their daily duty without complaint — this child has begun the long road to becoming a citizen of weight.'
      }
    }
  },
];

window.METHOD_BY_ID = (id) => window.METHODS.find(m => m.id === id);
