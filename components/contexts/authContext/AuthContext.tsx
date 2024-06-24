import React, { createContext, useContext, useState, ReactNode } from 'react';
import { loginUser, registerUser } from '../../../mock/UserMockDatabase';
import { UserMock } from '../../../mock/models/UserMock';
import AuthContextData from './AuthContextProps';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = ({ username, password }: UserMock): boolean => {
    const success = loginUser({ username, password });
    setIsAuthenticated(success);
    return success;
  };

  const register = ({ username, password }: UserMock): boolean => {
    return registerUser({ username, password });
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
