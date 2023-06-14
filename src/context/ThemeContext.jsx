/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be defined within the ThmeProvider");
  }

  return context;
};

ThemeContextProvider.propTypes = {
  children: PropTypes.any,
};

export default ThemeContext;
