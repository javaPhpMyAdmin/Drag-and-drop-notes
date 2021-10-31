import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAi0O7T2G0-1DflojZzTEEUWsnEBsNJh4c",
    authDomain: "drag-and-drop-notes.firebaseapp.com",
    projectId: "drag-and-drop-notes",
    storageBucket: "drag-and-drop-notes.appspot.com",
    messagingSenderId: "1042833363146",
    appId: "1:1042833363146:web:c780be26c61618d6a9a433"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
