
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCmRC8mBVjUY07_LXd2PFLDwTEgXMuOb2c",
    authDomain: "glowbuild-80f15.firebaseapp.com",
    projectId: "glowbuild-80f15",
    storageBucket: "glowbuild-80f15.firebasestorage.app",
    messagingSenderId: "1082758690849",
    appId: "1:1082758690849:web:1a74aa2a89c3b13aef8b60",
    measurementId: "G-50PD2GHBQJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


