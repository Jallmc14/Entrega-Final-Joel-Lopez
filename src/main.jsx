import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXNRiWTzzVAwW8n_eNgoKwklOuCW4NoF4",
  authDomain: "entrega-final-curso-reac-fbbe9.firebaseapp.com",
  projectId: "entrega-final-curso-reac-fbbe9",
  storageBucket: "entrega-final-curso-reac-fbbe9.appspot.com",
  messagingSenderId: "498683368908",
  appId: "1:498683368908:web:c14d511bb850de853c7969"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)


