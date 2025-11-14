// -------- Lesson definitions --------------------------------------------
// 100-lesson path: home row -> nearby keys -> words -> punctuation -> sentences -> tests.
const lessonOrder = [
  // 1–10: Single key drills, home row
  "l01-home-f",
  "l02-home-j",
  "l03-home-d",
  "l04-home-k",
  "l05-home-s",
  "l06-home-l",
  "l07-home-a",
  "l08-home-semicolon",
  "l09-home-asdf",
  "l10-home-jkl",

  // 11–20: Mixed home row drills
  "l11-home-asdf-jkl",
  "l12-home-asdf-jkl-repeat",
  "l13-home-patterns-1",
  "l14-home-patterns-2",
  "l15-home-zigzag-1",
  "l16-home-zigzag-2",
  "l17-home-doubles-1",
  "l18-home-doubles-2",
  "l19-home-random-1",
  "l20-home-random-2",

  // 21–30: Home row simple words
  "l21-home-words-1",
  "l22-home-words-2",
  "l23-home-words-3",
  "l24-home-words-4",
  "l25-home-words-5",
  "l26-home-words-6",
  "l27-home-words-7",
  "l28-home-words-8",
  "l29-home-words-9",
  "l30-home-words-10",

  // 31–40: G and H keys + practice
  "l31-gh-keys-1",
  "l32-gh-keys-2",
  "l33-gh-words-1",
  "l34-gh-words-2",
  "l35-gh-home-mix-1",
  "l36-gh-home-mix-2",
  "l37-gh-home-mix-3",
  "l38-gh-phrases-1",
  "l39-gh-phrases-2",
  "l40-gh-phrases-3",

  // 41–50: Top row keys (E, I, R, U, T, Y)
  "l41-top-e-i",
  "l42-top-r-u",
  "l43-top-t-y",
  "l44-top-ei-words-1",
  "l45-top-ru-words-1",
  "l46-top-ty-words-1",
  "l47-top-mix-1",
  "l48-top-mix-2",
  "l49-top-mix-3",
  "l50-top-mix-4",

  // 51–60: Top row extended (O, P) and words
  "l51-top-o-p",
  "l52-top-op-words-1",
  "l53-top-op-words-2",
  "l54-top-sentences-1",
  "l55-top-sentences-2",
  "l56-top-sentences-3",
  "l57-top-review-1",
  "l58-top-review-2",
  "l59-top-review-3",
  "l60-top-review-4",

  // 61–70: Bottom row keys and words
  "l61-bottom-c-v",
  "l62-bottom-b-n",
  "l63-bottom-m-x-z",
  "l64-bottom-words-1",
  "l65-bottom-words-2",
  "l66-bottom-words-3",
  "l67-bottom-mix-1",
  "l68-bottom-mix-2",
  "l69-bottom-mix-3",
  "l70-bottom-mix-4",

  // 71–80: Punctuation and numbers
  "l71-punct-period-comma",
  "l72-punct-question-exclaim",
  "l73-punct-semicolon-colon",
  "l74-punct-hyphen-apostrophe",
  "l75-punct-sentences-1",
  "l76-punct-sentences-2",
  "l77-punct-sentences-3",
  "l78-numbers-row-1",
  "l79-numbers-row-2",
  "l80-numbers-row-3",

  // 81–90: Full sentences practice
  "l81-sentences-easy-1",
  "l82-sentences-easy-2",
  "l83-sentences-easy-3",
  "l84-sentences-easy-4",
  "l85-sentences-medium-1",
  "l86-sentences-medium-2",
  "l87-sentences-medium-3",
  "l88-sentences-medium-4",
  "l89-sentences-review-1",
  "l90-sentences-review-2",

  // 91–100: Speed & accuracy tests
  "l91-test-home-row",
  "l92-test-top-row",
  "l93-test-bottom-row",
  "l94-test-mixed-1",
  "l95-test-mixed-2",
  "l96-test-mixed-3",
  "l97-test-sentences-1",
  "l98-test-sentences-2",
  "l99-test-sentences-3",
  "l100-test-final"
];

