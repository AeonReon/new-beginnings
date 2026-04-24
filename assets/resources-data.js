window.RESOURCES = [
  // Charlotte Mason curricula
  { name: 'Ambleside Online — Year 0', method: 'CM', age: 'pre-6', price: 'free', format: 'web/PDF', effort: 'high', url: 'https://amblesideonline.org/', note: 'Gold-standard free CM curriculum. Year 0 is the pre-formal booklist and rhythm. Forum is active.' },
  { name: 'Simply Charlotte Mason', method: 'CM', age: '3–6+', price: 'paid', format: 'PDF + print', effort: 'medium', url: 'https://simplycharlottemason.com/', note: 'Friendly onramp to CM. Sells Early Years guide, picture-study portfolios, hymn study, habit curriculum (Laying Down the Rails).' },
  { name: 'A Gentle Feast (Petit Feast)', method: 'CM', age: '3–5', price: 'paid', format: 'PDF or print', effort: 'medium', url: 'https://agentlefeast.com/', note: 'Julie Ross\'s CM cycle; Petit Feast is the pre-K tier.' },
  { name: 'Wildwood Curriculum', method: 'CM (secular)', age: 'pre-6', price: 'free', format: 'web/PDF', effort: 'high', url: 'https://wildwoodcurriculum.com/', note: 'Secular counterpart to Ambleside. Year 0 available.' },
  { name: 'The Alveary', method: 'CM', age: 'pre-6+', price: 'paid', format: 'subscription', effort: 'medium-high', url: 'https://charlottemasoninstitute.org/alveary/', note: 'CMI subscription. Academically rigorous and well-scaffolded.' },

  // Classical
  { name: 'Memoria Press — Junior Kindergarten', method: 'Classical', age: '4', price: 'paid', format: 'physical', effort: 'low-medium', url: 'https://www.memoriapress.com/curriculum/classical-core-curriculum/junior-kindergarten/', note: 'Traditional classical starter — alphabet, numbers, nursery rhymes, StoryTime Treasures.' },
  { name: 'Classical Conversations — Foundations', method: 'Classical', age: '4–11', price: 'paid', format: 'co-op', effort: 'medium', url: 'https://classicalconversations.com/programs/foundations/', note: 'Community-based memory-work co-op. Polarised reviews — visit locally before joining. Memory grind is a mismatch for many 4yos.', flag: 'caveat' },
  { name: 'Classical Academic Press', method: 'Classical', age: '6+', price: 'paid', format: 'physical', effort: 'low-medium', url: 'https://classicalacademicpress.com/', note: 'Song School Latin is for 6+ — flag as for later.', flag: 'later' },
  { name: 'CiRCE Institute', method: 'Classical', age: 'parent', price: 'mixed', format: 'podcast + courses', effort: 'low', url: 'https://circeinstitute.org/', note: 'For the parent\'s own formation. Andrew Kern\'s podcasts (The Commonplace, The Daily Poem) are the core draw.' },
  { name: 'Veritas Press', method: 'Classical Christian', age: '4–18', price: 'paid', format: 'physical + online', effort: 'low-medium', url: 'https://veritaspress.com/', note: 'Classical Christian publisher; K package is phonics + Bible + early readers.' },

  // Montessori
  { name: 'Monti Kids', method: 'Montessori', age: '0–3', price: 'paid', format: 'subscription box', effort: 'very low', url: 'https://montikids.com/', note: 'A 4yo is aging out — flag for younger siblings.', flag: 'younger' },
  { name: 'The Prepared Montessorian', method: 'Montessori', age: 'parent', price: 'paid', format: 'online video', effort: 'parent ed', url: 'https://thepreparedmontessorian.com/', note: 'Parent coaching and home-environment courses. Not a child curriculum.' },
  { name: 'Montessori by Mom', method: 'Montessori', age: '2–6', price: 'paid', format: 'subscription + video', effort: 'very low', url: 'https://montessoribymom.com/', note: 'Monthly "toolbox" with physical materials and tutorial videos.' },
  { name: 'NAMC albums', method: 'Montessori', age: '3–6', price: 'paid', format: 'PDF manuals', effort: 'high', url: 'https://www.namc.ca/', note: 'Full album manuals (Practical Life, Sensorial, Math, Language, Culture). For parents committed to doing Montessori seriously.' },
  { name: 'Guidepost Montessori at Home', method: 'Montessori', age: '3–6', price: 'paid', format: 'mixed', effort: 'low', url: 'https://guidepostmontessori.com/', note: 'Product tiers restructured frequently — check current offering.' },

  // Waldorf / nature
  { name: 'Oak Meadow — Kindergarten', method: 'Waldorf-inspired', age: '4–6', price: 'paid', format: 'physical + PDF', effort: 'medium', url: 'https://www.oakmeadow.com/', note: 'Secular, Waldorf-inflected K. Teacher manual, stories, crafts, seasonal rhythm.' },
  { name: 'Live Education!', method: 'Waldorf', age: 'K–8', price: 'paid', format: 'PDF + print', effort: 'high', url: 'https://live-education.com/', note: 'Traditional Waldorf. Small publisher — verify availability.', flag: 'caveat' },
  { name: 'Waldorf Essentials', method: 'Waldorf', age: 'preschool–HS', price: 'paid', format: 'online + PDF', effort: 'medium', url: 'https://waldorfessentials.com/', note: 'Melisa Nielsen\'s home-Waldorf courses.' },

  // Wild + Free / gentle
  { name: 'Wild + Free', method: 'Nature-based', age: 'all', price: 'paid (mixed)', format: 'PDF bundles + magazine', effort: 'low', url: 'https://www.bewildandfree.org/', note: 'Ainsley Arment. Monthly themed bundles. Verify current domain and platform.' },
  { name: 'The Peaceful Press — Preschool Playbook', method: 'Gentle CM', age: '2–4', price: 'paid', format: 'PDF or spiral', effort: 'low', url: 'https://thepeacefulpress.com/', note: 'Jennifer Pepito. Gentle literature-rich flow with character focus. One of the best picks for a 4yo.', flag: 'recommended' },
  { name: 'Blossom & Root — Early Years / Kindergarten', method: 'Secular CM-adjacent', age: '2–5', price: 'paid', format: 'PDF', effort: 'medium', url: 'https://www.blossomandrootkids.com/', note: 'Secular, nature-rich, literature-led.' },
  { name: 'Gentle + Classical Preschool', method: 'Gentle classical', age: '2.5–5', price: 'paid', format: 'PDF + audio', effort: 'very low', url: 'https://gentleandclassical.com/', note: 'Scripted daily lessons, memory work audio tracks, nature cards.' },
  { name: 'Exploring Nature with Children', method: 'Nature study', age: 'all', price: 'paid', format: 'PDF', effort: 'low-medium', url: 'https://raisinglittleshoots.com/', note: 'Lynn Seddon\'s 52-week nature study keyed to the calendar.' },

  // Christian / character
  { name: 'The Good and the Beautiful — Pre-K Language Arts', method: 'Christian', age: '3–4', price: 'free', format: 'PDF', effort: 'low', url: 'https://www.goodandbeautiful.com/', note: 'Pre-K LA is a free PDF. Scripted. LDS-founded, non-denominational.' },
  { name: 'My Father\'s World — K', method: 'Christian unit-study', age: '5', price: 'paid', format: 'physical', effort: 'low-medium', url: 'https://www.mfwbooks.com/', note: 'Letter-of-the-week Christian K. Mature 4yo can start.' },
  { name: 'Sonlight — Pre-K / P4/5', method: 'Christian literature-rich', age: '4–5', price: 'paid', format: 'boxed set', effort: 'low', url: 'https://www.sonlight.com/', note: '30+ read-alouds with an instructor guide and schedule.' },

  // Read-aloud / booklists
  { name: 'Read-Aloud Revival', method: 'Booklist + community', age: 'all', price: 'paid', format: 'membership + podcast', effort: 'low', url: 'https://readaloudrevival.com/', note: 'Sarah Mackenzie. Podcast is free. Membership adds booklists, book clubs, printables.' },
  { name: 'Five in a Row / Before Five in a Row', method: 'Unit study', age: '2–8', price: 'paid', format: 'PDF or physical', effort: 'medium', url: 'https://fiveinarow.com/', note: 'Before FIAR is 2–4. One picture book read five days in a row with related activities.' },
  { name: 'Honey for a Child\'s Heart (Gladys Hunt)', method: 'Booklist', age: 'birth–12', price: 'paid', format: 'book', effort: 'parent reads', url: 'https://www.zondervan.com/9780310242468/honey-for-a-childs-heart-updated-and-expanded/', note: 'Annotated reading list organised by age.' },

  // Skills
  { name: 'All About Reading — Pre-reading', method: 'Phonological awareness', age: '4–5', price: 'paid', format: 'physical', effort: 'low', url: 'https://www.allaboutlearningpress.com/all-about-reading-pre-reading/', note: 'Multisensory, fully scripted. Good if child is ready.' },
  { name: 'Logic of English — Foundations A', method: 'Phonics', age: '4–5', price: 'paid', format: 'physical', effort: 'low-medium', url: 'https://www.logicofenglish.com/foundations', note: 'Rigorous phonics + handwriting + spelling integration.' },
  { name: 'Handwriting Without Tears — Pre-K', method: 'Handwriting readiness', age: '4', price: 'paid', format: 'physical + app', effort: 'low', url: 'https://www.lwtears.com/', note: 'OT-developed. Wood pieces, chalkboards, Mat Man song.' },
  { name: 'RightStart Math — Level A', method: 'Math (abacus)', age: '5 (strong 4)', price: 'paid', format: 'physical kit', effort: 'medium', url: 'https://rightstartmath.com/', note: 'AL Abacus, game-based, scripted.' },
  { name: 'Singapore Math — Earlybird K', method: 'Math', age: '4–6', price: 'paid', format: 'workbook', effort: 'low', url: 'https://www.singaporemath.com/', note: 'Concrete-pictorial-abstract; consumable workbooks.' },
  { name: 'MEP — Mathematics Enhancement Programme', method: 'Math (UK)', age: '4+', price: 'free', format: 'PDF', effort: 'high', url: 'https://www.cimt.org.uk/projects/mep/', note: 'Full UK primary math free from University of Plymouth. Teacher-notes-driven.' },
  { name: 'Jolly Phonics', method: 'Phonics (UK)', age: '3–6', price: 'paid', format: 'physical + digital', effort: 'low', url: 'https://www.jollylearning.co.uk/', note: 'Multisensory synthetic phonics with songs and actions.' },
  { name: 'Teach Your Child to Read in 100 Easy Lessons', method: 'Phonics', age: '4.5–5.5', price: 'paid', format: 'book', effort: 'low', url: 'https://www.penguinrandomhouse.com/books/291264/teach-your-child-to-read-in-100-easy-lessons-by-siegfried-engelmann-phyllis-haddox-and-elaine-bruner/', note: 'Classic scripted phonics. Effective but drill-flavoured — only if the child is willing.' },

  // Free / public domain
  { name: 'Project Gutenberg', method: 'Public domain books', age: 'all', price: 'free', format: 'ebook', effort: 'parent selects', url: 'https://www.gutenberg.org/', note: 'Beatrix Potter, Andrew Lang fairy books, Thornton Burgess, more.' },
  { name: 'LibriVox', method: 'Public domain audio', age: 'all', price: 'free', format: 'audio', effort: 'parent selects', url: 'https://librivox.org/', note: 'Volunteer recordings of public-domain classics. Excellent for rest time.' },
  { name: 'Baldwin Project / mainlesson.com', method: 'Classic children\'s lit', age: 'all', price: 'free', format: 'web', effort: 'parent selects', url: 'https://www.mainlesson.com/', note: 'Free old-school children\'s lit and history. Uptime intermittent historically.' },
  { name: 'Yesterday\'s Classics', method: 'Classic children\'s lit (print)', age: 'all', price: 'paid (low)', format: 'print/ebook', effort: 'parent selects', url: 'https://www.yesterdaysclassics.com/', note: 'Print-on-demand reprints of Baldwin-era classics.' },
  { name: 'Easy Peasy All-in-One', method: 'Christian free', age: 'pre-K+', price: 'free', format: 'web', effort: 'medium', url: 'https://allinonehomeschool.com/', note: 'Lee Giles. "Getting Ready 1" is pre-K.' },
  { name: 'Open Library / Internet Archive', method: 'Scanned books', age: 'all', price: 'free', format: 'web (borrow)', effort: 'parent selects', url: 'https://openlibrary.org/', note: 'Digital borrowing of scanned children\'s books.' },
  { name: 'Handbook of Nature Study (Comstock)', method: 'Nature study', age: 'all', price: 'free', format: 'PDF/ebook', effort: 'parent reads', url: 'https://www.gutenberg.org/ebooks/60107', note: 'Anna Botsford Comstock, 1911. The CM-era nature-study bible.' },

  // Character / virtue
  { name: 'The Children\'s Book of Virtues (Bennett)', method: 'Virtue anthology', age: '3–8', price: 'paid', format: 'book', effort: 'low', url: 'https://www.simonandschuster.com/books/The-Childrens-Book-of-Virtues/William-J-Bennett/9780684813530', note: '31 short passages organised around courage, honesty, compassion, etc.' },
  { name: 'D\'Aulaires\' Book of Greek Myths', method: 'Mythology', age: '4–10', price: 'paid', format: 'book', effort: 'low', url: 'https://www.penguinrandomhouse.com/books/305751/dauliares-book-of-greek-myths-by-ingri-daulaire-and-edgar-parin-daulaire/', note: 'The canonical illustrated Greek myths for children.' },
  { name: 'Tending the Heart of Virtue (Guroian)', method: 'Parent reading', age: 'parent', price: 'paid', format: 'book', effort: 'parent reads', url: 'https://global.oup.com/academic/product/tending-the-heart-of-virtue-9780195384307', note: 'Why fairy tales, unsanitised, form moral imagination. Parent formation.' },
  { name: 'Laying Down the Rails (Simply CM)', method: 'Habit training', age: 'parent-led', price: 'paid', format: 'PDF + print', effort: 'parent applies', url: 'https://simplycharlottemason.com/store/laying-down-the-rails-charlotte-mason-habits/', note: 'Mason\'s habit curriculum compiled. Install one habit at a time, 4–6 weeks.' },
  { name: 'Home Education, Vol. 1 (Mason)', method: 'Parent reading', age: 'parent', price: 'free', format: 'web/ebook', effort: 'parent reads', url: 'https://www.amblesideonline.org/CM/vol1complete.html', note: 'The primary source. Dense but worth it.' },
  { name: 'Ten Ways to Destroy the Imagination of Your Child (Esolen)', method: 'Parent reading', age: 'parent', price: 'paid', format: 'book', effort: 'parent reads', url: 'https://www.regnery.com/9781610170796/ten-ways-to-destroy-the-imagination-of-your-child/', note: 'A diagnostic to-avoid list. Sharp, short, formative.' },
  { name: 'Beauty for Truth\'s Sake (Caldecott)', method: 'Parent reading', age: 'parent', price: 'paid', format: 'book', effort: 'parent reads', url: 'https://www.brazospress.com/9781587433542/beauty-for-truths-sake/', note: 'Recovery of the trivium and quadrivium through poetic imagination.' },

  // Apps (caveat)
  { name: 'Khan Academy Kids', method: 'App', age: '2–8', price: 'free', format: 'app', effort: 'very low', url: 'https://learn.khanacademy.org/khan-academy-kids/', note: 'Free, ad-free. Use sparingly — screens are not required at 4.', flag: 'caveat' },
  { name: 'Teach Your Monster to Read', method: 'App (phonics)', age: '3–7', price: 'free web / paid mobile', format: 'app', effort: 'very low', url: 'https://www.teachyourmonster.org/', note: 'Well-designed phonics game. Only if you are using screens at all.', flag: 'caveat' },
  { name: 'Lovevery Play Kits', method: 'Play subscription', age: '0–4', price: 'paid (high)', format: 'physical', effort: 'very low', url: 'https://lovevery.com/', note: '4yo tier is "Play Kit for the Realist." Thoughtful toys; expensive.' },
  { name: 'KiwiCo — Koala/Atlas/Kiwi', method: 'Craft subscription', age: '2–8+', price: 'paid', format: 'physical', effort: 'very low', url: 'https://www.kiwico.com/', note: 'Monthly STEAM craft boxes. Fine supplement; not a spine.' },

  // Communities
  { name: 'AmblesideOnline Forum', method: 'Community', age: 'parent', price: 'free', format: 'forum', effort: 'parent', url: 'https://amblesideonline.org/', note: 'Deep community around free CM curriculum.' },
  { name: 'Wild + Free meetups', method: 'Community', age: 'family', price: 'local', format: 'in-person', effort: 'parent', url: 'https://www.bewildandfree.org/', note: 'Thousands of local groups worldwide.' },
  { name: 'Scholé Sisters', method: 'Community + podcast', age: 'parent', price: 'mixed', format: 'podcast + community', effort: 'parent', url: 'https://scholesisters.com/', note: 'Brandy Vencel + Sarah Mackenzie + Pam Barnhill + Mystie Winckler. Classical from a "state of rest."' },
  { name: 'School of the Unconformed (Substack)', method: 'Parent reading', age: 'parent', price: 'free/paid', format: 'substack', effort: 'parent reads', url: 'https://schooloftheunconformed.substack.com/', note: 'Peco and Ruth Gaskovski. Digital resistance + classical home-ed.' }
];
