import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJ_f4QjZm3-dHzxMKyo04bAVhEfgjRbi0",
  authDomain: "assessment-system-c791c.firebaseapp.com",
  projectId: "assessment-system-c791c",
  storageBucket: "assessment-system-c791c.appspot.com",
  messagingSenderId: "569932964548",
  appId: "1:569932964548:web:a07c7d29d0a608311b1f91",
  measurementId: "G-VPQ7HWHLNE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const mainContent = document.getElementById("main-content");
  const loginSection = document.getElementById("login-section");
  const signupSection = document.getElementById("signup-section");
  const showSignupLink = document.getElementById("show-signup");
  const showLoginLink = document.getElementById("show-login");

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        username,
        password
      );
      const user = userCredential.user;

      // Save user data to Firestore on signup
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: user.email,
        createdAt: new Date().toISOString(),
      });

      alert("Signup successful!! Please log in.");
      signupSection.style.display = "none";
      loginSection.style.display = "block";
    } catch (error) {
      console.error("Signup failed:", error.message);
      alert("Signup failed. Please try again.");
    }
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      const user = userCredential.user;

      // Save user data to Firestore on login (if not already exists)
      const userDoc = await getDoc(doc(db, "users", user.email));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", user.email), {
          username: username,
          email: user.email,
          lastLogin: new Date().toISOString(),
        });
      } else {
        // Update last login timestamp
        await setDoc(
          doc(db, "users", user.email),
          {
            lastLogin: new Date().toISOString(),
          },
          { merge: true }
        );
      }

      // Login successful
      console.log("Logged in:", user);
      loginSection.style.display = "none";
      mainContent.style.display = "block";

      // Fetch assessments after a delay
      setTimeout(fetchAssessments, 1000); // Delay of 1 second (1000 milliseconds)
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Login failed. Please check your username and password.");
    }
  });

  showSignupLink.addEventListener("click", () => {
    loginSection.style.display = "none";
    signupSection.style.display = "block";
  });

  showLoginLink.addEventListener("click", () => {
    signupSection.style.display = "none";
    loginSection.style.display = "block";
  });

  let isPopupOpen = false;

  async function fetchAssessments() {
    try {
      console.log("Fetching assessments");
      let querySnapshot = await getDocs(collection(db, "assessment"));
      console.log("Assessments found");
      displayCards(querySnapshot);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
      return null;
    }
  }

  function displayCards(assessments) {
    const divCont = document.getElementById("assessment");

    let content = [];
    assessments.forEach((doc) => {
      let assessment = doc.data();
      content.push(`
        <div class="assessment-box">
          <h2 class="assessment-title">${assessment.title}</h2>
          <form action="/test/quiz/" method="get">
            <button type="button" class="btn-start" data-popup-id="${doc.id}">Start Assessment</button>
            <input type="hidden" name="quizcode" value="${doc.id}">
          </form>
        </div>
      `);
    });
    divCont.innerHTML = content.join("");

    // Add event listeners to the dynamically created buttons
    document.querySelectorAll(".btn-start").forEach((button) => {
      button.addEventListener("click", (e) =>
        openPopup(button.getAttribute("data-popup-id"), e.target.form)
      );
    });

    document.querySelectorAll(".btn-back").forEach((button) => {
      button.addEventListener("click", () => closePopup());
    });

    document.querySelectorAll(".btn-submit").forEach((button) => {
      button.addEventListener("click", () => closePopup());
    });

    console.log(assessments);
  }

  function openPopup(popupId, form) {
    if (isPopupOpen) return;

    let popupTemplate = document
      .getElementById("popup-template")
      .cloneNode(true);
    popupTemplate.style.display = "block";
    popupTemplate.id = `popup-${popupId}`;
    document.body.appendChild(popupTemplate);

    let quizCodeInput = popupTemplate.querySelector('input[name="quizcode"]');
    quizCodeInput.value = popupId;

    let submitButton = popupTemplate.querySelector(".btn-submit");
    submitButton.setAttribute("data-popup-id", popupId);
    submitButton.addEventListener("click", () => {
      form.submit();
    });

    popupTemplate
      .querySelector(".btn-back")
      .addEventListener("click", () => closePopup(popupTemplate));

    document.getElementById("overlay").style.display = "block";
    popupTemplate.classList.add("open-popup");
    document.body.classList.add("no-scroll");
    isPopupOpen = true;
  }

  function closePopup(popup) {
    document.querySelector(".open-popup").remove();
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
    isPopupOpen = false;
  }
});
