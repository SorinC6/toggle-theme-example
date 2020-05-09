import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("lightTheme");

  const value = { themeMode };
  const costumTheme = theme[themeMode];

  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={costumTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
