// Make It A Game — turning the daily chores a child fights into play they'll join.
//
// The good-day twin of "Turn It Around". Turn It Around is for the hard emotional
// hours (meltdowns, hitting). THIS is for the ordinary friction of the day — getting
// dressed, the car seat, mealtimes, the bath, teeth, bed — where a battle is the
// default and a game is the way through.
//
// The spine, drawn from playful-parenting research (Lawrence Cohen), Montessori,
// RIE/Janet Lansbury, occupational therapists, NHS and raisingchildren.net.au:
// cooperation follows CONNECTION (the child feels WITH you, not managed by you) and
// CONTROL (real agency inside a fixed boundary). A child resists to protect control,
// out of fear or a sensory dislike, or from genuine tiredness/hunger — almost never
// plain defiance. Every game below hands back control, or releases tension through
// laughter, or gives a transition a clear finish line.
//
// Two rules override every game, and the content says so out loud:
//   1. Play is a doorway IN, never a lever to push a scared or overwhelmed child.
//      Once a child is too far gone, games make it worse — name the feeling and help
//      the body, gently. (See the shared "When no game lands" note on the page.)
//   2. Play never crosses a safety line. Where a moment has a hard floor (roads,
//      water, choking, a sore tummy), the entry carries its own honest caution.
//
// Every "why" is first-principles and TESTABLE against a real child — a pattern to
// watch for, never a law about all children. If a why can't be grounded that way, it
// doesn't belong here.
//
// Fields per flashpoint:
//   id       — url-safe slug
//   emoji    — the face for the section
//   title    — the moment, named plainly (the chore, not the child's "bad" behaviour)
//   when     — the scene, so a parent recognises it in one line
//   why      — first-principles: what the child is really resisting, why play works
//   whyKey   — the load-bearing phrase inside `why` to highlight (must appear verbatim)
//   games    — 3–6 quick plays. Each: name, best (age), how (the move + words to say)
//   note     — optional honest caution specific to this moment
//   noteKind — optional 'safety' to flag a hard line (styled stronger); omit otherwise

window.PLAYFUL_INTRO =
  "A small child has almost no say over their own day — what they wear, where they go, " +
  "when they have to stop and leave. Digging their heels in is often the one bit of power " +
  "they can reach for. A game doesn't take that need away — it hands them a safer version " +
  "of it: now the fun is theirs to win, and you've stopped being the boss they're pushing " +
  "against and become the playmate they'll do almost anything for. That's the whole trick. " +
  "Pick one, play it lightly, and drop it the moment it stops working.";

