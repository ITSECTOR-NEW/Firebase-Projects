//include this file to use firebase config. it is reusable file
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  writeBatch,
  setDoc,
  addDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

// Initialize Firebase app
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
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const storage = getStorage(app);
const storageRef = ref(storage);

window.app = app;
window.db = db;
window.auth = auth;
window.provider = provider;
// window.storage = storage;
// window.storageRef = storageRef;


Object.assign(window, {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
});

Object.assign(window, {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  query,
  writeBatch,
  where,
  doc,
  setDoc,
  addDoc,
  updateDoc,
});

Object.assign(window, {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
});
