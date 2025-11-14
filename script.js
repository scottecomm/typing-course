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
  // (same 100 lesson definitions as before – unchanged)
  // --- I’ll leave them exactly as in the previous version you pasted ---
  // [SNIPPED HERE FOR BREVITY IN EXPLANATION – keep the full block you already have]
  // ❗ In your actual file, keep the complete lessons object from the earlier script,
  // including l01-home-f through l100-test-final.
};

/* --------------------------------------------------------------------- */
/*  Everything below here is the logic: DOM, state, progress, buttons.   */
/* --------------------------------------------------------------------- */

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

  // Profile
  const learnerNameInput = document.getElementById("learner-name");
  const learnerAgeInput = document.getElementById("learner-age");
  const saveProfileBtn = document.getElementById("save-profile-btn");
  const profileSummaryEl = document.getElementById("profile-summary");

  // Start menu + keyboard guide
  const startCourseBtn = document.getElementById("btn-start-course");
  const continueCourseBtn = document.getElementById("btn-continue-course");
  const toggleKeyboardBtn = document.getElementById("btn-toggle-keyboard");
  const resetProgressBtn = document.getElementById("btn-reset-progress");
  const keyboardPanel = document.getElementById("keyboard-panel");

  if (
    !lessonSelect ||
    !startBtn ||
    !lessonTitleEl ||
    !targetTextEl ||
    !typingInput
  ) {
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
      option.textContent = `${index + 1}. ${lesson.title}${
        unlocked ? "" : " (locked)"
      }`;
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
      lesson.title,
      !!nextLessonId
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
      // Reset to very first lesson (but keep unlocked list intact if they’ve already done some)
      currentLessonId = lessonOrder[0];
      if (!progress.unlockedLessonIds.includes(currentLessonId)) {
        progress.unlockedLessonIds = [currentLessonId];
        saveProgress();
        renderLessonOptions();
      } else {
        renderLessonOptions();
      }
      loadLesson(currentLessonId);
      startLesson();
    });
  }

  if (continueCourseBtn) {
    continueCourseBtn.addEventListener("click", function () {
      const lastUnlocked =
        progress.unlockedLessonIds[progress.unlockedLessonIds.length - 1] ||
        lessonOrder[0];
      currentLessonId = lastUnlocked;
      loadLesson(currentLessonId);
      startLesson();
    });
  }

  if (toggleKeyboardBtn && keyboardPanel) {
    toggleKeyboardBtn.addEventListener("click", function () {
      if (
        keyboardPanel.style.display === "none" ||
        keyboardPanel.style.display === ""
      ) {
        keyboardPanel.style.display = "block";
      } else {
        keyboardPanel.style.display = "none";
      }
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
        "Progress reset. Start from Lesson 1 when you're ready.";
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
