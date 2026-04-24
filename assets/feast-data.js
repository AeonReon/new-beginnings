// 52-week feast rotation. Four 13-week terms.
// Term 1 (Autumn): Bach + Rembrandt
// Term 2 (Winter): Handel + Vermeer
// Term 3 (Spring): Vivaldi + Monet
// Term 4 (Summer): Mozart + Van Gogh
//
// Hymn rotates monthly (12 hymns mapped across the year).
// Virtue rotates monthly.
// Poems, stories, nature prompts, practical life rotate weekly.
//
// All content is public domain or factual reference (title + author).
// Short poem bodies included where verified public domain.

window.HYMNS = {
  1: { title: 'All Things Bright and Beautiful', origin: 'C.F. Alexander, 1848', note: 'A catalogue of things made well — teaches the child to notice.' },
  2: { title: 'Now Thank We All Our God', origin: 'Martin Rinkart, 1636', note: 'Written during the Thirty Years\' War by a man who had every reason not to give thanks. Hence its power.' },
  3: { title: 'For the Beauty of the Earth', origin: 'Folliott Pierpoint, 1864', note: 'Gratitude for concrete, namable gifts — hills and vales, friend and kin.' },
  4: { title: 'O Come, All Ye Faithful', origin: '18th c. Latin (Adeste Fideles)', note: 'The Christmas carol that marches. Good for the darker months.' },
  5: { title: 'Be Thou My Vision', origin: 'Ancient Irish, trans. Eleanor Hull 1912', note: 'A prayer to let the deepest thing in you be what you see by. Sing slowly.' },
  6: { title: 'Come, Thou Fount of Every Blessing', origin: 'Robert Robinson, 1758', note: 'A song that admits you wander — which is why it works.' },
  7: { title: 'Morning Has Broken', origin: 'Eleanor Farjeon, 1931 (tune is older Gaelic)', note: 'Beginnings. Each morning is new. Perfect for spring.' },
  8: { title: 'This Is My Father\'s World', origin: 'Maltbie Babcock, 1901', note: '"In the rustling grass I hear Him pass." Trains attention to the world as a whole.' },
  9: { title: 'All Creatures of Our God and King', origin: 'St Francis of Assisi (1225), trans. Draper', note: 'Sun, moon, wind, fire — all addressed as brother and sister. A cosmic song.' },
  10: { title: 'Praise, My Soul, the King of Heaven', origin: 'Henry Francis Lyte, 1834', note: 'Based on Psalm 103. Sturdy, old, worth memorising.' },
  11: { title: 'Great Is Thy Faithfulness', origin: 'Thomas Chisholm, 1923', note: '"Morning by morning new mercies I see." A rhythm to learn.' },
  12: { title: 'Amazing Grace', origin: 'John Newton, 1779', note: 'Written by a former slave-trader who changed. Sing it because it names real transformation.' }
};

window.VIRTUES = {
  1:  { name: 'Attention', why: 'Attention is the first of all virtues because no other can act without it. A child who cannot attend cannot learn, love, or obey. Train it gently and early.' },
  2:  { name: 'Truthfulness', why: 'A child who lies to avoid consequence is learning that consequences can be escaped by words. A child who tells the truth in hard moments is learning that reality is the ground they stand on.' },
  3:  { name: 'Gratitude', why: 'Noticing what is given — food, warmth, a parent\'s patience — turns entitlement into relationship. It is also the simplest antidote to discontent.' },
  4:  { name: 'Courage', why: 'Courage is not fearlessness but doing the right thing while afraid. At four, it looks like finishing the hard puzzle, climbing the tree, telling the truth when it costs.' },
  5:  { name: 'Self-mastery', why: 'To wait, to share, to say no to oneself — these are small acts of temperance. The child who can do them at four will not be a slave to impulse at forty.' },
  6:  { name: 'Kindness', why: 'Kindness is attention to another\'s need, turned into action. It is learned by being shown kindness and by being given chances to give it.' },
  7:  { name: 'Wonder', why: 'Wonder is the parent of all learning. Guard it. A child who stops asking "why" is a child who has been trained out of being alive.' },
  8:  { name: 'Perseverance', why: 'Most worthwhile things are done by going on after the first burst of energy fades. The 4yo who finishes their puzzle is practising the same virtue that finishes marriages and manuscripts.' },
  9:  { name: 'Fairness', why: 'Fairness is the child\'s first grasp of justice — what I owe you, what you owe me, what happens when promises are broken. Honour it; do not argue it away.' },
  10: { name: 'Humility', why: 'Humility is not thinking less of yourself; it is thinking of yourself less. It is the virtue of the child who says "I was wrong" or "help me" without performance.' },
  11: { name: 'Generosity', why: 'A 4yo gives a biscuit to a friend, a shell to a parent, a picture to a sibling. Generosity precedes wealth; it is the habit that money later either amplifies or corrupts.' },
  12: { name: 'Wisdom', why: 'Wisdom at four is the slow accumulation of "I have seen this before." Read to them often, and let them stop you to ask.' }
};

// Helper: get composer and artist for a given week (1-52)
window.TERM_OF_WEEK = function(w) {
  if (w <= 13) return 'autumn';
  if (w <= 26) return 'winter';
  if (w <= 39) return 'spring';
  return 'summer';
};

window.COMPOSER_OF_WEEK = function(w) {
  if (w <= 13) return { name: 'Johann Sebastian Bach', era: 'Baroque, 1685–1750', why: 'Bach built music the way a cathedral is built — every line necessary, every voice carrying its own logic, the whole more than its parts. A 4yo doesn\'t need to know this; they just need to hear it.' };
  if (w <= 26) return { name: 'George Frideric Handel', era: 'Baroque, 1685–1759', why: 'Handel wrote for public occasions — coronations, fireworks, oratorios. His music teaches the ear what celebration sounds like.' };
  if (w <= 39) return { name: 'Antonio Vivaldi', era: 'Baroque, 1678–1741', why: 'Vivaldi painted pictures with sound — storms, birds, a sleeping shepherd. Good for the nature-noticing months.' };
  return { name: 'Wolfgang Amadeus Mozart', era: 'Classical, 1756–1791', why: 'Mozart is the great apparent simplicity — a tune so clear the child hums it after one hearing, yet made of small miracles. Trust what sounds easy; it is usually hard.' };
};

window.ARTIST_OF_WEEK = function(w) {
  if (w <= 13) return { name: 'Rembrandt van Rijn', era: 'Dutch Golden Age, 1606–1669', why: 'Rembrandt painted faces lit from within — as if the soul, not the sun, were the source of light. Children pick this up faster than adults.' };
  if (w <= 26) return { name: 'Johannes Vermeer', era: 'Dutch Golden Age, 1632–1675', why: 'Vermeer painted small rooms with huge stillness. A 4yo learns from him that ordinary light, falling on an ordinary woman pouring milk, is worth looking at.' };
  if (w <= 39) return { name: 'Claude Monet', era: 'Impressionism, 1840–1926', why: 'Monet painted the same haystack twenty-five times because the light was never the same twice. Teaches the eye to notice change.' };
  return { name: 'Vincent van Gogh', era: 'Post-Impressionism, 1853–1890', why: 'Van Gogh painted things as they feel, not as a camera sees them. A field of wheat is yellow because yellow is what it does to you.' };
};

