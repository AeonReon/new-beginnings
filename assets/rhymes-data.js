// Rhymes & Songs — the cultural layer.
//
// The little things every generation passed down by mouth and most parents
// half-remember: the knee bounces, the finger games, the counting songs, the
// ones you sing in the car. They cost nothing, need no kit, and fill the small
// gaps in a day that activities are too big for.
//
// Rules:
//   1. WORDS ONLY WHERE PUBLIC DOMAIN. Everything with a `words` block here is
//      traditional or pre-1900. Where authorship is modern or uncertain, leave
//      `words` out and set `wordsNote` — the page then shows search links
//      instead of printing a lyric. Same discipline as the feast poems.
//   2. Every entry carries its real "why" in plain language — what the rhyme
//      is actually doing for a small child, not "because it's traditional".
//   3. "Here at home" is the local group. Family-friendly and shared across
//      the whole community — nothing with a political or sectarian edge.

window.RHYME_GROUPS = {
  Action:  { label: 'Get Them Moving',   c: '#3FBF97', cd: '#2F9E77', cs: '#D8F3E9', blurb: 'Songs with actions — the body learns the words before the mouth does.' },
  Lap:     { label: 'Knee & Finger',     c: '#FF5E8E', cd: '#C93E6A', cs: '#FFE2EC', blurb: 'Bounces, tickles and finger games. Close, silly, and over in a minute.' },
  Count:   { label: 'Counting Songs',    c: '#4A9ED4', cd: '#2D6FA8', cs: '#E4F1FA', blurb: 'Number sense smuggled in through a tune, long before anyone calls it maths.' },
  Calm:    { label: 'Winding Down',      c: '#8B6FD1', cd: '#5B3FA8', cs: '#EDE8FA', blurb: 'The slow ones. For the car seat, the bath, and the last ten minutes of the day.' },
  Classic: { label: 'The Old Rhymes',    c: '#F5B21E', cd: '#B4790A', cs: '#FFF3CE', blurb: 'The ones everybody half-knows. Odd, funny, and hundreds of years old.' },
  Local:   { label: 'Here at Home',      c: '#E8894A', cd: '#B45309', cs: '#FEEBD6', blurb: 'Irish and Ulster songs children have sung on these streets for generations.' }
};

window.RHYME_TRAITS = [
  'Rhyme & rhythm', 'Vocabulary', 'Listening', 'Memory', 'Counting',
  'Body parts', 'Turn-taking', 'Fine motor', 'Whole body', 'Closeness',
  'Anticipation', 'Sequencing', 'Story sense'
];

