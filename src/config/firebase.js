import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAgTDMQu-uq1h-lyk-YHQA3dfVPdHcR9b0",
  authDomain: "buildmastershub.firebaseapp.com",
  projectId: "buildmastershub",
  storageBucket: "buildmastershub.appspot.com",
  messagingSenderId: "857354851229",
  appId: "1:857354851229:web:6be81e6dcc3f09500d1574",
  measurementId: "G-30B5368YCQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);