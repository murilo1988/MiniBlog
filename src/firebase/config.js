import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCwthG4hndn7fNcOx3hfq1zWVZpcy37seQ",

    authDomain: "miniblog-ae043.firebaseapp.com",

    projectId: "miniblog-ae043",

    storageBucket: "miniblog-ae043.appspot.com",

    messagingSenderId: "321144111352",

    appId: "1:321144111352:web:7a73801f2a1660ee05fb0d",

    measurementId: "G-1DPS56QZDH",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
