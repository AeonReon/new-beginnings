// DEEDS — EXPANSION PACK 2.
// Same rules as deeds-data.js: no equipment, nothing to buy, nothing to
// prepare, no season to wait for. A parent can do every one of these on the
// spot — kitchen floor, car seat, waiting room, bath time.
//
// WHY THIS FILE EXISTS: "For today" puts ONE tradition in focus each week and
// draws the day's deed only from that tradition. With 2–4 deeds per tradition
// the same deed came round three or four times inside a single week. This pack
// takes every tradition to 12+, so a focus week never repeats itself.
//
// `trad` must match a METHODS id. Appends to whatever deeds-data.js loaded.

window.DEEDS = (window.DEEDS || []).concat([

  // ── Montessori ──
  { trad: 'montessori', name: 'Finish the circle', body: "When they're done with a thing, don't tidy it away for them — ask them to put it back where it lives. The work isn't finished until the next person can find it." },
  { trad: 'montessori', name: 'Get down to their eyes', body: "Before you say the next thing, kneel until your eyes are level with theirs. The same words land completely differently from down there." },
  { trad: 'montessori', name: 'Show it slowly, in silence', body: "Instead of explaining how, do it once — slowly, hands only, no talking — then hand it over. Words and movement compete; let the hands teach." },
  { trad: 'montessori', name: 'Hand them the cloth', body: "When something spills, don't sigh and fix it. Pass them the cloth. A child who cleans their own spill learns that mistakes are simply things you put right." },
  { trad: 'montessori', name: 'Take some things away', body: "Clear all but two or three things off the shelf or table. Less to choose from means deeper, longer, calmer work with what's left." },
  { trad: 'montessori', name: 'Count to three first', body: "The next time they struggle with something, count silently to three before you help. Most of the time they get there — and the getting there is the point." },
  { trad: 'montessori', name: 'Give them the heavy one', body: "Let them carry something that genuinely has weight — the water jug, the bag of potatoes. Real effort tells a child they're strong far better than praise does." },
  { trad: 'montessori', name: 'Offer two real choices', body: "Instead of announcing what happens next, offer two options you're honestly happy with: 'the blue cup or the red one?' A small true choice all day builds a person who can decide." },
  { trad: 'montessori', name: 'Lower the world', body: "Move one thing today so they can reach it themselves — a hook, a cup, a stool at the sink. Independence is mostly a question of height." },
  { trad: 'montessori', name: 'Let the mistake stand', body: "If the table's set slightly wrong, leave it. Correcting their work quietly tells them their work wasn't good enough. It was." },

  // ── Charlotte Mason ──
  { trad: 'charlotte-mason', name: 'Stop while they still want more', body: "Whatever you're doing together — reading, drawing, counting — end it ten minutes early, at the high point. A short lesson finished happily beats a long one finished grimly." },
  { trad: 'charlotte-mason', name: 'Put down the flat book', body: "If the book you're reading is written down to them — cheerful, thin, forgettable — close it and pick one written by someone who loved the subject. Children can taste the difference." },
  { trad: 'charlotte-mason', name: 'A long, slow afternoon out', body: "Give them one unhurried stretch outdoors with nothing planned in it. Not a trip, not an activity — just hours and weather and their own devices." },
  { trad: 'charlotte-mason', name: 'Look at one picture', body: "Show them one painting for two or three minutes. Then turn it away and ask what was in it. You're not teaching art — you're teaching the eye to actually look." },
  { trad: 'charlotte-mason', name: 'One careful look', body: "Say 'look at this properly, I'm going to ask you' — then cover it and ask. Attention is a habit, and habits are built by being asked for." },
  { trad: 'charlotte-mason', name: 'Say the same poem again', body: "Pick one short poem and say it to them today, and tomorrow, and the day after. Said often enough, it stops being a poem you read and becomes a poem they own." },
  { trad: 'charlotte-mason', name: 'Watch it until it moves', body: "Find one living thing outside — a snail, a bee, a bird on a wire — and watch it together until it does something. Nature study is patience, not facts." },
  { trad: 'charlotte-mason', name: "Don't explain the story", body: "Read it, close it, and say nothing. No moral, no 'so what did we learn?'. A good story does its own work overnight." },
  { trad: 'charlotte-mason', name: 'One habit at a time', body: "Choose a single habit — hanging up the coat, saying please, coming when called — and work only on that one this week. Ignore the rest for now. One at a time is how habits actually stick." },
  { trad: 'charlotte-mason', name: 'Let them tell you the day', body: "At bedtime, ask them to tell you what happened today, from the start. Narration is not a test — putting it in order is the thinking." },

  // ── Waldorf ──
  { trad: 'waldorf', name: 'Turn the lights down instead', body: "Rather than announcing bedtime, quietly dim the lamps and slow everything down. Let the room say it. Children resist instructions far more than atmosphere." },
  { trad: 'waldorf', name: 'The same three things, same order', body: "Pick one part of the day and make it identical every time — bath, story, song. A rhythm a child can predict is a rhythm they can relax inside." },
  { trad: 'waldorf', name: 'Take your voice down, not up', body: "When it gets loud, drop your voice lower and slower than feels natural. Children tune to the adult's nervous system before they tune to the words." },
  { trad: 'waldorf', name: 'Let them do the real work', body: "Give them the actual job you're doing — kneading the dough, sweeping the step, folding the towels. Under seven, useful work beside a calm adult is the whole curriculum." },
  { trad: 'waldorf', name: 'Answer with wonder', body: "When they ask why the moon follows the car, resist the explanation. Say 'isn't that a wonder — what do you think?' There's time for mechanics later; the sense of wonder has its season now." },
  { trad: 'waldorf', name: 'Same story, all week', body: "Tell the same story tonight that you told last night, in the same words. Repetition isn't boredom to a small child — it's how a story goes deep enough to live in." },
  { trad: 'waldorf', name: 'Talk while you walk', body: "Save the hard conversation for when you're both moving and side by side. Hands and feet busy, faces not locked together — that's when children say the true thing." },
  { trad: 'waldorf', name: 'Leave it unfinished', body: "Hand them the stick, the cloth, the wooden block rather than the toy that already knows what it is. The less finished the object, the more work their imagination has to do." },
  { trad: 'waldorf', name: 'One small ceremony', body: "Light a candle at the table, or say the same short line before eating. A tiny repeated ritual turns an ordinary meal into a marked moment." },
  { trad: 'waldorf', name: 'Do it before you say it', body: "Start the tidying, the washing, the singing — visibly and without comment — and wait. A young child's instinct is to join in, not to obey." },

  // ── Reggio ──
  { trad: 'reggio', name: 'Write down their exact words', body: "When they say something surprising, write it down word for word. Read it back to them tomorrow. Children take their own thinking far more seriously when it's been recorded." },
  { trad: 'reggio', name: 'Photograph the middle, not the end', body: "Take a picture of them halfway through — hands in it, mess everywhere — rather than holding up the finished thing. What you photograph is what you say matters." },
  { trad: 'reggio', name: 'Ask how we could find out', body: "When they ask a question you could easily answer, say 'how could we find out?' instead. You've just handed them the method rather than the fact." },
  { trad: 'reggio', name: 'Say it in a second language', body: "After they've drawn it, ask them to build it, or act it, or tell it. The same idea moved into a different material comes back deeper every time." },
  { trad: 'reggio', name: "Say 'tell me about it'", body: "Never ask 'what is it?' about their drawing — it says you couldn't tell. Say 'tell me about it' and then be quiet for longer than is comfortable." },
  { trad: 'reggio', name: "Don't settle the argument", body: "When two children disagree about how something works, resist refereeing. Two competing theories rubbing together is exactly where the thinking happens." },
  { trad: 'reggio', name: 'Put yesterday back on the table', body: "Leave the half-finished thing out, or bring it back today. A project that gets returned to over days becomes real work rather than an activity." },
  { trad: 'reggio', name: 'Make one beautiful corner', body: "Arrange a few things carefully at their height — shells in a row, leaves on a light windowsill. The environment teaches; make it say 'things here are worth looking at'." },
  { trad: 'reggio', name: "Ask what you don't know", body: "Ask them a genuine question you have no answer to. Children can tell instantly whether you're testing them or actually wondering with them." },
  { trad: 'reggio', name: 'Follow their idea, not yours', body: "If you set out to make a boat and they're fascinated by the glue, abandon the boat. The plan was only ever a way of getting somewhere interesting." },

  // ── Classical ──
  { trad: 'classical', name: 'Ask what it really is', body: "Take one ordinary word — friend, fair, brave — and ask together what it actually means. Try a definition, then find something it doesn't cover. That's philosophy, at four." },
  { trad: 'classical', name: "Tell a hero's story", body: "At the table, tell one true story about someone who did a hard, good thing. Character is caught from stories long before it's taught from rules." },
  { trad: 'classical', name: "Ask 'was that fair?'", body: "Take something small from the day — who got the bigger half, who went first — and ask whether it was fair, and why. Small justice now, large justice later." },
  { trad: 'classical', name: 'Learn one line by heart', body: "Pick a single good line — a proverb, a verse, a line of a poem — and say it together three times today. Furnish the memory while it's easy to furnish." },
  { trad: 'classical', name: 'Tell two things apart', body: "Ask a distinguishing question: how is a lie different from a mistake? Brave different from not-scared? Fine minds are made of fine distinctions." },
  { trad: 'classical', name: 'Ask why, twice', body: "When they give you an opinion, ask why. When they answer, ask why again — warmly, not as a trap. Two whys is where a reason starts." },
  { trad: 'classical', name: 'Read something old', body: "Read one thing today that's older than everyone in the house — a fable, a myth, a psalm. Old stories survived because they were worth surviving." },
  { trad: 'classical', name: 'Call a good thing good', body: "Point at something and name it as good or beautiful out loud — a kindness, a piece of music, a well-made thing. Taste is trained by hearing it named." },
  { trad: 'classical', name: 'Show self-command out loud', body: "When you feel yourself rising, say it: 'I'm cross, so I'm going to wait a minute before I answer.' They learn the virtue by watching you use it." },
  { trad: 'classical', name: 'Give the true reason', body: "Instead of 'because I said so', give them the actual reason once, plainly. A child who's been given reasons grows into someone who looks for them." },

  // ── Forest school ──
  { trad: 'forest-school', name: 'Five minutes of sitting still', body: "Find a spot outside, sit down together, and say nothing for five minutes. Everything that was hiding starts moving again about minute three." },
  { trad: 'forest-school', name: 'Stand close and say nothing', body: "When they climb higher than you'd like, move close enough to catch them and then keep quiet. 'Be careful' makes children less careful, not more — it moves their attention off the branch and onto you." },
  { trad: 'forest-school', name: 'Go out in the rain on purpose', body: "Not despite the weather — because of it. Puddles, wind, cold hands, then home to warm up. There's no bad weather, only the wrong coat." },
  { trad: 'forest-school', name: 'Hands right in the dirt', body: "Let them dig with bare hands today. Soil, worms, the smell of it. Nothing on a screen has ever taught a child what wet earth feels like." },
  { trad: 'forest-school', name: 'Trust them with a real tool', body: "Give them something genuinely sharp or hot — the vegetable peeler, the candle to blow out, the kettle to watch — with you right there. Real risk, properly supervised, is how judgement is built." },
  { trad: 'forest-school', name: 'Follow the creature', body: "Spot a snail, an ant, a bird, and follow it for as long as it'll let you. Where does it go? What was it doing? A whole afternoon can live inside one beetle." },
  { trad: 'forest-school', name: 'Build with what is there', body: "Make something out of only what you can find on the ground where you're standing. Constraint is what turns a walk into an invention." },
  { trad: 'forest-school', name: 'Ten minutes barefoot', body: "Shoes off on grass, sand, cold tiles, mud. Feet have more nerve endings than almost anywhere else and we keep them in the dark all day." },
  { trad: 'forest-school', name: 'Let them get properly cold', body: "Cold, then warm, then dry — the whole cycle, not just the comfortable middle. Children who've been cold and come home learn their own edges." },
  { trad: 'forest-school', name: 'Let them lead the route', body: "Say 'you choose which way' at every junction and mean it, even when it's the wrong way. The point was never the destination." },

  // ── Unschooling ──
  { trad: 'unschooling', name: 'Say yes to one automatic no', body: "Catch yourself about to say no out of habit rather than reason — and say yes instead. Half our nos are just tiredness wearing a rule's coat." },
  { trad: 'unschooling', name: 'Ask what they would do with the whole day', body: "Ask, listen properly, and then — if you possibly can — let some of it happen. You'll learn more about them in that answer than in a month of activities." },
  { trad: 'unschooling', name: 'Learn something badly in front of them', body: "Try something you're not good at where they can see — a language, a knot, a tune — and be visibly rubbish at it. Children need to watch an adult be a beginner." },
  { trad: 'unschooling', name: 'Cancel the plan', body: "Drop this afternoon's schedule entirely and see what fills the space. Unstructured hours look like nothing happening; they're where children find out what they're drawn to." },
  { trad: 'unschooling', name: 'Answer with a way to find out', body: "Instead of the answer, hand them the route: 'let's look', 'who would know?', 'shall we try it?'. The answer lasts a day; the route lasts a life." },
  { trad: 'unschooling', name: 'Watch what they pick with nothing offered', body: "Offer nothing at all for an hour and simply notice what they choose. That choice is the curriculum they'd write for themselves." },
  { trad: 'unschooling', name: 'Let the interest be useless', body: "Bin lorries, one football player, a single video game character. Don't try to make it educational. Depth of attention is the skill — the subject is incidental." },
  { trad: 'unschooling', name: 'Ask them to teach you', body: "Sit down and be genuinely taught something by your child, with real questions. Teaching is the hardest form of understanding, and they'll rise to it." },
  { trad: 'unschooling', name: "Don't call time", body: "When they're deep in something and you'd normally say 'five more minutes' — don't. Let it end when it ends. Interrupted absorption is a habit too." },
  { trad: 'unschooling', name: 'Let them buy it, plan it, do it', body: "Whatever the small project is, hand them the whole of it — the working out, the ringing up, the mistakes. Competence comes from being trusted with the entire task." },

  // ── Wild + Free ──
  { trad: 'wild-free', name: 'Read aloud over breakfast', body: "Keep a good book beside the table and read a few pages while they eat. No discussion needed. The best part of the day, before the day starts asking for things." },
  { trad: 'wild-free', name: 'Take it outside', body: "Whatever you were going to do indoors — reading, drawing, snack, the hard conversation — take it outside instead. Same thing, different child." },
  { trad: 'wild-free', name: 'Invite another family', body: "Text one family and go somewhere together this week. Children raise each other, and parents need witnesses. Community is not a luxury layer on top." },
  { trad: 'wild-free', name: 'Allow the hour-long mess', body: "Say yes to the thing that will take a long time to clear up. The size of the mess is usually the size of the play." },
  { trad: 'wild-free', name: "Say 'we've got all day'", body: "Use the actual words out loud, even if it's only true for the next hour. Children can hear hurry in a voice, and it shortens everything they do." },
  { trad: 'wild-free', name: 'Put the phone in a drawer', body: "Not face-down — in a drawer, in another room, for one clear hour. Half-attention is the thing children complain about most, decades later." },
  { trad: 'wild-free', name: 'Make something with your hands together', body: "Bread, a plait, a paper boat, a mended sock. Two pairs of hands on the same real object is a different kind of talking." },
  { trad: 'wild-free', name: 'Start a jar of found things', body: "One jar, one shelf, anything they pick up outside. Collecting turns an ordinary walk into a hunt and a season into a record." },
  { trad: 'wild-free', name: 'Walk with no destination', body: "Go for a walk where the honest answer to 'where are we going?' is 'nowhere'. Wandering is a skill and it's being lost." },
  { trad: 'wild-free', name: 'Let the day be enough', body: "Tonight, resist the audit of what didn't get done. Name one good thing that happened instead. What you count out loud is what they'll learn to count." },

  // ── Athens ──
  { trad: 'athens', name: 'Answer with another question', body: "When they ask something, ask one back before you answer: 'what do you think?' You lose ten seconds and gain a thinker." },
  { trad: 'athens', name: 'Ask for an example', body: "Whatever they claim — 'that's not fair', 'she's mean' — ask gently for one example. Moving from the general to the particular is the whole beginning of reasoning." },
  { trad: 'athens', name: 'Let them win an argument', body: "If they make a genuinely good point, concede it out loud: 'you're right, I hadn't thought of that.' A child who has beaten an adult fairly will argue honestly for life." },
  { trad: 'athens', name: 'One question round the table', body: "Ask one real question at the meal and let everyone answer, youngest first. Would you rather, what's the bravest thing, what should we do about it. Talk is the training." },
  { trad: 'athens', name: 'Call it beautiful', body: "Stop at something — a sky, a tune, a well-made loaf — and say plainly that it's beautiful. The Athenians thought loving beautiful things was the beginning of becoming good." },
  { trad: 'athens', name: 'Walk while you think', body: "Take the hard question for a walk. Thinking on the move is older than the classroom and works better than sitting still." },
  { trad: 'athens', name: "Ask 'and then what?'", body: "Follow their idea down the chain: and then what happens? and then? Three links in, they'll find the flaw themselves — which is worth more than you finding it." },
  { trad: 'athens', name: 'Say it together, out loud', body: "Recite something in unison — a rhyme, a list, a line. Voices together fix words in the memory and make learning feel like a thing you belong to." },
  { trad: 'athens', name: 'Take their disagreement seriously', body: "When they contradict you, ask them to make the case properly. Treating a small person's objection as an argument teaches them their thinking counts." },
  { trad: 'athens', name: 'Turn the lesson into a contest', body: "Race it, score it, make it a challenge against yesterday. Athenians trained through games and contest because it works — the effort stops feeling like effort." },

  // ── Rome ──
  { trad: 'rome', name: 'Say what you are doing and why', body: "Narrate one duty out loud: 'I'm ringing Granny because she's on her own today.' Character is transmitted by being seen, and named." },
  { trad: 'rome', name: 'Give them a role in the household', body: "Not a chore — a post. The one who feeds the cat. The one who checks the door. A standing responsibility that the household actually depends on." },
  { trad: 'rome', name: 'Tell a story from your family', body: "Something a grandparent or great-grandparent actually did. Children who know where they came from stand differently in the world." },
  { trad: 'rome', name: 'Keep your word exactly', body: "Whatever you promised this morning — the small thing, the trivial thing — keep it precisely and let them notice. Every kept word is a deposit." },
  { trad: 'rome', name: 'Correct in private', body: "Take them aside rather than correcting them in front of others. Dignity preserved is a lesson learned; dignity lost is a lesson refused." },
  { trad: 'rome', name: 'Let them speak for themselves', body: "In the shop, at the door, on the phone — step back and let them do the talking, even slowly. Being able to speak up in public was the Roman education." },
  { trad: 'rome', name: 'Finish it where they can see', body: "Take one thing you've been putting off and finish it in front of them today. Perseverance is not a talk you give." },
  { trad: 'rome', name: 'Show them your work', body: "Explain what you actually do all day, properly, with the boring parts. Children who've never seen an adult's work assume adulthood is a mystery." },
  { trad: 'rome', name: 'Send them to serve someone', body: "Give them a small errand that helps another person — carry this to next door, hold the door, take this to your sister. Duty is learned in small deliveries." },
  { trad: 'rome', name: 'Praise the character, not the outcome', body: "'You kept going when it got hard' rather than 'well done'. Name the virtue you want more of and you'll get more of it." },

  // ── Future of education ──
  { trad: 'future-of-education', name: 'Stay until it clicks, then stop', body: "Don't work for a length of time — work until they've genuinely got it, then finish immediately, however long that took. Mastery is the unit, not minutes." },
  { trad: 'future-of-education', name: 'Check the one they just did', body: "Mark it now, not later. Feedback within seconds is worth ten times feedback tomorrow, because they can still remember what they were thinking." },
  { trad: 'future-of-education', name: 'Give the whole afternoon away', body: "If the learning got done in the morning, hand the rest of the day over completely. Guilt-free free time is the point of being efficient." },
  { trad: 'future-of-education', name: 'Let them set the goal', body: "Ask what they want to be able to do by Friday, and write it where they can see it. Ownership beats compliance every single time." },
  { trad: 'future-of-education', name: 'Two minutes of hard', body: "Two minutes of the genuinely difficult thing, timed, then absolutely done. Short and hard beats long and vague, and it removes the dread." },
  { trad: 'future-of-education', name: 'Teach a life skill instead', body: "Swap today's lesson for something they'll actually use — reading a receipt, making a phone call, boiling an egg, working out change." },
  { trad: 'future-of-education', name: 'Show the progress, not the score', body: "Point at what they couldn't do a month ago. Progress is motivating; a score out of ten is a verdict." },
  { trad: 'future-of-education', name: 'Let them choose the order', body: "Same three things, but they decide which comes first. Control over sequence costs you nothing and changes the whole mood." },
  { trad: 'future-of-education', name: 'Ask what they want to be good at', body: "Not what they want to be — what they want to be good at. Then find them fifteen minutes a day on it." },
  { trad: 'future-of-education', name: 'Cut it in half', body: "Take whatever you planned and do half of it, properly, with full attention. Almost every lesson is padded, and children can feel the padding." },

]);
