import { useState } from 'react';

export const useUserStorage = () => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const saveUser = (firstName, lastName, emailAddress) => {
    const newUser = { firstName, lastName, emailAddress };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return { user, saveUser, clearUser };
};