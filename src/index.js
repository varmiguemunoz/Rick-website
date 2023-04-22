import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7JOn0vFjdncfVMY2vMy4rj8p5UoEP7S4",
  authDomain: "rick-website-b5e06.firebaseapp.com",
  projectId: "rick-website-b5e06",
  storageBucket: "rick-website-b5e06.appspot.com",
  messagingSenderId: "1001892123699",
  appId: "1:1001892123699:web:bbcf1c38b7212ed4183f46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
