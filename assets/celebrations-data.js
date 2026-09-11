// CELEBRATIONS — how to make the big days magical.
//
// The companion to MOMENTS OF WONDER. Wonder is what you SAY when the world
// does something. This is what you DO when the calendar does something.
//
// The problem it solves: most people arrive at their child's birthday with a
// cake, some balloons and a booked soft play, because that is the whole of
// what got handed to them. Those are fine. But there are thousands of years
// of families working out how to make a day feel enormous, and almost none of
// it reaches an ordinary parent in Northern Ireland. A treasure hunt written
// in the voice of the child's favourite book, ending at the present. A log
// that produces sweets when you hit it. A cone of gifts on the first day of
// school. A cake shaped like a person that everyone screams at. These cost
// almost nothing and they are the bit a grown adult still remembers.
//
// THE RULES THIS FILE IS WRITTEN UNDER
//   1. HONEST ABOUT WHERE IT CAME FROM. `from` is the real place or tradition,
//      or 'Ours' where we made it up or reshaped it. Never dress our own idea
//      up as an ancient custom, and never claim a custom is universal in a
//      country when it is regional.
//   2. NOTHING DARK, NOTHING FRIGHTENING AS THE POINT. Hallowe'en is allowed
//      to be spooky; it is not allowed to be cruel or terrifying. Where an old
//      custom has a punishment in it (the Icelandic potato for a child who was
//      not good), the treat stays and the punishment goes, and we say so.
//   3. NO VERDICT ON ANOTHER FAMILY'S CHOICE. Nothing here may read as "what
//      you are doing is not enough". Add one thing, or none.
//   4. DOABLE HERE. Northern Irish weather, Northern Irish shops, Northern
//      Irish daylight. Where a custom needs adapting to work here, the
//      adaptation is written out and marked.
//   5. FIRST PRINCIPLES. Every entry says the real, observable reason it lands
//      with a child. Never "because it's traditional".
//
// Fields:
//   occasion  birthday | christmas | halloween | easter | newyear | firsts | year
//   star      the handful per occasion that most change how the day feels
//   name      what it is
//   from      the honest origin — a place, a tradition, or 'Ours'
//   age       roughly who it works for
//   effort    'Five minutes' | 'An hour' | 'An evening' | 'Plan ahead'
//   what      what you actually do, concretely
//   why       the real reason it works on a child
//   need      the kit, plainly — empty array if it needs nothing
//   more      optional: a variation, an adaptation, or an honest caveat

window.CELEBRATION_OCCASIONS = [
  { id:'birthday', label:'Birthdays', short:'Birthdays', emoji:'🎂',
    c:'#FF5E8E', cd:'#C93E6A', cs:'#FFE2EC',
    when:'Once a year, each child',
    blurb:'The day a child owns completely. Almost all of the memory comes from the hour before the party, not the party.',
    basics:['A cake and candles','Balloons','A few friends, or one good one','Something to open','A photograph in the same spot every year'] },

  { id:'christmas', label:'Christmas', short:'Christmas', emoji:'🎄',
    c:'#2FA96B', cd:'#1B7A4A', cs:'#DCF3E7',
    when:'December, and the four weeks before it',
    blurb:'The long run-up is the real thing. A month of small nightly moments beats one enormous morning, and costs far less.',
    basics:['A tree and something to put on it','Stockings','An advent calendar','A book to read across December','Lights on before it gets dark'] },

  { id:'halloween', label:'Hallowe’en', short:'Hallowe’en', emoji:'🎃',
    c:'#E8894A', cd:'#B45309', cs:'#FEEBD6',
    when:'31 October, and the week around it',
    blurb:'This one started here. Samhain is Irish, the lantern was a turnip before it was a pumpkin, and most of what the world does on 31 October is a copy of what happened on this island.',
    basics:['A costume','A lantern','A bucket for the doors','Something warm to wear underneath','A torch'] },

  { id:'easter', label:'Easter &amp; spring', short:'Easter', emoji:'🥚',
    c:'#D99A1F', cd:'#9A6A05', cs:'#FBF0D5',
    when:'March or April, and the weeks of the first growth',
    blurb:'The chocolate arrives whether you plan anything or not. Everything worth remembering here happens outdoors, on a hill, in the cold, with eggs.',
    basics:['Eggs, real ones, to decorate','Chocolate, obviously','A hill','Something to plant','Coats — it will be freezing'] },

  { id:'newyear', label:'New Year', short:'New Year', emoji:'🎆',
    c:'#4C63B6', cd:'#33468C', cs:'#E7EAF8',
    when:'31 December and 1 January',
    blurb:'Small children are asleep at midnight and that is fine. Everything here works at six o’clock in the evening or nine in the morning.',
    basics:['Something fizzy in a proper glass','Paper and a pen','A jar or a box that lives somewhere all year','Warm coats for the morning'] },

  { id:'firsts', label:'First days &amp; big firsts', short:'Big firsts', emoji:'🎒',
    c:'#8B6FD1', cd:'#5B3FA8', cs:'#EEE9FA',
    when:'Whenever one arrives',
    blurb:'First day of school, first lost tooth, a new baby, a new house, the day the stabilisers come off. Each one only happens once, and each one passes unmarked unless somebody decides otherwise.',
    basics:['A camera','Something to keep','Somewhere to keep it','Five minutes of full attention'] },

  { id:'year', label:'The turning year', short:'The year', emoji:'🌱',
    c:'#4A9ED4', cd:'#2D6FA8', cs:'#E4F1FA',
    when:'Eight or nine days, spread across the year',
    blurb:'The old markers between the big festivals — St Brigid’s Day, May morning, midsummer, harvest, the longest night. They are nearly free and they give a child a year with a shape to it.',
    basics:['A walk','A candle','Something growing','The same spot, returned to'] },
];

window.CELEBRATION_EFFORTS = ['Five minutes', 'An hour', 'An evening', 'Plan ahead'];

