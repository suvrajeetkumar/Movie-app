import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext({ isDarkMode: false, toggleTheme: () => {
    console.log("toggle");
  } });

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
