const countriesImages = [
  "imgs/img1.avif",
  "imgs/img2.avif",
  "imgs/img3.avif",
  "imgs/img4.avif",
];

const countriesAnswers = ["egypte", "costa rica", "equateur", "usa"];

const countriesHints = [
  "Cléopatre",
  "Café et ananas",
  "Darwin",
  "I have a dream",
];

const pointsPerImage = 10;
const maxTries = 5;

let currentCountryIndex = 0;
let numberOfTries = 0;
let score = 0;
let hintAsked = false;

const mainImage = document.getElementById("quiz-image");
const userAnswer = document.getElementById("player-guess");
const finalScoreArray = document.querySelectorAll(".final-score");
const validateButton = document.getElementById("validate");
const restartButton = document.getElementById("restart");
const getHintButton = document.getElementById("get-hint");
const gameSection = document.getElementById("game");
const screenFinishSection = document.getElementById("screen-finish");
const maxScores = document.querySelectorAll(".max-score");
const maxCountries = document.getElementById("max-countries");
const currentCountryNumber = document.getElementById("current-country-number");
const hintParagraph = document.getElementById("hint");
const currentNumbersOfTries = document.getElementById("tries-remaining");
const maxNumbersOfTries = document.getElementById("max-number-of-tries");
const mistakeParagraph = document.getElementById("mistake");

function updateNumberOfTries() {
  currentNumbersOfTries.innerText = numberOfTries;
  maxNumbersOfTries.innerText = maxTries;
}

function setMaxScores() {
  maxScores.forEach(
    (scoreToChange) => (scoreToChange.innerText = countriesAnswers.length * 10)
  );
  maxCountries.innerText = countriesAnswers.length;
  updateNumberOfTries();
}

function checkAnswer() {
  numberOfTries += 1;
  const correctAnswer = countriesAnswers[currentCountryIndex].toLowerCase();
  if (userAnswer.value.toLowerCase() === correctAnswer) {
    changeScore();
    currentCountryNumber.innerText = currentCountryIndex + 1;
    finalScoreArray.forEach(
      (scoreToChange) => (scoreToChange.innerText = score)
    );
    nextCountry();
  } else if (numberOfTries == maxTries) {
    alert("Plus d'essai restant !");
    nextCountry();
  } else {
    updateNumberOfTries();
    mistakeParagraph.innerText = "Raté !";
  }
}

function changeScore() {
  if (hintAsked) {
    score += pointsPerImage / 2;
  } else {
    score += pointsPerImage;
  }
}

function activateAnswerButton() {
  if (userAnswer.value.length > 0) {
    validateButton.disabled = false;
  } else {
    validateButton.disabled = true;
  }
}

function nextCountry() {
  currentCountryIndex++;
  numberOfTries = 0;
  updateNumberOfTries();
  getHintButton.classList.remove("hidden");
  hintAsked = false;
  hintParagraph.innerText = "";
  mistakeParagraph.innerText = "";
  if (currentCountryIndex < countriesImages.length) {
    mainImage.src = countriesImages[currentCountryIndex];
    userAnswer.value = "";
    activateAnswerButton();
  } else {
    switchGameAndScoreVisibility();
  }
}

function switchGameAndScoreVisibility() {
  gameSection.classList.toggle("hidden");
  screenFinishSection.classList.toggle("hidden");
}

function showHint() {
  hintAsked = true;
  getHintButton.classList.toggle("hidden");
  hintParagraph.innerText = "Indice : " + countriesHints[currentCountryIndex];
}

function resetQuiz() {
  currentCountryIndex = 0;
  score = 0;
  mainImage.src = countriesImages[currentCountryIndex];
  userAnswer.value = "";
  activateAnswerButton();
  currentCountryNumber.innerText = 0;
  finalScoreArray.forEach((scoreToChange) => (scoreToChange.innerText = score));
  switchGameAndScoreVisibility();
}

document.addEventListener("DOMContentLoaded", function () {
  setMaxScores();
  validateButton.addEventListener("click", function (event) {
    event.preventDefault();
    checkAnswer();
  });
  getHintButton.addEventListener("click", showHint);
  restartButton.addEventListener("click", resetQuiz);
  userAnswer.addEventListener("input", activateAnswerButton);
});
