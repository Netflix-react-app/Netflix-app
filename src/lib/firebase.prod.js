import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

// import config here

const config = {
  apiKey: "AIzaSyD1RPvUWZxcE0-1Zqq7uBndAIokDU4adEw",
  authDomain: "netflix-76734.firebaseapp.com",
  projectId: "netflix-76734",
  storageBucket: "netflix-76734.appspot.com",
  messagingSenderId: "790419398289",
  appId: "1:790419398289:web:374a62b839f685b0756930",
};

const firebase = Firebase.initializeApp(config);

// After populating the database of 'Cloud Firestore'
// re-comment out this seedDatabase(firebase) so that you wont get duplicate data

// seedDatabase(firebase);

export { firebase };
