// -------- Lesson definitions --------------------------------------------
// Simple, linear lesson path: single keys -> words -> more keys -> sentences
const lessonOrder = [
  "home-j",
  "home-f",
  "home-k",
  "home-d",
  "home-l",
  "home-s",
  "home-a",
  "home-semicolon",
  "home-words-1",
  "home-words-2",
  "gh-keys",
  "gh-words",
  "top-row-keys",
  "top-row-words",
  "bottom-row-keys",
  "bottom-row-words",
  "sentences-1"
];

const lessons = {
  "home-j": {
    id: "home-j",
    title: "Home Row – J key",
    description: "Right index finger on the J key. Keep your fingers on the home row.",
    text: "j j j j j j j j j j j j j j j j"
  },
  "home-f": {
    id: "home-f",
    title: "Home Row – F key",
    description: "Left index finger on the F key. Feel the little bump on the F key.",
    text: "f f f f f f f f f f f f f f f f"
  },
  "home-k": {
    id: "home-k",
    title: "Home Row – K key",
    description: "Right middle finger on the K key.",
    text: "k k k k k k k k k k k k k k k k"
  },
  "home-d": {
    id: "home-d",
    title: "Home Row – D key",
    description: "Left middle finger on the D key.",
    text: "d d d d d d d d d d d d d d d d"
  },
  "home-l": {
    id: "home-l",
    title: "Home Row – L key",
    description: "Right ring finger on the L key.",
    text: "l l l l l l l l l l l l l l l l"
  },
  "home-s": {
    id: "home-s",
    title: "Home Row – S key",
    description: "Left ring finger on the S key.",
    text: "s s s s s s s s s s s s s s s s"
  },
  "home-a": {
    id: "home-a",
    title: "Home Row – A key",
    description: "Left little finger on the A key.",
    text: "a a a a a a a a a a a a a a a a"
  },
  "home-semicolon": {
    id: "home-semicolon",
    title: "Home Row – ; key",
    description: "Right little finger on the ; key.",
    text: "; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;"
  },
  "home-words-1": {
    id: "home-words-1",
    title: "Home Row – simple words 1",
    description: "Short words using only the home row letters.",
    text: "sad lad ask fall flask dad asks all; sad lad; ask dad; fall; flask;"
  },
  "home-words-2": {
    id: "home-words-2",
    title: "Home Row – simple words 2",
    description: "More practice with home row words.",
    text: "salsa salad; alas falls; dad adds; all as; lads add;"
  },
  "gh-keys": {
    id: "gh-keys",
    title: "G and H keys",
    description: "Reach up from the home row to press G and H.",
    text: "g g g g g g g g h h h h h h h h g g g g h h h h"
  },
  "gh-words": {
    id: "gh-words",
    title: "Words with G and H",
    description: "Combine home row letters with G and H.",
    text: "had hag had had; glad shag; dash gag; had had; gash lag;"
  },
  "top-row-keys": {
    id: "top-row-keys",
    title: "Top Row – R U E I",
    description: "Practice reaching to the top row keys with your fingers.",
    text: "r r r r u u u u e e e e i i i i r e r e u i u i"
  },
  "top-row-words": {
    id: "top-row-words",
    title: "Top Row – simple words",
    description: "Simple words using top row and home row letters.",
    text: "red rug rude read rider; sure side seed hire herd; rare user eel fire;"
  },
  "bottom-row-keys": {
    id: "bottom-row-keys",
    title: "Bottom Row – V and M",
    description: "Practice reaching down to the bottom row keys V and M.",
    text: "v v v v v m m m m m v m v m v m"
  },
  "bottom-row-words": {
    id: "bottom-row-words",
    title: "Bottom Row – simple words",
    description: "Words using bottom row letters with home row and top row.",
    text: "mad made move movie; save same rave; dive live wave;"
  },
  "sentences-1": {
    id: "sentences-1",
    title: "Sentences with punctuation",
    description: "Full sentences using the letters you have practised, with basic punctuation.",
    text: "Sam had a red rug. Dad saved a sad lad. Eve made a movie and Dave had a salad."
  }
};

// -------- DOM elements --------------------------------------------------
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

// Profile
const learnerNameInput = document.getElementById("learner-name");
const learnerAgeInput = document.getElementById("learner-age");
const saveProfileBtn = document.getElementById("save-profile-btn");
const profileSummaryEl = document.getElementById("profile-summary");