window.CELEBRATIONS = [

  // ══ BIRTHDAYS ══════════════════════════════════════════════════════════
  {
    occasion:'birthday', star:true, name:'The present hunt, written in their story',
    from:'Ours', age:'3 and up', effort:'An evening',
    what:'Hide the presents around the house and garden and write a trail of clues that leads to them. The trick is the voice: write the clues as if they came from the characters in the book or programme the child is deepest in this year. The characters have hidden the presents and they are making the child work. Either a present at each stop, or small ones along the way and the big one at the end. Read the clues out in the characters’ voices.',
    why:'A present handed over is finished in four seconds. A present found is twenty minutes of the child being the main character in a story they already love, and the story is what they keep. It also solves the flattest part of a birthday — the moment after the last parcel is open — by moving the excitement to before the opening instead of after it.',
    need:['Paper and a pen','Somewhere to hide six to ten things','Ten minutes of thinking about what they are obsessed with this year'],
    more:'Write the clues the night before, not on the morning. Number them on the back so you can put them out in the right order at six in the morning half asleep.'
  },
  {
    occasion:'birthday', star:true, name:'Wake up to a room that changed overnight',
    from:'Denmark, where presents are laid around the bed while the child sleeps',
    age:'Any age, best from 2 to 8', effort:'An hour',
    what:'After they are asleep, change the room. Balloons over the floor, a banner, presents around the bed, streamers taped across the doorway so they have to burst through. In Denmark the flag goes up outside the house as well, so the whole street knows.',
    why:'A child wakes up on their birthday already knowing it is their birthday, which means the first thirty seconds are the highest-expectation moment of the entire day. Meeting that moment with a transformed room is the cheapest enormous effect available. Blowing up forty balloons costs about four pounds.',
    need:['Balloons','Masking tape or washi tape, which comes off paint','Crepe streamers','A flag or a banner if you want the outside to know'],
    more:'Tape the streamers across the door in a criss-cross so bursting through is the first thing that happens. It is the bit they describe to people afterwards.'
  },
  {
    occasion:'birthday', star:true, name:'The piñata',
    from:'Mexico — though the object itself travelled from China to Italy to Spain before it got there',
    age:'3 and up', effort:'An hour',
    what:'A hollow paper figure filled with sweets and small toys, hung from a branch or a washing line. Children are blindfolded, spun, and take turns hitting it with a stick until it breaks and everything falls out. Youngest first, and the youngest do not get blindfolded.',
    why:'It is the only party game where every single child gets a turn, a scramble, and a fistful of loot, and no one comes last. For a four-year-old the scramble on the ground is better than the sweets. It also uses up an astonishing amount of energy in fifteen minutes.',
    need:['A piñata, or one made from a balloon and papier-mâché','A stick or a rounders bat','A rope and something to hang it from','Sweets and small toys to fill it'],
    more:'The pull-string kind avoids the swinging stick entirely and works better indoors and with under-fours. Make it yourself over three evenings the week before and the making becomes half the fun.'
  },
  {
    occasion:'birthday', name:'Kagemand — the cake shaped like a person',
    from:'Denmark',
    age:'3 and up', effort:'An hour',
    what:'Bake a cake in the rough shape of a person — a big gingerbread-man shape works, or a long loaf cut to shape — and decorate it with sweets for the face and buttons. When it is cut, the head is cut off first, and everyone screams as loudly as they can.',
    why:'Danish children wait all year for the scream. It gives the cake moment a shape: build-up, countdown, enormous noise, cake. Cutting a normal cake is an administrative act that children watch politely. This one they take part in.',
    need:['Cake or a large biscuit dough','Sweets for the face','A knife and a straight face'],
    more:'A girl version, kagekone, is exactly the same with a different set of sweets. Nobody in Denmark thinks this is gruesome and no child has ever been upset by it — the screaming is the joke.'
  },
  {
    occasion:'birthday', name:'A candle each, so nobody misses out',
    from:'Ours — a fix for a real problem',
    age:'2 to 6', effort:'An hour',
    what:'Instead of one cake with candles, make cupcakes and give every child their own with one lit candle. Sing once, and everyone blows at the same time on the count of three — or let the birthday child blow first and then everyone else.',
    why:'At a party of four-year-olds the single cake produces one delighted child and six who wanted to blow the candle and are now quietly furious. It is the most reliable source of tears at a small child’s party. This removes it entirely, and it also removes the business of one child breathing over everybody’s pudding.',
    need:['Cupcakes','A candle per child','A lighter and an adult watching'],
    more:'Keep one proper cake with the number on it for the photograph, and hand out the cupcakes for the actual eating. You get both.'
  },
  {
    occasion:'birthday', star:true, name:'The birthday interview, same questions every year',
    from:'Widely done by families; the version that lasts is the filmed one',
    age:'From 2 up', effort:'Five minutes',
    what:'Film a one-minute video on their birthday, same eight or ten questions every single year. What is your favourite food. What do you want to be. Who is your best friend. What is the best thing that happened this year. What are you good at. Keep the answers, and keep the videos in one folder.',
    why:'You are building something that only becomes valuable later, which is why almost nobody starts it. By eleven the child watches themself at four and the change is genuinely astonishing to them. It also does something immediate: for one minute a year the child is asked serious questions about their own life and listened to without interruption.',
    need:['A phone','The same list of questions, written down where you will find it'],
    more:'Ask in the same place each year if you can — the same chair, the same doorway. The background changing around a growing child does half the work.'
  },
  {
    occasion:'birthday', name:'The mark on the door frame',
    from:'Traditional across Europe and North America',
    age:'From about 2', effort:'Five minutes',
    what:'Same door frame every year, back to the wood, pencil line flat across the top of the head, name and date written beside it. Never paint over it. If you move house, unscrew the architrave and take it with you.',
    why:'It is the only record of growth a child can read themselves, with their own body, standing next to it. A four-year-old genuinely cannot picture having been smaller. Putting their hand on last year’s line makes it real in a way a photograph does not.',
    need:['A pencil','A door frame you are not going to paint'],
    more:'A long strip of wood screwed to the wall does the same job and travels. Mark visiting cousins on it too and it becomes a record of the whole family.'
  },
  {
    occasion:'birthday', name:'The letter to eighteen',
    from:'Traditional; done quietly by a lot of families',
    age:'Every year from birth', effort:'An hour',
    what:'Write your child a letter on their birthday, seal it, date it, and put it in a box. What they are like right now, what they said this year that you do not want to forget, what you hope for them. Eighteen letters, handed over on their eighteenth birthday.',
    why:'You forget almost everything. The specific words a three-year-old used, the way they walked, what they were frightened of — all gone within about four years, and no photograph holds any of it. The letters are the only way to get it back. Writing it also forces you, once a year, to notice your child on purpose.',
    need:['Paper and envelopes','A box that lives somewhere safe'],
    more:'Do it the evening of the birthday while the day is fresh. If you miss a year it does not matter — carry on.'
  },
  {
    occasion:'birthday', name:'Earlobe pulls, one for each year',
    from:'Spain, Argentina, and much of Latin America — los tirones de oreja',
    age:'3 and up', effort:'Five minutes',
    what:'Everyone gives the birthday child one gentle tug on the earlobe for each year of their age, counting out loud together, and one extra for luck at the end.',
    why:'Counting the years out loud, with everybody joining in, gives a small child the single thing they most want on a birthday: their number, said out loud, by everyone, slowly. It takes thirty seconds and it works on any child who can count.',
    need:[],
    more:'The Irish and British version is the birthday bumps — lifted by arms and legs and gently bumped once per year. Fine outdoors on grass with older children and an adult counting; not for toddlers or for a hard floor.'
  },
  {
    occasion:'birthday', name:'Fairy bread',
    from:'Australia and New Zealand',
    age:'2 and up', effort:'Five minutes',
    what:'White bread, buttered right to the edges, pressed face-down into hundreds and thousands, cut into triangles. That is the entire recipe.',
    why:'It is bread and sprinkles and children lose their minds over it. It costs about a pound to feed a whole party and it has a name that sounds like it came out of a story, which for a four-year-old is most of the point.',
    need:['Sliced white bread','Butter','Hundreds and thousands'],
    more:'Let the children make their own. It is the only party food a three-year-old can produce unaided and be proud of.'
  },
  {
    occasion:'birthday', name:'Longevity noodles',
    from:'China',
    age:'4 and up', effort:'An hour',
    what:'One long noodle, never cut, eaten on your birthday — the longer the strand you get into your mouth without breaking it, the longer your life. Everyone tries at the same time and it is a mess.',
    why:'It turns dinner into a competition with a rule that makes children concentrate on something ridiculous. Under-fives will not manage it and that is the fun. It is also a gentle way into the idea that other countries mark the same day completely differently.',
    need:['Long noodles','A sense of humour about the table afterwards'],
    more:'Serve it as the birthday dinner rather than at a party. It works better with four people than with fourteen.'
  },
  {
    occasion:'birthday', name:'The story of the day you were born',
    from:'Ours, though families everywhere do some version',
    age:'3 and up', effort:'Five minutes',
    what:'Every birthday, at bedtime, tell the story of the day they arrived. The weather, what time it was, who was there, what you thought when you first saw them, what they did in the first hour. Same story, same order, every year. They will correct you if you change it.',
    why:'A child asks where they came from long before they can understand the answer. This is the answer, in the form they can hold: a story with them at the centre, in which they were enormously wanted. Repeating it word for word year on year turns it into their own founding story, and children ask for it again and again.',
    need:[],
    more:'Adopted, fostered, born early, born in a hurry in a car park — the story is the arrival, whatever shape it took, and the honest version is always better than a smoothed one.'
  },
  {
    occasion:'birthday', name:'Doljabi — let the one-year-old choose',
    from:'Korea (doljabi), and China and Taiwan (zhuazhou), both very old',
    age:'The first birthday only', effort:'An hour',
    what:'At the first birthday, lay out a row of objects in front of the baby — a pencil, a coin, a ball, a length of thread, a paintbrush, a wooden spoon — and let them crawl over and pick one, with no help and no steering. Everyone watches. What they grab is said to point at the life ahead: the thread means long life, the pencil scholarship, the coin wealth, the ball sport.',
    why:'A first birthday is really a party for the adults, because the baby will not remember any of it. This gives the baby something to actually do at the centre of it, and it gives everyone a photograph and a story that gets retold for twenty years. Nobody in Korea believes the prediction literally; it is a ceremony, and the family knows it.',
    need:['Five or six objects laid on a cloth','Everybody sitting in a ring','A camera ready'],
    more:'Pick objects that mean something to your own family — a tape measure for a builder, a set of keys, a paintbrush. A cake to demolish afterwards is the Western half of the same idea.'
  },
  {
    occasion:'birthday', name:'The special plate',
    from:'A twentieth-century American custom, now widespread',
    age:'Any age', effort:'Five minutes',
    what:'One plate, different from all the others — red, gold, hand-painted, whatever — that only ever comes out for the person being honoured. Birthdays, but also the day somebody got something hard done. It sits at the top of the cupboard the rest of the year.',
    why:'It makes honouring somebody a physical, repeatable act that a small child can carry out themselves. A four-year-old can fetch the plate and set it at a place. That is a far better lesson in celebrating other people than being told to be pleased for their sister.',
    need:['One distinctive plate'],
    more:'Let the children decide when it comes out. They are stricter and more generous about it than adults are.'
  },
  {
    occasion:'birthday', name:'The year jar, opened on the birthday',
    from:'Ours, adapted from the New Year memory jar',
    age:'3 and up', effort:'Five minutes a month',
    what:'A jar in the kitchen. Any time the child does or says something worth keeping, write it on a scrap and drop it in. On their birthday, tip it out and read every single one aloud before the presents.',
    why:'Children have no idea what their year contained. Hearing forty small specific things they did — most of which they have forgotten — is the clearest possible evidence that they were watched all year and that it was noticed. It takes ten minutes and it lands harder than anything in a box.',
    need:['A jar','Scraps of paper by the kettle'],
    more:'Let other people put notes in — grandparents, a childminder, an older sibling. The ones not in your handwriting are the ones they reread.'
  },
  {
    occasion:'birthday', name:'A party with a shape instead of a venue',
    from:'Ours',
    age:'3 and up', effort:'Plan ahead',
    what:'Instead of booking a room, give the party one strong idea and let the location be free. A den-building party in a wood with string and tarpaulins. A pirate landing at a beach with a buried box. A torch party after dark in the back garden in November. A museum treasure hunt with a printed list of things to find. A bakery party where they make and take home their own thing.',
    why:'A booked venue delivers a reliable, forgettable two hours, and every child has already been to that room for four other parties. A party with one strong idea is remembered by name years later — "the pirate one", "the torch one". It is usually also cheaper, and the children are outdoors, which halves the noise and doubles the sleep that night.',
    need:['One idea','A wet-weather version of it, decided in advance','Fewer children than you think — four good friends beats fourteen'],
    more:'In Northern Ireland always have the indoor fallback settled before you invite anyone, so a downpour changes the venue and not the plan.'
  },
  {
    occasion:'birthday', name:'A half birthday for a December child',
    from:'Ours, and a lot of parents of December children',
    age:'Any age', effort:'An hour',
    what:'If a birthday lands in the fortnight before Christmas, mark the half birthday in June as well — a small thing, a cake, a day out, a couple of friends. The real birthday still happens; this is the one that gets its own space.',
    why:'A child born in mid-December gets a birthday that is permanently absorbed into something bigger, with exhausted adults, wrapped-together presents and friends already away. That is a real and slightly sad thing, and it is entirely fixable by moving half the celebration to a quiet month.',
    need:[],
    more:'Same for a child whose birthday falls in the school holidays and whose friends are all scattered.'
  },

  // ══ CHRISTMAS ══════════════════════════════════════════════════════════
  {
    occasion:'christmas', star:true, name:'Advent by the day, not by the chocolate',
    from:'The Advent calendar is German and nineteenth-century; the kindness version is modern',
    age:'2 and up', effort:'Plan ahead',
    what:'Twenty-four envelopes or little bags, one opened each morning, each with something to do rather than something to eat. Post a card. Feed the birds. Ring somebody who lives alone. Buy one extra tin for the food bank. Read this book. Walk to see the lights. Make paper chains. Some days are treats and some days are jobs and a child cannot tell in advance which they will get.',
    why:'A chocolate calendar gives a child twenty-four days of small receiving, and by the fifteenth it is automatic. A doing calendar gives them twenty-four days of anticipation about what the day will hold, which is a completely different feeling and does not wear off. It also quietly builds the run-up out of things you did together rather than things you bought.',
    need:['Twenty-four envelopes, bags or boxes','A list written before December starts','Somewhere to peg them up'],
    more:'Keep a few chocolate days in it. The point is not to remove the treat, it is to make the day unpredictable.'
  },
  {
    occasion:'christmas', star:true, name:'A shoe on the windowsill for thirteen nights',
    from:'Iceland — the thirteen Yule Lads come down from the mountains one a night',
    age:'2 to 9', effort:'Five minutes a night',
    what:'From 12 December, the child puts one shoe on the windowsill each evening. Every morning there is something tiny in it — a satsuma, a chocolate coin, a pencil, a sticker. Thirteen nights, thirteen mischievous visitors, each with his own name and his own trick: one slams doors, one licks the spoons, one steals sausages.',
    why:'Thirteen small mornings of wonder cost less than one big present and are spread across the exact fortnight when a child is climbing the walls with waiting. It converts the hardest part of December — the waiting — into the best part. The names and the tricks give you something to tell them about at bedtime for a fortnight.',
    need:['One shoe','Thirteen tiny things, bought in one go in November'],
    more:'In Iceland a child who has behaved badly gets a raw potato instead. Leave that out. A system where the treat can be withdrawn turns the whole fortnight into a negotiation, and the wonder is worth more than the leverage.'
  },
  {
    occasion:'christmas', star:true, name:'Jólabókaflóð — the Christmas Eve book flood',
    from:'Iceland',
    age:'Any age, including adults', effort:'Plan ahead',
    what:'On Christmas Eve everybody in the house is given a book and something good to drink, and then everybody goes to bed early and reads. That is the whole evening. In Iceland the publishers release most of the year’s books in November for exactly this.',
    why:'Christmas Eve with young children is the longest evening of the year and usually ends in overtiredness and tears. This gives it a plan that is calm, that everybody wants, and that ends with the house quiet by eight. It also delivers the single strongest message about reading a family can send: on the best night of the year, we read.',
    need:['A book each, wrapped','Hot chocolate','An early start upstairs'],
    more:'Buy the books in a real shop with the child in November and let them choose yours. The choosing is half of it.'
  },
  {
    occasion:'christmas', name:'Caga Tió — the log that produces sweets',
    from:'Catalonia',
    age:'2 to 8', effort:'Plan ahead',
    what:'A short log with legs, a painted face and a red hat sits in the house from early December. The children feed it every night — a bit of orange peel, a few nuts — and cover it with a blanket so it is not cold. On Christmas Eve they beat it with sticks while singing a song telling it to produce, and when the blanket is lifted there are sweets and small presents underneath.',
    why:'It gives a child a job every single evening of December and a responsibility to something that needs them. Then it pays out spectacularly at the end. The feeding is the part they remember; the log becomes a member of the household and comes back every year.',
    need:['A log','Paint, a scrap of red cloth, two twigs for legs','A blanket','Sticks, and sweets to hide underneath'],
    more:'Make the log together in November. A shop-bought one works but a family one is a family one.'
  },
  {
    occasion:'christmas', name:'Watch for the first star before dinner',
    from:'Poland — Wigilia, the Christmas Eve supper',
    age:'Any age', effort:'Five minutes',
    what:'Nobody eats on Christmas Eve until a child has spotted the first star in the sky. Send them out to look. When they find it, everyone sits down. A place is laid at the table for anyone who might arrive, and everybody shares a piece of wafer or bread with every other person at the table, saying one good wish to each as they go.',
    why:'It puts a small child in charge of starting Christmas, which is an enormous thing to hand a four-year-old. The sharing round the table is a minute in which every person in the house says something kind directly to every other person, out loud. Families who do it say it is the part they would not give up.',
    need:['A clear-ish sky, or a generous view of what counts as a star','Bread or wafer to break and share'],
    more:'It links straight to the first-star wish in Moments of Wonder — same star, bigger night.'
  },
  {
    occasion:'christmas', name:'Boots out for St Nicholas, 5 December',
    from:'Germany, Austria and the Netherlands',
    age:'2 to 9', effort:'Five minutes',
    what:'On the evening of 5 December the children clean their boots and leave them by the door or the fire. In the morning there are satsumas, nuts, chocolate coins and something small inside. In the Netherlands they leave a carrot for the horse as well.',
    why:'It opens December with an event instead of a slow ramp, and it separates the small giving from the big morning, which takes pressure off Christmas Day itself. Cleaning the boots first is what makes it feel like a proper transaction to a child.',
    need:['Boots','Satsumas, nuts, chocolate coins','A carrot, if there is a horse in your version'],
    more:'In some places a frightening companion punishes bad children on the same night. Leave him out.'
  },
  {
    occasion:'christmas', name:'The Christmas Eve box',
    from:'Modern, British and Irish, roughly the last twenty years',
    age:'Any age', effort:'An hour',
    what:'One box opened on Christmas Eve afternoon: new pyjamas, a book, hot chocolate, a decoration, a film. Everything for the evening ahead, arriving in one go.',
    why:'The afternoon of Christmas Eve is the hardest two hours of the year for a child who is waiting. This fills it, and it means the photographs on Christmas morning have everybody in matching decent pyjamas, which is a small vanity but a real one.',
    need:['A box','Pyjamas, a book, something hot to drink'],
    more:'Keep it small on purpose. If it gets as big as the main present it has eaten the day it was meant to protect.'
  },
  {
    occasion:'christmas', name:'Proof that somebody came',
    from:'Traditional across Britain and Ireland, embellished endlessly',
    age:'2 to 8', effort:'Five minutes',
    what:'A half-eaten mince pie, a carrot with a bite out of it, a drained glass, and — the good bit — a boot print on the hearth or by the back door made with flour or icing sugar and the side of your fist. A single sooty handprint on the door frame does the same job.',
    why:'A small child works mostly from physical evidence. The presents are proof that something happened; the boot print is proof of who. It costs nothing and takes a minute and it is the detail that gets described at school for a fortnight afterwards.',
    need:['Flour or icing sugar','A mince pie and a carrot you are prepared to bite'],
    more:'Reindeer food on the lawn is the same idea — oats, sprinkled by the child at bedtime. Use plain oats, or oats with dried flower petals. Skip the plastic glitter sold for this; it does not break down and the birds are the ones eating it.'
  },
  {
    occasion:'christmas', name:'One decoration each, every year, with the year on it',
    from:'Traditional across northern Europe and America',
    age:'From birth', effort:'An hour',
    what:'Every year each child gets one decoration, chosen or made for them, with the year written on the back in permanent pen. It goes on the tree. When they eventually leave home, they leave with eighteen decorations and a whole tree’s worth of their own childhood.',
    why:'Decorating the tree becomes an annual read-through of the family’s own history — this was the year of the dinosaurs, this was the year you could not say squirrel. Children do this unprompted once there are more than about five. It also gives every tree a reason to be imperfect, which takes the styling pressure off entirely.',
    need:['One decoration per child per year','A permanent marker'],
    more:'Homemade counts double. A salt-dough shape with a handprint in it, dated, is the one they will not let you throw out.'
  },
  {
    occasion:'christmas', name:'The smallest one puts the star on',
    from:'Ours, and countless families',
    age:'Any age', effort:'Five minutes',
    what:'The tree gets decorated by everyone, but the star or the angel goes on last, and it is always the smallest child, lifted up by the tallest adult, who puts it there. Everybody stops and watches. Photograph it from the same place every year.',
    why:'It gives the youngest child — who is otherwise always the one who can reach least and decide least — the single most important job of the evening. And the photographs, lined up, are the clearest record of a family growing that you will ever take.',
    need:['A star','Somebody tall'],
    more:'When the smallest gets too big to be lifted, that is its own moment, and it should be noticed out loud rather than quietly dropped.'
  },
  {
    occasion:'christmas', name:'Choose something to give away before anything arrives',
    from:'Ours; versions are done everywhere',
    age:'3 and up', effort:'An hour',
    what:'In the week before Christmas, each child goes through their own things and chooses what to pass on — properly chooses, not is told which ones. It goes to a charity shop or a collection, and the child hands it over themselves at the counter.',
    why:'Giving matters to a child only when it costs them something they actually wanted to keep, and only when they can see where it went. Being told which toys to give away teaches nothing at all except that adults periodically remove things. Choosing themselves, and doing the handing over, is the entire lesson.',
    need:['A bag','A charity shop or a collection point, visited with them'],
    more:'Do it before the new things arrive, not after. Afterwards it reads as making room; before, it reads as giving.'
  },
  {
    occasion:'christmas', name:'Hide all the brooms',
    from:'Norway',
    age:'3 and up', effort:'Five minutes',
    what:'On Christmas Eve every broom, mop and brush in the house is hidden away, because the old story says witches and mischievous spirits come out that night looking for something to ride. Children hunt them out and hide them. In the morning they come back.',
    why:'It is pure nonsense, it takes five minutes, and it gives children a job on Christmas Eve that involves running around the house with purpose. Traditions do not have to mean anything to work — this one survives because it is funny.',
    need:['Brooms'],
    more:'Let the children decide the hiding places and do not help. The arguments about whether the yard brush counts are the tradition.'
  },
  {
    occasion:'christmas', name:'Las Posadas — nine nights of walking and singing',
    from:'Mexico',
    age:'3 and up', effort:'Plan ahead',
    what:'For the nine nights before Christmas, a procession of children with candles and lanterns goes to a house and sings at the door, asking for shelter; the people inside sing back that there is no room, until finally the door opens and everyone comes in for food and a piñata.',
    why:'It is a story acted out rather than told, nine nights running, with the child doing the walking and the singing and the knocking. Children understand a story they have physically performed in a way they never understand one they were read.',
    need:['Candles or lanterns','Somewhere to walk to','Somebody willing to say no through a door and then open it'],
    more:'A small home version works: walk to a different room each night with the lantern, sing at the door, get refused, and on Christmas Eve the door opens and everything is laid out inside.'
  },
  {
    occasion:'christmas', name:'The Christmas lights drive, in pyjamas',
    from:'Modern, and everywhere',
    age:'Any age', effort:'An hour',
    what:'One evening in December, bath and pyjamas first, then straight into the car with blankets and a flask, and drive slowly around the streets that go all out. Score them out of ten. Find the same absurd house every year.',
    why:'It is being out, warm, in the dark, after bathtime, which to a small child is a genuine transgression and therefore thrilling. It costs a tank of nothing and it reliably produces the sleep of the year.',
    need:['A car or a good walk','A flask','Blankets'],
    more:'Walking it in a town with good lights is better than driving. The Christmas markets in Belfast or a lit-up main street do the job.'
  },

  // ══ HALLOWE'EN ═════════════════════════════════════════════════════════
  {
    occasion:'halloween', star:true, name:'Carve a turnip, the way it was actually done',
    from:'Ireland — the original jack-o’-lantern, centuries before the pumpkin',
    age:'4 and up, with an adult on the knife', effort:'An evening',
    what:'A swede or a big turnip, hollowed out with a spoon and a sturdy knife, a face cut into the side, a candle or a tealight inside, string through the top to carry it. It is genuinely hard work — that is the point, and it is why the Irish who went to America switched to pumpkins the moment they saw them.',
    why:'Northern Irish children carve pumpkins like everybody else without ever being told that the whole custom started here, with this vegetable. Doing the original once, feeling how much harder it is, and smelling it — a turnip lantern smells extraordinary and slightly awful — makes the history land as a fact about their own place rather than a fact from a book.',
    need:['A large swede or turnip','A strong spoon and a proper knife, held by an adult','A tealight','String'],
    more:'Do the turnip and a pumpkin side by side and let them compare. The pumpkin will look better and the turnip will be the one they talk about.'
  },
  {
    occasion:'halloween', star:true, name:'Sing for your sweets',
    from:'Ireland and Scotland — guising, which is what trick or treat was before it crossed the Atlantic',
    age:'3 and up', effort:'Five minutes',
    what:'At every door, the child does a turn before they get anything — a song, a joke, a poem, a party piece. That is the original bargain: you are not owed a treat, you earn it. Prepare one thing at home during the week so they are not stuck on the step.',
    why:'Standing on a stranger’s doorstep and performing is a serious act of courage for a small child, and doing it fifteen times in one night visibly changes them. It also transforms the whole evening for the people answering the door, who get a show rather than a queue. And it is ours: this is the older, better version of the custom.',
    need:['One rehearsed joke, song or rhyme','A costume','A torch'],
    more:'Teach them one joke they can rely on. Confidence at the fourth door comes entirely from how the first one went.'
  },
  {
    occasion:'halloween', name:'Barmbrack with things baked into it',
    from:'Ireland — báirín breac, the Hallowe’en fruit loaf',
    age:'4 and up', effort:'An evening',
    what:'A fruit loaf with small objects wrapped in baking paper and hidden inside before it goes in the oven. A ring, a coin, a scrap of cloth, a button, a bean. Everyone gets a slice and whatever is in your slice is your year: the ring means a wedding, the coin means money, the cloth means lean times.',
    why:'It turns a slice of cake into an event with an outcome, and every person at the table gets their own result at the same moment. Children adore a system that hands out fates. It is also a very old Irish custom that has nearly died out, and it is delicious.',
    need:['Barmbrack, bought or baked','Small clean objects wrapped in greaseproof paper','A warning to everyone to chew carefully'],
    more:'Under-fives should get a slice you have checked. Keep the objects big enough not to be a choking risk, or hide paper tokens with drawings on them instead of objects.'
  },
  {
    occasion:'halloween', name:'Snap apple and apple bobbing',
    from:'Ireland and Britain, very old — Hallowe’en used to be called Snap Apple Night',
    age:'3 and up', effort:'Five minutes',
    what:'Bobbing: apples in a basin of water, hands behind your back, get one out with your teeth. Snap apple: an apple hung on a string from a door frame, swinging, hands behind your back, first to get a proper bite wins.',
    why:'Two games, no equipment, and every child in the room laughing at the same time. Snap apple is better than bobbing for small children because it stays out of the water, and the swinging apple is genuinely difficult in a way that is funny rather than frustrating.',
    need:['Apples','String','A basin, and towels'],
    more:'Tie the string to a broom handle held by two adults and you can raise and lower it for different heights.'
  },
  {
    occasion:'halloween', name:'Coins in the colcannon',
    from:'Ireland',
    age:'3 and up', effort:'An hour',
    what:'Colcannon — mashed potato with kale or cabbage and a lot of butter — served on Hallowe’en with clean coins wrapped in paper hidden through it. Whoever finds one keeps it.',
    why:'It is the one night of the year when a child eats a bowl of cabbage with enthusiasm. Beyond that it is a real Irish Hallowe’en dish, it is cheap, it feeds everyone before they go out into the cold, and it stops the evening being entirely made of sugar.',
    need:['Potatoes, kale or cabbage, butter, spring onions','Clean coins in greaseproof paper'],
    more:'Not for under-threes. For them, hide a small toy in their portion instead, or serve it without.'
  },
  {
    occasion:'halloween', name:'You’ve been booed',
    from:'Modern, American, and spreading fast',
    age:'3 and up', effort:'An hour',
    what:'Make up a small bag or basket of treats, leave it on a neighbour’s doorstep with a note saying they have been booed, knock, and run. The note asks them to do the same for two more houses. The child does the knocking and the running.',
    why:'It is giving, done at speed, in the dark, with an escape — which is the only version of giving a five-year-old finds genuinely exciting. It also quietly turns Hallowe’en from an evening of collecting into an evening that started with them handing something over, and it can travel round an entire street.',
    need:['A bag or basket of small treats','A printed note','A neighbour who will find it funny'],
    more:'Target the people who do not get many callers. It works best on the houses that are usually skipped.'
  },
  {
    occasion:'halloween', name:'The sweet swap',
    from:'Modern, sometimes called the Switch Witch',
    age:'3 to 8', effort:'Five minutes',
    what:'The child keeps whatever amount of their haul you have agreed in advance, and leaves the rest out overnight. In the morning it has gone and there is one decent toy or book in its place.',
    why:'A bucket of sweets a small child cannot possibly eat is a fortnight-long negotiation that nobody enjoys. This ends it in one move, with the child agreeing to the trade in advance and waking up ahead. They get the collecting, which was always the fun part, without the aftermath.',
    need:['One replacement present','An agreement made before they go out, not after'],
    more:'Only works if they agree to it beforehand and know exactly how much they keep. Sprung on a child at bedtime it is just confiscation.'
  },
  {
    occasion:'halloween', name:'A costume made, not bought',
    from:'Ours; the way it was until about 1990',
    age:'3 and up', effort:'An evening',
    what:'One evening the week before, at the kitchen table, with cardboard, an old sheet, tape, paint and whatever is in the recycling. The child decides what they are. It will look homemade, because it is.',
    why:'A shop costume is a thing they wore. A made one is a thing they built, and they will tell you what every part of it is for. The evening spent making it is longer than the evening spent wearing it, and it is the half they remember. It is also free.',
    need:['Cardboard boxes','An old sheet','Strong tape, paint, scissors'],
    more:'Start from what you have rather than from what they want to be, and let the material suggest the costume. A big box is a robot, a toaster, a television or a house.'
  },
  {
    occasion:'halloween', name:'The lantern walk',
    from:'Ours, drawing on German and Scandinavian lantern processions',
    age:'2 and up', effort:'An hour',
    what:'Before or instead of the doors, everyone walks a set route in the dark with lanterns — carved ones, or jam jars with tealights and wire handles, or paper ones the children made. Slowly, no rush, and a stop at the top of something to look back at the lights of the town.',
    why:'For under-fives the doors are often too much — too loud, too fast, too many strangers, and over in a blur. A walk in the dark carrying their own light gives them the whole atmosphere of the night at a pace they can actually enjoy, and being out after dark is the thrill regardless.',
    need:['Jam jars, tealights and wire, or shop lanterns','A torch each as well','A route you know in daylight'],
    more:'Northern Ireland gets dark early enough in late October that a five o’clock start is fully dark. You do not need to keep a three-year-old up.'
  },
  {
    occasion:'halloween', name:'A place at the table for the people who are gone',
    from:'Mexico — Día de Muertos — and the older Irish custom of setting a place at Samhain',
    age:'4 and up', effort:'An hour',
    what:'Put out photographs of the family members who have died, with a candle, some flowers, and the food each of them actually liked. Everyone says one thing they remember or one thing they were told about that person. Children help lay it out.',
    why:'A child meets death first through Hallowe’en skeletons, which is a strange and unhelpful introduction. This is the opposite: warm, specific, and about people with names who liked particular biscuits. Families who do this find children ask straightforward questions and are not frightened, because the frame is remembering rather than fearing.',
    need:['Photographs','Candles','Flowers','The food they liked'],
    more:'It suits some families and not others, and it depends on how recent the loss is. If it would be raw, it is not the year for it.'
  },

  // ══ EASTER & SPRING ════════════════════════════════════════════════════
  {
    occasion:'easter', star:true, name:'Trindle the eggs down a hill',
    from:'Ulster — egg trindling at the Cave Hill Easter Monday fair was ours in particular',
    age:'2 and up', effort:'An hour',
    what:'Hard-boil eggs, decorate them, take them up a hill on Easter Monday and roll them down. Whoever’s egg goes furthest without smashing wins. When it smashes you eat it. Belfast families did this in their thousands on Cave Hill — it was one of the biggest days of the year in the city.',
    why:'It is outdoors, it is free, it involves a hill, and it is genuinely a local custom rather than an imported one. For a small child, the run down the hill after the eggs is better than the rolling. And it gives Easter Monday a shape, which it otherwise does not have.',
    need:['Hard-boiled eggs','A hill','Coats'],
    more:'Cave Hill, Scrabo, Slemish, the Mournes, or any decent slope in a park. Dye the eggs the day before with onion skins and they come out a deep bronze — wrap a leaf against the shell with a bit of old tights and the shape stays white.'
  },
  {
    occasion:'easter', star:true, name:'An egg hunt with a trail instead of a scatter',
    from:'Ours, adapted from the ordinary hunt',
    age:'3 and up', effort:'An evening',
    what:'Rather than hiding forty eggs at random, write a trail — each hiding place holds one egg and the clue to the next, and the last one holds the big thing. For more than one child, run two different-coloured trails at once so nobody is racing and nobody wins.',
    why:'A scatter hunt is over in four minutes and turns into a race that the fastest child wins and the youngest cries about. A trail lasts half an hour, cannot be won by speed, and the finding of each clue is its own small event. Same eggs, ten times the day.',
    need:['Eggs','Paper and a pen','Two colours of paper if there are two children'],
    more:'Draw the clues as pictures for a child who cannot read. A photograph of the hiding place on a phone works too, and toddlers are surprisingly good at it.'
  },
  {
    occasion:'easter', name:'Egg tapping',
    from:'Greece (tsougrisma), and across eastern Europe',
    age:'3 and up', effort:'Five minutes',
    what:'Everybody holds a hard-boiled egg. Two people tap points together until one cracks; the intact egg goes on to the next person. Last uncracked egg is the champion of the year.',
    why:'It is a whole tournament that takes six minutes, needs nothing you do not already have, and gives every person at the table a turn. Children take the choosing of their egg extremely seriously, which is the funniest part.',
    need:['One hard-boiled egg per person'],
    more:'The rules argument about whether you may tap the wide end or the point is part of the tradition. Settle it before you start, or do not.'
  },
  {
    occasion:'easter', name:'Dye the eggs with what is in the kitchen',
    from:'Traditional across Europe',
    age:'3 and up', effort:'An hour',
    what:'Onion skins give deep bronze and red, red cabbage gives blue, turmeric gives yellow, beetroot gives pink. Simmer the eggs in the dye with a splash of vinegar. Press a small leaf or a flower flat against the shell first and tie it on with a scrap of old tights, and its shape stays white.',
    why:'Shop dye kits give a child six minutes of dipping. This gives them an afternoon of real chemistry with results they could not predict, using food they have seen you cook with. The leaf-print eggs are genuinely beautiful and children cannot believe they made them.',
    need:['Eggs','Onion skins, red cabbage, turmeric, beetroot','Vinegar','Old tights and small leaves'],
    more:'Save the onion skins for a fortnight beforehand. Any greengrocer will give you a bag of them free if you ask.'
  },
  {
    occasion:'easter', name:'Easter witches at the door',
    from:'Sweden and Finland — påskkärringar, on the Thursday before Easter',
    age:'3 and up', effort:'An hour',
    what:'Children dress up in headscarves and old skirts with painted freckles, and go round the neighbours with drawings and handmade cards, swapping them for sweets. They bring something they made and hand it over first.',
    why:'It is trick or treat with the direction reversed — the child arrives with a gift. That changes the whole feel of the doorstep for both sides. It also gives a purpose to an afternoon of drawing in the week beforehand, which is the part that fills the time.',
    need:['Old clothes and a headscarf','A stack of drawings and cards made in advance'],
    more:'Tell your neighbours what is happening a day ahead if this is new on your street, or the first door will be confusing for everyone.'
  },
  {
    occasion:'easter', name:'Wet Monday',
    from:'Poland — Śmigus-Dyngus',
    age:'4 and up', effort:'Five minutes',
    what:'On Easter Monday everybody throws water over everybody else. Water pistols, cups, buckets, whatever is to hand. Outside, in old clothes, and there is no way to opt out once it has started.',
    why:'It is an entire family water fight with the full permission of a thousand-year-old custom, which is exactly the licence children want and rarely get. It also does something useful: it makes Easter Monday a day with a plan rather than a flat bank holiday.',
    need:['Water pistols','Old clothes','Towels and a warm house to come back into'],
    more:'It will be about nine degrees. Keep it to five minutes, have the bath running, and do it in the garden, not the kitchen.'
  },
  {
    occasion:'easter', name:'Plant something on Easter Monday',
    from:'Ours',
    age:'2 and up', effort:'An hour',
    what:'Every Easter Monday, each child plants one thing — sunflowers in a pot, potatoes in a bag, a tree if you have room. Same day every year. Photograph it on the day it goes in and again when it is at its biggest.',
    why:'Easter is about growth and about something coming back, and a child cannot get that from an explanation. They can get it from a seed they buried on a specific day and watched. Sunflowers are best for small children because the speed is visible week to week and the end result is taller than they are.',
    need:['Seeds or seed potatoes','A pot and compost','A spot that gets sun'],
    more:'Sunflowers do well in Northern Ireland in a sheltered spot against a south-facing wall. Start them indoors on a windowsill at Easter and plant them out in May.'
  },
  {
    occasion:'easter', name:'The blossom tree indoors',
    from:'Germany — the Osterbaum',
    age:'3 and up', effort:'An hour',
    what:'Cut a few bare branches, stand them in a jug, and hang blown or wooden eggs on them — one added for each day of Holy Week, or all at once. It sits on the table and comes into leaf indoors over a fortnight.',
    why:'It gives Easter a physical centrepiece the way a tree gives Christmas one, which Easter otherwise lacks entirely. Blowing eggs — piercing both ends and blowing the inside out — is a fiddly, fascinating job that children are riveted by and can actually do.',
    need:['Bare branches — willow, hazel or forsythia','A heavy jug','Eggs, blown or wooden, and thread'],
    more:'Forsythia and willow will come into leaf or flower indoors in a week, which is the best part and catches everyone by surprise.'
  },

  // ══ NEW YEAR ═══════════════════════════════════════════════════════════
  {
    occasion:'newyear', star:true, name:'The memory jar, emptied and read',
    from:'Modern, widespread',
    age:'3 and up', effort:'Five minutes a week',
    what:'A jar on a shelf all year. Any time something good happens, anyone in the house writes it on a scrap and drops it in. On New Year’s Eve you tip the whole thing onto the table and read every one out loud before starting an empty jar for the next year.',
    why:'Adults and children both remember a year as a vague feeling, usually a slightly disappointing one. Reading out ninety specific good things that actually happened corrects that, with evidence, in twenty minutes. Families report it as the best hour of the whole holiday, and it costs a jar.',
    need:['A jar','Paper and a pen kept beside it'],
    more:'Put it where you will pass it daily. A jar in a cupboard collects four notes a year and it does not work.'
  },
  {
    occasion:'newyear', star:true, name:'Noon Year’s Eve',
    from:'Modern, and the obvious solution',
    age:'2 to 7', effort:'An hour',
    what:'Do the entire midnight countdown at midday on 31 December. Fizzy drinks in proper glasses, a countdown from ten, party poppers, music, the lot — at twelve o’clock in the afternoon. Then the children go to bed at the normal time and the adults get their evening.',
    why:'A four-year-old cannot stay up to midnight, and the attempt produces an overwrought child and a wrecked day after. This gives them the entire experience they actually want — the counting, the noise, the fizz, everyone shouting — with none of it. They do not feel short-changed; they feel like they were at the party.',
    need:['Something fizzy','Party poppers or balloons','A clock they can watch'],
    more:'A bag of balloons taped above a doorway and released on zero is the closest thing to a balloon drop and it costs three pounds.'
  },
  {
    occasion:'newyear', name:'Twelve grapes at the bells',
    from:'Spain, and much of Latin America',
    age:'4 and up, halved grapes for younger', effort:'Five minutes',
    what:'Twelve grapes each, one eaten on each chime of midnight, one wish or hope for each month of the year ahead. Almost nobody manages it and that is the game.',
    why:'It gives the moment of midnight — which is otherwise an abstraction a child cannot see — something to physically do, at speed, badly. It also sneaks in a quiet, useful act: naming twelve things you are hoping for, one per month.',
    need:['Twelve grapes per person'],
    more:'Cut grapes lengthways for anyone under about five; whole grapes are a choking risk. Works perfectly well at the Noon Year’s Eve countdown.'
  },
  {
    occasion:'newyear', name:'First footing',
    from:'Scotland and Ulster — still properly alive here',
    age:'Any age', effort:'Five minutes',
    what:'The first person over the threshold after midnight brings gifts for the year: a lump of coal for warmth, bread or shortbread so nobody goes hungry, salt, and a coin. Traditionally a dark-haired visitor. They come in the front and go out the back.',
    why:'It is one of the few customs on this list that is genuinely still practised in Northern Ireland, which means a child doing it is joining in with something their neighbours are doing, not performing something foreign. The four objects are concrete enough that a small child understands exactly what each one is for.',
    need:['A lump of coal','Bread or shortbread','Salt','A coin'],
    more:'Send the children next door in the morning of the 1st with the same four things if midnight is out of the question. Nobody minds.'
  },
  {
    occasion:'newyear', name:'Walk out and see the first sunrise',
    from:'Japan — hatsuhinode, the first sunrise of the year',
    age:'3 and up', effort:'An hour',
    what:'Get up, get out, and watch the sun come up on 1 January from somewhere with a view. Flask, blankets, and everyone stands there in the cold while it happens.',
    why:'Northern Ireland is one of the few places where this is easy: on 1 January the sun rises at about a quarter to nine, so nobody has to get up early. It is a big, silent, slightly ridiculous outing that marks the year far more physically than a countdown does, and the drive home for a fry is part of it.',
    need:['A flask','Blankets','Somewhere facing east — a beach, a hill, a headland'],
    more:'On this coast a clear 1 January is not guaranteed. Go anyway; a sky going from black to grey over the sea still does the job, and the going is the tradition.'
  },
  {
    occasion:'newyear', name:'A letter to open next New Year',
    from:'Modern, widespread',
    age:'4 and up', effort:'An hour',
    what:'Everybody writes or draws a page: what they are like right now, what they are into, what they think will happen this year. Sealed, dated, put away, opened on the same day next year before the new ones are written.',
    why:'A year is far too long for a child to feel. Opening their own handwriting from twelve months ago is the only way to make the length of a year real, and the difference between the two versions is visible to them without anyone explaining it.',
    need:['Paper and envelopes','A box or a tin'],
    more:'Pre-readers draw instead. A four-year-old’s drawing of themselves, opened at five, gets a bigger reaction than any sentence.'
  },
  {
    occasion:'newyear', name:'Jump into the new year',
    from:'Denmark, where people leap off a chair at midnight',
    age:'3 and up', effort:'Five minutes',
    what:'At the countdown, everyone stands on a chair, and on zero everyone jumps off into the new year. Danes also smash old plates on the doorsteps of friends, and the more broken china you find outside your door in the morning the better loved you are.',
    why:'It puts the change of year into the body. A child has no way to feel a date changing, but they can absolutely feel jumping off a chair while everybody shouts. Thirty seconds, no cost, and it becomes the thing they ask for next year.',
    need:['A chair each','A clear floor'],
    more:'Skip the plates, or use one cheap plate outdoors on a hard surface with everybody standing well back and shoes on.'
  },

  // ══ BIG FIRSTS ═════════════════════════════════════════════════════════
  {
    occasion:'firsts', star:true, name:'The school cone',
    from:'Germany — the Schultüte, going back to about 1810 in Saxony',
    age:'The first day of school', effort:'An evening',
    what:'A giant decorated cardboard cone, as tall as the child’s chest, filled with sweets, pencils, small toys and useful school things. They carry it to school on the first morning, are photographed with it, and it may not be opened until the school day is over.',
    why:'The first day of school is the biggest change in a young child’s life and in this country it passes with a photo in the hall. The cone does two things: it turns a frightening morning into one where the child arrives carrying something enormous and enviable, and the rule that it stays shut until the end gives them something to look forward to all day, which is exactly what a nervous five-year-old needs at eleven in the morning.',
    need:['Stiff card rolled into a cone','Tissue paper and a ribbon for the top','Things to fill it — pencils, sweets, a small toy'],
    more:'Make it together the week before and let them decorate it. A homemade one is better, and it gives the last week before school something to do that is not worrying.'
  },
  {
    occasion:'firsts', star:true, name:'A kiss kept in the hand',
    from:'Traditional, and best known from the picture book The Kissing Hand',
    age:'3 to 7', effort:'Five minutes',
    what:'At the door, kiss the palm of their hand and fold their fingers over it. It stays there all day, and whenever they miss you they press their hand to their cheek and it is still there. They can put one in your palm too, for you to keep at work.',
    why:'A child separating from you needs something physical, not a reassurance. Words at the door evaporate the moment you are out of sight; a thing they can feel in their own hand does not. It also gives them an action to take when the feeling arrives, instead of only a feeling.',
    need:[],
    more:'Works for hospital stays, first sleepovers, and the first week of anything. Do not stop offering it before they stop wanting it.'
  },
  {
    occasion:'firsts', name:'The tooth mouse, or the fairy who leaves a trail',
    from:'Spain and Latin America (Ratoncito Pérez, a little mouse), Japan (the tooth is thrown), and the tooth fairy across the English-speaking world',
    age:'5 to 9', effort:'Five minutes',
    what:'Pick a version and keep it for all their childhood. The coin under the pillow. The little mouse who takes the tooth and leaves something in its place. A note written in tiny handwriting with a tiny pen. A trail of glitter or flour footprints on the windowsill. In Japan, a lower tooth is thrown onto the roof and an upper tooth thrown under the floor, so the new one grows in the right direction.',
    why:'Losing a tooth is the first time a child’s own body does something alarming without warning, and a good number of them are frightened by it. A ritual converts it instantly into a thing to look forward to, and it recurs twenty times, so the version you choose becomes one of the most repeated stories of their childhood.',
    need:['A coin, or a tiny note','A very small pen if you are doing handwriting'],
    more:'Keep the amount modest and the same every time, because they will compare with school friends and they will remember. The note is remembered far longer than the coin.'
  },
  {
    occasion:'firsts', name:'A present from the new baby',
    from:'Traditional, and very widely done',
    age:'When a sibling arrives', effort:'An hour',
    what:'The baby arrives with a present for the older child, chosen to be something they would love and something they can do while you are stuck feeding — a new set of pens, a box of small figures, a story to listen to. And the older child brings a present for the baby which they chose themselves, and gives it themselves.',
    why:'The older child’s first meeting with the baby is the moment the relationship starts, and by default it is a moment in which a stranger has taken their mother’s arms. Handing something over and getting something back makes it an exchange between two people rather than an arrival that happened to them. The present that works during feeds is doing real work for weeks afterwards.',
    need:['One present each way','A bag kept by the door for when it happens suddenly'],
    more:'Let the older child choose the baby’s present in a shop, with their own idea, even if it is odd. The oddness is the good bit.'
  },
  {
    occasion:'firsts', name:'The last photograph in the empty room',
    from:'Ours',
    age:'When you move house', effort:'Five minutes',
    what:'Before you hand the keys over, take the children into their empty bedroom and photograph them standing in it. Let them write their name and the years they lived there somewhere hidden — inside a cupboard, behind a radiator. Then the same photograph in the new empty room on the first day.',
    why:'Children are moved house without being consulted and usually without being given any way to say goodbye to a room that was the whole of their world. Five minutes of formal farewell, with a photograph and a signature left behind, gives them a way to end it on purpose instead of just leaving.',
    need:['A camera','A pen'],
    more:'Plant something in the new garden the first weekend. Having put something in the ground changes how quickly a child calls it home.'
  },
  {
    occasion:'firsts', name:'The day the stabilisers come off',
    from:'Ours',
    age:'Whenever it happens', effort:'An hour',
    what:'Treat it as an event. Film the first unaided run. Keep the stabilisers rather than binning them — put them in the loft with the date on them. Same for the last nappy, the first swim without armbands, the first time they read a whole book alone. Write the date on the object and keep it.',
    why:'These are the genuine milestones of early childhood and every one of them passes without ceremony because they happen on ordinary Tuesdays with nobody ready. Deciding in advance that you will mark them means you actually do. A child who is filmed and cheered at the moment they master something learns that mastering things is a thing this family notices.',
    need:['A phone','A box in the loft','A permanent marker'],
    more:'Tell them in advance that today is the day you are trying it. The anticipation from breakfast onwards is half of the memory.'
  },
  {
    occasion:'firsts', name:'A name day as well as a birthday',
    from:'Greece, Poland, Hungary and much of central and eastern Europe',
    age:'Any age', effort:'An hour',
    what:'A second small celebration each year on the feast day of the saint or figure you are named after, or on the day you were named. In Greece the name day matters more than the birthday: the door is open, people call in, and there is cake.',
    why:'It gives a child a second day a year that is about them without any of the present-and-party machinery, so it stays small and warm. It also gives them a reason to know where their own name came from, which almost no child here is ever told.',
    need:['A cake','The story of why they have that name'],
    more:'If the name has no saint’s day, use the day you decided on it, or the day it was registered. Tell them the shortlist you rejected — children find this hilarious.'
  },

  // ══ THE TURNING YEAR ═══════════════════════════════════════════════════
  {
    occasion:'year', star:true, name:'St Brigid’s cross, 31 January',
    from:'Ireland — genuinely ours, and recognised as living heritage',
    age:'4 and up', effort:'An hour',
    what:'On the eve of 1 February, gather rushes from a wet field — traditionally the youngest child does the gathering and brings them into the house. Weave them into the four-armed cross, which is easier than it looks once someone shows you, and put it up over the door. A ribbon or a strip of cloth left on the windowsill overnight is said to be blessed as Brigid passes, and is kept all year.',
    why:'This is the first day of spring in the Irish year, and it arrives in the exact week when winter feels endless. It costs nothing, the rushes are free in any wet ditch, and the weaving is a real skill a five-year-old can learn in twenty minutes and then show off for the rest of their life. It is also the most local thing on this page.',
    need:['A bundle of rushes, gathered the same day','A ribbon for the windowsill'],
    more:'Rushes are everywhere in wet ground in Northern Ireland in late January. If you cannot find any, drinking straws or pipe cleaners work for learning the weave.'
  },
  {
    occasion:'year', name:'Wash your face in the May morning dew',
    from:'Ireland, Scotland and Wales — May morning, 1 May',
    age:'Any age', effort:'Five minutes',
    what:'Out before breakfast on the morning of 1 May, into the grass in bare feet, and wash your face in the dew. The custom says you will have good skin and good luck all year. Bring in some hawthorn blossom for the door while you are out, but leave it outside the house itself — bringing may blossom indoors was always said to be unlucky.',
    why:'It is barefoot in wet grass before breakfast, which for a child is pure licensed silliness and takes four minutes. It also marks the day summer starts in the old calendar, which gives May Day a meaning beyond a bank holiday.',
    need:['Grass','Bare feet'],
    more:'The other half of May Day is the May basket: flowers picked and left on a neighbour’s doorstep anonymously, knock, and run. The same shape as the Hallowe’en booing, six months out of phase.'
  },
  {
    occasion:'year', star:true, name:'Stay up until it is properly dark on the longest day',
    from:'Ours, drawing on midsummer across northern Europe',
    age:'3 and up', effort:'An evening',
    what:'On or near 21 June, nobody goes to bed at bedtime. Stay out, eat outside, and wait for it to get genuinely dark — which in Northern Ireland means about eleven o’clock. Flower crowns for whoever wants one, a fire if you can, and everybody notices the exact moment the first star appears.',
    why:'Our midsummer light is extraordinary and almost every child sleeps through it every year. Being allowed to stay up until eleven, outdoors, once a year, is one of the biggest treats available and it costs nothing. It also makes the shortest day in December mean something, because they have felt the other end of it.',
    need:['A late dinner outdoors','Blankets','Flowers for crowns if that is your thing'],
    more:'The Swedish version puts seven different flowers under the pillow to dream on. The picking of seven different flowers is a good job for a small child on a long evening.'
  },
  {
    occasion:'year', name:'The first blackberry, and the last',
    from:'Traditional across Ireland and Britain',
    age:'2 and up', effort:'An hour',
    what:'Go out for the first blackberry of the year in August — the very first one, eaten on the spot. Then go again at the end of September for the last. The old saying is that after Michaelmas, the 29th of September, they belong to the fairies and you leave them alone.',
    why:'Free food, picked by a child, from a hedge, is one of the strongest experiences available to a four-year-old — they are genuinely astonished the first time that food simply exists outdoors. Marking a first and a last gives the season edges, and the rule about stopping teaches, without a lecture, that a good thing has an end and you do not take all of it.',
    need:['A tub','Long sleeves'],
    more:'There is a practical reason behind the fairy rule: late blackberries go mouldy and sour after the first frosts and damp. The old version is easier for a child to remember than the botanical one, and it is honest to tell them both.'
  },
  {
    occasion:'year', name:'Write your name in the dark with a sparkler',
    from:'Traditional, bonfire night',
    age:'4 and up, with an adult', effort:'Five minutes',
    what:'One sparkler each, in the dark, and somebody with a phone camera on a long exposure or night mode. Each child writes their name in the air and the camera catches the whole word at once. Print one every year and you get a row of them.',
    why:'It produces a photograph the child cannot believe is real, because they cannot see the letters while they are writing them — only the camera holds the whole word. The delight of being shown it afterwards is enormous, and it is the same trick every year with a bigger, steadier signature.',
    need:['Sparklers','A phone with night mode or long exposure','A bucket of water and gloves'],
    more:'Sparklers reach about a thousand degrees. Gloves, arm’s length, one at a time, and straight into the bucket afterwards. No sparklers for under-fives — they hold the stub.'
  },
  {
    occasion:'year', name:'The same tree, four times a year',
    from:'Ours',
    age:'Any age', effort:'An hour',
    what:'Pick one tree within walking distance. Go to it on the first day of each season and photograph the children in front of it, same spot, same framing. Four photographs a year, printed and put up in a row.',
    why:'A child cannot see a year passing and cannot see themselves changing. Four photographs of the same tree, bare then budding then heavy then gold, with them standing in front of it getting bigger, shows them both at once in a form they can read at four years old. It is the cheapest and most reliable thing on this entire page.',
    need:['A tree','A phone','Somewhere to put the prints'],
    more:'Let the child choose the tree, and go in all weather. The one taken in horizontal rain is always the favourite.'
  },
  {
    occasion:'year', name:'Candles on the longest night',
    from:'Ours, drawing on solstice customs across northern Europe',
    age:'Any age', effort:'An evening',
    what:'On 21 December, the shortest day, turn off every light in the house at teatime and light candles instead. Eat by candlelight. Talk about the fact that from tomorrow it starts getting lighter again, a couple of minutes a day, all the way to the midsummer night they stayed up for.',
    why:'In Northern Ireland the sun sets before four o’clock in December and children feel it without having any idea why. Naming the darkest night, and then pointing out that it is now turning, hands them the single most reassuring fact about winter. It is also a spectacularly calm evening in the most frantic week of the year.',
    need:['Candles, and somewhere safe to put them','Dinner that can be eaten in low light'],
    more:'Mark the sunset time on the calendar on the 21st and again in mid-January, so they can see for themselves that it moved.'
  },
];
