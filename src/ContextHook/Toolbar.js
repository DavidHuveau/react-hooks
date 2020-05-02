import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { ThemedButton } from './ThemedButton';

export function Toolbar() {
  return (
    <>
      { ["File", "Edition", "Tools", "About"].map((menuItem, index) => <ThemedButton key={index} text={menuItem} />) }
      <ThemeSwitch />
    </>
  );
}