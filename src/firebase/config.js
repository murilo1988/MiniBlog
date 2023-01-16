import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDwQW7PZ6lDdYLQ53_oWjqjxIuab2v9wV0",
    authDomain: "miniblog-b5d51.firebaseapp.com",
    projectId: "miniblog-b5d51",
    storageBucket: "miniblog-b5d51.appspot.com",
    messagingSenderId: "857999396857",
    appId: "1:857999396857:web:929cf5aa7711d6e885b728",
};

const app = initializeApp(firebaseConfig);

const db = getFireStore(app);

export { db };
