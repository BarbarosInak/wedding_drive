// This file is auto-generated during deploy from GitHub Secrets.
// Do NOT put real values here in the repo — the workflow overwrites this file at build time.

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDrZRcICwduKMlZLNyi1ujIvWFGndMOu_c",
    authDomain: "wedding-e776e.firebaseapp.com",
    projectId: "wedding-e776e",
    storageBucket: "wedding-e776e.firebasestorage.app",
    messagingSenderId: "553319615482",
    appId: "1:553319615482:web:68eb05d2b37d6dd55c7243",
    measurementId: "G-N1Q96QQ1SC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