// -------- State ---------------------------------------------------------
let currentLessonId = lessonOrder[0];
let targetText = lessons[currentLessonId].text;
let startTime = null;
let finished = false;
let lastAccuracy = 0;
let lastWpm = 0;

// Progress + profile stored in localStorage
const PROGRESS_KEY = "touchGoTypingProgressV1";
const PROFILE_KEY = "touchGoTypingProfileV1";

let progress = {
  unlockedLessonIds: [lessonOrder[0]] // start with first lesson unlocked
};

let profile = {
  name: "",
  age: null
};

// -------- Local storage helpers ----------------------------------------
function loadProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.unlockedLessonIds) && parsed.unlockedLessonIds.length) {
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
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn("Could not save progress:", e);
  }
}

function loadProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      profile.name = parsed.name || "";
      profile.age = typeof parsed.age === "number" ? parsed.age : null;
    }
  } catch (e) {
    console.warn("Could not load profile:", e);
  }
}

function saveProfile() {
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

// -------- UI helpers ----------------------------------------------------
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

  // Ensure current selection is valid
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
  // Show initial feedback with pending characters
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

  // Render coloured feedback
  liveFeedbackEl.innerHTML = renderFeedback(typed, targetText);

  // Calculate stats
  const stats = calculateStats(typed, targetText, startTime, now);
  lastAccuracy = stats.accuracy;
  lastWpm = stats.wpm;

  statAccuracyEl.textContent = `${stats.accuracy.toFixed(1)}%`;
  statWpmEl.textContent = isFinite(stats.wpm) ? stats.wpm.toFixed(1) : "0";
  statTimeEl.textContent = `${Math.round(stats.timeSeconds)}s`;

  // Completion check
  if (typed.length === targetText.length && !finished) {
    finished = true;
    typingInput.disabled = true;
    handleLessonCompletion();
  }
}

// Render expected text with colours based on what was typed
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
      wpm = (totalTyped / 5) / timeMinutes; // standard WPM
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

// -------- Completion & progression --------------------------------------
function handleLessonCompletion() {
  const lesson = lessons[currentLessonId];
  const lessonIndex = lessonOrder.indexOf(currentLessonId);
  const nextLessonId = lessonOrder[lessonIndex + 1] || null;

  const message = buildPersonalisedFeedback(
    profile.name,
    profile.age,
    lastAccuracy,
    lastWpm,
    lesson.title,
    !!nextLessonId
  );

  completionMessageEl.textContent = message;

  // Unlock next lesson only if 100% accuracy
  if (lastAccuracy >= 99.9 && nextLessonId) {
    if (!progress.unlockedLessonIds.includes(nextLessonId)) {
      progress.unlockedLessonIds.push(nextLessonId);
      saveProgress();
      renderLessonOptions();
    }
  }
}

function buildPersonalisedFeedback(name, age, accuracy, wpm, lessonTitle, hasNext) {
  const roundedAcc = accuracy.toFixed(1);
  const roundedWpm = isFinite(wpm) ? wpm.toFixed(1) : "0";

  // Age groups
  const ageNum = typeof age === "number" ? age : null;
  let tone = "neutral";

  if (ageNum != null) {
    if (ageNum <= 12) tone = "child";
    else if (ageNum <= 17) tone = "teen";
    else tone = "adult";
  }

  const who = name ? name : "You";

  if (accuracy >= 99.9) {
    // Perfect run
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
    // Not perfect – encourage them to repeat
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

// -------- Event listeners ----------------------------------------------
lessonSelect.addEventListener("change", () => {
  const selectedId = lessonSelect.value;
  // Prevent selecting locked lessons manually
  if (!progress.unlockedLessonIds.includes(selectedId)) {
    renderLessonOptions(); // reset selection
    return;
  }
  loadLesson(selectedId);
});

startBtn.addEventListener("click", () => {
  startLesson();
});

typingInput.addEventListener("input", () => {
  if (finished) return;
  updateStatsAndFeedback();
});

saveProfileBtn.addEventListener("click", () => {
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

// -------- Initial setup -------------------------------------------------
loadProgress();
loadProfile();
renderProfileSummary();
renderLessonOptions();
loadLesson(currentLessonId);
liveFeedbackEl.innerHTML = renderFeedback("", targetText);