window.FEAST = [
  // ============ TERM 1: AUTUMN — Bach + Rembrandt ============
  {
    week: 1,
    poem: {
      title: 'Who Has Seen the Wind?',
      author: 'Christina Rossetti',
      body: "Who has seen the wind?\nNeither I nor you:\nBut when the leaves hang trembling,\nThe wind is passing through.\n\nWho has seen the wind?\nNeither you nor I:\nBut when the trees bow down their heads,\nThe wind is passing by.",
      why: 'A good opening poem — about paying attention to what you can only know by its effects. The first thing the app asks the child (through you) is to notice.'
    },
    composer_piece: { title: 'Minuet in G (BWV Anh. 114)', note: 'Short, tuneful, easy to hum. Attributed to Bach for centuries; actually by Petzold, but close enough.' },
    artist_work: { title: 'Self-Portrait (any)', note: 'Rembrandt painted ~80 self-portraits across his life. Pick one; look; ask the child what kind of face it is.' },
    story: { title: 'The Hare and the Tortoise', kind: 'fable', source: 'Aesop', summary: 'The hare is fast and boasts; the tortoise is slow and keeps going. The hare sleeps; the tortoise wins. Why: because the virtue that finishes is perseverance, not talent.' },
    nature: { prompt: 'Find five leaves, each a different shape or colour. Name the trees if you know them; don\'t if you don\'t.', why: 'Autumn begins with difference. Naming isn\'t the point — noticing is.' },
    practical_life: { title: 'Pouring water between two small jugs', why: 'Builds bilateral coordination and patience. Spills are part of the lesson.' }
  },
  {
    week: 2,
    poem: {
      title: 'The Wind',
      author: 'Robert Louis Stevenson',
      body: "I saw you toss the kites on high\nAnd blow the birds about the sky;\nAnd all around I heard you pass,\nLike ladies' skirts across the grass—\nO wind, a-blowing all day long,\nO wind, that sings so loud a song!\n\nI saw the different things you did,\nBut always you yourself you hid.\nI felt you push, I heard you call,\nI could not see yourself at all—\nO wind, a-blowing all day long,\nO wind, that sings so loud a song!",
      why: 'Stevenson gives the wind a voice the child can imitate. Read it twice.'
    },
    composer_piece: { title: 'Air on the G String (from Orchestral Suite No. 3)', note: 'Slow, breath-like. Good for drawing time.' },
    artist_work: { title: 'The Return of the Prodigal Son (c. 1669)', note: 'A father\'s hands on a kneeling son. The light falls on both.' },
    story: { title: 'The North Wind and the Sun', kind: 'fable', source: 'Aesop', summary: 'Wind and sun compete to remove a traveller\'s coat. Wind blows harder; the man clutches tighter. Sun shines; the man removes it himself. Why: force hardens; warmth invites.' },
    nature: { prompt: 'Stand outside for five minutes and list every sound. Try again at night.', why: 'Attention before identification. The ear needs practice too.' },
    practical_life: { title: 'Sweeping a small area with a child-sized broom', why: 'Sweeping is satisfying because you can see the change. Real work, real result.' }
  },
  {
    week: 3,
    poem: {
      title: 'Twinkle, Twinkle, Little Star',
      author: 'Jane Taylor (1806)',
      body: "Twinkle, twinkle, little star,\nHow I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky.\n\nWhen the blazing sun is gone,\nWhen he nothing shines upon,\nThen you show your little light,\nTwinkle, twinkle, all the night.\n\nThen the traveller in the dark\nThanks you for your tiny spark;\nHe could not see which way to go,\nIf you did not twinkle so.",
      why: 'Most children only know the first verse. There are five. They are about gratitude and the uses of small light.'
    },
    composer_piece: { title: 'Jesu, Joy of Man\'s Desiring (from Cantata 147)', note: 'The tune every child already knows, played as Bach wrote it.' },
    artist_work: { title: 'The Storm on the Sea of Galilee (1633)', note: 'Fourteen people, one of them painted is Rembrandt himself, looking out. Have the child find him.' },
    story: { title: 'The Boy Who Cried Wolf', kind: 'fable', source: 'Aesop', summary: 'A shepherd boy cries wolf for fun; when the wolf really comes, no one believes him. Why: trust, once spent, takes years to rebuild. Truth is capital.' },
    nature: { prompt: 'Collect conkers, acorns, or seed pods. Line them up by size.', why: 'Sorting by one attribute is a mathematical act disguised as play.' },
    practical_life: { title: 'Setting the table for the family', why: 'A real, recurring contribution. Teaches sequence, spatial order, and responsibility.' }
  },
  {
    week: 4,
    poem: {
      title: 'My Shadow',
      author: 'Robert Louis Stevenson',
      body: "I have a little shadow that goes in and out with me,\nAnd what can be the use of him is more than I can see.\nHe is very, very like me from the heels up to the head;\nAnd I see him jump before me, when I jump into my bed.\n\nThe funniest thing about him is the way he likes to grow—\nNot at all like proper children, which is always very slow;\nFor he sometimes shoots up taller like an india-rubber ball,\nAnd he sometimes gets so little that there's none of him at all.",
      why: 'Shadows fascinate 4yos. This poem names the thing they\'re already watching.'
    },
    composer_piece: { title: 'Little Fugue in G minor (BWV 578)', note: 'Short, and the voices chase each other. Point them out as they enter.' },
    artist_work: { title: 'The Night Watch (1642)', note: 'Big group portrait made alive. Ask: who is moving? Who is still?' },
    story: { title: 'The Ant and the Grasshopper', kind: 'fable', source: 'Aesop', summary: 'Grasshopper sings all summer; ant stores food. Winter comes; grasshopper is hungry. Why: the work you do when you don\'t need to is the work that saves you later.' },
    nature: { prompt: 'Look for spider webs in the early morning — especially with dew. Don\'t break them.', why: 'A web is an animal\'s work made visible. The right response is awe.' },
    practical_life: { title: 'Folding napkins (cloth, not paper)', why: 'Fine motor + precision. Corners should meet corners.' }
  },
  {
    week: 5,
    poem: {
      title: 'Hurt No Living Thing',
      author: 'Christina Rossetti',
      body: "Hurt no living thing:\nLadybird, nor butterfly,\nNor moth with dusty wing,\nNor cricket chirping cheerily,\nNor grasshopper so light of leap,\nNor dancing gnat, nor beetle fat,\nNor harmless worms that creep.",
      why: 'A short catechism on mercy. Easy to memorise.'
    },
    composer_piece: { title: 'Sheep May Safely Graze (from Cantata 208)', note: 'Calm. Good for quiet time or rest.' },
    artist_work: { title: 'Philosopher in Meditation (1632)', note: 'An old man in a dim room, light falling through a high window. Stillness.' },
    story: { title: 'The Lion and the Mouse', kind: 'fable', source: 'Aesop', summary: 'A mouse spares a lion\'s sleep; the lion spares the mouse\'s life. Later, mouse gnaws lion free from a hunter\'s net. Why: no kindness is too small to matter; no one is too small to help.' },
    nature: { prompt: 'Find a worm. Watch it for two minutes. Return it to the earth where you found it.', why: 'Paying attention to a worm is exactly as worthwhile as paying attention to a lion.' },
    practical_life: { title: 'Using tongs to transfer small objects', why: 'Pincer-grip strength precedes pencil control. Tongs look like a game.' }
  },
  {
    week: 6,
    poem: {
      title: 'Rain',
      author: 'Robert Louis Stevenson',
      body: "The rain is raining all around,\nIt falls on field and tree,\nIt rains on the umbrellas here,\nAnd on the ships at sea.",
      why: 'Four lines. Memorise it in a week of wet weather.'
    },
    composer_piece: { title: 'Brandenburg Concerto No. 3, I. Allegro', note: 'Strings only. Energetic. Let the child move to it.' },
    artist_work: { title: 'The Syndics of the Drapers\' Guild (1662)', note: 'Six serious men looking up as if you just walked in. Ask the child what they want.' },
    story: { title: 'The Tortoise and the Hare (revisited)', kind: 'fable', source: 'Aesop', summary: 'Same as week 1. Tell again, differently. Repetition is pedagogy at four.' },
    nature: { prompt: 'Puddle day. Jump in the puddle. Come home wet. Change clothes.', why: 'Scandinavian friluftsliv: weather is not the enemy of outdoor time.' },
    practical_life: { title: 'Spreading butter on bread', why: 'Soft skill — literally. Teaches pressure modulation and sequence.' }
  },
  {
    week: 7,
    poem: {
      title: 'Windy Nights',
      author: 'Robert Louis Stevenson',
      body: "Whenever the moon and stars are set,\nWhenever the wind is high,\nAll night long in the dark and wet,\nA man goes riding by.\nLate in the night when the fires are out,\nWhy does he gallop and gallop about?",
      why: 'Slight darkness is good. Children like a touch of mystery before bed.'
    },
    composer_piece: { title: 'Toccata and Fugue in D minor (excerpt)', note: 'The famous organ opening. Play only 1–2 minutes; it is intense.' },
    artist_work: { title: 'Aristotle with a Bust of Homer (1653)', note: 'A philosopher\'s hand on a blind poet\'s head. One old mind honouring another.' },
    story: { title: 'The Fox and the Grapes', kind: 'fable', source: 'Aesop', summary: 'Fox can\'t reach the grapes, so decides they\'re sour. Why: we pretend not to want what we cannot have. Name this in yourself when you see it.' },
    nature: { prompt: 'Adopt a tree near your home. Visit it every week for a year. Watch it change.', why: 'One tree, deeply known, teaches more than a botanical garden.' },
    practical_life: { title: 'Polishing leaves with a soft cloth', why: 'A slow, quiet task. Builds reverence for a small green thing.' }
  },
  {
    week: 8,
    poem: {
      title: 'The Swing',
      author: 'Robert Louis Stevenson',
      body: "How do you like to go up in a swing,\n   Up in the air so blue?\nOh, I do think it the pleasantest thing\n   Ever a child can do!\n\nUp in the air and over the wall,\n   Till I can see so wide,\nRivers and trees and cattle and all\n   Over the country side—\n\nTill I look down on the garden green,\n   Down on the roof so brown—\nUp in the air I go flying again,\n   Up in the air and down!",
      why: 'A poem for a body the child already uses. Let them recite it on a swing.'
    },
    composer_piece: { title: 'Prelude in C major (Well-Tempered Clavier, Book I)', note: 'Simple, gentle, the first piece of Bach\'s great keyboard book.' },
    artist_work: { title: 'Belshazzar\'s Feast (c. 1635)', note: 'Shock on a face. The moment a mighty king realises everything is over.' },
    story: { title: 'The Dog and His Reflection', kind: 'fable', source: 'Aesop', summary: 'Dog with a bone sees his reflection in water and thinks the other dog has a bigger bone. He opens his mouth to grab it and drops his own. Why: envy costs you what you already have.' },
    nature: { prompt: 'Squirrel-watching. Find one; follow it without spooking it.', why: 'Stillness is a skill. Children develop it by needing to.' },
    practical_life: { title: 'Dusting with a soft cloth', why: 'The whole surface, corner to corner. Thoroughness is a virtue you see dust teach.' }
  },
  {
    week: 9,
    poem: {
      title: 'Mary Had a Little Lamb',
      author: 'Sarah Josepha Hale (1830)',
      body: "Mary had a little lamb,\nIts fleece was white as snow;\nAnd everywhere that Mary went,\nThe lamb was sure to go.\n\nIt followed her to school one day,\nWhich was against the rule;\nIt made the children laugh and play\nTo see a lamb at school.",
      why: 'The full version is longer. Children feel the rhythm.'
    },
    composer_piece: { title: 'Wachet Auf (Sleepers, Wake! — chorale)', note: 'A hymn-tune that feels like morning.' },
    artist_work: { title: 'The Jewish Bride (c. 1665)', note: 'Two hands. That\'s the whole painting, really.' },
    story: { title: 'The Crow and the Pitcher', kind: 'fable', source: 'Aesop', summary: 'A thirsty crow finds a pitcher with a little water at the bottom. He drops pebbles in one by one until the water rises. Why: problems that look impossible yield to steady small effort.' },
    nature: { prompt: 'Find a bird\'s feather. Draw it carefully.', why: 'To draw a thing is to see it. Drawing teaches the eye what looking alone does not.' },
    practical_life: { title: 'Scrubbing potatoes with a brush', why: 'Food preparation as practical life. The child eats what they\'ve worked on.' }
  },
  {
    week: 10,
    poem: {
      title: 'At the Seaside',
      author: 'Robert Louis Stevenson',
      body: "When I was down beside the sea\nA wooden spade they gave to me\n   To dig the sandy shore.\n\nMy holes were empty like a cup,\nIn every hole the sea came up,\n   Till it could come no more.",
      why: 'The moment every child recognises: the sea filling your hole whether you asked or not.'
    },
    composer_piece: { title: 'Double Violin Concerto in D minor, II. Largo', note: 'Two violins in conversation. Tender.' },
    artist_work: { title: 'Portrait of Saskia (1633)', note: 'Rembrandt\'s young wife, painted in love.' },
    story: { title: 'The Honest Woodcutter (Mercury and the Woodman)', kind: 'fable', source: 'Aesop', summary: 'A woodcutter drops his axe into a river. Mercury offers him a gold axe, then a silver one; he refuses both. Mercury rewards his honesty with his own and the gold and silver axes too. Why: truthfulness is a kind of wealth you can\'t buy.' },
    nature: { prompt: 'Look at the full moon this week if the sky is clear. Notice which night it is fullest.', why: 'A 4yo can learn the moon has a shape that changes. That\'s enough.' },
    practical_life: { title: 'Chopping banana with a butter knife', why: 'First chopping skill. Banana is safe, forgiving, delicious.' }
  },
  {
    week: 11,
    poem: {
      title: 'The Moon',
      author: 'Robert Louis Stevenson',
      body: "The moon has a face like the clock in the hall;\nShe shines on thieves on the garden wall,\nOn streets and fields and harbour quays,\nAnd birdies asleep in the forks of the trees.",
      why: 'Four short lines that put the child in a big world.'
    },
    composer_piece: { title: 'Cello Suite No. 1 in G major, Prelude', note: 'One instrument, one voice. Spacious.' },
    artist_work: { title: 'Portrait of Jan Six (1654)', note: 'A man pulling on a glove, caught mid-motion. Rembrandt painted time.' },
    story: { title: 'Androcles and the Lion', kind: 'legend', source: 'Roman tradition', summary: 'Slave Androcles removes a thorn from a lion\'s paw. Years later, condemned to the arena, the same lion is set on him — and remembers. Why: kindness returns, sometimes across years.' },
    nature: { prompt: 'Gather acorns. Try to plant one in a pot and watch through winter.', why: 'Teaches the long game. Trees are slow.' },
    practical_life: { title: 'Sharpening a pencil (hand sharpener, supervised)', why: 'Small, focused, repeatable. Watching the curl of wood is the reward.' }
  },
  {
    week: 12,
    poem: {
      title: 'The Lamb',
      author: 'William Blake',
      body: "Little lamb, who made thee?\nDost thou know who made thee,\nGave thee life, and bid thee feed\nBy the stream and o'er the mead;\nGave thee clothing of delight,\nSoftest clothing, woolly, bright;\nGave thee such a tender voice,\nMaking all the vales rejoice?\n   Little lamb, who made thee?\n   Dost thou know who made thee?",
      why: 'Blake asks children the first real question. You do not have to answer it for them.'
    },
    composer_piece: { title: 'Brandenburg Concerto No. 2, III. Allegro assai', note: 'Trumpet, recorder, oboe, violin — four soloists racing.' },
    artist_work: { title: 'Christ in the Storm on the Sea of Galilee (1633)', note: 'The boat almost overturned, and one figure asleep. Ask what the child notices first.' },
    story: { title: 'Baucis and Philemon', kind: 'myth', source: 'Ovid (child retelling)', summary: 'An old couple give bread and wine to two tired travellers, not knowing they are gods. Their generosity is rewarded; they spend their old age together as trees. Why: hospitality to strangers is one of the oldest tests of character.' },
    nature: { prompt: 'The first frost. Put a bowl of water out overnight. See what happens.', why: 'Ice is a phase change. You don\'t explain it; you let the child see it.' },
    practical_life: { title: 'Arranging flowers (real ones, in a child-sized vase)', why: 'The child decides what beauty looks like today. You do not correct.' }
  },
  {
    week: 13,
    poem: {
      title: 'Hey Diddle Diddle',
      author: 'Mother Goose',
      body: "Hey diddle diddle,\nThe cat and the fiddle,\nThe cow jumped over the moon;\nThe little dog laughed\nTo see such sport,\nAnd the dish ran away with the spoon.",
      why: 'Nonsense is practice for meaning. The child will insist on hearing it again.'
    },
    composer_piece: { title: 'Cantata BWV 140 — "Wachet Auf" chorale', note: 'The culmination of term 1. Solemn, full-hearted.' },
    artist_work: { title: 'Susanna and the Elders (1647)', note: 'A story of courage and false accusation. Rembrandt paints the moment before the lie is exposed.' },
    story: { title: 'Demeter and Persephone (abridged)', kind: 'myth', source: 'Greek', summary: 'A mother\'s daughter is taken to the underworld. The mother\'s grief stops the growing of things. A compromise: the daughter returns six months a year. Why: the seasons are an old story about love and loss and return.' },
    nature: { prompt: 'The last walk of autumn. Say goodbye to the trees before they are bare.', why: 'Names the ending. Ritual teaches the child that cycles close and open.' },
    practical_life: { title: 'Cracking an egg into a bowl', why: 'Messy, satisfying, real. A spilled egg is fine; you clean it up together.' }
  },

  // ============ TERM 2: WINTER — Handel + Vermeer ============
  {
    week: 14,
    poem: {
      title: 'Humpty Dumpty',
      author: 'Mother Goose',
      body: "Humpty Dumpty sat on a wall,\nHumpty Dumpty had a great fall.\nAll the King's horses and all the King's men\nCouldn't put Humpty together again.",
      why: 'The original is four lines. Some things, once broken, stay broken. This is knowledge worth having early.'
    },
    composer_piece: { title: 'Hallelujah Chorus (from Messiah)', note: 'The piece every Western ear half-knows. Play it loud, once.' },
    artist_work: { title: 'The Milkmaid (c. 1658)', note: 'A woman pouring milk from a jug. Nothing happens. Look for ten minutes.' },
    story: { title: 'Pandora\'s Box', kind: 'myth', source: 'Greek', summary: 'Pandora is told not to open a box. She does. All the troubles of the world fly out. At the bottom: hope. Why: our instinct to know can cause harm, but hope remains.' },
    nature: { prompt: 'Walk after dark. Notice which windows glow, which stars are out.', why: 'Winter teaches the value of warmth and light by withholding them.' },
    practical_life: { title: 'Grating cheese (small block, close supervision)', why: 'Controlled force. Real tool, real help with dinner.' }
  },
  {
    week: 15,
    poem: {
      title: 'Jack and Jill',
      author: 'Mother Goose',
      body: "Jack and Jill went up the hill\nTo fetch a pail of water.\nJack fell down and broke his crown,\nAnd Jill came tumbling after.\n\nUp Jack got and home did trot\nAs fast as he could caper;\nHe went to bed to mend his head\nWith vinegar and brown paper.",
      why: 'Rhythm, falling, getting up. The pattern of every day of being four.'
    },
    composer_piece: { title: 'Water Music, Suite in F, Allegro (Hornpipe)', note: 'Written for a royal boat trip on the Thames. Dance to it.' },
    artist_work: { title: 'View of Delft (c. 1660)', note: 'One of the greatest city paintings ever made. Clouds, water, a town across the river.' },
    story: { title: 'King Midas and the Golden Touch', kind: 'myth', source: 'Greek', summary: 'Midas wishes everything he touches turns to gold. It does. Including his daughter. Why: not everything worth having survives being treated as wealth.' },
    nature: { prompt: 'Hunt for animal tracks in mud or snow. Name the animal if you can, guess if you can\'t.', why: 'Evidence of what you did not see. A detective\'s skill.' },
    practical_life: { title: 'Kneading bread dough', why: 'Whole-body work. The dough changes under the hands. Smell tells you when it\'s ready.' }
  },
  {
    week: 16,
    poem: {
      title: 'Little Bo Peep',
      author: 'Mother Goose',
      body: "Little Bo Peep has lost her sheep\nAnd can't tell where to find them;\nLeave them alone, and they'll come home,\nBringing their tails behind them.",
      why: 'Four lines of trust. Sometimes you let the thing return.'
    },
    composer_piece: { title: 'Arrival of the Queen of Sheba (from Solomon)', note: 'Two oboes dart about. Good marching music for a small child.' },
    artist_work: { title: 'Girl with a Pearl Earring (c. 1665)', note: 'Look at the light on the pearl. Look at the light on the lip. Turn away; remember the face.' },
    story: { title: 'Daedalus and Icarus', kind: 'myth', source: 'Greek', summary: 'Father makes wax wings for himself and his son; warns the boy not to fly too close to the sun. Son forgets; wings melt; boy falls into the sea. Why: warnings from people who love us are usually true.' },
    nature: { prompt: 'Feed the birds. Hang a seed feeder. See who comes.', why: 'A 4yo learns by watching. Birds are the easiest wildlife to host.' },
    practical_life: { title: 'Matching socks from a clean pile', why: 'Classification by attribute. A real help that teaches real maths.' }
  },
  {
    week: 17,
    poem: {
      title: 'Ring Around the Rosie',
      author: 'Mother Goose',
      body: "Ring around the rosie,\nA pocket full of posies,\nAshes, ashes,\nWe all fall down.",
      why: 'Sing it holding hands with the child. Some poems are also games.'
    },
    composer_piece: { title: 'Music for the Royal Fireworks, La Réjouissance', note: 'Literally: "the rejoicing." Trumpets and drums. Play loud.' },
    artist_work: { title: 'The Geographer (1669)', note: 'A man with dividers over a map by a window. Focus rendered visible.' },
    story: { title: 'Arachne', kind: 'myth', source: 'Greek', summary: 'A weaver boasts she is better than Athena. They compete. Her weaving is perfect but her pride is unforgiven; she is turned into a spider. Why: skill without humility invites consequences.' },
    nature: { prompt: 'On the coldest morning: your own breath. Watch it cloud. Run.', why: 'Your breath is warmer than the air. That\'s the whole lesson.' },
    practical_life: { title: 'Folding laundry (simple items — tea towels, flannels)', why: 'Corners to corners. Smooths with the hand. Stack.' }
  },
  {
    week: 18,
    poem: {
      title: 'Hickory Dickory Dock',
      author: 'Mother Goose',
      body: "Hickory, dickory, dock,\nThe mouse ran up the clock;\nThe clock struck one,\nThe mouse ran down,\nHickory, dickory, dock.",
      why: 'Numbers embedded in rhythm. The child learns "one" as a sound as well as a concept.'
    },
    composer_piece: { title: 'He Shall Feed His Flock (from Messiah)', note: 'Lullaby-like, tender. Rest music.' },
    artist_work: { title: 'The Astronomer (1668)', note: 'A man\'s hand on a celestial globe. Pair it with last week\'s Geographer — a pair about knowing.' },
    story: { title: 'The Tortoise and the Eagle', kind: 'fable', source: 'Aesop', summary: 'Tortoise asks the eagle to teach him to fly. Eagle warns him it is not his nature. Tortoise insists. Eagle drops him; tortoise shatters. Why: know what you are. Not every wish is wisdom.' },
    nature: { prompt: 'Examine a single snowflake (if you have snow) or a frosted leaf. Use a magnifier.', why: 'Small things reward close looking. This is the habit of a scientist and a saint both.' },
    practical_life: { title: 'Stirring a pot on a cold stove (practice) then a warm one (supervised)', why: 'Wrist motion. Patience. Trust.' }
  },
  {
    week: 19,
    poem: {
      title: 'Baa, Baa, Black Sheep',
      author: 'Mother Goose',
      body: "Baa, baa, black sheep,\nHave you any wool?\nYes, sir, yes, sir,\nThree bags full.\nOne for my master,\nOne for my dame,\nAnd one for the little boy\nWho lives down the lane.",
      why: 'An economy in eight lines. The wool is shared three ways.'
    },
    composer_piece: { title: 'Worthy Is the Lamb (from Messiah)', note: 'The Messiah ending. Fullness.' },
    artist_work: { title: 'Young Woman with a Water Pitcher (c. 1662)', note: 'Vermeer\'s blue cloth. The quality of a quiet morning.' },
    story: { title: 'Echo and Narcissus', kind: 'myth', source: 'Greek', summary: 'A nymph who can only repeat others falls in love with a boy who can only love his own reflection. Both fade. Why: love is a meeting. Neither mirror nor echo suffices.' },
    nature: { prompt: 'The solstice week. Notice how early it gets dark. Light a candle at supper.', why: 'Ritual marks the turn of the year. Candlelight in the shortest days is old and good.' },
    practical_life: { title: 'Lighting a candle with a long match (parent strikes; child places)', why: 'A real privilege, treated as one. Fire is serious and lovely.' }
  },
  {
    week: 20,
    poem: {
      title: 'Three Blind Mice',
      author: 'Mother Goose',
      body: "Three blind mice, three blind mice,\nSee how they run, see how they run!\nThey all ran after the farmer's wife,\nWho cut off their tails with a carving knife.\nDid you ever see such a thing in your life\nAs three blind mice?",
      why: 'Children love this because it is slightly gruesome. Don\'t sanitise it.'
    },
    composer_piece: { title: 'Xerxes: Largo ("Ombra mai fù")', note: 'An aria to a plane tree. Pure melody.' },
    artist_work: { title: 'A Lady Writing (c. 1665)', note: 'A yellow jacket, a letter in progress. Who is she writing to?' },
    story: { title: 'Prometheus and the Gift of Fire', kind: 'myth', source: 'Greek', summary: 'Prometheus steals fire from the gods and gives it to humans. He is punished forever. Why: sometimes giving what is needed costs the giver everything.' },
    nature: { prompt: 'Constellations on a clear night. Find Orion (winter sky in the Northern Hemisphere).', why: 'Stars are the oldest field guide. Naming a constellation is a small rite of passage.' },
    practical_life: { title: 'Washing dishes (hand-wash, warm soapy water, small things)', why: 'Water play with a purpose. The child becomes a contributor, not a consumer.' }
  },
  {
    week: 21,
    poem: {
      title: 'This Little Piggy',
      author: 'Mother Goose',
      body: "This little piggy went to market,\nThis little piggy stayed home,\nThis little piggy had roast beef,\nThis little piggy had none,\nAnd this little piggy cried wee-wee-wee all the way home.",
      why: 'For bedtime, for toes, for the belly laugh at the end.'
    },
    composer_piece: { title: 'For Unto Us a Child Is Born (Messiah)', note: 'Choir weaving voices. Bach-like architecture.' },
    artist_work: { title: 'The Lacemaker (c. 1670)', note: 'Tiny painting of tiny concentration. Vermeer\'s smallest work.' },
    story: { title: 'The Fox and the Crow', kind: 'fable', source: 'Aesop', summary: 'Crow has cheese. Fox flatters crow into singing; cheese falls; fox gets it. Why: flattery is almost always a setup. Notice when someone praises you just as they ask for something.' },
    nature: { prompt: 'Evergreens in winter: holly, pine, fir. Smell them.', why: 'Plants that do not die back tell a child that life persists through winter.' },
    practical_life: { title: 'Sorting cutlery from a drainer into a drawer', why: 'Classification, coordination, help with a real recurring task.' }
  },
  {
    week: 22,
    poem: {
      title: 'Little Miss Muffet',
      author: 'Mother Goose',
      body: "Little Miss Muffet sat on a tuffet,\nEating her curds and whey;\nAlong came a spider\nWho sat down beside her,\nAnd frightened Miss Muffet away.",
      why: 'Short, with a pleasing internal rhyme.'
    },
    composer_piece: { title: 'Zadok the Priest', note: 'Handel\'s coronation anthem — played at every British coronation since 1727.' },
    artist_work: { title: 'Woman Holding a Balance (c. 1663)', note: 'A woman pregnant, weighing empty pans. Symbolism is layered; start with what\'s there.' },
    story: { title: 'The Emperor\'s New Clothes (H.C. Andersen)', kind: 'tale', source: 'Hans Christian Andersen', summary: 'An emperor is conned into buying invisible clothes no fool can see. He parades naked; a child finally says so. Why: the truth is often obvious and only a child will say it.' },
    nature: { prompt: 'Bird identification: learn three you can name for sure. Robin, sparrow, pigeon is a fine start.', why: 'A child who names three birds starts to notice birds. Naming opens attention.' },
    practical_life: { title: 'Making a simple salad (tearing lettuce, adding tomatoes)', why: 'Food the child makes is food the child eats. Autonomy at the table.' }
  },
  {
    week: 23,
    poem: {
      title: 'Little Boy Blue',
      author: 'Mother Goose',
      body: "Little Boy Blue, come, blow your horn!\nThe sheep's in the meadow, the cow's in the corn.\nWhere is the little boy that looks after the sheep?\nUnder the haystack, fast asleep.",
      why: 'A scene. The child imagines each line.'
    },
    composer_piece: { title: 'Where\'er You Walk (from Semele)', note: 'A tenor aria of gentleness. The world is kinder where you are.' },
    artist_work: { title: 'The Little Street (c. 1658)', note: 'Just a little street in Delft. Look until you see the bricks.' },
    story: { title: 'The Goose That Laid the Golden Eggs', kind: 'fable', source: 'Aesop', summary: 'A man has a goose that lays one gold egg a day. He kills the goose to get all the gold at once. There is none. Why: some sources yield to patience. Greed breaks the source.' },
    nature: { prompt: 'First signs of winter ending: buds swelling, the light longer. Look for them even if it\'s cold.', why: 'A 4yo can learn that change is happening before it is visible. That is the shape of faith.' },
    practical_life: { title: 'Peeling an orange (start the skin; child finishes)', why: 'Smell, grip, pulling apart. Hands at work before brain.' }
  },
  {
    week: 24,
    poem: {
      title: 'I Saw a Ship A-Sailing',
      author: 'Mother Goose',
      body: "I saw a ship a-sailing,\nA-sailing on the sea;\nAnd it was full of pretty things\nFor baby and for me.\nThere were comfits in the cabin,\nAnd apples in the hold;\nThe sails were made of silk,\nAnd the masts were made of gold.",
      why: 'A miniature epic. Children love a cargo list.'
    },
    composer_piece: { title: 'Harmonious Blacksmith (Air and Variations)', note: 'A theme, then variations. Good for showing how a thing can grow.' },
    artist_work: { title: 'Officer and Laughing Girl (c. 1658)', note: 'A soldier\'s red hat, a girl with a glass. Vermeer painted pleasure too.' },
    story: { title: 'The Shepherd Boy and the Wolf', kind: 'fable', source: 'Aesop (variant)', summary: 'Same spine as week 3, different details. Repetition fixes the lesson.' },
    nature: { prompt: 'Try to catch the sunrise. Just once this week. Bring a hot drink.', why: 'Doing something once is often enough to mark the year.' },
    practical_life: { title: 'Opening and closing jars of different sizes', why: 'Strength, practice, the satisfaction of the pop.' }
  },
  {
    week: 25,
    poem: {
      title: 'Pat-a-Cake',
      author: 'Mother Goose',
      body: "Pat-a-cake, pat-a-cake, baker's man.\nBake me a cake as fast as you can;\nPat it and prick it and mark it with B,\nAnd put it in the oven for baby and me.",
      why: 'Do the clapping. The hands learn before the head.'
    },
    composer_piece: { title: 'Let the Bright Seraphim (from Samson)', note: 'Soprano plus trumpet. Rousing.' },
    artist_work: { title: 'The Art of Painting (c. 1666)', note: 'Vermeer painting a woman who is painting. A self-portrait from behind.' },
    story: { title: 'Orpheus and Eurydice (abridged, gently)', kind: 'myth', source: 'Greek', summary: 'Orpheus sings so sweetly that he can lead his dead wife out of the underworld — if he does not look back. He looks. Why: obedience to an arbitrary rule is often really a test of trust. Tell it honestly.' },
    nature: { prompt: 'On a clear cold night, look for the Big Dipper / Plough. Trace it with a finger in the air.', why: 'Constellations are the child\'s first geometry in the sky.' },
    practical_life: { title: 'Rolling out dough with a child-sized rolling pin', why: 'Whole-body coordination. Reward is something to eat.' }
  },
  {
    week: 26,
    poem: {
      title: 'I Had a Little Nut Tree',
      author: 'Mother Goose',
      body: "I had a little nut tree,\nNothing would it bear\nBut a silver nutmeg\nAnd a golden pear.\nThe King of Spain's daughter\nCame to visit me,\nAnd all for the sake\nOf my little nut tree.",
      why: 'Nonsense with a grave face. The child learns to love image.'
    },
    composer_piece: { title: 'Dixit Dominus, opening', note: 'Handel at 22, full-voltage. Short attention spans can handle one minute.' },
    artist_work: { title: 'Girl Reading a Letter at an Open Window (c. 1657)', note: 'A letter we will never read. The whole painting is listening.' },
    story: { title: 'Theseus and the Minotaur', kind: 'myth', source: 'Greek', summary: 'A hero enters a labyrinth to kill a monster. He finds his way out because a princess gave him a thread. Why: the way back is often a small gift from someone who loves you.' },
    nature: { prompt: 'End of winter. Find the first crocus, aconite, snowdrop, or hellebore. Name it.', why: 'First flowers are news. Celebrate them.' },
    practical_life: { title: 'Cookie cutting from dough', why: 'The culmination of a baking day. The child produces something to share.' }
  },

  // ============ TERM 3: SPRING — Vivaldi + Monet ============
  {
    week: 27,
    poem: {
      title: 'Morning Has Broken',
      author: 'Eleanor Farjeon (1931) — reference only, still in copyright; sing the hymn instead',
      body: null,
      why: 'Farjeon\'s words are under copyright. Sing the hymn together; don\'t print it.'
    },
    composer_piece: { title: 'Spring (La Primavera), I. Allegro — Four Seasons', note: 'The chirping of birds. Point them out.' },
    artist_work: { title: 'Impression, Sunrise (1872)', note: 'The painting that named impressionism. Look until the orange sun wobbles.' },
    story: { title: 'The Ugly Duckling (H.C. Andersen)', kind: 'tale', source: 'Hans Christian Andersen', summary: 'A duckling grows up wrongly named. In the end he discovers he is a swan. Why: being wrongly named is painful and common. Sometimes the answer is to grow.' },
    nature: { prompt: 'First day warm enough to sit on the ground. Do it.', why: 'The body knows it\'s spring before the calendar says so.' },
    practical_life: { title: 'Planting seeds in a small pot', why: 'The slowest reward in the rotation. Water, watch, wait.' }
  },
  {
    week: 28,
    poem: {
      title: 'Daffodils (excerpt)',
      author: 'William Wordsworth',
      body: "I wandered lonely as a cloud\nThat floats on high o'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils;\nBeside the lake, beneath the trees,\nFluttering and dancing in the breeze.",
      why: 'Read the first stanza. The child sees the daffodils before they understand the word "host."'
    },
    composer_piece: { title: 'Spring, II. Largo', note: 'The sleeping shepherd. A drone, a melody, a dog barking in the viola.' },
    artist_work: { title: 'Water Lilies (series, 1896–1926)', note: 'Monet spent the last 30 years of his life painting his pond. Look at one.' },
    story: { title: 'The Sword in the Stone (Arthurian, child retelling)', kind: 'legend', source: 'Arthurian', summary: 'A boy pulls a sword from a stone that no man could move. He becomes king. Why: sometimes the test is designed to find the right person rather than the strongest.' },
    nature: { prompt: 'Listen for the first birdsong at dawn. Identify one voice.', why: 'The dawn chorus is the oldest music. Learning to hear one bird is the first step.' },
    practical_life: { title: 'Watering houseplants with a small jug', why: 'Regular care for something alive. A weekly responsibility.' }
  },
  {
    week: 29,
    poem: {
      title: 'Spring (excerpt)',
      author: 'William Blake',
      body: "Sound the flute!\nNow it's mute!\nBirds delight,\nDay and night,\nNightingale,\nIn the dale,\nLark in sky—\nMerrily, merrily, to welcome in the year.",
      why: 'Short lines, song-like.'
    },
    composer_piece: { title: 'Spring, III. Allegro', note: 'Country dance. Let the child actually dance.' },
    artist_work: { title: 'The Japanese Footbridge (1899)', note: 'A green bridge over a green pond. Everything alive.' },
    story: { title: 'The Little Red Hen', kind: 'folk', source: 'folk tale', summary: 'A hen asks who will help her plant, harvest, grind, bake. No one. Who will help her eat? Everyone. She eats it alone. Why: those who do not share the work do not share the bread. Fair.' },
    nature: { prompt: 'Visit a nesting bird (from a respectful distance). Don\'t touch.', why: 'Seeing a nest teaches both wonder and restraint.' },
    practical_life: { title: 'Cleaning a window with vinegar and cloth', why: 'See-through-ness is a visible reward. Streaks teach care.' }
  },
  {
    week: 30,
    poem: {
      title: 'The Cow',
      author: 'Robert Louis Stevenson',
      body: "The friendly cow all red and white,\nI love with all my heart:\nShe gives me cream with all her might,\nTo eat with apple-tart.",
      why: 'Four lines of gratitude aimed at a specific animal.'
    },
    composer_piece: { title: 'Summer (L\'Estate), III. Presto ("Storm")', note: 'Violins tear through thunder. Listen at the edge of a real spring storm if you\'re lucky.' },
    artist_work: { title: 'Poppies at Argenteuil (1873)', note: 'Red poppies among green. A woman and a child walking.' },
    story: { title: 'The Tale of Peter Rabbit', kind: 'story', source: 'Beatrix Potter, 1902', summary: 'A rabbit disobeys, is chased, loses his clothes. Comes home, gets chamomile tea. Why: disobedience has real costs, but home still forgives. Both are true.' },
    nature: { prompt: 'Lie down under a tree that has leafed out. Look up through leaves.', why: 'A different perspective on a familiar thing. This is what art does.' },
    practical_life: { title: 'Harvesting herbs (chives, mint, parsley) with scissors', why: 'First harvest. Smell, scent, food.' }
  },
  {
    week: 31,
    poem: {
      title: 'The Cuckoo',
      author: 'Mother Goose',
      body: "The cuckoo comes in April,\nShe sings her song in May;\nIn the middle of June\nShe changes her tune,\nAnd then she flies away.",
      why: 'A calendar in a rhyme. A migratory bird\'s whole year in five lines.'
    },
    composer_piece: { title: 'Autumn (L\'Autunno), I. Allegro', note: 'Harvest festival. Yes, it\'s spring — we\'re listening to the whole set across the term.' },
    artist_work: { title: 'Woman with a Parasol (1875)', note: 'Monet\'s wife and son on a summer day. Wind, clouds, motion.' },
    story: { title: 'The Three Little Pigs', kind: 'folk', source: 'folk tale', summary: 'Three pigs build houses — straw, sticks, brick. Wolf huffs. Why: what you build carefully stands; what you build in haste does not.' },
    nature: { prompt: 'First bee sighting. Stand still and watch it work.', why: 'A bee is a farmer. Telling a child this changes what they see.' },
    practical_life: { title: 'Grinding spices in a mortar and pestle', why: 'Smell fills the kitchen. Circular motion. Real cooking.' }
  },
  {
    week: 32,
    poem: {
      title: 'The Year\'s at the Spring (excerpt)',
      author: 'Robert Browning',
      body: "The year's at the spring,\nAnd day's at the morn;\nMorning's at seven;\nThe hillside's dew-pearled;\nThe lark's on the wing;\nThe snail's on the thorn:\nGod's in his heaven—\nAll's right with the world!",
      why: 'From "Pippa Passes." A child can feel the gladness even without parsing it.'
    },
    composer_piece: { title: 'Autumn, II. Adagio molto ("The Drunkards Asleep")', note: 'Muted strings, everyone dozing after the harvest feast. Children understand this.' },
    artist_work: { title: 'Haystacks (series, 1890–1891)', note: 'Same haystack, different times of day, different seasons. Show two or three side by side.' },
    story: { title: 'Goldilocks and the Three Bears', kind: 'folk', source: 'folk tale', summary: 'A girl walks into a strange house, breaks the chair, eats the porridge, sleeps in the bed. The bears come home. Why: homes are not public; other people\'s things are theirs.' },
    nature: { prompt: 'Tadpole hunt if you have a pond nearby. Look, don\'t keep.', why: 'Metamorphosis is too strange to explain. Let them watch it happen in a jar if you can.' },
    practical_life: { title: 'Using a child-safe peeler on a carrot', why: 'Real tool, close supervision. The long strips are delicious.' }
  },
  {
    week: 33,
    poem: {
      title: 'Foreign Lands',
      author: 'Robert Louis Stevenson',
      body: "Up into the cherry tree\nWho should climb but little me?\nI held the trunk with both my hands\nAnd looked abroad in foreign lands.\n\nI saw the next door garden lie,\nAdorned with flowers, before my eye,\nAnd many pleasant places more\nThat I had never seen before.",
      why: 'A child up a tree discovers a world.'
    },
    composer_piece: { title: 'Winter (L\'Inverno), II. Largo', note: 'A fire indoors, rain outside. Very quiet.' },
    artist_work: { title: 'The Magpie (1868–69)', note: 'One black-and-white bird on a gate in snow. Everything else is shades of white.' },
    story: { title: 'The Little House by Virginia Lee Burton', kind: 'picture book', source: 'Virginia Lee Burton, 1942', summary: 'A little country house is swallowed by the growing city. It is rescued and moved back to the country. Why: what once was home can be found again.' },
    nature: { prompt: 'First rainbow-hunt after rain. Stand with the sun behind you.', why: 'A rainbow is physics the child will learn later. For now: where is it?' },
    practical_life: { title: 'Sewing a button onto fabric (with help)', why: 'Threading, pushing, pulling. Something unravelled becomes something fixed.' }
  },
  {
    week: 34,
    poem: {
      title: 'My Bed Is a Boat',
      author: 'Robert Louis Stevenson',
      body: "My bed is like a little boat;\nNurse helps me in when I embark;\nShe girds me in my sailor's coat\nAnd starts me in the dark.",
      why: 'Bedtime reimagined as voyage.'
    },
    composer_piece: { title: 'Gloria in excelsis Deo (from Gloria in D)', note: 'Vivaldi\'s choral blaze. Three minutes of pure joy.' },
    artist_work: { title: 'Gare Saint-Lazare (1877)', note: 'Steam, roof beams, light. Not a cathedral — a train station. Monet saw the sublime in machines.' },
    story: { title: 'The Selfish Giant (Wilde, child retelling)', kind: 'tale', source: 'Oscar Wilde, 1888', summary: 'A giant drives children from his garden. Winter stays forever. When he lets them back, spring returns. Why: the world is not made better by shutting it out.' },
    nature: { prompt: 'Plant a bean in a jar with wet cotton wool. Watch roots grow.', why: 'The hidden life of a plant, made visible. A minor miracle.' },
    practical_life: { title: 'Making a simple sandwich (spreading, stacking, cutting in half)', why: 'Lunch, from scratch, by the child. Independence at the table.' }
  },
  {
    week: 35,
    poem: {
      title: 'April Rain Song',
      author: 'Langston Hughes',
      body: "Let the rain kiss you.\nLet the rain beat upon your head with silver liquid drops.\nLet the rain sing you a lullaby.\n\nThe rain makes still pools on the sidewalk.\nThe rain makes running pools in the gutter.\nThe rain plays a little sleep-song on our roof at night—\n\nAnd I love the rain.",
      why: 'Modernist but simple. A short manifesto for standing in weather.'
    },
    composer_piece: { title: 'Concerto for Two Violins in A minor, RV 522, I. Allegro moderato', note: 'Two voices in conversation.' },
    artist_work: { title: 'The Artist\'s Garden at Giverny (1900)', note: 'Monet\'s own garden — irises, apple trees, light on light.' },
    story: { title: 'The Lion and the Mouse (revisited)', kind: 'fable', source: 'Aesop', summary: 'Retell. Ask the child which is the stronger one.' },
    nature: { prompt: 'Spend 15 minutes in the rain on purpose. No umbrella, if weather allows.', why: 'A 4yo who has never been properly wet is missing a piece of childhood.' },
    practical_life: { title: 'Making a bed (with help pulling the duvet up)', why: 'A tidy bed is a small accomplished thing. The room tells a different story after.' }
  },
  {
    week: 36,
    poem: {
      title: 'The Little Turtle',
      author: 'Vachel Lindsay',
      body: "There was a little turtle.\nHe lived in a box.\nHe swam in a puddle.\nHe climbed on the rocks.\n\nHe snapped at a mosquito.\nHe snapped at a flea.\nHe snapped at a minnow.\nAnd he snapped at me.\n\nHe caught the mosquito.\nHe caught the flea.\nHe caught the minnow.\nBut he didn't catch me.",
      why: 'Rhythmic. A child asks for it again.'
    },
    composer_piece: { title: 'Mandolin Concerto in C, RV 425, I. Allegro', note: 'Bright and plucky. Short and complete.' },
    artist_work: { title: 'Rouen Cathedral (series, 1892–1894)', note: 'Same cathedral, many times, different light. Show three.' },
    story: { title: 'The Boy Who Drew Cats (Lafcadio Hearn)', kind: 'tale', source: 'Japanese tale retold by Hearn', summary: 'A boy obsessed with drawing cats is sent away from temple and home, but his drawings save his life. Why: do what you are made to do. It has uses you cannot yet imagine.' },
    nature: { prompt: 'Find a ladybird. Count spots. Don\'t keep it.', why: 'Small insects teach the 4yo to look without grabbing.' },
    practical_life: { title: 'Arranging a small vase of wildflowers', why: 'No wrong answer. The child decides what looks right.' }
  },
  {
    week: 37,
    poem: {
      title: 'Who Hath Seen the Wind? (revisited)',
      author: 'Christina Rossetti',
      body: "(see week 1)",
      why: 'Twice in a year. The 4yo now knows a poem by heart. Mark this.'
    },
    composer_piece: { title: 'Gloria: Et in terra pax', note: 'The peace after the opening blaze.' },
    artist_work: { title: 'Regatta at Argenteuil (1872)', note: 'Sailboats. Sky. The joy of a light-hearted afternoon.' },
    story: { title: 'Saint Francis and the Wolf of Gubbio', kind: 'legend', source: 'Franciscan tradition', summary: 'A wolf terrorises a town. Francis goes out alone, speaks to the wolf, and negotiates peace: the town feeds the wolf, the wolf stops hunting them. Why: conflict can yield to courage plus kindness, in that order.' },
    nature: { prompt: 'Find a puddle after rain. Look at your reflection in it. Disturb it.', why: 'A mirror of water is not the same as a mirror. Stillness is a condition for reflection.' },
    practical_life: { title: 'Whisking eggs for scrambled eggs', why: 'Wrist work. The child contributes to breakfast.' }
  },
  {
    week: 38,
    poem: {
      title: 'Jack Sprat',
      author: 'Mother Goose',
      body: "Jack Sprat could eat no fat,\nHis wife could eat no lean,\nAnd so betwixt them both, you see,\nThey licked the platter clean.",
      why: 'A marriage in four lines. Domestic economy.'
    },
    composer_piece: { title: 'Concerto for Four Violins in B minor, I', note: 'Four soloists. Bach liked this one so much he arranged it.' },
    artist_work: { title: 'The Bridge at Argenteuil (1874)', note: 'Iron bridge, wooden boats, blue water. Old and new side by side.' },
    story: { title: 'The Pied Piper of Hamelin', kind: 'legend', source: 'German tradition', summary: 'A town doesn\'t pay a rat-catcher for his work; he takes their children away. Why: broken promises have consequences the town cannot take back. A hard story. Tell it.' },
    nature: { prompt: 'Blossom week: cherry, apple, blackthorn. Stand under one when the wind blows.', why: 'Falling blossom is a few days of magic a year. Don\'t miss it.' },
    practical_life: { title: 'Threading beads or buttons on a string', why: 'Precision grip. A pretty result.' }
  },
  {
    week: 39,
    poem: {
      title: 'From a Railway Carriage',
      author: 'Robert Louis Stevenson',
      body: "Faster than fairies, faster than witches,\nBridges and houses, hedges and ditches;\nAnd charging along like troops in a battle,\nAll through the meadows the horses and cattle:\nAll of the sights of the hill and the plain\nFly as thick as driving rain;\nAnd ever again, in the wink of an eye,\nPainted stations whistle by.",
      why: 'Read at train speed. The child laughs.'
    },
    composer_piece: { title: 'Gloria: Domine Deus, Rex caelestis', note: 'Soprano aria. Sweet, long breath.' },
    artist_work: { title: 'Garden at Sainte-Adresse (1867)', note: 'Two people looking at the sea. The whole painting is summer.' },
    story: { title: 'The Hare and the Tortoise (retold)', kind: 'fable', source: 'Aesop', summary: 'Last time this year. The child can probably tell it to you now. Let them.' },
    nature: { prompt: 'Lambing season (if rural, visit a farm). Or: find any baby animal story.', why: 'Spring is about birth. Mark it.' },
    practical_life: { title: 'Polishing shoes (child-sized pair, soft brush)', why: 'Before a special day, a ritual. Teaches care for one\'s own things.' }
  },

  // ============ TERM 4: SUMMER — Mozart + Van Gogh ============
  {
    week: 40,
    poem: {
      title: 'Summer Sun',
      author: 'Robert Louis Stevenson',
      body: "Great is the sun, and wide he goes\nThrough empty heaven without repose;\nAnd in the blue and glowing days\nMore thick than rain he showers his rays.",
      why: 'Four lines that praise the thing the child already loves.'
    },
    composer_piece: { title: 'Eine Kleine Nachtmusik, I. Allegro', note: 'Every child\'s first Mozart. Hum it.' },
    artist_work: { title: 'Sunflowers (1888)', note: 'Yellow on yellow. Show the version in your nearest gallery if you can.' },
    story: { title: 'The Tale of Benjamin Bunny', kind: 'story', source: 'Beatrix Potter, 1904', summary: 'Peter\'s cousin Benjamin rescues Peter\'s clothes from Mr. McGregor\'s scarecrow. Chaos. Rescue by Old Mr. Bunny. Why: families show up for each other. Also, lettuce is soporific.' },
    nature: { prompt: 'Bees — watch them on flowers. Count how many you see in one minute.', why: 'Attention to small busy creatures is a foundation of science.' },
    practical_life: { title: 'Making lemonade (squeezing lemons, measuring sugar and water)', why: 'A summer ritual the child can do almost alone.' }
  },
  {
    week: 41,
    poem: {
      title: 'Bed in Summer',
      author: 'Robert Louis Stevenson',
      body: "In winter I get up at night\nAnd dress by yellow candle-light.\nIn summer quite the other way,\nI have to go to bed by day.\n\nI have to go to bed and see\nThe birds still hopping on the tree,\nOr hear the grown-up people's feet\nStill going past me in the street.\n\nAnd does it not seem hard to you,\nWhen all the sky is clear and blue,\nAnd I should like so much to play,\nTo have to go to bed by day?",
      why: 'The perennial summer injustice, named.'
    },
    composer_piece: { title: 'Eine Kleine Nachtmusik, II. Romanze', note: 'Slow, tender. Good for drawing time.' },
    artist_work: { title: 'The Starry Night (1889)', note: 'The most famous stars ever painted. Let the child tell you what they see.' },
    story: { title: 'Why the Sea Is Salty', kind: 'folk', source: 'Norwegian folk tale', summary: 'A magic grinder that can grind anything is dropped to the bottom of the sea and still grinds salt. That\'s why. Why: folk tales do not need to be scientifically correct to be worth telling.' },
    nature: { prompt: 'Find a butterfly. Watch it until it flies. Do not chase.', why: 'Patience is the only way to see a butterfly well.' },
    practical_life: { title: 'Sweeping the patio or porch', why: 'Outdoor work, visible result. Pride.' }
  },
  {
    week: 42,
    poem: {
      title: 'The Lamplighter',
      author: 'Robert Louis Stevenson',
      body: "My tea is nearly ready and the sun has left the sky;\nIt's time to take the window to see Leerie going by;\nFor every night at teatime and before you take your seat,\nWith lantern and with ladder he comes posting up the street.",
      why: 'A vanished trade, made alive for a child who has seen no lamplighter.'
    },
    composer_piece: { title: 'Turkish March (Piano Sonata No. 11, K.331, III. Rondo alla Turca)', note: 'Catchy, fast. Children want it repeated.' },
    artist_work: { title: 'The Bedroom (1888)', note: 'Van Gogh\'s own small room. Yellow bed, red blanket, three paintings on the wall.' },
    story: { title: 'The Tale of Squirrel Nutkin', kind: 'story', source: 'Beatrix Potter, 1903', summary: 'Nutkin is rude to Old Brown Owl and loses his tail. Why: cheek has limits.' },
    nature: { prompt: 'Long shadows at sunset. Trace one with chalk on the pavement.', why: 'The sun\'s angle tells time. A sundial is a child\'s first physics.' },
    practical_life: { title: 'Pouring dry rice or lentils from a jug to a cup', why: 'Before liquids, dry pouring. Easier mess to clean up.' }
  },
  {
    week: 43,
    poem: {
      title: 'A Good Play',
      author: 'Robert Louis Stevenson',
      body: "We built a ship upon the stairs\nAll made of the back-bedroom chairs,\nAnd filled it full of soft pillows\nTo go a-sailing on the billows.\n\nWe took a saw and several nails,\nAnd water in the nursery pails;\nAnd Tom said, \"Let us also take\nAn apple and a slice of cake\"—\nWhich was enough for Tom and me\nTo go a-sailing on, till tea.",
      why: 'A child\'s whole day in ten lines. Read it twice.'
    },
    composer_piece: { title: 'Ave Verum Corpus, K.618', note: 'Three minutes of perfect calm. For bedtime or church or rest.' },
    artist_work: { title: 'Café Terrace at Night (1888)', note: 'Yellow light, blue sky, no black in the picture. Van Gogh painted night without darkness.' },
    story: { title: 'The Tale of Jemima Puddle-Duck', kind: 'story', source: 'Beatrix Potter, 1908', summary: 'A duck finds a charming "gentleman with sandy whiskers" (a fox) who offers his home for her eggs. She is rescued. Why: charm is not the same as safety. Some warnings save lives.' },
    nature: { prompt: 'Picnic outside. No phones. Bring a book to read.', why: 'A meal eaten outside is a different meal. Summer should have many of them.' },
    practical_life: { title: 'Making tea (with help pouring the hot water)', why: 'A ritual borrowed from a long tradition. Done slowly.' }
  },
  {
    week: 44,
    poem: {
      title: 'Pease Porridge Hot',
      author: 'Mother Goose',
      body: "Pease porridge hot, pease porridge cold,\nPease porridge in the pot, nine days old.\nSome like it hot, some like it cold,\nSome like it in the pot, nine days old.",
      why: 'Clap it. A 4yo can do complicated claps when the rhyme carries them.'
    },
    composer_piece: { title: 'Laudate Dominum (Vesperae solennes de confessore)', note: 'Soprano soars. Five minutes of grace.' },
    artist_work: { title: 'Almond Blossoms (1890)', note: 'Van Gogh painted this for his newborn nephew. White flowers on blue.' },
    story: { title: 'The Tale of Mrs. Tiggy-Winkle', kind: 'story', source: 'Beatrix Potter, 1905', summary: 'A hedgehog who does the laundry of the forest. A girl follows her and helps. Why: washing is a kindness. So is accompanying someone in their work.' },
    nature: { prompt: 'Paddle in a stream or the sea. Notice how cold it is even on a hot day.', why: 'Temperature contrast is a fact worth feeling.' },
    practical_life: { title: 'Hanging washing on a line with pegs', why: 'Fine motor + outdoor task. The sheets come in smelling of sun.' }
  },
  {
    week: 45,
    poem: {
      title: 'A Boat Beneath a Sunny Sky',
      author: 'Lewis Carroll',
      body: "A boat beneath a sunny sky,\nLingering onward dreamily\nIn an evening of July—\n\nChildren three that nestle near,\nEager eye and willing ear,\nPleased a simple tale to hear—",
      why: 'The afterword to Alice in Wonderland. A hymn to summer evenings with children.'
    },
    composer_piece: { title: 'Clarinet Concerto in A major, II. Adagio', note: 'One of the most beautiful things Mozart wrote. Slow.' },
    artist_work: { title: 'Wheatfield with Crows (1890)', note: 'Painted weeks before Van Gogh\'s death. Sky, wheat, crows.' },
    story: { title: 'The Tale of the Pie and the Patty-Pan', kind: 'story', source: 'Beatrix Potter, 1905', summary: 'A cat and a dog invite each other to tea, and confusion over pie ensues. Why: hospitality has its small mysteries.' },
    nature: { prompt: 'Lie in grass. Find four-leaf clovers, or just lie there.', why: 'Empty time is not empty. It is where a 4yo\'s mind arranges itself.' },
    practical_life: { title: 'Sorting laundry by colour before washing', why: 'Classification with a useful real result.' }
  },
  {
    week: 46,
    poem: {
      title: 'The Lobster Quadrille',
      author: 'Lewis Carroll',
      body: "\"Will you walk a little faster?\" said a whiting to a snail,\n\"There's a porpoise close behind us, and he's treading on my tail.\nSee how eagerly the lobsters and the turtles all advance!\nThey are waiting on the shingle—will you come and join the dance?\n\nWill you, won't you, will you, won't you, will you join the dance?\nWill you, won't you, will you, won't you, won't you join the dance?\"",
      why: 'Nonsense with a beat. The child will ask what a whiting is. Tell them.'
    },
    composer_piece: { title: 'Symphony No. 40 in G minor, I. Molto allegro', note: 'One of the most famous tunes in music. The opening bars are enough.' },
    artist_work: { title: 'The Sower (1888)', note: 'A dark figure scattering seed against a huge yellow sun.' },
    story: { title: 'How the Camel Got His Hump', kind: 'just-so', source: 'Rudyard Kipling (Just So Stories, 1902)', summary: 'Camel refuses to work, says "Humph." The Djinn gives him a hump so he can work three days without food. Why: refusing work doesn\'t free you from it; it changes how you have to carry it.' },
    nature: { prompt: 'Grasshopper or cricket hunt in long grass. Listen first; look second.', why: 'Summer insects are loud. Finding the maker is good pattern-matching practice.' },
    practical_life: { title: 'Carrying a tray with two glasses of water across a room', why: 'Balance, care, delivery. A small serious errand.' }
  },
  {
    week: 47,
    poem: {
      title: 'The Fly',
      author: 'William Blake',
      body: "Little Fly,\nThy summer's play\nMy thoughtless hand\nHas brush'd away.\n\nAm not I\nA fly like thee?\nOr art not thou\nA man like me?",
      why: 'Blake stops you. Read it once; let silence follow.'
    },
    composer_piece: { title: 'Symphony No. 25 in G minor, I. Allegro con brio', note: 'The young Mozart at 17. Urgent.' },
    artist_work: { title: 'Self-Portrait with Bandaged Ear (1889)', note: 'Van Gogh after his worst crisis. Shown honestly, not sensationally.' },
    story: { title: 'The Selfish Giant (revisited)', kind: 'tale', source: 'Oscar Wilde', summary: 'Tell again. The 4yo now remembers the second half.' },
    nature: { prompt: 'Watch ants. Find a line of them carrying things. Follow it.', why: 'Ants are a civilisation on the ground. Look down more.' },
    practical_life: { title: 'Wiping down a table after a meal', why: 'Circular wiping motion. Self-selection of the dirty spots. Pride in a clean table.' }
  },
  {
    week: 48,
    poem: {
      title: 'The Tyger (first stanza)',
      author: 'William Blake',
      body: "Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?",
      why: 'Old English, strange spelling. The music is what matters first; the meaning arrives later.'
    },
    composer_piece: { title: 'Piano Concerto No. 21 in C, II. Andante ("Elvira Madigan")', note: 'Slow. Gorgeous. Ten minutes of peace.' },
    artist_work: { title: 'The Potato Eaters (1885)', note: 'An early Van Gogh, dark. Five peasants around a lamp, eating what they grew.' },
    story: { title: 'Cinderella (original Grimm — not Disney)', kind: 'tale', source: 'Brothers Grimm', summary: 'A girl mistreated by her stepfamily is helped by birds at her mother\'s grave. She goes to the ball, loses a slipper, is found. Why: goodness noticed is goodness rewarded — and the original is darker than Disney. Don\'t over-sanitise.' },
    nature: { prompt: 'Find the Milky Way if you can get dark skies. Otherwise: name three constellations.', why: 'Stars are a 4yo\'s first sense of cosmic scale. It is fine for them to feel small.' },
    practical_life: { title: 'Pouring from a pitcher into a glass without spilling', why: 'The end of practical-life pouring sequence. Skill earned over the year.' }
  },
  {
    week: 49,
    poem: {
      title: 'Night',
      author: 'William Blake (excerpt)',
      body: "The sun descending in the west,\nThe evening star does shine;\nThe birds are silent in their nest,\nAnd I must seek for mine.\nThe moon, like a flower,\nIn heaven's high bower,\nWith silent delight\nSits and smiles on the night.",
      why: 'Bedtime, in Blake\'s voice.'
    },
    composer_piece: { title: 'Requiem, Lacrimosa (unfinished)', note: 'Mozart died writing this. A sombre, careful piece — for older moods, not frightening, just serious.' },
    artist_work: { title: 'Irises (1889)', note: 'Violet flowers on bright green. Van Gogh in a colour-saturated mood.' },
    story: { title: 'Rapunzel (Grimm)', kind: 'tale', source: 'Brothers Grimm', summary: 'A girl in a tower with long hair. A prince. A witch. A happy ending after blindness and exile. Why: patience and loyalty outlast cruelty, though they cost.' },
    nature: { prompt: 'The last bees of late summer. Note what flowers they still visit.', why: 'A calendar in the flowers: which are the last ones standing?' },
    practical_life: { title: 'Polishing wooden furniture with beeswax polish and a soft cloth', why: 'Smells of bees. Surface shines. Satisfaction.' }
  },
  {
    week: 50,
    poem: {
      title: 'Happy Thought',
      author: 'Robert Louis Stevenson',
      body: "The world is so full of a number of things,\nI'm sure we should all be as happy as kings.",
      why: 'Two lines. Memorise them before the end of the year.'
    },
    composer_piece: { title: 'Magic Flute: Papageno-Papagena duet', note: 'Two bird-catchers in love. Comic, joyful, silly.' },
    artist_work: { title: 'The Yellow House (1888)', note: 'Van Gogh\'s home in Arles. He invited Gauguin here. Short-lived happiness.' },
    story: { title: 'Hansel and Gretel (Grimm)', kind: 'tale', source: 'Brothers Grimm', summary: 'Two children abandoned in a forest find a witch\'s house. Courage and cleverness free them. Why: siblings can save each other. So can paying attention to small signs in the forest.' },
    nature: { prompt: 'Blackberry picking if in season. Purple-stained hands.', why: 'Harvest straight from the bush. Food that costs nothing but attention.' },
    practical_life: { title: 'Making a bowl of fruit salad', why: 'Chopping, combining, serving. A meal the child authored.' }
  },
  {
    week: 51,
    poem: {
      title: 'The Duel',
      author: 'Eugene Field',
      body: "The gingham dog and the calico cat\nSide by side on the table sat;\n'T was half-past twelve, and (what do you think!)\nNor one nor t' other had slept a wink!\nThe old Dutch clock and the Chinese plate\nAppeared to know as sure as fate\nThere was going to be a terrible spat.",
      why: 'A whole story in stanzas, escalating from calm to chaos.'
    },
    composer_piece: { title: 'Magic Flute: Queen of the Night (second aria)', note: 'Famously acrobatic. Play once; the child\'s jaw drops.' },
    artist_work: { title: 'Olive Trees (1889)', note: 'Silver leaves under bright sky. Van Gogh painting in Provence after an illness.' },
    story: { title: 'The Town Mouse and the Country Mouse', kind: 'fable', source: 'Aesop', summary: 'Country mouse visits town mouse — fine food, fine stress. Country mouse prefers home. Why: what looks rich is sometimes only expensive.' },
    nature: { prompt: 'Watch the sun set. Name the moment it disappears.', why: 'Some things are only now. A sunset cannot be paused.' },
    practical_life: { title: 'Winding a simple clock or setting an egg timer', why: 'Time becomes a thing with a mechanism behind it.' }
  },
  {
    week: 52,
    poem: {
      title: 'From a Child\'s Garden of Verses: "Good and Bad Children"',
      author: 'Robert Louis Stevenson',
      body: "Children, you are very little,\nAnd your bones are very brittle;\nIf you would grow great and stately,\nYou must try to walk sedately.\n\nYou must still be bright and quiet,\nAnd content with simple diet;\nAnd remain, through all bewild'ring,\nInnocent and honest children.",
      why: 'Victorian, but the gist is sound: simple diet, walk sedately, innocent and honest. A year-ending poem.'
    },
    composer_piece: { title: 'Symphony No. 41 "Jupiter," IV. Molto allegro', note: 'Mozart\'s last symphony. Closes the year with everything he had.' },
    artist_work: { title: 'The Mulberry Tree (1889)', note: 'One tree, every yellow leaf. Paint as intensity.' },
    story: { title: 'The Wind in the Willows (chapter 1 — "The River Bank")', kind: 'chapter book', source: 'Kenneth Grahame, 1908', summary: 'Mole leaves spring-cleaning, meets Rat, gets in a boat. Why: the year ends with a beginning. The 4yo is now ready for chapter books.' },
    nature: { prompt: 'Sit with the child in the same place you took them in week 1. Notice everything that has changed and everything that has not.', why: 'A year is long enough to see the shape of one. Mark it.' },
    practical_life: { title: 'Writing (with help) a short thank-you note to someone', why: 'The year-closing virtue. Gratitude put into form.' }
  }
];

// Helper to get month (1-12) for a week (1-52): roughly 4.33 weeks per month
window.MONTH_OF_WEEK = function(w) {
  return Math.min(12, Math.max(1, Math.ceil(w / (52 / 12))));
};
