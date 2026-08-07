// The hard moments.
//
// The rest of the app helps on a good day. This is for the other hours.
//
// Rules for every entry here, no exceptions:
//   1. Steady the parent BEFORE giving any instruction. A parent reading this
//      has usually just had a bad few minutes.
//   2. "In the next minute" comes first and is short. Nobody reads an essay
//      while a child is screaming.
//   3. Then the traditions — genuinely different answers, each attributed,
//      each with its real reason. Never "the science says", never one right way.
//   4. Say plainly what we are NOT claiming. The parent decides.
//
// This is curated writing, not a chatbot. The voice has to stay coherent.

window.MOMENTS = [

  {
    id: 'hitting',
    emoji: '✋',
    title: "They've hit",
    covers: 'Hitting, kicking, biting, throwing things at people',

    // Read first, before any advice.
    steady: "Nothing has gone wrong with your child, and nothing has gone wrong with you. At four, hitting is nearly always a feeling that arrived faster than the words for it. That is a missing skill, not a flaw in who they are — and a missing skill can be taught.",

    // The shared ground. Every tradition below agrees on these four.
    nowLead: "Every tradition on this page agrees on the next minute. Do this much and you have not got it wrong.",
    now: [
      {
        do: "Stop it with your body, not your voice.",
        why: "Step between them, or take the hand gently and hold it. Shouting from across the room asks a flooded child to do the one thing they currently cannot do."
      },
      {
        do: "Go to the child who was hurt first.",
        why: "Not as a punishment for the other one. It shows both children, without a word, where care goes when someone is hurt."
      },
      {
        do: "Say the limit once. Short, and level.",
        why: "\"I won't let you hit.\" That is the whole sentence. It is a statement about what you will do, not a question, and not a negotiation."
      },
      {
        do: "Then stop talking.",
        why: "A child in the middle of a big feeling cannot take in reasoning, so every extra sentence is only noise, and most of it raises the heat. The teaching happens later, when they can hear it."
      }
    ],

    // Where they genuinely differ. This is the part no other app can do.
    waysLead: "Here is where the traditions part company. They have each been tested by real families over a long time, and they do not agree. Read them and take the one that fits your child and your household.",
    ways: [
      {
        id: 'montessori',
        tradition: 'Montessori',
        what: "Remove them from the situation calmly and without shame. Then, much later, when everything is quiet, teach the missing skill directly — the actual words and the actual thing to do instead. Practise it as a small rehearsal, almost as a game, at a moment when nothing is wrong.",
        why: "Montessori treats behaviour as information about a skill the child has not got yet, rather than as a moral event. You would not punish a child for being unable to read; you would teach them to read. The rehearsal is deliberately held for a calm moment because that is the only time a child can actually take in anything new."
      },
      {
        id: 'waldorf',
        tradition: 'Waldorf',
        what: "Say very little indeed. Bring them back into the day — a job to do with their hands, a change of room, water, something with a rhythm to it. Do not hold a discussion about what happened.",
        why: "The Steiner view is that a young child takes in far more from copying the adults around them than from being explained to. So your own steadiness is the actual lesson being given. There is also a practical observation behind it: a long serious conversation about the incident hands the child a large amount of adult attention immediately after it."
      },
      {
        id: 'charlotte-mason',
        tradition: 'Charlotte Mason',
        what: "Treat it as habit training. The same short response every single time, without heat, for weeks. No lecture, and no new clever strategy each time it happens.",
        why: "Mason's claim was that character is laid down by many small repetitions rather than won in moments of persuasion. On that view the consistency is doing the work, and the words barely matter. It also takes the pressure off: you are not trying to win this afternoon, so this afternoon going badly is not a failure."
      },
      {
        id: 'unschooling',
        tradition: 'Unschooling',
        what: "Ask what the hitting was telling you. Tired, hungry, too much noise, too long in a shop, not enough of you today? Change that, rather than addressing the act.",
        why: "The starting assumption is that a child behaves as well as they are able to at that moment, so behaviour that looks like defiance is usually a signal that something underneath is unmet. Change the conditions and the behaviour very often changes with them, without anyone having to be corrected."
      },
      {
        id: 'classical',
        tradition: 'Classical',
        what: "Name it plainly and attach it to a virtue they are learning — gentleness, or self-mastery. Later, read them a story in which somebody shows it.",
        why: "The classical assumption is that children learn what a good person looks like from concrete examples long before they can reason about right and wrong in the abstract. Naming gives the child a word to hang their own behaviour on, and the story gives them a picture to copy."
      }
    ],

    // The repair.
    afterLead: "Later, when everyone is calm",
    after: [
      "Go back to them. The return matters more than the incident did — it teaches a child that a bad ten minutes does not cost them you.",
      "Ask rather than lecture. \"What happened?\" and \"What could you do instead when you feel like that?\" Two questions will do more than a speech.",
      "Let them put it right in a practical way — fetch the cold flannel, help mend the thing, sit with the person they hurt.",
      "Do not require an apology they do not mean. A forced sorry teaches a child to perform the word rather than feel the thing. Most of these traditions agree on this one."
    ],

    // Honest limits. Same spirit as the Compass page.
    notTelling: [
      "We are not telling you there is one right answer here. These traditions genuinely disagree, and each has been lived out by families who raised good people.",
      "We are not telling you this is a phase you should have prevented. Almost every four-year-old hits somebody at some point.",
      "We are not promising it stops this week. If you take the habit-training path in particular, it is measured in weeks."
    ],

    // Where to read more inside the app.
    seeAlso: [
      { label: 'Emotions & Connection', href: 'emotions.html' },
      { label: 'The Great Traditions', href: 'education.html' }
    ]
  }

];
