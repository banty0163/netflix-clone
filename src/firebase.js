// import { initializeApp } from "firebase/app";

// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
// import { toast } from "react-toastify";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const db = getFirestore(app);

// const signUp = async ({ name, email, password }) => {
//   try {
//     const resp = await createUserWithEmailAndPassword(auth, email, password);
//     const user = resp.user;
//     await addDoc(collection(db, "users"), {
//       uid: user.uid,
//       name,
//       email,
//       authProvider: "local",
//     });
//   } catch (error) {
//     console.log("Signup error", error);
//     toast.error(error.code);
//   }
// };

// const login = async ({ email, password }) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     toast.error(error.code);
//   }
// };

// const logout = async () => {
//   try {
//     signOut(auth);
//   } catch (error) {
//     toast.error(error.code);
//   }
// };

// export { auth, db, logout, signOut, signUp, login };

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async ({ name, email, password }) => {
  const id = toast.loading("Creating account...");
  try {
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    const user = resp.user;
    await addDoc(collection(db, "user"), {
      //some error i think
      uid: user.uid,
      name,
      email,
      authProvider: "local",
    });
    // here is the toast popup
    toast.update(id, {
      render: "Signup successful!",
      type: "success",
      isLoading: false,
      autoClose: 1000,
    });
  } catch (error) {
    console.log("Signup error", error);
    toast.update(id, {
      render: error.code,
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  }
};

const login = async ({ email, password }) => {
  const id = toast.loading("Logging in...");
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.update(id, {
      render: "Login successful!",
      type: "success",
      isLoading: false,
      autoClose: 1000,
    });
  } catch (error) {
    toast.update(id, {
      render: error.code,
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  }
};

const logout = async () => {
  const id = toast.loading("Logging out...");
  try {
    await signOut(auth);
    toast.update(id, {
      render: "Logged out successfully!",
      type: "success",
      isLoading: false,
      autoClose: 1000,
    });
  } catch (error) {
    toast.update(id, {
      render: error.code,
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  }
};

export { auth, db, logout, signOut, signUp, login };
