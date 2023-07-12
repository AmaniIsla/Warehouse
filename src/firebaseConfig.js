// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEkTn3yakHh1MdM5ezjOksUenwAfOn1ug",
  authDomain: "warehouse-dashboard-dbc15.firebaseapp.com",
  projectId: "warehouse-dashboard-dbc15",
  storageBucket: "warehouse-dashboard-dbc15.appspot.com",
  messagingSenderId: "418121749706",
  appId: "1:418121749706:web:49f5a6a8a4975d03bfd033",
  measurementId: "G-HGPVEXWX8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, auth }
