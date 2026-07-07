// Out-loud "mind games" to play with a 3–5 year old — no kit, no screen.
// Every game carries the FIRST-PRINCIPLES reason it helps: the actual skill it
// builds and the mechanism, not "experts say". If a "why" can't be grounded in
// something a reasoning parent could test, it doesn't belong here.
//
// Fields:
//   group  — one of: Words, Focus, Thinking, Heart  (drives the accent colour)
//   name   — short, sayable
//   how    — exactly how to play, turn-taking mechanic included
//   why    — the developmental reason, with the mechanism named
//   traits — from the controlled list below
//   where  — Car | Waiting | Walk/Garden | Mealtime | Anytime
//   age    — "3–5" or "4–5" (4–5 = needs more language first)
//   turns  — true if it's a proper take-turns round game
//   tweak  — one easier/harder variation

window.GAME_GROUPS = {
  Words:    { label: 'Words & Reading',       c: '#4A9ED4', cd: '#2D6FA8', cs: '#E0F0FA', blurb: 'Sounds, vocabulary, rhyme and story — the ground reading grows from.' },
  Focus:    { label: 'Memory & Self-Control',  c: '#FF9F3D', cd: '#C97D2A', cs: '#FFF6D9', blurb: 'Holding a rule, waiting a turn, remembering in order — the "school-ready" muscles.' },
  Thinking: { label: 'Thinking, Maths & Space', c: '#4CCB9F', cd: '#2F9E77', cs: '#D5F4E6', blurb: 'Reasoning, number sense and picturing things in the mind.' },
  Heart:    { label: 'Imagination & Heart',    c: '#FF5E8E', cd: '#C93E6A', cs: '#FFE0EB', blurb: 'Invention, seeing through another\'s eyes, naming feelings, wonder.' }
};

window.GAME_TRAITS = [
  'Vocabulary', 'Phonological awareness', 'Memory', 'Categorisation',
  'Reasoning', 'Numeracy', 'Spatial', 'Imagination',
  'Social-emotional', 'Observation', 'Self-regulation'
];

