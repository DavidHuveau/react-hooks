import React from "react";
import ThemeSwitch from "./theme-switch";
import ThemedButton from './themed-button';

export default function Toolbar() {
  return (
    <>
      { ["File", "Edition", "Tools", "About"].map((menuItem, index) => <ThemedButton key={index} text={menuItem} />) }
      <ThemeSwitch />
    </>
  );
}