// ESSENTIAL ITEMS — the short list of things that genuinely change the experience
// of a stage, with the real reason each one works. Same first-principles rule as
// the rest of the app: if the "why" cannot be stated in a sentence a parent could
// test against their own week, the entry is not ready.
//
// This is deliberately SHORT. A long list is a shopping list; a short one is
// advice. Anything that is merely nice sits in ESSENTIALS_SKIP instead.
// No affiliate links, no sponsorship, nothing paid — the app names what to look
// for, and you buy it wherever you like, second-hand where it is sensible.

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

// star: the handful that most change how a stage feels — shown with a marker.
window.ESSENTIALS = [
  // ── Bump & birth ────────────────────────────────────────────────────────
  { stage: 'bump', star: true, name: 'Deep water to labour in',
    what: 'A birth pool at home, or a hospital or midwife-led unit with a pool you have actually confirmed is available.',
    why: 'Warm water immersion during the first stage of labour is one of the few comfort measures with good trial evidence behind it — women who use it are less likely to need an epidural. It is also the cheapest pain relief there is.',
    look: 'If you are hiring, hire early and do a dry run of filling it. Check hose length, a clean hose, and how long your hot tank takes to refill. If you are going to a unit, ring and ask how many pools they have and how often they are free.' },

  { stage: 'bump', name: 'A TENS machine, hired',
    what: 'A small battery unit with sticky pads for your lower back, used from the first twinges.',
    why: 'It works best if you start early and build it up, which is exactly when you are still at home and have nothing else to do. Even where the pain relief is modest, having a dial to turn gives you something to do with a contraction instead of bracing against it.',
    look: 'Hire rather than buy — most pharmacies and NCT branches hire them by the month. Get it at 36 weeks, not 40.' },

  { stage: 'bump', star: true, name: 'A proper recovery box, packed before the birth',
    what: 'A peri bottle, big soft high-waisted pants several sizes up, maternity pads, witch hazel, paracetamol, and a refillable water bottle with a straw.',
    why: 'Nobody is going shopping in the first three days, and this is the exact window where being uncomfortable turns into being miserable. Every item here removes one specific small misery, and together they change the mood of a fortnight.',
    look: 'Buy more pads than seems reasonable. A straw bottle matters more than it sounds — you can drink it one-handed while feeding, and hydration is most of how you feel.' },

  { stage: 'bump', name: 'A list of who does what, agreed out loud',
    what: 'Not a product. Ten minutes deciding who answers the phone, who tells people, who cooks, who takes the older child, and who is allowed to visit in week one.',
    why: 'The most common thing that wrecks a first fortnight is not the baby — it is a house full of visitors and a parent who feels rude saying no. Deciding it in advance means nobody has to be brave in the moment.',
    look: 'Write it down and give one other person the job of enforcing it.' },

  // ── The first months ────────────────────────────────────────────────────
  { stage: 'newborn', star: true, name: 'A carrier you can put on by yourself',
    what: 'A stretchy wrap for the early weeks, or a soft structured carrier with a wide seat.',
    why: 'This is the single biggest change to a day. A baby who will not be put down will usually sleep on a chest that is walking, which means you get your hands and your feet back at the same time. It is also the only way to get out of the house on a bad footpath.',
    look: 'Practise with a teddy before the birth. The rule that matters is that the baby is high enough to kiss, chin off chest, and you can see their face without moving fabric. A local sling library will fit one on you free — worth far more than reading about it.' },

  { stage: 'newborn', star: true, name: 'A bedside crib',
    what: 'A cot with one side that drops or opens, strapped level with your mattress.',
    why: 'Night feeds without standing up is worth several hours a week of actual sleep, and standing up is the thing that wakes you properly. It keeps the baby on their own flat, clear surface, which is what the safer-sleep advice asks for.',
    look: 'Second-hand is fine for the frame, but buy a new mattress that fits with no gap at the edges. Check the height range against your bed before you buy — some do not go low enough for a divan.' },

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

  { stage: 'newborn', star: true, name: 'A nasal aspirator',
    what: 'The tube-and-filter kind you use with your own breath.',
    why: 'A small baby cannot blow their nose and cannot breathe and feed at the same time through a blocked one. A blocked nose is the difference between a bad night and a fine one, and this fixes it in thirty seconds.',
    look: 'Keep spare filters in the house. Saline drops first, then the aspirator — the drops do most of the work.' },

  { stage: 'newborn', name: 'A thermometer and infant paracetamol, bought before you need them',
    what: 'A digital thermometer you have read the instructions for, and age-appropriate liquid paracetamol.',
    why: 'You will need these for the first time at three in the morning. Buying them calmly in daylight, and knowing where they live, removes an entire category of panic.',
    look: 'Check the dose on the bottle against your baby\'s age now, while you are calm. A high temperature in a baby under three months is always a phone call, whatever the thermometer says.' },

  { stage: 'newborn', name: 'A second changing station downstairs',
    what: 'A basket with nappies, wipes, a change of clothes and a mat, wherever you actually sit.',
    why: 'Ten stair climbs a day, at the exact moment you are most tired, for no reason. A basket costs almost nothing and gives you back a real amount of a day.',
    look: 'Restock it on a fixed day so it is never empty when you need it.' },

  // ── Sitting up ──────────────────────────────────────────────────────────
  { stage: 'baby', star: true, name: 'A high chair that wipes clean and pulls up to your table',
    what: 'A simple chair with no fabric seat pad and no crevices, at your own table height.',
    why: 'Two things at once. Wipeable means weaning stops being a dread, so you let them make more mess, so they learn faster. At your table means they eat with you rather than beside you, which is most of how a child learns to eat.',
    look: 'Fabric covers and moulded plastic with grooves are the enemy — food gets in and stays. A flat, smooth, one-piece seat is the whole trick. The cheap ones are often the best at this.' },

  { stage: 'baby', star: true, name: 'An open cup',
    what: 'A small open cup or a free-flow beaker with no valve. Not a valved sippy cup.',
    why: 'A valve makes a child suck rather than sip, which keeps them on an infant pattern for longer and lets sugary drinks sit against the teeth. An open cup is a slightly wetter month and a skill they keep for life. Babies manage it far earlier than people expect.',
    look: 'Tiny and heavy-bottomed. Start with water, a centimetre at a time, at one meal a day, over a wipeable floor.' },

  { stage: 'baby', name: 'A splash mat and long-sleeved coverall bibs',
    what: 'A wipeable sheet for under the chair, and bibs with sleeves that go over the whole front.',
    why: 'Every rule you make about mess is a rule you have to enforce at every meal. Making the floor and the clothes not matter removes the argument entirely, and a baby allowed to make a mess learns to feed themselves months earlier.',
    look: 'A cheap shower curtain does the floor job perfectly. Bibs with a catch pocket save a surprising amount.' },

  { stage: 'baby', name: 'A clear floor and something low to pull up on',
    what: 'A cleared, safe area of floor and a stable low surface — a sturdy box, a footstool, a sofa edge.',
    why: 'Almost all of the physical development at this stage happens on the floor, and the main thing that limits it is being held or contained. Time on a floor with something to reach for beats every piece of equipment sold for the purpose.',
    look: 'Check it at their eye level, on your hands and knees. Anything that tips when leant on gets moved or fixed.' },

  { stage: 'baby', name: 'Toys that do one thing',
    what: 'A ball, a set of stacking cups, a wooden box with a lid, a few blocks.',
    why: 'A toy that lights up and sings has already decided what the play is. A cup can be a hat, a drum, a scoop and a tower, and the child does the deciding — which is the part that builds anything.',
    look: 'Fewer, out at a time. Keep the rest away and swap them round; a rotated small set gets played with far more than a full toy box.' },

  // ── Walking to three ────────────────────────────────────────────────────
  { stage: 'toddler', star: true, name: 'A puddle suit and wellies',
    what: 'A full waterproof all-in-one over the top of ordinary clothes, and boots that fit.',
    why: 'This is the most important object in Northern Ireland. It converts a wet day from a day indoors into a normal day, and once you own one you stop checking the forecast to decide whether to go out. Over a childhood it is worth hundreds of hours outside.',
    look: 'Taped seams, elastic over the boot, and a size up so it lasts two winters. Buy it before October. A second-hand one that is genuinely waterproof beats a new one that is only showerproof.' },

  { stage: 'toddler', star: true, name: 'A learning tower',
    what: 'A tall step with sides that brings a small child up to the kitchen counter safely.',
    why: 'Almost everything worth doing in a house happens at counter height, and a toddler cannot see any of it. Standing them safely at the work surface turns cooking, washing up and pouring into things you do together instead of things you do while they complain at your knees.',
    look: 'Look for a wide base and a rail at the back. They can be made from an ordinary flat-pack stool with a rail added, for a fraction of the shop price.' },

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

  // ── Three to five ───────────────────────────────────────────────────────
  { stage: 'little', star: true, name: 'Scissors that actually cut',
    what: 'Proper child scissors with real blades and small handles.',
    why: 'Safety scissors that do not cut paper teach a child that they are clumsy. Real ones, used at a table with you sitting there, teach them that they are careful. Cutting is also one of the best hand-strength exercises there is, which is what handwriting later depends on.',
    look: 'Check they cut a sheet of paper before you hand them over. Left-handed versions genuinely matter if the child is left-handed.' },

  { stage: 'little', name: 'A torch of their own',
    what: 'A small, robust torch that lives somewhere they can reach.',
    why: 'It turns the dark from a thing that happens to them into a thing they can operate. A winter afternoon walk, a shed, a den under the table and a power cut all become adventures instead of problems.',
    look: 'Rubberised, with a wrist strap, and rechargeable if you can. Let them keep it, and let them waste the battery.' },

  { stage: 'little', name: 'A visual timer',
    what: 'A timer that shows time as a shrinking coloured wedge rather than as numbers.',
    why: 'A child this age cannot picture five minutes, so "five more minutes" is not information and the end of it always feels like an ambush. A shape they can watch shrink lets them see it coming, and most transition arguments quietly disappear.',
    look: 'A sand timer works nearly as well and costs almost nothing. Whatever it is, set it together and let it be the thing that says stop, rather than you.' },

  { stage: 'little', name: 'Big paper and chunky pencils, always out',
    what: 'A roll of plain paper or a pad, and thick pencils or crayons, left permanently accessible.',
    why: 'Drawing happens in the gaps — the ten minutes before dinner, the wet Sunday. If it has to be asked for and set up, it happens once a week; if it is out, it happens daily, and daily is what builds a hand.',
    look: 'Thick barrels for a young grip. A roll of lining paper from a decorating shop is the cheapest large paper you will find.' },

  { stage: 'little', name: 'Waterproof over-trousers',
    what: 'Separate waterproof trousers, once they have outgrown the all-in-one.',
    why: 'Same argument as the puddle suit, in the form an older child will accept. Wet legs end a walk faster than anything, and dry legs are the whole difference between forty minutes out and ten.',
    look: 'Elasticated waist so they can manage them alone. Being able to dress themselves for the weather is half the point.' },

  // ── Any age ─────────────────────────────────────────────────────────────
  { stage: 'always', star: true, name: 'A change of clothes in the car, permanently',
    what: 'A bag with a full change in the current size, plus a towel and a spare plastic bag.',
    why: 'The reason families turn home early is almost never the weather. It is one wet child and no dry clothes. Solving that in the boot means you can say yes to the river, the puddle and the sea, which is where the good days are.',
    look: 'Check the sizes when the seasons change — the classic failure is finding last year\'s clothes when you need them.' },

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
];

// Deliberately not on the list. Saying what to skip is worth as much as saying
// what to buy, and it is the part nobody selling anything will tell you.
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
