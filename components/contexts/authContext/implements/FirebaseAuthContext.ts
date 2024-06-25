import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import AuthContextDataProps from '../ports/AuthContextProps';
import UserMock from '../../../../mock/models/UserMock';
import { auth } from '../../../../infra/firebase';

export const createFirebaseAuthProvider = (): AuthContextDataProps => {
  let isAuthenticated = false;
  let unsubscribe: (() => void) | undefined;

  onAuthStateChanged(auth, (user) => {
    isAuthenticated = !!user;
  });

  const subscribeToAuthChanges = (callback: () => void) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      isAuthenticated = !!user;
      callback();
    });
  };

  const unsubscribeFromAuthChanges = () => {
    if (unsubscribe) {
      unsubscribe();
    }
  };

  const login = async ({ username, password }: UserMock): Promise<boolean> => {
    try {
      await signInWithEmailAndPassword(auth, username, password);
      isAuthenticated = true;
      return true;
    } catch (error) {
      console.error('Login error', error);
      return false;
    }
  };

  const registerUser = async ({ username, password }: UserMock): Promise<boolean> => {
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
      isAuthenticated = false;
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  return {
    isAuthenticated,
    login,
    registerUser,
    logout,
    subscribeToAuthChanges,
    unsubscribeFromAuthChanges
  };
};
