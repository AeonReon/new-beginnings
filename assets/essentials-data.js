// ESSENTIAL ITEMS — the short list of things that genuinely change the experience
// of a stage, with the real reason each one works. Same first-principles rule as
// the rest of the app: if the "why" cannot be stated in a sentence a parent could
// test against their own week, the entry is not ready.
//
// This is deliberately SHORT, and it is in TWO parts.
//
//   tier: 'life'  — THE LIFECHANGERS. The handful that change what an entire
//                   stage feels like rather than making one job easier. The
//                   test is brutal: if you can imagine doing the stage without
//                   it and the days look roughly the same, it is not one.
//                   Keep this list under about a dozen. Every item added to it
//                   makes every other item on it count for less.
//
//   (no tier)     — THE ROUTINE KIT. The rest of what you actually need. Not a
//                   shopping list — this is still filtered. A lot of it is the
//                   category nobody warns you about: the things you do not know
//                   you need until the week you needed them.
//
// Anything that is merely nice does not go in either list; if it is actively
// sold and not worth buying it goes in ESSENTIALS_SKIP instead. No affiliate
// links, no sponsorship, nothing paid — the app names what to look for, and you
// buy it wherever you like, second-hand where it is sensible.
//
// Fields: stage, tier (optional), name, what, why, look

window.ESSENTIALS_STAGES = [
  { id: 'bump',    label: 'Bump & birth',   emoji: '🤰', c: '#C4708C', cd: '#97456A', cs: '#F6E3EC',
    blurb: 'The last weeks and the day itself. Almost none of this is on a baby list, and it is the part that decides how the first fortnight feels.' },
  { id: 'newborn', label: 'The first months', emoji: '🌙', c: '#4A9ED4', cd: '#2D6FA8', cs: '#E4F1FA',
    blurb: 'Nought to about four months. The whole job here is sleep, feeding and getting out of the house — so anything that makes one of those three easier earns its place.' },
  { id: 'baby',    label: 'Sitting up',      emoji: '🥣', c: '#3FBF97', cd: '#2F9E77', cs: '#D8F3E9',
    blurb: 'Roughly four months to walking. Food arrives, and so does mess, and the floor becomes the most important room in the house.' },
  { id: 'toddler', label: 'Walking to three', emoji: '👟', c: '#E8894A', cd: '#B45309', cs: '#FEEBD6',
    blurb: 'The outdoor years begin. In Northern Ireland this stage is decided almost entirely by whether you can get out in the rain without it being a fight.' },
  { id: 'little',  label: 'Three to five',   emoji: '✂️', c: '#8B6FD1', cd: '#5B3FA8', cs: '#EEE9FA',
    blurb: 'Real capability. The right kit here is mostly small versions of real adult things, because a toy version teaches a child that they are not trusted yet.' },
  { id: 'always',  label: 'Any age',         emoji: '🎒', c: '#2FA96B', cd: '#1B7A4A', cs: '#DCF3E7',
    blurb: 'The things that live in the car and the hall cupboard and quietly make every day out possible.' },
];

