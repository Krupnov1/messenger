import { initializeApp } from "firebase/app";
import { getAuth, 
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut 
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBT_tS9nv7JQ87-LaQXWI0LZFwtCO7g934",
  authDomain: "r2103-d4d2f.firebaseapp.com",
  projectId: "r2103-d4d2f",
  storageBucket: "r2103-d4d2f.appspot.com",
  messagingSenderId: "808222871159",
  appId: "1:808222871159:web:7ef3066aabf741f3b14072"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};

export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = async () => {
    await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");

export const chatsRef = ref(db, "chats");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getChatRefByIdName = (id) => ref(db, `chats/${id}/name`);

export const messagesRef = ref(db, "messages");
export const getMessagesRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMessagesListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);
