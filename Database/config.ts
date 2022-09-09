// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBKa_sxfk286ObAS67ygcXD4QOdhK4DYFU",
	authDomain: "eccomerce-app-79ed4.firebaseapp.com",
	projectId: "eccomerce-app-79ed4",
	storageBucket: "eccomerce-app-79ed4.appspot.com",
	messagingSenderId: "57273621696",
	appId: "1:57273621696:web:a0dd2c1fba30b663c9a125",
	measurementId: "G-Z252CR1NGS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const cloudStorage = getStorage();
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth, cloudStorage };