// ── THE LIFECHANGERS ──────────────────────────────────────────────────────
// and ── THE ROUTINE KIT ── below them, in the same array, split by `tier`.
window.ESSENTIALS = [

  // ══ Lifechangers ══════════════════════════════════════════════════════
  { stage: 'bump', tier: 'life', name: 'A proper recovery box, packed before the birth',
    what: 'A peri bottle, big soft high-waisted pants several sizes up, maternity pads, witch hazel, paracetamol, and a refillable water bottle with a straw.',
    why: 'Nobody is going shopping in the first three days, and this is the exact window where being uncomfortable turns into being miserable. Every item here removes one specific small misery, and together they change the mood of a fortnight.',
    look: 'Buy more pads than seems reasonable. A straw bottle matters more than it sounds — you can drink it one-handed while feeding, and hydration is most of how you feel.' },

  { stage: 'bump', tier: 'life', name: 'A freezer filled before the birth',
    what: 'Two or three weeks of proper dinners, cooked in batches during the last month and frozen flat in bags. Not a stocked cupboard — actual finished meals you can reheat one-handed at nine at night.',
    why: 'The thing that wrecks the first fortnight is not the baby, it is that two exhausted adults still have to produce fourteen dinners a week. Removing cooking entirely for three weeks buys back roughly an hour a day at the exact point where an hour a day is the difference between coping and not. It is the single most useful thing anyone can do in the last month, and it costs only the food you were going to buy anyway.',
    look: 'Freeze flat in bags rather than in tubs — it stacks, it thaws in twenty minutes, and it takes a third of the space. Label every one, because you will not recognise any of it. Ask anyone who offers to help to bring a frozen meal rather than an outfit.' },

  { stage: 'newborn', tier: 'life', name: 'A carrier you can put on by yourself',
    what: 'A stretchy wrap for the early weeks, or a soft structured carrier with a wide seat.',
    why: 'This is the single biggest change to a day. A baby who will not be put down will usually sleep on a chest that is walking, which means you get your hands and your feet back at the same time. It is also the only way to get out of the house on a bad footpath.',
    look: 'Practise with a teddy before the birth. The rule that matters is that the baby is high enough to kiss, chin off chest, and you can see their face without moving fabric. A local sling library will fit one on you free — worth far more than reading about it.' },

  { stage: 'newborn', tier: 'life', name: 'A bedside crib',
    what: 'A cot with one side that drops or opens, strapped level with your mattress.',
    why: 'Night feeds without standing up is worth several hours a week of actual sleep, and standing up is the thing that wakes you properly. It keeps the baby on their own flat, clear surface, which is what the safer-sleep advice asks for.',
    look: 'Second-hand is fine for the frame, but buy a new mattress that fits with no gap at the edges. Check the height range against your bed before you buy — some do not go low enough for a divan.' },

  { stage: 'newborn', tier: 'life', name: 'A nasal aspirator',
    what: 'The tube-and-filter kind you use with your own breath.',
    why: 'A small baby cannot blow their nose and cannot breathe and feed at the same time through a blocked one. A blocked nose is the difference between a bad night and a fine one, and this fixes it in thirty seconds.',
    look: 'Keep spare filters in the house. Saline drops first, then the aspirator — the drops do most of the work.' },

  { stage: 'newborn', tier: 'life', name: 'A blackout blind that actually blacks out',
    what: 'A blind that makes the room genuinely dark in the middle of the day and at ten at night — usually a proper fitted one, or the temporary stick-on kind that suckers straight onto the glass.',
    why: 'This matters more in Northern Ireland than almost anywhere else people write baby advice for. In June it is bright at half past four in the morning and still light at eleven at night, and a baby or toddler whose room tracks that will wake at dawn and refuse bedtime for four months of the year. Darkness is also what lets a daytime nap happen at all once they are old enough to be interested in the room. No other twenty-pound object changes sleep this much.',
    look: 'Test it in daylight with the door shut — most "blackout" curtains are not. The travel kind that sticks to the window with suckers folds into a bag and saves every holiday and every night in somebody else’s spare room.' },

  { stage: 'baby', tier: 'life', name: 'A high chair that wipes clean and pulls up to your table',
    what: 'A simple chair with no fabric seat pad and no crevices, at your own table height.',
    why: 'Two things at once. Wipeable means weaning stops being a dread, so you let them make more mess, so they learn faster. At your table means they eat with you rather than beside you, which is most of how a child learns to eat.',
    look: 'Fabric covers and moulded plastic with grooves are the enemy — food gets in and stays. A flat, smooth, one-piece seat is the whole trick. The cheap ones are often the best at this.' },

  { stage: 'toddler', tier: 'life', name: 'A puddle suit and wellies',
    what: 'A full waterproof all-in-one over the top of ordinary clothes, and boots that fit.',
    why: 'This is the most important object in Northern Ireland. It converts a wet day from a day indoors into a normal day, and once you own one you stop checking the forecast to decide whether to go out. Over a childhood it is worth hundreds of hours outside.',
    look: 'Taped seams, elastic over the boot, and a size up so it lasts two winters. Buy it before October. A second-hand one that is genuinely waterproof beats a new one that is only showerproof.' },

  { stage: 'toddler', tier: 'life', name: 'A learning tower',
    what: 'A tall step with sides that brings a small child up to the kitchen counter safely.',
    why: 'Almost everything worth doing in a house happens at counter height, and a toddler cannot see any of it. Standing them safely at the work surface turns cooking, washing up and pouring into things you do together instead of things you do while they complain at your knees.',
    look: 'Look for a wide base and a rail at the back. They can be made from an ordinary flat-pack stool with a rail added, for a fraction of the shop price.' },

  { stage: 'always', tier: 'life', name: 'A change of clothes in the car, permanently',
    what: 'A bag with a full change in the current size, plus a towel and a spare plastic bag.',
    why: 'The reason families turn home early is almost never the weather. It is one wet child and no dry clothes. Solving that in the boot means you can say yes to the river, the puddle and the sea, which is where the good days are.',
    look: 'Check the sizes when the seasons change — the classic failure is finding last year\'s clothes when you need them.' },

  // ══ The routine kit ═══════════════════════════════════════════════════
  { stage: 'bump', name: 'Deep water to labour in',
    what: 'A birth pool at home, or a hospital or midwife-led unit with a pool you have actually confirmed is available.',
    why: 'Warm water immersion during the first stage of labour is one of the few comfort measures with good trial evidence behind it — women who use it are less likely to need an epidural. It is also the cheapest pain relief there is.',
    look: 'If you are hiring, hire early and do a dry run of filling it. Check hose length, a clean hose, and how long your hot tank takes to refill. If you are going to a unit, ring and ask how many pools they have and how often they are free.' },

  { stage: 'bump', name: 'A TENS machine, hired',
    what: 'A small battery unit with sticky pads for your lower back, used from the first twinges.',
    why: 'It works best if you start early and build it up, which is exactly when you are still at home and have nothing else to do. Even where the pain relief is modest, having a dial to turn gives you something to do with a contraction instead of bracing against it.',
    look: 'Hire rather than buy — most pharmacies and NCT branches hire them by the month. Get it at 36 weeks, not 40.' },

  { stage: 'bump', name: 'A list of who does what, agreed out loud',
    what: 'Not a product. Ten minutes deciding who answers the phone, who tells people, who cooks, who takes the older child, and who is allowed to visit in week one.',
    why: 'The most common thing that wrecks a first fortnight is not the baby — it is a house full of visitors and a parent who feels rude saying no. Deciding it in advance means nobody has to be brave in the moment.',
    look: 'Write it down and give one other person the job of enforcing it.' },

  { stage: 'newborn', name: 'Muslins, and then more muslins',
    what: 'A dozen large square cotton cloths.',
    why: 'Burp cloth, sun shade, changing mat, bib, feeding cover, mopping up, a clean thing to lie a baby on in someone else\'s house. Nothing else in the house does eight jobs.',
    look: 'Big ones, not the small ones. They shrink and soften with washing and get better for about a year.' },

  { stage: 'newborn', name: 'A sleeping bag instead of blankets',
    what: 'A wearable sleeping bag in a tog rating matched to the room.',
    why: 'A blanket ends up over a face or on the floor at two in the morning, and then you are awake checking. A bag stays put, so the baby stays the same temperature all night and you stop getting up to look.',
    look: 'Get two so one can be in the wash. Check the neck is snug enough that they cannot slide down inside it.' },

  { stage: 'newborn', name: 'White noise',
    what: 'A small continuous-sound machine, or a fan, or an app on an old phone left in the room.',
    why: 'A womb is loud. Continuous sound covers the door latches and the dog and the older child, which is usually what actually ends a nap. It also gives you back the ability to move around your own house during one.',
    look: 'Not one that switches itself off after twenty minutes — the switch-off is often what wakes them. Keep it at conversation volume, across the room, not beside the head.' },

  { stage: 'newborn', name: 'A thermometer and infant paracetamol, bought before you need them',
    what: 'A digital thermometer you have read the instructions for, and age-appropriate liquid paracetamol.',
    why: 'You will need these for the first time at three in the morning. Buying them calmly in daylight, and knowing where they live, removes an entire category of panic.',
    look: 'Check the dose on the bottle against your baby\'s age now, while you are calm. A high temperature in a baby under three months is always a phone call, whatever the thermometer says.' },

  { stage: 'newborn', name: 'A second changing station downstairs',
    what: 'A basket with nappies, wipes, a change of clothes and a mat, wherever you actually sit.',
    why: 'Ten stair climbs a day, at the exact moment you are most tired, for no reason. A basket costs almost nothing and gives you back a real amount of a day.',
    look: 'Restock it on a fixed day so it is never empty when you need it.' },

  { stage: 'newborn', name: 'Vitamin D drops',
    what: 'A daily vitamin D supplement for the baby — the NHS advises it from birth for breastfed babies, and for formula-fed babies once they are taking less than 500ml a day.',
    why: 'At this latitude there is not enough sun between about October and April for anyone to make their own, and a newborn is indoors and covered up regardless. It is one of very few supplements with a straightforward official recommendation behind it, it costs a few pounds, and almost nobody is told about it clearly. Healthy Start vitamins are free for some families.',
    look: 'Any pharmacy has them. Check the dose on the label matches the advice for the age — the drops sold for adults are far too strong.' },

  { stage: 'newborn', name: 'A head torch, or a very dim lamp',
    what: 'Something that gives just enough light to change a nappy and see a latch at three in the morning without turning the main light on.',
    why: 'Turning on a ceiling light at three o’clock wakes the baby properly, wakes you properly, and tells both your bodies it is morning. Keeping the room dim is the whole of what "do not make night feeds interesting" means in practice, and it is the difference between a forty-minute wake and a two-hour one. A head torch also leaves both your hands free, which at that hour matters.',
    look: 'Warm or red light rather than blue-white, and a dimmable setting. A cheap camping head torch with a red mode does the job for about eight pounds.' },

  { stage: 'newborn', name: 'A baby nail file, and more 0–3 clothes than the lists say',
    what: 'An emery board or an electric baby file rather than scissors, and roughly twice as many newborn vests and sleepsuits as any list recommends.',
    why: 'Newborn nails are sharp, they grow fast, and they scratch faces; and every parent is frightened of the scissors, which is reasonable because the nail and the fingertip are the same colour. A file removes the fear entirely. As for clothes — the reason the lists are wrong is that a newborn does not go through one outfit a day, they go through four, and in a wet Northern Irish February nothing dries. Being short of vests is a small thing that produces a bad evening.',
    look: 'File while they are feeding or asleep. For clothes, second-hand is ideal at this size — they are worn for six weeks and most of what you will be given is barely used.' },

  { stage: 'baby', name: 'An open cup',
    what: 'A small open cup or a free-flow beaker with no valve. Not a valved sippy cup.',
    why: 'A valve makes a child suck rather than sip, which keeps them on an infant pattern for longer and lets sugary drinks sit against the teeth. An open cup is a slightly wetter month and a skill they keep for life. Babies manage it far earlier than people expect.',
    look: 'Tiny and heavy-bottomed. Start with water, a centimetre at a time, at one meal a day, over a wipeable floor.' },

  { stage: 'baby', name: 'A splash mat and long-sleeved coverall bibs',
    what: 'A wipeable sheet for under the chair, and bibs with sleeves that go over the whole front.',
    why: 'Every rule you make about mess is a rule you have to enforce at every meal. Making the floor and the clothes not matter removes the argument entirely, and a baby allowed to make a mess learns to feed themselves months earlier.',
    look: 'A cheap shower curtain does the floor job perfectly. Bibs with a catch pocket save a surprising amount.' },

  { stage: 'toddler', name: 'A balance bike',
    what: 'A small bike with no pedals, where the feet reach the ground flat.',
    why: 'Balance is the hard part of cycling and pedalling is the easy part. Learn them separately and in the right order and most children move to a pedal bike without stabilisers and without the usual fortnight of tears.',
    look: 'Light enough that they can pick it up themselves. Seat low enough for flat feet, and that is the only fit rule that matters.' },

  { stage: 'toddler', name: 'A car seat you can strap in half asleep',
    what: 'Whatever seat you can genuinely fasten quickly, correctly and one-handed, ideally rear-facing for as long as the seat allows.',
    why: 'You will do this several thousand times, often in the rain, often with somebody objecting. A seat that is fiddly turns every departure into a struggle, and a struggling parent is a parent who eventually rushes a strap.',
    look: 'Try it in your own car before buying — fit varies enormously between cars. Free fitting checks are widely available and worth taking. Rear-facing for longer is the safer option where the seat and the child\'s size allow it.' },

  { stage: 'toddler', name: 'A small brush, a small jug, a small cloth',
    what: 'Real tools in a child-sized version. Not toy versions.',
    why: 'A toddler wants to do what you are doing, and the fastest way to end that is to hand them something that does not work. A brush that actually sweeps produces a child who sweeps; a toy one produces a child who has been fobbed off.',
    look: 'Dustpan brushes, small jugs and small cloths are ordinary household items in the right size. This costs almost nothing.' },

  { stage: 'toddler', name: 'A raincover that fits, and a carrier for hills',
    what: 'The proper raincover for your actual buggy, kept permanently in the basket, and a framed back carrier for when a toddler is too heavy for a sling but too small for a long walk.',
    why: 'Between the two of these you stop being a household that cancels. The default here is that rain decides your day, and a toddler who is only taken out in good weather gets out roughly one day in three. A back carrier extends how far you can go from about four hundred metres to as far as you like, which turns every forest park and coast path in Northern Ireland back on.',
    look: 'Buy the raincover made for your buggy, not a universal one — universal covers flap, and a cover that does not fit is a cover you do not put on. Back carriers hold value well second-hand and sell on easily.' },

  { stage: 'little', name: 'Scissors that actually cut',
    what: 'Proper child scissors with real blades and small handles.',
    why: 'Safety scissors that do not cut paper teach a child that they are clumsy. Real ones, used at a table with you sitting there, teach them that they are careful. Cutting is also one of the best hand-strength exercises there is, which is what handwriting later depends on.',
    look: 'Check they cut a sheet of paper before you hand them over. Left-handed versions genuinely matter if the child is left-handed.' },

  { stage: 'little', name: 'Big paper and chunky pencils, always out',
    what: 'A roll of plain paper or a pad, and thick pencils or crayons, left permanently accessible.',
    why: 'Drawing happens in the gaps — the ten minutes before dinner, the wet Sunday. If it has to be asked for and set up, it happens once a week; if it is out, it happens daily, and daily is what builds a hand.',
    look: 'Thick barrels for a young grip. A roll of lining paper from a decorating shop is the cheapest large paper you will find.' },

  { stage: 'little', name: 'Waterproof over-trousers',
    what: 'Separate waterproof trousers, once they have outgrown the all-in-one.',
    why: 'Same argument as the puddle suit, in the form an older child will accept. Wet legs end a walk faster than anything, and dry legs are the whole difference between forty minutes out and ten.',
    look: 'Elasticated waist so they can manage them alone. Being able to dress themselves for the weather is half the point.' },

  { stage: 'always', name: 'A flask and a waterproof-backed blanket',
    what: 'A decent vacuum flask and a picnic blanket with a waterproof underside.',
    why: 'Between them they turn a cold or damp place into somewhere you can sit down and stay. Staying is when a day out becomes a memory rather than a walk.',
    look: 'Test the flask by filling it in the morning and drinking it at four. A cheap one that has gone cold by lunchtime costs you the day.' },

  { stage: 'always', name: 'A first aid kit in the car',
    what: 'Plasters, wipes, a bandage, tweezers, and children\'s paracetamol within date.',
    why: 'Everything in it is trivial to buy and impossible to get hold of at the exact moment you want it. A grazed knee twenty minutes from a shop is either a plaster or the end of the day.',
    look: 'Put a reminder in your phone to check the dates twice a year.' },

  { stage: 'always', name: 'Ear defenders, if a child needs them',
    what: 'Small padded ear defenders that live in the bag.',
    why: 'Some children find hand dryers, fireworks, cinemas and busy halls genuinely painful, and it looks like bad behaviour. A five pound pair of defenders can be the difference between a child who can come along and a child who cannot.',
    look: 'Let them put them on and take them off themselves. Not every child needs these — if yours does, you will already know.' },

  { stage: 'always', name: 'A drying rack and somewhere warm to put it',
    what: 'A large airer, and a decided spot for it that is not the middle of the kitchen floor.',
    why: 'This sounds like the least interesting object ever listed and it is one of the most used. A household with a small child produces an enormous amount of washing, and for eight months of the year here nothing dries outside. Whether the washing is dealt with or heaped is one of the larger daily inputs into how a house feels, and it is decided entirely by whether there is a sensible place to put it.',
    look: 'A heated airer uses very little electricity and halves the time. A dehumidifier in the same room is the other half of the answer, and it solves the condensation and the mould as well.' },
];

