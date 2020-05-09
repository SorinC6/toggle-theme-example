import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("lightTheme");

  const value = { themeMode };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
