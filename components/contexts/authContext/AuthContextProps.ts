import { UserMock } from "../../../mock/models/UserMock";

interface AuthContextData {
    isAuthenticated: boolean;
    login: ({ username, password }: UserMock) => boolean;
    registerUser: ({ username, password }: UserMock) => boolean;
    logout: () => void;
}

export default AuthContextData;