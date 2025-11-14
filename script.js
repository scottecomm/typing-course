// --- Lesson data -------------------------------------------------------
const lessons = {
  "home-row": {
    title: "Home Row – asdf jkl;",
    text: "asdf jkl; asdf jkl; asdf jkl; asdf jkl;"
  },
  "home-row-words": {
    title: "Home Row – simple words",
    text: "sad lad fall ask flask salad; as as as; lad lad lad;"
  }
  // You can add more lessons here later
};

// --- DOM elements ------------------------------------------------------
const lessonSelect = document.getElementById("lesson-select");
const startBtn = document.getElementById("start-btn");
const lessonTitleEl = document.getElementById("lesson-title");
const targetTextEl = document.getElementById("target-text");
const typingInput = document.getElementById("typing-input");
const liveFeedbackEl = document.getElementById("live-feedback");
const statAccuracyEl = document.getElementById("stat-accuracy");
const statWpmEl = document.getElementById("stat-wpm");
const statTimeEl = document.getElementById("stat-time");
const completionMessageEl = document.getElementById("completion-message");

// --- State -------------------------------------------------------------
let currentLessonId = "home-row";
let targetText = lessons[currentLessonId].text;
let startTime = null;
let finished = false;

// --- Helper functions --------------------------------------------------
function loadLesson(id) {
  const lesson = lessons[id];
  if (!lesson) return;

  currentLessonId = id;
  targetText = lesson.text;
  lessonTitleEl.textContent = lesson.title;

  // Render the target text as plain text; feedback will be coloured separately
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
}

function startLesson() {
  resetSession();
  typingInput.disabled = false;
  typingInput.focus();
  // Set max length so user cannot type beyond target text length
  typingInput.maxLength = targetText.length;
}

function updateStatsAndFeedback() {
  const typed = typingInput.value;
  const now = new Date();

  if (!startTime && typed.length > 0) {
    startTime = now;
  }

  // If nothing typed yet, reset feedback basics
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
  const { accuracy, wpm, timeSeconds } = calculateStats(typed, targetText, startTime, now);
  statAccuracyEl.textContent = `${accuracy.toFixed(1)}%`;
  statWpmEl.textContent = isFinite(wpm) ? wpm.toFixed(1) : "0";
  statTimeEl.textContent = `${Math.round(timeSeconds)}s`;

  // Check completion
  if (typed.length === targetText.length && !finished) {
    finished = true;
    typingInput.disabled = true;
    completionMessageEl.textContent = "Lesson complete! Press Start lesson to try again or switch lessons.";
  }
}

function renderFeedback(typed, target) {
  let html = "";

  for (let i = 0; i < target.length; i++) {
    const expectedChar = target[i];
    const typedChar = typed[i];

    if (typedChar == null) {
      // Not reached yet
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
      // Standard WPM: 5 characters = 1 word
      wpm = (totalTyped / 5) / timeMinutes;
    }
  }

  return { accuracy, wpm, timeSeconds };
}

// Basic HTML escaping to avoid issues if you add < or > to lessons
function escapeHtml(char) {
  if (char === "<") return "&lt;";
  if (char === ">") return "&gt;";
  if (char === "&") return "&amp;";
  return char;
}

// --- Event listeners ---------------------------------------------------
lessonSelect.addEventListener("change", () => {
  const id = lessonSelect.value;
  loadLesson(id);
});

startBtn.addEventListener("click", () => {
  startLesson();
});

typingInput.addEventListener("input", () => {
  if (finished) return;
  updateStatsAndFeedback();
});

// --- Initial setup -----------------------------------------------------
loadLesson(currentLessonId);
liveFeedbackEl.innerHTML = renderFeedback("", targetText);
