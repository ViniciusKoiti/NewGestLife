import { UserMock } from "./models/UserMock";

let users: UserMock[] = [];

export const registerUser = ({ username, password }: UserMock): boolean => {
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return false;
  }
  users.push({ username, password });
  return true;
};

export const loginUser = ({ username, password }: UserMock): boolean => {
  const user = users.find(user => user.username === username && user.password === password);
  return !!user;
};

export const getUsers = (): UserMock[] => {
  return users;
};
