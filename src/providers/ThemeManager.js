import React, { useState, useEffect } from "react" ;
import styled, { ThemeProvider }  from "styled-components" ;

import Themes from "../styles/Themes.js" ;

const defaultState = {
  theme: "dark",
  toggleTheme: () => {}
};

export const ThemeContext = React.createContext(defaultState);

const ThemeManager = ({ children }) => {

  // Initiate state variable `theme`
  const [theme, setTheme] = useState("light") ;

  // Get initial theme setting from localStorage or default to dark
  useEffect(() => {
    setTheme(localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : "dark");
  });
  
  const getNextTheme = (prevTheme) => {
    return prevTheme == "dark" ? "light" : "dark" ;
  };

  const toggleTheme = () => {
    setTheme(getNextTheme(theme));
    // Store user's choice in localStorage
    localStorage.setItem("theme", JSON.stringify(getNextTheme(theme)));
  };
  
  return (
    <ThemeContext.Provider 
      value={{
        theme,
        toggleTheme,
        getNextTheme
      }}
    >
      <ThemeProvider theme={theme === "dark" ? Themes.dark : Themes.light}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeManager ;
