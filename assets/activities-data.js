// Hands-on things to DO with a 3–5 year old at home — mostly minimal kit, lots
// of it from what's already in the cupboard. Sister list to the out-loud games.
// Every activity carries the FIRST-PRINCIPLES reason it helps: the actual skill
// it builds and the mechanism, not "it's good for them". Where the material can
// be made at home cheaply and non-toxically (play-dough, gloop, paint…), a short
// `recipe` is included.
//
// Fields:
//   group  — Make | Mark | Sensory | Pretend | Practical | Move
//   emoji  — a face for the card
//   name   — short
//   how    — how to set it up / play it
//   why    — the developmental reason, with the mechanism named
//   traits — from the controlled list below
//   kit    — "No kit" | "Household" | "A few bits"
//   mess   — "Tidy" | "Some mess" | "Messy"
//   age    — "3–5" or "4–5"
//   recipe — optional: make-it-yourself, non-toxic
//   tweak  — optional: easier/harder variation

window.ACTIVITY_GROUPS = {
  Make:      { label: 'Make & Build',            c: '#E8894A', cd: '#B45309', cs: '#FEEBD6', blurb: 'Shaping, joining and building — the maker\'s work, and where small hands get strong.' },
  Mark:      { label: 'Draw, Paint & Print',     c: '#C73B7A', cd: '#9E2A5F', cs: '#F9E2EE', blurb: 'Every mark is the hand learning to hold a tool and the mind learning marks mean things.' },
  Sensory:   { label: 'Sensory & Messy Play',    c: '#0EA5A4', cd: '#0F766E', cs: '#CCFBF1', blurb: 'Hands in it — pouring, squishing and mixing. The most calming, absorbing play there is.' },
  Pretend:   { label: 'Pretend & Small World',   c: '#8B6FD1', cd: '#5B3FA8', cs: '#EEE9FA', blurb: 'Trying on the world — the richest language and imagination play of these years.' },
  Practical: { label: 'Real Jobs & Fine Motor',  c: '#4A9ED4', cd: '#2D6FA8', cs: '#E4F1FA', blurb: 'Real, careful tasks. Children love doing a proper job — and it builds the pencil grip.' },
  Move:      { label: 'Move & Play Indoors',     c: '#3FBF97', cd: '#2F9E77', cs: '#D8F3E9', blurb: 'Rainy-day bodies — crawling, balancing and jumping build the core that stillness rests on.' }
};

window.ACTIVITY_TRAITS = [
  'Fine motor', 'Hand strength', 'Creativity', 'Imagination', 'Sensory',
  'Concentration', 'Early maths', 'Language', 'Problem-solving', 'Independence',
  'Gross motor', 'Colour & shape', 'Self-control'
];

