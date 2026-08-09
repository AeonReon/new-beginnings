// Make It A Game — turning the daily chores a child fights into play they'll join.
//
// This is the good-day companion to "Turn It Around". Turn It Around is for the
// hard emotional hours (meltdowns, hitting). THIS is for the ordinary friction of
// the day — getting dressed, the car seat, tidy up, teeth — where a battle is the
// default and a game is the way through.
//
// Every entry carries a FIRST-PRINCIPLES "why": the real reason a child digs in at
// this moment, and why play (not pressure) gets them moving. If a "why" can't be
// grounded in something a parent could watch for in their own child, it doesn't
// belong here. These are patterns to test, never laws about all children.
//
// Fields per flashpoint:
//   id     — url-safe slug
//   emoji  — the face for the section
//   title  — the moment, named plainly (the chore, not the child's "bad" behaviour)
//   when   — the scene, so a parent recognises it in one line
//   why    — first-principles: what the child is really resisting, why a game works
//   games  — 3–5 quick plays. Each: name, how (the exact move, out loud), best (age)
//
// The whole page shares one honest closing note (see make-it-a-game.html): some days
// no game lands, and that's information, not defiance — drop it, stay kind, move on.

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
    games: [
      { name: 'Beat the Buzzer', best: 'from 3',
        how: "Set a timer for two minutes and say it out loud — it's a race against the clock, never against you. " +
             "\"Can you get your top on before it beeps?\" You cheer the clock, not chase the child." },
      { name: 'The Wrong Way', best: 'from 2',
        how: "Try to put the sock on their hand, the shoe on their head, the jumper on their leg. They'll shriek " +
             "\"NO! It goes HERE!\" — and show you, by doing it themselves. Brilliant for the youngest." },
      { name: 'Which One Wins', best: 'from 3',
        how: "Hold up two tops: \"Does the blue one or the green one get to come to the park today?\" The choice is " +
             "real but small — and choosing is the exact opposite of being dressed by someone else." },
      { name: 'Sleeve Tunnels', best: 'from 2',
        how: "Their arm is a train, the sleeve is a tunnel. \"Here comes the train… where's the tunnel gone… " +
             "toot toot!\" A little narration turns a fight into a game they want to finish." }
    ]
  },

  {
    id: 'car-seat',
    emoji: '🚗',
    title: 'The Car Seat',
    when: "The back-arch, the stiff legs, the buckle that will not click while you're already late.",
    why: "Being strapped down is the least free a small body gets all day, so the fight is really about that. " +
         "You can't remove the straps — but you can give them a job inside the buckling, so it becomes something " +
         "they help do instead of something clamped onto them.",
    games: [
      { name: 'Race the Buckle', best: 'from 3',
        how: "\"I bet I can't get you clicked in before you count to ten. Ready… count!\" You fumble on purpose. " +
             "Beating you is the prize, and they hold still to win it." },
      { name: 'Buckle the Passenger First', best: 'from 2',
        how: "Teddy climbs in and gets strapped in first, with great ceremony. \"Teddy's all safe. Your turn now — " +
             "show Teddy how you do it.\"" },
      { name: "Who's Coming Today", best: 'from 2',
        how: "\"Which teddy gets to sit beside you in the car?\" A chosen companion gives them something of their " +
             "own in a seat that's otherwise all rules." },
      { name: 'The Click Hunt', best: 'from 3',
        how: "\"Listen hard for the click. Tell me the second you hear it.\" A job to concentrate on beats a body " +
             "that wants to fight." }
    ]
  },

  {
    id: 'tidy-up',
    emoji: '🧺',
    title: 'Tidy Up',
    when: "A floor of toys, a flat \"no\", and the day tipping towards bedtime.",
    why: "Tidying is invisible work with no fun in it and no obvious end — to a child it's just the moment the play " +
         "they love gets taken away. A game gives it a shape, a finish line, and a bit of the fun back, so it stops " +
         "feeling like a punishment for having played.",
    games: [
      { name: 'Beat the Song', best: 'from 2',
        how: "Put one song on. \"Can we get it all away before it finishes?\" The song is the boss, not you — and " +
             "it ends, so there's a finish line they can actually see coming." },
      { name: 'Colour Round-Up', best: 'from 3',
        how: "\"Right — now we're only picking up RED things.\" Then blue. One colour at a time turns one huge mess " +
             "into a run of small, winnable jobs." },
      { name: 'Toys Going Home', best: 'from 2',
        how: "The blocks live in this box, the cars in that one. \"Oh no, the cars are lost — can you drive them all " +
             "the way home?\" The story does the motivating for you." },
      { name: 'Ten Things Each', best: 'from 3',
        how: "\"You put away ten, I'll put away ten — let's count them out loud.\" Counting together makes it shared, " +
             "and the number gives it an end." }
    ]
  },

  {
    id: 'brush-teeth',
    emoji: '🪥',
    title: 'Brushing Teeth',
    when: "The clamped mouth, the turned-away head, and two minutes that feel like twenty.",
    why: "A brush going into your mouth is a strange, ticklish, slightly alarming thing when you're small — and you " +
         "have no control over it. Put the child in charge (of the count, of the hunt, of your teeth too) and the " +
         "alarm turns into a game.",
    games: [
      { name: 'Hunt the Sugar Bugs', best: 'from 2',
        how: "\"There's a sugar bug hiding on your BACK teeth… I can see it… nearly got it… GONE!\" They open wide " +
             "to help you catch them." },
      { name: 'You Brush Mine', best: 'from 3',
        how: "Two brushes. They brush your teeth while you brush theirs. Fair's fair — and they're far too busy " +
             "laughing to clamp shut." },
      { name: 'One Whole Song', best: 'from 2',
        how: "One song is exactly how long we brush — a two-minute favourite. Now brushing lasts \"one song\", " +
             "which a child understands, not \"two minutes\", which they don't." },
      { name: 'Which Teeth First', best: 'from 3',
        how: "\"Do the top ones or the bottom ones want to go first tonight?\" One tiny choice at the start softens " +
             "the whole thing." }
    ]
  }

];
