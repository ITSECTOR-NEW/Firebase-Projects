import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc  // Import getDoc here
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJ_f4QjZm3-dHzxMKyo04bAVhEfgjRbi0",
  authDomain: "assessment-system-c791c.firebaseapp.com",
  projectId: "assessment-system-c791c",
  storageBucket: "assessment-system-c791c.appspot.com",
  messagingSenderId: "569932964548",
  appId: "1:569932964548:web:a07c7d29d0a608311b1f91",
  measurementId: "G-VPQ7HWHLNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const TIME_LIMIT = 30 * 60; // 30 minutes in seconds

  let currentSubject = null;
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let quizWindowFocus = true;
  let tabSwitchAlertPending = false;

  const questionTitle = document.getElementById("question-title");
  const questionContainer = document.getElementById("question-container");
  const scoreDisplay = document.getElementById("score");
  const percentageDisplay = document.getElementById("percentage");
  const resultContainer = document.getElementById("result-container");
  const nextButton = document.getElementById("next-btn");
  const previousButton = document.getElementById("pre-btn");
  const homeButton = document.getElementById("home-btn");
  const timerDisplay = document.getElementById("timer");
  const quizTitleElement = document.getElementById('quiz-title');

  async function fetchQuestions(assessmentKey) {
    try {
      console.log(`Fetching questions for subject: ${assessmentKey}`);
      const docRef = doc(db, "assessment", assessmentKey);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(`Document found: ${assessmentKey}`);
        return docSnap.data();
      } else {
        console.error("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Failed to fetch questions:", error);
      return null;
    }
  }

  async function startQuiz(assessmentKey) {
    console.log(`Starting quiz for subject: ${assessmentKey}`);
    currentSubject = await fetchQuestions(assessmentKey);
    if (!currentSubject) {
      console.error("Failed to load subject data.");
      alert("Failed to load quiz data. Please try again.");
      return;
    }
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = TIME_LIMIT;
    displayQuiz();
    startTimer();
    preventCheating();
  }

  function displayQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    const assessmentGrid = document.querySelector(".assessment-grid");
    if (quizContainer) quizContainer.style.display = "block";
    if (questionContainer) questionContainer.style.display = "block";
    if (assessmentGrid) assessmentGrid.style.display = "none";
    if (nextButton) nextButton.style.display = "block";
    if (previousButton) previousButton.style.display = "block";
    if (resultContainer) resultContainer.style.display = "none";
    if (homeButton) homeButton.style.display = "none";

    loadQuestion();
  }

  function loadQuestion() {
    const question = currentSubject.questions[currentQuestionIndex];
    if (questionContainer) {
      questionTitle.innerHTML = `<p>${currentQuestionIndex + 1}. ${question.question}</p>`;
      questionContainer.innerHTML = `
        <ul>
          ${question.answers
            .map(
              (answer, index) => `
              <li>
                <label>
                  <input type="radio" name="answer" value="${index}">
                  ${answer}
                </label>
              </li>
              `
            )
            .join("")}
        </ul>
      `;
    }
  }

  function nextQuestion() {
    const selectedAnswer = document.querySelector(
      'input[name="answer"]:checked'
    );
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    const answerIndex = parseInt(selectedAnswer.value, 10);

    if (
      answerIndex ===
      currentSubject.questions[currentQuestionIndex].correctAnswer
    ) {
      score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < currentSubject.questions.length) {
      loadQuestion();
    } else {
      displayResult();
    }
  }

  function previousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion();
    } else {
      alert("You are at the first question.");
    }
  }

  async function displayResult() {
    if (questionContainer) questionContainer.style.display = "none";
    if (nextButton) nextButton.style.display = "none";
    if (previousButton) previousButton.style.display = "none";
    if (resultContainer) resultContainer.style.display = "block";
    if (homeButton) homeButton.style.display = "block";

    stopTimer();

    const percentage = Math.round(
      (score / currentSubject.questions.length) * 100
    );
    if (scoreDisplay) scoreDisplay.textContent = score;
    if (percentageDisplay) percentageDisplay.textContent = `${percentage}`;

    try {
      const user = auth.currentUser;
      if (user) {
        const email = user.email;
        const userDocRef = doc(db, "user_assessment_results", email);

        // Get existing results
        const userDocSnap = await getDoc(userDocRef);
        let results = [];
        if (userDocSnap.exists()) {
          results = userDocSnap.data().results || [];
        }

        // Check if the quiz has been attempted before
        const existingResultIndex = results.findIndex(result => result.quizCode === currentSubject.title);
        if (existingResultIndex !== -1) {
          // Update the existing result
          results[existingResultIndex] = {
            ...results[existingResultIndex],
            score: score,
            percentage: percentage,
            timestamp: new Date()
          };
        } else {
          // Add new result
          results.push({
            quizCode: currentSubject.title,
            score: score,
            percentage: percentage,
            timestamp: new Date()
          });
        }

        // Save updated results
        await setDoc(userDocRef, { results: results });
        console.log("Quiz results saved successfully.");
      } else {
        console.error("No authenticated user found.");
      }
    } catch (error) {
      console.error("Failed to save quiz results:", error);
    }
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        stopTimer();
        alert("Time's up! Quiz session ended.");
        displayResult();
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function updateTimerDisplay() {
    if (timerDisplay) {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
  }

  function preventCheating() {
    // Prevent right-click
    // document.addEventListener('contextmenu', event => event.preventDefault());

    // Prevent text selection
    document.addEventListener('selectstart', event => event.preventDefault());

    // Prevent copying
    document.addEventListener('copy', event => event.preventDefault());

    // Prevent cutting
    document.addEventListener('cut', event => event.preventDefault());

    // Prevent pasting
    document.addEventListener('paste', event => event.preventDefault());

    // Detect tab switching
    window.addEventListener('blur', () => {
      tabSwitchAlertPending = true;
      setTimeout(() => {
        if (tabSwitchAlertPending) {
        //   alert("You have switched tabs or windows, which is not allowed during the test.");
        //   window.location.href = "/";
        }
      }, 100); // Delay to allow "select an answer" alert to be handled first
    });

    window.addEventListener('focus', () => {
      quizWindowFocus = true;
      tabSwitchAlertPending = false;
    });
  }

  nextButton.addEventListener("click", nextQuestion);
  previousButton.addEventListener("click", previousQuestion);
  homeButton.addEventListener("click", () => location.href = "/");

  // Assuming you have a way to get the assessmentKey from URL or some other method
  const urlParams = new URLSearchParams(window.location.search);
  const assessmentKey = urlParams.get("quizcode");

  // Set the quiz title from the URL parameter or another source
  if (quizTitleElement) {
    quizTitleElement.textContent = assessmentKey;
  }
  
  startQuiz(assessmentKey);
});
