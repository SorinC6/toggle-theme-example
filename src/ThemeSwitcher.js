import React, { useContext } from "react";
import { AppContext } from "./AppProvider";

const ThemeSwitcher = () => {
  const { themeMode } = useContext(AppContext);
  console.log("THEME MODE: ", themeMode);
  return <div></div>;
};

export default ThemeSwitcher;
