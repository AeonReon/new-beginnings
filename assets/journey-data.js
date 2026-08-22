// The Journey — making long drives something a child looks forward to.
//
// The sister page to "Make It A Game". Make It A Game handles the two-minute
// battle of getting INTO the car seat; THIS handles the three hours after it —
// the whole arc of a long drive, from the week before to walking in the door.
//
// The spine, drawn from family-travel practice, paediatric guidance (AAP stop
// intervals, Mayo Clinic and Seattle Children's on motion sickness), car-seat
// safety bodies, and the research on boredom and the default mode network:
//
//   1. A long drive is a BUDGET, not a list. Everything you bring buys a number
//      of minutes. Whatever you spend first sets the floor, and nothing after it
//      can compete. So you spend cheapest-and-freest first and strongest last.
//   2. Comfort and sickness come BEFORE entertainment. A child who is too hot,
//      whose legs have gone dead, or who feels queasy cannot be entertained out
//      of it. Fix the body first.
//   3. Quiet is a slot, not a failure. Window-gazing is where a child's mind
//      builds things. It gets named and protected here, not filled.
//
// Fields per chapter:
//   id       — url-safe slug
//   emoji    — the face for the section
//   title    — the part of the journey
//   when     — one line so a parent recognises which bit this is
//   why      — first-principles: what's actually going on, why the advice works
//   whyKey   — load-bearing phrase inside `why` to highlight (must appear verbatim)
//   blocks   — the content, in order. Kinds:
//                { k:'p',     text }                          prose
//                { k:'steps', items:[{name, buys, text}] }     numbered running order
//                { k:'list',  title, items:[{name, text}] }    a titled checklist
//                { k:'bars',  items:[{name, tag, how}] }       drop-downs
//                { k:'links', items:[{label, href, ext}] }     onward links
//                { k:'note',  text, kind }                     caution ('safety' = hard line)
//   note     — optional chapter-level caution
//   noteKind — 'safety' for a hard line; omit otherwise

window.JOURNEY_INTRO =
  "A long drive is the one part of a day out that nobody plans. We plan the place, pack the bag, " +
  "check the weather — and then spend three hours hoping. But the families who do this well aren't " +
  "luckier or calmer than the rest of us. They're running an order. They know what they'll reach for " +
  "first, what they're saving, when they'll stop and why, and what to do the moment somebody says " +
  "they feel funny. Nothing here needs money or a screen. Work through it once before your next big " +
  "trip and the car stops being the price of the day out and starts being part of it.";

