import UserMock from "../../../../mock/models/UserMock";

interface AuthContextDataProps {
    isAuthenticated: boolean;
    login: ({ username, password }: UserMock) => Promise<boolean>;
    registerUser: ({ username, password }: UserMock) => Promise<boolean>;
    logout: () => void;
    subscribeToAuthChanges : (callback: () => void) => void;
    unsubscribeFromAuthChanges : () => void;
}

export default AuthContextDataProps;