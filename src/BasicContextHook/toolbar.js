import React from "react";
import ThemedButton from './themed-button';

export default function Toolbar() {
  return (
    <>
      { ["File", "Edition", "Tools", "About"].map((menuItem, index) => <ThemedButton key={index} text={menuItem} />) }
      <SwitchTheme />
    </>
  );
}

function SwitchTheme() {
  return <button onClick={() => {}}>Switch theme</button>
}