window.RHYMES = [

  // ── Get Them Moving ────────────────────────────────────────────────────
  {
    group: 'Action', emoji: '🙆', name: 'Head, Shoulders, Knees and Toes',
    when: 'Anytime', moves: 'Whole body', age: '2–5',
    how: "Touch each part as you name it, in order, all the way down and back up. Then sing it again a bit faster. Then faster still, until nobody can keep up and everyone is laughing.",
    why: "Naming a body part while touching it is how the word and the place get wired to each other. The speeding-up is not just fun — going faster forces the child to hold the whole sequence in their head and their body at once, which is real concentration work dressed up as a game.",
    words: "Head, shoulders, knees and toes,\nKnees and toes.\nHead, shoulders, knees and toes,\nKnees and toes.\nAnd eyes and ears and mouth and nose,\nHead, shoulders, knees and toes,\nKnees and toes.",
    origin: 'Traditional. The tune is the old song "There Is a Tavern in the Town".',
    traits: ['Body parts', 'Whole body', 'Memory', 'Rhyme & rhythm'],
    tweak: "Younger: slowly, and let them touch your head and toes instead of their own. Older: drop one word each round and just touch that part in silence."
  },
  {
    group: 'Action', emoji: '👏', name: "If You're Happy and You Know It",
    when: 'Anytime', moves: 'Whole body', age: '2–5',
    how: "Clap hands, stamp feet, nod your head, shout hooray — a new action each verse. Let the child invent the next one and everyone has to do it.",
    why: "Letting the child choose the next action turns a song into a turn where they lead and adults follow. That reversal is unusual in a small child's day and it is worth a great deal — it is the same pleasure as being listened to.",
    words: "If you're happy and you know it, clap your hands.\nIf you're happy and you know it, clap your hands.\nIf you're happy and you know it,\nAnd you really want to show it,\nIf you're happy and you know it, clap your hands.",
    origin: 'Traditional, widely sung from the mid-twentieth century.',
    traits: ['Whole body', 'Turn-taking', 'Listening', 'Rhyme & rhythm'],
    tweak: "Swap the feeling: if you're sleepy, if you're grumpy, if you're excited. Naming feelings in a silly song is easier than naming them cold."
  },
  {
    group: 'Action', emoji: '🕷️', name: 'Incy Wincy Spider',
    when: 'Anytime', moves: 'Hand actions', age: '2–5',
    how: "Walk your fingers up in the air for the spider, wiggle them down for the rain, sweep your arms wide for washing him out, then lift them up for the sun.",
    why: "This is a whole small story in four lines — climb, fall, dry, climb again — and children ask for it endlessly because the ending puts everything right. The finger-walking is also proper fine-motor work: opposing finger and thumb, over and over.",
    words: "Incy Wincy Spider climbed up the water spout.\nDown came the rain and washed poor Incy out.\nOut came the sunshine and dried up all the rain,\nSo Incy Wincy Spider climbed up the spout again.",
    origin: 'Traditional. Known as Itsy Bitsy Spider in America.',
    traits: ['Fine motor', 'Story sense', 'Sequencing', 'Rhyme & rhythm'],
    tweak: "Do it on their back — fingers climbing up, rain tapping down. Most children go very still for this one."
  },
  {
    group: 'Action', emoji: '🚣', name: 'Row, Row, Row Your Boat',
    when: 'Anytime', moves: 'Whole body', age: '2–5',
    how: "Sit facing each other, hold hands, feet touching, and rock backwards and forwards in time. On the last line, tip sideways and both fall over.",
    why: "Rocking in time with another person is one of the earliest kinds of cooperation there is — you cannot do it alone and you cannot do it out of time. It also gives a child the beat of a song through their whole body rather than only their ears.",
    words: "Row, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream.",
    origin: 'Traditional, printed from the 1850s.',
    traits: ['Whole body', 'Turn-taking', 'Rhyme & rhythm', 'Closeness'],
    tweak: "The silly verse — \"if you see a crocodile, don't forget to scream\" — is the one they will ask for. Scream on cue."
  },
  {
    group: 'Action', emoji: '💐', name: "Ring a Ring o' Roses",
    when: 'Anytime', moves: 'Whole body', age: '2–5',
    how: "Hold hands in a circle and walk round. On the last line everybody falls down. Get up, and go again — you will be going again for some time.",
    why: "The whole song exists for one moment, and every child knows it is coming. Waiting for a thing you know is about to happen, and holding still until it does, is the beginning of self-control — and it is far easier to practise when the wait ends in falling over.",
    words: "Ring a ring o' roses,\nA pocket full of posies,\nA-tishoo! A-tishoo!\nWe all fall down.",
    origin: "Traditional. The popular story linking it to the plague is almost certainly a later invention — the rhyme is not recorded until the nineteenth century.",
    traits: ['Whole body', 'Anticipation', 'Turn-taking', 'Rhyme & rhythm'],
    tweak: "With one child, hold both hands and spin slowly. Works just as well and makes the falling-over funnier."
  },
  {
    group: 'Action', emoji: '🧵', name: 'Wind the Bobbin Up',
    when: 'Anytime', moves: 'Hand actions', age: '2–5',
    how: "Roll your fists over each other to wind, pull your hands apart twice, clap three times, then point to the ceiling, the floor, the window and the door.",
    why: "The pointing at the end is the useful part. It asks a child to hold four words in order and match each to a real thing in the room, which is listening, memory and naming all at once — and they think they are just pointing.",
    words: "Wind the bobbin up, wind the bobbin up,\nPull, pull, clap, clap, clap.\nWind it back again, wind it back again,\nPull, pull, clap, clap, clap.\nPoint to the ceiling, point to the floor,\nPoint to the window, point to the door.",
    origin: 'Traditional English, from the mill towns.',
    traits: ['Fine motor', 'Listening', 'Memory', 'Vocabulary'],
    tweak: "Change the last two things to something in your own room — point to the kettle, point to the cat."
  },
  {
    group: 'Action', emoji: '🐦', name: 'Two Little Dicky Birds',
    when: 'Anytime', moves: 'Hand actions', age: '2–4',
    how: "A finger up on each hand for the two birds. One flies away behind your back, then the other, then each comes back. Small children watch your hands like a magic trick.",
    why: "A thing goes out of sight and then returns. Very young children are genuinely working out whether hidden things still exist, and this rhyme rehearses that question and answers it kindly, over and over.",
    words: "Two little dicky birds sitting on a wall,\nOne named Peter, one named Paul.\nFly away Peter, fly away Paul,\nCome back Peter, come back Paul.",
    origin: 'Traditional, recorded from the eighteenth century.',
    traits: ['Fine motor', 'Anticipation', 'Memory', 'Rhyme & rhythm'],
    tweak: "Use their own name and yours for the two birds. It lands completely differently."
  },
  {
    group: 'Action', emoji: '🚌', name: 'The Wheels on the Bus',
    when: 'In the car', moves: 'Hand actions', age: '2–5',
    how: "Round and round for the wheels, open and shut for the doors, swish for the wipers, up and down for the people. Then let the child name the next thing on the bus and invent its action.",
    why: "It is a list song, and list songs let a child add their own verse without breaking anything. That is a very early kind of authorship — the song is now partly theirs, and children treat a song they helped make quite differently from one handed to them.",
    wordsNote: "The words are more recent than most rhymes here and the versions vary a lot between families, so we've not printed a fixed set. The tune and the actions are the part that matters — sing whichever verses you grew up with.",
    origin: 'Twentieth century, and now sung in dozens of versions.',
    traits: ['Fine motor', 'Vocabulary', 'Sequencing', 'Turn-taking'],
    tweak: "On a real bus or in the car, sing about what you can actually see out of the window."
  },

  // ── Knee & Finger ──────────────────────────────────────────────────────
  {
    group: 'Lap', emoji: '🐷', name: 'This Little Piggy',
    when: 'Bath & bed', moves: 'Sit still', age: '2–4',
    how: "One toe at a time, starting with the big one. On the last little piggy, run your fingers all the way up their leg and tickle.",
    why: "Every line is a countdown to the same ending, and the child knows exactly where it stops. That knowing is the whole pleasure — the tickle is almost beside the point. Anticipation held and then released is one of the earliest jokes a person ever gets.",
    words: "This little piggy went to market,\nThis little piggy stayed at home,\nThis little piggy had roast beef,\nThis little piggy had none,\nAnd this little piggy cried wee wee wee, all the way home.",
    origin: 'Traditional, printed from around 1760.',
    traits: ['Anticipation', 'Closeness', 'Counting', 'Rhyme & rhythm'],
    tweak: "Slow right down on the fourth piggy. Drawing out the wait is what they are actually there for."
  },
  {
    group: 'Lap', emoji: '🌷', name: 'Round and Round the Garden',
    when: 'Bath & bed', moves: 'Sit still', age: '2–4',
    how: "Circle your finger round and round their open palm, then walk it up their arm in two hops — one step, two step — and tickle under the arm.",
    why: "Same shape as the piggies and just as good: a slow, predictable build to a known ending. Doing it on the palm and inner arm also gives a lot of light touch, which most young children find genuinely settling.",
    words: "Round and round the garden,\nLike a teddy bear.\nOne step, two step,\nTickle you under there!",
    origin: 'Traditional British, twentieth century.',
    traits: ['Anticipation', 'Closeness', 'Fine motor', 'Rhyme & rhythm'],
    tweak: "Let them do it to you. Doing the tickling rather than getting it is a different and equally good game."
  },
  {
    group: 'Lap', emoji: '🥮', name: 'Pat-a-cake',
    when: 'Anytime', moves: 'Hand actions', age: '2–4',
    how: "Clap together, roll your hands, and on the last line write their initial on their palm and give it a pat.",
    why: "Clapping with another person — hands meeting in time, not just noise — needs the child to watch, predict and match. It is one of the first things a small child does in time with someone else, and marking their own letter at the end makes the song about them.",
    words: "Pat-a-cake, pat-a-cake, baker's man,\nBake me a cake as fast as you can.\nPat it and prick it and mark it with B,\nAnd put it in the oven for baby and me.",
    origin: 'Traditional. One of the oldest here — printed in 1698.',
    traits: ['Fine motor', 'Turn-taking', 'Closeness', 'Rhyme & rhythm'],
    tweak: "Swap the B for the first letter of their name, every single time. That is the bit they remember."
  },
  {
    group: 'Lap', emoji: '🐎', name: 'This Is the Way the Ladies Ride',
    when: 'Anytime', moves: 'Whole body', age: '2–4',
    how: "Bounce them on your knee — gently and smoothly for the ladies, a bit brisker for the gentlemen, then fast and bumpy for the farmers, and at the end open your knees and let them drop down into the ditch.",
    why: "Three different rhythms in one short song, and the child feels the difference through their whole body rather than being told it. Long before anyone talks about fast and slow, they have already had both in their legs.",
    words: "This is the way the ladies ride, nim nim nim.\nThis is the way the gentlemen ride, trot trot trot.\nThis is the way the farmers ride, gallop-a-trot, gallop-a-trot —\nAnd down into the ditch!",
    origin: 'Traditional knee-bounce, in many regional versions.',
    traits: ['Whole body', 'Anticipation', 'Rhyme & rhythm', 'Closeness'],
    tweak: "Hold them properly for the drop, and make the ditch small. The point is the surprise, not the fall."
  },
  {
    group: 'Lap', emoji: '👍', name: 'Tommy Thumb',
    when: 'Anytime', moves: 'Hand actions', age: '2–4',
    how: "Hands behind your back, then bring out one finger at a time as it is called — thumb, pointer, tall one, ring one, baby — and waggle it as it answers.",
    why: "Lifting one finger at a time while the others stay down is surprisingly hard at three, and it is exactly the control a child needs later for holding a pencil. Giving each finger a name and a voice makes them worth practising.",
    words: "Tommy Thumb, Tommy Thumb, where are you?\nHere I am, here I am, how do you do?",
    origin: 'Traditional English finger rhyme.',
    traits: ['Fine motor', 'Turn-taking', 'Memory', 'Rhyme & rhythm'],
    tweak: "Go through all five, then finish with \"Fingers all, fingers all\" and wave both hands."
  },

  // ── Counting Songs ─────────────────────────────────────────────────────
  {
    group: 'Count', emoji: '🐟', name: 'One, Two, Three, Four, Five',
    when: 'Anytime', moves: 'Hand actions', age: '2–5',
    how: "Count up on your fingers, then back down, then shake your hand as if it has been bitten and hold up the little finger at the end.",
    why: "Counting up and then straight back down is the useful part. Plenty of children can chant to ten but have no idea it works backwards too, and going down is what turns a memorised list into an actual sense of order.",
    words: "One, two, three, four, five,\nOnce I caught a fish alive.\nSix, seven, eight, nine, ten,\nThen I let it go again.\nWhy did you let it go?\nBecause it bit my finger so.\nWhich finger did it bite?\nThis little finger on my right.",
    origin: 'Traditional, from the early nineteenth century.',
    traits: ['Counting', 'Sequencing', 'Fine motor', 'Rhyme & rhythm'],
    tweak: "Hold up the fingers as you go and let them count yours rather than their own."
  },
  {
    group: 'Count', emoji: '🦆', name: 'Five Little Ducks',
    when: 'In the car', moves: 'Hand actions', age: '2–5',
    how: "Five fingers for five ducks, and one goes away each verse. On the last verse all five come back and everybody cheers.",
    why: "Taking one away each time and seeing what is left is subtraction, done entirely by ear years before anyone writes it down. And the ducks all coming back at the end matters more than the maths — a small child following a story about someone's children going missing needs that ending.",
    words: "Five little ducks went swimming one day,\nOver the hills and far away.\nMother duck said \"Quack quack quack quack\",\nBut only four little ducks came back.",
    origin: 'Traditional counting song.',
    traits: ['Counting', 'Sequencing', 'Memory', 'Story sense'],
    tweak: "Let them be the mother duck and do the quacking. It is the loudest job and they will want it."
  },
  {
    group: 'Count', emoji: '🍞', name: 'Five Currant Buns',
    when: 'Anytime', moves: 'Hand actions', age: '2–5',
    how: "Line up five somethings — cushions, blocks, actual buns — and let them hand over a penny and take one away each verse.",
    why: "This one puts real objects in their hands, so the number is not just a word in a song. Giving a coin and getting a thing is also a child's first grasp of buying, which is a genuinely useful idea and much easier to meet in a song than in a shop.",
    words: "Five currant buns in a baker's shop,\nRound and fat with a cherry on the top.\nAlong came a boy with a penny one day,\nBought a currant bun and took it away.",
    origin: 'Traditional counting song.',
    traits: ['Counting', 'Sequencing', 'Vocabulary', 'Turn-taking'],
    tweak: "Do it with real buns once. They will remember that version for years."
  },
  {
    group: 'Count', emoji: '👞', name: 'One, Two, Buckle My Shoe',
    when: 'Anytime', moves: 'Sit still', age: '3–5',
    how: "Count in pairs, doing the action for each — buckling, knocking, picking up sticks — all the way to twenty if they will stay with you.",
    why: "The numbers are pinned to actions rather than floating loose, so the sequence has something to hang on. It is also one of the few rhymes that goes past ten, which is where most children's counting quietly stops.",
    words: "One, two, buckle my shoe.\nThree, four, knock at the door.\nFive, six, pick up sticks.\nSeven, eight, lay them straight.\nNine, ten, a big fat hen.",
    origin: 'Traditional, printed from 1805.',
    traits: ['Counting', 'Sequencing', 'Memory', 'Rhyme & rhythm'],
    tweak: "Stop at ten for a while. Going to twenty before ten is solid does not help."
  },
  {
    group: 'Count', emoji: '🍾', name: 'Ten Green Bottles',
    when: 'In the car', moves: 'Sit still', age: '3–5',
    how: "Start at ten and work down. It is long, which is the point — it is the classic car song for exactly that reason.",
    why: "Counting down from ten by ones, ten times over, is a lot of repetition that nobody experiences as drill. By the end of a car journey a child has rehearsed the backwards sequence more times than any worksheet would ever manage.",
    words: "Ten green bottles hanging on the wall,\nTen green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere'd be nine green bottles hanging on the wall.",
    origin: 'Traditional.',
    traits: ['Counting', 'Sequencing', 'Memory', 'Listening'],
    tweak: "Start at five with a younger child. Ten verses is a long way when you are three."
  },

  // ── Winding Down ───────────────────────────────────────────────────────
  {
    group: 'Calm', emoji: '⭐', name: 'Twinkle, Twinkle, Little Star',
    when: 'Bath & bed', moves: 'Sit still', age: '2–5',
    how: "Open and close your hands slowly for the twinkling. Sing it slower than feels natural, and let the last line trail off.",
    why: "It is the same tune as the alphabet song and as Baa Baa Black Sheep, so a child who knows this one already has the shape of three songs. Sung slowly at the end of a day it also does the plain physical work of slowing your own voice, which is what they copy.",
    words: "Twinkle, twinkle, little star,\nHow I wonder what you are.\nUp above the world so high,\nLike a diamond in the sky.\nTwinkle, twinkle, little star,\nHow I wonder what you are.",
    origin: 'Words by Jane Taylor, 1806. The tune is an older French melody.',
    traits: ['Rhyme & rhythm', 'Vocabulary', 'Closeness', 'Memory'],
    tweak: "Point out that it shares a tune with the alphabet song. Older children find this genuinely astonishing."
  },
  {
    group: 'Calm', emoji: '🕊️', name: 'Hush, Little Baby',
    when: 'Bath & bed', moves: 'Sit still', age: '2–5',
    how: "Sing it low and slow, and keep going — each verse promises another thing, and the list can be as long as you need it to be.",
    why: "Because every verse follows the same pattern, you can make up new ones forever without the child minding, which makes it the most useful song in the house when someone will not settle. The promise underneath it never changes: something goes wrong, and someone puts it right.",
    words: "Hush, little baby, don't say a word,\nPapa's going to buy you a mockingbird.\nAnd if that mockingbird won't sing,\nPapa's going to buy you a diamond ring.",
    origin: 'Traditional lullaby.',
    traits: ['Closeness', 'Sequencing', 'Vocabulary', 'Rhyme & rhythm'],
    tweak: "Swap in real things from your own house and their own day. It works just as well and lasts longer."
  },
  {
    group: 'Calm', emoji: '🌛', name: 'Rock-a-bye Baby',
    when: 'Bath & bed', moves: 'Sit still', age: '2–4',
    how: "Rock slowly and steadily as you sing, and stay in the same rhythm all the way through.",
    why: "The steady rocking is doing more than the words. A slow, even rhythm from a calm adult is the thing a small child borrows to settle — the song is mainly a way of keeping you rocking at the same speed for long enough.",
    words: "Rock-a-bye baby, on the treetop,\nWhen the wind blows, the cradle will rock.\nWhen the bough breaks, the cradle will fall,\nAnd down will come baby, cradle and all.",
    origin: 'Traditional, printed from 1765.',
    traits: ['Closeness', 'Rhyme & rhythm', 'Listening'],
    tweak: "The words are famously alarming if you stop and think about them. Most children never do — but if yours does, make up a gentler last line together."
  },
  {
    group: 'Calm', emoji: '💤', name: 'Golden Slumbers',
    when: 'Bath & bed', moves: 'Sit still', age: '2–5',
    how: "Very quietly, sitting beside them in the dark. Four lines, then stop.",
    why: "It is short, which matters at the end of a long day — a long song invites a request for another. And it is four hundred years old, which is worth knowing: you are doing the plainest thing a parent has ever done.",
    words: "Golden slumbers kiss your eyes,\nSmiles await you when you rise.\nSleep, pretty baby, do not cry,\nAnd I will sing a lullaby.",
    origin: 'Thomas Dekker, 1603.',
    traits: ['Closeness', 'Rhyme & rhythm', 'Vocabulary'],
    tweak: "Sing the same one every night for a month. Familiarity is the whole active ingredient at bedtime."
  },

  // ── The Old Rhymes ─────────────────────────────────────────────────────
  {
    group: 'Classic', emoji: '🥚', name: 'Humpty Dumpty',
    when: 'Anytime', moves: 'Sit still', age: '2–5',
    how: "Say it rather than sing it. Sit something on the edge of the table and knock it off on the second line.",
    why: "Four lines, and a complete story with a beginning, a disaster and an ending that does not get fixed. Children meet very few stories that do not come right, and this one lets them meet that idea safely, in rhyme, about an egg.",
    words: "Humpty Dumpty sat on a wall,\nHumpty Dumpty had a great fall.\nAll the king's horses and all the king's men\nCouldn't put Humpty together again.",
    origin: 'Traditional, printed from 1797. The rhyme never actually says he is an egg.',
    traits: ['Story sense', 'Rhyme & rhythm', 'Memory', 'Vocabulary'],
    tweak: "Ask them what Humpty was. Nothing in the words says egg — the picture books added that."
  },
  {
    group: 'Classic', emoji: '🪣', name: 'Jack and Jill',
    when: 'Anytime', moves: 'Sit still', age: '2–5',
    how: "Say it with a big fall in your voice on \"came tumbling after\".",
    why: "It is a small piece of a world children no longer see — fetching water from a well up a hill, because there was no tap. Rhymes are one of the few places a child meets how life used to work, and they take it in without needing it explained.",
    words: "Jack and Jill went up the hill\nTo fetch a pail of water.\nJack fell down and broke his crown,\nAnd Jill came tumbling after.",
    origin: 'Traditional, printed from 1765.',
    traits: ['Story sense', 'Rhyme & rhythm', 'Vocabulary', 'Memory'],
    tweak: "Tell them what a pail is and where the water came from. That is the interesting half."
  },
  {
    group: 'Classic', emoji: '🐄', name: 'Hey Diddle Diddle',
    when: 'Anytime', moves: 'Sit still', age: '2–5',
    how: "Straight through, quickly, with a laugh at the cow.",
    why: "It is deliberate nonsense, and a child has to already know that cows do not jump over moons for it to be funny. Enjoying it is proof they have a working picture of how the world normally goes — nonsense only works against a solid sense of sense.",
    words: "Hey diddle diddle, the cat and the fiddle,\nThe cow jumped over the moon.\nThe little dog laughed to see such fun,\nAnd the dish ran away with the spoon.",
    origin: 'Traditional, printed from 1765.',
    traits: ['Rhyme & rhythm', 'Story sense', 'Vocabulary', 'Memory'],
    tweak: "Ask which bit could really happen. Sorting the possible from the silly is the game."
  },
  {
    group: 'Classic', emoji: '🕸️', name: 'Little Miss Muffet',
    when: 'Anytime', moves: 'Sit still', age: '2–5',
    how: "Creep your fingers in as the spider and sit them down beside her.",
    why: "A very small fright with a very safe ending, entirely under the child's control because they already know how it goes. Meeting a frightening thing in a rhyme you have heard fifty times is how a child practises being a bit scared and coming out fine.",
    words: "Little Miss Muffet sat on a tuffet,\nEating her curds and whey.\nAlong came a spider who sat down beside her\nAnd frightened Miss Muffet away.",
    origin: 'Traditional, printed from 1805.',
    traits: ['Story sense', 'Rhyme & rhythm', 'Vocabulary', 'Anticipation'],
    tweak: "Curds and whey is just very lumpy milk. Say so — children like knowing."
  },
  {
    group: 'Classic', emoji: '🐑', name: 'Baa, Baa, Black Sheep',
    when: 'Anytime', moves: 'Sit still', age: '2–5',
    how: "Hold up three fingers for the three bags and count them off.",
    why: "Same tune as Twinkle Twinkle and the alphabet song, so it reinforces a shape the child already has. It also has a plain question-and-answer form, which is a very early model of how a conversation goes: one person asks, the other answers properly.",
    words: "Baa, baa, black sheep, have you any wool?\nYes sir, yes sir, three bags full.\nOne for the master, one for the dame,\nAnd one for the little boy who lives down the lane.",
    origin: 'Traditional, printed from 1744.',
    traits: ['Counting', 'Rhyme & rhythm', 'Turn-taking', 'Memory'],
    tweak: "Take the question and give them the answer. Swapping parts makes it a conversation rather than a recital."
  },
  {
    group: 'Classic', emoji: '🐏', name: 'Mary Had a Little Lamb',
    when: 'Anytime', moves: 'Sit still', age: '2–5',
    how: "Sing it through, then tell them the lamb followed her to school and everybody laughed.",
    why: "Unlike most rhymes here, this one is a proper little narrative with a character who wants something — the lamb loves Mary and will not leave her. Following one character's want through several verses is the beginning of following a book.",
    words: "Mary had a little lamb, its fleece was white as snow.\nAnd everywhere that Mary went, the lamb was sure to go.\nIt followed her to school one day, which was against the rule.\nIt made the children laugh and play to see a lamb at school.",
    origin: 'Sarah Josepha Hale, 1830.',
    traits: ['Story sense', 'Sequencing', 'Rhyme & rhythm', 'Vocabulary'],
    tweak: "Ask why the lamb followed her. It is the first \"why does this character do that\" question, and it is an easy one."
  },
  {
    group: 'Classic', emoji: '🐔', name: 'Old MacDonald Had a Farm',
    when: 'In the car', moves: 'Sit still', age: '2–5',
    how: "A new animal each verse, and the child picks it and makes the noise. Keep piling the old animals on the end if you can remember them.",
    why: "The child chooses the animal, so they are steering the song. And the piling-up version — every previous animal repeated each time — is real memory work, the same shape as any game where the list gets longer and you must hold it all.",
    words: "Old MacDonald had a farm, E-I-E-I-O.\nAnd on that farm he had a cow, E-I-E-I-O.\nWith a moo moo here and a moo moo there,\nHere a moo, there a moo, everywhere a moo moo.\nOld MacDonald had a farm, E-I-E-I-O.",
    origin: 'Traditional, in versions going back to the eighteenth century.',
    traits: ['Vocabulary', 'Memory', 'Sequencing', 'Turn-taking'],
    tweak: "Let them put a ridiculous animal on the farm. An elephant on a farm in County Down is a good joke when you are four."
  },
  {
    group: 'Classic', emoji: '🕰️', name: 'Hickory Dickory Dock',
    when: 'Anytime', moves: 'Hand actions', age: '2–4',
    how: "Run your fingers up their arm for the mouse, clap once for the clock striking, and run them back down.",
    why: "It is built almost entirely out of sound — hickory, dickory, dock — which is nonsense chosen for its rhythm rather than its meaning. Playing with the noise of words on its own is the ear-work that reading rests on later.",
    words: "Hickory dickory dock,\nThe mouse ran up the clock.\nThe clock struck one,\nThe mouse ran down,\nHickory dickory dock.",
    origin: 'Traditional, printed from 1744.',
    traits: ['Rhyme & rhythm', 'Fine motor', 'Listening', 'Counting'],
    tweak: "Change the number — the clock strikes two, and two mice run down. They will correct you if you get it wrong, which is the game."
  },

  // ── Here at Home ───────────────────────────────────────────────────────
  {
    group: 'Local', emoji: '💃', name: "I'll Tell Me Ma",
    when: 'Anytime', moves: 'Whole body', age: '3–5',
    how: "A street song, so sing it loudly and swing them round on the chorus. Traditionally sung with children skipping in a ring.",
    why: "This is a song children sang on these streets, in this city, for well over a hundred years — and it is about a child, and their friends, and who is chasing whom in the playground. It hands a child something that belongs to where they actually live.",
    words: "I'll tell me ma when I go home,\nThe boys won't leave the girls alone.\nThey pulled my hair, they stole my comb,\nBut that's all right till I go home.\nShe is handsome, she is pretty,\nShe is the belle of Belfast city.",
    origin: 'Traditional street song, long associated with Belfast.',
    traits: ['Whole body', 'Rhyme & rhythm', 'Memory', 'Story sense'],
    tweak: "Put your own town in place of Belfast. Every place that sings it does."
  },
  {
    group: 'Local', emoji: '🪗', name: 'The Wee Falorie Man',
    when: 'Anytime', moves: 'Whole body', age: '3–5',
    how: "Bounce along with it. It is short and repetitive, so it comes quickly.",
    why: "An Ulster street rhyme in plain local speech, with words a child will not meet anywhere else. Songs like this carry the sound of how people here actually talk, which no imported nursery collection will ever do.",
    words: "I am the wee falorie man,\nA rattling roving Irishman.\nI can do all that ever you can,\nFor I am the wee falorie man.",
    origin: 'Traditional Ulster street song.',
    traits: ['Rhyme & rhythm', 'Vocabulary', 'Whole body', 'Memory'],
    tweak: "Nobody agrees what a falorie man is. Let them decide, and draw him."
  },
  {
    group: 'Local', emoji: '🎻', name: 'Michael Finnegan',
    when: 'In the car', moves: 'Sit still', age: '3–5',
    how: "Sing it, and at \"begin again\" go straight back to the start. Keep going until somebody gives in.",
    why: "It is a song with no ending, and a four-year-old finds that genuinely hilarious the first time they realise it. Working out that the song is a loop — and that the joke is on whoever keeps singing — is a real piece of thinking.",
    words: "There was an old man called Michael Finnegan,\nHe grew whiskers on his chin-egan.\nThe wind came out and blew them in again,\nPoor old Michael Finnegan — begin again!",
    origin: 'Traditional.',
    traits: ['Rhyme & rhythm', 'Memory', 'Listening', 'Story sense'],
    tweak: "Let them be the one who decides when to stop. Handing over that power is the funniest version."
  },
  {
    group: 'Local', emoji: '🌳', name: "The Rattlin' Bog",
    when: 'Anytime', moves: 'Sit still', age: '4–5',
    how: "Each verse adds one thing and then lists everything backwards to the bog. Tree, branch, twig, nest, egg, bird, feather.",
    why: "This is the hardest memory game in the whole section and children love being beaten by it. Holding a growing list and reciting it in reverse order is proper concentration work, and the song makes failing at it funny rather than discouraging.",
    words: "Ho ro the rattlin' bog, the bog down in the valley-o.\nAnd in that bog there was a tree, a rare tree, a rattlin' tree,\nWith the tree in the bog, and the bog down in the valley-o.",
    origin: 'Traditional Irish cumulative song.',
    traits: ['Memory', 'Sequencing', 'Vocabulary', 'Rhyme & rhythm'],
    tweak: "Start with only three things and add one a week. The full version is genuinely hard for adults."
  },
  {
    group: 'Local', emoji: '⛵', name: 'Báidín Fheilimí',
    when: 'Anytime', moves: 'Sit still', age: '3–5',
    how: "A gentle Irish-language song about Feilimí's little boat sailing to the islands. Rock your hands like a small boat on the water.",
    why: "A child's ear takes in the sounds of a second language far more easily now than it will later, and a song is the easiest possible way in — no meaning needs explaining for the sounds to go in. It is also simply a lovely tune about a small boat.",
    words: "Báidín Fheilimí d'imigh go Gabhla,\nBáidín Fheilimí is Feilimí ann.\nBáidín bídeach, báidín beosach,\nBáidín bóidheach, báidín Fheilimí.",
    origin: 'Traditional Irish, from Donegal. The little boat sails to Gola Island.',
    traits: ['Listening', 'Vocabulary', 'Rhyme & rhythm', 'Closeness'],
    tweak: "Do not worry about the pronunciation being perfect. Singing it imperfectly is far better than not singing it."
  }

];