const lessons = {
  // 1–10: Single key drills, home row
  "l01-home-f": {
    id: "l01-home-f",
    title: "Lesson 1 – F key",
    description: "Left index finger on the F key. Feel the small bump and return to home row each time.",
    text: "f f f f f f f f f f f f f f f f"
  },
  "l02-home-j": {
    id: "l02-home-j",
    title: "Lesson 2 – J key",
    description: "Right index finger on the J key. Keep your hands relaxed.",
    text: "j j j j j j j j j j j j j j j j"
  },
  "l03-home-d": {
    id: "l03-home-d",
    title: "Lesson 3 – D key",
    description: "Left middle finger on the D key.",
    text: "d d d d d d d d d d d d d d d d"
  },
  "l04-home-k": {
    id: "l04-home-k",
    title: "Lesson 4 – K key",
    description: "Right middle finger on the K key.",
    text: "k k k k k k k k k k k k k k k k"
  },
  "l05-home-s": {
    id: "l05-home-s",
    title: "Lesson 5 – S key",
    description: "Left ring finger on the S key.",
    text: "s s s s s s s s s s s s s s s s"
  },
  "l06-home-l": {
    id: "l06-home-l",
    title: "Lesson 6 – L key",
    description: "Right ring finger on the L key.",
    text: "l l l l l l l l l l l l l l l l"
  },
  "l07-home-a": {
    id: "l07-home-a",
    title: "Lesson 7 – A key",
    description: "Left little finger on the A key.",
    text: "a a a a a a a a a a a a a a a a"
  },
  "l08-home-semicolon": {
    id: "l08-home-semicolon",
    title: "Lesson 8 – ; key",
    description: "Right little finger on the ; key.",
    text: "; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;"
  },
  "l09-home-asdf": {
    id: "l09-home-asdf",
    title: "Lesson 9 – ASDF pattern",
    description: "Move across the left hand home row: A S D F.",
    text: "a s d f a s d f a s d f a s d f"
  },
  "l10-home-jkl": {
    id: "l10-home-jkl",
    title: "Lesson 10 – JKL; pattern",
    description: "Move across the right hand home row: J K L ;.",
    text: "j k l ; j k l ; j k l ; j k l ;"
  },

  // 11–20: Mixed home row drills
  "l11-home-asdf-jkl": {
    id: "l11-home-asdf-jkl",
    title: "Lesson 11 – Home row both hands",
    description: "Combine left and right home row keys.",
    text: "asdf jkl; asdf jkl; asdf jkl; asdf jkl;"
  },
  "l12-home-asdf-jkl-repeat": {
    id: "l12-home-asdf-jkl-repeat",
    title: "Lesson 12 – Home row repeat",
    description: "More practice with full home row patterns.",
    text: "jkl; asdf jkl; asdf asdf jkl; asdf jkl;"
  },
  "l13-home-patterns-1": {
    id: "l13-home-patterns-1",
    title: "Lesson 13 – Home row patterns 1",
    description: "Alternate fingers in simple patterns.",
    text: "fj fj fj fj dj dj dj dj sl sl sl sl aa ss dd ff jj kk ll ;;"
  },
  "l14-home-patterns-2": {
    id: "l14-home-patterns-2",
    title: "Lesson 14 – Home row patterns 2",
    description: "Cross-hand patterns to build control.",
    text: "fa fa fa fa ja ja ja ja sd sd sd sd kl kl kl kl"
  },
  "l15-home-zigzag-1": {
    id: "l15-home-zigzag-1",
    title: "Lesson 15 – Zigzag 1",
    description: "Move back and forth across the home row.",
    text: "asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj"
  },
  "l16-home-zigzag-2": {
    id: "l16-home-zigzag-2",
    title: "Lesson 16 – Zigzag 2",
    description: "More zigzag practice for home row.",
    text: "fads jk;l fads jk;l fads jk;l fads jk;l"
  },
  "l17-home-doubles-1": {
    id: "l17-home-doubles-1",
    title: "Lesson 17 – Double letters 1",
    description: "Type the same home row letter twice.",
    text: "ff jj dd kk ss ll aa ;; ff jj dd kk ss ll aa ;;"
  },
  "l18-home-doubles-2": {
    id: "l18-home-doubles-2",
    title: "Lesson 18 – Double letters 2",
    description: "Mixed doubles on the home row.",
    text: "aa ss dd ff jj kk ll ;; aa ff ss jj dd ll kk ;;"
  },
  "l19-home-random-1": {
    id: "l19-home-random-1",
    title: "Lesson 19 – Random home row 1",
    description: "Random home row sequence to test your control.",
    text: "s d j a f l ; k d a j f s k ; l a ; d s j f l k"
  },
  "l20-home-random-2": {
    id: "l20-home-random-2",
    title: "Lesson 20 – Random home row 2",
    description: "Another random home row drill.",
    text: "j a ; s l d f k a j s f ; d l k f ; a s j l d k"
  },

  // 21–30: Home row simple words
  "l21-home-words-1": {
    id: "l21-home-words-1",
    title: "Lesson 21 – Home row words 1",
    description: "Short words using only home row letters.",
    text: "sad lad alas; alas dad; salad; adds; dad adds; lad sad;"
  },
  "l22-home-words-2": {
    id: "l22-home-words-2",
    title: "Lesson 22 – Home row words 2",
    description: "More short home row words.",
    text: "sass lass fall; as has had; all as; salad as;;"
  },
  "l23-home-words-3": {
    id: "l23-home-words-3",
    title: "Lesson 23 – Home row words 3",
    description: "Repeat home row words for accuracy.",
    text: "dad said; lads add; alas lass; salad sad lad;"
  },
  "l24-home-words-4": {
    id: "l24-home-words-4",
    title: "Lesson 24 – Home row words 4",
    description: "A mix of simple home row words.",
    text: "all dad; all lads; sad dad; add all; lads as;"
  },
  "l25-home-words-5": {
    id: "l25-home-words-5",
    title: "Lesson 25 – Home row words 5",
    description: "Focus on smooth movement between letters.",
    text: "falls; sall; alas; salad; as lad; lad as;"
  },
  "l26-home-words-6": {
    id: "l26-home-words-6",
    title: "Lesson 26 – Home row words 6",
    description: "More repetition for solid muscle memory.",
    text: "sad; lad; all; as; alas; lads; salad; dad;"
  },
  "l27-home-words-7": {
    id: "l27-home-words-7",
    title: "Lesson 27 – Home row words 7",
    description: "Try to keep your eyes on the screen.",
    text: "sad sad lad lad dad dad as as alas alas;"
  },
  "l28-home-words-8": {
    id: "l28-home-words-8",
    title: "Lesson 28 – Home row words 8",
    description: "Repeat familiar words to build speed.",
    text: "salad salad; lads lads; dad dad; sad sad;"
  },
  "l29-home-words-9": {
    id: "l29-home-words-9",
    title: "Lesson 29 – Home row words 9",
    description: "Mixing words for accuracy and rhythm.",
    text: "sad lad salad; dad adds; lads as; all lads;"
  },
  "l30-home-words-10": {
    id: "l30-home-words-10",
    title: "Lesson 30 – Home row words 10",
    description: "Final home row word drill.",
    text: "sad salad; lads sad; dad salad; lads adds;"
  },

  // 31–40: G and H keys + practice
  "l31-gh-keys-1": {
    id: "l31-gh-keys-1",
    title: "Lesson 31 – G key",
    description: "Reach up from F to G with your left index finger.",
    text: "g g g g g g g g g g g g g g g g"
  },
  "l32-gh-keys-2": {
    id: "l32-gh-keys-2",
    title: "Lesson 32 – H key",
    description: "Reach up from J to H with your right index finger.",
    text: "h h h h h h h h h h h h h h h h"
  },
  "l33-gh-words-1": {
    id: "l33-gh-words-1",
    title: "Lesson 33 – Words with G and H 1",
    description: "Add G and H to your home row words.",
    text: "had hag had had; sad had; lad had; hag had;"
  },
  "l34-gh-words-2": {
    id: "l34-gh-words-2",
    title: "Lesson 34 – Words with G and H 2",
    description: "More practice with G and H.",
    text: "lag gas had; sag gala; dash had; had lag;"
  },
  "l35-gh-home-mix-1": {
    id: "l35-gh-home-mix-1",
    title: "Lesson 35 – G H mix 1",
    description: "Mix G and H with full home row.",
    text: "g h g h had sag had sad hag lad had;"
  },
  "l36-gh-home-mix-2": {
    id: "l36-gh-home-mix-2",
    title: "Lesson 36 – G H mix 2",
    description: "More mixed practice with G and H.",
    text: "hag had sad lad; had had; sag had; lad hag;"
  },
  "l37-gh-home-mix-3": {
    id: "l37-gh-home-mix-3",
    title: "Lesson 37 – G H mix 3",
    description: "Try to keep a steady rhythm as you type.",
    text: "had had had; hag hag hag; sad had hag; lad had sad;"
  },
  "l38-gh-phrases-1": {
    id: "l38-gh-phrases-1",
    title: "Lesson 38 – Short phrases 1",
    description: "Short phrases including G and H.",
    text: "had a sad lad; had a sag salad; had a glad lad;"
  },
  "l39-gh-phrases-2": {
    id: "l39-gh-phrases-2",
    title: "Lesson 39 – Short phrases 2",
    description: "More short phrases for practice.",
    text: "sad hag had salad; glad lad had salad;"
  },
  "l40-gh-phrases-3": {
    id: "l40-gh-phrases-3",
    title: "Lesson 40 – Short phrases 3",
    description: "Finish G and H practice with simple phrases.",
    text: "had sad lads; glad lads had salad;"
  },

  // 41–50: Top row keys (E, I, R, U, T, Y)
  "l41-top-e-i": {
    id: "l41-top-e-i",
    title: "Lesson 41 – E and I keys",
    description: "Reach to E and I with middle fingers, returning to home row.",
    text: "e e e e i i i i e i e i e i e i"
  },
  "l42-top-r-u": {
    id: "l42-top-r-u",
    title: "Lesson 42 – R and U keys",
    description: "Reach to R and U with index fingers.",
    text: "r r r r u u u u r u r u r u r u"
  },
  "l43-top-t-y": {
    id: "l43-top-t-y",
    title: "Lesson 43 – T and Y keys",
    description: "Reach to T and Y with index fingers slightly stretching.",
    text: "t t t t y y y y t y t y t y t y"
  },
  "l44-top-ei-words-1": {
    id: "l44-top-ei-words-1",
    title: "Lesson 44 – Words with E and I",
    description: "Words using E and I with home row letters.",
    text: "red rid read; seed side; did deed; see; die; tire;"
  },
  "l45-top-ru-words-1": {
    id: "l45-top-ru-words-1",
    title: "Lesson 45 – Words with R and U",
    description: "Words using R and U with home row letters.",
    text: "rug rude; run red; rare sure; surf; furred;"
  },
  "l46-top-ty-words-1": {
    id: "l46-top-ty-words-1",
    title: "Lesson 46 – Words with T and Y",
    description: "Words using T and Y with home row letters.",
    text: "try tray; tasty; tatty; rusty; tiny; tidy;"
  },
  "l47-top-mix-1": {
    id: "l47-top-mix-1",
    title: "Lesson 47 – Top row mix 1",
    description: "Mix top row keys E I R U T Y with home row.",
    text: "true tire tree try yet; try red rug; sure duty;"
  },
  "l48-top-mix-2": {
    id: "l48-top-mix-2",
    title: "Lesson 48 – Top row mix 2",
    description: "More mixed top row practice.",
    text: "try to read; red tyre; tiny tree; rusty tyre;"
  },
  "l49-top-mix-3": {
    id: "l49-top-mix-3",
    title: "Lesson 49 – Top row mix 3",
    description: "Practise smooth movement between home and top row.",
    text: "try read; read try; try true; true try; red tree;"
  },
  "l50-top-mix-4": {
    id: "l50-top-mix-4",
    title: "Lesson 50 – Top row mix 4",
    description: "Final top row mix lesson in this set.",
    text: "yet true; red tyre; try sure; tiny duty;"
  },

  // 51–60: Top row extended (O, P) and words
  "l51-top-o-p": {
    id: "l51-top-o-p",
    title: "Lesson 51 – O and P keys",
    description: "Reach to O and P with your right hand fingers.",
    text: "o o o o p p p p o p o p o p o p"
  },
  "l52-top-op-words-1": {
    id: "l52-top-op-words-1",
    title: "Lesson 52 – Words with O and P",
    description: "Add O and P to your top row practice.",
    text: "pop prop; poor rope; pore port; part port; pot top;"
  },
  "l53-top-op-words-2": {
    id: "l53-top-op-words-2",
    title: "Lesson 53 – More O and P words",
    description: "More repetition with O and P words.",
    text: "pop pop poor poor; pot pot pure pure; port port;"
  },
  "l54-top-sentences-1": {
    id: "l54-top-sentences-1",
    title: "Lesson 54 – Short sentences 1",
    description: "Short sentences with top row and home row letters.",
    text: "Tom met Tim. Tom met a red pony. Pip rode the tiny pony."
  },
  "l55-top-sentences-2": {
    id: "l55-top-sentences-2",
    title: "Lesson 55 – Short sentences 2",
    description: "More short sentences for practice.",
    text: "Tim read a red story. Rita tried a tiny rug."
  },
  "l56-top-sentences-3": {
    id: "l56-top-sentences-3",
    title: "Lesson 56 – Short sentences 3",
    description: "Keep your eyes on the screen as you type.",
    text: "Terry tried to type. Yet Terry read more to type better."
  },
  "l57-top-review-1": {
    id: "l57-top-review-1",
    title: "Lesson 57 – Top row review 1",
    description: "Review E R T Y U I O P with simple words.",
    text: "type true rope ripe port tire pure tree your"
  },
  "l58-top-review-2": {
    id: "l58-top-review-2",
    title: "Lesson 58 – Top row review 2",
    description: "More top row review.",
    text: "tetra tire yet pore peer pout tour try"
  },
  "l59-top-review-3": {
    id: "l59-top-review-3",
    title: "Lesson 59 – Top row review 3",
    description: "Repeat to build speed and accuracy.",
    text: "try your time; type your name; type your word;"
  },
  "l60-top-review-4": {
    id: "l60-top-review-4",
    title: "Lesson 60 – Top row review 4",
    description: "Final top row review lesson.",
    text: "type pure tree; type red tyre; type tiny tower;"
  },

  // 61–70: Bottom row keys and words
  "l61-bottom-c-v": {
    id: "l61-bottom-c-v",
    title: "Lesson 61 – C and V keys",
    description: "Reach down to C and V with your left hand.",
    text: "c c c c v v v v c v c v c v c v"
  },
  "l62-bottom-b-n": {
    id: "l62-bottom-b-n",
    title: "Lesson 62 – B and N keys",
    description: "Reach down to B and N with your left and right hands.",
    text: "b b b b n n n n b n b n b n b n"
  },
  "l63-bottom-m-x-z": {
    id: "l63-bottom-m-x-z",
    title: "Lesson 63 – M, X and Z keys",
    description: "Reach down to M, X and Z carefully.",
    text: "m m m m x x x x z z z z m x z m x z"
  },
  "l64-bottom-words-1": {
    id: "l64-bottom-words-1",
    title: "Lesson 64 – Bottom row words 1",
    description: "Simple words using bottom row keys.",
    text: "cab can van man cam ban; max mix; zoom;"
  },
  "l65-bottom-words-2": {
    id: "l65-bottom-words-2",
    title: "Lesson 65 – Bottom row words 2",
    description: "More bottom row word practice.",
    text: "mum man many; cab nab; nab cab; fax box vex;"
  },
  "l66-bottom-words-3": {
    id: "l66-bottom-words-3",
    title: "Lesson 66 – Bottom row words 3",
    description: "Repeat the patterns until they feel easy.",
    text: "man cab; cab man; van man; max cab; box man;"
  },
  "l67-bottom-mix-1": {
    id: "l67-bottom-mix-1",
    title: "Lesson 67 – Bottom mix 1",
    description: "Mix bottom row keys with home row letters.",
    text: "cab sad; man lad; ban dad; max salad; box had;"
  },
  "l68-bottom-mix-2": {
    id: "l68-bottom-mix-2",
    title: "Lesson 68 – Bottom mix 2",
    description: "More mixing of bottom row and home row.",
    text: "mad man; bad man; cab add; ban had; had man;"
  },
  "l69-bottom-mix-3": {
    id: "l69-bottom-mix-3",
    title: "Lesson 69 – Bottom mix 3",
    description: "Practise controlling reaches to the bottom row.",
    text: "van and cab; man and lad; bad cab; mad man;"
  },
  "l70-bottom-mix-4": {
    id: "l70-bottom-mix-4",
    title: "Lesson 70 – Bottom mix 4",
    description: "Final bottom row mix lesson in this set.",
    text: "many vans and cabs; many bad cabs; many mad men;"
  },

  // 71–80: Punctuation and numbers
  "l71-punct-period-comma": {
    id: "l71-punct-period-comma",
    title: "Lesson 71 – . and ,",
    description: "Use your right hand for the period and comma keys.",
    text: "., .,. . . , , . , . , . , . . , ,"
  },
  "l72-punct-question-exclaim": {
    id: "l72-punct-question-exclaim",
    title: "Lesson 72 – ? and !",
    description: "Reach up for the question mark and exclamation mark.",
    text: "?? !! ?! !? ?? !! ?! !?"
  },
  "l73-punct-semicolon-colon": {
    id: "l73-punct-semicolon-colon",
    title: "Lesson 73 – ; and :",
    description: "Practise semicolon and colon.",
    text: ";; :: ;: :; ;; :: ;: :;"
  },
  "l74-punct-hyphen-apostrophe": {
    id: "l74-punct-hyphen-apostrophe",
    title: "Lesson 74 – - and '",
    description: "Hyphen and apostrophe in simple patterns.",
    text: "-- '' -' '- -- '' -' '-"
  },
  "l75-punct-sentences-1": {
    id: "l75-punct-sentences-1",
    title: "Lesson 75 – Punctuation sentences 1",
    description: "Short sentences with commas and periods.",
    text: "Sam ran, then Sam sat. Dad read, then Dad slept."
  },
  "l76-punct-sentences-2": {
    id: "l76-punct-sentences-2",
    title: "Lesson 76 – Punctuation sentences 2",
    description: "Sentences with question marks and exclamation marks.",
    text: "Can Sam run fast? Sam can run fast! Can Dad run? Dad can!"
  },
  "l77-punct-sentences-3": {
    id: "l77-punct-sentences-3",
    title: "Lesson 77 – Punctuation sentences 3",
    description: "Mixed punctuation in simple sentences.",
    text: "Sam, can you see? Yes, Sam can see! Dad, can you see Sam?"
  },
  "l78-numbers-row-1": {
    id: "l78-numbers-row-1",
    title: "Lesson 78 – Numbers row 1",
    description: "Practise 1, 2, 3, 4, 5 on the number row.",
    text: "1 1 2 2 3 3 4 4 5 5 1 2 3 4 5"
  },
  "l79-numbers-row-2": {
    id: "l79-numbers-row-2",
    title: "Lesson 79 – Numbers row 2",
    description: "Practise 6, 7, 8, 9, 0 on the number row.",
    text: "6 6 7 7 8 8 9 9 0 0 6 7 8 9 0"
  },
  "l80-numbers-row-3": {
    id: "l80-numbers-row-3",
    title: "Lesson 80 – Numbers and words",
    description: "Combine numbers with simple words.",
    text: "1 cat, 2 cats, 3 cats. 4 dogs, 5 dogs."
  },

  // 81–90: Full sentences practice
  "l81-sentences-easy-1": {
    id: "l81-sentences-easy-1",
    title: "Lesson 81 – Easy sentences 1",
    description: "Short, simple sentences for warm up.",
    text: "Sam had a rug. Dad had a red bag. The bag sat on the mat."
  },
  "l82-sentences-easy-2": {
    id: "l82-sentences-easy-2",
    title: "Lesson 82 – Easy sentences 2",
    description: "More short sentences to build rhythm.",
    text: "The red van is full. A cat sat on the rug. The sun set."
  },
  "l83-sentences-easy-3": {
    id: "l83-sentences-easy-3",
    title: "Lesson 83 – Easy sentences 3",
    description: "Keep your hands relaxed and steady.",
    text: "Tim met Sam at the gate. They sat on a log and had a chat."
  },
  "l84-sentences-easy-4": {
    id: "l84-sentences-easy-4",
    title: "Lesson 84 – Easy sentences 4",
    description: "Even more easy sentences for practice.",
    text: "The dog ran to the pond. The duck swam in the pond."
  },
  "l85-sentences-medium-1": {
    id: "l85-sentences-medium-1",
    title: "Lesson 85 – Medium sentences 1",
    description: "Longer sentences to test your control.",
    text: "Sam and Tim went to the park to ride their red bikes and feed the ducks."
  },
  "l86-sentences-medium-2": {
    id: "l86-sentences-medium-2",
    title: "Lesson 86 – Medium sentences 2",
    description: "Try to keep a constant pace.",
    text: "The wind was cold, yet the sun was bright, so they sat on the bench and read."
  },
  "l87-sentences-medium-3": {
    id: "l87-sentences-medium-3",
    title: "Lesson 87 – Medium sentences 3",
    description: "Watch out for punctuation and spaces.",
    text: "A red kite flew high in the sky as the children ran across the green field."
  },
  "l88-sentences-medium-4": {
    id: "l88-sentences-medium-4",
    title: "Lesson 88 – Medium sentences 4",
    description: "More flowing text for practice.",
    text: "They packed a small bag with snacks and juice, then walked home together."
  },
  "l89-sentences-review-1": {
    id: "l89-sentences-review-1",
    title: "Lesson 89 – Sentences review 1",
    description: "Review sentences from earlier lessons.",
    text: "Sam had a red rug. Tim met Sam. They went to the pond to see ducks."
  },
  "l90-sentences-review-2": {
    id: "l90-sentences-review-2",
    title: "Lesson 90 – Sentences review 2",
    description: "Final sentence review before test lessons.",
    text: "The dog ran fast, the cat hid, and the kids laughed as the kite flew."
  },

  // 91–100: Speed & accuracy tests
  "l91-test-home-row": {
    id: "l91-test-home-row",
    title: "Lesson 91 – Test: Home row",
    description: "Timed style test of home row accuracy. Aim for 100% before moving on.",
    text: "asdf jkl; asdf jkl; sad lad salad; had had; lads add; asdf jkl;"
  },
  "l92-test-top-row": {
    id: "l92-test-top-row",
    title: "Lesson 92 – Test: Top row",
    description: "Test of E R T Y U I O P keys with home row.",
    text: "type your red tyre; pure tree; tiny port; true rope; try to type your name;"
  },
  "l93-test-bottom-row": {
    id: "l93-test-bottom-row",
    title: "Lesson 93 – Test: Bottom row",
    description: "Test of C V B N M X Z with home row.",
    text: "many vans and cabs; max mix; zoom box; cab and man; bad man had a cab;"
  },
  "l94-test-mixed-1": {
    id: "l94-test-mixed-1",
    title: "Lesson 94 – Test: Mixed 1",
    description: "Mixed letters and words from all rows.",
    text: "Sam can type many words today; red vans move fast; tiny boxes and big bags;"
  },
  "l95-test-mixed-2": {
    id: "l95-test-mixed-2",
    title: "Lesson 95 – Test: Mixed 2",
    description: "Another mixed test for speed and accuracy.",
    text: "Tim and Sam rode bikes past the pond, then met Dad by the tall tree."
  },
  "l96-test-mixed-3": {
    id: "l96-test-mixed-3",
    title: "Lesson 96 – Test: Mixed 3",
    description: "Keep your eyes on the text and do not look at the keyboard.",
    text: "The red kite and the blue bag flew up and down as the wind changed."
  },
  "l97-test-sentences-1": {
    id: "l97-test-sentences-1",
    title: "Lesson 97 – Test: Sentences 1",
    description: "Longer sentences for a gentle speed test.",
    text: "Sam and Tim packed a lunch, took their bikes, and rode along the river path together."
  },
  "l98-test-sentences-2": {
    id: "l98-test-sentences-2",
    title: "Lesson 98 – Test: Sentences 2",
    description: "Keep calm and type smoothly, even as the text gets longer.",
    text: "They saw ducks on the water, dogs in the park, and clouds drifting slowly across the bright sky."
  },
  "l99-test-sentences-3": {
    id: "l99-test-sentences-3",
    title: "Lesson 99 – Test: Sentences 3",
    description: "A final warm up before the last test.",
    text: "At the end of the day, they sat at home, read a book, and felt glad about all they had done."
  },
  "l100-test-final": {
    id: "l100-test-final",
    title: "Lesson 100 – Final test",
    description: "Final mixed test. Aim for 100% accuracy and a steady speed.",
    text: "Sam and Tim could now type with care and speed, using every row of the keyboard without looking down."
  }
};

