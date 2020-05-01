import React, { useState} from "react";
import { themes, ThemeContext } from "./theme-context";
import Toolbar from "./toolbar";

export default function BasicContextHook() {
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}