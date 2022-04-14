// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeUDd5zd6i7rKRh2HAVx_COd0BfhEoI_A",
    authDomain: "genius-car-services-90a94.firebaseapp.com",
    projectId: "genius-car-services-90a94",
    storageBucket: "genius-car-services-90a94.appspot.com",
    messagingSenderId: "813381303150",
    appId: "1:813381303150:web:9edd1b93ddcf51b8a2df7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;