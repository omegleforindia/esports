// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL_IHNjUTg5M4c88I5GqP7jYqvECkeVCQ",
  authDomain: "esports-d9e3d.firebaseapp.com",
  projectId: "esports-d9e3d",
  storageBucket: "esports-d9e3d.firebasestorage.app",
  messagingSenderId: "64450342105",
  appId: "1:64450342105:web:315e6bc74ea7f94df3a2c8",
  measurementId: "G-XY8PXJ0EN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
