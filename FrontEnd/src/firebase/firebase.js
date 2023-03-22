import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'

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
const app =getApps.length > 0 ? getApp() : initializeApp(firebaseConfig) ;
const storage = getStorage(app)
export const Auth = getAuth(app);
export {app,storage}