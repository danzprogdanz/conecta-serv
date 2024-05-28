 import {signInAccess, signOutAccess, signUpAccess} from '../dataAccess/auth';
import { getAuth, Auth, User, onAuthStateChanged } from "firebase/auth";
import { FirebaseApp } from '@firebase/app-types';
import { db } from '../../services/firebase/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

export const initializeAuth = (app: FirebaseApp): Auth => {
  return getAuth(app);
};

export const signInAction = async (email: string, password: string) => {
  try {
    await signInAccess(email, password);
  } catch (error) {
    
    
    throw error;
  }
};

  export const signUpAction = async (email: string, password: string, userInfoData: any) => {
    try {
      const newUser = await signUpAccess(email, password)
      console.log('New user:', newUser);
      console.log('userInfoData', userInfoData);

      if (newUser) {
        const userCollection = collection(db, 'users');

        const userData = {
          email: newUser.email,
          userType: userInfoData.userType,
          name: userInfoData.name,
          lastName: userInfoData.lastName,
          cellNumber: userInfoData.cellNumber,
          organization: userInfoData.organization,
          adressNumber: userInfoData.adressNumber,
          street: userInfoData.street,
          district: userInfoData.district,
          complement: userInfoData.complement,
          description: userInfoData.description,
          tagsList: userInfoData.tagsList
        };
  
        const userDoc = doc(userCollection, newUser.uid);
        
        setDoc(userDoc, userData)
          .then(() => {
            console.log('Documento salvo com sucesso!');
          })
          .catch((error) => {
            console.error('Erro ao salvar o doc: ', error);
          });
      }
    } catch (error) {

      throw error; 
    }
  };

export const signOutAction = async (): Promise<void> => {
  try {
    await signOutAccess();
  } catch (error) {
    // Handle error here
    console.error("Error signing out:", error);
  }
}

export const onAuthStateChangedListener = (auth: Auth, callback: (user: User | null) => void): void => {
  onAuthStateChanged(auth, callback);
};
