import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9rTEfKMQby5xgyuiBFAGQPhR4JTEto8M",
    authDomain: "sms-gateway-b2986.firebaseapp.com",
    projectId: "sms-gateway-b2986",
    storageBucket: "sms-gateway-b2986.appspot.com",
    messagingSenderId: "403699637120",
    appId: "1:403699637120:web:ba2d3853a036e44e293f65"
};
  
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);