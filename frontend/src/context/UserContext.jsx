// src/contexts/UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();

// Provider component to wrap around your app or relevant components
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the username
export const useUser = () => useContext(UserContext);
