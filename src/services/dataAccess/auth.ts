import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";

import { app } from '../../services/firebase/firebase';

const auth = getAuth(app);

export const signUpAccess = async (email: string, password: string): Promise<User | undefined> => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

export const signInAccess = async (email: string, password: string): Promise<User | undefined> => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

export const signOutAccess = async (): Promise<void> => {
    await signOut(auth);
};

export const onAuthStateChangedListener = (callback: (user: User | null) => void): void => {
    onAuthStateChanged(auth, callback);
};