// ----------------------------------------------------------------------
// Run everything after the DOM is fully loaded (Safari-friendly)
document.addEventListener("DOMContentLoaded", function () {
  // -------- DOM elements ------------------------------------------------
  const lessonSelect = document.getElementById("lesson-select");
  const startBtn = document.getElementById("start-btn");
  const lessonTitleEl = document.getElementById("lesson-title");
  const lessonDescEl = document.getElementById("lesson-desc");
  const targetTextEl = document.getElementById("target-text");
  const typingInput = document.getElementById("typing-input");
  const liveFeedbackEl = document.getElementById("live-feedback");
  const statAccuracyEl = document.getElementById("stat-accuracy");
  const statWpmEl = document.getElementById("stat-wpm");
  const statTimeEl = document.getElementById("stat-time");
  const completionMessageEl = document.getElementById("completion-message");

  const learnerNameInput = document.getElementById("learner-name");
  const learnerAgeInput = document.getElementById("learner-age");
  const saveProfileBtn = document.getElementById("save-profile-btn");
  const profileSummaryEl = document.getElementById("profile-summary");

    // Start menu + reset
  const startCourseBtn = document.getElementById("btn-start-course");
  const continueCourseBtn = document.getElementById("btn-continue-course");
  const resetProgressBtn = document.getElementById("reset-progress-btn");

  if (!lessonSelect || !startBtn || !lessonTitleEl || !targetTextEl || !typingInput) {
    console.warn("Typing trainer: required elements not found in DOM.");
    return;
  }

  // -------- State -------------------------------------------------------
  let currentLessonId = lessonOrder[0];
  let targetText = lessons[currentLessonId].text;
  let startTime = null;
  let finished = false;
  let lastAccuracy = 0;
  let lastWpm = 0;

  const PROGRESS_KEY = "touchGoTypingProgressV1";
  const PROFILE_KEY = "touchGoTypingProfileV1";

  let progress = {
    unlockedLessonIds: [lessonOrder[0]]
  };

  let profile = {
    name: "",
    age: null
  };

  const storageAvailable =
    typeof window !== "undefined" &&
    typeof window.localStorage !== "undefined";

  // -------- Local storage helpers --------------------------------------
  function loadProgress() {
    if (!storageAvailable) return;
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (
        parsed &&
        Array.isArray(parsed.unlockedLessonIds) &&
        parsed.unlockedLessonIds.length
      ) {
        progress.unlockedLessonIds = parsed.unlockedLessonIds.filter((id) =>
          lessonOrder.includes(id)
        );
        if (!progress.unlockedLessonIds.length) {
          progress.unlockedLessonIds = [lessonOrder[0]];
        }
      }
    } catch (e) {
      console.warn("Could not load progress:", e);
    }
  }

  function saveProgress() {
    if (!storageAvailable) return;
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn("Could not save progress:", e);
    }
  }

  function loadProfile() {
    if (!storageAvailable) return;
    try {
      const raw = localStorage.getItem(PROFILE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        profile.name = parsed.name || "";
        profile.age =
          typeof parsed.age === "number" && !isNaN(parsed.age)
            ? parsed.age
            : null;
      }
    } catch (e) {
      console.warn("Could not load profile:", e);
    }
  }

  function saveProfile() {
    if (!storageAvailable) return;
    try {
      const toSave = {
        name: profile.name || "",
        age: typeof profile.age === "number" ? profile.age : null
      };
      localStorage.setItem(PROFILE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.warn("Could not save profile:", e);
    }
  }

  // -------- UI helpers --------------------------------------------------
  function renderProfileSummary() {
    if (profile.name && profile.age) {
      profileSummaryEl.textContent = `Current learner: ${profile.name} (age ${profile.age})`;
    } else if (profile.name) {
      profileSummaryEl.textContent = `Current learner: ${profile.name}`;
    } else {
      profileSummaryEl.textContent = "No learner saved yet.";
    }
    learnerNameInput.value = profile.name || "";
    learnerAgeInput.value = profile.age != null ? profile.age : "";
  }

  function renderLessonOptions() {
    lessonSelect.innerHTML = "";
    lessonOrder.forEach((lessonId, index) => {
      const lesson = lessons[lessonId];
      if (!lesson) return;
      const option = document.createElement("option");
      const unlocked = progress.unlockedLessonIds.includes(lessonId);
      option.value = lessonId;
      option.textContent = `${index + 1}. ${lesson.title}${unlocked ? "" : " (locked)"}`;
      option.disabled = !unlocked;
      lessonSelect.appendChild(option);
    });

    if (!progress.unlockedLessonIds.includes(currentLessonId)) {
      currentLessonId = progress.unlockedLessonIds[0];
    }
    lessonSelect.value = currentLessonId;
  }

  function loadLesson(id) {
    const lesson = lessons[id];
    if (!lesson) return;

    currentLessonId = id;
    targetText = lesson.text;
    lessonTitleEl.textContent = lesson.title;
    lessonDescEl.textContent = lesson.description || "";
    targetTextEl.textContent = targetText;

    resetSession();
  }

  function resetSession() {
    typingInput.value = "";
    typingInput.disabled = true;
    liveFeedbackEl.innerHTML = "";
    statAccuracyEl.textContent = "0%";
    statWpmEl.textContent = "0";
    statTimeEl.textContent = "0s";
    completionMessageEl.textContent = "";
    startTime = null;
    finished = false;
    lastAccuracy = 0;
    lastWpm = 0;
  }

  function startLesson() {
    resetSession();
    typingInput.disabled = false;
    typingInput.focus();
    typingInput.maxLength = targetText.length;
    liveFeedbackEl.innerHTML = renderFeedback("", targetText);
  }

  function updateStatsAndFeedback() {
    const typed = typingInput.value;
    const now = new Date();

    if (!startTime && typed.length > 0) {
      startTime = now;
    }

    if (!typed.length) {
      liveFeedbackEl.innerHTML = renderFeedback("", targetText);
      statAccuracyEl.textContent = "0%";
      statWpmEl.textContent = "0";
      statTimeEl.textContent = "0s";
      return;
    }

    liveFeedbackEl.innerHTML = renderFeedback(typed, targetText);

    const stats = calculateStats(typed, targetText, startTime, now);
    lastAccuracy = stats.accuracy;
    lastWpm = stats.wpm;

    statAccuracyEl.textContent = `${stats.accuracy.toFixed(1)}%`;
    statWpmEl.textContent = isFinite(stats.wpm) ? stats.wpm.toFixed(1) : "0";
    statTimeEl.textContent = `${Math.round(stats.timeSeconds)}s`;

    if (typed.length === targetText.length && !finished) {
      finished = true;
      typingInput.disabled = true;
      handleLessonCompletion();
    }
  }

  function renderFeedback(typed, target) {
    let html = "";

    for (let i = 0; i < target.length; i++) {
      const expectedChar = target[i];
      const typedChar = typed[i];

      if (typedChar == null) {
        html += `<span class="char-pending">${escapeHtml(expectedChar)}</span>`;
      } else if (typedChar === expectedChar) {
        html += `<span class="char-correct">${escapeHtml(expectedChar)}</span>`;
      } else {
        html += `<span class="char-incorrect">${escapeHtml(expectedChar)}</span>`;
      }
    }

    return html;
  }

  function calculateStats(typed, target, start, now) {
    const totalTyped = typed.length;
    let correctCount = 0;

    for (let i = 0; i < totalTyped; i++) {
      if (typed[i] === target[i]) {
        correctCount++;
      }
    }

    const accuracy = totalTyped ? (correctCount / totalTyped) * 100 : 0;

    let timeSeconds = 0;
    let wpm = 0;

    if (start) {
      timeSeconds = (now - start) / 1000;
      const timeMinutes = timeSeconds / 60;
      if (timeMinutes > 0) {
        wpm = (totalTyped / 5) / timeMinutes;
      }
    }

    return { accuracy, wpm, timeSeconds };
  }

  function escapeHtml(char) {
    if (char === "<") return "&lt;";
    if (char === ">") return "&gt;";
    if (char === "&") return "&amp;";
    return char;
  }

  // -------- Completion & progression ------------------------------------
  function handleLessonCompletion() {
    const lesson = lessons[currentLessonId];
    const lessonIndex = lessonOrder.indexOf(currentLessonId);
    const nextLessonId = lessonOrder[lessonIndex + 1] || null;

    const message = buildPersonalisedFeedback(
      profile.name,
      profile.age,
      lastAccuracy,
      lastWpm,
      lesson.title
    );

    completionMessageEl.textContent = message;

    if (lastAccuracy >= 99.9 && nextLessonId) {
      if (!progress.unlockedLessonIds.includes(nextLessonId)) {
        progress.unlockedLessonIds.push(nextLessonId);
        saveProgress();
        renderLessonOptions();
      }
    }
  }

  function buildPersonalisedFeedback(
    name,
    age,
    accuracy,
    wpm,
    lessonTitle
  ) {
    const roundedAcc = accuracy.toFixed(1);
    const roundedWpm = isFinite(wpm) ? wpm.toFixed(1) : "0";

    const ageNum = typeof age === "number" ? age : null;
    let tone = "neutral";

    if (ageNum != null) {
      if (ageNum <= 12) tone = "child";
      else if (ageNum <= 17) tone = "teen";
      else tone = "adult";
    }

    const who = name ? name : "You";

    if (accuracy >= 99.9) {
      if (tone === "child") {
        return `${who}, that was amazing! You finished “${lessonTitle}” with 100% accuracy and ${roundedWpm} WPM. You can move on to the next lesson now.`;
      } else if (tone === "teen") {
        return `Nice work, ${who}. 100% accuracy on “${lessonTitle}” and ${roundedWpm} WPM. You’re ready for the next challenge.`;
      } else if (tone === "adult") {
        return `Excellent, ${who}. 100% accuracy on “${lessonTitle}” with ${roundedWpm} WPM. Your touch-typing foundations are solid – the next lesson is unlocked.`;
      } else {
        return `Perfect! 100% accuracy on “${lessonTitle}” with ${roundedWpm} WPM. The next lesson is now unlocked.`;
      }
    } else {
      if (tone === "child") {
        return `${who}, you got ${roundedAcc}% accuracy on “${lessonTitle}” and ${roundedWpm} WPM. That’s good, but try the lesson again to reach 100% and unlock the next one.`;
      } else if (tone === "teen") {
        return `${who}, you scored ${roundedAcc}% on “${lessonTitle}” with ${roundedWpm} WPM. One more try to hit 100% will unlock the next lesson.`;
      } else if (tone === "adult") {
        return `${who}, you achieved ${roundedAcc}% accuracy on “${lessonTitle}” and ${roundedWpm} WPM. Repeat the lesson until you hit 100% to unlock further progress.`;
      } else {
        return `You reached ${roundedAcc}% accuracy on “${lessonTitle}” with ${roundedWpm} WPM. Repeat this lesson until you reach 100% to unlock the next one.`;
      }
    }
  }

  // -------- Event listeners --------------------------------------------
  lessonSelect.addEventListener("change", function () {
    const selectedId = lessonSelect.value;
    if (!progress.unlockedLessonIds.includes(selectedId)) {
      renderLessonOptions();
      return;
    }
    loadLesson(selectedId);
  });

  startBtn.addEventListener("click", function () {
    startLesson();
  });

  typingInput.addEventListener("input", function () {
    if (finished) return;
    updateStatsAndFeedback();
  });

  saveProfileBtn.addEventListener("click", function () {
    const name = learnerNameInput.value.trim();
    const ageStr = learnerAgeInput.value.trim();
    let ageNum = null;

    if (ageStr) {
      const parsed = parseInt(ageStr, 10);
      if (!isNaN(parsed) && parsed >= 5 && parsed <= 120) {
        ageNum = parsed;
      }
    }

    profile.name = name || "";
    profile.age = ageNum;

    saveProfile();
    renderProfileSummary();
  });
  // Start menu buttons
  if (startCourseBtn) {
    startCourseBtn.addEventListener("click", function () {
      // Go to Lesson 1 and start it
      currentLessonId = lessonOrder[0];

      // Ensure at least Lesson 1 is unlocked
      if (!progress.unlockedLessonIds.includes(currentLessonId)) {
        progress.unlockedLessonIds = [currentLessonId];
        saveProgress();
      }

      renderLessonOptions();
      loadLesson(currentLessonId);
      startLesson();
    });
  }

  if (continueCourseBtn) {
    continueCourseBtn.addEventListener("click", function () {
      // Pick the last unlocked lesson and start it
      const lastUnlocked =
        progress.unlockedLessonIds[progress.unlockedLessonIds.length - 1] ||
        lessonOrder[0];

      currentLessonId = lastUnlocked;
      renderLessonOptions();
      loadLesson(currentLessonId);
      startLesson();
    });
  }

  if (resetProgressBtn) {
    resetProgressBtn.addEventListener("click", function () {
      const ok = window.confirm(
        "Reset all progress and start again from Lesson 1?"
      );
      if (!ok) return;

      progress = { unlockedLessonIds: [lessonOrder[0]] };
      saveProgress();
      currentLessonId = lessonOrder[0];
      renderLessonOptions();
      loadLesson(currentLessonId);
      completionMessageEl.textContent =
        "Progress reset. Start again from Lesson 1 when you’re ready.";
    });
  }
  // -------- Initial setup ----------------------------------------------
  loadProgress();
  loadProfile();
  renderProfileSummary();
  renderLessonOptions();
  loadLesson(currentLessonId);
  liveFeedbackEl.innerHTML = renderFeedback("", targetText);
});
