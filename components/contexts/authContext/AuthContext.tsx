import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { createFirebaseAuthProvider } from './implements/FirebaseAuthContext';
import AuthContextDataProps from './ports/AuthContextProps';
import { createMockAuthProvider } from './implements/MockAuthContext';

const authProvider: AuthContextDataProps = createMockAuthProvider();

const AuthContext = createContext<AuthContextDataProps>(authProvider);

export const AuthProviderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(authProvider.isAuthenticated);

  useEffect(() => {
    const handleAuthChange = () => setIsAuthenticated(authProvider.isAuthenticated);
  }, []);

  return (
    <AuthContext.Provider value={authProvider}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