window.PLAYFUL = [

  {
    id: 'getting-dressed',
    emoji: '👕',
    title: 'Getting Dressed',
    when: "Clothes on the floor, arms that won't go in the sleeves, and everyone needs to be out the door.",
    why: "Getting dressed is something done TO a child — arms lifted, head pushed through, no say in any of it. " +
         "That's what the wriggling is about. A game hands the doing back to them: now they're the one making it " +
         "happen, and a child races towards what they get to be in charge of.",
    whyKey: "in charge of",
    games: [
      { name: 'Beat the Buzzer', best: 'from 3',
        how: "Set a timer for two minutes and say it out loud — it's a race against the clock, never against you. " +
             "\"Can you get your top on before it beeps?\" You cheer the clock, not chase the child." },
      { name: 'The Wrong Way', best: 'from 2',
        how: "Try to put the sock on their hand, the shoe on their head, the jumper on their leg. They'll shriek " +
             "\"NO! It goes HERE!\" — and show you, by doing it themselves. Brilliant for the youngest." },
      { name: 'I Bet You Can’t', best: 'from 3',
        how: "Look deadly serious: \"There is NO way you can get your jumper on before I count to ten. Impossible.\" " +
             "Then count slowly. Proving you wrong is the whole prize." },
      { name: 'Which One Wins', best: 'from 3',
        how: "Hold up two tops: \"Does the blue one or the green one get to come to the park today?\" The choice is " +
             "real but small — and choosing is the exact opposite of being dressed by someone else." },
      { name: 'The Lonely Sock', best: 'from 2',
        how: "Give the sock a tiny voice: \"Brrr, I'm so cold out here — can I climb onto your warm foot?\" A " +
             "talking sock is nobody to argue with." },
      { name: 'Sleeve Tunnels', best: 'from 2',
        how: "Their arm is a train, the sleeve is a tunnel. \"Here comes the train… where's the tunnel gone… " +
             "toot toot!\" A little narration turns a fight into a game they want to finish." }
    ]
  },

  {
    id: 'out-the-door',
    emoji: '🧥',
    title: 'Shoes, Coat & Out the Door',
    when: "Shoes off again, no coat, wandering off — while you're already late.",
    why: "Two things collide here — stopping their own play on someone else's clock, and the fact that shoes and " +
         "coats are genuinely fiddly for small hands, so they stall or flop. The rush itself adds heat. A game " +
         "gives the fiddly bit a lift and puts a little of the leaving back on their terms.",
    whyKey: "genuinely fiddly for small hands",
    games: [
      { name: 'The Coat Flip', best: 'from 2.5',
        how: "Coat open on the floor, hood at their toes. They crouch, pop both arms in the sleeves, and FLIP it " +
             "up over their head. \"Arms in… and FLIP!\" A trick they'll want to show off." },
      { name: 'You Do the Last Bit', best: 'from 2',
        how: "You do all of it except the very last step; they finish — the last tug of the shoe, the final inch " +
             "of the zip. \"I got it started — you do the last pull!\" A small win with none of the hard part." },
      { name: 'Beat the Song to the Door', best: 'from 3',
        how: "One short song. \"Shoes AND coat on before it ends?\" The song is the boss, not you." },
      { name: 'The Wrong Foot', best: 'from 2',
        how: "Try to jam their shoe onto your own foot, or onto their hand. \"Does it go here?\" They'll put you " +
             "right by doing it properly themselves." },
      { name: 'Which Foot First', best: 'from 3',
        how: "\"Does the left foot or the right foot want its shoe first?\" One tiny choice softens the standoff." }
    ],
    note: "On a genuinely late morning, don't turn a chase for the door into a game you can't win — scoop them up " +
          "kindly and do the shoes in the car. And no silly running near stairs or a road."
  },

  {
    id: 'car-seat',
    emoji: '🚗',
    title: 'The Car Seat',
    when: "The back-arch, the stiff legs, the buckle that will not click while you're already late.",
    why: "Being strapped down is the least free a small body gets all day, so the fight is really about that. " +
         "You can't remove the straps — but you can give them a job inside the buckling, so it becomes something " +
         "they help do instead of something clamped onto them.",
    whyKey: "help do",
    games: [
      { name: 'Race the Buckle', best: 'from 3',
        how: "\"I bet I can't get you clicked in before you count to ten. Ready… count!\" You fumble on purpose. " +
             "Beating you is the prize, and they hold still to win it." },
      { name: 'Countdown to Blast-Off', best: 'from 2',
        how: "Same words every time: \"Astronaut, into your seat — five, four, three, two, one… BLAST OFF!\" The " +
             "ritual chant lets them get ready instead of being grabbed." },
      { name: 'Buckle the Passenger First', best: 'from 2',
        how: "Teddy climbs in and gets strapped in first, with great ceremony. \"Teddy's all safe. Your turn now — " +
             "show Teddy how you do it.\"" },
      { name: 'The Wrong Buckle', best: 'from 2',
        how: "Try to click the buckle onto their nose, their ear, teddy's tummy. \"Does it go… here? No?\" They " +
             "show you where it really goes — sitting still to do it." },
      { name: "Who's Coming Today", best: 'from 2',
        how: "\"Which teddy gets to sit beside you in the car?\" A chosen companion gives them something of their " +
             "own in a seat that's otherwise all rules." },
      { name: 'The Click Hunt', best: 'from 3',
        how: "\"Listen hard for the click. Tell me the second you hear it.\" A job to concentrate on beats a body " +
             "that wants to fight." }
    ]
  },

  {
    id: 'holding-hands',
    emoji: '🤝',
    title: 'Holding Hands Near Roads',
    when: "The hand yanked away, the dart towards the car park, the flat refusal of the reins.",
    why: "Holding a hand asks a small child to do the one thing their body is built NOT to do — stop, and ignore " +
         "the puddle or the pigeon that just grabbed them. The part of the brain that puts the brakes on is barely " +
         "switched on before about four, so near a road this isn't defiance — it's a job they can't yet do alone.",
    whyKey: "a job they can't yet do alone",
    games: [
      { name: 'Touch the Star', best: 'from 2',
        how: "A sticker or magnet on the car door is the \"star\". \"Hand on the star, watch the cars — when I say " +
             "ready, we go together.\" It gives the hand a job while you load up." },
      { name: 'The Magic Word', best: 'from 2',
        how: "Take the hand firmly before the kerb and hold it the whole way across. On the far pavement comes the " +
             "magic word — \"ALL CLEAR!\" — and a cheer. The cheer only lands once you're safely over." },
      { name: 'Red Light, Green Light', best: 'from 3',
        how: "Walk holding hands, calling the lights as you go — and always \"red light, FREEZE!\" at every kerb." },
      { name: "You're the Kerb Spotter", best: 'from 3',
        how: "Give the pulling energy a job: \"You're my lookout — tell me the second you spot a kerb.\" A lookout " +
             "walks beside you instead of pulling away." }
    ],
    note: "This one is different. A game makes hand-holding easier on a calm day — it is NEVER what keeps your " +
          "child safe near traffic. The safety is always your hand, their wrist, the reins, the buggy, or carrying " +
          "them, protest and all. A harness isn't a failure. The moment there are real cars, drop the game and " +
          "hold on — near roads, holding on always wins.",
    noteKind: 'safety'
  },

  {
    id: 'leaving-the-fun',
    emoji: '🛝',
    title: 'Leaving Somewhere Fun',
    when: "\"Time to go\" — and they bolt, go limp, or melt down at the gate.",
    why: "A small child has almost no sense of \"later\", so \"time to go\" doesn't land as a schedule — it lands " +
         "as the fun ends now, and the big feeling arrives faster than the words for it. Warning them it's coming, " +
         "and carrying a bit of the fun with them, softens the drop.",
    whyKey: "the fun ends now",
    games: [
      { name: 'The Countdown Ladder', best: 'from 2',
        how: "Same words every visit: a two-minute warning, a one-minute warning, then \"all done\". The warnings " +
             "let them finish it in their head before their body has to." },
      { name: 'One Last Go', best: 'from 2',
        how: "Stand at the END of the thing — the bottom of the slide — give one clear final turn, then leave " +
             "straight away. \"One more down the slide, then we go.\"" },
      { name: 'Hop to the Gate', best: 'from 2',
        how: "Leaving becomes the next game: \"Can you hop like a frog, walk backwards, gallop all the way to the " +
             "gate?\"" },
      { name: 'The Big Helper', best: 'from 2.5',
        how: "\"I need a strong helper to carry the keys and press the gate button — can you?\" A job pulls them " +
             "towards the exit instead of away from it." },
      { name: "We'll Come Back", best: 'from 3',
        how: "Name the feeling and hand them a future: \"You're having SO much fun. The park will still be here — " +
             "let's come back next time.\"" }
    ],
    note: "Once they're truly past listening, drop the games — name it and move gently: \"You didn't want to go. " +
          "I'll help your body to the car.\" And never make chasing a running child near a car park into a game."
  },

  {
    id: 'mealtimes',
    emoji: '🍽️',
    title: 'Coming to the Table',
    when: "Won't come, won't sit, up and down, while the dinner goes cold.",
    why: "Stopping play to sit still is one of the hardest asks for a body built to move — and it usually comes " +
         "right when they're hungry and tired and least able to manage it. Coming to the table is the fight worth " +
         "winning; a game gives the move a lift, and a warm little routine teaches the body \"we sit now\".",
    whyKey: "a body built to move",
    games: [
      { name: 'The Taxi to the Table', best: 'from 2',
        how: "Piggyback them to their chair, steering by their shouts. \"Where to, boss? Pull my sleeve to steer " +
             "the taxi to your seat!\"" },
      { name: 'Which Hand?', best: 'from 2',
        how: "Hide a raisin or a pea in one fist as they arrive. \"Which hand?\" It turns \"come and sit\" into " +
             "\"come and play\"." },
      { name: 'The Table Bell', best: 'from 2',
        how: "A little job that becomes the cue — they ring a bell, or sing the same short \"time to eat\" song, " +
             "every single time. The routine does the calling, so you don't have to." },
      { name: 'Fancy Restaurant', best: 'from 3',
        how: "Everyone puts on silly-posh \"best manners\". \"Welcome to our restaurant, madam — your table is " +
             "ready.\"" },
      { name: 'Beat the Song to Your Seat', best: 'from 3',
        how: "\"Can you be in your chair before this song ends?\"" }
    ],
    note: "This gets a child TO the table and keeps it light — never use a game to pressure them to EAT, or to " +
          "sneak food in while they're distracted. Pushing food reliably backfires and starts real food battles. " +
          "Serve it, stay cheerful, and let their appetite be their own."
  },

  {
    id: 'hand-washing',
    emoji: '🧼',
    title: 'Washing Hands',
    when: "Won't come to the sink — or won't stop playing in the water once there.",
    why: "Washing hands stops the fun they were lost in, then asks them to stand still at a sink they can barely " +
         "reach while cold water and slippery soap happen to them. A game gives the interruption a point, and one " +
         "real choice — which soap, warm water, do-it-myself — hands the control back.",
    whyKey: "gives the interruption a point",
    games: [
      { name: 'Germ Monster Hunt', best: 'from 2.5',
        how: "Two or three dots on the backs of the hands with a washable marker. \"Three germ monsters — can you " +
             "scrub every one away?\"" },
      { name: 'Bubble Gloves', best: 'from 2',
        how: "A foaming-pump soap turns slippery into fun. \"Bubble gloves on — how big can we grow them?\"" },
      { name: 'Wash the Song Away', best: 'from 2',
        how: "They pick one short song; scrub until it ends, about twenty seconds. Getting to pick is the hook." },
      { name: 'Pepper Runs Away', best: 'from 3',
        how: "Scatter pepper on a bowl of water, dip in a soapy fingertip, and the \"germs\" flee to the edges. A " +
             "one-time bit of magic that shows what soap actually does." }
    ],
    note: "The rule still holds — after the toilet and before eating, hands get washed. The game makes it lighter, " +
          "not optional."
  },

  {
    id: 'screen-off',
    emoji: '📺',
    title: 'Turning Off the Screen',
    when: "The show ends, the tablet goes away — and the world ends with it.",
    why: "A screen is a fast, steady drip of reward, and switching it off drops a child off that cliff into " +
         "feelings they can't yet name. There's also no natural ending, no bottom-of-the-slide — the stop is " +
         "sudden and total. Naming the end before it comes, and landing them onto something next, softens it.",
    whyKey: "no natural ending",
    games: [
      { name: 'Name the Number First', best: 'from 2',
        how: "Agree it before it starts and count it out: \"Two episodes. One… two. Then all done.\" Now the end " +
             "is known, not sprung on them." },
      { name: 'Wave Bye to the Character', best: 'from 2',
        how: "Make ending a little ceremony to the show, not a snatch of the tablet. \"Say bye-bye, Bluey! See you " +
             "tomorrow.\"" },
      { name: 'You Press the Button', best: 'from 2.5',
        how: "They own the ending — the very thing they're fighting for. \"You get to press the button to put the " +
             "telly to sleep.\"" },
      { name: 'Land on the Next Thing', best: 'from 2',
        how: "Never switch off into nothing. End towards a choice: \"Telly's done — bubbles or the blocks next?\"" }
    ],
    note: "The wobble is the danger point: if you reopen the screen to stop a tantrum, they learn that a tantrum " +
          "reopens it. Hold it warmly — \"It's so hard when it's all done\" — and stay close."
  },

  {
    id: 'tidy-up',
    emoji: '🧺',
    title: 'Tidy Up',
    when: "A floor of toys, a flat \"no\", and the day tipping towards bedtime.",
    why: "Tidying is invisible work with no fun in it and no obvious end — to a child it's just the moment the play " +
         "they love gets taken away. A game gives it a shape, a finish line, and a bit of the fun back, so it stops " +
         "feeling like a punishment for having played.",
    whyKey: "a finish line",
    games: [
      { name: 'Beat the Song', best: 'from 2',
        how: "Put one song on. \"Can we get it all away before it finishes?\" The song is the boss, not you — and " +
             "it ends, so there's a finish line they can actually see coming." },
      { name: 'Colour Round-Up', best: 'from 3',
        how: "\"Right — now we're only picking up RED things.\" Then blue. One colour at a time turns one huge mess " +
             "into a run of small, winnable jobs." },
      { name: 'The Bumbling Helper', best: 'from 2',
        how: "Tidy hilariously wrong — put the car in the book box, a sock on your head. \"This goes… here?\" " +
             "They'll take over to fix your mistakes." },
      { name: 'Toys Going Home', best: 'from 2',
        how: "The blocks live in this box, the cars in that one. \"Oh no, the cars are lost — can you drive them " +
             "all the way home?\" The story does the motivating for you." },
      { name: 'Toy Basketball', best: 'from 3',
        how: "The box is the hoop. Soft toys get \"shot\" in — \"and the crowd goes wild!\" — counting the baskets " +
             "as you go." },
      { name: 'Ten Things Each', best: 'from 3',
        how: "\"You put away ten, I'll put away ten — let's count them out loud.\" Counting together makes it " +
             "shared, and the number gives it an end." }
    ]
  },

  {
    id: 'bath-time',
    emoji: '🛁',
    title: 'Bath Time',
    when: "Won't get in — then, once in, won't get out. Two opposite battles around one bath.",
    why: "Bath time is really two hard moments around one event — stopping play to get IN, and stopping lovely " +
         "warm water to get OUT into the cold. Neither is naughtiness; both are the same tricky thing, leaving a " +
         "good moment behind. A warning, a job, and something to look forward to on the far side carry them through.",
    whyKey: "leaving a good moment behind",
    games: [
      { name: 'Glowing Water', best: 'from 3',
        how: "Getting in: drop in a bath-safe colour tablet or a glow stick and dim the light. \"Your water GLOWS " +
             "— quick, hop in before the magic stops!\"" },
      { name: 'Wash the Animals', best: 'from 2',
        how: "Getting in: they perch on the edge and sponge a grubby teddy first — and usually climb in to help." },
      { name: 'Pick Your Potion', best: 'from 2',
        how: "Getting in: \"Which colour bubbles today — red, blue or purple?\" The choice gets them over the edge." },
      { name: 'The Warm Towel Burrito', best: 'from 2',
        how: "Getting out: warm the room, and the second they stand, wrap them snug. \"Quick — into the warm hug " +
             "towel! Burrito time!\"" },
      { name: 'Ten and Lift', best: 'from 2',
        how: "Getting out: count down to the lift so it isn't a snatch. \"Last big splash — out in ten! Ten, nine, " +
             "eight…\"" },
      { name: 'Toys Go to Bed First', best: 'from 2',
        how: "Getting out: each bath toy \"hops out to sleep\" one by one, and then it's their turn." }
    ],
    note: "Never leave a young child alone in the bath, not even for a few seconds — a toddler can slip under " +
          "silently. Check the water is warm, not hot, every single time.",
    noteKind: 'safety'
  },

  {
    id: 'washing-hair',
    emoji: '🚿',
    title: 'Washing Hair',
    when: "Fine in the bath — until the water hits the head, and then it's hysteria.",
    why: "Hair washing is usually more fear than defiance. Water over the face means, for a second, they can't see " +
         "and can't hear — right as something is being done to them — and one stinging rinse can leave a flinch " +
         "that lasts. Often it's the tipping-back, not the water. Their eyes covered, and their own \"go\", turns " +
         "the fear right down.",
    whyKey: "more fear than defiance",
    games: [
      { name: 'Eyes on the Star', best: 'from 2.5',
        how: "Stick a glow star on the ceiling. They tip their chin UP to watch it while you pour from the front, " +
             "backwards — so the water runs off the back of the head, away from the face. \"Keep your star awake — " +
             "count its points!\"" },
      { name: 'The Force-Field Cloth', best: 'from 2',
        how: "They press a folded flannel over their own eyes before you pour. They hold the force-field, and they " +
             "say \"go\". The cover and the control are the whole trick." },
      { name: 'You Wash Mine First', best: 'from 2',
        how: "They wash your hair, or a doll's, first — you play a little scared, then delighted. Then you swap, " +
             "and now they're the expert." },
      { name: 'Gentle Rain', best: 'from 2.5',
        how: "Rinse with a little watering can or a cup, so it's soft, predictable \"rain\". \"Gentle rain, or a " +
             "tiny shower today?\"" }
    ],
    note: "If soap actually stings their eyes, stop and rinse with clean warm water — don't play on through real " +
          "pain. And their \"go\" has to be real: the moment \"you say go\" becomes \"I pour anyway\", the trust " +
          "goes with it."
  },

  {
    id: 'brush-teeth',
    emoji: '🪥',
    title: 'Brushing Teeth',
    when: "The clamped mouth, the turned-away head, and two minutes that feel like twenty.",
    why: "A brush going into your mouth is a strange, ticklish, slightly alarming thing when you're small — and you " +
         "have no control over it. Put the child in charge (of the count, of the hunt, of your teeth too) and the " +
         "alarm turns into a game.",
    whyKey: "in charge",
    games: [
      { name: 'Hunt the Sugar Bugs', best: 'from 2',
        how: "\"There's a sugar bug hiding on your BACK teeth… I can see it… nearly got it… GONE!\" They open wide " +
             "to help you catch them." },
      { name: 'You Be the Dentist', best: 'from 3',
        how: "Swap roles — they're the dentist, checking and brushing your teeth first, then you're the dentist " +
             "for theirs. Being the one in charge melts the fear." },
      { name: 'You Brush Mine', best: 'from 3',
        how: "Two brushes. They brush your teeth while you brush theirs. Fair's fair — and they're far too busy " +
             "laughing to clamp shut." },
      { name: 'Big Roar Faces', best: 'from 2',
        how: "At the mirror, pull huge lion roars and monster faces to reach the back teeth. \"Show me your BIGGEST " +
             "roar so I can get the very back ones!\"" },
      { name: 'One Whole Song', best: 'from 2',
        how: "One song is exactly how long we brush — a two-minute favourite. Now brushing lasts \"one song\", " +
             "which a child understands, not \"two minutes\", which they don't." },
      { name: 'Which Teeth First', best: 'from 3',
        how: "\"Do the top ones or the bottom ones want to go first tonight?\" One tiny choice at the start softens " +
             "the whole thing." }
    ]
  },

  {
    id: 'using-the-potty',
    emoji: '🚽',
    title: 'Using the Potty',
    when: "Won't sit, won't go, or bolts the moment you suggest it.",
    why: "Weeing and pooing are among the very few things a small child completely controls — no one can make " +
         "their body do it — so if they feel pushed anywhere else, this is where they plant their flag. The toilet " +
         "can be genuinely scary too: a loud flush, dangling feet, nothing to hold. Taking the pressure right off " +
         "is what helps most.",
    whyKey: "completely controls",
    games: [
      { name: 'Blow the Bubbles', best: 'from 2',
        how: "Blow bubbles, or a ping-pong ball across a bowl of water, while they sit. Blowing out gently relaxes " +
             "the right muscles — the game quietly does the work." },
      { name: 'Teddy Goes First', best: 'from 2',
        how: "A toy \"has a wee\", gets a little cheer, and they show it how. \"Teddy needs to go — can you show " +
             "him how we sit?\"" },
      { name: 'The Potty Book Basket', best: 'from 2',
        how: "Two or three books that ONLY live by the potty. The goal is relaxed sitting, not producing. \"The " +
             "digger one or the animals?\"" },
      { name: 'You Do the Flush', best: 'from 2.5',
        how: "They own the scary bits — they press the flush, they pick to sit now or in two minutes. Control is " +
             "exactly what they're after." }
    ],
    note: "Never hold a child on the seat — it hardens the \"no\". And if pooing is hard or sore, or they strain " +
          "and hide to hold it in, that's usually constipation with a fear of the pain — see your GP to make it " +
          "soft and painless first. No game fixes a sore tummy."
  },

  {
    id: 'bedtime',
    emoji: '🛏️',
    title: 'Going to Bed',
    when: "The perfect routine, then at lights-out comes the fury, the stalling, the \"one more\".",
    why: "Bedtime asks a child to stop the day, be alone in the dark, and miss whatever happens next — all when " +
         "they're most tired and least able to cope. The stalling (\"one more water\") is often a bid for more of " +
         "you. A warning, a wind-down, and sometimes an earlier bedtime (an overtired child looks MORE wired, not " +
         "less) do more than any battle.",
    whyKey: "a bid for more of you",
    games: [
      { name: 'Beat the Song to Bed', best: 'from 2.5',
        how: "As pyjamas and teeth start, put on one favourite song — played slowly, so they win. \"In bed before " +
             "it ends? Go, go, go!\"" },
      { name: 'The Sleepy Slow Giant', best: 'from 2.5',
        how: "You become a huge, exhausted giant who needs THEIR help up the stairs and to be tucked in first. It " +
             "flips the power and drops everyone's energy. \"I'm… such… a sleepy giant… help me up… shhh.\"" },
      { name: 'Tuck Teddy In First', best: 'from 2',
        how: "Their job to put a toy to bed — pyjamas, teeth, tuck, kiss. They rehearse the whole routine on the " +
             "teddy, and go easier through their own." },
      { name: 'Which Way Up the Stairs', best: 'from 2',
        how: "\"Bunny hops, or slow sleepy-giant stomps up to bed?\" A calm, heavy-work choice — with a hand on " +
             "the stairs." },
      { name: 'The Last Train to Bed', best: 'from 2',
        how: "Carry the \"won't move\" child up as a gentle train or a slow digger, landing softly in bed. \"Last " +
             "train to Sleepy Station — all aboard.\"" }
    ],
    note: "Save the exciting play — chasing, tickle-fights — for an hour or two before, not lights-out, or it " +
          "wakes them right up. Once they're past playing, go quiet instead: soft voice, dim room, just a cuddle. " +
          "And mind the stairs — animal-walks only with a hand to hold."
  }

];
