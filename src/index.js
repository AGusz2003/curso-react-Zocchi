import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/App.css" 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLDnoPtHK0BM5srSnFFHhDUDyDjh1jEV8",
  authDomain: "proyecto-react-zocchi.firebaseapp.com",
  projectId: "proyecto-react-zocchi",
  storageBucket: "proyecto-react-zocchi.appspot.com",
  messagingSenderId: "49565728311",
  appId: "1:49565728311:web:9640cdbc0a589b58a009b2",
  measurementId: "G-S0QT6FZYLS"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
  
