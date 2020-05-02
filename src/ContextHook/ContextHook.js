import React, { useState} from "react";
import { themes, ThemeContext } from "./ThemeContext";
import { Toolbar } from "./Toolbar";

export function ContextHook() {
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