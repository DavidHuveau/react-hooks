import React from "react";
import { themes, ThemeContext } from "./theme-context";
import Toolbar from "./toolbar";

export default function BasicContextHook() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}