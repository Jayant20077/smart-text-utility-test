const textInput = document.getElementById("textInput");

const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");
const readTime = document.getElementById("readTime");

// LIVE STATS
textInput.addEventListener("input", updateStats);

function updateStats() {
  const text = textInput.value;

  charCount.textContent = text.length;

  const words = text.trim().split(/\s+/).filter(Boolean);
  wordCount.textContent = words.length;

  const sentences = text.split(/[.!?]/).filter(s => s.trim().length > 0);
  sentenceCount.textContent = sentences.length;

  readTime.textContent = Math.max(1, Math.ceil(words.length / 200));
}

// TOOLS
function toUpperCaseText() {
  textInput.value = textInput.value.toUpperCase();
  updateStats();
}

function toLowerCaseText() {
  textInput.value = textInput.value.toLowerCase();
  updateStats();
}

function removeExtraSpaces() {
  textInput.value = textInput.value.replace(/\s+/g, " ").trim();
  updateStats();
}

function copyText() {
  if (!textInput.value.trim()) {
    alert("Nothing to copy!");
    return;
  }
  navigator.clipboard.writeText(textInput.value);
  alert("Text copied to clipboard!");
}

function clearText() {
  textInput.value = "";
  updateStats();
}