window.JOURNEY = [

  {
    id: 'running-order',
    blurb: "The spine of the whole thing. Read this one first — it takes two minutes.",
    emoji: '🕐',
    title: 'The Running Order',
    when: "The single biggest change you can make: not what you bring, but the order you spend it in.",
    why: "Everything you've packed buys you a number of minutes. A sticker book buys twenty. A good story " +
         "buys ninety. A screen buys the rest of the drive and then takes it back with interest. Whatever " +
         "you hand over first sets the floor, and nothing that comes after it can compete — which is why a " +
         "tablet at minute ten makes every hour afterwards feel like a punishment. Spend the free things " +
         "first, while they're still enough.",
    whyKey: "sets the floor",
    blocks: [
      { k: 'p', text: "Read this as a loop, not a list. You run through it, you stop, and then you start again with a slightly stronger hand than last time. The times are for a child of three to seven — halve them for a two-year-old, stretch them for a nine-year-old." },
      { k: 'steps', items: [
        { name: 'The free stretch', buys: 'first 30–60 min',
          text: "They're fresh, the leaving is exciting, and the world outside the window is brand new. Spend absolutely nothing here. Talk about where you're going and what you'll do when you get there. Point things out. If you've timed the departure well, this is also when they fall asleep — and every minute of that is a minute you didn't have to buy." },
        { name: 'Out-loud games together', buys: '20–40 min',
          text: "Games that need a grown-up go early, while you've still got the patience for them. I Spy with colours for the little ones, letters for the older. Number plates. Silly-sentence games. The whole car is in it, which is exactly what a child wants most and gets least on a long drive." },
        { name: 'Their own hands', buys: '20–30 min per thing',
          text: "Now the bag comes out — but you hand over one thing at a time, and they don't get to rummage. The fuel is novelty, not the object. Six small things beat one good thing, every single time, and a thing that has been out of sight for an hour comes back almost new." },
        { name: 'The long story', buys: '30–90 min',
          text: "The strongest card in the pack that doesn't cost you anything afterwards. One good audiobook or audio drama buys a bigger unbroken block than everything else combined — which is precisely why it must not come out in the first twenty minutes." },
        { name: 'The stop', buys: '20–30 min',
          text: "Not a toilet break. A proper stop with running in it. This is the reset that makes the second half possible, and skipping it to 'make good time' is the most expensive saving on the whole journey." },
        { name: 'Round two, one card stronger', buys: 'repeats the loop',
          text: "Back in the car you start again — but now the wrapped thing comes out, or the snack nobody knew about, or the story picks up where it left off. Each round of the loop is a little richer than the last, so the drive gets easier as it goes instead of harder." },
        { name: 'Window time',
          text: "Somewhere in every hour, leave a gap and don't fill it. A bored child in a car is not a problem you failed to solve — a wandering mind is where children build stories, chew over what they've seen and work out what they want. Name it out loud so it doesn't feel like being ignored: \"this bit's just looking-out-the-window time.\"" },
        { name: 'The last card', buys: 'the final stretch',
          text: "If a screen is going to happen at all, it happens here — the last leg, when everyone is genuinely spent and there's nothing left to protect. Played last it costs you nothing. Played first it costs you the whole journey." }
      ]},
      { k: 'note', text: "You will not get through the whole loop before somebody wants the next thing. That's fine — the order matters far more than the timings. Just make sure the strongest thing you brought is still in the bag when you reach the halfway point." }
    ]
  },

  {
    id: 'before-you-go',
    blurb: "The days before, the night before, the morning. Most of it is won here.",
    emoji: '🎒',
    title: 'Before You Go',
    when: "The drive is mostly won or lost in the two days before you turn the key.",
    why: "A child who doesn't know what's happening experiences a long drive as being trapped by adults for " +
         "no reason they can see. A child who knows how long it is, how many stops there are, and what's at " +
         "the far end is doing something completely different — they're on the way somewhere. Same car, same " +
         "three hours, and it is the difference between counting the minutes and counting the landmarks.",
    whyKey: "on the way somewhere",
    blocks: [
      { k: 'list', title: 'A few days before', items: [
        { name: 'Tell them the plan, in their units', text: "Not \"three hours\" — that means nothing to a five-year-old. \"Two sleeps' worth of stories, then a park, then one more story, then we're there.\" Time they can't picture becomes time that never ends." },
        { name: 'Let them pack their own bag', text: "Their bag, their choices, within limits you set — five things, all soft. It hands them control over the one part of the day that's otherwise entirely done to them, and a thing they chose gets played with far longer than a thing you chose." },
        { name: 'Download everything', text: "Stories, music, maps, the lot. Big stretches of Northern Ireland have no usable signal, and the moment you need the story is exactly the moment it stops loading." },
        { name: 'Make a map they can hold', text: "A simple drawn line with five or six landmarks on it — a bridge, a big hill, the services, the sign for the town. Every time they tick one off, \"are we nearly there\" becomes a question they can answer themselves." },
        { name: 'Wrap two or three small things', text: "Nothing expensive — a new pack of stickers, a small pad, a bag of raisins. Wrapped, they take five minutes to open, and unwrapping is half the fun. These are for after the stops, not before." }
      ]},
      { k: 'list', title: 'The night before', items: [
        { name: 'Sleep is the biggest single lever', text: "A well-slept child copes with boredom, hunger and being strapped down. A tired one copes with none of it. Everything else on this page is a smaller lever than getting them to bed on time the night before." },
        { name: 'Load the car', text: "Everything except the cold bag. Loading a car with children awake and waiting turns a calm start into a rushed one, and they arrive in their seats already unsettled." },
        { name: 'Decide the departure time around their sleep', text: "Not around yours, and not around the traffic. Leaving right at nap time, or very early while they're still soft and sleepy, converts the hardest hour of the drive into a free one." },
        { name: 'Freeze half the water bottles', text: "They double as ice packs for the food and thaw into cold water by mid-morning." }
      ]},
      { k: 'list', title: 'The morning itself', items: [
        { name: 'A real breakfast, not a sweet one', text: "Eggs, porridge, toast with something on it. A sugar breakfast gives you forty good minutes and then a dip at exactly the wrong point in the drive. It also settles the stomach better if they're prone to feeling sick." },
        { name: 'Everybody goes to the toilet, including the one who says they don\'t need to', text: "Not a negotiation. \"You don't have to do anything, you just have to sit on it.\" The first unscheduled emergency stop always comes twelve minutes after the last services." },
        { name: 'Coats off before they get buckled', text: "A padded coat compresses in a crash and leaves the harness loose. Buckle them in their jumper and put the coat over the top like a blanket." },
        { name: 'Leave calmly, even if you leave late', text: "A rushed, shouty exit sits in the car with you for the first hour. Ten minutes lost at the door is cheaper than an hour of upset in the back." }
      ]},
      { k: 'links', items: [
        { label: 'Getting into the car seat without a fight', href: 'make-it-a-game.html#fp-car-seat' },
        { label: 'Out the door games', href: 'make-it-a-game.html#fp-out-the-door' }
      ]}
    ]
  },

  {
    id: 'the-bag',
    blurb: "The full list, grouped by what each thing is actually for.",
    emoji: '🧳',
    title: 'What To Pack',
    when: "The list, grouped by what each thing is actually for.",
    why: "Most of what goes wrong on a long drive is a small physical problem with no solution within reach — " +
         "a spill with nothing to wipe it, a sock off with the bag in the boot, sun straight in one child's " +
         "eyes for forty miles. Almost none of it is a discipline problem. It's a packing problem, and the rule " +
         "is simple: if you'd have to pull over to get it, it's in the wrong place.",
    whyKey: "in the wrong place",
    blocks: [
      { k: 'list', title: 'Comfort', items: [
        { name: 'Window sun shades', text: "The cheap cling-on kind. Low sun in a child's eyes for an hour is genuinely painful and they usually can't tell you what's wrong — they just get unbearable." },
        { name: 'A small pillow or rolled-up jumper each', text: "For the head to fall against when they sleep. A head that keeps dropping forward wakes a child every few minutes." },
        { name: 'A blanket each', text: "Over the harness, never underneath it. Doubles as a den, a picnic rug and a curtain." },
        { name: 'Layers instead of one thick thing', text: "Car temperature swings enormously between sun and shade, and being too hot is one of the quickest routes to feeling sick." },
        { name: 'Something for their feet to rest on', text: "A soft bag or a rolled towel under dangling feet. Legs that hang unsupported for two hours go dead and ache, and a child will squirm about it long before they can name it." }
      ]},
      { k: 'list', title: 'Food and drink', items: [
        { name: 'Water, not juice', text: "Juice and fizzy drinks make a queasy stomach worse and guarantee an extra toilet stop. Water in a bottle they can work themselves." },
        { name: 'Small, dry, plain, and often', text: "Crackers, oatcakes, breadsticks, plain popcorn, cheese, apple slices. Little and often keeps blood sugar level and settles the stomach. Big, rich, or very sweet does the opposite." },
        { name: 'One snack per pot, handed over', text: "A whole bag handed back gets eaten in ten minutes and then there's nothing for two hours. Portion it before you leave." },
        { name: 'A ginger biscuit or ginger chew', text: "Only if anyone gets carsick — see the car sickness section for what it does and doesn't do." },
        { name: 'The picnic in a cold bag', text: "A stop where you eat outside is worth three where you buy something at a counter, and it costs a fraction." }
      ]},
      { k: 'list', title: 'Clean-up and accidents', items: [
        { name: 'A sick bowl or two, within arm\'s reach of the front seat', text: "A washing-up bowl, or a roll of nappy sacks tucked in the seat pocket. You get about eight seconds of warning, so it cannot be in the boot." },
        { name: 'A full change of clothes each, in the car — not the boot', text: "Including socks and pants. The one time you need it, you need it on a hard shoulder in the rain." },
        { name: 'Wipes, kitchen roll, a bin bag', text: "One bin bag hung off a headrest stops the footwells filling with wrappers, which stops the low-level grimness that makes everyone tetchy by hour three." },
        { name: 'A towel', text: "Spills, a wet stop, sitting on wet grass, drying a child off. Never regretted." }
      ]},
      { k: 'list', title: 'Things to do', items: [
        { name: 'Six small things rather than one big one', text: "Sticker books, a magnetic drawing board, finger puppets, a pad and chunky crayons, a small figure or two, a wind-up toy." },
        { name: 'A hard tray or lap desk each — only if nobody gets carsick', text: "It turns a lap into a table. But looking down at a tray is one of the fastest ways to bring on nausea, so for a queasy child skip it entirely." },
        { name: 'Two or three wrapped surprises', text: "Deployed after a stop, not before. See the running order." },
        { name: 'Headphones for the older ones', text: "So one child can have a story while another sleeps. The single biggest peace-keeper once there's an age gap in the back." }
      ]},
      { k: 'list', title: 'Just in case', items: [
        { name: 'Chargers and a power bank', text: "For the phone that has the map, the music and the emergency call on it." },
        { name: 'Paper directions for the last five miles', text: "Rural signal fails exactly where the small roads start." },
        { name: 'Plasters, sun cream, any regular medicine', text: "Small kit, front of the car." },
        { name: 'A carrier bag of dry clothes for the driver too', text: "Because a child being sick or a drink going over rarely stays on their side of the car." }
      ]},
      { k: 'note', kind: 'safety', text: "Anything loose in a car becomes a projectile in a crash. The test that safety bodies use is blunt: tap yourself on the head with it, and if you say ouch, it doesn't travel loose. Soft toys, soft books, cloth and paper are fine. Hard tablets, metal flasks, heavy hardbacks, wooden toys and rigid trays should be stowed or strapped." }
    ]
  },

  {
    id: 'comfort',
    blurb: "Five minutes with the car that saves an hour of complaining you can't diagnose.",
    emoji: '🪑',
    title: 'Setting Up The Seat',
    when: "Five minutes with the car before you go, that saves an hour of complaining you can't diagnose.",
    why: "A small child cannot tell you that the harness strap is cutting into their neck, or that the sun " +
         "is in their left eye, or that their legs have gone numb. What comes out instead is whining, kicking " +
         "the seat and a general refusal to be pleased by anything. Almost every long-drive misery that has no " +
         "obvious cause is a physical one, and it is worth going down the body from head to feet before you " +
         "conclude it's a mood.",
    whyKey: "a physical one",
    blocks: [
      { k: 'bars', items: [
        { name: 'Sightline', tag: 'do this first',
          how: "Get in and sit at their height. Can they actually see out, or are they looking at a door card? A child who can see the world going past is entertained for free and is far less likely to feel sick. If they're low, the right booster or a higher seat position changes the whole journey." },
        { name: 'Harness fit', tag: 'every trip',
          how: "Straps flat, no twists, at or just above the shoulders for a forward-facing seat, and tight enough that you can't pinch a fold of webbing at the collarbone. Jumper on, coat off, blanket over the top." },
        { name: 'The sun', tag: 'cheap fix',
          how: "Shades on the windows they're actually sitting beside. Check both sides — the sun moves round as the road turns, and the child on the sunny side is having a completely different journey from the one in the shade." },
        { name: 'Temperature', tag: 'checked hourly',
          how: "Back seats run hotter than the front and rear passengers rarely get their own air. Put a hand on their neck when you stop. Too hot brings on nausea, headaches and short tempers, in that order." },
        { name: 'Feet',
          how: "Something firm under dangling feet. It sounds trivial and it isn't — unsupported legs ache and go dead within an hour, and a squirming child is usually a numb one." },
        { name: 'Reach',
          how: "Water, one snack, one soft toy and a wipe-pack within their own reach if they're old enough. Every item they can get themselves is an item you don't hand backwards at seventy miles an hour." },
        { name: 'The seat-kicking problem',
          how: "Usually a foot with nowhere to go rather than a child being deliberately annoying. A footrest, a bag placed to fill the gap, or moving the front seat forward a notch fixes more of it than telling them to stop ever will." }
      ]},
      { k: 'note', kind: 'safety', text: "Anything that goes between the child and the harness — a padded coat, a strap cushion, an after-market head support, a seat protector that lifts the base — can change how the seat performs in a crash. If it didn't come with the seat or isn't approved by the maker for that seat, leave it out. Warmth goes over the straps, never under them." }
    ]
  },

  {
    id: 'car-sickness',
    blurb: "Why it happens, how to cut it right down without medicine, and what to do at the first sign.",
    emoji: '🌀',
    title: 'Car Sickness',
    when: "The thing that decides what's even possible in your car — and it can be reduced a long way without medicine.",
    why: "Motion sickness is a disagreement inside the head. The inner ear feels the car moving; the eyes, fixed " +
         "on a book, a tablet or a lap tray, report that everything is perfectly still. The brain gets two accounts " +
         "of reality that don't match and responds the way it responds to anything that shouldn't be happening — " +
         "nausea. Almost everything that helps works by ending that argument: give the eyes the moving world to " +
         "look at, and the two accounts agree again.",
    whyKey: "ending that argument",
    blocks: [
      { k: 'p', text: "It tends to show up between about two and twelve and most children grow out of it. In the meantime it is not fussiness, it cannot be talked out of them, and a child who is told to stop making a fuss learns to hide the early warning — which is the one thing that would have let you pull over in time." },
      { k: 'list', title: 'Prevention — stack them, don\'t pick one', items: [
        { name: 'Look forward, and look far', text: "The single most effective thing. Out of the front windscreen at the horizon, not out of the side window at hedges flashing past. Far-away things move slowly across the eye and match what the inner ear is feeling; close things whip past and make it worse." },
        { name: 'Sit them high and central', text: "As high as their seat safely allows, and the middle rear seat if you can, because it's the only back seat with a clear view straight ahead. The middle is also the part of the car that pitches and rolls least." },
        { name: 'Nothing that makes them look down', text: "No reading, no colouring, no lap tray, no tablet, no hunting through a bag on their knees. For a child who gets sick this is not a preference, it's the whole ballgame — and it's why audio is the answer in your car rather than anything they hold." },
        { name: 'Cool, moving air on the face', text: "Window cracked, or a vent aimed at them. Stuffy warm air makes nausea far worse, and a strong smell — air freshener, hot food, someone's coffee — can set it off on its own." },
        { name: 'A small plain meal before, and small plain snacks during', text: "An empty stomach is as bad as a full one. Dry, bland and frequent is what you're after. Skip anything greasy, very sweet or strong-smelling, and keep drinks to water." },
        { name: 'Drive for the passenger, not the clock', text: "Gentle on the brakes, early on the corners, steady speed. Winding coast roads and stop-start town traffic provoke it far more than a straight dual carriageway, so it can be worth an extra ten minutes on a smoother route." },
        { name: 'Travel into sleep', text: "A sleeping child cannot be carsick. Timing the worst section of road to a nap is a legitimate strategy, not a cop-out." },
        { name: 'Give them a job at the front', text: "Chief hill-spotter, sign-reader, next-landmark-caller. It sounds like a game, and it works because every single one of those jobs forces their eyes up and out at the far distance." }
      ]},
      { k: 'list', title: 'At the first sign', items: [
        { name: 'Believe them immediately', text: "Pale, quiet, a bit clammy, going still, saying their tummy feels funny or they've gone \"warm\". You usually get a minute or two of warning, once. Act on the first one and you often avoid it entirely." },
        { name: 'Air and eyes out', text: "Window down, vents on their face, and \"look right out at that hill in the distance for me\" — a specific far-away thing, not a vague instruction." },
        { name: 'Stop the input', text: "Whatever they're holding, take it. Story off if it's a busy one, or switch to quiet music." },
        { name: 'Pull over if you can', text: "Two minutes standing in fresh air resets it far better than pressing on. Pressing on is how it becomes a car that needs cleaning and a child who now dreads the car." },
        { name: 'A cold flannel on the back of the neck', text: "Keep one in a sealed bag in the cold bag. It works better than it has any right to." },
        { name: 'Small sips of cold water afterwards', text: "And a dry cracker once the wave has passed. Then a short walk before you set off again." }
      ]},
      { k: 'list', title: 'The remedies people swear by — honestly', items: [
        { name: 'Ginger', text: "Ginger biscuits, ginger chews, or a flat ginger drink. Some studies show a modest reduction in sickness against a dummy treatment, others show little. It's cheap, safe and a child will happily take it, so it's worth having — just don't rely on it as your only measure." },
        { name: 'Acupressure wristbands', text: "The elastic bands with a stud that presses the inner wrist. The evidence is genuinely mixed — some trials find a reduction, others find no difference from a dummy band. There's no real downside to trying them, and for some children the sense of having something that helps is itself worth having. Treat it as a maybe, not a solution." },
        { name: 'Fresh air and the horizon', text: "The two with the strongest and most consistent backing, and the two that cost nothing. If you only do two things, do these." },
        { name: 'Peppermint or a strong mint', text: "Widely used and harmless for an older child, though the evidence is thin. Not for a child small enough to choke on a hard sweet." },
        { name: 'Facing forward', text: "Rear-facing is the safest way for a small child to travel and that comes first, always. But if a child is old enough to have turned round and still gets sick, it's worth checking the seat position and sightline rather than assuming nothing can be done." }
      ]},
      { k: 'note', text: "If a child is being sick on short local trips, is sick every single journey no matter what you change, gets a bad headache with it, or seems dizzy when the car isn't moving at all — that's worth mentioning to your GP rather than solving with a wristband. Medicines exist and can be the right call for a genuinely miserable child on an unavoidable long trip; that's a conversation with a pharmacist or GP, not something to source from a forum." },
      { k: 'note', kind: 'safety', text: "Never tell a child who has been sick that they've ruined the trip, and never make them clean it up as a lesson. A child who has been shamed for being sick will hide the warning signs next time, and you lose the only early alarm you had." }
    ]
  },

  {
    id: 'things-to-do',
    blurb: "Games that work in a moving car — out loud, out of the window, in their hands.",
    emoji: '🎲',
    title: 'Things To Do',
    when: "A few that work well in a moving car — the rest are one tap away.",
    why: "The best car activities have one thing in common: they need no table, no small pieces and no looking " +
         "down. A car is a moving, tilting, poorly-lit box with nowhere to put anything, so the games that work " +
         "in the kitchen mostly fail in it. What works is out loud, out of the window, and in their hands rather " +
         "than on their knees.",
    whyKey: "out loud, out of the window",
    blocks: [
      { k: 'bars', title: 'Four to start with', items: [
        { name: 'I Spy, adjusted for age', tag: 'from 2',
          how: "Colours for the youngest ones, first letters from about four, and \"something that's been alive\" or \"something older than Granny\" for the ones who've outgrown it. It's the oldest car game there is because it's the only one that turns the window into the board." },
        { name: 'Spot it first', tag: 'from 2',
          how: "Name five things before you set off — a tractor, a white horse, a church steeple, a red lorry, a windmill. First to shout it wins that one. Works from toddler age, and it points their eyes exactly where you want them for car sickness." },
        { name: 'The number plate game', tag: 'from 5',
          how: "Make the silliest sentence you can from the three letters. NGB becomes \"nine gorillas baking\". Everyone gets a go, the daftest wins, and it lasts far longer than it sounds like it should." },
        { name: 'The story you build together', tag: 'from 3',
          how: "Someone starts with one sentence, the next person adds one, round and round. It gets ridiculous within about six turns, which is the point. Better than any game at pulling a whole car of different ages into the same thing." }
      ]},
      { k: 'links', items: [
        { label: 'The full set of out-loud games', href: 'games.html' },
        { label: 'Songs and rhymes, with the words', href: 'rhymes.html' }
      ]},
      { k: 'list', title: 'Things for their hands', items: [
        { name: 'Sticker books and reusable sticker scenes', text: "Peel-and-stick scenes with no small parts. About twenty minutes each, and the pieces reposition so they last a whole trip." },
        { name: 'A magnetic drawing board', text: "The one with the attached pen. Nothing to drop, nothing to lose down the side of the seat, and it wipes clean with a slider." },
        { name: 'Finger puppets or two small figures', text: "Soft, silent, and they turn the back seat into a whole world without a single instruction from the front." },
        { name: 'A lap tray — only if nobody gets carsick', text: "It turns a lap into a table, but looking down at a tray is one of the fastest ways to bring on nausea. For a queasy child, skip every item in this list and go straight to something to listen to." }
      ]},
      { k: 'list', title: 'Landmark bingo — the one that ends "are we nearly there"', items: [
        { name: 'Draw the route before you leave', text: "A simple line with five or six landmarks on it — a bridge, a big hill, the services, the sign for the town." },
        { name: 'Hand it to them, not to you', text: "They tick each one off as you pass it. The answer to how much longer is now on their own lap, which is the whole trick." }
      ]}
    ]
  },

  {
    id: 'listening',
    blurb: "The strongest hour you have, and most of it is free.",
    emoji: '🎧',
    title: 'What To Listen To',
    when: "The strongest hour you have — and most of it is free.",
    why: "A story on the speakers does something no screen can. The child has to build the picture themselves, " +
         "so their eyes stay free and out of the window, their imagination does the work, and they can be " +
         "completely absorbed and still see the world going past. It's also the one form of entertainment in a " +
         "car that doesn't cause motion sickness, and the only one the whole family can share at once.",
    whyKey: "build the picture themselves",
    blocks: [
      { k: 'p', text: "Download everything before you leave. The moment you need it is the moment you're in a valley with no signal." },
      { k: 'bars', title: 'What to put on', items: [
        { name: 'Play a film they already know — with only the sound', tag: 'the best-kept trick',
          how: "Put a film they've watched before through the car speakers and never show the picture. Because they already know it, their head supplies every scene, and children will happily sit through the whole thing looking out of the window. It's the gentlest possible way to get the pull of a film with none of the eyes-down cost, and it's the one to reach for when you'd otherwise cave and hand over a tablet." },
        { name: 'Audiobooks', tag: 'buys the most',
          how: "One good book carries a family for several journeys and gives you something to talk about at the stops. Aim slightly above their reading age — listening comprehension runs well ahead of it, so a child who can't yet read a chapter book can love one read to them." },
        { name: 'Libby, free with a library card', tag: 'free',
          how: "Your local library card gets you a large catalogue of audiobooks to borrow and download, at no cost. If you do one thing on this page before your next trip, make it this." },
        { name: 'Audio drama and story podcasts', tag: 'free',
          how: "Full-cast stories with sound effects, which hold a younger child better than a single narrator. Storynory, Sparkle Stories, Stories Podcast, Circle Round, Six Minutes and Bedtime Stories with R.A. Spratt are all free, and BBC Sounds has a large children's section." },
        { name: 'Film soundtracks and singalong albums', tag: 'from 2',
          how: "The music from a film they love does a lot of the same work as the film. Good for the tired stretch when nobody has the concentration for a story." },
        { name: 'Headphones once there\'s an age gap', tag: 'from 4',
          how: "So a nine-year-old can have their story while a two-year-old sleeps. Volume-limited ones for children. This solves more back-seat conflict than anything else in this section." }
      ]},
      { k: 'list', title: 'Also worth knowing', items: [
        { name: 'Wow in the World and the curious ones', text: "Science and discovery podcasts from about five. They generate questions rather than closing them down, and the conversation they start often outlasts the episode." },
        { name: 'Librivox', text: "Volunteer-read recordings of out-of-copyright books — the classics, free, forever. Narration quality varies a lot, so listen to two minutes before you commit to three hours of it." },
        { name: 'A child-controlled audio player', text: "A card-based or button-based player lets a child choose and change their own story without a screen, and without asking the front seat every four minutes. It's a purchase rather than a free option, but it's the one piece of kit that genuinely earns its place on long trips." }
      ]},
      { k: 'links', items: [
        { label: 'Read-alouds and audiobooks worth their time', href: 'books.html' }
      ]},
      { k: 'note', text: "Pick the story with them, not for them, and pause it at the good bit before a stop rather than at the end. Wanting to get back in the car to find out what happens is the single best thing that can happen on a long drive." }
    ]
  },

  {
    id: 'stops',
    blurb: "How often, how long, what makes a good one, and leaving without a fight.",
    emoji: '🛑',
    title: 'Stopping Well',
    when: "How often, how long, and what makes a stop actually work.",
    why: "A stop is not an interruption to the journey — it is the thing that makes the second half of the " +
         "journey possible. A young body held still in a harness needs to move, and the need doesn't announce " +
         "itself politely; it comes out as kicking, whining and fighting with a sibling. Twenty-five minutes of " +
         "running resets all of it. Driving through to save half an hour reliably costs you more than half an " +
         "hour of misery.",
    whyKey: "makes the second half of the journey possible",
    blocks: [
      { k: 'list', title: 'The shape of it', items: [
        { name: 'Every two hours, or every ninety minutes under five', text: "That's the interval paediatric guidance points at, and it matches what most families find by trial and error. Babies in particular need to come out and lie flat rather than stay curled in a seat." },
        { name: 'Twenty to thirty minutes, minimum', text: "A five-minute toilet stop does almost nothing. By the time everyone is out, has been to the toilet, and has actually moved, you're at twenty minutes — and it's the last ten that do the work." },
        { name: 'Running, not shopping', text: "The purpose is to get the wiggle out. Ten minutes of actual chasing about is worth more than an hour wandering round a service station shop, and it's free." },
        { name: 'Plan them in before you leave', text: "Pick the stops on the map at home, so you're not scanning for somewhere at the exact moment everyone is falling apart. Tell the children where the stops are — a child who knows the next break is after the big bridge can hold on for it." },
        { name: 'Eat outside if the weather lets you', text: "A picnic at a park beats a counter queue on every measure — cost, speed, food, and how everyone feels afterwards." },
        { name: 'Toilet at every single stop', text: "Whether they say they need it or not. The alternative is a lay-by twenty minutes later." }
      ]},
      { k: 'list', title: 'What makes a good stop', items: [
        { name: 'A play park beats everything', text: "Somewhere to climb and run, a bench for you, and it costs nothing. There are over four hundred play parks mapped across Northern Ireland on our sister app — pick two on your route before you set off." },
        { name: 'A forest, a beach or a greenway', text: "For the stops where you've got a bit longer, or where a play park would be mobbed. A ten-minute walk in trees resets a car full of people remarkably well." },
        { name: 'Motorway services with a play area', text: "Applegreen at Lisburn on the M1 is the main one on the Northern Ireland motorway network with a children's play area, and it's double-sided, so it works in both directions. Most other services are toilets and a shop — fine for five minutes, no use for a reset." },
        { name: 'Somewhere with something to look at', text: "A castle you can see from the car park, a harbour with boats, a bridge, animals in a field. A stop that's also a small event gives the whole journey a shape and gives them something to tell people about." },
        { name: 'A soft play, if the weather has beaten you', text: "The wet-day version of a play park. Costs money and takes longer to leave, but on a bad day it saves the drive." }
      ]},
      { k: 'links', items: [
        { label: 'Play parks near your route — the map', href: 'https://daysoutni.com/?mode=places&cats=Play+parks&view=map', ext: true },
        { label: 'Forests and woodland', href: 'https://daysoutni.com/?mode=places&cats=Forest+%26+woodland&view=map', ext: true },
        { label: 'Beaches', href: 'https://daysoutni.com/?mode=places&cats=Beaches&view=map', ext: true },
        { label: 'Soft play for a wet day', href: 'https://daysoutni.com/?mode=places&cats=Soft+play&view=map', ext: true },
        { label: 'Days Out — the whole map', href: 'things-to-do.html' }
      ]},
      { k: 'list', title: 'Leaving the stop without a fight', items: [
        { name: 'Give the warning in events, not minutes', text: "\"Three more goes down the slide and then we're going.\" Three goes is something a child can picture and count. Five minutes is not." },
        { name: 'Name what happens next in the car', text: "\"When we get in, the story starts again and we find out what happened to the dog.\" Leaving towards something is a completely different act from being taken away from something." },
        { name: 'Let them do the last bit themselves', text: "Climbing into their own seat, doing the first clip, choosing where the water bottle goes. The transition back into a harness is easier when some of it is theirs to do." },
        { name: 'Expect the wobble and don\'t take it personally', text: "Going back into a car seat after twenty-five minutes of freedom is genuinely a hard moment. Kindness and a short warning work; a lecture in a car park does not." }
      ]},
      { k: 'links', items: [
        { label: 'Games for leaving somewhere fun', href: 'make-it-a-game.html#fp-leaving-the-fun' }
      ]}
    ]
  },

  {
    id: 'sleep',
    blurb: "Timing the drive around naps, pyjamas as a signal, and the honest case on night driving.",
    emoji: '😴',
    title: 'Sleep, Pyjamas And Driving At Night',
    when: "The hours a child sleeps are hours you don't have to fill — but they're not free.",
    why: "Every family works this out eventually: the cheapest entertainment on a long drive is sleep. But " +
         "sleep in a moving car is lighter and less restorative than sleep in a bed, and a nap taken at the " +
         "wrong hour is borrowed against bedtime. So it's worth timing rather than hoping for, and worth " +
         "being honest that you are moving the difficulty around rather than deleting it.",
    whyKey: "borrowed against bedtime",
    blocks: [
      { k: 'bars', items: [
        { name: 'Leave into a nap', tag: 'the easiest win',
          how: "Set off at the hour they'd normally go down, or very early while they're still half asleep, and the first big block of the drive costs you nothing. This is the single most-used trick among families who drive long distances often." },
        { name: 'Pyjamas as the signal', tag: 'from 1',
          how: "For an evening or overnight leg, change them into pyjamas at the last stop before dark, teeth done, the usual bedtime words. The clothes tell the body what's expected far more reliably than the clock does, and it means you can carry them straight from car to bed at the other end." },
        { name: 'White noise or the same quiet album', tag: 'from birth',
          how: "It covers the change in engine note when you slow down, the indicator, and the front-seat conversation — the three things most likely to wake a sleeping child in a car. Same track every time so it becomes the sound of going to sleep." },
        { name: 'Dim it properly', tag: 'evenings',
          how: "Window shades down, no interior light on, phones face down in the front. Light in the back seat is the enemy of a car nap." },
        { name: 'Don\'t wake them for a stop',
          how: "If they've gone under, drive on past the planned stop and take yours later. A sleeping child is worth more than a schedule." },
        { name: 'Driving through the night — the honest version', tag: 'weigh it up',
          how: "It genuinely works: no boredom, no traffic, few stops. But a tired driver is a real risk and it is the part of this that no packing list solves, so it only works with two drivers who swap, or a driver who has actually slept in the day. Children usually sleep well but wake heavy and out of sorts, and the whole family pays for it the next day. It suits a one-off long haul; it's a poor default." },
        { name: 'The late-afternoon nap trap', tag: 'watch for it',
          how: "A child who sleeps from four to six in the car will be wide awake at ten at night in an unfamiliar room. If you're arriving in the evening, it can be worth keeping them awake for the last leg with the strongest cards you've got, and putting them straight to bed on arrival." }
      ]}
    ]
  },

  {
    id: 'more-than-one',
    blurb: "Two in the back isn't twice the work — it's a different job.",
    emoji: '👧',
    title: 'More Than One Child',
    when: "Two in the back is not twice the work — it's a different job.",
    why: "One child in a car is bored. Two children in a car have each other, and a bored child will reliably " +
         "choose winding up their sibling over doing nothing, because a reaction is the most interesting thing " +
         "available. That's not naughtiness, it's the only entertainment within reach. Give them something " +
         "better to reach for and most of the bickering simply doesn't start.",
    whyKey: "the most interesting thing available",
    blocks: [
      { k: 'bars', items: [
        { name: 'Put space between them', tag: 'first move',
          how: "Different rows if the car has them, or opposite sides with the bags and pillows filling the middle seat. Most back-seat fights are about a border. Remove the border and you remove most of the fights." },
        { name: 'One bag each, clearly theirs',
          how: "Different colours, packed by each child. \"That's mine\" is behind an enormous share of car arguments, and it's completely preventable at the front door." },
        { name: 'The shared story is the peacemaker',
          how: "One thing that everybody is inside at the same time is worth more than any two separate things. It gives them a common world instead of a shared border, and it gives you something to talk about at the stop." },
        { name: 'Headphones once the ages spread',
          how: "A nine-year-old and a three-year-old cannot enjoy the same story for three hours. Two headphone sets and two different things ends the negotiation completely." },
        { name: 'Make the middle seat the good one',
          how: "If there's a seat everybody fights over, hand it out rather than arbitrating it — whoever's turn it is gets the middle, the water bottle duty and first pick of the story. A rota decided at home beats a judgement made at seventy miles an hour." },
        { name: 'Swap seats at every stop',
          how: "It resets the pecking order, changes the view, and gives the one who had the sunny side a break. Costs nothing and heads off an hour of resentment." },
        { name: 'A visible countdown to the next stop',
          how: "Tell them the landmark, or hand the older one the map. Children fight hardest when they believe the situation is endless, and a break they can see coming is a break they can hold on for." },
        { name: 'Referee from the front — briefly',
          how: "Name it once, plainly, without turning round: \"You're both tired and you're both winding each other up. Ten minutes of story, then we stop.\" Long negotiations from the driver's seat rarely work and always make it louder." },
        { name: 'Give the older one a real job',
          how: "Navigator, snack monitor, story chooser, in charge of the countdown. Older children stir up younger ones mostly out of boredom, and a job they take seriously absorbs the whole of it." }
      ]},
      { k: 'note', text: "If one child is genuinely being unkind rather than bored, that's the same conversation you'd have at home and it doesn't get solved in a moving car. Hold it for the next stop, standing up, face to face." },
      { k: 'links', items: [
        { label: 'Squabbles, and what sits underneath them', href: 'turn-it-around.html' }
      ]}
    ]
  },

  {
    id: 'arriving',
    blurb: "The last half hour, and the first ten minutes out of the car.",
    emoji: '🏁',
    title: 'Arriving Well',
    when: "The last half hour, and the first ten minutes out of the car.",
    why: "How a journey ends is what everyone remembers about it, and the last thirty minutes are the ones " +
         "most likely to be spent scraping the barrel with three exhausted people. Save something for them, " +
         "and hand the excitement back over before you arrive rather than after.",
    whyKey: "what everyone remembers about it",
    blocks: [
      { k: 'list', items: [
        { name: 'Turn the talk to what happens next', text: "Twenty minutes out, stop filling time and start building the arrival. What's the first thing we'll do? Who's going to see the sea first? Anticipation is the last free thing in the bag and it's the strongest one you've got." },
        { name: 'Bodies out before bags out', text: "Ten minutes of running about the moment you park, before anyone unpacks anything. A child who's been folded into a seat for three hours cannot help you carry things and cannot behave well in a new indoor space until they've moved." },
        { name: 'Feed them almost immediately', text: "Whatever the plan was. A long drive burns through a small person, and the arrival meltdown is nearly always hunger wearing a costume." },
        { name: 'Don\'t judge the trip in the car park', text: "Everyone is at their worst in the twenty minutes after a long drive, including you. Nothing about how it's going is knowable yet." },
        { name: 'Ask them at bedtime what the best bit was', text: "Children very often name something from the journey — the bridge, the sheep, the bit of the story where the dog got out. That's how the car stops being the price of the day and starts being part of it." },
        { name: 'Restock before the return leg', text: "Ten minutes at the far end refilling water, re-wrapping a surprise and picking the next story makes the drive home a completely different experience from the one people dread." }
      ]}
    ]
  }

];
