import React, { useContext } from "react";
import { ThemeContext } from './theme-context';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }} onClick={toggleTheme}>{"<->"}</button>
  );
}