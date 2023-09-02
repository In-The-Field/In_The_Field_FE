import React, { createContext, useContext, useState } from 'react';


const ToggleSaveContext = createContext();

export const useToggleSave = () => {
  return useContext(ToggleSaveContext);
};

export const ToggleSaveProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <ToggleSaveContext.Provider value={{ isToggled, toggle }}>
      {children}
    </ToggleSaveContext.Provider>
  );
};