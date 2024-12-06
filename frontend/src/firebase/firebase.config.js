// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyBtCpcDnViVnRRlPcWNT0oPvEl2O-EtZHI",
        authDomain: "book-store--mern-app.firebaseapp.com",
        projectId: "book-store--mern-app",
        storageBucket: "book-store--mern-app.firebasestorage.app",
        messagingSenderId: "829303289047",
        appId: "1:829303289047:web:96862cfff0a740b27a6c92"
};
      




// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);