window.ESSENTIALS_SKIP = [
  { name: 'Cot bumpers, pillows and duvets under one', why: 'Safer-sleep guidance is consistent on this: a baby under twelve months sleeps best on a firm flat mattress with nothing else in the cot. This is the one item on the page that is not a matter of taste.' },
  { name: 'Shoes before walking', why: 'Feet develop by gripping and feeling the floor. Before outdoors walking, socks or soft leather booties do everything shoes do and none of the harm.' },
  { name: 'Valved sippy cups', why: 'They keep a child sucking rather than sipping, and hold liquid against the teeth. An open cup or a free-flow beaker gets you to the same place faster.' },
  { name: 'A baby food blender', why: 'Your existing blender, a fork, or simply handing over a soft piece of food all work. Most families find the appliance used for about six weeks.' },
  { name: 'A top-and-tail bowl', why: 'It is a bowl.' },
  { name: 'A nappy bin', why: 'A carrier bag and taking it out does the same job without the refill cartridges, which is the actual business model.' },
  { name: 'Most electronic developmental toys', why: 'A toy that lights up and talks has made all the interesting decisions already. The child is left pressing a button, which is the least useful thing their hands could be doing.' },
  { name: 'A full nursery before the birth', why: 'Almost nobody uses the nursery in the early months, because the baby sleeps beside you. Buy the room later, when you know what your actual days look like.' },
];
