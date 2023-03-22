import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIlABu4wuJM3yqc1Uq_U3cYkGFLgwRrco",
  authDomain: "musicapp-cc057.firebaseapp.com",
  projectId: "musicapp-cc057",
  storageBucket: "musicapp-cc057.appspot.com",
  messagingSenderId: "233638314138",
  appId: "1:233638314138:web:c6af9857ccd23951331f23",
  measurementId: "G-1LTVPM9VKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export default app;