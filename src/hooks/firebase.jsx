import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDWaD8zr9oImA_q5TW3XrY7LReR7c5Z3zE",
    authDomain: "sammi-auth-49c4f.firebaseapp.com",
    projectId: "sammi-auth-49c4f",
    storageBucket: "sammi-auth-49c4f.appspot.com",
    messagingSenderId: "277432970056",
    appId: "1:277432970056:web:6299ebdb16e5817bace17d",
    measurementId: "G-0X22Y5PC9J"
};

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)