import UserMock from "../../../../mock/models/UserMock";
import AuthContextDataProps from "../ports/AuthContextProps";

const users: UserMock[] = [];

export const createMockAuthProvider = (): AuthContextDataProps => {
  let isAuthenticated = false;

  const login = async ({ username, password }: UserMock): Promise<boolean> => {
    const user = users.find(user => user.username === username && user.password === password);
    isAuthenticated = !!user;
    return isAuthenticated;
  };

  const registerUser = async ({ username, password }: UserMock): Promise<boolean> => {
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return false;
    }
    users.push({ id: users.length + 1, username, password });
    return true;
  };

  const logout = async (): Promise<void> => {
    isAuthenticated = false;
  };

  const subscribeToAuthChanges = (callback: () => void) => {
    // No-op
  };

  const unsubscribeFromAuthChanges = () => {
    // No-op
  };


  return {
    isAuthenticated,
    login,
    registerUser,
    logout,
    subscribeToAuthChanges,
    unsubscribeFromAuthChanges,
  };
};
