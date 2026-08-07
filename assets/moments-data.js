// The hard moments.
//
// The rest of the app helps on a good day. This is for the other hours.
//
// Rules for every entry here, no exceptions:
//   1. Steady the parent BEFORE giving any instruction. A parent reading this
//      has usually just had a bad few minutes.
//   2. "In the next minute" comes first and is short. Nobody reads an essay
//      while a child is screaming.
//   3. THEN the lead-up — work backwards through the hours before it. Most
//      out-of-character behaviour has a cause sitting behind it (sleep, food,
//      noise, how much of you they got, how the adults were with each other).
//      Dealing with the cause beats dealing with the act. These are prompts to
//      notice against your own child, never claims about all children.
//   4. Then the traditions — genuinely different answers, each attributed,
//      each with its real reason. Never "the science says", never one right way.
//   5. Say plainly what we are NOT claiming. The parent decides.
//
// This is curated writing, not a chatbot. The voice has to stay coherent.

window.MOMENTS = [

  {
    id: 'hitting',
    emoji: '✋',
    title: "They've hit",
    covers: 'Hitting, kicking, biting, throwing things at people',

    steady: "Nothing has gone wrong with your child, and nothing has gone wrong with you. At four, hitting is nearly always a feeling that arrived faster than the words for it. That is a missing skill, not a flaw in who they are — and a missing skill can be taught.",

    nowLead: "Every tradition on this page agrees on the next minute. Do this much and you have not got it wrong.",
    now: [
      { do: "Stop it with your body, not your voice.", why: "Step between them, or take the hand gently and hold it. Shouting from across the room asks a flooded child to do the one thing they currently cannot do." },
      { do: "Go to the child who was hurt first.", why: "Not as a punishment for the other one. It shows both children, without a word, where care goes when someone is hurt." },
      { do: "Say the limit once. Short, and level.", why: "\"I won't let you hit.\" That is the whole sentence. It is a statement about what you will do, not a question, and not a negotiation." },
      { do: "Then stop talking.", why: "A child in the middle of a big feeling cannot take in reasoning, so every extra sentence is only noise, and most of it raises the heat. The teaching happens later, when they can hear it." }
    ],

    leadUpLead: "If this is out of character, the cause is usually sitting somewhere in the hours before it. Work backwards before you work on the behaviour.",
    leadUp: [
      { check: "Sleep", note: "What time did they actually get to sleep, and were they awake in the night? A short night shows up the following afternoon far more than the following morning." },
      { check: "Food and drink", note: "What have they had in the last two hours, and what did they have before bed or first thing? Many parents find particular things — milk late at night, something sugary early — line up with a bad day. Watch your own child and see whether it holds." },
      { check: "How long they've been holding it together", note: "A shop, a car, a visit, a room of adults. Children spend effort behaving well in those places and there is a limit to the supply." },
      { check: "How much of you they've had", note: "Not hours in the same room. Minutes of undivided attention. A child short of it will take negative attention rather than none." },
      { check: "The room itself", note: "Noise, bright light, too many people, nowhere to move. Some children are far more affected by this than others." },
      { check: "The adults", note: "Was there tension between the grown-ups today, even quiet tension? Children read the temperature of a house very accurately and often act it out." }
    ],
    leadUpNote: "None of this is a law, and none of it is an excuse for the behaviour. It is a list to test against your own child. Most parents find their own pattern within a fortnight of looking.",

    waysLead: "Here is where the traditions part company. They have each been tested by real families over a long time, and they do not agree. Read them and take the one that fits your child and your household.",
    ways: [
      { id: 'montessori', tradition: 'Montessori', what: "Remove them from the situation calmly and without shame. Then, much later, when everything is quiet, teach the missing skill directly — the actual words and the actual thing to do instead. Practise it as a small rehearsal, almost as a game, at a moment when nothing is wrong.", why: "Montessori treats behaviour as information about a skill the child has not got yet, rather than as a moral event. You would not punish a child for being unable to read; you would teach them to read. The rehearsal is deliberately held for a calm moment because that is the only time a child can actually take in anything new." },
      { id: 'waldorf', tradition: 'Waldorf', what: "Say very little indeed. Bring them back into the day — a job to do with their hands, a change of room, water, something with a rhythm to it. Do not hold a discussion about what happened.", why: "The Steiner view is that a young child takes in far more from copying the adults around them than from being explained to. So your own steadiness is the actual lesson being given. There is also a practical observation behind it: a long serious conversation about the incident hands the child a large amount of adult attention immediately after it." },
      { id: 'charlotte-mason', tradition: 'Charlotte Mason', what: "Treat it as habit training. The same short response every single time, without heat, for weeks. No lecture, and no new clever strategy each time it happens.", why: "Mason's claim was that character is laid down by many small repetitions rather than won in moments of persuasion. On that view the consistency is doing the work, and the words barely matter. It also takes the pressure off: you are not trying to win this afternoon, so this afternoon going badly is not a failure." },
      { id: 'unschooling', tradition: 'Unschooling', what: "Ask what the hitting was telling you. Tired, hungry, too much noise, too long in a shop, not enough of you today? Change that, rather than addressing the act.", why: "The starting assumption is that a child behaves as well as they are able to at that moment, so behaviour that looks like defiance is usually a signal that something underneath is unmet. Change the conditions and the behaviour very often changes with them, without anyone having to be corrected." },
      { id: 'classical', tradition: 'Classical', what: "Name it plainly and attach it to a virtue they are learning — gentleness, or self-mastery. Later, read them a story in which somebody shows it.", why: "The classical assumption is that children learn what a good person looks like from concrete examples long before they can reason about right and wrong in the abstract. Naming gives the child a word to hang their own behaviour on, and the story gives them a picture to copy." }
    ],

    afterLead: "Later, when everyone is calm",
    after: [
      "Go back to them. The return matters more than the incident did — it teaches a child that a bad ten minutes does not cost them you.",
      "Ask rather than lecture. \"What happened?\" and \"What could you do instead when you feel like that?\" Two questions will do more than a speech.",
      "Let them put it right in a practical way — fetch the cold flannel, help mend the thing, sit with the person they hurt.",
      "Do not require an apology they do not mean. A forced sorry teaches a child to perform the word rather than feel the thing. Most of these traditions agree on this one."
    ],

    notTelling: [
      "We are not telling you there is one right answer here. These traditions genuinely disagree, and each has been lived out by families who raised good people.",
      "We are not telling you this is a phase you should have prevented. Almost every four-year-old hits somebody at some point.",
      "We are not promising it stops this week. If you take the habit-training path in particular, it is measured in weeks."
    ],

    seeAlso: [
      { label: 'The Great Traditions', href: 'education.html' },
      { label: 'Thinking games', href: 'games.html' }
    ]
  },

  {
    id: 'meltdown',
    emoji: '🌊',
    title: "They've completely lost it",
    covers: 'Tantrums, screaming, going rigid on the floor, inconsolable crying',

    steady: "A meltdown is not bad behaviour and it is not a negotiation. It is a small person who has run out of room. Your child is not giving you a hard time — at this moment they are having one. You do not have to fix it. You only have to stay.",

    nowLead: "You cannot teach anything during this. The whole aim of the next few minutes is to get to the other side without making it longer.",
    now: [
      { do: "Get low, and slow everything down.", why: "Come down to their height and move slowly. An adult standing over a child who is already overwhelmed adds to the load. Slow movement says, without words, that nothing here is an emergency." },
      { do: "Use fewer words and a lower voice.", why: "\"I'm here.\" That can be the whole of it. Questions are the worst thing to offer now, because a question asks them to think, and thinking is the thing that has gone offline." },
      { do: "Make it safe, then let it run.", why: "Move the furniture or move the child. But do not try to stop the crying itself — a feeling that is allowed to finish generally finishes sooner than one that is fought." },
      { do: "Wait. Teach nothing yet.", why: "Nothing said now will be remembered afterwards. Every useful thing you want to say will still be true in twenty minutes, and they will be able to hear it then." }
    ],

    leadUpLead: "Meltdowns cluster. If you track them for a fortnight you will usually find they happen at the same times, for the same handful of reasons.",
    leadUp: [
      { check: "The clock", note: "How long since they last ate, and how long since they last slept? A very large share of meltdowns sit in the hour before a meal or the hour before bed." },
      { check: "Sleep debt", note: "Not just last night. Three short nights in a row will show up as a child who breaks at the smallest thing on the fourth day." },
      { check: "What they've eaten and drunk", note: "Look particularly at anything given late at night or first thing in the morning. Some parents find a clear pattern with certain drinks or sugary things. Test it on your own child rather than taking anyone's word." },
      { check: "How much stimulation they've had", note: "Shops, screens, parties, a busy day out, several adults talking at once. Some children need a quiet hour to recover from these and become unreasonable without it." },
      { check: "Whether the day had any shape", note: "Days that jump about with no rhythm are harder for young children than full days with a predictable order." },
      { check: "The mood of the house", note: "If the adults have been short with each other, children very often act it out rather than mention it." }
    ],
    leadUpNote: "The point is not to excuse the meltdown. It is that changing a bedtime or an afternoon snack often does more than any technique used during the storm.",

    waysLead: "Once everyone is safe, the traditions diverge sharply on what a meltdown even is.",
    ways: [
      { id: 'waldorf', tradition: 'Waldorf', what: "Say almost nothing, and restore the rhythm of the day as soon as they can bear it. Warmth, a change of room, something to do with the hands. No discussion of what happened.", why: "The young child is understood to live in feeling and imitation rather than reasoning, so the adult's own steadiness is the thing that actually settles them. Analysis is thought to belong to a later stage of childhood." },
      { id: 'montessori', tradition: 'Montessori', what: "Stay nearby without taking over, and afterwards look hard at what came immediately before. Set up a calm corner they can take themselves to. Then adjust the environment so the same trigger is less likely.", why: "Montessori puts great weight on observation and on the prepared environment. If the same collapse happens at the same point every day, the environment is treated as the thing to change, not the child." },
      { id: 'charlotte-mason', tradition: 'Charlotte Mason', what: "Be present, unhurried and visibly unbothered. Do not manage it more than it needs. Mason called this masterly inactivity.", why: "The idea is that a child develops their own will by being given room to come back from things themselves. An adult who takes over every difficulty leaves nothing for the child's own will to do." },
      { id: 'unschooling', tradition: 'Unschooling', what: "Treat the meltdown as information and meet whatever it is pointing at — food, rest, closeness, or simply too much day. Stay close and offer comfort without conditions.", why: "The starting assumption is that children behave as well as they can, so a collapse means the demands of the moment exceeded what they had available. Comfort is not seen as rewarding the behaviour, because the behaviour was not a choice." },
      { id: 'classical', tradition: 'Classical', what: "Afterwards, and only afterwards, give them the words — for what they felt, and for the self-mastery they are slowly learning. Expect it to take years.", why: "The classical view is that a child cannot govern a feeling they cannot name, so naming comes first and mastery follows much later. Nobody expects a four-year-old to have arrived." }
    ],

    afterLead: "Later, when everyone is calm",
    after: [
      "Go back and be ordinary with them. Ordinariness after a storm is what tells a child the storm did not damage anything.",
      "Name what happened simply and without weight. \"You got very upset when we had to leave. That was hard.\"",
      "Do not ask them to apologise for crying. Crying was not the offence, and treating it as one teaches a child to hide feelings rather than manage them.",
      "Write down the time of day, and what came before it. Three or four of those entries will usually show you the pattern."
    ],

    notTelling: [
      "We are not telling you that calm parents get calm children. Some children have a great deal more feeling than others, from the first week of life, and that is not something you caused.",
      "We are not telling you a four-year-old who melts down will be a dysregulated adult. That is a claim nobody can honestly make.",
      "We are not promising a technique that ends them. Most of what helps is done hours earlier, not during."
    ],

    seeAlso: [
      { label: 'Daily rhythms', href: 'rhythm.html' },
      { label: 'The Great Traditions', href: 'education.html' }
    ]
  },

  {
    id: 'bedtime',
    emoji: '🌙',
    title: "They won't go to bed",
    covers: 'Bedtime battles, getting out of bed, one more drink, waking in the night',

    steady: "Bedtime is hard in most houses on most nights. A child who fights sleep is usually not being difficult — they are either too wired to stop, or they do not want the day with you to end. Both of those are ordinary, and neither means you have done something wrong.",

    nowLead: "Tonight is probably not the night you solve this. Tonight you just want it to end calmly.",
    now: [
      { do: "Stop adding anything new.", why: "Lights down, voices down, nothing exciting, no new toy, no lively conversation. Every extra input at this point buys another twenty minutes." },
      { do: "Run the same order you always run.", why: "Same steps, same sequence, ideally the same words. A young child who knows exactly what comes next argues far less than one who is guessing." },
      { do: "Offer a real choice inside the boundary.", why: "Which story, which pyjamas, which side of the bed. Not whether bed happens. A small piece of genuine control removes most of the reason to fight for it." },
      { do: "Be very boring about returns.", why: "Walk them back with almost no conversation, as many times as it takes. Any reaction — even an irritated one — is more interesting than a dark bedroom." }
    ],

    leadUpLead: "Bedtime is the moment the whole day presents its bill. Almost everything that makes it hard happened earlier.",
    leadUp: [
      { check: "Daylight and hard movement", note: "How much time outdoors, and how much genuinely physical play? A child who has not moved their body properly often cannot settle, however tired they seem." },
      { check: "What they drank and ate in the last two hours", note: "Look closely at milk and at anything sweet late on. A number of parents find a clear link between a late drink and both the fight at bedtime and the waking at three in the morning. Try changing it for a week and see." },
      { check: "Screens in the last hour", note: "Not a moral point — simply that many children take a long time to come down from a screen, and that time lands directly on your bedtime." },
      { check: "Naps", note: "Too long, or too late in the afternoon, and the evening becomes very hard. This shifts month by month at this age." },
      { check: "How much of you they had today", note: "A child who has not had you properly will often hold on to bedtime, because it is the one part of the day where they get you alone." },
      { check: "The temperature of the evening", note: "A rushed, tense hour before bed rarely produces a peaceful one after it." }
    ],
    leadUpNote: "If you change one thing, change it for a full week before judging it. Sleep patterns move slowly and a single night proves nothing.",

    waysLead: "The traditions disagree about bedtime more than almost anything else — including whether a fixed bedtime is a good idea at all.",
    ways: [
      { id: 'waldorf', tradition: 'Waldorf', what: "A strong, unvarying evening rhythm, warmly held — a candle, the same song, a story told rather than read, low light throughout. The same shape every single night.", why: "Young children are understood to orient themselves by rhythm rather than by clocks or explanations. Once the sequence is deeply familiar it carries the child into sleep without anyone needing to insist." },
      { id: 'charlotte-mason', tradition: 'Charlotte Mason', what: "Treat going to bed as a habit to be laid down — calm, consistent, unremarkable — and pair it with a great deal of time outdoors in the day.", why: "Mason held that hours in fresh air and real physical activity are what make a child ready for sleep, and that the bedtime itself should then be a habit rather than a nightly negotiation." },
      { id: 'montessori', tradition: 'Montessori', what: "Arrange the room so the child can manage their own sleep — a low or floor bed, their own things reachable, so they can get up, use the toilet and return without needing an adult.", why: "Much of the bedtime struggle is understood as a struggle for independence. Given genuine control over their own space, many children stop fighting to prove they have it." },
      { id: 'unschooling', tradition: 'Unschooling', what: "Drop the fixed bedtime. Let them sleep when their body is ready, keep the evening calm, and stay available until they go.", why: "The reasoning is that a bedtime fight is a fight about control rather than about sleep, and that removing the control removes the fight. Families who do this often report the child settles into their own consistent time." },
      { id: 'classical', tradition: 'Classical', what: "Give the day a clear shape with a proper ending, and mark it — a reading, a prayer or a verse, the same closing every night.", why: "The classical instinct is that an ordered day produces an ordered person, and that a day needs a recognisable end rather than simply stopping." }
    ],

    afterLead: "Over the next fortnight",
    after: [
      "Move the fixing earlier. Daylight, movement and the last drink of the day will change more than anything you do at eight o'clock.",
      "Give them fifteen minutes of your whole attention before the routine starts, with nothing else happening. Many families find the bedtime fight shrinks after this alone.",
      "Do not fight over the final five minutes. Winning them costs more than they are worth.",
      "Waking in the night is normal at this age and is not a sign that the routine failed."
    ],

    notTelling: [
      "We are not telling you one routine works for every child. These traditions cannot even agree on whether bedtimes should exist.",
      "We are not telling you that a child who wakes at night has been badly trained. Plenty of well-settled children still wake.",
      "We are not telling you your child is manipulating you. Wanting more of the person they love most is not manipulation."
    ],

    seeAlso: [
      { label: 'Daily rhythms', href: 'rhythm.html' },
      { label: 'Read-alouds', href: 'books.html' }
    ]
  },

  {
    id: 'siblings',
    emoji: '👧',
    title: "They're fighting with each other",
    covers: 'Squabbling, snatching, tormenting, tit-for-tat, telling on each other',

    steady: "Two children who fight are not two children who will fail to love each other. Sibling conflict is the first place a child practises fairness, holding their ground, and mending things afterwards. Practice is loud. It is not evidence that anything has gone wrong.",

    nowLead: "The aim is to stop the harm without becoming the judge. Becoming the judge is what makes it happen more.",
    now: [
      { do: "Bodies first, story second.", why: "Separate them if anyone is being hurt. Do not begin an investigation while somebody is still crying." },
      { do: "Do not look for who started it.", why: "You will not find out. And the search teaches both children that the real prize is your verdict, so the next fight will be louder and better argued." },
      { do: "Describe instead of judging.", why: "\"Two children. One bike.\" Saying plainly what you see, without a ruling, very often lets them solve it themselves — and it does not appoint a winner." },
      { do: "Hand it back if nobody is being hurt.", why: "\"That's a tricky one. Come and tell me when you've sorted it.\" Most squabbles end within a minute once there is no audience." }
    ],

    leadUpLead: "Sibling fights are extremely predictable once you watch for a week. They almost always cluster around the same conditions.",
    leadUp: [
      { check: "Hunger and tiredness", note: "The late afternoon, before dinner, is the single most common window. Often it is not a relationship problem at all." },
      { check: "Who has had you", note: "If one child has had your attention and the other has not, the one who has not will usually find a way to get some, and the fastest route is through their sibling." },
      { check: "Space", note: "Too many people in too small a room, or a wet week indoors. Some fighting is simply a shortage of floor." },
      { check: "How many of the thing there are", note: "One of something everybody wants generates conflict on its own. Two of it often ends the argument permanently." },
      { check: "The adults", note: "If the grown-ups in the house have been sharp with each other, children frequently repeat it with each other within the hour." },
      { check: "Whether it is being rewarded", note: "If fighting reliably brings an adult and a ruling, it is doing a job. Notice what it is earning." }
    ],
    leadUpNote: "Fix the conditions and a surprising amount of sibling conflict disappears without anyone being corrected.",

    waysLead: "The traditions differ on how much an adult should get involved at all.",
    ways: [
      { id: 'montessori', tradition: 'Montessori', what: "Change the environment rather than the children. One of each key material, clear places for things, and a plain rule that whoever has it may finish with it.", why: "Montessori treats most conflict as a fault in the setup rather than in the child. A room that manufactures competition will produce competing children, however well they are spoken to." },
      { id: 'reggio', tradition: 'Reggio Emilia', what: "Let them negotiate. Stay close, stay out of it, and afterwards talk about what they worked out — treating them as people capable of solving it.", why: "Reggio starts from the child as competent and sociable. On that view an adult who settles every dispute removes the exact experience the children needed in order to get good at settling disputes." },
      { id: 'charlotte-mason', tradition: 'Charlotte Mason', what: "Train the habit of courtesy calmly and outside the heat of the moment — how we speak to each other in this house — and expect it to take a long time.", why: "Mason's view was that manners between people are habits like any other, formed by steady repetition rather than by being adjudicated mid-argument." },
      { id: 'waldorf', tradition: 'Waldorf', what: "Redirect into something shared and physical — baking, carrying, sweeping, a job that needs two people. Very little discussion of the fight itself.", why: "Working alongside each other is thought to rebuild the relationship more effectively at this age than talking about it, which young children are not yet well equipped to do." },
      { id: 'unschooling', tradition: 'Unschooling', what: "Look for the unmet need behind it, and protect regular one-to-one time with each child so neither has to compete for you.", why: "The assumption is that most rivalry is about access to the parent rather than about the toy, so guaranteeing the access reduces the fighting at its source." }
    ],

    afterLead: "Over the next fortnight",
    after: [
      "Give each child a short, regular, entirely undivided piece of you. Fifteen minutes, reliably, does more than an occasional big day out.",
      "Do not force apologies between them. A required sorry teaches performance; letting them mend it in their own way teaches repair.",
      "Notice the hour it happens and treat that hour as the problem — food, outdoors, or separating them before it starts.",
      "Say out loud, sometimes, what you see them do well together. Children largely become the description they most often hear."
    ],

    notTelling: [
      "We are not telling you rivalry means you have favoured one of them. Siblings close in age fight in almost every family.",
      "We are not telling you children should share everything. Being made to hand over what you are using is not generosity, and most of these traditions say so.",
      "We are not telling you this gets solved. It gets better, in seasons, and then it changes shape."
    ],

    seeAlso: [
      { label: 'Activities for two', href: 'activities.html' },
      { label: 'Days out', href: 'things-to-do.html' }
    ]
  },

  {
    id: 'wont-eat',
    emoji: '🍽️',
    title: "They won't eat it",
    covers: 'Refusing dinner, fussy stages, living on three foods, wanting something else',

    steady: "A child refusing dinner is one of the most stressful things at a table and one of the least dangerous. Appetite at four swings enormously from day to day and from week to week. Your job is what is offered and when. How much goes in is theirs, and trying to take that job from them is what turns a meal into a fight.",

    nowLead: "Tonight, the aim is to get through the meal without it becoming a battle you will have to fight again tomorrow.",
    now: [
      { do: "Do not negotiate, and do not cook a second dinner.", why: "Once a refused meal reliably produces a preferred one, you have taught something that is very hard to unteach." },
      { do: "Say it once, plainly, then eat your own food.", why: "\"That's dinner. You don't have to eat it.\" Then turn to your own plate and talk about something else entirely." },
      { do: "Let them leave the table without a scene.", why: "Made to sit in front of food they will not eat, a child learns that the table is an unpleasant place. That costs far more over years than one missed dinner." },
      { do: "Don't use pudding as payment.", why: "It makes the sweet thing the prize and the dinner the price of it — which raises the value of one and lowers the value of the other." }
    ],

    leadUpLead: "Refusing dinner is very often decided long before dinner.",
    leadUp: [
      { check: "What they drank", note: "Milk and juice in the two hours before a meal are filling, and a child who has had a cup of either frequently is not hungry rather than being difficult." },
      { check: "Snacks", note: "Grazing through the afternoon removes the appetite that dinner depends on. Many fussy stages improve simply by closing the kitchen for two hours beforehand." },
      { check: "Movement and fresh air", note: "A child who has been outdoors and moving properly generally arrives hungry. A day indoors often arrives without much appetite at all." },
      { check: "How tired they are", note: "Past a certain point of tiredness most children stop eating. If dinner is late in a hard week, the tiredness may be the whole story." },
      { check: "The mood at the table", note: "Watching, coaxing, counting mouthfuls. Pressure at a table reliably reduces eating rather than increasing it." },
      { check: "Whether they helped", note: "Children eat noticeably more of what they had a hand in making. This is one of the easiest things to change." }
    ],
    leadUpNote: "Judge this across a week, never across a meal. Almost every child eats far more evenly over seven days than any single dinner suggests.",

    waysLead: "The traditions take quite different views of what a table is for.",
    ways: [
      { id: 'montessori', tradition: 'Montessori', what: "Give them the job. A small jug they pour themselves, real crockery, serving their own portions from a dish, and clearing their own plate afterwards.", why: "Montessori holds that a child resists being fed and cooperates with feeding themselves. Handing over the practical control very often returns the appetite along with it." },
      { id: 'charlotte-mason', tradition: 'Charlotte Mason', what: "No fuss and no remark. The food is put down, the conversation is about something else, and refusing it is not treated as an event.", why: "Mason's approach to the table was that attention feeds a habit. A refusal that produces no reaction has far less to recommend it than one that produces a scene." },
      { id: 'waldorf', tradition: 'Waldorf', what: "Eat at the same times every day, with a small ritual to open the meal — a verse, a candle, everyone waiting until all are seated. Calm and unhurried.", why: "The meal is treated as part of the rhythm of the day rather than as a task to complete, on the view that a settled child at a settled table eats more easily." },
      { id: 'unschooling', tradition: 'Unschooling', what: "Trust the appetite. Keep genuinely good food within reach, stop steering entirely, and let them eat when and what they are drawn to.", why: "The reasoning is that a child whose eating is not controlled has no reason to fight about it, and that appetite left alone tends to balance itself over time rather than over meals." },
      { id: 'classical', tradition: 'Classical', what: "Eat together, at a table, as a practice — and treat learning to eat what is put in front of you as one of the small pieces of self-mastery a child is slowly acquiring.", why: "The classical view is that the shared table is a place where people are formed, and that a modest willingness to accept what is offered is part of learning to govern oneself." }
    ],

    afterLead: "Over the next fortnight",
    after: [
      "Cook with them. It is the single most reliable thing that changes what a child will eat.",
      "Keep offering a food without pressure. It can take many separate sightings before a child will try something, and pressure resets the count.",
      "Close the kitchen for two hours before dinner and see what happens to the appetite.",
      "Look at the week rather than the meal. Write down what they ate for seven days and it will usually look much better than it felt."
    ],

    notTelling: [
      "We are not telling you one refused dinner matters. It does not.",
      "We are not telling you a fussy stage predicts a fussy adult. Most children widen out again in their own time.",
      "We are not telling you to hide vegetables in things. Some families find it useful, others think it teaches distrust of food. We are not going to pretend that argument is settled.",
      "If a child is losing weight, eating an extremely narrow range for a long period, or the refusing is causing real distress, that is a conversation for your health visitor or GP rather than for an app."
    ],

    seeAlso: [
      { label: 'Cook together', href: 'recipes.html' },
      { label: 'Food & real eating', href: 'food.html' }
    ]
  }

];