window.ACTIVITIES = [

  // ─────────────── MAKE & BUILD ───────────────
  {
    group: 'Make', emoji: '🟡', name: 'Play-dough', kit: 'Household', mess: 'Some mess', age: '3–5',
    how: 'Give them a lump of dough and a few tools — a rolling pin, a blunt knife, cutters, a fork — or just their hands, and let them squash, roll, poke, pinch and shape.',
    why: 'Rolling, pinching and squeezing dough is some of the best hand-strengthening there is: it builds the small hand muscles and the pincer grip a child later needs to hold a pencil. It\'s also open-ended and calming.',
    traits: ['Fine motor', 'Hand strength', 'Creativity', 'Sensory'],
    recipe: 'No-cook play-dough: mix 2 cups plain flour, 1 cup salt and 2 tbsp oil, then add about 1 cup water a little at a time until it comes together; knead smooth. A few drops of food colouring make it bright. Keeps for weeks in a tub.',
    tweak: 'Younger: just hands and squashing. Older: cutters, letters, or roll "snakes" to make shapes and numbers.'
  },
  {
    group: 'Make', emoji: '📿', name: 'Threading beads or pasta', kit: 'A few bits', mess: 'Tidy', age: '3–5',
    how: 'Thread big beads, buttons, or dried penne and rigatoni onto a shoelace, pipe cleaner or string. Make necklaces, or copy a colour pattern you start.',
    why: 'Lining up a bead and pushing the lace through is precise two-handed work — it sharpens the pincer grip and hand-eye coordination, and finishing a row builds concentration. Copying a colour pattern is early maths.',
    traits: ['Fine motor', 'Concentration', 'Early maths'],
    tweak: 'A stiff pipe cleaner is far easier than floppy string for a young 3. For older, set a pattern (red, blue, red…) to continue.'
  },
  {
    group: 'Make', emoji: '📦', name: 'Junk modelling', kit: 'Household', mess: 'Some mess', age: '3–5',
    how: 'Keep a box of clean "rubbish" — cereal boxes, loo rolls, yoghurt pots, bottle tops, egg cartons — and let them build a rocket, robot, castle or animal with tape and glue.',
    why: 'Turning a pile of odds into "a thing" is real design and problem-solving — planning, joining, adjusting when it won\'t balance. Because nothing is precious, a child can be bold and inventive without fear of spoiling it.',
    traits: ['Creativity', 'Problem-solving', 'Imagination', 'Fine motor']
  },
  {
    group: 'Make', emoji: '✂️', name: 'Collage', kit: 'Household', mess: 'Some mess', age: '3–5',
    how: 'Tear or cut coloured paper, old magazines, leaves, fabric or foil and glue the pieces onto card to make a picture, a face, or just a lovely mess of colour.',
    why: 'Tearing and gluing builds hand strength and control, while choosing and arranging pieces is early composition — deciding what goes where. There\'s no "wrong", so it suits a child who thinks they "can\'t draw".',
    traits: ['Fine motor', 'Creativity', 'Colour & shape']
  },
  {
    group: 'Make', emoji: '🧱', name: 'Building & stacking', kit: 'Household', mess: 'Tidy', age: '3–5',
    how: 'Wooden blocks, plastic cups, boxes or tins — build the tallest tower, a bridge, a wall, a garage — then knock it down and start again.',
    why: 'Stacking and balancing is hands-on physics: the child learns height, balance and gravity by testing it, not being told. Rebuilding after every crash quietly teaches persistence and problem-solving.',
    traits: ['Problem-solving', 'Early maths', 'Fine motor']
  },
  {
    group: 'Make', emoji: '🖐️', name: 'Salt-dough keepsakes', kit: 'Household', mess: 'Some mess', age: '3–5',
    how: 'Make salt dough, press in a hand-print or shape it into beads, stars or decorations, bake it hard, then paint it another day.',
    why: 'All the hand-strengthening of play-dough, but with a lasting result the child can keep and give — which builds real pride, and stretches an activity across two happy sessions.',
    traits: ['Fine motor', 'Hand strength', 'Creativity'],
    recipe: 'Salt dough: mix 2 cups plain flour, 1 cup salt and about 1 cup water; knead, shape, then bake on low (around 120°C) for 2–3 hours until hard. Paint once cool.'
  },
  {
    group: 'Make', emoji: '⭐', name: 'Sticker pictures', kit: 'A few bits', mess: 'Tidy', age: '3–5',
    how: 'A sheet of stickers and paper — peel and place them to make a scene, fill a drawn shape, decorate a card, or line them up in rows.',
    why: 'Peeling a sticker off its backing and placing it exactly is surprisingly precise pincer-grip work — and it\'s completely mess-free, so it\'s perfect for a café, a car or a calm-down moment.',
    traits: ['Fine motor', 'Concentration']
  },
  {
    group: 'Make', emoji: '🧺', name: 'Paper weaving', kit: 'A few bits', mess: 'Tidy', age: '4–5',
    how: 'Weave strips of paper or ribbon over-and-under through a slotted card (or through a garden fence with fabric strips) to make a mat or pattern.',
    why: 'The over-under rhythm is early sequencing and pattern-making, and threading a strip through with two hands is real coordination. Seeing the pattern appear is quietly satisfying.',
    traits: ['Fine motor', 'Early maths', 'Concentration']
  },

  // ─────────────── DRAW, PAINT & PRINT ───────────────
  {
    group: 'Mark', emoji: '🖍️', name: 'Crayon drawing', kit: 'A few bits', mess: 'Tidy', age: '3–5',
    how: 'Chunky crayons and a big sheet of paper — draw your family, an animal, "what we did today", or just scribble freely. Talk about what they\'ve drawn.',
    why: 'Mark-making is the root of writing: every scribble is the hand learning to control a tool and the mind learning that marks carry meaning. Chunky crayons suit a young whole-hand grip.',
    traits: ['Fine motor', 'Creativity', 'Language'],
    tweak: 'Tape the paper down for a wobbly 3. For older, draw round a template, or "draw the story" you just read.'
  },
  {
    group: 'Mark', emoji: '🖐️', name: 'Finger painting', kit: 'A few bits', mess: 'Messy', age: '3–5',
    how: 'Blobs of paint straight onto paper or a wipeable tray — swirl, smear, print and mix with fingers and palms. Old shirt on, newspaper down.',
    why: 'With no tool between hand and mark, it\'s pure cause-and-effect and deeply sensory. Colours mix by accident — a first discovery that red and blue make purple — and it frees a child who fears "doing it wrong".',
    traits: ['Sensory', 'Creativity', 'Colour & shape'],
    recipe: 'Cornflour finger paint: whisk 4 tbsp cornflour into a little cold water, stir in 1 cup boiling water until thick and glossy, cool, then divide into pots and stir in food colouring.'
  },
  {
    group: 'Mark', emoji: '🥔', name: 'Sponge & veg printing', kit: 'Household', mess: 'Messy', age: '3–5',
    how: 'Dip cut sponges, a halved potato or apple, a cork, or bubble wrap into paint and stamp patterns and pictures.',
    why: 'Printing shows that one shape can repeat — early pattern-making — and it removes the pressure of drawing well, so every child makes something they\'re proud of. Pressing down is good hand-strength work too.',
    traits: ['Creativity', 'Colour & shape', 'Sensory']
  },
  {
    group: 'Mark', emoji: '🌈', name: 'Chalk on the path', kit: 'A few bits', mess: 'Tidy', age: '3–5',
    how: 'Big pavement chalks outside — draw roads for bikes, a hopscotch grid, around their own shadow, or one giant picture together.',
    why: 'Big arm movements on the ground build the shoulder and whole-arm control that neat writing later rests on. It all washes away in the rain, so there\'s zero worry about mess or mistakes.',
    traits: ['Gross motor', 'Creativity']
  },
  {
    group: 'Mark', emoji: '🧊', name: 'Ice painting', kit: 'A few bits', mess: 'Some mess', age: '3–5',
    how: 'Freeze water with a little paint or food colour in an ice-cube tray with lolly sticks as handles; paint on paper with the cubes as they slowly melt.',
    why: 'The slow melt is fascinating and calming to watch, the colours blur beautifully, and it slips in a first idea about solid turning to liquid — science and art at once.',
    traits: ['Sensory', 'Creativity']
  },
  {
    group: 'Mark', emoji: '🎨', name: 'Marble or string painting', kit: 'Household', mess: 'Messy', age: '3–5',
    how: 'Drop a paint-dipped marble into a box lid with paper in it and tilt to roll it around; or dip string and drag it across the page.',
    why: 'A process-over-product way to paint — the child controls the movement, not the exact result, which takes all the pressure off and delights in the surprise of what appears.',
    traits: ['Creativity', 'Gross motor', 'Problem-solving']
  },
  {
    group: 'Mark', emoji: '✏️', name: 'Felt-tips & dot markers', kit: 'A few bits', mess: 'Tidy', age: '3–5',
    how: 'Washable felt-tips or dot-markers to colour in, fill a shape, dot a pattern, or connect dots. Name the colours as you go.',
    why: 'Colouring within a shape and dotting on target is early pencil control and hand-eye coordination, and naming colours as you go builds vocabulary and colour recognition.',
    traits: ['Fine motor', 'Colour & shape', 'Language']
  },
  {
    group: 'Mark', emoji: '📄', name: 'Rubbings & tracing', kit: 'Household', mess: 'Tidy', age: '3–5',
    how: 'Lay thin paper over leaves, coins, a doily or textured surfaces and rub the side of a crayon to reveal the hidden pattern.',
    why: 'The steady side-to-side rubbing builds control and hand strength, and the pattern appearing "by magic" is a small wonder that keeps them going. A gentle intro to texture and pattern.',
    traits: ['Fine motor', 'Concentration']
  },

  // ─────────────── SENSORY & MESSY PLAY ───────────────
  {
    group: 'Sensory', emoji: '💧', name: 'Water play', kit: 'Household', mess: 'Some mess', age: '3–5',
    how: 'A basin, sink or tub of water with cups, jugs, a funnel, a sponge, and things that float and sink. Pour, scoop, squeeze and fish things out.',
    why: 'Pouring and scooping is endlessly absorbing and quietly teaches volume, full and empty, and float and sink. Water play is one of the most reliable ways to settle a wound-up child.',
    traits: ['Sensory', 'Early maths', 'Fine motor']
  },
  {
    group: 'Sensory', emoji: '🏖️', name: 'Sand or dry play', kit: 'A few bits', mess: 'Messy', age: '3–5',
    how: 'Sand outside — or dry oats, semolina or flour on a tray indoors — with scoops, moulds, cars and small toys to bury and dig out.',
    why: 'Digging, burying and moulding is calming heavy-work for the hands, and hiding then finding objects is early problem-solving. The feel of it is regulating for busy little bodies.',
    traits: ['Sensory', 'Fine motor', 'Concentration']
  },
  {
    group: 'Sensory', emoji: '🍚', name: 'Rice or pasta bin', kit: 'Household', mess: 'Messy', age: '3–5',
    how: 'A tub of dried rice or pasta with scoops, funnels, cups and a few hidden small toys — pour, scoop, dig and transfer between containers.',
    why: 'The sound and feel of pouring is deeply regulating, and scooping and transferring builds coordination and concentration. Dyeing the rice makes it a feast of colour too.',
    traits: ['Sensory', 'Fine motor', 'Concentration'],
    recipe: 'Colour the rice: shake 2 cups dry rice with 1 tsp vinegar and a few drops of food colouring in a sealed bag, then spread out to dry for an hour.'
  },
  {
    group: 'Sensory', emoji: '🌀', name: 'Gloop (cornflour ooze)', kit: 'Household', mess: 'Messy', age: '3–5',
    how: 'Mix cornflour and water into "gloop" that turns solid when you squeeze it and runs like liquid when you let go. Grab a handful and watch it melt away.',
    why: 'A magic material that behaves two ways depending on pressure — the child experiments, predicts and tests, a first real taste of "how does this work?" Utterly mesmerising.',
    traits: ['Sensory', 'Problem-solving'],
    recipe: 'Stir about 2 cups cornflour into 1 cup water (add the water slowly) until it\'s runny when still but firm when pressed. A drop of colour is optional. It dries to powder and sweeps up.'
  },
  {
    group: 'Sensory', emoji: '☁️', name: 'Cloud dough', kit: 'Household', mess: 'Messy', age: '3–5',
    how: 'Mix flour and oil into a soft, crumbly dough that holds its shape when pressed into a mould, then crumbles again. Scoop, mould and squeeze.',
    why: 'A different feel from play-dough — powdery and mouldable — that\'s wonderfully soothing to run through the hands, and moulding then crumbling is quiet, repetitive, absorbing fine-motor play.',
    traits: ['Sensory', 'Fine motor'],
    recipe: 'Cloud dough: mix 8 cups plain flour with 1 cup baby oil or vegetable oil until it clumps when squeezed. Scale down as you like — the ratio is 8 to 1.'
  },
  {
    group: 'Sensory', emoji: '🫧', name: 'Shaving-foam play', kit: 'A few bits', mess: 'Messy', age: '4–5',
    how: 'Spray foam onto a tray, then draw letters, numbers and shapes in it with a finger, swirl in a little colour, or "wash" some plastic toys.',
    why: 'A big sensory splurge that\'s brilliant for practising first letters and shapes: a mistake vanishes with one swipe, so it\'s completely pressure-free writing practice, and the feel keeps them at it.',
    traits: ['Sensory', 'Fine motor', 'Language']
  },
  {
    group: 'Sensory', emoji: '🧴', name: 'Mess-free sensory bag', kit: 'A few bits', mess: 'Tidy', age: '3–5',
    how: 'Fill a strong zip-lock bag with hair gel or runny paint plus glitter, beads or little shapes; press the air out, tape it shut, and tape it to a window or table to squish and push things around.',
    why: 'All the sensory squishing with none of the mess — perfect for a highchair, a car seat or a wound-up moment. Pushing the beads about is gentle fine-motor and finger-tracing practice.',
    traits: ['Sensory', 'Fine motor']
  },
  {
    group: 'Sensory', emoji: '🍲', name: 'Mud kitchen', kit: 'Household', mess: 'Messy', age: '3–5',
    how: 'Outside: an old pot, a spoon, some water, mud, leaves and petals — cook up "soup", "pies" and "potions" and serve them to you.',
    why: 'Open-ended outdoor play at its very best — mixing, measuring and pretend-cooking, wrapped in imagination and language. Getting properly mucky outdoors is good for a child in more ways than one.',
    traits: ['Imagination', 'Sensory', 'Gross motor']
  },

  // ─────────────── PRETEND & SMALL WORLD ───────────────
  {
    group: 'Pretend', emoji: '🎭', name: 'Dress-up box', kit: 'Household', mess: 'Tidy', age: '3–5',
    how: 'A box of old clothes, hats, scarves, bags and shoes — become a firefighter, a queen, a dog, a shopkeeper, a superhero. Play along as the customer or the dragon.',
    why: 'Being someone else is how a child tries on the world — it grows imagination, empathy and language as they narrate a whole character and its story, and stretches confidence.',
    traits: ['Imagination', 'Language']
  },
  {
    group: 'Pretend', emoji: '🦁', name: 'Small world play', kit: 'A few bits', mess: 'Tidy', age: '3–5',
    how: 'A tray or rug with animals, cars, dolls or diggers and a simple "world" made from boxes and cloth — a farm, a jungle, a garage, a zoo. Then let the stories unfold.',
    why: 'Moving little figures through a story is rich narrative play — the child directs the whole scene, building language, sequencing and imagination as they voice every character.',
    traits: ['Imagination', 'Language']
  },
  {
    group: 'Pretend', emoji: '🏕️', name: 'Den building', kit: 'Household', mess: 'Some mess', age: '3–5',
    how: 'Drape blankets over chairs or a table, add cushions and a torch — a cave, a rocket, a shop, a cosy hideout. Read a book inside it.',
    why: 'Making a space of their own is deeply satisfying and full of planning and problem-solving — will it hold up, where\'s the door — and a finished den is a calm, contained retreat.',
    traits: ['Problem-solving', 'Imagination', 'Gross motor']
  },
  {
    group: 'Pretend', emoji: '🛒', name: 'Shop or café', kit: 'Household', mess: 'Tidy', age: '3–5',
    how: 'Set up a "shop" with tins and packets, a bag, and paper coins, and take turns buying and selling. Or a café that takes your order and "cooks" it.',
    why: 'Playing shop rehearses real life — counting coins, taking turns, please-and-thank-you and early number — all wrapped in fun. Taking an order is memory and language too.',
    traits: ['Language', 'Early maths', 'Imagination']
  },
  {
    group: 'Pretend', emoji: '🫖', name: 'Tea party & dolls', kit: 'Household', mess: 'Tidy', age: '3–5',
    how: 'Cups, a teapot, a few teddies and dolls — pour the "tea", share out the biscuits, and put teddy down for a nap.',
    why: 'Caring for a doll or teddy is a child practising kindness and routine — feeding, tucking in, comforting — and pouring and sharing out is fine-motor control and early fairness.',
    traits: ['Imagination', 'Language', 'Fine motor']
  },
  {
    group: 'Pretend', emoji: '🧦', name: 'Puppet play', kit: 'Household', mess: 'Tidy', age: '3–5',
    how: 'Sock puppets, or paper-bag puppets they decorate, and a little show from behind the sofa. You be the audience, then swap.',
    why: 'A shy child will often speak through a puppet when they won\'t as themselves — it\'s a gentle door into storytelling, funny voices and confidence, and pure language play.',
    traits: ['Language', 'Imagination']
  },
  {
    group: 'Pretend', emoji: '🧑‍🍳', name: 'Playing grown-up jobs', kit: 'Household', mess: 'Tidy', age: '3–5',
    how: 'A toy kitchen (or real pots and a wooden spoon), a toolbox, a doctor\'s kit, or an "office" with an old keyboard and paper. Let them run it.',
    why: 'Imitating grown-up work is a child\'s serious business — it\'s how they make sense of the world they watch every day, building language, sequencing and a feeling of being capable.',
    traits: ['Imagination', 'Language', 'Independence']
  },
  {
    group: 'Pretend', emoji: '📖', name: 'Act out a story', kit: 'A few bits', mess: 'Tidy', age: '4–5',
    how: 'Gather a few props to match a favourite book — three bowls for the bears, a red hood for Riding Hood — and act it out together, taking parts.',
    why: 'Acting a known story deepens comprehension: the child lives the sequence and the feelings, which later helps them retell it and understand what they read on their own.',
    traits: ['Language', 'Imagination']
  },

  // ─────────────── REAL JOBS & FINE MOTOR ───────────────
  {
    group: 'Practical', emoji: '🫗', name: 'Pouring & transferring', kit: 'Household', mess: 'Some mess', age: '3–5',
    how: 'Two small jugs and some water, dried beans or rice — pour from one to the other and back. Add a small sponge to mop up any spills themselves.',
    why: 'This is classic Montessori "practical life": a careful, real task that builds concentration, coordination and independence. Children take these small jobs seriously and love doing them properly.',
    traits: ['Fine motor', 'Concentration', 'Independence'],
    tweak: 'Start with dried beans (forgiving), move to water. A funnel and narrower jug make it harder as they master it.'
  },
  {
    group: 'Practical', emoji: '🔵', name: 'Sorting & matching', kit: 'Household', mess: 'Tidy', age: '3–5',
    how: 'Sort buttons, pasta shapes, socks, toy animals or coloured pom-poms into bowls or an egg box — by colour, size, or kind.',
    why: 'Grouping things by a rule is the very root of maths and logic — the child is learning to classify, compare and notice attributes, the thinking under all early number work.',
    traits: ['Early maths', 'Concentration', 'Problem-solving']
  },
  {
    group: 'Practical', emoji: '🥢', name: 'Tongs & peg transfer', kit: 'Household', mess: 'Tidy', age: '3–5',
    how: 'Use kitchen tongs, tweezers or a clothes peg to move pom-poms, cotton balls or dry cereal from one bowl to another — a race, or to sort by colour.',
    why: 'Squeezing tongs or a peg is targeted hand-strengthening and pincer control — the exact muscles for a pencil grip — turned into a satisfying little challenge.',
    traits: ['Fine motor', 'Hand strength', 'Concentration']
  },
  {
    group: 'Practical', emoji: '✂️', name: 'Cutting practice', kit: 'A few bits', mess: 'Some mess', age: '4–5',
    how: 'Child-safe scissors and strips of paper, play-dough "snakes" or old cards — snip freely at first, then along thick straight lines, then curves.',
    why: 'Scissors are a two-hand, two-motion skill — hold, open-and-close, feed the paper — so they\'re brilliant coordination and hand-strength practice, and hugely satisfying once it clicks.',
    traits: ['Fine motor', 'Hand strength', 'Concentration']
  },
  {
    group: 'Practical', emoji: '🧁', name: 'Baking together', kit: 'Household', mess: 'Messy', age: '3–5',
    how: 'A simple bake — buns, biscuits, bread, flapjack — and let them pour, stir, knead, cut and decorate. (There are easy recipes in Cook Together.)',
    why: 'Baking is maths, science and fine motor in one: counting and measuring, mixing and rising, stirring and cutting — and following the steps in order is real sequencing, finished with edible pride.',
    traits: ['Early maths', 'Fine motor', 'Independence', 'Language']
  },
  {
    group: 'Practical', emoji: '🌱', name: 'Planting & gardening', kit: 'A few bits', mess: 'Messy', age: '3–5',
    how: 'Plant fast seeds — cress, beans, sunflowers — in a pot or eggshell, water them, and watch each day. Dig, pot, water and pick.',
    why: 'Growing something teaches patience and care across days and weeks, and connects a child to where food and life come from. Digging and scooping is lovely heavy-work for the hands too.',
    traits: ['Independence', 'Concentration', 'Language']
  },
  {
    group: 'Practical', emoji: '🧹', name: 'Real little chores', kit: 'Household', mess: 'Tidy', age: '3–5',
    how: 'Give a real small job — sweeping with a child-sized brush, washing plastic cups, matching the socks, wiping the table, watering plants, sorting cutlery (no knives).',
    why: 'Real work makes a child feel capable and part of the family far more than a toy version does — it builds coordination and independence, and at this age they genuinely want to help.',
    traits: ['Independence', 'Fine motor', 'Gross motor']
  },
  {
    group: 'Practical', emoji: '📮', name: 'Pegs & posting', kit: 'Household', mess: 'Tidy', age: '3–5',
    how: 'Clip clothes pegs around the rim of a tub or a piece of card; or cut a slot in a plastic lid and "post" coins, buttons, lids or cut cards through it.',
    why: 'Pinching a peg open and lining a coin up with a slot are precise pincer tasks — small, repeatable and oddly absorbing, and exactly the control that later holds a pencil.',
    traits: ['Fine motor', 'Hand strength', 'Concentration']
  },

  // ─────────────── MOVE & PLAY INDOORS ───────────────
  {
    group: 'Move', emoji: '🏃', name: 'Obstacle course', kit: 'Household', mess: 'Some mess', age: '3–5',
    how: 'Cushions to jump over, a chair to crawl under, a taped line to balance along, a blanket tunnel to wriggle through — set a course around the room and time it.',
    why: 'Crawling, jumping, balancing and climbing build the core strength, balance and body-awareness that underpin everything — including, later, the ability to sit still and control a pencil.',
    traits: ['Gross motor', 'Problem-solving']
  },
  {
    group: 'Move', emoji: '🧗', name: 'Balance line', kit: 'A few bits', mess: 'Tidy', age: '3–5',
    how: 'A line of masking tape or a rope on the floor — walk along it heel-to-toe, tiptoe, backwards, or carry a beanbag across without dropping it.',
    why: 'Balancing along a line is concentrated whole-body control and focus, and carrying something across adds a coordination challenge that quietly builds steadiness and patience.',
    traits: ['Gross motor', 'Concentration', 'Self-control']
  },
  {
    group: 'Move', emoji: '🕺', name: 'Freeze dance', kit: 'No kit', mess: 'Tidy', age: '3–5',
    how: 'Put music on and dance; when it stops, freeze like a statue. Last to freeze does a silly move. Or copy each other\'s dance moves.',
    why: 'Stopping dead on cue is real self-control — the "brakes" a young brain is still growing — and dancing is joyful, whole-body exercise and a first feel for rhythm.',
    traits: ['Gross motor', 'Self-control']
  },
  {
    group: 'Move', emoji: '🎈', name: 'Keep the balloon up', kit: 'A few bits', mess: 'Tidy', age: '3–5',
    how: 'Bat a balloon and keep it off the floor — with hands, then one hand, then only feet or a rolled newspaper "bat".',
    why: 'A balloon floats slowly enough for a young child to track and hit, so it builds hand-eye coordination and timing without the frustration of a fast ball. Great for indoors.',
    traits: ['Gross motor', 'Problem-solving']
  },
  {
    group: 'Move', emoji: '🐸', name: 'Animal moves & yoga', kit: 'No kit', mess: 'Tidy', age: '3–5',
    how: 'Move like the animals you call out — hop like a frog, stomp like an elephant, slither like a snake, stand tall and still like a tree.',
    why: 'Big animal movements stretch and strengthen the whole body, and "be a tree" is a first, playful taste of balance and stillness — a gentle way in to calming the body on purpose.',
    traits: ['Gross motor', 'Imagination', 'Self-control']
  },
  {
    group: 'Move', emoji: '🎯', name: 'Beanbag target throw', kit: 'Household', mess: 'Tidy', age: '3–5',
    how: 'Throw rolled-up socks or beanbags into a washing basket, at a taped target, or through a hoop. Step back a pace each time they get it in.',
    why: 'Aiming and throwing builds coordination and judging distance, and moving the target closer or further keeps it in the "just hard enough" sweet spot that holds a child\'s attention.',
    traits: ['Gross motor', 'Problem-solving']
  },
  {
    group: 'Move', emoji: '🛣️', name: 'Tape roads & hopscotch', kit: 'A few bits', mess: 'Tidy', age: '3–5',
    how: 'Masking-tape roads across the floor for toy cars, or a hopscotch grid to hop through and count the squares out loud.',
    why: 'Hopping a grid puts balance and counting together, and a floor full of tape roads becomes a small world that holds them for ages — movement, maths and imagination in one.',
    traits: ['Gross motor', 'Early maths', 'Imagination']
  },
  {
    group: 'Move', emoji: '📦', name: 'Big box & tunnel', kit: 'Household', mess: 'Some mess', age: '3–5',
    how: 'A big cardboard box or a pop-up tunnel to crawl through, hide in, decorate, and "drive". Cut a door and windows and let them make it theirs.',
    why: 'Crawling and squeezing through a space is great heavy-work and body-awareness, and a big empty box is the most imaginative "toy" there is — a car, a boat, a house, a cave.',
    traits: ['Gross motor', 'Imagination', 'Problem-solving']
  }

];