window.GAMES = [

  // ─────────────── WORDS & READING ───────────────
  {
    group: 'Words', name: 'I Spy', turns: true, age: '3–5',
    how: 'Pick something you can see and say "I spy with my little eye, something… blue" (colour), or "…something beginning with sss" (sound). The child names things until they get it, then it\'s their turn to be the spy.',
    why: 'The sound version makes the child isolate the first sound of words (sss → sun, sock, stone). That initial-sound isolation is phonological awareness — the single strongest predictor of how easily a child learns to read.',
    traits: ['Phonological awareness', 'Vocabulary', 'Observation', 'Reasoning'],
    where: ['Car', 'Waiting', 'Walk/Garden', 'Anytime'],
    tweak: 'Colour version from 3; the sound version once they can hear first sounds, around 4.'
  },
  {
    group: 'Words', name: 'Name All The…', turns: true, age: '3–5',
    how: 'Choose a category — vegetables, animals, things that are cold, things with wheels — and take turns naming one each, back and forth, no repeats, until someone runs dry. Then pick a new category.',
    why: 'Retrieving many members of one category strengthens the child\'s semantic network — words are stored in the brain in linked clusters, and pulling them up on demand deepens vocabulary and the categorisation that underpins reading comprehension.',
    traits: ['Vocabulary', 'Categorisation', 'Memory'],
    where: ['Car', 'Waiting', 'Mealtime', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: let repeats count for a young 3. Harder: narrow it ("green vegetables") or ban the obvious answers.'
  },
  {
    group: 'Words', name: 'I Went To The Shop', turns: true, age: '4–5',
    how: 'First player: "I went to the shop and bought… an apple." Next repeats the whole list and adds one: "…an apple and a banana." Keep going round, each turn reciting everything in order then adding one more, until the list collapses.',
    why: 'Holding a growing ordered list in mind and reciting it back is direct training of verbal working memory — the mental workspace a child later uses to hold a sentence together while decoding it, so nothing is lost by the full stop.',
    traits: ['Memory', 'Vocabulary', 'Self-regulation'],
    where: ['Car', 'Waiting', 'Mealtime'],
    tweak: 'Easier: cap at three items, or allow a first-sound hint. Harder: go in alphabet order (apple, bread, cake…).'
  },
  {
    group: 'Words', name: 'Rhyme Time', turns: true, age: '3–5',
    how: 'Say a word; the child fires back anything that rhymes — "cat… hat!" Then they give you one. Nonsense words count and are encouraged ("cat, hat, zat, blat") — the sound is what matters, not the meaning.',
    why: 'Rhyming makes the child attend to the ending chunk of a word and swap the front — phonological awareness at the onset-rime level, the exact skill that later lets them read whole word families (cat, hat, mat) by analogy instead of letter by letter.',
    traits: ['Phonological awareness', 'Vocabulary', 'Imagination'],
    where: ['Car', 'Waiting', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: you offer two words and they say if they rhyme. Harder: build a chain, each rhyme leading to the next.'
  },
  {
    group: 'Words', name: 'What Starts With…?', turns: true, age: '4–5',
    how: 'Pick a sound, not a letter name — "mmm" — and take turns naming things that start with it: "mmmouse, mmmilk, mmmoon." Keep going until you run dry, then choose a new sound. Stretch the sound out loud.',
    why: 'Matching many words to one starting sound rehearses phoneme isolation and builds the sound-to-word link that becomes letter-sound knowledge. Saying the pure sound "mmm" (not "em") is what transfers to sounding out print later.',
    traits: ['Phonological awareness', 'Vocabulary', 'Categorisation'],
    where: ['Car', 'Waiting', 'Mealtime', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: start with the sound in the child\'s own name. Harder: words that both start AND end with a chosen sound.'
  },
  {
    group: 'Words', name: 'Sound Detective', turns: true, age: '4–5',
    how: 'As you walk or wait, one of you names something you can see or hear and the other says its first sound: "Dog — d! d! d!" Then swap who names and who sounds it out.',
    why: 'Pulling the first (then last) sound off a real object trains phoneme isolation in the wild, tying the sound to something concrete — the very bridge a child crosses when they start attaching sounds to letters.',
    traits: ['Phonological awareness', 'Observation', 'Vocabulary'],
    where: ['Walk/Garden', 'Car', 'Waiting', 'Anytime'],
    tweak: 'Easier: parent says the sound, child finds an object. Harder: count all the sounds in a short word ("cat has three: c-a-t").'
  },
  {
    group: 'Words', name: 'Clap The Beats', turns: true, age: '3–5',
    how: 'Say a word and clap once for each beat as you say it — "ba-na-na" (three claps). Then the child says and claps a word for you. Use names, foods, whatever\'s around; take turns choosing the word.',
    why: 'Hearing the beats (syllables) inside a word is the first, easiest rung of phonological awareness and a bridge to hearing single sounds. Making it physical — clap, stomp or hop per beat — locks the chunk to a movement so it sticks.',
    traits: ['Phonological awareness', 'Memory', 'Self-regulation'],
    where: ['Car', 'Waiting', 'Mealtime', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: one and two-beat words only. Harder: clap a full name or "hip-po-pot-a-mus".'
  },
  {
    group: 'Words', name: 'Word Chain', turns: true, age: '3–5',
    how: 'Say a word; the child says the first word it makes them think of; you answer theirs, and on it goes — "dog → bone → dinner → table…" No wrong answers, just keep the chain moving, one word each in turn.',
    why: 'Each link fires along the child\'s semantic network, strengthening the pathways between related words. Richer, better-connected word knowledge is what drives reading comprehension, because understanding text is understanding how words relate.',
    traits: ['Vocabulary', 'Reasoning', 'Imagination'],
    where: ['Car', 'Waiting', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: accept any connection, however loose. Harder: each new word must start with the last sound of the one before.'
  },
  {
    group: 'Words', name: 'Last-Sound Chain', turns: true, age: '4–5',
    how: 'One person names an animal (or any category); the next must name one starting with the sound the last one ended on: "elephant → tiger → rabbit → tortoise." Go round until someone\'s stuck.',
    why: 'This forces the child to isolate the final sound of a word and then retrieve a new word beginning with it — end-phoneme awareness and categorised word retrieval, two literacy engines in a single move.',
    traits: ['Phonological awareness', 'Vocabulary', 'Categorisation', 'Memory'],
    where: ['Car', 'Waiting', 'Mealtime', 'Anytime'],
    tweak: 'Easier: drop the category, any word will do. Harder: keep one narrow category so retrieval is tighter.'
  },
  {
    group: 'Words', name: 'Silly Sentence Build', turns: true, age: '3–5',
    how: 'Build one sentence together, adding a word each in turn: "The… dog… ate… a… purple… shoe." Keep going as long as it stays a sentence, laughing at how strange it gets. Whoever makes it fall apart starts the next one.',
    why: 'Adding one word at a time makes the child feel the grammar of a sentence — how words must slot together in order. That syntactic awareness is a quiet predictor of comprehension, because meaning lives in word order, not just single words.',
    traits: ['Vocabulary', 'Imagination', 'Reasoning', 'Social-emotional'],
    where: ['Car', 'Mealtime', 'Waiting', 'Anytime'],
    tweak: 'Easier: you supply the frame and they fill one blank ("The dog ate a ___"). Harder: it must still make sense.'
  },
  {
    group: 'Words', name: 'Story, One Line Each', turns: true, age: '3–5',
    how: 'Start a story with one sentence — "Once there was a bear who lost his hat." The child adds the next line, then you, then them, building it together turn by turn. Say "and then…" to hand it over. Follow wherever it goes.',
    why: 'Composing story out loud builds narrative structure — the sense that stories have a beginning, a problem and an end — which is the backbone of reading comprehension, since understanding a story means predicting and connecting events.',
    traits: ['Imagination', 'Vocabulary', 'Reasoning', 'Memory', 'Social-emotional'],
    where: ['Car', 'Waiting', 'Mealtime', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: you carry the story and they add one thing per turn ("and then a… dragon!"). Harder: each turn must solve a problem the last one made.'
  },
  {
    group: 'Words', name: 'Opposites Ping-Pong', turns: true, age: '3–5',
    how: 'You say a word, the child fires back its opposite — "hot!" / "cold!", "up!" / "down!", "loud!" / "quiet!" Then they serve one to you. Keep it fast, like a rally.',
    why: 'Opposites teach words in linked pairs, which is how the brain organises meaning — knowing a word deeply means knowing what it is and what it isn\'t. This antonym mapping builds the vocabulary depth most tied to comprehension.',
    traits: ['Vocabulary', 'Reasoning', 'Self-regulation'],
    where: ['Car', 'Waiting', 'Mealtime', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: act the opposites out with your bodies. Harder: trickier pairs (empty/full, ancient/new, gentle/rough).'
  },
  {
    group: 'Words', name: 'Guess My Thing', turns: true, age: '3–5',
    how: 'Think of an object nearby or well-known and describe it without naming it — "It\'s furry, it says woof, it likes bones." The child guesses; then they describe one for you. Take turns being the describer.',
    why: 'Describing forces the child to retrieve a word\'s key features — what it looks like, does, and belongs with — which is vocabulary depth, and depth predicts reading comprehension far more than how many words a child can simply name.',
    traits: ['Vocabulary', 'Reasoning', 'Categorisation', 'Imagination'],
    where: ['Car', 'Waiting', 'Mealtime', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: describe things in view right now. Harder: only three clues allowed, forcing the best ones.'
  },
  {
    group: 'Words', name: 'Finish My Sentence', turns: true, age: '3–5',
    how: 'Start a sentence and stop, letting the child finish it any way they like — "When I woke up this morning, I saw…" / "The best thing about the beach is…" Then they hand you an unfinished one. Take turns.',
    why: 'Completing an open sentence makes the child hold the grammatical frame in mind and generate words that fit it — building sentence formulation and syntax, the structure that lets a reader carry meaning across a whole sentence.',
    traits: ['Vocabulary', 'Imagination', 'Reasoning', 'Social-emotional'],
    where: ['Car', 'Mealtime', 'Waiting', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: very concrete frames ("My favourite colour is…"). Harder: frames that need a reason ("I was happy because…").'
  },
  {
    group: 'Words', name: 'Tell Me Everything', turns: true, age: '3–5',
    how: 'Pick one everyday word — "apple" — and take turns saying one true thing about it: "It\'s red." "You can eat it." "It grows on a tree." "It\'s crunchy." Keep going round until you run out, then choose a new word.',
    why: 'Piling up facts about one word builds vocabulary depth — the web of meaning around it (what it looks like, does, is made of, belongs with) — and it\'s depth, not the sheer number of words known, that most drives comprehension.',
    traits: ['Vocabulary', 'Categorisation', 'Reasoning', 'Observation'],
    where: ['Mealtime', 'Car', 'Waiting', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: describe something in front of you. Harder: sort the facts as you go ("that\'s what it looks like… that\'s what it does").'
  },
  {
    group: 'Words', name: 'Copycat Sounds', turns: true, age: '3–5',
    how: 'Make a string of sounds or a made-up word — "ba-ba-BOO" or "zizzle-wozzle" — and the child copies it back exactly. Then they invent one for you. Take turns leading; make them longer and sillier as you go.',
    why: 'Repeating novel sound strings trains the phonological loop — the part of working memory that briefly holds sounds — the exact system a child uses to remember a new word long enough to learn it, and to hold sounds together while blending them when reading.',
    traits: ['Phonological awareness', 'Memory', 'Self-regulation', 'Imagination'],
    where: ['Car', 'Waiting', 'Mealtime', 'Anytime'],
    tweak: 'Easier: short two-sound strings. Harder: add a beat or rhythm they must copy along with the sounds.'
  },

  // ─────────────── MEMORY & SELF-CONTROL ───────────────
  {
    group: 'Focus', name: 'Simon Says', turns: false, age: '3–5',
    how: 'Call out actions ("touch your nose", "hop on one foot"), but the child only does them when you first say "Simon says". A command without it that they follow means they\'re out for the round — then let them be Simon. Start slow, speed up.',
    why: 'Every command makes the child hold the rule "only if Simon says" in mind while STOPPING a movement they\'ve already begun. That stop-a-prepared-action wiring is inhibitory control — the same system behind waiting a turn and resisting distraction — and games that demand it measurably strengthen it.',
    traits: ['Memory', 'Self-regulation', 'Observation'],
    where: ['Waiting', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: pair every command with a big gesture so listening is the challenge. Harder: speed up with near-misses like "Simon… says!".'
  },
  {
    group: 'Focus', name: 'Do The Opposite', turns: false, age: '4–5',
    how: 'Agree a flip-rule — you say "up", they point down; "fast", they go slow; you touch your head, they touch their toes. Call the words quickly; they must do the reverse each time. After a while, flip back to normal and watch them scramble.',
    why: 'The child must inhibit the automatic matching response AND switch to produce its opposite — inhibitory control and cognitive flexibility together. Changing the rule mid-game is the pure flexibility test: 3s tend to stick with the old rule, 4–5s learn to switch.',
    traits: ['Reasoning', 'Self-regulation', 'Observation'],
    where: ['Car', 'Waiting', 'Anytime'],
    tweak: 'Easier: just one pair (up/down). Harder: run two opposite rules at once (words AND actions reversed).'
  },
  {
    group: 'Focus', name: 'Freeze Dance', turns: true, age: '3–5',
    how: 'Sing or play music and everyone dances; the instant it stops, freeze like a statue and hold still. Anyone who wobbles sits out one round. Take turns being the one who stops the music.',
    why: 'Stopping a whole body mid-movement on an unpredictable cue is one of the hardest inhibitory-control demands for a young child. Moving-then-halting to a rhythm is a well-known self-regulation builder — they\'re literally practising putting the brakes on their own impulse.',
    traits: ['Self-regulation', 'Observation', 'Memory'],
    where: ['Walk/Garden', 'Anytime'],
    tweak: 'Harder: add a second rule — freeze in a funny shape, or freeze low on every second stop — so they hold two things in mind.'
  },
  {
    group: 'Focus', name: 'Red Light, Green Light', turns: true, age: '3–5',
    how: 'You\'re the traffic light at one end. On "green light" the child creeps toward you; on "red light" they stop at once. In the "Grandmother\'s Footsteps" version you face away and spin round suddenly — anyone still moving goes back to the start. First to tag you becomes the caller.',
    why: 'The child wants to rush but must slam the brakes the moment the cue changes — inhibitory control paired with attentional shifting, the same combination the "Red Light, Purple Light" school-readiness programme used to raise self-regulation in preschoolers.',
    traits: ['Self-regulation', 'Observation'],
    where: ['Walk/Garden', 'Anytime'],
    tweak: 'Harder: swap the meanings so "red" means go — now they must override the obvious rule.'
  },
  {
    group: 'Focus', name: 'What\'s Missing?', turns: true, age: '3–5',
    how: 'Name three or four things aloud — "dog, cup, sock, spoon" — and have the child say them back. Then repeat the list with one quietly removed and ask which vanished. Swap roles so they catch you out.',
    why: 'The child builds a mental picture of the full set in working memory, then compares it against the shorter list to spot the gap. That hold-and-compare is core working memory plus focused attention — with zero equipment.',
    traits: ['Memory', 'Observation', 'Vocabulary'],
    where: ['Car', 'Waiting', 'Mealtime'],
    tweak: 'Easier: use two items. Harder: change the ORDER instead of removing one, and ask what moved.'
  },
  {
    group: 'Focus', name: 'Copy My Clap', turns: true, age: '3–5',
    how: 'Clap a short rhythm — clap-clap… clap — and the child claps it straight back. Grow it one beat at a time, then let them invent a rhythm for you. Swap claps for knee-pats, stamps or clicks.',
    why: 'To copy a rhythm the child holds the sequence in auditory working memory, then motor-plans and times the hands to reproduce it — layering memory, attention and impulse control (waiting for their turn) in one small loop.',
    traits: ['Memory', 'Phonological awareness', 'Observation', 'Self-regulation'],
    where: ['Car', 'Waiting', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: two-beat patterns. Harder: add a body sequence (clap, pat, stamp) so they track order across different movements.'
  },
  {
    group: 'Focus', name: 'Keep A Straight Face', turns: true, age: '4–5',
    how: 'Sit facing each other; the first to laugh, smile or look away loses. Pull faces, make silly noises, tell a daft joke — but no touching. Take turns being the "tickler" and the "stone face".',
    why: 'Actively suppressing a laugh or grin is emotional inhibitory control — the child overrides a strong internal impulse and a facial reflex, the same regulation used to stay calm when frustrated and to wait quietly when they want to shout out.',
    traits: ['Self-regulation', 'Social-emotional', 'Observation'],
    where: ['Waiting', 'Mealtime', 'Car'],
    tweak: 'Easier: a 10-second countdown. Harder: the stone face must answer a silly question without smiling.'
  },
  {
    group: 'Focus', name: 'Clap For Animals', turns: false, age: '4–5',
    how: 'Give one rule: "clap every time I say an animal, stay still for everything else." Then reel off a mixed list — "table, dog, chair, cat, spoon, horse" — steadily, then faster. Swap and let them read you a list.',
    why: 'This is a go/no-go task: the child holds one rule in mind and fires the clap only for matches while inhibiting it for everything else — exactly how researchers both measure and build inhibitory control in preschoolers.',
    traits: ['Categorisation', 'Self-regulation', 'Observation'],
    where: ['Car', 'Waiting', 'Mealtime'],
    tweak: 'Harder: add a conflicting rule (clap for animals, STAMP for foods, nothing else) so they switch responses on the fly.'
  },
  {
    group: 'Focus', name: 'Head, Toes, Knees, Shoulders', turns: false, age: '4–5',
    how: 'First, the child touches the body part you name. Then flip it: when you say "head" they touch their TOES, and "toes" means head. Once that\'s solid, add knees-and-shoulders as a second reversed pair.',
    why: 'A well-studied executive-function task in disguise: the child must remember the reversed rule, inhibit the natural "touch what was named" response, and switch between two rule pairs — exercising working memory, inhibitory control and flexibility all at once.',
    traits: ['Self-regulation', 'Memory', 'Reasoning'],
    where: ['Waiting', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: one reversed pair only (head/toes). Harder: reverse both pairs so four commands each map to their opposite.'
  },
  {
    group: 'Focus', name: 'Spot Five', turns: true, age: '3–5',
    how: 'While walking or waiting, set a quiet mission — "let\'s find five red things before the corner" or "spot three round things" — and take turns pointing them out, counting up together as you go.',
    why: 'Holding the target in mind while scanning and filtering out everything irrelevant is focused attention plus working memory, and the shared, patient counting is self-regulation practice — turning ordinary waiting into a rehearsal of the "stay on task" muscle.',
    traits: ['Observation', 'Numeracy', 'Self-regulation'],
    where: ['Walk/Garden', 'Car', 'Waiting'],
    tweak: 'Easier: one target colour. Harder: two targets at once (red things AND things with wheels), tracking two counts.'
  },
  {
    group: 'Focus', name: 'Whisper Or Shout', turns: true, age: '3–5',
    how: 'Agree a rule — hand raised high, the child says the word LOUD; hand low, they whisper it. Chant a word or count together, moving your hand up and down so they flip volume to match. Then hand them the control.',
    why: 'Matching volume to a changing signal makes the child continuously monitor a cue and adjust their own output — a self-regulation and inhibitory-control workout (the whisper especially, holding back the urge to be loud) inside a game they find hilarious.',
    traits: ['Self-regulation', 'Phonological awareness', 'Observation'],
    where: ['Car', 'Waiting', 'Anytime'],
    tweak: 'Harder: reverse it — hand up means whisper — forcing them to override the intuitive "big gesture, big voice" link.'
  },
  {
    group: 'Focus', name: 'My Turn, Your Turn Beat', turns: true, age: '3–5',
    how: 'Set a steady rhythm together — pat knees, pat knees — and take turns dropping one action into the gaps ("I clap, then YOU clap") without breaking the beat. Pass a made-up sound or move back and forth, each waiting for their slot. If the beat breaks, start again gently.',
    why: 'Keeping a shared beat forces the child to time their action to an outside rhythm and hold back from acting early — the "wait for your slot" self-regulation that transfers straight to turn-taking in conversation and the classroom.',
    traits: ['Self-regulation', 'Memory', 'Social-emotional'],
    where: ['Waiting', 'Mealtime', 'Anytime'],
    tweak: 'Easier: just pass one clap back and forth on the beat. Harder: repeat the previous person\'s move, THEN add your own.'
  },
  {
    group: 'Focus', name: 'The Talking Ball', turns: true, age: '3–5',
    how: 'Turn any round game into a turn-taking one with an invisible "talking ball": only whoever holds it may speak, then they pass it. Use it for Story One Line Each, Three Good Things, or just "one thing about your day". Mime passing it so the youngest sees the turn move.',
    why: 'Turn-taking is a real skill, not just manners: waiting for your turn while holding your idea in mind is self-regulation — impulse control plus working memory — and the shared rule teaches that talking together is cooperative, the base of every group the child will ever join.',
    traits: ['Self-regulation', 'Social-emotional', 'Memory'],
    where: ['Car', 'Waiting', 'Mealtime', 'Anytime'],
    tweak: 'Easier: two players, short waits. Harder: you must repeat the last person\'s idea before adding your own.'
  },

  // ─────────────── THINKING, MATHS & SPACE ───────────────
  {
    group: 'Thinking', name: 'Twenty Questions', turns: true, age: '4–5',
    how: 'One person thinks of an object, animal or person and keeps it secret. The others take turns asking only yes/no questions ("Is it alive? Is it bigger than the car?") to work it out. Then swap who holds the secret.',
    why: 'A good yes/no question splits the remaining possibilities roughly in half, so the child discovers in play that one clever question eliminates a whole category at once — the seed of deductive reasoning rather than random guessing.',
    traits: ['Reasoning', 'Categorisation', 'Vocabulary', 'Memory'],
    where: ['Car', 'Waiting', 'Walk/Garden', 'Mealtime', 'Anytime'],
    tweak: 'Easier: for 3s, limit it to "an animal" and let them ask any question at all. Harder: no category revealed — it could be anything.'
  },
  {
    group: 'Thinking', name: 'I\'m Thinking Of An Animal That…', turns: true, age: '3–5',
    how: 'Give one clue at a time about a hidden animal — "It has four legs… it says moo… it lives on a farm" — pausing after each so the child can guess. Then let them give clues and you guess, deliberately wrong once so they add another.',
    why: 'Each clue narrows the field, so the child learns that combining features (four legs AND moos AND farm) identifies one thing — early conjunctive reasoning and category-attribute thinking, which underlies all classification.',
    traits: ['Reasoning', 'Categorisation', 'Vocabulary', 'Memory'],
    where: ['Car', 'Waiting', 'Walk/Garden', 'Mealtime', 'Anytime'],
    tweak: 'Harder: use jobs or vehicles instead of animals — less obvious defining features.'
  },
  {
    group: 'Thinking', name: 'Odd One Out', turns: true, age: '4–5',
    how: 'Say three or four things where one doesn\'t belong — "apple, banana, shoe, orange" — and the child names the odd one and, crucially, WHY. Then they build one to trick you. The "why" is the whole game.',
    why: 'Finding the outlier means the child must infer the hidden rule the others share and test one item against it — explicit categorisation and reasoning, and saying "because a shoe isn\'t a fruit" turns silent sorting into language, deepening both word meaning and logic.',
    traits: ['Categorisation', 'Reasoning', 'Vocabulary'],
    where: ['Car', 'Waiting', 'Mealtime', 'Anytime'],
    tweak: 'Easier: make the odd one obvious (dog, cat, spoon). Harder: build sets where two different answers can each be justified.'
  },
  {
    group: 'Thinking', name: 'Count The Red Cars', turns: true, age: '3–5',
    how: 'Pick a target before you set off — red cars, tractors, dogs, front doors — and both count aloud each time one appears, taking turns to say the next number. Whoever spots the next one says the next number.',
    why: 'Counting real objects out loud while pointing builds cardinality — the understanding that the LAST number you say is how many there are — which many children can recite-count long before they truly grasp, and it ties number words to real quantities.',
    traits: ['Numeracy', 'Observation', 'Self-regulation'],
    where: ['Car', 'Walk/Garden', 'Waiting'],
    tweak: 'Easier: count anything at all up to five. Harder: keep two tallies (red cars vs blue cars) at once.'
  },
  {
    group: 'Thinking', name: 'Guess How Many', turns: true, age: '4–5',
    how: 'Before counting anything — grapes on the plate, steps to the door, buttons on a coat — both say a guess out loud first ("I think six… I think ten"). Then count together to see whose was closest. Take turns choosing what to estimate.',
    why: 'Estimating first makes the child produce a reasonable number from a felt sense of quantity rather than counting, and comparing the guess to the true count calibrates their number line — the root skill of judging whether an answer is sensible.',
    traits: ['Numeracy', 'Reasoning', 'Observation'],
    where: ['Mealtime', 'Walk/Garden', 'Waiting', 'Anytime'],
    tweak: 'Easier: guess "more than five or less than five". Harder: estimate things too many to count quickly, like cars in a car park.'
  },
  {
    group: 'Thinking', name: 'Bigger Or Smaller', turns: true, age: '3–5',
    how: 'Name two things and ask which is bigger, taller, heavier or more — "an elephant or a mouse? five sweets or two? a bus or a bike?" Take turns setting each other puzzles, and slip in tricky ones (a mountain vs a house).',
    why: 'Comparing magnitudes ("more/less", "bigger/smaller") is one of the most basic number-sense foundations; ordering quantities and sizes builds the mental number line and the greater-than/less-than intuition all later arithmetic rests on.',
    traits: ['Numeracy', 'Reasoning', 'Vocabulary'],
    where: ['Car', 'Mealtime', 'Waiting', 'Anytime'],
    tweak: 'Harder: compare quantities close together (six vs seven) so they must reason, not just see it.'
  },
  {
    group: 'Thinking', name: 'How Many Do You See?', turns: true, age: '3–5',
    how: 'Hold up some fingers for just a second, then hide them, and ask how many — without letting the child count one by one. Show the same number different ways (three as 2+1, then 1+1+1). Swap so they flash fingers at you.',
    why: 'Recognising a small quantity instantly, without counting, is subitising — seeing "threeness" as a whole — and flashing different arrangements of the same number teaches part-whole knowledge (that 3 is 2 and 1), the direct foundation of addition.',
    traits: ['Numeracy', 'Observation', 'Memory'],
    where: ['Car', 'Waiting', 'Mealtime', 'Anytime'],
    tweak: 'Easier: stay within 1–3. Harder: use both hands and ask "how many more to make ten?".'
  },
  {
    group: 'Thinking', name: 'What Comes Next?', turns: true, age: '3–5',
    how: 'Start a simple repeating pattern out loud or with actions — "red, blue, red, blue…" or "clap, stomp, clap, stomp…" — then stop and ask what comes next. Then they invent a pattern for you to continue. Take turns.',
    why: 'Predicting the next item means spotting the repeating unit and applying a rule, and pattern recognition is the taproot of algebra — the discovery that the world follows rules you can extend, which later makes skip-counting and formulas feel natural.',
    traits: ['Reasoning', 'Observation', 'Memory'],
    where: ['Car', 'Walk/Garden', 'Mealtime', 'Anytime'],
    tweak: 'Harder: use a three-part unit (red-red-blue) or a growing pattern (1 clap, 2 claps, 3 claps…).'
  },
  {
    group: 'Thinking', name: 'Guide Me There', turns: true, age: '3–5',
    how: 'The child gives you step-by-step spoken directions to somewhere — "go forward, turn left, stop, turn right" — and you follow them literally, even into a wall if they misdirect. Then swap. In the car they can "drive" you with left/right calls.',
    why: 'Producing "left, right, forward, past, behind" turns spatial relationships into words, and hearing and using spatial language measurably boosts mental-rotation skill; directing from the walker\'s viewpoint also trains perspective-taking.',
    traits: ['Spatial', 'Vocabulary', 'Reasoning', 'Social-emotional'],
    where: ['Walk/Garden', 'Car', 'Anytime'],
    tweak: 'Easier: just "forward and stop". Harder: give the whole route from memory before you move.'
  },
  {
    group: 'Thinking', name: 'Where Is It?', turns: true, age: '3–5',
    how: 'Think of something you can both see and give only position clues — "it\'s under something… it\'s beside the red one… it\'s behind you" — while the child guesses what and where. Take turns, packing in words like above, between, next to, in front of.',
    why: 'Under, over, beside, between and behind are the spatial vocabulary that focuses a child\'s attention on relationships between objects; richer spatial language directly scaffolds spatial reasoning and the mental manipulation of positions.',
    traits: ['Spatial', 'Vocabulary', 'Observation'],
    where: ['Car', 'Mealtime', 'Waiting', 'Walk/Garden'],
    tweak: 'Harder: describe an object\'s location in a room the child can\'t currently see, so they must build it mentally.'
  },
  {
    group: 'Thinking', name: 'Build It In Your Head', turns: true, age: '4–5',
    how: 'Describe an imaginary shape or scene one instruction at a time — "put a big red square down… now a small circle on top… now move the circle to the left" — and have the child picture it. Ask what it looks like now, then let them direct you.',
    why: 'Holding and moving shapes in the mind\'s eye is mental rotation and spatial visualisation — the skill that predicts later maths and science achievement — and doing it purely from spoken instructions strengthens the link between spatial words and inner imagery.',
    traits: ['Spatial', 'Imagination', 'Memory', 'Vocabulary'],
    where: ['Car', 'Waiting', 'Anytime'],
    tweak: 'Easier: one shape only. Harder: "now turn the whole picture upside down — what\'s on top now?".'
  },
  {
    group: 'Thinking', name: 'How Many Ways?', turns: true, age: '4–5',
    how: 'Pose an open question with many right answers — "how many ways can we make four? three and one… two and two…" or "how many ways to get to the door?" Take turns adding a new answer until you run dry, celebrating each valid one.',
    why: 'Splitting a number into all its part-pairs (4 = 3+1 = 2+2) builds part-whole understanding, the foundation of addition and subtraction, while the open format grows divergent thinking — the confidence that a problem can have many solutions.',
    traits: ['Numeracy', 'Reasoning', 'Imagination'],
    where: ['Mealtime', 'Car', 'Waiting', 'Anytime'],
    tweak: 'Easier: "how many ways to make three". Harder: real quantities, like ways to split six grapes between two people.'
  },
  {
    group: 'Thinking', name: 'Count The Steps', turns: true, age: '3–5',
    how: 'As you walk, count each step out loud together, taking turns to say the next number, and pause to ask "how many more to the gate — shall we guess?" You can count stairs, lampposts, or paces between two trees.',
    why: 'Counting your own rhythmic steps ties the number sequence to a physical action, reinforcing one-to-one correspondence — one number per step, no skipping — the principle a child must master before counting means anything about quantity.',
    traits: ['Numeracy', 'Self-regulation', 'Observation'],
    where: ['Walk/Garden', 'Waiting'],
    tweak: 'Harder: count backwards down the stairs, or count in twos with big steps.'
  },
  {
    group: 'Thinking', name: 'Riddle Me This', turns: true, age: '4–5',
    how: 'Offer a tiny riddle built from features — "I\'m yellow, I\'m curved, monkeys love me — what am I?" — and let the child guess, adding a clue if they\'re stuck. Then invite them to make one for you, helping them find a giveaway clue and a tricky one.',
    why: 'Solving a riddle means holding several attributes at once and searching memory for the one thing that fits them all — convergent reasoning plus rich vocabulary — and inventing one requires the harder inverse skill of choosing the features that best identify a thing.',
    traits: ['Reasoning', 'Vocabulary', 'Memory', 'Imagination'],
    where: ['Car', 'Mealtime', 'Waiting', 'Anytime'],
    tweak: 'Easier: only things in view. Harder: make the first clue deliberately broad so it takes several to narrow down.'
  },
  {
    group: 'Thinking', name: 'One More, One Less', turns: true, age: '3–5',
    how: 'Play with a small number out loud — "you have three teddies, I give you one more, how many now?" then "you have four, one runs away, how many left?" Take turns being the one who changes the number, keeping totals small enough to picture.',
    why: 'Adding or removing one from a stated quantity teaches that numbers grow and shrink in fixed steps — the "one more/one less" relationship that is the mental core of the number line and the bridge from counting to real arithmetic.',
    traits: ['Numeracy', 'Reasoning', 'Memory'],
    where: ['Car', 'Mealtime', 'Waiting', 'Anytime'],
    tweak: 'Easier: only ever "one more". Harder: add or take two, or start at ten and count down.'
  },

  // ─────────────── IMAGINATION & HEART ───────────────
  {
    group: 'Heart', name: 'What If…?', turns: true, age: '3–5',
    how: 'Ask an impossible, delightful question and let the child answer, then you, then back to them, building on each other. "What if it rained lemonade?" "What if dogs could talk — what would ours say?" Never judge; just ask "and what else?".',
    why: 'Open "what if" questions train divergent thinking — generating many ideas from one starting point — the raw engine of creativity, and in the same move they teach the child that a question can have many right answers, not just one.',
    traits: ['Imagination', 'Reasoning', 'Vocabulary', 'Social-emotional'],
    where: ['Car', 'Waiting', 'Mealtime', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: keep it concrete ("what if we had a pet elephant?"). Harder: add a constraint, or chain "and then what would happen?" three times.'
  },
  {
    group: 'Heart', name: 'A Hundred Uses', turns: true, age: '3–5',
    how: 'Pick any everyday object in sight — a spoon, a shoe, a leaf — and take turns naming something else it could be or do. "A spoon could be a microphone!" "…a tiny boat!" Keep passing it back and forth until you run out.',
    why: 'This is the classic "alternate uses" task from creativity research: it pushes the child off the single obvious answer and rehearses fluency and flexibility of thought — the measurable core of divergent thinking that predicts creative problem-solving later.',
    traits: ['Imagination', 'Reasoning', 'Categorisation'],
    where: ['Waiting', 'Mealtime', 'Anytime'],
    tweak: 'Easier: you offer the first two ideas so they hear the pattern before they try.'
  },
  {
    group: 'Heart', name: 'What\'s It Thinking?', turns: true, age: '3–5',
    how: 'Spot an animal, a person, or a character in a book, and ask "What do you think it\'s thinking right now?" Take turns guessing — the dog, the pigeon, the baby at the next table. Then ask "why do you think that?".',
    why: 'Guessing what another mind is thinking rehearses theory of mind — the understanding that others hold their own beliefs, wants and feelings, different from your own. This is exactly the skill that comes online between 3 and 5 and underpins empathy, fairness, and every friendship the child will make.',
    traits: ['Social-emotional', 'Imagination', 'Reasoning', 'Observation'],
    where: ['Car', 'Waiting', 'Walk/Garden', 'Anytime'],
    tweak: 'Harder: ask "what does it think WE are thinking?" for a second layer of perspective.'
  },
  {
    group: 'Heart', name: 'If You Were An Animal…', turns: true, age: '3–5',
    how: 'Take turns: "If you were an animal, which one?" Then dig in — "How would you move? What would you eat? Where would you sleep?" Each person takes a turn being their animal while the other asks the questions.',
    why: 'Imagining life inside another body is perspective-taking made physical — the child models a set of needs and experiences that aren\'t their own, which strengthens both imagination and the empathy of stepping into another point of view.',
    traits: ['Imagination', 'Social-emotional', 'Reasoning', 'Categorisation'],
    where: ['Car', 'Waiting', 'Walk/Garden', 'Mealtime', 'Anytime'],
    tweak: 'Easier: give a choice of two animals rather than an open field.'
  },
  {
    group: 'Heart', name: 'Make A Face', turns: true, age: '3–5',
    how: 'Name a feeling — happy, sad, surprised, cross, worried — and both make that face at each other. Then swap: one pulls a face and the other guesses the feeling. Take turns being the face-maker and the guesser.',
    why: 'Matching a face to a feeling-word builds emotional literacy: the child learns to read the outward signs of an emotion and attach the right label, and reading faces accurately is the first step of empathy and of managing their own social world.',
    traits: ['Social-emotional', 'Observation', 'Vocabulary'],
    where: ['Car', 'Waiting', 'Mealtime', 'Anytime'],
    tweak: 'Harder: use subtler feelings — proud, disappointed, nervous — to grow their emotion vocabulary.'
  },
  {
    group: 'Heart', name: 'Name The Feeling', turns: true, age: '3–5',
    how: 'When a feeling shows up in the day — in them, in you, in a character — say it out loud and take turns naming it and why. "You\'re stamping your feet — I think you feel frustrated. Am I right?" Let the child correct you; they know their own feeling best.',
    why: 'Naming a feeling out loud measurably calms the brain\'s alarm and switches on the thinking part — this is "affect labelling". A child who can say "I\'m frustrated" is already halfway to managing it, because the naming itself begins the regulation.',
    traits: ['Social-emotional', 'Self-regulation', 'Vocabulary'],
    where: ['Car', 'Waiting', 'Walk/Garden', 'Mealtime', 'Anytime'],
    tweak: 'Harder: add the body clue ("where do you feel it — tummy? fists?") to link the feeling to its physical signal.'
  },
  {
    group: 'Heart', name: 'Three Good Things', turns: true, age: '3–5',
    how: 'At mealtime or bedtime, take turns naming one thing you\'re grateful for or that made you happy today — then say WHO helped make it happen. "I\'m grateful for the sunny walk — because you asked to go." Go round until each has had three turns.',
    why: 'Naming what you\'re thankful for trains the brain to notice good it would otherwise skip, and adding "who made it happen" is the key move — it builds the understanding that other people contribute to your happiness, which is what turns gratitude into kindness.',
    traits: ['Social-emotional', 'Memory', 'Vocabulary'],
    where: ['Mealtime', 'Anytime'],
    tweak: 'Easier: start with just one thing, no "who", until the habit lands.'
  },
  {
    group: 'Heart', name: 'Cloud Shapes', turns: true, age: '3–5',
    how: 'Lie back or look up together and take turns spotting what the clouds look like. "That one\'s a dragon!" "That one\'s a squashed sandwich!" The next person finds their own before the wind changes it.',
    why: 'Seeing pictures in random shapes is pure divergent thinking plus observation — the child imposes meaning on ambiguity, the same imaginative leap behind metaphor and invention, while learning to look slowly at the sky instead of rushing past.',
    traits: ['Imagination', 'Observation', 'Spatial'],
    where: ['Walk/Garden', 'Waiting', 'Anytime'],
    tweak: 'Indoors, do it with cracks in the pavement, wood grain, or spilt-milk shapes.'
  },
  {
    group: 'Heart', name: 'Listen And Name', turns: true, age: '3–5',
    how: 'Everyone goes quiet and still for a moment, then take turns naming one sound you can hear — a bird, a car, the fridge humming, your own breathing. Keep going round until nobody can find a new one.',
    why: 'Deliberately sorting the soundscape into separate named sounds is trained attention and phonological awareness — the child learns to focus on one stream and hold it — and the stillness itself is a first, gentle taste of self-regulation and being present.',
    traits: ['Observation', 'Self-regulation', 'Phonological awareness', 'Vocabulary'],
    where: ['Car', 'Walk/Garden', 'Waiting', 'Anytime'],
    tweak: 'Harder: count how many sounds in total, or point in the direction each comes from.'
  },
  {
    group: 'Heart', name: 'Three New Things', turns: true, age: '4–5',
    how: 'On a walk, or in a room you know well, challenge each other to notice three things you\'ve never noticed before — a chipped brick, a snail trail, a funny door knocker. Take turns pointing one out until you each have three.',
    why: 'Hunting for the unnoticed pulls attention off autopilot and grows the habit of close observation — the slow, curious looking at the root of both scientific wonder and creativity, because you can\'t have a new idea about something you never really saw.',
    traits: ['Observation', 'Memory', 'Vocabulary'],
    where: ['Walk/Garden', 'Waiting', 'Anytime'],
    tweak: 'Easier: one new thing each. Harder: come home and try to recall all six.'
  },
  {
    group: 'Heart', name: 'Would You Rather', turns: true, age: '3–5',
    how: 'Offer two fun, harmless choices and take turns picking AND saying why. "Would you rather be able to fly or be invisible?" "…a pet dragon or a pet dolphin?" Whoever answers then poses the next one.',
    why: 'Forcing a choice and justifying it grows early reasoning — the child weighs two options and puts a "because" on their preference, the seed of decision-making — and hearing your different pick teaches that people can want different things and both be fine.',
    traits: ['Reasoning', 'Social-emotional', 'Vocabulary', 'Imagination'],
    where: ['Car', 'Waiting', 'Mealtime', 'Walk/Garden', 'Anytime'],
    tweak: 'Easier: two familiar things (apple or banana). Harder: make both genuinely appealing so the "because" has to do real work.'
  },
  {
    group: 'Heart', name: 'Would You Rather Help…?', turns: true, age: '4–5',
    how: 'Pose a kind dilemma: "Would you rather help a lost puppy find home, or help a friend who fell over?" Take turns choosing and explaining, then swap who invents the next pair. There\'s no wrong answer — the talking is the point.',
    why: 'Weighing two ways to help rehearses moral reasoning and perspective-taking at once — the child imagines each person\'s need and feels which pull is stronger, practising the empathy-plus-judgement real kindness needs, safely, in words, before it\'s ever a real moment.',
    traits: ['Social-emotional', 'Reasoning', 'Imagination'],
    where: ['Car', 'Waiting', 'Mealtime', 'Anytime'],
    tweak: 'Easier: make one choice obviously kinder so they can find the "right" feeling first.'
  },
  {
    group: 'Heart', name: 'How Do They Feel?', turns: true, age: '3–5',
    how: 'Watch someone real or in a story — a child who dropped their ice cream, someone waving hello — and take turns saying how you think they feel and what might help. "He looks sad. Maybe a hug would help." Then the other adds their idea.',
    why: 'Reading a feeling in someone else AND proposing what would help is empathy\'s full loop: theory of mind (seeing their state) plus prosocial action (doing something about it). Rehearsing the second half out loud makes the child more likely to actually help later.',
    traits: ['Social-emotional', 'Observation', 'Reasoning'],
    where: ['Car', 'Waiting', 'Walk/Garden', 'Anytime'],
    tweak: 'Harder: pick someone whose feeling isn\'t obvious, so they have to hunt for clues.'
  },
  {
    group: 'Heart', name: 'I Wonder…', turns: true, age: '3–5',
    how: 'Ask a real wondering question with no adult answer required and think out loud together, taking turns adding a guess. "Where do you think the birds go at night?" "Why is the moon following the car?" Treat their theory with the same respect as a fact, then wonder some more.',
    why: 'Sitting with a genuine "I wonder…" keeps the child\'s natural curiosity alive instead of teaching them every question has an instant answer — the wonder that fuels science — and taking turns guessing shows them that thinking is something you do together, out loud.',
    traits: ['Observation', 'Reasoning', 'Imagination', 'Vocabulary'],
    where: ['Car', 'Walk/Garden', 'Waiting', 'Mealtime', 'Anytime'],
    tweak: 'Harder: after guessing, ask "how could we find out?" — the seed of testing an idea.'
  }

];
