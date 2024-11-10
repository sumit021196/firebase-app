// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDVYWEQkWYdep4PK1iHGWcBZSKivTh8nNA",
    authDomain: "hospital-management-57123.firebaseapp.com",
    databaseURL: "https://hospital-management-57123-default-rtdb.firebaseio.com",
    projectId: "hospital-management-57123",
    storageBucket: "hospital-management-57123.firebasestorage.app",
    messagingSenderId: "957858705396",
    appId: "1:957858705396:web:59b16983b8a7cb6ab5d3a1",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
