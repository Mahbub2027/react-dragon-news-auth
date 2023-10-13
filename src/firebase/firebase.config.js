// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBITd44VkmLCIZiE8jSHbX9c-YuGAgoWm0",
  authDomain: "react-dragon-news-auth-d072c.firebaseapp.com",
  projectId: "react-dragon-news-auth-d072c",
  storageBucket: "react-dragon-news-auth-d072c.appspot.com",
  messagingSenderId: "399655250732",
  appId: "1:399655250732:web:86d1f5d818cdc6f5f69a89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;